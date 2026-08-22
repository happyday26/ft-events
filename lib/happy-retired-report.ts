import {
  ESTATE_REPORT_DEFAULT_DAYS,
  sinceDateForDays,
} from "@/lib/estate-listing-report";

export const HAPPY_RETIRED_REPORT_DEFAULT_DAYS = ESTATE_REPORT_DEFAULT_DAYS;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const WP_EVENTS_URL =
  "https://happy-retired.com/wp-json/wp/v2/tribe_events";
const TRIBE_EVENT_URL =
  "https://happy-retired.com/wp-json/tribe/events/v1/events";

export interface HappyRetiredEvent {
  id: number;
  slug: string;
  title: string;
  venue: string;
  category: string;
  showDates: string;
  listedDate: string;
  listedAt: string;
  url: string;
  status: string;
}

export interface HappyRetiredReport {
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: { total: number };
  events: HappyRetiredEvent[];
  notes: string[];
}

function listedDateFromWpLocal(dateStr: string): string {
  const m = String(dateStr).match(/(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : "";
}

function formatShowDates(start: string, end: string): string {
  const s = start ? start.slice(0, 10) : "";
  const e = end ? end.slice(0, 10) : "";
  if (!s && !e) return "";
  if (s && e && s !== e) return `${s} → ${e}`;
  return s || e;
}

function venueName(venue: unknown): string {
  if (!venue || Array.isArray(venue) || typeof venue !== "object") return "";
  const v = venue as { venue?: string; address?: string };
  return (v.venue || v.address || "").trim();
}

async function mapPool<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  );
  return results;
}

interface WpEventLite {
  id: number;
  date: string;
  slug: string;
  link: string;
  title?: { rendered?: string };
}

interface TribeEventDetail {
  id: number;
  title?: string;
  slug?: string;
  date?: string;
  url?: string;
  start_date?: string;
  end_date?: string;
  cost?: string;
  status?: string;
  venue?: unknown;
  categories?: Array<{ name?: string }>;
}

async function fetchPublishedInWindow(
  since: string,
  until: string,
): Promise<WpEventLite[]> {
  const out: WpEventLite[] = [];
  // WP `after` is exclusive lower bound; use day before since in HK local wall time.
  const [y, m, d] = since.split("-").map(Number);
  const before = new Date(Date.UTC(y, m - 1, d));
  before.setUTCDate(before.getUTCDate() - 1);
  const after = before.toISOString().slice(0, 10) + "T16:00:00";

  for (let page = 1; page <= 20; page++) {
    const url = `${WP_EVENTS_URL}?per_page=50&page=${page}&orderby=date&order=desc&status=publish&after=${encodeURIComponent(after)}`;
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      throw new Error(`Happy Retired events API failed (${res.status})`);
    }
    const batch = (await res.json()) as WpEventLite[];
    if (!Array.isArray(batch) || batch.length === 0) break;

    for (const event of batch) {
      const listedDate = listedDateFromWpLocal(event.date);
      if (listedDate >= since && listedDate <= until) out.push(event);
    }

    const oldest = listedDateFromWpLocal(batch[batch.length - 1]?.date || "");
    if (oldest && oldest < since) break;
    const totalPages = Number(res.headers.get("X-WP-TotalPages") || "1");
    if (page >= totalPages) break;
  }

  return out;
}

async function fetchTribeDetail(id: number): Promise<TribeEventDetail | null> {
  try {
    const res = await fetch(`${TRIBE_EVENT_URL}/${id}`, {
      headers: { "User-Agent": UA, Accept: "application/json" },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    return (await res.json()) as TribeEventDetail;
  } catch {
    return null;
  }
}

export { sinceDateForDays };

export async function buildHappyRetiredReport(
  days = HAPPY_RETIRED_REPORT_DEFAULT_DAYS,
): Promise<HappyRetiredReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : HAPPY_RETIRED_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Newly listed = WordPress publish date (HK) for Happy Retired lessons & activities.",
  ];

  const published = await fetchPublishedInWindow(since, until);
  const details = await mapPool(published, 6, (event) =>
    fetchTribeDetail(event.id),
  );

  const events: HappyRetiredEvent[] = published.map((event, i) => {
    const detail = details[i];
    const listedDate = listedDateFromWpLocal(event.date);
    const title =
      detail?.title ||
      event.title?.rendered?.replace(/<[^>]+>/g, "").trim() ||
      event.slug;
    const categories = (detail?.categories || [])
      .map((c) => c.name || "")
      .filter(Boolean);

    return {
      id: event.id,
      slug: detail?.slug || event.slug,
      title,
      venue: venueName(detail?.venue),
      category: categories.join(" · "),
      showDates: formatShowDates(
        detail?.start_date || "",
        detail?.end_date || "",
      ),
      listedDate,
      listedAt: (() => {
        const raw = event.date.includes("T")
          ? `${event.date}+08:00`
          : `${event.date.replace(" ", "T")}+08:00`;
        const dt = new Date(raw);
        return Number.isNaN(dt.getTime())
          ? new Date().toISOString()
          : dt.toISOString();
      })(),
      url: detail?.url || event.link,
      status: detail?.cost || detail?.status || "",
    };
  });

  events.sort((a, b) => {
    if (a.listedAt !== b.listedAt) return a.listedAt < b.listedAt ? 1 : -1;
    return a.title.localeCompare(b.title, "zh-Hant");
  });

  if (events.length === 0) {
    notes.push("No lessons or activities published in this window.");
  }

  return {
    since,
    until,
    days: safeDays,
    generatedAt: new Date().toISOString(),
    counts: { total: events.length },
    events,
    notes,
  };
}

import {
  ESTATE_REPORT_DEFAULT_DAYS,
  sinceDateForDays,
} from "@/lib/estate-listing-report";

export const POPTICKET_REPORT_DEFAULT_DAYS = ESTATE_REPORT_DEFAULT_DAYS;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const SITEMAP_URL = "https://www.popticket.hk/sitemap/events";

export interface PopticketEvent {
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

export interface PopticketReport {
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: { total: number };
  events: PopticketEvent[];
  notes: string[];
}

function hkYmdFromDate(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function decodeXml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

interface SitemapEntry {
  slug: string;
  url: string;
  listedAt: string;
  listedDate: string;
}

function parseEventsSitemap(xml: string): SitemapEntry[] {
  const out: SitemapEntry[] = [];
  const blocks = xml.match(/<url>[\s\S]*?<\/url>/gi) ?? [];
  for (const block of blocks) {
    const loc = decodeXml(
      block.match(/<loc>([^<]+)<\/loc>/i)?.[1]?.trim() || "",
    );
    const lastmod =
      block.match(/<lastmod>([^<]+)<\/lastmod>/i)?.[1]?.trim() || "";
    const m = loc.match(/^https:\/\/www\.popticket\.hk\/event\/([^/]+)$/i);
    if (!m || !lastmod) continue;
    const listedAt = new Date(lastmod);
    if (Number.isNaN(listedAt.getTime())) continue;
    out.push({
      slug: m[1],
      url: loc,
      listedAt: listedAt.toISOString(),
      listedDate: hkYmdFromDate(listedAt),
    });
  }
  return out;
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
  const workers = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => worker(),
  );
  await Promise.all(workers);
  return results;
}

interface EventBrief {
  title: string;
  venue: string;
  category: string;
  showDates: string;
  status: string;
}

async function fetchEventBrief(slug: string): Promise<EventBrief | null> {
  try {
    const res = await fetch(`https://www.popticket.hk/event/${slug}`, {
      headers: { "User-Agent": UA, Accept: "text/html" },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const html = await res.text();
    const raw = html.match(
      /id=["']brief["'][^>]*>\s*([\s\S]*?)\s*<\/script>/i,
    )?.[1];
    if (!raw) return null;
    const brief = JSON.parse(raw) as {
      event?: {
        title?: string;
        date?: string;
        status?: string;
        venues?: Array<{ name?: string }>;
        categories?: Array<{ name?: string }>;
      };
    };
    const event = brief.event;
    if (!event) return null;
    return {
      title: event.title || slug,
      venue: event.venues?.[0]?.name || "",
      category: event.categories?.[0]?.name || "",
      showDates: event.date || "",
      status: event.status || "",
    };
  } catch {
    return null;
  }
}

export { sinceDateForDays };

export async function buildPopticketReport(
  days = POPTICKET_REPORT_DEFAULT_DAYS,
): Promise<PopticketReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : POPTICKET_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Newly listed ≈ sitemap lastmod date (HK). Updates to existing programmes can also appear.",
  ];

  const sitemapRes = await fetch(SITEMAP_URL, {
    headers: { "User-Agent": UA, Accept: "application/xml,text/xml,*/*" },
    cache: "no-store",
    signal: AbortSignal.timeout(20000),
  });
  if (!sitemapRes.ok) {
    throw new Error(`Popticket sitemap failed (${sitemapRes.status})`);
  }
  const sitemapXml = await sitemapRes.text();
  const entries = parseEventsSitemap(sitemapXml).filter(
    (e) => e.listedDate >= since && e.listedDate <= until,
  );

  entries.sort((a, b) => {
    if (a.listedAt !== b.listedAt) return a.listedAt < b.listedAt ? 1 : -1;
    return a.slug.localeCompare(b.slug);
  });

  const briefs = await mapPool(entries, 6, (entry) =>
    fetchEventBrief(entry.slug),
  );

  const events: PopticketEvent[] = entries.map((entry, i) => {
    const brief = briefs[i];
    return {
      slug: entry.slug,
      title: brief?.title || entry.slug,
      venue: brief?.venue || "",
      category: brief?.category || "",
      showDates: brief?.showDates || "",
      listedDate: entry.listedDate,
      listedAt: entry.listedAt,
      url: entry.url,
      status: brief?.status || "",
    };
  });

  if (entries.length === 0) {
    notes.push("No programmes with sitemap lastmod in this window.");
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

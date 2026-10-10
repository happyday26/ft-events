import {
  ESTATE_REPORT_DEFAULT_DAYS,
  sinceDateForDays,
} from "@/lib/estate-listing-report";

export const ART_MATE_REPORT_DEFAULT_DAYS = ESTATE_REPORT_DEFAULT_DAYS;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const HOME_URLS = [
  "https://www.art-mate.net/",
  "https://www.art-mate.net/hk",
];

export interface ArtMateEvent {
  id: string;
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

export interface ArtMateReport {
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: { total: number };
  events: ArtMateEvent[];
  notes: string[];
}

function decodeHtml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function compactToYmd(compact: string): string {
  return `${compact.slice(0, 4)}-${compact.slice(4, 6)}-${compact.slice(6, 8)}`;
}

function listedAtFromStamp(ymd: string, hms?: string): string {
  const hh = hms?.slice(0, 2) ?? "00";
  const mm = hms?.slice(2, 4) ?? "00";
  const ss = hms?.slice(4, 6) ?? "00";
  const iso = new Date(`${ymd}T${hh}:${mm}:${ss}+08:00`);
  return Number.isNaN(iso.getTime()) ? `${ymd}T00:00:00.000Z` : iso.toISOString();
}

interface HomepageCard {
  id: string;
  title: string;
  showDates: string;
  listedDate: string;
  listedAt: string;
  url: string;
}

function parseHomepageCards(html: string): HomepageCard[] {
  const out: HomepageCard[] = [];
  const seen = new Set<string>();
  const blocks = html.matchAll(
    /<div class='database_card event_item[\s\S]{0,4000}/gi,
  );

  for (const match of blocks) {
    const chunk = match[0];
    const href =
      chunk.match(
        /href='(https:\/\/www\.art-mate\.net\/doc\/\d+[^']*)'/,
      )?.[1] ||
      chunk.match(/href='(\/doc\/\d+[^']*)'/)?.[1] ||
      "";
    const id = href.match(/\/doc\/(\d+)/)?.[1] || "";
    if (!id || seen.has(id)) continue;

    const stamp = chunk.match(
      /uploads\/artmate\/\d{6}\/(?:thumbnail\/)?(\d{8})_(\d{6})_/,
    );
    if (!stamp) continue;

    const listedDate = compactToYmd(stamp[1]);
    const title =
      decodeHtml(chunk.match(/title='([^']+)'/)?.[1] || "") || `doc/${id}`;
    const showDates = decodeHtml(
      chunk.match(/database_card_date[^']*'>([^<]*)/)?.[1] || "",
    );

    seen.add(id);
    out.push({
      id,
      title,
      showDates,
      listedDate,
      listedAt: listedAtFromStamp(listedDate, stamp[2]),
      url: `https://www.art-mate.net/doc/${id}`,
    });
  }

  return out;
}

function mergeCards(pages: HomepageCard[][]): HomepageCard[] {
  const byId = new Map<string, HomepageCard>();
  for (const cards of pages) {
    for (const card of cards) {
      const prev = byId.get(card.id);
      if (!prev || prev.listedAt < card.listedAt) byId.set(card.id, card);
    }
  }
  return [...byId.values()];
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
  venue: string;
  category: string;
  showDates: string;
}

async function fetchEventBrief(id: string): Promise<EventBrief | null> {
  try {
    const res = await fetch(`https://www.art-mate.net/doc/${id}`, {
      headers: { "User-Agent": UA, Accept: "text/html" },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const html = await res.text();
    const category = decodeHtml(
      html.match(/<span class='database_tag_item'>([^<]+)<\/span>/)?.[1] ||
        "",
    );
    const venue = decodeHtml(
      html.match(
        /venue_icon[\s\S]*?<\/span>\s*<span class='dx_cell[^']*'>(?:<a[^>]*>)?([^<]+)/,
      )?.[1] || "",
    );
    const showDates = decodeHtml(
      html.match(
        /venue_icon[\s\S]*?venue_icon[\s\S]*?<span class='dx_cell dx_cell_wf1[^']*'>([^<]+)</,
      )?.[1] || "",
    );
    return { venue, category, showDates };
  } catch {
    return null;
  }
}

export { sinceDateForDays };

export async function buildArtMateReport(
  days = ART_MATE_REPORT_DEFAULT_DAYS,
): Promise<ArtMateReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : ART_MATE_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Newly listed ≈ homepage poster upload date (HK). Only programmes currently featured on art-mate.net.",
  ];

  const homePages = await Promise.all(
    HOME_URLS.map(async (url) => {
      const res = await fetch(url, {
        headers: { "User-Agent": UA, Accept: "text/html" },
        cache: "no-store",
        signal: AbortSignal.timeout(20000),
      });
      if (!res.ok) {
        throw new Error(`art-mate.net homepage failed (${res.status})`);
      }
      return parseHomepageCards(await res.text());
    }),
  );

  const cards = mergeCards(homePages).filter(
    (card) => card.listedDate >= since && card.listedDate <= until,
  );

  cards.sort((a, b) => {
    if (a.listedAt !== b.listedAt) return a.listedAt < b.listedAt ? 1 : -1;
    return a.id.localeCompare(b.id);
  });

  const briefs = await mapPool(cards, 4, (card) => fetchEventBrief(card.id));

  const events: ArtMateEvent[] = cards.map((card, i) => {
    const brief = briefs[i];
    return {
      id: card.id,
      slug: card.id,
      title: card.title,
      venue: brief?.venue || "",
      category: brief?.category || "",
      showDates: brief?.showDates || card.showDates,
      listedDate: card.listedDate,
      listedAt: card.listedAt,
      url: card.url,
      status: "",
    };
  });

  if (events.length === 0) {
    notes.push("No featured programmes with a poster upload date in this window.");
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

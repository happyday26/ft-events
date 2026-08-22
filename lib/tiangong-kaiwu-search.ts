import {
  ESTATE_REPORT_DEFAULT_DAYS,
  sinceDateForDays,
} from "@/lib/estate-listing-report";

export const TIANGONG_SEARCH_DEFAULT_DAYS = 60;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const BATCH_BASE =
  "https://fs-open-1304240968.cos.ap-hongkong.myqcloud.com/prod/gprd/URBTIX_eventBatch_";

const TITLE_RE = /天工\s*開物|天工开物|tiangong\s*kaiwu/i;
const VENUE_RE =
  /東九(?:文化中心|龍文化中心)?|东九|East\s*Kowloon\s*Cultural\s*Centre|EKCC/i;

export interface TiangongHit {
  source: "URBTIX" | "EKCC";
  title: string;
  venue: string;
  performanceStart: string;
  performanceEnd: string;
  /** First day the event code appeared in URBTIX open-data batches (sale/list proxy). */
  ticketListedDate: string | null;
  url: string;
  code?: string;
}

export interface TiangongSearchReport {
  query: string;
  venueHint: string;
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  status: "found" | "not_found";
  hits: TiangongHit[];
  notes: string[];
}

function ymdToCompact(ymd: string): string {
  return ymd.replace(/-/g, "");
}

function compactToYmd(compact: string): string {
  return `${compact.slice(0, 4)}-${compact.slice(4, 6)}-${compact.slice(6, 8)}`;
}

function addDaysYmd(ymd: string, delta: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + delta);
  return dt.toISOString().slice(0, 10);
}

function eachYmdInclusive(since: string, until: string): string[] {
  const out: string[] = [];
  let cur = since;
  while (cur <= until) {
    out.push(cur);
    cur = addDaysYmd(cur, 1);
  }
  return out;
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}>([^<]*)</${name}>`, "i"));
  return m ? decodeXml(m[1].trim()) : "";
}

function decodeXml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function formatCompactDate(compact: string): string {
  if (!/^\d{8}$/.test(compact)) return compact;
  return compactToYmd(compact);
}

interface ParsedEvent {
  code: string;
  title: string;
  titleEn: string;
  venue: string;
  startDate: string;
  endDate: string;
  url: string;
}

function parseBatchEvents(xml: string): Map<string, ParsedEvent> {
  const map = new Map<string, ParsedEvent>();
  const blocks = xml.split(/<EVENT>/i).slice(1);
  for (const raw of blocks) {
    const block = raw.split(/<\/EVENT>/i)[0] ?? raw;
    const code = tag(block, "EVENT_CODE");
    if (!code) continue;
    const titleTc = tag(block, "EVENT_TC");
    const titleEn = tag(block, "EVENT_EG");
    const venueTc =
      block.match(/<VENUE_TC>([^<]*)<\/VENUE_TC>/i)?.[1]?.trim() || "";
    const venueEg =
      block.match(/<VENUE_EG>([^<]*)<\/VENUE_EG>/i)?.[1]?.trim() || "";
    const venueRaw = decodeXml(venueTc || venueEg);
    const venue = venueRaw === "-" ? "" : venueRaw;
    const url = tag(block, "REFERENCE_LINK");
    map.set(code, {
      code,
      title: titleTc || titleEn || code,
      titleEn,
      venue,
      startDate: formatCompactDate(tag(block, "ST_DATE")),
      endDate: formatCompactDate(tag(block, "ED_DATE")),
      url: url || `https://www.urbtix.hk/event-detail/${code}`,
    });
  }
  return map;
}

async function fetchBatchXml(ymd: string): Promise<string | null> {
  const url = `${BATCH_BASE}${ymdToCompact(ymd)}.xml`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "application/xml,text/xml,*/*" },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const text = await res.text();
    if (!text.includes("<BATCH") || !text.includes("<EVENT")) return null;
    return text;
  } catch {
    return null;
  }
}

function matchesTitle(ev: ParsedEvent): boolean {
  return TITLE_RE.test(ev.title) || TITLE_RE.test(ev.titleEn);
}

async function searchUrbtix(
  since: string,
  until: string,
  notes: string[],
): Promise<TiangongHit[]> {
  const days = eachYmdInclusive(since, until);
  /** code -> first seen day */
  const firstSeen = new Map<string, string>();
  /** latest snapshot of matching events */
  const latest = new Map<string, ParsedEvent>();

  const concurrency = 6;
  const loaded: Array<{ day: string; parsed: Map<string, ParsedEvent> | null }> =
    [];
  for (let i = 0; i < days.length; i += concurrency) {
    const chunk = days.slice(i, i + concurrency);
    const results = await Promise.all(
      chunk.map(async (day) => {
        const xml = await fetchBatchXml(day);
        return {
          day,
          parsed: xml ? parseBatchEvents(xml) : null,
        };
      }),
    );
    loaded.push(...results);
  }

  loaded.sort((a, b) => a.day.localeCompare(b.day));
  let missingBatches = 0;
  for (const { day, parsed } of loaded) {
    if (!parsed) {
      missingBatches += 1;
      continue;
    }
    for (const [code, ev] of parsed) {
      if (!matchesTitle(ev)) continue;
      if (!firstSeen.has(code)) firstSeen.set(code, day);
      latest.set(code, ev);
    }
  }
  if (missingBatches > 0) {
    notes.push(
      `${missingBatches} URBTIX batch day(s) missing in the scan window.`,
    );
  }

  const hits: TiangongHit[] = [];
  for (const [code, ev] of latest) {
    hits.push({
      source: "URBTIX",
      title: ev.title,
      venue: ev.venue,
      performanceStart: ev.startDate,
      performanceEnd: ev.endDate,
      ticketListedDate: firstSeen.get(code) || null,
      url: ev.url,
      code,
    });
  }

  hits.sort((a, b) => {
    const aEk = VENUE_RE.test(a.venue) ? 0 : 1;
    const bEk = VENUE_RE.test(b.venue) ? 0 : 1;
    if (aEk !== bEk) return aEk - bEk;
    return (b.ticketListedDate || "").localeCompare(a.ticketListedDate || "");
  });

  return hits;
}

async function searchEkccSite(notes: string[]): Promise<TiangongHit[]> {
  const urls = [
    "https://www.ekcc.hk/zh-hk/",
    "https://www.ekcc.hk/zh-hk/programmes/highlights/",
    "https://www.ekcc.hk/zh-hk/programmes/search/",
  ];
  const hits: TiangongHit[] = [];
  const seen = new Set<string>();

  for (const pageUrl of urls) {
    try {
      const res = await fetch(pageUrl, {
        headers: {
          "User-Agent": UA,
          Accept: "text/html",
          "Accept-Language": "zh-HK,zh;q=0.9",
        },
        cache: "no-store",
      });
      if (!res.ok) {
        notes.push(`EKCC page unavailable (${res.status}): ${pageUrl}`);
        continue;
      }
      const html = await res.text();
      if (!TITLE_RE.test(html)) continue;

      // Pull nearby event cards / links mentioning the title
      const linkRe =
        /href="([^"]+)"[^>]*>([\s\S]{0,200}?天工[\s\S]{0,80}?開物[\s\S]{0,120}?)</gi;
      let m: RegExpExecArray | null;
      while ((m = linkRe.exec(html))) {
        const href = m[1].startsWith("http")
          ? m[1]
          : new URL(m[1], pageUrl).toString();
        const title = m[2]
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 120);
        if (!TITLE_RE.test(title) || seen.has(href)) continue;
        seen.add(href);
        hits.push({
          source: "EKCC",
          title: title || "天工開物",
          venue: "東九文化中心",
          performanceStart: "",
          performanceEnd: "",
          ticketListedDate: null,
          url: href,
        });
      }

      // Fallback: page mentions title but no clean link card
      if (hits.length === 0 && TITLE_RE.test(html)) {
        hits.push({
          source: "EKCC",
          title: "天工開物 (mentioned on EKCC site)",
          venue: "東九文化中心",
          performanceStart: "",
          performanceEnd: "",
          ticketListedDate: null,
          url: pageUrl,
        });
      }
    } catch (err) {
      notes.push(`EKCC fetch failed: ${String(err)}`);
    }
  }

  return hits;
}

export async function buildTiangongKaiwuSearch(
  days = TIANGONG_SEARCH_DEFAULT_DAYS,
): Promise<TiangongSearchReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(90, Math.max(7, Math.floor(days)))
    : TIANGONG_SEARCH_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Searches URBTIX daily open-data batches for title「天工開物」.",
    "Ticket listed date = first day the event code appears in those batches (list/sale proxy).",
    "Also checks East Kowloon Cultural Centre programme pages.",
  ];

  const [urbtixHits, ekccHits] = await Promise.all([
    searchUrbtix(since, until, notes),
    searchEkccSite(notes),
  ]);

  const hits = [...urbtixHits, ...ekccHits];
  const ekccUrbtix = urbtixHits.filter((h) => VENUE_RE.test(h.venue));

  if (hits.length === 0) {
    notes.push(
      "No public listing found yet for dance drama《天工開物》at East Kowloon Cultural Centre (or URBTIX).",
    );
  } else if (ekccUrbtix.length === 0 && urbtixHits.length > 0) {
    notes.push(
      "Found URBTIX title matches, but none list East Kowloon Cultural Centre as venue.",
    );
  }

  return {
    query: "天工開物",
    venueHint: "東九文化中心 / East Kowloon Cultural Centre",
    since,
    until,
    days: safeDays,
    generatedAt: new Date().toISOString(),
    status: hits.length > 0 ? "found" : "not_found",
    hits,
    notes,
  };
}

export { sinceDateForDays };

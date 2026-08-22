import {
  ESTATE_REPORT_DEFAULT_DAYS,
  sinceDateForDays,
} from "@/lib/estate-listing-report";

export const URBTIX_REPORT_DEFAULT_DAYS = ESTATE_REPORT_DEFAULT_DAYS;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const BATCH_BASE =
  "https://fs-open-1304240968.cos.ap-hongkong.myqcloud.com/prod/gprd/URBTIX_eventBatch_";

export interface UrbtixEvent {
  code: string;
  title: string;
  titleEn: string;
  category: string;
  venue: string;
  startDate: string;
  endDate: string;
  listedDate: string;
  url: string;
  performanceCount: number;
}

export interface UrbtixReport {
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: { total: number };
  events: UrbtixEvent[];
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
  category: string;
  venue: string;
  startDate: string;
  endDate: string;
  url: string;
  performanceCount: number;
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
    const mainCat =
      block.match(/<MAIN_CAT>[\s\S]*?<TC>([^<]*)<\/TC>/i)?.[1]?.trim() ||
      block.match(/<MAIN_CAT>[\s\S]*?<EG>([^<]*)<\/EG>/i)?.[1]?.trim() ||
      "";
    const venueTc =
      block.match(/<VENUE_TC>([^<]*)<\/VENUE_TC>/i)?.[1]?.trim() || "";
    const venueEg =
      block.match(/<VENUE_EG>([^<]*)<\/VENUE_EG>/i)?.[1]?.trim() || "";
    const venueRaw = decodeXml(venueTc || venueEg);
    const venue = venueRaw === "-" ? "" : venueRaw;
    const url = tag(block, "REFERENCE_LINK");
    const performanceCount = (
      block.match(/<PERFORMANCE>/gi) ?? []
    ).length;

    map.set(code, {
      code,
      title: titleTc || titleEn || code,
      titleEn,
      category: decodeXml(mainCat),
      venue,
      startDate: formatCompactDate(tag(block, "ST_DATE")),
      endDate: formatCompactDate(tag(block, "ED_DATE")),
      url: url || `https://www.urbtix.hk/`,
      performanceCount,
    });
  }
  return map;
}

export async function fetchUrbtixBatchXml(ymd: string): Promise<string | null> {
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

export { sinceDateForDays };

export async function buildUrbtixReport(
  days = URBTIX_REPORT_DEFAULT_DAYS,
): Promise<UrbtixReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : URBTIX_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [
    "Newly listed = first seen in LCSD daily URBTIX open-data batch (vs previous day).",
  ];

  const baselineDay = addDaysYmd(since, -1);
  const fetchDays = [baselineDay, ...eachYmdInclusive(since, until)];
  const batches = new Map<string, Map<string, ParsedEvent>>();

  for (const day of fetchDays) {
    const xml = await fetchUrbtixBatchXml(day);
    if (!xml) {
      notes.push(`No batch file for ${day}.`);
      continue;
    }
    batches.set(day, parseBatchEvents(xml));
  }

  const events: UrbtixEvent[] = [];
  let prevCodes: Set<string> | null = null;

  for (const day of fetchDays) {
    const parsed = batches.get(day);
    if (!parsed) continue;

    const codes = new Set(parsed.keys());
    if (prevCodes && day >= since && day <= until) {
      for (const [code, ev] of parsed) {
        if (!prevCodes.has(code)) {
          events.push({
            ...ev,
            listedDate: day,
          });
        }
      }
    }
    prevCodes = codes;
  }

  events.sort((a, b) => {
    if (a.listedDate !== b.listedDate) {
      return a.listedDate < b.listedDate ? 1 : -1;
    }
    return a.title.localeCompare(b.title, "zh-Hant");
  });

  if (batches.size === 0) {
    notes.push("Could not load any URBTIX daily batches.");
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

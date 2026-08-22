import { fetchUrbtixBatchXml } from "@/lib/urbtix-report";

export const URBTIX_UPCOMING_DEFAULT_DAYS = 7;

export interface UrbtixUpcomingShow {
  code: string;
  title: string;
  titleEn: string;
  category: string;
  venue: string;
  date: string;
  time: string;
  weekday: string;
  url: string;
}

export interface UrbtixUpcomingReport {
  since: string;
  until: string;
  days: number;
  batchDate: string | null;
  generatedAt: string;
  counts: { total: number; programmes: number };
  shows: UrbtixUpcomingShow[];
  notes: string[];
}

function hkYmd(date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function addDaysYmd(ymd: string, delta: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + delta);
  return dt.toISOString().slice(0, 10);
}

function decodeXml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}>([^<]*)</${name}>`, "i"));
  return m ? decodeXml(m[1].trim()) : "";
}

function weekdayFor(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Intl.DateTimeFormat("en-HK", {
    timeZone: "UTC",
    weekday: "short",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

function parseShowDatetime(block: string): { date: string; time: string } | null {
  const raw = [
    tag(block, "PERFORMANCE_DATETIME"),
    tag(block, "PERF_DATETIME"),
    tag(block, "DATETIME"),
    [tag(block, "PERF_DATE") || tag(block, "DATE"), tag(block, "PERF_TIME") || tag(block, "TIME")]
      .filter(Boolean)
      .join(" "),
  ]
    .find((s) => s.trim().length > 0)
    ?.trim();
  if (!raw) return null;

  const m = raw.match(
    /(\d{4})[/-]?(\d{1,2})[/-]?(\d{1,2})(?:\s+(\d{1,2}):(\d{2}))?/,
  );
  if (!m) return null;

  const date = `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  const time =
    m[4] != null ? `${m[4].padStart(2, "0")}:${m[5]}` : "";
  return { date, time };
}

export async function buildUrbtixUpcomingReport(
  days = URBTIX_UPCOMING_DEFAULT_DAYS,
): Promise<UrbtixUpcomingReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(14, Math.max(1, Math.floor(days)))
    : URBTIX_UPCOMING_DEFAULT_DAYS;
  const since = hkYmd();
  const until = addDaysYmd(since, safeDays - 1);
  const notes: string[] = [
    "Shows taken from the latest LCSD URBTIX open-data batch.",
    "Filtered by each performance date, not the programme start/end range.",
  ];

  let xml: string | null = null;
  let batchDate: string | null = null;
  for (let back = 0; back <= 3; back++) {
    const day = addDaysYmd(since, -back);
    xml = await fetchUrbtixBatchXml(day);
    if (xml) {
      batchDate = day;
      if (back > 0) notes.push(`Used batch from ${day} (today's file not published yet).`);
      break;
    }
  }

  const shows: UrbtixUpcomingShow[] = [];
  let parsedPerformances = 0;
  let unparsedPerformances = 0;

  if (!xml) {
    notes.push("Could not load a recent URBTIX daily batch.");
  } else {
    const events = xml.split(/<EVENT>/i).slice(1);
    for (const raw of events) {
      const block = raw.split(/<\/EVENT>/i)[0] ?? raw;
      const code = tag(block, "EVENT_CODE");
      if (!code) continue;

      const titleTc = tag(block, "EVENT_TC");
      const titleEn = tag(block, "EVENT_EG");
      const title = titleTc || titleEn || code;
      const mainCat =
        block.match(/<MAIN_CAT>[\s\S]*?<TC>([^<]*)<\/TC>/i)?.[1]?.trim() ||
        block.match(/<MAIN_CAT>[\s\S]*?<EG>([^<]*)<\/EG>/i)?.[1]?.trim() ||
        "";
      const venueTc =
        block.match(/<VENUE_TC>([^<]*)<\/VENUE_TC>/i)?.[1]?.trim() || "";
      const venueEg =
        block.match(/<VENUE_EG>([^<]*)<\/VENUE_EG>/i)?.[1]?.trim() || "";
      const eventVenue = decodeXml(venueTc || venueEg);
      const url =
        tag(block, "REFERENCE_LINK") ||
        `https://www.urbtix.hk/event-detail/${encodeURIComponent(code)}`;

      const perfBlocks = block.split(/<PERFORMANCE>/i).slice(1);
      for (const perfRaw of perfBlocks) {
        const perf = perfRaw.split(/<\/PERFORMANCE>/i)[0] ?? perfRaw;
        parsedPerformances += 1;
        const dt = parseShowDatetime(perf);
        if (!dt) {
          unparsedPerformances += 1;
          continue;
        }
        if (dt.date < since || dt.date > until) continue;

        const perfVenueTc =
          perf.match(/<VENUE_TC>([^<]*)<\/VENUE_TC>/i)?.[1]?.trim() || "";
        const venueRaw = decodeXml(perfVenueTc) || eventVenue;
        shows.push({
          code,
          title,
          titleEn,
          category: decodeXml(mainCat),
          venue: venueRaw === "-" ? "" : venueRaw,
          date: dt.date,
          time: dt.time,
          weekday: weekdayFor(dt.date),
          url,
        });
      }
    }

    if (unparsedPerformances > 0) {
      notes.push(
        `${unparsedPerformances} of ${parsedPerformances} performance records had no usable date/time and were skipped.`,
      );
    }
  }

  shows.sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    if (a.time !== b.time) return a.time.localeCompare(b.time);
    return a.title.localeCompare(b.title, "zh-Hant");
  });

  const programmes = new Set(shows.map((s) => s.code)).size;

  return {
    since,
    until,
    days: safeDays,
    batchDate,
    generatedAt: new Date().toISOString(),
    counts: { total: shows.length, programmes },
    shows,
    notes,
  };
}

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  ESTATE_REPORT_DEFAULT_DAYS,
  sinceDateForDays,
} from "@/lib/estate-listing-report";

export const JCCH_REPORT_DEFAULT_DAYS = ESTATE_REPORT_DEFAULT_DAYS;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const PREVIEW_URL = "https://jcch.org.hk/course_activity/preview/";
const SNAPSHOT_DIR = path.join(process.cwd(), "data", "jcch-snapshots");

export interface JcchEvent {
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

export interface JcchReport {
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: { total: number };
  events: JcchEvent[];
  notes: string[];
}

interface CourseRow {
  id: string;
  title: string;
  venue: string;
  tutor: string;
  url: string;
  firstDate: string;
  lastDate: string;
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

function formatShowDates(first: string, last: string): string {
  if (!first && !last) return "";
  if (first && last && first !== last) return `${first} → ${last}`;
  return first || last;
}

function extractEventsJsonArray(html: string): unknown[] {
  // Prefer the live JSON assignment; skip the commented legacy `// var _events`.
  const marker = "var _events = [";
  let from = 0;
  while (from < html.length) {
    const start = html.indexOf(marker, from);
    if (start < 0) break;
    const prefix = html.slice(Math.max(0, start - 3), start);
    if (prefix.includes("//")) {
      from = start + marker.length;
      continue;
    }
    const arrayStart = start + "var _events = ".length;
    let depth = 0;
    let inString = false;
    let escaped = false;
    for (let i = arrayStart; i < html.length; i++) {
      const ch = html[i];
      if (inString) {
        if (escaped) escaped = false;
        else if (ch === "\\") escaped = true;
        else if (ch === '"') inString = false;
        continue;
      }
      if (ch === '"') {
        inString = true;
        continue;
      }
      if (ch === "[") depth++;
      else if (ch === "]") {
        depth--;
        if (depth === 0) {
          const raw = html.slice(arrayStart, i + 1);
          return JSON.parse(raw) as unknown[];
        }
      }
    }
    break;
  }
  throw new Error("JCCH calendar data not found on preview page.");
}

function parseCoursesFromPreviewHtml(html: string): CourseRow[] {
  const events = extractEventsJsonArray(html);
  const byId = new Map<
    string,
    {
      title: string;
      venue: string;
      tutor: string;
      link: string;
      days: Set<string>;
    }
  >();

  for (const raw of events) {
    if (!raw || typeof raw !== "object") continue;
    const e = raw as Record<string, unknown>;
    const link = String(e.link || "");
    const courseId = link.match(/event_id=(\d+)/)?.[1];
    if (!courseId) continue;
    const day = String(e.event_date || e.start || "").slice(0, 10);
    const title = String(e.title || "");
    const venue = String(e.centre || "");
    const tutor = String(e.tutor || "");
    const prev = byId.get(courseId);
    if (!prev) {
      byId.set(courseId, {
        title,
        venue,
        tutor,
        link,
        days: new Set(day ? [day] : []),
      });
    } else {
      if (title) prev.title = title;
      if (venue) prev.venue = venue;
      if (tutor) prev.tutor = tutor;
      if (day) prev.days.add(day);
    }
  }

  if (byId.size === 0) {
    throw new Error("No JCCH courses parsed from calendar feed.");
  }

  return [...byId.entries()].map(([id, row]) => {
    const days = [...row.days].sort();
    return {
      id,
      title: row.title || id,
      venue: row.venue,
      tutor: row.tutor,
      url: row.link.startsWith("http")
        ? row.link
        : `https://jcch.org.hk${row.link.startsWith("/") ? "" : "/"}${row.link}`,
      firstDate: days[0] || "",
      lastDate: days[days.length - 1] || "",
    };
  });
}

async function ensureSnapshotDir() {
  await mkdir(SNAPSHOT_DIR, { recursive: true });
}

async function loadSnapshot(ymd: string): Promise<Set<string> | null> {
  try {
    const raw = await readFile(path.join(SNAPSHOT_DIR, `${ymd}.json`), "utf8");
    const parsed = JSON.parse(raw) as { courseIds?: string[] };
    return new Set(parsed.courseIds || []);
  } catch {
    return null;
  }
}

async function saveSnapshot(ymd: string, courseIds: string[]) {
  await ensureSnapshotDir();
  await writeFile(
    path.join(SNAPSHOT_DIR, `${ymd}.json`),
    JSON.stringify(
      { date: ymd, savedAt: new Date().toISOString(), courseIds },
      null,
      2,
    ),
    "utf8",
  );
}

async function findBaselineIds(beforeYmd: string): Promise<{
  ids: Set<string> | null;
  from: string | null;
}> {
  await ensureSnapshotDir();
  let names: string[] = [];
  try {
    names = await readdir(SNAPSHOT_DIR);
  } catch {
    return { ids: null, from: null };
  }
  const dates = names
    .map((n) => n.replace(/\.json$/i, ""))
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && d < beforeYmd)
    .sort();
  const latest = dates[dates.length - 1];
  if (!latest) return { ids: null, from: null };
  return { ids: await loadSnapshot(latest), from: latest };
}

export { sinceDateForDays };

export async function buildJcchReport(
  days = JCCH_REPORT_DEFAULT_DAYS,
): Promise<JcchReport> {
  const safeDays = Number.isFinite(days)
    ? Math.min(30, Math.max(1, Math.floor(days)))
    : JCCH_REPORT_DEFAULT_DAYS;
  const { since, until } = sinceDateForDays(safeDays);
  const notes: string[] = [];

  const res = await fetch(PREVIEW_URL, {
    headers: { "User-Agent": UA, Accept: "text/html" },
    cache: "no-store",
    signal: AbortSignal.timeout(45000),
  });
  if (!res.ok) {
    throw new Error(`JCCH preview page failed (${res.status})`);
  }
  const html = await res.text();
  const courses = parseCoursesFromPreviewHtml(html);
  const currentIds = new Set(courses.map((c) => c.id));
  await saveSnapshot(until, [...currentIds]);

  const baseline = await findBaselineIds(since);
  const windowDays = eachYmdInclusive(since, until);
  const windowSnapshots = new Map<string, Set<string>>();
  for (const day of windowDays) {
    const snap = await loadSnapshot(day);
    if (snap) windowSnapshots.set(day, snap);
  }

  let selected: CourseRow[] = [];
  let listedById = new Map<string, string>();

  if (baseline.ids) {
    notes.push(
      `Newly listed = first seen vs catalogue snapshot from ${baseline.from}.`,
    );
    for (const course of courses) {
      if (baseline.ids.has(course.id)) continue;
      let firstSeen = until;
      for (const day of windowDays) {
        const snap = windowSnapshots.get(day);
        if (snap?.has(course.id)) {
          firstSeen = day;
          break;
        }
      }
      listedById.set(course.id, firstSeen);
      selected.push(course);
    }
  } else {
    // No prior snapshot: upcoming-only courses (no sessions on/before today).
    notes.push(
      "No prior JCCH catalogue snapshot yet — showing upcoming courses with no past sessions in the calendar feed (proxy for recent additions).",
    );
    notes.push(
      "Saved a baseline snapshot; later generates use day-to-day new listings.",
    );
    selected = courses.filter((c) => c.firstDate && c.firstDate > until);
    for (const course of selected) {
      listedById.set(course.id, until);
    }
    const selectedIds = new Set(selected.map((c) => c.id));
    const seedIds = [...currentIds].filter((id) => !selectedIds.has(id));
    await saveSnapshot(addDaysYmd(since, -1), seedIds);
  }

  const events: JcchEvent[] = selected.map((course) => {
    const listedDate = listedById.get(course.id) || until;
    return {
      id: course.id,
      slug: `event_id=${course.id}`,
      title: course.title,
      venue: course.venue,
      category: course.tutor ? `導師：${course.tutor}` : "",
      showDates: formatShowDates(course.firstDate, course.lastDate),
      listedDate,
      listedAt: `${listedDate}T12:00:00+08:00`,
      url: course.url,
      status: "",
    };
  });

  events.sort((a, b) => {
    if (a.listedDate !== b.listedDate) return a.listedDate < b.listedDate ? 1 : -1;
    return Number(b.id) - Number(a.id);
  });

  if (events.length === 0) {
    notes.push("No newly listed lessons or activities found in this window.");
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

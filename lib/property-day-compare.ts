import "server-only";

import { execFile } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { buildConsolidatedReport } from "@/lib/consolidated-report";
import type {
  ConsolidatedReport,
  PropertyFilterMode,
} from "@/lib/consolidated-report-types";
import type { EstateListing } from "@/lib/estate-listing-report";

const execFileAsync = promisify(execFile);

export const PROPERTY_DAY_COMPARE_DEFAULT_DAYS = 2;
export const PROPERTY_DAY_COMPARE_DEFAULT_FILTER: PropertyFilterMode =
  "exclude-2bed-be";

export interface PropertyDayListing extends EstateListing {
  estateId: string;
  estateLabel: string;
  /** Agent listing identity (estate|source|ref). */
  key: string;
  /** Stable unit identity for day-over-day matching. */
  unitKey: string;
}

export interface PropertyDaySnapshot {
  day: string;
  /** full-stock = all listings in search window; activity = old date-split files */
  kind: "full-stock" | "activity";
  generatedAt: string;
  sourceWindow: {
    since: string;
    until: string;
    days: number;
    propertyFilter?: PropertyFilterMode;
  };
  counts: {
    harbourside: number;
    sorrento: number;
    villageGardens: number;
    total: number;
  };
  listings: PropertyDayListing[];
}

export interface PropertyDayCompareResult {
  previousDay: string;
  nextDay: string;
  generatedAt: string;
  matchBy: "agent-ref";
  note: string;
  summary: {
    previousTotal: number;
    nextTotal: number;
    added: number;
    removed: number;
    carried: number;
  };
  added: PropertyDayListing[];
  removed: PropertyDayListing[];
  carried: PropertyDayListing[];
}

export interface PropertyDayCompareRun {
  outDir: string;
  days: number;
  propertyFilter: PropertyFilterMode;
  since: string;
  until: string;
  snapshots: PropertyDaySnapshot[];
  compare: PropertyDayCompareResult | null;
  files: string[];
  compareMdPath: string | null;
  compareHtmlPath: string | null;
  compareJsonPath: string | null;
  openedPath: string | null;
}

export function propertyDayCompareOutDir(): string {
  const home =
    process.env.USERPROFILE || process.env.HOME || os.homedir();
  return path.join(home, "Desktop", "FT-property-search");
}

/** Open a local file with the OS default app (Notepad / Cursor / browser, etc.). */
export async function openLocalFile(filePath: string): Promise<void> {
  if (process.platform === "win32") {
    await execFileAsync("cmd", ["/c", "start", "", filePath], {
      windowsHide: true,
    });
    return;
  }
  if (process.platform === "darwin") {
    await execFileAsync("open", [filePath]);
    return;
  }
  await execFileAsync("xdg-open", [filePath]);
}

/** Newest day-compare HTML report on Desktop, if any. */
export async function findLatestCompareHtml(
  outDir = propertyDayCompareOutDir(),
): Promise<{ path: string; content: string } | null> {
  let names: string[];
  try {
    names = await readdir(outDir);
  } catch {
    return null;
  }
  const htmlNames = names
    .filter((n) => /^property-search-compare-.*\.html$/i.test(n))
    .sort();
  if (htmlNames.length === 0) return null;
  const filePath = path.join(outDir, htmlNames[htmlNames.length - 1]);
  const content = await readFile(filePath, "utf8");
  return { path: filePath, content };
}

/** @deprecated Prefer findLatestCompareHtml — kept for older Desktop files. */
export async function findLatestCompareMarkdown(
  outDir = propertyDayCompareOutDir(),
): Promise<{ path: string; content: string } | null> {
  let names: string[];
  try {
    names = await readdir(outDir);
  } catch {
    return null;
  }
  const mdNames = names
    .filter((n) => /^property-search-compare-.*\.md$/i.test(n))
    .sort();
  if (mdNames.length === 0) return null;
  const filePath = path.join(outDir, mdNames[mdNames.length - 1]);
  const content = await readFile(filePath, "utf8");
  return { path: filePath, content };
}

function listingKey(listing: EstateListing, estateId: string): string {
  const ref = String(listing.ref || "").trim();
  const url = String(listing.url || "").trim();
  const source = String(listing.source || "").trim();
  if (ref) return `${estateId}|${source}|${ref}`;
  if (url) return `${estateId}|${source}|${url}`;
  return `${estateId}|${source}|${listing.title}|${listing.price}|${listing.date}`;
}

/**
 * Match the same physical unit across days even when agents refresh with a
 * new ref. Uses estate + tower + level + flat + size + beds from the title.
 */
export function unitMatchKey(
  listing: Pick<EstateListing, "title" | "nSize"> & { estateId: string },
): string {
  const title = String(listing.title || "")
    .replace(/\s+/g, " ")
    .trim();
  const tower = title.match(/(\d+)\s*座/)?.[1] ?? "no-tower";
  const level =
    title.match(/極高層|高層|中層|低層/)?.[0] ?? "no-level";
  const flat =
    title.match(/([A-Za-z])\s*室/)?.[1]?.toUpperCase() ??
    title.match(/(?:Flat|Unit|Apt\.?)\s*([A-Za-z])\b/i)?.[1]?.toUpperCase() ??
    "no-flat";
  const beds = title.match(/(\d+)\s*房/)?.[1] ?? "no-beds";
  const size = listing.nSize != null ? String(listing.nSize) : "no-size";
  return `${listing.estateId}|t${tower}|${level}|f${flat}|b${beds}|s${size}`;
}

function flattenProperty(report: ConsolidatedReport): PropertyDayListing[] {
  const estates: Array<[string, ConsolidatedReport["property"]["harbourside"]]> =
    [
      ["harbourside", report.property.harbourside],
      ["sorrento", report.property.sorrento],
      ["village-gardens", report.property.villageGardens],
    ];

  const rows: PropertyDayListing[] = [];
  for (const [estateId, block] of estates) {
    if (!block?.listings) continue;
    for (const listing of block.listings) {
      rows.push({
        ...listing,
        estateId,
        estateLabel: block.estateLabel || estateId,
        key: listingKey(listing, estateId),
        unitKey: unitMatchKey({ ...listing, estateId }),
      });
    }
  }
  return rows;
}

function sortListings(listings: PropertyDayListing[]): PropertyDayListing[] {
  return [...listings].sort((a, b) => {
    if (a.estateId !== b.estateId) return a.estateId.localeCompare(b.estateId);
    if (a.source !== b.source) return a.source.localeCompare(b.source);
    return String(a.ref).localeCompare(String(b.ref));
  });
}

/** One row per agent listing key (estate|source|ref). */
function dedupeByAgentRef(
  listings: PropertyDayListing[],
): PropertyDayListing[] {
  const best = new Map<string, PropertyDayListing>();
  for (const listing of listings) {
    const key = listing.key || listingKey(listing, listing.estateId);
    const row = { ...listing, key };
    const prev = best.get(key);
    if (!prev) {
      best.set(key, row);
      continue;
    }
    // Prefer later activity date.
    if (row.date > prev.date) {
      best.set(key, row);
    }
  }
  return sortListings([...best.values()]);
}

function countsFor(listings: PropertyDayListing[]) {
  return {
    harbourside: listings.filter((l) => l.estateId === "harbourside").length,
    sorrento: listings.filter((l) => l.estateId === "sorrento").length,
    villageGardens: listings.filter((l) => l.estateId === "village-gardens")
      .length,
    total: listings.length,
  };
}

function buildStockSnapshot(
  report: ConsolidatedReport,
  rows: PropertyDayListing[],
  day: string,
  kind: PropertyDaySnapshot["kind"],
): PropertyDaySnapshot {
  const listings = dedupeByAgentRef(rows);
  return {
    day,
    kind,
    generatedAt: new Date().toISOString(),
    sourceWindow: {
      since: report.since,
      until: report.until,
      days: report.days,
      propertyFilter: report.propertyFilter,
    },
    counts: countsFor(listings),
    listings,
  };
}

function ensureListingKeys(
  listings: PropertyDayListing[],
): PropertyDayListing[] {
  return listings.map((l) => ({
    ...l,
    key: l.key || listingKey(l, l.estateId),
    unitKey: l.unitKey || unitMatchKey(l),
  }));
}

async function loadSnapshot(
  outDir: string,
  day: string,
): Promise<PropertyDaySnapshot | null> {
  const file = path.join(outDir, `property-search-${day}.json`);
  try {
    const raw = await readFile(file, "utf8");
    const parsed = JSON.parse(raw) as PropertyDaySnapshot;
    if (!parsed?.day || !Array.isArray(parsed.listings)) return null;
    const listings = dedupeByAgentRef(ensureListingKeys(parsed.listings));
    return {
      ...parsed,
      kind: parsed.kind ?? "activity",
      listings,
      counts: countsFor(listings),
    };
  } catch {
    return null;
  }
}

function previousCalendarDay(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() - 1);
  return dt.toISOString().slice(0, 10);
}

function compareSnapshots(
  prev: PropertyDaySnapshot,
  next: PropertyDaySnapshot,
): PropertyDayCompareResult {
  const prevByRef = new Map(prev.listings.map((l) => [l.key, l]));
  const nextByRef = new Map(next.listings.map((l) => [l.key, l]));

  const added = next.listings.filter((l) => !prevByRef.has(l.key));
  const removed = prev.listings.filter((l) => !nextByRef.has(l.key));
  const carried = next.listings.filter((l) => prevByRef.has(l.key));

  return {
    previousDay: prev.day,
    nextDay: next.day,
    generatedAt: new Date().toISOString(),
    matchBy: "agent-ref",
    note:
      "Matched by agent reference (estate + source + ref). A listing is new when its agent ref was not in yesterday’s stock.",
    summary: {
      previousTotal: prev.listings.length,
      nextTotal: next.listings.length,
      added: added.length,
      removed: removed.length,
      carried: carried.length,
    },
    added,
    removed,
    carried,
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const ESTATE_ORDER = ["harbourside", "sorrento", "village-gardens"] as const;

function groupByEstate(
  listings: PropertyDayListing[],
): Array<{ estateId: string; estateLabel: string; listings: PropertyDayListing[] }> {
  const groups = new Map<
    string,
    { estateId: string; estateLabel: string; listings: PropertyDayListing[] }
  >();
  for (const listing of listings) {
    const existing = groups.get(listing.estateId);
    if (existing) {
      existing.listings.push(listing);
    } else {
      groups.set(listing.estateId, {
        estateId: listing.estateId,
        estateLabel: listing.estateLabel,
        listings: [listing],
      });
    }
  }
  return ESTATE_ORDER.map((id) => groups.get(id)).filter(
    (g): g is NonNullable<typeof g> => g != null,
  );
}

/** Same columns as the on-page property search table. */
function listingsTableHtml(listings: PropertyDayListing[]): string {
  if (listings.length === 0) {
    return `<p class="empty">No listings found in this window.</p>`;
  }
  const rows = listings
    .map((row) => {
      const size = row.nSize ? `${row.nSize.toLocaleString("en-US")}呎` : "—";
      const dateType = row.dateType === "publish" ? "published" : "updated";
      return `<tr>
  <td class="date"><div>${escapeHtml(row.date)}</div><div class="muted">${dateType}</div></td>
  <td class="source">${escapeHtml(row.source)}</td>
  <td class="unit"><a href="${escapeHtml(row.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(row.title || row.ref)}</a><div class="muted">${escapeHtml(row.ref)}</div></td>
  <td class="size">${escapeHtml(size)}</td>
  <td class="price">${escapeHtml(row.price || "—")}</td>
</tr>`;
    })
    .join("\n");
  return `<div class="table-wrap"><table>
<thead><tr><th>Date</th><th>Source</th><th>Unit</th><th>Size</th><th>Price</th></tr></thead>
<tbody>${rows}</tbody>
</table></div>`;
}

function sectionHtml(
  title: string,
  listings: PropertyDayListing[],
): string {
  const groups = groupByEstate(listings);
  if (groups.length === 0) {
    return `<section class="block"><h2>${escapeHtml(title)}</h2><p class="empty">_(none)_</p></section>`;
  }
  const bodies = groups
    .map((g) => {
      const sourceCounts = {
        Centaline: g.listings.filter((l) => l.source === "Centaline").length,
        Midland: g.listings.filter((l) => l.source === "Midland").length,
        "28Hse": g.listings.filter((l) => l.source === "28Hse").length,
        Ricacorp: g.listings.filter((l) => l.source === "Ricacorp").length,
      };
      const sourceLine = [
        `Centaline ${sourceCounts.Centaline}`,
        `Midland ${sourceCounts.Midland}`,
        `28Hse ${sourceCounts["28Hse"]}`,
        `Ricacorp ${sourceCounts.Ricacorp}`,
      ].join(" · ");
      return `<section class="estate">
  <div class="estate-head">
    <div><p class="eyebrow">Property</p><h3>${escapeHtml(g.estateLabel)}</h3></div>
    <span class="count">${g.listings.length} item${g.listings.length === 1 ? "" : "s"}</span>
  </div>
  <div class="sources">${escapeHtml(sourceLine)}</div>
  ${listingsTableHtml(g.listings)}
</section>`;
    })
    .join("\n");
  return `<section class="block"><h2>${escapeHtml(title)}</h2>${bodies}</section>`;
}

function htmlCompare(cmp: PropertyDayCompareResult): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Property compare ${escapeHtml(cmp.previousDay)} → ${escapeHtml(cmp.nextDay)}</title>
<style>
  :root { color-scheme: light; }
  body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: #f4f7f4; color: #1f2a24; }
  main { max-width: 56rem; margin: 0 auto; padding: 1.5rem 1rem 3rem; }
  h1 { font-size: 1.5rem; margin: 0 0 0.35rem; }
  .summary { font-size: 0.85rem; color: #4a5c52; margin-bottom: 1.25rem; line-height: 1.5; }
  .stats { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.95rem; font-weight: 600; margin: 0.5rem 0; }
  .block { margin-top: 1.75rem; }
  .block > h2 { font-size: 1.15rem; margin: 0 0 0.75rem; }
  .estate { background: #fff; border: 1px solid #d5e0d8; border-radius: 0.5rem; margin-bottom: 0.85rem; overflow: hidden; }
  .estate-head { display: flex; justify-content: space-between; gap: 0.75rem; align-items: baseline; padding: 0.65rem 0.75rem; border-bottom: 1px solid #e7eee9; }
  .eyebrow { margin: 0; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.65rem; letter-spacing: 0.06em; text-transform: uppercase; color: #7a8b82; }
  .estate-head h3 { margin: 0.1rem 0 0; font-size: 0.95rem; }
  .count { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.75rem; color: #5c6f65; }
  .sources { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.7rem; color: #6b7c73; padding: 0.45rem 0.75rem; border-bottom: 1px solid #e7eee9; }
  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.875rem; }
  th { text-align: left; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.04em; color: #6b7c73; background: #eef3ef; padding: 0.5rem 0.75rem; font-weight: 500; }
  td { padding: 0.65rem 0.75rem; vertical-align: top; border-top: 1px solid #e7eee9; }
  .date, .source, .size, .price { white-space: nowrap; color: #4a5c52; font-size: 0.8rem; }
  .unit a { color: #2f6b4f; font-weight: 600; text-decoration: none; }
  .unit a:hover { text-decoration: underline; }
  .muted { font-size: 0.7rem; color: #8a9a91; margin-top: 0.15rem; }
  .empty { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 0.875rem; color: #6b7c73; padding: 0.75rem; }
</style>
</head>
<body>
<main>
  <h1>Property day compare</h1>
  <p class="summary">
    <strong>${escapeHtml(cmp.previousDay)} → ${escapeHtml(cmp.nextDay)}</strong><br/>
    ${escapeHtml(cmp.note)}
  </p>
  <p class="stats">
    +${cmp.summary.added} new · −${cmp.summary.removed} gone · ${cmp.summary.carried} carried
    <span class="muted"> · ${cmp.summary.previousTotal} yesterday → ${cmp.summary.nextTotal} today</span>
  </p>
  ${sectionHtml(`New additions on ${cmp.nextDay}`, cmp.added)}
  ${sectionHtml(`Present on ${cmp.previousDay} but not on ${cmp.nextDay}`, cmp.removed)}
  ${sectionHtml("Carried over (same agent ref)", cmp.carried)}
</main>
</body>
</html>
`;
}

function formatListingLine(l: PropertyDayListing): string {
  const size = l.nSize != null ? `${l.nSize} sqft` : "size n/a";
  return `- [${l.estateLabel}] ${l.source} · ${l.ref || "(no ref)"} · ${l.price || "n/a"} · ${size} · ${l.dateType} ${l.date}\n  ${l.title}\n  ref-key: ${l.key}\n  ${l.url}`;
}

function markdownCompare(cmp: PropertyDayCompareResult): string {
  const lines = [
    `# Property search day compare`,
    ``,
    `**${cmp.previousDay} → ${cmp.nextDay}**`,
    ``,
    cmp.note,
    ``,
    `- Previous day (agent refs): ${cmp.summary.previousTotal}`,
    `- Next day (agent refs): ${cmp.summary.nextTotal}`,
    `- New additions (new refs): ${cmp.summary.added}`,
    `- Removed / not seen next day: ${cmp.summary.removed}`,
    `- Carried over (same agent ref): ${cmp.summary.carried}`,
    ``,
    `## New additions on ${cmp.nextDay}`,
    ``,
  ];
  if (cmp.added.length === 0) {
    lines.push(`_(none)_`, ``);
  } else {
    for (const l of cmp.added) lines.push(formatListingLine(l), ``);
  }
  lines.push(
    `## Present on ${cmp.previousDay} but not on ${cmp.nextDay}`,
    ``,
  );
  if (cmp.removed.length === 0) {
    lines.push(`_(none)_`, ``);
  } else {
    for (const l of cmp.removed) lines.push(formatListingLine(l), ``);
  }
  lines.push(`## Carried over`, ``);
  if (cmp.carried.length === 0) {
    lines.push(`_(none)_`, ``);
  } else {
    for (const l of cmp.carried) lines.push(formatListingLine(l), ``);
  }
  return `${lines.join("\n")}\n`;
}

/** Run property day snapshots + Desktop compare files. */
export async function runPropertyDayCompare(options?: {
  days?: number;
  propertyFilter?: PropertyFilterMode;
  outDir?: string;
  open?: boolean;
}): Promise<PropertyDayCompareRun> {
  const days = options?.days ?? PROPERTY_DAY_COMPARE_DEFAULT_DAYS;
  const propertyFilter =
    options?.propertyFilter ?? PROPERTY_DAY_COMPARE_DEFAULT_FILTER;
  const outDir = options?.outDir ?? propertyDayCompareOutDir();
  const shouldOpen = options?.open !== false;

  const report = await buildConsolidatedReport(
    days,
    "property",
    propertyFilter,
  );
  const rows = flattenProperty(report);
  const today = report.until;
  const yesterday = previousCalendarDay(today);

  await mkdir(outDir, { recursive: true });

  // Full stock for today = everything currently in the search window.
  const todayStock = buildStockSnapshot(report, rows, today, "full-stock");

  // Prefer yesterday's saved full-stock file. Old "activity" date-split files
  // are not usable (they never overlap by construction) — rebuild from older
  // rows still present in today's window instead.
  const savedYesterday = await loadSnapshot(outDir, yesterday);
  let yesterdayStock: PropertyDaySnapshot;
  if (savedYesterday && savedYesterday.kind === "full-stock") {
    const listings = dedupeByAgentRef(
      ensureListingKeys(savedYesterday.listings),
    );
    yesterdayStock = {
      ...savedYesterday,
      day: yesterday,
      kind: "full-stock",
      listings,
      counts: countsFor(listings),
    };
  } else {
    const priorRows = rows.filter((r) => r.date < today);
    yesterdayStock = buildStockSnapshot(
      report,
      priorRows,
      yesterday,
      "full-stock",
    );
  }

  const snapshots = [yesterdayStock, todayStock];
  const files: string[] = [];

  for (const snap of snapshots) {
    const file = path.join(outDir, `property-search-${snap.day}.json`);
    await writeFile(file, `${JSON.stringify(snap, null, 2)}\n`, "utf8");
    files.push(file);
  }

  const compare = compareSnapshots(yesterdayStock, todayStock);
  const stem = `property-search-compare-${compare.previousDay}-vs-${compare.nextDay}`;
  const compareJsonPath = path.join(outDir, `${stem}.json`);
  const compareMdPath = path.join(outDir, `${stem}.md`);
  const compareHtmlPath = path.join(outDir, `${stem}.html`);
  await writeFile(
    compareJsonPath,
    `${JSON.stringify(compare, null, 2)}\n`,
    "utf8",
  );
  await writeFile(compareMdPath, markdownCompare(compare), "utf8");
  await writeFile(compareHtmlPath, htmlCompare(compare), "utf8");
  files.push(compareJsonPath, compareMdPath, compareHtmlPath);

  let openedPath: string | null = null;
  if (shouldOpen) {
    await openLocalFile(compareHtmlPath);
    openedPath = compareHtmlPath;
  }

  return {
    outDir,
    days,
    propertyFilter,
    since: report.since,
    until: report.until,
    snapshots,
    compare,
    files,
    compareMdPath,
    compareHtmlPath,
    compareJsonPath,
    openedPath,
  };
}

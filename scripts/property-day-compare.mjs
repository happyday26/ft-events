/**
 * Snapshot property search by HK calendar day, save to Desktop, and
 * compare new listings vs the previous day.
 *
 * Usage:
 *   node scripts/property-day-compare.mjs
 *   node scripts/property-day-compare.mjs --days=2 --filter=exclude-2bed-be
 *   node scripts/property-day-compare.mjs --base=http://127.0.0.1:3000
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const DEFAULT_BASE = "http://127.0.0.1:3000";
const DEFAULT_DAYS = 2;
const DEFAULT_FILTER = "exclude-2bed-be";
const DESKTOP =
  process.env.USERPROFILE != null
    ? path.join(process.env.USERPROFILE, "Desktop")
    : path.join(os.homedir(), "Desktop");
const OUT_DIR = path.join(DESKTOP, "FT-property-search");

function argValue(name, fallback) {
  const prefix = `--${name}=`;
  const hit = process.argv.find((a) => a.startsWith(prefix));
  return hit ? hit.slice(prefix.length) : fallback;
}

function listingKey(listing, estateId) {
  const ref = String(listing.ref || "").trim();
  const url = String(listing.url || "").trim();
  const source = String(listing.source || "").trim();
  if (ref) return `${estateId}|${source}|${ref}`;
  if (url) return `${estateId}|${source}|${url}`;
  return `${estateId}|${source}|${listing.title}|${listing.price}|${listing.date}`;
}

function flattenProperty(report) {
  const estates = [
    ["harbourside", report.property?.harbourside],
    ["sorrento", report.property?.sorrento],
    ["village-gardens", report.property?.villageGardens],
  ];
  const rows = [];
  for (const [estateId, block] of estates) {
    if (!block?.listings) continue;
    for (const listing of block.listings) {
      rows.push({
        estateId,
        estateLabel: block.estateLabel || estateId,
        key: listingKey(listing, estateId),
        ...listing,
      });
    }
  }
  return rows;
}

function dayBounds(since, until) {
  const days = [];
  const [y, m, d] = since.split("-").map(Number);
  const cursor = new Date(Date.UTC(y, m - 1, d));
  const end = until;
  while (true) {
    const ymd = cursor.toISOString().slice(0, 10);
    days.push(ymd);
    if (ymd >= end) break;
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return days;
}

function snapshotForDay(report, rows, day) {
  const listings = rows
    .filter((r) => r.date === day)
    .sort((a, b) => {
      if (a.estateId !== b.estateId) return a.estateId.localeCompare(b.estateId);
      if (a.source !== b.source) return a.source.localeCompare(b.source);
      return String(a.ref).localeCompare(String(b.ref));
    });

  const byEstate = {
    harbourside: listings.filter((l) => l.estateId === "harbourside").length,
    sorrento: listings.filter((l) => l.estateId === "sorrento").length,
    villageGardens: listings.filter((l) => l.estateId === "village-gardens")
      .length,
  };

  return {
    day,
    generatedAt: new Date().toISOString(),
    sourceWindow: {
      since: report.since,
      until: report.until,
      days: report.days,
      propertyFilter: report.propertyFilter,
    },
    counts: {
      ...byEstate,
      total: listings.length,
    },
    listings,
  };
}

function compareDays(prev, next) {
  const prevKeys = new Set(prev.listings.map((l) => l.key));
  const nextKeys = new Set(next.listings.map((l) => l.key));

  const added = next.listings.filter((l) => !prevKeys.has(l.key));
  const removed = prev.listings.filter((l) => !nextKeys.has(l.key));
  const carried = next.listings.filter((l) => prevKeys.has(l.key));

  return {
    previousDay: prev.day,
    nextDay: next.day,
    generatedAt: new Date().toISOString(),
    summary: {
      previousTotal: prev.listings.length,
      nextTotal: next.listings.length,
      added: added.length,
      removed: removed.length,
      carried: carried.length,
    },
    added,
    removed,
  };
}

function formatListingLine(l) {
  const size = l.nSize != null ? `${l.nSize} sqft` : "size n/a";
  return `- [${l.estateLabel}] ${l.source} · ${l.ref || "(no ref)"} · ${l.price || "n/a"} · ${size} · ${l.dateType} ${l.date}\n  ${l.title}\n  ${l.url}`;
}

function markdownCompare(cmp) {
  const lines = [
    `# Property search day compare`,
    ``,
    `**${cmp.previousDay} → ${cmp.nextDay}**`,
    ``,
    `- Previous day: ${cmp.summary.previousTotal}`,
    `- Next day: ${cmp.summary.nextTotal}`,
    `- New additions: ${cmp.summary.added}`,
    `- Removed / not seen next day: ${cmp.summary.removed}`,
    `- Carried over: ${cmp.summary.carried}`,
    ``,
    `## New additions on ${cmp.nextDay}`,
    ``,
  ];
  if (cmp.added.length === 0) {
    lines.push(`_(none)_`, ``);
  } else {
    for (const l of cmp.added) lines.push(formatListingLine(l), ``);
  }
  lines.push(`## Present on ${cmp.previousDay} but not on ${cmp.nextDay}`, ``);
  if (cmp.removed.length === 0) {
    lines.push(`_(none)_`, ``);
  } else {
    for (const l of cmp.removed) lines.push(formatListingLine(l), ``);
  }
  return `${lines.join("\n")}\n`;
}

async function main() {
  const base = argValue("base", DEFAULT_BASE).replace(/\/$/, "");
  const days = Number(argValue("days", String(DEFAULT_DAYS)));
  const filter = argValue("filter", DEFAULT_FILTER);
  const url = `${base}/api/consolidated-report?scope=property&days=${days}&propertyFilter=${encodeURIComponent(filter)}`;

  console.log(`Fetching ${url}`);
  const res = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(180_000),
  });
  if (!res.ok) {
    throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  const report = await res.json();
  const rows = flattenProperty(report);
  const calendarDays = dayBounds(report.since, report.until);

  await mkdir(OUT_DIR, { recursive: true });

  const snapshots = [];
  for (const day of calendarDays) {
    const snap = snapshotForDay(report, rows, day);
    snapshots.push(snap);
    const file = path.join(OUT_DIR, `property-search-${day}.json`);
    await writeFile(file, `${JSON.stringify(snap, null, 2)}\n`, "utf8");
    console.log(`Wrote ${file} (${snap.counts.total} listings)`);
  }

  if (snapshots.length < 2) {
    console.log("Need at least 2 days in the window to compare.");
    return;
  }

  // Compare each consecutive pair; highlight the last pair (prev → next day).
  const pairs = [];
  for (let i = 1; i < snapshots.length; i++) {
    pairs.push(compareDays(snapshots[i - 1], snapshots[i]));
  }
  const latest = pairs[pairs.length - 1];

  const cmpJson = path.join(
    OUT_DIR,
    `property-search-compare-${latest.previousDay}-vs-${latest.nextDay}.json`,
  );
  const cmpMd = path.join(
    OUT_DIR,
    `property-search-compare-${latest.previousDay}-vs-${latest.nextDay}.md`,
  );
  await writeFile(cmpJson, `${JSON.stringify(latest, null, 2)}\n`, "utf8");
  await writeFile(cmpMd, markdownCompare(latest), "utf8");

  console.log(`Wrote ${cmpJson}`);
  console.log(`Wrote ${cmpMd}`);
  console.log(
    `Compare ${latest.previousDay} → ${latest.nextDay}: +${latest.summary.added} new, -${latest.summary.removed} gone, ${latest.summary.carried} carried`,
  );
  console.log(`Folder: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

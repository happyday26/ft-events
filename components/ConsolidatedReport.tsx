"use client";

import { useState, type ReactNode } from "react";
import {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  PROPERTY_FILTER_MODES,
  propertyFilterModeLabel,
  propertyFilterModeSummary,
  type ConsolidatedReport,
  type ConsolidatedReportScope,
  type ConsolidatedSectionKey,
  type PropertyFilterMode,
} from "@/lib/consolidated-report-types";
import type { ArtMateReport } from "@/lib/art-mate-report";
import type { EstateListingReport } from "@/lib/estate-listing-report";
import type { HappyRetiredReport } from "@/lib/happy-retired-report";
import type { JcchReport } from "@/lib/jcch-report";
import type { PopticketReport } from "@/lib/popticket-report";
import type { UrbtixReport } from "@/lib/urbtix-report";

function formatGeneratedAt(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-HK", {
      timeZone: "Asia/Hong_Kong",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function showDates(start: string, end: string): string {
  if (!start && !end) return "—";
  if (start && end && start !== end) return `${start} → ${end}`;
  return start || end;
}

function SectionShell({
  area,
  title,
  count,
  error,
  children,
}: {
  area: string;
  title: string;
  count: number | null;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest-100 px-3 py-2.5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-sage-800/45">
            {area}
          </p>
          <h3 className="font-serif text-sm font-semibold text-sage-900">
            {title}
          </h3>
        </div>
        <span className="text-xs text-sage-800/60">
          {error
            ? "Unavailable"
            : count == null
              ? "—"
              : `${count} item${count === 1 ? "" : "s"}`}
        </span>
      </div>
      {error ? (
        <p className="px-3 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : (
        children
      )}
    </div>
  );
}

function EmptyRow({ message }: { message: string }) {
  return <p className="px-3 py-4 text-sm text-sage-800/60">{message}</p>;
}

type CompareListingRow = EstateListingReport["listings"][number] & {
  estateId?: string;
  estateLabel?: string;
};

function ListingsTable({
  listings,
}: {
  listings: EstateListingReport["listings"];
}) {
  if (listings.length === 0) {
    return <EmptyRow message="No listings found in this window." />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-sage-50 text-xs uppercase tracking-wide text-sage-800/55">
          <tr>
            <th className="px-3 py-2 font-medium">Date</th>
            <th className="px-3 py-2 font-medium">Source</th>
            <th className="px-3 py-2 font-medium">Unit</th>
            <th className="px-3 py-2 font-medium">Size</th>
            <th className="px-3 py-2 font-medium">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-forest-100">
          {listings.map((row) => (
            <tr key={`${row.source}-${row.ref}`} className="align-top">
              <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                <div>{row.date}</div>
                <div className="text-[11px] text-sage-800/45">
                  {row.dateType === "publish" ? "published" : "updated"}
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                {row.source}
              </td>
              <td className="px-3 py-2.5">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest-700 hover:underline"
                >
                  {row.title || row.ref}
                </a>
                <div className="text-[11px] text-sage-800/45">{row.ref}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                {row.nSize ? `${row.nSize.toLocaleString()}呎` : "—"}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                {row.price || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function sourceCountsLine(listings: EstateListingReport["listings"]): string {
  const count = (source: EstateListingReport["listings"][number]["source"]) =>
    listings.filter((l) => l.source === source).length;
  return [
    `Centaline ${count("Centaline")}`,
    `Midland ${count("Midland")}`,
    `28Hse ${count("28Hse")}`,
    `Ricacorp ${count("Ricacorp")}`,
  ].join(" · ");
}

function EstateTable({ report }: { report: EstateListingReport }) {
  const sourceLine = [
    `Centaline ${report.counts.centaline}`,
    `Midland ${report.counts.midland}`,
    `28Hse ${report.counts.hse28}`,
    `Ricacorp ${report.counts.ricacorp}`,
  ].join(" · ");
  const warningNotes = report.notes.filter((n) =>
    /unavailable|failed|blocked|403|401/i.test(n),
  );

  return (
    <div>
      <div className="border-b border-forest-100 px-3 py-2 text-[11px] text-sage-800/55">
        {sourceLine}
      </div>
      {warningNotes.length > 0 ? (
        <ul className="space-y-1 border-b border-forest-100 bg-amber-50/70 px-3 py-2 text-xs text-amber-900/80">
          {warningNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : null}
      <ListingsTable listings={report.listings} />
    </div>
  );
}

function CompareListingsByEstate({
  listings,
  titles,
}: {
  listings: CompareListingRow[];
  titles: {
    harbourside: string;
    sorrento: string;
    villageGardens: string;
  };
}) {
  const groups: Array<{
    id: string;
    title: string;
    rows: EstateListingReport["listings"];
  }> = [
    { id: "harbourside", title: titles.harbourside, rows: [] },
    { id: "sorrento", title: titles.sorrento, rows: [] },
    { id: "village-gardens", title: titles.villageGardens, rows: [] },
  ];
  for (const row of listings) {
    const group = groups.find((g) => g.id === row.estateId);
    if (group) group.rows.push(row);
  }
  const visible = groups.filter((g) => g.rows.length > 0);
  if (visible.length === 0) {
    return <EmptyRow message="No listings found in this window." />;
  }
  return (
    <>
      {visible.map((group) => (
        <SectionShell
          key={group.id}
          area="Property"
          title={group.title}
          count={group.rows.length}
        >
          <div className="border-b border-forest-100 px-3 py-2 text-[11px] text-sage-800/55">
            {sourceCountsLine(group.rows)}
          </div>
          <ListingsTable listings={group.rows} />
        </SectionShell>
      ))}
    </>
  );
}

function UrbtixTable({ report }: { report: UrbtixReport }) {
  if (report.events.length === 0) {
    return <EmptyRow message="No newly listed programmes in this window." />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-sage-50 text-xs uppercase tracking-wide text-sage-800/55">
          <tr>
            <th className="px-3 py-2 font-medium">Listed</th>
            <th className="px-3 py-2 font-medium">Programme</th>
            <th className="px-3 py-2 font-medium">Venue</th>
            <th className="px-3 py-2 font-medium">Show dates</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-forest-100">
          {report.events.map((row) => (
            <tr key={`${row.listedDate}-${row.code}`} className="align-top">
              <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                {row.listedDate}
              </td>
              <td className="px-3 py-2.5">
                <a
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest-700 hover:underline"
                >
                  {row.title}
                </a>
                <div className="text-[11px] text-sage-800/45">
                  {row.category || row.code}
                </div>
              </td>
              <td className="px-3 py-2.5 text-xs text-sage-800/70">
                {row.venue || "—"}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                {showDates(row.startDate, row.endDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EventListTable({
  report,
  listedLabel,
}: {
  report: PopticketReport | HappyRetiredReport | JcchReport | ArtMateReport;
  listedLabel: string;
}) {
  if (report.events.length === 0) {
    return <EmptyRow message="No newly listed items in this window." />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-sage-50 text-xs uppercase tracking-wide text-sage-800/55">
          <tr>
            <th className="px-3 py-2 font-medium">Listed</th>
            <th className="px-3 py-2 font-medium">Programme</th>
            <th className="px-3 py-2 font-medium">Venue</th>
            <th className="px-3 py-2 font-medium">Show dates</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-forest-100">
          {report.events.map((row) => {
            const key = `${row.listedDate}-${row.slug}`;
            return (
              <tr key={key} className="align-top">
                <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                  <div>{row.listedDate}</div>
                  <div className="text-[11px] text-sage-800/45">
                    {listedLabel}
                  </div>
                </td>
                <td className="px-3 py-2.5">
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-forest-700 hover:underline"
                  >
                    {row.title}
                  </a>
                  <div className="text-[11px] text-sage-800/45">
                    {row.category || "—"}
                  </div>
                </td>
                <td className="px-3 py-2.5 text-xs text-sage-800/70">
                  {row.venue || "—"}
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                  {row.showDates || "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

type SearchKind = Exclude<ConsolidatedReportScope, "all">;

const PROPERTY_SECTION_TITLES = {
  harbourside: "Harbourside · 君臨天下",
  sorrento: "Sorrento · 擎天半島 · 1,000呎+",
  villageGardens: "Village Gardens · 又一村花園",
} as const;

function propertySectionSuffix(
  mode: PropertyFilterMode | undefined,
  estate?: "harbourside" | "sorrento" | "villageGardens",
): string {
  if (!mode || mode === "all") return "";
  if (
    estate === "villageGardens" &&
    (mode === "exclude-2bed" || mode === "exclude-2bed-be")
  ) {
    return " · omitted";
  }
  if (estate === "harbourside") return " · excl. 2-bed & B/E";
  return " · excl. 2-bed";
}

const SEARCH_DEFS: {
  scope: Exclude<SearchKind, "property">;
  title: string;
  blurb: string;
  buttonLabel: string;
  loadingHint: string;
  ariaLabel: string;
}[] = [
  {
    scope: "performance",
    title: "Performance search",
    blurb: "URBTIX · Popticket · Art-mate",
    buttonLabel: "Run performance search",
    loadingHint: "Pulling performance listings… this can take a minute.",
    ariaLabel: "Performance search",
  },
  {
    scope: "golden-life",
    title: "Golden Life search",
    blurb: "Happy Retired · JCCH",
    buttonLabel: "Run Golden Life search",
    loadingHint: "Pulling Golden Life listings… this can take a minute.",
    ariaLabel: "Golden Life search",
  },
];

function summaryLine(report: ConsolidatedReport): string {
  if (report.scope === "property") {
    const filter =
      report.propertyFilter != null
        ? ` · ${propertyFilterModeLabel(report.propertyFilter)}`
        : "";
    return `Property ${
      report.counts.harbourside +
      report.counts.sorrento +
      report.counts.villageGardens
    }${filter}`;
  }
  if (report.scope === "performance") {
    return `Performance ${
      report.counts.urbtix + report.counts.popticket + report.counts.artMate
    }`;
  }
  if (report.scope === "golden-life") {
    return `Golden Life ${report.counts.happyRetired + report.counts.jcch}`;
  }
  return `${report.counts.total} total`;
}

type DayCompareSummary = {
  outDir: string;
  since: string;
  until: string;
  previousDay?: string;
  nextDay?: string;
  previousTotal?: number;
  nextTotal?: number;
  added?: number;
  removed?: number;
  carried?: number;
  openedPath?: string | null;
  compareHtmlPath?: string | null;
  addedListings: CompareListingRow[];
  removedListings: CompareListingRow[];
};

function PropertySearchPanel({ days }: { days: number }) {
  const [loadingMode, setLoadingMode] = useState<PropertyFilterMode | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ConsolidatedReport | null>(null);
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareError, setCompareError] = useState<string | null>(null);
  const [compareResult, setCompareResult] = useState<DayCompareSummary | null>(
    null,
  );

  const generate = async (mode: PropertyFilterMode) => {
    setLoadingMode(mode);
    setError(null);
    try {
      const response = await fetch(
        `/api/consolidated-report?days=${days}&scope=property&propertyFilter=${mode}`,
        { cache: "no-store" },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      setReport((await response.json()) as ConsolidatedReport);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not generate report.",
      );
    } finally {
      setLoadingMode(null);
    }
  };

  const runDayCompare = async () => {
    setCompareLoading(true);
    setCompareError(null);
    try {
      // Always compare using Exclude 2-bed & units B&E (Harbourside+Sorrento).
      const filter = "exclude-2bed-be" as const;
      const response = await fetch(
        `/api/property/day-compare?days=2&propertyFilter=${filter}&open=1`,
        { method: "POST", cache: "no-store" },
      );
      const body = (await response.json().catch(() => null)) as {
        error?: string;
        outDir?: string;
        since?: string;
        until?: string;
        openedPath?: string | null;
        compareHtmlPath?: string | null;
        compare?: {
          previousDay: string;
          nextDay: string;
          summary: {
            previousTotal: number;
            nextTotal: number;
            added: number;
            removed: number;
            carried: number;
          };
          added?: CompareListingRow[];
          removed?: CompareListingRow[];
        } | null;
      } | null;
      if (!response.ok) {
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      if (!body?.outDir || !body.since || !body.until) {
        throw new Error("Compare completed but response was incomplete.");
      }
      setCompareResult({
        outDir: body.outDir,
        since: body.since,
        until: body.until,
        previousDay: body.compare?.previousDay,
        nextDay: body.compare?.nextDay,
        previousTotal: body.compare?.summary.previousTotal,
        nextTotal: body.compare?.summary.nextTotal,
        added: body.compare?.summary.added,
        removed: body.compare?.summary.removed,
        carried: body.compare?.summary.carried,
        openedPath: body.openedPath,
        compareHtmlPath: body.compareHtmlPath,
        addedListings: body.compare?.added ?? [],
        removedListings: body.compare?.removed ?? [],
      });
      // Also open a browser tab view (same table layout as search).
      window.open("/api/property/day-compare", "_blank", "noopener,noreferrer");
    } catch (err) {
      setCompareError(
        err instanceof Error ? err.message : "Could not run day compare.",
      );
    } finally {
      setCompareLoading(false);
    }
  };

  const clear = () => {
    setReport(null);
    setError(null);
  };

  const loading = loadingMode != null || compareLoading;
  const err = (key: ConsolidatedSectionKey) => report?.errors[key];
  const filterMode = report?.propertyFilter;
  const villageOmitted =
    filterMode === "exclude-2bed" || filterMode === "exclude-2bed-be";

  return (
    <section aria-label="Property search" className="mb-6">
      <div className="mb-3 flex flex-col gap-3 rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100 sm:max-w-lg">
        <div>
          <p className="text-sm font-medium text-sage-900">Property search</p>
          <p className="text-xs text-sage-800/55">
            Harbourside · Sorrento · Village Gardens — B&E only on Harbourside;
            又一村花園 omitted from both exclude searches
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {PROPERTY_FILTER_MODES.map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => generate(mode)}
              disabled={loading}
              className="rounded-full bg-forest-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
            >
              {loadingMode === mode
                ? "Searching…"
                : propertyFilterModeLabel(mode)}
            </button>
          ))}
          <button
            type="button"
            onClick={runDayCompare}
            disabled={loading}
            className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-forest-800 ring-1 ring-forest-300 transition hover:bg-forest-50 disabled:opacity-60"
          >
            {compareLoading
              ? "Comparing & opening…"
              : "Compare & open report"}
          </button>
          <p className="text-[11px] text-sage-800/50">
            Always uses Exclude 2-bed & units B&E. New additions = agent refs
            not seen yesterday. Saves to Desktop\FT-property-search and opens
            the report.
          </p>
          {compareError ? (
            <p
              className="rounded-md bg-red-50 px-2.5 py-2 text-xs text-red-700 ring-1 ring-red-100"
              role="alert"
            >
              {compareError}
            </p>
          ) : null}
          {compareResult ? (
            <div
              className="rounded-md bg-forest-50 px-2.5 py-2 text-xs text-sage-900 ring-1 ring-forest-200"
              role="status"
              aria-live="polite"
            >
              <p className="font-semibold text-forest-900">
                {compareResult.previousDay && compareResult.nextDay
                  ? `${compareResult.previousDay} → ${compareResult.nextDay}`
                  : `${compareResult.since} → ${compareResult.until}`}
              </p>
              <p className="mt-1 text-sm font-semibold tabular-nums text-sage-900">
                +{compareResult.added ?? 0} new
                <span className="mx-1.5 font-normal text-sage-800/40">·</span>
                −{compareResult.removed ?? 0} gone
                <span className="mx-1.5 font-normal text-sage-800/40">·</span>
                {compareResult.carried ?? 0} carried
              </p>
              <p className="mt-1 break-all text-[11px] text-sage-800/65">
                {compareResult.previousTotal ?? "—"} yesterday →{" "}
                {compareResult.nextTotal ?? "—"} today
                <br />
                {compareResult.openedPath
                  ? `Opened ${compareResult.openedPath}`
                  : `Saved to ${compareResult.outDir}`}
              </p>
              <a
                href="/api/property/day-compare"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex font-medium text-forest-700 hover:underline"
              >
                Open report in browser →
              </a>
            </div>
          ) : null}
        </div>
      </div>

      {compareResult ? (
        <div className="mb-6">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-sm font-semibold text-sage-900">
              Day compare · new additions
              {compareResult.previousDay && compareResult.nextDay
                ? ` · ${compareResult.previousDay} → ${compareResult.nextDay}`
                : ""}
            </h3>
            <button
              type="button"
              onClick={() => {
                setCompareResult(null);
                setCompareError(null);
              }}
              className="rounded-full px-3 py-1 text-xs font-medium text-sage-800/70 transition hover:bg-forest-50 hover:text-sage-900"
            >
              Clear compare
            </button>
          </div>
          <p className="mb-3 text-xs text-sage-800/55">
            Exclude 2-bed & units B&E · new = agent refs not in yesterday’s
            stock · +{compareResult.added ?? 0} new · −
            {compareResult.removed ?? 0} gone · {compareResult.carried ?? 0}{" "}
            carried
          </p>
          <CompareListingsByEstate
            listings={compareResult.addedListings}
            titles={PROPERTY_SECTION_TITLES}
          />
          {(compareResult.removedListings?.length ?? 0) > 0 ? (
            <div className="mt-4">
              <h3 className="mb-2 font-serif text-sm font-semibold text-sage-900">
                Removed since yesterday
              </h3>
              <CompareListingsByEstate
                listings={compareResult.removedListings}
                titles={PROPERTY_SECTION_TITLES}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {error || report || loading ? (
        <div>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-sm font-semibold text-sage-900">
              Property search result
              {filterMode ? ` · ${propertyFilterModeLabel(filterMode)}` : ""}
            </h3>
            <button
              type="button"
              onClick={clear}
              className="rounded-full px-3 py-1 text-xs font-medium text-sage-800/70 transition hover:bg-forest-50 hover:text-sage-900"
            >
              Clear
            </button>
          </div>

          {error ? (
            <p
              className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-100"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          {loading ? (
            <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
              Pulling estate listings… this can take a minute.
            </p>
          ) : null}

          {report ? (
            <>
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 rounded-lg bg-white px-3 py-2.5 text-xs text-sage-800/65 ring-1 ring-forest-100">
                <span>
                  {report.since} → {report.until} · {summaryLine(report)}
                </span>
                <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
              </div>
              {filterMode ? (
                <p className="mb-3 text-xs text-sage-800/55">
                  Filter used: {propertyFilterModeSummary(filterMode)}
                </p>
              ) : null}

              <SectionShell
                area="Property"
                title={`${PROPERTY_SECTION_TITLES.harbourside}${propertySectionSuffix(filterMode, "harbourside")}`}
                count={report.property.harbourside?.counts.total ?? null}
                error={err("harbourside")}
              >
                {report.property.harbourside ? (
                  <EstateTable report={report.property.harbourside} />
                ) : null}
              </SectionShell>

              <SectionShell
                area="Property"
                title={`${PROPERTY_SECTION_TITLES.sorrento}${propertySectionSuffix(filterMode, "sorrento")}`}
                count={report.property.sorrento?.counts.total ?? null}
                error={err("sorrento")}
              >
                {report.property.sorrento ? (
                  <EstateTable report={report.property.sorrento} />
                ) : null}
              </SectionShell>

              <SectionShell
                area="Property"
                title={`${PROPERTY_SECTION_TITLES.villageGardens}${propertySectionSuffix(filterMode, "villageGardens")}`}
                count={
                  villageOmitted
                    ? 0
                    : (report.property.villageGardens?.counts.total ?? null)
                }
                error={err("village-gardens")}
              >
                {villageOmitted ? (
                  <p className="px-3 py-2 text-sm text-sage-800/60">
                    Omitted for this exclude search.
                  </p>
                ) : report.property.villageGardens ? (
                  <EstateTable report={report.property.villageGardens} />
                ) : null}
              </SectionShell>

              {report.notes.length > 0 ? (
                <ul className="rounded-lg bg-white px-3 py-2 text-[11px] text-sage-800/50 ring-1 ring-forest-100">
                  {report.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

function SearchPanel({
  scope,
  title,
  blurb,
  buttonLabel,
  loadingHint,
  ariaLabel,
  days,
}: {
  scope: Exclude<SearchKind, "property">;
  title: string;
  blurb: string;
  buttonLabel: string;
  loadingHint: string;
  ariaLabel: string;
  days: number;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ConsolidatedReport | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/consolidated-report?days=${days}&scope=${scope}`,
        { cache: "no-store" },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      setReport((await response.json()) as ConsolidatedReport);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not generate report.",
      );
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setReport(null);
    setError(null);
  };

  const err = (key: ConsolidatedSectionKey) => report?.errors[key];

  return (
    <section aria-label={ariaLabel} className="mb-6">
      <div className="mb-3 flex flex-col gap-3 rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100 sm:max-w-md">
        <div>
          <p className="text-sm font-medium text-sage-900">{title}</p>
          <p className="text-xs text-sage-800/55">{blurb}</p>
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="rounded-full bg-forest-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
        >
          {loading ? "Searching…" : buttonLabel}
        </button>
      </div>

      {error || report || loading ? (
        <div>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-sm font-semibold text-sage-900">
              {title} result
            </h3>
            <button
              type="button"
              onClick={clear}
              className="rounded-full px-3 py-1 text-xs font-medium text-sage-800/70 transition hover:bg-forest-50 hover:text-sage-900"
            >
              Clear
            </button>
          </div>

          {error ? (
            <p
              className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-100"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          {loading ? (
            <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
              {loadingHint}
            </p>
          ) : null}

          {report ? (
            <>
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 rounded-lg bg-white px-3 py-2.5 text-xs text-sage-800/65 ring-1 ring-forest-100">
                <span>
                  {report.since} → {report.until} · {summaryLine(report)}
                </span>
                <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
              </div>

              {scope === "performance" ? (
                <>
                  <SectionShell
                    area="Performance"
                    title="URBTIX · 城市售票網"
                    count={report.artsCulture.urbtix?.counts.total ?? null}
                    error={err("urbtix")}
                  >
                    {report.artsCulture.urbtix ? (
                      <UrbtixTable report={report.artsCulture.urbtix} />
                    ) : null}
                  </SectionShell>

                  <SectionShell
                    area="Performance"
                    title="Popticket · 撲飛"
                    count={report.artsCulture.popticket?.counts.total ?? null}
                    error={err("popticket")}
                  >
                    {report.artsCulture.popticket ? (
                      <EventListTable
                        report={report.artsCulture.popticket}
                        listedLabel="updated"
                      />
                    ) : null}
                  </SectionShell>

                  <SectionShell
                    area="Performance"
                    title="Art-mate · 門票搜尋"
                    count={report.artsCulture.artMate?.counts.total ?? null}
                    error={err("art-mate")}
                  >
                    {report.artsCulture.artMate ? (
                      <EventListTable
                        report={report.artsCulture.artMate}
                        listedLabel="poster date"
                      />
                    ) : null}
                  </SectionShell>
                </>
              ) : null}

              {scope === "golden-life" ? (
                <>
                  <SectionShell
                    area="Golden Life"
                    title="樂活新中年 · Happy Retired"
                    count={
                      report.goldenLife.happyRetired?.counts.total ?? null
                    }
                    error={err("happy-retired")}
                  >
                    {report.goldenLife.happyRetired ? (
                      <EventListTable
                        report={report.goldenLife.happyRetired}
                        listedLabel="published"
                      />
                    ) : null}
                  </SectionShell>

                  <SectionShell
                    area="Golden Life"
                    title="賽馬會流金匯 · JC Cadenza Hub"
                    count={report.goldenLife.jcch?.counts.total ?? null}
                    error={err("jcch")}
                  >
                    {report.goldenLife.jcch ? (
                      <EventListTable
                        report={report.goldenLife.jcch}
                        listedLabel="listed"
                      />
                    ) : null}
                  </SectionShell>
                </>
              ) : null}

              {report.notes.length > 0 ? (
                <ul className="rounded-lg bg-white px-3 py-2 text-[11px] text-sage-800/50 ring-1 ring-forest-100">
                  {report.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default function ConsolidatedReportPanel() {
  const days = CONSOLIDATED_REPORT_DEFAULT_DAYS;

  return (
    <section aria-label="Property and performance searches" className="mb-8">
      <div className="mb-4">
        <h2 className="font-serif text-base font-semibold text-sage-900">
          Searches
        </h2>
        <p className="mt-0.5 text-xs text-sage-800/60">
          Property · Performance · Golden Life · last {days} days (HK)
        </p>
      </div>

      <PropertySearchPanel days={days} />
      {SEARCH_DEFS.map((def) => (
        <SearchPanel key={def.scope} days={days} {...def} />
      ))}
    </section>
  );
}

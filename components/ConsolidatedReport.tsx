"use client";

import { useState, type ReactNode } from "react";
import {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  type ConsolidatedReport,
  type ConsolidatedReportScope,
  type ConsolidatedSectionKey,
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
      {report.listings.length === 0 ? (
        <EmptyRow message="No listings found in this window." />
      ) : (
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
              {report.listings.map((row) => (
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
      )}
    </div>
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

const SEARCH_DEFS: {
  scope: SearchKind;
  title: string;
  blurb: string;
  buttonLabel: string;
  loadingHint: string;
  ariaLabel: string;
}[] = [
  {
    scope: "property",
    title: "Property search",
    blurb: "Harbourside · Sorrento · Village Gardens · 3-bed",
    buttonLabel: "Run property search",
    loadingHint: "Pulling estate listings… this can take a minute.",
    ariaLabel: "Property search",
  },
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
    return `Property ${
      report.counts.harbourside +
      report.counts.sorrento +
      report.counts.villageGardens
    }`;
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

function SearchPanel({
  scope,
  title,
  blurb,
  buttonLabel,
  loadingHint,
  ariaLabel,
  days,
}: {
  scope: SearchKind;
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
          className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
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

              {scope === "property" ? (
                <>
                  <SectionShell
                    area="Property"
                    title="Harbourside · 君臨天下 · 3-bed"
                    count={report.property.harbourside?.counts.total ?? null}
                    error={err("harbourside")}
                  >
                    {report.property.harbourside ? (
                      <EstateTable report={report.property.harbourside} />
                    ) : null}
                  </SectionShell>

                  <SectionShell
                    area="Property"
                    title="Sorrento · 擎天半島 · 3-bed 1,000呎+"
                    count={report.property.sorrento?.counts.total ?? null}
                    error={err("sorrento")}
                  >
                    {report.property.sorrento ? (
                      <EstateTable report={report.property.sorrento} />
                    ) : null}
                  </SectionShell>

                  <SectionShell
                    area="Property"
                    title="Village Gardens · 又一村花園 · 3-bed"
                    count={
                      report.property.villageGardens?.counts.total ?? null
                    }
                    error={err("village-gardens")}
                  >
                    {report.property.villageGardens ? (
                      <EstateTable report={report.property.villageGardens} />
                    ) : null}
                  </SectionShell>
                </>
              ) : null}

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

      {SEARCH_DEFS.map((def) => (
        <SearchPanel key={def.scope} days={days} {...def} />
      ))}
    </section>
  );
}

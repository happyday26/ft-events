"use client";

import { useState, type ReactNode } from "react";
import {
  CONSOLIDATED_REPORT_DEFAULT_DAYS,
  type ConsolidatedReport,
  type ConsolidatedSectionKey,
} from "@/lib/consolidated-report-types";
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
  if (report.listings.length === 0) {
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
  report: PopticketReport | HappyRetiredReport | JcchReport;
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
            const key =
              "slug" in row
                ? `${row.listedDate}-${row.slug}`
                : `${row.listedDate}-${row.id}`;
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

export default function ConsolidatedReportPanel() {
  const days = CONSOLIDATED_REPORT_DEFAULT_DAYS;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<ConsolidatedReport | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/consolidated-report?days=${days}`, {
        cache: "no-store",
      });
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
    <section aria-label="Consolidated daily digest" className="mb-8">
      <div className="mb-3">
        <h2 className="font-serif text-base font-semibold text-sage-900">
          Daily digest
        </h2>
        <p className="mt-0.5 text-xs text-sage-800/60">
          Property · Arts & Culture · Golden Life · last {days} days (HK)
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-3 rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100 sm:max-w-md">
        <div>
          <p className="text-sm font-medium text-sage-900">
            Consolidated report
          </p>
          <p className="text-xs text-sage-800/55">
            Harbourside, Village Gardens, URBTIX, Popticket, Happy Retired, JCCH
          </p>
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
        >
          {loading ? "Generating…" : "Generate digest"}
        </button>
      </div>

      {error || report || loading ? (
        <div>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-sm font-semibold text-sage-900">
              Digest result
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
              Pulling Property, Arts & Culture, and Golden Life reports… this
              can take a couple of minutes.
            </p>
          ) : null}

          {report ? (
            <>
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 rounded-lg bg-white px-3 py-2.5 text-xs text-sage-800/65 ring-1 ring-forest-100">
                <span>
                  {report.since} → {report.until} · {report.counts.total} total
                  {" · "}
                  Property{" "}
                  {report.counts.harbourside +
                    report.counts.sorrento +
                    report.counts.villageGardens}
                  {" · "}
                  Arts {report.counts.urbtix + report.counts.popticket}
                  {" · "}
                  Golden Life{" "}
                  {report.counts.happyRetired + report.counts.jcch}
                </span>
                <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
              </div>

              <SectionShell
                area="Property"
                title="Harbourside · 君臨天下"
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
                title="Village Gardens · 又一村花園"
                count={report.property.villageGardens?.counts.total ?? null}
                error={err("village-gardens")}
              >
                {report.property.villageGardens ? (
                  <EstateTable report={report.property.villageGardens} />
                ) : null}
              </SectionShell>

              <SectionShell
                area="Arts & Culture"
                title="URBTIX · 城市售票網"
                count={report.artsCulture.urbtix?.counts.total ?? null}
                error={err("urbtix")}
              >
                {report.artsCulture.urbtix ? (
                  <UrbtixTable report={report.artsCulture.urbtix} />
                ) : null}
              </SectionShell>

              <SectionShell
                area="Arts & Culture"
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
                area="Golden Life"
                title="樂活新中年 · Happy Retired"
                count={report.goldenLife.happyRetired?.counts.total ?? null}
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

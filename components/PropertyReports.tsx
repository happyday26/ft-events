"use client";

import { useState } from "react";
import {
  ESTATE_REPORT_DEFAULT_DAYS,
  type EstateListingReport,
} from "@/lib/estate-listing-report";

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

type ReportKey = "harbourside" | "sorrento" | "village-gardens";

interface EstateReportDef {
  key: ReportKey;
  title: string;
  buttonLabel: string;
  apiPath: string;
  criteria?: string;
}

const ESTATES: EstateReportDef[] = [
  {
    key: "harbourside",
    title: "Harbourside · 君臨天下",
    buttonLabel: "Harbourside report",
    apiPath: "/api/property/harbourside-report",
  },
  {
    key: "sorrento",
    title: "Sorrento · 擎天半島",
    buttonLabel: "Sorrento report",
    apiPath: "/api/property/sorrento-report",
    criteria: "3-bed · over 1,000呎",
  },
  {
    key: "village-gardens",
    title: "Village Gardens · 又一村花園",
    buttonLabel: "又一村花園 report",
    apiPath: "/api/property/village-gardens-report",
  },
];

export default function PropertyReports() {
  const days = ESTATE_REPORT_DEFAULT_DAYS;
  const [loadingKey, setLoadingKey] = useState<ReportKey | null>(null);
  const [errors, setErrors] = useState<Partial<Record<ReportKey, string>>>({});
  const [reports, setReports] = useState<
    Partial<Record<ReportKey, EstateListingReport>>
  >({});

  const generate = async (estate: EstateReportDef) => {
    setLoadingKey(estate.key);
    setErrors((prev) => ({ ...prev, [estate.key]: undefined }));
    try {
      const response = await fetch(`${estate.apiPath}?days=${days}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      const data = (await response.json()) as EstateListingReport;
      setReports((prev) => ({ ...prev, [estate.key]: data }));
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        [estate.key]:
          err instanceof Error ? err.message : "Could not generate report.",
      }));
    } finally {
      setLoadingKey(null);
    }
  };

  const clearReport = (key: ReportKey) => {
    setReports((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  return (
    <section aria-label="Estate listing reports" className="mb-8">
      <div className="mb-3">
        <h2 className="font-serif text-base font-semibold text-sage-900">
          Estate reports
        </h2>
        <p className="mt-0.5 text-xs text-sage-800/60">
          Centaline · Midland · 28Hse · Ricacorp · default last {days} days
          (HK)
        </p>
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ESTATES.map((estate) => {
          const loading = loadingKey === estate.key;
          return (
            <div
              key={estate.key}
              className="flex flex-col gap-3 rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100"
            >
              <div>
                <p className="text-sm font-medium text-sage-900">
                  {estate.title}
                </p>
                <p className="text-xs text-sage-800/55">
                  {estate.criteria
                    ? `${estate.criteria} · last ${days} days`
                    : `Fresh listing report · last ${days} days`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => generate(estate)}
                disabled={loadingKey != null}
                className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
              >
                {loading ? "Generating…" : estate.buttonLabel}
              </button>
            </div>
          );
        })}
      </div>

      {ESTATES.map((estate) => {
        const error = errors[estate.key];
        const report = reports[estate.key];
        const loading = loadingKey === estate.key;
        if (!error && !report && !loading) return null;

        return (
          <div key={`${estate.key}-result`} className="mb-4">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif text-sm font-semibold text-sage-900">
                {estate.title}
              </h3>
              <button
                type="button"
                onClick={() => clearReport(estate.key)}
                className="rounded-full px-3 py-1 text-xs font-medium text-sage-800/70 transition hover:bg-forest-50 hover:text-sage-900"
              >
                Clear report
              </button>
            </div>

            {error ? (
              <p
                className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-100"
                role="alert"
              >
                {error}
              </p>
            ) : null}

            {loading ? (
              <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
                Fetching Centaline, Midland, 28Hse, and Ricacorp… this can take
                up to a minute.
              </p>
            ) : null}

            {report ? (
              <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest-100 px-3 py-2.5 text-xs text-sage-800/65">
                  <span>
                    {report.since} → {report.until} · {report.counts.total}{" "}
                    listings · Centaline {report.counts.centaline} · Midland{" "}
                    {report.counts.midland} · 28Hse {report.counts.hse28} ·
                    Ricacorp {report.counts.ricacorp}
                  </span>
                  <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
                </div>

                {report.listings.length === 0 ? (
                  <p className="px-3 py-4 text-sm text-sage-800/60">
                    No listings found in this window.
                  </p>
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
                          <tr
                            key={`${row.source}-${row.ref}`}
                            className="align-top"
                          >
                            <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                              <div>{row.date}</div>
                              <div className="text-[11px] text-sage-800/45">
                                {row.dateType === "publish"
                                  ? "published"
                                  : "updated"}
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
                              <div className="text-[11px] text-sage-800/45">
                                {row.ref}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                              {row.nSize
                                ? `${row.nSize.toLocaleString()}呎`
                                : "—"}
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

                {report.notes.length > 0 ? (
                  <ul className="border-t border-forest-100 px-3 py-2 text-[11px] text-sage-800/50">
                    {report.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}

"use client";

import { useState } from "react";
import type { HappyRetiredReport } from "@/lib/happy-retired-report";
import type { JcchReport } from "@/lib/jcch-report";

const DEFAULT_DAYS = 4;

type ReportKey = "happy-retired" | "jcch";

interface ReportDef {
  key: ReportKey;
  title: string;
  buttonLabel: string;
  apiPath: string;
  loadingHint: string;
  listedLabel: string;
}

const REPORTS: ReportDef[] = [
  {
    key: "happy-retired",
    title: "樂活新中年 · Happy Retired",
    buttonLabel: "Happy Retired report",
    apiPath: "/api/golden-life/happy-retired-report",
    loadingHint: "Fetching Happy Retired lessons and activities…",
    listedLabel: "published",
  },
  {
    key: "jcch",
    title: "賽馬會流金匯 · JC Cadenza Hub",
    buttonLabel: "JC Cadenza Hub report",
    apiPath: "/api/golden-life/jcch-report",
    loadingHint: "Reading JCCH course calendar…",
    listedLabel: "listed",
  },
];

type AnyReport = HappyRetiredReport | JcchReport;

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

export default function ActivityReports() {
  const days = DEFAULT_DAYS;
  const [loadingKey, setLoadingKey] = useState<ReportKey | null>(null);
  const [errors, setErrors] = useState<Partial<Record<ReportKey, string>>>({});
  const [reports, setReports] = useState<Partial<Record<ReportKey, AnyReport>>>(
    {},
  );

  const generate = async (def: ReportDef) => {
    setLoadingKey(def.key);
    setErrors((prev) => ({ ...prev, [def.key]: undefined }));
    try {
      const response = await fetch(`${def.apiPath}?days=${days}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      const data = (await response.json()) as AnyReport;
      setReports((prev) => ({
        ...prev,
        [def.key]: data,
      }));
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        [def.key]:
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
    <section aria-label="Activity reports" className="mb-8">
      <div className="mb-3">
        <h2 className="font-serif text-base font-semibold text-sage-900">
          Activity reports
        </h2>
        <p className="mt-0.5 text-xs text-sage-800/60">
          Happy Retired · JC Cadenza Hub · newly listed lessons & activities ·
          default last {days} days (HK)
        </p>
      </div>

      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        {REPORTS.map((def) => {
          const loading = loadingKey === def.key;
          return (
            <div
              key={def.key}
              className="flex flex-col gap-3 rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100"
            >
              <div>
                <p className="text-sm font-medium text-sage-900">{def.title}</p>
                <p className="text-xs text-sage-800/55">
                  Fresh listing report · last {days} days
                </p>
              </div>
              <button
                type="button"
                onClick={() => generate(def)}
                disabled={loadingKey != null}
                className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
              >
                {loading ? "Generating…" : def.buttonLabel}
              </button>
            </div>
          );
        })}
      </div>

      {REPORTS.map((def) => {
        const error = errors[def.key];
        const report = reports[def.key];
        const loading = loadingKey === def.key;
        if (!error && !report && !loading) return null;

        return (
          <div key={`${def.key}-result`} className="mb-4">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif text-sm font-semibold text-sage-900">
                {def.title}
              </h3>
              <button
                type="button"
                onClick={() => clearReport(def.key)}
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
                {def.loadingHint}
              </p>
            ) : null}

            {report ? (
              <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest-100 px-3 py-2.5 text-xs text-sage-800/65">
                  <span>
                    {report.since} → {report.until} · {report.counts.total}{" "}
                    newly listed
                  </span>
                  <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
                </div>

                {report.events.length === 0 ? (
                  <p className="px-3 py-4 text-sm text-sage-800/60">
                    No newly listed lessons or activities found in this window.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-sage-50 text-xs uppercase tracking-wide text-sage-800/55">
                        <tr>
                          <th className="px-3 py-2 font-medium">Listed</th>
                          <th className="px-3 py-2 font-medium">Programme</th>
                          <th className="px-3 py-2 font-medium">Category</th>
                          <th className="px-3 py-2 font-medium">Venue</th>
                          <th className="px-3 py-2 font-medium">Show dates</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-forest-100">
                        {report.events.map((row) => (
                          <tr
                            key={`${row.listedDate}-${row.id}`}
                            className="align-top"
                          >
                            <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                              <div>{row.listedDate}</div>
                              <div className="text-[11px] text-sage-800/45">
                                {def.listedLabel}
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
                                {row.slug}
                                {row.status ? ` · ${row.status}` : ""}
                              </div>
                            </td>
                            <td className="px-3 py-2.5 text-xs text-sage-800/70">
                              {row.category || "—"}
                            </td>
                            <td className="px-3 py-2.5 text-xs text-sage-800/70">
                              {row.venue || "—"}
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                              {row.showDates || "—"}
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

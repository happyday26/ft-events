"use client";

import { useState } from "react";
import {
  TIANGONG_SEARCH_DEFAULT_DAYS,
  type TiangongSearchReport,
} from "@/lib/tiangong-kaiwu-search";

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

function performanceDates(start: string, end: string): string {
  if (!start && !end) return "—";
  if (start && end && start !== end) return `${start} → ${end}`;
  return start || end;
}

export default function TiangongKaiwuSearch() {
  const days = TIANGONG_SEARCH_DEFAULT_DAYS;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<TiangongSearchReport | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/arts-culture/tiangong-kaiwu-search?days=${days}`,
        { cache: "no-store" },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      setReport((await response.json()) as TiangongSearchReport);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not run search.",
      );
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setReport(null);
    setError(null);
  };

  return (
    <section aria-label="天工開物 dance search" className="mb-8">
      <div className="mb-3">
        <h2 className="font-serif text-base font-semibold text-sage-900">
          Show watch · 天工開物
        </h2>
        <p className="mt-0.5 text-xs text-sage-800/60">
          Dance drama ticket sale + performance dates · East Kowloon Cultural
          Centre · URBTIX / EKCC · last {days} days
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-3 rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100 sm:max-w-md">
        <div>
          <p className="text-sm font-medium text-sage-900">
            舞劇《天工開物》· 東九文化中心
          </p>
          <p className="text-xs text-sage-800/55">
            Checks when tickets list and when shows run
          </p>
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
        >
          {loading ? "Searching…" : "Search 天工開物"}
        </button>
      </div>

      {error || report || loading ? (
        <div className="mb-2">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-serif text-sm font-semibold text-sage-900">
              天工開物 search result
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
              className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-100"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          {loading ? (
            <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
              Scanning URBTIX open-data batches and EKCC programme pages…
            </p>
          ) : null}

          {report ? (
            <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest-100 px-3 py-2.5 text-xs text-sage-800/65">
                <span>
                  {report.status === "found"
                    ? `${report.hits.length} hit${report.hits.length === 1 ? "" : "s"}`
                    : "Not listed yet"}{" "}
                  · {report.since} → {report.until}
                </span>
                <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
              </div>

              {report.hits.length === 0 ? (
                <p className="px-3 py-4 text-sm text-sage-800/60">
                  No public ticket sale or performance dates found for
                  dance drama《天工開物》at East Kowloon Cultural Centre yet.
                  Run again after URBTIX / EKCC announce the Hong Kong stop.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-sage-50 text-xs uppercase tracking-wide text-sage-800/55">
                      <tr>
                        <th className="px-3 py-2 font-medium">Ticket listed</th>
                        <th className="px-3 py-2 font-medium">Performance</th>
                        <th className="px-3 py-2 font-medium">Source</th>
                        <th className="px-3 py-2 font-medium">Title / venue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-forest-100">
                      {report.hits.map((row) => (
                        <tr
                          key={`${row.source}-${row.code || row.url}`}
                          className="align-top"
                        >
                          <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                            {row.ticketListedDate || "—"}
                          </td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                            {performanceDates(
                              row.performanceStart,
                              row.performanceEnd,
                            )}
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
                              {row.title}
                            </a>
                            <div className="text-[11px] text-sage-800/45">
                              {row.venue || "—"}
                              {row.code ? ` · ${row.code}` : ""}
                            </div>
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
      ) : null}
    </section>
  );
}

"use client";

import { useState } from "react";
import type { UrbtixUpcomingReport } from "@/lib/urbtix-upcoming-report";

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

export default function UrbtixUpcomingReportPanel() {
  const days = 7;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<UrbtixUpcomingReport | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/arts-culture/urbtix-upcoming-report?days=${days}`,
        { cache: "no-store" },
      );
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      setReport((await response.json()) as UrbtixUpcomingReport);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not generate report.",
      );
    } finally {
      setLoading(false);
    }
  };

  const closeReport = () => {
    setReport(null);
    setError(null);
  };

  return (
    <section aria-label="URBTIX upcoming performances" className="mb-8">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-base font-semibold text-sage-900">
            URBTIX · next {days} days
          </h2>
          <p className="mt-0.5 text-xs text-sage-800/60">
            Performances on sale · today through +{days - 1} days (HK)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {report || error ? (
            <button
              type="button"
              onClick={closeReport}
              disabled={loading}
              className="rounded-full px-5 py-2 text-sm font-medium text-sage-800/70 transition hover:bg-forest-50 hover:text-sage-900 disabled:opacity-60"
            >
              Close report
            </button>
          ) : null}
          <button
            type="button"
            onClick={generate}
            disabled={loading}
            className="rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
          >
            {loading ? "Generating…" : "Upcoming performances"}
          </button>
        </div>
      </div>

      {error ? (
        <p
          className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-100"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      {!report && !loading && !error ? (
        <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
          Click the button to list URBTIX shows in the next {days} days.
        </p>
      ) : null}

      {loading ? (
        <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
          Reading the latest URBTIX batch and keeping shows in this window…
        </p>
      ) : null}

      {report ? (
        <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest-100 px-3 py-2.5 text-xs text-sage-800/65">
            <span>
              {report.since} → {report.until} · {report.counts.total} shows ·{" "}
              {report.counts.programmes} programmes
              {report.batchDate ? ` · batch ${report.batchDate}` : ""}
            </span>
            <span>Generated {formatGeneratedAt(report.generatedAt)}</span>
          </div>

          {report.shows.length === 0 ? (
            <p className="px-3 py-4 text-sm text-sage-800/60">
              No performances found in this window.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-sage-50 text-xs uppercase tracking-wide text-sage-800/55">
                  <tr>
                    <th className="px-3 py-2 font-medium">Date</th>
                    <th className="px-3 py-2 font-medium">Time</th>
                    <th className="px-3 py-2 font-medium">Programme</th>
                    <th className="px-3 py-2 font-medium">Category</th>
                    <th className="px-3 py-2 font-medium">Venue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-100">
                  {report.shows.map((row, index) => (
                    <tr
                      key={`${row.code}-${row.date}-${row.time}-${index}`}
                      className="align-top"
                    >
                      <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                        <div>{row.date}</div>
                        <div className="text-[11px] text-sage-800/45">
                          {row.weekday}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                        {row.time || "—"}
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
                          {row.code}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2.5 text-xs text-sage-800/70">
                        {row.category || "—"}
                      </td>
                      <td className="px-3 py-2.5 text-xs text-sage-800/70">
                        {row.venue || "—"}
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
    </section>
  );
}

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

interface EstateListingReportPanelProps {
  title: string;
  apiPath: string;
  defaultDays?: number;
}

export default function EstateListingReportPanel({
  title,
  apiPath,
  defaultDays = ESTATE_REPORT_DEFAULT_DAYS,
}: EstateListingReportPanelProps) {
  const [days] = useState(defaultDays);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<EstateListingReport | null>(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${apiPath}?days=${days}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error || `Request failed (${response.status})`);
      }
      const data = (await response.json()) as EstateListingReport;
      setReport(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not generate report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-label={`${title} listing report`} className="mb-8">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-base font-semibold text-sage-900">
            {title}
          </h2>
          <p className="mt-0.5 text-xs text-sage-800/60">
            Centaline · Midland · 28Hse · Ricacorp · default last {days} days
            (HK)
          </p>
        </div>
        <button
          type="button"
          onClick={generate}
          disabled={loading}
          className="rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
        >
          {loading ? "Generating…" : "Generate fresh report"}
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

      {!report && !loading && !error ? (
        <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
          Click the button to pull a fresh {title} for the last {days} days.
        </p>
      ) : null}

      {loading ? (
        <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
          Fetching Centaline, Midland, 28Hse, and Ricacorp… this can take up to
          a minute.
        </p>
      ) : null}

      {report ? (
        <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-forest-100 px-3 py-2.5 text-xs text-sage-800/65">
            <span>
              {report.since} → {report.until} · {report.counts.total} listings
              {" · "}
              Centaline {report.counts.centaline} · Midland{" "}
              {report.counts.midland} · 28Hse {report.counts.hse28} · Ricacorp{" "}
              {report.counts.ricacorp}
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
                        <div className="text-[11px] text-sage-800/45">
                          {row.ref}
                        </div>
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

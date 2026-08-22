import type { FxRate } from "@/lib/fx";
import { formatFxRate } from "@/lib/fx";
import { formatQuoteTime } from "@/lib/hsi";

interface FxRatesBannerProps {
  rates: FxRate[];
}

export default function FxRatesBanner({ rates = [] }: FxRatesBannerProps) {
  if (rates.length === 0) {
    return (
      <section className="mb-4" aria-label="Exchange rates">
        <div className="rounded-lg bg-white px-3 py-2 text-xs text-sage-800/70 ring-1 ring-forest-100">
          Exchange rates unavailable
        </div>
      </section>
    );
  }

  const asOf = rates[0]?.asOf;
  const timeZone = rates[0]?.timeZone || "Asia/Hong_Kong";

  return (
    <section className="mb-4" aria-label="Previous night closing exchange rates">
      <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[11px] font-medium uppercase tracking-wide text-sage-800/55">
          FX · prev close
        </p>
        {asOf ? (
          <p className="text-[11px] text-sage-800/45">
            {formatQuoteTime(asOf, timeZone)}
          </p>
        ) : null}
      </div>
      <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
        <ul className="grid grid-cols-2 divide-x divide-y divide-forest-100 sm:grid-cols-4">
          {rates.map((row) => {
            const change =
              row.previousRate == null ? null : row.rate - row.previousRate;
            const up = change != null && change >= 0;
            return (
              <li key={row.id} className="flex flex-col gap-0.5 px-3 py-2">
                <span className="text-[11px] font-semibold tracking-tight text-sage-800/70">
                  {row.pair}
                </span>
                <span className="flex flex-wrap items-baseline gap-1.5">
                  <span className="font-serif text-sm font-semibold tabular-nums text-sage-900">
                    {formatFxRate(row.rate, row.decimals)}
                  </span>
                  {change != null ? (
                    <span
                      className={`text-[11px] font-semibold tabular-nums ${up ? "text-forest-700" : "text-red-700"}`}
                    >
                      {up ? "+" : ""}
                      {formatFxRate(change, row.decimals)}
                    </span>
                  ) : null}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

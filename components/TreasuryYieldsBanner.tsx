import type { TreasuryYield } from "@/lib/treasury";
import { formatYield, formatYieldChange } from "@/lib/treasury";
import type { MarketQuote } from "@/lib/hsi";
import { formatQuotePrice, formatQuoteTime } from "@/lib/hsi";

interface TreasuryYieldsBannerProps {
  yields: TreasuryYield[];
  vix?: MarketQuote | null;
}

export default function TreasuryYieldsBanner({
  yields = [],
  vix = null,
}: TreasuryYieldsBannerProps) {
  if (yields.length === 0 && !vix) {
    return (
      <section className="mb-4" aria-label="Treasury yields">
        <div className="rounded-lg bg-white px-3 py-2 text-xs text-sage-800/70 ring-1 ring-forest-100">
          Treasury yields unavailable
        </div>
      </section>
    );
  }

  const asOf = vix?.asOf || yields[0]?.asOf;
  const timeZone = vix?.timeZone || yields[0]?.timeZone || "America/New_York";
  const cols = yields.length + (vix ? 1 : 0);
  const gridClass =
    cols >= 4
      ? "grid-cols-2 sm:grid-cols-4"
      : cols === 3
        ? "grid-cols-3"
        : cols === 2
          ? "grid-cols-2"
          : "grid-cols-1";

  const vixChange =
    vix && vix.previousPrice != null ? vix.price - vix.previousPrice : null;
  const vixUp = vixChange != null && vixChange >= 0;

  return (
    <section className="mb-4" aria-label="US Treasury yields and VIX">
      <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-[11px] font-medium uppercase tracking-wide text-sage-800/55">
          Treasury · 5 / 10 / 30 yr · VIX
        </p>
        {asOf ? (
          <p className="text-[11px] text-sage-800/45">
            {formatQuoteTime(asOf, timeZone)}
          </p>
        ) : null}
      </div>
      <div className="overflow-hidden rounded-lg bg-white ring-1 ring-forest-100">
        <ul className={`grid ${gridClass} divide-x divide-forest-100`}>
          {yields.map((row) => {
            const change =
              row.previousYield == null ? null : row.yield - row.previousYield;
            const up = change != null && change >= 0;
            return (
              <li key={row.id} className="flex flex-col gap-0.5 px-3 py-2">
                <span className="text-[11px] font-semibold tracking-tight text-sage-800/70">
                  {row.tenor}
                </span>
                <span className="flex flex-wrap items-baseline gap-1.5">
                  <span className="font-serif text-sm font-semibold tabular-nums text-sage-900">
                    {formatYield(row.yield, row.decimals)}
                  </span>
                  {change != null ? (
                    <span
                      className={`text-[11px] font-semibold tabular-nums ${up ? "text-forest-700" : "text-red-700"}`}
                    >
                      {formatYieldChange(change, row.decimals)}
                    </span>
                  ) : null}
                </span>
              </li>
            );
          })}
          {vix ? (
            <li className="flex flex-col gap-0.5 px-3 py-2">
              <span className="text-[11px] font-semibold tracking-tight text-sage-800/70">
                {vix.label}
              </span>
              <span className="flex flex-wrap items-baseline gap-1.5">
                <span className="font-serif text-sm font-semibold tabular-nums text-sage-900">
                  {formatQuotePrice(vix.price, vix.decimals)}
                </span>
                {vixChange != null ? (
                  <span
                    className={`text-[11px] font-semibold tabular-nums ${vixUp ? "text-forest-700" : "text-red-700"}`}
                  >
                    {vixUp ? "+" : ""}
                    {formatQuotePrice(vixChange, vix.decimals)}
                  </span>
                ) : null}
              </span>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}

import type { LondonGoldPrice } from "@/lib/gold";
import type { MarketQuote } from "@/lib/hsi";
import { formatQuotePrice, formatQuoteTime } from "@/lib/hsi";

interface MarketQuotesBannerProps {
  gold: LondonGoldPrice | null;
  quotes: MarketQuote[];
}

function toGoldQuote(gold: LondonGoldPrice): MarketQuote {
  return {
    id: "gold",
    label: "Gold",
    price: gold.price,
    previousPrice: gold.previousPrice,
    currency: gold.currency,
    decimals: 2,
    asOf: gold.fixedAt,
    changeLabel: "vs last fix",
    timeZone: "Europe/London",
  };
}

function QuoteCard({
  quote,
  tone,
}: {
  quote: MarketQuote;
  tone: "gold" | "index";
}) {
  const change =
    quote.previousPrice == null ? null : quote.price - quote.previousPrice;
  const changePct =
    change == null || !quote.previousPrice
      ? null
      : (change / quote.previousPrice) * 100;
  const up = change != null && change >= 0;

  const styles =
    tone === "gold"
      ? {
          box: "bg-[#f7f1e3] ring-[#e7d8b8] text-[#854d0e]",
          muted: "text-[#854d0e]/70",
        }
      : {
          box: "bg-sage-100 ring-forest-200 text-sage-900",
          muted: "text-sage-800/65",
        };

  return (
    <article
      className={`rounded-lg px-3 py-2 ring-1 ${styles.box}`}
      aria-label={`${quote.label} quote`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <p
          className={`text-[11px] font-medium uppercase tracking-wide ${styles.muted}`}
        >
          {quote.label}
        </p>
        <p className={`text-[11px] ${styles.muted}`}>
          {formatQuoteTime(quote.asOf, quote.timeZone)}
        </p>
      </div>
      <div className="mt-0.5 flex items-baseline justify-between gap-2">
        <p className="font-serif text-lg font-semibold tracking-tight leading-none">
          {quote.currency === "USD" ? "$" : ""}
          {formatQuotePrice(quote.price, quote.decimals)}
          <span
            className={`ml-1 text-[10px] font-sans font-normal ${styles.muted}`}
          >
            {quote.currency}
          </span>
        </p>
        {change != null && changePct != null ? (
          <p
            className={`text-[11px] font-semibold leading-tight ${up ? "text-forest-700" : "text-red-700"}`}
          >
            {up ? "+" : ""}
            {formatQuotePrice(change, quote.decimals)} ({up ? "+" : ""}
            {changePct.toFixed(2)}%)
          </p>
        ) : (
          <p className={`text-[11px] ${styles.muted}`}>—</p>
        )}
      </div>
    </article>
  );
}

export default function MarketQuotesBanner({
  gold,
  quotes = [],
}: MarketQuotesBannerProps) {
  const cards: { quote: MarketQuote; tone: "gold" | "index" }[] = [];

  if (gold) {
    cards.push({ quote: toGoldQuote(gold), tone: "gold" });
  }

  for (const quote of quotes ?? []) {
    cards.push({ quote, tone: "index" });
  }

  if (cards.length === 0) {
    return (
      <section className="mb-4" aria-label="Market quotes">
        <div className="rounded-lg bg-white px-3 py-2 text-xs text-sage-800/70 ring-1 ring-forest-100">
          Quotes unavailable
        </div>
      </section>
    );
  }

  return (
    <section
      className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4"
      aria-label="Market quotes"
    >
      {cards.map(({ quote, tone }) => (
        <QuoteCard key={quote.id} quote={quote} tone={tone} />
      ))}
    </section>
  );
}

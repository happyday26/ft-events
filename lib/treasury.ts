export interface TreasuryYield {
  id: string;
  tenor: string;
  yield: number;
  previousYield: number | null;
  asOf: string;
  decimals: number;
  timeZone: string;
}

interface YahooChartResponse {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        previousClose?: number;
        regularMarketTime?: number;
        exchangeTimezoneName?: string;
        currentTradingPeriod?: {
          regular?: { start?: number; end?: number };
        };
      };
      timestamp?: number[];
      indicators?: {
        quote?: Array<{
          close?: Array<number | null>;
        }>;
      };
    }>;
  };
}

interface YieldSpec {
  id: string;
  tenor: string;
  symbol: string;
  decimals: number;
}

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const YIELD_SPECS: YieldSpec[] = [
  { id: "ust-5y", tenor: "5Y", symbol: "^FVX", decimals: 3 },
  { id: "ust-10y", tenor: "10Y", symbol: "^TNX", decimals: 3 },
  { id: "ust-30y", tenor: "30Y", symbol: "^TYX", decimals: 3 },
];

/** Last finished daily bars. Yahoo has no previousClose; chartPreviousClose is the first bar of the range. */
function completedDailyBars(
  timestamps: number[],
  closes: Array<number | null | undefined>,
  regularMarketTime?: number,
  sessionStart?: number,
  sessionEnd?: number,
): Array<{ close: number; ts: number }> {
  const bars: Array<{ close: number; ts: number }> = [];
  for (let i = 0; i < timestamps.length; i++) {
    const ts = timestamps[i];
    const close = closes[i];
    if (typeof ts !== "number" || typeof close !== "number" || !Number.isFinite(close)) {
      continue;
    }
    if (typeof regularMarketTime === "number" && ts === regularMarketTime) continue;
    bars.push({ close, ts });
  }

  const sessionOpen =
    typeof sessionStart === "number" &&
    typeof regularMarketTime === "number" &&
    regularMarketTime >= sessionStart &&
    (typeof sessionEnd !== "number" || regularMarketTime < sessionEnd);

  if (sessionOpen && bars.length > 0 && bars[bars.length - 1].ts === sessionStart) {
    bars.pop();
  }

  return bars;
}

async function fetchYieldClose(spec: YieldSpec): Promise<TreasuryYield | null> {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(spec.symbol)}?interval=1d&range=10d&_=${Date.now()}`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(12_000),
        headers: {
          Accept: "application/json",
          "User-Agent": BROWSER_UA,
        },
      },
    );
    if (!response.ok) return null;

    const data = (await response.json()) as YahooChartResponse;
    const result = data.chart?.result?.[0];
    if (!result) return null;

    const meta = result.meta;
    const bars = completedDailyBars(
      result.timestamp || [],
      result.indicators?.quote?.[0]?.close || [],
      meta?.regularMarketTime,
      meta?.currentTradingPeriod?.regular?.start,
      meta?.currentTradingPeriod?.regular?.end,
    );

    let value: number | null = bars.at(-1)?.close ?? null;
    let previousYield: number | null = bars.at(-2)?.close ?? null;
    let asOf = bars.at(-1)
      ? new Date(bars[bars.length - 1].ts * 1000).toISOString()
      : new Date().toISOString();

    if (value == null && typeof meta?.previousClose === "number") {
      value = meta.previousClose;
    }

    if (value == null && typeof meta?.regularMarketPrice === "number") {
      value = meta.regularMarketPrice;
      if (typeof meta?.regularMarketTime === "number") {
        asOf = new Date(meta.regularMarketTime * 1000).toISOString();
      }
    }

    if (value == null) return null;

    return {
      id: spec.id,
      tenor: spec.tenor,
      yield: value,
      previousYield,
      asOf,
      decimals: spec.decimals,
      timeZone: meta?.exchangeTimezoneName || "America/New_York",
    };
  } catch {
    return null;
  }
}

export async function fetchTreasuryYields(): Promise<TreasuryYield[]> {
  const results = await Promise.all(YIELD_SPECS.map(fetchYieldClose));
  return results.filter((r): r is TreasuryYield => r != null);
}

export function formatYield(value: number, decimals: number): string {
  return `${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)}%`;
}

export function formatYieldChange(value: number, decimals: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)}`;
}

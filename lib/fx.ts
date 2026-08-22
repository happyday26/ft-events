export interface FxRate {
  id: string;
  pair: string;
  rate: number;
  previousRate: number | null;
  asOf: string;
  decimals: number;
  timeZone: string;
}

interface YahooChartResponse {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        chartPreviousClose?: number;
        previousClose?: number;
        regularMarketTime?: number;
        currency?: string;
        exchangeTimezoneName?: string;
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

interface FxSpec {
  id: string;
  pair: string;
  symbol: string;
  decimals: number;
}

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** Previous-night closing FX (Yahoo daily close). */
const FX_SPECS: FxSpec[] = [
  { id: "usd-hkd", pair: "USD/HKD", symbol: "HKD=X", decimals: 4 },
  { id: "gbp-hkd", pair: "GBP/HKD", symbol: "GBPHKD=X", decimals: 4 },
  { id: "rmb-hkd", pair: "RMB/HKD", symbol: "CNYHKD=X", decimals: 4 },
  { id: "aud-usd", pair: "AUD/USD", symbol: "AUDUSD=X", decimals: 4 },
  { id: "eur-hkd", pair: "EUR/HKD", symbol: "EURHKD=X", decimals: 4 },
  { id: "usd-cad", pair: "USD/CAD", symbol: "CAD=X", decimals: 4 },
  { id: "usd-jpy", pair: "USD/JPY", symbol: "JPY=X", decimals: 2 },
  { id: "sgd-hkd", pair: "SGD/HKD", symbol: "SGDHKD=X", decimals: 4 },
];

async function fetchFxClose(spec: FxSpec): Promise<FxRate | null> {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(spec.symbol)}?interval=1d&range=10d&_=${Date.now()}`,
      {
        cache: "no-store",
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

    const closes = (result.indicators?.quote?.[0]?.close || []).filter(
      (v): v is number => typeof v === "number" && Number.isFinite(v),
    );
    const timestamps = result.timestamp || [];
    const meta = result.meta;

    // Prefer Yahoo previousClose = last completed session close.
    let rate: number | null =
      typeof meta?.previousClose === "number"
        ? meta.previousClose
        : typeof meta?.chartPreviousClose === "number"
          ? meta.chartPreviousClose
          : null;
    let previousRate: number | null = null;
    let asOf = new Date().toISOString();

    if (closes.length >= 2) {
      // Daily series: last = most recent bar, second-last = prior session.
      // If previousClose missing, use second-last as prev-night close.
      if (rate == null) {
        rate = closes[closes.length - 2];
        previousRate = closes.length >= 3 ? closes[closes.length - 3] : null;
      } else {
        // Day-before previous close for change column.
        previousRate = closes[closes.length - 2];
        if (Math.abs(previousRate - rate) < 1e-12 && closes.length >= 3) {
          previousRate = closes[closes.length - 3];
        }
      }
      const ts = timestamps[Math.max(0, timestamps.length - 2)];
      if (typeof ts === "number") {
        asOf = new Date(ts * 1000).toISOString();
      }
    } else if (rate == null && closes.length === 1) {
      rate = closes[0];
      const ts = timestamps[0];
      if (typeof ts === "number") {
        asOf = new Date(ts * 1000).toISOString();
      }
    }

    if (rate == null && typeof meta?.regularMarketPrice === "number") {
      rate = meta.regularMarketPrice;
      if (typeof meta?.regularMarketTime === "number") {
        asOf = new Date(meta.regularMarketTime * 1000).toISOString();
      }
    }

    if (rate == null) return null;

    return {
      id: spec.id,
      pair: spec.pair,
      rate,
      previousRate,
      asOf,
      decimals: spec.decimals,
      timeZone: meta?.exchangeTimezoneName || "Asia/Hong_Kong",
    };
  } catch {
    return null;
  }
}

export async function fetchFxClosingRates(): Promise<FxRate[]> {
  const results = await Promise.all(FX_SPECS.map(fetchFxClose));
  return results.filter((r): r is FxRate => r != null);
}

export function formatFxRate(rate: number, decimals: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(rate);
}

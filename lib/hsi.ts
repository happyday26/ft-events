export interface MarketQuote {
  id: string;
  label: string;
  price: number;
  previousPrice: number | null;
  currency: string;
  decimals: number;
  asOf: string;
  changeLabel: string;
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
        timezone?: string;
        exchangeTimezoneName?: string;
        shortName?: string;
        symbol?: string;
      };
    }>;
  };
}

interface YahooQuoteSpec {
  id: string;
  label: string;
  symbol: string;
  decimals: number;
  timeZone: string;
  changeLabel?: string;
}

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const QUOTE_SPECS: YahooQuoteSpec[] = [
  {
    id: "hsi",
    label: "HSI",
    symbol: "^HSI",
    decimals: 2,
    timeZone: "Asia/Hong_Kong",
  },
  {
    id: "bitcoin",
    label: "Bitcoin",
    symbol: "BTC-USD",
    decimals: 0,
    timeZone: "UTC",
  },
  {
    id: "spacex",
    label: "SpaceX",
    symbol: "SPCX",
    decimals: 2,
    timeZone: "America/New_York",
  },
  {
    id: "hsbc",
    label: "HSBC",
    symbol: "0005.HK",
    decimals: 2,
    timeZone: "Asia/Hong_Kong",
  },
  {
    id: "shkp",
    label: "SHKP",
    symbol: "0016.HK",
    decimals: 2,
    timeZone: "Asia/Hong_Kong",
  },
  {
    id: "tencent",
    label: "Tencent",
    symbol: "0700.HK",
    decimals: 2,
    timeZone: "Asia/Hong_Kong",
  },
  {
    id: "zijin",
    label: "Zijin",
    symbol: "2899.HK",
    decimals: 2,
    timeZone: "Asia/Hong_Kong",
  },
];

export async function fetchYahooQuote(
  spec: YahooQuoteSpec,
): Promise<MarketQuote | null> {
  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(spec.symbol)}?interval=1d&range=5d&_=${Date.now()}`,
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
    const meta = data.chart?.result?.[0]?.meta;
    const price = meta?.regularMarketPrice;
    if (typeof price !== "number") return null;

    const previous =
      typeof meta?.chartPreviousClose === "number"
        ? meta.chartPreviousClose
        : typeof meta?.previousClose === "number"
          ? meta.previousClose
          : null;

    const asOf =
      typeof meta?.regularMarketTime === "number"
        ? new Date(meta.regularMarketTime * 1000).toISOString()
        : new Date().toISOString();

    return {
      id: spec.id,
      label: spec.label,
      price,
      previousPrice: previous,
      currency: meta?.currency ?? "USD",
      decimals: spec.decimals,
      asOf,
      changeLabel: spec.changeLabel ?? "vs last close",
      timeZone: spec.timeZone,
    };
  } catch {
    return null;
  }
}

export async function fetchHsiQuote(): Promise<MarketQuote | null> {
  const spec = QUOTE_SPECS.find((q) => q.id === "hsi");
  if (!spec) return null;
  return fetchYahooQuote(spec);
}

/** HSI + Bitcoin, SpaceX, HSBC, SHKP, Tencent, Zijin (last close vs prior). */
export async function fetchWatchlistQuotes(): Promise<MarketQuote[]> {
  const results = await Promise.all(QUOTE_SPECS.map(fetchYahooQuote));
  return results.filter((q): q is MarketQuote => q != null);
}

export function formatQuotePrice(price: number, decimals = 2): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(price);
}

export function formatQuoteTime(iso: string, timeZone: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  try {
    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timeZone || "UTC",
    });
  } catch {
    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

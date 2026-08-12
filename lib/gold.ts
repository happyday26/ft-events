export interface LondonGoldPrice {
  price: number;
  previousPrice: number | null;
  currency: string;
  unit: string;
  sourceLabel: string;
  fixedAt: string;
  sourceUrl: string;
  attribution: string;
}

interface LbmaGoldRow {
  d?: string;
  v?: number[];
}

const LBMA_PM_URL = "https://prices.lbma.org.uk/json/gold_pm.json";
const LBMA_SOURCE_URL =
  "https://www.lbma.org.uk/prices-and-data/precious-metal-prices";

export async function fetchLondonGoldClose(): Promise<LondonGoldPrice | null> {
  try {
    const response = await fetch(`${LBMA_PM_URL}?r=${Date.now()}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "ft-events/1.0",
      },
    });

    if (!response.ok) return null;

    const rows = (await response.json()) as LbmaGoldRow[];
    if (!Array.isArray(rows) || rows.length === 0) return null;

    const latest = [...rows].reverse().find((row) => row.d && Array.isArray(row.v) && typeof row.v[0] === "number");
    if (!latest?.d || latest.v?.[0] == null) return null;

    const previous = [...rows]
      .reverse()
      .find(
        (row) =>
          row.d &&
          row.d !== latest.d &&
          Array.isArray(row.v) &&
          typeof row.v[0] === "number",
      );

    return {
      price: latest.v[0],
      previousPrice: previous?.v?.[0] ?? null,
      currency: "USD",
      unit: "troy oz",
      sourceLabel: "London PM Fix",
      // LBMA PM auction starts 15:00 London time
      fixedAt: `${latest.d}T15:00:00+01:00`,
      sourceUrl: LBMA_SOURCE_URL,
      attribution: "LBMA Gold Price (PM)",
    };
  } catch {
    return null;
  }
}

export function formatGoldPrice(price: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export function formatGoldFixDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/London",
  });
}

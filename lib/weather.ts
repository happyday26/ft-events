export interface HkWeather {
  temperatureC: number;
  humidityPct: number | null;
  uvIndex: number | null;
  uvDesc: string | null;
  iconCode: number | null;
  iconUrl: string | null;
  forecast: string;
  place: string;
  updatedAt: string;
  sourceUrl: string;
}

interface PlaceValue {
  place?: string;
  value?: number;
  unit?: string;
  desc?: string;
}

interface HkoCurrentResponse {
  temperature?: { data?: PlaceValue[] };
  humidity?: { data?: PlaceValue[] };
  uvindex?: { data?: PlaceValue[] };
  icon?: number[];
  updateTime?: string;
}

interface HkoLocalForecastResponse {
  forecastDesc?: string;
  forecastPeriod?: string;
  outlook?: string;
  updateTime?: string;
}

const HKO_WEATHER_API =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php";
const HKO_SOURCE_URL = "https://www.hko.gov.hk/en/index.html";

function pickPlace(
  rows: PlaceValue[] | undefined,
  preferred: string[],
): PlaceValue | null {
  if (!rows?.length) return null;
  for (const name of preferred) {
    const match = rows.find((row) => row.place === name);
    if (match && typeof match.value === "number") return match;
  }
  return rows.find((row) => typeof row.value === "number") ?? null;
}

export function hkoIconUrl(code: number): string {
  return `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${code}.png`;
}

export async function fetchHongKongWeather(): Promise<HkWeather | null> {
  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`${HKO_WEATHER_API}?dataType=rhrread&lang=en&r=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" },
      }),
      fetch(`${HKO_WEATHER_API}?dataType=flw&lang=en&r=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" },
      }),
    ]);

    if (!currentRes.ok) return null;

    const current = (await currentRes.json()) as HkoCurrentResponse;
    const forecastJson = forecastRes.ok
      ? ((await forecastRes.json()) as HkoLocalForecastResponse)
      : null;

    const temp = pickPlace(current.temperature?.data, [
      "Hong Kong Observatory",
      "Hong Kong Park",
      "King's Park",
    ]);
    if (!temp || typeof temp.value !== "number") return null;

    const humidity = pickPlace(current.humidity?.data, [
      "Hong Kong Observatory",
    ]);
    const uv = current.uvindex?.data?.[0] ?? null;
    const iconCode =
      typeof current.icon?.[0] === "number" ? current.icon[0] : null;

    const forecast =
      forecastJson?.forecastDesc?.trim() ||
      forecastJson?.outlook?.trim() ||
      "";

    return {
      temperatureC: temp.value,
      humidityPct:
        typeof humidity?.value === "number" ? humidity.value : null,
      uvIndex: typeof uv?.value === "number" ? uv.value : null,
      uvDesc: uv?.desc?.trim() || null,
      iconCode,
      iconUrl: iconCode != null ? hkoIconUrl(iconCode) : null,
      forecast,
      place: temp.place || "Hong Kong Observatory",
      updatedAt: current.updateTime || new Date().toISOString(),
      sourceUrl: HKO_SOURCE_URL,
    };
  } catch {
    return null;
  }
}

export function formatWeatherTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Hong_Kong",
  });
}

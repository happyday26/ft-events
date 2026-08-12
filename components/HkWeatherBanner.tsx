import type { HkWeather } from "@/lib/weather";
import { formatWeatherTime } from "@/lib/weather";

interface HkWeatherBannerProps {
  weather: HkWeather | null;
}

export default function HkWeatherBanner({ weather }: HkWeatherBannerProps) {
  if (!weather) {
    return (
      <section className="mb-3" aria-label="Hong Kong weather">
        <div className="rounded-lg bg-white px-3 py-2 text-xs text-sage-800/70 ring-1 ring-forest-100">
          Hong Kong weather unavailable
        </div>
      </section>
    );
  }

  const meta = [
    weather.humidityPct != null ? `${weather.humidityPct}% humidity` : null,
    weather.uvIndex != null
      ? `UV ${weather.uvIndex}${weather.uvDesc ? ` · ${weather.uvDesc}` : ""}`
      : null,
  ].filter(Boolean);

  return (
    <section
      className="mb-3 rounded-lg bg-gradient-to-r from-sky-50 via-sage-50 to-amber-50/60 px-3 py-2.5 ring-1 ring-forest-100"
      aria-label="Hong Kong weather"
    >
      <div className="flex items-start gap-3">
        {weather.iconUrl && (
          <img
            src={weather.iconUrl}
            alt=""
            width={40}
            height={40}
            className="mt-0.5 h-10 w-10 shrink-0"
          />
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
            <p className="text-[11px] font-medium uppercase tracking-wide text-sage-800/65">
              Hong Kong · {weather.place}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-sage-800/55">
              <span>{formatWeatherTime(weather.updatedAt)}</span>
              <a
                href={weather.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-forest-700 hover:underline"
              >
                HKO →
              </a>
            </div>
          </div>

          <div className="mt-0.5 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
            <p className="font-serif text-2xl font-semibold leading-none tracking-tight text-sage-900">
              {weather.temperatureC}
              <span className="ml-0.5 text-base font-normal">°C</span>
            </p>
            {meta.length > 0 && (
              <p className="text-xs text-sage-800/70">{meta.join(" · ")}</p>
            )}
          </div>

          {weather.forecast && (
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-sage-900/85">
              {weather.forecast}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

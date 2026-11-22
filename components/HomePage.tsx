import type { Reminder, RssFeed } from "@/lib/types";
import type { LondonGoldPrice } from "@/lib/gold";
import type { FinanceNewsItem } from "@/lib/finance-news";
import type { FxRate } from "@/lib/fx";
import type { MarketQuote } from "@/lib/hsi";
import type { TreasuryYield } from "@/lib/treasury";
import type { HkWeather } from "@/lib/weather";
import SiteHeader from "./SiteHeader";
import HkWeatherBanner from "./HkWeatherBanner";
import MarketQuotesBanner from "./MarketQuotesBanner";
import FxRatesBanner from "./FxRatesBanner";
import TreasuryYieldsBanner from "./TreasuryYieldsBanner";
import RemindersPanel from "./RemindersPanel";
import ConsolidatedReportPanel from "./ConsolidatedReport";
import FinanceNewsSection from "./FinanceNewsSection";
import TopLinks from "./TopLinks";

interface HomePageProps {
  feeds: RssFeed[];
  reminders: Reminder[];
  weather: HkWeather | null;
  gold: LondonGoldPrice | null;
  quotes: MarketQuote[];
  fxRates: FxRate[];
  treasuryYields: TreasuryYield[];
  vix: MarketQuote | null;
  financeNews: FinanceNewsItem[];
  wsjNews: FinanceNewsItem[];
  hketNews: FinanceNewsItem[];
  hkejNews: FinanceNewsItem[];
}

export default function HomePage({
  feeds = [],
  reminders = [],
  weather = null,
  gold = null,
  quotes = [],
  fxRates = [],
  treasuryYields = [],
  vix = null,
  financeNews = [],
  wsjNews = [],
  hketNews = [],
  hkejNews = [],
}: HomePageProps) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <HkWeatherBanner weather={weather} />
        <TopLinks feeds={feeds} />
        <MarketQuotesBanner gold={gold} quotes={quotes} />
        <FxRatesBanner rates={fxRates} />
        <TreasuryYieldsBanner yields={treasuryYields} vix={vix} />

        <RemindersPanel initialReminders={reminders} />

        <ConsolidatedReportPanel />

        <FinanceNewsSection
          items={financeNews}
          title="Top 5 · Financial Times"
          sourceHref="https://www.ft.com/markets"
          sourceLabel="FT"
          tip="Opens in a new tab — use your main browser where you're logged into FT."
        />

        <FinanceNewsSection
          items={wsjNews}
          title="Top 5 · Wall Street Journal"
          sourceHref="https://www.wsj.com/news/markets"
          sourceLabel="WSJ"
          tip="Opens in a new tab — use your main browser where you're logged into WSJ."
        />

        <FinanceNewsSection
          items={hketNews}
          title="Top 5 · 香港經濟日報"
          sourceHref="https://www.hket.com/"
          sourceLabel="HKET"
        />

        <FinanceNewsSection
          items={hkejNews}
          title="Top 5 · 信報"
          sourceHref="https://www.hkej.com/landing/index"
          sourceLabel="HKEJ"
        />
      </main>
    </>
  );
}

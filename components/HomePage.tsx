import type { RssFeed } from "@/lib/types";
import type { LondonGoldPrice } from "@/lib/gold";
import type { FinanceNewsItem } from "@/lib/finance-news";
import type { MarketQuote } from "@/lib/hsi";
import type { HkWeather } from "@/lib/weather";
import SiteHeader from "./SiteHeader";
import HkWeatherBanner from "./HkWeatherBanner";
import MarketQuotesBanner from "./MarketQuotesBanner";
import FinanceNewsSection from "./FinanceNewsSection";
import TopLinks from "./TopLinks";

interface HomePageProps {
  feeds: RssFeed[];
  weather: HkWeather | null;
  gold: LondonGoldPrice | null;
  quotes: MarketQuote[];
  financeNews: FinanceNewsItem[];
  wsjNews: FinanceNewsItem[];
  hketNews: FinanceNewsItem[];
  hkejNews: FinanceNewsItem[];
}

export default function HomePage({
  feeds = [],
  weather = null,
  gold = null,
  quotes = [],
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

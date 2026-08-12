import { loadFeeds } from "@/lib/feeds";
import { fetchLondonGoldClose } from "@/lib/gold";
import {
  fetchTopFinanceNews,
  fetchTopHkejNews,
  fetchTopHketNews,
  fetchTopWsjNews,
} from "@/lib/finance-news";
import { fetchWatchlistQuotes } from "@/lib/hsi";
import { fetchHongKongWeather } from "@/lib/weather";
import HomePage from "@/components/HomePage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [
    feeds,
    weather,
    gold,
    quotes,
    financeNews,
    wsjNews,
    hketNews,
    hkejNews,
  ] = await Promise.all([
    loadFeeds(),
    fetchHongKongWeather(),
    fetchLondonGoldClose(),
    fetchWatchlistQuotes(),
    fetchTopFinanceNews(5),
    fetchTopWsjNews(5),
    fetchTopHketNews(5),
    fetchTopHkejNews(5),
  ]);

  return (
    <HomePage
      feeds={feeds}
      weather={weather}
      gold={gold}
      quotes={quotes}
      financeNews={financeNews}
      wsjNews={wsjNews}
      hketNews={hketNews}
      hkejNews={hkejNews}
    />
  );
}

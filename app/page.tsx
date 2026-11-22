import { loadFeeds } from "@/lib/feeds";
import { fetchLondonGoldClose } from "@/lib/gold";
import {
  fetchTopFinanceNews,
  fetchTopHkejNews,
  fetchTopHketNews,
  fetchTopWsjNews,
} from "@/lib/finance-news";
import { fetchFxClosingRates } from "@/lib/fx";
import { fetchVixQuote, fetchWatchlistQuotes } from "@/lib/hsi";
import { loadReminders } from "@/lib/reminders";
import { fetchTreasuryYields } from "@/lib/treasury";
import { fetchHongKongWeather } from "@/lib/weather";
import HomePage from "@/components/HomePage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [
    feeds,
    reminders,
    weather,
    gold,
    quotes,
    fxRates,
    treasuryYields,
    vix,
    financeNews,
    wsjNews,
    hketNews,
    hkejNews,
  ] = await Promise.all([
    loadFeeds(),
    loadReminders(),
    fetchHongKongWeather(),
    fetchLondonGoldClose(),
    fetchWatchlistQuotes(),
    fetchFxClosingRates(),
    fetchTreasuryYields(),
    fetchVixQuote(),
    fetchTopFinanceNews(5),
    fetchTopWsjNews(5),
    fetchTopHketNews(5),
    fetchTopHkejNews(5),
  ]);

  return (
    <HomePage
      feeds={feeds}
      reminders={reminders}
      weather={weather}
      gold={gold}
      quotes={quotes}
      fxRates={fxRates}
      treasuryYields={treasuryYields}
      vix={vix}
      financeNews={financeNews}
      wsjNews={wsjNews}
      hketNews={hketNews}
      hkejNews={hkejNews}
    />
  );
}

import { loadEvents } from "@/lib/events";
import { fetchHongKongWeather } from "@/lib/weather";
import TravelPage from "@/components/TravelPage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [events, weather] = await Promise.all([
    loadEvents(),
    fetchHongKongWeather(),
  ]);

  return <TravelPage initialEvents={events} weather={weather} />;
}

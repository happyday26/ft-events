import { loadEvents } from "@/lib/events";
import EventsPage from "@/components/EventsPage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const events = await loadEvents();
  return <EventsPage initialEvents={events} />;
}

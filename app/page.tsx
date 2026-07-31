import { loadEvents } from "@/lib/events";
import HomePage from "@/components/HomePage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const events = await loadEvents();
  return <HomePage initialEvents={events} />;
}

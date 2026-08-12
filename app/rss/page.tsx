import { loadFeeds } from "@/lib/feeds";
import RssPage from "@/components/RssPage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const feeds = await loadFeeds();
  return <RssPage initialFeeds={feeds} />;
}

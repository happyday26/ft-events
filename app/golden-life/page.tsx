import { fetchE123PhysicalPreview } from "@/lib/e123";
import { fetchOlinkFeedPreview } from "@/lib/olink";
import GoldenLifePage from "@/components/GoldenLifePage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [e123, olink] = await Promise.all([
    fetchE123PhysicalPreview(10),
    fetchOlinkFeedPreview(10),
  ]);

  return (
    <GoldenLifePage
      snapshots={{
        "e123-physical": e123,
        "olink-feed": olink,
      }}
    />
  );
}

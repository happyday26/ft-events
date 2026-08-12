import { fetchE123PhysicalPreview } from "@/lib/e123";
import { fetchHealthyUPreview } from "@/lib/healthyu";
import { fetchOlinkFeedPreview } from "@/lib/olink";
import GoldenLifePage from "@/components/GoldenLifePage";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [healthyU, e123, olink] = await Promise.all([
    fetchHealthyUPreview(10),
    fetchE123PhysicalPreview(10),
    fetchOlinkFeedPreview(10),
  ]);

  return (
    <GoldenLifePage
      snapshots={{
        healthyu: healthyU,
        "e123-physical": e123,
        "olink-feed": olink,
      }}
    />
  );
}

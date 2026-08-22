import HealthPage from "@/components/HealthPage";
import { fetchHealthyUPreview } from "@/lib/healthyu";
import { fetchGenericSitePreview } from "@/lib/generic-site-preview";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [
    healthyU,
    ytmdhc,
    mindfulnessSports,
    pauseAndBreathe,
    heartToHeart,
  ] = await Promise.all([
    fetchHealthyUPreview(10),
    fetchGenericSitePreview(
      "https://ytmdhc.org.hk/",
      "油尖旺地區康健中心",
      16,
    ),
    fetchGenericSitePreview(
      "http://mindfulness-sports.org/",
      "Mindfulness Sports",
      16,
    ),
    fetchGenericSitePreview(
      "https://practice.pauseandbreathe.org/",
      "心呼吸學習空間",
      16,
    ),
    fetchGenericSitePreview(
      "https://www.onlinecompanionhk.org/hearttoheart",
      "同心服務 · Heart to Heart",
      16,
    ),
  ]);

  return (
    <HealthPage
      snapshots={{
        healthyu: healthyU,
        ytmdhc,
        "mindfulness-sports": mindfulnessSports,
        "pause-and-breathe": pauseAndBreathe,
        "heart-to-heart": heartToHeart,
      }}
    />
  );
}

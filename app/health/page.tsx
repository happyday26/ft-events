import HealthPage from "@/components/HealthPage";
import { fetchHealthyUPreview } from "@/lib/healthyu";
import { fetchGenericSitePreview } from "@/lib/generic-site-preview";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [healthyU, ytmdhc] = await Promise.all([
    fetchHealthyUPreview(10),
    fetchGenericSitePreview(
      "https://ytmdhc.org.hk/",
      "油尖旺地區康健中心",
      16,
    ),
  ]);

  return (
    <HealthPage
      snapshots={{
        healthyu: healthyU,
        ytmdhc,
      }}
    />
  );
}

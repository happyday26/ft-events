import ArtsCulturePage from "@/components/ArtsCulturePage";
import { ARTS_CULTURE_LINKS } from "@/lib/arts-culture-links";
import { fetchGenericSitePreview } from "@/lib/generic-site-preview";

export const dynamic = "force-dynamic";

export default async function Page() {
  const snapshotLinks = ARTS_CULTURE_LINKS.filter(
    (link) => link.preview === "snapshot",
  );

  const entries = await Promise.all(
    snapshotLinks.map(async (link) => {
      const snapshot = await fetchGenericSitePreview(link.href, link.label, 16);
      return [link.id, snapshot] as const;
    }),
  );

  return (
    <ArtsCulturePage snapshots={Object.fromEntries(entries)} />
  );
}

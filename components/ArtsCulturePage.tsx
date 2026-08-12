import { ARTS_CULTURE_LINKS } from "@/lib/arts-culture-links";
import type { SiteSnapshot } from "@/lib/site-snapshot";
import SiteHeader from "./SiteHeader";
import SitePreviewCard from "./SitePreviewCard";
import SnapshotPreview from "./SnapshotPreview";

interface ArtsCulturePageProps {
  snapshots: Record<string, SiteSnapshot | null>;
}

export default function ArtsCulturePage({ snapshots }: ArtsCulturePageProps) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Arts & Culture
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Museums, performing arts, ticketing, and cultural venues across Hong
            Kong.
          </p>
        </header>

        {ARTS_CULTURE_LINKS.map((link) => (
          <SitePreviewCard key={link.id} label={link.label} href={link.href}>
            {link.preview === "iframe" ? (
              <iframe
                src={link.href}
                title={`${link.label} preview`}
                className="block h-[720px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <SnapshotPreview
                snapshot={snapshots[link.id] ?? null}
                fallbackLabel={link.label}
              />
            )}
          </SitePreviewCard>
        ))}
      </main>
    </>
  );
}

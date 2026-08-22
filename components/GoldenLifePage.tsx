import {
  GOLDEN_LIFE_DIRECTORY_LINKS,
  GOLDEN_LIFE_LINKS,
} from "@/lib/golden-life-links";
import type { SiteSnapshot } from "@/lib/site-snapshot";
import ActivityReports from "./ActivityReports";
import SiteHeader from "./SiteHeader";
import SitePreviewCard from "./SitePreviewCard";
import SnapshotPreview from "./SnapshotPreview";

interface GoldenLifePageProps {
  snapshots: Record<string, SiteSnapshot | null>;
}

export default function GoldenLifePage({ snapshots }: GoldenLifePageProps) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Golden Life
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Active ageing programmes, talks, and community links for a fuller
            later life.
          </p>
        </header>

        <ActivityReports />

        <section aria-label="Elder Academy directory" className="mb-8">
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <h2 className="font-serif text-base font-semibold text-sage-900">
              Elder Academy & partners
            </h2>
          </div>
          <ul className="divide-y divide-forest-100 rounded-lg bg-white ring-1 ring-forest-100">
            {GOLDEN_LIFE_DIRECTORY_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-baseline justify-between gap-3 px-3 py-2.5 hover:bg-sage-50"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-forest-700">
                      {link.label} →
                    </span>
                    <span className="block text-xs text-sage-800/55">
                      {link.note}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {GOLDEN_LIFE_LINKS.map((link) => (
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

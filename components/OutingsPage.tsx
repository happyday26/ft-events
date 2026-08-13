import { OUTING_LINKS } from "@/lib/outing-links";
import SiteHeader from "./SiteHeader";
import SitePreviewCard from "./SitePreviewCard";

export default function OutingsPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Outings
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Hiking routes, day trips, and outdoor ideas around Hong Kong.
          </p>
        </header>

        {OUTING_LINKS.map((link) => (
          <SitePreviewCard key={link.id} label={link.label} href={link.href}>
            <iframe
              src={link.href}
              title={`${link.label} preview`}
              className="block h-[720px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </SitePreviewCard>
        ))}
      </main>
    </>
  );
}

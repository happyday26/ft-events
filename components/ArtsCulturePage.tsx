import { ARTS_CULTURE_LINKS } from "@/lib/arts-culture-links";
import ClientSnapshotPreview from "./ClientSnapshotPreview";
import SiteHeader from "./SiteHeader";
import SitePreviewCard from "./SitePreviewCard";
import TiangongKaiwuSearch from "./TiangongKaiwuSearch";
import TicketingReports from "./TicketingReports";
import UrbtixUpcomingReportPanel from "./UrbtixUpcomingReport";

export default function ArtsCulturePage() {
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

        <TiangongKaiwuSearch />

        <UrbtixUpcomingReportPanel />

        <TicketingReports />

        <section aria-label="Ticketing links" className="mb-8">
          <ul className="divide-y divide-forest-100 rounded-lg bg-white ring-1 ring-forest-100">
            <li>
              <a
                href="https://www.popticket.hk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-3 px-3 py-2.5 hover:bg-sage-50"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-forest-700">
                    Popticket.hk →
                  </span>
                  <span className="block text-xs text-sage-800/55">
                    撲飛 · ticketing & live events
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </section>

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
              <ClientSnapshotPreview href={link.href} label={link.label} />
            )}
          </SitePreviewCard>
        ))}
      </main>
    </>
  );
}

import { PROPERTY_LINKS } from "@/lib/property-links";
import PropertyReports from "./PropertyReports";
import SiteHeader from "./SiteHeader";

export default function PropertyPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Property
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Watched estates, sale listings, and portals for Hong Kong property
            research.
          </p>
        </header>

        <PropertyReports />

        <section aria-label="Property links">
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <h2 className="font-serif text-base font-semibold text-sage-900">
              Watchlist
            </h2>
          </div>
          <ul className="divide-y divide-forest-100 rounded-lg bg-white ring-1 ring-forest-100">
            {PROPERTY_LINKS.map((link) => (
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
      </main>
    </>
  );
}

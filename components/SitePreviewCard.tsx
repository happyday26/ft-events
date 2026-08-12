import type { ReactNode } from "react";

interface SitePreviewCardProps {
  label: string;
  href: string;
  children: ReactNode;
}

/** Compact preview shell with a separate full-page link. */
export default function SitePreviewCard({
  label,
  href,
  children,
}: SitePreviewCardProps) {
  return (
    <section className="mb-6" aria-label={label}>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <h2 className="font-serif text-base font-semibold text-sage-900">
          {label}
        </h2>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-forest-700 hover:underline"
        >
          Open full page →
        </a>
      </div>
      <div className="h-52 overflow-y-auto overscroll-contain rounded-lg bg-white ring-1 ring-forest-100 [scrollbar-gutter:stable]">
        {children}
      </div>
    </section>
  );
}

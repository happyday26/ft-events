"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiteHeaderProps {
  onAddEventClick?: () => void;
  onAddRssClick?: () => void;
}

const NAV = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/arts-culture", label: "Arts & Culture" },
  { href: "/media", label: "Media" },
  { href: "/travel", label: "Travel" },
  { href: "/outings", label: "Outings" },
  { href: "/property", label: "Property" },
  { href: "/golden-life", label: "Golden Life" },
  { href: "/health", label: "Health" },
  { href: "/good-community", label: "Good Community" },
  { href: "/rss", label: "RSS" },
] as const;

export default function SiteHeader({ onAddEventClick, onAddRssClick }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="border-b border-forest-200/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-wide text-forest-700"
        >
          FT Events
        </Link>

        <nav className="flex flex-wrap gap-2" aria-label="Main">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  active
                    ? "bg-forest-700 text-white"
                    : "bg-white text-sage-800/70 ring-1 ring-forest-200 hover:ring-forest-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex flex-wrap gap-2">
          {onAddRssClick && (
            <button
              type="button"
              onClick={onAddRssClick}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-800 ring-1 ring-forest-200 transition hover:bg-forest-50"
            >
              + Add RSS
            </button>
          )}
          {onAddEventClick ? (
            <button
              type="button"
              onClick={onAddEventClick}
              className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700"
            >
              + Add Event
            </button>
          ) : (
            <Link
              href="/events"
              className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700"
            >
              Events →
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

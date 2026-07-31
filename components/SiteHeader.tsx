"use client";

interface SiteHeaderProps {
  onAddClick: () => void;
}

export default function SiteHeader({ onAddClick }: SiteHeaderProps) {
  return (
    <header className="border-b border-forest-200/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
        <span className="font-serif text-xl font-bold tracking-wide text-forest-700">
          FT Events
        </span>

        <nav className="flex flex-wrap gap-2" aria-label="Main">
          {["Home", "Calendar", "My Events"].map((item) => (
            <span
              key={item}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                item === "Home"
                  ? "bg-forest-700 text-white"
                  : "bg-white text-sage-800/70 ring-1 ring-forest-200"
              }`}
            >
              {item}
            </span>
          ))}
        </nav>

        <div className="ml-auto">
          <button
            type="button"
            onClick={onAddClick}
            className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700"
          >
            + Add Event
          </button>
        </div>
      </div>
    </header>
  );
}

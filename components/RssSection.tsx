"use client";

import { useEffect, useRef, useState } from "react";
import type { RssFeed } from "@/lib/types";
import { resolveFeedWebsite } from "@/lib/types";
import CategoryDot from "./CategoryDot";

interface RssSectionProps {
  feeds: RssFeed[];
  onAdd: () => void;
  onEdit: (feed: RssFeed) => void;
  onDelete: (feed: RssFeed) => void;
}

function displayHost(website: string): string {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website;
  }
}

export default function RssSection({ feeds, onAdd, onEdit, onDelete }: RssSectionProps) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-baseline justify-between border-b border-forest-200 pb-3">
        <h2 className="font-serif text-2xl font-semibold text-sage-900">RSS Feeds</h2>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-full bg-forest-50 px-3 py-1.5 text-xs font-semibold text-forest-800 ring-1 ring-forest-200 transition hover:bg-forest-100"
        >
          + Add RSS
        </button>
      </div>

      {feeds.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {feeds.map((feed) => (
            <RssCard
              key={feed.id}
              feed={feed}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-xl bg-white px-4 py-6 text-center text-sm text-sage-800/60 ring-1 ring-forest-100">
          No RSS feeds yet. Click + Add RSS to paste a feed URL.
        </p>
      )}
    </section>
  );
}

function RssCard({
  feed,
  onEdit,
  onDelete,
}: {
  feed: RssFeed;
  onEdit: (feed: RssFeed) => void;
  onDelete: (feed: RssFeed) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const website = resolveFeedWebsite(feed.url, feed.website);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <article className="relative min-w-[240px] max-w-[280px] shrink-0 rounded-xl bg-white p-4 ring-1 ring-forest-100">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <CategoryDot hobby={feed.category} />
          <span className="text-xs font-medium uppercase tracking-wide text-sage-800/60">
            {feed.category}
          </span>
        </div>
        <div className="relative shrink-0" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full px-2 py-1 text-lg leading-none text-sage-800/50 transition hover:bg-forest-50 hover:text-sage-900"
            aria-label={`Actions for ${feed.description}`}
          >
            ···
          </button>
          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full z-20 mt-1 min-w-[7rem] overflow-hidden rounded-lg bg-white py-1 shadow-lg ring-1 ring-forest-200"
            >
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setMenuOpen(false);
                  onEdit(feed);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-sage-900 transition hover:bg-forest-50"
              >
                Edit
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setMenuOpen(false);
                  onDelete(feed);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-red-700 transition hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1 block font-serif text-base font-semibold leading-snug text-sage-900 hover:text-forest-700"
      >
        {feed.description}
      </a>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-forest-700 hover:underline"
      >
        Visit {displayHost(website)} →
      </a>
    </article>
  );
}

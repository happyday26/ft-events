"use client";

import { useCallback, useState } from "react";
import type { RssFeed } from "@/lib/types";
import SiteHeader from "./SiteHeader";
import RssSection from "./RssSection";
import RssModal from "./RssModal";

interface RssPageProps {
  initialFeeds: RssFeed[];
}

export default function RssPage({ initialFeeds }: RssPageProps) {
  const [feeds, setFeeds] = useState(initialFeeds);
  const [rssModalOpen, setRssModalOpen] = useState(false);
  const [rssModalMode, setRssModalMode] = useState<"add" | "edit">("add");
  const [editingFeed, setEditingFeed] = useState<RssFeed | null>(null);

  const refreshFeeds = useCallback(async () => {
    const response = await fetch("/api/feeds");
    if (response.ok) {
      const data = (await response.json()) as RssFeed[];
      setFeeds(data);
    }
  }, []);

  const openAddRssModal = () => {
    setRssModalMode("add");
    setEditingFeed(null);
    setRssModalOpen(true);
  };

  const openEditRssModal = (feed: RssFeed) => {
    setRssModalMode("edit");
    setEditingFeed(feed);
    setRssModalOpen(true);
  };

  const handleDeleteFeed = async (feed: RssFeed) => {
    const confirmed = window.confirm(`Delete RSS feed "${feed.description}"?`);
    if (!confirmed) return;

    const response = await fetch(`/api/feeds/${feed.id}`, { method: "DELETE" });
    if (response.ok) {
      await refreshFeeds();
    } else {
      window.alert("Could not delete this RSS feed.");
    }
  };

  return (
    <>
      <SiteHeader onAddRssClick={openAddRssModal} />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <RssSection
          feeds={feeds}
          onAdd={openAddRssModal}
          onEdit={openEditRssModal}
          onDelete={handleDeleteFeed}
        />
      </main>

      <RssModal
        open={rssModalOpen}
        mode={rssModalMode}
        feed={editingFeed}
        onClose={() => setRssModalOpen(false)}
        onSaved={refreshFeeds}
      />
    </>
  );
}

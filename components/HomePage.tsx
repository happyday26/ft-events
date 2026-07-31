"use client";

import { useCallback, useMemo, useState } from "react";
import type { Event } from "@/lib/types";
import { formatDisplayDate, getFeaturedEvent, sortEventsByDate } from "@/lib/types";
import type { HobbyKey } from "@/lib/hobbies";
import CategoryDot from "./CategoryDot";
import EventActionsMenu from "./EventActionsMenu";
import SiteHeader from "./SiteHeader";
import HeroSection from "./HeroSection";
import FilterBar from "./FilterBar";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

interface HomePageProps {
  initialEvents: Event[];
}

export default function HomePage({ initialEvents }: HomePageProps) {
  const [events, setEvents] = useState(initialEvents);
  const [filter, setFilter] = useState<"All" | HobbyKey>("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const refreshEvents = useCallback(async () => {
    const response = await fetch("/api/events");
    if (response.ok) {
      const data = (await response.json()) as Event[];
      setEvents(data);
    }
  }, []);

  const openAddModal = () => {
    setModalMode("add");
    setEditingEvent(null);
    setModalOpen(true);
  };

  const openEditModal = (event: Event) => {
    setModalMode("edit");
    setEditingEvent(event);
    setModalOpen(true);
  };

  const handleDelete = async (event: Event) => {
    const confirmed = window.confirm(`Delete "${event.title}"? This cannot be undone.`);
    if (!confirmed) return;

    const response = await fetch(`/api/events/${event.id}`, { method: "DELETE" });
    if (response.ok) {
      await refreshEvents();
    } else {
      window.alert("Could not delete this event.");
    }
  };

  const featured = useMemo(() => getFeaturedEvent(events), [events]);

  const gridEvents = useMemo(() => {
    const sorted = sortEventsByDate(events);
    const withoutFeatured = featured
      ? sorted.filter((event) => event.id !== featured.id)
      : sorted;

    if (filter === "All") return withoutFeatured;
    return withoutFeatured.filter((event) => event.hobby === filter);
  }, [events, featured, filter]);

  const recentlyAdded = useMemo(
    () => [...events].reverse().slice(0, 3),
    [events],
  );

  const uniqueCategories = useMemo(
    () => new Set(events.map((event) => event.hobby)).size,
    [events],
  );

  return (
    <>
      <SiteHeader onAddClick={openAddModal} />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mb-8 rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-800 ring-1 ring-forest-200">
          Your friendly events hub — category colors stand in for photos until you add images.
        </div>

        {featured && (
          <div className="mb-10">
            <HeroSection
              event={featured}
              onEdit={openEditModal}
              onDelete={handleDelete}
            />
          </div>
        )}

        <FilterBar selected={filter} onSelect={setFilter} />

        <section className="mt-10">
          <div className="mb-6 flex items-baseline justify-between border-b border-forest-200 pb-3">
            <h2 className="font-serif text-2xl font-semibold text-sage-900">Coming Up</h2>
            <span className="text-sm text-sage-800/50">{gridEvents.length} events</span>
          </div>

          {gridEvents.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gridEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onEdit={openEditModal}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-white px-4 py-8 text-center text-sm text-sage-800/60 ring-1 ring-forest-100">
              No events match this filter yet. Add one with the button above.
            </p>
          )}
        </section>

        <section className="mt-14 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-sage-900">This Month</h2>
            <div className="grid grid-cols-3 gap-4">
              <StatBox value={String(events.length)} label="Upcoming events" accent />
              <StatBox value={String(uniqueCategories)} label="Categories covered" />
              <StatBox value={String(recentlyAdded.length)} label="Recently added" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-sage-900">Recently added</h3>
            <ul className="flex flex-col gap-4">
              {recentlyAdded.map((event) => (
                <li key={event.id} className="flex gap-3">
                  <CategoryDot hobby={event.hobby} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-sage-900">{event.title}</p>
                      <EventActionsMenu
                        event={event}
                        onEdit={openEditModal}
                        onDelete={handleDelete}
                      />
                    </div>
                    <p className="text-xs text-sage-800/55">{formatDisplayDate(event.date)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <EventModal
        open={modalOpen}
        mode={modalMode}
        event={editingEvent}
        onClose={() => setModalOpen(false)}
        onSaved={refreshEvents}
      />
    </>
  );
}

function StatBox({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl bg-white px-4 py-4 ring-1 ring-forest-100">
      <p className={`text-2xl font-semibold ${accent ? "text-forest-700" : "text-sage-900"}`}>
        {value}
      </p>
      <p className="mt-1 text-xs text-sage-800/55">{label}</p>
    </div>
  );
}

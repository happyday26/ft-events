"use client";

import { useCallback, useMemo, useState } from "react";
import type { Event } from "@/lib/types";
import { sortEventsByDate } from "@/lib/types";
import type { HkWeather } from "@/lib/weather";
import { TRAVEL_LINKS } from "@/lib/travel-links";
import SiteHeader from "./SiteHeader";
import HkWeatherBanner from "./HkWeatherBanner";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

interface TravelPageProps {
  initialEvents: Event[];
  weather: HkWeather | null;
}

export default function TravelPage({
  initialEvents,
  weather,
}: TravelPageProps) {
  const [events, setEvents] = useState(initialEvents);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const travelEvents = useMemo(
    () => sortEventsByDate(events.filter((event) => event.hobby === "Travel")),
    [events],
  );

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
    const confirmed = window.confirm(
      `Delete "${event.title}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    const response = await fetch(`/api/events/${event.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await refreshEvents();
    } else {
      window.alert("Could not delete this event.");
    }
  };

  return (
    <>
      <SiteHeader onAddEventClick={openAddModal} />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Travel
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Hong Kong weather, practical links, and your Travel events in one
            place.
          </p>
        </header>

        <HkWeatherBanner weather={weather} />

        <section className="mb-8" aria-label="Travel links">
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <h2 className="font-serif text-base font-semibold text-sage-900">
              Essentials
            </h2>
          </div>
          <ul className="divide-y divide-forest-100 rounded-lg bg-white ring-1 ring-forest-100">
            {TRAVEL_LINKS.map((link) => (
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

        <section aria-label="Travel events">
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <h2 className="font-serif text-base font-semibold text-sage-900">
              Travel events
            </h2>
            <button
              type="button"
              onClick={openAddModal}
              className="text-sm font-medium text-forest-700 hover:underline"
            >
              + Add trip
            </button>
          </div>

          {travelEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {travelEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onEdit={openEditModal}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
              No travel events yet. Add a hike, weekend away, or trip plan.
            </p>
          )}
        </section>
      </main>

      <EventModal
        open={modalOpen}
        mode={modalMode}
        event={editingEvent}
        defaultHobby="Travel"
        onClose={() => setModalOpen(false)}
        onSaved={refreshEvents}
      />
    </>
  );
}

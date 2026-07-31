"use client";

import type { Event } from "@/lib/types";
import { formatDisplayDate } from "@/lib/types";
import ColorBlock from "./ColorBlock";
import CategoryDot from "./CategoryDot";
import EventActionsMenu from "./EventActionsMenu";

interface HeroSectionProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (event: Event) => void;
}

export default function HeroSection({ event, onEdit, onDelete }: HeroSectionProps) {
  return (
    <section className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
      <ColorBlock hobby={event.hobby} label={event.hobby} className="h-64 md:h-72" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-forest-700 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
          <CategoryDot hobby={event.hobby} />
          <span className="text-xs font-medium uppercase tracking-wide text-sage-800/60">
            {event.hobby}
          </span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-sage-900 md:text-4xl">
            {event.title}
          </h2>
          <EventActionsMenu event={event} onEdit={onEdit} onDelete={onDelete} />
        </div>
        <p className="text-base leading-relaxed text-sage-800/75">{event.description}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="font-semibold text-forest-700">{formatDisplayDate(event.date)}</span>
          <span className="text-sage-800/55">{event.location}</span>
        </div>
      </div>
    </section>
  );
}

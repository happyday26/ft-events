"use client";

import type { Event } from "@/lib/types";
import { formatDisplayDate } from "@/lib/types";
import ColorBlock from "./ColorBlock";
import CategoryDot from "./CategoryDot";
import EventActionsMenu from "./EventActionsMenu";

interface EventCardProps {
  event: Event;
  compact?: boolean;
  onEdit: (event: Event) => void;
  onDelete: (event: Event) => void;
}

export default function EventCard({
  event,
  compact = false,
  onEdit,
  onDelete,
}: EventCardProps) {
  return (
    <article className="group flex flex-col gap-3">
      <ColorBlock
        hobby={event.hobby}
        label={event.hobby}
        className={compact ? "h-24" : "h-36"}
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <CategoryDot hobby={event.hobby} />
          <time className="text-xs font-medium uppercase tracking-wide text-sage-800/60">
            {formatDisplayDate(event.date)}
          </time>
        </div>
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`font-serif font-semibold leading-snug text-sage-900 ${
              compact ? "text-base" : "text-lg"
            }`}
          >
            {event.title}
          </h3>
          <EventActionsMenu event={event} onEdit={onEdit} onDelete={onDelete} />
        </div>
        {!compact && (
          <p className="line-clamp-2 text-sm leading-relaxed text-sage-800/70">
            {event.description}
          </p>
        )}
        <p className="text-sm text-sage-800/55">{event.location}</p>
      </div>
    </article>
  );
}

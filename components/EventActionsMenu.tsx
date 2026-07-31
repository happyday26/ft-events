"use client";

import { useEffect, useRef, useState } from "react";
import type { Event } from "@/lib/types";

interface EventActionsMenuProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (event: Event) => void;
}

export default function EventActionsMenu({ event, onEdit, onDelete }: EventActionsMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="relative shrink-0" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full px-2 py-1 text-lg leading-none text-sage-800/50 transition hover:bg-forest-50 hover:text-sage-900"
        aria-label={`Actions for ${event.title}`}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        ···
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-20 mt-1 min-w-[7rem] overflow-hidden rounded-lg bg-white py-1 shadow-lg ring-1 ring-forest-200"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onEdit(event);
            }}
            className="block w-full px-4 py-2 text-left text-sm text-sage-900 transition hover:bg-forest-50"
          >
            Edit
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onDelete(event);
            }}
            className="block w-full px-4 py-2 text-left text-sm text-red-700 transition hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

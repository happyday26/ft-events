"use client";

import { useEffect, useState } from "react";
import type { Event } from "@/lib/types";
import type { HobbyKey } from "@/lib/hobbies";
import { HOBBIES } from "@/lib/hobbies";
import ColorBlock from "./ColorBlock";
import CategoryDot from "./CategoryDot";

interface EventModalProps {
  open: boolean;
  mode: "add" | "edit";
  event?: Event | null;
  defaultHobby?: HobbyKey;
  onClose: () => void;
  onSaved: () => void;
}

interface FormState {
  title: string;
  hobby: HobbyKey;
  date: string;
  location: string;
  description: string;
}

const emptyForm: FormState = {
  title: "",
  hobby: "Exercise",
  date: "",
  location: "",
  description: "",
};

export default function EventModal({
  open,
  mode,
  event,
  defaultHobby = "Exercise",
  onClose,
  onSaved,
}: EventModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;

    if (mode === "edit" && event) {
      setForm({
        title: event.title,
        hobby: event.hobby,
        date: event.date,
        location: event.location,
        description: event.description,
      });
    } else {
      setForm({ ...emptyForm, hobby: defaultHobby });
    }

    setError(null);
  }, [open, mode, event, defaultHobby]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const isEdit = mode === "edit";

  async function handleSubmit(submitEvent: React.FormEvent) {
    submitEvent.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const url = isEdit ? `/api/events/${event!.id}` : "/api/events";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }

      if (!isEdit) {
        setForm(emptyForm);
      }

      onSaved();
      onClose();
    } catch {
      setError("Could not reach the server.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sage-900/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-forest-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-forest-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <CategoryDot hobby={form.hobby} size="md" />
            <h2 id="event-modal-title" className="font-serif text-lg font-semibold text-sage-900">
              {isEdit ? "Edit Event" : "Add Event"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-sage-800/50 transition hover:bg-forest-50 hover:text-sage-900"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
          <p className="text-sm text-sage-800/65">
            {isEdit
              ? "Update the details below. The event id stays the same."
              : "Fill in the details below. Your event will appear on the homepage instantly."}
          </p>

          <ColorBlock hobby={form.hobby} label={form.hobby} className="h-16" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-sage-900">Event name</span>
              <input
                required
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Sunday Hike Club"
                className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-sage-900">Category (sets card color)</span>
              <select
                value={form.hobby}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, hobby: e.target.value as HobbyKey }))
                }
                className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
              >
                {HOBBIES.map((hobby) => (
                  <option key={hobby} value={hobby}>
                    {hobby}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-sage-900">Date</span>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-sage-900">Location</span>
              <input
                required
                value={form.location}
                onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                placeholder="Where is it?"
                className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">Description</span>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="What should people know before they come?"
              className="resize-none rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
          </label>

          {!isEdit && (
            <div className="rounded-lg bg-forest-50 px-3 py-2.5 text-xs text-forest-800">
              ID is generated from date + title, e.g.{" "}
              <code className="font-mono">20260820-sunday-hike</code>
            </div>
          )}

          {isEdit && event && (
            <div className="rounded-lg bg-sage-100 px-3 py-2.5 text-xs text-sage-800">
              ID: <code className="font-mono">{event.id}</code>
            </div>
          )}

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
            >
              {submitting ? "Saving…" : isEdit ? "Save changes" : "Publish event"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-4 py-2 text-sm font-medium text-sage-800/70 transition hover:bg-forest-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import type { Reminder } from "@/lib/types";

interface ReminderModalProps {
  open: boolean;
  mode: "add" | "edit";
  reminder?: Reminder | null;
  onClose: () => void;
  onSaved: () => void;
}

interface FormState {
  title: string;
  deadline: string;
  notes: string;
}

function todayYmd(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

const emptyForm = (): FormState => ({
  title: "",
  deadline: todayYmd(),
  notes: "",
});

export default function ReminderModal({
  open,
  mode,
  reminder,
  onClose,
  onSaved,
}: ReminderModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;

    if (mode === "edit" && reminder) {
      setForm({
        title: reminder.title,
        deadline: reminder.deadline,
        notes: reminder.notes,
      });
    } else {
      setForm(emptyForm());
    }

    setError(null);
  }, [open, mode, reminder]);

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
      const url = isEdit ? `/api/reminders/${reminder!.id}` : "/api/reminders";
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          deadline: form.deadline,
          notes: form.notes,
          done: isEdit ? Boolean(reminder?.done) : false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
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
      aria-labelledby="reminder-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-forest-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-forest-100 px-5 py-4">
          <h2
            id="reminder-modal-title"
            className="font-serif text-lg font-semibold text-sage-900"
          >
            {isEdit ? "Edit reminder" : "Add reminder"}
          </h2>
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
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">Reminder</span>
            <input
              required
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="What do you need to remember?"
              className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">Deadline</span>
            <input
              required
              type="date"
              value={form.deadline}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, deadline: e.target.value }))
              }
              className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">Notes (optional)</span>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, notes: e.target.value }))
              }
              placeholder="Extra detail, link, or context"
              className="resize-none rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
          </label>

          {error && (
            <p
              className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
              role="alert"
            >
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
            >
              {submitting ? "Saving…" : isEdit ? "Save changes" : "Add reminder"}
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

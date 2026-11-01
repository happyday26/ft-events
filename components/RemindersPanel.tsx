"use client";

import { useCallback, useState } from "react";
import {
  formatDisplayDate,
  sortReminders,
  type Reminder,
} from "@/lib/types";
import ReminderModal from "./ReminderModal";

interface RemindersPanelProps {
  initialReminders: Reminder[];
}

function hkToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function deadlineLabel(deadline: string, done: boolean): {
  text: string;
  className: string;
} {
  if (done) {
    return { text: formatDisplayDate(deadline), className: "text-sage-800/45" };
  }

  const today = hkToday();
  if (deadline < today) {
    return {
      text: `Overdue · ${formatDisplayDate(deadline)}`,
      className: "font-medium text-red-700",
    };
  }
  if (deadline === today) {
    return {
      text: `Due today · ${formatDisplayDate(deadline)}`,
      className: "font-medium text-amber-800",
    };
  }
  return {
    text: formatDisplayDate(deadline),
    className: "text-sage-800/60",
  };
}

export default function RemindersPanel({
  initialReminders = [],
}: RemindersPanelProps) {
  const [reminders, setReminders] = useState(() =>
    sortReminders(initialReminders),
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editing, setEditing] = useState<Reminder | null>(null);

  const refresh = useCallback(async () => {
    const response = await fetch("/api/reminders", { cache: "no-store" });
    if (!response.ok) return;
    const data = (await response.json()) as Reminder[];
    setReminders(sortReminders(data));
  }, []);

  const openAdd = () => {
    setModalMode("add");
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (reminder: Reminder) => {
    setModalMode("edit");
    setEditing(reminder);
    setModalOpen(true);
  };

  const toggleDone = async (reminder: Reminder) => {
    const response = await fetch(`/api/reminders/${reminder.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: reminder.title,
        deadline: reminder.deadline,
        notes: reminder.notes,
        done: !reminder.done,
      }),
    });
    if (response.ok) {
      await refresh();
    } else {
      window.alert("Could not update this reminder.");
    }
  };

  const handleDelete = async (reminder: Reminder) => {
    const confirmed = window.confirm(
      `Delete "${reminder.title}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    const response = await fetch(`/api/reminders/${reminder.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await refresh();
    } else {
      window.alert("Could not delete this reminder.");
    }
  };

  const openCount = reminders.filter((r) => !r.done).length;

  return (
    <section aria-label="Reminders" className="mb-8">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-serif text-base font-semibold text-sage-900">
            Reminders
          </h2>
          <p className="mt-0.5 text-xs text-sage-800/60">
            Deadlines before the daily digest
            {openCount > 0 ? ` · ${openCount} open` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={openAdd}
          className="rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700"
        >
          + Add reminder
        </button>
      </div>

      {reminders.length === 0 ? (
        <p className="rounded-lg bg-white px-3 py-4 text-sm text-sage-800/60 ring-1 ring-forest-100">
          No reminders yet. Add one with a deadline to keep it above the digest.
        </p>
      ) : (
        <ul className="divide-y divide-forest-100 rounded-lg bg-white ring-1 ring-forest-100">
          {reminders.map((reminder) => {
            const due = deadlineLabel(reminder.deadline, reminder.done);
            return (
              <li
                key={reminder.id}
                className="flex flex-wrap items-start gap-3 px-3 py-2.5"
              >
                <label className="mt-0.5 flex shrink-0 items-center">
                  <input
                    type="checkbox"
                    checked={reminder.done}
                    onChange={() => toggleDone(reminder)}
                    className="h-4 w-4 rounded border-forest-300 text-forest-700 focus:ring-forest-500"
                    aria-label={
                      reminder.done
                        ? `Mark "${reminder.title}" as open`
                        : `Mark "${reminder.title}" as done`
                    }
                  />
                </label>

                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-medium ${
                      reminder.done
                        ? "text-sage-800/45 line-through"
                        : "text-sage-900"
                    }`}
                  >
                    {reminder.title}
                  </p>
                  <p className={`mt-0.5 text-xs ${due.className}`}>{due.text}</p>
                  {reminder.notes ? (
                    <p className="mt-1 text-xs leading-relaxed text-sage-800/55">
                      {reminder.notes}
                    </p>
                  ) : null}
                </div>

                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={() => openEdit(reminder)}
                    className="rounded-full px-2.5 py-1 text-xs font-medium text-sage-800/70 transition hover:bg-forest-50 hover:text-sage-900"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(reminder)}
                    className="rounded-full px-2.5 py-1 text-xs font-medium text-red-700/80 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <ReminderModal
        open={modalOpen}
        mode={modalMode}
        reminder={editing}
        onClose={() => setModalOpen(false)}
        onSaved={refresh}
      />
    </section>
  );
}

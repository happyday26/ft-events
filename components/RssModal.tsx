"use client";

import { useEffect, useState } from "react";
import type { RssFeed } from "@/lib/types";
import type { HobbyKey } from "@/lib/hobbies";
import { HOBBIES } from "@/lib/hobbies";
import CategoryDot from "./CategoryDot";
import ColorBlock from "./ColorBlock";

interface RssModalProps {
  open: boolean;
  mode: "add" | "edit";
  feed?: RssFeed | null;
  onClose: () => void;
  onSaved: () => void;
}

interface FormState {
  url: string;
  website: string;
  category: HobbyKey;
  description: string;
}

const emptyForm: FormState = {
  url: "",
  website: "",
  category: "Entertainment",
  description: "",
};

export default function RssModal({ open, mode, feed, onClose, onSaved }: RssModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;

    if (mode === "edit" && feed) {
      setForm({
        url: feed.url,
        website: feed.website ?? "",
        category: feed.category,
        description: feed.description,
      });
    } else {
      setForm(emptyForm);
    }

    setError(null);
  }, [open, mode, feed]);

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
      const url = isEdit ? `/api/feeds/${feed!.id}` : "/api/feeds";
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

      if (!isEdit) setForm(emptyForm);
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
      aria-labelledby="rss-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-forest-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-forest-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <CategoryDot hobby={form.category} size="md" />
            <h2 id="rss-modal-title" className="font-serif text-lg font-semibold text-sage-900">
              {isEdit ? "Edit RSS Feed" : "Add RSS Feed"}
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
            Paste the RSS feed URL and the website people should open when they click the card.
          </p>

          <ColorBlock hobby={form.category} label={form.category} className="h-16" />

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">RSS URL</span>
            <input
              required
              type="url"
              value={form.url}
              onChange={(e) => setForm((prev) => ({ ...prev, url: e.target.value }))}
              placeholder="https://feeds.bbci.co.uk/news/rss.xml"
              className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">Website to open</span>
            <input
              type="url"
              value={form.website}
              onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
              placeholder="https://www.bbc.com/news"
              className="rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
            <span className="text-xs text-sage-800/55">
              Leave blank and we will try to guess it (BBC feeds map to bbc.com/news).
            </span>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-sage-900">Category</span>
            <select
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value as HobbyKey }))
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
            <span className="font-medium text-sage-900">Description</span>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="What does this feed cover?"
              className="resize-none rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none ring-forest-500 focus:ring-2"
            />
          </label>

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
              {submitting ? "Saving…" : isEdit ? "Save changes" : "Add feed"}
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

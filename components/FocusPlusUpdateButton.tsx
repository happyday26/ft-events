"use client";

export default function FocusPlusUpdateButton() {
  return (
    <div className="mt-4 flex flex-col gap-2 sm:max-w-lg">
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="inline-flex w-fit rounded-full bg-forest-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest-700"
      >
        Refresh Focus+
      </button>
      <p className="text-xs text-sage-800/55">
        Reloads AI, 台灣, Japan, and Korea from today&apos;s feeds.
      </p>
    </div>
  );
}

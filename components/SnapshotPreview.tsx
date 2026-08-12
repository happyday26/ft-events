import type { SiteSnapshot } from "@/lib/site-snapshot";

interface SnapshotPreviewProps {
  snapshot: SiteSnapshot | null;
  fallbackLabel: string;
}

export default function SnapshotPreview({
  snapshot,
  fallbackLabel,
}: SnapshotPreviewProps) {
  if (!snapshot) {
    return (
      <div className="min-h-[720px] px-3 py-6 text-xs text-sage-800/60">
        Preview unavailable — open the full page for {fallbackLabel}.
      </div>
    );
  }

  return (
    <div className="min-h-[720px] px-3 py-3">
      <p className="text-[11px] font-medium uppercase tracking-wide text-sage-800/55">
        {snapshot.heading}
      </p>
      <ul className="mt-2 space-y-3">
        {snapshot.items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="min-w-0">
            <p className="text-sm font-semibold leading-snug text-sage-900">
              {item.title}
            </p>
            {item.summary && (
              <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-sage-800/60">
                {item.summary}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

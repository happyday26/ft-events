"use client";

import { useEffect, useState } from "react";
import type { SiteSnapshot } from "@/lib/site-snapshot";
import SnapshotPreview from "./SnapshotPreview";

interface ClientSnapshotPreviewProps {
  href: string;
  label: string;
}

export default function ClientSnapshotPreview({
  href,
  label,
}: ClientSnapshotPreviewProps) {
  const [snapshot, setSnapshot] = useState<SiteSnapshot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    setLoading(true);
    fetch(
      `/api/site-preview?url=${encodeURIComponent(href)}&label=${encodeURIComponent(label)}&limit=16`,
      { cache: "no-store", signal: controller.signal },
    )
      .then(async (response) => {
        if (!response.ok) return null;
        const body = (await response.json()) as {
          snapshot?: SiteSnapshot | null;
        };
        return body.snapshot ?? null;
      })
      .then((next) => {
        if (!cancelled) setSnapshot(next);
      })
      .catch(() => {
        if (!cancelled) setSnapshot(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [href, label]);

  if (loading) {
    return (
      <div className="min-h-[720px] px-3 py-6 text-xs text-sage-800/60">
        Loading preview…
      </div>
    );
  }

  return <SnapshotPreview snapshot={snapshot} fallbackLabel={label} />;
}

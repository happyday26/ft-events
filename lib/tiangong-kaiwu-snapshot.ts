import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import type { TiangongSearchReport } from "@/lib/tiangong-kaiwu-search";

export const TIANGONG_SNAPSHOT_REL = "lib/tiangong-kaiwu-latest.json";

export function tiangongSnapshotPath(): string {
  return path.join(process.cwd(), TIANGONG_SNAPSHOT_REL);
}

export async function loadTiangongKaiwuSnapshot(): Promise<TiangongSearchReport | null> {
  try {
    const raw = await readFile(tiangongSnapshotPath(), "utf8");
    const data = JSON.parse(raw) as TiangongSearchReport;
    if (!data?.generatedAt || (data.status !== "found" && data.status !== "not_found")) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

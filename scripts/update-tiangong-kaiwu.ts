import { writeFile } from "node:fs/promises";
import path from "node:path";
import { buildTiangongKaiwuSearch } from "../lib/tiangong-kaiwu-search";

const OUT = path.join(process.cwd(), "lib", "tiangong-kaiwu-latest.json");

async function main() {
  const report = await buildTiangongKaiwuSearch();
  await writeFile(OUT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(
    `Wrote ${OUT} · ${report.status} · ${report.hits.length} hit(s) · ${report.generatedAt}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

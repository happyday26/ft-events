import type { ArtMateReport } from "@/lib/art-mate-report";
import type { EstateListingReport } from "@/lib/estate-listing-report";
import type { HappyRetiredReport } from "@/lib/happy-retired-report";
import type { JcchReport } from "@/lib/jcch-report";
import type { PopticketReport } from "@/lib/popticket-report";
import type { UrbtixReport } from "@/lib/urbtix-report";

/** Client-safe constants/types only — do not import the builder from client components. */
export const CONSOLIDATED_REPORT_DEFAULT_DAYS = 4;

export type ConsolidatedReportScope =
  | "property"
  | "performance"
  | "golden-life"
  | "all";

export type ConsolidatedSectionKey =
  | "harbourside"
  | "sorrento"
  | "village-gardens"
  | "urbtix"
  | "popticket"
  | "art-mate"
  | "happy-retired"
  | "jcch";

export interface ConsolidatedSectionMeta {
  key: ConsolidatedSectionKey;
  area: "Property" | "Performance" | "Golden Life";
  title: string;
  scope: Exclude<ConsolidatedReportScope, "all">;
}

export const CONSOLIDATED_SECTIONS: ConsolidatedSectionMeta[] = [
  {
    key: "harbourside",
    area: "Property",
    scope: "property",
    title: "Harbourside · 君臨天下 · 3-bed",
  },
  {
    key: "sorrento",
    area: "Property",
    scope: "property",
    title: "Sorrento · 擎天半島 · 3-bed 1,000呎+",
  },
  {
    key: "village-gardens",
    area: "Property",
    scope: "property",
    title: "Village Gardens · 又一村花園 · 3-bed",
  },
  {
    key: "urbtix",
    area: "Performance",
    scope: "performance",
    title: "URBTIX · 城市售票網",
  },
  {
    key: "popticket",
    area: "Performance",
    scope: "performance",
    title: "Popticket · 撲飛",
  },
  {
    key: "art-mate",
    area: "Performance",
    scope: "performance",
    title: "Art-mate · 門票搜尋",
  },
  {
    key: "happy-retired",
    area: "Golden Life",
    scope: "golden-life",
    title: "樂活新中年 · Happy Retired",
  },
  {
    key: "jcch",
    area: "Golden Life",
    scope: "golden-life",
    title: "賽馬會流金匯 · JC Cadenza Hub",
  },
];

export interface ConsolidatedReport {
  scope: ConsolidatedReportScope;
  since: string;
  until: string;
  days: number;
  generatedAt: string;
  counts: {
    harbourside: number;
    sorrento: number;
    villageGardens: number;
    urbtix: number;
    popticket: number;
    artMate: number;
    happyRetired: number;
    jcch: number;
    total: number;
  };
  property: {
    harbourside: EstateListingReport | null;
    sorrento: EstateListingReport | null;
    villageGardens: EstateListingReport | null;
  };
  artsCulture: {
    urbtix: UrbtixReport | null;
    popticket: PopticketReport | null;
    artMate: ArtMateReport | null;
  };
  goldenLife: {
    happyRetired: HappyRetiredReport | null;
    jcch: JcchReport | null;
  };
  errors: Partial<Record<ConsolidatedSectionKey, string>>;
  notes: string[];
}

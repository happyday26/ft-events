import type { EstateListingReport } from "@/lib/estate-listing-report";
import type { HappyRetiredReport } from "@/lib/happy-retired-report";
import type { JcchReport } from "@/lib/jcch-report";
import type { PopticketReport } from "@/lib/popticket-report";
import type { UrbtixReport } from "@/lib/urbtix-report";

/** Client-safe constants/types only — do not import the builder from client components. */
export const CONSOLIDATED_REPORT_DEFAULT_DAYS = 4;

export type ConsolidatedSectionKey =
  | "harbourside"
  | "sorrento"
  | "village-gardens"
  | "urbtix"
  | "popticket"
  | "happy-retired"
  | "jcch";

export interface ConsolidatedSectionMeta {
  key: ConsolidatedSectionKey;
  area: "Property" | "Arts & Culture" | "Golden Life";
  title: string;
}

export const CONSOLIDATED_SECTIONS: ConsolidatedSectionMeta[] = [
  {
    key: "harbourside",
    area: "Property",
    title: "Harbourside · 君臨天下",
  },
  {
    key: "sorrento",
    area: "Property",
    title: "Sorrento · 擎天半島 · 3-bed 1,000呎+",
  },
  {
    key: "village-gardens",
    area: "Property",
    title: "Village Gardens · 又一村花園",
  },
  {
    key: "urbtix",
    area: "Arts & Culture",
    title: "URBTIX · 城市售票網",
  },
  {
    key: "popticket",
    area: "Arts & Culture",
    title: "Popticket · 撲飛",
  },
  {
    key: "happy-retired",
    area: "Golden Life",
    title: "樂活新中年 · Happy Retired",
  },
  {
    key: "jcch",
    area: "Golden Life",
    title: "賽馬會流金匯 · JC Cadenza Hub",
  },
];

export interface ConsolidatedReport {
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
  };
  goldenLife: {
    happyRetired: HappyRetiredReport | null;
    jcch: JcchReport | null;
  };
  errors: Partial<Record<ConsolidatedSectionKey, string>>;
  notes: string[];
}

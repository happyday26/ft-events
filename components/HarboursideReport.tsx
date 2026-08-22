"use client";

import EstateListingReportPanel from "./EstateListingReport";

export default function HarboursideReportPanel() {
  return (
    <EstateListingReportPanel
      title="Harbourside report"
      apiPath="/api/property/harbourside-report"
    />
  );
}

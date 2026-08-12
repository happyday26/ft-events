export interface HealthLink {
  id: string;
  label: string;
  href: string;
  note: string;
  /** iframe when the site allows embedding; snapshot when it blocks frames */
  preview: "iframe" | "snapshot";
}

export const HEALTH_LINKS: HealthLink[] = [
  {
    id: "healthyu",
    label: "健康大學堂講座 / 活動 - HealthyU健康大學堂",
    href: "https://healthyu.com.hk/events/",
    note: "Lectures and health programmes",
    preview: "snapshot",
  },
  {
    id: "ytmdhc",
    label: "油尖旺地區康健中心",
    href: "https://ytmdhc.org.hk/",
    note: "Yau Tsim Mong District Health Centre",
    preview: "snapshot",
  },
];

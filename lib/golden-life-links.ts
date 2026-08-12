export interface GoldenLifeLink {
  id: string;
  label: string;
  href: string;
  note: string;
  /** iframe when the site allows embedding; snapshot when it blocks frames */
  preview: "iframe" | "snapshot";
}

export const GOLDEN_LIFE_LINKS: GoldenLifeLink[] = [
  {
    id: "cuhk-nawa",
    label: "中大新亞書院 · 樂齡活動",
    href: "https://www.ioa.cuhk.edu.hk/zh-tw/knowledge-transfer/nawa/nawa-events",
    note: "NAWA events and programmes for active ageing",
    preview: "iframe",
  },
  {
    id: "healthyu",
    label: "HealthyU 健康大學堂",
    href: "https://healthyu.com.hk/events/",
    note: "Lectures and health programmes",
    preview: "snapshot",
  },
  {
    id: "e123-physical",
    label: "e123長青網 · 健康運動",
    href: "https://www.e123.hk/zh-hant/health/physical",
    note: "Physical health tips and exercise articles",
    preview: "snapshot",
  },
  {
    id: "happy-retired",
    label: "樂活新中年 Happy Retired",
    href: "https://happy-retired.com/",
    note: "50+ activities, health and retirement living",
    preview: "iframe",
  },
  {
    id: "eduhk-elder",
    label: "教大長者學苑",
    href: "https://www.eduhk.hk/elderacademy/view.php?secid=2582&u=u",
    note: "Elder Academy background and programmes",
    preview: "iframe",
  },
  {
    id: "jcch",
    label: "賽馬會流金匯 JC Cadenza Hub",
    href: "https://jcch.org.hk/",
    note: "Courses, activities and community care",
    preview: "iframe",
  },
  {
    id: "olink-feed",
    label: "傲齡匯 · 長青拍檔通訊",
    href: "https://olink.e123.hk/zh-hant/epartner/57/feed/3440",
    note: "Partner newsletter and course updates",
    preview: "snapshot",
  },
];

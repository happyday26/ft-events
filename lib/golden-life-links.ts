export interface GoldenLifeLink {
  id: string;
  label: string;
  href: string;
  note: string;
  /** iframe when the site allows embedding; snapshot when it blocks frames */
  preview: "iframe" | "snapshot";
}

export interface GoldenLifeDirectoryLink {
  id: string;
  label: string;
  href: string;
  note: string;
}

export const GOLDEN_LIFE_LINKS: GoldenLifeLink[] = [
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

/** Elder Academy & related bodies — link-only (no scroll preview). */
export const GOLDEN_LIFE_DIRECTORY_LINKS: GoldenLifeDirectoryLink[] = [
  {
    id: "cuhk-nawa",
    label: "中大新亞書院 · 樂齡活動",
    href: "https://www.ioa.cuhk.edu.hk/zh-tw/knowledge-transfer/nawa/nawa-events",
    note: "NAWA events and programmes for active ageing",
  },
  {
    id: "elderly-commission",
    label: "香港安老事務委員會",
    href: "https://www.elderlycommission.gov.hk/tc/",
    note: "Elderly Commission · official site",
  },
  {
    id: "elder-academy-scheme",
    label: "「長者學苑」計劃 (勞工及福利局和安老事務委員會設立)",
    href: "https://www.elderacademy.org.hk/tc/",
    note: "Elder Academy Scheme · LWB & Elderly Commission",
  },
  {
    id: "e123-home",
    label: "「長青網」(香港耆康老人福利會發展及建立)",
    href: "https://www.e123.hk/zh-hant",
    note: "e123 · SAGE elder services portal",
  },
  {
    id: "sage",
    label: "香港耆康老人福利會(簡稱耆康會)",
    href: "https://www.sage.org.hk/",
    note: "The Hong Kong Society for the Aged",
  },
  {
    id: "hku-elder",
    label: "香港大學長者學苑計劃",
    href: "https://www.ageing.hku.hk/",
    note: "HKU Sau Po Centre on Ageing",
  },
  {
    id: "polyu-iaa",
    label: "香港理工大學活齡學院",
    href: "https://www.polyu.edu.hk/apss/iaa/hk/",
    note: "PolyU · Research Centre for Gerontology and Family Studies",
  },
  {
    id: "cityu-elder",
    label: "香港城市大學「長者學苑」",
    href: "https://www.cityu.edu.hk/zh-hk/search?q=%E9%95%B7%E8%80%85%E5%AD%B8%E8%8B%91",
    note: "CityU Elder Academy · campus search",
  },
  {
    id: "hkmu-elder",
    label: "香港公開大學長者學苑",
    href: "https://www.hkmu.edu.hk/lipace/tc/elderacademy/",
    note: "HKMU (前公開大學) · LiPACE Elder Academy",
  },
  {
    id: "lingnan-elder",
    label: "嶺南大學「長者學苑在嶺南」",
    href: "https://www.ln.edu.hk/cht/life/programmes/lingnanu-elder-academy-programme",
    note: "Lingnan Elder Academy programmes",
  },
  {
    id: "shueyan-elder",
    label: "香港樹仁大學長者學苑課程",
    href: "https://elderacademy.hksyu.edu/",
    note: "HKSYU Elder Academy · audit courses",
  },
  {
    id: "u3a",
    label: "香港第三齡學苑 (香港電燈與香港社會服務聯會成立)",
    href: "https://www.hkcss.org.hk/u3a/",
    note: "U3A · HKCSS & HK Electric",
  },
];

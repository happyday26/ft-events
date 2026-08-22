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
  {
    id: "mindfulness-sports",
    label: "Mindfulness Sports",
    href: "http://mindfulness-sports.org/",
    note: "賽馬會老友運動計劃 · 靜觀動樂",
    preview: "snapshot",
  },
  {
    id: "pause-and-breathe",
    label: "心呼吸學習空間",
    href: "https://practice.pauseandbreathe.org/",
    note: "Pause & Breathe · free mindfulness courses",
    preview: "snapshot",
  },
  {
    id: "heart-to-heart",
    label: "同心服務 · Heart to Heart",
    href: "https://www.onlinecompanionhk.org/hearttoheart",
    note: "Online Companion · guided CBT counselling",
    preview: "snapshot",
  },
];

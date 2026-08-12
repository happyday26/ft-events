export interface GoodCommunityLink {
  id: string;
  label: string;
  href: string;
  note: string;
  preview: "iframe" | "snapshot";
}

export const GOOD_COMMUNITY_LINKS: GoodCommunityLink[] = [
  {
    id: "linghoward",
    label: "凌浩雲 Ling Howard",
    href: "https://linghoward.com/?lang=zh",
    note: "Community stories and local initiatives",
    preview: "iframe",
  },
];

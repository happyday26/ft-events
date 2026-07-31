export const HOBBIES = [
  "Exercise",
  "Health",
  "Travel",
  "Entertainment",
  "Music",
  "Movies",
  "Wellness",
] as const;

export type HobbyKey = (typeof HOBBIES)[number];

/** Unique hex color per category — used directly so colors always render. */
export const HOBBY_HEX: Record<HobbyKey, string> = {
  Exercise: "#16a34a",
  Health: "#0d9488",
  Travel: "#2563eb",
  Entertainment: "#7c3aed",
  Music: "#0891b2",
  Movies: "#ea580c",
  Wellness: "#ca8a04",
};

export function isHobbyKey(value: string): value is HobbyKey {
  return (HOBBIES as readonly string[]).includes(value);
}

export function getCategoryColor(hobby: HobbyKey): string {
  return HOBBY_HEX[hobby];
}

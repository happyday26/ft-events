import type { HobbyKey } from "@/lib/hobbies";
import { getCategoryColor } from "@/lib/hobbies";

interface CategoryDotProps {
  hobby: HobbyKey;
  size?: "sm" | "md";
}

export default function CategoryDot({ hobby, size = "sm" }: CategoryDotProps) {
  const dimension = size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3";

  return (
    <span
      className={`inline-block shrink-0 rounded-full ${dimension}`}
      style={{ backgroundColor: getCategoryColor(hobby) }}
      aria-hidden
    />
  );
}

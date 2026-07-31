import type { HobbyKey } from "@/lib/hobbies";
import { getCategoryColor } from "@/lib/hobbies";

interface ColorBlockProps {
  hobby: HobbyKey;
  label?: string;
  className?: string;
}

export default function ColorBlock({ hobby, label, className = "" }: ColorBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ backgroundColor: getCategoryColor(hobby) }}
      role="img"
      aria-label={label ? `${label} category placeholder` : `${hobby} category placeholder`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-sage-900">
          {label}
        </span>
      )}
    </div>
  );
}

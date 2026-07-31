"use client";

import type { HobbyKey } from "@/lib/hobbies";
import { HOBBIES } from "@/lib/hobbies";
import CategoryDot from "./CategoryDot";

interface FilterBarProps {
  selected: "All" | HobbyKey;
  onSelect: (value: "All" | HobbyKey) => void;
}

const FILTERS: ("All" | HobbyKey)[] = ["All", ...HOBBIES];

export default function FilterBar({ selected, onSelect }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium uppercase tracking-wide text-sage-800/50">
        Filter by category — each type has a fixed color
      </p>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((hobby) => {
          const isActive = selected === hobby;

          return (
            <button
              key={hobby}
              type="button"
              onClick={() => onSelect(hobby)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                isActive
                  ? "bg-forest-700 text-white"
                  : "bg-white text-sage-800/70 ring-1 ring-forest-200 hover:ring-forest-400"
              }`}
            >
              {hobby !== "All" && <CategoryDot hobby={hobby} />}
              {hobby}
            </button>
          );
        })}
      </div>
    </div>
  );
}

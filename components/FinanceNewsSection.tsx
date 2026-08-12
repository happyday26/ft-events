import type { FinanceNewsItem } from "@/lib/finance-news";
import { formatNewsTime } from "@/lib/finance-news";

interface FinanceNewsSectionProps {
  items: FinanceNewsItem[];
  title: string;
  sourceHref: string;
  sourceLabel: string;
  tip?: string;
}

export default function FinanceNewsSection({
  items = [],
  title,
  sourceHref,
  sourceLabel,
  tip,
}: FinanceNewsSectionProps) {
  const latestTime =
    items.find((item) => item.publishedAt)?.publishedAt ?? null;

  return (
    <section className="mb-4" aria-label={title}>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <h2 className="font-serif text-base font-semibold text-sage-900">{title}</h2>
        <div className="flex items-center gap-2 text-[11px] text-sage-800/55">
          {latestTime && <span>{formatNewsTime(latestTime)}</span>}
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-forest-700 hover:underline"
          >
            {sourceLabel} →
          </a>
        </div>
      </div>

      {items.length > 0 ? (
        <ol className="rounded-lg bg-white ring-1 ring-forest-100">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`flex items-start gap-2 px-2.5 py-1.5 ${
                index > 0 ? "border-t border-forest-100" : ""
              }`}
            >
              <span className="mt-0.5 w-3 shrink-0 text-[11px] font-semibold text-forest-700">
                {index + 1}.
              </span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 text-sm leading-snug text-sage-900 hover:text-forest-700"
                title="Opens in a new tab"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="rounded-lg bg-white px-3 py-2 text-xs text-sage-800/60 ring-1 ring-forest-100">
          Headlines unavailable
        </p>
      )}

      {tip && <p className="mt-1 text-[10px] text-sage-800/45">{tip}</p>}
    </section>
  );
}

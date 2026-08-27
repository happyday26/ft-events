import SiteHeader from "./SiteHeader";
import {
  FOCUS_DATE_EN,
  FOCUS_TOPICS,
  type FocusTopic,
} from "@/lib/focus-briefings";

function TopicSection({ topic }: { topic: FocusTopic }) {
  return (
    <section
      aria-labelledby={`focus-${topic.id}`}
      lang={topic.lang}
      className="mb-10"
    >
      <header className="mb-3">
        <div className="flex items-baseline justify-between gap-3">
          <h2
            id={`focus-${topic.id}`}
            className="font-serif text-xl font-semibold tracking-tight text-sage-900"
          >
            {topic.title}
          </h2>
          <time className="shrink-0 text-[11px] text-sage-800/55">
            {topic.dateLabel}
          </time>
        </div>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/75">
          {topic.lede}
        </p>
      </header>

      <ol className="divide-y divide-forest-100 rounded-lg bg-white ring-1 ring-forest-100">
        {topic.stories.map((story, index) => (
          <li key={story.sourceHref} className="px-3 py-3 sm:px-4">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 w-4 shrink-0 text-xs font-semibold text-forest-700">
                {index + 1}.
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-medium leading-snug text-sage-900">
                  {story.headline}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-sage-800/80">
                  {story.body}
                </p>
                <a
                  href={story.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-xs font-medium text-forest-700 hover:underline"
                >
                  {story.sourceLabel} →
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function FocusPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-8">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Focus
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Hong Kong morning briefing · {FOCUS_DATE_EN}. Four topics, five
            stories each.
          </p>
        </header>

        {FOCUS_TOPICS.map((topic) => (
          <TopicSection key={topic.id} topic={topic} />
        ))}
      </main>
    </>
  );
}

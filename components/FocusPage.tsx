import { FOCUS_BRIEFINGS } from "@/lib/focus-report";
import SiteHeader from "./SiteHeader";

export default function FocusPage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <header className="mb-6">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-sage-900">
            Focus
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-sage-800/70">
            Five stories that matter, by subject.
          </p>
          <nav aria-label="Focus briefings" className="mt-4 flex flex-wrap gap-2">
            {FOCUS_BRIEFINGS.map((briefing) => (
              <a
                key={briefing.id}
                href={`#${briefing.id}`}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium text-sage-800/70 ring-1 ring-forest-200 hover:ring-forest-400"
              >
                {briefing.topic}
              </a>
            ))}
          </nav>
        </header>

        {FOCUS_BRIEFINGS.map((briefing) => (
          <section
            key={briefing.id}
            id={briefing.id}
            lang={briefing.lang}
            aria-label={briefing.topic}
            className="mb-10 scroll-mt-4"
          >
            <div className="mb-3">
              <h2 className="font-serif text-xl font-semibold tracking-tight text-sage-900">
                {briefing.topic}
              </h2>
              <p className="mt-0.5 text-xs text-sage-800/55">
                {briefing.updatedAt}
              </p>
            </div>

            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-sage-900/85">
              {briefing.lede}
            </p>

            <ol className="space-y-4">
              {briefing.stories.map((story, index) => (
                <li
                  key={story.id}
                  className="rounded-lg bg-white px-3 py-3 ring-1 ring-forest-100"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="w-4 shrink-0 text-xs font-semibold text-forest-700">
                      {index + 1}.
                    </span>
                    <h3 className="font-serif text-base font-semibold text-sage-900">
                      {story.title}
                    </h3>
                  </div>
                  <p className="mt-2 pl-6 text-sm leading-relaxed text-sage-800/80">
                    {story.body}
                  </p>
                  <p className="mt-2 pl-6 text-xs">
                    <a
                      href={story.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-forest-700 hover:underline"
                    >
                      {story.sourceLabel} →
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </main>
    </>
  );
}

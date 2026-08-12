import type { RssFeed } from "@/lib/types";
import { resolveFeedWebsite } from "@/lib/types";

const linkClass = "text-sm font-medium text-forest-700 hover:underline";

interface TopLinksProps {
  feeds: RssFeed[];
}

export default function TopLinks({ feeds = [] }: TopLinksProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <a
        href="https://www.urbtix.hk/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        URBTIX →
      </a>
      {feeds.map((feed) => (
        <a
          key={feed.id}
          href={resolveFeedWebsite(feed.url, feed.website)}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          title={feed.description}
        >
          {feed.description} →
        </a>
      ))}
    </div>
  );
}

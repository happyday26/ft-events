import {
  fetchRssNews,
  type FinanceNewsItem,
} from "@/lib/finance-news";

export interface FocusTopicNews {
  id: string;
  topic: string;
  lang?: string;
  sourceLabel: string;
  sourceHref: string;
  items: FinanceNewsItem[];
}

const TECHCRUNCH_AI_RSS =
  "https://techcrunch.com/category/artificial-intelligence/feed/";
const LTN_POLITICS_RSS = "https://news.ltn.com.tw/rss/politics.xml";
const JAPAN_TIMES_RSS = "https://www.japantimes.co.jp/feed/";
const YONHAP_RSS = "https://en.yna.co.kr/RSS/news.xml";

export async function fetchFocusTopics(
  limit = 5,
): Promise<FocusTopicNews[]> {
  const [ai, taiwan, japan, korea] = await Promise.all([
    fetchRssNews(TECHCRUNCH_AI_RSS, "TechCrunch", limit),
    fetchRssNews(LTN_POLITICS_RSS, "自由時報", limit),
    fetchRssNews(JAPAN_TIMES_RSS, "Japan Times", limit),
    fetchRssNews(YONHAP_RSS, "Yonhap", limit),
  ]);

  return [
    {
      id: "ai",
      topic: "Artificial intelligence",
      sourceLabel: "TechCrunch",
      sourceHref: "https://techcrunch.com/category/artificial-intelligence/",
      items: ai,
    },
    {
      id: "taiwan",
      topic: "台灣",
      lang: "zh-Hant",
      sourceLabel: "自由時報",
      sourceHref: "https://news.ltn.com.tw/list/breakingnews/politics",
      items: taiwan,
    },
    {
      id: "japan",
      topic: "Japan",
      sourceLabel: "Japan Times",
      sourceHref: "https://www.japantimes.co.jp/",
      items: japan,
    },
    {
      id: "korea",
      topic: "Korea",
      sourceLabel: "Yonhap",
      sourceHref: "https://en.yna.co.kr/news",
      items: korea,
    },
  ];
}

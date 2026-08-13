export interface MediaLink {
  id: string;
  label: string;
  href: string;
  note: string;
}

/** Media, news, podcasts, and culture outlets — open in a new tab. */
export const MEDIA_LINKS: MediaLink[] = [
  {
    id: "fast-company",
    label: "Fast Company | Business + Innovation",
    href: "https://www.fastcompany.com/",
    note: "Business, innovation & design",
  },
  {
    id: "etnet",
    label: "etnet",
    href: "https://www.etnet.com.hk/www/tc/home/",
    note: "經濟通 · HK finance & lifestyle",
  },
  {
    id: "etnet-quotes",
    label: "經濟通 免費即時股票及期指報價",
    href: "https://www.etnet.com.hk/www/tc/stocks/realtime/quote.php",
    note: "Free realtime stock & futures quotes",
  },
  {
    id: "hk01",
    label: "香港01",
    href: "https://www.hk01.com/",
    note: "Hong Kong news & features",
  },
  {
    id: "master-insight",
    label: "灼見名家",
    href: "https://www.master-insight.com/",
    note: "Commentary & policy discussion",
  },
  {
    id: "rthk",
    label: "香港電台網站",
    href: "https://www.rthk.hk/",
    note: "RTHK · radio, TV & news",
  },
  {
    id: "postmag",
    label: "Post Magazine",
    href: "https://www.scmp.com/postmag",
    note: "SCMP PostMag · culture & lifestyle",
  },
  {
    id: "new-yorker",
    label: "The New Yorker",
    href: "https://www.newyorker.com/",
    note: "Journalism, essays & culture",
  },
  {
    id: "lse-iq",
    label:
      "LSE IQ podcast | Intelligent questions with social science answers by LSE Podcasts",
    href: "https://www.lse.ac.uk/research/lse-iq",
    note: "LSE social science podcast",
  },
  {
    id: "am730",
    label: "am730",
    href: "https://www.am730.com.hk/",
    note: "Hong Kong free daily & news",
  },
  {
    id: "stheadline",
    label: "星島頭條",
    href: "https://www.stheadline.com/",
    note: "Sing Tao Headline · realtime news",
  },
  {
    id: "tvb-news",
    label: "無綫新聞",
    href: "https://news.tvb.com/",
    note: "TVB News",
  },
  {
    id: "cctv-finance",
    label: "天下财经|CCTV",
    href: "https://finance.cctv.cn/",
    note: "CCTV finance channel",
  },
  {
    id: "cnbc-make-it",
    label: "cnbc/make-it/life/",
    href: "https://www.cnbc.com/make-it/life/",
    note: "CNBC Make It · life & careers",
  },
  {
    id: "cw",
    label: "天下雜誌－華文世界最優質的財經雜誌",
    href: "https://www.cw.com.tw/",
    note: "CommonWealth Magazine Taiwan",
  },
  {
    id: "inc",
    label: "Inc",
    href: "https://www.inc.com/",
    note: "Entrepreneurship & growing companies",
  },
  {
    id: "business-insider",
    label: "Business Insider",
    href: "https://www.businessinsider.com/",
    note: "Business, tech & markets",
  },
  {
    id: "archdaily",
    label: "Archdaily",
    href: "https://www.archdaily.com/",
    note: "Architecture projects worldwide",
  },
  {
    id: "archiposition",
    label: "有方 – 高品质建筑资讯",
    href: "https://www.archiposition.com/",
    note: "Architecture news & travel",
  },
  {
    id: "artistic-moments",
    label: "藝術當下 Artistic Moments",
    href: "https://www.artisticmoments.net/",
    note: "Arts commentary & reviews",
  },
  {
    id: "homejournal",
    label: "homejournal",
    href: "https://www.homejournal.com/",
    note: "Home, design & living",
  },
  {
    id: "techbang",
    label: "T客邦",
    href: "https://www.techbang.com/",
    note: "Tech news & reviews",
  },
  {
    id: "cloud-dialogue-search",
    label: "雲端對談 - Google 搜尋",
    href: "https://www.google.com/search?q=%E9%9B%B2%E7%AB%AF%E5%B0%8D%E8%AB%87",
    note: "Google search · 雲端對談",
  },
  {
    id: "digitaling",
    label: "数英网-广告市场营销服务平台",
    href: "https://www.digitaling.com/",
    note: "Digital marketing & advertising",
  },
  {
    id: "winshang-news",
    label: "快讯_赢商新闻_赢商网",
    href: "https://news.winshang.com/",
    note: "Winshang · retail & commercial property news",
  },
  {
    id: "baijiajiangtan-resources",
    label:
      "百家讲坛资源网-提供CCTV10百家讲坛全集MP3,视频,电子书免费下载!",
    href: "https://www.google.com/search?q=%E7%99%BE%E5%AE%B6%E8%AE%B2%E5%9D%9B%E8%B5%84%E6%BA%90%E7%BD%91",
    note: "Baijia Jiangtan resources · search",
  },
  {
    id: "baijiajiangtan-cctv",
    label: "百家讲坛_央视网(cctv.com)",
    href: "https://tv.cctv.cn/lm/bjjt/videoset/",
    note: "Official CCTV-10 Baijia Jiangtan",
  },
  {
    id: "rthk-happy-day",
    label: "是日快樂|RTHK",
    href: "https://www.rthk.hk/radio/radio1/programme/itsahappyday",
    note: "RTHK Radio 1 programme",
  },
  {
    id: "rthk-world-outlook",
    label: "放眼世界 | RTHK",
    href: "https://www.rthk.hk/radio/radio1/programme/world_outlook",
    note: "RTHK Radio 1 · world affairs",
  },
  {
    id: "rthk-free-as-wind",
    label: "講東講西 |RTHK",
    href: "https://www.rthk.hk/radio/radio1/programme/Free_as_the_wind",
    note: "RTHK Radio 1 · cultural talk",
  },
  {
    id: "rthk-university",
    label: "大學堂|RTHK",
    href: "https://www.rthk.hk/radio/radio1/programme/university_knowledge_platform",
    note: "RTHK Radio 1 · lectures & learning",
  },
  {
    id: "urban-nutters",
    label: "Urban Nutters",
    href: "https://www.urbannutters.com/",
    note: "Hong Kong food media & community",
  },
  {
    id: "city-diary",
    label: "城市日記",
    href: "https://www.google.com/search?q=%E5%9F%8E%E5%B8%82%E6%97%A5%E8%A8%98+Hong+Kong",
    note: "City diary · Hong Kong",
  },
  {
    id: "andthen",
    label: "跟住去 LET'S GO ｜ AndThen.hk",
    href: "https://andthen.hk/",
    note: "Local eats, shops & Hong Kong finds",
  },
  {
    id: "betterme",
    label: "BetterMe Magazine",
    href: "https://www.betterme-magazine.com/",
    note: "Habits, lifestyle & Hong Kong living",
  },
  {
    id: "startuplatte",
    label: "創新拿鐵",
    href: "https://startuplatte.com/",
    note: "Innovation cases & podcast",
  },
  {
    id: "99pi",
    label: "99% Invisible",
    href: "https://99percentinvisible.org/",
    note: "Design & architecture podcast",
  },
  {
    id: "oldcha-books",
    label: "與老查一起讀商業好書",
    href: "https://vocus.cc/salon/oldcha_book-review",
    note: "Business book salon · vocus",
  },
  {
    id: "reading-lists",
    label: "The Reading Lists",
    href: "https://www.thereadinglists.com/",
    note: "Curated book lists",
  },
  {
    id: "otw",
    label: "通勤十分鐘",
    href: "https://othewaytowork.com/",
    note: "Business & markets podcast",
  },
  {
    id: "glasp-quotes",
    label: "Quotes by Great Minds | Glasp",
    href: "https://glasp.co/quotes",
    note: "Highlighted quotes · Glasp",
  },
  {
    id: "healingdaily",
    label: "療日子 HealingDaily -健康新聞",
    href: "https://healingdaily.com.tw/",
    note: "Health news & wellness",
  },
  {
    id: "adman-rants",
    label: "Adman's Rants 廣告風涼話 - 一名廣告人的阿吱阿咗",
    href: "https://rudileung.com/",
    note: "Advertising commentary",
  },
  {
    id: "brighter-side-global-good",
    label: "Global Good Archives - The Brighter Side of News",
    href: "https://www.thebrighterside.news/",
    note: "Positive science & global good news",
  },
  {
    id: "the-value",
    label:
      "THE VALUE | 連結藝術新聞、藝術展覽、拍賣新聞、藝術行家的藝術平台",
    href: "https://hk.thevalue.com/",
    note: "Art news, exhibitions & auctions",
  },
  {
    id: "gwulo",
    label: "Gwulo: Old Hong Kong",
    href: "https://gwulo.com/",
    note: "Historical photos & Hong Kong stories",
  },
  {
    id: "buddhistcompassion",
    label: "溫暖人間 buddhistcompassion",
    href: "https://buddhistcompassion.org/",
    note: "Buddhist life biweekly · compassion & stories",
  },
];

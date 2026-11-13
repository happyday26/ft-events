export interface FocusStory {
  id: string;
  title: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
}

export interface FocusBriefing {
  id: string;
  topic: string;
  lang?: string;
  updatedAt: string;
  lede: string;
  stories: FocusStory[];
}

export const FOCUS_BRIEFINGS: FocusBriefing[] = [
  {
    id: "ai",
    topic: "Artificial intelligence",
    updatedAt: "13 Nov 2026",
    lede:
      "Google put Gemini 4 Hydrogen in Search and the API on Thursday and scored it above Argon at the default setting; CNBC’s Faber said OpenAI had raised $15bn at $1.25tn, half the first ask; Bloomberg said Anthropic’s IPO was about six times spoken for ahead of the 19th; four nonprofits sued in San Francisco to freeze frontier training; and OpenAI turned on India-local inference for GPT-6 Luna only.",
    stories: [
      {
        id: "gemini-hydrogen",
        title: "Google put Hydrogen in Search — and scored it above Argon",
        body: "Koray Kavukcuoglu’s Thursday post introduced Gemini 4 Hydrogen as the fast Gemini 4 for everyday coding and agent work. Carbon and Argon stay the frontier pair for long-horizon reasoning. Hydrogen, he wrote, scores 51 on the Artificial Analysis Intelligence Index at its default high setting against Argon’s 50, and 54 at xhigh, with flat API pricing of $1.50 per million input tokens and $7.50 per million output across a 1 million-token context. Against Gemini 3.8 Flash, which it replaces, Google says it finishes tasks 2.5 times faster, lifts Terminal-Bench 4.1 from 18.2% to 57%, and cuts fabricated claims by more than five times. Orchestrator in Antigravity switches Carbon and Hydrogen in one session; on Terminal-Bench 4.0 it used 24% less quota and finished 19% faster. The model is rolling out across the Gemini API, AI Studio, Gemini for business, the Gemini app and Search; Antigravity is for paid Pro and Ultra. Free users get it only when auto-select picks it. A cheaper model posted a higher index score. The frontier names did not move.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/",
      },
      {
        id: "openai-raise",
        title: "Faber: OpenAI raised $15bn at $1.25tn — half the first ask",
        body: "CNBC’s David Faber reported on Thursday, citing people familiar with the matter, that OpenAI had raised $15 billion at a $1.25 trillion valuation. He said the company first went to market for as much as $30 billion at $1.4 trillion; the $1.25 trillion figure is about 47% above the March round, when it raised $122 billion at $852 billion. Nvidia has put in about $30 billion and SoftBank about $65 billion, Faber said, and the lab is still raising because it is burning cash even with strong revenue growth. The account is a television report, not a filing. Anthropic lists next week. The number is half the ask. The round is not a prospectus.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/video/2026/11/12/faber-report-openai-raised-15b-at-point-125-valuation.html",
      },
      {
        id: "anthropic-ipo",
        title: "Anthropic’s IPO is about six times spoken for — if the book holds",
        body: "Reuters, carrying Bloomberg, reported on Thursday that Anthropic’s initial public offering had drawn about six times the orders for the shares on offer, in what could be the largest first-time sale. Bankers told prospective investors that existing backers would be prioritised, leaving some buyers with smaller allocations than they expected, people familiar with the matter said. Details, including demand, could still change; Anthropic could not immediately be reached. The offering values the Claude lab at up to $1.4 trillion, slightly below some investor expectations. Anthropic and some existing shareholders aim to raise up to $64.4 billion by selling 825 million shares at $70 to $78. Trading on the Nasdaq under ANT is expected on 19 November. The book is full. The range is still a range.",
        sourceLabel: "CNA / Reuters",
        sourceHref:
          "https://www.channelnewsasia.com/business/anthropics-ipo-about-six-times-oversubscribed-bloomberg-news-reports-6547551",
      },
      {
        id: "nonprofit-suit",
        title: "Four nonprofits asked a San Francisco court to freeze frontier training",
        body: "The Irreplaceable Education Fund, Public Citizen, Heat Initiative and the Alliance for Secure AI sued Anthropic, Google, Meta, OpenAI and SpaceX on Thursday in San Francisco Superior Court. They want a freeze on next-generation training and deployments until the companies can show the systems are under human control. The complaint, as quoted by Al Jazeera, says: “No other industry is allowed to treat its own development of unsafe products — much less ones that could kill us all — as inevitable.” Plaintiffs cite executives’ own warnings, documented cyberattacks, and California’s unfair-competition law. Phil Aroneanu of Irreplaceable told the paper a freeze has to name the work that stops, how compliance is checked, and the penalty — “not just a ban on publicly releasing the models.” No injunction has been granted. The ask is a pause. The labs are still shipping.",
        sourceLabel: "Al Jazeera",
        sourceHref:
          "https://www.aljazeera.com/news/2026/11/12/us-nonprofits-sue-tech-giants-to-halt-ai-development",
      },
      {
        id: "openai-india",
        title: "OpenAI’s India inference is GPT-6 Luna — and it is in-country compute",
        body: "OpenAI said on Thursday that eligible Indian enterprises and developers can now have supported API requests processed, and the model run, inside India. The May 2025 residency offer stored data in-country; this one covers inference. It starts with GPT-6 Luna on the Responses and Chat Completions APIs. Customers open a new project, pick India for both storage and processing, and hit the India regional endpoint. “Some Indian businesses have not fully deployed AI for important work because they need the information involved to be processed within the country,” said Nitin Bawankule, head of enterprise for India. Finance is the named use-case. India joins Australia and Japan on the inference-residency list. Hosted tools are not in the launch note. The weights now sit in-country. The catalogue does not.",
        sourceLabel: "The Hindu",
        sourceHref:
          "https://www.thehindu.com/business/openai-now-allows-enterprises-to-process-ai-requests-within-india/article71692799.ece",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月13日",
    lede:
      "22架次共機昨天越中線，配共艦做「聯合戰備警巡」。政院說老農1.5萬每年多320億，覆議窗到19日。韓國瑜上午把產假談到14週，國民年金5000對6000沒共識。廢核公投第一場發表會昨天開打。28日投票。",
    stories: [
      {
        id: "pla-patrol",
        title: "22架次越中線：殲10、殲16、空警500跟運油20",
        body: "國防部昨天下午說，自上午9時38分起，陸續偵獲殲10、殲16、殲轟7、空警500及運油20等各型主、輔戰機及無人機計29架次出海，其中22架次逾越台灣海峽中線及其延伸線，進入北部、中部、西南及東部空域，配合共艦假所謂「聯合戰備警巡」之名，騷擾周邊空、海域。國軍以聯合情監偵掌握，並派任務機、艦及岸置飛彈系統應處。二十九架出海；二十二架過線。艦跟在後面。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9874453",
      },
      {
        id: "farmer-veto",
        title: "老農1.5萬已送到政院：覆議窗到19日",
        body: "行政院10日收到立法院三讀的《老年農民福利津貼暫行條例》函文。在野版每月1萬5000元；政院1月送出的版本是1萬元並調排富。發言人李慧芝昨天在院會後說，立院版每年額外增加新台幣320億元，事前沒與政院溝通，也會壓縮其他農業資源。她把福利政策收成三句：不增加實質舉債、不排擠其他政策、程序合憲合法。若要覆議，最晚19日送出。政院去年起對立法院通過的9項修法陸續運用不予副署，最新一案是老福法。函到了。覆議還沒寫。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611120154.aspx",
      },
      {
        id: "parental-leave",
        title: "產假14週談成了，8成薪用附帶決議",
        body: "立法院長韓國瑜今天上午召集性平法、就保法黨團協商。朝野達成共識：女性產假14週；妊娠2個月以上未滿3個月流產假2週，未滿2個月10日。衛環委員會先前已同意育兒留職停薪放寬至子女滿9歲前，雙親都領滿6個月津貼時可再各多領3個月。津貼條文仍是平均投保薪資6成；另2成以附帶決議請勞動部依《育嬰留職停薪薪資補助要點》持續編公務預算加發。藍白要入法；勞動部要決議。上午朗讀二讀條文時朝野舉牌。聯合報寫，預計下午三讀。牌子舉了。三讀還在後頭。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9876688",
      },
      {
        id: "national-pension",
        title: "國民年金：5000對6000，冷凍期明天才滿",
        body: "韓國瑜上午接著協商國民年金法。政院版將老年年金、遺屬年金及原民給付自3500元調至5000元，身心障礙年金自4700元調至6715元。國民黨團、民眾黨團要老年6000元、身障8057元。民進黨團總召蔡其昌說，不可以借錢作福利，立法院不可以自己提預算增加。衛福部長石崇良說，65歲者平均餘命還有20年，終生平均約領120萬元，對照所繳近10萬元約12倍，差額是保險財務負擔。韓裁示各黨團再溝通。案自10月14日初審，協商冷凍期11月14日才滿，今天不三讀。津貼數字在吵。法還沒過。",
        sourceLabel: "中央社 / 聯合報",
        sourceHref: "https://udn.com/news/story/6656/9876282",
      },
      {
        id: "nuclear-debate",
        title: "廢核公投第一場：牛煦庭打空污，陳培瑜打光電",
        body: "中選會昨天辦「廢除非核家園」公投第一場電視意見發表會，主委游盈隆主持。正方國民黨立委牛煦庭，反方民進黨立委陳培瑜。案綁11月28日九合一。牛說民進黨「用實實在在的火力空污天天殺人」，逢核必反是綠能利益；戰時海上封鎖，天然氣會大斷電。陳說燃煤用量、空污排放高峰都在國民黨執政時期；立法院長韓國瑜2019年高雄市長任內同意鳳山水庫水面光電，並認定不屬水污染防治法列管事業；烏山頭水庫「有毒藥水」清洗，經濟部未驗出鉛。還有四場：14、16、18、20日。票還沒開。嘴先開。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5638740",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "13 Nov 2026",
    lede:
      "The LDP, Ishin and Kokumin put a 31-seat cut on the Lower House desk; Takaichi sat in an Upper House tax committee the coalition does not own; the Cabinet tapped ¥651.8bn from the Middle East reserve for winter bills; Washington wants host-nation support tripled to more than ¥3tn; and she leaves Monday for Manila, a Quad, and Shenzhen.",
    stories: [
      {
        id: "seat-cut",
        title: "Three parties put a 31-seat cut on the Lower House desk",
        body: "The Liberal Democratic Party, Japan Innovation Party and Democratic Party for the People jointly submitted a bill on Thursday to cut 31 Lower House seats, all from proportional representation. Single-member districts stay put. They want it through by 12 December, when the session ends. Katsunobu Kato, who heads the LDP’s political-system task force, said: “I hope the three parties will work together to secure the bill’s passage.” A June LDP–Ishin text would have cut 45; the smaller number tracks a projected 6.7% population decline from 2015 to 2030. The bill merges the Chugoku and Shikoku blocs, switches allocation to a modified Sainte-Laguë system, and raises the losing-district revival floor from one-tenth of valid votes to one-sixth. Vacant proportional seats would stay vacant rather than being reallocated. Komeito says cutting only the proportional tier weights the districts; the Communists say it squeezes smaller parties. Deliberations are proposed for next week. The stamp is a submission. The calendar is not agreed.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/12/japan/politics/seat-reduction-bill-submitted/",
      },
      {
        id: "food-tax-upper",
        title: "The food-tax bill is in a committee the coalition does not own",
        body: "The Upper House special committee began substantive debate on the food-and-drink tax cut today, with Takaichi attending. TV Asahi counted 19 government members and 20 opposition; as it stands the bill can fail. She was in the Kantei before 7am, more than an hour early; an official said they were lining up how far she would go on the floor. The coalition wants Komeito or the Democratic Party for the People to flip. It has already moved twice toward Komeito on the floor for the working middle-income benefit and on the share of recipients; she may go further today on the headcount Komeito still calls too small. She met finance minister Katayama on the 12th to set the line. The votes she needs are in the other camp.",
        sourceLabel: "TV Asahi",
        sourceHref:
          "https://news.tv-asahi.co.jp/news_politics/articles/000547531.html",
      },
      {
        id: "winter-bills",
        title: "The Cabinet spent the Middle East reserve on winter bills",
        body: "The Cabinet decided today to tap ¥651.8 billion from emergency reserves to cut winter utility bills, Kyodo reported, while energy prices stay high on Middle East tension. The money comes from the ¥2.5 trillion set aside in the fiscal 2026 supplementary budget for that shock, leaving about ¥84 billion. About ¥521.8 billion will subsidise electricity and city-gas bills from December through February, about ¥7,000 off an average household over three months. About ¥130 billion goes to local governments for liquefied petroleum gas and kerosene. Ozaki tied it to the plan to cut the food-and-drink tax from 8% to 1% for two years from next April, calling both “seamless measures to address rising prices.” Asked about another supplementary budget as the reserve thins, he said the government may consider one so that measures of “truly urgent importance” are not impeded. The reserve was for oil. The invoice is for heaters.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261113/p2g/00m/0na/030000c",
      },
      {
        id: "host-nation",
        title: "Washington wants ¥3tn; Tokyo is talking about ¥1.5tn",
        body: "The Trump administration has demanded Japan triple spending on hosting US forces to more than ¥3 trillion over five years from fiscal 2027, sources familiar with the matter told Kyodo. Tokyo is considering a rise to roughly ¥1.5 trillion. The next package is expected to include resilience and survivability work on US facilities and could run to more than ¥300 billion a year. Talks opened in Tokyo this summer; another round may come next week, with a deal sought by year-end. “While 3 trillion yen over five years would be difficult to accept, there is a possibility to pay around 1.5 trillion yen,” a diplomatic source said. The current five-year deal, through next March, is ¥1.06 trillion, or about ¥211 billion a year. The peak was ¥1.35 trillion in fiscal 1996–2000. Resilience talk includes moving functions underground and hardening against blast and electromagnetic attack. The ask is a tripling. The counter is still a source.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91235",
      },
      {
        id: "takaichi-trip",
        title: "Takaichi leaves Monday: ASEAN, a Quad, then APEC in Shenzhen",
        body: "Ozaki said today that the prime minister will travel for four days from Monday to the Philippines and China. Tuesday is a Japan–ASEAN summit; she is also to co-chair an Asia Zero Emission Community meeting with the Philippines. A Quad of Australia, India, Japan and the United States is being arranged in Manila — the first since September 2024. Diplomatic sources said Tokyo is also sounding out a meeting with Donald Trump while both are there. She then goes to Shenzhen for Thursday’s APEC session on trade, energy resilience and AI. Ozaki called ASEAN a “key pillar in realizing a free and open Indo-Pacific,” and said Japan would “strongly communicate its position of promoting concrete assistance and cooperation.” Bilateral meetings during the trip are still being arranged. The Trump meeting is a request. The flight is booked.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91303",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "13 Nov 2026",
    lede:
      "Lee leaves Monday for Manila then Shenzhen; Cho flew to Wang Yi this morning to tee up a Lee–Xi; Seoul said a Trump–Kim at APEC was unlikely; Kim inspected an unfinished east-coast naval base; and Lee told the Korea Exchange that a gunfight on the ceasefire line was the worry hanging over the Kospi.",
    stories: [
      {
        id: "lee-apec",
        title: "Lee’s week is ASEAN, Mekong, then Xi’s dinner in Shenzhen",
        body: "National security adviser Wi Sung-lac said Thursday that President Lee Jae Myung leaves Monday for Manila, then two days in Shenzhen from Wednesday. Monday is a Korea–ASEAN summit and a meeting with the Mekong five — Cambodia, Laos, Myanmar, Thailand and Vietnam — on critical minerals and transnational crime. Tuesday is ASEAN Plus Three with China and Japan, then the East Asia Summit. Wednesday is an APEC CEO session and a welcome dinner hosted by Xi Jinping and Peng Liyuan; Thursday is the APEC summit under the theme “Building an Asia-Pacific Community to Prosper Together,” then home the same day. Lee will ask members to back Seoul’s peaceful-coexistence line toward the North and send a “positive message” on peninsula peace, Wi said. The schedule is a week of rooms. The North is not on it.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112002752315",
      },
      {
        id: "cho-wang",
        title: "Cho flew to Wang Yi to talk APEC — and whether Beijing will call Kim",
        body: "Foreign minister Cho Hyun left Gimpo this morning for talks and dinner with Wang Yi. “We plan to discuss the overall state of bilateral relations, particularly issues that need to be coordinated between the two countries ahead of the Asia-Pacific Economic Cooperation (APEC) summit,” he told reporters. He also said the two would cover “North Korea-related matters, including the possibility of U.S.-North Korea talks.” The meeting is meant to lay ground for a possible Lee–Xi in Shenzhen. Asked whether China would mediate, Cho said: “I don’t think there is much chance of China actively inviting (Kim) to the APEC summit for talks, but it is still too early to tell.” The Yellow Sea structures are on the list. China’s foreign ministry said Thursday it attached great importance to the visit. Cho is due back Saturday. The dinner is tonight. The readout is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261113002000315",
      },
      {
        id: "trump-kim",
        title: "Seoul: a Trump–Kim at APEC is not the base case",
        body: "A presidential official, speaking anonymously on Thursday, said North Korea was unlikely to attend next week’s APEC summit in Shenzhen, and that the chance of US–North Korea talks there was slim. “It would be difficult to say there is zero possibility of talks (between North Korea and the United States), but I think the probability might not be high.” The North in particular was unlikely to show, the official said. The remarks come after Trump repeatedly offered to meet Kim Jong Un during the two-day summit that starts Wednesday. The invitation is American. The chair is Chinese. The guest list does not have Pyongyang.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112003700315",
      },
      {
        id: "kim-navy",
        title: "Kim inspected an east-coast naval base that Seoul will not place",
        body: "KCNA said on Thursday that Kim Jong Un had given field guidance on Wednesday at a major east-coast naval base under construction. He called it “a crucial core undertaking directly related to the security of our state and the defense of its maritime sovereignty from A to Z” and said it must be finished to the party’s standard in the period the party has set. Pak Jong Chon went with him. The same day he toured new housing in Tongchon County, Kangwon, built for residents displaced by the base; KCNA said he was satisfied after “a little over two months.” Seoul’s unification ministry would not put the site at Jangjon Port, once the North’s southernmost East Sea base, and said it looked like a new base farther north. Kim was at Nampho Shipyard last week on a new warship. The deadline is a party sentence. The map is still a blank.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112001651315",
      },
      {
        id: "lee-kospi",
        title: "Lee at the KRX: the Kospi’s problem is still a gunfight",
        body: "The president told a capital-market roundtable at the Korea Exchange this morning that “normalizing the capital market is our government’s unwavering policy direction and commitment.” He called the undervaluation of Korean stocks an “unreasonable abnormality.” The Kospi was in the mid-5,000s, after an all-time close of 9,114.55 in late June. “There are concerns such as ‘Could another geopolitical crisis erupt, with an exchange of gunfire along the ceasefire line?’” he said. “Removing such worries … and ultimately restoring trust would be most important.” He said the government was already moving on unfair trading and major-shareholder abuse, “sternly responding to unfair practices, such as stock price manipulation, at the pan-government level,” and had told investigators to bear down. The reforms are a speech. The index is still half the high.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261113002500315",
      },
    ],
  },
];

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
    updatedAt: "27 Nov 2026",
    lede:
      "Nvidia told Dell and Supermicro to stop shipping servers to four Southeast Asian countries; OpenAI said GPT-6.2 had been under-counted since 17 November; Amodei spent Wednesday denying an Axios write-up on handing authority to the model; 42 attorneys general asked a court to stop Character.AI selling chats; and Anthropic said Claude had moved its own API onto Rust without taking it down.",
    stories: [
      {
        id: "nvidia-sea-halt",
        title: "Nvidia stopped the servers to Malaysia, Singapore, Thailand and Indonesia",
        body: "Nvidia has told manufacturing partners, including Dell and Supermicro, to stop shipping servers to four Southeast Asian countries, the Financial Times reported, citing three people. CNA reprinted the piece on Thursday. Buyers in Malaysia, Singapore, Thailand and Indonesia were told their orders would not be allowed to ship. It is not clear whether the halt is temporary while the company works out last week’s Commerce Department rule on remote access to advanced chips. Cloud providers have 90 days to obtain a licence by showing their end users are not restricted entities. Nvidia booked $104bn of revenue through its Singapore subsidiary in 2025, up 72% in a year; some Taiwan and China revenue is booked there too. Aolani, a Singapore cloud firm that had planned to lease capacity to ByteDance, is among those affected; bankers have stopped about $500mn of credit, the people said, and ByteDance may drop the deal. Nvidia declined to comment. Dell, Supermicro, ByteDance and Aolani did not respond. Huang is back in the chair. The trucks still stopped.",
        sourceLabel: "CNA / Financial Times",
        sourceHref:
          "https://www.channelnewsasia.com/asia/nvidia-halts-chip-shipments-southeast-asia-6584351",
      },
      {
        id: "gpt62-billing",
        title: "GPT-6.2 was under-billed; Astra now hits the cap 40% faster",
        body: "Thibault Sottiaux, who leads Codex at OpenAI, said on Thursday that a billing mistake at the 17 November launch of GPT-6.2 had “incorrectly discounted GPT-6.2 Astra and Sol usage for most users.” The fix means the same work now reaches the limit 40% faster on Astra and 25% faster on Sol than last week. Other models were not affected. OpenAI will not charge for the difference on past usage. As an apology it is adding one banked reset for Go, Plus, Pro and Business. Sottiaux still says both models should go further than GPT-6 Astra and GPT-6.1 Sol. The pricing pages did not change. The discount was a bug. The bug is closed.",
        sourceLabel: "Business Insider",
        sourceHref:
          "https://www.businessinsider.com/openai-token-billing-cost-discount-mistake-sol-astra-2026-11",
      },
      {
        id: "amodei-governance",
        title: "Amodei: turning over governance to AI is “a terrible idea”",
        body: "Dario Amodei spent Wednesday answering an Axios report that unnamed people inside Anthropic thought it would be irrational, or even unethical, not to hand the model authority on tasks it does better than people. “If I thought any of this was a good idea, I would be advocating for it in public,” he wrote. “I think turning over governance to AI is a terrible idea.” He has long said frontier systems should sit under “legitimate democratic processes,” and he split the claim: AI driving a car, designing a cancer drug, or writing software end-to-end is not “running the world.” That kind of work, he said, will save lives and has downsides; “in some areas it may not be worth it.” Axios named no one. He named the idea and rejected it.",
        sourceLabel: "Al Jazeera",
        sourceHref:
          "https://www.aljazeera.com/economy/2026/11/26/anthropic-ceo-amodei-denies-wanting-humanity-to-surrender-free-will-to-ai",
      },
      {
        id: "character-ai-ags",
        title: "Forty-two attorneys general want Character.AI’s chat auction stopped",
        body: "A bipartisan group of 42 state attorneys general is trying to stop Character.AI selling user data in its Chapter 11 case. Their releases, which The Verge read on Thursday, say the company plans to auction “the private chat histories of more than 21 million U.S. accounts — more than 2.1 million of them registered to minors — with no safeguards.” There is no requirement that a buyer keep the old privacy policy, no deletion path, and no bar on resale. The first bidder was formed on 13 November, with no parent or investors listed. Disney already bought some assets and hired chief executive Karandeep Anand, an acquihire the same coalition had opposed. New York, Connecticut, California and Colorado have chatbot laws due on 1 January 2027. The chats are still in the estate. The auction is still the plan.",
        sourceLabel: "The Verge",
        sourceHref:
          "https://www.theverge.com/policy/1042620/character-ai-sale-state-ags-block-selling-users-chats",
      },
      {
        id: "anthropic-rust",
        title: "Claude moved Anthropic’s Messages API from Python to Rust",
        body: "Anthropic’s 25 November research note says the Messages API — the path customers and Claude Code use — has been rewritten from Python to Rust. Traffic grew about 1,800 times from early 2024 to autumn 2026. Claude wrote a first version of the core request path in about a week; the hard part was proving parity while the Python service kept changing, replies were non-deterministic, and customer prompts could not be read. The lab turned production traffic into the verifier and dispatched agents at the diffs. The Rust service uses about 70% less CPU per request and cuts median time to first token by about 20%. The service did not go offline. Feature work did not freeze. An incremental Python-calling-Rust parser had only saved 8–10% and made each token cross the language boundary three times. The full rewrite shipped. The meter is the API itself.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/research/migrating-api-to-rust",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月27日",
    lede:
      "追加預算今天入總統府公報。普發兩萬昨天下午送出立法院，副署收到十二月六日。游盈隆把造勢收到今晚十時。日間三十架、二十六架越中線。隔夜一機七艦。",
    stories: [
      {
        id: "extra-budget-gazette",
        title: "追加預算今天入公報：令號120701，賴清德、卓榮泰",
        body: "總統府公報第7895號今天增刊公布中華民國115年度中央政府總預算追加預算。令文日期115年11月27日，華總一經字第11500120701號，依審查報告修正本公布，總統賴清德、行政院院長卓榮泰。公報註明「本日因公布預算，增加發行公報一號次」。立法院20日三讀。投票前一天入法。普發還沒有令號。",
        sourceLabel: "總統府公報",
        sourceHref: "https://www.president.gov.tw/Page/294/50460",
      },
      {
        id: "pla-day-patrol",
        title: "投票前夕：30架出海，26架越中線",
        body: "中央社引國防部下午新聞稿：自今天上午9時25分起，陸續偵獲殲-10、殲-16、蘇愷-30、轟6K及空警500等各型主、輔戰機及無人機計30架次出海，其中26架次逾越中線及其延伸線，進入北部、中部、西南及東部空域，配合共艦，假「聯合戰備警巡」、「遠海長航」騷擾周邊空、海域。國軍以任務機、艦及岸置飛彈系統監控應處。九合一明天投、開票。警巡在選前最後一個上班日。",
        sourceLabel: "中央社",
        sourceHref: "https://money.udn.com/money/story/12622/9905844",
      },
      {
        id: "pla-overnight",
        title: "隔夜一架共機、七艘共艦",
        body: "國防部區域動態：11月26日上午6時至27日上午6時，偵獲共機1架次，進入西南及東部空域1架，共艦7艘，持續在台海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。日間那一波從9時25分才起算。隔夜的公報很薄：一架、七艘。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88358",
      },
      {
        id: "cash-2wan-sent",
        title: "普發2萬昨送出，副署收到12月6日",
        body: "立法院昨天下午將「全民共享經濟成果及穩定民生特別條例」送出，咨請總統公布。公視今天寫，行政院須於十日內決定是否覆議；若不覆議，須在12月6日前決定是否副署。條例明定不排富、普發現金2萬。國民黨立委要卓榮泰選前說清楚，選後不副署就是與全民為敵。綠委說副署是十天後的事，不會影響選情。行政院發言人李慧芝日前說，收到法案後會審慎研議。追加預算今天入公報。這份條例還沒有。",
        sourceLabel: "公視新聞",
        sourceHref: "https://news.pts.org.tw/article/837604",
      },
      {
        id: "cec-election-eve",
        title: "游盈隆：造勢今晚十時止，零時起禁助選",
        body: "中選會主委游盈隆今天主持「向人民報告」。九合一與「廢除非核家園」公投明天投、開票，選出1萬1051位地方公職，選民1957萬6028人，368個選務作業中心，1萬8248個投票所，比四年前多599個，動員31萬人。造勢須在今晚10時前結束；28日零時起不得在通訊軟體、社群媒體為候選人助選。明天仍可做公投宣傳，但不能借公投助選。投票上午8時至下午4時。年滿18歲有公投權，年滿20歲有選舉權與公投權。選務在倒數；助選的鐘在今晚。",
        sourceLabel: "中央社",
        sourceHref:
          "https://tw.news.yahoo.com/%E4%B9%9D%E5%90%88-%E9%81%B8%E8%88%8911-28%E7%99%BB%E5%A0%B4-%E6%B8%B8%E7%9B%88%E9%9A%86%E6%8F%90%E9%86%9228%E6%97%A5%E9%9B%B6%E6%99%82%E8%B5%B7%E7%A6%81%E5%8A%A9%E9%81%B8-050403643.html",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "27 Nov 2026",
    lede:
      "The Senate voted 124–120 against censuring Seki; Matsuyama put the food-tax bill back on the table; Tokyo core CPI printed 2.9%; the Nikkei closed 58,711.11; and the 31-seat cut is still on the calendar through 12 December.",
    stories: [
      {
        id: "seki-censure",
        title: "The Senate voted 124–120 against censuring Seki",
        body: "The upper house on Friday rejected a non-binding censure of education minister Yoshihiro Seki, 124 votes to 120, in a 248-seat chamber with two vacancies. Excluding the president, who did not vote, the motion needed 123 to pass. Seven parties and one parliamentary group had filed it on Thursday over five 2024 fundraisers at which bureaucrats spoke and guests were charged high fees; Seki first told the Diet there were two such events, then three more. The Liberal Democrats and Ishin hold 119 seats. The two-member Conservative Party and three independents voted against. Five of the eight uncommitted lawmakers the motion’s fate rested on voted no. Before the vote Seki said he would “straighten up and give my all.” Takaichi has said he has “fulfilled his responsibility to explain.” The last successful Senate censure was against Abe in June 2013. He did not resign. Seki is still in the chair.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92778",
      },
      {
        id: "food-tax-resume",
        title: "Matsuyama: the food-tax bill is back in front of the Senate",
        body: "After the vote, Masaji Matsuyama, the LDP’s Senate caucus chair, said the party would manage Diet affairs “in a humble and careful manner” and do its “utmost toward the enactment of legislation related to the consumption tax cut.” The bill — food and drink from 8% to 1% for two years from April — has already passed the Lower House. The ruling bloc lacks a Senate majority and needs at least one opposition party. The Constitutional Democrats and others had said they would boycott deliberations if the censure passed and Seki stayed. It did not pass. The offset is still unnamed. The session ends 12 December.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92778",
      },
      {
        id: "tokyo-cpi",
        title: "Tokyo core CPI hit a 16-month high of 2.9%",
        body: "Core consumer prices in Tokyo, excluding fresh food, rose 2.9% year on year in November, the Ministry of Internal Affairs said Friday, up from 2.6% in October and the fastest in 16 months. The print stayed above the Bank of Japan’s 2% target for a third month. Electricity bills jumped 9.5%, city gas 13.7%, kerosene 15.5%, on Middle East energy costs and a weak yen. Nationwide November CPI is due on 18 December, the second day of the next BOJ meeting. Markets still treat a December hike from 1.25% as live. The tax cut is the political answer to the same print.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92777",
      },
      {
        id: "nikkei-close",
        title: "The Nikkei closed 58,711.11, up 2.11%",
        body: "The Nikkei 225 advanced 2.11% to 58,711.11 on Friday, Reuters reported from Tokyo. The Topix gained 1.73% to 3,815.20. US cash markets were closed overnight for Thanksgiving; the cue was thin. The index has firmed after a 7.7% drop last week on AI-infrastructure costs and chip-export risk. Nomura’s Maki Sawada pointed to defensive and domestic-demand names on fiscal 2026 profit estimates. Breadth was 160 advancers against 64 decliners. Socionext rose 12.56%, Mitsui Kinzoku 11.53%, Lasertec 9.98%. Recruit, Capcom and Kikkoman were the largest losers. The AI trade is still the week’s bruise. Friday bought the bruise.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.arabnews.jp/en/business/japans-nikkei-extends-weekly-gain-as-investors-scoop-up-battered-ai-shares-3001642",
      },
      {
        id: "seat-cut",
        title: "The 31-seat cut is still on the same 12 December clock",
        body: "The ruling camp, which holds a two-thirds Lower House majority, still aims to enact a bill cutting 31 proportional seats in that chamber during the 69-day extra Diet through 12 December, Kyodo noted after the censure vote. The seat-cut text was jointly submitted by the LDP, Ishin, and the Democratic Party for the People — one of the co-sponsors of the censure that just failed. The food-tax bill needs an opposition vote in the Senate. The seat cut already has one. The calendar is the same 15 days. Seki staying is the condition the opposition had attached to showing up.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92778",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "27 Nov 2026",
    lede:
      "The Kospi jumped 4.34% to 4,915.68; the won was 1,337.9; Kim Jong-un called for tactical nuclear weapons on a wider set of missions; Cho made what may be his last committee appearance; and Cheonghae cleared the defence committee for a December floor vote.",
    stories: [
      {
        id: "kospi-rally",
        title: "The Kospi closed 4,915.68, up 4.34%",
        body: "The Korea Composite Stock Price Index added 204.47 points, or 4.34%, to 4,915.68 on Friday, extending a volatile week. It opened 0.37% higher and kept going, led by technology shares on hopes of market-stabilising measures. Last week the authorities raised the cap on share buybacks. Investors are still asking whether the tech rebound has staying power after days of doubt about the AI trade. Wall Street was shut for Thanksgiving. Seoul bought the dip anyway.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261127004800320",
      },
      {
        id: "won-inflows",
        title: "The won was 1,337.9; a Monday meeting is on the diary",
        body: "The won was quoted at 1,337.9 per dollar at 3:30 p.m., up 4.8 from the previous close, the strongest since last Friday. Foreign investors bought a net 1.13 trillion won ($845 million) of local shares. Yonhap said the jump came on expectations of policy support, “likely including the use of a stock market stabilization fund.” Authorities will meet heads of major financial firms on Monday. The close is a bounce. The fund is still a likelihood.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261127006000320",
      },
      {
        id: "kim-tactical-nukes",
        title: "Kim Jong-un: tactical nukes for “diverse areas for various missions”",
        body: "KCNA reported Thursday that Kim Jong-un had visited nuclear-material production facilities and a research institute the day before, to review the nuclear strategy set at this year’s party congress. Locations were not given. He said the country is “systematically and steadily expanding nuclear-material production capacity,” and that using tactical nuclear weapons in “diverse areas for various missions” is “important and urgent,” given “the unavoidable reality of sharing a border” with “the most dangerous hostile country.” Nuclear status is “irreversible” in the constitution; denial of that status would be treated as “a declaration of war.” Yonhap counted a fourth such inspection, after September 2024, January 2025 and June this year. The sites were unnamed. The mission list got longer.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261126000551315",
      },
      {
        id: "cho-departure",
        title: "Cho’s last committee, Lim still undated",
        body: "Foreign Minister Cho Hyun on Thursday asked the National Assembly’s foreign affairs and unification committee for bipartisan support, in what Yonhap called what could be his final appearance before his scheduled departure. Lim Woong-soon, second deputy director of the National Security Office, has been nominated as successor. Cho, in office since July last year, said he was honoured to have been the Lee administration’s first foreign minister and asked the committee to keep backing summit diplomacy. Lim was due to start work at a designated office on Thursday to prepare for a confirmation hearing. The date has not been set. The chair is still Cho’s until it is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261126006400315",
      },
      {
        id: "cheonghae-committee",
        title: "Cheonghae cleared the defence committee; the floor is December",
        body: "The National Assembly’s National Defence Committee on Thursday approved a revised motion to extend the Cheonghae unit and widen its area from waters off Somalia to the sea south of Oman. The text now rules out involvement in wars or operations between foreign countries, limits the mission to protecting nationals and economic interests, and tells the government to avoid diplomatic friction and protect the deployed. Defence Minister Kang Shin-chul told chair Jin Sung-joon the government would abide. Cho later told Iranian foreign minister Seyyed Abbas Araghchi the same non-involvement line; the two have spoken eight times and met twice since the war began. Additional assets include a maritime patrol aircraft, an explosive-ordnance team and uncrewed mine-clearing gear. Hormuz itself would need a separate vote. The plenary is expected in December, before the mandate expires on 31 December. The committee is done. The strait is still out of bounds.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10950639",
      },
    ],
  },
];

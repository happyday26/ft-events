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
    updatedAt: "1 Sep 2026",
    lede:
      "OpenAI spent Monday printing a $1bn ads run-rate while still walking Cursor off its models by 12 November; Truell now says those models are 5% of traffic; Anthropic is filling the hole inside the editor and cutting Claude Code’s current weekly cap 17% from 14 September; and Apple’s hardware chief took the CEO chair this morning with a rebuilt Siri eight days out.",
    stories: [
      {
        id: "openai-cursor",
        title: "Truell’s number: OpenAI is 5% of Cursor traffic",
        body: "Friday’s notice still stands: SpaceX has been told the contract that puts OpenAI models inside Cursor will wind down on 12 November, the longest notice the change-of-control clause allows. SpaceX closed the $60bn all-stock purchase of Anysphere on 14 August. What moved over the weekend is Cursor’s reply. Chief executive Michael Truell wrote that OpenAI models serve about 5% of user traffic and that talks continue. Forbes notes Composer 2.5, shipped in May on a Moonshot Kimi K2.5 checkpoint, is the reason that number is small; Cursor and SpaceXAI say a larger from-scratch model is training on Colossus 2. Five percent is the company’s figure. November 12 is the date that tests it.",
        sourceLabel: "Forbes",
        sourceHref:
          "https://www.forbes.com/sites/jonmarkman/2026/08/31/openai-cuts-off-cursor-after-spacexs-60-billion-takeover/",
      },
      {
        id: "anthropic-cursor",
        title: "Anthropic is still putting more Claude through the hole OpenAI opened",
        body: "Hours after the cutoff notice, Anthropic co-founder Tom Brown said Cursor had been a partner since Sonnet 3.5 and that the lab would increase compute for Claude inside the editor. Reuters notes Anthropic already has an ongoing partnership with SpaceX. One lab is locking a coding editor out of the stack. The other is putting more tokens through it. The product in the middle does not own a frontier model, and now says it hardly needed the one it is losing.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/media-telecom/openai-end-partnership-with-spacexs-cursor-2026-08-29/",
      },
      {
        id: "anthropic-limits",
        title: "Claude Code’s “25% raise” is a 17% cut from what users have today",
        body: "Anthropic said it will permanently raise standard weekly limits in Claude Code by 25% from 14 September for Pro, Max, Team, and seat-based Enterprise plans. A temporary 50% boost stays until then. Users did the arithmetic: 150 down to 125 is about 17% less than current allowance. The company deleted the first thread and reposted the 17% reduction in plain language, and said more visibility tools are coming. The SpaceX compute deal in May was what paid for the 50% boost. The boost is ending. The partnership with Cursor is not.",
        sourceLabel: "BleepingComputer",
        sourceHref:
          "https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-is-cutting-claude-codes-current-weekly-limits-by-17-percent/",
      },
      {
        id: "openai-ads",
        title: "ChatGPT Ads hit a $1bn run-rate, then opened self-serve outside the US",
        body: "OpenAI said Monday that ChatGPT Ads have reached $1bn in annualized revenue, less than 200 days after the US pilot. Self-service via Ads Manager rolled out the same day across India, Europe, the Middle East, and North Africa; the tool was already live in the United States. Ads show to the free tier and the cheaper Go plan, which is most of a claimed 1bn weekly active users, in more than 40 countries. Anthropic made the ad push the joke of its Super Bowl spot. OpenAI is selling a diversified model ahead of a 2027 listing. The Cursor cutoff is a commercial fight with Musk. The ads number is the other balance sheet.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/08/31/open-ai-chatgpt-ads-revenue.html",
      },
      {
        id: "apple-ternus",
        title: "John Ternus is Apple’s CEO as of this morning — Siri is the first exam",
        body: "Tim Cook’s 15-year run ended yesterday; hardware chief John Ternus, 51, took the chair today, with Cook moving to executive chairman. The first public test is 9 September at Apple Park: iPhones, Watches, a rumoured foldable, and a rebuilt Siri that uses large language models on Google’s Gemini. Apple has already delayed several Ternus-era hardware projects because the software was not ready. Cook’s last earnings call still sold on-device inference as the advantage over the cloud labs. Eight days to a keynote is not a long runway for a company that has been late to this particular boom.",
        sourceLabel: "Yahoo Finance / Quartz",
        sourceHref:
          "https://finance.yahoo.com/technology/ai/articles/john-ternus-becomes-apple-ceo-111908957.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月1日",
    lede:
      "光州市為台灣館向中國道歉，名稱暫時留下。志航還在等關島上的兩架F-16V。國防預算書到了立法院，廣義1.12兆。無人載具條例副署仍未落筆。賴清德在南港把美光1.4兆唸了一遍。",
    stories: [
      {
        id: "gwangju-apology",
        title: "光州為台灣館向中國道歉：尊重一中，名稱是藝術表述",
        body: "朝鮮日報報導，全南光州統合特別市昨天就第16屆雙年展「台灣館」名稱爭議發聲明，對參與機構溝通不足「深表歉意」，並稱依韓國政府外交政策尊重一個中國原則；Taiwan Pavilion只是藝術領域由參展藝術家自行決定的表述，不意味市政府或雙年展承認台灣是國家。中國駐韓大使戴兵27日已向市長閔炯培表達遺憾，中方人員隨後撤出河正雄美術館。雙年展相關人士說名稱既已核准，不會再改，仍希望中國館按計畫布展。9月5日開幕。名稱留下；道歉也留下。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aopl/202609010052.aspx",
      },
      {
        id: "f16v-guam",
        title: "兩架Block 70已離夏威夷往關島，志航仍無降落時間",
        body: "聯合報31日報導，編號6727、6728的單座F-16C於台北時間21日抵夏威夷希肯，社群傳30日已飛往關島。軍方在飛機落地前不證實。1997年首批F-16在檀香山停五晚；這次更長，傳言是沿途KC-135故障。66架、2,472億元「鳳翔專案」原訂2020至2026年交齊，如今才開始交運，特別條例年底到期，國防部說預算可保留、法源修正正在研擬。顧立雄先前只說時間由台美協調。戰機在太平洋上被追蹤，接機還是沒有日期。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9723540",
      },
      {
        id: "defense-budget",
        title: "國防預算書送立院：廣義1.12兆，軍事投資加975億",
        body: "2027年度國防預算書昨天送到立法院。廣義國防預算約1.12兆；國防部主管公務預算6,919億，其中軍事投資2,591億、較今年增975億，人員維持2,081億，作業維持2,247億。陸軍要採購逾7,000輛民規載重車與越野車，預算書寫便利後勤與「去識別化」。海軍一次列三筆造艦：兩款共三艘救難艦加一艘油彈補給艦，約531億。立院從1.25兆軍購特別預算刪掉的強弓、銳鳶二型等，已寫進五年兵力整建，部分編入明年預算。條例還在等副署；購物清單已經進委員會。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9725966",
      },
      {
        id: "drone-countersign",
        title: "無人載具條例仍未副署，周四院會要先過追加預算",
        body: "立法院27日三讀《強化國防自主暨無人載具產業發展條例》：六年2,400億、每年原則400億，主管機關經濟部。行政院發言人李慧芝說尚未收到三讀條文，收到後審慎評估。規劃是9月3日院會先過今年度追加預算，明年總預算再提修正。國民黨傅崐萁稱僵局已破，要卓榮泰把另外八案一併副署，包括財劃法、黨產條例、廣電三法。民進黨團仍批在野把國防採購改成產業條例。9月29日前應咨請總統公布。購物清單進了立院；副署的筆還沒落下。",
        sourceLabel: "中時",
        sourceHref: "https://www.chinatimes.com/newspapers/20260831000402-260120",
      },
      {
        id: "lai-semicon",
        title: "晶鏈論壇：輝達一年採購3兆，美光累計1.4兆",
        body: "經濟部今天在南港開2026晶鏈高峰論壇，SEMICON Taiwan明天接場。賴清德說面對AI，今年全球半導體市場估逾1.5兆美元，並點名輝達每年在台投資採購超過3兆元、美光累計投資逾1.4兆、超微逾3,000億。美光總裁梅羅特拉預錄影片稱將繼續在台灣建構AI所需記憶體，台灣團隊已逾1.5萬人。賴清德並稱上半年經濟成長率14.15%、全年估11.05%；必要支出編完後仍有餘裕，明年普發現金每人1萬元。論壇在談供應鏈韌性。現金是另一張選票。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202609010055.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "1 Sep 2026",
    lede:
      "Katayama and Bessent met in Asheville on Monday and restated orderly yen; Bessent had already called the slide past 160 contained, not disorderly; ministries handed in about ¥143tn of requests; the 10-year printed 3% this morning; and the food-tax cut is still the hole she told him they would not fill with deficit bonds.",
    stories: [
      {
        id: "jp-g20",
        title: "Katayama and Bessent, first bilateral since the joint yen buy",
        body: "On the G20 sidelines in Asheville on Monday, Finance Minister Satsuki Katayama and Treasury Secretary Scott Bessent affirmed that orderly yen moves are “indispensable” for US and global market stability, Katayama told reporters. They restated the significance of last month’s concerted intervention, the first in 15 years. She said continuous, coordinated effort serves a common purpose — language that keeps another operation on the table without describing the present rate as disorderly. Bessent also saw BOJ Governor Kazuo Ueda. It was their first meeting since the late-July joint buy. The dollar had already printed through 160 on Friday. The statement is the same. The rate is not.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref: "https://www.nippon.com/en/news/yjj2026090100179/",
      },
      {
        id: "jp-bessent",
        title: "Bessent: yen moves “pretty well contained” — hike instead",
        body: "In a Sunday interview from Asheville, Bessent told The Japan Times the yen’s renewed slide was “pretty well contained,” not the disorderly sort that produced last month’s joint intervention. He expects Ueda to “do the right thing” on policy with Prime Minister Sanae Takaichi’s backing, when asked about consecutive hikes. Reuters later had him telling the Takaichi government to sit back and enjoy Abenomics rather than add another stimulus. Markets still have a move at the 17–18 September meeting almost fully priced after the June lift to 1.0%. Washington will talk about orderly rates. It would rather Tokyo raise them.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/08/31/economy/bessent-yen-moves/",
      },
      {
        id: "jp-budget-143t",
        title: "FY2027 requests came in around ¥143tn — no ceilings on the growth pot",
        body: "A Kyodo tally on Monday, the request deadline, put general-account asks for the year from April at about ¥143tn, above last year’s record ¥122tn. Takaichi lifted request caps on a new growth-and-security investment category; ministries put more than ¥10tn there, METI about ¥6.3tn of it for AI, chips, and robots. Defence asked a record ¥8.89tn. Debt service is seen at ¥36.6tn on a 3.8% assumed rate, up from 3.0% this year. Officials want the figure compared with ¥140.6tn of last year’s extra plus this year’s initial, not with the old ceiling. Finance will now cut. The yen and the JGB market already started.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83534",
      },
      {
        id: "jp-jgb-3",
        title: "The 10-year printed 3% this morning, first time since October 1996",
        body: "The benchmark Japanese government-bond yield touched 3.000% on Tuesday, a day after the ¥143tn request tally and just after Monday’s close near 2.95%. Kyodo cites BOJ-hike expectations, a fiscal-health premium, and Treasuries that firmed after Fed Chair Kevin Warsh’s Friday Jackson Hole remarks, with WTI back above $85 on a resumed US–Iran fight. Higher yields are the invoice for Takaichi’s uncapped requests. Debt service is already being scored at 3.8%. The Yomiuri ceiling of about ¥40tn of new bonds was last week’s reassurance. Three percent on the 10-year is the market’s reply.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83621",
      },
      {
        id: "jp-food-tax",
        title: "Katayama told Bessent the food-tax cut would not use deficit bonds",
        body: "After the Monday bilateral, Katayama said she had explained Japan’s aim to reduce the debt-to-GDP ratio steadily and to fund a consumption-tax cut without deficit-covering bonds. The cabinet has already approved cutting the food rate from 8% to 1% for two years from April 2027, plus cash for the remaining point for lower-income households. There is still no named offset for something in the region of ¥5–10tn a year. Weekend polls had more supporters than opponents and 70% plus worried about the hole. She sold the line in North Carolina. The 10-year at 3% is what that sentence costs when the bond market does not believe it.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref: "https://www.nippon.com/en/news/yjj2026090100179/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "1 Sep 2026",
    lede:
      "Lee’s cabinet printed a record ₩820.9tn budget this morning off the chip boom; the Assembly opened its 100-day session with six confirmation fights attached; Yong is being hit from the left as well as the right; and Pyongyang spent Monday calling denuclearisation a hostile policy.",
    stories: [
      {
        id: "kr-budget",
        title: "Record ₩820.9tn budget, 12.8% up, Lee’s first full-year book",
        body: "President Lee Jae-myung chaired a Cabinet meeting on Tuesday that approved a ₩820.9tn spending plan for 2027, up 12.8% from this year’s ₩728tn — the fastest rise on record. Budget Minister Park Hong-geun called it the first budget formulated entirely under the administration. Total revenue is put at ₩880.8tn, up 30.4%, on a semiconductor boom; national tax ₩584.4tn. Debt still rises to ₩1,519.8tn, but the ratio drops to 48.3% of GDP from 51.6%, and the managed-fiscal deficit is scored at ₩3.1tn against ₩107.8tn this year. The bill goes to the Assembly by 3 September. Housing was last week’s complaint. This is the fiscal reply.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260901000700320",
      },
      {
        id: "kr-future-fund",
        title: "₩21.3tn for AI, a ₩162.3tn Future Fund from chip windfall",
        body: "Inside the same book, AI spending nearly doubles to ₩21.3tn from ₩10.8tn for three megaprojects: semiconductors, physical AI, and data centres. A separately financed Future Fund of ₩162.3tn is to park “windfall” chip-tax revenue; ₩45.4tn of it is to be spent next year on youth, growth engines, regions, and education. Another ₩62.8tn, up 22.7%, goes to fusion, SMRs, quantum, aerospace, and biotech. Regional outlays rise 36.6% to ₩117.1tn. Park said about ₩108tn of existing programmes will be cut or merged. The semiconductor cycle is paying for a state that wants to look larger without looking looser. The opposition still has the hearings.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260901000700320",
      },
      {
        id: "kr-hearings",
        title: "Regular session opens; ruling party wants the six ministers through before Chuseok",
        body: "The National Assembly opened its 100-day regular session on Tuesday with the budget and Sunday’s six nominations on the calendar: finance, defence, justice, land, SMEs, and gender equality. Democratic Party floor leader Han Byung-do said confirmation should finish before Chuseok so there is “not a single moment of vacuum,” and accused People Power of smearing nominees before hearing dates exist. Hearings must start within 15 days of the papers arriving and finish within 20. Lee named the slate on Sunday after Gallup’s post-inauguration low. The nominees still have to sit. The opposition has already picked the two it intends to break.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10858461",
      },
      {
        id: "kr-yong-kim",
        title: "Yong is taking fire from the left; Kim remains the opposition’s trial minister",
        body: "Basic Income Party lawmaker Yong Hye-in, nominated for gender equality, said she would keep her proportional Assembly seat if appointed. Progressive parties and women’s groups have joined the complaint, along with her record on stripping prosecutors’ supplementary powers. People Power floor leader Jeong Jeom-sik is still calling Justice nominee Kim Seung-won — the DP’s Legislation and Judiciary whip — a vehicle to withdraw indictments against Lee, and wants the nomination pulled. Han said Jang Dong-hyeok’s claim that Kim was a Daejang-dong defence lawyer was false and should be tested at the hearing. The Blue House sold dynamism on Sunday. The first two names are the ones that will fill the room.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/08/31/gender-minister-nominee-yong-faces-criticism-from-left",
      },
      {
        id: "kr-nk-hostile",
        title: "Pyongyang: denuclearisation is still a hostile policy",
        body: "A North Korean foreign-ministry spokesperson told KCNA on Monday that Washington’s “complete denuclearisation” line, human-rights criticism, and drills remain a hostile policy, and that it is “pointless to expect any detente.” The statement followed a US-South Korea-Japan decision to proceed with Freedom Edge after Ulchi Freedom Shield was cut in half on Trump’s order. Pyongyang called its nuclear arsenal an “absolute guarantee” and said it would keep bolstering it. Trump still talks about meeting Kim later this year. The State Department last week restated complete denuclearisation. Seoul confirmed a new defence minister on Sunday. Pyongyang answered with the old vocabulary.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260831006951315",
      },
    ],
  },
];

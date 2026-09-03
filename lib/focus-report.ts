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
    updatedAt: "3 Sep 2026",
    lede:
      "Google on Wednesday shipped Gemini 3.8 Flash — its third Flash in six weeks — and a cyber variant gated to trusted defenders. OpenAI on Tuesday labelled Astra Critical and still said it would ship soon. Anthropic’s Fable 5.1 is already in the API. Nvidia’s Hugging Face cheque is still unsigned on the Thursday Bloomberg called “this week.”",
    stories: [
      {
        id: "google-flash",
        title: "Google shipped Gemini 3.8 Flash — third Flash in six weeks, still no Pro",
        body: "Wednesday’s model is the workhorse: Google calls it its best reasoning and coding Flash yet, at the same introductory $0.75 / $3.75 per million tokens as 3.7, rising to $1.50 / $7.50 on 1 January. Ars Technica notes no frontier Gemini Pro since early 2026, and a delayed 3.5 Pro. Google puts 3.8 Flash at the top of DeepSWE; CNBC’s D.A. Davidson still has the company a distant third in enterprise. Gemini Enterprise is adding pay-as-you-go, token discounts of up to 20%, and a zero-dollar base seat. Hassabis, now DeepMind chairman, told the G20 the model layer can coordinate cheaper specialists. The cheap model is the product. The Pro is the rumour.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
      },
      {
        id: "google-fairwind",
        title: "Flash Cyber is for defenders — Fairwind, not the Gemini app",
        body: "The same weights, a more permissive cyber gate: Gemini 3.8 Flash Cyber is limited to trusted governments, critical-infrastructure operators and software maintainers through a new Fairwind Program. Google says Chrome security got 2.6× more correct patches than larger commercial models; Cloud research found a critical bug in under two hours. CWE-Bench pass@1 is 47.2%, against 47.8% for a leading frontier model at higher cost. CNBC notes the company is selling speed and a fraction of the price. OpenAI spent Tuesday putting Astra in the Critical cyber tier and gating the sharp tools. Google spent Wednesday putting a patcher in a private club.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/",
      },
      {
        id: "openai-astra",
        title: "OpenAI: Astra is Critical — first model it has put in that cyber tier",
        body: "Tuesday’s post drops the August hedge. OpenAI now says Astra meets the Preparedness Framework’s Critical cybersecurity threshold: with the right tools it can find unknown flaws and exploit them across well-protected systems without a person at each step. CNBC reports it will still be made available “soon”; the most advanced cyber tools start with a small tester set, then Daybreak. The lab delayed parts of Astra after the Hugging Face breakout even though Astra was not in that incident, then said the safeguards now “sufficiently minimize” severe harm. It also says Astra did not try to break out of a Hugging Face-style isolation test. The model OpenAI will not sell into SpaceX-owned Cursor is the one it has just labelled its most dangerous.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/09/01/open-ai-astra-cyber-model.html",
      },
      {
        id: "anthropic-fable",
        title: "Anthropic shipped Fable 5.1 and Mythos 5.1 on Tuesday",
        body: "Same weights, different gates: Fable 5.1 is generally available as claude-fable-5-1 on the API and on AWS, Google Cloud and Azure; Mythos 5.1 stays inside trusted-access programmes for cyber and life-sciences work. Cache reads fall 75% to $0.25 per million tokens; list price otherwise stays $10/$50. Anthropic puts Fable 5.1 at 52.6% on Terminal-Bench-Science 0.1, against 24.7% for Fable 5 and 22.4% for GPT-5.6 Sol. Fable may find software bugs, not write exploits. One lab spent Tuesday classifying a model as too sharp to ship wide. Another shipped two names for the same weights. Google spent Wednesday putting a third Flash on the same shelf.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/claude-fable-and-mythos-5-1",
      },
      {
        id: "nvidia-hugging-face",
        title: "Bloomberg’s “this week” for Hugging Face is now Thursday — still no signature",
        body: "People familiar told Bloomberg an Nvidia purchase of Hugging Face at $12.9bn could be reached as soon as this week, with a possible $1bn employee retention package, taking the package toward $14bn. No final agreement; timing and terms can still change. Both companies declined to comment. The Information had Nvidia agreeing at $12.9bn on 26 August; Business Insider said the same talks had not produced a signature. The Hub turned down a $500m Nvidia cheque at $7bn earlier this year so that no single investor would own it. Full ownership is still the opposite trade. Thursday of the week Bloomberg named has arrived. The filing has not.",
        sourceLabel: "Bloomberg / Yahoo Finance",
        sourceHref:
          "https://finance.yahoo.com/technology/ai/articles/nvidia-nears-14-billion-hugging-001556090.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月3日",
    lede:
      "行政院今天通過6076億追加預算，國防1457億、無人機等三項559億；國民黨團要卓榮泰立刻副署無人載具條例，否則沒法源。蔣萬安陪小雞登記，自己還沒入檔。沈伯洋昨天已登記。光州雙年展後天開幕。",
    stories: [
      {
        id: "supplementary-budget",
        title: "政院通過6076億追加預算：中油2338億，國防1457億，無人機559億",
        body: "行政院會3日通過115年度追加預算，歲出6076億元，送立法院審議。風傳媒引卓榮泰：穩定民生4213億，含中油增資2338億、因應中東衝突民生安定1875億；社福加碼215億；待遇111億；災後重建77億；國防1457億；兒少津貼前置3億。國防線含軍事投資1334億，其中強弓等七項130億、濱海監偵型無人機等三項559億、機密兩項645億。卓榮泰說特別條例對美軍購被刪4700億，國防沒有空窗期，期望2027年籌獲600餘架濱海監偵、4萬餘架濱海攻擊無人機及首批100餘艘小型自殺無人艇。中央社數字：歲入歲出差短475億，舉債2085億，低於原列2992億。預算進了院會。立法院還沒審。",
        sourceLabel: "風傳媒",
        sourceHref: "https://www.storm.mg/article/11161558",
      },
      {
        id: "drone-countersign",
        title: "藍營：不副署無人載具條例，追加預算就沒法源",
        body: "立法院國民黨團3日表示，政院追加預算裡國防約1457億、占總額24%，法源是上周三讀的《強化國防自主暨無人載具產業發展條例》，行政院有義務立刻副署並送總統公布，否則失去法源，立院將據此嚴審。條例是六年2400億、每年原則400億。經濟日報2日寫道，三讀條文將於立院下班前紙本送出，政院3日上午應可收到。發言人李慧芝此前說尚未收到、收到後審慎考量；卓榮泰27日的線仍是國家需求與國安。預算編了無人機；副署還沒落筆。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20260903700917-430104",
      },
      {
        id: "chiang-taipei",
        title: "蔣萬安陪小雞登記，自己還沒說哪天入檔",
        body: "台北市長蔣萬安3日上午與議長戴錫欽帶國民黨議員赴市選委會，喊「台北安可」「台北隊全壘打」。他說選在軍人節有意義，北市推了41項軍人優惠。被問自己何時登記，他說會選適當時間，未鬆口。九合一登記窗開到4日；直轄市長保證金120萬。他已說12日要出席民眾黨議員聯合造勢，目標藍白席次最大化。首都選戰，在野那一席今天還在陪同，沒有入檔。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/124652/9731718",
      },
      {
        id: "shen-taipei",
        title: "沈伯洋昨天登記台北市長，蔡英文送船舵",
        body: "民進黨台北市長參選人沈伯洋2日上午赴台北市選委會領表登記，前總統蔡英文到場，交給他一具船舵。蔡英文說治理城市像開船，方向要看清楚，不能等快撞礁才想轉彎；船要往前不能只有掌舵的人，也要有風和洋流。陪同的還有26名民進黨台北市議員參選人，以及競選總幹事吳思瑤、執行總幹事吳沛憶、副主委王世堅。沈伯洋說離11月28日投票剩80多天，要讓台北「順起來」，並把「月月有AI」寫進程式。綠營首都那一席已入檔。藍營那一席今天還在場邊。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609020063.aspx",
      },
      {
        id: "gwangju-apology",
        title: "光州雙年展後天開幕：市府向北京道歉，Taiwan Pavilion沒改",
        body: "第16屆光州雙年展5日開幕。光州市8月31日就「台灣館」名稱發聲明，對溝通不足「深表歉意」，並稱依韓國政府外交政策尊重「一個中國」；Taiwan Pavilion只是藝術領域由參展者自行決定的表述，不意味市府或雙年展承認台灣是國家。中央社引朝鮮日報：聲明是與中國大使館協商後用來暫時收束爭議。中國駐韓大使戴兵27日已當面表達遺憾；河正雄美術館的中國館人員28日起停工撤出。雙年展人士說名稱既已核准恢復，不會再改。市府向北京道歉；牆上的字還在；中國館的牆仍空。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aopl/202609010052.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "3 Sep 2026",
    lede:
      "The yen broke ¥158 on Thursday, to about 157.7, with a September hike now all but fully priced. Ueda said the board must pay more attention to upside inflation risks. Bessent told Japan to stop the reflation. Takata said hikes need not stay at 0.25 or twice a year. The 10-year has come off 3%.",
    stories: [
      {
        id: "jp-yen-rally",
        title: "The yen broke ¥158 — markets have 98% on a hike in two weeks",
        body: "The Japan Times said the yen rallied overnight and into Tokyo on Thursday, breaking ¥158 for the first time in about three weeks. By early afternoon it was about ¥157.7, against roughly ¥160.3 a day earlier. Investors were pricing a 98% chance of a Bank of Japan increase at the 17–18 September meeting. Last month’s joint buy with Washington took the dollar from about ¥163.9 to the mid-155s; Japan’s own receipt was ¥15.4tn. Most of that dip had already been given back. Thursday’s move is a rate bet, not another intervention print. Payrolls land Friday in the United States. The policy date is still in Tokyo.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/09/03/markets/yen-market-rally/",
      },
      {
        id: "jp-ueda",
        title: "Ueda: pay more attention to upside inflation risks",
        body: "After the G20 in Asheville, Kazuo Ueda told reporters the board would have a thorough debate on 17–18 September. “From the perspective of conducting policy with a risk-management approach as the underlying inflation rate approaches 2%, we have come to believe that we need to pay greater attention than before to upside risks in our policy conduct.” He would not pre-commit. Thursday’s 98% is the market finishing the sentence he declined to say. Katayama stood beside him at the same briefing. The next policy date is in Tokyo, not Asheville.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/09/02/economy/boj-ueda-katayama-rate/",
      },
      {
        id: "jp-bessent-reflation",
        title: "Bessent: Abenomics worked — now “stop the reflation”",
        body: "At a Tuesday press conference after the G20, Scott Bessent said Abenomics had been “a tremendous success” and that Japan “should actually let that run and stop the reflation.” Jiji reports he also said Japan “can sit back and enjoy the benefits.” The Treasury readout of his Sunday bilateral with Ueda still has “decisive” market and monetary steps against a “substantial undervaluation” of the yen. Katayama’s reply was that the economic situation has changed since Abenomics, so a different remedy is natural. The yen took the hint on Thursday. The next tool, on this telling, is rates, not another joint buy.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref: "https://www.nippon.com/en/news/yjj2026090200174/",
      },
      {
        id: "jp-takata",
        title: "Takata: 2026 is not a semiannual 0.25 conveyor belt",
        body: "BOJ board member Hajime Takata, who proposed a rise to 1.25% at the July meeting, told local leaders in Sapporo on Wednesday that 2026 is a turning point: hikes should be nimble, and not bound by the intervals markets had been using. After two increases a year in 2024–25, he said markets until recently factored in a semiannual pace through 2028; he does not. The price-stability target is almost achieved, he said; inflation tied to the Middle East could push prices above it. On bonds, the prepared text says that in a rapid rise in long-term rates the Bank would respond nimbly, including by buying more JGBs. The governor is still selling a debate. One of his colleagues is selling a regime change.",
        sourceLabel: "Bank of Japan",
        sourceHref:
          "https://www.boj.or.jp/en/about/press/koen_2026/data/ko260902a1.pdf",
      },
      {
        id: "jp-jgb-takaichi",
        title: "The 10-year printed 3%, then came off — the fiscal hole is still there",
        body: "Japan’s 10-year yield briefly touched 3% on Tuesday, the first print above that handle since 1996; The Japan Times had it around 2.97% on Thursday, down from about 3.02% the day before. Kyodo’s Wednesday focus piece says the spike is already pressing Takaichi to rethink stimulus: debt is seen at ¥1,145tn by March 2027, and her guidelines still centre on ¥370tn of public-and-private investment by fiscal 2040 with no named government share. The food consumption tax cut from 8% to 1% for two years from April 2027 still has no concrete offset; she says she will not lean on extra deficit-covering bonds. A cheaper yen was the external symptom. Three percent was the domestic one. Thursday’s FX rally does not fill the hole.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83676",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "3 Sep 2026",
    lede:
      "Kim Seung-won said Thursday he will not direct prosecutors to drop Lee’s indictments. Yong Hye-in again declined to say she will give up her Assembly seat. The finance nominee still has no bulk-buy housing programme. Hearings start in mid-September. Cabinet already passed an ₩820.9tn budget.",
    stories: [
      {
        id: "kr-kim-indictments",
        title: "Justice nominee: no authority, and no intention, to drop Lee’s cases",
        body: "Kim Seung-won told reporters Thursday, arriving at his confirmation-hearing office in Jongno, that the justice minister “does not have direct authority” to withdraw the indictments against President Lee Jae-myung and that he has “no intention of issuing directions through the prosecutor general.” The decision to maintain a prosecution, he said, rests with the trial prosecutor, whose authority he would respect. People Power has treated the nomination as a bid to bury Lee’s trial; Kim was co-chair of a lawmakers’ group that called for the charges to be dropped. He said that as a legislator he had been conveying the public’s view of an unfair investigation, and that as a nominee he would follow law and principle. The opposition asked for a withdrawal ministry. The nominee’s first morning answer was that he would not be one.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10861681",
      },
      {
        id: "kr-yong",
        title: "Yong Hye-in still will not say she is giving up the seat",
        body: "The Basic Income Party floor leader, nominated for gender equality, arrived at her hearing-preparation office in Seodaemun on Thursday and told reporters she would “explain in detail at the confirmation hearing.” She did not answer whether keeping the proportional seat was a burden on the administration, or whether it was about the state subsidy that comes with parliamentary status. Lawmakers may sit in cabinet; proportional members usually resign. She is her party’s only lawmaker. Cheong Wa Dae said Tuesday she should be allowed to explain at the hearing. Ruling-party voices, including Song Young-gil, have already called the dual post a problem. The opposition has a primary target in the justice nominee. She has given them a second, and she is still holding it.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/society/2026/09/03/yong-hye-in-stays-silent-on-calls-to-give-up-assembly-seat",
      },
      {
        id: "kr-housing",
        title: "Finance nominee: groceries are the report card; the crash net is still a talk",
        body: "Lee Hyoung-il, named deputy prime minister for the economy, told the Sejong press room Wednesday that prices of daily necessities are the government’s “economic report card,” and that a 3% growth print would be the first in five years. Supply, he said, is the fundamental for housing; tax and financing are not off the table. Seoul Economic Daily reports he also said a system to buy homes in bulk for public housing — the downside net Lee Jae-myung ordered on Sunday — is still under discussion with ministries, with no details to disclose. Cabinet on Tuesday restored the comprehensive real-estate-tax deduction for a single non-resident home to ₩1.2bn rather than cut it to ₩900m. Housing is why Gallup had the president at a post-inauguration low. The nominee’s first answer is that the crash net is not yet a programme.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260902005000320",
      },
      {
        id: "kr-hearings",
        title: "Hearings: SMEs 15 September, land 16th, justice maybe the 18th",
        body: "Standing-committee floor managers have Lee So-young, the SME nominee, on 15 September and Hong Jee-sun, the land nominee, on the 16th. Seoul Economic Daily’s sources have finance nominee Lee Hyoung-il likely on the 16th and Kim Seung-won on the 18th; Kang Shin-chul at defence and Yong Hye-in are still being slotted between the 14th and the 18th. The Democratic Party wants the process done before Chuseok. Parliamentary consent is required only for a prime minister; the rest need a hearing, not a vote. Sunday’s six-name list is now a calendar. Two of the names spent Thursday declining to give the answers the calendar will demand.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/02/korea-sets-confirmation-hearings-for-new-cabinet-nominees",
      },
      {
        id: "kr-budget",
        title: "Cabinet passed a record ₩820.9tn budget — 12.8%, chip windfall attached",
        body: "President Lee chaired Tuesday’s Cabinet that approved the 2027 budget: ₩820.9tn of spending, up 12.8% from this year’s ₩728tn, the fastest rise on record, ahead of 2009’s 10.6%. Revenue is put at ₩880.8tn, up 30.4%, on semiconductor corporate and income tax. A ₩162.3tn Future Fund skims “windfall” above the ten-year tax trend; ₩45.4tn of that goes to youth, growth engines, regions and education next year. AI-and-chip megaprojects nearly double to ₩21.3tn. The managed deficit shrinks from ₩107.8tn to ₩3.1tn; debt-to-GDP is guided down from 51.6% to 48.3% even as the stock of debt rises. The hearings are for the ministers. This is the invoice they would spend.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260901000700320",
      },
    ],
  },
];

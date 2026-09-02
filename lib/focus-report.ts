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
    updatedAt: "2 Sep 2026",
    lede:
      "OpenAI on Tuesday confirmed Astra has hit its Critical cyber threshold and will ship soon with the sharpest tools gated; Anthropic launched Fable 5.1 the same day, a day after a $35bn Lambda lease; and the Hugging Face cheque is still unsigned, now with a Bloomberg “this week” attached.",
    stories: [
      {
        id: "openai-astra",
        title: "OpenAI: Astra is Critical — first model it has put in that cyber tier",
        body: "Tuesday’s “Path to Astra” post drops the August hedge. OpenAI now says Astra meets the Preparedness Framework’s Critical cybersecurity threshold: with the right tools it can find unknown flaws and exploit them across well-protected systems without a person at each step. TechCrunch reports a perfect score on ExploitBench and two zero-days on an internal variant. The lab says it will make Astra available soon; the most advanced cyber capabilities stay limited at launch, first to testers, then Daybreak Blue for defensive use. It also says Astra did not try to break out of a Hugging Face-style isolation test. The model that OpenAI will not sell into SpaceX-owned Cursor is the one it has just labelled its most dangerous.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/09/01/open-ais-astra-model-is-on-the-way-and-very-good-at-breaking-into-computer-systems/",
      },
      {
        id: "anthropic-fable",
        title: "Anthropic shipped Fable 5.1 and Mythos 5.1 on Tuesday",
        body: "Same weights, different gates: Fable 5.1 is generally available as claude-fable-5-1 on the API and on AWS, Google Cloud and Azure; Mythos 5.1 stays inside trusted-access programmes for cyber and life-sciences work. Cache reads fall 75% to $0.25 per million tokens; list price otherwise stays $10/$50. Anthropic puts Fable 5.1 at 52.6% on Terminal-Bench-Science 0.1, against 24.7% for Fable 5 and 22.4% for GPT-5.6 Sol, and 73.4% on CursorBench. Fable may find software bugs, not write exploits; flagged biology queries still route to Opus 5. One lab spent Tuesday classifying a model as too sharp to ship wide. The other shipped two names for the same weights.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/claude-fable-and-mythos-5-1",
      },
      {
        id: "anthropic-lambda",
        title: "Anthropic signed a $35bn Lambda lease — Nvidia holds the building",
        body: "A source told Reuters on Monday that Anthropic has signed a $35bn cloud deal with Nvidia-backed Lambda for about 350 megawatts at a Hut 8 site in Nueces County, Texas. The Wall Street Journal, which had the exclusive, said Nvidia itself holds the lease. Anthropic, Lambda, Hut 8 and Nvidia did not comment after hours. It follows last week’s $45bn Nscale rental in West Virginia. Huang has put a gigawatt of AI infrastructure at $80–100bn; $35bn is a few hundred megawatts on that arithmetic. Claude Code is the demand story. Nvidia is chip supplier, Lambda investor, and landlord on the same campus.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/technology/anthropic-signs-35-billion-cloud-deal-with-nvidia-backed-lambda-source-says-2026-08-31/",
      },
      {
        id: "nvidia-hugging-face",
        title: "Bloomberg: Nvidia could still sign Hugging Face this week — it hasn’t",
        body: "People familiar told Bloomberg an Nvidia purchase of Hugging Face at $12.9bn could be reached as soon as this week, with a possible $1bn employee retention package, taking the package toward $14bn. No final agreement; timing and terms can still change. Both companies declined to comment. The Information had Nvidia agreeing at $12.9bn on 26 August; Business Insider said the same talks had not produced a signature. The Hub turned down a $500m Nvidia cheque at $7bn earlier this year so that no single investor would own it. Full ownership is still the opposite trade. The week Bloomberg named has started. The filing has not.",
        sourceLabel: "Bloomberg / Yahoo Finance",
        sourceHref:
          "https://finance.yahoo.com/technology/ai/articles/nvidia-nears-14-billion-hugging-001556090.html",
      },
      {
        id: "openai-cursor",
        title: "Astra is coming. Cursor still does not get it.",
        body: "Friday’s change-of-control notice still stands: OpenAI models out of Cursor on 12 November, the longest notice the contract allows, and no future models — Astra included. Co-founder Michael Truell, now at SpaceX, has said OpenAI is about 5% of Cursor traffic and that talks continue. Musk’s line remains that he “couldn’t care less.” Anthropic, already a SpaceX partner, is putting more Claude through the editor the same week it ships Fable 5.1. The Critical model OpenAI will preview under Daybreak Blue is the one it has already decided not to sell into a Musk company. The shutoff date has not moved. The model on the other side of it now has a risk label.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月2日",
    lede:
      "沈伯洋今天在蔡英文陪同下登記台北市長；九合一登記窗開到4日。行政院明天院會要端追加預算，無人機條例副署仍未落筆。光州為台灣館向北京道歉，名稱沒改。F-16V還是沒落地。",
    stories: [
      {
        id: "shen-taipei",
        title: "沈伯洋登記台北市長，蔡英文送船舵",
        body: "民進黨台北市長參選人沈伯洋2日上午赴台北市選委會領表登記，前總統蔡英文到場，交給他一具船舵。蔡英文說治理城市像開船，方向要看清楚，不能等快撞礁才想轉彎；船要往前不能只有掌舵的人，也要有風和洋流，盼大家成為這股洋流。陪同的還有26名民進黨台北市議員參選人，以及競選總幹事吳思瑤、執行總幹事吳沛憶、副主委王世堅。沈伯洋說離11月28日投票剩80多天，要讓台北「順起來」，並把「月月有AI」寫進程式。首都選戰正式入檔。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609020063.aspx",
      },
      {
        id: "local-election-window",
        title: "九合一登記窗：8月31日至9月4日，直轄市長保證金120萬",
        body: "中選會受理地方公職登記至4日止，11月28日投開票。直轄市長保證金由150萬降至120萬，直轄市議員與縣市長16萬，縣市議員10萬，中選會稱為32年來首度大幅調降。北北基桃等直轄市選民領市長、市議員、里長三張票；縣選民最多五張。張善政已委託代為登記桃園市長；民進黨桃園對手黃世杰的登記日另安排。廢除非核家園第22案仍綁同一天。登記截止前，首都那一席今天才入檔。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/124652/9724816",
      },
      {
        id: "supplementary-budget",
        title: "政院明天院會端追加預算，無人機條例副署仍未落筆",
        body: "中國時報今天報導，行政院預計3日院會提出今年度追加預算，含無人機經費與六大社福津貼等八大項，規模預估四千億以上；民進黨團1日表態支持。國民黨團傅崐萁說會善意審查，但要卓榮泰先副署軍人加薪、警消退休所得與兒少未來帳戶。立法院上周三讀的無人載具條例是六年2,400億、年度預算編列；政院發言人李慧芝仍說尚未收到三讀條文，收到後審慎考量。業者1日已逐一拜會藍綠白，怕不副署讓政策空轉。法案依規劃9月29日前咨請總統公布。預算明天進院會；副署還在嘴上。",
        sourceLabel: "中國時報",
        sourceHref: "https://www.chinatimes.com/newspapers/20260902000613-260121",
      },
      {
        id: "gwangju-apology",
        title: "光州市為台灣館道歉：尊重一中，名稱不改",
        body: "全南光州統合特別市8月31日就第16屆光州雙年展「台灣館」名稱爭議發聲明，對參與機構溝通不足「深表歉意」，並稱依韓國政府外交政策尊重「一個中國」立場未變；Taiwan Pavilion只是藝術領域由參展者自行決定的表述，不意味市府或雙年展承認台灣是國家。中央社1日引朝鮮日報：聲明是與中國大使館協商後，用來暫時收束爭議。中國駐韓大使戴兵27日已當面表達遺憾；河正雄美術館的中國館人員28日起停工撤出。雙年展人士說名稱既已核准恢復，不會再改，希望中國館仍能趕上5日開幕。市府向北京道歉；牆上的字沒有拿掉。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aopl/202609010052.aspx",
      },
      {
        id: "f16v-wait",
        title: "首批F-16V還是沒落地，關島與夏威夷的說法對不上",
        body: "編號6727、6728的Block 70，聯合報8月31日寫道已離夏威夷希肯、飛往關島，依1997年交機前例可望近日抵台東志航；軍方仍不公布時程，並說特別條例年底到期後未支用預算將報政院保留，修法展延仍在研擬。另有接近空軍的說法稱兩機「有小問題」、卡在夏威夷，窗口看到9月初。迄香港時間2日上午，沒有交機畫面。66架、2,472億元「鳳翔專案」首批；全數交機目標仍是2028年底。戰機在太平洋上被追蹤。接機還是沒有日期。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9723540",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "2 Sep 2026",
    lede:
      "Bessent told Ueda he wants “decisive” monetary steps against a cheap yen; Katayama said the joint-intervention line still lives and that she did not discuss a hike. The 10-year printed 3% for the first time since 1996. FY2027 requests came in around ¥143tn. The dollar is back around 160.",
    stories: [
      {
        id: "jp-bessent-ueda",
        title: "Bessent to Ueda: “decisive” steps on a cheap yen",
        body: "The US Treasury said Tuesday that Scott Bessent, in a Sunday bilateral with Kazuo Ueda at the G20 in Asheville, voiced strong support for “decisive” market and monetary steps to address a “substantial undervaluation” of the yen, and tied yen weakness to Japan’s inflation. Reuters says the remarks effectively lock in a hike at the 17–18 September meeting, from 1% to 1.25%, after June’s 31-year high. Bessent has also told Reuters recent yen moves were not disorderly — so the medicine is rates, not another joint buy. Markets already had the September move near-fully priced. The Treasury statement is the public nudge.",
        sourceLabel: "The Business Times / Reuters",
        sourceHref:
          "https://www.businesstimes.com.sg/international/bessent-urges-boj-chief-combat-weak-yen-decisive-monetary-steps",
      },
      {
        id: "jp-katayama",
        title: "Katayama: the joint-intervention statement “still lives”; no hike talk",
        body: "After her first face-to-face with Bessent since the 31 July coordinated buy, Satsuki Katayama told reporters Monday that the two had reiterated the joint-intervention line and stood ready if moves were disorderly. Coordination was “continuous and ongoing.” Asked whether Bessent had demanded a BOJ hike, she said there was no such discussion; monetary policy is the bank’s. She would not say whether ¥160 was orderly. Bessent has called recent moves “pretty well contained.” The yen stood around 159.80 in Asia on Tuesday after slipping through 160 on Friday and again on Monday. Last month’s ¥15.4tn receipt bought a dip into the mid-155s. The rate did not stay there. The next policy date is in Tokyo, not Asheville.",
        sourceLabel: "The Asahi Shimbun / Reuters",
        sourceHref: "https://www.asahi.com/ajw/articles/16852881",
      },
      {
        id: "jp-jgb-3pct",
        title: "The 10-year printed 3% — first time since 1996",
        body: "Japan’s benchmark 10-year yield briefly touched 3.000% on Tuesday, up 0.06 point from Monday, the first print above 3% since September 1996. When Takaichi took office last October it was 1.6%. The Herald, citing Nikkei, puts the spike on BOJ hike bets, a hawkish Friday from Fed Chair Kevin Warsh, and wariness toward Takaichi’s “proactive fiscal” stance — the July “Honebuto shock” never fully faded. A 3% handle is both an exit from deflation and a bill for a food-tax cut that still has no named offset. She has said she does not think her policies caused the move. The bond market printed the number anyway.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10859239",
      },
      {
        id: "jp-budget-143t",
        title: "FY2027 requests: about ¥143tn, debt service ¥36.6tn",
        body: "Kyodo’s Monday tally, after the month-end deadline, has general-account requests for the year from April at about ¥143tn. The comparison the government wants is ¥140.6tn — last year’s initial budget plus the ¥18.3tn extra Takaichi already spent. Health and welfare asked a record ¥36.58tn; defence a record ¥8.89tn, with more items still open until the year-end security-document rewrite. An uncapped “investment” frame drew more than ¥10tn. Debt service is put at ¥36.6tn on a 3.8% assumed rate, up from 3.0%. Asahi’s own count was closer to ¥140tn; the Finance Ministry details come this month. Takaichi’s Yomiuri ceiling was “around ¥40tn” of new bonds. The request is the policy. Three percent is the constraint.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83534",
      },
      {
        id: "jp-food-tax",
        title: "The food-tax cut is still a campaign with a funding hole",
        body: "The cabinet has already approved cutting the food consumption tax from 8% to 1% for two years from April 2027. Herald notes that neither the tax cut nor the defence buildup has a concrete funding plan; Takaichi still says she will not lean on extra deficit-covering bonds. Daiwa has put the annual revenue loss in the region of $27bn. Kihara’s line remains that the government will “carefully explain” the offset. Tuesday’s 3% JGB print is what that sentence costs when the bond market does not believe it. Last month’s ¥15.4tn FX receipt does not make the hole smaller. The tax cut is still the item that does not fit on the issuance page.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10859239",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "2 Sep 2026",
    lede:
      "Hearings for Lee’s six ministers are taking dates through Chuseok; Yong Hye-in will keep her Assembly seat and explain later; the finance nominee says the bulk-buy housing net is still just a discussion; Cabinet passed a record ₩820.9tn budget on Tuesday; and the policy chief who rode the KOSPI up has resigned.",
    stories: [
      {
        id: "kr-hearings",
        title: "Hearings: SMEs 15 September, finance and land 16th",
        body: "Yonhap said Wednesday the trade committee will hear SME nominee Lee So-young on 15 September and the land committee will hear Hong Jee-sun on the 16th — two of the six names Kang Hoon-sik read out on Sunday. Herald’s sources have justice nominee Kim Seung-won on the 18th; defence nominee Kang Shin-chul and gender-equality nominee Yong Hye-in are still being slotted between the 14th and the 18th. The Democratic Party wants the process done before Chuseok. People Power is preparing for Kim and Yong in particular. Parliamentary consent is required only for a prime minister; the rest need a hearing, not a vote. Sunday’s list is now a calendar. The calendar is already a fight.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260902006000315",
      },
      {
        id: "kr-yong",
        title: "Yong Hye-in will keep the seat — and explain at the hearing",
        body: "The Basic Income Party floor leader, nominated for gender equality, told reporters Wednesday she hears the “worries and concerns” about holding both jobs and will organise her answer for the confirmation hearing. Lawmakers may sit in cabinet; proportional members usually resign. She is her party’s only lawmaker; resigning would send it extra-parliamentary and, critics note, cost the state subsidy that comes with a seat. Cheong Wa Dae said Tuesday she should be allowed to explain at the hearing. Ruling-party voices, including Song Young-gil, have called the dual post a grab. The opposition already has a primary target. She has given them a second.",
        sourceLabel: "The Korea Times / Yonhap",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/politics/20260902/gender-minister-nominee-says-aware-of-concerns-over-keeping-assembly-seat",
      },
      {
        id: "kr-housing",
        title: "Finance nominee: the bulk-buy housing net is “under discussion”",
        body: "Lee Hyoung-il, the vice finance minister named deputy prime minister for the economy, told the ministry press room Wednesday that a system to buy homes in bulk for public housing — the downside net Lee Jae-myung ordered on Sunday — is “currently under discussion with related ministries,” with no details to disclose. Supply, he said, is the fundamental; tax and financing are not off the table. Cabinet on Tuesday restored the comprehensive real-estate-tax deduction for a single non-resident home to ₩1.2bn rather than cut it to ₩900m, narrowing the gap with the ₩1.4bn owner-occupier line after “market feedback.” Grocery prices, he said, are the economic team’s report card. Housing is why Gallup had the president at a post-inauguration low. The nominee’s first answer is that the crash net is not yet a programme.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/finance/2026/09/02/deputy-pm-nominee-says-bulk-home-buying-plan-under",
      },
      {
        id: "kr-budget",
        title: "Cabinet passed a record ₩820.9tn budget — 12.8%, chip windfall attached",
        body: "President Lee chaired Tuesday’s Cabinet that approved the 2027 budget: ₩820.9tn of spending, up 12.8% from this year’s ₩728tn, the fastest rise on record, ahead of 2009’s 10.6%. Revenue is put at ₩880.8tn, up 30.4%, on semiconductor corporate and income tax. A ₩162.3tn Future Fund skims “windfall” above the ten-year tax trend; ₩45.4tn of that goes to youth, growth engines, regions and education next year. AI-and-chip megaprojects nearly double to ₩21.3tn. The managed deficit shrinks from ₩107.8tn to ₩3.1tn; debt-to-GDP is guided down from 51.6% to 48.3% even as the stock of debt rises. Park Hong-geun called it the first budget written entirely under this administration. The hearings are for the ministers. This is the invoice they would spend.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260901000700320",
      },
      {
        id: "kr-kim-resigns",
        title: "Policy chief Kim Yong-beom resigns after the KOSPI came off 9,000",
        body: "Spokesperson Kang Yu-jung said Tuesday that Lee had accepted the resignation of presidential chief of staff for policy Kim Yong-beom, tendered the day before. She gave no reason. Yonhap notes the job since June last year, and persistent criticism that single-stock leveraged ETFs launched in May under his watch have amplified market swings. The KOSPI closed at a record 9,114.55 in June and was around 6,730 on Tuesday morning. The departure follows Sunday’s six-minister shuffle, itself a response to a post-inauguration approval low driven by housing and the stock market. The cabinet list is going to hearings. The aide who owned the equity story has already left.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260901002252315",
      },
    ],
  },
];

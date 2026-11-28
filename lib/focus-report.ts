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
    updatedAt: "28 Nov 2026",
    lede:
      "OpenAI answered Apple’s July suit with a Friday counterclaim; Bloomberg found a GB300 rack pledged as loan collateral in Shanghai; Anthropic closed the short session at $91.88, back above $83; JERA said it is talking to Anthropic and Meta about plant-side data centres; and Nvidia’s four-country server halt is still the compliance line from Thursday.",
    stories: [
      {
        id: "openai-apple",
        title: "OpenAI sued Apple back: a rehire, a roadmap, and 400 departures",
        body: "OpenAI filed counterclaims in northern California federal court on Friday, accusing Apple of stealing trade secrets and of leaning on hardware suppliers not to work on future OpenAI devices. The filing says Apple gained confidential information by rehiring a former employee who had spent six months at OpenAI and had seen a new device and the hardware roadmap. “Given the timing, it now appears that stealing those documents may have been his reason for joining OpenAI in the first place,” the company wrote. Apple’s employment practices, it said, were designed to “trap” staff; personal Apple devices and accounts let the company “monitor and ensnare departing employees.” Four hundred people have left Apple for OpenAI so far, the filing says. Apple sued OpenAI, Tang Tan and Chang Liu in July over alleged misappropriation for a consumer-hardware push; Tan was a 24-year Apple design vice-president and part of io Products, which OpenAI bought in 2025. Apple denied using the rehire to take OpenAI files, denied trying to suppress competition, and called the counterclaims “a transparent attempt to distract from the substance of Apple’s lawsuit.” The devices, OpenAI said, threaten to “outcompete Apple on what Apple views as its own turf.”",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/5f374b32b07b/technology/openai-countersues-apple-stealing-trade-secrets-ft-reports-2026-11-27/",
      },
      {
        id: "gb300-shanghai",
        title: "A GB300 rack turned up in Shanghai — pledged for a 96 million yuan loan",
        body: "Bloomberg reported Friday that two Chinese firms had installed Nvidia Blackwell gear at the Yangtze River Delta Project in Shanghai, a site it tied to Alice Huang and Megaspeed. Shanghai Shuoyao listed a GB300 NVL72 rack as collateral for a 96 million yuan ($14 million) loan from Shanghai Innovation Bank; a GB300 NVL72 holds 72 Blackwell Ultra GPUs and 36 Grace processors. Bloomberg traced the serial number through a public warranty database to Taiwan’s Gigabyte, which declined to say who first bought the rack and said it complies with the law. Shanghai Kezhan, whose parent is in Tokyo, listed a GB200 server against a 90 million yuan lease and 32 H200 machines with no serials. Blackwell still needs a US licence for China. Shuoyao said this month it is a Megaspeed service provider, “limited to ordinary commercial cooperation.” Megaspeed used renderings of the project in a 2024 investor deck that did not name China. Bloomberg said it has no evidence Megaspeed itself diverted the hardware; Megaspeed denies wrongdoing in the Justice Department probe. Nvidia did not comment. Jensen Huang once said racks this size were too big to smuggle. The serial is in a Chinese loan file. The first buyer is not.",
        sourceLabel: "Engadget / Bloomberg",
        sourceHref:
          "https://www.engadget.com/2329748/restricted-nvidia-chips-were-installed-at-a-chinese-data-center-linked-to-alice-huang/",
      },
      {
        id: "anthropic-friday",
        title: "Anthropic closed the short Friday at $91.88 — back above $83",
        body: "Anthropic jumped 11% on the shortened Black Friday session, Forbes counted, and closed at $91.88. That is above the $83 IPO price and the highest close since Monday, still below the $115 intraday high on the first day of trading last Thursday. It was the stock’s best session since that debut pop of more than 17%, and only the third up day since the listing. A Wednesday filing had disclosed a $26 billion placement of nonvoting shares; Nvidia, Google and Microsoft are among the holders. CNBC’s Friday wrap had the same bounce as “nearly 11%” into the close, against an earlier intra-day note of “over 8%.” Nvidia, on the same tape, was a much more modest 0.8% after the Bloomberg Shanghai file. The IPO price is a line again. The first-day high is not.",
        sourceLabel: "Forbes",
        sourceHref:
          "https://finance.yahoo.com/markets/stocks/articles/anthropic-surges-11-best-day-184457287.html",
      },
      {
        id: "jera-talks",
        title: "JERA is talking to Anthropic and Meta — no contracts, no comment",
        body: "Nikkei reported Friday that JERA, Japan’s largest power generator, has entered talks with Anthropic, Meta and other US groups to put data centres next to Tokyo-area plants, so they can take power “behind the meter.” Global CEO Yukio Kani told the paper the list also includes Amazon, Microsoft and Google. A JERA spokesperson said RHAELM is doing the marketing and had been told it was talking to several hyperscalers; RHAELM was not immediately available. Anthropic, Meta, Amazon, Microsoft and Google did not immediately respond to Reuters. The October memorandum with Dell and RHAELM is still the only signed paper in the file: a standardised build, starting with a $15 billion hyperscale site in Chiba. Nikkei said the new talks are negotiations, not contracts. Capacity, capital and a timetable for Anthropic or Meta were not in the Reuters wrap. The plants are named. The offtake is not.",
        sourceLabel: "CNA / Reuters",
        sourceHref:
          "https://www.channelnewsasia.com/business/japans-jera-enters-talks-anthropic-meta-build-data-centres-nikkei-reports-6586021",
      },
      {
        id: "nvidia-sea-halt",
        title: "The four-country server halt is still a pause, not a licence",
        body: "The Financial Times reported on Thursday, via Reuters, that Nvidia had told manufacturing partners to stop shipping servers with its chips to Malaysia, Singapore, Thailand and Indonesia. Dell and Supermicro, which pack the chips into servers, told buyers in the four countries that Nvidia would not let the orders go. New US rules that took effect last week require export licences for advanced chips to several Southeast Asian states, a route Washington thinks Chinese firms have used. Three people familiar with the matter told the FT it was unclear whether the halt was temporary while Nvidia and its partners work through compliance. Nvidia, Dell and Supermicro did not immediately respond outside regular hours. Megaspeed, the Singapore cloud partner under scrutiny for possible diversion, is the other name in the same Reuters file. The halt is a stop-ship. It is not yet a published licence list.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/nvidia-halts-server-shipments-to-four-southeast-asian-countries-ft-reports-5053574",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月28日",
    lede:
      "投票日早上的公報是33架次、27架次越中線、8艘共艦、4艘公務船。賴清德回安平國中，要人「投給你最想要的生活」。普發二萬的覆議鐘仍走到12月5日。追加預算昨天進了第7895號公報。國民黨團選前說，敗選閣揆該辭。",
    stories: [
      {
        id: "pla-election",
        title: "投票日早上：33架次、27架次越中線、8艘共艦、4艘公務船",
        body: "國防部統計11月27日上午6時至28日上午6時，偵獲共機33架次，其中27架次逾越中線進入北部、中部、西南及東部空域，另有共艦8艘、公務船4艘，持續在台海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。投票所上午8時開門；公報寫的是選舉日早上這一段。機艦合計45。越線是27。開票還沒開始。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88365",
      },
      {
        id: "lai-vote",
        title: "賴清德回安平國中：投給你最想要的生活",
        body: "總統賴清德今天上午回到台南市安平國中投票。陪同的有台南市長黃偉哲、台南市長候選人陳亭妃、立委林俊憲。受訪時他引《禮記．禮運》「大道之行也，天下為公，選賢與能」，接著說九合一是重要的地方選舉，請父老鄉親踴躍投票，「選擇出你心目中最理想的人選，投給你最想要的生活。」陳亭妃轉述，賴清德向她與黃偉哲說，今天晚上市長可能要多一個「前」字。票已入匭。結果還在下午4時之後。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5656131",
      },
      {
        id: "cash-clock",
        title: "普發二萬：覆議看到12月5日，不覆議才輪到12月6日副署",
        body: "立法院26日把「全民共享經濟成果及穩定民生特別條例」送出，咨請總統府公布。依憲政程序，行政院若認窒礙難行，最晚須在12月5日決定是否移請覆議；若不提覆議，應在12月6日決議是否副署。條例11月20日三讀，藍營50票對綠白46票。行政院說未充分評估財源、逾越權力分際，將增加約4714億元支出，需大幅舉債。覆議鐘還在走。選舉日不是截止日。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5654359",
      },
      {
        id: "extra-gazette",
        title: "追加預算進了第7895號公報",
        body: "總統府公報第7895號，中華民國115年11月27日。總統令華總一經字第11500120701號：依立法院審查報告（修正本），公布中華民國115年度中央政府總預算追加預算。署名總統賴清德、行政院院長卓榮泰。公報頁沒有印歲出總額。三讀在20日；副署與公布在投票日前一天。錢的數字要對預算書，不對這張令。",
        sourceLabel: "總統府公報",
        sourceHref: "https://www.president.gov.tw/Page/294/50460",
      },
      {
        id: "kmt-eve",
        title: "國民黨團選前：支持國民黨就是支持普發兩萬；敗選閣揆該辭",
        body: "立法院國民黨團27日開「1128票票入軌」記者會。書記長許宇甄說，支持國民黨就是支持普發現金兩萬元，並投下廢除非核家園公投同意票；若民進黨敗選，卓榮泰應依過去三屆地方選舉慣例請辭，「敗選等於閣揆下台」已成鐵律。她要人監票，質疑資安攻擊會不會拿來作票。洪孟楷號召因不副署而權益受影響的軍公教、農民與長者出來投票；公投請蓋同意。這是選前的動員令。開票還沒寫進任何公報。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/vote2026/story/125076/9905465",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "28 Nov 2026",
    lede:
      "The Senate voted 124–120 against censuring Seki; the floor leaders dated food-tax talks for 2 December; Tokyo core CPI printed 2.9%; the Nikkei closed 58,711.11; and Ishin’s 31-seat cut still has a time-out risk in the two weeks left.",
    stories: [
      {
        id: "seki-censure",
        title: "The Senate voted 124–120; Seki stays, for now",
        body: "Japan’s upper house on Friday rejected a non-binding censure of education minister Yoshihiro Seki, 124 votes to 120, in a 248-seat chamber with two vacancies. Kyodo counted that 123 were needed to pass, the president not voting. Opposition forces had nearly as many seats as the ruling bloc; the motion’s fate sat with eight lawmakers — two Conservatives and six independents — of whom five voted against. LDP and Ishin hold 119 together; the two-member Conservative Party and three independents also voted no. Team Mirai’s two members and three independents voted yes. Seki had invited senior officials to five 2024 fundraisers; he first told the Diet there were two, then three more. He said before the vote he would “straighten up and give my all,” and declined to say what he would do if it passed. Takaichi has said he has “fulfilled his responsibility to explain.” CDPJ and others had promised to boycott if it passed and he did not resign. Matsuyama said the LDP would now “do our utmost” toward the food-tax bills. The last upper-house censure to pass was against Abe in June 2013. This one did not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92778",
      },
      {
        id: "food-tax-resume",
        title: "Food-tax talks are dated: 2 December, after the censure",
        body: "TBS said Friday evening that the LDP and the Constitutional Democrats had agreed to resume upper-house debate on the food-tax cut from 2 December, once the Seki censure had been voted down. Nikkei’s Friday file had the same calendar: the bills that take food and drink to 1% could be back in the Senate that day, with about two weeks left in the session. The cut has already passed the lower house. The offset is still unnamed. The boycott threat died with the 124–120. The hole did not.",
        sourceLabel: "TBS NEWS DIG",
        sourceHref: "https://newsdig.tbs.co.jp/articles/-/3118471",
      },
      {
        id: "tokyo-cpi",
        title: "Tokyo core CPI 2.9% — a 16-month high, still not a BOJ vote",
        body: "Core consumer prices in Tokyo, fresh food out, rose 2.9% year-on-year in November, Kyodo reported Friday, up from 2.6% in October and the fastest since July 2025. Electricity bills jumped 9.5%, city gas 13.7%, kerosene 15.5%. The print stayed above the BOJ’s 2% target for a third month. Reuters via Nikkei Asia had the same 2.9% against a 3.0% median forecast; the index that also strips fuel — the one the bank watches for trend — rose 2.5% after 2.6% in October. Markets expect another hike at the 17–18 December meeting, Kyodo wrote; a Reuters poll had a majority of analysts on December, then another by end-March. That is a poll. It is not a vote. Nationwide CPI is due on 18 December, the second day of the meeting.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92777",
      },
      {
        id: "nikkei-friday",
        title: "The Nikkei closed 58,711.11, up 2.11%",
        body: "CNBC’s Friday wrap had the Nikkei 225 up 2.11% at 58,711.11; the Topix added 1.73% to 3,815.2. Nikkei’s own close file matched the 1,211.95-yen, 2.11% gain, with AI and semiconductor names leading after the morning, and Korean shares and US futures as the cue. Wall Street had been shut on Thursday for Thanksgiving. Tokyo was open. The close is Friday’s. Saturday does not reprint it.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/26/stock-market-today-live-updates.html",
      },
      {
        id: "seat-cut",
        title: "The 31-seat cut still has a time-out risk",
        body: "Nikkei wrote Friday that once food-tax debate resumes around 2 December, the government will spend the last two weeks of the session whipping its top bill — and that the lower-house seat-cut Ishin wants still faces a time-out. Kyodo’s censure wrap had the same clock: the ruling camp, with a two-thirds lower-house majority, aims to enact a 31-seat cut in the 69-day extra Diet through 12 December. The seat-cut bill was submitted by LDP, Ishin and the Democratic Party for the People, one of the co-sponsors of the censure that failed. The tax cut is dated. The seat cut is still a risk.",
        sourceLabel: "Nikkei",
        sourceHref:
          "https://www.nikkei.com/article/DGXZQOUA270R80X21C26A1000000/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "28 Nov 2026",
    lede:
      "Lee broke ground on GS’s 2.4-gigawatt campus in Donghae; the NIS would only say it was monitoring a possible Kim trip to China; KCNA dated a late-December plenary; the Kospi’s last print is Friday’s 4,915.68; and Cheonghae is still a December floor vote before the 31st.",
    stories: [
      {
        id: "lee-donghae",
        title: "Lee in Donghae: a 2.4-gigawatt campus, and a “silent war”",
        body: "President Lee Jae Myung attended the groundbreaking on Saturday for GS Group’s AI data-centre campus in Donghae, Gangwon, his office said. Cheong Wa Dae called it the first megaproject in the region and said it would be among Asia’s largest AI infrastructure complexes. Lee called the global AI race “a silent war at the national level” and said the government would “mobilize all its capabilities” so Korea “sets global standards.” The campus is one of three megaprojects announced in June, in two phases of 1.2 gigawatts each; Donghae is phase one, aimed at completion in 2029. GS put the whole project at up to 120 trillion won ($89.79 billion), GPUs and memory included. Chairman Huh Tae-soo and Science Minister Bae Kyung-hoon were there. The ground is broken. The chips are still a line in the estimate.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261128001551315",
      },
      {
        id: "nis-kim-china",
        title: "The NIS is “monitoring” a Kim trip to China — not confirming one",
        body: "South Korea’s National Intelligence Service told Yonhap on Saturday it is “monitoring various developments” after reports that Kim Jong-un could visit China again. Cheong Wa Dae said Friday there was “no mention to the effect reported by the media” that Xi Jinping had flagged a Kim visit when he met Lee in Shenzhen last week, and that Seoul is watching North Korea–China ties. Kim made a one-day trip to Dandong last month to see Wang Huning; Kim Song-nam, the party’s international-affairs secretary, was in China earlier this month. Trump still wants a meeting; one did not happen at APEC. Xi is due in Miami for the G20 on 14–15 December. The spy agency’s sentence is eight words. It is not a travel schedule.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261128000700315",
      },
      {
        id: "nk-plenary",
        title: "KCNA dated a late-December plenary — 2026 in, 2027 out",
        body: "The Korean Central News Agency said Saturday that the Political Bureau decided on the 27th to convene the Third Plenary Meeting of the Ninth Central Committee in late December. Aju Press’s wrap of that dispatch: review how 2026 party and state policies were carried out, set the direction of work for 2027, and decide issues in “consolidating and developing the socialist system.” Year-end plenaries have been the place Pyongyang prints next year’s economic, defence and foreign lines. A meeting with Trump did not happen in Shenzhen. The plenary is dated as a window, not as a message.",
        sourceLabel: "Aju Press / KCNA",
        sourceHref: "https://www.ajupress.com/view/20261128100070683",
      },
      {
        id: "kospi-friday",
        title: "The Kospi’s last print is Friday: 4,915.68, up 4.34%",
        body: "South Korean shares closed Friday at 4,915.68, up 204.47 points, or 4.34%, Yonhap’s second lead said, on hopes that authorities will expand the 10-trillion-won market-stabilisation fund at a meeting next week. Samsung Electronics rose 4.55% to 179,100 won; SK hynix 5.41% to 1.11 million. Foreigners bought a net 1.13 trillion won, institutions 238.8 billion; individuals sold 1.78 trillion. The won was at 1,337.9 per dollar at 3:30 p.m., from 1,342.7. Saturday has no tape. The rebound is still a Friday close.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261127004852320",
      },
      {
        id: "cheonghae-floor",
        title: "Cheonghae is still a December floor vote — Hormuz still a separate ask",
        body: "The National Assembly defence committee approved a revised Cheonghae motion on Thursday. The Korea Herald’s file: expand the anti-piracy unit from waters off Somalia to waters south of Oman, add a maritime patrol aircraft, an EOD team and uncrewed mine-clearing gear, and write in that it will not join wars between other countries. Kang Shin-chul told the chair the government would abide. Cho Hyun told Iran’s Araghchi the same day that the point was Korean nationals and economic interests. Lee had already said on Wednesday that Hormuz and adjacent waters stay out. Any operation in the strait would need a separate vote. The current mandate expires on 31 December; the Herald still had a plenary in December. The committee stamp is Thursday’s. The floor is not.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10950639",
      },
    ],
  },
];

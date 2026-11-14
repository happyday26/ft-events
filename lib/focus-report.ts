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
    updatedAt: "14 Nov 2026",
    lede:
      "Huang is out, Kress is interim and still CFO, and the first board chair is Harvey Jones; ChatGPT Wallet started in US Pro dots yesterday; the stand-alone robotics team was folded into Chen and Brockman; DeepMind opened the weather datasets behind WeatherNext 3; and Thursday’s cyber event became two early-access products.",
    stories: [
      {
        id: "nvidia-huang",
        title: "Huang resigned; Kress is interim CEO and still CFO",
        body: "Nvidia’s board said Jensen Huang resigned as president, chief executive and a director, effective immediately, on Thursday. Colette Kress, executive vice president and CFO since 2013, is interim CEO and keeps the finance job until a permanent successor is named; the search will consider internal and external candidates. Harvey C. Jones, a longtime director and former Synopsys chief, is the board’s first chair. Jones said operations, customer commitments and the product roadmap should continue without interruption. Kress, in the same release, said she would build on “the extraordinary foundation Jensen created over the last 33 years.” Huang was not quoted. Third-quarter fiscal 2027 results remain Tuesday, 17 November, at about 1:20 p.m. PT. The release does not address the week of reports that preceded the resignation.",
        sourceLabel: "NVIDIA",
        sourceHref:
          "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/",
      },
      {
        id: "chatgpt-wallet",
        title: "ChatGPT Wallet: a token per purchase, US Pro dots only",
        body: "OpenAI launched ChatGPT Wallet on Friday in dots for ChatGPT Pro subscribers aged 18 and older in the United States with eligible US-issued cards. Users add a card once. Before each purchase they review the items, total and selected card, then approve with a security check such as Face ID or a fingerprint. The network then issues a payment token — a substitute card number, security code and expiry — so neither the business nor the agent sees the real card. American Express, Mastercard and Visa are the partners; card rewards and eligible dispute protections stay with the issuer. OpenAI published a Commerce Partner Playbook for CDNs, Web Bot Auth and risk systems that still decline agent checkouts. Pre-approved spending limits are a later promise, not this launch. It is a wallet for agents. The card number is not.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-chatgpt-wallet/",
      },
      {
        id: "openai-robotics",
        title: "OpenAI folded the robotics team into Chen and Brockman",
        body: "Fortune reported Friday, and the company confirmed, that OpenAI has disbanded its stand-alone robotics team. Robotics research moves to the main research organisation under chief research officer Mark Chen; applied robotics and hardware move to the Applied organisation under president Greg Brockman. A spokesperson called it acceleration, not an exit, and said general-purpose frontier models, including GPT-6 Astra, can now be applied directly to robots. Altman’s public humanoid demonstration is still 2027. OpenAI had registered booth #208 at CoRL in Austin this week; Fortune found it empty. An Nvidia study cited in the same piece put an Astra-powered agent at 74.8% on a simulated manipulation benchmark against 51.0% for the best specialised robotics models on that leaderboard. The 2020 wind-down is the precedent. The 2024 Figure partnership is closed.",
        sourceLabel: "Fortune",
        sourceHref:
          "https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/",
      },
      {
        id: "deepmind-weather",
        title: "DeepMind opened SatWeave and PARDIG",
        body: "Google DeepMind’s WeatherNext team released two datasets on Friday that it used to train WeatherNext 3. SatWeave is an hourly global mosaic of geostationary imagery across 17 visible, water-vapour and infrared channels, with a live feed and a historical archive of more than a decade. The post names GOES-East, GOES-West, Meteosat 0, Meteosat Indian Ocean and Himawari. PARDIG — Precipitation AI Reanalysis: Densely Inferred GPM — is trained on sparse NASA GPM Core Observatory radar with SatWeave and ECMWF fields as inputs. It maps rain at about 15-minute and 10-kilometre resolution, with average latency of about five hours, and a historical archive from 1999 to 2026. Against continental radars in the US, Europe and Japan and more than 36,000 weather stations, DeepMind says PARDIG improves hourly precipitation detection skill over NASA’s IMERG-Final by more than 30% on light-to-moderate rain. Both live and historical sets are on Google Cloud Storage; PARDIG’s historical catalogues are also in Earth Engine. The model was already in Search. The training data is now public.",
        sourceLabel: "Google DeepMind",
        sourceHref:
          "https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/",
      },
      {
        id: "daybreak-products",
        title: "Daybreak Red Team and Defense Factory left the event as products",
        body: "OpenAI used Thursday’s Cyber at the Frontier event to ship two agent products. Daybreak Red Team pentests web applications: agents use source code and app context to investigate attack paths, validate scanner, bug-bounty and disclosure findings, and retest whether a patch stops the exploit, inside isolated environments with Guardian review of scope. Daybreak Defense Factory takes those findings — and imports from Wiz, Snyk and Endor Labs — traces them through connected GitHub repositories, and prepares patches for engineers to review in Codex. Draft pull requests are allowed. Automatic deploy is not. SecurityWeek dated the write-up Friday. Red Team is early access on request; Defense Factory is a preview plugin in ChatGPT for workspaces that already have Daybreak. The models were already gated. The tickets are now a product page.",
        sourceLabel: "SecurityWeek",
        sourceHref:
          "https://www.securityweek.com/openai-unveils-daybreak-red-team-defense-factory-security-tools/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月14日",
    lede:
      "共機從昨天的30架次縮到10架次，越中線從23降至4。立法院昨天把產假修到14週、育兒留停津貼用附帶決議維持八成。國民年金5000對6000沒表決。老農津貼覆議窗口仍到19日。追加預算還在20日。鄭麗文今早說四都有驚無險。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機30架次縮到10架次，東部仍有兩架直升機",
        body: "國防部統計13日上午6時至14日上午6時，偵獲共機10架次、共艦8艘、公務船3艘，合計21機艦船。其中4架次逾越中線進入中部、西南及東部空域。航跡圖：海峽中部7架次主戰機、無人機及直升機，時間昨天8時40分至下午5時45分，其中1架逾越中線；西南1架輔戰機，8時45分至11時10分；東部2架直升機，11時55分至下午5時50分。前一日公報是共機30架次、越中線進入北中西南東23架次，艦與公務船同為8艘、3艘。北方與南方大範圍航跡從圖面消失；東側沒有空。國軍以任務機、艦及岸置飛彈系統監控應處。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/10930/9878213",
      },
      {
        id: "parental-leave",
        title: "產假14週、留停到9歲：三讀過了，津貼八成寫在附帶決議",
        body: "立法院13日三讀通過《性別平等工作法》及《就業保險法》部分條文。產假由8週增至14週，受僱者可於新增的第9至14週提前銷假；陪產檢及陪產假由7日增至14日。育嬰留職停薪更名育兒留職停薪，適用年齡由子女滿3歲前放寬至滿9歲前，期間仍以2年為限；按日申請的30日改為60日育兒假。法定津貼維持平均月投保薪資六成，附帶決議要求勞動部依補助要點持續編公務預算加發兩成，合計八成。雙親若都領滿6個月，可再各領3個月，每人最長9個月。施行日期由行政院另定，工商時報寫最快2027年元旦。洪申翰上午說八成入法「不一定很適合」；下午用附帶決議過了。法條是六成；現金流仍靠預算。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20261113701718-430104",
      },
      {
        id: "national-pension",
        title: "國民年金5000對6000：韓國瑜裁示再溝通，13日不表決",
        body: "立法院長韓國瑜13日上午召集朝野協商《國民年金法》。政院版將基本保障年金自4049元調高23.5%至5000元；國民黨團、民眾黨團要6000元，身障年金政院6715元、在野8057元。衛福部長石崇良說65歲平均餘命約20年，終身給付約120萬元，對照所繳近10萬元約12倍，必須財政永續。民進黨團總召蔡其昌說福利可以加，財源不可以借。民眾黨團總召陳清龍要依議事今天表決。韓國瑜裁示各黨團繼續溝通，13日院會不處理。公視16:07更新仍是這個結果。17日院會議程再掛這案。法源沒過；追加預算發放也還沒有數字可發。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/835578",
      },
      {
        id: "farmer-allowance",
        title: "老農津貼覆議窗口仍到19日，政院還在研議",
        body: "行政院10日收到立法院三讀的《老年農民福利津貼暫行條例》函文，覆議最晚19日。發言人李慧芝12日政院會後說，立院版本每年增加320億元，事前未與政院溝通，會壓縮其他農業資源，將在憲法與法律職權內採取合法、合憲因應。政院版是每月1萬元；三讀是在野版每月1萬5000元，溯及7月1日。她重申三原則：不增加實質舉債、不排擠其他政策、程序合憲合法。去年起對立院九項修法多用不予副署，最近一案是老福法。14日沒有新的覆議或副署文件。窗口還開著；決定還沒送。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611120154.aspx",
      },
      {
        id: "kmt-golden-week",
        title: "鄭麗文：四都有驚無險，黃金週回防雙北",
        body: "九合一進入投票前一週。國民黨主席鄭麗文接受專訪，承認民進黨台北市長候選人沈伯洋帶起的「洋流」有激勵綠營基本盤及年輕人的效應，仍看好台北、新北、桃園、台中四都過關，整體審慎樂觀，「有驚無險」。輔選口號是回防雙北、穩固中桃、進取南高，主打地方政績。她點名執政縣市裡彰化、宜蘭、新竹相對危險，新竹縣長初選整合需要時間。黃金週規劃：蔣萬安21日是否與柯文哲同台仍被問；桃園、台中、高雄辦大型造勢；新北、台南車掃。文傳會主委陳以信說廢除非核家園公投會跟造勢一起講。中央社今早發的是這篇。票還有兩週。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611140025.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "14 Nov 2026",
    lede:
      "The Upper House food-tax special committee opened Friday with Takaichi in the chair for three hours; she moved the benefit to at least half of workers; Komeito still wants a package, not a drip; she leaves Monday for Manila, then Shenzhen; and Washington’s host-nation ask is still more than ¥3tn against Tokyo’s ¥1.5tn.",
    stories: [
      {
        id: "food-tax-committee",
        title: "The Upper House special committee opened — and the coalition is still short",
        body: "An Upper House special committee began substantial deliberations on the food-tax bill on Friday, with the prime minister attending. The text is the two-year cut on food and non-alcoholic drink from 8% to 1% from April 2027, plus income-linked cash to cover the remaining 1%. Komeito and the Democratic Party for the People both voted against it in the Lower House last week. Jiji’s Friday night count: after the death of former Upper House speaker Masaaki Yamazaki, LDP and Ishin together hold 119 seats; the Conservative Party’s two intended yes votes make 121; the majority, vacancy and speaker excluded, is 123. That is four short on the coalition line, two short even with the Conservatives. Opposition kokutai chairs asked for more than one prime-minister session. The LDP is aiming at an Upper House vote on 2 December; the session ends the 12th. The offset is still unnamed.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/13/japan/politics/tax-cut-debate-komeito-dpp/",
      },
      {
        id: "food-tax-50pct",
        title: "Takaichi moved the benefit from “about 30%” to at least half of workers",
        body: "At the same committee Takaichi said the income-linked benefit would be designed so that at least 50% of workers are eligible. The government will provide ¥600bn a year, equal to 1% of food-tax revenue before the programme is fully in place in fiscal 2029. More than 40% of male workers would qualify. “We will deliver benefits to as many middle-income workers as possible.” The previous reference point, drawn from foreign programmes, was about 20 million people, or roughly 30% of the workforce; after Friday Jiji put the new scope at about 30 million. She had told the Lower House Finance Committee on 6 November only “the same as 30%, or more.” Komeito’s Hisatake Sugi had said 30% was too low and that 40 to 50% was needed. The ceiling moved. The named tax that fills the hole did not.",
        sourceLabel: "Jiji",
        sourceHref: "https://jen.jiji.com/jc/i?g=eco&k=2026111301087",
      },
      {
        id: "komeito-package",
        title: "Nishida still wants a package; “lip service” is not a vote",
        body: "Komeito secretary-general Satsuki Nishida told reporters on Friday that five demands, including benefits for pensioners, still stand, and that “unless the government shows them as a package rather than in dribs and drabs, we will have to take a tough line.” Jiji called Takaichi’s 50% line an opening bid for Komeito’s 21 Upper House seats. She sat three hours of questions, longer than the Lower House’s one-hour session. A two-parent, two-child household was given an illustration of up to ¥60,000 a year. Nishida was not moved. The coalition needs those 21 more than it needs another independent. The bill still has no Komeito vote.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/article/show/3911325",
      },
      {
        id: "takaichi-travel",
        title: "Takaichi leaves Monday: Manila, a possible Quad, then Shenzhen",
        body: "Deputy Chief Cabinet Secretary Masanao Ozaki said Friday that Takaichi will travel 16–19 November to the Philippines and China. She is due in Manila for a Japan–ASEAN summit on Tuesday and to co-chair an Asia Zero Emission Community meeting with the Philippines. Arrangements are underway for a Quad leaders’ meeting — Australia, India, Japan, the United States — the first since September 2024. Diplomatic sources told Kyodo Tokyo is also sounding out a Takaichi–Trump bilateral on the same trip. She then goes to Shenzhen for Thursday’s APEC summit, on trade, energy resilience and artificial intelligence. Bilateral meetings with other leaders are still being arranged. Ozaki called ASEAN a “key pillar in realizing a free and open Indo-Pacific.” The Diet committee stays behind. The prime minister does not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91303",
      },
      {
        id: "host-nation",
        title: "Washington’s host-nation ask is still more than ¥3tn; Tokyo is talking ¥1.5tn",
        body: "Jiji’s Saturday wrap, from sources, puts the White House demand for Host Nation Support in fiscal 2027–2031 at a total of ¥3tn, about three times the current five-year package of ¥1.06tn (about ¥210bn a year). Japan is estimating about ¥1.5tn, citing the cheaper yen and prices, or about ¥300bn a year. “Even the impact of foreign exchange rates alone would increase the amount to about 1.5 times the previous level,” one source said. Tokyo is also looking at shelters and hardening so bases can still function if attacked. The two governments still want an agreement by year-end. A Japanese official said they were “working hard to make adjustments in response to the high demands.” Trump’s first term asked for more than four times the then-package. The number on the US side has not come down overnight.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/14/japan/politics/japan-triple-host-nation-support-us/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "14 Nov 2026",
    lede:
      "Cho and Wang sat three hours in Beijing; Lee now has Anutin and Marcos on Monday and a southern-China luncheon on Wednesday; a US official told Reuters there are no North Korea plans on this Asia trip; Cheonghae’s on-scene command is “very restricted”; and Kim Jong-sik answered the naval buildup with “action.”",
    stories: [
      {
        id: "cho-wang",
        title: "Cho asked Beijing to bring the North back; Wang said the policy is unchanged",
        body: "South Korea’s foreign ministry said Cho Hyun met Wang Yi at Diaoyutai on Friday and called on China to play a constructive role in bringing North Korea back to dialogue. Cho said peace and stability on the peninsula are a shared interest and laid out Seoul’s denuclearisation effort. Wang said China’s peninsula policy remains unchanged and that Beijing would continue a constructive role for peace and stability. It was their first meeting in about three months, after Wang’s August visit to Seoul. They also prepared next week’s APEC, where Lee Jae Myung and Xi Jinping are expected to meet, and agreed to push the services-and-investment FTA and people-to-people traffic. Cho raised the Yellow Sea — the steel structures in the Provisional Measures Zone. The two agreed to manage those issues so they do not hinder the relationship. Yonhap’s second lead, rewritten overnight from the ministry release, is the Saturday file. The North is still not in the room.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261113002052315",
      },
      {
        id: "lee-asean",
        title: "Lee’s Monday is now named: Anutin, then Marcos",
        body: "Spokesperson Kang Yu-jung said Friday that Lee will hold separate bilateral meetings on Monday afternoon in Manila with Thai Prime Minister Anutin Charnvirakul and Philippine President Ferdinand Romualdez Marcos Jr., on the sidelines of ASEAN. He is in Manila Monday and Tuesday, then Shenzhen from Wednesday for two days of APEC. On Wednesday he will host a luncheon with South Korean residents in southern China — Guangdong, Fujian, Hainan and Guangxi, about 24,000 nationals under the Guangzhou consulate. Further bilaterals will be announced when the other side is locked. Thursday’s Wi Sung-lac briefing had the multilateral skeleton. Friday named two counterparts and a lunch. The North is still unlikely on the APEC list.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261113001700315",
      },
      {
        id: "trump-nk",
        title: "A US official: no North Korea engagement on this Asia trip",
        body: "Yonhap’s Saturday lead, from Friday Washington files, has two sentences that matter for Seoul. Bloomberg, citing a White House spokeswoman, said Trump will meet Xi Jinping and Vladimir Putin on Thursday at APEC in Shenzhen. Separately, Reuters reported a US official saying there were no plans for Trump to engage with North Korea during the Asia trip. A South Korean presidential official had already said Thursday that a Trump–Kim meeting on the APEC sidelines was unlikely, and that “it would be difficult to say there is zero possibility” of talks before or after, “but I think the probability might not be high.” Trump has kept saying the personal relationship is “good.” The three first-term meetings were Singapore, Hanoi and Panmunjom. This week’s itinerary does not add a fourth.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261114001151315",
      },
      {
        id: "cheonghae-control",
        title: "Cheonghae’s on-scene commander would be “very restricted”",
        body: "Defence spokesperson Chung Binna said Thursday the revised Cheonghae motion — already at the Assembly — would place the unit under an on-scene commander’s tactical control, who may be a foreign officer, when it joins Combined Maritime Forces or EU maritime-security missions. That authority, she said, is “very restricted” and “can be exercised temporarily in specific regions.” Operational command stays with the JCS chairman; the area is still the Gulf of Aden and waters south of Oman, about 650 km from Hormuz. A Korean Navy captain has commanded CTF-151 since August. The new clause is the one that lets the unit “join global efforts to secure the safety of the international maritime pathway and restore freedom of passage.” Chung repeated the no-war, no-battle line. JoongAng dated the briefing Thursday, posted Friday. Cabinet already approved. The Assembly has not.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/defense-ministry-says-onscene-command-over-cheonghae-unit-would-be-very-restricted/12971021",
      },
      {
        id: "kim-jong-sik",
        title: "Kim Jong-sik: the naval answer “will not be merely confined to denouncing it”",
        body: "KCNA carried a statement on Thursday from Kim Jong-sik, first vice department director of the Workers’ Party Central Committee. He called a US-led naval buildup, and nuclear-submarine programmes in South Korea, Japan and Australia, “a new dangerous factor” and “the detailed implementation” of a strategy for “securing the maritime hegemony.” “This has become a root cause of seriously undermining the strategic balance in the region and sparking off a new arms race.” The threat is “a very grave challenge,” and the North’s response “will not be merely confined to denouncing it.” “We will deter all threats by action and flexing of its bolstered muscle.” Yonhap filed at 16:57 KST Thursday; the weekly wrap still listed it Friday. He did not name a weapon, a date, or a place. The east-coast base Kim Jong-un inspected on Wednesday is the construction site that sits behind the sentence.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112011400315",
      },
    ],
  },
];

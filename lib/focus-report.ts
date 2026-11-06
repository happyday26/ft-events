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
    updatedAt: "6 Nov 2026",
    lede:
      "OpenAI put a Critical cyber model on Daybreak Red and said it stayed in scope; METR said Anthropic’s well-specified tasks are running at about 1.9 times last year’s pace; OpenAI’s campus compact arrived two days after voters blocked almost every data-centre ballot; Google made 15-second video generally available at seven cents a second; and Gemini on school Chromebooks is off by default only after a California suit.",
    stories: [
      {
        id: "gpt6-cyber",
        title: "GPT-6 Cyber is Critical, and Daybreak Red is still a guest list",
        body: "OpenAI on Thursday released GPT-6 Cyber, a model trained to find and validate exploitable bugs inside a researcher-set scope. On ExploitGym it scored 48.5%, up from 32.1% for GPT-5.6 Cyber — a 51% relative gain. A honeypot test informed by the Hugging Face incident found it avoided out-of-scope services in 99.93% of runs without a deployment prompt, and 100% with one. The lab used it to develop 948 Linux privilege-escalation exploits and to identify 81 previously unknown high-severity Firefox bugs; Mozilla has shipped fixes for many of them. Under the Preparedness Framework the model is now Critical in cybersecurity, up from High. Access starts with a select group of Daybreak Red customers. The score went up. The door did not.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-gpt-6-cyber",
      },
      {
        id: "metr-anthropic",
        title: "METR: Anthropic is about twice as fast — and not yet on its own",
        body: "The safety group METR published Thursday an 11-week review, August through October, of confidential Anthropic research, interviews, and unreleased-model scores. Benchmark capabilities on well-specified tasks have been improving about 1.9 times faster since October 2025 than they did between March 2024 and October 2025; METR said it would not be surprised if the true figure sat nearer 1.5 or 2.5. It estimated AI tools accounted for perhaps 80% of the acceleration, with high uncertainty, and found no convincing evidence that extra training compute explained it. The same note said the systems are not yet making highly significant, fully autonomous contributions to the most important stages of training. Anthropic’s chief executive called in September for a slower pace. The company is preparing an IPO that could come this month. The multiplier is in the paper. The autonomy is not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://money.usnews.com/investing/news/articles/2026-11-05/anthropics-models-improving-nearly-twice-as-fast-with-help-from-ai-study-finds",
      },
      {
        id: "openai-campuses",
        title: "The campus compact came after 40 of 41 ballots went the other way",
        body: "OpenAI on Thursday published a National Community Compact and a Compute Campus Policy Blueprint for sites it owns and operates. It restated that it will pay the full cost of electricity and the infrastructure needed to serve it, solicit community input, publish construction plans, and not use NDAs with public officials. In a blueprint it asked lawmakers to write similar rules. CNBC, citing Ballotpedia and its own count, found 41 local data-centre measures across 10 states in Tuesday’s midterms; voters backed restrictions or rejected pro-development measures in all but one. Chief global affairs officer Chris Lehane told reporters the blueprint had been in the works since August. OpenAI has told investors it is targeting $600 billion in compute spend by 2030, with large campuses planned in Georgia and Ohio. The promise is to pay the bill. The votes were about who writes it.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/05/openai-to-pay-for-data-center-power-after-election-shows-ai-concern.html",
      },
      {
        id: "gemini-omni",
        title: "Gemini Omni 1.2 Flash is GA: 15 seconds, 30% cheaper, watermark on",
        body: "Google on Thursday made Gemini Omni 1.2 Flash generally available on the Gemini API and Google Cloud. Native clips now run to 15 seconds, up from 10, in one-second steps from 3 to 15. The 720p price is $0.07 a second, 30% below Omni 1.1. Drafts can be cut at 360p or 720p, edited turn by turn, then upscaled to 1080p or 4K. Outputs carry an imperceptible SynthID watermark. Provisioned Throughput is offered. The model is in Flow, Google Vids, the Gemini app for Ultra subscribers, and Google Ads. The clip got longer. The mark stayed on.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/",
      },
      {
        id: "gemini-schools",
        title: "Gemini on school accounts is off by default — Search summaries are not",
        body: "Parents of a girl identified as “Emma” sued Google on Monday in California state court, saying she used Gemini 3 Flash on a school Chromebook from age 13 and that the company had woven the chatbot into its products without warning parents or schools. Google moved the case to federal court on Wednesday. Spokesperson José Castañeda said the company was reviewing the claims and had worked with medical professionals on features that point young people to support. Google said this week it will turn Gemini off by default for school student accounts; schools that keep Google Search still have to accept AI-generated summaries. The suit is in federal court. The default is off, except where Search is still on.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/google-faces-claims-student-used-aichat-on-us-school-laptop-to-plan-suicide-attempt-5005261",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月6日",
    lede:
      "台海今天只剩3架次共機；昨天還有19架次越中線。顧立雄說美國國會不分黨派，軍售照走。6076億追加預算初審完，中油台電全送協商，無人機先凍100億。賴清德昨晚說綏靖不會帶來和平。法務部要改反滲透法，陸委會要設專線：2005年以來131人。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機從19架次越中線掉到3架次",
        body: "國防部統計5日上午6時至6日上午6時，偵獲共機3架次（進入西南空域2架次）、共艦9艘、公務船8艘，國軍以任務機、艦及岸置飛彈系統監控應處。前一日公報是21架次共機、其中19架次越中線侵擾北部、中部、西南及東部空域，共艦8艘、公務船8艘。艦多了一艘，飛機少了十八架次。海面還在；空域收了一天。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88158",
      },
      {
        id: "ku-midterms",
        title: "顧立雄：美國國會不分黨派，軍售如期",
        body: "美國期中選舉民主黨拿下參眾兩院後，國防部長顧立雄5日在立法院聯席會議前受訪；當天委員會繼續審115年度追加預算。他說美國國會一向不分黨派支持台灣增強防衛力量，國防部會持續跟國會議員溝通，並與美國戰爭部保持密切聯繫，確保相關軍售如期進行。選票換了黨。承諾他說沒換。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050060.aspx",
      },
      {
        id: "extra-budget",
        title: "6076億初審完：中油台電全保留，無人機先凍100億",
        body: "立法院財政等委員會5日初審115年度追加預算案，歲出6076億元，中油、台電補助與增資4213億元佔一半。朝野共87項提案。國民黨賴士葆、李彥秀要砍中油增資508億；民眾黨洪毓祥要減列2007億。經濟部次長賴建信說事涉民生、國際原料還在高點；賴士葆回「昨天油價還有跌」。全案無共識，保留送黨團協商，朝野先前說好11月20日前三讀。國防部一般裝備費685億，民眾黨王安祥提案凍結100億，待無人機、無人艇資料送外委會，國防部同意，該筆先凍。審查結束了。三讀還在月曆上。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9859330",
      },
      {
        id: "lai-appease",
        title: "賴清德：綏靖不會帶來和平，真正和平須靠實力",
        body: "兼任民進黨主席的總統賴清德5日晚在圓山出席民進黨創黨40週年暨國際自由聯盟第65屆大會外交酒會。他說台灣致力維持台海和平與區域穩定，不尋求衝突，也絕不挑釁，但「綏靖不會帶來和平，妥協只會招致侵略，真正的和平必須立足於實力」。台灣正推動國防現代化、投資不對稱戰力、強化全社會防衛韌性；樂見對等尊嚴的對話，也將守護主權與民主生活方式。大會是自由聯盟近80年來首次在台灣開全體會員大會，近50國、70個政黨、逾150名代表。酒會講了實力。軍售還在華府那頭。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611060074.aspx",
      },
      {
        id: "transnational",
        title: "法務部要改反滲透法；陸委會要設專線——131人、149人次",
        body: "立法院司法及法制委員會5日聽跨境鎮壓專題。法務部長鄭銘謙說現行傷害、毀損、恐嚇、妨害秘密等罪多為五年以下，嚇阻力不足，正依行政院指示研議修正《反滲透法》，增訂罪責並加重處罰。陸委會副主委梁文傑說將設通報專線；中共對台跨境鎮壓有九大樣態，2005年至今131人、149人次。行政院跨境鎮壓協處平台4月1日已成立。國民黨翁曉玲質疑勿把政策異議當成在地協力。相聲演員黃逸豪到場旁聽。平台有了。法條還在研議。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050114.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "6 Nov 2026",
    lede:
      "The Lower House passed the food-tax cut and every opposition party voted no; Takaichi left the 30% eligibility line to a Cabinet order; she told the Diet the BOJ’s extra ETF sales would fund economic-security bonds as the Nikkei fell more than 5%; the Okinawa Policy Council met for the first time in 13 years; and on Thursday she had no comment on the American midterms except that she still wants to work with Trump.",
    stories: [
      {
        id: "food-tax-passed",
        title: "The Lower House passed the food-tax cut; the opposition voted as a bloc",
        body: "The House of Representatives on Friday passed a bill to cut the consumption tax on food and non-alcoholic drinks from 8% to 1% for two years from April 2027, with income-linked cash payments for low- and middle-income workers from fiscal 2027. A longer payment programme is planned for fiscal 2029, when the rate is due to return to 8%. All opposition parties, including the Democratic Party for the People and Komeito, voted against. The LDP–Ishin coalition has a Lower House majority and not an Upper House one; if the upper chamber rejects the bill, the lower house can override with two-thirds of members present. An October Sankei-FNN poll had 62.6% backing the cut and 52.2% expecting it to do little or nothing on prices. The stamp is in the first chamber. The invoice is still in the second.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/06/japan/politics/consumption-tax-bill-passed-lower-house/",
      },
      {
        id: "food-tax-details",
        title: "Thirty percent of workers, thresholds by Cabinet order, details by year-end",
        body: "At Friday morning’s financial-affairs hearing, opposition lawmakers pressed Prime Minister Sanae Takaichi on who qualifies for the income-linked payment and how the cut is funded. The government again said it would not use deficit-financing bonds. She said the aim was to make at least 30% of workers eligible, and that income thresholds and the calculation method would be set by Cabinet order. “We will listen to a wide range of views and spell out the details as we draw up the budget toward year-end.” Workers who keep the payment after the rate returns, she said, would receive more than they saved under the lower rate; those above the ceiling would see a relatively small rise in net burden as a share of income. The rate is in the bill. The names are in an order that has not been written.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/06/japan/politics/consumption-tax-bill-passed-lower-house/",
      },
      {
        id: "boj-etf",
        title: "Takaichi will tap BOJ ETF sales as the Nikkei fell more than 5%",
        body: "The prime minister told parliament on Friday that additional proceeds from the Bank of Japan’s ETF sales would be set aside to redeem bonds issued for public spending on economic security — “fruits of Japan’s economic growth.” The BOJ on 30 October raised annual ETF sales to ¥860bn from ¥330bn; a portion of its net profit, including from those sales, is paid to the state. The Nikkei average fell more than 5% on Friday on an AI-and-chip sell-off after the Democratic midterm sweep. “I am aware share prices, particularly those of AI and chip sectors, are falling sharply,” she said, and that the focus was still a stronger economy. A government official, unnamed, said tax revenue could undershoot if the slide lasted. The central bank has said it will unload ETFs with minimum market disruption, independently of fiscal or political considerations. The proceeds are earmarked. The market is not waiting for the earmark.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/japan-vigilant-to-market-moves-will-focus-on-boosting-economy-pm-takaichi-says-5006209",
      },
      {
        id: "okinawa-council",
        title: "The Okinawa council met for the first time in 13 years — and named no date",
        body: "Takaichi chaired the Okinawa Policy Council at the Kantei on Friday with Governor Genta Koja, the first such meeting since 2013. She said the government would “make every effort to achieve visible results in reducing the burden of U.S. military bases in Okinawa,” and told ministers to consider support in the fiscal 2027 budget. Koja, elected in September with LDP backing after defeating Denny Tamaki, asked when Futenma’s land would be returned; he later told reporters Tokyo gave no date. Foreign Minister Toshimitsu Motegi said Japan and the United States had agreed to enhance education of U.S. personnel after the indictment in October of Marine Devin Ballard. Sources said the development budget could rise above ¥300bn, against an initial request of ¥289.7bn, after years in the ¥260bn range. The council is back. The calendar for Henoko is not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90582",
      },
      {
        id: "takaichi-trump",
        title: "No comment on the midterms — except that the working relationship stands",
        body: "On Thursday at the Kantei, Takaichi told reporters the government “has no comment” on the Republican loss in the U.S. midterms, which she called an internal American affair. “The Japan-U.S. alliance is a very important pillar of diplomacy and security,” she said. “I want to work with President Trump to strengthen the relationship between our two countries.” The food-tax bill still has to clear the Upper House. The alliance line did not wait for it.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.nippon.com/en/articles/-/56989",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "6 Nov 2026",
    lede:
      "The special-counsel filibuster hit 24 hours and the cloture vote began with the People Power Party walking out; the KOSPI had already been halted for 20 minutes; the Blue House said a midterm result would not move the alliance; the finance minister asked the Assembly to push the crypto tax to 2029; and the June passenger list was still on VirusTotal for five months.",
    stories: [
      {
        id: "special-counsel",
        title: "The filibuster ran 24 hours; cloture started as the opposition walked out",
        body: "Speaker Cho Jeong-sik tabled the special-counsel bill on alleged fabricated investigations and indictments at about 4 p.m. Thursday. The People Power Party opened a filibuster at once; the Democratic Party filed for cloture. Under Assembly rules, unlimited debate can be ended after 24 hours with three-fifths of sitting members. The modified text dropped the special prosecutor’s power to drop charges or decide whether to maintain prosecution; the PPP still calls it a vehicle to clear President Lee Jae-myung. The probe can run up to 200 days with as many as 309 staff, covering Daejang-dong, Baekhyeon-dong, Wirye, and the Ssangbangwool North Korea remittance case, among others. Yonhap photographed the cloture vote this afternoon as PPP lawmakers left the chamber. Street rallies are listed for the weekend. The clock ran out. The final tally had not been published when this briefing closed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://www.yna.co.kr/view/AKR20261105162100001",
      },
      {
        id: "kospi-rout",
        title: "The KOSPI was halted for 20 minutes, then kept falling",
        body: "Seoul stocks opened Friday on the AI-and-data-centre sell-off that followed the Democratic midterm sweep. The Korea Exchange suspended KOSPI trading for 20 minutes after a drop of more than 8%. By 11:20 a.m. the index was down 240.41 points, or 4.47%, at 5,143.39. Thursday it had already closed 5.28% lower at 5,383.80. Samsung Electronics was down more than 3%, SK hynix more than 6%. Overnight the S&P 500 fell more than 4% and the Nasdaq more than 5%. Kiwoom’s Han Ji-young noted Texas accounts for about 27% of U.S. data-centre construction. The won was at 1,356.2 per dollar. The halt lasted 20 minutes. The reason sat in American precincts.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261106004600320",
      },
      {
        id: "blue-house-alliance",
        title: "The Blue House: a particular election result will not move the alliance",
        body: "A presidential official told reporters on Thursday that Seoul “will continue to closely communicate and cooperate with the U.S. administration and Congress while analyzing changes in the political landscape” after the midterms. “We believe a particular election result will not affect the South Korea-U.S. alliance.” On U.S. investment, the official said strategic projects agreed between the two countries would continue, with individual items reviewed “putting the national interest first” and by “commercial rationality.” The same day, President Lee heard a closed-door briefing on spreading the startup boom and overseas full-stack AI cooperation, and told aides to expand fiscal-support applicants and use embassies as a public-private team. The alliance line is unchanged. The shopping list is still under review.",
        sourceLabel: "ChosunBiz",
        sourceHref:
          "https://biz.chosun.com/en/en-policy/2026/11/05/AR4H5GJ3BNB5RPHE2VDDDEDTCM/",
      },
      {
        id: "crypto-tax",
        title: "The crypto tax is being asked to wait until 2029 — a fourth delay",
        body: "Finance Minister Lee Hyoung-il said Thursday the government would work with the National Assembly to postpone cryptocurrency-gains tax from 2027 to 2029, a day after Democratic Party leader Kim Min-seok asked for another stay. If the Assembly agrees, it would be the fourth postponement since a 2022 start date. Net annual profits above 2.5 million won would be taxed at 22%, including local income tax. The ministry cited U.S. crypto-information exchange due in 2029, and a Digital Asset Basic Act still being written. A public-private group is to draft reforms by the first half of 2027. The government had said into mid-October that January would still hold. People Power’s Mun Jong-hyeong called the shift “typical populist politics.” The rate is in the statute. The date is back in the Assembly.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/economy/cryptocurrency/20261105/korea-seeks-another-crypto-tax-delay-over-gaps-in-overseas-data-and-rules",
      },
      {
        id: "virus-total",
        title: "The June passenger list sat on VirusTotal for five months",
        body: "A file with names, affiliations, birth dates, and passport details of President Lee, first lady Kim Hea Kyung, and 166 others on the June flight to Belgium, France, and Italy was uploaded to VirusTotal on 2 June and stayed downloadable by paid members for about five months. The presidential office and foreign ministry said they found it this week. A ministry official said the leak looked like document handling, not hacking — possibly an outside security contractor, or the exchange with Belgian authorities via the embassy in Brussels. The ministry said it had taken the file down and was arranging new passports. First Vice Foreign Minister Park Yoon-joo was due to see Belgium’s Theodora Gentzis in Seoul on Friday. Authorities are also looking into claims that other diplomatic documents were uploaded to the same site. The list is down. Who put it up is still an open file.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261106004100315",
      },
    ],
  },
];

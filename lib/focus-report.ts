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
    updatedAt: "22 Nov 2026",
    lede:
      "Anthropic closed Friday at $88.91, 8.5% off Thursday and not far from $83; the Nasdaq had its worst week since 2020; OpenAI said GPT-6.2 Astra’s reasoning-extraction rate fell from 54.0% to 0.2%; Nvidia’s board is still not bringing Huang back; and Apple’s computer-use agent is still a job listing that has already been taken down.",
    stories: [
      {
        id: "ant-week",
        title: "The largest IPO in history closed the Nasdaq’s worst week since 2020",
        body: "Anthropic opened at $111.50 on Thursday and closed Friday at $88.91, CNBC’s Saturday wrap said — 8.5% off the debut close, a $1.6 trillion fully diluted value that ranked it behind only Apple, Microsoft, Alphabet, Nvidia, Amazon and SpaceX. The IPO itself raised $93.5 billion, plus $26 billion of Class N stock sold at the offer price. Nvidia fell 23% on the week, its sharpest weekly drop in 18 years; the Nasdaq lost 10% over five sessions, its worst week since the early Covid selloff in 2020. The prospectus put private capital into the lab at $141 billion as of September. At the IPO price, Menlo Ventures and Lightspeed each held about $25 billion of stock. Guru Chahal at Lightspeed told CNBC the company generated $1.72 of revenue per dollar of compute in the third quarter, up from 68 cents a year earlier. The listing was the exit. The tape was the week.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/21/anthropic-ipo-tech-selloff.html",
      },
      {
        id: "ant-patience",
        title: "Reuters: $88.87, about 40 times sales, options next week",
        body: "A Reuters Sunday file put Anthropic last at $88.87, about 9% below Thursday’s close — a $1.6 trillion fully diluted value and $1.2 trillion on shares outstanding. Kaush Amin at US Bank Asset Management said he favoured patience until public results, and that the multiple “assumes years of rapid growth.” Intropic, a London index-rebalance shop, estimated tracker funds could buy up to 30% of the shares by year-end. Options start next week. Retail had already traded about $772 million on Thursday, the most for a debut since Vanda Research began counting in 2012. Carsten Hesse at Berenberg called it “not a good environment.” Bloomberg, via the same file, said Apple is building an agent of its own. Friday’s close on CNBC was $88.91. The Sunday print was a few cents lower and a multiple the first 10-Q will have to carry.",
        sourceLabel: "Reuters / Economic Times",
        sourceHref:
          "https://m.economictimes.com/markets/us-stocks/news/anthropics-post-debut-stumble-delivers-reality-check-for-ai-trade/articleshow/136066633.cms",
      },
      {
        id: "nvidia-two",
        title: "Nvidia’s earnings were fine; the board still does not want Huang",
        body: "TechCrunch’s Saturday Equity tape called it two Nvidias: Kress beating estimates and saying the company would stop selling H200 chips into China, against Musk’s petition and Huang’s own offer to return. Interim chief Colette Kress had already told the earnings call the board “does not intend to reinstate Jensen as CEO.” Critics of the China book put about 20% of the business in chips that reach Chinese customers through Malaysia and the rest of Southeast Asia; that is not a line in the accounts. The last quarter is still Huang’s. The search firm is still Heidrick. The petition is still circulating. The answer is still no.",
        sourceLabel: "TechCrunch",
        sourceHref: "https://techcrunch.com/2026/11/21/a-tale-of-two-nvidias/",
      },
      {
        id: "distillation",
        title: "OpenAI: 54.0% to 0.2% on stolen chain-of-thought",
        body: "Friday’s note on adversarial distillation is the safety card for GPT-6.2. In an internal adaptive black-box test, the average success rate for pulling protected reasoning from an earlier request fell from 54.0% on GPT-6 Astra with the old stack to 0.2% on GPT-6.2 Astra with the new one; the current-request rate fell from 22.9% to 0.9%. The lab is now applying selected patches back to GPT-6 Astra. Weekly enforcement against distillation campaigns has run from thousands of accounts to tens of thousands, and rose sharply over the summer. September’s report had already named a Moonshot-linked extraction; Friday said more campaigns would be described soon. The number that moved is the attack rate. The students are still out there.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/combatting-adversarial-distillation/",
      },
      {
        id: "apple-agent",
        title: "Apple’s computer-use agent is a job listing that has already vanished",
        body: "Bloomberg spotted a senior-engineering-manager post for an agent that “browses the web, works across apps, runs commands, writes and debugs code, and calls services,” privately and with Apple’s usual polish. The Verge’s Thursday file, updated Friday, said the listing had been taken down. The same post put the work with Siri, UI Frameworks and Apple Foundation Models, and described sub-agents across browsers, terminals, editors and APIs. Bloomberg has the company eyeing a launch as soon as late 2027; progress remains early. Muse, Dots, Duet and Google’s Tasks are already in market. iOS 27.3’s developer preview will let Siri act in “all apps.” The agent is not a product. The advertisement is not even still up.",
        sourceLabel: "The Verge",
        sourceHref:
          "https://www.theverge.com/tech/1038227/apple-ai-agent-engineer-job-listing",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月22日",
    lede:
      "共機一夜24架次、17架越中線，艦11、公務船1，空飄氣球2顆。老農1.5萬不副署，許宇甄說背叛，莊瑞雄要她把帳攤開。金管會23日起全面禁止平盤下放空。蘇巧慧說普發2萬應回歸政院版。條例是50比46過的；副署還沒寫。",
    stories: [
      {
        id: "pla-bulletin",
        title: "24架次、17架越中線：艦11、公務船1，氣球2顆",
        body: "國防部統計21日上午6時至22日上午6時，偵獲共艦11艘、公務船1艘、共機24架次，其中17架次逾越中線侵擾中部、西南空域。另有2顆空飄氣球：第一顆21日上午9時55分越中線，基隆以西47浬、高度1萬2000呎，11時25分消失；第二顆11時40分越中線，台中西北54浬、高度3萬呎，下午1時25分消失。國軍以任務機、艦及岸置飛彈系統監控應處。前日overnight是2架、6艦、1公務船加4顆氣球。艦加了5艘；飛機從2架拉到24架。海面加碼，空域也不是空的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611220020.aspx",
      },
      {
        id: "farmer-allowance",
        title: "許宇甄：背叛老農；莊瑞雄：把帳攤開",
        body: "立法院把老農津貼從每月8110元修到1萬5000元，卓榮泰已決定不副署。國民黨團書記長許宇甄21日說，這是對全台老農最深的背叛、對國會最嚴重的侮辱，行政院屢次以不副署當武器。她要為53萬農民抗議。民進黨團幹事長莊瑞雄說，政院1月就提每月1萬元、加1890元，錢已編進今年追加預算和明年總預算；「背叛」抹煞已編經費。他算國民黨版相對現行每年約多320億，「加碼只要改一個數字，照顧農民要把每一筆帳都算清楚。」農業部說，會依追加預算辦1萬元方案的前置作業。1.5萬沒副署。1萬元的發放日還沒寫。",
        sourceLabel: "中央社／聯合報",
        sourceHref: "https://udn.com/news/story/6656/9893302",
      },
      {
        id: "short-sale-ban",
        title: "金管會：23日起全面禁止平盤以下放空",
        body: "面對費城半導體週五跌10.73%，金管會21日再加碼五項穩定措施。自23日起，上市櫃股票與台灣存託憑證的融券及借券賣出，價格不得低於前一營業日收盤價；最低融券保證金成數由130%提高到150%；並暫停受理證券商申請發行認售權證。台股本週重挫7641點；週五集中市場與櫃買融資單日大減637億元。法人說空頭工具都限縮了，本波跌幅近三成。禁空令星期一生效。美股週末還不能交易。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202611210177.aspx",
      },
      {
        id: "cash-su",
        title: "蘇巧慧：普發2萬應回歸政院版",
        body: "立法院20日三讀「全民共享經濟成果及穩定民生特別條例」，蘇巧慧未出席表決。國民黨新北市長候選人李四川21日在中和說，要發1萬時她稱會弄窮國家，2萬她又不投票，真發了可能再搶功勞。蘇巧慧在樹林造勢回：編預算是行政權，立法權只能建議，財政無虞且不排擠現有項目才能做；普發現金應回歸行政院版本，較符合憲法與預算法精神。政院已說2萬有高度違憲疑慮和財政風險，將審慎評估合法合憲作為。選前一週在新北吵；副署日還是空白。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aloc/202611210078.aspx",
      },
      {
        id: "cash-statute",
        title: "50比46：一個月內送特別預算，三個月內發完",
        body: "院會20日以50票贊成、46票反對三讀普發2萬元特別條例。民眾黨8席與民進黨一起投反對；部分民進黨立委參選縣市長未出席，國民黨掌握人數。條文寫：全體國民、免納所得稅，不得抵銷、扣押、供擔保或強制執行；施行至民國116年12月31日。行政院應於生效後一個月內將特別預算送立法院，並自特別預算生效日起三個月內發放完畢。名稱、8條條文、是否繼續三讀、全案，一共11次表決。票在桌上。副署不在條文裡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611200188.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "22 Nov 2026",
    lede:
      "Suzuki said Saturday that getting the food-tax cut and the 45-seat bill through matters more than keeping Seki; Komeito’s rewrite is still unanswered; the tax commission is eyeing ¥870 billion of SME breaks; and Takaichi’s first Xi meeting was a scaled-down welcome in Shenzhen.",
    stories: [
      {
        id: "seki-suzuki",
        title: "Suzuki: pass the bills first — then decide about Seki",
        body: "LDP secretary-general Shunichi Suzuki, speaking in Morioka on Saturday, said the food-tax cut and the bill to cut 45 proportional Lower House seats were the session’s priorities. “It is crucial to eliminate as many obstacles as possible to the enactment of the bills. We will make decisions based on that.” Opposition parties are preparing a censure motion against education minister Yoshihiro Seki. Suzuki said it was “not good that we have to supplement answers given in the Diet outside the Diet,” and that Seki “has not yet won public understanding.” Yuichiro Tamaki said the handling warrants censure and told Seki to go before a motion disrupts the tax debate. A censure in the Upper House is not legally binding; it is enough to empty the room. Yana is already gone. Seki is the next invoice.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/22/japan/politics/ldp-replacing-scandal-minister/",
      },
      {
        id: "seki-three",
        title: "Seki added three more parties on Friday and still said he would stay",
        body: "Kyodo, via Mainichi, said LDP sources want him out before the food-tax bill stalls. Seki first admitted that METI and health-ministry officials lectured businesspeople at 2024 fundraisers; admission was ¥90,000. On Friday he named three more 2024 cases, with Cabinet Office and Fair Trade Commission officials in the room. Junya Ogawa called him unfit. A senior LDP member said a Senate censure would likely pass if the opposition tables it. Seki told a Friday press conference there was “no legal problem” in giving general explanations even where a ministry and a company had a stake, and that he would stay. He and Yana were the first slush-fund disciplined LDP lawmakers Takaichi put in the mid-September Cabinet. The extra three names came outside the Diet. Suzuki noticed.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261121/p2g/00m/0na/004000c",
      },
      {
        id: "komeito-rewrite",
        title: "Komeito: answer the rewrite, or the food-tax bill gets a no",
        body: "Secretary-general Nishida on Friday presented Komeito’s rewrite of the consumption-tax cut. The pillars Jiji printed: verify the cut’s effect and add price relief if it is not enough; write the 2029 worker-support payment’s recipients and amounts into statute rather than a cabinet order; and put in a shock absorber when the rate goes back up after two years. “If the government does not answer specifically and sufficiently, we will oppose,” he said. The ruling camp is still short in the Upper House. The session ends 12 December. The hole is still unnamed. The missing votes now have a list.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/article/show/3916321",
      },
      {
        id: "sme-breaks",
        title: "The tax commission is looking at ¥870 billion of SME breaks — not a named offset",
        body: "LDP tax-commission chair Itsunori Onodera opened fiscal 2027 tax reform on Thursday. Corporate breaks for small and midsize firms that expire at the end of fiscal 2026, including the wage-increase incentive, are worth about ¥870 billion of revenue. The government has signalled a substantial overhaul to help pay for the food-tax cut. Ishin’s Kei Hagihara said measures with little effect should be abolished. Also on the table: spreading more corporate enterprise tax out of Tokyo, an extra vehicle-weight tax on EVs from May 2028, and higher tax on condos flipped within a year. More than ¥700 billion of last year’s gasoline-tax and tuition promises is still uncovered. Defence at ¥50–60 trillion over five years would need its own tax. The commission is listing candidates. The food-tax hole still has no line item.",
        sourceLabel: "The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20261120/p2a/00m/0na/025000c",
      },
      {
        id: "xi-snub",
        title: "The Shenzhen welcome was scaled down; it was still the first Xi meeting",
        body: "AFP-Jiji’s Saturday file said Takaichi’s first face-to-face with Xi Jinping, on the APEC trip, came with a visibly scaled-down welcome. It was their first meeting since her comments that Tokyo could intervene if China attacked Taiwan, after which Beijing put on trade restrictions and told its citizens not to travel to Japan. Experts told the paper the snub could galvanise her conservative base. The bilateral was a handshake, not a communiqué. The food-tax votes are still in Tokyo.",
        sourceLabel: "The Japan Times / AFP-Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/21/japan/politics/china-snub-boost-takaichi-base/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "22 Nov 2026",
    lede:
      "Lee accepted Choi Kyo-jin’s resignation this afternoon over the CSAT scramble; he spent the morning defending overseas trips; Jung Jeom-sik wants a plan for Monday’s open; Ulsan got the SK data-centre tour yesterday; and the ₩100 million bounty is still per case.",
    stories: [
      {
        id: "choi-resigns",
        title: "Lee accepted the education minister’s resignation this afternoon",
        body: "Choi Kyo-jin stepped down Sunday over last-minute anti-AI rules for Thursday’s CSAT. “As the minister in charge, I believe I cannot escape criticism that we failed to prepare in advance,” he said. Lee accepted about an hour later, spokesperson Kang Yu-jung said; a successor will follow the usual process. The late changes included pencils-only, stickers over clothing buttons, and three nationwide disaster alerts during the exam to catch phones that had not been handed in. The ministry said Friday it had 111 suspected electronic-device cases. In the Assembly, asked whether he was 100% sure AI cheating could be caught, the 72-year-old said, “I don’t think I could, because of my age.” The tax-accountant top scorer had already admitted to a camera, a phone and a model. The LEET perfect scorer was found dead on exam day; police are still on the allegations. The minister is gone. The 111 files are not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261122001051315",
      },
      {
        id: "lee-trips",
        title: "Lee: early-term overseas trips are an essential national task",
        body: "On Sunday the president quoted his communications secretary, Sung Ki-hong, on X: in a trade-dependent country, summit diplomacy is “an indispensable core duty.” He added the idiom that a Buddha sees Buddhas and a pig sees pigs, and asked critics not to call it harsh language — the People Power Party had already accused him of likening the public to pigs. People who treat trips as drinking, sightseeing and luxury shopping will always see a vacation, he wrote. Long flights, packed days, body aches, loose teeth and nosebleeds were the cost; image, relations and export markets were the return. He then compared Seonjo and Jeongjo and said it is a disaster to give power to people who treat office as plunder. The opposition had called the Philippines-and-China week too much travel. The reply was a classical proverb and a packing list.",
        sourceLabel: "SBS",
        sourceHref:
          "https://news.sbs.co.kr/english/article.do?news_id=N1008857647",
      },
      {
        id: "kospi-monday",
        title: "Jung Jeom-sik wants a plan before Monday’s open",
        body: "The KOSPI closed Friday at 4,869.96, down 267.93 points or 5.21%, its first close under 4,900 in about ten months, and 7.95% down on the week. People Power floor leader Jung Jeom-sik wrote on Facebook on Sunday that the government should prepare emergency measures for a possible “Black Monday.” Retail losses were already large, he said, and confidence in the index’s soundness had been shaken. Short sales on KOSPI and Kosdaq from 2 November to Thursday totalled ₩21.6 trillion; foreigners were ₩16.21 trillion, or 75.1%. Regulators had eased collateral for leveraged accounts earlier in the month; brokers can still sell out a falling book, and interest still accrues. Seoul has been cautious about a short-sale ban while it courts MSCI developed-market status. Taiwan’s FSC, the same file noted, will bar sub-close shorts from Monday. Jung wants a Monday plan. The fund is still only a signal.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/economy/20261122/kospi-rout-fuels-calls-for-bolder-stabilization-measures",
      },
      {
        id: "ulsan-sk",
        title: "Lee walked an SK data-centre site in Ulsan a day after APEC",
        body: "A day after the Philippines and China, the president toured an SK Inc. AI data-centre construction site in Ulsan, 310 km south of Seoul. The visit was billed as a check on the “mega projects” meant to turn Chungcheong, Honam and Yeongnam into hubs for data centres, physical AI and advanced chips. “AI data centers are a major source of demand for semiconductors and key infrastructure behind physical AI, such as robots and autonomous vehicles,” he said. “I expect the successful progress of the AI data center project in Ulsan will serve as a catalyst for additional investments from global AI companies.” The government, he added, would help with a shortage of construction workers. “When a world is under a heated race, speed is crucial.” SK Telecom chief Jung Jai-hun and science minister Bae Kyung-hoon walked with him. The trip landed on a Saturday. The chips are still a hole in Friday’s index.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261121001051320",
      },
      {
        id: "csat-bounty",
        title: "The ₩100 million bounty is per case — and a cheater can still collect",
        body: "Lee repeated on Saturday that anyone who reports CSAT cheating will get ₩100 million per case, so a single reporter of several cases can collect more. A cheater who turns himself in and names accomplices gets a reduced sentence and still the full reward for the others. “Cheating on the college entrance exam is a crime as serious as corruption by public officials,” he wrote. “We will track cheaters down to the very end.” The tax-accountant top scorer had used AI and devices; the LEET perfect scorer was found dead at a Seoul motel on CSAT day after skipping a promised live session. Sunday’s resignation did not withdraw the bounty. The minister left. The price list stayed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261121001300320",
      },
    ],
  },
];

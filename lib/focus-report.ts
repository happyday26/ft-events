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
    updatedAt: "20 Nov 2026",
    lede:
      "ANT opened at $111.50 and closed at $97.17, 17% above the $83 IPO, a $1.8tn fully diluted cap after the largest listing on record; Amodei told the bell he would pace training; California subpoenaed Nvidia over chips and investors; Asia sold the complex anyway; and Nvidia took $10bn of Class N in the placement that followed the offering.",
    stories: [
      {
        id: "ant-debut",
        title: "ANT closed $97.17: 17% above $83, $1.8tn, still not the market",
        body: "Anthropic priced 980 million Class A shares at $83 on Wednesday and raised $81.3bn, larger than SpaceX in June. The stock, ticker ANT, opened at $111.50 on Thursday and closed at $97.17. CNBC puts the fully diluted cap at about $1.8tn, seventh among US companies, behind Apple, Microsoft, Nvidia, Alphabet, Amazon and SpaceX. More than 846 million shares changed hands, above SpaceX’s 522 million on day one. The Nasdaq still fell 2.25% to 23,879.20; the S&P 500 lost 2.02% and the Dow 2.19%. The company said the offering is expected to close on 20 November, subject to customary conditions. The first trade landed. The rest of the tape did not come with it.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html",
      },
      {
        id: "amodei-bell",
        title: "Amodei at the bell: pace training, no business or political bend",
        body: "Before the open, Dario Amodei read a prepared speech at Nasdaq MarketSite. He said Anthropic would “pace the training and deployment of AI systems, taking as long as is necessary to have confidence that they are safe and will remain under human control,” and that it would “not bend to either business nor political pressure.” The listing, he said, put the company in a stronger financial position and “only strengthens our resolve to do the right thing.” He named misuse by individuals or states, economic disruption, and losing control of systems as “very real risks,” and said they were avoidable if the people building the models obsessed over safety. Daniela Amodei told CNBC the same morning that the risks were real and the promise “incredible.” Altman, Hassabis and Musk have said they agree with the pace line. Concrete commitments from the other labs are still thin.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/19/at-nasdaq-opening-bell-anthropic-ceo-recommits-to-pacing-ai-development/",
      },
      {
        id: "bonta-nvidia",
        title: "Bonta served Nvidia: chips, confidential files, and whether investors were misled",
        body: "California Attorney General Rob Bonta issued an investigative subpoena to Nvidia on Thursday. His office is asking whether advanced chips or confidential information may have gone to China, and whether the company misled investors and the public, in order to test California securities law after Jensen Huang’s resignation. “Companies cannot mislead their investors,” Bonta said. Nvidia did not immediately comment. CNBC notes the shares are down 22% in the nine sessions since Huang’s admission and on course for a seventh weekly loss. The subpoena is a state file, not an export-licence ruling. Huang is still not CEO. The board has not named a permanent replacement.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/19/nvidia-california-bonta-subpoena-china-chips.html",
      },
      {
        id: "asia-selloff",
        title: "Friday in Asia: the listing did not lift the complex",
        body: "Tokyo’s Nikkei 225 fell 5.1%, Seoul’s Kospi 5.2%, Taipei’s Taiex 6.2% and Hong Kong’s Hang Seng 1.9% on Friday, Al Jazeera counted, after Anthropic’s debut failed to ease doubts about whether the multi-trillion-dollar AI build-out will earn its keep. Union Bancaire Privee’s Carlos Casanova called it a “collapse in confidence in the AI investment thesis” and said the listing appeared to divert liquidity from established AI names. Societe Generale’s Rajat Agarwal pointed to a “demand vacuum” among foreign buyers. Nvidia’s earnings earlier in the week had not reassured the same tape. BIS this week added licence rules for remote access to high-end compute in third countries. The IPO was the show. The region sold the suppliers.",
        sourceLabel: "Al Jazeera",
        sourceHref:
          "https://www.aljazeera.com/economy/2026/11/20/asias-stock-markets-dive-as-anthropic-debut-fails-to-allay-ai-bubble-fears",
      },
      {
        id: "nvidia-placement",
        title: "Nvidia took $10bn of Class N in the placement that followed the offering",
        body: "CNBC’s live file says Nvidia agreed to buy about $10bn of Anthropic Class N common stock in a private placement that took place immediately after the offering closed its sale, against a November 2025 commitment of up to $10bn. AMD also joined the placement; its shares were down about 8% on a separate short-seller note. Amazon owns 14.7% of outstanding capital stock after the deal and Google 13.7%, according to the prospectus CNBC cited. The greenshoe is still a 30-day option on up to 147 million extra shares. The public book is ANT. The chipmaker’s cheque is Class N.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月20日",
    lede:
      "立法院今天下午三讀6076億追加預算，一毛未刪；普發2萬以50比46過關，綠白同反；國民黨用油電凍漲主決議換放行中油增資；共機8架次、6架越中線，另有4顆空飄氣球；老農津貼副署期限就是今天，政院還沒宣布。",
    stories: [
      {
        id: "extra-6076",
        title: "追加預算6076億三讀：一毛未刪，歲出照列",
        body: "立法院今天下午二、三讀通過115年度中央政府總預算追加預算案。歲出原列6076億3232萬6千元全部照列，歲入828億照列，舉債2085億5411萬6千元也照列。最大宗是中油增資2338億；因應中東衝突與民生安定約1874.8億，含補助中油油氣1014億、液化石油氣84億。ETtoday寫出台電凍漲711億、國防強化1457億、老農與國民年金及六大社福津貼215億。國民黨團原擬刪中油增資，院會前撤回。無人機預算一併放行。追加預算從八月等到今天；數字沒被砍。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9891451",
      },
      {
        id: "cpc-tpp",
        title: "中油增資：白營刪除案8票對39票，藍委在場未插卡",
        body: "民眾黨團提案刪除中油增資2338億與舉債2085億。增資表決出席47人，贊成8人、反對39人；舉債表決出席46人，贊成8人、反對38人。贊成的是白委，反對的是綠委，國民黨立委在場但未插表決卡。藍營改以「有條件放行」處理增資。刪減案沒過，預算照列。反對的人投了；人在場的人沒投。",
        sourceLabel: "ETtoday",
        sourceHref: "https://www.ettoday.net/news/20261120/3275592.htm",
      },
      {
        id: "cash-20k",
        title: "普發2萬三讀：50比46，綠白同反，13名綠委未出席",
        body: "國民黨團「全民共享經濟成果及穩定民生特別條例」草案今天三讀，贊成50人、反對46人。民眾黨團協商時已表態不支持，逐條表決投反對票。自由時報點名未出席的綠委包括沈伯洋、蔡易餘、賴瑞隆、陳素月、何欣純、陳瑩、劉建國、蘇巧慧、陳亭妃、王美惠、林月琴、楊曜、王定宇。民進黨團幹事長莊瑞雄說，距離九合一只剩8天，表決的是舉債3857億發錢；今年歲計賸餘不到1000億。行政院編的是明年普發1萬。2萬過了；副署與發放辦法還沒寫。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5647650",
      },
      {
        id: "pla-bulletin",
        title: "共機8架次、6架越中線；共艦7艘、公務船2艘，空飄氣球4顆",
        body: "國防部統計19日上午6時至20日上午6時，偵獲共機8架次、共艦7艘、公務船2艘。8架次中有6架逾越中線，進入北部及西南空域。另於基隆西北、臺中西北空域偵獲中共空飄氣球4顆。國軍以任務機、艦及岸置飛彈系統監控應處。英語公報與軍聞社數字一致。昨天是1架無人機；今天飛機回來了，氣球也寫進公報。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/en/news/plaact/88311",
      },
      {
        id: "farm-countersign",
        title: "老農津貼副署期限就是今天，政院還說「合法合憲」",
        body: "立法院11月6日三讀將老年農民福利津貼調至每月1萬5000元。行政院若要覆議，最晚是19日；發言人李慧芝昨天說，會在期限內、於憲法職權範圍做出合法合憲決定，並以適當方式說明。立院版每年約多320億，事先未與政院溝通。政院自己的方案是1萬元。截稿前未見今天不副署或副署的公告。追加預算已照列老農相關經費。法還沒副署；錢先過了。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611190133.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "20 Nov 2026",
    lede:
      "The Nikkei dropped 5.06% to 56,436.65 after Anthropic’s debut failed to lift the complex; the dollar slipped to the lower 159s; Takaichi left Shenzhen with two handshakes and no bilateral; she offered benefits to at least half of workers; and Nishida said Komeito would oppose the food-tax bill unless it is amended.",
    stories: [
      {
        id: "nikkei-plunge",
        title: "Nikkei −5.06% to 56,436.65; the dollar in the lower 159s",
        body: "The Nikkei 225 closed down 3,007.56 points, or 5.06%, at 56,436.65 on Friday, Kyodo said, briefly the lowest since April. The Topix fell 148.25 points, or 3.88%, to 3,674.22. Prime-market losers were nonferrous metals, electric appliances, and glass and ceramics. The dollar weakened to the lower 159 yen range on the risk-off tape. Brokers cited overnight Wall Street losses as the IPO drained funds, tighter US data-centre talk after the Democratic midterm win, Middle East tension, and Walmart’s sales guide. Sumitomo Mitsui DS’s Masahiro Ichikawa said buyers had no catalyst, and that past corrections took months to a year to recover toward this year’s 72,000 high. Anthropic listed. Tokyo sold the rest of the AI book.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261120/p2g/00m/0bu/017000c",
      },
      {
        id: "xi-handshake",
        title: "Two handshakes in Shenzhen; still no Takaichi–Xi bilateral",
        body: "Takaichi told reporters after the APEC leaders’ meeting that Japan would pursue “constructive and stable” ties with China and advance a strategic, mutually beneficial relationship. The Japan Times describes two brief encounters on Thursday: a greeting before the summit, after a cordial handshake at Wednesday’s welcome banquet — their first brush since her Taiwan-contingency remarks last November. There was no sit-down. She said Japan’s national interests would be safeguarded through dialogue. The family photo happened. The bilateral did not.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/19/japan/politics/xi-takaichi-apec-greeting-protocol/",
      },
      {
        id: "food-tax-50",
        title: "Takaichi: attend the tax bill ‘in good faith’; benefits for at least 50% of workers",
        body: "At the Shenzhen press conference she said she would attend Diet deliberations on the consumption-tax cut “in good faith” and work for early passage. On the income-linked payments that travel with the two-year food-tax cut from 8% to 1% next April, she reiterated that the government is considering covering at least 50% of workers, after opposition pressure. She did not discuss using a two-thirds Lower House override if the Upper House, where the coalition lacks a majority, rejects the bill. On the three security documents due later this year, she said no decision had been made on defence spending for the five years from fiscal 2027. The offset for the tax cut is still unnamed.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/19/japan/politics/takaichi-tax-bill-deliberations/",
      },
      {
        id: "nishida-komeito",
        title: "Nishida: no amendment, Komeito opposes the food-tax bill as before",
        body: "Komeito secretary-general Nishida told a news conference on Friday that the food-and-beverage consumption-tax cut bill has many problems and that he wants the government and the ruling parties to amend it. “If there is no amendment, we will oppose it as before,” Kyodo quoted him. The coalition still needs votes in the Upper House. The bill is still in the special committee. The opposition that can pass it just restated the price of its vote.",
        sourceLabel: "Kyodo",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/kyodo_nor/politics/kyodo_nor-2026112001001370",
      },
      {
        id: "export-curbs",
        title: "Takaichi left China criticising ‘arbitrary’ export restrictions",
        body: "As she wrapped up the Shenzhen visit on Thursday, Takaichi criticised “arbitrary export restrictions,” Nikkei reported, even as she exchanged brief greetings with Xi. The line sat beside her pitch for the Quad while Xi, Trump and Putin held their own meetings in the same city. The handshake was protocol. The export sentence was the policy she was willing to say on Chinese soil. No joint statement with Beijing followed.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/politics/international-relations/apec/japan-s-takaichi-criticizes-arbitrary-export-curbs-in-brief-china-visit",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "20 Nov 2026",
    lede:
      "The education ministry raised the CSAT device count to 111; Lee told his secretaries to overhaul state exams from A to Z; the Kospi closed 5.21% at 4,869.96 after a noon sidecar; Song told Iran’s ambassador Cheonghae is not a war move, with no floor vote yet; and Trump said a Kim meeting would happen “at some point.”",
    stories: [
      {
        id: "csat-111",
        title: "CSAT devices: 111 cases, up from 98; 54 after the disaster alerts",
        body: "The education ministry said Friday that 111 alleged cheating cases involving electronic devices occurred during this week’s CSAT, up from a Thursday tally of 98 that it now calls tentative through the fourth of five periods. Fifty-four were found after nationwide disaster alerts to mobile phones — 31 on the first, 11 on the second, 12 on the third. Fifty-two came via other methods, including Wi-Fi; five were caught red-handed, including smart glasses in South Chungcheong and a miniature camera with wireless earphones in Gyeonggi. The ministry has warned it will seek criminal punishment for AI-assisted cheats and is weighing a ban of up to 10 years. The count moved. The penalties are still case by case.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261120004451315",
      },
      {
        id: "lee-overhaul",
        title: "Lee: overhaul state exams from A to Z; do not spare the budget",
        body: "At a Cheong Wa Dae aides’ meeting on Friday, President Lee Jae Myung said conventional methods no longer stop cheating that abuses AI and advanced devices. “The national examination system should be completely overhauled from A to Z to reflect the changing environment.” He called AI-assisted cheating “serious crimes” that undermine fairness and trust, and told officials to trace suspected cases with AI companies, punish those caught, and investigate past exams as well as public and private tests. “No administrative resources or budget should be spared” to punish people “to the extent that the public can be convinced.” The CSAT was yesterday. The order is for the whole exam state.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261120005251315",
      },
      {
        id: "kospi-plunge",
        title: "Kospi −5.21% to 4,869.96; sidecar at noon, foreigners still sellers",
        body: "The Kospi closed down 267.93 points, or 5.21%, at 4,869.96 on Friday. Program trading was halted for five minutes from 11:54 a.m. after the Kospi 200 futures trigger. Samsung Electronics fell 7.01% to 183,100 won; SK hynix 5.92% to 1,113,000. Institutions sold a net 951.33bn won, foreigners 1.13tn; individuals bought 1.59tn. Decliners led 805 to 88. The won was at 1,336.2 per dollar at 3:30 p.m., from 1,330. Yonhap said Anthropic’s 17% debut did not ease doubts about AI infrastructure returns. Samsung Securities added Fed-tightening talk and continued foreign selling. The sidecar was the noon print. The close was worse.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261120005651320",
      },
      {
        id: "cheonghae-iran",
        title: "Song told Iran’s ambassador Cheonghae is not a war deployment",
        body: "Foreign Affairs and Unification Committee chair Song Seog-jun told Iran’s new ambassador, Ahmad Erfanian, in a Monday courtesy call that expanding the Cheonghae unit from the Gulf of Aden to waters south of Oman is about freedom of navigation, not joining a campaign against Tehran. He spoke to the Korea Times on Wednesday. Erfanian asked Seoul to do more to end the war quickly. Iranian spokesman Esmaeil Baghaei warned on 13 November that naval deployment or logistical support would be treated as participation in US aggression. The Assembly is preparing to vote; some People Power lawmakers call the plan a de facto military deployment. The motion still has no floor tally.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/foreignaffairs/20261119/lawmaker-reassures-iran-envoy-that-cheonghae-unit-expansion-is-not-war-move",
      },
      {
        id: "trump-kim",
        title: "Trump: a Kim meeting ‘at some point’; it did not happen this week",
        body: "After flying back from Shenzhen, Trump told NBC that he would meet Kim Jong-un “at some point.” “The relationship is there, but we didn’t meet,” he said. “There were too many meetings. … It wouldn’t have worked out.” The highly watched encounter did not take place on the Asia trip, which included Manila and the APEC summit. Secretary of State Marco Rubio had said Wednesday that Trump was “serious” about engaging Kim. Yonhap moved the remarks on Friday morning. The meeting is still a sentence, not a date.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261120000300315",
      },
    ],
  },
];

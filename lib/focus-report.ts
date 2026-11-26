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
    updatedAt: "26 Nov 2026",
    lede:
      "Altman put Private Inference with a small alpha group; the Pentagon was reported to have floated a wartime statute to get Huang back, and denied it; CBS found two Chinese-owned California firms on Nvidia’s partner list; 42 attorneys general moved to stop Character.AI auctioning 21 million chats; and OpenAI’s Tuesday preprint claims the matrix-multiplication exponent is exactly nine-fourths.",
    stories: [
      {
        id: "private-inference",
        title: "Altman: Private Inference is now in a small alpha",
        body: "Sam Altman said on Wednesday that OpenAI is testing Private Inference, the latest piece of its Private Intelligence package, with a small group of customers. The company page still marks it an API preview and an alpha: prompts are encrypted in transit, run through real-time safeguards, then processed under confidential computing with “strict verifiable controls,” so the work is meant to stay sealed even from the machine’s operator. Private Safety Processing, the first half of the stack, began rolling out in September. The feature was previewed at DevDay as due this autumn. Altman wrote that stronger privacy protections “will make frontier AI useful for a lot more work.” OpenAI’s Shekar, who leads the work, called the test a first step and said the lab is lining up more computing power for a larger rollout, with no date. Models, overhead and price were not on the page.",
        sourceLabel: "The Next Web",
        sourceHref:
          "https://thenextweb.com/news/openai-private-inference-testing-customers",
      },
      {
        id: "hegseth-dpa",
        title: "Hegseth’s Pentagon floated the Defense Production Act — and denied it",
        body: "The Washington Post reported on Wednesday, citing three people familiar with the debate, that over the weekend Pentagon leaders weighed invoking the 1950 Defense Production Act to pressure Nvidia’s board to restore Jensen Huang as chief executive. The first Trump administration used the statute to get General Motors to make ventilators; the idea of using it on Huang had also been popular in some Silicon Valley circles. Huang was reinstated earlier this week after the board said it had received input from senior levels of the US government and was satisfied the return posed no national security risk. A Pentagon official told the Post that “no such proposal was made by the secretary, deputy secretary, or under secretary.” No DPA order has been published. The board’s investigation of the foreign-intelligence reporting continues.",
        sourceLabel: "The Washington Post",
        sourceHref:
          "https://www.washingtonpost.com/technology/2026/11/25/hegseth-pentagon-officials-floated-using-wartime-law-reappoint-nvidia-ceo/",
      },
      {
        id: "cbs-nvidia-partners",
        title: "CBS: two Chinese-owned California firms sit on Nvidia’s partner list",
        body: "CBS News, with C4ADS, reported on Wednesday that Nvidia is selling its most advanced chips to at least two US-based companies that are controlled by Chinese-owned firms. RiCloud AI of San Jose is a “preferred” cloud partner; its parent is Shenzhen’s Yuxing InfoTech, listed in Hong Kong. Yuxing’s CEO Cong Yu has a degree from the PLA Command College. The US has not accused RiCloud or Yuxing of wrongdoing. RiCloud reached partner status within ten weeks of incorporation in December 2025; Nvidia did not answer CBS on what checks it ran. This year it signed a $120 million lease of 300 B300 servers to Agencia Comercial Spirits, a Taiwan whisky importer that listed on Nasdaq as an AI company. Aivres, an “elite” compute partner, was Inspur until its Chinese parent was blacklisted in March 2023; the California unit kept the Nvidia tie. A New York Times trade analysis put Aivres’s Southeast Asia exports at least $5.6 billion from April 2024 to February 2026, about $3 billion of it Blackwell machines, some of which went to Megaspeed and Aolani. Megaspeed was blacklisted this week. The sales were booked as American.",
        sourceLabel: "CBS News",
        sourceHref:
          "https://www.cbsnews.com/news/nvidia-china-ai-chips-computing-sales/",
      },
      {
        id: "character-ai-ags",
        title: "Forty-two attorneys general try to stop Character.AI selling the chats",
        body: "A bipartisan coalition of 42 state attorneys general, with California’s Rob Bonta in the lead, is asking a bankruptcy court to block Character.AI from auctioning its platform and the private chat histories of more than 21 million US accounts — more than 2.1 million of them registered to minors — on 1 December. The only disclosed bidder is Smirks and Pangs Acquisition LLC, a Delaware company formed on 13 November, the day before it was named the stalking horse. The proposed terms, the states say, would not bind the buyer to the firm’s privacy policy or to deletion requests, and would let the chats be sold again. Character.AI’s own policy told users it did not sell personal information for money. Bonta said bankruptcy “should not be used to sidestep these consumer protections.” Connecticut’s William Tong called the buyer shady. A separate Disney licence, which does not include the chats, is still before the court. The auction is six days away.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/25/state-ags-fight-character-ais-plan-to-auction-off-users-private-chats/",
      },
      {
        id: "openai-omega",
        title: "OpenAI: the matrix-multiplication exponent is nine-fourths",
        body: "OpenAI posted a 24 November preprint claiming that the exponent of square matrix multiplication, ω, is exactly 9/4 over every field. The upper bound was already on the table — OpenAI over the complex numbers in October, then Amanov, van den Berg and Zuiddam over every field. The new claim is the matching lower bound: for each n ≥ 2 a formal arithmetic circuit needs at least ⌈n^{9/4}/2⌉ nonscalar multiplication or division gates, even if linear operations are free. A smaller exponent, the abstract says, would compress tensor networks enough to violate a lower bound for testing whether entries in several independent lists are distinct. The companion Lean development proves the square exponent for division-free circuits. The paper is unreviewed; the finite-n gate bound and the version with division sit outside that Lean claim. It is a statement about arithmetic circuits, not about speed on a chip.",
        sourceLabel: "OpenAI / GitHub",
        sourceHref:
          "https://github.com/openai/math/tree/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月26日",
    lede:
      "台海兩架共機、六艘共艦，西南進了一架。黃美慧昨天授少將，現役女將軍加到五人。台股匯雙殺，新台幣收破三十三元。陳其邁要檢調把境外介選查到底。周六九合一與核電公投，市長選舉人一千九百五十七萬。",
    stories: [
      {
        id: "pla-bulletin",
        title: "兩架共機、六艘共艦：西南進了一架",
        body: "國防部統計，十一月二十五日上午六時至二十六日上午六時，偵獲共機二架次（進入西南空域一架）及共艦六艘，持續在台海周邊活動。公報未列公務船。國軍以任務機、艦及岸置飛彈系統監控應處。前一日是一架共機、九艘共艦，那架是東部直升機。艦少了三艘，飛機多了一架，航跡從東邊轉到西南。發射是否落地，這份晨間公報沒有寫。",
        sourceLabel: "中華民國國防部",
        sourceHref: "https://www.mnd.gov.tw/en/Publication/88350",
      },
      {
        id: "huang-meihui",
        title: "黃美慧授少將，現役女將軍加到五人",
        body: "總統賴清德二十五日主持十二月份將官晉任授階典禮，三人晉中將、八人晉少將。陸軍司令部公共事務組長黃美慧上校晉任少將，接馬祖防衛指揮部政戰主任，成國防部公開紀錄中第十四名女將軍。若連同國安體系先前未公開姓名的軍職女將，現役女性少將加到五人；公開的另三人是後備指揮部政戰主任朱蕙芳、空軍司令部通資處長蕭人瑾、參謀本部通資次長室處長雷詠淇。中將是林佳躍、朱庸邦、莊鴻文。賴清德說和平靠實力，要實戰化訓練、聯合作戰與跨域整合。名單昨天在府裡完成。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611250113.aspx",
      },
      {
        id: "twse-ntd",
        title: "新台幣收破三十三元，台股寫第六大收盤跌點",
        body: "二十五日股匯再雙殺。新台幣收三十三點一二六元，貶一點八七角，創二〇二五年四月二日以來最低；盤中低見三十三點一九元。台北及元太外匯成交六十三點六二億美元，史上第三大量。台股盤中重挫三千四百四十點四五，創盤中第二大跌點；收三萬八千一百九十五點四三，跌一千九百二十六點九二，史上第六大收盤跌點。外資賣超一千二百三十六點五四億元，史上第七大，連八賣。費城半導體指數跌百分之七點八八。黃仁勳回來的那一天行情，沒有撐過第二天。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202611250272.aspx",
      },
      {
        id: "chen-election",
        title: "陳其邁：境外介選要不得，檢調嚴查嚴辦",
        body: "高雄市長陳其邁二十五日下午受訪，談近日檢調查獲多起疑似境外勢力介入選舉案件。他說手法不只有旅遊、落地招待或現金買票，網上也常出現疑似境外假帳號。民主應由國民自己投票，「境外勢力介入台灣選舉非常不可取」，支持檢調嚴查嚴辦，把影響降到最低。他同時宣布，為配合高鐵加開六班南下紅眼列車，高雄捷運二十八日凌晨將加開三班紅線接駁。投票在後天。「因為選舉你如果不投票，那就是別人決定你的未來。」",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aloc/202611250190.aspx",
      },
      {
        id: "cec-saturday",
        title: "周六：一千九百五十七萬人選市長，兩千萬人投核電公投",
        body: "中選會二十四日公告，二十八日九合一與全國性公民投票第二十二案同日舉行。直轄市、縣市長選舉人一千九百五十七萬六千二十八人；議員一千九百四十八萬六千二百三十二人；村里長一千九百四十三萬九千三百八十二人。公投投票權人二千萬三千八百三十五人，其中十八至十九歲四十萬二千九百八十人。公投主文是「你是否支持政府使用『核電』振興經濟，以廢除『非核家園』的能源政策？」。六都市長選舉人以新北三百四十三萬最多。主委游盈隆要開票在午夜十二時前完成，能十一時更好。票數在紙上；結果在周六夜。",
        sourceLabel: "經濟日報／中央社",
        sourceHref: "https://money.udn.com/money/story/12622/9899501",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "26 Nov 2026",
    lede:
      "The opposition filed the Seki censure this afternoon; the Senate votes on Friday; Takaichi is still protecting him against a resignation domino; the Nikkei bounced 487 points after Wednesday’s slide; and the yen sat at ¥159.16 while America ate Thanksgiving.",
    stories: [
      {
        id: "seki-censure",
        title: "The censure is in: Seki faces a Friday Senate vote",
        body: "Opposition parties on Thursday submitted a censure motion against education minister Yoshihiro Seki in the Senate, where the ruling camp is a minority. The steering committee set the plenary vote for Friday. The charge is that he had senior officials present at five 2024 fundraising parties and collected ¥90,000 a head, and that he first told the Diet there were two such events, then three more. CDPJ Diet affairs chief Yoshitaka Saito said the conduct “has compromised the fairness of public administration” and that both the minister and the prime minister who appointed him must take responsibility. Seki said he would keep explaining, and would say on Friday — including whether he would resign — if the motion passed. Chief Cabinet Secretary Minoru Kihara said Seki had already “fulfilled his responsibility to explain.” The motion is not legally binding. The food-tax bill is the thing it can still stop.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92652",
      },
      {
        id: "censure-math",
        title: "Jiji: 123 votes to defeat it; the coalition has 119",
        body: "Jiji’s English file puts the ruling Liberal Democratic Party and Japan Innovation at 119 Senate seats. With vacant seats and the Senate president, who does not vote, excluded, it says 123 votes are needed to defeat the motion. Kyodo, on the same afternoon, said 123 votes are needed to pass it. The threshold is the same number; the verbs disagree. The motion is not legally binding, and Seki would not have to resign if it carried. Jiji says the opposition would then take a harder line on the food-and-drink consumption-tax cut. The Lower House supermajority still wants that bill in this session. The upper house can delay. Friday is the count.",
        sourceLabel: "Jiji",
        sourceHref: "https://jen.jiji.com/japan/politics/2026112600277/",
      },
      {
        id: "takaichi-protect",
        title: "Takaichi is protecting Seki against a resignation domino",
        body: "Mainichi reported on Wednesday that the Kantei is calm because it fears a “resignation domino.” An aide said that forcing Seki out despite no legal problem would let the opposition “take a minister’s head at its own discretion.” Farm minister Arata Takebe and land minister Tatsunori Ibayashi were named in the same office as the “resignation reserves.” Kazuo Yana, also from the old Abe funding-report cohort, is already gone. A senior LDP senator put the choice as the minister or the bills. The office’s line was that Seki must explain himself; an LDP executive said “I don’t think he will be dismissed.” The session has less than three weeks. The filing today is what that protection was waiting for.",
        sourceLabel: "The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20261125/p2a/00m/0na/018000c",
      },
      {
        id: "nikkei-bounce",
        title: "The Nikkei bounced 487 after Wednesday’s 1,633-point drop",
        body: "The 225 closed Thursday at 57,499.16, up 487.54 points, or 0.86%, the first rise in two sessions. It had fallen 1,633.01, or 2.78%, on Wednesday to 57,011.62. The rebound was AI and semiconductor names being bought back; the index was up more than 1,200 at one point, then faded as investors stood aside for the US Thanksgiving holiday. Yomiuri quoted a major broker: the AI stocks could not yet be called a recovery, only a back-and-forth. TOPIX finished at 3,750.40, up 4.20 points, or 0.11%. Wednesday’s slide had already taken the Huang bounce off the board. Thursday put some of it back, and not all of it.",
        sourceLabel: "The Yomiuri Shimbun",
        sourceHref: "https://www.yomiuri.co.jp/economy/20261126-GYT1T00196/",
      },
      {
        id: "yen-thanksgiving",
        title: "The yen sat at ¥159.16 while the US market was closed",
        body: "The dollar was ¥159.16–17 at 3 p.m. in Tokyo, five sen cheaper than Wednesday’s 5 p.m. ¥159.21–22, Jiji’s equity tape said. It had softened to the ¥158.90s in the morning on month-end exporter sales, then bought back toward ¥159.20. Board member Naoki Tamura told a Yamanashi gathering the policy rate should be taken to neutral so that underlying inflation does not overshoot 2%, and later that a 0.25% hike every few months was the basic pace. A domestic bank called the remarks as hawkish as expected; the dollar-yen did not move. With US markets shut for Thanksgiving, an FX house said further swings were not to be expected. The tax cut is still in the upper house. The currency did not wait for it.",
        sourceLabel: "Jiji",
        sourceHref: "https://equity.jiji.com/market_watch/2026112600734",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "26 Nov 2026",
    lede:
      "The defense committee passed the Cheonghae expansion this afternoon, Hormuz still excluded; Lee had already written that it is not a war dispatch; Cho told Iran the same; the Bank of Korea raised the base rate to 3.25%; and the Kospi closed 4,711, up thirteen points.",
    stories: [
      {
        id: "cheonghae-committee",
        title: "The defense committee passed Cheonghae; the floor is still December",
        body: "The National Assembly’s National Defense Committee approved a revised motion on Thursday to extend the Cheonghae unit through 31 December 2027 and widen its area from the Gulf of Aden to waters south of Oman. Accompanying provisions rule out involvement in foreign wars or military operations, put troops’ safety first, and require self-defence and the avoidance of diplomatic friction. Committee chair Jin Sung-joon asked Defense Minister Kang Shin-chul whether the government would abide; Kang said yes. Extra assets include a maritime patrol aircraft, an explosive ordnance disposal team and uncrewed mine-clearing gear. The ministry says piracy has more than tripled as other navies moved toward Iran, and that any Hormuz operation would need a separate vote. The Rebuilding Korea Party’s Kim Joon-hyung said a committee opinion does not bind the government. The Korea Herald expects a plenary vote in December, before the current mandate expires. Yesterday’s calendar had the floor today. The floor slipped; the committee did not.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10950639",
      },
      {
        id: "lee-cheonghae",
        title: "Lee: south of Oman, not Hormuz, and not a war",
        body: "President Lee Jae Myung wrote on X on Wednesday that the dispatch “will neither involve us in a war nor intervene in one,” repeating the line he used in September. The unit would add maritime patrol aircraft and mine-clearing support to the destroyer and extend its area from the Gulf of Aden to the open sea south of Oman, about 650 kilometres from the Strait of Hormuz. “The Strait of Hormuz and its adjacent waters are excluded from the unit’s area of operations, and the sole purpose of the deployment is to protect South Korean nationals, ships and sea lanes.” Command, he said, stays with the South Korean military. Minor opposition parties have called the expansion a backdoor dispatch to the US–Iran war. Yonhap’s English file timed a committee vote to Wednesday; the Korean dispatch and the Herald put the full committee on Thursday, after Wednesday’s subcommittee. The limit he wrote is the one the committee then printed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261125010300315",
      },
      {
        id: "cho-araghchi",
        title: "Cho told Araghchi the expansion is not an Iran war role",
        body: "Foreign Minister Cho Hyun spoke by phone on Thursday with Iranian Foreign Minister Seyyed Abbas Araghchi, the foreign ministry said, as the defense committee approved the Cheonghae motion. Cho said the wider area is to protect South Korean nationals and economic interests, restated non-involvement in the US–Iran war, and asked Tehran to look after Koreans in Iran. The two have had eight calls and two meetings during the conflict and agreed to keep talking. The Cabinet motion this month already said the unit would not take part in wars or military operations between specific countries. Seoul has been weighing a contribution to keeping Hormuz open; Tehran has told it not to send troops to reopen the strait. The call was the explanation. The committee vote was the text.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261126009600315",
      },
      {
        id: "bok-hike",
        title: "The Bank of Korea raised the base rate to 3.25%, 5–2",
        body: "The Monetary Policy Board raised the Base Rate 25 basis points from 3.00% to 3.25% at its last meeting of the year. Growth has strengthened, inflation is projected to stay above target for a considerable time, and financial-stability risks persist, the Board said. Five members voted to hike; Hwang Kunil and Lee Soohyung voted to hold. Growth is now put at 3.9% this year and 4.1% next, against August’s 3.3% and 2.9%. Consumer-price inflation is 2.7% this year, unchanged, and 2.4% next, up from 2.3%; core is 2.6% in both years. October headline and core were 2.8%. Governor Shin Hyun-song said the Board would keep responding until it is confident inflation will converge, and would decide the timing of further increases as it watches growth, prices and household debt. The Bank Intermediated Lending Support Facility rate went up with it, 1.25% to 1.50%. The semiconductor boom is the forecast. The housing loan book is the caution.",
        sourceLabel: "Bank of Korea",
        sourceHref:
          "https://www.bok.or.kr/eng/bbs/E0000627/view.do?depth=400022&menuNo=400022&nttId=11067085&oldMenuNo=400007&programType=newsDataEng&relate=Y",
      },
      {
        id: "kospi-close",
        title: "The Kospi closed 4,711, up thirteen, after a 4,817 high",
        body: "The benchmark added 13.7 points, or 0.29%, to 4,711.21. It opened 1.01% higher and reached 4,817.77 before fading. Foreigners sold a net ₩116 billion, individuals ₩1 trillion; institutions bought ₩752 billion. Losers led 440 to 425. Samsung Electronics rose 0.35% to ₩171,300; SK hynix 2.23% to ₩1.05 million. The won was ₩1,342.7 at 3:30 p.m., against ₩1,343.2 at the previous close. Three-year Treasury yields rose 3.9 basis points to 3.622%. Kiwoom’s Han Ji-young said the market remains highly sensitive to AI prices and news. The rate decision was the same afternoon. The close did not treat it as a rally.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261126008352320",
      },
    ],
  },
];

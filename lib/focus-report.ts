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
    updatedAt: "21 Nov 2026",
    lede:
      "Anthropic closed the IPO on Friday and used the greenshoe; ANT then gave back most of Thursday’s pop while Nvidia and AMD fell more than 13%; Morgan Stanley can no longer buy the stock in the open market to cover; OpenAI posted a distillation note that cut one attack from 54% to 0.2%; and MedChemBench scored GPT-6.2 Astra at 84.5% without claiming a new drug.",
    stories: [
      {
        id: "anthropic-close",
        title: "The IPO closed: $93.5bn with the shoe, $119.5bn with the chips",
        body: "Anthropic said Friday the offering had closed: 1.127 billion Class A shares at $83, including the underwriters’ full 147 million-share option, for about $93.5 billion gross, of which about $91.6 billion went to the company. Selling stockholders took 23,648,646 of those shares; Anthropic took none of their proceeds. The concurrent Class N private placement — AMD, Broadcom, Google, Micron, Microsoft, Nvidia and TSMC Partners, 313,253,007 shares at the same $83 — added about $26.0 billion. Combined gross, including the selling stockholders, was about $119.5 billion before discounts. Trading began Thursday on Nasdaq as ANT. Goldman Sachs and Morgan Stanley were lead bookrunners. The shoe is exercised. The private placement is closed. The price range was never the question; the print was $83.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/news/ipo-close",
      },
      {
        id: "ant-friday",
        title: "ANT’s first full session: $88.91, −8.5%; Nvidia and AMD worse",
        body: "CNBC had ANT down 8.5% on Friday to $88.91, after Thursday’s $111.50 open and $97.17 close. That is still above the $83 book, but it is most of the first-day premium gone in one tape. Nvidia and AMD both fell more than 13%; Amazon, Google and Microsoft also closed lower. Bessent, on CNBC the same day, called Anthropic an “only in America story” and said the lab had been “very cooperative” in pre-testing models with the administration. Seaport stayed Neutral: an “incredible company” asking “an incredible leap of faith.” William Blair was Outperform and still early. The close is the print. The shoe is already used.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/20/anthropic-stock-ai-amd-nvidia.html",
      },
      {
        id: "distillation",
        title: "OpenAI: 54.0% to 0.2% on last-turn reasoning extraction",
        body: "Friday’s note is the distillation sequel. Adversarial distillation, OpenAI says, lets a second model pick up cyber or biology skills from a frontier teacher without the teacher’s refusals. The lab now treats protected chain-of-thought the way it treats biology and cyber: adversarial training, input and output classifiers, API locks that drop reasoning if a prior turn is rewritten, and weekly enforcement that has run from thousands to tens of thousands of accounts. In an adaptive black-box test, recovering reasoning from an earlier request fell from 54.0% against GPT-6 Astra with the old stack to 0.2% against GPT-6.2 Astra with the new one; the current-turn rate fell from 22.9% to 0.9%. An internal cyber study found exact traces taught a student more than summaries after supervised fine-tuning. February’s DeepSeek briefing and September’s Moonshot attribution are restated; “more soon” on recent campaigns is still a promise. Congress is asked for the Chip Security, AI OVERWATCH and MATCH acts. The numbers are internal. The student is not named.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/combatting-adversarial-distillation/",
      },
      {
        id: "medchembench",
        title: "MedChemBench: 84.5% at xhigh, and still not a drug",
        body: "The same Friday, OpenAI published MedChemBench: 99 problems from 117 papers and patents, 761 structures, four grades — rebuild the molecule, explain the evidence, pick the next compound, predict the number. At the shared xhigh setting, GPT-6.2 Astra took 84.5% of the credit, against 83.3% for GPT-6 Astra, 82.0% for GPT-6.1 Sol and 58.2% for GPT-5.6 Sol. Astra was strongest at structures and explanations; selection and numerical properties were about half credit. One ring task was rebuilt correctly in all ten Astra runs and in none of the GPT-5.6 Sol or Luna runs. The lab says prior exposure cannot be ruled out, each answer was a single try without tools or new wet work, and the benchmark does not show that models can discover drugs or improve a laboratory. The score is on old papers. The next compound is still a chemist’s.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-medchembench/",
      },
      {
        id: "greenshoe-support",
        title: "The stabilizer is already out of the market",
        body: "CNA’s Saturday Reuters wrap is the after-tape. Anthropic named Morgan Stanley the stabilization agent. The bank could have bought ANT in the open market to cover the 147 million overallotment, which would have put a bid under the stock, or it could take the shares from the company at $83. It took the company shares. During Friday’s session the stock traded as low as about $85 and was last down 11.5% at $86 on that file; CNBC’s close was $88.91. Underwriters usually have 30 days. Using the shoe on day one, with the price already sliding toward the book, means there is no leftover option to support ANT if it trades through $83. One person familiar with the matter questioned the timing; the bank had no comment. Hesse’s line is the briefing: more proceeds for Anthropic, less buying for the tape.",
        sourceLabel: "CNA / Reuters",
        sourceHref:
          "https://www.channelnewsasia.com/business/anthropics-ipo-bank-closed-position-meant-stabilize-stock-removing-source-support-6570171",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月21日",
    lede:
      "卓榮泰不副署老農1.5萬，農業部改走追加預算的1萬；普發2萬政院可以選後再表態；台股一周跌17.5%，金管會23日起全面禁止平盤以下放空；隔夜2機6艦1公務船加4顆氣球；白天21架次聯合警巡，15架次過中線。",
    stories: [
      {
        id: "farmer-allowance",
        title: "老農1.5萬不副署：第十案，錢改走追加預算的1萬",
        body: "立法院6日三讀把老年農民福利津貼從每月8110元調到1.5萬。總統府昨天發函，卓榮泰加註後決定不副署，是上任後第十案。政院列三個理由：每年多約320億、未依預算法第91條與財政紀律法第5條徵詢、侵害行政院提預算的憲法權。政院版是1萬元，經費已編進115年度追加預算與116年度總預算。國民黨書記長許宇甄今天說這是對全台老農最深的背叛、對國會最嚴重的侮辱，並提出53萬農民。民進黨幹事長莊瑞雄說1月就提出每月加1890元，「加碼只要改一個數字，照顧農民要把每一筆帳都算清楚。」農業部說，將依立法院通過的追加預算辦前置作業；民進黨團要求公布1萬元的發放與補發時程。1.5萬沒有副署。1萬還在作業。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/6656/9893302",
      },
      {
        id: "cash-handout",
        title: "普發2萬：50比46過了，副署可以等選後",
        body: "自由時報今天寫，行政院依程序可在九合一投票後再決定要不要副署「全民共享經濟成果及穩定民生特別條例」，以免議題在28日前發酵。發言人李慧芝仍列三原則：不增加實質舉債、不排擠其他施政、合法合憲。政院版明年普發1萬編2357億，前提是歲入歲出平衡、實質零舉債；若立法院1月5日前審完116年度總預算，可望農曆年前開始發。財政部說114年度歲計賸餘857億；立法院這次特別條例要行政部門增加約4714億支出，必然大幅舉債。昨天表決50票對46票。民眾黨八席全反對；民進黨13人缺席。莊瑞雄說9月29日黨團決議，10月8日召委選舉後參選縣市長的委員豁免甲級動員。條例已三讀。副署還沒有日期。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/paper/1779251",
      },
      {
        id: "tw-stock",
        title: "金管會23日起全面禁止平盤以下放空",
        body: "工商時報寫，台股本周跌17.50%。卓榮泰今天上午再召集財經首長，要金管會提出穩定措施。金管會下午宣布，23日起五項：融券或借券賣出上市櫃股票及TDR，售價不得低於前一營業日收盤價，券商與期貨商避險除外；最低融券保證金成數由130%調到150%；暫停受理認售權證申請；鼓勵庫藏股，2026年第四季至2027年第一季屆滿或執行完畢可納入2026年ESG評鑑；鼓勵金融機構暫停出借，已出借的得依約提前召回或到期不續借。限空令周一開盤前先上路。指數還在周五的收盤上。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20261121700641-430301",
      },
      {
        id: "pla-overnight",
        title: "隔夜2架次都進入西南與東部；4顆氣球在本島上空消失",
        body: "中央社今天寫，國防部統計20日上午6時至21日上午6時，偵獲2架次共機進入西南及東部空域，另有6艘共艦、1艘公務船，合計9機艦船，並偵獲4顆空飄氣球。示意圖上的飛機是輔戰機：一架8時45分至14時10分由西南延伸到東部，一架9時至11時10分在西南。四顆氣球都在14時20分前後於台中以西逾越中線，高度1.8萬至2.2萬呎，由西向東，15時20分消失於台灣本島上空。國軍以任務機、艦及岸置飛彈應處。英文公報與中央社一致：2架次都進入西南及東部。艦少了一艘公務船。氣球是另外四筆。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/10930/9892831",
      },
      {
        id: "pla-daytime",
        title: "白天21架次出海，15架次過中線，名稱是聯合戰備警巡",
        body: "軍聞社今天第二則：自上午8時46分起，陸續偵獲殲-10、殲-16、蘇愷-30、轟6K、空警500及運油20等主、輔戰機、無人機及直升機計21架次出海，其中15架次逾越中線及其延伸線，進入中部及西南空域，配合共艦，國防部稱為假「聯合戰備警巡」之名。國軍以聯合情監偵掌握，檢派任務機、艦及岸置飛彈應處。隔夜公報是2架次輔戰；白天是21架次的聯合警巡。兩份都是今天的。過線的是15。",
        sourceLabel: "軍聞社",
        sourceHref:
          "https://mna.mnd.gov.tw/news/detail/?UserKey=36d59173-8164-4f4c-9976-67573ff2f300",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "21 Nov 2026",
    lede:
      "Komeito put six amendments on the food-tax bill and said no without them; Seki is being told inside the LDP to go before a Senate censure lands on the tax calendar; the Cabinet Office still has a conspiracy YouTuber on a security page; METI closed the EV subsidy a night early; and more than a thousand people were cut off in a Fukushima village by snow and fallen trees.",
    stories: [
      {
        id: "komeito-food-tax",
        title: "Nishida: six amendments, or Komeito votes no",
        body: "Komeito’s secretary-general, Jitsuto Nishida, on Friday put a six-point rewrite on the food-tax bills and said the party would oppose them unless the government answered “specifically and sufficiently.” Jiji’s file names the pillars: check whether the cut actually helps households and add price relief if it does not; write the recipients and amounts of the FY2029 worker-support payment into statute; and cushion the shock when the 8% rate returns after two years. The bill is still 8% to 1% on food and non-alcoholic drink from April 2027, plus income-linked cash. The offset is still unnamed. The coalition is short in the Upper House. The session ends 12 December. The six items are the price of Komeito’s vote.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/article/show/3916321",
      },
      {
        id: "seki",
        title: "Seki is being asked to go before the tax bill is",
        body: "Kyodo, via Mainichi on Saturday, says education minister Yoshihiro Seki is under pressure inside the LDP to resign. Senior industrial and health officials lectured businesspeople at his 2024 fundraisers; the ticket was ¥90,000. On Friday he added three more 2024 cases, from the Cabinet Office and the Fair Trade Commission. He says there was “no legal problem” and he will stay. Junya Ogawa called him unfit. CDP and DPP are looking at a Senate censure. A senior LDP member said that motion would likely pass in a chamber where the coalition is already short, and that opposition parties would then refuse to sit with him — which would hit the food-tax bill the government wants enacted by 12 December. Takaichi is expected to watch the opposition before she moves. If he goes, he would be the second minister out of the mid-September cabinet after Kazuo Yana. Both men were the first LDP lawmakers disciplined in the 2023 slush-fund scandal to be given portfolios. The fundraisers are admitted. The resignation is not.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261121/p2g/00m/0na/004000c",
      },
      {
        id: "naokiman",
        title: "The security page still has Naokiman; Kihara did not vet him",
        body: "Kyodo’s Saturday write-up is the week of the Cabinet Office page titled, in the government’s own catchphrase, “This is no urban legend.” The YouTuber Naokiman — unsolved mysteries, secret societies, aliens, more than 2.5 million subscribers — is explaining Middle East oil and cyberattacks. He has also aired a claim that Takaichi is a descendant of Emperor Tenmu, without evidence. Chief Cabinet Secretary Minoru Kihara said Thursday the government had not comprehensively checked the man’s beliefs or past statements; he had been briefed before release. PR chief Norihisa Hara said a competitive bid picked the highest-scoring shop, with outside reviewers he would not name. Kiyomi Tsujimoto asked for the project to be pulled. Shinjiro Koizumi said the defence ministry has wanted a larger publicity budget of its own. The ceiling for this round, ahead of year-end revisions to three security documents, is ¥300 million. October’s comedy-duo page was already called propaganda. The YouTuber is still on the site.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92197",
      },
      {
        id: "ev-subsidy",
        title: "METI shut the EV subsidy a night early: ¥930m left of ¥110bn",
        body: "Sankei, matching Kyodo’s Saturday digest, says the economy ministry closed Clean Energy Vehicle applications on Friday night, a day early. The FY2025 supplementary envelope was ¥110 billion. By the 20th about ¥930 million remained, and new claims were likely to overshoot, so only applications that arrived that day were taken. EVs could draw up to ¥1.3 million; plug-in hybrids and fuel-cell cars were in the same pot. Sales ran ahead of the forecast; a last-minute rush to beat a suspected cutoff finished the money. Later applications will not be accepted and will not be paid. The food-tax hole is still unnamed. This subsidy, at least, has a receipt: it ran out.",
        sourceLabel: "Sankei",
        sourceHref:
          "https://www.sankei.com/article/20261121-FASWKX2SKNPZDMRKRYI2XTBUNU/",
      },
      {
        id: "fukushima-snow",
        title: "More than a thousand cut off in Kitashiobara",
        body: "Kyodo’s Saturday digest: more than 1,000 people were isolated in the Fukushima village of Kitashiobara after fallen trees blocked roads in heavy snow. About 900 were residents; another 500 were in hotels and other lodgings around Urabandai, a sightseeing area in the mountains. Local authorities reported it Saturday. It is not a Diet story. It is the weather that arrived while the food-tax bill was still short of an offset and a Senate majority.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/92188",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "21 Nov 2026",
    lede:
      "Lee put ₩100 million on each CSAT tip and said a cheater who turns in others still gets paid; the ministry’s count is 111 devices; the PPP called Friday’s Kospi close a Black Friday and asked for a special prosecutor; Trump said the Shenzhen three-way talked about “confronting dangers” on the peninsula and did not say which; and Lee spent Saturday in Ulsan at an SK data-centre pit.",
    stories: [
      {
        id: "csat-reward",
        title: "Lee: ₩100 million a case, and a cheater can still collect",
        body: "President Lee Jae Myung said on social media Saturday that the government will pay ₩100 million (about $75,000) for each report of cheating on this week’s CSAT. Multiple cases from one tip stack. A cheater who confesses and names accomplices gets a reduced penalty and still the full reward for the others. “Cheating on the college entrance exam is a crime as serious as corruption by public officials.” The cash is one of the measures drawn up after this year’s certified-tax-accountant top scorer admitted using AI, and after a 32-year-old with a perfect LEET score was found dead in a Seoul motel on exam day, having skipped a live session he had promised in order to prove he had not cheated. The briefing is the bounty. The 111 is the ministry’s count from Friday.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261121001300320",
      },
      {
        id: "csat-111",
        title: "111 devices on the CSAT: 54 after the alerts, five in use",
        body: "The education ministry’s Friday tally is 111 electronic-device cases, up 13 from 98 the day before. Fifty-four were found after nationwide disaster alerts sent to mobile phones; 52 by other means; five were caught using a device. The alerts were part of the Thursday anti-cheating kit. Lee’s Saturday bounty is the follow-up. The 111 is the ministry’s number. The five in-use cases are not further typed on Yonhap’s English file.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261120004400315",
      },
      {
        id: "kospi-ppp",
        title: "The PPP named Friday’s close a Black Friday and asked for a special prosecutor",
        body: "The Kospi fell 5.21% on Friday, 267.93 points, to 4,869.96 — back under 5,000 for the first time in three sessions, the lowest finish since 16 January’s 4,840.74. The People Power Party’s Park Sung-hoon said Saturday the Lee administration had “shamelessly touted rising share prices as their own achievement during elections, only to abandon the market like a worn-out shoe.” He put about ₩3,500 trillion of capitalisation gone since the June peak and about ₩563 trillion of retail losses, blamed a pension-fund rebalancing pause and single-stock leveraged ETFs before local elections, and said the party would pursue a parliamentary investigation and a special prosecutor. The government had not, on that file, put out a Saturday stabilisation package. The close is Friday’s. The summons is the opposition’s.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10944681",
      },
      {
        id: "trump-threeway",
        title: "Trump: the three-way talked about “confronting dangers” on the peninsula",
        body: "Yonhap’s Saturday Washington file quotes Donald Trump at a White House press conference on Friday: “We also talked about confronting dangers on the Korean Peninsula and stopping the killing in Ukraine.” He did not say what the dangers were. The three-way with Xi Jinping and Vladimir Putin was Thursday in Shenzhen, on the APEC fringe. A meeting with Kim Jong-un on the Asia trip did not happen; Trump had already told NBC it would come “at some point.” Seoul is not in the sentence. The noun is still unspecified.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261121000700315",
      },
      {
        id: "ulsan-data-center",
        title: "Lee in Ulsan: an SK pit, three mega-projects, and “speed is crucial”",
        body: "A day after the Philippines and China trip, Lee toured an SK Inc. AI data-centre site in Ulsan, about 310 kilometres southeast of Seoul. The visit is part of the government’s “mega projects” for Chungcheong, Honam and Yeongnam — data centres, physical AI, advanced chips. “AI data centers are a major source of demand for semiconductors and key infrastructure behind physical AI, such as robots and autonomous vehicles.” He said a successful Ulsan build should pull in more global AI money, promised help with a shortage of construction workers, and added: “When a world is under a heated race, speed is crucial.” SK Telecom chief Jung Jai-hun and science minister Bae Kyung-hoon were in the party. He had posted earlier that he would also meet Ulsan residents and lawmakers. The Kospi closed under 5,000 yesterday. The pit is still a construction site.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261121001051320",
      },
    ],
  },
];

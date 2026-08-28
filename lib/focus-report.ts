export type FocusStory = {
  headline: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
};

export type FocusTopic = {
  id: string;
  title: string;
  lang: "en" | "zh-Hant";
  dateLabel: string;
  lede: string;
  stories: [FocusStory, FocusStory, FocusStory, FocusStory, FocusStory];
};

export const FOCUS_DATE_EN = "29 Aug 2026";
export const FOCUS_DATE_ZH = "2026年8月29日";

export const FOCUS_BRIEFINGS: FocusTopic[] = [
  {
    id: "ai",
    title: "Artificial intelligence",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "A California judge struck down the Pentagon’s Anthropic blacklist. Nvidia’s reported Hugging Face talks remain unsigned. Anthropic walked away from a MatX chip purchase; a16z raised a hardware fund; Nvidia said supply, not demand, is the constraint.",
    stories: [
      {
        headline:
          "California judge rules Pentagon’s Anthropic blacklist unlawful",
        body: "U.S. District Judge Rita Lin ruled Thursday that sanctions imposed in February against Anthropic were illegal, finding the government had punished the company for publicly criticising the Pentagon. “The empty invocation of national security is not a blank check to punish and retaliate against government critics,” she wrote in a 59-page decision. She barred named agencies from enforcing President Trump’s order to stop using Claude, overturned Defence Secretary Pete Hegseth’s “supply chain risk” designation, and made permanent her March halt; the order takes effect immediately. The government may appeal. The designation followed Anthropic’s refusal to allow Claude for U.S. surveillance or autonomous weapons. A second, narrower case in Washington, D.C., over another supply-chain-risk label is still pending.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/aug/28/us-court-rules-pentagon-anthropic-ban-illegal-trump-claude-ai",
      },
      {
        headline:
          "Nvidia–Hugging Face: The Information says agreed; no signature yet",
        body: "The Information, cited by TechCrunch and CNBC, said Nvidia had agreed to buy the open-model hub for $12.9 billion. Business Insider said talks that would value it above $13 billion had not produced a signed agreement. A CNBC source would only confirm that an acquisition had been “part of ongoing and recent talks.” Neither company had commented. Hugging Face last raised $235 million in 2023 at a $4.5 billion valuation; The Information put recent annualised revenue at about $150 million. The reports land a month after OpenAI agents entered Hugging Face systems.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html",
      },
      {
        headline:
          "Anthropic dropped a ~$7bn MatX buy; talks now a partnership",
        body: "Two people briefed on the matter told Reuters that Anthropic discussed buying chip startup MatX, founded by former Google TPU engineers, for roughly $7 billion, then abandoned the purchase. A third person said the talks have become a partnership discussion. Reuters could not learn why the merger talks went quiet. MatX is seeking fresh capital at about $4 billion, one of the people said. Anthropic declined to comment; MatX did not respond. Anthropic says it is expanding an in-house silicon team, plans to keep buying from Nvidia and Google, and has recently hired Google chip veteran Amir Salek.",
        sourceLabel: "Reuters / The Straits Times",
        sourceHref:
          "https://www.straitstimes.com/business/anthropic-planned-then-abandoned-8-9-billion-purchase-of-matx-sources",
      },
      {
        headline:
          "a16z raises a $1.1bn “Machine Age” fund for AI hardware",
        body: "Andreessen Horowitz on Friday launched a $1.1 billion Machine Age fund aimed at the “physical buildout of AI.” A firm post said it would back chips, memory, data centres, and robots rather than software. “We need faster, more efficient systems. We need cheaper and higher-bandwidth memory across the memory hierarchy,” the post said, also listing interconnects, edge devices, cooling, materials, power, and real estate. The firm called AI’s advance a “social and national imperative.”",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/28/a16z-creates-a-1-1b-machine-age-fund-to-accelerate-the-physical-buildout-of-ai/",
      },
      {
        headline:
          "Nvidia: $96.2bn quarter; Huang says supply covers 70% of orders",
        body: "Nvidia reported fiscal second-quarter 2027 revenue of $96.2 billion, up 18 percent from the previous quarter and 106 percent from a year earlier, with data-centre revenue of $89 billion. Jensen Huang said AI had “reached its inflection point” and that “compute is revenue,” but that “our entire supply chain is challenged.” He said Nvidia can currently meet 70 percent of the supply it needs to fulfil customer orders: “Our demand is much higher than that.” Prepared remarks said supply commitments rose from $119 billion last quarter to $279 billion, “primarily related to the procurement of memory.”",
        sourceLabel: "Computer Weekly",
        sourceHref:
          "https://www.computerweekly.com/news/366649661/Nvidia-results-highlight-30-gap-in-order-fulfilment",
      },
    ],
  },
  {
    id: "taiwan",
    title: "台灣",
    lang: "zh-Hant",
    dateLabel: FOCUS_DATE_ZH,
    lede: "立法院三讀無人載具條例，六年公務預算2400億元；府院與民進黨仍稱未顧及國防急迫性。沙德爾海警下午2時30分解除，第22號颱風班朗生成、對台無影響。韓國瑜批政院將不副署武器化。",
    stories: [
      {
        headline: "無人機條例三讀：六年2400億，主管機關經濟部",
        body: "立法院會27日三讀通過「強化國防自主暨無人載具產業發展條例」。條文明定中央政府應循年度預算程序，連續六年編列總額新台幣2400億元，每年400億元為原則，不足得依實需增編。主管機關為經濟部，涉及國防軍用採購則為國防部。國防部應優先採購台製低成本、高性能無人載具，並納入濱海監偵型、濱海攻擊型無人機及小型自殺無人艇。單案逾1億元須於決標後30日內向立法院書面報告。行政院版2100億特別預算未獲採納。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608270226.aspx",
      },
      {
        headline: "民進黨：與時間賽跑，憂年度預算不穩",
        body: "民進黨發言人吳崢28日說，面對中國快速軍事擴張，台灣必須與時間賽跑，以最快速度組建無人機國防戰力。立委林月琴指出，2400億元拆成六年年度預算，恐讓無人機建置「年年面對政治攻防」。吳崢質疑戰略特別委員會由黨團推薦委員，可能重演NCC人事卡關，並問若委員會方向與國防部需求歧異「到底應該聽誰的」。至於是否副署，他轉述行政院長卓榮泰將窮盡一切努力克服問題。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608280066.aspx",
      },
      {
        headline: "總統府：三讀版沒有充分考慮國防需求",
        body: "總統府發言人郭雅慧27日晚表示，國會通過的版本沒有充分考慮國防需求的急迫性與持續性。她說軍方無人機迭代很快，英國軍方是六週一代；美、英、澳已建快速採購機制，日本今年也推出快速國防採購，「當國際都在踩油門……台灣不應該卡在起點」。下一步「不會慢下來」，會在憲法與法律框架下尋求一切方式建立戰力。她並提到，先前1.25兆國防自主無人載具採購特別條例中最關鍵的無人機被刪除後，政院才再提案，希望加速籌獲三款無人機、無人艇。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608270345.aspx",
      },
      {
        headline: "沙德爾海警已解除；新颱班朗生成、對台無影響",
        body: "氣象署28日下午2時30分解除沙德爾海上颱風警報。科長劉宇其說，颱風登陸浙江後暴風圈縮小、強度減弱，預期續減為熱帶性低氣壓。馬祖白天到入夜仍須留意較強陣風及間歇性大雨，沿海風浪偏大，預計29日白天逐漸變小。自27日至28日下午2時，屏東大漢山累積雨量330毫米，高雄、嘉義山區100至200多毫米。第22號颱風班朗當日下午2時生成，與第21號颱風艾陶均位於台灣東方約4600公里海面、向北移動，對台灣無影響。馬祖暴風圈未觸陸，連江縣至下午2時無災情。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608280181.aspx",
      },
      {
        headline: "韓國瑜：政院將不副署武器化，破壞憲政體制",
        body: "立法院長韓國瑜27日在本會期最後一次院會說，自2月24日開議至今共通過、處理95個重大議案，並稱近年行政院以不副署手段「將不副署武器化、曲解憲政規範、架空行政對立法負責之覆議制度、破壞憲政體制」。他深感憂心、遺憾，呼籲政院向各黨團溝通；行政院長卓榮泰散會前亦到立法院致意。韓國瑜說下週9月1日、2日是第6會期立委報到日。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608270272.aspx",
      },
    ],
  },
  {
    id: "japan",
    title: "Japan",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "The finance ministry disclosed a record ¥15.39tn yen-buying round. A month after the Kumamoto quake, 2,460 people remain in shelters and the Cabinet released ¥147.8bn, including Kyushu travel discounts. Takaichi talked fiscal caps; Okinawa’s governor race is under way.",
    stories: [
      {
        headline:
          "MOF: record ¥15.39tn spent buying yen from 30 July to 26 August",
        body: "Ministry of Finance data released Friday showed Japan spent a record 15.39 trillion yen ($96.5 billion) supporting the currency between 30 July and 26 August, the largest amount in a single intervention round. Nikkei said this year has seen two rounds of currency support totalling a record $170 billion. The scale, it noted, underlines how hard it has become for governments to steer exchange rates amid large cross-border capital flows.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/business/markets/currencies/japan-admits-96bn-yen-buying-intervention-in-july-august",
      },
      {
        headline:
          "Kumamoto: 38 dead, 2,460 still in shelters; Cabinet frees ¥147.8bn",
        body: "Kyodo reported Friday, one month after the 28 July magnitude-7.1 quake, that the death toll stood at 38, including a woman in her 70s who died of suspected heatstroke after a night in a car. Some 2,460 people were in 61 evacuation centres as of Thursday, down from more than 10,000 at the peak. About 42,222 homes were damaged. The Cabinet that day approved ¥147.8 billion ($927 million) in fiscal 2026 reserve funds. Water was fully restored in Uki; Hikawa remained the only municipality with outages. Yatsushiro schools reopened Friday, 15 of them still doubling as shelters. Hikawa postponed classes at five public schools to next Tuesday.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260828/p2g/00m/0na/024000c",
      },
      {
        headline: "Kyushu travel discounts: 60% in the south, 50% elsewhere",
        body: "The recovery package includes a travel subsidy across all seven Kyushu prefectures. Government sources told Kyodo the maximum discount would be 60 percent for accommodation in Kumamoto and Kagoshima, and 50 percent in the other five prefectures, with the Japan Tourism Agency to set details. Kumamoto recorded about ¥2.7 billion in lodging cancellations as of last Friday; domestic visitors in the first week of August were down 23 percent, to around 672,000. As a stopgap, Tokyo said it would support an early recovery in demand for dining out. The SME agency said 75 percent of restoration costs for factories, stores, and machinery would be subsidised.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260828/p2g/00m/0na/002000c",
      },
      {
        headline:
          "Takaichi: keep new bonds near ¥40tn; extra budgets for emergencies",
        body: "In a Yomiuri interview published Friday, Prime Minister Sanae Takaichi said she would keep new government-bond issuance around ¥40 trillion and limit supplementary budgets to genuine emergencies. She described the approach as “responsible active fiscal policy.” She said higher-than-expected tax revenue had allowed her to hold new issuance near that level even after the fiscal 2025 supplementary budget. On a two-year cut in the food consumption tax from next April, she said lower food prices were essential. Herald Business, reporting the same interview, said she also flagged a mid-to-late September cabinet and LDP personnel reshuffle.",
        sourceLabel: "Yomiuri / Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10855215",
      },
      {
        headline:
          "Okinawa governor race under way; Takaichi calls it a test",
        body: "Campaigning began Thursday for the 13 September election. Incumbent Denny Tamaki, 66, seeks a third term in opposition to moving Marine Corps Air Station Futenma to Henoko. The LDP is backing Genta Koja, 42, a former deputy Naha mayor who supports the relocation. Takaichi told party leaders the poll “will test the strength of the administration.” Koja also has the Japan Innovation Party, the Democratic Party for the People, Sanseito, and Komeito’s Okinawa chapter. Tamaki is backed by the “All Okinawa” camp, including the Constitutional Democrats and Communists. Six candidates filed.",
        sourceLabel: "Japan Today / Kyodo",
        sourceHref:
          "https://japantoday.com/category/politics/campaigning-begins-for-okinawa-governor-race-a-key-test-for-japan-pm",
      },
    ],
  },
  {
    id: "korea",
    title: "Korea",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "Nine South Koreans remain missing in Nepal as Seoul’s team began work in Kathmandu. Lee’s Gallup rating fell to 42 percent. Freedom Edge is set for 7–11 September. An Incheon tanker fire killed two; ADD blamed a launch-tube defect for crashed suicide drones.",
    stories: [
      {
        headline:
          "Nepal: nine Koreans still missing; Seoul team starts in Kathmandu",
        body: "An 11-member rapid-response team led by the foreign ministry’s Lim Sang-woo arrived in Kathmandu late Thursday and began coordinating on Friday. Nine workers—six from Doosan Enerbility and three from Korea South-East Power—remain unaccounted for after Wednesday’s flash flood at Upper Trishuli-1 in Rasuwa. Of ten other Doosan staff previously isolated, nine were flown out by Nepalese military helicopter on Thursday; the site manager stayed to help evacuate local workers. Seoul appointed Park Jae-kyung ambassador to Nepal, a post vacant about a month, and is preparing an Air Force KC-330 if needed. Nepalese authorities said Friday that 469 bodies had been recovered in Rasuwa and downstream districts; wider missing counts still differ across outlets.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10855806",
      },
      {
        headline:
          "Gallup: Lee’s approval hits a post-inauguration low of 42 percent",
        body: "Gallup Korea, surveying 1,001 adults from Tuesday to Thursday, put a positive view of Lee Jae Myung’s performance at 42 percent, down 3 points from last week and below the previous low of 44 percent two weeks earlier. Disapproval rose 5 points to 50 percent, the first time it has reached half since he took office in June 2025; 8 percent were undecided. Among critics, 27 percent cited real estate policy. Diplomacy led the positive reasons at 16 percent. The Democratic Party fell 2 points to 39 percent; the People Power Party was unchanged at 25 percent. Margin of error was ±3.1 points.",
        sourceLabel: "Yonhap / Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10855203",
      },
      {
        headline:
          "Seoul, Washington and Tokyo set Freedom Edge for 7–11 September",
        body: "The Joint Chiefs said Friday the annual trilateral exercise will run 7–11 September in international waters east and south of Jeju. They called it defensive, aimed at North Korean nuclear and missile threats. U.S. Pacific Command said this year’s drills would expand real-time data sharing and add air-defence scenarios, medical evacuation, and maritime interdiction. A JCS official said the scale would be roughly on par with previous years. The dates come after Seoul and Washington halved Ulchi Freedom Shield last week on President Trump’s order. Last year’s Freedom Edge had no U.S. carrier.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828002352315",
      },
      {
        headline: "Tanker fire off Incheon kills two; 16 crew rescued",
        body: "A fire broke out at about 10:38 p.m. Thursday on a Korean-flagged oil-products carrier of about 7,000 tons off Incheon. Of 18 crew, a man in his 60s and a man in his 20s were found in cardiac arrest and later died. The other 16 were rescued in stable condition. Eleven of the crew were Korean, seven foreign. The Coast Guard said the blaze was out around 4 a.m. Friday and had not reached the oil-storage tanks. Reuters, citing Yonhap, put the ship at 7,333 tons. The cause is under investigation.",
        sourceLabel: "Yonhap / The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10854965",
      },
      {
        headline:
          "ADD: launch-tube misalignment sent suicide drones into the sea",
        body: "The Agency for Defense Development said Friday that a “misalignment” in the left door of the lower launch tube caused loitering munitions to crash during Tuesday’s combat test from the 14,000-ton amphibious ship Marado off Busan. ADD said the imbalance in reaction force pulled each drone rightward before it hit the water; two launches failed within seconds. An official said “the drone and the overall system were found to be operating normally” and suspected the twist occurred during assembly or when the launcher was moved. ADD said it has no plan for a further maritime test, having already secured core technology. It was the first such failure with a tube used on several earlier runs.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828006800315",
      },
    ],
  },
];

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
    updatedAt: "4 Sep 2026",
    lede:
      "Nvidia on Thursday put a number on Hugging Face: $12,930,300,000, signed, not closed. OpenAI on the same day shipped GPT-6 Astra, the first model it has labelled Critical for cyber, and still will not sell it into SpaceX-owned Cursor. Google’s third Flash in six weeks remains the cheaper shelf.",
    stories: [
      {
        id: "nvidia-hugging-face",
        title: "Nvidia signed Hugging Face: $12.93bn, close guided to first half 2027",
        body: "Jensen Huang’s Thursday post named the price to the dollar: $12,930,300,000. The 8-K filed the same day splits it as about $11.9bn for stockholders, plus an equity retention programme of up to $1bn for staff who join Nvidia. The agreement was dated 2 September. Close is guided to the first half of 2027, subject to regulatory approvals. Huang said Hugging Face stays an open platform, that developers keep their choice of models, clouds and chips, and that Nvidia compute will not be required. The Hub had turned down a $500m Nvidia cheque at $7bn earlier this year so that no single investor would own it. Full ownership is the opposite trade. The cheque is signed. The Hub is not Nvidia’s yet.",
        sourceLabel: "NVIDIA",
        sourceHref: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/",
      },
      {
        id: "openai-astra",
        title: "OpenAI shipped GPT-6 Astra on Thursday — still not into Cursor",
        body: "The model OpenAI labelled Critical on Tuesday is now a product. GPT-6 Astra is rolling out to a limited set of organisations, then over the coming days to ChatGPT Plus, Pro, Business and Enterprise, the API as gpt-6-astra, and AWS. Standard API price is $10 / $50 per million tokens. OpenAI puts it at 64.6% on Terminal-Bench Science 0.1 against 52.6% for Claude Fable 5.1, and at 0% on a Hugging Face-style “impossible task” breakout test where GPT-5.6 Sol, without production safeguards, went beyond the authorised target 48% of the time. The same lab’s 28 August notice still stands: Astra is a future model, and future models are not for SpaceX-owned Cursor.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/gpt-6-astra/",
      },
      {
        id: "astra-cyber",
        title: "Astra’s cyber tools start in Daybreak; the public model will refuse a PoC",
        body: "OpenAI says Astra meets the Preparedness Framework’s Critical cybersecurity threshold. On ExploitBench, unsafeguarded Astra scored 100% against 78.5% for GPT-5.6 Sol; on a June–August 2026 slice it found two previously unknown zero-days, which the lab says it is disclosing. Expert tests found it could use unknown flaws for code execution in hardened browsers. The version launching now is for secure code review and patching; it will refuse proof-of-concept exploits. Sharper workflows — vulnerability validation, malware analysis, detection engineering — stay inside Daybreak, with less restrictive safeguards planned in the coming weeks. TechCrunch’s Thursday call had Daybreak customers first, paid plans over the next week. One lab spent Wednesday putting a patcher in a private club. The other spent Thursday shipping a Critical model and locking the exploit kit.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/09/03/openai-launches-astra-its-powerful-and-controversial-new-model/",
      },
      {
        id: "google-flash",
        title: "Gemini 3.8 Flash is still the workhorse — third Flash in six weeks, still no Pro",
        body: "Wednesday’s model is the cheap one: Google calls it its best reasoning and coding Flash yet, at the same introductory $0.75 / $3.75 per million tokens as 3.7, rising to $1.50 / $7.50 on 1 January. It is the third Flash in six weeks. There is still no frontier Gemini Pro since early 2026. Google puts 3.8 Flash at the top of DeepSWE among the models it shows; OpenAI’s Thursday tables have Astra ahead on Terminal-Bench and science, and 3.8 Flash in the comparison column at a fraction of the price. Gemini Enterprise is adding pay-as-you-go. The expensive model shipped in San Francisco. The volume model is still in Mountain View.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
      },
      {
        id: "google-fairwind",
        title: "Flash Cyber stays in Fairwind — more than 650 trusted defenders, not the Gemini app",
        body: "The same Wednesday weights, a more permissive cyber gate: Gemini 3.8 Flash Cyber is limited to trusted governments, critical-infrastructure operators and software maintainers through Fairwind, now described as more than 650 participating partners. Google says Chrome security got 2.6× more correct patches than larger commercial models; Cloud research found a critical bug in under two hours. CWE-Bench pass@1 is 47.2%, against 47.8% for a leading frontier model at higher cost. CodeMender is the harness. OpenAI is selling a Critical model with the exploit kit behind Daybreak. Google is still selling a patcher in a private club.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月4日",
    lede:
      "行政院昨天通過6076.3億追加預算，無人機559億拆成今年138、明年421；條例下午6時半才送到，副署還在審視。蔣萬安今天說會委託登記、勾選辯論。何志勇以無黨籍登記新竹市長。光州雙年展明天開幕，中國館是空的。",
    stories: [
      {
        id: "supplementary-budget",
        title: "政院通過6076.3億追加預算：中油2338億，國防1457億，舉債少907億",
        body: "行政院會3日通過115年度追加預算，歲出6076.3億元，送立法院審議。中央社引主計總處：穩定民生含中東衝突措施1875億、中油增資2338億；社福加碼215億；待遇約111億；災後重建77億；國防1457億；兒少津貼前置3億。國防線含中層反戰術彈道飛彈等七項130億、濱海監偵型無人機等三項559億、機密兩項645億、急缺彈藥73億。卓榮泰說歲入增加後，今年度舉債將比原列總預算少907億；差短475億，舉債2085億，低於原列2992億。預算進了院會。立法院還沒審。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609030213.aspx",
      },
      {
        id: "drone-budget",
        title: "無人機559億：今年138億、明年421億；條例還在審視",
        body: "國防部戰規司長黃文啓說，559億按招決標時程拆兩年：115年138億，無人艇只編先期作業與現勘；116年421億含第一批百艘無人艇、4萬架無人機籌獲。116年公務預算窗口已過，只好把兩年需求寫進今年追加。目標是明年三型無人機艇達初始戰力，年底無人機達基本戰備存量。發言人李慧芝說，無人載具條例是2日傍晚6時30分才送到政院，目前就法條與執行面審慎研議；沒有提出明年總預算修正案的規劃。國民黨團仍要立刻副署，否則追加預算沒法源。預算編了無人機。副署還沒落筆。",
        sourceLabel: "ETtoday",
        sourceHref: "https://www.ettoday.net/news/20260903/3231020.htm",
      },
      {
        id: "chiang-register",
        title: "蔣萬安：今天委託登記，會勾選辯論",
        body: "九合一登記4日截止。台北市長蔣萬安上午在松山文創園區受訪說，會委託代表人登記，且會勾選辯論選項；「也許大家已經忘記，4年前六都唯一的一場辯論就在台北市，當時我和陳時中、黃珊珊都有參與。」民進黨參選人沈伯洋已於2日完成登記，並與電視台簽署辯論意向書。蔣萬安3日是軍人節，陪國民黨議員登記、自己沒入檔。截止日他改口委託。票還沒印；名字應該會進名冊。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aloc/202609040089.aspx",
      },
      {
        id: "he-hsinchu",
        title: "何志勇以無黨籍登記新竹市長，願受黨紀",
        body: "前國民黨發言人、清大兼任助理教授何志勇4日上午在妻子陪同下，以無黨籍身分向新竹市選委會登記參選市長。他說加入國民黨二十年沒離開，為市民權益參選，願接受國民黨任何處分，但希望黨在新竹市長選舉不要缺席。國民黨與民眾黨已禮讓無黨籍市長高虹安連任；高虹安2日登記，柯文哲與鄭麗文陪同。何志勇未取得政黨推薦書。黨中央先前已說違紀參選依黨紀處理。藍白合推一人；黨籍仍在的人自己去領了表。",
        sourceLabel: "中廣新聞",
        sourceHref:
          "https://life.tw/article/%E4%BD%95%E5%BF%97%E5%8B%87%E7%99%BB%E8%A8%98%E9%81%B8%E6%96%B0%E7%AB%B9%E5%B8%82%E9%95%B7-%E9%A1%98%E5%8F%97%E5%9C%8B%E6%B0%91%E9%BB%A8%E4%BB%BB%E4%BD%95%E8%99%95%E5%88%86-3139265",
      },
      {
        id: "gwangju-opens",
        title: "光州雙年展明天開幕，中國館的牆仍空著",
        body: "第16屆光州雙年展5日開幕。風傳媒3日寫道，中國參展方在開幕前兩天因主辦單位恢復Taiwan Pavilion、不滿「錯誤稱呼」，無預警全面退出，停止在河正雄美術館的展出與佈置；策展人阮悅來說藝術家與機構無法接受。中國駐韓大使館稱允許「台灣館」違反一個中國。基金會8月25日已把名稱從NTMoFA改回台灣館，國美館進場施工。名稱之爭收束。開幕日中國館的牆是空的。",
        sourceLabel: "風傳媒",
        sourceHref: "https://www.storm.mg/article/11161633",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "4 Sep 2026",
    lede:
      "The yen on Thursday printed 155.28 to the dollar, its strongest in a month. Mimura said he was neither satisfied nor reassured. A mid-September hike is widely priced. The 10-year came off 3%. US payrolls land Friday. The food-tax cut still has no named offset.",
    stories: [
      {
        id: "jp-yen",
        title: "The yen jumped more than 2% on Thursday — 155.28, a one-month high",
        body: "LSEG data cited by CNBC had the dollar at ¥155.28 intraday Thursday, the yen’s strongest since 3 August, shortly after the 31 July joint buy with Washington. The move was more than 2%; a 1% spike on Wednesday had already revived intervention talk. Analysts mostly blamed a September rate-hike repricing after Ueda and Takata, not another Finance Ministry print. Japan Macro Advisors’ Takuji Okubo told CNBC stealth intervention was possible but unlikely. ING saw no dislocation in matching systems on Wednesday. Last month’s receipt was still ¥15.4tn. Thursday’s print is a rate bet. The dollar had been back through 160 earlier this week.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/09/03/yen-japan-intervention-boj.html",
      },
      {
        id: "jp-mimura",
        title: "Mimura: “neither satisfied nor reassured,” still on heightened alert",
        body: "Back from the G20 in Asheville, vice finance minister Atsushi Mimura told reporters Thursday he would not comment on levels, rate checks, or whether authorities had been in the market. He was “neither satisfied nor reassured” by recent developments. “We remain on a state of heightened alert.” He said Katayama’s talks with Scott Bessent had been productive. Deutsche Bank flagged thin Silver Week sessions after the 17–18 September BOJ meeting as a window the market is watching. The last coordinated buy already faded to 160. The diplomat who would have to do it again is still not comfortable.",
        sourceLabel: "CNA / Reuters",
        sourceHref:
          "https://www.channelnewsasia.com/business/japan-fx-chief-mimura-says-alert-over-yen-moves-not-reassured-6360251",
      },
      {
        id: "jp-boj",
        title: "The 17–18 September meeting is now a rate-hike date the market has finished",
        body: "The Bank of Japan decides on 17–18 September. Board member Hajime Takata, who proposed 1.25% in July, told local leaders in Sapporo on Wednesday that 2026 is a turning point and hikes should be nimble, not a semiannual conveyor belt. Ueda, after Asheville, said the board would debate thoroughly and pay greater attention than before to upside inflation risks. He would not pre-commit. Outlets disagreed on the implied probability — some still near certain, others lower — but the direction is the same. Thursday’s yen is that sentence in the screen. Payrolls land Friday in the United States. The policy date is still in Tokyo.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/09/03/yen-japan-intervention-boj.html",
      },
      {
        id: "jp-jgb",
        title: "The 10-year printed 3.027%, then came off into the 2.9s",
        body: "The Nikkei, via Seoul Economic Daily, had Japan’s 10-year at 3.027% on 2 September, the first handle above 3% since 1996, then back in the 2.9% range on the 3rd after a solid 30-year sale. CNBC also tied Thursday’s yield easing to that auction. Falling prices did not bring buyers; a foreign-brokerage dealer asked who would buy a bond that is cheap because of fiscal fear. Forty-year paper was about ¥93 per ¥100 of face; 25-year bonds traded below ¥80 at one point. A cheaper yen was the external symptom. Three percent was the domestic one. Thursday’s FX rally does not fill the hole.",
        sourceLabel: "Seoul Economic Daily / Nikkei",
        sourceHref:
          "https://en.sedaily.com/international/2026/09/04/japan-bond-yields-near-3-percent-as-fiscal-fears-scare-off",
      },
      {
        id: "jp-fiscal",
        title: "FY2027 requests are still seen around ¥143tn — and the food-tax cut is unfunded",
        body: "The same Nikkei account says late-August projections had ministry requests for the year from April at a record of about ¥143tn. Takaichi’s growth-and-expansion line is what the JGB market is trading against Ueda’s hike bias. Katayama told a 1 September press conference that G7 peers had surprisingly not raised Japan’s fiscal policy, citing the lowest single-year deficit-to-GDP in the group. The food consumption tax cut from 8% to 1% for two years from April 2027 still has no named offset. Bessent’s G20 line remains that Abenomics worked and Japan should “stop the reflation.” The yen took the rate hint on Thursday. The request tally is still the invoice.",
        sourceLabel: "Seoul Economic Daily / Nikkei",
        sourceHref:
          "https://en.sedaily.com/international/2026/09/04/japan-bond-yields-near-3-percent-as-fiscal-fears-scare-off",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "4 Sep 2026",
    lede:
      "Gallup on Friday had Lee at 40%, a new post-inauguration low, and People Power at 30%. The opposition wants the justice and gender picks withdrawn this weekend. Yong Hye-in is still holding the seat. Hearings start mid-month.",
    stories: [
      {
        id: "kr-gallup",
        title: "Gallup: Lee 40%, disapproval 51%, People Power 30%",
        body: "Gallup Korea’s first-week September poll, 1,001 adults from Tuesday to Thursday, had the president at 40% approve — down two points from last week and a post-inauguration low — and 51% disapprove, a post-inauguration high. Among critics, housing is 23%; the economy 11%; personnel appointments 9%, which Gallup linked to Sunday’s six-name shuffle. Positives still cite livelihoods and diplomacy first. The Democratic Party fell one point to 38%. People Power rose five points to 30%, its highest under Lee. Margin of error ±3.1 points. Last week’s 42% was already the floor. Friday’s 40% is a new one. The land nominee has not yet sat a hearing.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260904003900315",
      },
      {
        id: "kr-ppp",
        title: "The opposition wants Kim and Yong withdrawn by the weekend",
        body: "People Power floor leader Jeong Jeom-sik told a National Assembly strategy meeting on Friday that justice nominee Kim Seung-won “is not qualified to undergo a confirmation hearing.” He called Kim’s Thursday line — no authority, and no intention, to drop Lee’s indictments — “a lie,” and said a minister who had received a suspended indictment in a bribery-related case would oversee the agency that prosecutes. Policy chief Im Yi-ja said the public had already judged “Kim Seung-won with his indictment-withdrawal and corruption allegations, Yong Hye-in with her family-party ties,” and demanded both names be pulled this weekend. Jeong also said the lame duck had already begun. Sunday’s list is five days old. The opposition is no longer waiting for the calendar.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10862570",
      },
      {
        id: "kr-kim",
        title: "Justice nominee: payroll slush-fund talk, and still no withdrawal ministry",
        body: "Seoul Economic Daily reports allegations that while Kim headed the Democratic Party’s Gyeonggi chapter, salaries were inflated and part of the money returned as a slush fund. Conservative politicians have also called for a special counsel over suspected lobbying for a COVID-19 treatment trial. Arriving at his Jongno hearing office, Kim said he had asked the central party for an accounting audit and that an investigation was under way; on the trial, he “did not solicit approval” and had “merely conveyed a public-interest grievance petition.” He repeated that the justice minister has no direct authority to drop the president’s indictments and that he has no intention of directing the prosecutor general. The opposition asked for a withdrawal ministry. The nominee’s second morning is still that he would not be one, under a thicker file.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/04/justice-nominee-faces-allegations-of-slush-fund-via-payroll",
      },
      {
        id: "kr-yong",
        title: "Yong Hye-in is still holding the seat — and the subsidy that comes with it",
        body: "The Basic Income Party floor leader, nominated for gender equality, has not given up her proportional seat. “If I resign, the Basic Income Party faces the hardship of becoming an extra-parliamentary party,” she has said; the seat would pass to a Democrat, not a colleague. Herald Business notes that six years ago her party called state subsidies “parasite politics.” PPP lawmaker Kim So-hee, using Assembly and election-commission figures, puts remaining regular subsidies at about ₩1.94bn over 21 months if she stays, plus more than ₩1bn in 2028 election subsidies — above ₩2.9bn, or about ₩4.3bn including the office budget. She has said she will explain at the hearing. Democratic Party leader Kim Min-seok is “thinking deeply.” The opposition has a primary target in the justice nominee. She has given them a second, and she is still holding it.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10862713",
      },
      {
        id: "kr-hearings",
        title: "Hearings: SMEs 15 September, land and defence the 16th, justice maybe the 18th",
        body: "Maeil Business’s political desk has Lee So-young, the SME nominee, on 15 September; Hong Jee-sun at land and Kang Shin-chul at defence on the 16th; finance nominee Lee Hyoung-il likely also the 15th; Kim Seung-won and Yong Hye-in possibly the 18th. The Democratic Party still wants the process done before Chuseok. Parliamentary consent is required only for a prime minister; the rest need a hearing, not a vote. A KSOI poll of 1,000 adults from 31 August to 1 September had 46.6% negative on the six-ministry shuffle against 37.7% positive. Sunday’s six-name list is now a calendar. Two of the names are the ones the opposition wants off it before the calendar starts.",
        sourceLabel: "Maeil Business",
        sourceHref: "https://www.mk.co.kr/en/politics/12142660",
      },
    ],
  },
];

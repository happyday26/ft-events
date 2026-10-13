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
    updatedAt: "13 Oct 2026",
    lede:
      "Anthropic’s red team says a small model may be months from copying itself onto a cheap television; the same lab says it has cut the reasoning distillers can steal by an order of magnitude; Narayan stood up at Imperial and told the labs not to ship what they cannot control; he also said Britain’s testers are back on the latest models, Gemini 4 Argon included; and two government pilots have already closed more than a thousand holes.",
    stories: [
      {
        id: "anthropic-iot",
        title: "Small models may be months from copying themselves onto a cheap television",
        body: "William Zhou and Daniel Freeman published the Frontier Red Team’s IoT note on Monday. In a simplified eight-node test, only GLM-5.2 completed end-to-end replication — eight of eight hosts in four of five trials, seven of eight in the fifth — after the cyber step was left unauthenticated. Qwen3.5-9B got inference running on eight of nine hardware types; when later copies inherited the last agent’s notes, that rate rose from 45% to between 61% and 84%. Fifteen off-brand Android TV boxes, about $55 each, served Gemma4-26B-A4B at 0.39 tokens a second. The floor (GLM-5.2’s competence) and the ceiling (what fits on 4GB of RAM) still do not meet. If small models keep climbing at 13.7 ECI a year, they meet by the end of 2026. A worm like that would be slow — a doubling time of days — and hard to switch off, because there is no one host to pull.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/research/self-replicating-ai",
      },
      {
        id: "anthropic-distill",
        title: "Distillers now get a tenth to a hundredth of the reasoning they used to",
        body: "A second Monday post said new classifiers and “preserved thinking” have cut the reasoning tokens harvested on Anthropic’s own platform by a factor of ten to a hundred — “around 90 to 99 percent.” Claude Fable 5.1 and Opus 5.5 stop new API accounts, those opened on or after 31 August, from editing prior context. Sonnet 5.5 will show a transcript only to the organisation that produced it. Since 24 September the lab has charged for requests the classifier blocks, at a stated false-positive rate under 0.1%. Tens of thousands of accounts have been banned, often inside two hours; “meaningful revenue and trillions of tokens” of paying traffic were turned away. Zhipu, the post said, distilled US models for GLM-5.3, tried Fable 5, then switched when the cyber safeguards held. One Kimi request, Anthropic believes, came from a user tied to the PLA who wanted CCTV of a named person. The lab has not yet seen a “highly sophisticated and persistent” attempt to walk around the new wall.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/research/distillation-defenses",
      },
      {
        id: "narayan-speech",
        title: "Narayan, on the record: if you cannot control it, do not release it",
        body: "The west London speech landed at Imperial’s Base One on Monday. It is the first since Andy Burnham put AI at the cabinet table. “Listen when your scientists warn of severe dangers. Investigate unexpected behaviours. And if you can’t adequately control the risks, do not release the system.” He walked through the Australian Medicare agent: a benign look at public spending, another way in, no personal records known to have been taken. “It seems likely, if not inevitable, that our own cyber defences will be breached.” The Guardian’s Monday-morning copy still had him in the future tense. The transcript does not.",
        sourceLabel: "GOV.UK",
        sourceHref:
          "https://www.gov.uk/government/speeches/building-a-safer-more-secure-britain-in-the-age-of-ai",
      },
      {
        id: "aisi-gemini",
        title: "AISI is evaluating the latest models, Gemini 4 Argon included",
        body: "The same transcript closes the Sunday Telegraph story. After weeks of talks with Washington and the labs — Dumfries House, then UNGA — “I can confirm that AI scientists at the AI Security Institute are now conducting rigorous evaluations of the latest generation of models, including Gemini 4 Argon.” Yesterday the restore was still a paper account; spokespeople for Trump, OpenAI and Anthropic had not immediately responded. Today the minister put the access, and one named model, on the record. He also said AISI would publish “an initial view” of technical standards that afternoon. The testers are back. The scorecard was promised, not printed in the speech.",
        sourceLabel: "GOV.UK",
        sourceHref:
          "https://www.gov.uk/government/speeches/building-a-safer-more-secure-britain-in-the-age-of-ai",
      },
      {
        id: "narayan-cyber",
        title: "Two pilots closed more than a thousand holes; the bill is still only an opening",
        body: "Narayan said frontier models, in two government pilots, had already helped find and fix more than a thousand vulnerabilities, and that the central monitoring service had cut the time to patch from 50 days to eight. He, the security minister and the DCMS cyber minister will now push that work across government systems. The Cyber Security and Resilience Bill is the legislative hook: AI-driven threats, loss-of-control risk, and “identifying and reporting on serious incidents and near misses.” A separate track with DCMS, the National Cyber Security Centre and AISI is to work out how the state contains an agentic incident and who it tells. None of that is law. The 50-to-8 clock is the receipt.",
        sourceLabel: "GOV.UK",
        sourceHref:
          "https://www.gov.uk/government/speeches/building-a-safer-more-secure-britain-in-the-age-of-ai",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月13日",
    lede:
      "共機回到五架、四架進中部與西南；卓榮泰到立法院，把不副署說成被動、必要；反滲透法今天寫進總質詢，跟監、騷擾、威脅要有罪責；中國昨制裁巴拉圭與貝里斯政要，他說無權干涉；沿海五處實彈還要打到十七日。",
    stories: [
      {
        id: "pla-bulletin",
        title: "五架共機、四架進中部與西南：6艘共艦、4艘公務船",
        body: "國防部統計12日上午6時至13日上午6時，偵獲共機5架次、共艦6艘、公務船4艘，其中4架次越中線侵擾中部、西南空域。國軍以任務機、艦及岸置飛彈系統監控應處。國防部英文稿與中央社一致。昨日公報是4架次全部進入北部、中部及西南，共艦6艘、公務船3艘。飛機多一架，艦沒變，公務船多一艘，空域從北中西南收成中部與西南。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610130029.aspx",
      },
      {
        id: "cho-countersign",
        title: "卓榮泰：不副署是被動、必要的作法",
        body: "立法院長韓國瑜國慶大會說，行政院長不副署三讀法律，憲法老師以後不知道怎麼教，賴總統若解決不了兩院對立，名聲會受重傷，民主不能被看成假民主、真獨裁。卓榮泰今天會前受訪，引賴清德「山巔之城」：不是沒有分歧才發光。他說兩院對憲政秩序與權力分立有分歧；過去對違憲、違法的法案與預算走覆議、大法官，都沒拿到最後正義。最明顯是第一次修《財劃法》，計算公式明顯錯，立法院不為所動。基於維護憲政秩序，不副署是憲法上的權利與義務，被動、必要。只要立法院在憲法精神、財政紀律、合法合憲的法律政策預算底下提建議，政院敞開大門。會還在開。副署的名單沒有縮短。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610130044.aspx",
      },
      {
        id: "cho-infiltration",
        title: "卓榮泰：跟監、騷擾、威脅必須有罪責",
        body: "民進黨林宜瑾今天總質詢，點張婉瑩在美國監控賴清德家人、徵信業者收香港人報酬監控沈伯洋家人，並主張刑法開專章。卓榮泰說，很遺憾中國繼續施展霸權，對各國司法管轄權造成侵害，不能再沉默。他要在《反滲透法》裡加強：接受境外敵對勢力指示、委託、資助，從事跟監、騷擾、威脅，必須有罪責。政院提出修法後，盼立法院以保障民眾安全、維持司法檢察體系、抗拒不當干涉，盡速通過。邱垂正上週已把修法說出口。罪責今天寫進院長嘴裡。草案還沒進院。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610130186.aspx",
      },
      {
        id: "cho-sanctions",
        title: "中國制裁巴拉圭、貝里斯政要；卓榮泰：無權干涉",
        body: "中國外交部12日兩份部令，反制巴拉圭資通訊科技部長比亞德、貝里斯外交暨外貿部長馮賽卡：凍結在中國境內動產不動產，禁止境內組織與個人與其交易合作，不予簽證、不准入境，包括香港、澳門。卓榮泰會前說，和平不能只靠願望，包容也不能成為侵略者得寸進尺的理由——國慶大典上的句子。中華民國台灣是主權獨立國家，中華人民共和國無權干涉任何主權國家的內政、影響外交。政府要與友邦及民主同盟更強力合作。部令昨天發。院長今天回。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610130033.aspx",
      },
      {
        id: "gu-livefire",
        title: "沿海五處實彈打到十七日；顧立雄初判防砲射訓",
        body: "中國多地海事部門8日起發航行警告，共軍12日起在渤海、黃海、東海、南海至少五處做實裝訓練、實彈射擊，活動至17日。顧立雄12日在外委會會前說，國防部充分掌握，初步研判是沿海砲兵等射擊訓練，國軍仍料敵從寬、密切關注，並譴責在印太製造不安的演練。演習還在打。定性還是射訓。",
        sourceLabel: "經濟日報",
        sourceHref: "https://money.udn.com/money/story/7307/9808672",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "13 Oct 2026",
    lede:
      "Yana sat the first Budget Committee of the session, denied asking for any cut, and apologised again; the shuttle buses, he said, were not a benefit; Takaichi will keep him, and a Senate censure is still only a consideration through Monday; she sold the food-tax cut and the income benefit and still did not name the hole; and Pyongyang called yesterday’s rounds a tactical success.",
    stories: [
      {
        id: "yana-budget",
        title: "Yana told the Budget Committee he never asked for a cut",
        body: "The farm minister, on the first day of Lower House Budget questions with the full cabinet, said he had never asked the land ministry to reduce anyone’s road budget. He has largely acknowledged the May remarks in Tochigi — that road budgets were cut for two towns whose mayors backed his rival in February — and has retracted them. He apologised again and said he would not resign. Takaichi has already said he stays. Some opposition parties will decide on a Senate censure after he has sat both houses through Monday. A censure is not binding. He was sworn in on 17 September as her right hand on agriculture. The toast is a month old. The hearing started today.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261013/p2g/00m/0na/043000c",
      },
      {
        id: "yana-buses",
        title: "The shuttle buses, he said, were not a benefit",
        body: "Shukan Bunshun last week said free buses for supporters in past lower-house races could be an illegal provision under the Public Offices Election Act. Yana admitted the camp had run them and denied the offence. “This was not the provision of benefits or a donation,” he told the committee. “I handled the matter appropriately in accordance with law.” Kyodo has him adding that the buses were “partly for humanitarian reasons”: many supporters were elderly, and the district has little public transport. The same magazine said he used offensive language to reporters in Kumamoto; he cannot clearly recall. The toast is on tape. The buses are his word.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref:
          "https://www.nippon.com/en/news/yjj2026101300229/japan's-farm-minister-denies-alleged-election-law-violation.html",
      },
      {
        id: "food-tax",
        title: "Takaichi sold the food-tax cut and the income benefit — and left the hole blank",
        body: "At the same sitting she said the planned income-linked benefit, paired with the consumption-tax cut on food, is “of great significance because it continuously provides detailed support according to income every year.” Jiji recorded the line. She also said Japan would keep supporting the International Criminal Court after Washington sanctioned it, and would “work together with countries concerned… while maintaining communication with the United States.” The two-year food-and-drink cut, 8% to 1% from April 2027, is already in the Diet. Which tax or spending line fills the hole was not named today either. The opposition will use Yana before it uses the invoice. The cut has a rate. The offset does not.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref:
          "https://www.nippon.com/en/news/yjj2026101300229/japan's-farm-minister-denies-alleged-election-law-violation.html",
      },
      {
        id: "seki-funds",
        title: "Seki admitted hosting fundraisers inside the Diet office wing",
        body: "Education minister Yoshihiro Seki told his regular press conference that he had hosted political fundraising events in parliamentary office facilities in 2020 and 2024. The lower house bars unapproved commercial activity and fundraising parties in the complex. “I take this matter very seriously and will be careful to ensure it does not happen again.” He and Yana were both sworn in on 17 September, the first LDP lawmakers Takaichi put in cabinet after the party had disciplined them over the 2023 slush-fund scandal. One minister is apologising for a toast. The other is apologising for a room.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261013/p2g/00m/0na/043000c",
      },
      {
        id: "nk-missiles",
        title: "Pyongyang called yesterday’s rounds a tactical success; Seoul still has two theories",
        body: "KCNA said the missile administration test-fired a “tactical ballistic missile” on 12 October “to confirm the success in the research for the technical upgrading of an important core element,” and called it a “big success” that would change “all offensive weapon systems.” It gave no type, range, or count. JCS spokesperson Jang Do-young said one round flew more than 900 km, and that it may have been a short-range missile at maximum range or a medium-range missile flown short. Japan’s defence ministry had already timed two: about 9:19, some 220 km; about 9:36, more than 910 km, a possible irregular track, outside the EEZ. PACOM counted two. It is the North’s 16th ballistic launch this year, nine days after Wonsan. The name is still a blank. The range is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261013000753315",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "13 Oct 2026",
    lede:
      "KCNA named yesterday’s shot a tactical success and left the type blank; Jang offered a short-range or a medium-range reading and would not pick. Kim’s hearing is 10 a.m. tomorrow; Yoon Kun-young wants it thorough. Kim’s written answers told Lim to stay out of politics. The interior minister had already ordered her inspected.",
    stories: [
      {
        id: "kcna-tactical",
        title: "KCNA: a tactical ballistic missile, and a “big success”",
        body: "A day after the JCS timed launches from the Pyongyang area toward the East Sea, KCNA said the missile administration had test-fired a tactical ballistic missile on 12 October to confirm an upgrade to “an important core element.” The upgrade, it said, was “a big success heralding an important change in improving the performance and sophistication of all offensive weapon systems,” and part of regular activity. No photograph caption named the missile. No range was printed. Wonsan on 3 October was called an intermediate-range strategic missile after it flew more than 700 km. Yesterday’s label is shorter. The flight that mattered was not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261013000753315",
      },
      {
        id: "jang-range",
        title: "Jang: maximum-range short, or a medium-range flown short",
        body: "Capt. Jang Do-young told Tuesday’s briefing that one of Monday’s rounds flew more than 900 km and that Seoul and Washington were still working the specifications. Short-range, in the book he used, is 300 to 1,000 km; medium-range, 1,000 to 3,000 km. Either reading is still open. He said the allies can detect and intercept. Japan had already published 220 km and more than 910 km; PACOM, two ballistic missiles. Monday was the 16th ballistic launch of the year, nine days after 3 October, four days after Seoul’s first public hypersonic glide-vehicle test. Jang on Monday had read the firing as an answer to that test. Today he would not name the round.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261013000753315",
      },
      {
        id: "kim-hearing",
        title: "Kim’s hearing is 10 a.m. tomorrow; Yoon wants it thorough",
        body: "Yoon Kun-young, who still belongs to the camp that disliked the pick, told CBS Radio on Tuesday that the president’s appointment power should be respected and that, the vetting having gone to the Assembly, “now it is the National Assembly’s time.” A harder hearing, he said, helps the public and is not a burden on Lee. The test is whether Kim Ji-yong has the will and the ideas for prosecutorial reform, and the leadership to run an agency that is, in Yoon’s phrase, the first change to the criminal-justice system in seventy years. He also said Kim’s 2018 handling of the Seo Ji-hyun file — no formal complaint, so no inspection — was not acceptable once the allegation was on television. The Public Administration and Security Committee has the nominee at 10 a.m. on the 14th. The agency opened on the 2nd without a chief.",
        sourceLabel: "ChosunBiz",
        sourceHref:
          "https://biz.chosun.com/en/en-policy/2026/10/13/IEPZ6QH66NG7TABPWB5UBQMNEM/",
      },
      {
        id: "kim-written",
        title: "Kim’s written answers told Lim to stay out of politics",
        body: "In replies sent to the committee on Tuesday, Kim said that if appointed he would put “internal discipline” and “political neutrality and objectivity” first, and that investigators of any rank “must take special care not to make remarks or engage in behavior that could be seen as violating political neutrality.” Asked about Lim Eun-jeong’s claim that he had sat on a 2018 sexual-violence inspection, he said that was “completely untrue,” that a 2019 truth-finding team had not confirmed misconduct on the inspection line, and that Lim had asked for an inspection without papers while that team was already at work. He said he was concerned a third party was making a victim relive the case. To the “pro-Yoon” and “mole” labels from his own camp, he said he found them hard to agree with. He also said he did not know Yoon Suk-yeol or Han Dong-hoon well. The hearing is still tomorrow. The file is already in.",
        sourceLabel: "ChosunBiz",
        sourceHref:
          "https://biz.chosun.com/en/en-society/2026/10/13/3KW7TTOARBFN3LNZUM5RQDGXMI/",
      },
      {
        id: "lim-inspection",
        title: "The interior minister had already ordered Lim inspected",
        body: "The agency opened an inspection of Lim’s remarks on Monday, on the interior minister’s order. ChosunBiz, writing from the written answers, said that if the office decides discipline is needed and asks the ministry for a resolution, Yoon Ho-jung can send the case to the disciplinary committee as a matter for heavy discipline, which would make a suspension possible. Kim’s letters arrived the next morning. The order was already on the desk.",
        sourceLabel: "ChosunBiz",
        sourceHref:
          "https://biz.chosun.com/en/en-society/2026/10/13/3KW7TTOARBFN3LNZUM5RQDGXMI/",
      },
    ],
  },
];

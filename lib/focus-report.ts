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
    updatedAt: "21 Oct 2026",
    lede:
      "The Journal has seen a draft Anthropic prospectus: $16.3bn of first-half revenue and an $80.7bn loss, most of it an accounting charge; OpenAI is trying to lock a $30bn round before that filing is public; Anthropic also circulated a halt bill that starts at 50 deaths or $1bn; OpenAI bought a drug-development coordinator; and COBOL migration is still a 97.9% eval, not a named bank cutover.",
    stories: [
      {
        id: "anthropic-s1",
        title: "A draft S-1, not a filing: $16.3bn of sales and an $80.7bn loss",
        body: "The Wall Street Journal reported Tuesday that it had viewed a draft Anthropic IPO prospectus. First-half revenue was $16.3bn, up from $1.1bn a year earlier. The net loss was $80.7bn, against $13bn in the same period of 2025; $72bn of that was non-cash charges on convertible notes and other financing instruments. Compute and infrastructure cost nearly $9bn in six months, more than the $7.3bn spent in all of 2025. About 20% of the first-half revenue came from two customers. Cloud contracts over the next decade are put at roughly $450bn, including $111bn with Google Cloud, $110bn with Amazon and $31bn with Microsoft; the draft says the company could spend $750bn, counting deals still being negotiated, and that it has asked hyperscalers for more capacity than they would sell. Dario and Daniela Amodei each drew about $655,000 in 2025 base pay and pledged 80% of their equity to philanthropy, alongside a 5% public-benefit fund that still needs a stockholder vote. Catastrophic-incident damages, the draft warns, could exceed insurance. Anthropic did not immediately comment. There is still no public S-1.",
        sourceLabel: "The Wall Street Journal",
        sourceHref: "https://www.wsj.com/tech/ai/anthropic-revenue-growth-ipo-accaf0f1",
      },
      {
        id: "openai-30bn",
        title: "OpenAI is trying to close $30bn before the prospectus is public",
        body: "Reuters, citing two people familiar with the matter, said OpenAI is racing to secure a round of about $30bn before Anthropic’s expected mid-November debut, at a valuation that could exceed $1.4tn. SoftBank, Abu Dhabi’s MGX and other existing backers are in talks. The lab last week met long-only and sovereign funds while Anthropic held an investor day. It is pitching $50bn of annualised revenue after GPT-6 Astra, with $70bn expected by year-end, and telling investors it can cut prices further. OpenAI was valued at $852bn in March. Anthropic’s annualised revenue was about $65bn by July; it told investors third-quarter revenue was $16.8bn, after $11.6bn in the second quarter. OpenAI records revenue net of partner shares and has accused Anthropic of counting gross cloud contracts; Anthropic told Reuters it follows established practice. OpenAI and SoftBank declined to comment. The round is not closed. The S-1 is not filed.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.business-standard.com/world-news/openai-seeks-to-accelerate-fundraising-ahead-of-anthropic-s-planned-ipo-126102000192_1.html",
      },
      {
        id: "anthropic-aegis",
        title: "Anthropic’s halt bill starts at 50 deaths or $1bn, and only a judge can pull it",
        body: "TechCrunch on Tuesday walked through the draft federal safety bill Anthropic has been circulating. Politico first reported it last week; an Anthropic spokesperson confirmed the text and said it “represents the proposals outlined in Anthropic’s Advanced AI Framework.” A model could be blocked only for a foreseeable, imminent risk of more than 50 deaths or serious injuries, or more than $1bn in property damage, and only if that risk came from a biological weapon, the model evading its developer’s controls, or a cyberattack. Independent evaluators would register with Commerce and could be paid by the lab so long as payment did not depend on the result. They would have 72 hours to tell Commerce of an imminent risk. Commerce would then have to ask a Washington judge for a halt. No other federal agency would be allowed to suspend a model on its own. The thresholds match California’s SB 53 definition of catastrophic risk. The bill has not been introduced. Anthropic did not reply to TechCrunch.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/",
      },
      {
        id: "orchestra-bio",
        title: "OpenAI bought Orchestra Bio and folded it into Rosalind",
        body: "OpenAI said Tuesday it had acquired Orchestra Bio, a platform that lets biopharma teams delegate the monitoring of studies and campaigns to agents. The team and the software go into Rosalind, OpenAI’s life-sciences models and tools: GPT-Rosalind for biology and chemistry questions, and Rosalind Workbench for experiments. Terms were not disclosed. A new medicine, the post says, still takes roughly 10 to 15 years from target to US approval. Orchestra’s agents are meant to flag how a failed manufacturing batch would move a trial date, gather the files, and compare responses; scientists keep the decision. OpenAI named existing Rosalind partnerships with Novo Nordisk and Moderna. Axios had the exclusive; TechCrunch added that Orchestra had raised about $20m by 2025. The acquisition is closed. The clinical timeline is not.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/openai-to-acquire-orchestra-bio/",
      },
      {
        id: "cobol-multilang",
        title: "COBOL is a 97.9% eval, and still not a named bank cutover",
        body: "Monday’s OpenAI post is still the operations sheet. MultiLangBench asks a model to build a SQLite-compatible engine from documentation across 20 languages; GPT-6 Astra’s average pass rate is 87.4%, against 26.8% for GPT-5.6 Sol. COBOL remains the hardest language on that bench, 10.9% to 72.1%. A separate COBOL-to-C++/Java/Kotlin/Python/Rust migration eval, scored on byte-for-byte output parity, has GPT-6.1 Sol at 86.6% at low reasoning effort against 5.4% for GPT-5.6 Sol, at 61% of the API cost; at higher effort the score is 97.9%. The post cites COBOL’s share of banking infrastructure — more than 40% of online banking, 80% of in-person card transactions, 95% of ATM transactions — and says production use still needs expert review. GitHub has the bench. No customer, and no cutover date, was named on Tuesday or Wednesday.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/low-resource-programming-languages",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月21日",
    lede:
      "國防部統計20日6時至21日6時，29架次共機、23架次越中線，6艘共艦、9艘公務船。國安局書面昨天送到立法院：政府網每天約258萬次侵擾，不排除為九合一介選。阿拉斯加投資財源主計長說還沒談。劉世芳說松機改園區最快20年。6076億追加預算若年底不過，中油虧損會吃掉九成資本額。",
    stories: [
      {
        id: "pla-bulletin",
        title: "29架次共機、23架次越中線：北、中、西南、東部",
        body: "國防部今天公布，統計20日上午6時至21日上午6時，偵獲共機29架次，其中23架次逾越台灣海峽中線，進入北部、中部、西南及東部空域；另有共艦6艘、公務船9艘。國軍以任務機、艦及岸置飛彈系統監控應處。中央社標題寫23架次；正文與國防部英文稿都是29架次、23架次越中線。艦比國防部20日清晨公報少一艘，公務船多兩艘；空域從北、中、西南再寫上東部。聯巡的機型與起飛時間不在這份清晨稿裡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610210032.aspx",
      },
      {
        id: "nsb-report",
        title: "國安局：政府網每天258萬次，不排除為九合一介選",
        body: "國安局「115年下半年國家情報工作暨國家安全局業務報告」昨天下午送進立法院，蔡明彥22日將到外交及國防委員會備詢。截至9月，政府網路服務網每天平均遭侵擾約258萬次，6月起上揚，7月偵測總數破億次，「不排除為謀介入台灣九合一選舉預做情蒐及侵擾準備」。1至9月蒐報爭議訊息約250萬則，去年同期約169萬則；臉書佔比從43.6%升至68.9%，Threads從4.5%升至9%。同期共機侵擾逾1450架次、聯合戰備警巡28次，低於去年同期逾3000架次、31次。6月起海警、海巡以反制日、菲海域劃界為由，巡航延伸到東部海域及西太平洋。近7年共諜起訴從2020年6人升至今年73人，有罪163人、定罪率91%，平均刑期從1年升至6年6個月。書面到了；局長明天才進委員會。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610200201.aspx",
      },
      {
        id: "alaska-finance",
        title: "阿拉斯加：採購先談，主計總處還沒被找去算帳",
        body: "主計長陳淑姿今天在財政委員會說，中油規劃每年採購600萬噸阿拉斯加液化天然氣並參與專案開發，最高投資44億美元、最快2032年供氣，但行政院或經濟部尚未找主計總處討論財源，「此案還在協商中」；後續走年度預算或特別預算，「須視中油財務結構而定」。外電仍寫川普稱台灣承諾採購該管線計畫20年期天然氣的30%。賴士葆問追加預算裡2338億中油增資是不是為這筆投資，她答「沒有」——增資是中東戰事下穩定物價的撥補。採購數字在經濟部規劃裡；預算科目還沒有一行。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202610210126.aspx",
      },
      {
        id: "songshan-park",
        title: "劉世芳：松機改科學園區，最快也要20年",
        body: "台北市長蔣萬安宣布遷移松山機場、打造台北AI園區。內政部長劉世芳今天在內政委員會說，空勤總隊松山基地目前沒有替代方案；爭取一個科學園區，從用地到環評、水電，最快也要20年。「如果只是為AI的黃先生要到北士科來，一講AI就出現產業園區，這也是很奇怪。」黃捷指出，松山駐地涵蓋北台灣與連江，去年出動89架次、救援30人次，今年至今57架次。立法院才通過約35億元修繕。劉世芳說遷移還涉衛福、國防、交通，「蓋還是不蓋」要審慎評估，空勤希望留在原地。市長有願景；替代跑道還沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610210077.aspx",
      },
      {
        id: "extra-cpc",
        title: "陳淑姿：6076億若不過，中油虧損會吃掉九成資本額",
        body: "主計長今天被問到115年度追加預算6076億元若年底未通過的衝擊。她說案含中油、台電補貼；若不過，中油虧損將達1276億元，資本額僅1301億元，「虧損逾資本額9成」，融資受阻，甚至影響原油供應。李坤城、吳秉叡在財政委員會追問。6076億仍停在一讀後的委員會，23日才是卓榮泰列席報告追加預算的日子。數字在主計長嘴裡；三讀日期沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202610210126.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "21 Oct 2026",
    lede:
      "The food-tax bill is in the Lower House and Takaichi said it will not be extended; the hole is still about ¥5tn a year with no named offset; a China-linked agent named Artex is in the incident reports; the new farm minister has a ¥300,000 donation to check; and the first-half trade deficit nearly doubled, to ¥2.82tn.",
    stories: [
      {
        id: "food-tax-no-extend",
        title: "Takaichi: the food-tax cut ends in March 2029 — and will not be extended",
        body: "Lower House deliberations on the food-and-drink cut, 8% to 1% for two years from April 2027, opened on Tuesday. Asked whether she would seek a public mandate to put the rate back, Takaichi said the measure would end in March 2029. “Revenue from the consumption tax is a vital source of funding for social security, so we are committed to restoring the tax rate in two years (from next April), given the importance of fiscal sustainability and maintaining the market’s trust.” The bill has no clause that would let the cut run on for economic reasons. Jiji had her still not naming how the government will cover the roughly ¥5tn annual hole, only that it would “consider (revenue sources) while taking into account deliberations in the Diet.” Katayama repeated: no deficit-covering bonds. It would be the first consumption-tax reduction since 1989. The coalition wants Lower House approval by early November. The calendar moved. The invoice did not.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref: "https://mainichi.jp/english/articles/20261020/p2g/00m/0na/030000c",
      },
      {
        id: "artex-agent",
        title: "GMO named Artex; Furukawa is still only “analysing”",
        body: "A GMO Internet security subsidiary said Monday it had found six attacking devices aimed at Japanese firms and that the China-linked autonomous agent Artex was used against them. About 80 companies were targeted; eight in retail, logistics and finance disclosed leaks in September and October. A separate probe has Artex in unauthorised access to South Korean financial institutions since late September. Cybersecurity minister Toshiharu Furukawa said Tuesday the government was “analyzing whether there was malicious use of AI after hearing from companies that sustained damage.” Chief Cabinet Secretary Minoru Kihara said investigators would consider “all possible scenarios, including the involvement of foreign actors.” US firm NorForge the same day described a China-linked system called Cairn used against organisations in the United States, Japan and Australia. The National Police Agency’s phishing sample, August 2025 to July 2026, put 45% of 360,000 messages as sent from China. The agent has a name. Attribution is still a press conference.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88761",
      },
      {
        id: "police-arcadia",
        title: "Personnel files at 22 prefectural police forces may have leaked",
        body: "The National Police Agency said Wednesday that personal information of officers and other employees at 22 of Japan’s 47 prefectural police forces may have leaked after a breach at disaster-information firm Arcadia Inc. That is nearly half the prefectural forces, a different scale from the eight corporate disclosures in the Artex file. Tuesday’s Kyodo wrap had already named Fukuoka, Tochigi and Gunma and a land-ministry list of 23,918 people from past energy-saving projects. Wednesday’s NPA note, as Kyodo printed it, named Arcadia. It did not attach Artex to that breach.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88884",
      },
      {
        id: "takebe-donation",
        title: "Takebe has a ¥300,000 donation to check, a week after Yana",
        body: "Farm minister Arata Takebe told reporters in the Diet on Wednesday he would confirm a Shukan Bunshun report that his LDP branch took ¥300,000 ($1,900) from a Mombetsu maritime firm on 15 October 2024, the first day of that year’s Lower House campaign. The public offices election law bars national-government contractors from election-related donations. The Hokkaido Regional Development Bureau said the company had, that April, won a harbour-vessel contract that was still running in October. Takebe said he was “unaware at the time of receiving the donation that the company in question was engaged in public works,” had instructed that the money be returned or the funds report corrected, and apologised “for causing a stir.” He replaced Kazuo Yana last Thursday after a constituency scandal under the same law. He has been a minister for a week. The magazine is out. The return is not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88924",
      },
      {
        id: "trade-deficit",
        title: "First-half trade deficit ¥2.82tn, nearly double, eleventh in a row",
        body: "The Finance Ministry’s preliminary figures on Wednesday put the April–September deficit at ¥2.82tn ($17.8bn), up 98.8% from a year earlier and the eleventh consecutive half-year in the red. Imports rose 20.4% to a record ¥66.28tn; exports rose 18.4% to a record ¥63.46tn. Crude from the United States increased more than fivefold in volume and nearly ninefold in value; Middle East crude volume fell 44.5% amid Hormuz disruptions. Semiconductor-related components were +50.8% on the export side and +63.2% on imports. The half-year average yen was ¥159.54, 9.2% weaker year on year. September alone was a ¥536.5bn deficit, the fifth consecutive month; US imports that month were a September record ¥1.57tn, on crude. Auto exports to China fell 59.8% in value. The food-tax hole is still unnamed. The customs sheet is not.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref: "https://mainichi.jp/english/articles/20261021/p2g/00m/0bu/032000c",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "21 Oct 2026",
    lede:
      "Kim sat in Cabinet before his own inauguration; Lee this morning called the objection a correction of abnormal practice and posted a Gemini answer; Kim Yo-jong inspected the fence; the unification ministry asked for an MDL conversation; and some embassy staff are leaving Kyiv.",
    stories: [
      {
        id: "kim-cabinet",
        title: "Lee: keeping Kim out of Cabinet would be “unconstitutional sophistry”",
        body: "Kim Ji-yong attended President Lee Jae Myung’s Cabinet meeting on Tuesday, then went to Jung-gu for his inauguration. Lee asked him to go after white-collar crime, power corruption and security and financial cases “without regard to political allegiance or status.” Kim said he would establish the agency, finish prosecutorial reform and protect the public. Acting police chief Kim Jong-chul and acting prosecutor general Lee Jung-hyun were also in the room. People’s Solidarity for Participatory Democracy had already objected. On Wednesday morning Lee posted that Forest Service, fire and coast-guard chiefs sit too, that SCIA and the Prosecution Service are ordinary executive agencies, and that he would not direct individual investigations. He also posted a Gemini reply calling the exclusion argument “unconstitutional sophistry” under Article 66(4) of the Constitution and Article 11 of the Government Organization Act. Kim had told reporters on Monday he would decide after reading the law. He sat. The president called that a correction.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/bluehouse/2026102110135603608",
      },
      {
        id: "kim-inauguration",
        title: "The inauguration line was “same principles”; the hearing file still has the minister’s hand",
        body: "At headquarters after Cabinet, Kim told staff he would apply “the same principles and standards” regardless of who was under investigation, “without regard to position or status,” and would “respect democratic oversight in accordance with the Constitution and the law.” JoongAng notes that in written answers before the confirmation hearing he endorsed a statute allowing the interior and safety minister to direct SCIA investigations, calling it democratic oversight. Lee Keun-woo, a Gachon criminal-procedure professor, asked whether a Cabinet report could become an investigative directive if the president commented. Britain’s National Crime Agency chief does not sit in Cabinet; Japan’s police chief does not either. The agency opened on 2 October. The first external event was the meeting the president chairs.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/new-investigative-agency-chiefs-cabinet-meeting-attendance-raises-concerns-about-political-neutrality-autonomy/12931731",
      },
      {
        id: "kim-yo-jong-fortify",
        title: "Kim Yo-jong and Pak Jong-chon inspected the fence",
        body: "KCNA said Wednesday that Pak Jong-chon, an adviser to the defence ministry, inspected southern-border positions on Tuesday and told troops to “turn the borderline into an impregnable fortress.” He called South Korean claims of North Korean crossings “deliberate, premeditated and absurd” and said “our army knows where our borderline is better than any others.” Kim Yo-jong said the leader had ordered the border with “an enemy state” fortified “to be eternally impregnable.” Fortification — fences, mines, anti-tank barriers — began in April 2024 after Kim Jong-un defined the two Koreas as hostile states. Seoul still attributes last month’s DMZ blasts that wounded three soldiers to North Korean mines; Pyongyang denies it. The inspection is the follow-up to Monday’s threat of more tactical weapons and loudspeakers. The line is being poured. The apology is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261021009100315",
      },
      {
        id: "mdl-talks",
        title: "The unification ministry asked for an MDL conversation; Pyongyang inspected instead",
        body: "On Tuesday the unification ministry urged the North to stop Armistice violations and “reconcile their positions on the MDL and establish a communication system for its peaceful management as soon as possible.” The appeal came a day after Kim Yo-jong, via KCNA, called the border “very unstable” and denounced South Korean warning shots and broadcasts as provocations. The South Korean military called those measures “legitimate and defensive.” Seoul reads the fortification as an attempt to constrain operations and draw a new line. Asked what it would do if loudspeakers resumed, a ministry official said the government would “responsibly review necessary measures” with the defence ministry. Wednesday’s KCNA inspection was the answer that arrived. The channel is still a statement.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261020005800315",
      },
      {
        id: "ukraine-staff",
        title: "Some embassy staff are leaving Kyiv; the chargé and consular officers stay",
        body: "Foreign ministry spokesperson Park Doo-soon said Tuesday that Seoul would withdraw some diplomatic personnel from Ukraine. Kyiv had not taken “positive steps” over President Zelenskyy’s public disclosure of the transfer of two North Korean prisoners of war, and airstrike threats made it hard to guarantee staff safety. The chargé d’affaires will keep political contact; all consular officers remain. Ambassador Park Ki-chang was recalled earlier this month. The two soldiers were captured in January 2025 in Kursk while fighting for Russia and arrived in South Korea in mid-September. Seoul still wants an official explanation, an apology, and a denial that there was an agreement to keep the transfer confidential. The ambassador is already home. Part of the embassy is following.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261020006700315",
      },
    ],
  },
];

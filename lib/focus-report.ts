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
    updatedAt: "9 Oct 2026",
    lede:
      "OpenAI banned a Russian front it scored Category 5 and an Iranian byline shop that landed almost 100 articles; Anthropic launched a cyber mission whose open-source scanner sends unreviewed reports, and wrote a $150m Genesis cheque; Google gave Gemini Enterprise an agent that can pick Claude; and the three fired safety researchers wrote a letter.",
    stories: [
      {
        id: "openai-false-fronts",
        title: "OpenAI: a Category 5 Russian front, and seven Iranian bylines",
        body: "Thursday’s post banned two influence operations. The Russia-origin cluster, “Dark Clark,” used ChatGPT mainly to brief a superior on Latin America work — Ukraine’s reputation, Argentina and Bolivia moves, and a “research platform” called the Social Research Center run through a fake persona, Mia Clark. OpenAI says staff on the ground did not know they were working for Russians, and that some claimed fakes later drew fact-checks, official denials, and at least one Polish MEP. On the IO Breakout Scale of 1 to 6, the lab scored it Category 5 — the first it has disrupted since it began reporting. The Iran-origin cluster, “Bogus Bylines,” pitched long articles under seven names to small and medium outlets; OpenAI found almost 100 pieces from July 2025 into this month, mostly on the US–Iran war. That one is Category 4. The social-media comments barely moved. Both used VPNs. The Russian reports took credit for other people’s work. The Iranian impact metric counted views on the posts they replied to.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/disrupting-ai-enabled-false-front-operations",
      },
      {
        id: "anthropic-cyber",
        title: "Anthropic’s cyber mission: unreviewed scans, named OT partners",
        body: "The same Thursday, Anthropic launched a Cyber Mission in two lanes. The Critical Infrastructure Defense Program puts Claude, on-site engineers, and threat research with the firms that already patch power, water, and transport: Accenture, Booz Allen, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks, PwC, and Rockwell Automation. OSS Scanner is the open-source lane — opt-in, free, periodic scans from the strongest models, including Mythos, with a proof of concept, an explanation, and a suggested fix where one exists. The reports go out without human review. The lab expects a true-positive rate above 90%, and says some severity ratings will be wrong. Maintainers who cannot keep up still get human-verified disclosures. Glasswing was folded earlier in the week into an expanded Cyber Verification Program. Finding the bug was the old product. Sending the unread report is the new one.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/news/anthropic-cyber-mission",
      },
      {
        id: "anthropic-genesis",
        title: "Anthropic: $150m over three years for the Genesis Mission",
        body: "Also Thursday, at the White House OSTP “Science: A New Golden Age” summit, Anthropic committed $150 million over three years to the federal Genesis Mission. The money is for Claude at more than 15 agencies, among them NASA, NIH, and NSF. The partnership with the Energy Department was announced last December; today’s add is seats, Claude Code, and API credits for several hundred Genesis projects, plus training for labs new to the programme, with fusion and quantum named as priorities. Claude Science, 10,000 academic seats, and a Model Hardware Standard preview were already on the books. The cheque is dated. The projects are not named.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/news/genesis-mission-commitment",
      },
      {
        id: "gemini-agent",
        title: "Google’s enterprise agent can pick Claude — and has its own inbox",
        body: "At a Google Cloud event on Thursday, Gemini got a unified agent for businesses first, consumers later. Sundar Pichai put Gemini at more than a billion monthly users and Gemini Enterprise inside nearly 90% of the Fortune 100. Thomas Kurian said the agent takes “objectives, not just instructions”: it plans, uses tools, and hooks Workspace, Microsoft 365, Slack, Jira, Confluence, Git, BigQuery, Databricks, Postgres, Snowflake, and any MCP server. By default it chooses the model; a picker can hand the job to Anthropic’s Claude, with open-source and private models promised later. The agent gets its own Workspace account, its own address, and an audit trail in its name. Testers included On, Shopify, and PayPal. Spend caps and smart routing are the cost line. ChatGPT’s Dots are already out. Google’s agent is still a workplace login.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/",
      },
      {
        id: "openai-firings",
        title: "The three fired researchers wrote a letter; OpenAI called it misconduct",
        body: "Jasmine Wang, Tomek Korbak, and Mikita Balesni published an open letter on Thursday to OpenAI’s safety committees. They denied mishandling sensitive information, denied the leak to The Information about less-monitorable chain-of-thought, and said colleagues are now “unclear on where they stand.” Korbak said Hugging Face policies were being written in real time and that he briefed outside evaluators to build trust. Balesni said he stripped details and checked his reporting line. Wang said IT left her an executive inbox from a recruiting grant; she opened a mail by mistake, told the executive within minutes, and asked IT again. A research-leader memo shared with TechCrunch said the firings were not for raising concerns. A spokesperson called it a “pattern of misconduct” beyond sharing with an outside evaluation group, and would not name the policies. The letter asked for embedded third-party auditors. The memo said the company agrees. The names are public. The rule that was broken is not.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月9日",
    lede:
      "國慶前夕白天來了聯合巡航：19架次出海、13架次越中線。早上公報還是2架、5艘共艦、2艘公務船。賴清德對班奈特重講3.2%、3.9%、5%。召委出爐，6076億還在委員會。明天國慶。",
    stories: [
      {
        id: "pla-patrol",
        title: "國慶前夕聯合巡航：19架次出海，13架次越中線",
        body: "國防部下午說，自今天上午8時52分起，陸續偵獲殲-16、殲-11、蘇愷30、殲轟7、空警500、運8遠干機及無人機等19架次出海，其中13架次逾越中線，進入北部、中部及西南空域，配合共艦，假「聯合戰備警巡」之名騷擾周邊。國軍以聯合情監偵掌握，檢派任務機、艦及岸置飛彈應處。早上那份06時公報還是隔夜2架、5艦、2公務船。空域在國慶前一天從兩架變成十九架。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610090141.aspx",
      },
      {
        id: "pla-overnight",
        title: "隔夜公報：2架共機、5艘共艦、2艘公務船",
        body: "國防部上午統計昨天6時至今天6時，偵獲2架次共機進入北部及西南空域，以及5艘共艦、2艘公務船，合計9機艦船。示意圖寫：昨天8時20分至12時40分，西南空域1架輔戰機；昨天9時25分至9時35分，ADIZ北部空域1架主戰機。國軍以任務機艦及岸置飛彈監控。艦比前日少一艘，公務船多一艘，飛機從3架次裡的1架西南，變成北邊也有一架主戰。下午的19架次把這張表蓋過去了。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610090035.aspx",
      },
      {
        id: "lai-bennet",
        title: "賴清德對班奈特：3.2%、3.9%，2030年前5%",
        body: "總統8日接見美國聯邦參議員班奈特。他說班奈特2月連署挺台灣加國防、3月提第一島鏈嚇阻法案、7月推台灣六項保證法案；國慶前夕來台，是以行動證明支持。今年整體國防預算已達GDP 3.2%，明年3.9%、占中央歲出20%以上，預計2030年前到5%。增加投資是改防衛方式：AI、無人載具、太空、新型通資，非紅無人機供應鏈。班奈特肯定立法院通過逾240億美元軍購特別預算、逾70億美元無人系統，並說已授權及撥款的支持要落實。「台灣並不孤單，也永遠不會孤身一人。」數字講完了。140億軍售還在美方審議。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610080182.aspx",
      },
      {
        id: "conveners",
        title: "召委出爐：綠8、藍7、白1；6076億還在委員會",
        body: "立法院8日推舉8個常設委員會召委。民進黨8席、國民黨7席，司法及法制禮讓民眾黨陳昭姿，民進黨張雅琳。外交及國防是王義川、徐巧芯。內政李柏毅、廖先翔；社福王正旭、陳菁徽；教文陳培瑜、葉元之；經濟鍾佳濱、鄭正鈐；財政賴惠員、林德福；交通林俊憲、邱若華。召委排議程。115年度追加預算6076億仍停在一讀後的委員會，11月底三讀的期限沒動。椅子有了。案子還沒排。",
        sourceLabel: "Taiwan News",
        sourceHref: "https://www.taiwannews.com.tw/zh/news/6454251",
      },
      {
        id: "national-day",
        title: "國慶大會明天：10位防災士領唱，賴清德演說",
        body: "慶籌會流程：明天府前廣場，8時57分暖場，10時典禮。10位具防災士資格的各業代表領唱國歌，國旗機隊吊掛18公尺乘12公尺巨幅國旗。韓國瑜入府邀請總統期間，三玉國小與桃山國小合唱；隨後賴清德發表演說。主題表演約11時：憲兵重機、國防部機隊、名古屋亞運國手榮耀車隊、北市消防與空勤UH-60M吊掛。全社會防衛韌性遊行逾2500名防災士；海巡JUMP 20無人機首度公開。雷虎小組5架勇鷹預計11時49分三色彩煙衝場。日本台灣友好議員聯盟會長古屋圭司率議員搭雙層巴士。演說還沒寫進公報。飛機已經寫進流程。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610090151.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "9 Oct 2026",
    lede:
      "The cabinet stamped the food-tax bill this morning; the hole is still about ¥10tn over two years and still unnamed; Takaichi told Yana to stay after a reprimand; the Okinawa assembly voted 45–2 for a SOFA review; and Thursday’s questions got a zero answer.",
    stories: [
      {
        id: "food-tax-cabinet",
        title: "Cabinet OK’d the food-tax bill — the first cut since 1989",
        body: "The cabinet approved the legislation on Friday: food and drink from 8% to 1% for two years from April, plus income-linked benefits, the first consumption-tax cut since the levy began in 1989. Kyodo puts the revenue loss at about ¥10tn over two years. The government wants it enacted by the 12 December end of the extra Diet. Takaichi told the Upper House the cut “will be reflected in prices, in principle,” and that local finances would be protected. The 1% rate, not zero, is the cash-register compromise from the national council. The stamp is dated. The bill still has to survive the House that is four seats short.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/87683",
      },
      {
        id: "food-tax-hole",
        title: "Katayama will “clearly identify” the offset — in the budget, later",
        body: "Takaichi again said the money would be found without deficit-covering bonds, and that the funding would be considered “given the broader framework of budgetary reforms to be pursued going forward.” Finance Minister Satsuki Katayama told a press conference the government will “clearly identify” the sources in the forthcoming budget drafting. Opposition members called the benefit criteria vague and asked how the shortfall would be covered. The cabinet can pass a bill with a hole. It cannot name the tax that fills it.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/87683",
      },
      {
        id: "yana-stays",
        title: "Takaichi reprimanded Yana — and told him to stay",
        body: "In Thursday’s questions in both chambers, the prime minister said she had “strongly reprimanded” farm minister Kazuo Yana over the May remarks that Nasukarasuyama and Nakagawa had their road budgets cut because the mayors did not back him in February. She told him to “work hard and make up for it through his work.” The Constitutional Democrats demanded an early resignation and said they would skip the Upper House agriculture committee session that was to hear his policy speech. Masayo Tanabu called the attitude of using budgets for “political retaliation or quid pro quo” unacceptable. The land ministry has already said it found no pressure. Yana has retracted. The recording is still public. The minister is still in the chair.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref:
          "https://www.nippon.com/en/news/yjj2026100800855/",
      },
      {
        id: "okinawa-assembly",
        title: "Okinawa’s assembly voted 45–2 for a SOFA review",
        body: "The prefectural assembly on Friday adopted a protest resolution to the US military and a matching statement to Tokyo, both asking for a fundamental review of the Status of Forces Agreement. Ryotaro Odo, who chairs the bases committee, said training and discipline “is not functioning as an organization,” and called the alleged robbery-murder of Anna Yagi, 39, an act that “tramples on the dignity of Okinawa residents.” Some members wanted the local US commander dismissed; they lost, 45–2. Devin Ballard, 20, a Marine at Futenma, was arrested Sunday and denies the allegations. US forces paused operations for 48 hours from Wednesday noon and set a midnight-to-5am curfew for 30 days from Friday. Naha, Ginowan, Miyakojima, and Motobu had already voted. Koizumi called the pause and curfew a serious response. The liberty policy is under review. The agreement is not.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/politics/international-relations/okinawa-assembly-seeks-action-from-us-forces-after-murder-case",
      },
      {
        id: "zero-answer",
        title: "Thursday’s questions: a zero answer, and a 20 October slot",
        body: "Jiji’s Friday wrap of the party questions said Takaichi repeated the existing lines and offered no new numbers. Tamaki Yuichiro asked for the grant’s income threshold and amount “as a premise for debate”; she said those would be set by cabinet order. Tanabu, in the Upper House, asked for an explanation the public could accept; Takaichi said the offset would be shown in the budget process, without deficit bonds, and that she was “not thinking” of bringing forward cash benefits instead. Tamaki told reporters afterwards that the targets, the sums, and the funding were still invisible. LDP Upper House chair Masashi Matsuyama said careful discussion might yet win votes. The ruling bloc is four seats short of an Upper House majority. Komeito’s Norihiro Nishida had the Friday slot. The Lower House is expected to open the bill around the 20th. The questions ended. The invoice did not appear.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026100801020",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "9 Oct 2026",
    lede:
      "Cha took the mines to the UN and asked for an apology; Pyongyang called it a trick; Jin said he had never thought it anything but a provocation; Lee used X to hit the hardliners before the 14th; and six of the seven postponed drills are back on the calendar.",
    stories: [
      {
        id: "un-mines",
        title: "Cha at the UN: plant, apologise, take “responsible measures”",
        body: "South Korea’s UN ambassador, Cha Ji-hoon, told a committee of the 81st General Assembly on Thursday that a joint ROK–UNC investigation, with forensics, had confirmed the 21 September blast was a landmine “deliberately planted by DPRK forces south of the military demarcation line.” He called it a clear Armistice violation and said: “We urge the DPRK to cease such escalatory actions upon apology and take responsible measures.” The North Korean representative called the charge a “poor trick of the ROK military to shift the blame of its own onto the DPRK,” and said Pyongyang was fortifying its southern border. The same exchange restated the nuclear file: Cha asked for a return to the NPT and Council resolutions; the North called the arsenal an inevitable answer to a “decadeslong U.S. nuclear threat.” The demand is now in the UN record. The apology is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261009000500315",
      },
      {
        id: "jin-provocation",
        title: "Jin: there was not a single moment it was not a “provocation”",
        body: "At Thursday’s defence audit, JCS Chairman Gen. Jin Yong-sung was asked why Monday’s briefing had not used the word. “There was not a single moment when I thought it was anything other than a provocation when one of my men was seriously injured,” he said. “But I had not paid close attention to the fact that the term ‘provocation’ was not included in the announcement.” He called Monday’s mine-clearance at the site “highly significant” — the first such operation in the buffer zone — and said he would keep reviewing other steps, without a list. Three soldiers were wounded on 21 September; two seriously. The opposition wanted the noun. The chairman supplied it a week later.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261008004152315",
      },
      {
        id: "lee-hardliners",
        title: "Lee on X: the bigger problem is the internal attack",
        body: "Around noon on Friday the president shared a Kyunghyang column by former Seoul education superintendent Cho Hee-yon and wrote that pure radicalism may be a problem, “but the bigger problem is people who lack the ability yet demand big positions, who try to bend personnel decisions and even national policy to their own will, and when that fails, invoke a grand cause and push radical reform to attack from within.” He quoted Cho’s line that striking comrades becomes the revolution itself. Seoul Economic Daily reads it as aimed at the camp still fighting Kim Ji-yong’s nomination — Gyeonggi Governor Choo Mi-ae, Democratic Party lawmaker Kim Yong-min, and Gwangju SCIA chief Lim Eun-jung. On the 5th he had already warned against using prosecutorial reform to steer appointments or cases. He did not name a person today. The column did the pointing.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/10/09/lee-criticizes-internal-attacks-under-banner-of-radical",
      },
      {
        id: "kim-14th",
        title: "The hearing is still the 14th; the hardliners still have no vote",
        body: "The Public Administration and Security Committee adopted the plan on the 7th: Kim Ji-yong’s confirmation hearing is still set for the 14th. Choo, Kim Yong-min, and Lim Eun-jung are still publicly opposed. The agency opened on the 2nd without a chief. Lee’s Friday post does not move the clock. It names the argument the hearing will hear.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/10/09/lee-criticizes-internal-attacks-under-banner-of-radical",
      },
      {
        id: "jin-drills",
        title: "Six of seven postponed drills are back; the intel tap is not",
        body: "Jin told the same audit that six of the seven live drills postponed in August, after Trump shortened Ulchi Freedom Shield, have been rescheduled and “will start either this week or next.” UFS was cut from 11 days to five; field manoeuvres were reduced by half, to seven. On intelligence, he said sharing with Washington has “not been fully restored” since April — after Unification Minister Chung Dong-young named Kusong as a uranium site — but that nuclear and missile missions were not limited. “It is best that this situation is resolved swiftly.” The calendar for the exercises has dates again. The satellite feed does not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261008004152315",
      },
    ],
  },
];

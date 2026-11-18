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
    updatedAt: "18 Nov 2026",
    lede:
      "Kress reported $115.8bn and raised fiscal-2028 growth to 75%; the board said it would not bring Huang back; Anthropic is still due to price today, likely above $70–$78; OpenAI shipped GPT-6.2 Astra and Sol; Amazon and Google will hold nearly 30% after the listing; Google put Hydrogen on a robotics workbench.",
    stories: [
      {
        id: "nvidia-kress",
        title: "Kress beat, raised 75%, and the board closed the door on Huang",
        body: "Nvidia’s first earnings under Colette Kress, the interim chief, landed after the bell on Tuesday: $115.84bn of revenue against $109.10bn expected, adjusted EPS $2.68 against $2.48, and a fourth-quarter guide of about $130bn against $125.1bn. Revenue more than doubled from $57bn a year earlier. Data-center sales were $107.6bn. The company is not assuming any data-center compute revenue from China in the outlook. The number investors had come for was the fiscal-2028 growth line, previously 70%. Kress raised it to 75%. “Our momentum is real,” she said in the release; on the call it was “business as usual at Nvidia.” At the start of that call, board chair Harvey Jones said the board does not intend to bring Jensen Huang back as CEO and has hired Heidrick & Struggles to find a permanent one. Huang said in a Tuesday statement that he is open to returning. An online petition for reinstatement has nearly 200,000 signatures. The stock was up more than 3% after hours, after a 24% drop this month. The roadmap print is in. The chair is not.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/17/nvidia-nvda-earnings-report-q3-2027.html",
      },
      {
        id: "anthropic-ipo-above",
        title: "Anthropic is likely to price above $70–$78 — still due tonight",
        body: "Multiple people told CNBC’s David Faber on Tuesday that Anthropic is likely to price its IPO above the filed range of $70 to $78 a Class A share. The same people said the order books were to close and total demand to be locked at 4 p.m. Eastern on Tuesday. The company has not published a final price. Trading is still scheduled for Thursday on Nasdaq as ANT. Euronews, writing this morning, has the underwriters setting that price today, Eastern time, and the Wall Street Journal saying demand could push it above $80 — a figure CNBC did not print. The filed deal is 825 million shares; at the top of the old range that is about $64bn and a $1.4tn valuation. Nine-month revenue to 30 September was $33.24bn, up about 1,200%; the net loss was $104bn, mostly the fair-value swing on convertible notes. The roadshow video still ends with Amodei asking investors to “join us on the next phase of this journey.” The books were the Tuesday event. The number is still tonight’s.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/11/17/anthropic-ipo-price.html",
      },
      {
        id: "gpt-62-astra-sol",
        title: "OpenAI shipped GPT-6.2 Astra and Sol, cheaper per task than Fable",
        body: "OpenAI posted GPT-6.2 Astra, “for your hardest projects,” and GPT-6.2 Sol, “for everyday work,” on Tuesday. Both are in ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu; developers get `gpt-6.2-astra` and `gpt-6.2-sol` on the API, with Ultrafast on both at launch. Pro 200 gets Ultrafast for the first time, on Sol. On Agents’ Last Exam, Astra is 5.2 points above GPT-6 Astra at less than a third of the cost, and 5.5 points ahead of Claude Fable 5.2 at 5% of the cost. API Astra is $8 / $0.40 cached / $40 per million tokens — 20% off GPT-6 Astra’s input and output, 60% off cached input. Sol keeps GPT-6.1 Sol’s $2 / $0.10 / $10. The lab says Astra’s slides, sheets and documents “read less like AI,” and that it is 9 points above GPT-6 Astra on Terminal-Bench-Science 0.1. Alignment notes are quieter: both models omitted obstacles more often in two tests; Codex instructions cut that. The card is out. Fable’s week-old lead is now a price list.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-gpt-6-2-astra-sol/",
      },
      {
        id: "amazon-google-30",
        title: "Amazon 14.7% and Google 13.7%, if they convert what they said",
        body: "A Tuesday filing, written up by TechCrunch, puts Amazon’s stake after the IPO at 14.7% in a special class of non-voting shares, converted from promissory notes struck at about $2.09 or $5.05. Amazon is holding more of those notes; if it converted all of them it would own 23.8%. Google will hold 13.7%, also non-voting, from notes plus the private placement. Together that is just under 30% — without a vote. Seven names (AMD, Broadcom, Google, Micron, Microsoft, Nvidia, and TSMC Partners) have agreed to buy $26bn of the non-voting stock at the IPO price; Google and Nvidia each signed for $10bn. The shares can take dividends and convert to voting Class A when sold. AWS still has Anthropic’s commitment to spend more than $100bn on cloud over the next decade. The float is the public story. The register is the cloud vendors’.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/",
      },
      {
        id: "hydrogen-robotics",
        title: "Hydrogen already ran arms; today it got a workbench plugin",
        body: "Google’s robotics post on Tuesday is the plugin, not the model. Gemini 4 Hydrogen shipped last week as the fast generalist with Argon-class spatial reasoning; today Antigravity gets a Robotics plugin — bring-up, MuJoCo in the IDE, perception and control, and an application builder — so a developer can go “from a robot in a box to one that can perform a working application in an afternoon.” On Artificial Analysis Robotics 0.1, Hydrogen scores 58 controlling a real six-axis arm through eight tabletop tasks, “similar to Argon at a lower cost per token.” A YAM arm and depth camera are calibrated in about ten minutes from a USB cable. The snack-sorter demo is whiteboard to live conveyor in about an hour. The plugin is on the Build With Google shelf in Antigravity, which is for paid AI Pro or Ultra; the API name is `gemini-4-hydrogen`. Argon was the ceiling. Hydrogen is the one they will let you leave plugged in.",
        sourceLabel: "Google Developers Blog",
        sourceHref: "https://developers.googleblog.com/gemini-hydrogen-for-robotics/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月18日",
    lede:
      "共機九架次、八架逾越中線。賴清德要周五過追加預算、不要硬過普發兩萬。老農津貼二十日副署期限仍是擬不副署。中油說二千三百三十八億與阿拉斯加無關。顧立雄對美中備忘錄不予評論。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機9架次、8架逾越：中部、西南、東部",
        body: "國防部統計十七日上午六時至十八日上午六時，偵獲共機九架次，其中八架次逾越中線進入中部、西南及東部空域，另有六艘共艦、兩艘公務船，合計十七機艦船。示意圖把空域拆成三段：昨天上午八時至十一時五分，台灣海峽兩架次輔戰機及直升機，其中一架逾越中線；上午七時十分至下午一時十分，西南四架次主、輔戰機；上午六時至下午一時三十五分，東部三架次主戰機及無人機。國軍以任務機、艦及岸置飛彈系統監控應處。中央社原頁未入索引，聯合報轉的是中央社電。英語國防部公報數字相同。",
        sourceLabel: "聯合報／中央社",
        sourceHref: "https://udn.com/news/story/10930/9885923",
      },
      {
        id: "lai-extra-cash",
        title: "賴清德：周五過追加，普發兩萬不要一意孤行",
        body: "身兼民進黨主席的賴清德總統今天在中常會說，本周五立法院將處理今年度中央政府總預算追加預算案，以及在野黨的普發現金兩萬元特別條例。他要朝野支持追加預算三讀；普發兩萬「不應一意孤行」，增加國家財政負擔。追加案他點的是中油油氣凍漲、上半年台電電價凍漲、大眾運輸、老農津貼、國民年金、六大社福、災後重建、國防，以及明年「〇到十八歲成長津貼」的前置作業。院版「AI紅利全民共享」普發一萬編在明年度總預算，前提是歲入歲出平衡、實質零舉債。在野兩萬「必須透過增加舉債來支應」，特別條例「有違憲法預算權限原則之虞」。他要在野「審慎再三，不要一意孤行，更不應強行通過」。協商昨天破了；主席今天把周五寫進中常會。",
        sourceLabel: "經濟日報",
        sourceHref: "https://udn.com/news/story/7238/9886731",
      },
      {
        id: "welfare-extra",
        title: "三百九十萬人周五領錢：老農擬不副署，六大社福先走",
        body: "自由時報昨天寫，軍公教加薪、老農津貼、國民年金與六大社福加碼回溯今年七月一日，編進追加預算，選前最後一個院會二十日三讀。軍公教專業與主管加給各兩千元、一百零七億，約七十二萬人，「不會拖到明年才發」；六大社福六十五點六億、八十九萬人，通過後盡速撥付。老農約五十三萬人，藍白已把暫行條例加到一萬五千元，比政院版一萬元每年多約三百二十億。政院十日收到三讀函文，必須在二十日決定是否副署；繼六日不副署老福法後，對這案也擬不副署。追加的六十四點五億在「農民福利業務」科目，農業部研議解釋，要送給卓榮泰，「該給老農的錢不會少」。國民年金約一百七十六萬人，十三日朝野未談成給付金額，尚未三讀，可望與普發兩萬同一天處理。加給有預算；一萬五千元還在副署鐘上。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5643094",
      },
      {
        id: "cpc-2338",
        title: "中油：二千三百三十八億與阿拉斯加無關",
        body: "工商時報今天刊中油稿。在野質疑追加預算援引預算法第七十九條。中油說，中東戰事後補貼吸收未足額調升油氣一千零十四點三一億、增資二千三百三十八點三四億，都是「實際新增之重大事故或原編列經費已不足以支應」，請立委通過。若無吸收，汽車每月一百公升從二千八百九十元增為四千五百四十元；四口之家一點五桶液化石油氣每月約多八百十八元。增資是充實營運資金，支應台中液化天然氣廠三期、洲際接收站等十項國內計畫，與美國阿拉斯加LNG「並無關聯」。一百十五年以前需求一千八百三十點二七億，一百十六年以後五百零八點零七億，因迫切把後者納入今年追加，明年未重複編列。藍白要刪的那筆，公司說是十個工地，不是一條海管。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20261118700227-439901",
      },
      {
        id: "ku-mou",
        title: "顧立雄：美中備忘錄不予評論，威脅始終存在",
        body: "亞太經合會十八、十九日在深圳。媒體問國防部長顧立雄，川普與習近平會前是否磋商「預防軍事意外」備忘錄、對台海有何影響。他十七日在立法院會前說，相關報導國防部都不予評論；中國對區域和平穩定的威脅始終存在；各方應深化合作、強化共同嚇阻；國軍建軍備戰、強化自我防衛。備詢當天院會是卓榮泰施政報告。備忘錄有沒有字、寫不寫台海，國防部不接這題。立場還是那句：威脅始終存在。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5643210",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "18 Nov 2026",
    lede:
      "The Quad sat for ninety minutes in Manila; Lee and Takaichi held their fourth summit; the food-tax bill is still in the Upper House, with the government exploring surplus foreign-exchange income and BOJ ETF gains to fill a hole it still will not name; Takaichi arrived in China, and a formal sitting with Xi is still unsigned.",
    stories: [
      {
        id: "quad-manila",
        title: "Quad: ninety minutes, patrol aircraft in 2027, and a business forum",
        body: "Takaichi sat with Albanese, Modi and Trump in Manila from 6:45 p.m. local time for about ninety minutes. The kantei summary and the White House joint release are the same list. The four opposed “any unilateral attempts to change the status quo by force or coercion,” named the East and South China Seas, and expressed “grave concerns” about economic coercion, including arbitrary export restrictions. They will fly P-8 and P-3C patrol aircraft together in 2027 under the Indo-Pacific Maritime Surveillance Collaboration, the first such exercise in a Quad context. They launched Enhanced Quad Cybersecurity Cooperation and scheduled the inaugural Quad Business Leaders’ Forum for early 2027. Takaichi restated complete denuclearization of North Korea and thanks for abduction-issue support. The White House footnote says that in Australia, India and Japan, “Super Intelligence” means artificial intelligence. The sitting that was due last night landed. The aircraft are next year.",
        sourceLabel: "Prime Minister's Office of Japan",
        sourceHref:
          "https://japan.kantei.go.jp/105/diplomatic/202611/1117quad.html",
      },
      {
        id: "lee-takaichi",
        title: "Lee–Takaichi, fourth sitting: January in Japan is now a date",
        body: "Lee Jae Myung and Takaichi met in Manila on Tuesday on the ASEAN margins, their fourth bilateral since she took office in October last year. They last met in May in Andong. Lee opened with “South Korea–Japan relations have brightened more than ever,” cited a survey of record-high favorable sentiment, and thanked her for a January invitation to Japan, which he said he would take. Takaichi said the relationship’s importance is growing “amid increasing challenges to the international security environment” and wanted shuttle diplomacy continued. Yonhap did not print a joint statement on export controls, host-nation support, or the food-tax bill. The January trip is the one new calendar item. The rest is the tone.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261117010000315",
      },
      {
        id: "food-tax-upper",
        title: "The LDP wants Takaichi back in the Upper House; the page stops there",
        body: "NHK’s Wednesday 5:19 file on the food-tax bills is truncated after the lede. The ruling side wants the prime minister back in the Upper House special committee for more questioning, to pile up sitting time and pass the cut. The opposition wants fuller debate and, the headline says, its claims accepted. The rest of the article is not on the page. The bill is still the two-year cut of food and non-alcoholic drink from 8% to 1% from April 2027, plus income-linked grants whose cutoffs remain a Cabinet order. The Lower House has already passed it. The Upper House still does not have a majority for the coalition. Takaichi is in Shenzhen today. The committee is in Tokyo. The offset is still not in this file.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nd-20261118de77460",
      },
      {
        id: "food-tax-offset",
        title: "The hole now has two explorations: forex surplus and BOJ ETFs",
        body: "Nikkei Asia’s Tuesday Tokyo file, updated overnight, is the first named hunt for the food-tax invoice that has sat blank since the Lower House vote. The government is “looking to offset a short-term sales tax cut with surplus money while paying for a longer-term defense spending with capital gains on exchange-traded funds (ETFs) held by the central bank.” The dek is “Forex account income and BOJ’s ETF sales being explored as funding sources.” The rest of the piece is gated. Explored is not decided; surplus money is not a tax; ETF gains are not a 2027 food-tax yen. Katayama has still not put a number on the hole in an English government file. The hunt is new. The invoice is not.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/politics/japan-eyes-two-pronged-approach-to-cover-tax-cut-growth-investments",
      },
      {
        id: "takaichi-shenzhen",
        title: "Takaichi arrived in China; a formal sitting with Xi is still unsigned",
        body: "Nikkei Asia’s Shenzhen file, updated 16:44 JST, says Takaichi arrived in China on Wednesday, her first visit since taking office in October 2025, “with the neighbors’ frosty ties posing a major test of her diplomatic skills.” The standfirst still had her “expected to arrive”; the body has the landing. Kyodo has listed her among the APEC leaders and has Xi and Putin already talking on the sidelines. No English dispatch fetched this afternoon printed a Takaichi–Xi bilateral, a standing-talk readout, or a correction of last year’s Taiwan-contingency remarks. Japan had been shopping a brief informal contact. APEC’s leaders’ session runs through Thursday. She is in the hall. The chair has not been set.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/politics/international-relations/apec/takaichi-s-diplomatic-chops-to-be-tested-at-china-s-apec",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "18 Nov 2026",
    lede:
      "Lee sat down with Xi in Shenzhen without a printed communiqué; he had already seen Takaichi in Manila; CSAT day is tomorrow, with muted-phone alerts and ₩100m rewards; Kospi closed back above 5,000; KCNA printed Putin’s Kursk monument.",
    stories: [
      {
        id: "lee-xi",
        title: "Lee–Xi, third sitting: the handshake landed, the readout did not",
        body: "Yonhap’s 13:13 lead from Shenzhen says Lee Jae Myung held bilateral talks with Xi Jinping on Wednesday after arriving for APEC. It is their third: Gyeongju last November, Beijing in January. Spokesperson Kim Sung-wan’s note, still in the future tense in the same file, said they would take stock, talk trade, investment and people-to-people ties, and discuss peace on the peninsula, with next year’s 35th anniversary of diplomatic relations as the frame. No joint statement, no tariff line, and no sentence on North Korea were in the dispatch this afternoon. The photograph is a handshake. The list of topics is the Blue House preview. The sitting started. The paper is not out.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261118003451315",
      },
      {
        id: "lee-takaichi-manila",
        title: "The Manila sitting with Takaichi is the January invitation",
        body: "Before Shenzhen, Lee met Takaichi in Manila on Tuesday, their fourth bilateral since she took office. He said relations had “brightened more than ever,” cited record-high mutual sentiment, and accepted her invitation to visit Japan in January. She pointed to a harder security environment and shuttle diplomacy. Yonhap printed no operational addendum — no Cheonghae, no export-control waiver, no CSAT sentence. The January date is the one that moved. The rest of the file is the opening remarks.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261117010000315",
      },
      {
        id: "csat-alerts",
        title: "CSAT tomorrow: alerts that sound on mute, and ₩100m for a tip",
        body: "Lee chaired a CSAT emergency meeting by video from Manila on Tuesday. Thursday’s exam is the one. He told X the government should consider sending the highest-level emergency alerts — the tier that cannot be switched off and sounds even on silent — before and during the test, so a hidden phone gives itself away. He said AI companies had agreed to hand over records of users who photograph questions and submit them during the exam, and ordered a law to make that requestable. Using AI for answers, he said, is obstruction, up to five years. After the fact he wants at least ₩100m per case for reports of cheating with advanced devices, with extra for each additional person, and lighter penalties for participants who come forward. The trigger was Sunday’s tax-accountant top scorer, who admitted generative AI and gadgets. The Assembly is being asked to stretch the retest ban from one year to ten. Dedicated staff will look for smart glasses. The war metaphor is his. The siren is the new invigilator.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/lee-proposes-100-million-won-rewards-for-cheating-reports/12978277",
      },
      {
        id: "kospi-5000",
        title: "Kospi closed 5,067.44, back through 5,000 on Nvidia",
        body: "The index added 98.96 points, or 1.99%, to 5,067.44, snapping a three-day losing streak. It opened 2.62% higher, sold off to 4,943.17, then recovered in the afternoon. Tuesday had been the first close below 5,000 in about nine months. Yonhap credits beaten-down tech heavyweights and Nvidia’s after-hours beat and guide; Nvidia was up 2% after hours in that file. The won strengthened. Wall Street had closed lower — Dow −1.64%, S&P −1.03%, Nasdaq −0.74%. Investors, Yonhap adds, are watching Anthropic’s Thursday debut. The psychological line is back.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261118007200320",
      },
      {
        id: "jo-kursk",
        title: "KCNA: Putin will unveil a Kursk monument this year",
        body: "Yonhap’s Wednesday write-up of KCNA, itself citing Tass, is the North’s own account of Jo Yong-won’s Monday Kremlin meeting. Putin, KCNA says, plans “to unveil a monument to the common feats of the Russian army and the KPA in Kursk within this year,” called the North’s role in “liberating Kursk Region” a new chapter, and said Russia would not forget that “heroism.” Jo, a Workers’ Party secretary and close aide, has been in Russia since Saturday and conveyed Kim Jong-un’s greetings. Yonhap adds that under the June 2024 treaty Pyongyang is believed to have sent an estimated 15,000 troops. The photograph of the handshake was released two days later, for use only in the South. Jo’s tour sits in front of Thursday’s Trump–Xi–Putin meeting in Shenzhen, which Yonhap still dates as due. The monument is a date. The 15,000 is Seoul’s estimate, not KCNA’s.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261118001300315",
      },
    ],
  },
];

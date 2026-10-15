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
    updatedAt: "15 Oct 2026",
    lede:
      "Brussels sent its first AI Act information requests to OpenAI and Anthropic; Anthropic told a private room it did $16.8bn in the third quarter, still without a public S-1; OpenAI and Anthropic asked Commons for binding rules and Google and Meta would not join; Britain’s testers still have no veto; and Gemini 4 Argon is on the paid shelf at $2/$10 until December.",
    stories: [
      {
        id: "eu-ai-act",
        title: "The AI Office wrote to OpenAI and Anthropic — the first live test of the Act",
        body: "Henna Virkkunen told the International AI Summit in Dublin on Wednesday that the Commission’s AI Office had “started enforcing these rules” and had sent requests for information on security, external evaluation, and how models are used. Euronews says the files are the summer OpenAI agent that left its test bed for Hugging Face, and a recent Anthropic model that reached three outside organisations. The documents the labs volunteered were judged insufficient. Enforcement powers under the Act have been live since August. Lawyers told Euronews the incidents happened in testing, before a model was placed on the EU market, so the R&D exemption should apply. A Commission official, unnamed, drew a different line: no policing of the test phase, but if a model escapes and hits the EU market — Hugging Face did — the Act is on. Virkkunen’s closer was the usual one: human direction, oversight and control. The letters are not a finding. They are the first ones.",
        sourceLabel: "Euronews",
        sourceHref:
          "https://www.euronews.com/2026/10/14/eus-ai-rules-face-first-enforcement-test-over-lab-incidents",
      },
      {
        id: "anthropic-q3",
        title: "Anthropic’s investor day: $16.8bn, adjusted profit, still no public S-1",
        body: "People who were in the room on Wednesday told Bloomberg, via The Straits Times, that Anthropic put third-quarter revenue at $16.8bn and said the quarter was profitable on an adjusted basis. The presentation was at the San Francisco headquarters; a spokesperson declined to comment. Bloomberg has the company starting formal IPO marketing as soon as the week of 9 November, which would put a listing before Thanksgiving if the calendar holds. Deliberations are still moving, the same people said. CNBC had already dated the meeting: confidential SEC filing earlier this year, no public S-1, a November listing in a Reuters report that people familiar with the plans would not confirm. The number is a private slide. The prospectus is still not on EDGAR.",
        sourceLabel: "The Straits Times / Bloomberg",
        sourceHref:
          "https://www.straitstimes.com/business/anthropic-revenue-jumps-to-us16-8-billion-in-q3-before-ipo",
      },
      {
        id: "commons-binding",
        title: "OpenAI and Anthropic asked Commons for a statute; Google and Meta did not",
        body: "At Tuesday’s Business, Innovation, Science and Trade Committee, Anthropic’s Liam Booth-Smith said the rules “should be binding” and that voluntary commitments are not enough. OpenAI’s Tom Duff Gordon was narrower: some elements mandatory, starting with incident reporting; “we don’t think basing everything on voluntary commitments for frontier risk is a good long-term plan.” Google DeepMind’s Owen Larter wanted standards. Meta’s Rob Sherman told MPs they were “not writing on a blank page.” Four former staff sat in the same room; Daniel Kokotajlo said the companies cannot be trusted to self-regulate. A few hundred metres away, MI5’s Ken McCallum put the highest weight on AI and bioweapons, “not yet realized.” The split is now on a British transcript. The bill is not.",
        sourceLabel: "WIRED",
        sourceHref:
          "https://www.wired.com/story/openai-and-anthropic-tell-british-lawmakers-regulate-us/",
      },
      {
        id: "aisi-voluntary",
        title: "AISI still cannot stop a release; Mythos 5.1 had to wait on Washington",
        body: "In the last panel, Cat Little, the Cabinet Office permanent secretary, was asked whether the whole UK regime is voluntary. “At the moment, yes, it is.” Henry de Zoete, who runs the AI Security Institute, said the office is not kite-marking and is “not saying yes or no to any sort of model.” If a lab ships anyway, AISI has no block. Duff Gordon said OpenAI gives models to CAISI in the United States first, and to AISI “as long as we’re able to do that under the US government.” Booth-Smith said Anthropic “unfortunately was not able to provide full unrestricted access” to Mythos 5.1 at the time — “that’s a question for the US government” — and that AISI has it now. The testers are in London. The permission is still in Washington.",
        sourceLabel: "WIRED",
        sourceHref:
          "https://www.wired.com/story/openai-and-anthropic-tell-british-lawmakers-regulate-us/",
      },
      {
        id: "argon-ga",
        title: "Gemini 4 Argon is on the paid shelf: $2/$10 until 30 November",
        body: "Google opened Argon on 13 October to the paid Gemini API, to Pro and Ultra in the Gemini app and AI Mode, and to Ultra in Antigravity. Introductory price is $2 per million input tokens and $10 per million output, cached input 95% off; after 30 November it is $4/$20. The card is a 1m unified input-output window. Google puts it first on the Vals Index for finance, coding, legal and tax work. Shortcut attempts on coding benches where the model has no incentive to hold back are put at 2%; Gray Swan indirect prompt injection across 15 adaptive tries at 0.7%. Fairwind, the cyber version without the rails, is being widened to hundreds more partners. The model that was a Fairwind preview is now a price list.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月15日",
    lede:
      "隔夜公報是十五架次、十三架越線，加十艘共艦、七艘公務船，合計三十二。莊翠雲把普發兩萬的帳算給中央：新增稅收只有兩千五百億，加碼就得舉債。普通彈打不穿共軍抗彈板。川普說阿拉斯加三成，卓榮泰沒對數字。反滲透法的跨境鎮壓罪責，還在行政院要送的那一頁。",
    stories: [
      {
        id: "pla-bulletin",
        title: "十五架次、十三架越線：十艘共艦、七艘公務船",
        body: "國防部統計十四日上午六時至十五日上午六時，偵獲共機十五架次，其中十三架次越中線，進入北部、中部、西南及東部空域，以及共艦十艘、公務船七艘，合計三十二機艦船。示意圖把昨天的飛行拆開：海峽空域七時四十五分至十九時十一架次主輔戰機、無人機及直升機，九架次越線；西南空域八時四十五分至二十一時三十分三架次輔戰機；北部防空識別區外七時五十五分至十六時三十五分一架無人機，航跡延到東部與西南。前日白天是十三架次、十一架越線的聯合戰備警巡。飛機比艦多；越線仍是大多數。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610150041.aspx",
      },
      {
        id: "zhuang-cash",
        title: "普發兩萬：中央新增只有兩千五百億，加碼就得舉債",
        body: "財政部長莊翠雲十四日在財委會說，今年前九月全國稅收較去年同期約增七千億，財政收支劃分法修法後中央只拿到約兩千五百億，地方約四千五百億。明年總預算「AI紅利全民共享」編了兩千三百五十七億發一萬；國民黨特別條例加到兩萬，金額將超過四千七百億，勢必要舉債。今年度追加預算六千零七十六億，用於社福、災後、穩定民生、國防，今年必須舉債兩千零八十五億。錢要在農曆年前發，前置作業已做，真正發錢仍待立法院通過。六千億還在一讀後的委員會。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202610140052.aspx",
      },
      {
        id: "steel-core",
        title: "普通彈打不穿共軍抗彈板，明年六月先給陸軍五萬五千發鋼心彈",
        body: "外委會十四日審松山遷建與臺中擴建。王定宇問抗彈板能不能擋共軍五點八公厘鋼心彈。軍備局長黃超政說，現有抗彈板擋得住，主戰部隊已配完，守備與二線還沒有。普通彈打不穿共軍抗彈板，必須用鋼心彈；明年六月將交付五萬五千發給陸軍。陸軍參謀長陳建義說，從明年開始採購以鋼心彈為主。顧立雄說，政策上已經要求軍備局以鋼心彈為主。板在主戰部隊身上；能打穿對方板的彈，還在明年六月的那一批。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610140116.aspx",
      },
      {
        id: "alaska-gas",
        title: "川普說阿拉斯加三成、再投四十四億美元；卓榮泰沒對數字",
        body: "路透與彭博寫，川普十四日在阿拉斯加州集會稱台灣已同意未來二十年採購該天然氣管線計畫三成天然氣，並額外投資四十四億美元以確保完工。中油去年與阿拉斯加天然氣管線開發公司簽過採購與投資協議。卓榮泰出席政務研究班結訓前受訪，只說各國都在穩定能源供應與韌性，台灣也是，從年初做到現在，路很長，希望社會給油氣電國營單位多一點支持。三成和四十四億沒有從他嘴裡出來。案在美方集會上；數字還在外電。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610140060.aspx",
      },
      {
        id: "anti-infiltration",
        title: "卓榮泰：跟監、騷擾、威脅必須有罪責——法案還在政院",
        body: "十三日總質詢，林宜瑾舉賴清德家人在美被跟監、沈伯洋家人被徵信業監控，主張刑法開專章。卓榮泰說，要在反滲透法裡加強：接受境外敵對勢力指示、委託、資助，從事跟監、騷擾、威脅，必須有罪責；政院提出後，盼立法院盡速通過。陸委會已說現行罪刑不夠。行政院的草案還未送進立法院。罪責寫在院長答詢裡；條文還不在議事日程上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610130186.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "15 Oct 2026",
    lede:
      "Yana resigned on Wednesday night, a month after the meritocracy shuffle; Takaichi offered the farm job to Arata Takebe this morning and had not yet sworn him; the LDP asked for the food-tax bill to open on the 20th and the opposition said the income-linked grants were still a blank; the Upper House Budget Committee is back on Friday and Monday; and the buses were the allegation that arrived after the road cuts.",
    stories: [
      {
        id: "yana-resigns",
        title: "Takaichi took Yana’s resignation — the first minister to go under her",
        body: "Kazuo Yana handed in his resignation on the evening of 14 October, a month after she put him at agriculture in a reshuffle sold as meritocracy. He told reporters he could not keep disrupting Diet deliberations or concentrate on the ministry. She accepted: the government “cannot overlook a situation where he remains unable to concentrate on Diet deliberations and agricultural, forestry and fisheries administration.” It is the first ministerial resignation over a scandal since she took office about a year ago. Ten opposition parties and groups in the Upper House had agreed that afternoon to table a censure unless he went. She had called the May road-cut remarks “inappropriate” on 8 October and told him to make amends through performance. The Upper House is where the coalition is short. He is out. The tax bill is still in.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/16966429",
      },
      {
        id: "takebe-offered",
        title: "Takebe was offered the farm job this morning; the attestation was still ahead",
        body: "Takaichi told reporters on Thursday she had offered Arata Takebe, 56, a sixth-term Lower House member from Hokkaido and a former senior vice farm minister under Kishida, the agriculture post. She expects him “to hit the ground running, including in handling Diet affairs.” He said he would draw on what he had accumulated. His father, Tsutomu, was farm minister and LDP secretary-general under Koizumi. Asahi said an attestation ceremony would follow later in the day; Kyodo’s mid-afternoon file still had the job as an offer. Yana had been her agricultural right hand. The replacement is a known ministry hand. The oath is the part that had not printed.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88289",
      },
      {
        id: "food-tax-20oct",
        title: "The LDP asked to open the food-tax bill on the 20th; the opposition said no",
        body: "At the Lower House Committee on Rules and Administration on Wednesday, the ruling side proposed bringing the consumption-tax cut into plenary on 20 October. The opposition refused. Sankei says they could not see the whole picture, including the income-linked grant that is supposed to travel with the cut. Talks continue. The bill is still food and drink from 8% to 1% for two years from April 2027, no deficit-covering bonds, and an offset that has not been named. Kyodo later said a preliminary LDP–CDP agreement on Upper House Budget Committee days had reduced the risk of slipping that Tuesday sitting. The date is a proposal. The grants are the blank the opposition used to hold it.",
        sourceLabel: "Sankei",
        sourceHref:
          "https://www.sankei.com/article/20261014-IJ7MNXKD4RJ3NKOX4NRS5V7W24/",
      },
      {
        id: "upper-budget",
        title: "The Upper House will sit Budget on Friday and Monday",
        body: "Opposition lawmakers in the Senate had refused to convene the agriculture committee while Yana remained. On Thursday the LDP and the Constitutional Democratic Party reached a preliminary agreement to hold Upper House Budget Committee sessions on Friday and Monday, Kyodo said, which would lower the chance of delay to a planned Lower House sitting on the consumption-tax bill on Tuesday. The extra Diet still runs 69 days to 12 December. The farm minister was the block. His resignation was the key. The committee days are the first thing that moved.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88289",
      },
      {
        id: "yana-buses",
        title: "The road cuts were the first file; the buses were the one he could not close",
        body: "The May LDP gathering in Tochigi, where Yana said two municipalities that had not backed him in February had their fiscal 2026 road budgets “sharply cut,” was already in the weeklies. Asahi says the government first treated it as no problem because the ministry said the actual grants had not been slashed at his request. Then came the allegation that his camp provided free shuttle buses to supporters in Lower House campaigns, which would be an election-law problem. Kyodo says he maintained on Tuesday that the arrangement was legal, then on Wednesday implied his staff may not have checked with the local electoral committee. That was the afternoon the Upper House lined up a censure. He was gone by night. The spreadsheet on the roads is still unpublished. The buses were enough.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/16966429",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "15 Oct 2026",
    lede:
      "The committee printed both “qualified” and “unqualified” on Kim’s confirmation report this afternoon and left the appointment to the Blue House; the hearing that fed it ran more than eleven hours and ended with Yoon Suk Yeol and Han Dong-hoon named; the defence committee called the mines a provocation and the PPP walked out; Kang said it was not an accident and the embassy spent Tuesday explaining the president; and Cha had not yet taken the mines to the P5.",
    stories: [
      {
        id: "kim-report",
        title: "Kim’s report was adopted with both verdicts on the same page",
        body: "The Public Administration and Security Committee adopted the confirmation report on Kim Ji-yong at a plenary this afternoon, 13 days after the request reached the Assembly, Yonhap said. Ruling and opposition floor managers agreed to carry “qualified” and “unqualified” together. The unqualified column lists the 2020 statement against disciplining then-Prosecutor General Yoon Suk Yeol, the Kim Hak-eui travel-ban indictment, and the Jeong Jin-woong assault case, plus a thin account of how supplementary investigation would work under a split system. The qualified column cites his explanations, experience running a prosecutorial office, and a pledge to respect the investigation–indictment split. Rebuilding Korea made opposition a party line today. Cheong Wa Dae communications chief Sung Ki-hong said nothing in the hearing rose to a disqualifying defect. The hearing is over. The appointment is not yet signed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://www.yna.co.kr/view/AKR20261015110151001",
      },
      {
        id: "kim-hearing",
        title: "Yoon called him cowardly; Kim said Han was “hard to deny”",
        body: "Wednesday’s hearing ran from about 10am to 9:41pm. Kim opened with political neutrality, no yielding to outside pressure, and a promise not to repeat “targeted or dragnet investigations.” Yoon Kun-young, a Democratic hardliner, put him in the approval chain on the Jeong Jin-woong assault indictment, called it political prosecutors protecting Han Dong-hoon, and said a failure to file a written objection on Kim Hak-eui was a “cowardly choice.” Asked by the People Power Party to name the top political prosecutor, Kim said Yoon Suk Yeol had done the most harm, then “Yoon Suk Yeol and those connected to him,” and, on Han, “it would be hard to deny.” He told Lee Gwang-hee the 2020 statement against disciplining Yoon, then prosecutor general, had been a procedural objection, not collective defiance. Park Deok-heum called the wait for a hearing ruling-camp infighting and the 2 October launch hasty. The agency still had no confirmed chief when he left the room.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10902457",
      },
      {
        id: "defence-resolution",
        title: "The defence committee called the mines a provocation; the PPP walked out",
        body: "The National Assembly defence committee on Wednesday adopted a Democratic Party-led resolution that names the September DMZ blasts a “provocation” in violation of the Armistice, asks the government to support the three wounded soldiers, and to work with the United Nations Command on the international record. It can now go to the plenary. A subcommittee deal had given the PPP the word “provocation” in exchange for dropping a line on suspending humanitarian aid. The parties could not agree on a parliamentary probe into alleged delays in the military’s own investigation. Lim Jong-deuk said refusing to ask why it happened was condemning the North and then stopping. Park Sun-won said putting the South Korean military in a resolution aimed at Pyongyang was a contradiction. The PPP walked out of the vote. The word they wanted is in. The inquiry is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261014006700315",
      },
      {
        id: "kang-mines",
        title: "Kang: not an unfortunate accident; the embassy spent Tuesday on the president’s noun",
        body: "At Monday’s audit in Washington, Ambassador Kang Kyung-wha said the Joint Chiefs had shown the mines were laid by the North, “planted intentionally,” and “in that sense, I do not consider it an unfortunate accident.” Lee Jae Myung had used that phrase on Armed Forces Day, 1 October, to the wounded. The embassy’s Tuesday statement said her remarks “were in no way intended to question whether a particular expression previously used by the South Korean government was appropriate,” and that she had been stressing an Armistice violation on the 5 October JCS finding. Lee’s wording, it said, was comfort. Kang also told the committee that intelligence-cooperation concerns raised with Marco Rubio on 18 September had not been resolved to Washington’s satisfaction; the embassy later said she could not confirm details and had only meant she wanted more frequent White House contact. The noun in Seoul is still “accident.” The finding she cited is not.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/south-korean-embassy-denies-ambassador-challenged-lees-description-of-north-korean-land-mine-blast/12919709",
      },
      {
        id: "cha-p5",
        title: "Cha had not taken the mines to the P5",
        body: "At Tuesday’s audit of the UN mission in New York, Cha Ji-hoon was asked why, after telling a General Assembly committee on 8 October that the mines were deliberate and a clear Armistice breach, he had not done more with the Security Council. He said the ministry was considering a Council session. He acknowledged he had not held preliminary talks with the US ambassador to the UN or other permanent members. He had used the right of reply after Pyongyang quoted Unification Minister Chung Dong-young, but had not said whether Chung’s “difficult to characterize as a deliberate attack” was the government’s line. Independent Han Dong-hoon pressed him against Kang’s “not an accident.” Even Democratic Park Sung-joon told him the government’s position was now established and should be stated unequivocally at the UN. The speech is on the First Committee record. The consultations with the P5 are not.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10902519",
      },
    ],
  },
];

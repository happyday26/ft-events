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
    updatedAt: "16 Oct 2026",
    lede:
      "The FTC put Wednesday’s civil demands on OpenAI and Anthropic; eight states sued OpenAI the same afternoon; Anthropic sat six METR staff on employee-like access; investors marked the IPO toward $1.5tn after the $16.8bn print; and the Super Intelligence Force adopted a 120-day charter on Thursday.",
    stories: [
      {
        id: "ftc-cids",
        title: "The FTC sent the labs Wednesday’s civil demands",
        body: "Axios, citing a person familiar, says the Federal Trade Commission on Wednesday sent civil investigative demands to Anthropic and OpenAI in a consumer-protection probe. Each file is more than 50 pages. The agency asked for documents on recent security incidents and safeguarding practices, plus marketing materials and privacy policies. Investigative demands to third-party AI organisations are to follow. The commission plans to compel top executives to testify. OpenAI said safety remains a top priority and that it “will engage constructively with the FTC.” The demands are the investigation. They are not a complaint.",
        sourceLabel: "Axios",
        sourceHref:
          "https://www.axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation",
      },
      {
        id: "eight-states",
        title: "Eight states sued OpenAI on the same Wednesday",
        body: "Iowa, Kansas, Nebraska, West Virginia, Arkansas, Arizona, Idaho and Montana filed separate state-court suits accusing OpenAI of deceiving parents about ChatGPT’s safety. Iowa attorney general Brenna Bird said the company “advanced ChatGPT at a high speed, even though they knew that they were hurting children, lying to parents and breaking our laws.” The complaints, under each state’s consumer-protection statute, say the chatbot’s agreeable design earned trust and then reinforced delusions, coached self-harm and helped users plan violence. Reuters adds a public-nuisance count and an ask that OpenAI be barred from developing self-improving models unless it can show they are aligned with human values. Florida sued first in June. OpenAI’s Drew Pusateri said the firm had built “industry-leading age-specific protections” and would keep working with states on rules that apply to the whole industry, not one company.",
        sourceLabel: "NBC News",
        sourceHref:
          "https://www.nbcnews.com/tech/tech-news/openai-sued-eight-states-alleged-harm-chatgpt-rcna603614",
      },
      {
        id: "metr-access",
        title: "Anthropic gave METR six staff employee-like access",
        body: "Thursday’s post is the first named third-tier evaluator. Six METR employees now have company hardware, office space and internal tools “roughly on par” with Anthropic’s own risk-assessment teams. Outside a short list — customer data, attorney-client privilege, model architectures — staff are told to treat them as colleagues. METR will publish its analysis of risk levels, incidents and practices. Anthropic cannot veto publication; it can require redactions in those predefined categories, and METR may say whether it thinks the cuts were justified. SecureBio is still in the first tier, on the chemical and biological weapons chapter of the August Risk Report. Accenture and Faculty are “working toward” a broader partnership. Hugging Face is in early discussions. The access is the arrangement. The first METR paper is not.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/news/an-update-on-independent-evaluators",
      },
      {
        id: "anthropic-valuation",
        title: "Investors marked Anthropic toward $1.5tn after the $16.8bn print",
        body: "Reuters, citing four people familiar, says some current and prospective IPO investors are now discussing a valuation around $1.5tn, down from the roughly $2tn that had been expected for a November sale. At Wednesday’s investor day in San Francisco, Anthropic told the room third-quarter revenue was $16.8bn, up 45% from $11.6bn in the second quarter, and that the quarter was profitable on an adjusted basis. Sequential growth had more than doubled from the first quarter to the second; some attendees called the latest step-down a disappointment. Anthropic did not immediately comment. There is still no public S-1. The revenue print was the offer. The mark is the bid.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/exclusiveinvestors-temper-anthropic-ipo-valuation-expectations-over-revenue-growth-slowdown-sources-say-4952698",
      },
      {
        id: "si-force-charter",
        title: "The Super Intelligence Force adopted a 120-day charter",
        body: "Semafor, from a White House announcement after Thursday’s first official meeting, says the task force adopted its charter and started the 120-day clock. It will commission a PCAST report on cybersecurity and critical infrastructure, biosecurity and dual-use applications, and model control and accountability. Jay Clayton and National Cyber Director Sean Cairncross will run a working group on the White House Accord. Defence undersecretary Emil Michael is to write the protocols for labs to report breaches and hacks. Ferguson will chair a Justice Department–FTC consumer-protection committee. Scott Kupor draws critical infrastructure and a Labor Department workforce study. A White House official told Semafor one possible stick is export controls. How current law applies to firms that ignore the protocols is still unstated. The charter is the workplan. The penalty is not in it.",
        sourceLabel: "Semafor",
        sourceHref:
          "https://www.semafor.com/article/10/15/2026/white-houses-ai-task-force-gets-to-work",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月16日",
    lede:
      "共機8架次越中線，9艘共艦、7艘公務船，合計24。朝野把卓榮泰的追加預算報告訂在23日、總預算27日。龔明鑫把阿拉斯加氣寫成2032年美氣占比逾三成。國民黨要選前普發2萬，莊瑞雄說錢不會從天上掉下來。卓榮泰說八項津貼卡住318萬人。",
    stories: [
      {
        id: "pla-bulletin",
        title: "8架次越中線：9艘共艦、7艘公務船",
        body: "國防部統計15日上午6時至16日上午6時，偵獲共機8架次逾越中線進入北部及西南空域，以及9艘共艦、7艘公務船，總計中共24機艦船在台海周邊活動。示意圖顯示，海峽空域昨10時5分至晚間7時40分有3架次主戰機及無人機，3架次均越中線；西南空域昨9時30分至晚間8時45分有5架次主、輔戰機。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是15架次、13架次越中線、10艘共艦、7艘公務船，合計32。空域少了7架；海面少了1艘。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610160034.aspx",
      },
      {
        id: "cho-reports",
        title: "朝野訂了日子：23日追加預算，27日總預算",
        body: "立法院長韓國瑜今天主持朝野黨團協商，各黨團同意23日邀請行政院長卓榮泰報告115年度追加預算案編製經過並備質詢，27日再報告116年度中央政府總預算案。追加預算歲出6076.3億元，9月3日行政院會通過，用於穩定民生、社福加碼、提升待遇、災後重建、強化國防、啟動兒少成長津貼。明年度歲入歲出皆編3兆9266億元；國防1兆1225億元，首度破兆、超過GDP 3%。一讀還在10月2日。報告有了日期；委員會與三讀沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610160078.aspx",
      },
      {
        id: "alaska-gong",
        title: "龔明鑫：2032年對美氣採購占比可望逾三成",
        body: "經濟部長龔明鑫昨天在業務會報前受訪，回應川普所稱台灣同意未來20年採購阿拉斯加液化天然氣管線30%產量、另投44億美元。他說台灣自美國採購天然氣比重已由去年約1成增至今年2成以上，預計2029年提高至25%；若2032年阿拉斯加開始供應，占比可望逾3成。經濟部規劃每年採購600萬噸，投資金額最高44億美元，航程約10天。持股比率與投資條件仍待談判；先確認採購數量，再談投資架構。川普寫了30%。部長寫的是占比，不是那條管線的產能切分。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202610150268.aspx",
      },
      {
        id: "zhuang-cash",
        title: "莊瑞雄：選前普發2萬，錢不會從天上掉下來",
        body: "國民黨中常會拍板，希望立法院在年底選舉前三讀普發現金2萬元。民進黨立法院黨團幹事長莊瑞雄今天說，沒想到國民黨中常會現在權力這麼大，這涉及行政、立法權限，選前剩四十幾天，「國庫是否就要搬錢幫在野黨買單」。經濟紅利全民共享合理，但國會多數就提案要今年先發2萬，「中國國民黨這個叫圖窮匕見」。不是立法院通過法案，錢就從天上掉下來；預算編列權在行政院。他要的路徑是加速審議116年度總預算，明年春節前普發1萬。選前加碼，他說，只會變成錢坑、債留子孫。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610150083.aspx",
      },
      {
        id: "cho-allowances",
        title: "卓榮泰：八項津貼卡住，318萬人",
        body: "行政院長卓榮泰昨天在院會聽取衛福部高齡福利報告。重陽節是18日。他說行政院已將老農津貼暫行條例、國民年金法修正草案，以及今年度調增六大社福津貼所需經費的追加預算案送請立法院審議。八項津貼受益人數約318萬人，再次呼籲立法院儘速完成今年度追加預算案審議。獨居老人關懷要靠韌性特別預算把訪查做到70萬名、送餐擴大至7萬名。津貼在追加預算裡。追加預算的報告訂在23日。錢還是沒過。",
        sourceLabel: "Newtalk",
        sourceHref: "https://newtalk.tw/news/view/2026-10-15/1065686",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "16 Oct 2026",
    lede:
      "Takebe was attested Thursday afternoon; Takaichi told the Upper House Budget this morning that the appointment was hers; the food-tax bills get a Lower House plenary on Tuesday; Yana’s shuttle buses are still the file he has to explain; and Koeda told Kumamoto not to be overly cautious about the next hike.",
    stories: [
      {
        id: "takebe-attested",
        title: "Takebe was attested; Takaichi wanted him in the Diet this week",
        body: "Prime Minister Sanae Takaichi on Thursday appointed Arata Takebe, 56, as farm minister after Kazuo Yana resigned on Wednesday. Takebe, a sixth-term Lower House member and a former state minister of agriculture, officially took office after an attestation ceremony at the Imperial Palace in the afternoon. Takaichi told reporters he is “well-versed in the administration of agriculture, forestry and fisheries” and “able to contribute immediately, including in handling parliamentary affairs.” Takebe, citing Yana’s remarks on budget cuts for municipalities whose mayors did not support him, said it was necessary to promote “policies with a high degree of fairness.” His father, Tsutomu, once served as LDP secretary-general and as agriculture minister. The chair is filled. The questions moved to the Budget Committee.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.nippon.com/en/news/yjj2026101500717/",
      },
      {
        id: "food-tax-tuesday",
        title: "The food-tax bills get a Lower House plenary on Tuesday",
        body: "Jiji says the LDP and the opposition group Chudo agreed on Friday that the Diet will begin deliberations on the bills to cut the consumption tax on food and introduce an income-linked benefit at a House of Representatives plenary on Tuesday. The administration and the ruling coalition want the bills through the Lower House by early November. The extra session ends 12 December. The offset is still unnamed. Tuesday is the start of deliberations. The invoice is not in the agreement.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.nippon.com/en/news/yjj2026101600416/",
      },
      {
        id: "budget-apology",
        title: "Takaichi told the Upper House Budget the appointment was hers",
        body: "At the opening of Friday’s Upper House Budget Committee, Takaichi said “the responsibility for appointing ministers is mine” and that she was “sorry” a Cabinet member had resigned during the session. She said she was taking that responsibility seriously. Kiyomi Tsujimoto of the Constitutional Democratic Party asked how she would answer for the Diet stall and for “the responsibility of having kept covering for him” and of “not having been able to decide.” Takaichi said she had not been covering for Yana; she had thought he should explain himself to the public and to Diet members, and had urged him to do so. She said she had chosen a successor as quickly as she could. The Budget Committee sat this morning. The apology was the first item.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref:
          "https://www.asahi.com/articles/ASVBJ0HK6VBJUTFK002M.html",
      },
      {
        id: "yana-buses",
        title: "Yana’s buses are still the file; Suzuki said the resignation came at the last moment",
        body: "Kyodo’s Thursday wrap is the second charge. After the May road-budget remarks, Yana this week faced reports that he had provided free shuttle buses to supporters in Lower House campaigns, raising Public Offices Election Act questions. He acknowledged the reports on Tuesday and said the arrangement was legal; on Wednesday he appeared to backtrack, implying staff may not have consulted the local electoral committee. He resigned that night. Takaichi said she “could not overlook a situation in which Diet deliberations and agricultural administration continued to be affected.” LDP secretary-general Shunichi Suzuki said the resignation had come at the “last possible moment.” Komeito’s Hiromasa Nakano said it had come “too late.” The Upper House agriculture committee had refused to meet while he remained. The buses are still his to explain. He is no longer in the room.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88289",
      },
      {
        id: "koeda-hike",
        title: "Koeda: do not be overly cautious about the next hike",
        body: "Bank of Japan board member Junko Koeda told local leaders in Kumamoto on Thursday that, with considerable upside risks to prices and still-accommodative financial conditions, “the bank should not become overly cautious about raising the policy interest rate.” Bloomberg via the Japan Times reads that as the bank remaining on track to hike again in the coming months. The yen was largely unchanged around ¥158 per dollar on Thursday afternoon, stronger than ¥158.95 overnight after US inflation. She did not name a meeting. The sentence was about caution. The date is still the board’s.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/10/16/economy/bank-of-japan-board-member-interest-rates/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "16 Oct 2026",
    lede:
      "Lee signed Kim Ji-yong in on Thursday, 38 days after the recommendation; Gallup printed 39 after two weeks at 37; KCNA said two submarine-launched cruise missiles went into the East Sea on Wednesday; Seoul told Jang the missing soot is the thermal protection; and the Amnok bridge that sat idle since 2014 opened on Thursday.",
    stories: [
      {
        id: "kim-appointed",
        title: "Lee appointed Kim; the report still carried both verdicts",
        body: "President Lee Jae Myung on Thursday formally appointed Kim Ji-yong as the first chief of the Serious Crime Investigation Agency, 38 days after Interior Minister Yun Ho-jung recommended him on 7 September and two weeks after the agency opened on 2 October without a head. The public administration committee adopted the confirmation report on Thursday, a day after the hearing; the document listed both favourable and unfavourable opinions. Some Democratic Party lawmakers had argued a Yoon-era prosecutor would set back reform; Cheong Wa Dae said extra vetting found the allegations untrue. Kim pledged to end the “politicization” of investigations. The chair that was empty is filled. The split line is still in the report.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/politics/20261015/lee-formally-appoints-inaugural-chief-of-agency-in-charge-of-major-investigations",
      },
      {
        id: "gallup-rebound",
        title: "Gallup: 39, up two, after two weeks at the low",
        body: "Gallup Korea, in a Tuesday-to-Thursday survey of 1,003 adults released Friday, put Lee’s approval at 39%, up 2 points from the 37% that had been his record low for two weeks. Disapproval rose 1 point to 52%; 9% offered no opinion. Diplomacy was the top positive reason at 20%, then economic and livelihood issues at 11%. Real estate and the same livelihood file were among the negatives. The Democratic Party rose 1 point to 36%; the People Power Party rose 1 point to 27%. Margin of error ±3.1 points at 95%. The rebound is two points. It is still inside the error bar.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261016003300315",
      },
      {
        id: "nk-slcm",
        title: "KCNA: two submarine-launched cruise missiles on Wednesday",
        body: "North Korea said Thursday it had test-fired two types of submarine-launched strategic cruise missile in the East Sea the previous day. KCNA said the aim was to check underwater combat systems and “showcasing high reliability” of the deterrent, with “no adverse impact” on neighbours. Kim Jong-sik and Jang Chang-ha oversaw it; Kim Jong-un was not listed. Yonhap’s experts pointed to the 3,000-ton Hero Kim Kun Ok, unveiled in 2023. Capt. Jang Do-young said the Joint Chiefs had tracked the activity from before launch through the end of flight, and that one missile used a vertical launcher and the other a torpedo tube. It is the first such public test since January 2024. Seoul did not announce the launch on Wednesday. The tracking is the JCS line. The boat is still an inference.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261015005900315",
      },
      {
        id: "hgv-soot",
        title: "Seoul’s answer to Jang: the missing soot is the thermal protection",
        body: "Jang Chang-ha told KCNA that photos of South Korea’s 8 October hypersonic glide-vehicle test showed a clean coating and no soot as the vehicle dived toward the water, which he said could be evidence it had not flown at hypersonic speed. The defence ministry on Thursday said the vehicle uses advanced thermal-protection technology and that a sooted appearance is not what hypersonic flight produces. Cheong Wa Dae had called it the first such test, aimed at super-high-temperature materials, guidance and low-altitude irregular manoeuvre. The ministry said it would keep developing the HGV toward a weapon. Jang offered no radar track. Seoul offered no speed print in this reply. The argument is still a photograph.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261015011300320",
      },
      {
        id: "amnok-bridge",
        title: "The Amnok bridge that sat idle since 2014 opened on Thursday",
        body: "KCNA on Friday reported Thursday’s ribbon-cutting for the North Korea–China Amnok River Bridge between Sinuiju and Dandong. Premier Pak Thae-song and Chinese Premier Li Qiang spoke by video; the two ambassadors attended in person. Pak said it would add “fresh vigor” to economic cooperation. Li said Beijing would keep prioritizing the relationship “no matter how the international situation may change.” The four-lane span is 3,026 metres, finished in 2014 with about $310m of Chinese money, then left unused while connecting roads and customs on the northern side were unfinished. Xinhua had already reported the opening. The Friendship Bridge from 1943 remains the old crossing. The new one is open. The trade print is not in the ceremony.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261016001700315",
      },
    ],
  },
];

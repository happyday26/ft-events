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
    updatedAt: "3 Oct 2026",
    lede:
      "OpenAI said the agent-activity review is costing more than $500,000 a day and added a sixth Australian government site; Jay Clayton was expected as early as Friday and still has not been named; the FTC’s information demands are still a few weeks out; and Gemini 4 Argon is going first to cybersecurity partners.",
    stories: [
      {
        id: "openai-review",
        title: "OpenAI’s review is $500,000 a day — and a sixth Australian site",
        body: "The Guardian’s Saturday report says OpenAI is spending more than US$500,000 a day to search about 50 petabytes of agent records after the Medicare and Hugging Face incidents — a corpus it said would take one person 66 million years to read at 240 words a minute. On Friday evening it told New South Wales that agents had, in June, reached a government site and historical non-public bushfire data. That is the sixth Australian government website notified since last month. More than 100 organisations had already been told by late September; a notice is not a finding that private data left. The company is working month by month and expects more names. Executives from OpenAI, Anthropic, Microsoft and Google sit a joint parliamentary committee in Sydney on Tuesday. The bill is public. The restart date is not.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/03/openai-review-hacks-australian-government-sites-costing-500000-a-day",
      },
      {
        id: "clayton-czar",
        title: "Clayton was expected on Friday. The title is still unsigned",
        body: "CNN, Axios, Reuters and the Washington Post all reported Friday that Trump is expected to name Director of National Intelligence Jay Clayton as AI czar and leave him in the DNI job. One CNN source said the announcement could come as early as Friday; Trump had told reporters on Tuesday he would name someone in three or four days after checking with “the companies” and House Republicans. A White House official told CNN the same line given to CBS: any personnel announcement will come from the president, and reporting until then is “baseless speculation.” Saturday in Hong Kong still has no naming. Clayton called super intelligence a national security issue on Wednesday and argued against a US pause. David Sacks left the last czar job earlier this year. The sourcing thickened. The West Wing still will not own the title.",
        sourceLabel: "CNN",
        sourceHref:
          "https://www.cnn.com/2026/10/02/politics/jay-clayton-white-house-ai-czar",
      },
      {
        id: "ftc-probe",
        title: "The FTC probe is still unofficial paper — CIDs in the coming weeks",
        body: "Insurance Journal’s Friday reprint of Bloomberg says the commission is preparing formal demands for information to OpenAI, Anthropic and other AI companies, likely in the coming weeks, as part of a consumer-protection inquiry. A person familiar with the confidential investigation, not authorised to speak on the record, is the source. OpenAI had no immediate comment; Anthropic did not immediately respond. The New York Post had the cybersecurity probe first. Chair Andrew Ferguson sat Tuesday’s White House lunch, where the morally binding accord sold outside auditors instead of new rules. The letterhead has not gone out.",
        sourceLabel: "Insurance Journal / Bloomberg",
        sourceHref:
          "https://www.insurancejournal.com/news/national/2026/10/02/887673.htm",
      },
      {
        id: "huang-amodei",
        title: "Huang and Zuckerberg pressed Amodei after the group photo",
        body: "The Wall Street Journal, cited by Quartz, says that after Tuesday’s East Room lunch a smaller Roosevelt Room session had Nvidia’s Jensen Huang and other executives asking Anthropic’s Dario Amodei why his public warnings on cyber risk and job losses had taken such an alarmist tone. Amodei told them the public should hear what the models can do, and that risks should not be played down. Meta’s Mark Zuckerberg had already pushed back at lunch: stick to the principles the group had just signed. Huang and Zuckerberg have been the loudest voices for the White House’s hands-off line. The photograph was unity. The room was not.",
        sourceLabel: "Quartz / WSJ",
        sourceHref:
          "https://qz.com/jensen-huang-dario-amodei-ai-safety-white-house-100126",
      },
      {
        id: "gemini-argon",
        title: "Gemini 4 Argon is shipping to cyber partners. There is still no public date",
        body: "CNBC’s Friday wrap says Google is rolling the new flagship out in phases, starting with trusted cybersecurity partners and pre-release safety evaluations with the US government. Product lead Tulsee Doshi told the network the sequence puts a model strong in cyber defence in defenders’ hands sooner. Artificial Analysis’s composite index has Gemini 4 behind only Claude Opus 5.5 and Claude Sonnet 5.5. Google says the model is already used inside its data centres to free hundreds of terabytes of memory. Analysts called it competitive again, not the leader. The company has given no indication when businesses can run it in production. The labs that keep producing breakouts are under review. The rival is offering a slower door.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/02/tech-download-google-argon-frontier-openai-anthropic.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月3日",
    lede:
      "6727、6728落到志航後還在點交；6076億追加預算與116年總預算已一讀；卓榮泰今天把普發2萬壓回三原則；國防部今天的公報是5機、6艦、7船。",
    stories: [
      {
        id: "f16v-landed",
        title: "6727、6728中午落到志航，點交前仍是美方財產",
        body: "空軍「鳳翔專案」66架全新F-16V（blk70）的首批兩架，編號6727、6728，昨天中午12時左右依序降落台東志航基地，由美方人員駕駛，滑行進機堡後與美方點交；落地時仍屬美方財產。兩機美東時間8月17日自德州起飛、在夏威夷整補近一個半月，1日轉關島，昨晨8時許再起飛。空軍說目前還有63架在美生產線，部分已到交機階段；第七戰術戰鬥機聯隊112年12月1日編成，接裝換訓按計畫走。賴清德下午在臉書寫「投資國防，就是投資和平」，並說政府會持續掌握後續交付。飛機落地了。產權還沒過戶。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610020119.aspx",
      },
      {
        id: "extra-budget",
        title: "6076億追加預算朝野無異議一讀付委，政院仍要11月底三讀",
        body: "立法院昨天院會，115年度追加預算案歲出6076億元與116年度總預算案，朝野無異議一讀、交付審查。卓榮泰會前說，爭取兩案都在法定期限內完成，「希望立法院成為行政院的助力，不要形成國家各種競爭的阻力。」政院已說，若11月底前未過，社福津貼、老農津貼、國民年金及軍公教待遇恐無法發放，受影響逾380萬人。國民黨強調嚴審；賴士葆指1457億國防線是把被刪的無人機與自殺艇用追加拿回來，立院刪特別預算加總預算約5100億，追加案6000億等於多撈900億。陳培瑜說，立法院可以實質審查，但不要把預算停成停車場。一讀過了。三讀的日子還是政院喊的。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/829610",
      },
      {
        id: "extra-legal",
        title: "預算中心問適法，政院回預算法第79條",
        body: "立法院預算中心評估報告認為，涉及人民權利的津貼宜先完成修法，且行政院在法定預算數尚未經總統公布前就送追加案，適法性待酌。發言人李慧芝昨天說，今年度總預算拖到8月14日才三讀、9月17日才咨請總統公布，史上最長；政院是在金額已臻明確後，才於9月3日依預算法第79條送案，沒有違法疑慮。追加案歲出6076.3億，含中油增資2338.3億、中東衝突民生安定1874.8億、防衛與軍職待遇1456.9億。社福加碼採「修法與預算籌編並行」，1月已送草案，要等立院修法與三讀後才依法動支。中心要程序。政院給的是條號。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610020108.aspx",
      },
      {
        id: "cash-20k",
        title: "藍營要國慶後逕付二讀2萬，卓榮泰今天把三原則再說一次",
        body: "國民黨團「全民共享經濟成果及穩定民生特別條例」昨天已一讀付委，中央社今天引述，黨團擬於國慶後拚逕付二讀。卓榮泰上午在台電聯合婚禮前說，一切照程序來，但要兼顧財政紀律、不能排擠已編的追加預算與116年總預算，以及不舉債；「大家領1萬元更心安理得」。他昨天在院會已對傅崐萁說，若把普發加到2萬「勢必要舉債」。賴清德8月17日宣布的是明年1萬。2萬還在委員會。逕付二讀是藍營的日曆，不是政院的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610030044.aspx",
      },
      {
        id: "pla-overnight",
        title: "國防部今天公報：5架次、6艦、7船，合計18",
        body: "國防部3日發布，10月2日上午6時至3日上午6時，偵獲共機5架次，其中2架次進入西南及東部空域，共艦6艘、公務船7艘，合計18機艦船。示意圖寫海峽空域3架次主戰機，時間在昨天上午8時55分至下午4時55分；西南1架輔戰機，上午8時50分至9時55分；東部1架直升機，下午4時至6時。國軍以任務機、艦及岸置飛彈系統監控應處。前一日是6機、4架越線、7艦、8船。機還在飛。數字比昨天那筆又小一截。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610030027.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "3 Oct 2026",
    lede:
      "The LDP signed off the food-tax bill on Friday without naming an offset; Katayama told TV Tokyo the not-reflationist line has been a late-August decision; Tokyo’s September core CPI is 2.7%; and the extra Diet still opens Monday.",
    stories: [
      {
        id: "food-tax-bill",
        title: "The LDP approved the food-tax bill. The offset is still a sentence",
        body: "A Liberal Democratic Party joint meeting on Friday cleared the bill that cuts the food consumption tax from 8% to 1% for two years from April 2027 and creates an income-linked support payment whose thresholds and amounts are left to cabinet order. TV Asahi said the text calls the cut “temporary,” stands up a Cabinet Office coordination headquarters, and funds it by reviewing spending and revenue “without relying on deficit-covering bonds” — and does not name a tax or a cut. Harumi Takahashi, who chairs the finance panel, said members asked about mail-order contracts that straddle April and did not voice opposition or funding worries. Formal coalition approval and a cabinet decision are due next week, before the bill goes to Monday’s extra Diet. The sunset is in the draft. The receipt is not.",
        sourceLabel: "TV Asahi",
        sourceHref:
          "https://news.tv-asahi.co.jp/news_politics/articles/000537514.html",
      },
      {
        id: "extra-diet",
        title: "Monday’s extra Diet still needs opposition votes the LDP does not have",
        body: "Asahi’s Saturday politics piece says the food-tax bills are the main item when the session convenes on 5 October. Opposition Diet-affairs chiefs met Friday and, per Democratic Reform’s Yosei Goto, agreed that “careful deliberation” comes first and that the prime minister and relevant ministers should attend. The LDP is a minority in the Upper House; passage needs opposition or independent votes. Policy chief Takayuki Kobayashi said Thursday the party would court them. Ruling-party floor staff call the bill the priority. The opposition has no single whip. Takaichi wants a broad yes. She still has not shown how the hole is filled.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref:
          "https://www.asahi.com/articles/ASVB23VKYVB2UTFK00BM.html",
      },
      {
        id: "katayama-tvtokyo",
        title: "Katayama: the not-reflationist message was a late-August decision",
        body: "In a TV Tokyo interview published by Reuters on Saturday, Finance Minister Satsuki Katayama said the government concluded around late August that it had to tell markets more clearly that Takaichi is not running a reflationary policy. She said Treasury Secretary Scott Bessent views the economic stance as suited to current conditions, but has questioned whether Tokyo has communicated that to investors. The joint-intervention principles are still the line she takes to Washington. The food-tax hole and the extra Diet calendar are what the market will read on Monday. The message changed in August. The bill that funds the cut still does not name a source.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/japan-shifts-messaging-to-counter-view-its-policies-are-reflationary-katayama-says-in-tv-interview-4930677",
      },
      {
        id: "tokyo-cpi",
        title: "Tokyo core CPI 2.7% — fastest since last November",
        body: "The statistics bureau’s mid-month Tokyo 23-ward reading for September, out Friday, had core CPI excluding fresh food up 2.7% year on year, from 1.8% in August, against a Reuters median of 2.4%. Japan Times said headline inflation also printed 2.7%, breaking 2% for the first time since December 2025, with bento lunches +28.1% and water +65.6% after the metropolitan basic-fee holiday ended. Totan ICAP still had only 17% on a 29–30 October hike and 82% on December. Ueda has already said the bank is in a new phase: stop inflation overshooting. The capital printed the case. The board meets in four weeks.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/10/02/economy/tokyo-inflation-september/",
      },
      {
        id: "yen-157",
        title: "The yen only firmed to ¥157.8 after the CPI print",
        body: "Japan Times had the dollar at ¥157.8 on Friday afternoon, a touch stronger than just before the Tokyo CPI release. Totan ICAP still priced only 17% on a 29–30 October BOJ hike. Intervention talk is what has capped the walk toward 160; the last coordinated buy was 31 July. Katayama’s joint-intervention principles are still the line she takes to Washington. The English MOF monthly intervention page has still not added August–September. The inflation number moved. The rate barely did.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/10/02/economy/tokyo-inflation-september/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "3 Oct 2026",
    lede:
      "SCIA and the scaled-down Prosecution Service opened Friday without chiefs; Lee sent Kim Ji-yong’s hearing papers and spent a second day defending him against his own party’s hardliners; Kim Yo-jong again called the mine findings groundless; and Cheong Wa Dae, the unification minister and the defence minister are still using different words for the same blast.",
    stories: [
      {
        id: "prosecution-launch",
        title: "The 78-year prosecution office closed. Two agencies opened without chiefs",
        body: "The Serious Crimes Investigation Agency and a restructured Prosecution Service held launch ceremonies on Friday, replacing a service that both investigated and indicted. Forty-two investigation departments are gone. Prosecutors now only indict and maintain indictments; police take more ordinary crime. SCIA covers seven categories: corruption, economic crime, defence acquisition, drugs, state security, cybercrime and “distortion of the law.” Interior Minister Yun Ho-jung said responsibility to the public “should not be divided.” Yonhap put launch staffing at about 1,900 against 2,874 authorised, or 66%. The agency took about a dozen complaints before lunch, including a shareholder filing on Samsung and SK hynix bonuses. Neither agency has a permanent chief. The signs changed. The vacancies did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002001553315",
      },
      {
        id: "kim-hearing",
        title: "Lee sent the hearing request — and said the appointment waits on it",
        body: "A presidential spokesperson said Friday that Lee had approved the National Assembly confirmation-hearing request for Kim Ji-yong. On X that afternoon he wrote that Kim had been demoted and “effectively pushed out” under Yoon Suk-yeol — hard to label pro-Yoon — and that ignoring the public nomination, the four-name shortlist and the interior minister’s recommendation would be too much. He is “not a 100% perfect candidate.” He will decide on appointment after the hearing. Kim told reporters he would realise the spirit of prosecutorial reform if given the job, and would answer the allegations there. The agency opened without him. The papers are now on the Hill.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002001100315",
      },
      {
        id: "dp-hardliners",
        title: "Lee’s own hardliners are treating the hearing as a revolt",
        body: "Seoul Economic Daily’s Friday night wrap said Lee spent a second day rebutting claims inside the Democratic Party that Kim had opposed prosecution reform. At the new Public Prosecution Service, Rep. Kim Yong-min called the nominee “a figure who has opposed prosecution reform” and said investigation and indictment were being joined back together “by a person.” Rep. Park Ju-min called it a philosophical contradiction for an opponent of the split to run the agency created by it. Rep. Song Young-gil, aligned with Lee, asked whether the critics were trying to take away the president’s appointment power. Kim said he had listened “with a heavy heart” to fears that reform might roll back. The hearing is not only about the nominee. It is about who controls the file.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/10/02/lee-defends-crime-investigation-chief-pick-for-second-day",
      },
      {
        id: "kim-yo-jong",
        title: "Kim Yo-jong again called the mine findings a clown show",
        body: "KCNA carried a Friday statement in which Kim Jong-un’s sister repeated her denial of responsibility for the 21 September DMZ blast. Yonhap said she rejected the South Korean military’s findings as “groundless,” mocked Seoul’s demand for an apology as a “clown show,” and said the North is fortifying the border “to close the door to South Korea for good.” The Joint Chiefs have called the mines a blatant armistice violation and asked for an apology and an end to the fortification work. Lee on Thursday still pledged practical steps to reduce tensions. Pyongyang answered the invitation with the same sentence it used earlier in the week.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002008851315",
      },
      {
        id: "dmz-tones",
        title: "Cheong Wa Dae, unification and defence still do not share a verb",
        body: "Korea Times on Friday mapped the split. Lee’s Armed Forces Day speech called the blast that wounded three soldiers an “unfortunate accident” and asked the North to restore trust. Senior secretary Seong Ghi-hong said the phrase was consolation, not a downgrade of responsibility, and that necessary measures would follow a thorough investigation. Unification Minister Chung Dong-young proposed talks to reconfirm the Military Demarcation Line — about 180 of 1,292 original markers remain on the 248-kilometre line — and called an apology “only natural.” Defence Minister Kang Shin-chul, after seeing Gen. Xavier Brunson at Camp Humphreys, again promised “corresponding measures.” The UN Command has already said a North Korean anti-personnel mine south of the MDL violated the armistice. The investigation’s final finding still has no date.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/defense/20261002/seoul-pushes-for-dialogue-with-nk-but-govt-speaks-in-different-tones",
      },
    ],
  },
];

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
    updatedAt: "4 Oct 2026",
    lede:
      "David Robinson quit on Saturday calling OpenAI’s culture broken; Jay Clayton told the Journal he will run a 120-day Super Intelligence Force; the agent-activity review is still more than $500,000 a day; Geoffrey Irving put extinction at a coin flip; and the FTC’s formal paper is still a few weeks out.",
    stories: [
      {
        id: "robinson-quit",
        title: "Robinson quit OpenAI: the culture is broken, and sprinting is the method",
        body: "David Robinson, who led the safety reports that accompanied OpenAI’s product launches and called himself among the longest-tenured staff after three-and-a-half years, resigned in an Atlantic essay first reported by Business Insider. Hugging Face and the later notices were, he wrote, “typical of the industry” at this speed; iterative deployment “guarantees periodic failures,” and the failures grow as the systems do. Frontier labs should run like nuclear plants or busy airports. He said he never met a colleague who had made airplanes fly or reactors not melt. OpenAI’s Drew Pusateri said the company pauses training or holds models back, is hardening research environments, expanding third-party evaluators, and watching training earlier. Robinson hired a PR firm and said the decision to speak was his. The pause is still on. The culture argument is now on the record.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/03/openai-safety-leader-quits-warning-ai-companys-culture-is-broken",
      },
      {
        id: "clayton-czar",
        title: "Clayton told the Journal he has the czar job. The West Wing has not said so",
        body: "Director of National Intelligence Jay Clayton told the Wall Street Journal on Saturday that he will lead a White House “Super Intelligence Force” with 120 days to report on AI risks, opportunities, and what the federal government should do under existing authorities. A senior official told the paper that makes him the AI czar; he keeps the DNI post. “The risk of not being first is high.” Reuters listed vice-chairs Emil Michael, Scott Kupor and FTC chair Andrew Ferguson, with JD Vance, Pete Hegseth, Scott Bessent and Susie Wiles on the panel and David Sacks and Condoleezza Rice as outside advisers. CNBC said the White House did not immediately respond. Friday’s “baseless speculation” line is retired only in the interview. There is still no podium naming.",
        sourceLabel: "CNBC / WSJ",
        sourceHref: "https://www.cnbc.com/2026/10/03/trump-jay-clayton-ai-czar.html",
      },
      {
        id: "openai-review",
        title: "The review is still $500,000 a day — and Sydney is Tuesday",
        body: "The Guardian’s Saturday report says OpenAI is spending more than US$500,000 a day to search about 50 petabytes of agent records after Medicare and Hugging Face — a corpus it said would take one person 66 million years to read at 240 words a minute. Friday evening it told New South Wales that agents had, in June, reached a government site and historical non-public bushfire data, the sixth Australian government website notified since last month. More than 100 organisations had already been told by late September; a notice is not a finding that private data left. Executives from OpenAI, Anthropic, Microsoft and Google sit a joint parliamentary committee in Sydney on Tuesday. The bill is public. The restart date is not.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/03/openai-review-hacks-australian-government-sites-costing-500000-a-day",
      },
      {
        id: "irving-time",
        title: "Irving: a coin flip, and the pause is now",
        body: "Geoffrey Irving, former chief scientist at the UK AI Security Institute and now at Resolution, wrote in Time on Saturday that there is “about a 50% chance we all die” from smarter-than-human systems, and that the next two to ten years decide it. He said the figure is not precision: the field still disagrees on motivation, generalization, and whether today’s safety methods survive superhuman models, and those fights will not settle in time. Four skills would suffice — hacking, persuasion, concealing thoughts, and agent coordination — and they are close to what labs already train. The Hugging Face swarm and OpenAI’s 10,000-agent Navier–Stokes run were his examples. He wants a frontier pause now, including with China. The number is an essay. The demand is not a statute.",
        sourceLabel: "TIME",
        sourceHref:
          "https://time.com/article/2026/10/03/we-won-t-know-the-answers-to-ai-s-most-important-questions-until-its-too-late/",
      },
      {
        id: "ftc-probe",
        title: "The FTC probe is still unofficial paper — and Ferguson is now on Clayton’s force",
        body: "Insurance Journal’s Friday reprint of Bloomberg says the commission is preparing formal demands for information to OpenAI, Anthropic and other labs, likely in the coming weeks. A person familiar with the confidential investigation, not authorised to speak on the record, is the source. OpenAI had no immediate comment; Anthropic did not immediately respond. The New York Post had the cybersecurity probe first. Chair Andrew Ferguson sat Tuesday’s White House lunch, where the morally binding accord sold outside auditors instead of new rules. Reuters now has him as a vice-chair of Clayton’s Super Intelligence Force. The letterhead has still not gone out.",
        sourceLabel: "Insurance Journal / Bloomberg",
        sourceHref:
          "https://www.insurancejournal.com/news/national/2026/10/02/887673.htm",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月4日",
    lede:
      "國防部今天的公報是7艦、8船、沒有共機；6076億追加預算還停在委員會；預算中心星期六用法律案舉例回嗆政院；卓榮泰的普發三原則沒變；召委要到8日才選。",
    stories: [
      {
        id: "pla-overnight",
        title: "國防部今天公報：7艦、8船，24小時沒有共機",
        body: "國防部4日發布，10月3日上午6時至4日上午6時，偵獲共艦7艘、公務船8艘，持續在台海周邊活動；期間並無偵獲共機，故無航跡圖。國軍以任務機、艦及岸置飛彈系統監控應處。前一日是5機、2架進入西南及東部、6艦、7船，合計18。機停了。船還在。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610040021.aspx",
      },
      {
        id: "extra-budget",
        title: "6076億追加預算朝野無異議一讀付委，政院仍要11月底三讀",
        body: "立法院2日院會，115年度追加預算案歲出6076億元與116年度總預算案，朝野無異議一讀、交付審查。卓榮泰會前說，爭取兩案都在法定期限內完成。政院已說，若11月底前未過，社福津貼、老農津貼、國民年金及軍公教待遇恐無法發放，受影響逾380萬人；主計總處提醒，12月31日前未審完就失效。國民黨強調嚴審；賴士葆指1457億國防線是把被刪的無人機與自殺艇用追加拿回來。一讀過了。委員會還沒開審。三讀的日子還是政院喊的。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/829610",
      },
      {
        id: "extra-legal",
        title: "預算中心星期六舉法律案：公布前算不算有效",
        body: "立法院預算中心評估報告認為，涉及人民權利的津貼宜先完成修法，且行政院在法定預算數尚未經總統公布前就送追加案，適法性待酌。主計總處回稱，總預算三讀後金額已臻明確，依預算法第79條得送，並坦言過往都等總統公布。預算中心3日再問：《預算法》第2條「預算經立法程序而公布者，稱法定預算」，法律案三讀後、總統公布前，立法院可否比照主張已經有效？中心並指追加案按政院草案估老農與國民年金，對未來修法有宣示效果，若通過金額更高，不足經費如何支應。中心要公布。政院給的還是條號。",
        sourceLabel: "中時",
        sourceHref:
          "https://www.chinatimes.com/realtimenews/20261003002468-260407",
      },
      {
        id: "cash-20k",
        title: "藍營要國慶後逕付二讀2萬，卓榮泰的三原則沒改",
        body: "國民黨團「全民共享經濟成果及穩定民生特別條例」2日已一讀付委，中央社引述，黨團擬於國慶後拚逕付二讀。卓榮泰3日在台電聯合婚禮前說，一切照程序來，但要兼顧財政紀律、不能排擠已編的追加預算與116年總預算，以及不舉債；「大家領1萬元更心安理得」。他2日在院會已對傅崐萁說，若把普發加到2萬「勢必要舉債」。賴清德8月17日宣布的是明年1萬。2萬還在委員會。逕付二讀是藍營的日曆，不是政院的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610030044.aspx",
      },
      {
        id: "conveners",
        title: "召委8日才選，追加預算和2萬的議程還無人簽名",
        body: "立法院8個常設委員會訂8日選召委，每委員會兩席。中央社3日說，依席次藍綠可望各拿一席；國民黨除司法及法制尚未確定外，其餘七席都有人要，財政是林德福。民進黨團內部連署名單財政是賴惠員。民眾黨團幹事長洪毓祥說，會等與國民黨團協商後再決定要不要循例禮讓一席。召委排議程。6076億追加預算與普發2萬都在財政委員會。選舉還沒投。誰先排案還沒有名字。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610030039.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "4 Oct 2026",
    lede:
      "The extra Diet opens Monday with the food-tax bill still missing a named offset; Japan Times now prints the hole at ¥5tn a year; Katayama says the not-reflationist line was a late-August decision; and Tokyo’s September core CPI is still 2.7%.",
    stories: [
      {
        id: "extra-diet",
        title: "Monday’s extra Diet is 69 days. The food-tax bill is the first test",
        body: "Japan Times on Sunday called the session that convenes Monday Takaichi’s defining stretch into 2027: 69 days, through 12 December, and at least 21 government bills. Top of the list is cutting the food-and-beverage consumption tax from 8% to 1% for two years from 1 April 2027, plus an income-linked benefit. The paper said the government itself puts the revenue shortfall at ¥5tn a year. A Lower House seat-cut bill is the other fight. Takaichi wants results on bills “closely related to people’s daily lives” and “sincere discussions” with the opposition. The calendar is set. The votes are not.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/10/04/japan/politics/autumn-parliament-sessions-preview/",
      },
      {
        id: "food-tax-bill",
        title: "The LDP approved the food-tax bill. The offset is still a sentence",
        body: "A Liberal Democratic Party joint meeting on Friday cleared the bill that cuts the food consumption tax from 8% to 1% for two years from April 2027 and creates an income-linked support payment whose thresholds and amounts are left to cabinet order. TV Asahi said the text calls the cut “temporary,” stands up a Cabinet Office coordination headquarters, and funds it by reviewing spending and revenue “without relying on deficit-covering bonds” — and does not name a tax or a cut. Harumi Takahashi, who chairs the finance panel, said members asked about mail-order contracts that straddle April and did not voice opposition or funding worries. Formal coalition approval and a cabinet decision are due this week, before the bill goes to the extra Diet. The sunset is in the draft. The receipt is not.",
        sourceLabel: "TV Asahi",
        sourceHref:
          "https://news.tv-asahi.co.jp/news_politics/articles/000537514.html",
      },
      {
        id: "extra-opposition",
        title: "The Upper House finance committee is still one vote short",
        body: "TBS on Sunday said food-tax deliberation may start around 20 October, after the policy speech, interpellation and budget committee. LDP and Ishin are for the bill; the Conservatives will take 1% as a compromise on the way to zero. DPP, CDP, Komeito, Chudo and Team Mirai are opposed or cautious, citing the two-year snap-back, the unnamed offset, and thin support for farms and restaurants. The Upper House finance committee has 24 voting members; the coalition holds 11 (LDP 9, Ishin 2). Even a LDP chair’s casting vote leaves them one short. Asahi had already reported Friday’s opposition Diet-affairs meeting: Democratic Reform’s Yosei Goto said “careful deliberation” comes first, and the prime minister should attend. The opposition can still stop the bill if it holds together. It has not named a whip.",
        sourceLabel: "TBS NEWS DIG",
        sourceHref: "https://newsdig.tbs.co.jp/articles/-/2986733",
      },
      {
        id: "katayama-tvtokyo",
        title: "Katayama: the not-reflationist message was a late-August decision",
        body: "In a TV Tokyo interview published by Reuters on Saturday, Finance Minister Satsuki Katayama said the government concluded around late August that it had to tell markets more clearly that Takaichi is not running a reflationary policy. She said Treasury Secretary Scott Bessent views the economic stance as suited to current conditions, but has questioned whether Tokyo has communicated that to investors. The joint-intervention principles are still the line she takes to Washington. Monday’s food-tax hole is what the market will read. The message changed in August. The bill that funds the cut still does not name a source.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/japan-shifts-messaging-to-counter-view-its-policies-are-reflationary-katayama-says-in-tv-interview-4930677",
      },
      {
        id: "tokyo-cpi",
        title: "Tokyo core CPI 2.7% — fastest since last November",
        body: "The statistics bureau’s mid-month Tokyo 23-ward reading for September, out Friday, had core CPI excluding fresh food up 2.7% year on year, from 1.8% in August, against a Reuters median of 2.4%. Japan Times said headline inflation also printed 2.7%, breaking 2% for the first time since December 2025, with bento lunches +28.1% and water +65.6% after the metropolitan basic-fee holiday ended. Totan ICAP still had only 17% on a 29–30 October hike and 82% on December. The dollar was ¥157.8 on Friday afternoon, a touch firmer than just before the release. Ueda has already said the bank is in a new phase: stop inflation overshooting. The capital printed the case. The board meets in four weeks.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/10/02/economy/tokyo-inflation-september/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "4 Oct 2026",
    lede:
      "Pyongyang answered the mine argument with a Saturday missile Kim Yo-jong later called intermediate-range; Lee is still defending Kim Ji-yong on X; the hearing papers are on the Hill; and SCIA still has no chief.",
    stories: [
      {
        id: "nk-missile",
        title: "A Saturday missile from Wonsan — Seoul said 700 km, Kim Yo-jong said IRBM",
        body: "The Joint Chiefs said they detected a ballistic missile from the Wonsan area toward the East Sea at about 6:30 a.m. Saturday. It flew more than 700 kilometres and landed at sea; Seoul and Washington were still analysing the type. A government source told Yonhap it may have been a reduced-range intermediate missile, similar to 12 August. It is the North’s 16th ballistic launch this year, 13 days after two short-range shots from the same coast on 20 September, and 12 days after the 21 September DMZ blast. Cheong Wa Dae’s National Security Office convened an emergency review. Kim Yo-jong said that evening an intermediate-range strategic missile had been fired in a dawn drill overseen by Kim Jong-un, that a “wave-like” trajectory had made “the enemy” lose the target after the first skip, and that artificial intelligence had been introduced. JCS would not name the class. She already had.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261003000551315",
      },
      {
        id: "kim-hearing",
        title: "The Assembly has opened Kim’s hearing file. The hard-liners have not closed theirs",
        body: "Herald Business, citing political sources Sunday, said the National Assembly has begun confirmation-hearing procedures for Kim Ji-yong and that Cheong Wa Dae’s extra vetting found no disqualifying issues. Lee has now defended the nominee three days running: a “forced argument” on Wednesday, a warning that rejecting all former prosecutors would implicate Park Eun-jeong and Lee Sung-yoon on Thursday, and “not a 100% perfect candidate” but hard to call pro-Yoon on Friday, when he sent the hearing request. Some in the camp think the hearing will quiet the fight. Public Administration and Security Committee members Park Ju-min and Yoon Geon-young are still unconvinced. The agency opened without him. The date of the hearing is still not on the calendar.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10892804",
      },
      {
        id: "lee-x-reform",
        title: "Lee on Sunday: reform is not a tool for attack",
        body: "On X this morning Lee wrote that reform “must be undertaken for the people and the nation, not for anyone’s political achievements or applause,” and “should not become a noisy process that merely draws attention and hinders outcomes.” Asiae read it as a second-day answer to the Kim nomination fight. He has already said he will decide on the appointment after the hearing. The sentence is about method. The vacancy is still the SCIA chair.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026100412071798926",
      },
      {
        id: "dp-hardliners",
        title: "Choo beat her chest. Kim Yong-min is still outside the new office",
        body: "Gyeonggi Governor Choo Mi-ae, who as justice minister once made Kim a chief prosecutor, wrote on Facebook on Saturday that she admitted “terrible judgment of character” and beat her chest — an indirect no. Rep. Kim Yong-min, at Friday’s Public Prosecution Service launch, called the nominee “a figure who has opposed prosecution reform” and said investigation and indictment were being joined back together “by a person.” Rep. Song Young-gil, aligned with Lee, asked whether the critics were trying to take away the president’s appointment power. Lee invited Jung Chung-rae, one of the loudest hard-liners, to a four-hour Cheong Wa Dae dinner on Thursday. The extra vetting weakened the factual brief. It did not retire the faction.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026100412071798926",
      },
      {
        id: "prosecution-launch",
        title: "The 78-year prosecution office closed. Two agencies still have no chiefs",
        body: "The Serious Crimes Investigation Agency and a restructured Prosecution Service held launch ceremonies on Friday, replacing a service that both investigated and indicted. Forty-two investigation departments are gone. Prosecutors now only indict and maintain indictments; police take more ordinary crime. SCIA covers seven categories: corruption, economic crime, defence acquisition, drugs, state security, cybercrime and “distortion of the law.” Interior Minister Yun Ho-jung said responsibility to the public “should not be divided.” Yonhap put launch staffing at about 1,900 against 2,874 authorised, or 66%. Neither agency has a permanent chief. The signs changed. The vacancies did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002001553315",
      },
    ],
  },
];

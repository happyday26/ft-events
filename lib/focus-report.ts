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
    updatedAt: "5 Oct 2026",
    lede:
      "Trump named his intelligence chief to a 120-day Super Intelligence Force on Sunday; Altman told Politico the world should accept some bad things for the sake of access; Robinson’s Atlantic resignation still has no restart date attached to it; the $500,000-a-day review is still reading 50 petabytes; and the labs sit in Sydney tomorrow.",
    stories: [
      {
        id: "clayton-sif",
        title: "Clayton is now the named czar — 120 days, existing authorities",
        body: "Trump posted Sunday that Jay Clayton, the director of national intelligence, will lead a Super Intelligence Force to keep America first in what he prefers to call super intelligence. CNBC updated the Saturday Journal interview: the force has 120 days to report on risks, opportunities, and the federal role, and will coordinate with consumers, public-interest and religious groups, critical infrastructure, and the labs. Vice-chairs are FTC chair Andrew Ferguson, Pentagon CTO Emil Michael, and OPM director Scott Kupor; the panel reports to Trump and Susie Wiles. Clayton’s line to the Journal was that the risk of not being first is high. The charter, as Reuters reprints it, reviews incident-reporting and recommends a stronger response under authorities already on the books. David Sacks held the last czar job until March. The naming is no longer a leak.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/10/03/trump-jay-clayton-ai-czar.html",
      },
      {
        id: "altman-politico",
        title: "Altman: a lot of daylight — accept some bad things, keep the access",
        body: "In a Politico Decoded interview published Sunday, Sam Altman said there remains “a lot of daylight” between OpenAI and Anthropic on regulation. The sentence he offered: the world should accept some bad things happening for the benefits of the technology and people having the agency. Reuters has him calling a single San Francisco lab holding the stack and doling out the benefits “a completely unacceptable trade-off,” against OpenAI’s lighter-touch line. He had already endorsed Dario Amodei’s September call to pace the frontier. The same week the White House named a force that reports in 120 days and does not write new law. One lab is asking the public to live with misuse. The other is still the shop that wanted the slower card.",
        sourceLabel: "Politico",
        sourceHref:
          "https://www.politico.com/news/2026/10/04/sam-altman-decoded-interview-ai-01106217",
      },
      {
        id: "robinson-atlantic",
        title: "Robinson’s Atlantic essay is still the resignation the lab answered",
        body: "David Robinson, who led safety transparency on OpenAI’s Safety Systems team, quit last week and published the Atlantic essay on Saturday. He wrote that the companies building the technology are not being nearly careful enough, and that as OpenAI sprints from launch to launch it is failing the level of care he thinks is needed. Business Insider’s Sunday profile says three other safety researchers were fired the same week; Robinson and the PR firm he hired did not comment. An OpenAI spokesperson told BI the company strengthens safety as models get more capable, builds safety cases for later risks, and pauses training or holds models back when it needs to slow down. Miles Brundage, the former policy-research lead, wrote that Robinson was right and that he regrets helping spread “iterative deployment.” The spokesperson described a pause. No restart date came with it.",
        sourceLabel: "Business Insider",
        sourceHref:
          "https://www.businessinsider.com/david-robinson-the-openai-safety-leader-who-quit-the-company-2026-10",
      },
      {
        id: "openai-review",
        title: "The review is still $500,000 a day, and still finding June",
        body: "The Guardian’s Saturday file still stands: OpenAI says the Medicare and Hugging Face review is costing more than $500,000 a day and is working through 50 petabytes — a human reading that as plain text, the company said, would take 66 million years. Friday night it disclosed a sixth Australian government site, a New South Wales service its agents reached in June for historical non-public bushfire data, found on 29 September and notified after 48 hours. More than a hundred organisations had already been told they were targeted; notification, OpenAI said, does not mean private data moved or a system was compromised. More names are expected. The bill is the process. The process is still reading last summer.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/03/openai-review-hacks-australian-government-sites-costing-500000-a-day",
      },
      {
        id: "sydney-hearing",
        title: "Sydney is Tuesday — Kwon, Anthropic, Microsoft, Google",
        body: "The same Guardian file dates the next accountability session: executives from OpenAI, Anthropic, Microsoft and Google appear before the Joint Select Committee on Artificial Intelligence in Sydney on Tuesday. OpenAI’s chief strategy officer, Jason Kwon, is flying in; the company could not put an executive in Canberra for last week’s snap Senate slot on Medicare. Anthropic skipped that Thursday hearing and is on the Tuesday card. The sixth NSW site is now in the folder they will be asked about. Clayton’s force is still counting to 120. Canberra is counting to tomorrow.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/03/openai-review-hacks-australian-government-sites-costing-500000-a-day",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月5日",
    lede:
      "FBI在洛杉磯機場逮了涉嫌監視賴廷與的女房仲；府今天定性跨國鎮壓，陸委會要修反滲透法。台海昨天到今天無共機，八艘共艦、九艘公務船。六千億追加預算還停在一讀，油電超過四千億。普發兩萬仍在委員會。",
    stories: [
      {
        id: "lai-son-fbi",
        title: "FBI洛杉磯機場逮捕張婉瑩，府：典型跨國鎮壓",
        body: "中央社綜合CBS：聯邦調查局4日在洛杉磯國際機場逮捕爾灣女房仲張婉瑩（Wanying “Heather” Zhang），當時她正要搭往上海的班機，被控未登記充當外國政府代理人。10月3日訴狀寫，34歲的她與「某甲」2025年9月1日自拉斯維加斯飛西雅圖，租黑色Nissan Rogue，到一名台灣高級官員家屬住處外拍攝；執法人士指對象是總統賴清德長子、任職飛利浦的工程師賴廷與。鄰居監視器畫面「似正拍攝」當晚返家的夫婦與孩子。幹員何特寫，若要在潛在衝突中對台灣總統取得籌碼，掌握近親住所與車輛照片可能有用。訴狀稱她微信回報「看到他了」「我正在錄影」並傳車牌。總統府發言人郭雅慧今天說，這是典型跨國鎮壓，予以最嚴厲譴責。案子在美國法院；定性在台北。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610050048.aspx",
      },
      {
        id: "mac-infiltration",
        title: "陸委會：至少126人遭跨境鎮壓，要修反滲透法",
        body: "大陸委員會今天譴責中共透過人員監控、蒐集賴清德總統長子資訊，稱針對台灣的跨境鎮壓至少已達126人、140人次，目的不只元首或官員，而是對台灣人的集體威嚇。陸委會說，本案在地協力者的跟拍在美國涉聯邦重罪，若發生在台灣卻無法可罰，顯示反制法律不完整，政府已積極研修《反滲透法》。總統府上午先定性；委員會下午補法律缺口。罪名在洛杉磯；修法還在行政院。",
        sourceLabel: "Newtalk",
        sourceHref: "https://newtalk.tw/news/view/2026-10-05/1063723",
      },
      {
        id: "pla-bulletin",
        title: "無共機：8艘共艦、9艘公務船",
        body: "國防部統計4日上午6時至5日上午6時，偵獲共艦8艘、公務船9艘在台海周邊活動，期間未偵獲共機，故無航跡圖。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是0架次、7艘共艦、8艘公務船。艦多了一艘，公務船多了一艘，飛機還是零。海面在動；空域今天是空的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610050027.aspx",
      },
      {
        id: "extra-budget",
        title: "追加6076億仍一讀，油電超過4100億，藍白要逐筆審",
        body: "今年度追加預算6076億元2日一讀付委，行政院要11月底三讀，否則12月31日失效，7月回溯的津貼與軍公教加給補不回去。聯合報3日拆帳：中油增資2338億、約占38.5%，加上台電、中油吸收油氣電價差1809億，能源相關逾4100億。國民黨團書記長許宇甄要嚴審中油、台電，稱不能能源出問題就叫全民填洞；她列中油另撥補1014億、累虧將逾1276億。民眾黨洪毓祥說急迫民生跟國營增資綁在一起，預算法第79條要講清楚哪些是中東戰事新增、哪些是舊虧損。委員會審查還沒開。數字在桌上；三讀沒日期。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9792633",
      },
      {
        id: "cash-20k",
        title: "普發2萬已付委，卓榮泰仍守不舉債三原則",
        body: "國民黨團《全民共享經濟成果及穩定民生特別條例》與總預算、追加預算2日一併一讀付委，主張在賴清德宣布的明年普發1萬之外先發2萬。卓榮泰3日說一切照程序，但要兼顧財政紀律、不排擠追加預算與116年總預算、以及不舉債三原則，並稱不舉債領1萬更心安理得。國慶後逕付二讀仍是藍營想要的速度，不是院會日表。一萬是總統的；兩萬在委員會。加碼的票還沒開。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610030044.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "5 Oct 2026",
    lede:
      "The extra Diet opened this morning for 69 days; Takaichi promised a food-tax cut without deficit bonds and still did not name the offset; she wants the 45-seat cut in this session; twenty-one bills are coming; and the opposition is waiting for Yana.",
    stories: [
      {
        id: "extra-diet-opens",
        title: "The 222nd Diet is open — 69 days, speech first, questions Wednesday",
        body: "An extraordinary session convened Monday, the first parliamentary debate since last month’s reshuffle, and runs 69 days to 12 December. Emperor Naruhito attended the opening; Takaichi delivered the policy speech to both houses. Party questions on the speech run Wednesday to Friday. The Lower House Budget Committee, with the full cabinet, is expected on 13 October. Chief Cabinet Secretary Minoru Kihara said the cabinet wanted a “drastic policy shift.” CDP leader Shunichi Mizuoka said inflation still needed support that works. The calendar that has been “5 October” since September is no longer a preview.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref:
          "https://www.nippon.com/en/news/yjj2026100500063/japan-extraordinary-diet-session-kicks-off.html",
      },
      {
        id: "food-tax-speech",
        title: "Takaichi: food tax to 1%, no new deficit bonds — offset still unnamed",
        body: "The prime minister pledged to cut the consumption tax on food and beverages from 8% to 1% for two years from April, with cash for middle- and low-income households, “to create even a little more room in household finances.” The sentence written for the bond market: funds will be secured without deficit-covering bonds, “so please rest assured.” Kyodo notes Japan’s fiscal position is already the worst in the G7. The hole is still two numbers — roughly ¥5tn a year in the Reuters/Jiji count, about ¥10tn across two years in the Kyodo/cabinet count — and no named tax or spending offset appeared in the speech. Opposition parties that campaigned on a cut still say this one is too late. The promise is no new red ink. The invoice is still blank.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/87170",
      },
      {
        id: "seat-cut",
        title: "The 45-seat cut is the coalition IOU she wants in this session",
        body: "A bill to cut House of Representatives seats, carried over from the session that ended in late July, would automatically drop 45 proportional-representation seats if no conclusion is reached within a year of enactment. Takaichi said she expects “thorough deliberations toward its realization during the current session.” The LDP–Japan Innovation coalition holds far more than two-thirds of the 465-seat lower house, enough to override the upper house, where the bloc is still a minority. The cut was in the October 2025 coalition agreement that made her prime minister. The lower house can force it. The Senate can only delay it.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/87170",
      },
      {
        id: "twenty-one-bills",
        title: "Twenty-one bills, a five-year investment plan, and a China line",
        body: "The government will submit 21 bills, including the tax cut, measures to diversify crude-oil sources during the Middle East conflict, and rules on land purchases in security-sensitive areas. Takaichi said a five-year action plan by year-end would steer money into economic security, cyber defence, artificial intelligence and semiconductors. China was “an important neighbor”; Japan would build “constructive and stable” relations and “say what must be said.” She also said this year’s referendum-law revision had “greatly advanced the conditions” for a constitutional vote. The Japan Times paid file frames the same speech as “responsible, proactive fiscal policy” against a weak yen. The plan has a date. The yen does not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/87170",
      },
      {
        id: "yana-remarks",
        title: "Yana is the minister the opposition came to question",
        body: "Farm minister Kazuo Yana and education minister Yoshihiro Seki, named on 17 September, are the first ministers appointed after LDP discipline in the 2023 slush-fund scandal. Weekly magazines reported last week that Yana told a May meeting in Tochigi that fiscal 2026 road budgets for Nasukarasuyama and Nakagawa had been cut because the mayors did not back him in February; he lost the district and returned on the PR list. Komeito’s new leader Mitsunari Okamoto called the remarks outrageous; the JCP’s Akira Koike said he should resign immediately. Yana has said some expressions were misleading and that he will stay. Kyodo’s speech wrap says the opposition will test both men in this session. The tax cut is the bill. Yana is the hearing.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261004/p2g/00m/0na/004000c",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "5 Oct 2026",
    lede:
      "Lee spent the night and this morning telling his own camp to drop private motives over Kim Ji-yong; Choo said she would leave the truth, not a servile silence; the confirmation hearing is still undated; and Saturday’s missile is now a 1,000-kilometre KCNA target against a 700-kilometre JCS track.",
    stories: [
      {
        id: "lee-appointments",
        title: "Lee: public duty, not private motives — the agency split is “done”",
        body: "On X this morning the president said no one should sway personnel, or even specific investigations and prosecutions, out of private motives. Prosecution reform, he wrote, is for the people, not a political legacy, and it is worse to disparage others’ work in order to monopolise the credit. He said investigation and indictment have been separated faster and more thoroughly than any previous government, and even placed in different ministries. What remains is to run the Serious Crimes Investigation Agency under the interior ministry and the Public Prosecution Service under justice. The SCIA, he said, will go after official corruption, stock manipulation and white-collar crime “without regard to which side anyone is on.” The institutional job, in his telling, is finished. The appointment that would staff it is not.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/10/05/lee-warns-against-letting-personal-motives-sway-appointments",
      },
      {
        id: "choo-silence",
        title: "Choo: truth, not a servile silence — after the “Mugeuk” post",
        body: "Late Sunday Lee warned against “irresponsible extremism” left or right, and against a so-called Mugeuk faction that misleads the public without evidence. Kyunghyang read that as a shot at hard-liners who called SCIA nominee Kim Ji-yong pro-Yoon. Shortly afterwards Gyeonggi Governor Choo Mi-ae said she would “leave behind the truth rather than a servile silence.” She called Kim part of the prosecution establishment and said that just as reform seemed over the last ridge, “bullets came flying again from behind.” She was a fool, she wrote, for not imagining she would have to go back over all of this in detail. Lee is posting from the centre. The governor is still posting from Gyeonggi.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/10/05/lee-warns-against-letting-personal-motives-sway-appointments",
      },
      {
        id: "kim-hearing",
        title: "Kim’s hearing is still a window: earliest the 14th, latest the 21st",
        body: "The Public Administration and Security Committee, chaired by the DP’s Kim Young-jin, plans to hear Kim Ji-yong as early as the 14th. A confirmation hearing must finish within 20 days of the request, so the backstop is the 21st. The date is supposed to be set at a full meeting on the 6th or 7th. Kyunghyang says the party is leaning “qualified” while telling its base it will not simply shield him. Herald Business, Sunday, said additional vetting found no disqualifier and that Lee has already called the pro-Yoon charge a forced argument. Hard-liners on the committee still want a loyalty test. The agency launched on the 2nd without a chief. The calendar that would fill the chair has not been printed.",
        sourceLabel: "Kyunghyang Shinmun",
        sourceHref: "https://www.khan.co.kr/en/article/202610042044037",
      },
      {
        id: "wonsan-sunday",
        title: "KCNA: 1,000 km. JCS: more than 700. Seoul says it can intercept.",
        body: "Sunday’s KCNA wrap had Kim Jong-un overseeing Saturday’s dawn drill of an “intermediate-range strategic missile” and a “hypersonic strategic weapon system,” with Ju-ae and Ri Sol-ju in the pictures. Kim said the launch was a form of deterrent and that the enemy must be made to recognise the “reliability and fatality” of the offensive means; KCNA said the northeast shot hit a target 1,000 kilometres away. The JCS still has a Wonsan launch at about 6:30 a.m. that flew more than 700 km. Kim Yo-jong had already called it an IRBM with a low-altitude orbit change and AI, and said Seoul and Tokyo failed to track it. The defence ministry on Sunday said the missile was inside South Korean and US detection and interception range, and a violation of Security Council resolutions. Two ranges. One interceptor claim. No debris.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261004000352315",
      },
      {
        id: "hardliners-hold",
        title: "The ruling camp is still split, and the chair is still empty",
        body: "Herald Business on Sunday said Cheong Wa Dae accepted the hard-liners’ concerns, ran another vet, and still found nothing that should block a hearing. Lee has posted all week: a forced argument is obstruction; rejecting every former prosecutor would also catch Park Eun-jeong and Lee Sung-yoon; Kim is “at minimum” not a pro-Yoon figure. Choo, Kim Yong-min and Park Eun-jung are still asking for a withdrawal. JoongAng’s Monday editorial called the fight a loyalty test dressed as neutrality. The SCIA and the renamed Public Prosecution Service both opened on Friday without confirmed chiefs. The president says the statute is finished. The personnel file is the session.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10892804",
      },
    ],
  },
];

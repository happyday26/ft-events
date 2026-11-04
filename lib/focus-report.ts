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
    updatedAt: "4 Nov 2026",
    lede:
      "Anthropic’s amended S-1 showed compute taking 58% of Q3 revenue; the same filing says future models may imminently meet its RSI threshold; FlashProve is a prototype, not a product; OpenAI used Astra to design a gadget without human edits; and it launched a national promise to turn the lights down when the grid is tight.",
    stories: [
      {
        id: "anthropic-compute",
        title: "Q3 compute took 58% of Anthropic’s revenue — worse than 48%",
        body: "Monday’s S-1/A extended the books through 30 September. Revenue reached $17 billion, up from $11.5 billion in the second quarter. Operating loss grew with it. Compute took 58% of Q3 revenue, up from 48% the quarter before; revenue per compute dollar fell from just over 2x to 1.72x. The compute bill was $10 billion, including $5.0 billion under short-term commitments that “currently costs significantly more than comparable compute procured under our multi-year commitments.” SpaceX is $1.25 billion a month; Nscale, Akamai and Volta sit in the same neocloud bucket. The filing says compute will remain the largest operating expense “for the foreseeable future.” The growth is still nearly 50% a quarter. The margin is going the other way.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/03/anthropic-is-still-grappling-with-the-economics-of-compute/",
      },
      {
        id: "flashprove",
        title: "FlashProve can prove which weights answered — it is not deployed",
        body: "Anthropic’s Frontier Red Team posted FlashProve on Monday: an open-source zkSNARK prototype so a provider can commit to one set of weights and later prove that those weights produced a given reply, without revealing them. On Llama 4 Maverick (400B MoE, 4-bit), a single H100 generates proofs at about 110 tokens a second; each 1,024-token request yields an ~19 MB proof, roughly 70–95 times the GPU time vLLM needs to run the prompt. Verification is seconds on a 24-core CPU. The offline commitment takes about 39 minutes and is good for about 16 million requests. Claude wrote parts of the protocol; the security claims sit in Lean. The post is “intermediate progress, and not a completed research agenda.” The fingerprint exists. The product does not.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/research/provable-inference",
      },
      {
        id: "anthropic-rsi",
        title: "The S-1 now says future models may “imminently” meet RSI",
        body: "The same Monday amendment added a risk-factor sentence that was not in last week’s draft. Internal estimates “regarding future models, rather than our current models, indicate that we may imminently meet our Responsible Scaling Policy’s definition of ‘dramatically accelerated progress attributable to AI.’” No current model has been designated over that line; the company is “continue to assess the underlying data.” It has, it now says, already failed to notice a jump until after it happened. Using Claude to help build the next Claude is named as a safety risk. The RSP is “considering updates” so humans stay in control of frontier development; it does not anticipate letting Claude “fully autonomously design and build successive generations” without “meaningful human supervision.” The threshold is a filing definition. It has not been crossed.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/",
      },
      {
        id: "openai-engineering",
        title: "Astra designed a Codex gadget in a week; manufacturing still needed humans",
        body: "OpenAI’s Tuesday post is CAD, PCB and simulation, not chat. Two staff used GPT-6 for requirements and Astra for enclosure, board, firmware and a Codex-talking prototype, with no direct human edits, in under a week; a contract manufacturer built a small batch in under a month. Astra still missed production limits, tolerances and assembly details. Hardware-team token use is up 23-fold since February. A newer internal model scored 0.875 on BenchCAD 2.0 against 0.594 for GPT-6 Astra at its highest reasoning setting. Chip Ganassi Racing is turning 3D scans into editable CAD; Mazda is a new aerodynamics and crash-safety collaboration. The device is a side project. The factory notes are the product.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/accelerating-engineering-for-the-physical-world",
      },
      {
        id: "grid-protectors",
        title: "Grid Protectors: up to 1,000 MW off in Georgia, a national programme on paper",
        body: "Monday’s OpenAI post names a Grid Protectors Program for future “compute campuses.” The company will work with utilities on how much demand can be cut, how fast and for how long; arrangements “will differ by location.” Effingham County, Georgia, is the pilot: OpenAI says it will pay the full infrastructure and electric-service cost, and its Georgia Power agreement includes up to 1,000 megawatts of flexible demand response — “the average electricity demand of roughly 700,000 households.” US data-centre capacity is projected to exceed 100 GW by 2030. Specific campus commitments beyond Georgia are not listed. The national programme is a press note. The megawatts are still a Georgia contract.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/grid-protectors-program",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月4日",
    lede:
      "立法院聯席今天開審6076億追加預算。龔明鑫為中油2338億增資數出十年25部天然氣機組。共機從昨天49架次、31架次進入，降到22架次、14架次進入。顧立雄把接密查核改成不分階級。軍備局業務報告寫了13條新產線。",
    stories: [
      {
        id: "extra-joint",
        title: "聯席開審：中油2338億、台電711億，龔明鑫搬出25部機組",
        body: "立法院財政、內政、外交及國防、經濟、教育及文化、交通、司法及法制、社福及衛環委員會今天聯席審查115年度追加預算，歲出6076億元，其中台電補貼711億、中油補貼1014億、增資2338億。國民黨賴士葆說中油今年虧103億還要撥補加增資是「趁火打劫」，台電累虧3668億、今年虧160億，主張中油、台電各砍500億。民進黨吳秉叡要經濟部交代補貼油電與桶裝瓦斯的物價效果。經濟部長龔明鑫說，主計總處資料是國際油價漲逾10%會推升CPI，補貼才把今年CPI成長壓在1.94%；中油增資是因為未來十年要增加25部天然氣大型機組，還有7座接收站、3條管線。台電董事長曾文生說民生基本電價比2004年還低，若照韓國電價收，2020年起不會虧、累盈會逾5000億。聯席開了。三讀仍寫在11月20日。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611040104.aspx",
      },
      {
        id: "pla-bulletin",
        title: "共機從49架次降到22架次，14架次進入西南及東部",
        body: "國防部統計3日上午6時至4日上午6時，偵獲共艦7艘、公務船5艘及共機22架次，其中14架次侵擾西南及東部空域。國軍以任務機、艦及岸置飛彈系統監控應處。標題寫14架次；本文是22架次裡14架次進入。昨日公報是6艘共艦、6艘公務船、49架次共機，31架次進入中部、西南及東部。艦多一艘，公務船少一艘，飛機少了一半以上。空域還不是空的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611040038.aspx",
      },
      {
        id: "gu-screening",
        title: "顧立雄：接密越高查核越嚴；F-16V仍「按計劃」",
        body: "外交及國防委員會今天邀國防部長顧立雄業務報告。國防部已訂「國軍涉密人員安全調查作業規定」，建「接密資格認證」，不分軍、文職及階級，依接密等級完成查核。顧立雄說接觸密級越高查核越嚴，要全面清查、讓接密程度與查核契合。被問共機架次增加，他說敵情威脅時刻存在，不要輕忽。第二批F-16V（blk70）是否近期飛返，他說目前按計劃推展，有確切時間再報告。聯兵第542旅一輛M109A5昨天在營區起火，李姓士官燒燙傷、無生命危險，陸軍將組調查小組。戰備長效水去年編近8億、650萬瓶、估每瓶120元；他說後來國內廠商願設線，決標單價降至35元。認證在規定裡。戰機還在「按計劃」。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611040042.aspx",
      },
      {
        id: "ammo-lines",
        title: "軍備局要增13條產線；無人機559億改走追加",
        body: "國防部昨天把業務報告、116年度預算送到立法院，供今天委員會使用。軍備局生製中心依平戰高消耗需求，增建武器、裝備、彈藥、火炸藥原料、發射藥等13條生產線及民間備援。115年軍事投資法定預算1550億，原匡列於特別條例的無人載具559億、台美共同合作及中層反戰術彈道飛彈等775億，計1334億改列追加；作業維持法定1966億，國內無法自製的急需彈藥73億、台灣戰術網路9億，計82億同樣進追加。116年新增建案包括新式輪型步兵戰鬥車、105公厘輪型戰車、潛艦救難艦、天弓三型增購等。特別條例沒過的項目，改從追加走。產線還在紙上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611030337.aspx",
      },
      {
        id: "poverty-wang",
        title: "王世堅拍桌；呂建德用OECD 7.57%對12%",
        body: "聯席審查裡，民進黨王世堅用民間團體算法——年收入低於可支配所得中位數六成——說台灣貧窮人口12%，扣掉低收、中低收入戶後還有230萬人在網外。衛福部次長呂建德說民團算法錯誤，社福津貼合計照顧率已達8%，王世堅拍桌斥「胡說八道」。呂建德會後對中央社說，OECD相對貧窮是中位數50%，台灣7.57%，低於日本15.4%、韓國15.3%；依法救助涵蓋率台灣2.17%、日本1.60%、韓國4.6%。加計身障生活補助、中低收老人津貼、弱勢兒少扶助等八大經濟弱勢津貼，去年約190萬人、總人口8.14%。賴惠員問國民黨團把老農津貼提到每月1萬5000元、高於政院1萬元；農業部次長黃昭欽說調到1萬元自今年7月1日起估需64.53億，升到1萬5000元要另找財源。數字各說各的。拍桌進了紀錄。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611040139.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "4 Nov 2026",
    lede:
      "Takaichi will sit the Finance Committee on the 6th; the LDP wants the food-tax bill through the Lower House that afternoon; Tamaki called the present text impossible; the Nikkei closed 1.42% down after a 4.8% plunge on US midterm projections; and 49 governments want a disaster bureau.",
    stories: [
      {
        id: "food-tax-sixth",
        title: "Takaichi will take questions on the 6th; the LDP wants a vote the same day",
        body: "The LDP and the Lower House caucus Chudo agreed this morning that Prime Minister Sanae Takaichi will attend the Finance Committee on 6 November. LDP Diet affairs chief Hideki Murai proposed two hours of questions, a committee vote, and an emergency plenary the same day. Chudo’s Yuichi Goto told reporters that funding and the design of the income-linked benefit still have “a lot of issues remaining,” that he wants “as long as possible” of answers in the prime minister’s own words, and that whether a vote can be taken “will depend on the answers.” The bill is still the two-year cut on food and drink from 8% to 1% from April 2027, plus the benefit. The offset is still unnamed. She will now be in the room. The stamp is not.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref:
          "https://www.asahi.com/articles/ASVC40J44VC4UTFK00FM.html",
      },
      {
        id: "upper-house",
        title: "The Lower House can force it; the Upper House is the veto the LDP does not have",
        body: "Kyodo’s Wednesday file is the Senate problem. The LDP and Japan Innovation Party can push the food-tax cut through the Lower House this week; they do not hold the Upper House, and the session ends 12 December. The ruling camp wants Upper House deliberations next week, with an LDP-chaired special committee. Komeito leader Mitsunari Okamoto said Tuesday the government still needs a clear picture of the low-income cash benefits or his party may not support a Lower House vote. LDP Upper House Diet affairs chief Yoshihiko Isozaki said the party would consider the opposition’s request for Takaichi to attend “as much as possible.” CDP counterpart Yoshitaka Saito: “They look like rushing straight ahead to enact the bill but we won’t allow it in the upper house.” The override is numbers. The delay is the calendar.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261104/p2g/00m/0bu/012000c",
      },
      {
        id: "tamaki-takeya",
        title: "Tamaki: “impossible in its current form”; Takeya: far too early for Komeito",
        body: "Democratic Party for the People leader Yuichiro Tamaki told a party executive meeting on Wednesday that support for the government bill would be “impossible in its current form.” The DPP will decide after it sees whether the ruling camp takes its counter-proposal — resident and income-tax cuts — which has made little progress in the Lower House; the party also wants a similar bill in the Senate. A morning DPP meeting did not settle the vote: some members backed the shared aim of cutting the burden, others warned the middle class would pay more when the 1% rate expires in April 2029. Komeito acting representative Toshiko Takeya said the government’s explanations of the cut’s effects remained unclear: “It is far too early to say the conditions are in place for Komeito to support the legislation.” Democratic Reform secretary-general Takeshi Shina: “It is difficult to find any grounds for supporting the legislation.” The coalition can count the Lower House. It still has to count Komeito.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/04/japan/politics/tamaki-consumption-tax-bill-rejection/",
      },
      {
        id: "nikkei-midterms",
        title: "Nikkei −1.42% at the close, after −4.84% on Democratic House projections",
        body: "The Nikkei 225 ended Wednesday 893.23 points, or 1.42%, lower at 62,188.63, a third straight loss. Reuters said US midterm projections that Democrats were on course for majorities in both chambers sent AI and semiconductor stocks down; the index briefly fell 4.84%, or 3,051.76, to 60,030.10, under the 29 July low of 60,448.90, then recovered on earnings and dip-buying. IHI reversed after an afternoon upgrade; trading-house results helped. SBI’s Hideyuki Suzuki called the AI-capex scare a short-term over-reaction. The vote is still being counted. The cash session is not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261104093?fm=latestnews",
      },
      {
        id: "disaster-bureaus",
        title: "Forty-nine bids for disaster bureaus; the sites are due next summer",
        body: "The National Disaster Management Agency opened on 2 November under Takaichi, with Goshi Hosono as disaster minister. Sankei’s Wednesday file is the locations. By the end of October, 49 local governments and groups had asked to host a Disaster Management Bureau — regional offices that back up Tokyo and help prefectures plan. Twenty-three prefectures applied on their own; Aichi and Nagoya, and Osaka prefecture and city, filed jointly. Hakodate, Soja, Sendai, Niigata, Kitakyushu and a Saitama group are in. Osaka Governor Hirofumi Yoshimura is bidding as a “second capital.” An expert panel is due around February; the government will decide sites by summer; the law requires the bureaus by 16 July 2028. The sign is up. The map is a queue.",
        sourceLabel: "Japan Forward / Sankei",
        sourceHref:
          "https://japan-forward.com/new-disaster-agency-sparks-race-to-host-regional-bureaus/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "4 Nov 2026",
    lede:
      "Lee and Erdogan closed a Sinop finance MOU on Tuesday; Kim Yo-jong said dialogue with Washington is optional; Binance named fake interviews and an internal AI tool in a $6.34 billion theft; police opened a criminal file on 168 leaked passports; and Lee asked the Cabinet to consider a cybersecurity czar.",
    stories: [
      {
        id: "erdogan-summit",
        title: "Lee–Erdogan: a Sinop finance MOU, tanks, and $11bn toward $15bn",
        body: "President Lee Jae Myung and Turkey’s Recep Tayyip Erdogan agreed Tuesday in Seoul to deepen work on nuclear plants, defence manufacturing and infrastructure. Lee said cooperation on Turkey’s Sinop plant was “smooth”; KEPCO and the Turkiye Nuclear Energy Company signed an MOU in Ankara last year and have a preliminary feasibility study. Tuesday added a financial-cooperation MOU for Korean firms bidding on the project. Defence is to widen from tanks and vessels into joint manufacturing, technology and third-country sales. Lee also listed biotechnology, energy, natural resources and AI. Erdogan put bilateral trade at $11 billion and a $15 billion goal, “balanced” and “sustainable,” and noted next year’s 70th anniversary of ties. It is Erdogan’s first trip to Korea since 2018. The plant is still a bid. The MOU is the cash conversation.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103011151315",
      },
      {
        id: "kim-yo-jong",
        title: "Kim Yo-jong: dialogue is an option, not a national interest",
        body: "KCNA carried Kim Yo-jong on Wednesday. “The choice for peace includes dialogue of course, but this is not surely equated with national interests for us.” She said continued “hostile signal[s]” from Washington were forcing a rethink of America’s “true nature,” and called the FBI’s attribution of a more-than-$6 billion Binance theft to the North “no more than a tip of iceberg” of US hostile policy. She also cited a recent South Korea–US–Japan foreign ministers’ meeting that restated complete denuclearization, and joint drills. Tuesday she had already called the FBI finding a “grave political provocation.” Dialogue is on the list. It is not, she said, required.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261104001000315",
      },
      {
        id: "binance-ai",
        title: "Binance: fake job interviews, then an internal AI tool, $6.34bn",
        body: "Binance said Tuesday that about $6.34 billion in assets were hit in a multi-stage operation it dates as early as June. A fake recruiter on a job platform ran video interviews in September and sent an “assignment” repository with zero-day malware that endpoint tools missed. On 20 October the attacker used an internal AI tool as a springboard to a container-deployment token, then launched a container. The FBI attributes the theft to the North Korean group it calls TraderTraitor. Binance said it had blocked 57 suspected North Korea-linked threats this year. The State Department, asked about Pyongyang’s denial, called DPRK cybercrime “a global problem.” The interviews were the door. The AI tool was the corridor.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261104000400315",
      },
      {
        id: "passport-leak",
        title: "Police opened a criminal file on 168 names from the presidential jet",
        body: "The Korean National Police Agency said Tuesday it had moved from a preliminary probe to a formal criminal investigation of an online leak covering 168 people, including President Lee, the first lady and Cabinet ministers. A file titled “Passenger list (South Korea-Belgium)” was posted in June on a paid malware-scanning site; paid users could download it. Police say it held Korean and English names, affiliations, titles, dates of birth, passport numbers and issue and expiry dates for people on the presidential aircraft for June trips to Belgium, Italy and France. They suspect it was uploaded on 2 June while being scanned, stayed up about five months, and is now gone. The foreign ministry reported the leak to the privacy watchdog; the commission said it would verify the report. Cheong Wa Dae said it had taken “responsive measures.” The list sat in public. The case number is new.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103004051315",
      },
      {
        id: "cyber-czar",
        title: "Lee asked Cabinet to “proactively consider” a cybersecurity czar",
        body: "At Tuesday’s Cabinet meeting Lee instructed officials to consider a dedicated cybersecurity task force after hacks at Mirae Asset Global Investments, Bithumb and Daishin Securities, and after the Binance theft the FBI blamed on North Korea. He called for “a comprehensive prevention system,” said AI-fuelled hacking had exposed “the clear limits” of inspection-and-response, and told ministers to “proactively consider the formation of a cybersecurity czar agency” as a control tower for public and private security. He also wanted shortcomings fixed at state bodies and in communications, energy and finance. No agency was created. No name was attached. The instruction is to consider one.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103005751315",
      },
    ],
  },
];

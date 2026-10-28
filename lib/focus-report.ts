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
    updatedAt: "28 Oct 2026",
    lede:
      "Anthropic cut Claude 40% for American governments on the day the $1-a-seat deal was about to expire; OpenAI was reported to be buying Google chips and declined to comment; DeepMind put native audio into a world model still on a waitlist; the S-1 is still blank on price, with a mid-November clock; and Cloudflare said 155 long prompts had been answered from someone else’s cache.",
    stories: [
      {
        id: "anthropic-gsa",
        title: "Claude is 40% off for governments, with no minimum spend",
        body: "Anthropic and the General Services Administration expanded the OneGov agreement on Tuesday: a 40% discount on token-based usage across Claude Enterprise, Claude for Government, and the Claude API, including FedRAMP-authorized work. There is no minimum purchase. Eligibility now runs to federal, state, local, tribal and territorial buyers, directly, through resellers, and, in the coming months, on cloud platforms. About 500 US government organisations already use Claude; weekly Claude for Government users are up about eightfold since February. The discounts are estimated to save the government $1 billion. The previous $1-per-user offer expires on 31 October. Nextgov notes OpenAI’s own OneGov token discount, 50%, began this month. One lab is still selling seats. The other is selling tokens.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/news/expanding-partnership-gsa",
      },
      {
        id: "openai-tpu",
        title: "OpenAI plans to buy Google chips — unsigned, and OpenAI will not talk",
        body: "Reuters, citing The Information and a person familiar, reported on Tuesday that OpenAI plans to buy Google’s AI chips. No volumes or prices were given. OpenAI declined to comment; Google did not immediately respond after hours. The same week OpenAI said it would put frontier models on Google Cloud, with Microsoft still primary. Reuters had already reported in June 2025 that the lab was renting Google TPUs. Google began selling the chips directly this year; Alphabet’s finance chief has said a small share of TPU-sale revenue would be recognised this year and most in 2027. The Information had a plan. The two companies had a decline.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/openai-plans-to-buy-googles-ai-chips-the-information-reports-4977342",
      },
      {
        id: "genie-4",
        title: "Genie 4 adds native audio — and is still a research preview",
        body: "DeepMind announced Genie 4 on Tuesday: a natively multimodal world model that generates ambient sound, music and interactive dialogue with the scene. Gemini Omni is described as anchoring appearance and behaviour; other Gemini models as keeping the simulation coherent. Users can change weather, camera or characters in natural language while it runs. It is a research preview for trusted testers, then Google AI Ultra subscribers in Project Genie and early Gemini API and AI Studio partners. The lab says object permanence still drifts on longer sessions, and that interaction lasts a few minutes rather than an afternoon. The worlds have sound. The door is still a list.",
        sourceLabel: "Google DeepMind",
        sourceHref:
          "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      },
      {
        id: "s1-calendar",
        title: "The S-1 still has no price; Yahoo’s clock starts 10 November",
        body: "Anthropic’s public S-1, filed Monday for Nasdaq “ANT,” still leaves share count and price blank. Yahoo Finance wrote on Tuesday that marketing could begin on 10 November — 15 calendar days after the filing — and that the earliest first trade under SEC rules is Monday 16 November, the week the Wall Street Journal and Reuters have the company aiming for. Veterans Day closes the SEC on the 11th; two business days’ notice before effectiveness would make Friday 13 November the earliest pricing date, a day bankers rarely use. SpaceX went from public filing to first trade in 23 days in June; that pace would be 18 November. Midterms are 3 November, Thanksgiving the 26th. The books are public. The range is not.",
        sourceLabel: "Yahoo Finance",
        sourceHref:
          "https://finance.yahoo.com/markets/article/anthropics-ipo-could-start-trading-as-soon-as-nov-16--heres-the-road-from-filing-to-first-trade-155405578.html",
      },
      {
        id: "cloudflare-glm",
        title: "Cloudflare: 155 GLM-5.3 replies came out of someone else’s KV cache",
        body: "Cloudflare published the post on Monday. From 27 August to 9 September, 155 responses on Workers AI’s GLM-5.3 (`@cf/zai-org/glm-5.3`) contained data from earlier customers’ requests. All of the prompts were longer than 681,280 tokens. A researcher at Knostic reported it on 8 September; Cloudflare took the model offline the next morning, patched it, and restored it the same day. No other Workers AI model was affected, and the company says the traffic looked like ordinary long-context use, not a campaign. Prefill GPUs had been configured with a 1,048,576-token window and a KV pool that only held 681,280; SGLang then served a one-token placeholder while decode attended over stale pages. The engine fix is in SGLang v0.5.22. The isolation bug was in the cache. The HTTP code was 200.",
        sourceLabel: "Cloudflare",
        sourceHref: "https://blog.cloudflare.com/kv-cache-exposure-remediation/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月28日",
    lede:
      "共機回到六架，都在中線以西；共艦七艘，公務船只剩一艘。龔明鑫為中油台電撥補說「走到窮路只能反映在價格上」。楊金龍把通膨交給補貼，而不是利率。賴清德在總統府談海纜與跨境鎮壓。民眾黨官網被關了。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機六架次都在中線以西；共艦七艘、公務船一艘",
        body: "國防部統計27日上午6時至28日上午6時，偵獲共機6架次、共艦7艘及公務船1艘，持續在台海周邊活動。自由時報寫，示意圖上共機活動介於昨天上午7時25分至下午2時20分，六架次主戰機都在台海中線以西。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是3架次共機侵擾北部及西南、8艘共艦、4艘公務船。飛機多了；海面少了。五中全會還在開。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5621001",
      },
      {
        id: "gong-subsidy",
        title: "龔明鑫：撥補若不過，「走到窮路只能反映在價格上」",
        body: "經濟部長龔明鑫今天在立法院經濟委員會說，若中油、台電未獲預算撥補，「若走到窮路，只能反映在價格上。」會前受訪時他說，若能源價格完全反映國際行情，CPI年增率一定會超過3%。中油董事長方振仁說，未來三個月每月約虧100億，估至年底虧損1257億；另希望增資2338億做天然氣韌性，七項投資已過環評。國民黨召委鄭正鈐問，711億撥補若過，12月還會不會漲電。龔明鑫說電價仍由審議會決定。115年度追加預算6076億仍停在一讀後的委員會。價格的備案寫出來了；三讀沒日期。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202610280178.aspx",
      },
      {
        id: "yang-cpi",
        title: "楊金龍：沒有撥補、補貼又停，油價續漲，通膨就可能爬",
        body: "央行總裁楊金龍今天在財政委員會說，CPI年增率已連續五個月高於2%，通膨仍屬可控。央行預測2026年CPI年增率2.03%，明年1.83%。國際油價是供給面，能源穩定機制比升息針對、也比升息有效；用升息對付供給面，影響大、效果不好。若明年通膨回落或停在2%附近，還可以接受；若大幅高於2%，就要小心。被問撥補不過會否衝擊物價，他說：撥補不過但穩定措施仍在，通膨還可控；沒有撥補且能源補貼停、國際油價又漲，通膨率就可能攀升。利率按兵。條件寫在補貼上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202610280125.aspx",
      },
      {
        id: "lai-formosa",
        title: "賴清德：海纜風險與跨境鎮壓，台灣站第一線",
        body: "總統賴清德今天在總統府接見福爾摩沙俱樂部台北年會歐洲議員訪團。他說，面對國際海底電纜風險管理及中國跨國鎮壓等挑戰，台灣會勇敢、堅定站在第一線，持續分享經驗，做民主陣營可信賴的夥伴。他也說要在人工智慧、無人機、半導體建立可信賴的民主供應鏈。代理主席柯理和呈遞聯合聲明，強調台灣與波海國家都希望未來由自己決定，而非由強大鄰國獨斷；聲明支持海纜安全倡議，反對單方面改變台海現狀。跨境鎮壓上週在委員會；海纜今天在府。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610280075.aspx",
      },
      {
        id: "tpp-hack",
        title: "民眾黨官網被關：駭客要奪管理權，鎖定政策會資料庫",
        body: "民眾黨主席黃國昌今天上午到刑事警察局報案。他說網站遭針對性、系統性攻擊，駭客企圖奪取管理權限、把原管理者剔除，黨部因此緊急關閉官網。攻擊鎖定存有會議紀錄、智庫成果及政策方針的政策會資料庫。先前已有人駭入內部電子簽核系統，民眾黨10月12日已向地檢署告訴並通報內政部；昨天晚上是再一次。黃國昌說不論幕後是誰，都要檢警追查來源。官網先關了。來源還沒寫上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610280116.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "28 Oct 2026",
    lede:
      "Katayama told the finance committee the food-tax hole is about ¥10tn over two years and that she will “definitely” fill it, still without naming a tax; a supermarket owner said the 7% joy would last a month; the yen spent the afternoon in the 157s after a look at 158; the Nikkei closed 1% up; and the Bank of Japan is still expected to sit on Friday.",
    stories: [
      {
        id: "katayama-10tn",
        title: "Katayama named the hole: about ¥10tn, “definitely” secured, still unnamed",
        body: "Finance minister Satsuki Katayama told the Lower House Financial Affairs Committee on Wednesday that she was working from a revenue loss of about ¥10tn over two years from cutting the food-and-drink rate to 1%, and that “securing funds for various fiscal needs is something we will definitely do.” She repeated the old line: no deficit-covering bonds, a rewrite of the budget, and non-tax revenue. Takeshi Shinohara of the Democratic Party for the People said the explanation was still thin, and that putting the rate back to 8% or leaving it down was “hell either way.” A joint review with the agriculture committee was due in the afternoon, on farmers who lose the tax and restaurants that keep 10%. The number is now the finance minister’s. The offset is still a sentence.",
        sourceLabel: "Sankei",
        sourceHref:
          "https://www.sankei.com/article/20261028-6BIRPOLBWNNOXBCJGNLRBCLOVU/",
      },
      {
        id: "food-tax-witnesses",
        title: "Aki-dai’s owner: the joy of 7% off “probably won’t last a month”",
        body: "Hiromichi Akiba, who runs the Tokyo grocer Aki-dai, sat as a witness at Tuesday’s committee. The cut from 8% to 1% would be welcome, he said, but “the joy of it falling 7% probably won’t last a month.” After two years of getting used to the lower rate, putting it back to 8% — with prices still rising — “would be a serious blow.” Sale-day queues that used to be about 100 people are now closer to 200. Relabelling and till work is a cost for the shops. He asked that the money go to fertiliser, feed and farm machinery instead. The bill is two years. The hangover is baked in.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/articles/ASVBW2589VBWULFA013M.html",
      },
      {
        id: "yen-157",
        title: "The yen looked at 158, then sat in the 157s into the Fed",
        body: "Reuters had dollar-yen at ¥157.82–83 at 3pm in Tokyo, a little cheaper than New York’s late ¥157.94–96. It printed ¥158.03 in the morning, failed to hold 158, and then chopped with no conviction either way. Dealers were waiting for the FOMC later in the day and for a run of hyperscaler earnings. The 9am print was ¥157.99–158.00. Yesterday’s close in New York was already in the high 157s. The food-tax hole was being named in the same building. The dollar did not care much.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261028078",
      },
      {
        id: "nikkei-close",
        title: "The Nikkei rose 1%; TOPIX did not",
        body: "The Nikkei 225 closed up 685.82 points, or 1.08%, at 63,954.19. CNA’s Tokyo wrap had Kioxia up more than 10%, Advantest 3%, Tokyo Electron 4%. TOPIX slipped 5.66 points, or 0.14%, to 3,991.71. Chipmakers did the index; the broader tape did not follow. The Fed is still tonight. The Bank of Japan is still Friday.",
        sourceLabel: "CNA",
        sourceHref: "https://www.cna.com.tw/news/afe/202610280163.aspx",
      },
      {
        id: "boj-friday",
        title: "Friday’s BOJ is still a hold; December is the sentence people want",
        body: "The Bank of Japan ends a two-day meeting on Friday. A CNA wrap of the Wall Street Journal’s week-ahead, updated Tuesday, said markets still expect the policy rate to stay at 1.25%, with the statement watched for the next hike. J.P. Morgan’s Ayako Fujita said the bank’s recent guidance pointed to December rather than this week, even if the broader tightening stance had not changed. September factory, retail and jobs numbers are also due. The Fed prints first. Ueda prints after.",
        sourceLabel: "CNA",
        sourceHref: "https://www.cna.com.tw/news/afe/202610273001.aspx",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "28 Oct 2026",
    lede:
      "Lee told the party’s hard line that all-or-nothing was “irresponsible extremism”; satellite pictures showed hundreds of trucks at the new Yalu customs yard; SK hynix printed a 100-trillion-won quarter and the KOSPI jumped more than 6%; the economy grew 1% in the third quarter with households still shrinking; and Kim sat in Cabinet a second time.",
    stories: [
      {
        id: "lee-extremism",
        title: "Lee: all-or-nothing prosecution reform is “irresponsible extremism”",
        body: "President Lee Jae Myung wrote on X on Wednesday, answering a user who wanted an apology for the phrase “irresponsible extremists.” Some people, he said, sincerely want prosecution reform; others “hinder prosecution reform by only calling for clarity or making excessive, inflammatory demands for their hidden political and personal agendas.” “Calling for ‘all-or-nothing’ approaches as if they are the only true leader of reform” was irresponsible extremism. Yonhap read the post as aimed at Democratic Party hard-liners who say he has backtracked. Lee had wanted prosecutors to keep supplementary investigations in exceptional cases; the bill that took effect stripped them of investigative power and left indictment. The fight is inside the party. The statute is already in force.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261028002000315",
      },
      {
        id: "yalu-trucks",
        title: "Unification’s satellites: 45 trucks in the morning, about 280 in the afternoon",
        body: "The Unification Ministry, in papers sent to People Power’s Kim Dae-sik, said satellite imagery of the North Korean customs yard on the new Yalu River bridge showed about 45 cargo trucks on the morning of 22 October and about 280 in the afternoon. Six container trucks were seen on the bridge itself, China toward the North; none the other way. The bridge opened on 15 October after twelve years shut. Kim Jong-un crossed it on the 24th on his way to Dandong. The ministry said cargo types, quantities and contracts cannot be read from the pictures, and that it would watch the trade. Kim asked whether anything banned by the UN Security Council was moving. The yard filled up. The bills of lading did not.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10917360",
      },
      {
        id: "hynix-kospi",
        title: "SK hynix’s 100-trillion-won quarter; the KOSPI jumped 6.63%",
        body: "SK hynix reported third-quarter revenue of 104.62 trillion won, operating profit of 83.33 trillion won, and a shareholder-return programme of more than 100 trillion won for 2026. The KOSPI rose 374.1 points, or 6.63%, to 6,012.44; it touched 6,032.28. The exchange fired a buy-side sidecar before 11am for the second session running. SK hynix closed up 10.89% at 1.49 million won; Samsung Electronics 9.01% at 242,000. Foreigners and institutions bought; individuals sold a net 1.8 trillion won. The won was at 1,337.7 per dollar at 3.30pm, down 10.7. Yuanta’s Lee Jae-won said the print eased talk that the memory cycle had peaked. The chipmaker’s books did the index. Household consumption, the day before, had not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261028008051320",
      },
      {
        id: "gdp-q3",
        title: "GDP grew 1% in the third quarter; private consumption did not",
        body: "Advance Bank of Korea figures on Tuesday put real GDP up 1.0% on the quarter, after 0.6% in the second and against an August forecast of 0.3%. Year-on-year growth was 3.4%. The first three quarters are up 3.6% cumulatively; a repeat of 1% in the fourth would be about 3.6% for the year, the statistics department said, and 1.4% would be 4%. Exports rose 2.3%, facility investment 4.1%. Private consumption fell 0.2%. Real GDI jumped 18.8% on the year, the most since the fourth quarter of 1977. The central bank blamed weaker financial-services spending in a stock-market correction and auto strikes; without those, consumption might have been +0.4%. September goods exports were a record $120.9bn. The chips grew. The shops did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261027001452320",
      },
      {
        id: "kim-cabinet",
        title: "Kim sat in Cabinet a second time; the opposition still calls it a problem",
        body: "Kim Ji-yong, the first head of the Serious Crime Investigation Agency, attended President Lee’s Cabinet meeting on Tuesday — the second time since the agency opened on 2 October. Acting Prosecutor General Lee Jeong-hyun and acting police chief Kim Jong-chul were also in the room. Opposition lawmakers have told the audit that investigative chiefs in Cabinet undercut neutrality; the ruling party says the room is where the government is coordinated. Kim told the audit he knew the objection and would talk to the interior ministry before deciding whether to keep coming. Lee has already called the objection unconstitutional. The chair is filled. The weekly seat is still a fight.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261027005300315",
      },
    ],
  },
];

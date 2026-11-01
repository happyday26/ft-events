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
    updatedAt: "1 Nov 2026",
    lede:
      "OpenAI is now asking for up to $20bn on a $1.25tn tag the round has not closed; Blackstone told chip-deal investors Anthropic looks like high junk after the listing, not investment grade; Private Intelligence is a privacy bundle with a preview and no price; a TPU in orbit sent back a haiku; and Max 20x is Ultra, still $200, without the five-hour clock if the account is verified.",
    stories: [
      {
        id: "openai-round",
        title: "OpenAI cut the ask to $20bn; the round is still open",
        body: "CNBC confirmed on Saturday that OpenAI is seeking up to $20bn in its latest funding round, down from an earlier target of about $30bn. The Financial Times first had the $10bn cut and a $1.25tn post-money valuation; CNBC says a person directly familiar with the deal, speaking without authorisation, said the figures can still move because the round has not closed. The FT set a Friday deadline for commitments and said some investors reduced their allocations. CNBC has UAE investors leading alongside Coatue. OpenAI did not immediately comment. The week’s AI-stock selloff is the backdrop, not a close. The number on the term sheet shrank. The close has not.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/31/openai-fundraising-20-billion-valuation.html",
      },
      {
        id: "anthropic-junk",
        title: "Blackstone now expects high junk for Anthropic after the IPO",
        body: "The Financial Times, via TechCrunch on Friday, says Blackstone told investors in its $63bn Anthropic chip-financing deal that it expects a “high” junk rating after the listing — double-B, the top of speculative grade. That reverses an earlier Blackstone line that the lab would be investment-grade before 2027. TechCrunch asked both firms; both declined to comment. The forecast is not a rating-agency decision. A junk tag would make the next compute raise dearer. The S-1 is public. The price range is still blank. The credit opinion that was supposed to follow the listing has been marked down one notch in private.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/",
      },
      {
        id: "private-intelligence",
        title: "Private Intelligence is a bundle: ZDR plus a preview, no price",
        body: "OpenAI’s new business page gathers the privacy promises under one name. Access restrictions, customer ownership of inputs and outputs, admin control of what agents may touch, and ordinary encryption sit above two mechanisms: Zero Data Retention for eligible API workflows, and Private Inference, tagged as an API preview, which the diagram describes as confidential computing with “strict, verifiable controls.” Compliance claims are the usual list — SOC 2 Type 2, ISO, HIPAA through a BAA for eligible services, FedRAMP for designated government offerings. There is no public price, no named model list, and no date when the preview ends. The page offers sales and an interest form. The new word is the bundle. The coverage is still “eligible.”",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/business/private-intelligence/",
      },
      {
        id: "suncatcher",
        title: "Suncatcher downlinked a Gemma 4 haiku from Svalbard",
        body: "Google’s research blog says the Project Suncatcher prototype, launched on 1 October, finished its commissioning checklist this week and hit a “Hello World”: the first response from a data-centre-class TPU in orbit. On a ground-station pass the team uplinked a prompt to the onboard Gemma 4 open model asking for a haiku about being in space. As the satellite passed Svalbard the downlink read: “Blue marble below / Data streams in silent grace / Starlight feeds my core.” Limericks and telemetry prompts followed. Next come thermal-stress and radiation tests. The next hardware milestone is twin interconnected satellites in 2027. The poem is 17 syllables. The claim is that the chip ran in orbit.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/",
      },
      {
        id: "claude-ultra",
        title: "Max 20x is Ultra: still $200, no five-hour limit if verified",
        body: "Anthropic’s help centre now treats Ultra as the old Max 20x plan. Existing subscribers move automatically at the same $200 a month; Max 5x is just Max at $100. Ultra is listed as ten times Pro’s usage every week. Verified accounts lose the rolling five-hour session cap; unverified ones keep a temporary limit until Anthropic’s automatic check — account and payment history, not a phone number at checkout — clears. A separate weekly cap still applies across models, and Fable has its own. The help page says there is nothing to do and no guaranteed uninterrupted service. The 20x label described the session. The week is 10x. The clock that interrupted Claude Code is the part they took off.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月1日",
    lede:
      "隔夜共機32架次、26架越中線，共艦7艘、公務船2艘；昨天下午又以聯合戰備警巡出海22架次、18架越線。賴清德在高雄要在野黨支持追加預算裡的油電與健保。內政部清查亞拓無人機，三個機關32架。追加預算明天報告，三讀仍寫在11月20日。",
    stories: [
      {
        id: "pla-overnight",
        title: "隔夜32架次、26架越線：7艘共艦、2艘公務船",
        body: "國防部統計10月31日上午6時至11月1日上午6時，偵獲共機32架次、共艦7艘、公務船2艘，其中26架次逾越海峽中線，進入北部、中部、西南及東部空域。國軍以任務機、艦及岸置飛彈系統監控應處。中央社標題先寫7艘共艦、26架次共機；正文補上32架次總數。前一日0600公報是13架次（6架越線）、7艘共艦、2艘公務船，合計22。空域從13加到32；越線從6加到26。艦少不了，飛機多了一倍有餘。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611010016.aspx",
      },
      {
        id: "pla-patrol",
        title: "下午聯合巡航：22架次出海，18架越線",
        body: "國防部31日傍晚說，自當天下午1時15分起陸續偵獲殲10、殲16、空警500、運油20及無人機等22架次出海，其中18架次逾越中線及其延伸線，進入北部、中部、西南及西太平洋空域，配合共艦，假「聯合戰備警巡」之名活動。國軍以聯合情監偵掌握，並檢派任務機、艦及岸置飛彈。這是白天那一波；隔夜公報把全天加總成32。西太平洋寫進了午後那一則，沒寫進凌晨那一則。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610310154.aspx",
      },
      {
        id: "lai-budget",
        title: "賴清德：不漲油電健保，請在野支持追加預算",
        body: "總統今天在高雄市醫師公會新會館啟用典禮說，沒有調漲健保費是為了穩定社會；今年稅收增加，經濟成長率「可能會超過12%」，可用稅收挹注健保。油、電同一套：追加預算已送立法院，要補助中油與台電吸收的成本，「請醫界若有機會，也鼓勵在野黨多支持。」他還提健康台灣、2032年平均餘命加3歲、科室不同工不同酬。數字是「可能」；案子仍在院裡。高雄講的是補助；三讀日期還是11月20日那一行。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611010068.aspx",
      },
      {
        id: "yatuo-interior",
        title: "內政部清查亞拓：三機關32架，移民署30架還沒交",
        body: "亞拓科技涉以中製晶片交軍用無人機，負責人夫妻已遭台中地檢聲押禁見。內政部31日說，初步盤點所屬三個機關採購32架該公司製造的無人機：民國114年國家公園署與中央警察大學各1架，將查證並依採購規定辦理；今年移民署向速源科技決標30架、總金額275萬元，原訂交亞拓機，尚未履約，移民署將依約禁止交付亞拓或涉及中國製產品。部裡不排除依政府採購法求償。軍方案在檢方；文官案在清查清單上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610310034.aspx",
      },
      {
        id: "taipei-debate",
        title: "台北市長首場電視辯論：蔣萬安對沈伯洋",
        body: "31日「2026台北市長候選人電視辯論會」在TVBS登場，爭取連任的蔣萬安與民進黨沈伯洋首次同台。行政院長卓榮泰當天下午在新北看完國道一號五堵—汐止拓寬後受訪，說兩人都很認真，市民要看的是政見與「清晰且可行」的願景，並為所有參選人加油。他沒評輸贏。第一場辯過了；票在11月28日。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610310135.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "1 Nov 2026",
    lede:
      "The LDP wants the food-tax bill through the Lower House on Friday and still has not said whether Takaichi will sit the Wednesday hearing; tourists started paying the tax first this morning; Motegi spent 30 minutes with Lavrov and got no line on the detained reporter; the Quad in Atlanta wrote “grave concerns” without naming China; and the yen closed New York at ¥157.51.",
    stories: [
      {
        id: "food-tax-friday",
        title: "Friday votes, if Takaichi sits on Wednesday",
        body: "Jiji says the LDP hopes for Lower House committee and plenary votes on Friday on the two-year food-tax cut — 8% to 1% — plus benefits equal to 1% of consumption tax for low- and middle-income workers, then a send to the Upper House before the session ends on 12 December. Opposition parties are making Takaichi’s attendance at the Financial Affairs Committee the price. The two sides are to discuss that on Wednesday, the next sitting. They want about 30 hours of Lower House debate; after Wednesday the clock would stand at 28, expert testimony aside. Yuichi Goto, for the Democratic Reform–Komeito group, offered two hours of the prime minister. The offset is still unnamed. The attendance is the gate.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref: "https://www.nippon.com/en/articles/-/56718",
      },
      {
        id: "tax-free-refund",
        title: "Tourists pay the tax first now; the refund is at the airport",
        body: "From purchases made today, Japan Customs has switched tax-free shopping to a refund. Visitors pay the tax-inclusive price in the shop; the consumption-tax equivalent comes back only after a departure inspection confirms the goods are leaving. The floor is ¥5,000 before tax, per store per day, within 90 days, in quantities the traveller can carry. Special packaging for consumables is gone; eat or use them here and there is no refund. The kiosk is in the international lobby before baggage drop. Green means done; red means a bag check. A missing item on any one receipt voids that whole ticket. Narita, Haneda, Kansai, Chubu, Fukuoka, New Chitose and Naha also offer Visit Japan Web on the dedicated lobby Wi-Fi. The discount moved from the till to the gate.",
        sourceLabel: "Japan Customs",
        sourceHref: "https://www.customs.go.jp/kaigairyoko/taxrefund.htm",
      },
      {
        id: "motegi-lavrov",
        title: "Motegi asked Lavrov for the reporter; Moscow’s readout skipped him",
        body: "The foreign ministers met for about 30 minutes in Atlanta on Friday, on the G20 fringe — the first formal Japan–Russia sit-down in about five years, last one September 2021. Motegi demanded the immediate release of a Hokkaido Shimbun reporter detained by the FSB on Sakhalin on 13 October on suspicion of espionage; a consular visit was not granted until Monday. He also put Ukraine, the Northern Territories and Putin’s August island visit on the table. Both sides agreed to keep talking. The Russian ministry said the meeting was at Japan’s request and that Lavrov told Tokyo to abandon its “unfriendly policy” if a full dialogue is to resume. It did not mention the journalist.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90008",
      },
      {
        id: "quad-atlanta",
        title: "The Quad wrote “grave concerns” and $85m, and did not name China",
        body: "Motegi, Rubio, Penny Wong and S. Jaishankar met in Atlanta on Saturday, their third Quad this year. The joint paper voiced “grave concerns regarding economic coercion, including through arbitrary export restrictions, as well as non-market policies and practices that result in overcapacity to disrupt global supply chains in critical industries.” Kyodo notes they did not name China. They also pledged more than $85m in technical and financial help for “trusted” artificial intelligence in the Indo-Pacific. A leaders’ meeting is possible in Manila in mid-November, the first since September 2024. Rubio told the press the Quad is “not an anti-China or anti-anybody coalition,” and that the behaviours of concern come “repetitively from one country.” Export-credit agencies meet in Tokyo on 18 November.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90033",
      },
      {
        id: "yen-boj",
        title: "The yen finished New York at ¥157.51, up on the day, down on the month",
        body: "Reuters’ Friday New York wrap has the yen up 0.11% at ¥157.51 after a third daily gain, still headed for an October loss. The Bank of Japan had held at 1.25% and said policy had entered a more hawkish phase that could mean a hike once every few months; it also lifted the inflation outlook. Falling Treasury yields weighed on the dollar. FX Street’s Joseph Trevisani said the market was “a little disappointed” and that a Fed bias still offsets the BOJ. Bitcoin was down 2.61% on the Binance theft. The hold was expected. The print that survived into Saturday morning was 157.51, not a new Tokyo fix.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261031013",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "1 Nov 2026",
    lede:
      "KCNA said a cluster warhead was tested on Saturday and the JCS placed the shot off Chongju; Kim Yo-jong’s October loudspeaker deadline expired with the military still reporting nothing; Lee speaks on the ₩820.9tn budget tomorrow; the FBI named TraderTraitor for more than $6bn from Binance; and the Kospi closed Friday at 5,730.74 after touching 6,000.",
    stories: [
      {
        id: "nk-cluster",
        title: "A cluster warhead off Chongju; four types by year-end, KCNA says",
        body: "KCNA said Sunday that the Missile Administration tested a cluster-bomb warhead for tactical ballistic missiles on Saturday. Institutes under the administration “confirmed that Standard Type 2 … is capable of turning into ashes a target area of 12 to 13 hectares with its highest-density power.” The director said the warheads come in four categories and that units will be able to pick among them “within this year.” South Korea’s JCS said Sunday — a day late; it usually speaks the same day — that it had tracked the launch toward the Yellow Sea from around Chongju, in close share with the United States. Shin Jong-woo of the Korea Defense and Security Forum said the missile appeared to be the Hwasong-11 Ra, the type KCNA tied to a cluster test in April.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261101000451315",
      },
      {
        id: "loudspeakers-deadline",
        title: "October ended; the military still has not confirmed a broadcast",
        body: "A military official told SBS on Sunday that “our military has not confirmed any operation of North Korea’s loudspeakers directed at the South.” Kim Yo-jong’s 21 October statement had said psychological-warfare speakers would “enter operational status along the entire border” within the month; a later line about a “standby state” was read as a step down. Paju residents reported music and “ghostly wails” on 29 October; the NIS called that a false report, and front-line units said they heard nothing. The analysis in the same file is that Pyongyang would rather finish border fortification than start a speaker war. The deadline was the month. The month is over. The speakers are still a threat on paper.",
        sourceLabel: "SBS",
        sourceHref:
          "https://news.sbs.co.kr/english/article.do?news_id=N1008824916",
      },
      {
        id: "lee-budget-speech",
        title: "Lee’s fourth budget speech is tomorrow: ₩820.9tn, and a ₩160tn fund",
        body: "Kang Yoo-jung said Sunday that the president will deliver the 2027 budget address on 2 November. The proposal sent in September spends ₩820.9tn, up ₩93tn or 12.8% from this year’s ₩727.9tn main budget — the first whose whole draft the Lee administration wrote. A ₩160tn Future Response Fund is meant to put semiconductor windfall revenue into youth, regions, education and new growth engines. The statutory deadline is 2 December. The ruling party wants the extra spent; the opposition has already objected to the size and to how the fund would run. This will be his fourth such speech, after June 2025, November 2025 and the Middle East supplementary in April. The speech is tomorrow. The cut fight is not.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026110116140621975",
      },
      {
        id: "binance-fbi",
        title: "The FBI named TraderTraitor for more than $6bn from Binance",
        body: "A Saturday cyber alert said the DPRK was responsible for the theft of more than $6bn in virtual assets from Binance “on or about October 29.” The bureau named the operation TraderTraitor, the label used on earlier North Korean crypto thefts, and said it had watched the stolen funds move mainly into ether, working with the Secret Service and IRS Criminal Investigation. Exchanges and analytics firms were told to block the wallets. TRM Labs had already put the haul at about $6.36bn. Yonhap’s English file stops at the alert. The attribution is the FBI’s. The wallets are still being chased.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261101000300315",
      },
      {
        id: "kospi-week",
        title: "Kospi closed Friday at 5,730.74 after a trip through 6,000",
        body: "Korea Exchange and Yonhap Infomax, via Herald Business, have the index at 5,730.74 on Friday, up 180.44 points or 3.25% on the week, the first weekly gain after four losses. It had been as low as 5,469.47, then +3.09% Tuesday and +6.63% Wednesday through 6,000 on the Anthropic S-1 and SK hynix’s ₩83.33tn operating profit plus a ₩20tn buyback — sidecar halts both days — before −1.24% Thursday and −3.48% Friday. Nasdaq fell 2.86% Friday; the Philadelphia Semiconductor Index, 7.20%; Intel, 28.58%. Sunday’s first print is October exports. The week that touched 6,000 ended at 5,730.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10921519",
      },
    ],
  },
];

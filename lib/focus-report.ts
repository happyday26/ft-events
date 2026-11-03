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
    updatedAt: "3 Nov 2026",
    lede:
      "Anthropic put the third quarter into its S-1 on Monday — about $17 billion of revenue against $895.4 billion of compute promises — and, in the same filing, said it may imminently meet its own definition of recursive self-improvement; Altman signed four Abu Dhabi deals while the $20 billion round is still open; ChatGPT is merging Chat and Work onto one screen and one token pool; and OpenAI’s Washington shop wants “speed limits” and “compute campuses” once today’s midterms are counted.",
    stories: [
      {
        id: "anthropic-s1-q3",
        title: "The amended S-1: $17 billion in a quarter, $895.4 billion on order",
        body: "Anthropic filed an amended Form S-1 on Monday with the quarter the first prospectus did not have. Revenue in the three months to 30 September was roughly $17 billion, up about 1,127% from a year earlier; for the nine months it was $33.24 billion, up roughly 1,200%. Growth slowed: 47% quarter-on-quarter after 144% in the second quarter and 132% in the first. The net loss was $23.29 billion in the quarter and $104 billion over nine months, most of it from the fair value of convertible notes and derivative liabilities. Purchase commitments and leases now total about $895.4 billion, “substantially all” for compute and infrastructure. Compute and infrastructure expenses rose $14.4 billion in the nine months, up 329%. There is still no price, no share count, and no effective date. The roadshow has a book. It does not yet have a sticker.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html",
      },
      {
        id: "anthropic-rsi",
        title: "The same filing says RSI may be imminent — and that they might notice late",
        body: "In a new risk-factor paragraph, Anthropic said using AI to accelerate its own research “may cause the capabilities of our models to advance more rapidly than our ability to develop, validate, and implement corresponding safety, alignment, and security measures.” It has already missed a jump until after it happened. Internal estimates for future models, “rather than our current models,” indicate it “may imminently meet” the Responsible Scaling Policy’s definition of “dramatically accelerated progress attributable to AI.” No current model has been designated over that threshold; the data is still being assessed. The lab does not expect to let Claude “fully autonomously design and build successive generations of frontier models without meaningful human supervision,” and it is considering RSP updates to keep humans in control. The financials were the headline. The threshold is in the footnotes. Neither has been crossed in public.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/",
      },
      {
        id: "openai-abu-dhabi",
        title: "Altman signed four Abu Dhabi deals; the $20 billion round is still open",
        body: "Sam Altman met Khaled bin Mohamed bin Zayed Al Nahyan, Abu Dhabi’s crown prince, and the emirate’s media office listed four agreements on Monday. ADNOC and G42 will put OpenAI frontier models across the state oil company’s operations. Mubadala, Inception42 and OpenAI will apply the same to investment analysis. The government will translate policies and regulations into a form a model can read. Inception42 also signed a five-year pact covering government, enterprise and education. No dollar figures were attached to the four. CNBC’s Saturday report still stands: OpenAI is seeking up to $20 billion in a round co-led by UAE investors. MGX has already co-led Anthropic’s $30 billion raise in February and OpenAI’s $122 billion raise in March. The statement was about safety, accessibility and responsible innovation. The round is about cash. Only the statement closed.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/02/openai-abu-dhabi-ai-deals.html",
      },
      {
        id: "chatgpt-tabs",
        title: "Chat and Work become one tab; Codex stays separate, on the same tokens",
        body: "An email to users says ChatGPT will merge the Chat and Work tabs, first for a slice of accounts, then more widely. The pitch is to go from an idea to a website, a deck, or work on the web in one place, with files and plugins, while the user reviews. Codex remains a separate pane in the desktop app. ChatGPT and Codex will draw from the same allowance; OpenAI says most people will not notice, and that some, depending on usage and model, will wait longer for a reset. Anthropic put Claude’s chat and Cowork on one screen in September. The layout is new. The pool is the product.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/",
      },
      {
        id: "openai-speed-limits",
        title: "After the midterms: “speed limits,” and data centres renamed campuses",
        body: "Chris Lehane, OpenAI’s chief global affairs officer, told Axios the shop has been stockpiling proposals since August for the lame-duck session that opens on 9 November. The slogan is mandatory “speed limits” on the most powerful systems — “people should always remain in control of this technology.” There is no bill text, no metric, and no named enforcer. The other product is a rebrand: OpenAI wants its sites called “AI compute campuses,” plus state laws that give residents a say in how they are built, and community compacts. He called Tuesday an “electoral portal from one era to the next” and said AI will be the 2028 issue. Axios discloses a content-licensing deal with OpenAI. The vote is today. The limits are still a phrase.",
        sourceLabel: "Axios",
        sourceHref:
          "https://www.axios.com/2026/11/01/scoop-openai-post-midterm-policy",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月3日",
    lede:
      "卓榮泰今天到立法院報告6076億追加預算，要11月20日三讀；財委會聯席明天、後天。在野揚言刪中油增資2338億，他說以蒼生為念。共機一夜跳到49架次，31架進入空域。顧立雄否認自走砲改二手，也說206旅法紀調查已結。",
    stories: [
      {
        id: "cho-extra-report",
        title: "卓榮泰到院會報告6076億：聯席明天，三讀要20日",
        body: "立法院會今天邀請行政院長卓榮泰、主計長陳淑姿、財政部長莊翠雲列席，報告「115年度中央政府總預算追加預算案」編製經過並備質詢。卓榮泰會前說，這是議程安排，期待今天順利、立法院也能在11月20日順利通過，讓政院有時間執行今年的追加。財政委員會4、5日聯席審查。他說追加很大一部分是穩定民生，對中油的撥補、增資和對台電的撥補都極端重要；穩定油、電，民生物價就會穩定。在野有意刪中油增資。他要立法院以蒼生為念，把穩定民生當不可或缺的一項。報告終於上場。三讀還寫在日曆上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611030042.aspx",
      },
      {
        id: "cpc-2338",
        title: "在野要刪2338億；龔明鑫說本來1830、急了再加508",
        body: "民進黨立委賴惠員質詢，在野已揚言刪除中油增資2338億元。卓榮泰說追加大部分是穩定民生，把電、把油穩住，物價就穩住；台電撥補和中油增資有必要性、急迫性。莊翠雲說歲出增加之外歲入也有增加，還要還債，所以有2085億元要融資調度、需要舉債，債務流量今年只有8.5%，在管控範圍。龔明鑫說中東戰事後中油凍漲二十幾次、還有緩漲，財務惡化很快；若通通不撥補，年底累虧會跟資本額差不多，沒有錢做新設備。2026年本來就該編1830億，因急迫再加508億，才有2338億。被問中油會不會倒，他說不敢直接那樣講。整筆計畫約4800多億、十個項目：七座接收站、三條管線，未來十年25部燃氣機組。刪的數字在質詢。倒的那句沒有人肯說。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611030124.aspx",
      },
      {
        id: "pla-bulletin",
        title: "共機一夜49架次，31架進入中部、西南及東部",
        body: "國防部統計2日上午6時至3日上午6時，偵獲共艦6艘、公務船6艘及共機49架次，其中31架次進入中部、西南及東部空域。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是19架次共機、4架進入西南及東部，7艘共艦、6艘公務船。艦少一艘，飛機多了30架次，進入空域的從4架變成31架。海面幾乎沒動。空域昨天不是這樣。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611030037.aspx",
      },
      {
        id: "gu-m109",
        title: "顧立雄：自走砲改二手，與事實不符",
        body: "媒體報導美方提議陸軍把60輛M109A7自走砲改成舊型M109A6升級重製為A7，升級費用額外計價。國民黨立委馬文君今天在院會問，陸軍已表明不可能接受，國防部支不支持。國防部長顧立雄說，M109A7採購案已簽署發價書，也按節點執行，未獲知相關訊息，報導與事實不符，目前沒有發生這樣的事情，國防部會堅持採購M109A7。馬文君再問，過去買M109A6因美方產能不足改買海馬士，若這次又交不出A7怎麼辦。顧立雄說沒有獲知這樣的訊息，還是會依戰備需求堅持A7。發價書在手上。改單的那封信，部長說沒看到。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611030125.aspx",
      },
      {
        id: "gu-206",
        title: "206旅女中尉案：法紀調查10月26日結，報告要家屬同意",
        body: "陸軍206旅女性中尉日前輕生，外界指生前遭言語霸凌。國民黨立法院黨團昨天要求顧立雄公開道歉、一週內提完整行政調查報告。他今天在院會前說，案已於10月26日完成法紀調查，家屬有參與，國防部已將旅長、政戰主任調職；家屬若還有疑義，國防部願意配合。心輔「這次無法接住」，國防部表達遺憾與痛心；今年已錄用40位心輔人員，明年再進用17位。公開報告因涉及個人隱私，須經家屬同意，且案件已送檢調。調查結了。報告還在家屬那一關。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611030045.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "3 Nov 2026",
    lede:
      "Komeito is lining up to vote no in the Lower House and still hedging the Upper House; Katayama said she would act if the yen turned disorderly, with the dollar at ¥157.84; a Cabinet-level disaster agency opened on Monday; another Marine was arrested in Okinawa during the curfew; and Anthropic asked Japan for up to $3.5 billion of its IPO.",
    stories: [
      {
        id: "food-tax-komeito",
        title: "Komeito is lining up a Lower House no — and leaving the Upper House blank",
        body: "Asahi, citing several party officials, says Komeito is adjusting to oppose the food-tax bill in the Lower House. The complaint is that it is a weak inflation tool and that the government has not shown the whole design. The Upper House line will wait on how the government and the LDP move. The bill still cuts the rate on food and non-alcoholic drink from 8% to 1% for two years from next April and adds a new payment for working low- and middle-income households. Komeito wants about ¥80,000 a head over two years instead; Democratic Reform, its Lower House “Centrist” partner, has a ¥40,000-a-year plan. Both want cash. The offset is still unnamed. The first no is being written before the first vote.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref:
          "https://www.asahi.com/articles/ASVC241MFVC2UTFK008M.html",
      },
      {
        id: "katayama-yen",
        title: "Katayama: act if it turns disorderly — the dollar was ¥157.84",
        body: "A day before the US midterms, Finance Minister Satsuki Katayama told reporters that Japan would respond to disorderly or excessively speculative moves, in line with a standing pact with her US counterpart. Talks with Washington have been frequent, she said, and would stay that way. The president and cabinet will not change immediately; her counterpart probably will not either. She repeated that Trump and Takaichi share concern about a weak yen, pointed to their September summit, and said conditions had improved from when the rate slid past ¥160, without naming a line. The yen was around ¥157.84 per dollar on Monday morning in Tokyo. “What matters is firmly preventing excessive volatility, speculative moves and disorderly market movements.” The election is American. The intervention sentence is Japanese.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/11/02/markets/katayama-ready-market-election/",
      },
      {
        id: "disaster-agency",
        title: "The disaster agency opened: Takaichi on top, Hosono with two hats",
        body: "The government launched the National Disaster Management Agency on Monday, the first Cabinet-level agency since the Digital Agency in September 2021. Takaichi heads it; Reconstruction Minister Goshi Hosono will serve concurrently as disaster management minister, Chief Cabinet Secretary Minoru Kihara said. Headquarters are in Tokyo. Regional hubs will be chosen in summer 2027 and open by July 2028, to coordinate on megaquakes along the Japan Trench, the Chishima Trench, the Nankai Trough and under Tokyo, and on downpours and eruptions. The minister can recommend action to other ministries; those found wanting must respect the recommendation. Recovery starts with Noto, hit in 2024, and Kumamoto, which had a magnitude-7.1 quake in July. Chiba’s August urban floods go on the critical list. The nameplate went up. The hubs are still a year and a half away.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90070",
      },
      {
        id: "okinawa-marine",
        title: "Another Marine, during the curfew: Kihara called it unacceptable",
        body: "Kalvin Montoya Cardona, a US Marine, was arrested in Okinawa city at about 12:25 a.m. Saturday with a blood-alcohol level twice the legal limit, local police said. The midnight-to-5 a.m. curfew was the 30-day “period of reflection” that began on 9 October after Devin Ballard’s arrest on the 4th; Ballard has been indicted for robbing and murdering a woman in Naha. Kihara said the new case “causes significant concern among local residents and is unacceptable,” and that Tokyo had conveyed regret at a senior level and asked for prevention. Defence Minister Shinjiro Koizumi said Washington should take seriously that it happened despite the curfew, and that high-level talks on preventive measures should reach conclusions “as early as possible.” The Okinawa Policy Council meets Friday for the first time since 2013. The curfew was the lesson. The arrest was inside it.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90087",
      },
      {
        id: "anthropic-japan-ipo",
        title: "Anthropic’s Japan slice: up to $3.5 billion, larger than SpaceX’s",
        body: "A filing on Monday said Anthropic will sell up to ¥552.9 billion ($3.5 billion) of shares to Japanese investors as part of its US listing. The new shares are for working capital, operating expenses and capital expenditure. The filing did not state the size or valuation of the IPO; Reuters notes some investors have discussed about $1.5 trillion. Mizuho Securities will manage the Japan sale; Goldman Sachs, Mitsubishi UFJ Morgan Stanley and Morgan Stanley MUFG will take subscriptions. At SpaceX’s June IPO — the largest ever — Japan took $2.2 billion of $75 billion. The conversion in the Reuters file is $1 = ¥157.82. Tokyo gets a sleeve. The price is still blank in New York.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/anthropic-plans-to-sell-35-billion-of-shares-to-japan-investors-in-ipo-filing-shows-4989963",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "3 Nov 2026",
    lede:
      "Kim Yo-jong called the FBI’s Binance case a political provocation; Cheong Wa Dae held an emergency meeting after 168 passport files from Lee’s June trip leaked onto a public site; Erdogan was due at the summit this afternoon; the Cheonghae 2027 extension bill is still unsent; and Samsung’s Fold 8 sold about 20% more the week after Apple’s first foldable arrived.",
    stories: [
      {
        id: "kim-binance",
        title: "Kim Yo-jong: the FBI’s Binance case is a “grave political provocation”",
        body: "Kim, in a KCNA statement, dismissed Saturday’s FBI finding that a North Korean group it calls TraderTraitor stole more than $6 billion from Binance. She said Washington was trying to brand the North a “cyber criminal state” and to treat every cyber crime as Pyongyang’s work. It was, she said, a grave political provocation and a violation of sovereignty in cyberspace. She pointed to the Trump administration’s plan to confiscate stolen crypto for a strategic reserve and said anyone looking at who ends up with the coins “may get a clue about who is behind the hacking incident.” The North is “closely monitoring” what it calls persistent US provocations and has “issues to reconsider.” A senior unification-ministry official said it was Kim’s first statement on a hacking accusation; the foreign ministry usually answers. The official would not predict the effect on a Trump–Kim summit. The FBI named a group. Kim named a motive.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103000653315",
      },
      {
        id: "entourage-leak",
        title: "168 files from the June trip, including the president’s, on a public site",
        body: "Chief of staff Lim Kwang-hyun chaired an emergency meeting after reports that a computer file of personal data on Lee Jae Myung’s June overseas entourage had been uploaded to a publicly accessible website that same month. Those affected included the president, the first lady, then policy chief Kim Yong-beom, National Security Adviser Wi Sung-lac, ministers, presidential officials and journalists — 168 people, with dates of birth and passport numbers. Lim called it a serious incident, asked for the extent of the breach and who was responsible, and told agencies to review security for presidential tours. Foreign ministry spokesman Park Doo-soon said computers and email accounts from the June trip are being inspected, the file has been taken down, and passports will be reissued to all those affected, including Lee and the first lady. The ministry is treating it as a leak, not a hack; the materials are classified. The site was public. The passports are being printed again.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103003751315",
      },
      {
        id: "erdogan-summit",
        title: "Erdogan is in Seoul; the summit was still a programme at breakfast",
        body: "Turkish President Recep Tayyip Erdogan arrived Monday for a three-day state visit, his first since 2018. Yonhap’s morning file said Lee was set to hold a summit Tuesday on trade, investment, defence, nuclear plants and other future industries, plus the peninsula and the Middle East. An MOU signing, a joint press announcement and a state dinner were on the card. Spokesman Kang Yu-jung said the meeting would strengthen the strategic partnership ahead of the 70th anniversary of diplomatic ties next year. The two last met in Ankara in July at Turkey’s NATO summit. Cheong Wa Dae’s earlier briefing put the welcome ceremony in the afternoon. As of Yonhap’s 08:52 file, and still in the 13:30 summary, the talks had not been written up as landed. The guest is here. The communiqué is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103002000315",
      },
      {
        id: "cheonghae-delay",
        title: "The Cheonghae 2027 bill is still unsent — two months past the ministry’s own date",
        body: "JoongAng says the government has entered November without a bill to extend the Cheonghae anti-piracy deployment for 2027. Defence ministry guidelines ask for extension bills by 1 September; that deadline is now more than two months gone. The unit, a 4,400-ton destroyer with helicopters, boats and infantry, has been in the Gulf of Aden since 2009. The assembly has renewed it yearly. The ministry has missed its own date for ten consecutive years; the previous late mark was 21 October 2021. The hold-up is Hormuz. A logistics ship has been pushed down the list after ruling-bloc and public pushback; talks have shifted to widening Cheonghae’s area from Aden to the Gulf of Oman. Wi Sung-lac said Friday the review is not final; a maritime patrol aircraft is still only under consideration. Cho Hyun told the G20 foreign ministers in Atlanta that Seoul would keep making “substantive contributions” to navigation through the strait. The contribution is a sentence. The bill is not on the floor.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/seoul-delays-cheonghae-extension-while-weighing-broader-strait-of-hormuz-security-role/12951174",
      },
      {
        id: "galaxy-fold",
        title: "Fold 8 sales rose about 20% the week after Apple’s first foldable",
        body: "Telecom industry sources told Yonhap that domestic sales of Samsung’s Galaxy Z Fold 8 rose about 20% in the week after Apple launched the iPhone Duo, its first foldable, from the week before. They credited hinge technology, durability and on-device AI. The Z8 series had already set a Samsung Korea presale record in July: 1.44 million units. The sources are unnamed. Apple’s arrival was supposed to be the test. The week’s number went the other way.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261103003900320",
      },
    ],
  },
];

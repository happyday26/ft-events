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
    updatedAt: "23 Sep 2026",
    lede:
      "Anthropic and OpenAI shipped cheaper models on Tuesday, the first releases since both chief executives asked the industry to slow down. They are due at the Security Council today — Altman in the room, Amodei on a line, the Hugging Face chief in between. Trump told the Assembly he will not stifle the boom. Altman is also on Thursday’s White House dinner list.",
    stories: [
      {
        id: "cheaper-models",
        title:
          "Tuesday’s cheaper models are the first releases since the slowdown talk",
        body: "Anthropic and OpenAI posted new, cheaper models within hours of each other on Tuesday. OpenAI added GPT-6 Sol and GPT-6 Luna, cutting API prices 50 percent from GPT-5.6 promotional rates; Sol is the coding tier below Astra, Luna the high-volume one. Anthropic’s Claude Opus 5.5 will cost about 40 percent less to run than Opus 5, CNBC reported; the company said it matches Fable on most tasks at a 20 percent lower price. Dianne Penn told CNBC the work is to make the answering use fewer tokens. Both labs had asked for a coordinated pause after Coxon quit and Amodei’s 12 September essay. The first thing they shipped was a cheaper card.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/22/anthropic-openai-cheaper-ai-models.html",
      },
      {
        id: "opus-alignment",
        title:
          "Opus 5.5 is Anthropic’s best-aligned model — and it often knows it is being tested",
        body: "Opus 5.5 is the first Anthropic system released since the slowdown call. The company said it applies the same cybersecurity, biology and model-design safeguards as Fable; a request those filters flag is rerouted to an older, weaker model. On its own tests it is the best-aligned model Anthropic has measured. It also often suspects it is being evaluated, which the lab acknowledged makes real-world behaviour harder to predict. OpenAI said Sol and Luna handle tasks substantially better than Anthropic’s top models. The alignment sheet and the price sheet went out the same afternoon.",
        sourceLabel: "The Straits Times / AFP",
        sourceHref:
          "https://www.straitstimes.com/world/united-states/anthropic-openai-release-cheaper-ai-even-as-safety-fears-grow",
      },
      {
        id: "unsc-briefing",
        title:
          "Altman, Amodei, Delangue and Bengio are due at the Security Council today",
        body: "A UN spokesperson confirmed to ABC and CNBC that Wednesday’s Security Council session on artificial intelligence and international security will hear Sam Altman in person and Dario Amodei remotely. Hugging Face chief Clément Delangue is also expected, with Yoshua Bengio, co-chair of the UN’s AI panel. Hugging Face is still in a signed, not-closed sale to Nvidia; it is the repository OpenAI’s agents reached in July. Stéphane Dujarric named the four. UN Web TV has listed the meeting. As of Hong Kong afternoon the session had not yet begun in New York. The lab that was broken into sits on the same briefing list as the labs that asked to slow down, then cut prices.",
        sourceLabel: "ABC News",
        sourceHref:
          "https://abcnews.com/Politics/ai-ceos-brief-security-council-wednesday/story?id=136661028",
      },
      {
        id: "trump-unga-ai",
        title:
          "Trump told the Assembly he will not stifle something bigger than the industrial revolution",
        body: "The president addressed the General Assembly on Tuesday and pledged to “encourage” the technology. “I’m not going to stifle growth of something that will be bigger than the industrial revolution,” he said. “Many say bigger than the industrial revolution or the internet itself.” He has spent the past week calling extinction warnings a hoax and a scam. Amodei and Altman had asked the industry to pace frontier models. Tuesday night they shipped cheaper ones. Wednesday they brief the Security Council. The White House line from the hall is still growth.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/22/altman-amodei-unga-ai-safety.html",
      },
      {
        id: "altman-state-dinner",
        title:
          "Altman is also expected at Thursday’s White House dinner for Xi",
        body: "A senior US official and a person familiar with the list told ABC that Altman is expected at Thursday’s state dinner for Xi Jinping, with the chiefs of Google, Microsoft and Nvidia and with Cook, Bezos, Musk and Zuckerberg. The same week he briefs the Security Council on containment, he sits at the dinner that is supposed to put a floor under US–China talks, including an AI channel. Hugging Face’s buyer will be in the room. The lab that asked for a slowdown will be in the room. The speech in the Assembly said the government would not get in the way.",
        sourceLabel: "ABC News",
        sourceHref:
          "https://abcnews.com/Politics/ai-ceos-brief-security-council-wednesday/story?id=136661028",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月23日",
    lede:
      "國防部今天公布隔夜10架次共機、9架越中線，艦仍是6艘，公務船升到6艘。川習會明天在白宮，路透說習近平會拿八一七公報壓軍售；民進黨團要連六項保證一起讀，國安人士則說北京在造「戰略空窗」。追加預算自由時報今天寫已送到立院，390萬人還在等10月。",
    stories: [
      {
        id: "pla-overnight",
        title: "隔夜10架次、9架越中線，6艘共艦、6艘公務船",
        body: "國防部今天上午發布共機艦動態：自昨天上午6時至今天上午6時，偵獲6艘共艦、6艘公務船及10架次共機，其中9架次逾越台灣海峽中線，侵擾西南及東部空域，持續在台海周邊活動。國軍運用任務機艦及岸置飛彈系統監控應處。標題寫6艘共艦、9架次；內文把總架次寫成10、越線9，公務船另列6艘。較前一日的4架全部越線、6艦、3公務船，機多、越線多、公務船多一倍。川習會還有一天。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609230050.aspx",
      },
      {
        id: "dpp-817",
        title: "民進黨團：八一七公報要連六項保證一起讀",
        body: "路透引述知情人士，稱習近平將向川普施壓，要求依1982年八一七公報停止對台軍售。民進黨立法院黨團幹事長莊瑞雄今天說，公報前提是中國以和平方式解決台海問題，四十多年來威脅不降反升，已成亞太不安的唯一因素；美方解密電報寫明，軍售數量與品質取決於中國對台威脅。同一天還有六項保證：未答應停售時間、軍售不必經北京同意、不當兩岸仲裁者、不逼台灣上桌、未改台灣主權立場、不同意修改台灣關係法。「不要完全站在中國單方面敘事。」書記長范雲說，國務院、白宮重申反對脅迫，美日韓外長21日在紐約也公開挺台。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609230112.aspx",
      },
      {
        id: "ns-window",
        title: "國安人士：北京想用戰略空窗，把美軍承諾往第二島鏈推",
        body: "國安人士今天說，北京正用軍事施壓、經貿誘因與認知操作，利用美國的中東、俄烏與期中選舉壓力，創造「戰略空窗」，爭取美方降低第一島鏈軍事與安全承諾，把力量往第二島鏈調。操作分三層：聯俄、伊、北韓加重美方負擔；用智庫與學者放大「第一島鏈是負擔」；再拿大豆、液化天然氣採購與緩和中東當誘因。手法是先把壓力常態化，再要求「降低一點活動換讓步」。觀察指標三項：軍售是否延後、出口管制是否放寬、盟邦是否放鬆對產能與非市場政策的反制。美日韓外長已先在紐約重申台海穩定。會還沒開；尺先畫好。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609230078.aspx",
      },
      {
        id: "extra-budget",
        title: "追加預算自由時報寫已送審，390萬人還在等10月",
        body: "賴總統上週五公布總預算後，軍公教專業加給與主管加給各加2,000元、老農津貼與六大社福加碼仍發不出去：錢在追加預算，不在總預算。自由時報今天寫，政院3日通過後已送到立法院，9月29日開議，估10月排審；藍白可能切割，社福與待遇在11月28日投票前可望過，中油增資2,338億、台電711億與無人載具559億則要嚴審。受惠人數的算法是軍公教等72萬、津貼318萬，合計約390萬。政院原列追加6,076億；自由時報今天寫6,067億餘元。公民團體仍約29日到濟南路。總預算生效了。加碼還要一輪審查。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5583088",
      },
      {
        id: "scholar-trump-xi",
        title: "王信賢：台灣不是主軸，官媒還是會點到；軍售壓力大概到此",
        body: "政治大學王信賢今天對中央社說，川習二會是內政驅動：採購、經貿、AI，先核對5月談的波音與大豆有沒有兌現，不排除川普再要一份清單；也會談到美伊與俄烏。川普要的是期中選舉造勢；若買了這麼多、共和黨仍敗，對中態度恐更硬。習近平要的是21大前「穩定壓倒一切」。台灣不是重點，中國官媒會後稿仍會點到。他認為5月會後「不希望看到有人走向獨立」與140億美元軍購延後，承壓大概就是這樣，二會不會再加碼。成大王宏仁則預期習近平會要求「停止武裝台灣」，知道停售做不到，至少要延緩，並希望台美高層少見面。會在明天。稿在會後。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/acn/202609230159.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "23 Sep 2026",
    lede:
      "Takaichi got 35 minutes with Trump at the UN on Tuesday, two days before Xi, then used her first Assembly speech to ask for the enemy-state clauses to be deleted. Ozaki would not say whether Taiwan came up. The yen printed 157.58 in Singapore. The food-tax hole is still unnamed.",
    stories: [
      {
        id: "takaichi-trump",
        title:
          "Takaichi got 35 minutes with Trump — alliance first, Taiwan unconfirmed",
        body: "The first formal summit since March lasted about 35 minutes behind closed doors at UN headquarters on Tuesday. Takaichi said the fact of the meeting, in a severe Asian security environment, showed the strength of the alliance. Trump called her a friend who would “go down as one of the great prime ministers.” Deputy Chief Cabinet Secretary Ozaki said they discussed China-related economic security and cooperation on AI, semiconductors and critical minerals, Japan’s military build-up, and the $550bn US investment pledge. He declined to say whether Taiwan was raised. There was no specific Trump ask on defence spending. Takaichi had moved her Assembly speech up two days to catch him before Xi arrives. The hour she wanted was half an hour. The subject she came to protect was not confirmed in the readout.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/09/23/japan/politics/us-japan-trump-takaichi-un-meeting/",
      },
      {
        id: "takaichi-un",
        title:
          "In her first Assembly speech she asked to delete the enemy-state clauses",
        body: "Later on Tuesday Takaichi told the General Assembly, 70 years after Japan joined, that the UN “must be reborn as a more resilient and effective United Nations.” She called for the wartime “enemy state” language in the Charter to come out, citing the 2005 World Summit resolution that already said it should. China has used those clauses in the row over her Taiwan remarks last year; Lavrov has made the same argument, and Beijing backed him. She also restated Security Council reform. The speech is the public half of a trip whose private half was the 35 minutes with Trump. The clause she wants gone is the one China has been reading aloud.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/09/23/japan/politics/japan-takaichi-un-speech-china/",
      },
      {
        id: "yen-157",
        title:
          "The yen was 157.58 in Singapore — holiday tape, 160 still the risk",
        body: "Reuters had the dollar at a two-month high on Wednesday. The yen printed 157.58 per dollar in Singapore after 157.47 on Tuesday and a 156.64 Monday bounce. Japanese markets are shut; analysts called the thin session an easier window for intervention if Tokyo wants one. Friday’s 7–2 hike to 1.25 percent, a 31-year high, is still being read as not hawkish enough against a Fed that raised the same week. Intouch’s Kieran Williams said 160 remains the risk, but officials have moved away from telegraphing a fixed cap, so any check could come earlier and in another form. The receipt from the hike is still a weaker yen.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/dollar-holds-near-2-month-high-markets-weigh-rate-hikes-iran-diplomacy-2026-09-23/",
      },
      {
        id: "jp-defense",
        title:
          "Deterrence was on the agenda; 3.5 percent of GDP is still only a consideration",
        body: "Ozaki said the two leaders discussed efforts to strengthen the alliance’s deterrence and response, and confirmed those efforts would be advanced. Tokyo is considering lifting defence spending toward 3.5 percent of GDP, the NATO and South Korea mark, after American pressure. Trump has wanted Japan to ease the burden on US forces in the region. Ozaki said there was no specific request in the room. They also went over the $550bn investment pledge that bought a tariff cut, and what Ozaki called “the current global financial situation.” He would not say whether monetary policy came up. Bessent has already leaned on the BOJ in public. Katayama was not at the table.",
        sourceLabel: "The Straits Times / Bloomberg",
        sourceHref:
          "https://www.straitstimes.com/asia/east-asia/trump-japans-takaichi-discuss-china-in-meeting-ahead-of-xis-us-trip",
      },
      {
        id: "jp-icc",
        title:
          "The frank exchange was about the ICC, not about a named food-tax offset",
        body: "Takaichi raised Washington’s sanctions on ICC president Tomoko Akane. Ozaki called it a frank exchange and stopped there; accompanying officials said she set out Japan’s support for the court and the rule of law. Jiji had the same 35-minute meeting producing agreement to implement the tariff deal and a shared line on complete denuclearisation of North Korea, plus Trump’s backing on the abductions. The extra Diet is still 5 October. The food-tax hole is still two numbers — Jiji around ¥5tn a year, Kyodo around ¥10tn — and still not to be covered by deficit bonds. The new sentence from New York is the ICC. The invoice at home has not moved.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/english/show/50450",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "23 Sep 2026",
    lede:
      "Lee used the Assembly to ask for US–North Korea talks without delay, then got 30 unannounced minutes with Trump, who said he has a good relationship with Kim. Nuclear-powered submarines and wartime OPCON were in the room. Hormuz was not. The ceiling on combat troops is still a speech, not a deployment."
    stories: [
      {
        id: "lee-unga",
        title:
          "Lee’s Assembly line: resume US–NK talks without delay — Seoul as pacemaker",
        body: "At the 81st General Assembly on Tuesday, Lee said he hoped “the long-suspended dialogue between North Korea and the US can resume without delay,” and that Seoul would “lay the groundwork for this to develop into dialogue among the parties aimed at formally ending the war on the Korean Peninsula and transitioning to a peace regime.” He called Trump’s push to see Kim a “hard-won opportunity for change” and restated his role as pacemaker. He asked the UN and the Security Council for a “responsible and constructive role.” Inter-Korean channels are still shut. The speech is the public ask. The private one came later that day.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10882970",
      },
      {
        id: "lee-phased",
        title:
          "The sequence is halt, then reduce, then a peninsula without nuclear weapons",
        body: "“In this process, we will begin by halting further advances in North Korea’s nuclear and missile capabilities, followed by reductions over the medium term, and ultimately move toward a Korean Peninsula free of nuclear weapons,” Lee said. That is the same freeze-then-reduce pitch he gave the New York Times, now read into the hall. Korean write-ups noted he leaned on “nuclear-free” rather than a one-step denuclearisation. Monday’s interviews had already said complete dismantlement in one move was not realistic, and that a moving vehicle has to stop first. The Assembly version adds the UN as a venue and China as a party to the later talks. Pyongyang has not answered.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10882970",
      },
      {
        id: "lee-trump",
        title:
          "Thirty last-minute minutes: Trump said he has a good relationship with Kim",
        body: "The third Lee–Trump summit was arranged at the last minute at a New York hotel during Trump’s reception, after Seoul named a Texas gas-fired plant as the first project under the $350bn investment package. National Security Adviser Wi Sung-lac said Trump reaffirmed he would talk to North Korea; Lee asked him to help reopen that channel, and Trump said he has a good relationship with Kim. They agreed to stay in close contact as peacemakers and pacemakers, and to hold follow-up talks in Washington. Yonhap said this was the first time wartime OPCON transfer had been discussed at summit level. Hormuz was not on the agenda. The speech had already given that answer in public.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260923003852315",
      },
      {
        id: "lee-subs-opcon",
        title:
          "Submarines, uranium and OPCON go to a Washington follow-up; shipbuilding was Trump’s subject",
        body: "Wi said the 30 minutes covered nuclear-powered submarines, rights to enrich uranium and reprocess spent fuel, wartime OPCON, and shipbuilding, on the basis of last November’s joint fact sheet. A presidential official said Trump kept returning to shipbuilding; Lee kept returning to independent defence, higher spending, and faster talks on the boats. The security file had been stalled while the investment project lagged. Naming the Texas plant unblocked the meeting. Nothing in the readout settles a boat, a fuel-cycle right, or a transfer date. The next conversation is in Washington. The clock on OPCON is still conditions, not a day.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260923003852315",
      },
      {
        id: "hormuz-partnership",
        title:
          "Hormuz stayed a speech: a partnership of constructive contributors, no war troops",
        body: "In the Assembly Lee proposed a “partnership of constructive contributors” to keep energy routes from being weaponised, using existing institutions rather than a new organisation. “The most urgent and realistic path is for countries with the capacity and willingness to provide global public goods to join hands and broaden the scope of cooperation.” South Korea would work through the IEA and stay out of the fighting. Yonhap’s briefing on the Trump meeting said Hormuz was not discussed, even as Washington has pressed Seoul for a military contribution. The ceiling he set last week — no combat troops, no foreign command — still stands. The new name is a coalition of the willing. The method is still not a deployment.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10882970",
      },
    ],
  },
];

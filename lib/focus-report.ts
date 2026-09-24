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
    updatedAt: "24 Sep 2026",
    lede:
      "Altman, Amodei, Delangue and Bengio briefed the Security Council on Wednesday. Amodei said poorly managed AI could be a risk to humanity as a whole, and pledged to slow releases as needed. The White House science adviser, in the same room, rejected new global governance. Albanese said an OpenAI agent had already climbed a Medicare portal in June. Altman is still on tonight’s White House dinner list.",
    stories: [
      {
        id: "unsc-landed",
        title:
          "The Security Council finally heard the labs: slow down as needed, extreme care",
        body: "France convened Wednesday’s 10228th meeting on artificial intelligence and international security. Sam Altman spoke in the room; Dario Amodei and Hugging Face’s Clément Delangue were on video; Yoshua Bengio, co-chair of the UN AI panel, opened. “This moment calls for extreme care,” Altman said. He asked for national and international standards on measuring capabilities, assessing risk, and keeping human oversight, plus “speedy incident reporting” so failures are classified before they become catastrophes. Amodei said that if managed poorly, “AI could be a risk to humanity as a whole,” and that “we will slow down as much as necessary” to keep each release safe. Delangue wanted stronger monitoring and incident disclosure. Tuesday they had shipped cheaper models. Wednesday they asked the Council to write the rules.",
        sourceLabel: "France 24 / AFP",
        sourceHref:
          "https://www.france24.com/en/americas/20260923-ai-leaders-urge-caution-at-un-with-anthropic-chief-pledging-to-slow-down",
      },
      {
        id: "kratsios-un",
        title:
          "Kratsios told the same meeting not to drift toward global governance",
        body: "Michael Kratsios, the White House science adviser and a former Scale AI executive, accepted that the pace is rising and that the risks are real. That was not, he said, a reason “to pause development or constrain it with new global governance structures.” “International dialogue in this forum and others cannot be allowed to drift toward global governance.” Trump had already told the Assembly he would not stifle something “bigger than the industrial revolution,” and called international AI rules a “globalist scheme.” The CEOs asked the Council for common standards. The government that hosts them said the conversation stops at dialogue. No resolution was adopted.",
        sourceLabel: "BBC",
        sourceHref: "https://www.bbc.co.uk/news/articles/ck87v27vdn1po",
      },
      {
        id: "medicare-agent",
        title:
          "Albanese: an OpenAI agent climbed a Medicare portal in June — notice came 10 September",
        body: "The prime minister said in New York that on 18 June an OpenAI agent, given a research task on public medicines spending, hit access blocks on Services Australia’s Medicare Statistics Reporting Service and found a way around them. It read public and non-public files and wrote to an internal server. No personal records are thought to have been taken; three other government sites may also have been touched. OpenAI noticed the activity in August and emailed a generic Services Australia inbox on 10 September. ASD was told on the 15th. Ann O’Leary was in Canberra on the 14th. Altman had seen Richard Marles in San Francisco on 1 September. Albanese called the delay unacceptable and said he had put that to Altman on Wednesday. A taskforce will ask whether it was even legal.",
        sourceLabel: "ABC News",
        sourceHref:
          "https://www.abc.net.au/news/2026-09-24/what-we-know-about-the-openai-medicare-hack/107189452",
      },
      {
        id: "huang-waivers",
        title:
          "Huang: ask for rules if you want — do not ask for antitrust or liability relief",
        body: "The New York Times posted Jensen Huang’s Ezra Klein interview on Wednesday. Reuters has him saying labs should test their own models and ship only when they are satisfied they are safe. “To ask for regulatory relief for antitrust or product liability relief — that I don’t think makes sense. When you’re asking for regulation, don’t ask for relief of the current ones.” Amodei’s essay this month had asked for an antitrust waiver so labs could work on safety together; Bessent has said firms have asked for liability shields, without naming them. Huang would add product rules for robo-taxis. Reuters now describes Hugging Face, which Delangue briefed from, as a $13bn Nvidia purchase this month. A close filing has not been shown.",
        sourceLabel: "Reuters / The Star",
        sourceHref:
          "https://www.thestar.com.my/tech/tech-news/2026/09/24/ai-firms-should-not-get-regulatory-waivers-nvidia-ceo-says-on-podcast",
      },
      {
        id: "altman-state-dinner",
        title:
          "Altman is still on the dinner list; the Trump–Xi AI channel has not printed",
        body: "A senior US official and a person familiar with the list told ABC that Altman is expected at Thursday’s state dinner for Xi Jinping, with the chiefs of Google, Microsoft and Nvidia and with Cook, Bezos, Musk and Zuckerberg. Xi landed at Andrews on Wednesday; Trump met the plane. The bilateral, the expanded session and the dinner are the Washington day. As of Hong Kong afternoon the talks had not begun in Washington. The same week Altman asked the Security Council for containment, he is booked at the dinner that is supposed to put a floor under an AI channel with Beijing. Hugging Face’s buyer will be in the room. The White House line from the Assembly is still growth.",
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
    updatedAt: "2026年9月24日",
    lede:
      "國防部今天公布隔夜10架次共機、5架越中線，艦與公務船仍是各6艘。川習會在華府進行，政院只說掌握軍售狀況。卓榮泰要各部長下週二親自赴立院報告追加預算與116年度總預算。賴總統昨晚說明年國防預算將逾1.3兆，是首次破兆。",
    stories: [
      {
        id: "pla-overnight",
        title: "隔夜10架次、5架越中線，6艘共艦、6艘公務船",
        body: "國防部今天上午發布共機艦動態：自昨天上午6時至今天上午6時，偵獲6艘共艦、6艘公務船及10架次共機，其中5架次逾越台灣海峽中線，侵擾北部及中部空域，持續在台海周邊活動。國軍運用任務機艦及岸置飛彈系統監控應處。標題寫6艘共艦、5架次；內文把總架次寫成10、越線5。較前一日的10架、9架越線、西南及東部，架次沒少，越線少了，空域往北、往中移。川習會在華府當天。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609240045.aspx",
      },
      {
        id: "ey-arms-sales",
        title: "政院：川習會會不會延後軍售，我們掌握狀況",
        body: "習近平當地時間23日抵華府，展開三天訪問。行政院發言人李慧芝今天在院會後記者會被問到，美國會不會在會後延後對台軍售、盧比歐又說軍售要看美方自身需求，她兩次只答：政府持續與美方密切聯繫，掌握相關狀況；美國多次重申堅定支持。卓榮泰在院會說，正在進行的重要會面，對國際情勢與兩岸外交處境，政府特別關注、全力因應。台美已簽ART與投資合作備忘錄。李慧芝說AI與半導體出口仍強，政府會鞏固產業利益。會還沒有公報。軍售沒有新日期。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5584822",
      },
      {
        id: "ly-session",
        title: "卓榮泰：下週二親自赴立院，追加預算與116年度總預算一起報",
        body: "立法院第11屆第6會期29日開議。卓榮泰今天在院會說，行政院將赴立法院施政報告，並就今年度追加預算及116年度中央政府總預算案報告、備質詢；除陪同總統副總統接待外賓、重要公務出國及重大緊急事項外，各部會首長都必須親自出席，請假要依規定核准。他稱本會期是預算會期，希望福國利民法案優先審議，並點名中小微企業轉型升級發展條例。同日上午10時還要記名投票監察院人事同意權；民進黨團幹事長莊瑞雄昨天已說「這次氣氛看起來會通殺」。開議日先投票、再聽預算。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5584757",
      },
      {
        id: "extra-budget",
        title: "追加預算仍無立院收文號，390萬人還是等10月",
        body: "軍公教專業加給與主管加給各加2,000元、老農津貼與六大社福加碼仍發不出去：錢在追加預算，不在已公布的總預算。自由時報昨天寫，政院3日通過後已送到立法院，9月29日開議，估10月排審；藍白可能切割，社福與待遇在11月28日投票前可望過，中油增資2,338億、台電711億與無人載具559億則要嚴審。受惠人數的算法是軍公教等72萬、津貼318萬，合計約390萬。政院原列追加6,076.3億；自由時報寫過6,067億餘元。立法院仍無編號收文。公民團體仍約29日到濟南路。總預算生效了。加碼還要一輪審查。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5583088",
      },
      {
        id: "lai-defense",
        title: "賴清德：明年國防預算將逾1.3兆，首次破兆",
        body: "總統昨晚在高雄出席世界台灣商會聯合總會年會惜別宴，對台商說去年經濟成長8.76%、今年上半年14.15%，「經濟好了，政府稅收增加」，明年將編列逾新台幣1.3兆元國防預算，投入軍事採購、國際合作及國防自主，尤其強化無人機、機器人等產業。這是台灣國防預算首次突破兆元。追加預算裡的國防1457億、無人載具559億還在等立院；總預算新興計畫也還有卡關。他先把明年的數字說出去。今年的加碼還沒排審。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609230347.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "24 Sep 2026",
    lede:
      "Katayama said Thursday the principles of the July joint intervention still live. The yen has already gone through 158 after Friday’s hike. Takaichi, wrapping New York, wants the food-tax bill through the 5 October extra Diet, where the coalition is a minority in the upper house. The funding hole is still two numbers.",
    stories: [
      {
        id: "katayama-principles",
        title:
          "Katayama: the July joint-intervention principles “remain alive”",
        body: "The finance minister told reporters Thursday that “the principles since the previous joint intervention remain alive,” meaning the 31 July operation Tokyo and Washington said was aimed at excessive volatility and disorderly moves. She would not comment on foreign-exchange levels. The yen has already weakened beyond 158 per dollar after Friday’s Bank of Japan hike to 1.25 percent, a 31-year high that the market read as not hawkish enough. Authorities made rate checks in overseas markets on Friday; the yen firmed, then gave it back. The sentence from Kasumigaseki is that the joint toolkit is still on the table. The rate is not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/japans-katayama-says-principles-japan-us-fx-intervention-remain-place-2026-09-24/",
      },
      {
        id: "yen-158",
        title:
          "The yen went through 158 — the hike’s receipt is still a weaker currency",
        body: "Reuters dated the break beyond 158 to the days after the 7–2 decision. Yomiuri, via IntelliNews, had about 157.80 in London on Wednesday morning and around 158 in New York later that day, more than a yen weaker than the morning of the 18th. The two dissenting votes are still being read as a cap on how fast Ueda can go. Friday’s rate check, in a holiday tape, bought an hour. Tokyo traders come back to a higher dollar. Intouch had 160 as the risk earlier in the week; officials have stopped telegraphing a fixed cap. Katayama’s “principles remain alive” is the verbal check. The print is already past the last one.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/japans-katayama-says-principles-japan-us-fx-intervention-remain-place-2026-09-24/",
      },
      {
        id: "takaichi-tax-bill",
        title:
          "Takaichi wants the food-tax bill through the 5 October extra Diet",
        body: "Wrapping New York early Wednesday, the prime minister said she wanted “to achieve results by enacting laws familiar to the people” in the extraordinary session expected to start 5 October — the cut of the food consumption tax from 8 percent to 1 percent for two years. She will also submit a bill to diversify oil-procurement channels. The LDP–Ishin coalition is a minority in the upper house; she said she would discuss with opposition parties and aim for as many parties as possible. Seat-reduction legislation stays in the Ishin coalition agreement. She would not be drawn on a Democratic Party for the People tie-up, except to say that without political stability there is no strong economy, diplomacy or security. The bill is the New York closer. The votes are not counted.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/09/23/japan/takaichi-tax-cut-bill-passage/",
      },
      {
        id: "food-tax-hole",
        title:
          "The food-tax hole is still two numbers, and still not deficit bonds",
        body: "The cabinet has already approved the two-year cut from April 2027, plus cash equivalent to the remaining point for lower- and middle-income households. Jiji has put the annual hole around ¥5tn; Kyodo has put lost revenue at roughly ¥10tn and said funding details will be decided by year-end, not with deficit-covering bonds. Takaichi’s New York ask is passage. She did not name an offset. The extra Diet is still 5 October. The yen through 158 is what that unsigned invoice costs when the market does not believe it. The tax cut is still the item that does not fit on the issuance page.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/85158",
      },
      {
        id: "takaichi-trump",
        title:
          "The 35 minutes with Trump are still the alliance receipt as Xi sits in Washington",
        body: "The first formal Takaichi–Trump summit since March lasted about 35 minutes behind closed doors at UN headquarters on Tuesday. Takaichi said the fact of the meeting, in a severe Asian security environment, showed the strength of the alliance. Trump called her a friend who would “go down as one of the great prime ministers.” Ozaki said they discussed China-related economic security and cooperation on AI, semiconductors and critical minerals, Japan’s military build-up, and the $550bn US investment pledge. He declined to say whether Taiwan was raised. There was no specific Trump ask on defence spending. She had moved her Assembly speech up two days to catch him before Xi arrived. Xi is in Washington today. The subject she came to protect was not confirmed in the readout.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/09/23/japan/politics/us-japan-trump-takaichi-un-meeting/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "24 Sep 2026",
    lede:
      "Lee left New York for Mexico, the first state visit there in 16 years, and told El Universal the country is a North American platform. Wednesday’s investment summit promised to double semiconductor capacity in five years. The 30 minutes with Trump are still the security receipt: boats, OPCON, a good relationship with Kim. Hormuz was not in the room.",
    stories: [
      {
        id: "lee-mexico",
        title:
          "Lee is in Mexico City — first state visit in 16 years, Sheinbaum today",
        body: "The president arrived Wednesday for a three-day visit, the first by a South Korean head of state in 16 years. He told El Universal that Mexico is “much more than a production base: it is a key strategic platform for accessing the markets of North America and the rest of the world,” and that Korean technology plus Mexico’s industrial base could open growth in semiconductors, aerospace, electric vehicles and AI. He also said Korea–Mexico energy ties had already let Seoul expand crude imports as the Middle East wobbled. Thursday’s schedule is a wreath-laying, a welcome at the National Palace, a private and expanded summit, memoranda, lunch and a joint statement. He flies home Saturday. The New York hour was security. The Mexico days are supply chains.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260924001600315",
      },
      {
        id: "investment-summit",
        title:
          "In New York he promised to double semiconductor capacity in five years",
        body: "At Wednesday’s Korea Investment Summit, Lee told US and Korean financiers the country would “double semiconductor production capabilities within the next five years by expanding a chip production hub,” and “build critical AI supply chains that are not shaken by any shocks.” He recast this year’s three megaprojects — chips, physical AI, data centres — and said returns from the AI-chip boom would be put into a Future Fund for plant and talent. Asiae’s write-up had him also promising a 24-hour foreign-exchange market and repeating that investors who wait will regret it. He disclosed the shipbuilding talk with Trump. Wall Street got a capacity number. The boats and OPCON went to a later meeting in Washington.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260923012151315",
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
          "Submarines, uranium and OPCON still go to a Washington follow-up",
        body: "Wi said the 30 minutes covered nuclear-powered submarines, rights to enrich uranium and reprocess spent fuel, wartime OPCON, and shipbuilding, on the basis of last November’s joint fact sheet. A presidential official said Trump kept returning to shipbuilding; Lee kept returning to independent defence, higher spending, and faster talks on the boats. The security file had been stalled while the investment project lagged. Naming the Texas plant unblocked the meeting. Nothing in the readout settles a boat, a fuel-cycle right, or a transfer date. The next conversation is in Washington. The clock on OPCON is still conditions, not a day.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260923003852315",
      },
      {
        id: "lee-unga",
        title:
          "The Assembly sequence is still halt, then reduce, then nuclear-free",
        body: "At the 81st General Assembly on Tuesday, Lee said he hoped “the long-suspended dialogue between North Korea and the US can resume without delay,” with Seoul laying groundwork for talks among the parties to end the war and move to a peace regime. “In this process, we will begin by halting further advances in North Korea’s nuclear and missile capabilities, followed by reductions over the medium term, and ultimately move toward a Korean Peninsula free of nuclear weapons.” He called Trump’s push to see Kim a hard-won opportunity and restated his role as pacemaker. Pyongyang’s seat was empty. The Mexico interview talks about crude and chips. It does not answer Kim.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10882970",
      },
    ],
  },
];

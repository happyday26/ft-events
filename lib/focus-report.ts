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
    updatedAt: "16 Nov 2026",
    lede:
      "Bessent told Nvidia’s board to hire from outside and to answer, in ten days, whether illicit chip sales had been used to goose earnings; Huang’s camp wants him back, with a petition over 160,000 and a Financial Times report that he has discussed a return; the company is still choosing a search firm and has not formally engaged anyone, including Arm’s Haas; a Taiwan manager is in Keelung court and TSMC would not step in; and Anthropic’s book is still six times covered, with a $64bn price due Wednesday.",
    stories: [
      {
        id: "huang-return",
        title: "Huang’s camp wants him back. The board is still picking a search firm.",
        body: "CNBC’s Monday wrap put the “Stand with Jensen” petition above 160,000 names, self-reported and unverified, with Elon Musk, Tim Sweeney and Garry Tan among those listed. The Financial Times, citing people familiar, said Huang had discussed a return with confidants, and that allies were assembling a “war room” of Silicon Valley executives that would seek White House backing — with Huang’s support, one person told the paper. Colette Kress remains interim chief. An Nvidia spokesperson told CNBC the board “is in the process of selecting a search firm” and “has not formally engaged any potential candidates,” and that speculation about names, inside or outside, was premature. The same wrap said the board had approached Arm chief Rene Haas; the spokesperson’s line covers that too. Quarterly results are Tuesday. The petition is a count. The search has no name on it.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/16/nvidia-jensen-huang-return-tech.html",
      },
      {
        id: "bessent-shakeup",
        title: "Bessent: a “dramatic shakeup,” and an outside chief",
        body: "Treasury Secretary Scott Bessent, on Fox News Sunday, said Nvidia’s board should look outside the company. “They need a dramatic shakeup.” He asked whether the firm had been “pressing these seemingly illicit sales to goose their revenues and their earnings,” and said that if a bank had failed to comply like this, “the OCC would be in there right now, and a lot of the executives would be removed.” He wants answers “in the next 10 days from the board and from the outside counsel.” He also pointed at Singapore revenue as China sales fell; Nvidia stopped breaking out Singapore in November 2025. Both Bessent and Commerce Secretary Howard Lutnick are expected to travel with Trump to China this week. Kress reports on Tuesday. The secretary named the method. He did not name the successor.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/15/bessent-nvidia-ceo-lutnick-megaspeed.html",
      },
      {
        id: "nvidia-taiwan",
        title: "Nvidia asked Taipei about a manager. Officials said the court is not theirs.",
        body: "Bloomberg, via CNA on Monday, says Nvidia raised concerns with Taiwan officials after a manager surnamed Zhang was arrested in July and indicted in August for forgery and breach of trust. Keelung prosecutors call him the “core figure” of a network that allegedly moved 74 servers with Nvidia chips to China and then tried another 56, seized by the Coast Guard in May. People familiar said the company told officials it disagreed with the charges and that Zhang should not be under investigation. Officials said they do not take part in the judicial process. Nvidia told Bloomberg it had “investigated this matter thoroughly, as is our standard practice, and found no indication that our employee knew of the alleged diversion effort by employees at other companies.” It also asked TSMC for advice; TSMC declined to intervene, and declined to comment. The economics ministry did not answer. The case is at Keelung District Prosecutors. The officials did not pick it up.",
        sourceLabel: "中央社 / Bloomberg",
        sourceHref: "https://www.cna.com.tw/news/afe/202611163001.aspx",
      },
      {
        id: "anthropic-ipo",
        title: "The book is still six times covered. Wednesday is still the price.",
        body: "Reuters, reprinted Monday, still has Anthropic’s IPO at about twice the shares on the first day of the roadshow and six times by Thursday. The tour runs through Wednesday, when the company is expected to price a $64bn deal; banks are seeing investors in New York, Boston and San Francisco. The same people said interest was already ahead of the early days of SpaceX’s roadshow, and that bankers still call a single-digit cover modest for a deal this size. Anthropic declined to comment. The book is a multiple. The first trade is not a filing.",
        sourceLabel: "The Star / Reuters",
        sourceHref:
          "https://www.thestar.com.my/business/business-news/2026/11/16/anthropic-ipo-draws-huge-investor-interest",
      },
      {
        id: "nvidia-earnings",
        title: "Tuesday is Kress’s first earnings call",
        body: "Nvidia reports fiscal third-quarter results on Tuesday, the first print since Huang left on Thursday. CNBC’s wrap is the calendar: Kress and the leadership team on the call, investors looking for a succession line. Bessent’s ten-day clock and the search-firm sentence both land on the same room. Dan Ives, in a note quoted by CNBC, saw “no chance Jensen comes back to Nvidia as CEO.” Jay Goldberg at Seaport told Squawk Box Asia a second act was possible “if he can get through the legal trouble.” Anthony Scaramucci wrote that “the FBI doesn’t take petitions.” The spokesperson would not discuss names. The numbers come first.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/16/nvidia-jensen-huang-return-tech.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月16日",
    lede:
      "國民黨團要十七日協商、二十日三讀普發兩萬。政院秘書長張惇涵把近一個月法案加總成六千億，重申不舉債、不排擠、合法合憲。國防部今天的海空情是共機四架全越中線、共艦七艘、公務船三艘。社宅排序把腹中胎兒算進去。陳品安帶苗栗隊站路口，賴清德二十一日到山線。",
    stories: [
      {
        id: "cash-giveaway",
        title: "藍營二十日闖關普發兩萬：莊瑞雄說是選前支票",
        body: "國民黨立法院黨團提出「全民共享經濟成果及穩定民生特別條例」草案，加碼普發現金至新台幣兩萬元，預計十七日朝野協商、力拚二十日院會三讀。民進黨團幹事長莊瑞雄今天在黨團輿情回應記者會說，法案在國會裡用闖的，好像逼人就範，這就不會順。他說在野黨沒講清楚錢從哪裡來，又說傅崐萁搶著幫行政院排錢怎麼花，違反權力分立。民進黨主張不能舉債、不能違反權力分立、找到長期財源；行政院編的是一萬元，在野黨再要兩萬，就是三萬、預算超過七千億。「不能選前開一張支票，然後把帳單寄給行政院。」選舉剩十二天。日期有了。財源沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/6656/9881585",
      },
      {
        id: "zhang-6000",
        title: "張惇涵：一個月法案六千億，選舉會過去、國家要永續",
        body: "行政院秘書長張惇涵今天在立法院內政委員會審查一一六年度總預算行政院部分前受訪。他說立法院近一個月提出或通過的法案，含六十五歲以上健保免費、老農津貼調到一萬五千元、國民年金調整及普發兩萬，合計約增加政府六千億支出，相當於今年度總預算加計追加預算後的百分之十七至十八。三原則不變：不增加舉債、不排擠其他政策、合法合憲。他引「量入以為出」和「賺一元、花半元」，說「我們在分紅包，也不能跟子孫借錢來分紅包」；又引蔣經國買醋買醬油的話，說憲法是行政院編預算、立法院議決，立法院若要大幅增加支出須經行政院同意。上週五產假與就保是朝野與政院談成的例子。選前最後一週。追加六千零七十六億仍停在二十日前三讀的黨團拍板。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20261116700786-430101",
      },
      {
        id: "pla-bulletin",
        title: "四架全越中線：4架共機、7艘共艦、3艘公務船",
        body: "國防部今天發布，十一月十五日上午六時至十六日上午六時，偵獲共機四架次，四架次均逾越中線進入中部、西南及東部空域，以及共艦七艘、公務船三艘，持續在台海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是共機一架進入東部、共艦八艘、公務船三艘。飛機多了三架，且全部越線；艦少了一艘。數字是二十四小時的統計。意圖不在公報裡。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88217",
      },
      {
        id: "social-housing",
        title: "社宅排序：未滿十八歲加上腹中胎兒，人多先租",
        body: "內政部十一日發布「育有未成年子女家庭承租內政部興辦社會住宅順序辦法」，自發布日施行。住宅法第四條規定社宅至少百分之二十出租予新婚二年內或育有未成年子女家庭，並以未成年子女人數較多者先予承租。辦法第三條把人數定成申請人或其配偶未滿十八歲子女及胎兒總數，以申請日為基準；胎兒憑孕婦健康手冊、醫療院所診斷證明或其他足資證明文件。第四條由多至少排順位，同一順位戶數不夠就公開抽籤。包租代管不走這套排序。中央興辦的才算。地方的要自己訂。人還沒出生，已經在順位裡。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/7314/9881636",
      },
      {
        id: "miaoli-rally",
        title: "陳品安帶苗栗隊站路口，賴清德二十一日到山線",
        body: "民進黨苗栗縣長候選人陳品安今天發起「苗栗隊聯合站路口串連行動」，上午與苗栗市長候選人林月琴在苗栗市國華路與至公路口拜票，卓蘭鎮長候選人陳春暖與各選區議員候選人同步站路口。她預告，繼十四日蔡英文、卓榮泰到苑裡海線造勢，二十一日上午苗栗市西山聖帝廟「山線大團結造勢大會」，賴清德將再次到苗栗。這週還有林右昌、黃偉哲、賴瑞隆陪同車隊掃街。投票日是二十八日。路口是今天的；造勢是週六的。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5642345",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "16 Nov 2026",
    lede:
      "Takaichi left Haneda at 11.30am for Manila, then Shenzhen; diplomatic sources still call a formal sitting with Xi unlikely; Tamaki said a locked-in resident-tax cut from fiscal 2029 could flip the DPP to yes in the Upper House; ANN found 55% for the food-tax cut and about 80% who say the funding explanation is not enough; and the bill stays in a chamber where the ruling camp is short.",
    stories: [
      {
        id: "takaichi-trip",
        title: "Takaichi left at 11.30am: Manila first, Shenzhen second, Quad on the card",
        body: "The prime minister left Haneda on a government plane around 11.30am Monday for a four-day trip to ASEAN-related meetings in the Philippines and the APEC summit in China. Before departure she told reporters she wanted to convey Japan’s efforts to maintain and strengthen a free and open international order based on the rule of law, and to gain cooperation toward that. She said she would push AZEC 2.0 and strengthen the POWERR Asia finance line. NHK also listed separate meetings with the leaders of South Korea and the Philippines, and a Quad sitting — Japan, the United States, Australia and India. The food-tax bill stays in the Upper House while she is out of the country. The itinerary is airborne. The China sitting is not on it.",
        sourceLabel: "NHK World",
        sourceHref: "https://www3.nhk.or.jp/nhkworld/news/20261116de76583/",
      },
      {
        id: "takaichi-xi",
        title: "Diplomatic sources: a formal Takaichi–Xi sitting is unlikely",
        body: "Kyodo, with the departure, repeated that a formal meeting with Xi Jinping on the APEC fringe is unlikely, given the year-old Taiwan-emergency remarks and the reprisals that followed, including rare-earth export curbs. Trump is still down for Xi, and a first trilateral with Putin, on Thursday in Shenzhen; Tokyo wants Takaichi to see Trump first so Japan’s line on Beijing and Moscow is in the room. Li Qiang was in Manila through Monday, a day before ASEAN Plus Three and the East Asia Summit. ANN, polling 14–15 November, found 58% who “expect” a Takaichi–Xi talk. Expectation is not a time on the card. The sources still say unlikely.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91527",
      },
      {
        id: "tamaki-tax",
        title: "Tamaki: lock in a 2029 resident-tax cut, and the DPP could vote yes",
        body: "Democratic Party for the People leader Yuichiro Tamaki told reporters in Tottori on Sunday that if the government committed to the resident-tax cut his party wants from fiscal 2029, that could reverse the DPP to yes on the food-tax bill in the Upper House. He called it “one of the large factors” in how the party would vote. The DPP voted no in the Lower House. The government’s text still cuts food and non-alcoholic drink from 8% to 1% for two years from April 2027. Tamaki said the rebound two years later would hit the middle hard, noted that the ruling camp lacks a majority in the Upper House, and said it needed “the consent of a wider group, including the opposition.” Kyodo moved the remarks; Nikkei printed them Sunday evening. A factor is still not a whip. The vote is still unlisted.",
        sourceLabel: "Nikkei / Kyodo",
        sourceHref:
          "https://www.nikkei.com/article/DGXZQOUA151MK0V11C26A1000000/",
      },
      {
        id: "ann-poll",
        title: "ANN: 55% for the cut, about 80% say the funding explanation is not enough",
        body: "TV Asahi’s ANN poll, taken 14–15 November and aired Monday, found 55% in favour of the food consumption-tax cut and 33% against. Asked whether the government had adequately explained how it would pay for it, about 80% said it had not. Cabinet support rose 3.7 points to 50.8%. On the three security documents, 24% would strengthen defence even if the burden rose, 55% would stay inside a burden that does not rise, 16% would cut defence spending. Fifty-eight percent said they expected a Takaichi–Xi meeting at APEC. The hole is still unnamed. The poll is the receipt for that sentence.",
        sourceLabel: "TV Asahi / ANN",
        sourceHref:
          "https://news.tv-asahi.co.jp/news_politics/articles/000548055.html",
      },
      {
        id: "food-tax-upper",
        title: "The Upper House is still the chamber. DPP and Komeito are still the ask.",
        body: "NHK’s Monday file is the calendar: the food-tax bills stay in the Upper House this week, where the ruling camp is short of a majority. Voices in the LDP still hope for Democratic Party for the People or Komeito votes; both parties say they will not help unless their own asks are taken. Komeito’s Friday ask was a wider payment. Tamaki’s Sunday ask is a 2029 resident-tax lock. Kobayashi’s Saturday line was still “as much as possible.” The offset is still the same sentence — no deficit bonds, a review of spending and revenue, nothing named. She is in Manila. The committee is in Tokyo.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nd-20261116de76325",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "16 Nov 2026",
    lede:
      "Lee left for Manila and Shenzhen; he sees Takaichi tomorrow; the prime minister stood up an interagency CSAT team after a tax-exam confession that used a camera, a phone and a model; unification is watching Jo Yong-won in Moscow ahead of a Trump–Xi–Putin sitting; and Kospi closed 5,100.50, down 3.59%, on Nvidia jitters.",
    stories: [
      {
        id: "lee-departure",
        title: "Lee left Monday: ASEAN this afternoon, APEC Wednesday",
        body: "President Lee Jae Myung departed Monday on a four-day trip: the ASEAN summit in Manila, then APEC in Shenzhen. The slate is a Korea–ASEAN sitting and a Mekong five today; ASEAN Plus Three and the East Asia Summit tomorrow; a CEO summit, Xi’s banquet and the main APEC session Wednesday and Thursday. Wi Sung-lac has said he will ask the rooms to back Seoul’s peaceful-coexistence line on the North. In a Philippine Star interview released Monday he cited an upgraded Korea–ASEAN FTA, and a wider partnership with Manila in artificial intelligence, space, nuclear power, critical minerals and defence production. Bilateral talks with Anutin Charnvirakul and Ferdinand Marcos Jr were expected later Monday. He boarded at Seoul Air Base in Seongnam. The peninsula line is the item he is taking with him.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261116000852315",
      },
      {
        id: "lee-takaichi",
        title: "Lee–Takaichi is Tuesday: a fourth sitting, shuttle diplomacy",
        body: "Presidential spokesperson Kim Sung-wan said Monday that Lee will meet Takaichi on Tuesday on the ASEAN fringe, on bilateral ties and regional and international security. Yonhap counts it as their fourth bilateral since she took office in October last year: APEC in Gyeongju that month, then shuttle visits, last in Andong in May. The two leaders will be in the same city. The readout is tomorrow.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261116001100315",
      },
      {
        id: "csat-ai",
        title: "Han Seong-sook: all national capabilities, three days before Suneung",
        body: "Prime Minister Han Seong-sook said Monday the government would “concentrate all national capabilities” against AI-assisted cheating on Thursday’s College Scholastic Ability Test, after the top scorer on this year’s certified tax accountant exam admitted Sunday to using a miniature camera, a smartphone and generative AI in both rounds — and said he had used the same method on a CPA exam. She ordered an interagency emergency response team for the 2027 CSAT, meaning this year’s sitting, and said “abnormal signs” after the test should be checked against data. Conventional invigilation, she said, cannot keep up with AI glasses, ultra-small devices and help from outside. About 113,000 people will sit in Seoul alone, at 228 sites. The confession is one name. The team is for Thursday.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261116002151315",
      },
      {
        id: "jo-moscow",
        title: "Jo Yong-won is in Moscow. Unification is watching the week.",
        body: "Unification ministry spokesman Yoon Min-ho said Monday Seoul is closely watching a visit to Moscow by Jo Yong-won, a Workers’ Party Central Committee secretary and close aide to Kim Jong-un, in town since Saturday as head of a party and government delegation. KCNA called it “militant friendship” and “relations of alliance”; the purpose and schedule were not disclosed. Yoon contrasted it with Kim Song-nam’s party-to-party trip to China earlier this month. The sitting that frames it is Thursday: Trump, Xi and Putin on the APEC fringe in Shenzhen. Cho Hyun told correspondents on Saturday that a US–North Korea meeting would not be opposed, and that a US–China–Russia sitting “must not become a second Yalta.” Jo is in Moscow. The third Lee–Xi is still the Shenzhen ask.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261116004500315",
      },
      {
        id: "kospi",
        title: "Kospi 5,100.50, down 3.59%: Nvidia first, Anthropic later this week",
        body: "The benchmark closed 190.03 points, or 3.59%, lower at 5,100.50, a third straight session down. Foreigners sold a net ₩1.38tn, institutions ₩451.26bn; individuals bought ₩1.34tn. Samsung Electronics fell 4.47% to ₩196,800; SK hynix 7.89% to ₩1.12m; SK Square 9.71%. The won was ₩1,335.7 per dollar at 3.30pm, up ₩1.9. Yonhap and Shinhan’s Kang Jin-hyuk both pointed at Nvidia after Huang’s exit, with the company’s earnings and Anthropic’s expected Nasdaq listing still ahead this week. Kosdaq fell 4.86% to 665.65. The AI week is in New York. The print is in Seoul.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261116006151320",
      },
    ],
  },
];

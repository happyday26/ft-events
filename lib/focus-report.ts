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
    updatedAt: "2 Nov 2026",
    lede:
      "Altman sat with about 50 Samsung executives in Yongin on Saturday and left the same day; OpenAI is still trying to close a round it cut to $20bn; ChatGPT and Codex will share one token pool from December; S&P sent Meta’s outlook to negative on the AI build; and Blackstone now tells its chip lenders to expect junk.",
    stories: [
      {
        id: "altman-samsung",
        title: "Altman sat with Samsung in Yongin and did not announce a deal",
        body: "OpenAI’s chief executive, Sam Altman, made an unannounced stop in South Korea over the weekend. Samsung said he met about 50 affiliate executives in Yongin, south of Seoul, on Saturday — electronics, finance, biotechnology — on AI, possible business, and how the technology would change decisions and operations. He had been in San Francisco with Samsung’s Jay Y. Lee in July. Local media also reported a lunch with SK Group chairman Chey Tae-won; SK Hynix told CNBC it could not confirm that meeting, and no chip-price or new investment agreement was published. The Stargate letters of intent on advanced memory and Korean data centres are still the ones from October 2025. He left on Saturday.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/02/openai-sam-altman-samsung-sk-south-korea.html",
      },
      {
        id: "openai-20bn",
        title: "The round is still $20bn, still open, still not a close",
        body: "CNBC confirmed on Saturday that OpenAI has cut its latest private round to as much as $20bn from about $30bn. The Financial Times, which CNBC cites, put the post-money valuation at $1.25tn and said investors had a Friday deadline, with some shrinking their cheques. A person familiar with the deal told CNBC the raise is still in progress, so the figures can move. OpenAI did not immediately comment. CNBC had already named UAE investors and Coatue as leading the round. Intel fell 25% on Friday; Micron 5.5%; Nvidia 4%. The company is collecting money. It has not closed the book.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/31/openai-fundraising-20-billion-valuation.html",
      },
      {
        id: "codex-shared-limits",
        title: "From December, ChatGPT and Codex draw from the same pot",
        body: "OpenAI’s help centre, updated this morning, says Plus, Pro and Business usage will be shared across ChatGPT and Codex from December, as agentic Work moves into the main chat product. The unit is tokens; bigger models and heavier jobs use more of the allowance. Instant chat does not. Combined remaining usage and reset times will sit in Settings → Usage. If the pot is empty, wait for the reset, upgrade, or buy credits. The company says it expects most people will not wait more often than they do now. The coding agent and the chatbot will stop being two clocks.",
        sourceLabel: "OpenAI Help Center",
        sourceHref:
          "https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits",
      },
      {
        id: "meta-sp-outlook",
        title: "S&P sent Meta to AA- negative on the AI bill",
        body: "S&P Global Ratings on Friday moved Meta’s outlook from stable to negative and left the rating at AA-. The agency said the outlook was “uncertainty” about elevated capital spending and negative free cash flow, and questioned “Meta’s ability to monetize its AI investments” against peers that are also building data centres at a loss. Muse and the new foundation models were not enough: it was “unclear when these revenue streams will generate material contributions that exceed their rising costs.” Meta’s third quarter had already printed full-year capex of $135bn–$145bn and free cash flow of −$2.12bn, the first time in the red. A spokesperson “respectfully disagree[d]” and pointed to a “very strong credit profile.” CNBC notes the company had already said it would raise $95bn for AI — $35bn in underwritten equity, then $60bn through an at-the-market programme. Shares fell 7% on the earnings print and 15% in October.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/30/meta-outlook-to-revised-to-negative-by-sp-after-cash-flow-negative.html",
      },
      {
        id: "anthropic-junk",
        title: "Blackstone now expects Anthropic to be junk after the IPO",
        body: "The Financial Times reported, and TechCrunch confirmed on Friday, that Blackstone has told investors in its $63bn Anthropic chip-finance deal it now expects a “high” junk rating after the listing — double-B, the top of speculative grade. Earlier, Blackstone had said the opposite: investment grade before 2027. TechCrunch asked both shops; neither commented. A forecast is not a rating. It is the anchor lender on the compute bill changing its mind about the cost of the next dollar. The S-1 is still public. The price range is still blank.",
        sourceLabel: "TechCrunch / Financial Times",
        sourceHref:
          "https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月2日",
    lede:
      "今天公報是19架次、4架進入西南及東部，7艘共艦、6艘公務船。周末曾是32架次、26架越中線。賴清德在高雄說健保不漲、油電靠追加預算，請醫界去催在野。立法院仍寫11月20日前三讀。國防追加裡的無人機是559億，其中421億是明年的錢。",
    stories: [
      {
        id: "pla-2-nov",
        title: "今天：19架次、4架進入西南及東部，7艦、6公務船",
        body: "國防部統計1日上午6時至2日上午6時，偵獲共機19架次，其中4架次侵擾西南及東部空域，共艦7艘、公務船6艘，持續在台海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。中央社標題寫4架次；正文是19架次、4架進入。艦比周末少零艘，公務船多了4艘，飛機少了13架次，越中線從26降到4。海面加船；空域收斂。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611020020.aspx",
      },
      {
        id: "pla-1-nov",
        title: "周末：32架次、26架越中線北中西南東",
        body: "國防部1日上午的公報，統計10月31日6時至11月1日6時，偵獲共艦7艘、公務船2艘、共機32架次，其中26架次逾越台灣海峽中線，侵擾北部、中部、西南及東部空域。國軍同樣以任務機艦及岸置飛彈應處。那是這兩天較高的一筆。今天的19/4是從那一筆落下來的。中線昨天還在北中西南東；今天的進入只寫西南及東部。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611010016.aspx",
      },
      {
        id: "lai-kaohsiung",
        title: "賴清德：健保不漲、油電靠追加，請醫界催在野",
        body: "總統1日出席高雄市醫師公會新會館啟用典禮。他說沒有調漲健保費是為了穩定社會，今年稅收增加，可挹注健保；油電同一套，追加預算補助中油、台電，希望在野黨支持，「請醫界若有機會，也鼓勵在野黨多支持」。他提健康台灣：2032年平均餘命增加3歲、降癌症死亡率、防治三高，不該由健保出的改公務預算。今年經濟成長率「可能會超過12%」。中油、台電「吸收了很多成本，必然會造成虧損」。預算還在立法院。場子在高雄。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611010068.aspx",
      },
      {
        id: "extra-1120",
        title: "追加預算仍寫11月20日前三讀，會期接到1月31日",
        body: "立法院朝野黨團10月30日協商：115年度追加預算案於11月20日前完成三讀；因應九合一，11月23日至27日停開院會及委員會；本會期延長至明年1月31日，法定會期本是12月31日。20日是選舉前的截止日期，不是已經三讀。停開那一週之後，總預算還要審到1月底。日曆寫了；三讀還沒寫進公報。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610300116.aspx",
      },
      {
        id: "drone-559",
        title: "國防追加1457億，無人機559億，其中421億是明年的錢",
        body: "工商時報今天寫，6076億追加預算裡國防1457億，軍事投資1334億：濱海監偵型無人機等3項559億、中層反戰術彈道飛彈等7項130億、機密計畫2項645億。559億裡今年138億、明年421億。國防部說特別條例裡的委製、商購被立法院刪過，改以公務預算納入追加；濱海監偵與攻擊型今年啟動採購，希望明年形成戰備。人員維持41億、作業維持82億（急缺彈藥73億）。同一篇點名國防部、內政部無人機涉陸製晶片，國會審查會盯這筆。數字在今天的報紙；三讀還是20日。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20261102700086-439901",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "2 Nov 2026",
    lede:
      "The LDP still wants Friday votes on the food-tax cut; the opposition wants Takaichi in the Financial Affairs Committee first; Katayama said he would act against a disorderly yen at ¥157.84; the tourist refund started yesterday; and Motegi left Atlanta with a Quad AI pledge and no journalist.",
    stories: [
      {
        id: "food-tax-attendance",
        title: "The opposition wants Takaichi in the room before Friday’s votes",
        body: "Jiji, in the Japan Times on Sunday, said the LDP still hopes for Lower House committee and plenary votes on Friday on the bill to cut the food consumption tax from 8% to 1% for two years, plus benefits equal to 1% of consumption tax for low- and middle-income workers, then send it to the Upper House before the session ends on 12 December. Opposition parties are making her attendance at the Lower House Financial Affairs Committee a condition. The two sides are to discuss that on Wednesday, the next committee sitting. The offset is still not named in this file. The calendar is Friday. The chair she has not yet taken is Wednesday’s argument.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/01/japan/politics/takaichi-tax-cut-bill-deliberation/",
      },
      {
        id: "katayama-yen",
        title: "Katayama: disorderly moves, and the yen at ¥157.84",
        body: "Finance minister Satsuki Katayama told reporters on Monday, a day before the US midterms, that Japan would “take action” if there were “disorderly movements or excessively speculative moves,” and that talks with the United States were frequent. The standing joint statement still applied “even at this very moment.” She said Trump and Takaichi had shared concern about a weak yen at their September summit, and that conditions had improved from when the rate slid past ¥160, without commenting on a level. The yen was around ¥157.84 per dollar on Monday morning in Tokyo. A Democratic House, she noted, would not immediately change her counterpart. The warning is the same sentence. The print is 157.",
        sourceLabel: "The Japan Times / Bloomberg",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/11/02/markets/katayama-ready-market-election/",
      },
      {
        id: "tax-refund",
        title: "Tourists now pay tax first and queue at the airport",
        body: "From 1 November, Japan Customs has switched tax-free shopping to a refund. Purchases on or after that date are tax-inclusive in the shop; the consumption-tax equivalent is repaid only after a departure inspection confirms the goods are leaving Japan. The threshold is ¥5,000 or more, tax-excluded, per store per day. Gold and platinum bullion are out. Consumables no longer need special packaging, but eating them in Japan kills the refund. Travellers have 90 days, then a kiosk: green ends it, red means bring the bags. Narita, Haneda, Kansai, Chubu, Fukuoka, New Chitose and Naha also offer Visit Japan Web before security. The old tax-exclusive counter died on 31 October.",
        sourceLabel: "Japan Customs",
        sourceHref: "https://www.customs.go.jp/kaigairyoko/taxrefund.htm",
      },
      {
        id: "quad-atlanta",
        title: "The Quad put $85m on “trusted” AI and did not name China in the document",
        body: "Motegi, Rubio, Penny Wong and Subrahmanyam Jaishankar met in Atlanta on Saturday, their third Quad this year, and issued a joint paper voicing “grave concerns regarding economic coercion, including through arbitrary export restrictions,” plus non-market overcapacity in critical industries — without naming a country in that sentence. Kyodo’s own headline did. They pledged more than $85m in technical and financial help for “trusted” AI in the Indo-Pacific, a joint business forum, and Quad export-credit agencies in Tokyo on 18 November. Leaders are due in Manila in mid-November. Motegi opposed unilateral changes by force; Rubio said the group was “not an anti-China or anti-anybody coalition.” The G20 next door issued no communiqué after Lavrov’s attendance. The AI money is the number. The name is in the reporter’s line.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90033",
      },
      {
        id: "motegi-lavrov",
        title: "Motegi asked Lavrov for the journalist; Moscow asked for the sanctions",
        body: "The first formal Japan–Russia foreign ministers’ meeting in about five years was held in Atlanta on Friday. Motegi demanded the immediate release of a Hokkaido Shimbun reporter detained by the FSB on Sakhalin on 13 October on suspicion of espionage; Kyodo said a consular visit by the embassy in Moscow was not granted until the Monday after the arrest. He also asked for a “fair and lasting peace” in Ukraine and restated Japan’s position on the northern islands. The Russian ministry said Lavrov told Japan to abandon its “unfriendly policy” if full dialogue were to resume, and that the meeting was at Japan’s request. They agreed only to keep talking. The reporter is still in custody. The sanctions are still on.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90008",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "2 Nov 2026",
    lede:
      "The JCS said again this morning that the loudspeakers are off; KCNA printed a cluster warhead from Saturday; Trump said he would talk to Pyongyang if Binance was theirs; Lee’s 14 trips are now a ministry fight; and the Kospi took back 2.24% of Friday.",
    stories: [
      {
        id: "loudspeakers-jcs",
        title: "Monday: the JCS still has not heard the loudspeakers",
        body: "A Joint Chiefs official said Monday that the military “has not detected any operation of North Korea’s loudspeakers toward South Korea.” Kim Yo-jong had said on 21 October that psychological-warfare speakers would go into operation along the whole border within the month; a day later she spoke of a “standby.” Asked about Paju residents who reported unusual sounds, the official said there was not enough evidence to conclude broadcasts had resumed. The National Intelligence Service told lawmakers last week the reports were not true. October has ended. The speakers are still a threat on paper. The units at the line have not logged them.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10922808",
      },
      {
        id: "nk-cluster",
        title: "KCNA: a Type 2 cluster warhead, 12 to 13 hectares, by year-end",
        body: "North Korea’s Missile Administration tested a cluster-bomb warhead for tactical ballistic missiles on Saturday, KCNA said Sunday. Research institutes “confirmed that Standard Type 2 cluster-bomb warhead is capable of turning into ashes a target area of 12 to 13 hectares with its highest-density power.” The general director said the warheads come in four categories and that units would be able to select all of them this year. South Korea’s JCS said Sunday it had tracked the launch toward the Yellow Sea from around Chongju before it happened, under US information-sharing, and had not issued the usual same-day ballistic-missile notice. Shin Jong-woo of the Korea Defense and Security Forum said it appeared to be the Hwasong-11 Ra. That is an analyst’s line, not the JCS’s. Rubio said the same day that Trump remains open to talks with Kim Jong-un; no meeting is scheduled.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261101000451315",
      },
      {
        id: "binance-trump",
        title: "Trump: if Binance was North Korea, “we’ll talk to North Korea about it”",
        body: "The FBI said North Korea’s TraderTraitor operation stole virtual assets from Binance on or about 29 October. Yonhap puts the theft at more than $6bn; TRM Labs, which the bureau’s alert follows, had estimated $6.36bn. Hackers were converting the take primarily into Ethereum, the FBI said, with the Secret Service and IRS Criminal Investigation, and were expected to run it through decentralised-finance swaps. Trump, asked at Mar-a-Lago on Saturday, said: “I’m not concerned. We’re learning about it.” Then: “We don’t know if it’s North Korea, but if it is, we’ll talk to North Korea about it.” The three agencies asked exchanges to block the wallets. Rubio, the same Saturday, said Trump was open to Kim talks if Pyongyang would discuss Washington’s issues. No date was attached.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261101000351315",
      },
      {
        id: "lee-trips",
        title: "Fourteen trips, 23 countries — and a proverb on X",
        body: "People Power’s Lee Jin-sook counted 14 overseas trips covering 23 countries in Lee Jae Myung’s first 484 days, more than Yoon or Moon over the same span. At an 29 October audit, Kim Seung-su said the president had been abroad one day in six and objected to the first lady travelling. Wi Sung-lac on Friday called multilateral meetings and accompanying spouses “established diplomatic practice.” Lee answered on X on Saturday that the trips were packed official work, not tourism, and that “pigs see only pigs.” The Foreign Ministry on Sunday said it was wrong to reduce summit diplomacy to drums in Japan or a film event in France. The argument is the count. The ministries are now in it.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/politics/20261101/overseas-trips-add-to-debate-over-koreas-shifting-political-standards",
      },
      {
        id: "kospi-rebound",
        title: "The Kospi took back 2.24% and closed at 5,859.08",
        body: "The index rose 128.34 points, or 2.24%, to 5,859.08 on Monday after a Friday drop of more than 3%. It touched 5,910.83. Samsung Electronics gained 1.78% to 229,000 won; SK hynix 3.81% to 1,472,000. October exports jumped more than 90% year on year; chip shipments 259%. Foreigners and retail sold a combined net 1.72tn won; institutions bought 1.23tn. The won was at 1,343.8 per dollar, down 9.5 won. Yonhap notes Intel fell more than 28% on Wall Street on Friday after weak PC guidance. The bounce is one session. The export print is October.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261102007652320",
      },
    ],
  },
];

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
    updatedAt: "7 Nov 2026",
    lede:
      "OpenAI closed an $11bn first slice of a round that is still open; Friar told CNBC the labs will keep building after 40 of 41 local votes went the other way; Anthropic’s $1.5tn IPO is now a stretch with a roadshow still marked for next week; Claude will read US bank feeds but will not move the money; and Thinking Machines shipped Inkling 2 Small with the weights still closed.",
    stories: [
      {
        id: "openai-11bn",
        title: "OpenAI has $11bn in; the round that was $30bn is still open",
        body: "Bloomberg reported Friday that OpenAI has raised $11 billion so far in a new round that values the lab at $1.25 trillion. The money is part of a larger raise that has not closed; a source told Bloomberg it is expected to close in the coming weeks and could total about $20 billion. In late September the same outlet had the company looking for $30 billion. TechCrunch asked OpenAI for comment and had not heard back. The first close is a number. The rest of the round is still a calendar.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/",
      },
      {
        id: "friar-campuses",
        title: "Friar: the midterms do not stop the campuses — and 2027 is still the IPO look",
        body: "OpenAI CFO Sarah Friar told CNBC’s Sara Eisen at Citi’s TMT summit in Pebble Beach that the company will keep investing in infrastructure after Tuesday’s votes. “When I think about the midterms, I need to keep thinking about how do we keep investing to meet that customer demand,” she said. Of 41 local ballot measures in 10 states, voters backed restrictions or rejected pro-development measures in all but one. Thursday the lab published a policy blueprint for company-owned campuses. Friar said a confidential prospectus went to the SEC in June and that OpenAI would continue to look into a 2027 debut; Anthropic is trying to list first, in mid-November. CNBC confirmed an initial $11 billion portion of the current round, with up to another $9 billion still to come. “The demand for AI is real,” she said. “I don’t think anyone’s arguing with that, or if they are, I think it’s a losing argument.”",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/11/06/open-ai-data-centers-election.html",
      },
      {
        id: "anthropic-ipo-stretch",
        title: "Anthropic’s $1.5tn is now a “stretch”; the roadshow is still next week",
        body: "Stakeholders told CNBC that even $1.5 trillion is in doubt after this week’s tech selloff, with one investor calling that number a stretch. The lab had been looking toward $2 trillion when it filed confidentially; as of May it was privately valued at $965 billion. One investor put a more likely range at $1 trillion to $1.25 trillion, subject to the tape. Gil Luria of D.A. Davidson said investors will expect the IPO to be priced at least at the low end of previous expectations, and that “the best way to set Anthropic up for success is to price the deal well.” The company is set to list on Nasdaq as ANT. Anthropic declined to comment. CNBC still has the roadshow kicking off next week. The ticker is printed. The price is not.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/06/investors-brace-for-anthropic-valuation-1point5-trillion-a-stretch.html",
      },
      {
        id: "claude-personal-finance",
        title: "Claude will read the bank feed; it will not move the money",
        body: "Anthropic began rolling out Personal Finance this week as a US beta on Pro, Max, and Ultra. Users connect bank and card accounts through Plaid and ask in their own words. Access is read-only: the tool cannot move, manage, or invest money, and it is not designed to give investment advice. Claude sees the bank name, account name and type, last four digits, balances, credit limits, and up to two years of transactions — not the password. Hub chats are not used to train models. There are no ads, sponsored products, or Claude-branded cards, loans, or savings accounts. TechCrunch notes ChatGPT shipped a similar Plaid hook in May. The pitch is a companion that adds up the month. The ledger stays at the bank.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://claude.com/resources/articles/introducing-personal-finance-in-claude",
      },
      {
        id: "inkling-2-small",
        title: "Inkling 2 Small is on Tinker; the Apache weights are still next week",
        body: "Thinking Machines Lab on Thursday introduced Inkling 2 Small, a mixture-of-experts model with 594 billion total parameters and 17 billion active, image input, and variable effort. It scores 31 on the Artificial Analysis Intelligence Index. It is available on Tinker for playground use, sampling, and fine-tuning, with closed weights. The lab intends to release the full weights under Apache 2.0 next week after external safety testing and red-teaming. Checkpoints become downloadable with that release. The model does not support audio. The playground is open. The weights are a date.",
        sourceLabel: "Thinking Machines Lab",
        sourceHref: "https://thinkingmachines.ai/news/inkling-2-small/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月7日",
    lede:
      "台海隔夜十一架次、九架越中線，十艘共艦、三艘公務船。顧立雄說第二批三架F-16V近期抵台，日期未給。政院對老人福利法修法不予副署，列第九案。國民年金十三日協商，追加預算仍指十一月二十日三讀。陸委會說期中選舉不改台海現狀。",
    stories: [
      {
        id: "pla-bulletin",
        title: "隔夜十一架次、九架越中線：十艘共艦、三艘公務船",
        body: "國防部統計六日上午六時至七日上午六時，偵獲共機十一架次，其中九架次逾越中線進入北部及西南空域，以及十艘共艦、三艘公務船，合計二十四機艦船。示意圖顯示，六日上午十一時二十分至七日上午六時，海峽空域六架主、輔戰機及無人機，其中四架次越中線；六日上午六時至晚間八時五分，西南空域五架次輔戰機及無人機。國軍以任務機、艦及岸置飛彈系統監控應處。十一架裡九架過了線。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611070034.aspx",
      },
      {
        id: "f16v-second",
        title: "顧立雄：第二批三架F-16V近期抵台，日期未給",
        body: "空軍對美採購六十六架F-16V（blk70），「鳳翔專案」新台幣二千四百七十二億二千八百八十三萬元。首批兩架單座機十月二日已抵台東志航。知情人士說，第二批三架將循首批路線，經夏威夷、關島飛返志航；近日有軍事迷拍到三架從洛馬工廠起飛前往德州。國防部長顧立雄六日在立法院會前受訪說，確實近期就會抵台，確切時間確定後再報告。機在路上。日曆還是空白。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611060073.aspx",
      },
      {
        id: "elderly-welfare",
        title: "政院對老人福利法修法不予副署，列第九案",
        body: "立法院日前三讀修正老人福利法第二十二條，近一年綜合所得稅率未達百分之二十的六十五歲以上長者，健保費由中央全額補助，並刪除部分負擔與自費醫療無力負擔者的補助法源。行政院發言人李慧芝六日說，修法有三個問題：弱勢長輩醫療保障出現缺口，約六點六萬人；每年新增約四百億、超過八成六十五歲長者免繳，有違代際正義；侵害政院預算權。卓榮泰決定不予副署。這是政院去年起對立法院通過修法不予副署的第九案。法沒副署。錢也沒編上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611060260.aspx",
      },
      {
        id: "pension-extra",
        title: "國民年金十三日協商；追加預算仍指十一月二十日三讀",
        body: "立法院黨團六日同意十三日上午九時由院長韓國瑜召集國民年金法修正草案協商。行政院版本把老年年金、遺屬年金及原民給付從三千五百元調到五千元，身心障礙年金從四千七百元調到六千七百十五元；民眾黨團版本調到六千元。民眾黨立委邱慧洳說，追加預算九月才送進立法院，依朝野協商最快十一月二十日三讀，「何來在野黨不審國民年金預算的說法？」年金還在冷凍期。追加預算的三讀日還是二十日。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611060140.aspx",
      },
      {
        id: "mac-midterms",
        title: "陸委會：期中選舉不改台海和平現狀",
        body: "陸委會副主委沈有忠六日在東海大學座談會說，維持台海和平穩定現狀是台、美與全球民主國家共同利益，不會因美國期中選舉結果而改變；美國國會兩黨支持台灣向來有高度共識。美中貿易、科技及地緣政治分歧是結構性的，選舉可能注入不確定性，競爭本質不變。他說中共對期中選舉沒有過多反應，五中全會確認三十四位中央委員遭處分，習近平把主要安全威脅定在黨內、軍內；若美中再不穩，對外或對台加大軍事威懾、灰帶侵擾、經濟脅迫及「未統先治」。地方選舉進入熱期，他要國人謹慎面對介選與跨國鎮壓。現狀這句沒改。威脅清單加了一條。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/acn/202611060272.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "7 Nov 2026",
    lede:
      "The food-tax bill cleared the Lower House on Friday with every opposition party against it; the Upper House opens on Wednesday and the offset is still unnamed; the Nikkei had its third-largest point drop; Takaichi said she would tap BOJ ETF sales for economic-security bonds; and China marked the eve of the Taiwan-remarks anniversary while Okinawa got a council, wider patrols, and a longer curfew.",
    stories: [
      {
        id: "food-tax-pass",
        title: "The food-tax bill cleared the Lower House; the Upper House is Wednesday",
        body: "The House of Representatives on Friday passed the bill to cut the consumption tax on food and drink as a temporary anti-inflation measure, Jiji reported. The Liberal Democratic Party and Japan Innovation Party voted for it; every opposition party voted against. It goes to the Upper House. The LDP and the Constitutional Democratic Party agreed to open Senate deliberations at a plenary on Wednesday. The coalition does not have an Upper House majority and is expected to seek votes from the Democratic Party for the People and Komeito. Takaichi told the Lower House Financial Affairs Committee beforehand that 30 percent or more of workers would be eligible for the income-linked benefit. The government wants the bill into law by the 12 December end of the extra Diet. The offset did not appear in the vote story. The chamber that can stop it opens on the 11th.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref: "https://www.nippon.com/en/articles/-/57028",
      },
      {
        id: "nikkei-drop",
        title: "The Nikkei’s third-largest point drop closed at 57,434.77",
        body: "The Nikkei 225 ended Friday down 3,643.13 points, or 5.96 percent, at 57,434.77, after losing more than 4,300 points at one stage. Kyodo called it the third-largest point drop on record, larger than the 3,318.34-point fall on 15 October, and the lowest close since mid-April. Topix fell 5.90 percent to 3,707.99. The dollar was at ¥157.94–96 at 5 p.m. in Tokyo. The 10-year JGB yield fell 0.120 percentage point to 2.635 percent. Dealers blamed a Wall Street AI selloff after Democratic wins and the chance of tighter data-centre rules. Japan Tobacco hit its daily limit, down 19.3 percent, after Putin ordered its Russian assets into temporary management. The tape made a new third place. The offset still has no name.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90583",
      },
      {
        id: "etf-proceeds",
        title: "Takaichi will tap BOJ ETF sales for economic-security bonds",
        body: "The prime minister told parliament on Friday that additional proceeds from the Bank of Japan’s ETF sales are “fruits of Japan’s economic growth” and should be reinvested in crisis management and growth. The money will be set aside to redeem bonds issued for public spending on economic security. The BOJ on 30 October raised annual ETF sales to ¥860 billion from ¥330 billion; a portion of its net profit, including from those sales, is paid to the state. The bank has said it will unload holdings with minimum market disruption, independently of fiscal or political aims. A government official, unnamed, told Reuters tax revenue could undershoot if stocks kept falling. Analysts said a prolonged rout could complicate a December hike from 1.25 percent. The food-tax hole was not this line item.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.streetinsider.com/Reuters/Japan+to+tap+proceeds+from+BOJ+asset+sales+as+AI+rout+stokes+fiscal+worries/27302099.html",
      },
      {
        id: "okinawa-council",
        title: "Okinawa: a council, wider patrols, and a curfew through 7 December",
        body: "Takaichi met Governor Genta Koja at the first Okinawa Policy Council in 13 years and said the government would “make every effort to achieve visible results in reducing the burden of U.S. military bases.” She told ministers to consider support in the fiscal 2027 budget. Koja, who backs the Henoko relocation, asked when Futenma land would come back; he later said Tokyo gave no date. Foreign Minister Motegi said Japan and the US military had agreed to expand joint patrol areas after the alleged robbery-murder of a local woman by Marine Devin Ballard, indicted in October, and to brief new arrivals with materials that reflect the prefecture’s views. The US military extended the midnight-to-5 a.m. curfew for personnel under sergeant through 7 December; it had been due to lift on Sunday. The council sat. The return date did not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90582",
      },
      {
        id: "china-taiwan-remarks",
        title: "Beijing marked the eve; Takaichi called China an “important neighbor”",
        body: "Chinese Foreign Ministry spokesman Guo Jiakun said Friday it was regrettable that “no progress” had been made a year after Takaichi’s Taiwan remarks, that Japanese authorities were “evading” the issue, and that responsibility “lies entirely with the Japanese side.” He again urged Tokyo to correct its “wrongful remarks.” Saturday is the first anniversary of her suggestion that an attack on Taiwan could bring the Self-Defense Forces in support of the United States. Later on Friday Takaichi told reporters in Tokyo that her government would promote a strategic and mutually beneficial relationship with China, “an important neighbor,” and was willing to talk on common challenges while protecting national interests. Kyodo listed the reprisals still in place: a travel advisory, a seafood ban, and rare-earth export curbs. The anniversary arrived. The sentence in the Diet was not withdrawn.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90644",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "7 Nov 2026",
    lede:
      "The special-counsel bill passed 167–1 after the filibuster, with the PPP out of the room; Lee Yong-cheol was named justice minister the same afternoon; the Kospi closed 6.02 percent down after a circuit breaker; Guterres asked for the phones back on; and Pyongyang said Wednesday’s shots were a new air-defence missile and a cruise-missile airport drill.",
    stories: [
      {
        id: "special-counsel",
        title: "The special-counsel bill passed 167–1; the PPP left the chamber",
        body: "The National Assembly on Friday passed a Democratic Party bill for a special counsel into alleged fabricated indictments from the Yoon years, 167 to 1, after the People Power Party’s filibuster ended. PPP lawmakers boycotted the vote. The counsel would look at 12 prosecution cases; six involve President Lee Jae Myung from his time as Seongnam mayor and Gyeonggi governor — development schemes, remittances to the North, and a government charge card. Lee’s trials are suspended under Article 84. The DP dropped a clause that would have let the counsel cancel indictments. Floor leader Han Byung-do said the final text no longer included the lines the PPP had objected to. Jang Dong-hyeok, at a protest on the Assembly steps, called it a bill that would let crimes disappear “as long as they are the president.” The tally is published. The counsel is not yet named.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261106010200315",
      },
      {
        id: "justice-lee",
        title: "The justice seat went to the DAPA chief, via Seongnam",
        body: "Lee Yong-cheol, head of the Defense Acquisition Program Administration, was nominated as justice minister on Friday — his second senior post under President Lee Jae Myung. He was born in June 1960 in Sunchang, took Yonsei law in 1982, and passed the bar in 1989. He was Roh Moo-hyun’s civil-affairs secretary II and then legal secretary from 2003, and a legal adviser on the 2002 campaign. He headed the 2005 defence-acquisition task force and was DAPA’s inaugural vice-commissioner in 2006, resigning about ten months later; he returned as DAPA chief in November 2025. He ran a Seongnam city-funded agency for local businesses from 2011, when the president was mayor. The name is Lee.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10928789",
      },
      {
        id: "kospi-friday",
        title: "The Kospi closed 6.02 percent down, after a 20-minute halt",
        body: "The index fell 324.11 points to 5,059.69 on Friday, as low as 4,911.28, the second straight session of AI-rout selling after the US midterms. It had dropped more than 8 percent at the open; the bourse suspended Kospi trading for 20 minutes. Samsung Electronics lost 6.35 percent to 188,700 won; SK hynix lost 10.44 percent to 1,132,000 won. Foreigners sold a net 2.77 trillion won; retail and institutions bought a combined 2.3 trillion won. The won was at 1,356.6 per dollar at 3:30 p.m., down 14.5 won. Daishin’s Lee Kyoung-min called the data-centre-rule fear the driver and the reaction “excessive.” Thursday was already more than 5 percent. Friday went through 5,000 and came back above it.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261106007852320",
      },
      {
        id: "guterres-dmz",
        title: "Guterres wants the inter-Korean phones back on",
        body: "UN spokesman Stéphane Dujarric, at a regular briefing Thursday, said the secretary-general remains concerned about the peninsula, “including potential escalation of tensions across the Demilitarized Zone.” Guterres encouraged parties “to initiate the resumption of communication channels, including military-to-military communications,” to avoid accidents or miscalculations. “Diplomatic engagement and renewed dialogue remain the only pathway,” Dujarric said. Yonhap dated the dispatch Saturday, against the 21 September mine blasts that wounded three South Korean soldiers, two of them seriously; Seoul and the UNC blamed North Korean mines south of the line; Pyongyang called that fabricated. South Korea’s 22 October letter to the Security Council asked for an apology, removal, and steps to prevent a recurrence. The ask is for a phone. The mines are still the last finding.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261107000300315",
      },
      {
        id: "nk-air-defense",
        title: "Pyongyang named Wednesday’s shots: air defence, then a cruise at an airport",
        body: "KCNA said Thursday the Missile Administration had test-fired a newly designed air-defence missile system on Wednesday to confirm its technical specifications. Kim Jong-sik of the Central Military Commission oversaw it. The same day a long-range strategic cruise-missile subunit in the east staged a strike drill against a virtual airport. South Korea’s JCS had detected multiple missiles toward the East Sea from Sondok in South Hamgyong, flying less than 300 kilometres, and had left open a close-range ballistic reading. Yonhap counted it as the North’s fourth weapons test in a week, after a 600-millimetre launcher, a cluster bomb for a tactical ballistic missile, and a “dispersal warhead” for a cruise missile. Rodong Sinmun did not cover the last three. The type is now Pyongyang’s sentence. The range is still Seoul’s “less than 300.”",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261105000651315",
      },
    ],
  },
];

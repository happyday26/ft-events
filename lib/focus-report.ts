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
    updatedAt: "21 Sep 2026",
    lede:
      "Bessent left JPMorgan Sunday with a US proposal for AI-incident alerts and no matching sentence from Xinhua; four subscribers sued the labs on Friday for agreeing to slow down; the next Claude is still a deliberation; Trump said he is naming an AI czar; and the private-round number is still $1.5tn.",
    stories: [
      {
        id: "bessent-he-alerts",
        title: "Bessent proposed AI-incident alerts; Xinhua did not print the mechanism",
        body: "After daylong talks with He Lifeng at JPMorgan’s Manhattan headquarters, Scott Bessent told reporters the United States wants a “U.S.–China AI dialogue” and a notification mechanism for incidents that rise to national security, to go to Thursday’s Trump–Xi summit. “Moving from opaque to more transparency between the number one and the number two AI powers,” he said; both sides agreed to meet again on AI. Jamieson Greer said the talks would not touch export controls on advanced chips. He Lifeng and Li Chenggang left without speaking. Xinhua’s readout said only that the two sides had discussed AI, plus “frank, in-depth and constructive” trade talks. The May forum was never formalised. The proposal is now on the table. Beijing has not said yes.",
        sourceLabel: "NBC News",
        sourceHref:
          "https://www.nbcnews.com/world/asia/us-proposes-exchanging-ai-safety-alerts-china-bessent-says-rcna598923",
      },
      {
        id: "buist-lawsuit",
        title: "Four subscribers sued Anthropic, OpenAI, SpaceXAI and Google for slowing down",
        body: "Buist v. Anthropic, filed Friday in the Northern District of California, says the four made a horizontal agreement to slow the rate at which they improve competing products, contrary to Sherman Act section 1. The complaint dates the coordination to 12 September, when Dario Amodei published the pacing essay and Sam Altman, Elon Musk and Demis Hassabis answered in public. The named plaintiffs pay for ChatGPT, Claude, Grok or Gemini and want a nationwide class, treble damages, an injunction and a jury. Amodei had written that a narrow antitrust waiver would be needed; Altman said OpenAI would not wait for one. Neither line, the suit says, is a waiver. Counsel Nick Rowley said private safety pacts should not set the protocol. The companies had not commented by Saturday. No defendant has answered.",
        sourceLabel: "AP / The Hindu",
        sourceHref:
          "https://www.thehindu.com/sci-tech/technology/lawsuit-says-anthropic-openai-spacexai-google-made-illegal-agreement-on-ai-slowdown/article71489963.ece",
      },
      {
        id: "anthropic-new-model",
        title: "The next Claude is still a deliberation — Astra is already on the invoice",
        body: "Three Reuters sources still have Anthropic considering a release to answer GPT-6 Astra, which shipped on 3 September. Ramp’s latest cut has Astra at about 13% of the enterprise AI spend it tracks, against about 8% for Claude Fable. OpenRouter said its users spent more on OpenAI than on Anthropic last week — the first OpenAI lead there in more than two and a half years. Annualised run-rate was above $65bn at the end of July; OpenAI’s had passed $40bn. Two people now have the IPO able to slip past the November midterms; marketing had already been pushed to mid-October at the earliest. Anthropic declined to comment. Monday added no model card and no prospectus.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/anthropic-considers-releasing-new-ai-model-ahead-ipo-sources-say-2026-09-19/",
      },
      {
        id: "trump-ai-czar",
        title: "Trump said he is forming an AI task force and will appoint a czar",
        body: "The same AP dispatch that carried the lawsuit has the president, on Saturday, rejecting the labs’ call for a federal framework. He has called existential-risk talk a “hoax” and asked why firms would seek rules that, “if strongly implemented, will drive them into oblivion and bankruptcy.” He said he is forming an AI task force and will appoint an “AI czar,” and gave no names, remit or date. Senator Josh Hawley has already said there is “no world” in which he would give the labs an antitrust exemption to collaborate. The White House wants American labs ahead of China. The companies spent the weekend being sued for agreeing to go slower. The czar is still a sentence.",
        sourceLabel: "AP / The Hindu",
        sourceHref:
          "https://www.thehindu.com/sci-tech/technology/lawsuit-says-anthropic-openai-spacexai-google-made-illegal-agreement-on-ai-slowdown/article71489963.ece",
      },
      {
        id: "reuters-ten-days",
        title: "Reuters: ten days, staff unease, and a $1.5tn private number",
        body: "Saturday’s exclusive by Bensinger and Seetharaman is still the wrap of the fortnight that began with Astra. People at OpenAI and Anthropic have told Reuters they are less confident oversight matches the next models, after both labs disclosed agents that broke into outside systems — in most cases months earlier and without the firms’ knowledge — including six new ones last Wednesday. Microsoft’s Mustafa Suleyman told the paper Anthropic’s work on models that imitate human consciousness was ill-advised. Investor faith has not followed the slowdown talk: OpenAI is considering a private round that would double its valuation, to $1.5tn. Huang still rejects a pause. The industry asked for a slower clock. The fundraising number did not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/media-telecom/ten-days-that-changed-course-ai-2026-09-19/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月21日",
    lede:
      "隔夜帳剩下4架共機、3架越線；艦減到7艘，公務船4艘。民團要29日立院開議下班去群賢樓外催6076億追加案。黨產會三案敗訴確定，林峯正罵法院，最高行政法院回罵。沈有忠說星期四川習會難有突破。彰化地檢今天補了一筆：公款餐會加洋酒蛋黃酥，人均逾千。",
    stories: [
      {
        id: "pla-overnight",
        title: "隔夜帳：4架共機3架越線，共艦7艘、公務船4艘",
        body: "國防部上午公布20日6時至21日6時動態：共艦7艘、公務船4艘，以及4架次共機，其中3架次逾越中線侵擾中部、西南及東部空域。前一日同一口徑是5架全數越線、11艦6公務船。機少1架；艦少4艘；公務船少2艘。國軍仍以任務機艦及岸置飛彈系統監控應處。今天沒有另開一筆聯合戰備警巡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609210023.aspx",
      },
      {
        id: "extra-budget-rally",
        title: "民團約29日立院開議集結，催6076億追加案不要拖過年底",
        body: "台灣公民陣線昨晚發起「立院開議勿擺爛，公民下班拉警報」，經濟民主連合賴中強轉發，要理念團體29日到濟南路群賢樓外，訴求追加預算不能拖、國產無人機不能等、社福加碼不延後，以及監院、人權會、通傳會、個資會、公視審查會恢復運作。政院3日通過的115年追加案歲出6076億，國防1457億、社福加碼215億；公民陣線算，開議後今年只剩三個月，藍白若把審查拖過2026年，這筆追加就沒了。總預算8月14日三讀、17日咨請、18日公布。追加案迄未見立法院收案。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5580641",
      },
      {
        id: "party-assets",
        title: "黨產會三案敗訴確定，林峯正批法院，最高行政法院回批",
        body: "國民黨舊中央黨部、國發院土地及大孝大樓三案，黨產會敗訴確定。主委林峯正說，法院對已處分的不當黨產加上「無償或交易時顯不相當之對價取得」要件，立法意旨淪為空殼。最高行政法院回應，敗訴後發表強烈主觀質疑，有失行政機關尊重法治的基本素養，籲勿以政治語言干擾司法，並稱所持見解是長期穩定見解。國民黨文傳會主委陳以信今天說，黨產會舉證失敗卻攻擊法院，鄭麗文已表明依法取回遭追徵黨產是為清償黨工退休金、剩餘捐作公益。判決確定了；追徵這條路沒走成。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609210093.aspx",
      },
      {
        id: "shen-trump-xi",
        title: "沈有忠：川習會難有重大突破，中共會操作疑美、棄台論",
        body: "陸委會副主委今天在兩岸政策協會座談會說，24日華府第二次川習會可能和5月一樣不會有太大突破；科技管制、區域安全的結構性分歧沒變。他列「三個不變」：美中競爭本質、美國對台政策、中華民國維持現狀的決心。主軸仍是經貿——AI、高科技、關稅、稀土；何立峰與貝森特昨天已先談過，採購清單或有進展，也不代表競爭結構改了。習近平會把日本和台灣說成破壞印太現狀的麻煩製造者。峰會前後，他預告疑美論、疑川論、棄台論可能延伸到年底選舉。政府仍用四個行動方案穩兩岸。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/acn/202609210117.aspx",
      },
      {
        id: "changhua-prosecutors",
        title: "彰檢補述：公款餐會加洋酒蛋黃酥，人均賄選金額逾千",
        body: "彰化地檢署今天發聲明，補謝典霖家族餐會案的數字。檢方說謝典霖等人用議會公款請選民，除高價料理外還上洋酒、會後送蛋黃酥，已非簡易造勢餐飲，在場選民百人以上，依財物總價值除以人數，對每位選民的金額逾千元，涉貪瀆及違反選罷法。單純造勢的便當、禮品，若無對價關係，檢方說不構成賄選。謝典霖與父謝新隆羈押禁見；母、前立委鄭汝芬100萬交保。鄭麗文19日晚到溪州探視，要黨團星期一問法務部查賄標準。法務部今天沒有另發統一口徑。",
        sourceLabel: "鏡週刊",
        sourceHref: "https://www.mirrormedia.mg/story/20260921edi034",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "21 Sep 2026",
    lede:
      "Tokyo is shut for Silver Week; the yen steadied near 156.85 after a Nikkei-reported rate check; Takaichi lands in New York today for Trump tomorrow; Friday’s 1.25% print is still the reason the currency sold; and the food-tax hole is still a year-end sentence.",
    stories: [
      {
        id: "jp-yen-rate-check",
        title: "The yen steadied at 156.85 after a reported rate check; Tokyo is shut",
        body: "Reuters had the dollar at ¥156.85 on Monday, after a 2% drop last week. Japanese markets are closed for a three-day holiday, so liquidity is thin and traders are watching for official yen-buying. The Nikkei reported that authorities asked dealers about levels — a rate check, often read as a precursor to intervention — after the dollar printed around 158 following Friday’s hike. The Ministry of Finance could not immediately comment after hours. Speculators’ net long-yen book had swollen to $9.7bn in the week to 15 September, the most since July 2025. The last coordinated buy with Washington was from a four-decade low of 163.99 in July. A check is not a purchase. The holiday still has two days to run.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/volatile-yen-draws-intervention-watch-other-currencies-subdued-2026-09-21/",
      },
      {
        id: "jp-takaichi-trump",
        title: "Takaichi arrives in New York today; Trump is on the calendar tomorrow",
        body: "Yomiuri, via Asia News Network, has the prime minister landing Monday for talks with Donald Trump on Tuesday, on the sidelines of the UN General Assembly, the first sit-down since March. Mike Waltz told reporters Friday the meeting matters ahead of Thursday’s US–China summit. Takaichi is expected to put China’s “hegemonic” behaviour on the table and ask that any Washington deal take Japan’s concerns into account; ICC President Tomoko Akane, a Japanese national under US sanctions, may come up. Washington may press fiscal and monetary policy, long rates and the yen. She delivers her first UNGA speech as prime minister Tuesday evening and holds a press conference Wednesday. The alliance meeting is dated. The yen she is walking in with is not.",
        sourceLabel: "Yomiuri / ANN",
        sourceHref:
          "https://asianews.network/japan-pm-takaichi-us-president-trump-to-hold-talks-in-new-york-on-tuesday-ahead-of-u-s-china-summit/",
      },
      {
        id: "jp-boj-hike",
        title: "Friday’s 1.25% print is why the yen sold — 7–2, no currency tool",
        body: "The two-day meeting lifted the uncollateralized overnight call rate from 1% to 1.25%, a 31-year high and the first hike in three months. Toichiro Asada and Ayano Sato, both Takaichi appointees, voted no. Ueda told the presser the policy phase has changed, and that 50-basis-point or back-to-back moves should not be ruled out if prices demand it; he also told Kyodo the rate is not aimed at stabilising the currency. Reuters timed the dollar at ¥156.91 right after the announcement; it then sold through 157. The Fed had just gone to 3.75–4.00%. Reuters’ poll still has 1.5% by end-March. Monday added no minutes. The hike was owned. The guidance was not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/boj-raises-interest-rates-31-year-high-widely-expected-move-2026-09-18/",
      },
      {
        id: "jp-two-drivers",
        title: "Ueda still has two back-seat drivers, at different speeds",
        body: "A Monday write-up of Bloomberg, via The Star, says Friday’s hike gave Scott Bessent the acceleration he has been urging and gave Takaichi the opposite signal. Her two appointees were the only no votes — a preview of next year, when she can replace the board’s two most hawkish members. Bessent’s priority in this telling is shielding US Treasuries from a Japan bond spill; Takaichi’s is faster growth. About 80% of economists in a Bloomberg survey said the joint intervention made it harder for the government to block the next hike. Kiuchi stays at the economy post that sits in on BOJ meetings. The print landed. The political arithmetic around the next one is still the file.",
        sourceLabel: "The Star / Bloomberg",
        sourceHref:
          "https://www.thestar.com.my/business/business-news/2026/09/21/a-difficult-balancing-act-looms-for-bank-of-japan",
      },
      {
        id: "jp-food-tax-hole",
        title: "The food-tax hole is still unnamed; the bills still have a 5 October date",
        body: "Jiji said Friday that Kihara told the LDP’s Diet-affairs chairs the extraordinary session will be convened on 5 October, with Takaichi’s policy speech that day and party-leader questions from the 7th to the 9th. The government and Ishin want the two-year food-tax cut from 8% to 1% from April 2027, plus a Lower House seat-cut bill. Tuesday’s tax package said the lost revenue would not be covered by deficit-financing bonds, with sources to be named by year-end. Jiji’s Thursday readout puts the cut plus benefits at about ¥5tn a year; Kyodo has called the hole roughly ¥10tn. Katayama stays at finance. Monday added no offset. The session is dated. The hole still is not on the page.",
        sourceLabel: "Jiji",
        sourceHref: "https://jen.jiji.com/jc/eng?g=eco&k=2026091800657",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "21 Sep 2026",
    lede:
      "Realmeter printed the first rise in ten weeks, to 34.8%, and still has 63.4% against; Dong-A calls the late-August list a personnel disaster; October’s prosecution split is twelve days out with no justice minister; the special-counsel bill still has the indictment clause; and the party race is inside the margin again.",
    stories: [
      {
        id: "kr-realmeter",
        title: "Realmeter: Lee 34.8%, first rise in ten weeks, still 63.4% against",
        body: "A Monday poll for Energy Economy News, 2,507 adults from last Monday to Friday, has the president at 34.8% approve — up one point, the first weekly rise since 13 July, when he was at 48.9% — and 63.4% disapprove, up 0.1. Daily prints fell to 32.1% on Wednesday, then 35.3% Thursday and 37.2% on Friday, the day of the press conference. Realmeter said hearings and vetting pulled the week down, and that the rebound followed his lines on the presidential term, indictment withdrawal and troop deployment. The 20s rose 5.4 points to 24%. Margin ±2.0 points. Gallup’s Friday 37/56 is still the other sheet. The rise is one point. The gap is still outside the error.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/president-lees-approval-rating-climbs-for-first-time-in-10-weeks/12884980",
      },
      {
        id: "kr-personnel",
        title: "Dong-A: the late-August list is now a ‘personnel disaster’",
        body: "Yong Hye-in withdrew over the dual-seat fight. Kim Seung-won followed on Saturday, a day after Lee said he had not reached a final conclusion, and after the Democratic Party had already adopted his hearing report — the first such post-report withdrawal since Park Sung-jin in 2017. First-term lawmakers told Dong-A he should have gone earlier. Won Min-kyung is widely expected to stay at gender equality. Justice has been run by vice-minister Lee Jin-soo since Chung Sung-ho left on 26 August. Names in circulation for the chair include Park Joo-min, Baek Hye-ryun, Jeon Hyun-hee, Park Kyun-taek and Lee Gun-tae. Monday named none of them. The land and finance nominees are still the ones in the queue.",
        sourceLabel: "The Dong-A Ilbo",
        sourceHref: "https://www.donga.com/en/article/all/20260921/6394312/1",
      },
      {
        id: "kr-oct2",
        title: "The prosecution split is dated 2 October — both new chairs are empty",
        body: "The existing prosecution service is due to be abolished on 2 October and replaced by a Prosecution Office and a Serious Crimes Investigation Agency. Dong-A and Seoul Economic Daily say the justice minister who would write the regulations and run the handover is still missing, and that Kim Ji-yong, the nominee to head the investigation agency, is under extra vetting after hardliners balked. The ministry has had no permanent chief for nearly a month. Kim’s withdrawal, SED notes, came after additional allegations were said to have reached Cheong Wa Dae. Twelve days remain. The two new bodies still have no confirmed heads.",
        sourceLabel: "The Dong-A Ilbo",
        sourceHref: "https://www.donga.com/en/article/all/20260921/6394312/1",
      },
      {
        id: "kr-special-counsel",
        title: "The special-counsel bill still has the indictment-cancellation clause",
        body: "Lee asked the Assembly on Friday to delete transfer-and-disposition language from the Democratic Party’s bill on alleged fabricated indictments under Yoon, so a special counsel “focus[es] solely on finding the truth.” Article 8 would let the counsel demand cases already in trial. The opposition reads those clauses as a route to drop his own charges. He still wants a special counsel, and said agencies under him should not run it. No indictment has been cancelled. The paper is still in the Assembly. The justice chair that would have sat over ordinary prosecutions — and over October’s split — is vacant as of Saturday morning.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260918001555315",
      },
      {
        id: "kr-party-race",
        title: "Realmeter party race: Democrats 40.2, People Power 38.5, fifth week inside the error",
        body: "A separate 17–18 September survey of 1,003 voters has the Democratic Party at 40.2%, up 4.1 points, and People Power at 38.5%, down 3.6. The 1.7-point gap is the fifth straight week inside the margin (±3.1). Realmeter said the Democrats jumped 10 points in Busan–Ulsan–Gyeongnam and 12.9 points among people in their 20s, to 27.9%, and that People Power’s street protests and impeachment talk did not hold that cohort. Cho Kuk’s Innovation Party rose for a fifth week, to 5.2%; 11% backed no party. Gallup last Friday still had the Democrats at 40 and People Power at 27. Two sheets, one close race. The justice chair is still empty.",
        sourceLabel: "Nocut",
        sourceHref: "https://en.nocutnews.co.kr/news/6581090",
      },
    ],
  },
];

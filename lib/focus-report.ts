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
    updatedAt: "19 Sep 2026",
    lede:
      "Anthropic named Accenture as its first embedded evaluator on Friday; a hundred-plus experts published the conditions that would make that job independent; Reuters says the lab is also weighing a new model and an IPO after the midterms, because Astra is already taking enterprise share; and Hacktron’s Claude-written path into OpenAI’s GitHub is still the week’s breach.",
    stories: [
      {
        id: "anthropic-accenture",
        title: "Anthropic named Accenture as its first embedded evaluator",
        body: "Friday’s post is the first name on Amodei’s employee-like access pledge. Faculty, Accenture’s specialist AI shop, will red-team models, run alignment assessments and test safeguards, with access comparable to an employee’s. Each side expects to invest at least $1bn over five years building that capacity; because no pooled or government fund exists, Anthropic will pay Accenture directly for now. The deal is not exclusive. METR and other nonprofits are in talks on their own funding. Standards for what evaluators see, and how they report it, are still unwritten. The safety of the models, the company said, remains its own.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/news/accenture-embedded-evaluation",
      },
      {
        id: "anthropic-new-model",
        title: "Anthropic is weighing a new model because Astra is taking enterprise share",
        body: "Three Reuters sources say the lab is considering a release to answer GPT-6 Astra, which shipped on 3 September. Ramp’s latest cut has Astra at about 13% of the enterprise AI spend it tracks, against about 8% for Claude Fable. OpenRouter said its users spent more on OpenAI than on Anthropic last week — the first OpenAI lead there in more than two and a half years. Some IPO investors are re-checking whether Anthropic still owns enterprise; others say incumbents do not move that fast. Anthropic’s annualised run-rate was above $65bn at the end of July; OpenAI’s had passed $40bn. Anthropic declined to comment. The next model is still a deliberation, including a safety pass.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/anthropic-considers-releasing-new-ai-model-ahead-ipo-sources-say-2026-09-19/",
      },
      {
        id: "anthropic-ipo",
        title: "The IPO talk has slipped to after the November midterms",
        body: "The same Reuters exclusive says two people familiar with the matter now have Anthropic able to push the listing past the US midterms, which they do not expect to move the book. Marketing had already been pushed to mid-October at the earliest. The new-model debate is partly about how much to spend on a release versus showing a profit path while rates are up. Altman’s line that OpenAI will not list in 2026 is still the other lab’s calendar. There is still no prospectus. The evaluator badge and the offering are now on the same autumn page.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/anthropic-considers-releasing-new-ai-model-ahead-ipo-sources-say-2026-09-19/",
      },
      {
        id: "evaluator-letter",
        title: "A hundred-plus experts set conditions the Accenture deal does not yet meet",
        body: "The AI Evaluator Forum’s Friday letter, signed in a personal capacity by Geoffrey Hinton, Stuart Russell and more than a hundred others, says an embed is only credible if the shop is not owned by the lab, does not have other significant commercial business with it, and is not paid contingent on findings. They want unfiltered board access, public release after a time-limited redaction, anti-retaliation cover, and the same systems senior internal risk staff use. Accenture already sells Claude into enterprises and will now sit inside the lab that makes it. Conrad Stosz, who chairs the forum, told CNBC the point was a shared floor, not a veto. No lab has answered the letter.",
        sourceLabel: "AI Evaluator Forum",
        sourceHref:
          "https://aievaluatorforum.org/initiatives/embedded-evaluation-letter",
      },
      {
        id: "hacktron-claude",
        title: "Hacktron used Claude to reach OpenAI’s internal GitHub",
        body: "The Wall Street Journal’s Thursday exclusive, written up Friday, has Hacktron chaining a libheif heap overflow on community.openai.com with an OpenAI SSO flaw. That took over employee ChatGPT and Codex accounts. The team prompted one employee’s Codex — already tied to the GitHub org — to open a harmless pull request in the internal openai/openai monorepo, then stopped. OpenAI paid $6,500, fixed the SSO side in about 14 hours, and told Business Insider it had narrowed Community sign-in tokens and revoked the affected sessions. Discourse was out of bounty scope. Claude Opus 5 wrote the working exploit after Opus 4.8 stalled. Saturday added no new patch note. The researcher is still the one who was in the repo.",
        sourceLabel: "Business Insider",
        sourceHref:
          "https://www.businessinsider.com/hacktron-ai-cybersecurity-startup-hack-openai-using-claude-2026-9",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月19日",
    lede:
      "隔夜帳降到20架共機、13架越線，艦卻加到11艘。賴清德昨天公布史上最晚的總預算，並批示人事費不宜刪凍。追加6076億仍未見立法院收案。電價先凍到年底，台電要的711億還在那筆追加裡。卓榮泰昨天在南竿接了台馬4號海纜。",
    stories: [
      {
        id: "pla-overnight",
        title: "隔夜帳：20架共機、13架越線，共艦11艘、公務船3艘",
        body: "國防部上午公布18日6時至19日6時動態：共機20架次，其中13架次逾越中線進入北部、中部、西南及東部空域；共艦11艘、公務船3艘，合計34機艦船。示意圖拆成三路：海峽11架、4架越線；西南7架主、輔戰機；東部2架直升機及無人機。前一日同一口徑是28架、24架越線、7艦2公務船。機少了；艦和公務船都加了。昨天沒有另開一筆聯合戰備警巡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609190025.aspx",
      },
      {
        id: "budget-published",
        title: "總預算昨天公布，賴清德批示人事費不宜刪凍",
        body: "總統府18日發布總統令，公布115年度中央政府總預算，郭雅慧說這是史上最晚。公布案另有兩點批示：憲法保障服公職工作權，人事費用是法定經費，立法院不宜刪減或凍結；公布前各機關依預算法第54條執行的經費屬合法支出，允為妥適處理。潘孟安已函致五院。立法院8月14日三讀時凍結了卓榮泰9月至12月薪資，並刪除不當黨產處理委員會政務人員待遇。七大冊17日才送到政院。公布落筆了；批示是另一張紙。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609180271.aspx",
      },
      {
        id: "extra-budget-wait",
        title: "追加6076億仍未見立法院收案",
        body: "院會9月3日通過的115年度追加預算，歲出6076.3億，總預算都公布了，迄今天上午仍沒有立法院已收追加案的報導。李慧芝昨天就電價審議會決議再喊一次，請各黨團盡速排審。案裡仍是中油增資、中東民生安定、提升防衛作戰與軍職待遇1456.9億。國防部要的無人機與彈藥，還卡在那道手續上。主預算生效了；追加案還沒進議程。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/125022/9764067",
      },
      {
        id: "taipower-freeze",
        title: "電價凍到年底，台電全年估虧逾711億",
        body: "經濟部昨天開今年第2次電價費率審議會，決議優先爭取政府撥補711億，本次暫不調整，留待12月第3次會併審輸配電費率，新費率最快明年1月1日。應有調幅12.83%，每度應到4.2675元。中東戰事後油價在每桶68至132美元間晃，台電3至8月已吸收燃料成本約711億；截至7月虧214億，賴建信說全年將超過711億。沒有戰事，審議會認為台電有機會維持盈餘。撥補寫在追加預算的穩定民生項下。費率凍了；那711億還沒進立法院。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202609180272.aspx",
      },
      {
        id: "matsu-cable",
        title: "台馬4號海纜昨天啟用：近300公里，容量到1.9Tbps",
        body: "數發部昨天在南竿白馬王公園辦完工啟用典禮，卓榮泰、林宜敬到場。第4海纜串聯台灣本島、東引、西莒及南竿，全長近300公里，加入後整體傳輸容量約1.9Tbps，與台馬2號、3號及微波、衛星構成備援。卓榮泰的句子是「備援還要再備援」，禁得起天災與人為侵擾。他還提到海纜7法修正，作為面對不法入侵的執法依據。中華電信說工程投入近14億。海纜接上了；維運才開始算。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202609180106.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "19 Sep 2026",
    lede:
      "The BOJ’s 1.25% print is a day old; Ueda called it a new policy phase and still would not aim the rate at the yen; the dollar finished the briefing nearer 157.70; the extra Diet is dated 5 October; and the food-tax hole is still a year-end sentence.",
    stories: [
      {
        id: "jp-boj-hike",
        title: "The BOJ raised the policy rate to 1.25% — 7–2, Asada and Sato dissented",
        body: "Friday’s two-day meeting lifted the uncollateralized overnight call rate from 1% to 1.25%, a 31-year high and the first hike in three months. Toichiro Asada and Ayano Sato, both Takaichi appointees, voted no. The statement said wholesale inflation remains elevated, business-to-business pressure is spilling into consumer prices, and underlying inflation is approaching 2% with a risk of overshoot. Ueda told the afternoon presser the policy phase has changed, and that the board should not rule out 50-basis-point or back-to-back moves if prices demand it. The print is inside the bank’s 1.1–2.5% nominal-neutral range. Reuters’ poll still has 1.5% by end-March and 1.75% in the second quarter of 2027.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/boj-raises-interest-rates-31-year-high-widely-expected-move-2026-09-18/",
      },
      {
        id: "jp-yen",
        title: "The yen sold through 157; Ueda said the rate is not a currency tool",
        body: "Reuters timed the dollar at ¥156.91 right after the announcement; Kyodo had it a yen higher, into the lower 157s, a two-week high. By the end of Ueda’s briefing the yen was around 157.70 per dollar. CNBC’s Friday close had the Nikkei 225 up 1.5% and the 10-year JGB yield slipping — the opposite of a textbook hike. Ueda told Kyodo monetary policy is not aimed at stabilising currency moves. Asada had cited core still under 2%; Sato said activity and prices had not accelerated enough. There was no new joint-intervention statement. The receipt is 1.25%. The rate finished weaker.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/18/japan-rate-hike-stocks-rise-bond-yields-yen-fall.html",
      },
      {
        id: "jp-cpi",
        title: "August core CPI printed 1.7% — below 2% for an eighth month",
        body: "The internal-affairs ministry’s Friday 8:30 print had core CPI, fresh food out, up 1.7% year-on-year after 1.8% in July, against a 1.8% median forecast. The BOJ’s preferred gauge, fresh food and energy out, was 1.9%. Jiji noted a 60-month streak of gains, rice down 15.7%, and electricity cheaper after subsidies resumed; food excluding fresh items rose 2.7%, a thirteenth month of slowing. Headline was unchanged at 1.9%. The data landed hours before the hike. Core is still under the target. Ueda hiked anyway on the overshoot risk. Saturday added no revision.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/japans-august-core-consumer-prices-rise-17-yryr-2026-09-17/",
      },
      {
        id: "jp-extra-diet",
        title: "The extra Diet is dated 5 October — Kihara told the party Friday",
        body: "Jiji said Friday that Kihara informed the LDP’s Lower and Upper House Diet-affairs chairs the extraordinary session will be convened on 5 October, with Takaichi’s policy speech that day and party-leader questions from the 7th to the 9th. It is the first Diet after Thursday’s reshuffle. The government and Ishin want the food-tax bills and a Lower House seat-cut bill through. The calendar is no longer a source. The offset for the tax cut still is.",
        sourceLabel: "Jiji",
        sourceHref: "https://jen.jiji.com/jc/eng?g=eco&k=2026091800657",
      },
      {
        id: "jp-food-tax-hole",
        title: "The food-tax hole is still unnamed; the bills now have a Diet date",
        body: "The two-year cut in the food consumption tax from 8% to 1% from April 2027 can be tabled on 5 October. Tuesday’s tax package said the lost revenue would not be covered by deficit-financing bonds, with sources to be named by year-end. Jiji’s Thursday readout puts the cut plus benefits at about ¥5tn a year; Kyodo has called the hole roughly ¥10tn. After the cabinet, Takaichi said the outlook was “firmly in place” and that people need not worry. Katayama stays at finance. The session is dated. The offset still is not on the page.",
        sourceLabel: "Jiji",
        sourceHref: "https://portal.ijamp.jiji.com/portal/news/detail/2026091701217",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "19 Sep 2026",
    lede:
      "Kim Seung-won withdrew this morning, the second cabinet pick to go this month; Cheong Wa Dae said Friday’s Hormuz ceiling was not a rejection of Trump; Gallup has Lee at 37% and 56% against; and the special-counsel clause and the reelection sentence are still where he left them.",
    stories: [
      {
        id: "kr-kim-out",
        title: "Kim Seung-won withdrew — second cabinet pick to go this month",
        body: "The justice nominee told a National Assembly press conference this morning that after deep deliberations he would step aside, a day after Lee said he had not reached a final conclusion and would weigh capabilities against public expectations. “I accept with a heavy heart that I did not meet the people’s expectations and will deeply reflect on my shortcomings.” Cheong Wa Dae said it respected the decision. Kim has denied illegally lobbying the food-and-drug ministry in 2021 to speed a COVID-19 trial. Thursday the Democratic Party adopted his confirmation report over a People Power walkout. Yong Hye-in withdrew last Sunday rather than drop her Assembly seat. Both chairs are now empty.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260919001252315",
      },
      {
        id: "kr-hormuz",
        title: "Cheong Wa Dae: the Hormuz ceiling is not a no to Trump",
        body: "A presidential official told reporters Saturday that Lee “did not turn down Trump’s request for Korea’s cooperation on Middle East-related issues” on Friday, after the New York Times read the press conference as a rejection. Seoul is still reviewing “practical ways to contribute” with the United States and others, under the principle of not intervening in a war or combat. Friday’s line stands: no dispatch of troops that would mean engagement in a conflict; Cheonghae has already widened its area; an on-site team is back from the UAE. The ceiling did not move. The audience for the clarification is Washington.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/politics/20260919/cheong-wa-dae-says-lees-no-war-intervention-remark-not-a-rejection-of-trumps-hormuz-request",
      },
      {
        id: "kr-gallup",
        title: "Gallup: Lee 37%, disapproval 56%, housing then personnel",
        body: "Gallup Korea’s Friday poll, 1,002 adults from Tuesday to Thursday, has the president at 37% approve — down one point, a fourth straight post-inauguration low — and 56% disapprove, up five, a 19-point gap. Among critics, real estate is 20%; personnel 16%; the economy 9%. Housing has led the complaint list since late July; appointments moved into second after the late-August list. The Democratic Party rose two points to 40%; People Power fell two to 27%. Margin ±3.1 points. Kim’s withdrawal arrived the morning after the print. The land and finance nominees are still in the queue.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/lees-approval-rating-falls-to-new-low-of-37-percent-gallup-korea/12881988",
      },
      {
        id: "kr-reelection",
        title: "Lee on Friday: no reelection, and the Constitution would bar it anyway",
        body: "He told Yeongbingwan he has “no intention to seek reelection,” and that reelection through a constitutional revision is constitutionally impossible because a change to the presidential system would not apply to the incumbent. He still called the current charter outdated and wanted an amendment by consensus. The opposition had demanded the sentence. The Gallup print that morning was already in the mid-30s. Saturday’s withdrawal does not rewrite that answer.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260918001551315",
      },
      {
        id: "kr-special-counsel",
        title: "The special-counsel bill still has the indictment-cancellation clause",
        body: "Lee asked the Assembly on Friday to delete transfer-and-disposition language from the Democratic Party’s bill on alleged fabricated indictments under Yoon, so a special counsel “focus[es] solely on finding the truth.” The opposition reads those clauses as a route to drop his own charges. He still wants a special counsel, and said agencies under him should not run it. No indictment has been cancelled. The paper is still in the Assembly. The justice chair that would have sat over ordinary prosecutions is vacant as of this morning.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260918001555315",
      },
    ],
  },
];

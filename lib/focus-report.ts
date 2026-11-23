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
    updatedAt: "23 Nov 2026",
    lede:
      "US futures bounced and Asia kept selling, with Tokyo shut for the holiday; Pachocki put OpenAI’s internal perplexity curve on the internet and asked the labs for a speed limit they have not signed; Anthropic closed Friday at $88.91 against Nvidia’s worst week in 18 years; Reuters said the SEC is looking at Nvidia’s books; and Kress still has no Huang return.",
    stories: [
      {
        id: "asia-selloff",
        title: "US futures bounced; Asia was still selling; Tokyo was shut",
        body: "Reuters’ Monday morning note called November bruising for the AI trade, with Taiwan, South Korea and the United States staring at steep monthly losses and little sign the chip selloff was done. Investors are asking whether borrowed money spent on data centres will generate returns fast enough to repay lenders. Jensen Huang is still gone; Democrats take the House and Senate in January; US futures bounced after last week’s wipeout while selling continued in Asia, thinned by Japan’s holiday. South Korea’s finance minister reiterated plans to stabilise the market if necessary. Taiwan’s regulator has tightened short-selling. Goldman’s Tony Pasquariello said the market had “shown its hand regarding its dependency on the AI story.” The next numbered catalyst on the Reuters list is Wednesday’s PCE print. Friday’s close is still the last US print: Nvidia $125.53, down 14%; Anthropic $88.91, down 8.5%.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/morning-bid-ai-caramba-5044369",
      },
      {
        id: "pachocki-perplexity",
        title: "Pachocki published the curve and asked for a limit the labs have not signed",
        body: "OpenAI’s chief scientist, Jakub Pachocki, posted the lab’s internal held-out log-perplexity numbers on Sunday: GPT-3.5 about 0.99, GPT-4 about 0.91, and “losses below 0.8” coinciding with what he called transformative results in cybersecurity and mathematics. A model at about 0.76, he wrote, began producing “groundbreaking” answers to open maths problems in a single Slack thread; he thinks a similar avalanche in pretraining research is “conceivable” as soon as 2027. He wants a shared perplexity metric and “common limits” the labs would not cross until monitoring reaches a concrete milestone, such as a successor to chain-of-thought monitors. He flagged the next window at about 0.68–0.7. Altman, via TechCrunch, called the post “the most important thing OpenAI has published in a while.” The numbers are OpenAI’s. The stop is still an ask.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/perplexity-and-intelligence/",
      },
      {
        id: "ant-worst-week",
        title: "Anthropic’s record IPO met the Nasdaq’s worst week since 2020",
        body: "Anthropic raised $93.5 billion in the IPO and another $26 billion from chip and cloud buyers at the $83 offer. The stock opened at $111.50 on Thursday, when CNBC put the market cap at $1.8 trillion, and closed Friday at $88.91. Nvidia fell 23% on the week, its sharpest weekly drop in 18 years; the Nasdaq fell 10%, its worst week since early Covid. At Friday’s close CNBC had Anthropic’s fully diluted value at $1.6 trillion, behind six US companies. Menlo and Lightspeed each held about $25 billion at the offer; Bessemer about $10 billion. OpenAI is looking at 2027. Huang’s departure still has no successor named in the piece. The listing happened. The tape did not wait.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/11/21/anthropic-ipo-tech-selloff.html",
      },
      {
        id: "nvidia-sec",
        title: "Reuters: the SEC’s Nvidia probe is looking at the accounts",
        body: "Two people briefed on the matter told Reuters that SEC enforcement staff are scrutinising potential accounting issues at Nvidia. The Journal had reported a probe on Tuesday without naming the focus. The SEC declined to comment; Nvidia did not immediately respond. Reuters could not say when the inquiry opened or which issues are in scope, and noted that investigations are not evidence of wrongdoing. Nvidia was down more than 6% on Friday before the report and about 13% after it, per LSEG. The piece ties the accounting question to last year’s shift to reporting geographic revenue by customer headquarters, which removed Singapore from the breakdown after the FT said Singapore sales had approached half of global revenue. Circular AI financing is in the same file; Kress said on the earnings call the company would be “far more selective.” The books are the new sentence. The finding is not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/5f374b32b07b/world/us-secs-nvidia-probe-is-examining-potential-accounting-issues-sources-say-2026-11-20/",
      },
      {
        id: "two-nvidias",
        title: "Kress says the shop is fine; H200 to China is off; Huang is still out",
        body: "TechCrunch’s Saturday Equity tape called it a tale of two Nvidias: an earnings beat and guidance that “in every possible way” looked strong, and a public campaign to bring Jensen Huang back. Interim chief Colette Kress said Nvidia would no longer sell H200 chips in China, in parallel with Washington closing remote-access routes through places such as Malaysia. Critics put China-linked demand as high as 20% of the business; that is their figure, not a line in the accounts. Current executives told investors they had it; Musk and others were still circulating a petition; Huang has said he is prepared to return. Nvidia’s public line, the hosts said, is that a return is not happening. Jones said the same after the call last week. The quarter is still Huang’s. The next one is not.",
        sourceLabel: "TechCrunch",
        sourceHref: "https://techcrunch.com/2026/11/21/a-tale-of-two-nvidias/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月23日",
    lede:
      "共機從周日的24架次掉到6架次，5架越中線，12艘共艦。金管會今天起平盤下禁空，國安基金說已經進場。卓榮泰下午3時見公協會。普發2萬到今天上午還沒副署。九合一還有五天。",
    stories: [
      {
        id: "pla-bulletin",
        title: "6架次共機、5架越中線、12艘共艦",
        body: "國防部統計22日上午6時至23日上午6時，偵獲共機6架次，其中5架次逾越中線進入西南及東部空域，以及共艦12艘，國軍以任務機、艦及岸置飛彈系統監控應處。周日公報是24架次共機、17架次越中線侵擾中部與西南、11艘共艦、1艘公務船，另有2顆空飄氣球。飛機少了18架次；艦多了1艘。空域從中部、西南收到西南、東部。氣球這份公報沒寫。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88318",
      },
      {
        id: "fsc-short",
        title: "禁空令今天上路，國安基金說已經進場",
        body: "金管會23日起實施強化禁空：全面禁止平盤以下放空，上市櫃股票與台灣存託憑證的融券及借券賣出不得低於前一營業日收盤價，最低融券保證金成數由130%提高到150%，並暫停受理認售權證發行。國安基金21日說，11月6日臨時委員會議授權後已進場護盤。台股20日跌2393.60點、6.23%，收36033.29點，史上第三大收盤跌點，成交8788億元；費城半導體跌10.73%。三大法人20日賣超509.41億元。夜盤台指期再跌1881點。令從今天算；盤還在寫。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202611230015.aspx",
      },
      {
        id: "cho-meeting",
        title: "卓榮泰下午3時見金融、科技與工商公協會",
        body: "行政院發言人李慧芝22日晚說，卓榮泰近日已數次聽取財經首長報告，23日下午3時將邀集國內金融業、科技及工商產業公協會代表會面，「展現政府持續維護投資人對國內經濟發展信心」。中央社23日中午仍用這則預告，沒有會後稿。會面是行程；讀出還沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611220203.aspx",
      },
      {
        id: "cash-countersign",
        title: "普發2萬到今天上午，卓榮泰還沒副署",
        body: "國民黨立委王鴻薇今天說，她上周已要求卓榮泰表態要不要副署普發2萬特別條例，直到23日上午仍無回應。她說卓是在賭九合一：民進黨選得好，就可能以違憲為由不副署。條例20日以50票對46票三讀；行政院收到法案後尚未宣布副署或不副署。選後表態的時間還在；副署沒寫下來。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/125074/9896144",
      },
      {
        id: "election-cash",
        title: "羅智強：2萬能不能發，看28日的票",
        body: "中國時報今天寫，立法院20日三讀普發2萬特別條例，民眾能否領到錢仍有變數。國民黨立委羅智強22日說，只有選票能讓執政黨轉彎，11月28日九合一是關鍵。黨團書記長許宇甄要求卓榮泰若已打定主意不副署，應在投票前公開說明。政院的1萬元方案仍綁在明年總預算、實質零舉債。票在周六；副署還可以再等。",
        sourceLabel: "中國時報",
        sourceHref: "https://www.chinatimes.com/newspapers/20261123000482-260120",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "23 Nov 2026",
    lede:
      "Suzuki said the food-tax bill matters more than keeping Seki; the minister added three parties on Friday and still will not go; the CDPJ wants a censure as soon as Tuesday after the holiday; Tokyo was shut for Labor Thanksgiving; and the hole in the tax cut is still unnamed.",
    stories: [
      {
        id: "suzuki-seki",
        title: "Suzuki: pass the bills first; Seki is the obstacle",
        body: "LDP secretary-general Shunichi Suzuki, in Morioka on Saturday, put the food-tax cut and the 45-seat proportional cut above the fate of education minister Yoshihiro Seki. “It is crucial to eliminate as many obstacles as possible to the enactment of the bills. We will make decisions based on that,” he said, with the opposition signalling a Senate censure. He also said it was “not good that we have to supplement answers given in the Diet outside the Diet,” and that Seki “has not yet won public understanding.” Yuichiro Tamaki said the handling, including the thin explanation, warrants a censure, and told Seki to step down himself so the bills are not disrupted. The session still ends 12 December. The minister is still in the chair.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/22/japan/politics/ldp-replacing-scandal-minister/",
      },
      {
        id: "seki-three-more",
        title: "Seki added three parties and said there was “no legal problem”",
        body: "On Friday the education minister told reporters that Cabinet Office and Fair Trade Commission officials had attended three more of his 2024 fundraisers, on top of the two METI and health-ministry briefings he had already admitted. Admission was ¥90,000. Representatives of pharmaceutical and other firms were in the room. He said he would stay, and that general explanations to businesses were lawful even where a ministry and a company had a stake. Junya Ogawa called him unfit. A senior LDP member told Kyodo a Senate censure would likely pass and that Seki should be replaced quickly. A censure is not binding; the opposition can still walk out of any sitting that includes him. Yana is already gone. Seki would be the second.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261121/p2g/00m/0na/004000c",
      },
      {
        id: "censure-tuesday",
        title: "The CDPJ will decide a censure as soon as Tuesday",
        body: "Yoshitaka Saito, the Constitutional Democrats’ Diet-affairs chair, told Yomiuri on Saturday that the party was “no longer in a phase where we can simply wait for Seki’s explanation” and that his answers had been “nearly false testimony.” After the three-day holiday the party intends to consult other opposition benches and decide as soon as Tuesday. A censure in the Senate, where the ruling camp is a minority, can pass. A party executive said Saturday there was “no benefit to protecting Seki”; another said it was the bill or the minister, and that the choice was the prime minister’s. Takaichi is still waiting on the opposition and on the polls. The holiday ends. The motion is not in the hopper yet.",
        sourceLabel: "The Japan News / Yomiuri",
        sourceHref:
          "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/23/in-japans-ldp-calls-grow-for-education-minister-to-resign",
      },
      {
        id: "food-tax-calendar",
        title: "The food-tax bill is still a Senate problem for early December",
        body: "The government and coalition still want the consumption-tax cut on food enacted in the Senate by early December. The extra Diet runs to 12 December. The ruling camp is a minority in the upper house; a censure that pulls the opposition out of sittings with Seki would hit that calendar. The offset is still unnamed. Suzuki listed the 45-seat cut as the other bill that cannot slip. The Lower House already has the supermajority. The Upper House still does not.",
        sourceLabel: "The Japan News / Yomiuri",
        sourceHref:
          "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/23/in-japans-ldp-calls-grow-for-education-minister-to-resign",
      },
      {
        id: "labor-thanksgiving",
        title: "Tokyo was closed; the rest of Asia kept selling",
        body: "Monday is Labor Thanksgiving Day. Reuters said trading in Asia was thinned by the Japanese holiday while selling in tech and chips continued, with US futures the only bounce after last week’s wipeout. The yen and the Nikkei have no Tokyo fix to print. The food-tax committee does not sit. Seki’s next explanation is not today. The Senate calendar starts again tomorrow.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/morning-bid-ai-caramba-5044369",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "23 Nov 2026",
    lede:
      "Choi’s resignation landed Sunday; the Kospi tripped a second sidecar and printed 4,211 before noon; the finance minister had already called an emergency meeting; Cheonghae went to subcommittee, not the floor; and Lee Yong-cheol’s hearing is tomorrow.",
    stories: [
      {
        id: "choi-resigns",
        title: "Lee accepted Choi’s resignation over the CSAT scramble",
        body: "Education Minister Choi Kyo-jin stepped down Sunday. He said last-minute anti-AI rules before Thursday’s Suneung had inconvenienced the public, and that “as the minister in charge, I believe I cannot escape criticism that we failed to prepare in advance.” Cheong Wa Dae said President Lee Jae Myung accepted the offer about an hour later and later formally approved it, instructing Prime Minister Han Seong-sook to take full responsibility for follow-up, including after the exam. The successor will go through due process. Test-takers were limited to pencils; clothing buttons were covered with stickers; three nationwide disaster alerts went out for uncollected phones. The ministry on Friday counted 111 suspected electronic-device cases. Choi, 72, had told parliament he could not be 100 percent sure AI cheating would be caught “because of my age.” The chair is empty. The name is not in.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261122001052315",
      },
      {
        id: "kospi-sidecar",
        title: "A second sidecar: Kospi 4,211, down 5.11% at 11:34 a.m.",
        body: "Korea Exchange halted program trading in Kospi names for five minutes from 11:33 a.m. on Monday, the second consecutive session a sell-side sidecar has fired. The trigger is the Kospi 200 futures index down 5% or more for at least a minute. At 11:34 a.m. the Kospi was 4,211.00, down 248.96 points, or 5.11%, tracking Wall Street on AI-sector fears. That is an intra-day print, not a close. Friday’s close was 4,869.96, down 5.21%, the first finish below 4,900 in about ten months. The circuit is the fact. The close is still being written.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261123001900320",
      },
      {
        id: "stabilization-sunday",
        title: "Sunday’s emergency meeting: a fund on standby, buybacks from Tuesday",
        body: "Finance Minister Lee Hyoung-il chaired a Sunday meeting with Bank of Korea Governor Shin Hyun-song, FSC Chairman Lee Eog-weon and FSS Governor Lee Chan-jin. They agreed to prepare immediate activation of the market-stabilisation fund if needed, ease daily volume limits on corporate buybacks for three months from Tuesday, and step up illegal short-selling surveillance for three months. Short sales on Kospi and Kosdaq from 2 November to Thursday totalled ₩21.6tn; foreigners were ₩16.21tn, or 75.1%. PPP floor leader Jung Jeom-sik had already warned on Facebook of a “Black Monday.” Taiwan’s FSC tightened shorts from Monday; Seoul is still wary of an MSCI developed-market hit. The fund is ready. It has not been named as deployed.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/economy/20261122/kospi-rout-fuels-calls-for-bolder-stabilization-measures",
      },
      {
        id: "cheonghae-committee",
        title: "Cheonghae went to subcommittee; the floor is the 26th",
        body: "The National Defense Committee on Monday referred a revised Cheonghae deployment to the bill subcommittee, with a full-committee sitting listed for the 26th. The motion would run the unit through the end of 2027, double the operating area from about 600 nautical miles in the Gulf of Aden to about 1,200 south of Oman — Seoul Economic Daily puts that 650 kilometres from the Strait of Hormuz — and raise personnel by 75 to a maximum of 395, adding a P-8, an EOD team and unmanned mine kit. Defence Minister Kang Shin-chul said pirate activity in the Aden area had more than tripled and that the unit would not fight the US–Iran war. People Power’s Lim Jong-deuk said the ministry had told him there were no pirate cases in the expanded area. Democratic Party floor manager Kim Byung-joo said he would attach a supplementary opinion requiring Assembly consent even after a war if patrol aircraft went to Hormuz. The Progressive Party picketed. The floor vote is not today.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/11/23/defense-panel-takes-up-plan-to-double-cheonghae-units",
      },
      {
        id: "lee-yong-cheol",
        title: "Lee Yong-cheol arrived at the prep office; the hearing is Tuesday",
        body: "Justice-minister nominee Lee Yong-cheol walked into the Songpa temporary office on Monday, a day before the National Assembly confirmation hearing. Asked whether he would direct prosecutors to cancel the president’s indictment, he said he would “speak in detail at the hearing” and stopped. He did not answer questions on the special-counsel law. PPP floor leader Kim Tae-kyu called the nomination a route to “self-indictment cancellation” and said Lee must forswear that at Tuesday’s sitting. Democratic Party spokesperson Shin Hyun-young said the hearing should test policy, not powers not yet used. The chair has been empty since August. The answers are listed for tomorrow.",
        sourceLabel: "Aju Press",
        sourceHref: "https://www.ajupress.com/view/20261123164870978",
      },
    ],
  },
];

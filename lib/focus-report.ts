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
    updatedAt: "24 Nov 2026",
    lede:
      "Huang is CEO again, Nvidia jumped 31.48% and the Nasdaq 6.51%; Anthropic sat the rally out at $87.64; Claude can now approve a pull request if the policy file says so; OpenAI put a chat-tuned GPT-6.2 in Plus and Pro; and Cisco joined a Linux shield that blocked a Java4Shell attempt without a restart.",
    stories: [
      {
        id: "huang-return",
        title: "Huang is CEO again; Nvidia had its best day since 2003",
        body: "Nvidia’s board reinstated Jensen Huang on Monday morning, twelve days after he resigned. The stock rose 31.48%, adding back nearly $1 trillion of market value, its best session since May 2003. The Nasdaq Composite gained 6.51%, its best day since 9 April 2025, after last week’s 10% slide. Alphabet rose 6.34%, Meta 6.55%, Arm 16.08%, CoreWeave 22.32%. President Trump told CNBC he had spoken to the board and “convinced” it to bring Huang back; last week’s sell-off, he said, “probably” shaped his support, and Huang “did nothing wrong.” The chipmaker is back under the founder. The week is not.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/11/23/anthropic-nvidia-shares.html",
      },
      {
        id: "ant-sits-out",
        title: "Anthropic closed $87.64 and sat the rally out",
        body: "ANT fell to $87.64 on Monday, 5.6% above the $83 IPO price, after a brief premarket bounce. Nvidia led the rebound. The lab did not. Bloomberg’s print is the dollar close, not a rating, and not a greenshoe.",
        sourceLabel: "Bloomberg Law",
        sourceHref:
          "https://news.bloomberglaw.com/capital-markets/anthropic-shares-churn-defying-ai-trade-rally-on-huangs-return",
      },
      {
        id: "claude-ship",
        title: "Claude Ship: an agent can approve the pull request",
        body: "Anthropic on Monday launched Claude Ship, a suite that reviews, patches and, if the team’s policy file allows it, approves routine GitHub changes. Code Review is generally available; PR Steward and Claude Approvals are in beta on Team and Enterprise plans. Steward watches failing CI, merge conflicts and review comments, then writes what it changed and how to roll it back. Approvals read a natural-language policy in the repo. The lab wants observe-only first, one repository, and a monthly spend cap. “On the Claude Code team, Claude writes most of our code, and we wanted everything after the PR to move that fast too.” A person can still be the last click. The new option is that the person is optional.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/",
      },
      {
        id: "gpt-62-chat",
        title: "GPT-6.2 in Chat is a 23 November build for Plus and Pro",
        body: "OpenAI’s system card, dated Monday, is a chat-tab GPT-6.2 for Plus and Pro, labelled GPT-6.2 (November 23). It meets Critical on cybersecurity and High on bio/chemical and on self-improvement under the Preparedness Framework, with the same Bio, Cyber, Alignment and Distillation safeguards as Astra and Sol. The lab says it posted the strongest overall safety performance of any chat model it has deployed on evaluations. The thresholds are the card. The rollout is Plus and Pro.",
        sourceLabel: "OpenAI",
        sourceHref: "https://deploymentsafety.openai.com/gpt-6-2-chatgpt",
      },
      {
        id: "shirudo",
        title: "OpenAI and Cisco open-sourced a shield that does not need a reboot",
        body: "Shirudo, Japanese for shield, is an eBPF runtime that loads a signed, operator-approved filter on a running Linux box while the patch is still in transit. In a controlled test, a Codex-generated shield attached an input check to Java’s Base64 decoder on a live Elasticsearch process and blocked a Java4Shell exploit without a restart. Shields are TPM-attested; the kernel verifier still has to accept the program. The code is BSD 2-Clause, BPF bits dual-licensed BSD/GPL. Greg Brockman: finding a bug today “doesn’t mean you can patch every system tomorrow.” The operator still loads it. The model writes the filter.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-shirudo",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月24日",
    lede:
      "三架共機全越中線、九艘共艦，西昌火箭二十六日要過識別區；台股收四萬一百二十二點，一天三千三百一十點；金管會說限空令不因一天大漲就撤；國民黨把普發副署押在二十八日的票上；卓榮泰昨說國安基金還有餘裕，規模願檢討。",
    stories: [
      {
        id: "pla-bulletin",
        title: "三架共機全越中線、九艘共艦；西昌火箭二十六日過識別區",
        body: "國防部統計二十三日上午六時至二十四日上午六時，偵獲共機三架次，全部逾越中線進入西南及東部空域，另有共艦九艘。國軍以任務機、艦及岸置飛彈系統監控應處。國防部並指出，中共預計二十六日在西昌衛星發射中心執行運載火箭發射，朝西太平洋飛行並經過台灣防空識別區。三架都過了線。火箭是預告，還不是軌跡。",
        sourceLabel: "聯合報／中央社",
        sourceHref: "https://udn.com/news/story/10930/9897830",
      },
      {
        id: "twse-close",
        title: "台股收40122.35點，一天漲3310.46點",
        body: "台北股市今天終場漲3310.46點，收40122.35點，成交4194.05億元。十二月台指期收40324點，漲3665點，正價差201.65點。黃仁勳回來的那一夜，現貨把四萬點寫回去。限空令還在。",
        sourceLabel: "經濟日報／中央社",
        sourceHref: "https://money.udn.com/money/story/11112/9898675",
      },
      {
        id: "fsc-stays",
        title: "金管會：不會因為一天上漲就撤救市措施",
        body: "第三波措施昨天上路：全面禁止平盤以下放空，融券保證金成數調至150%。證交所今天把融資擔保維持率從130%降至120%。金管會官員說，還要看國際與台股漲跌、政經情勢和交易數據，「不會因為台股一天上漲就暫停救市措施」；維持率還得等券商改系統。九日起三波：借券上限先3%再1%，再全面禁平盤下空。指數回來了。空單規則沒有。",
        sourceLabel: "經濟日報",
        sourceHref: "https://money.udn.com/money/story/5613/9898356",
      },
      {
        id: "kmt-endorsement",
        title: "國民黨：不副署，十一月二十八日的票就是人民的副署",
        body: "國民黨文傳會主委陳以信今天公布催票影片，點名十一月二十日三讀的普發兩萬特別條例，要行政院盡快表態副署。「如果行政院不願副署，十一月二十八日我們手上的選票，就是人民的副署。」他說不副署是蔑視人民、不肯還稅於民，並把股市這兩週的跌勢寫進同一句。老農津貼提到一萬五千元也已三讀，他說政院「可能同樣不副署」——那是預測，不是新的公文。副署權還在行政院。投票日是四天後。",
        sourceLabel: "Newtalk",
        sourceHref: "https://newtalk.tw/news/view/2026-11-24/1073424",
      },
      {
        id: "nsf-scale",
        title: "卓榮泰：國安基金能量有餘裕，規模願正面檢討",
        body: "行政院長卓榮泰昨天下午與產業及金融界座談。他說國安基金已進場，目前能量仍有餘裕，但立法院與外界要隨股市規模調整，政院願樂觀正面地全面檢討。金管會禁平盤下空、提高融券保證金，證交所把融資維持率從130%降到120%，都在同一場被點名。經濟部長龔明鑫說前三季經濟成長率14.22%，並把昨天收盤約漲780點算進措施效果。規模還沒改。基金已經在買。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611230170.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "24 Nov 2026",
    lede:
      "Six Upper House parties agreed to censure Seki and to sit out the food-tax bill until he goes; Saito left the filing date to himself; Seki said he would stay; the session still ends 12 December with no majority in that chamber; and the Nikkei closed 58,644.63 after a US holiday.",
    stories: [
      {
        id: "seki-censure",
        title: "Six Upper House parties agreed to censure Seki",
        body: "The Diet affairs chiefs of six opposition parties in the Upper House met on Tuesday and called Education Minister Yoshihiro Seki unfit. He has admitted that health and industry officials briefed donors at two 2024 fundraisers at ¥90,000 a head, then revised his Diet answers to add three more parties. They said he had given false answers and could not, in those circumstances, take part in deliberations on the consumption-tax cut. CDPJ Diet affairs chief Yoshitaka Saito said requests that Seki resign or be replaced had “unfortunately gone unheeded,” so they would file together. He will watch the government before naming the day. The motion is not yet on the table. The six are.",
        sourceLabel: "NHK",
        sourceHref: "https://www3.nhk.or.jp/nhkworld/news/20261124de80595/",
      },
      {
        id: "food-tax-boycott",
        title: "The food-tax bill is now a boycott until Seki goes",
        body: "Saito told reporters the six would “unite and submit a censure motion,” and that timing sits with him. “Now that we have confirmed the plan to submit (the motion), we’ll be cautious about all Diet deliberations for the time being.” Jiji reads that as a refusal to sit on key bills, including the food-tax cut, unless Seki resigns or is replaced. The motion has a mover. It does not yet have a date.",
        sourceLabel: "Jiji",
        sourceHref: "https://jen.jiji.com/japan/politics/2026112400536/",
      },
      {
        id: "seki-stays",
        title: "Seki apologised again, and said he would stay",
        body: "The education minister told reporters on Tuesday he was “very sorry,” would explain the fundraisers in the Diet and at news conferences, and would keep the job. Nikkei/Kyodo has him saying he intends to fulfil his responsibilities “with renewed discipline.” Bunshun Online reported on Monday that political funds paid the rent on a Kobe condominium he used as a residence between 2009 and 2012, when he was out of the Diet. He would not comment on an article he had not confirmed; he said the unit was both office and residence, and that he could “unequivocally declare” it was not used as a residence alone. The opposition asked him to go. He answered the lease.",
        sourceLabel: "NHK",
        sourceHref: "https://www3.nhk.or.jp/nhkworld/news/20261124de80600/",
      },
      {
        id: "upper-house-clock",
        title: "The censure can pass; the tax cut still needs that chamber",
        body: "Saito said the motion could be filed “within this week.” The opposition has an Upper House majority; a censure is not legally binding, but Kyodo says adoption would disrupt deliberations and complicate the food-tax bill. Takaichi’s coalition lacks a majority there and needs opposition votes before the extra Diet ends on 12 December. Yuichiro Tamaki on Sunday told Seki to decide whether to resign, and asked the prime minister for a “political decision.” No such decision landed on Tuesday. The calendar is the one that can still kill the cut.",
        sourceLabel: "Nikkei Asia / Kyodo",
        sourceHref:
          "https://asia.nikkei.com/politics/japan-opposition-parties-to-submit-motion-to-censure-scandal-hit-minister",
      },
      {
        id: "nikkei-close",
        title: "The Nikkei closed 58,644.63, up 3.91%",
        body: "Tokyo was shut on Monday for Labor Thanksgiving. On Tuesday the Nikkei 225 rose ¥2,207.98, or 3.91%, to 58,644.63, after a US session in which Nvidia’s reinstatement of Huang lifted the major averages. AI and chip names led; the index was up more than ¥2,800 at the high. The print is versus Friday, not versus a Monday close that did not happen.",
        sourceLabel: "Nikkei",
        sourceHref:
          "https://www.nikkei.com/article/DGXZQOFL244LH0U6A121C2000000/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "24 Nov 2026",
    lede:
      "Russian jets entered KADIZ near Ulleung and the alerts named the wrong country; the Kospi closed 5,006.03, up 6.32%; Lee Yong-cheol sat his confirmation hearing; Kim Yo-jong told Switzerland the new Pyongyang office had lost its reason to exist; and Cheonghae is still a 26 November committee vote.",
    stories: [
      {
        id: "kadiz-alert",
        title: "Russian jets in KADIZ; the alert said North Korea, then airspace",
        body: "Several Russian warplanes entered the Korean air defence zone over the East Sea early Tuesday, approached Ulleung Island and left. The JCS said it had fighters up before they crossed the line, that the jets came very close to territorial airspace, and that they did not enter it — contrary to an interior-ministry mobile alert that called an air raid and told people into shelters. That alert was lifted in three minutes. North Gyeongsang then messaged that the warning was over and called the planes suspected North Korean aircraft; a correction followed about forty minutes later. The defence ministry said it planned to call in a Russian diplomat later in the day. The planes left. The first two texts did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261124002251315",
      },
      {
        id: "kospi-close",
        title: "Kospi closed 5,006.03, up 6.32%",
        body: "The index added 297.49 points to 5,006.03 after a high of 5,065.74, recovering a two-day rout on Huang’s return. A buy-side sidecar halted program-trading buy orders for five minutes at 9:06 a.m., the trigger being KOSPI 200 futures up at least 5% for a minute. Overnight the Dow rose 3.01% and the Nasdaq 6.51%. The 4,211 intra-day print from Monday is no longer the last number. Five thousand is.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261124006700320",
      },
      {
        id: "lee-hearing",
        title: "Lee Yong-cheol sat the hearing; consent is not required",
        body: "The justice nominee told the National Assembly he would “make sure the new criminal justice system is stably established” and that there would be “no gaps in the protection of the public.” Prosecutors lost their investigative powers last month; he said they should concentrate on indictment and rights. President Lee named him on 6 November, from the defence-procurement agency, after Jung Sung-ho left in August. By law every Cabinet nominee gets a hearing; only the prime minister needs Assembly consent. The chair is still empty until the president signs.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261124003800315",
      },
      {
        id: "kim-swiss",
        title: "Kim Yo-jong: the Swiss office in Pyongyang has “lost justification”",
        body: "KCNA carried a statement from Kim after Switzerland sanctioned the Songdowon International Children’s Camp, days after Foreign Minister Ignazio Cassis opened Switzerland’s first diplomatic office in Pyongyang. She called the sanctions an “open hostile act” and a “serious infringement” of sovereignty, and “surprisingly mean” so soon after a visit that had “committed to dialogue.” The office, she said, had “spontaneously lost justification for its existence.” She would advise the foreign ministry “to strictly examine the issue of withdrawing the Swiss diplomatic office from Pyongyang in a few days.” Britain and the EU sanctioned the camp earlier this year. The office opened. The threat is to close it.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261124001100315",
      },
      {
        id: "cheonghae",
        title: "Cheonghae: subcommittee today, full committee the 26th",
        body: "The National Defense Committee on Monday referred a revised motion to double the Cheonghae Unit’s operating area — Gulf of Aden to waters south of Oman, about 1,200 nautical miles, 650 km from Hormuz — and sent it to the legislative-review subcommittee for the 24th, with a full committee on the 26th. The cap would rise by 75 to 395, plus a P-8, an EOD team and unmanned mine kit, through the end of next year. Kang Shin-chul said pirate activity in the Gulf of Aden had “more than tripled”; Lim Jong-deuk said the ministry had told him there were no such cases in the expanded area. Kim Byung-joo wants a supplementary opinion that Hormuz entry needs a separate Assembly vote “even after the war ends.” Kang said the war Korea will not join is one between Iran and the United States; coming under fire, he said, is “a different matter.” The floor date is still the 26th. The strait is still not in the box.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/11/23/defense-panel-takes-up-plan-to-double-cheonghae-units",
      },
    ],
  },
];

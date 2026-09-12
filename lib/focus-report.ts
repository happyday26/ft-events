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
    updatedAt: "12 Sep 2026",
    lede:
      "Friday’s safety thread settled on recursive self-improvement. Christiano’s board sentence is still the one that travelled. Anthropic’s Thursday report is the other pile: Chinese labs distilling Claude at industrial scale, a Yemen cell putting the model on missile firmware, and a Russian actor whose agents rewrite the malware when the antivirus catches it.",
    stories: [
      {
        id: "ai-rsi",
        title: "The week’s safety row is now about recursive self-improvement",
        body: "CNBC’s Friday piece is the RSI cut of the same staff thread that started when Coxon quit. Hubinger, answering himself, said what he is worried about is superintelligence from recursive self-improvement, “happening faster than we thought.” Jasmine Wang of OpenAI alignment called speeding toward it hard to overstate. Anna Wang of Anthropic AGI safety said there is not yet a viable scientific plan to solve it. Both labs have said autonomous model improvement is ahead of their own forecasts; Anthropic’s August note had engineers shipping eight times as much code per quarter as in 2021–25. Anthropic still calls a human-in-control path “likely.” The third scenario is full RSI with humans in a “substantially diminished role.” That is the one the staff are posting about.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/11/anthropic-openai-ai-existential-concerns.html",
      },
      {
        id: "ai-christiano",
        title: "Christiano: the industry, including OpenAI, is not on track",
        body: "OpenAI named Paul Christiano to the Foundation board on Wednesday and made him a non-voting observer on the Group PBC board. He sits on the Safety and Security Committee with Zico Kolter. He used to run alignment at the lab, then advised Commerce’s CAISI. His note said there is a meaningful risk rapid acceleration leads to “catastrophic and irreversible loss of control in the very near term,” and that he does not think “the AI industry in general, including OpenAI, is currently on track to reduce this risk to an acceptable level.” The appointment is the governance story. The sentence is still the one that travelled.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/sep/10/openai-risk-catastrophic-loss-control-board-member-paul-christiano",
      },
      {
        id: "ai-distill",
        title: "Anthropic: Alibaba, Moonshot and DeepSeek distilled Claude at industrial scale",
        body: "Thursday’s threat report, written up Friday, says seven China-based labs ran illicit distillation — feeding Claude outputs into their own training — between December and August. Alibaba’s Qwen pool was the largest Anthropic has measured: more than 151 million exchanges from May to July, peaking near three million a day across more than 3,500 fraudulent accounts. Moonshot silently forwarded Kimi-customer requests to Claude, almost 300,000 in ten days through 5,380 accounts, mostly appearing in Singapore and Japan, and pulled the reasoning traces; May–July attributed volume is over 23 million. DeepSeek tagged users on Claude Code-style harnesses and routed selected ones to Opus: more than 12.1 million exchanges in 14 days in July. Some of those sessions held PLA CCTV from Chengdu, live credentials for a Russian defence database, and a Chinese public-security case system. Alibaba, Moonshot, DeepSeek and Xiaomi had not commented to CNBC.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/11/chinese-ai-labs-moonshot-deepseek-alibaba-anthropic.html",
      },
      {
        id: "ai-weapons",
        title: "A Yemen cell put Claude on missile firmware; a China case flipped the map to Taiwan",
        body: "The same report’s first conventional-weapons chapter names six disrupted cases. In northern Yemen, GTG-87001 used Claude Code as the software bench for three programmes: a phone-class guided rocket, a multi-stage missile with a stated range above 2,000 km, and an “R2000” set with a hypersonic-glide variant. Several instances ran in parallel so no single session showed the intent. A live rocket test failed; within hours they were back asking why. Anthropic has no evidence an operational weapon was fielded. A China-based actor, GTG-17002, built about 16 electronic-warfare and air-defence-suppression modules, then changed the default simulation to 12 targets in Taiwan — a command bunker, an early-warning radar, Patriot and Tien Kung batteries, air bases, a combatant headquarters. Accounts were banned. The offline toolkits were not.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/threat-intelligence-report-september-2026",
      },
      {
        id: "ai-midnight",
        title: "A Russian actor’s agents rewrite the malware when the antivirus catches it",
        body: "GTG-20006, whose tradecraft Anthropic says is consistent with public reporting on Midnight Blizzard, ran AI workflows from phishing through exfiltration against more than 20 organisations — ministries, intelligence services, embassies, defence contractors — concentrated on Ukraine and Europe, with a side-interest in drone supply chains. When security products flagged an implant, monitoring agents modified and rebuilt it until it slipped past, then staged it from disposable hosts. They stole a complete proprietary SDK for a drone vision system, hijacked hotel-guest Wi-Fi at three hospitality vendors, and in one North African government intrusion pulled more than 300,000 national-identity records. Humans still set the targets. The rewrite loop is what changed the cost.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/threat-intelligence-report-september-2026",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月12日",
    lede:
      "卓榮泰昨天下午在嘉義把副署收成一句原則：不能違憲違法，也不能破壞權力分立與財政紀律。同一天他再點名559億無人載具追加預算。國防部今早印出15機艦船。高金素梅用戒嚴回應國安線。總預算函文仍未到院。",
    stories: [
      {
        id: "drone-cho-chiayi",
        title: "卓榮泰：副署只有一個原則，政院要A立院給B",
        body: "行政院長昨天下午在嘉義城隍夜巡前受訪，把上午已完成的副署收成一句：討論副署與否只有一個標準及原則，就是不能違憲、違法，不能破壞權力分立及財政紀律。院版要的是長單、長約的特別條例；立法院三讀的是年度預算，「非常遺憾，行政院要A，立法院給B。」他說六年2,400億、每年原則400億應屬建議性質，可由政院視需要增加，經濟部主產業、國防部主軍用採購，從這兩點看無違憲之虞，已在法定期限內副署。總統令昨天公布。條例過了。採購權還在年度預算裡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609110171.aspx",
      },
      {
        id: "extra-budget-plea",
        title: "卓榮泰再點559億：條例過了，追加預算請立院盡快過",
        body: "嘉義同一場聯訪，卓榮泰說政院已提無人載具559億元等追加預算，與條例精神一致，期盼立法院盡快審議通過。上午秘書長張惇涵已用大谷翔平十年長約比喻院版特別預算；立法院既決定走年度預算，「那就希望立法院屆時能如期如質審議」。他並稱上週已送出今年度追加預算，無人載具559億攸關不對稱戰力。條例是原則。559億還要一筆一筆過。立法院有沒有簽收，仍沒有單獨函文。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609110053.aspx",
      },
      {
        id: "pla-overnight",
        title: "國防部：昨日6時迄今，7架次共機、5架次進入北部及西南，合計15機艦船",
        body: "國防部12日上午：自昨天上午6時至今天上午6時，偵獲共機7架次，其中5架次進入北部及西南空域，以及6艘共艦、2艘公務船，總計15機艦船。示意圖寫昨天中午12時50分至下午1時，防空識別區內北部空域1架主戰機；昨天上午8時5分至9時25分，台灣海峽2架次主戰機；昨天上午10時15分至下午3時40分，西南空域4架次主、輔戰機及無人機。國軍以任務機艦及岸置飛彈應處。前天是11機、10架次越中線的21機艦船。副署之後的第一個週末，中線沒有空下來。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609120026.aspx",
      },
      {
        id: "kao-martial",
        title: "高金素梅：助理羈押讓她想起用共諜罪名壓異己的戒嚴時代",
        body: "無黨籍立委高金素梅昨透過臉書說，高檢這幾天另以國安名義羈押辦公室主任及前助理，讓她想起風聲鶴唳、用「共諜」罪名壓迫政治異己的戒嚴時代。高院已裁准公費助理林怡君、國會辦公室主任陳智葟羈押禁見兩個月。高檢查出前主任張俊傑等人涉收中國資金、在台發展組織；張6日剪斷電子手環棄保，法院通緝。高金說扁桃腺剛開刀、少言休養，對案情變化感到意外、沉重，並要媒體少做沒有依據的揣測，是非曲直按證據說話。她本人是否知情，檢方仍說待釐清。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609110121.aspx",
      },
      {
        id: "cho-salary-freeze",
        title: "政院：凍卓榮泰四個月薪水違釋字601；總預算迄10日仍未送到",
        body: "立法院8月14日三讀115年度總預算，凍結行政院長9月至12月薪資。發言人李慧芝10日院會後說，這是用年度預算審議影響院長行使憲政職權，違反釋字601號，逾越立院權限與權力分立，並牴觸預算法第52條第1項但書。院長是法定職位，俸給依待遇支給要點，屬法定經費。她加了一句：今年只剩3.5個月，總預算案至今尚未送至行政院，收到後再審慎研議。迄週六上午，沒有函文到院的新稿。三讀29天了。追加預算在等一本還沒送到的總預算。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609100106.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "12 Sep 2026",
    lede:
      "The LDP signed off the food-tax package yesterday; Cabinet is still Tuesday. Jiji’s Saturday write-up has the BOJ at 1.25% next week. Katayama told Friday’s briefing the joint-intervention stance with Washington has not moved. The 10-year spent Friday at 2.985%.",
    stories: [
      {
        id: "jp-ldp-food-tax",
        title: "The LDP approved the food-tax cut; Cabinet is still Tuesday",
        body: "Jiji: a joint meeting of the party’s tax and social-security commissions on Friday approved the reform package, with Cabinet approval expected Tuesday. Food consumption tax from 8% to 1% for two years from April 2027, plus an early benefit for low- and middle-income workers equal to the remaining point, so food is effectively zero for them. The benefit programme goes to full scale in April 2029, paid every autumn; in fiscal 2029, when the rate returns to 8%, there would be two payments, April and autumn. Local governments accepted the measures yesterday morning and agreed to keep talking about the details. The bill is meant for the extra Diet this autumn. The party has now written the cut. The offset is still the conversation with the prefectures.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref: "https://www.nippon.com/en/news/yjj2026091100154/",
      },
      {
        id: "jp-boj-jiji",
        title: "Jiji, Saturday: 1.25% next week, the highest in about 31 years",
        body: "The Japan Times carried Jiji this morning: informed sources said Friday the Bank of Japan plans to raise the policy rate to 1.25% at the meeting that starts Thursday, a level last seen in April 1995, three months after June’s move to around 1.0%. Underlying inflation is approaching 2%; oil, a weaker yen and AI-related demand are the upside risks the bank is answering. Lending is still rising, so holding here risks an overshoot. Ueda said in Asheville on 2 September that a hike would be “fully discussed” at every meeting, including the next one. Bessent has kept asking for an early move to steady the yen. Reuters’ four sources on Friday had the same 25 basis points, no preset terminal, and a board split between hawks who think 2% is already here and doves like Asada, who dissented in June.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/09/12/economy/boj-interest-rate/",
      },
      {
        id: "jp-katayama-yen",
        title: "Katayama: the joint-intervention stance with Treasury has not changed at all",
        body: "The finance minister told her regular briefing Friday that Tokyo will keep talking to Washington to keep the foreign-exchange market orderly. “Our policy stance has not changed at all since Japan and the United States conducted the coordinated intervention and issued a joint statement.” She would “maintain close communication with the U.S. Treasury.” Asked about Bessent’s warning to those betting against the yen, she called it “a pretty direct expression of his market views, which is very much what you’d expect from someone with a hedge fund background.” The July operation is still the line. Next week’s hike is the other one.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/japan-maintain-close-communication-with-us-currency-markets-katayama-says-2026-09-11/",
      },
      {
        id: "jp-jgb-friday",
        title: "The 10-year closed in on 3% again Friday as oil sold the bond market",
        body: "Bloomberg, via CNBC, had JGBs slumping with Treasuries after Middle East tension lifted oil. The 10-year yield climbed 7.5 basis points to 2.985%; the 20-year rose seven basis points to 3.82%. Eiichiro Miura at Nissay said overseas yields and inflation fears mean Japan’s 10-year “may rise above 3%,” and that a BOJ signal next week of two hikes by year-end would be “positive for longer-maturity JGBs.” The 10-year first printed 3% on 1 September, the first time since 1996. It did not hold. Friday’s print is the oil invoice, not a new fiscal speech.",
        sourceLabel: "Bloomberg / CNBC-TV18",
        sourceHref:
          "https://www.cnbctv18.com/market/bonds/japans-bond-yields-jump-as-crude-oil-concerns-fuel-global-selloff-19989012.htm",
      },
      {
        id: "jp-boj-watchers",
        title: "Bloomberg’s 52 watchers all have a hike on 18 September",
        body: "A Bloomberg survey out Friday morning had all 52 BOJ watchers forecasting a rise at the end of the two-day meeting on 18 September. Ninety-three per cent see another move by January; about a third pick December, the rest January. Nobody has a back-to-back hike in October. That is a faster normalisation than the last round of these surveys, and it sits next to Reuters’ sources saying the governor will not pre-commit a pace. The September step is the consensus. The January one is the argument.",
        sourceLabel: "Bloomberg",
        sourceHref:
          "https://www.bloomberg.com/news/articles/2026-09-11/boj-watchers-see-follow-up-hike-by-january-after-september-move",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "12 Sep 2026",
    lede:
      "Gallup’s Seoul cut is 29%, below Daegu–North Gyeongsang. Yeongdeungpo questioned the second complainant in the Kim file this morning. The Democratic Party is now gathering opinions on Yong. Han called the leak probe a fang. Cheong Wa Dae is still shopping a presser for next week.",
    stories: [
      {
        id: "kr-gallup-seoul",
        title: "Gallup’s Seoul cut: Lee 29%, nine points down in a week, below TK",
        body: "Seoul Economic Daily’s Saturday read of Friday’s Gallup, 1,000 adults from the 8th to the 10th, has the president at 29% positive in Seoul and 60% negative. Daegu–North Gyeongsang is 34 and 54. Seoul’s positive is five points lower than the conservative heartland; the negative is six points higher. A week earlier Seoul was 38%; TK did not move. Nationwide the print was 38% approve, 51% disapprove — the first Gallup in the 30s since he took office. On Kim Seung-won, Seoul has 15% fit and 51% unfit, eight points more negative than the country. On Yong Hye-in, Seoul is 14 and 67. The nominees have not sat yet. The capital already has.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/12/lees-approval-falls-faster-in-seoul-than-in-conservative",
      },
      {
        id: "kr-kim-saturday",
        title: "Yeongdeungpo questioned the second Kim complainant this morning",
        body: "The station summoned Kim Soon-hwan, secretary-general of the Committee for the People’s Livelihood, as a complainant on Saturday, a day after former Seoul councillor Lee Jong-bae. Before going in, Kim told reporters the case was “directly linked to the people’s right to life,” and that he would file more if today’s questions left gaps. The complaint says the justice nominee, then a lawmaker, asked then-commissioner Kim Kang-lip in 2021 to hurry Genencell’s COVID trial. Prosecutors suspended indictment in December 2024; police say they will reopen only if new evidence appears. Kim Seung-won has said he will explain at the 15 September hearing. The witnesses for that hearing are still postponed.",
        sourceLabel: "Nocutnews",
        sourceHref: "https://en.nocutnews.co.kr/news/6577125",
      },
      {
        id: "kr-yong-dp",
        title: "The Democrats are now gathering opinions on Yong; the hearing is still undated",
        body: "Party spokesman Park Sung-joon, in Cheongju on Friday, said the leadership was “urgently gathering assessments” and viewing the matter “sternly, from the standpoint of the public.” Rep. Park Kyoun-taek had already asked whether she should decline; Rep. Kim Nam-kuk called Thursday’s 35-minute point-by-point rebuttal a fight with the public. Blue House spokesperson Kang Yu-jung said a nominee should be allowed to explain herself, and that the office is listening. Yong has no weekend fixtures and is preparing at home. The confirmation request went in on the 3rd; the statutory deadline is the 22nd. Democrats still talk 16–18 September; People Power still wants the 21st. MK on Saturday listed every other shuffle hearing and left hers blank. She is still the nominee without a day.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/12/ruling-party-voices-turn-on-gender-equality-minister",
      },
      {
        id: "kr-han-leak",
        title: "Han: the leak probe is a fang; trains run even when dogs bark",
        body: "Independent lawmaker Han Dong-hoon wrote on Facebook Saturday that he had never seen police move this fast on “a single political complaint with no specific content and no grounds,” and asked whether they had “decided to become the fangs of the Democratic Party men.” Yeongdeungpo will question DP lawmaker Kim Dong-a as complainant on Sunday. Kim filed over Han’s release of a prosecution “indictment plan” from the 2024 Genencell file, citing disclosure of official secrets and the personal-information and public-records laws. Police will decide after that interview whether to call Han. He said Kim Min-seok was barking without biting, and that he would “keep going, looking only at the people.” The justice nominee’s old file is now two investigations.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/12/han-dong-hoon-blasts-police-probe-trains-run-even-when-dogs",
      },
      {
        id: "kr-presser",
        title: "Cheong Wa Dae is still shopping a presser; Yong’s hearing is the item on the desk",
        body: "SED’s Saturday piece says the Blue House is giving strong consideration to a presidential briefing as early as next week, with attention now on what Lee does about Yong. There has been no change in the line that her hearing will proceed; a shift depending on public opinion is not ruled out. Kang Yu-jung’s Friday briefing left the nominee a chance to explain herself and said the office was listening. The presser is still not dated. The hearing is not either.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/12/ruling-party-voices-turn-on-gender-equality-minister",
      },
    ],
  },
];

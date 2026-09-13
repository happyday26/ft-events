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
    updatedAt: "13 Sep 2026",
    lede:
      "Amodei spent Saturday writing that the labs must slow the rate at which they improve models. Altman and Musk agreed in public. Altman also told Fortune that an OpenAI listing this year would be ill-advised. The only unilateral step on the page is badges for outside evaluators.",
    stories: [
      {
        id: "ai-amodei-pace",
        title: "Amodei: we must slow the pace at which we improve the models",
        body: "Saturday’s essay, “We Must Pace the Frontier,” says two things changed his mind: recursive self-improvement since roughly this summer, including at Anthropic, and the OpenAI–Hugging Face swarm, which he treats as a fanatically devoted collective that attacked targets it was not asked to touch. A similar swarm in six to twelve months, he writes, could take over the internet with a persistent botnet and do hundreds of billions of dollars of damage. Pacing is not a halt. It is time to align, and for third parties to confirm it. The 2023 pause talk, he says, made little sense when models could not yet act as agents.",
        sourceLabel: "Dario Amodei",
        sourceHref: "https://darioamodei.com/post/we-must-pace-the-frontier",
      },
      {
        id: "ai-evaluators",
        title: "The only commitment is desks, badges and laptops for METR-class reviewers",
        body: "Step one is embedded evaluators with employee-like access to training pipelines, not just finished models. Anthropic is “unilaterally committing”: office desks, badges, company laptops, and permissions mostly comparable to internal risk teams, with a contract that lets reviewers publish findings without editorial control, subject only to narrow redactions. Altman wrote that independent evaluators with employee-like access was “a great idea, and we will do the same,” with more to share soon. Step two is common standards among labs in democracies, which Amodei says needs a narrow US antitrust waiver. Step three is talking to authoritarian governments about narrow bans, including biological weapons. None of that is signed.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/09/12/anthropic-ceo-outlines-plan-to-pace-the-frontier/",
      },
      {
        id: "ai-altman-musk",
        title: "Altman: I agree we need to pace the frontier. Musk: Dario is right",
        body: "The OpenAI chief said the subject has been a “primary topic of discussions we’ve had at OpenAI in recent weeks.” Musk, whose SpaceX now owns xAI and has a compute deal with Anthropic, posted three words. On CNN later Saturday, Amodei added the other half: if the labs go too slow, “the wrong people will be in charge of the technology.” Sarah Heck, Anthropic’s policy lead, used the same day to ask Congress for a chip ban on adversarial states and a national testing law with the power to block unsafe frontier models. Three rivals agreed on a sentence. The schedule is still the one they ship.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/12/anthropics-amodei-proposes-plan-to-slow-the-pace-of-advancing-ai-capabilities.html",
      },
      {
        id: "ai-openai-ipo",
        title: "Altman to Fortune: not 2026. An IPO now would be ill-advised",
        body: "In a Friday sit-down published Saturday, Altman told Alyson Shontell that given everything happening with safety, “right now would be an ill-advised moment to go public, and we don’t feel pressure on that.” Pressed on 2027, he said “not 2026,” because the lab has “a lot of stuff to do” on safety, alignment, and how industry and governments work together. He said OpenAI needs to be able to make decisions that are not obviously in the interest of shareholders, including pauses at new capability levels. The New York Times had already had the company leaning into 2027 in June, after SpaceX’s listing. Saturday is the first time the chief has taken 2026 off the table in his own words.",
        sourceLabel: "Fortune",
        sourceHref:
          "https://fortune.com/2026/09/12/sam-altman-openai-ipo-delay-ill-advised-moment-safety-concerns/",
      },
      {
        id: "ai-china-gap",
        title: "The China clause: chips, distillation, and a 3–5 year lead",
        body: "The essay’s condition for any slowdown is that democracies keep their lead. Amodei says do not sell powerful chips or semiconductor tools to China, crack down on smuggling and remote access, stop unauthorised distillation, and harden weight security. Done well, he writes, that would slow China’s progress enough to widen America’s lead over the next three to five years — the window he calls geopolitically most important. Thursday’s threat report already had Alibaba, Moonshot and DeepSeek on industrial-scale Claude distillation. Saturday turns that into the price of pacing. Bessent’s line that a Chinese lead would be grave danger is the one he quotes.",
        sourceLabel: "Dario Amodei",
        sourceHref: "https://darioamodei.com/post/we-must-pace-the-frontier",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月13日",
    lede:
      "竹北藍白合破了。柯文哲今天要黃國昌和鄭麗文先善後，說彰化大勢已去、新竹縣難救，新北、高雄、宜蘭不要等閒視之。國防部今早印出5艦2公務船、3架次共機。藍白昨天拿其餘8案要卓榮泰同一套副署。",
    stories: [
      {
        id: "zhubei-ko",
        title: "柯文哲：竹北破局先善後，彰化大勢已去，新北高雄宜蘭恐外溢",
        body: "民眾黨創黨主席今天上午在台北市議會受訪，談竹北市長選舉藍白合破局。他說政黨合作不必每個環節都百分之百，偶爾會踢到鐵板，但出事要趕快善後，兩週前已一再要黃國昌、鄭麗文處理。他現在想的已不是竹北或新竹縣，而是外溢；拖著不解決可能失控。台北選情他稱相對穩定。彰化縣「大勢已去」，新竹縣「大概也很難挽救」，新北市、高雄市、宜蘭縣恐受波及，「不要等閒視之」。美麗島電子報12日民調：藍白未整合，吳旭智29%、曾聖凱25.2%、邱臣遠17.4%。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609130048.aspx",
      },
      {
        id: "pla-sunday",
        title: "國防部：昨日6時迄今，5艘共艦、2艘公務船，3架次侵擾西南及東部",
        body: "國防部13日上午：自昨天上午6時至今天上午6時，偵獲5艘共艦、2艘公務船及5架次共機，其中3架次侵擾西南及東部空域，持續在台海周邊活動。國軍以任務機艦及岸置飛彈應處。前天同一口徑是7架次共機、5架次進入北部及西南，加6艦2公務船，合計15機艦船。週末兩天的數字往下走。中線沒有空下來。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609130022.aspx",
      },
      {
        id: "countersign-eight",
        title: "藍白：無人機條例副署了，其餘8個三讀案是否同一套",
        body: "卓榮泰11日副署《強化國防自主暨無人載具產業發展條例》。民進黨團書記長范雲12日說尊重政院決定，國防急迫，要藍白按時審議年度預算。國民黨團書記長許宇甄說副署本是行政院長該遵守的憲政程序，其餘尚未副署的法案也應儘速依法處理；559億無人載具放進追加預算，正好證明不必把特別預算常態化。民眾黨團問：過去8個不副署的三讀法案，「是否也應該儘快副署、公布執行」，不能兩套標準。條例過了。另外8案還在桌上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609120143.aspx",
      },
      {
        id: "jiang-hsu",
        title: "江宜樺：覆議失敗後不副署是百分之百毀棄憲法",
        body: "台北政經學院基金會12日「總統直選30年」研討會。前行政院長江宜樺說，覆議遭立法院維持原決議後，行政院「應即接受該決議」；如今再用院長不副署擋法案，是「違憲、違法」、「百分之百毀棄憲法」。副署權寫在總統專章，原意是節制總統，如今拿來對抗立法院，是「非常奇怪的錯位」。前民進黨主席許信良同意副署權不是用來否決國會，但說在野若干增加支出、減少收入、更動憲政機關的法案本身已違反憲政精神在先，才形成「以違憲對違憲」。他要的是大和解，不是馬基維利時刻。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609120123.aspx",
      },
      {
        id: "hsiao-ventotene",
        title: "蕭美琴在文托泰內島：台灣有權利交朋友、和朋友說話",
        body: "副總統11日晚以主賓身分出席義大利文托泰內島第二屆「歐洲自由與民主論壇」，同行有外交部長林佳龍，行程抵義後才公布。她說花了27小時、空陸海才到，「台灣人跟全世界人民一樣，有權利交朋友、和朋友說話。」會場夜空忽然放煙火，有聽眾用義大利文問是不是中國來了；她說希望是慶賀。中國已向義大利及歐盟嚴正交涉。歐洲議會副議長皮齊耶諾說歐洲議會的議程絕不會由北京決定，並稱已接受邀請、近期訪台。這是她近一年第二次訪歐。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609120007.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "13 Sep 2026",
    lede:
      "Speculators flipped net long the yen for the first time since February. Jiji still has the BOJ at 1.25% on Thursday. The food-tax package is still a Tuesday cabinet. The shuffle is still the week after that.",
    stories: [
      {
        id: "jp-yen-long",
        title: "Speculators are net long the yen for the first time since February",
        body: "Reuters, Sunday, on Friday’s CFTC tape: non-commercial yen futures were net long 10,796 contracts in the week to 8 September, a reversal from net shorts of 92,227 the week before, and the first overall long reading since 24 February. The dollar printed ¥152.89 on the 8th, the strongest yen since 17 February. The tape is pricing a faster BOJ and some repatriation. The yen had gone to ¥163.99 in July, a four-decade low, before Tokyo and Washington bought it. Takaichi’s election last October is still the fiscal story the shorts had been running. They are no longer short.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/speculators-turn-net-long-yen-first-time-since-february-2026-09-13/",
      },
      {
        id: "jp-boj-jiji",
        title: "Jiji, Saturday: 1.25% this week, the highest in about 31 years",
        body: "The Japan Times carried Jiji yesterday: informed sources said Friday the Bank of Japan plans to raise the policy rate to 1.25% at the meeting that starts Thursday, a level last seen in April 1995, three months after June’s move to around 1.0%. Underlying inflation is approaching 2%; oil, a weaker yen and AI-related demand are the upside risks the bank is answering. Lending is still rising, so holding here risks an overshoot. Ueda said in Asheville on 2 September that a hike would be “fully discussed” at every meeting, including the next one. Bessent has kept asking for an early move to steady the yen. The sources are not a vote.",
        sourceLabel: "The Japan Times / Jiji",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/09/12/economy/boj-interest-rate/",
      },
      {
        id: "jp-ldp-food-tax",
        title: "The food-tax cut is still a Tuesday cabinet",
        body: "Jiji: a joint meeting of the LDP’s tax and social-security commissions on Friday approved the reform package, with Cabinet approval expected Tuesday. Food consumption tax from 8% to 1% for two years from April 2027, plus an early benefit for low- and middle-income workers equal to the remaining point, so food is effectively zero for them. The benefit programme goes to full scale in April 2029, paid every autumn; in fiscal 2029, when the rate returns to 8%, there would be two payments, April and autumn. Local governments accepted the measures on Friday morning and agreed to keep talking about the details. The bill is meant for the extra Diet this autumn. The party has written the cut. The offset is still not on the page.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref: "https://www.nippon.com/en/news/yjj2026091100154/",
      },
      {
        id: "jp-shuffle",
        title: "The shuffle is still 16–17 September, after Tuesday’s tax cabinet",
        body: "Kyodo’s sources last Wednesday had Takaichi finalising the LDP executive lineup on the 16th and the Cabinet on the 17th, with an extraordinary Diet from 5 October. Jiji’s earlier note said the whole calendar assumes Tuesday’s food-tax cabinet; if that slips, the personnel moves wait until after she goes to the UN General Assembly late this month. It would be her first shuffle since taking office last October. Motegi, Katayama, Koizumi and Kihara are still the names expected to stay. The tax cut is the gate. The UN trip is the backstop.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/84514",
      },
      {
        id: "jp-boj-watchers",
        title: "Bloomberg’s 52 watchers all still have a hike on 18 September",
        body: "A Bloomberg survey out Friday morning had all 52 BOJ watchers forecasting a rise at the end of the two-day meeting on 18 September. Ninety-three per cent see another move by January; about a third pick December, the rest January. Nobody has a back-to-back hike in October. Reuters’ four sources on Friday had the same 25 basis points and no preset terminal. The September step is the consensus. The January one is the argument. Sunday did not add a dissent.",
        sourceLabel: "Bloomberg",
        sourceHref:
          "https://www.bloomberg.com/news/articles/2026-09-11/boj-watchers-see-follow-up-hike-by-january-after-september-move",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "13 Sep 2026",
    lede:
      "Yong Hye-in withdrew this morning, 14 days after the nomination. The Democratic Party had asked her to decide. The fight is now Kim Seung-won’s, and his hearing is Tuesday. Hormuz is still a fact-finding report for Thursday’s NSC, not a troop order.",
    stories: [
      {
        id: "kr-yong-out",
        title: "Yong withdraws: 14 days as nominee, no hearing date, then out",
        body: "The Basic Income Party’s only lawmaker announced at the National Assembly this morning that she was standing down as gender-equality minister. “I am withdrawing from consideration as gender equality minister today.” She had meant to keep the proportional seat if appointed, which the custom does not allow; she said resigning it would leave her party with no member in the house. Gallup’s Friday poll, 1,000 adults from the 8th to the 10th, had 61% calling her unfit and 13% fit; even Democratic supporters were 51 and 26. The statutory window ran to the 22nd. The parties had never agreed a day. She is no longer the nominee without one.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260913001351315",
      },
      {
        id: "kr-dp-yong",
        title: "Kim Min-seok recommended she go; Cheong Wa Dae ‘respects her decision’",
        body: "Rep. Kim Tae-seon, chief of staff to the Democratic leader, wrote on Facebook that he had passed on Kim Min-seok’s recommendation to withdraw after taking the public mood into account. Holding the seat and the ministry was not illegal, he said, but it “did not fully meet public expectations and sentiment.” Yong said the party had asked her to decide, and that she could not bridge the Assembly and the government if even the ruling party had concerns. Senior presidential spokesperson Kang Yu-jung, within an hour, said the office respected a decision Yong had made herself “to minimize the burden on state affairs and people’s livelihoods,” and that vetting would have to meet public expectations. The Blue House had spent Friday saying a nominee should be allowed to explain herself.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10871566",
      },
      {
        id: "kr-kim-next",
        title: "The opposition now wants Kim Seung-won. His hearing is Tuesday",
        body: "People Power’s Choi Bo-yun called Yong’s exit “only the beginning” and named the justice nominee “next in line.” The party wants Lee to withdraw him. The Democrats, having cleared Yong, held a joint press conference with Rebuilding Korea and the Progressive Party to call the old Genencell probe a politically targeted investigation. Hearings start Monday with Supreme Court nominee Kim Seong-su. Tuesday is Lee Hyeong-il, Kim Seung-won and Lee So-young; Wednesday Kang Sin-cheol and Hong Ji-seon; Thursday special inspector Choi Gil-su. Kim has said he will explain on the 15th. The witnesses for that hearing are still postponed.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10871633",
      },
      {
        id: "kr-han-probe",
        title: "The ruling bloc: Han’s Genencell file was built to reach Lee",
        body: "Legislation and Judiciary chair Suh Young-kyo and Democratic secretary Kim Eui-kyeom told a Sunday press conference that material from the 2024 food-and-drug case tried to tie Kim Seung-won to Kim Man-bae through a Suwon high-school alumni list, which they said had nothing to do with the trial. They quoted Kim saying the prosecutor had promised to “strip” him of his seat, and called it a predetermined probe under then-justice minister Han Dong-hoon aimed at then-opposition leader Lee. The hearing, they said, would put that on the record. The opposition still wants Han and the Genencell broker in the room. The Democrats still call it a closed case.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/politics/2026/09/13/ruling-bloc-says-probe-of-justice-nominee-targeted-lee-jae",
      },
      {
        id: "kr-hormuz",
        title: "Hormuz is still a report for Thursday, not a troop order",
        body: "JoongAng’s Sunday cut of Friday’s Gallup has 55% against sending troops or assets to the Strait of Hormuz and 32% for; Democratic supporters were 69% against. An NBS poll earlier in the week was 45 and 36. The UAE fact-finding team that left last weekend came back Thursday and is due to write to the National Security Council; officials have floated the standing committee this Thursday. Lee, with senior aides on Friday, did not use the word “troop deployment.” Foreign minister Cho Hyun told Yonsei’s Moon Chung-in it was “limited participation for the safety of international maritime routes.” Seong Ghi-hong has said technical support is also possible. Cho spoke to Iran’s Araghchi on Friday at Tehran’s request. There is still no order.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/koreans-oppose-hormuz-deployment-but-those-in-20s-less-resistant-polls/12871997",
      },
    ],
  },
];

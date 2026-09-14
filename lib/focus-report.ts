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
    updatedAt: "14 Sep 2026",
    lede:
      "Trump, asked on an Irish fairway whether the labs should slow down, said whoever wins AI wins. The three American labs have been meeting since July about a standards body anyway. Amodei told CBS that China is the toughest dilemma. Sacks told them to just do it. The evaluators still do not have badges.",
    stories: [
      {
        id: "ai-trump-doonbeg",
        title: "Trump in Doonbeg: whoever wins AI wins, and the rest is things that won’t happen",
        body: "Sunday, at his Ireland golf course, the president was asked if the industry should slow down or be more regulated. “We’re leading China in AI. We’re the most sophisticated country in the world, and frankly I want to keep it that way because whoever wins AI wins.” Guardrails were possible. “But I think you have a lot of very negative forces that are bringing it up that shouldn’t be bringing it up and they’re bringing up things that won’t happen.” Saturday’s essay had the CEOs agreeing on a sentence. Sunday’s answer from the White House was not a waiver.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/europe/trump-says-very-negative-forces-raising-exaggerated-concerns-over-ai-2026-09-13/",
      },
      {
        id: "ai-labs-talks",
        title: "The Information: Anthropic, OpenAI and Google have been meeting since July",
        body: "Leo Schwartz, Sunday night: the three labs have held working-group talks since July on an industry-led standards body for testing and pre-release auditing, and met as recently as last week even as White House efforts stalled. Altman has told staff that without federal backing the labs would have to build the body themselves. Hassabis already wanted a FINRA-style outfit on 14 July. Amodei wants an FAA that can block a release. The public essay was not the start of the conversation. It is still only a conversation. There is no charter, no date, and no agreement on who holds the pen.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091410164445337",
      },
      {
        id: "ai-amodei-china",
        title: "Amodei on Face the Nation: China is the toughest dilemma",
        body: "On CBS Sunday, Amodei said the long-term work is “a speed limit on the rate of AI progress,” and that the US–China contest is the hardest part of it. “We shouldn’t kid ourselves, because the incentives to pull ahead and the military advantage that you get from that are so large that the ability to check that the other side isn’t cheating has to be ironclad.” It would be “the work of years,” and “honestly, I don’t know if it’s possible.” Xi, the same day in New Delhi, called for a BRICS open-source AI community. Trump is due to see him at the White House on the 24th. The essay’s condition for pacing was that democracies keep the lead. Sunday was the admission that the third step may not exist.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/europe/trump-says-very-negative-forces-raising-exaggerated-concerns-over-ai-2026-09-13/",
      },
      {
        id: "ai-sacks",
        title: "Sacks: go ahead. Stop pretending you need anyone else’s permission",
        body: "The former White House AI czar, still a Trump science adviser, posted that if the unreleased models are scary enough, he supports OpenAI and Anthropic being responsible. Then the list: stop pretending antitrust has to be suspended so they can form a cartel; stop pretending they need a regulatory process that supersedes product liability; stop pretending METR is independent. “Demanding your preferred regulatory framework as the price of that will look like blackmail of the public and the political system. So just do it.” The labs asked for a waiver. The reply was a dare.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/13/china-dilemma-ai-slowdown-anthropic.html",
      },
      {
        id: "ai-evaluators",
        title: "Hassabis and Nadella joined the sentence. The badges are still a pledge",
        body: "Hassabis: “The details need working through, but the direction is correct for meeting this critical moment,” and pointed back to his industry standards body. Nadella: superintelligence that does not benefit humanity or stay under human control is “not worth pursuing as a core principle.” Altman’s Saturday line still stands — employee-like access is “a great idea, and we will do the same,” with more to share soon. Anthropic’s unilateral offer remains desks, badges and laptops for METR-class reviewers, with a contract to publish subject only to narrow redactions. None of that is signed. The chorus got louder. The access list did not.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091410164445337",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月14日",
    lede:
      "蕭美琴清晨返抵桃園，說即使處境再艱難，台灣都將繼續與世界同行。MQ-9B首批兩架今天在花蓮首飛。國防部今早印出6艦2公務船、2架次共機。陸委會對明天上路的中國出入境新規點了五類人。",
    stories: [
      {
        id: "hsiao-return",
        title: "蕭美琴返抵桃園：即使處境再艱難，台灣都將繼續與世界同行",
        body: "副總統10日至12日應歐洲議會副議長皮齊耶諾、歐洲議會義大利辦公室主任柯拉札之邀，到文托泰內島出席第二屆「歐洲自由與民主論壇」，林佳龍陪同；14日上午在桃園機場說，出發前未公布是為避免不必要的干擾，搭機、坐車、渡船約27小時，途中還碰上惡劣海象。她說自由是共同語言、和平是共同渴望，台灣正承受升高的軍事與灰色地帶壓力，仍將堅持自由民主生活方式。賴清德發文：走向世界是台灣不可剝奪的天賦權利。民進黨團書記長范雲上午說，民主國家交流不是由北京決定。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609140022.aspx",
      },
      {
        id: "mq9b-hualien",
        title: "MQ-9B首批兩架抵台，今天上午在花蓮基地首飛",
        body: "知情人士14日：空軍對美採購四架通用原子MQ-9B（含地面控制站），預算217億、民國111年至118年，採「兩架、兩架」分批於115、116年交付；首批已於美西時間3月17日在美國交機，近期運抵，原廠與軍方組裝測試後，今天上午在花蓮基地升空做飛行測試。空軍在115年度預算書寫的是長滯空、日夜間全時段監偵與即時傳輸，用來掌握共軍異動與台海周邊海空動態。國防院蘇紫雲先前說，在台灣的定位是提升戰場偵蒐，不是主攻武器。三月在美國交機。今天在花蓮離地。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609140053.aspx",
      },
      {
        id: "pla-monday",
        title: "國防部：昨日6時迄今，6艘共艦、2艘公務船，2架次侵擾西南及東部",
        body: "國防部14日上午：自昨天上午6時至今天上午6時，偵獲6艘共艦、2艘公務船及4架次共機，其中2架次侵擾西南及東部空域，持續在台海周邊活動。國軍以任務機艦及岸置飛彈應處。周日同一口徑是5艦2公務船、3架次進入西南及東部。機的數字往下，艦的數字往上。中線沒有空下來。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609140027.aspx",
      },
      {
        id: "mac-exit-entry",
        title: "中國出入境新規明天上路，陸委會點名五類人有風險",
        body: "中國「國務院關於出境入境管理的規定」9月15日施行。陸委會副主委沈有忠今天在座談會前受訪，示警在中的台商與台企幹部、半導體與高科技人才、基層公務員、特定宗教界人士，並要赴中者上網登錄。他說近來在中遭盤查、關押或失聯的人數上升幅度「比較異常」。中央警察大學王智盛點第4條第3項對高科技的管制，以及手機、電腦、社群可被要求提供電子證據。台北地院國安專庭法官許凱傑說，這是疊加在2023年反間諜法上的出口與技術管制，進得去也可以不准出來。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/acn/202609140096.aspx",
      },
      {
        id: "dpp-ventotene",
        title: "范雲：台灣的國際空間不是由北京單方決定",
        body: "民進黨立法院黨團14日上午就蕭美琴訪義返國開輿情回應。書記長范雲說，去年進歐洲議會IPAC、這次應皮齊耶諾之邀到文托泰內，不是要挑釁任何人，而是台灣在國際民主論壇上被認為有貢獻；此行證明副總統可以在歐洲公開發聲，民主國家之間的交流不應該由北京決定。莊瑞雄說中國打壓無窮無盡，台灣更需要走出去。中國已向義大利及歐盟嚴正交涉。皮齊耶諾先前說歐洲議會的議程絕不會由北京決定。行程低調。交涉沒停。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609140078.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "14 Sep 2026",
    lede:
      "The LDP and Ishin signed off the food-tax outline this afternoon. Cabinet is still tomorrow. Kyodo has Ishin’s secretary-general going into the Cabinet on Thursday. The yen slipped to ¥154.03. Nakamura’s May notes, released today, talk about non-linear inflation.",
    stories: [
      {
        id: "jp-food-tax-monday",
        title: "LDP and Ishin approved the food-tax outline today. Cabinet is still Tuesday",
        body: "Sankei, 14:04: Onodera and Umemura’s tax council met at the Diet this afternoon and approved a reform outline cutting the food consumption tax from 8% to 1% for two years from April 2027. After the remaining coalition paperwork, the government still means to put it to Cabinet tomorrow. The outline is the preface to a bill for the extra Diet expected in October. Friday’s LDP commissions had already written the cut, plus an early benefit equal to the remaining point for lower- and middle-income workers. Local governments accepted the measures on Friday and agreed to keep talking about the details. The party has now written it twice. The offset is still not on the page.",
        sourceLabel: "Sankei",
        sourceHref:
          "https://www.sankei.com/article/20260914-ULCTB2UYHZI5TDNKL5TOAM47LY/",
      },
      {
        id: "jp-nakatsuka",
        title: "Kyodo: Ishin’s Nakatsuka is being lined up for a Cabinet post on Thursday",
        body: "A source this morning: arrangements are being made for Hiroshi Nakatsuka, the Japan Innovation Party’s secretary-general, to enter Takaichi’s Cabinet in a reshuffle planned for Thursday — the first time the Osaka junior partner, in coalition since October, would sit inside it rather than cooperate from outside. Takaichi spent about three hours on Sunday with Kihara on the list. Hideki Murai, 46, a former deputy chief Cabinet secretary, is to become LDP Diet affairs chief on Wednesday, unusual without prior Cabinet experience. Koizumi and Motegi are still expected to stay; Kobayashi to remain policy chief. Hayashi, asked Sunday whether he stays, said that is solely for the prime minister. The tax cabinet is still the gate.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/84917",
      },
      {
        id: "jp-yen-monday",
        title: "The yen slipped to ¥154.03, still near last week’s seven-month high",
        body: "Reuters, Singapore Monday: the dollar was 0.3% firmer and the yen 0.3% weaker at 154.03, not far from the ¥152.89 print on the 8th, the strongest since 17 February. Speculators are still net long for the first time since February. MUFG: a 25-basis-point hike this week is “already almost fully priced”; further yen strength needs the bank to say it will stick to the faster pace. The yen is up 4% this month. TD Securities wants roughly a hike a quarter; failing to put another one on the table later this year risks a snap back to 157–160. The Fed is Wednesday. The BOJ vote is Friday. The tape has already bought both.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/dollar-steady-yen-near-7-month-high-ahead-fed-boj-meetings-2026-09-14/",
      },
      {
        id: "jp-nakamura",
        title: "Nakamura’s May notes, out today: do not look through frequent supply shocks",
        body: "The BOJ released conference notes on Monday from a May monetary-policy gathering. Executive director Koji Nakamura, who oversees the drafting division, said frequent supply shocks “should not be treated as transitory because they can lift underlying inflation and inflation expectations.” Japan had seen “non-linear reactions of domestic prices” to import-price and exchange-rate shocks, and a “slow-moving demographic shock” that lifts wages. Reuters’ sources still have a hike this week from the 1% June level. Jiji’s Friday sources still have 1.25%, last seen in April 1995. The notes are five months old. They are being published three days before the vote.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/boj-executive-saw-need-vigilance-non-linear-inflation-spikes-2026-09-14/",
      },
      {
        id: "jp-shuffle-calendar",
        title: "The shuffle is now named Thursday, after tomorrow’s tax cabinet",
        body: "Kyodo last Wednesday had the LDP executive lineup on the 16th and the Cabinet on the 17th, with an extraordinary Diet from 5 October. This morning’s dispatch keeps Thursday for the Cabinet and adds Nakatsuka. Jiji’s earlier note still applies: the calendar assumes Tuesday’s food-tax cabinet; if that slips, personnel wait until after the UN General Assembly late this month. It would be her first shuffle since taking office last October. Motegi, Katayama, Koizumi and Kihara are still the names expected to stay. The tax cut is still the gate. The UN trip is still the backstop.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/84514",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "14 Sep 2026",
    lede:
      "Hearings start today with the Supreme Court nominee. Yong’s is cancelled. Kim Seung-won, arriving at the prep office, said he will explain everything tomorrow. KIDD is in Busan from Wednesday. Hormuz is still not an order.",
    stories: [
      {
        id: "kr-super-week",
        title: "Seven hearings this week. Yong’s is the one that will not sit",
        body: "The Assembly’s special committee starts today with Supreme Court nominee Kim Seong-su, recommended by Chief Justice Cho Hee-dae. Tuesday is Lee Hyeong-il, Kim Seung-won and Lee So-young; Wednesday Hong Ji-seon and Kang Shin-chul; Friday special inspector Choi Gil-su. Yong withdrew Sunday, 14 days after the nomination; her hearing, the only one the parties had never dated, is cancelled. People Power wants more names off the list, Kim first. The Democrats say they will defend the rest. An aide who has worked hearings since the 18th Assembly told Asiae there is more controversy this time than at Lee Hye-won’s budget hearing at the start of the year, and the sessions have not begun.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091407224933344",
      },
      {
        id: "kr-kim-tomorrow",
        title: "Kim Seung-won: I will explain everything to the public tomorrow",
        body: "The justice nominee, arriving at the Jongno prep office this morning, said he would devote the day to preparation and that 30 years as a judge, lawyer and police human-rights commissioner should help build “a new criminal justice system.” On Genencell, the 2021 food-and-drug lobbying file that ended in a December 2024 suspension of indictment, and on the rest, he said: “I will answer everything tomorrow.” The opposition still wants the case in the room. The Democrats still call it a closed probe. Key witnesses were not adopted. A People Power legislator on the committee: “Just because you don’t get a spoon doesn’t mean you skip the meal.”",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091409071199555",
      },
      {
        id: "kr-yong-vetting",
        title: "Cheong Wa Dae will pick a replacement. It has not named one",
        body: "Kang Yu-jung, within an hour of Sunday’s news conference, said the office respected a decision Yong had made herself “to minimize the burden on state affairs and people’s livelihoods,” and that vetting would have to meet public expectations. Kim Tae-seon had already posted Kim Min-seok’s recommendation to withdraw. Gallup’s Friday poll, 1,000 adults from the 8th to the 10th, had 61% calling her unfit and 13% fit; even Democratic supporters were 51 and 26. Lee’s approval was 38%, a post-inauguration low, with personnel as a reason for disapproval up to 16%. The seat is empty. The list is not.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10871566",
      },
      {
        id: "kr-ppp-defense",
        title: "People Power wants Kim out. The Democrats say the file is finished",
        body: "Park Sung-joon, the Democratic chief spokesperson, told CBS Radio that the Yoon prosecution had investigated the lobbying allegation thoroughly for three years and that “the issue will be put to rest.” The party is selling Kim as a prosecution-reform symbol. People Power says not only Kim but the other ministerial nominees should go, and will spend Tuesday on the food-and-drug file, family-business questions, and indictment withdrawals. Inside the ruling party there are still calls to fix the appointment process and talk more with the Blue House. Yong was the first resignation. The hearings are the test of whether she is the last.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091407224933344",
      },
      {
        id: "kr-kidd",
        title: "KIDD is in Busan Wednesday to Friday. Hormuz is still not on the communiqué",
        body: "The defence ministry said Monday that the biannual Korea–US Integrated Defense Dialogue will sit in Busan from Wednesday, led by deputy minister Kim Hong-cheol and US deputy assistant secretary George Lemeur. The stated agenda is OPCON, joint posture and shipbuilding — the first KIDD outside Seoul or Washington, chosen to show the shipbuilding file. Yonhap: the allies did not specify Hormuz, but it is widely expected, after last week’s UAE survey team and Washington’s pressure. Iran has warned of “serious consequences.” Seoul still says nothing has been decided. Lee wants the FOC second-phase and a target year at this autumn’s defence chiefs’ meeting. The strait is the rumour. The port is the meeting.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260914001900315",
      },
    ],
  },
];

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
    updatedAt: "8 Oct 2026",
    lede:
      "GPT-6 with Intelligent UI reaches Free and Go today; Tuesday’s 722 math manuscripts are still from an unnamed model; Anthropic cut Haiku and opened three cyber tiers; and Huang and Nadella put local agents on Windows PCs.",
    stories: [
      {
        id: "gpt6-intelligent-ui",
        title: "GPT-6 Intelligent UI reaches Free and Go today",
        body: "OpenAI’s Wednesday post said GPT-6 with Intelligent UI — graphics, buttons, forms, charts, and on-the-spot tools — started rolling out in the Chat tab to Plus, Pro, Business and Enterprise. Free and Go get it from today. Paid tiers run GPT-6 Sol; Free and Go run GPT-6 Luna; both are tuned for everyday chat. Work and Codex are unchanged. The company says ChatGPT has more than 1.2 billion weekly users. GPT-6 Instant starts answering web-search questions 44% sooner than GPT-5.6 Instant, on an internal measure, by interleaving thinking with the reply. The system card is up.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/gpt-6-for-everyone/",
      },
      {
        id: "openai-math-722",
        title: "The 722 math papers are still unnamed, and mostly unchecked",
        body: "OpenAI posted 722 manuscripts on GitHub covering 372 open problems, from an “internal frontier model” it still will not name. Francis Johnson, who spent 25 years on Wall’s D(2) problem, told New Scientist he had given up and was “astonished.” Kevin Buzzard at Imperial said 30 of the papers touched his field, seven looked impressive, and one was formalised in Lean. The independent Advisory Group had asked for the model name, prompts, compute, failures, and formal proofs. OpenAI’s Lindsay McCallum Rémy said the lab is “continuing to explore other community-hosted alternatives” and wants mathematicians time to assess the work. The dump is public. The referee is not.",
        sourceLabel: "New Scientist",
        sourceHref:
          "https://www.newscientist.com/article/2592421-openai-announces-722-mathematical-discoveries-in-one-go/",
      },
      {
        id: "haiku-55",
        title: "Haiku 5.5 is 75% cheaper, and Sonnet cache reads are halved",
        body: "Anthropic on Wednesday called Haiku 5.5 its cheapest, fastest small model and said it costs about 75% less to run than Haiku 4.5. Prompts up to 100k tokens — about 90% of the old Haiku mix — are $0.10 input and $0.50 output per million; above that, $0.50 and $2.50. Sonnet 5.5 cache reads fell from $0.20 to $0.10, which the lab says cuts most agentic jobs by about 20%. Max 5x, Max 20x and Team subscribers get $100, $200 and up to $500 in monthly Claude Platform API credits this week. The model is on AWS, Google Cloud, Azure and `claude-haiku-5-5`. The price war now has a receipt.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/claude-haiku-5-5",
      },
      {
        id: "anthropic-cvp",
        title: "Anthropic folded Glasswing into three cyber-access tiers",
        body: "Tuesday’s post merged Project Glasswing and the Cyber Verification Program. Defense Access is for SOC, IR and owned-system work; Red Team Access adds authorised pen-tests and still blocks ransomware and safety-critical systems; Specialized Access, reviewed with the US government, has the fewest cyber blocks and is where existing Glasswing members go. All three get Opus 5.5, Sonnet 5.5 and Mythos 5.1. Partners logged at least 129,000 verified vulnerabilities from April to July, plus 5,500 from Anthropic’s own open-source scans; more than 33,000 are critical or high. Data retention is required until Enterprise Frontier Safeguards later this fall. The generally available models still block most cyber work.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/news/cyber-verification-program",
      },
      {
        id: "nvidia-mxc",
        title: "Huang and Nadella put agents on Windows — RTX Spark preorders are open",
        body: "At Microsoft’s San Francisco Windows event on Wednesday, Jensen Huang and Satya Nadella said agents should run locally under the OS. Microsoft Execution Containers are generally available; Pavan Davuluri said MXC, Microsoft Security and Agent 365 are the primitives. RTX Spark laptop preorders opened the same day for 16 October delivery, with compact desktops in November, from Acer, ASUS, Dell, HP, Lenovo, Microsoft, MSI and Gigabyte. The stack is a Blackwell RTX GPU of up to 6,144 cores and a Grace CPU of up to 20 cores, with up to 128GB unified memory. DGX Station for Windows was previewed on a GB300 Grace Blackwell Ultra Superchip: 748GB coherent memory and up to 20 petaFLOPS of FP4, enough, Microsoft said, for trillion-parameter models on a desk.",
        sourceLabel: "NVIDIA",
        sourceHref:
          "https://blogs.nvidia.com/blog/local-ai-rtx-spark-microsoft-windows-event/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月8日",
    lede:
      "隔夜共機艦縮到3架、6艦、1公務船；徐佳青准辭、李妍慧代理；黃國昌帶8名立委出席國慶，仍罵斷尾求生；賴清德向班奈特報了今年3.2%、明年3.9%；酈英傑說140億美元軍售遲早會批。",
    stories: [
      {
        id: "pla-oct8",
        title: "隔夜3架共機、6艘共艦：1架進西南空域",
        body: "國防部今天公布，自昨天上午6時至今天上午6時，偵獲共機3架次、共艦6艘及公務船1艘，其中1架次進入西南防空識別區。國軍以任務機、艦及岸置飛彈系統監控應處。中央社標題寫「6艘共艦1架共機」，正文與國防部英文稿都是3架次、1架侵擾西南。前一日（6日0600至7日0600）青年日報紀錄為14架次、逾越中線進入北、中、西南共9架次。聯巡過了；隔夜是例行數字。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610080051.aspx",
      },
      {
        id: "xu-resigns",
        title: "徐佳青准辭，李妍慧代理；外交部還在查",
        body: "僑委會委員長徐佳青昨天記者會哽咽請辭，自請行政與司法調查，否認浪費公帑或圖利家人，稱5日已打定主意、6日向賴清德與卓榮泰報告，兩人一度請她再想想。行政院發言人李慧芝說，卓榮泰收下徐佳青及副委員長李妍慧辭呈，勉予准徐、慰留李，由李代理。外交部對外界所指情形「仍在查證中」。國民黨許宇甄說法律沒有下台免責條款，北檢已分案。民眾黨原先指控兒子以「攝影官」隨行、丈夫唐博偉私用外館公務車。調查還在；位子先空了。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9801612",
      },
      {
        id: "huang-national-day",
        title: "黃國昌帶8名立委出席國慶，仍罵徐佳青斷尾求生",
        body: "民眾黨主席黃國昌昨天宣布，他與黨內8名立委將應邀出席10月10日總統府國慶大典，稱即使無法苟同賴清德「毀憲亂政」，中華民國仍是共同的國家。同一場記者會，他把徐佳青請辭說成「徹頭徹尾的斷尾求生、止血」：沒有認錯、沒有道歉，還把指控說成抹黑。他問，若真是抹黑，何必匆匆忙忙請辭。國慶在週六；白營人到、話沒收。",
        sourceLabel: "TVBS",
        sourceHref: "https://news.tvbs.com.tw/politics/4032892",
      },
      {
        id: "lai-bennet",
        title: "賴清德對班奈特：今年國防3.2%，明年3.9%，2030年前5%",
        body: "總統府說，賴清德今天接見美國聯邦參議員班奈特訪問團，稱台海穩定攸關第一島鏈與印太，並點名班奈特的「第一島鏈嚇阻法案」與「台灣六項保證法案」。賴清德說今年整體國防預算已達GDP 3.2%，明年將達3.9%、占中央政府總預算歲出20%以上，預計2030年前到5%；要導入人工智慧、無人載具與太空科技，並與美方打造無人機非紅供應鏈。班奈特肯定立法院通過逾240億美元軍購特別預算、逾70億美元無人載具，並說已授權撥款的支持措施要落實。數字報了；軍售還在白宮。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610080182.aspx",
      },
      {
        id: "christensen-14bn",
        title: "酈英傑：140億美元軍售遲早會批，延宕對美沒益處",
        body: "前AIT處長酈英傑昨天在華府全球台灣研究中心年會爐邊對談後告訴中央社，他沒有內幕消息可確認這筆尚待批准的140億美元對台軍售是否在習近平9月訪華府期間被討論，但希望川普意識到「繼續延宕這筆軍售對美國的利益並無幫助」，並認為「遲早會獲得批准」。他說對台軍售是美國支持台灣自我防衛的重要訊號。前AIT主席羅森伯格在同一場合說，政策應根植於「一個強大、有自信且繁榮的台灣」，不應被視為對中華人民共和國的威脅。川習年底還有兩次會晤；批准沒有日期。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610080164.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "8 Oct 2026",
    lede:
      "Takaichi finally printed a ¥4.3tn food-tax hole and still would not name the cash-payment total; she kept Yana after a reprimand; Koja asked for a SOFA review; the Marines said the 30-day curfew is not an alcohol ban; and the Nikkei opened back under 70,000.",
    stories: [
      {
        id: "jp-food-tax-43tn",
        title: "Takaichi names a ¥4.3tn food-tax hole — and still no cash-payment total",
        body: "In Thursday’s Upper House leaders’ questions, the prime minister said cutting the food consumption tax from 8% to 1% from April 2027 would cost the national and local governments about ¥4.3tn a year. She again said the government would not lean on special deficit-covering bonds, and would find the money in tax special measures, subsidies and funds so social-security revenue would not be holed. Income-linked support payments would stay “within” the remaining one point of food tax and would be decided later; about ¥100bn in reserve funds is already earmarked, with more to come. Local consumption-tax losses would be made whole from national funds. The tax-cut number is now hers. The package still has no total.",
        sourceLabel: "KAB",
        sourceHref: "https://www.kab.co.jp/news/article/16950242",
      },
      {
        id: "jp-yana-stays",
        title: "Takaichi keeps Yana: reprimanded, not replaced",
        body: "Asked by CDP secretary-general Masayo Tanabu whether she would take responsibility for appointing agriculture minister Kazuo Yana, Takaichi told the Upper House she had “strongly reprimanded him because the remarks were inappropriate” and still expected him to do the job. Yana, who had said road-construction funding was cut in municipalities whose leaders backed his rival in February’s Lower House election, vowed to “do his utmost.” Tanabu also asked her to name the resources for the food-tax cut and the income-linked benefits. The farm minister stays. The offset question was asked again in the same sitting.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref:
          "https://www.nippon.com/en/news/yjj2026100800374/japan-pm-takaichi-declines-to-replace-farm-minister-over-gaffe.html",
      },
      {
        id: "jp-koja-takaichi",
        title: "Koja asked Takaichi for a SOFA review; she offered more talks",
        body: "Okinawa Governor Genta Koja met the prime minister at the Kantei on Wednesday — their first meeting since he was elected last month — and handed over a protest after a US Marine was arrested on suspicion of killing and robbing Anna Yagi, 39, in Naha on Saturday. Koja called the case “absolutely unacceptable,” said US military human-rights education “has not worked at all,” and asked Tokyo to take part in that training and to review the Status of Forces Agreement. Takaichi called the incident brutal and heinous and said she wanted further Japan–US talks on “effective measures.” Koja also saw Defence Minister Shinjiro Koizumi. The letters are in. The SOFA is not.",
        sourceLabel: "NHK World",
        sourceHref: "https://www3.nhk.or.jp/nhkworld/news/20261007de56161/",
      },
      {
        id: "jp-curfew-alcohol",
        title: "The 30-day Okinawa curfew is not an alcohol ban",
        body: "III MEF spokesman 1st Lt. Tyler Thomas told Stars and Stripes on Thursday that US service members on Okinawa will not be barred from drinking during the midnight-to-5 a.m. “Period of Reflection” that starts at noon Friday. Standard off-duty rules stay in force outside curfew hours. The preceding 48-hour training period did ban alcohol, including in private residences, and barred off-base liberty. Troops must be in assigned on-base quarters or off-base homes during curfew; gates will be watched more closely; liberty policy is under review. Lance Cpl. Devin Jacob Ballard, 20, has been forwarded to Naha prosecutors on suspicion of asphyxiating Yagi and taking her wallet and backpack. He has denied the allegations. Wednesday’s FAQ had left the alcohol question open. Thursday closed it.",
        sourceLabel: "Stars and Stripes",
        sourceHref:
          "https://www.stripes.com/theaters/asia_pacific/2026-10-08/okinawa-homicide-military-curfew-alcohol-23089389.html",
      },
      {
        id: "jp-nikkei-70k",
        title: "The Nikkei opened back under 70,000; the dollar was still ¥158",
        body: "Kyodo said Tokyo stocks opened lower on Thursday, the Nikkei falling below 70,000 in the first 15 minutes to 69,578.14, down 457.57, tracking overnight Wall Street losses and high US Treasury yields. The Topix was 4,109.59, down 44.52. At 9 a.m. the dollar fetched ¥158.09–11, against ¥158.04–14 in New York and ¥158.10–11 in Tokyo at 5 p.m. Wednesday. Prime-market losers were led by oil and coal, nonferrous metals and wholesale trade. The food-tax hole now has a prime-ministerial number. The currency trade has not moved off 158.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261008/p2g/00m/0bu/009000c",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "8 Oct 2026",
    lede:
      "The interior committee dated Kim Ji-yong’s hearing for the 14th and left Im off the witness list; Kim promised to end politicized probes; the committee chair said Im would have to resign first; Jin called the mine blast a provocation; and Kang said the site was cleared.",
    stories: [
      {
        id: "kr-kim-hearing-14",
        title: "Kim’s SCIA hearing is dated: 14 October, Im not a witness",
        body: "The National Assembly Public Administration and Security Committee on Wednesday adopted the confirmation-hearing plan for Kim Ji-yong, the nominee for first chief of the Serious Crimes Investigation Agency, by agreement between the parties. Yonhap said the hearing is on the 14th. Witnesses are former vice justice minister Koh Ki-young and disability-rights lawyer Kim Ye-won. People Power had asked for Gwangju SCIA chief Im Eun-jung, who has publicly questioned Kim; she is not on the list. Gyeonggi Governor Choo Mi-ae, who opposes the nomination, has said Koh recommended Kim’s promotion to prosecutor-general when she was justice minister. The agency opened last Friday. The chair is still empty.",
        sourceLabel: "Yonhap",
        sourceHref: "https://www.yna.co.kr/view/AKR20261007174600001",
      },
      {
        id: "kr-kim-politicization",
        title: "Kim: first job is to end the politicization of investigations",
        body: "The nominee told reporters on Thursday he would “first put an end to the politicization of investigations.” He said the prosecution had run “targeted, dirt-digging probes with political purposes,” and that he “painfully recognize[d] the current situation that has ultimately led to the dismantling of the prosecution.” He promised political neutrality and independence for the new agency, which launched last Friday after prosecutors lost the power to run direct investigations. Yonhap noted opposition from some Democratic Party hardliners who say Kim once opposed prosecution reform. The hearing is next Wednesday. The confirmation is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261008004600315",
      },
      {
        id: "kr-im-resign-first",
        title: "The committee chair: Im can testify if she resigns first",
        body: "Democratic Party lawmaker Kim Young-jin, who chairs the interior committee, told MBC radio on Thursday that if Im Eun-jung “wants to come as a witness” at Kim Ji-yong’s hearing, “she should resign as Gwangju SCIA chief and then we can accept her.” He said it was “not appropriate” for the regional chief to appear, and that criticising the nominee instead of settling her own office was “not the right attitude for a public official.” People Power had asked for Im on Wednesday and was refused. The chair has now put a price on the missing witness. The hearing plan does not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://www.yna.co.kr/view/AKR20261008093800001",
      },
      {
        id: "kr-jin-provocation",
        title: "Jin: the mine blast was a provocation — the Monday briefing just omitted the word",
        body: "Joint Chiefs Chairman Gen. Jin Yong-sung told a parliamentary audit on Thursday there was “not a single moment when I thought it was anything other than a provocation when one of my men was seriously injured.” He said he “had not paid close attention” to the fact that Monday’s JCS–UNC briefing left the word out. The joint investigation blamed resin antipersonnel mines planted by the North south of the MDL for the 21 September blast that injured three South Korean soldiers, two of them seriously. Jin called the subsequent mine-clear “highly significant” as a show of resolve and said he would keep reviewing other measures, without naming them. The military pledged a “stern” response, including physical and non-physical means, and faster AI surveillance at frontline outposts.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261008004100315",
      },
      {
        id: "kr-kang-flustered",
        title: "Kang: the blast site is clear; Pyongyang looked flustered",
        body: "Defence Minister Kang Shin-chul told the audit on Wednesday that North Korea appeared “quite flustered” by Seoul’s final findings and the mine-clear. The North’s foreign ministry, not Kim Yo-jong, issued a late-Tuesday denial calling the results a “farce,” a day after the announcement. Kang said the mission cleared “all” mines at the site — the first such operation inside the buffer zone — and that the military shares the assessment that hundreds more may lie south of the MDL, a matter for joint verification with UNC. The ministry paper said Seoul would formalise the armistice violation, demand the DMZ be restored, and push inter-Korean military talks on hotlines and MDL markers. About 200 of the original 1,292 markers are still identifiable. The site is clear. The line is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261007002651315",
      },
    ],
  },
];

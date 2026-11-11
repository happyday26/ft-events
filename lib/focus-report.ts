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
    updatedAt: "11 Nov 2026",
    lede:
      "Google put Carbon on the paid API at Argon’s introductory price and called it the cyber and long-horizon model; Anthropic opened the roadshow at $70 to $78 and applied for ANT; OpenAI let shops claim a ChatGPT profile and talk through an agent in the United States; Claude got sheets, boards and a renamed data product the same morning; and Apollo 2 picked brackets on two Mercedes lines at 96 percent.",
    stories: [
      {
        id: "gemini-carbon",
        title: "Carbon is out at Argon’s price; Argon is still the default",
        body: "Koray Kavukcuoglu’s Tuesday post made Gemini 4 Carbon generally available to paying developers and enterprises through the API in Google AI Studio and Gemini for business, and to Google AI Ultra subscribers in Antigravity, the Gemini app and AI Mode in Search. Google called it the strongest model, with frontier scores in cybersecurity and in long-horizon agentic work across knowledge tasks, software and scientific reasoning. Argon remains the recommended choice for most coding and office work; Carbon is the one that spends more tokens on multi-step debugging, open-ended research and extended verification. The introductory price matches Argon — $2 per million input tokens and $10 per million output — until 30 November, then $4 and $20. Antigravity is previewing /swarm: one prompt, a tracked team of agents, Carbon on architecture and audit, lighter models on the parallel jobs. Two weeks ago Carbon went to defenders in the Fairwind Program. Today it is a SKU.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/",
      },
      {
        id: "anthropic-ipo",
        title: "Anthropic’s roadshow is $70 to $78; the ticker asked for is ANT",
        body: "Anthropic, PBC said Tuesday it had launched the roadshow for a proposed Nasdaq listing of Class A common stock under the symbol ANT. The offering is 825 million shares, of which 801.35 million are the company’s and 23.65 million are existing stockholders’; Anthropic takes nothing from the selling shareholders. The expected range is $70.00 to $78.00 a share, with a 30-day option on another 123.75 million. CNBC, citing people familiar with the process, has pricing on 18 November and a first trade on the 19th, and an implied fully diluted value of about $1.4 trillion at the top of the range — up from the $965 billion May round, and short of the $2 trillion that had been discussed. The same filing, CNBC reported, has AMD, Broadcom, Google, Micron, Microsoft, Nvidia and TSMC taking $26 billion of Class N stock in a private placement at the IPO price, outside the lock-up. The registration statement is not effective. The roadshow is the pitch. The listing date is still a source.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html",
      },
      {
        id: "openai-businesses",
        title: "ChatGPT now has a shopfront, and an agent for US ecommerce",
        body: "OpenAI put Businesses in ChatGPT into beta on Tuesday. A company can claim a profile in Business Hub, keep details and product feeds current, and see aggregated mentions, website clicks and discovery topics from conversations that cite its site. OpenAI says it does not share those chats, or Business Agent chats, with the business; the insights only appear above a threshold. After a verified business appears in a model answer, a user can open the profile and start a separate, labelled conversation with its Business Agent. That agent is for eligible ecommerce and online-service firms in the United States. It can be sponsored as the destination for ChatGPT Ads; the placement is labelled and kept apart from ChatGPT’s own reply. Shopify merchants can connect from Business Hub or the admin. Reuters counted 1.2 billion weekly users in the company’s own figure. The profile is a listing. The agent is the clerk.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-businesses-chatgpt",
      },
      {
        id: "claude-office",
        title: "Claude shipped sheets and boards the morning of the roadshow",
        body: "The same Tuesday, Anthropic launched Claude Whiteboards and Claude Sheets in beta on paid plans, and made Claude Dashboards generally available under a new name, Claude Data. Sheets will take a prompt for a campaign tracker or a hiring budget and build tabs, formulas, formatting and drop-downs, then edit in the cells and mark each change. Whiteboards turn a messy plan into a board with owners and dates; Claude can send the result to a doc, a deck, or Lucid, Miro or Zoho. Data connects to warehouses and CRMs, including Redshift, BigQuery and ClickHouse; certified queries and live sharing stay in beta. Team plans get all three on by default. On Enterprise, Sheets and Whiteboards stay off until an admin flips them; Data turns on by default on 19 November. The Verge, from the San Francisco event, also had Claude Meetings in beta for Team and Enterprise. The office suite arrived on the day the bankers started the book.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://claude.com/resources/articles/sheets-whiteboards-data",
      },
      {
        id: "gemini-robotics",
        title: "Apollo 2 kitted Mercedes lines at 96 percent",
        body: "Google DeepMind’s Carolina Parada introduced Gemini Robotics 2.5, the lab’s most capable vision-language-action model, and said it is rolling out to robotics partners. Across more than 200 tasks the company reported a 30 to 100 percent higher success rate than its previous baselines, and 20 to 30 percent faster runs. The figure that travelled was the factory: Apptronik’s Apollo 2 humanoid, on active Mercedes-Benz lines in Kecskemét, Hungary, and Sindelfingen, Germany, picking metal brackets from bulk bins into sequencing trays. Gemini Robotics ER watched the workflow; 2.5 ran the hands and arms. DeepMind put the success rate at 96 percent. Jeff Cardenas, Apptronik’s chief executive, said a few weeks of post-training carried over to the line with little drop-off. The model is for partners. The four percent is still a person on the line.",
        sourceLabel: "Google DeepMind",
        sourceHref:
          "https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月11日",
    lede:
      "顧立雄說遼寧號編隊在西太平洋做區域拒止。今天公報是7艘共艦、3艘公務船、2架次越中線。外防審11案退俸，他說所得跟在職相近就會提早走。卓榮泰不副署老福法，選情緊仍把憲政放前面。中選會說28日先領選舉票再領公投票，深偽要查。",
    stories: [
      {
        id: "gu-westpac",
        title: "顧立雄：遼寧號編隊在西太平洋做區域拒止",
        body: "國防部長顧立雄10日出席立法院第11屆第6會期第6次會議前受訪，談中共西太平洋演訓。他說遼寧號航艦編隊及其他戰區艦隊編隊近日在西太平洋從事區域拒止演練，相關軍事威懾意圖破壞印太區域和平穩定；國軍將透過聯合情監偵及友盟協作，持續掌握並適切應處。同日被問國防科研反滲透，他說機密資料依《國家機密保護法》與《政府資訊公開法》，立委索資依法不予提供，國防部會加強官兵反滲透及安全查核。11日外防委員會上，他補了一句：這段時間不只在西太平洋，其他地區也有不同演練。北京沒掛演習名稱。部長把意圖說成威懾；編隊還在海上。",
        sourceLabel: "軍聞社",
        sourceHref:
          "https://mna.mnd.gov.tw/news/detail/?UserKey=8f997380-c276-44c7-bab0-55b52ff7e178",
      },
      {
        id: "pla-bulletin",
        title: "7艘共艦、3艘公務船，2架次越中線",
        body: "國防部統計10日上午6時至11日上午6時，偵獲7艘共艦、3艘公務船及4架次共機，其中2架次逾越台灣海峽中線侵擾西南空域。國軍以任務機、艦及岸置飛彈系統監控應處。10日公報是8艘共艦、1艘公務船、4架次共機。艦少一艘，公務船多了兩艘，飛機架次沒變，越中線寫進了今天的句子。西太平洋的航艦編隊是部長嘴裡的區域拒止；台海公報仍是日常的船與機。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611110035.aspx",
      },
      {
        id: "gu-pension",
        title: "顧立雄：退俸跟在職相近，官兵會想提早走",
        body: "立法院外交及國防委員會11日審查國民黨立委所提《陸海空軍軍官士官服役條例》第39條修正草案等11案。現行規定是CPI累計成長達正負5%應予調整，或至少每4年檢討。在野版本包括降到3%或2%、改每2年或3年檢討，或隨現役調薪同步調增。顧立雄反對：「你退伍所得跟在職待遇相近的話，我想會影響這個官兵長期留營的意願。」他主張軍職退撫應與公務人員、公立學校教職員一致。綠委羅美玲問退撫基金2055年收支不足，修法會不會更早缺口；銓敘部退撫司副司長高玉燕說還要再評估。藍委徐巧芯問要不要等政院版。基金還沒算完。11案已經在桌上。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/835227",
      },
      {
        id: "cho-welfare",
        title: "卓榮泰：選情緊繃，仍不副署老福法",
        body: "行政院6日決定不副署立法院三讀的《老人福利法》第22條修正，規定近一年綜所稅率未達20%的65歲以上長者由中央全額補助健保費。卓榮泰10日赴立法院總質詢前受訪，被問國民黨要民進黨縣市長候選人表態、是否怕影響選情。他說還有十多天，「選情當然很緊繃」，但政府須把維護憲政秩序與財政紀律放在最優先；任何政黨都不該用破壞憲政與財政紀律來換選舉利益。70歲以上低收入、中低收入及特定弱勢長者健保費，中央已常年編列；65到69歲由地方依財政能力補助。他未回應老農津貼是否副署。不副署是第9案。投票日在28日。",
        sourceLabel: "TVBS",
        sourceHref: "https://news.tvbs.com.tw/politics/4048257",
      },
      {
        id: "cec-vote",
        title: "中選會：28日先領選舉票，深偽要上查證平台",
        body: "九合一選舉與全國性公民投票案第22案訂28日投開票，時間上午8時至下午4時。中選會11日說，年滿18歲有公投權，年滿20歲有選舉權及公投權；當天先領選舉票、再領公投票。第22案主文是：「你是否支持政府使用『核電』振興經濟，以廢除『非核家園』的能源政策？」今年宣導重點是防制AI深偽影音，提醒可疑資訊上趨勢科技防詐達人、LINE訊息查證、美玉姨、麥擱騙、Cofacts、台灣事實查核中心查證；選務資訊以中選會網站與臉書為準。內政部10日已開放至12日憑身分證字號與出生日期查有無投票權。票在28日。查證從現在算起。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611110084.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "11 Nov 2026",
    lede:
      "The food-tax bill reached the Upper House this morning and the offset is still unnamed; Takaichi would cover more than 30 percent of workers and leave the cutoffs to a Cabinet order; the LDP reprimanded Ishiba for walking out of Friday’s vote; a special committee with her in the chair is set for the 13th; and Docomo’s 5G standalone went unstable from 10:34 a.m.",
    stories: [
      {
        id: "upper-house-tax",
        title: "The food-tax bill entered the Upper House. The hole is still blank",
        body: "The Upper House opened debate Wednesday on the bill to cut the consumption tax on food and nonalcoholic drinks from 8% to 1% for two years from April 2027. Takaichi attended the plenary. She said the government would work so that people “feel” the cut, and she repeated that the revenue would be found without deficit-covering bonds. Jiji put the annual loss at about ¥5 trillion and recorded that she still did not name a tax or a spending offset. The Lower House passed the bill last week over a united opposition. The coalition does not hold a majority in the Upper House. The session runs to 12 December. The speech was last month. The invoice is the same sentence.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/11/japan/politics/tax-debate-kickoff-senate/",
      },
      {
        id: "cash-payments",
        title: "The cash is “more than 30 percent of workers.” The yen is a Cabinet order",
        body: "Income-linked payments for low- and middle-income workers start in fiscal 2027 only to offset the remaining 1%, then take a fuller form when the rate goes back to 8%, with no end date in the bill. Cutoffs and amounts are left to a Cabinet order. Takaichi told the plenary she is looking at covering more than 30 percent of workers so that more people receive the support, and that most of those people would get more than the tax cut itself. Constitutional Democrat Shinichi Shiba asked for cash inside this fiscal year. She said payments take time and that it would be hard to reach every eligible person before the year is out. The rate is in the statute. The envelope is still a decree.",
        sourceLabel: "Jiji",
        sourceHref: "https://equity.jiji.com/market_watch/2026111100125",
      },
      {
        id: "ishiba-reprimand",
        title: "The LDP reprimanded Ishiba for walking out of Friday’s vote",
        body: "Secretary-general Shunichi Suzuki issued reprimands on Monday to former prime minister Shigeru Ishiba, former economy minister Yuko Obuchi, former Economic Planning Agency chief Hajime Funada, and Yoshihisa Furukawa, vice-chair of the party’s tax commission. They left the chamber shortly before the 6 November Lower House vote. Suzuki told reporters it was the first time the LDP had disciplined a former party leader, and that he wanted the matter closed before the Upper House debate rather than dragging it “one, two, or three weeks.” Ishiba said consumption tax funds social security, and that “it is extremely problematic for the country as a whole to lose that source of funding without first identifying an alternative source of revenue.” He noted Takaichi had told the Diet there was no need to worry about an alternative, and that she had not said what it would be. The party stamp is a reprimand. The offset is still the worry he wrote down.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90835",
      },
      {
        id: "tax-committee",
        title: "A special committee with Takaichi is agreed for the 13th",
        body: "LDP Upper House Diet affairs chief Yoshihiko Isozaki and Constitutional Democrat Diet affairs chief Yoshitaka Saito agreed Wednesday that the food-tax bill will enter substantive debate in an Upper House special committee on 13 November, with the prime minister attending. The coalition is a minority in that chamber; Democratic Party for the People and Komeito are being courted. All major opposition parties voted against the bill in the Lower House. The government still wants passage by 12 December. The calendar now has a committee date. It does not have the votes written in.",
        sourceLabel: "Nihonkai Shimbun",
        sourceHref: "https://www.nnn.co.jp/articles/-/828214",
      },
      {
        id: "docomo-outage",
        title: "Docomo’s 5G standalone went unstable at 10:34 a.m., again",
        body: "NTT Docomo said voice calls, data and SMS on its 5G standalone service were hard to use nationwide from about 10:34 a.m. Wednesday. Other 5G and 4G services, MVNOs on the Docomo network, and emergency calls were not affected. Kyodo noted a 14-hour 5G SA disruption last week that hit about 1.5 million customers who had signed up separately for the service. By 4:30 p.m. Docomo said service had been restored for most customers and that it was still working toward a full recovery. The cause remained under investigation. The company said it had found no sign of unauthorised access or a cyberattack. Last week was 14 hours. This week the clock started before lunch.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91037",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "11 Nov 2026",
    lede:
      "Cho pulled Rubio aside in Paris and left the readout thin; Lee told the cabinet to build a bipartisan map in the new Congress; Cho sat with Sybiha and still did not get the apology in writing; Kim Yo-jong called Guterres prejudiced; and the cabinet sent the Cheonghae expansion toward Hormuz to the Assembly.",
    stories: [
      {
        id: "cho-rubio",
        title: "Cho’s pull-aside with Rubio was North Korea, and not much else on paper",
        body: "Foreign minister Cho Hyun met US secretary of state Marco Rubio on Tuesday on the margins of the G7 foreign ministers’ meeting in Paris. The ministry said they “exchanged views on overall bilateral relations, high-level exchanges and North Korea-related issues,” and stopped there. Yonhap noted that follow-up on the October 2025 Lee–Trump joint fact sheet — including cooperation on nuclear-powered attack submarines and on uranium enrichment and spent-fuel reprocessing for peaceful use — has not made substantial progress. The meeting was the first high-level pass after the 3 November midterms. The readout was a sentence. The fact sheet is still the unfinished list.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110010751315",
      },
      {
        id: "lee-congress",
        title: "Lee: the new Congress has to be built, on both sides of the aisle",
        body: "At Tuesday’s cabinet meeting Lee Jae Myung told ministers to work closely with the US administration on the diplomatic and security agreements already signed, and to build bipartisan support in Congress for Korea and the alliance. Democrats took both chambers on 3 November. He also told the government to widen contact with US state governments and businesses, watch the financial markets, and prepare contingencies. The submarines and the fuel-cycle rights sit in last year’s fact sheet. The map he asked for is in a Congress the other party now organises.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110010751315",
      },
      {
        id: "cho-ukraine",
        title: "Cho sat with Sybiha. The apology was not in the readout",
        body: "Cho met Ukrainian foreign minister Andrii Sybiha in Paris on Tuesday, their first in-person meeting since the row over two North Korean prisoners of war. Cho said mutual respect, trust and the faithful implementation of agreements were basic conditions, and that he hoped pending issues would be resolved smoothly. Neither government’s account mentioned the apology Seoul has demanded. Sybiha wrote afterwards that further steps lay ahead toward “full normalisation.” Humanitarian aid is to continue; next year’s budget proposal still has $100 million, the sum Lee pledged at NATO in Ankara in July. Seoul recalled ambassador Park Ki-chang on 8 October, its first such protest in 18 years, after Volodymyr Zelensky told the UN General Assembly on 23 September that the two soldiers had been transferred to South Korea. Kyiv has denied there was a confidentiality agreement. The ministers met. The word Seoul wanted did not make the communiqué.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/seoul-kyiv-seek-reset-after-dispute-over-north-korean-pow-disclosure/12966842",
      },
      {
        id: "kim-yo-jong",
        title: "Kim Yo-jong: Guterres is prejudiced; the mines are self-defence",
        body: "North Korea on Tuesday rejected UN secretary-general António Guterres’s call to restore inter-Korean channels after the 21 September mine blasts that wounded three South Korean soldiers. Kim Yo-jong, in a KCNA statement, said she regretted that a UN official whose “lifeline” is impartiality had taken a “prejudiced and irresponsible attitude” by echoing what she called Seoul’s “unilateral and provocative sophism.” Fortifying the southern border, she said, “never violates the UN Charter and the international laws” and is a “regular exercise of its right to self-defense.” A joint investigation by the South Korean military and the UN Command concluded that North Korean anti-personnel mines had been planted south of the Military Demarcation Line. Pyongyang has called that fabricated. Seoul wrote to the Security Council on 22 October asking for an apology, removal and a pledge against repetition. The UN asked for a channel. The channel that answered was KCNA.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/pyongyang-rejects-un-chiefs-call-for-interkorean-dialogue-in-wake-of-dmz-mine-blast/12965400",
      },
      {
        id: "cheonghae-hormuz",
        title: "The cabinet sent Cheonghae toward Hormuz",
        body: "The same cabinet that heard Lee on Congress approved a bill seeking Assembly consent to expand the anti-piracy Cheonghae unit from waters off Somalia to areas closer to the Strait of Hormuz. Yonhap noted that President Trump has called on South Korea and others to help secure the waterway, which remains effectively blocked amid the US–Iran war. The foreign ministry, asked about Tehran’s warning not to get involved, said the extension is for the protection of nationals and economic interests, under a principle of non-intervention, and that it is explaining that position to Iran and other governments. The unit’s map is moving. The consent is still the Assembly’s.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110010751315",
      },
    ],
  },
];

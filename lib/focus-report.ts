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
    updatedAt: "9 Sep 2026",
    lede:
      "OpenAI said Tuesday its agents had resolved a Millennium Prize problem. The mathematicians who posted a related Euler result on Monday say the lab tried to write them out. An Anthropic researcher quit the same day. The intern note from Sunday is now the ops sheet for that run.",
    stories: [
      {
        id: "openai-navier-stokes",
        title: "OpenAI says its agents solved Navier–Stokes — and will not claim the Clay prize",
        body: "Tuesday’s post says an internal system, “significantly more capable than GPT-6 Astra,” produced an analytical proof and a Lean formalization that a smooth fluid at rest can develop a singularity in finite time while energy stays finite — Clay statements C and D. Training of that model started 28 August. Agents arrived at the resolution on Saturday, about 88 hours after the first groups were launched; Lean verification took another 17 hours via Astra. The company does not intend to claim the million-dollar prize. The continuum equations that design aircraft and forecast weather, on OpenAI’s account, can blow up.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/navier-stokes-solution/",
      },
      {
        id: "openai-ns-credit",
        title: "Buckmaster says OpenAI offered him a paper without the Anthropic co-author",
        body: "On Monday, NYU’s Tristan Buckmaster posted a proof that a simplified Navier–Stokes system can break down, work done over almost a year with Anthropic’s Levent Alpöge using public Claude and Codex models. MIT Technology Review reports that, in a Sunday call, OpenAI offered either a concurrent release or a joint Navier–Stokes paper that left Alpöge off the author list. OpenAI’s Tuesday post says it reached out after Lean verification on 6 September, found they had forced Euler not Navier–Stokes, and recognizes their priority on that result. It says researchers and agents did not see the pair’s work until it was public, and “cannot rule out” that de-identified product data helped the models. The proofs, it says, differ. The authorship fight is the part Clay will not score.",
        sourceLabel: "MIT Technology Review",
        sourceHref:
          "https://www.technologyreview.com/2026/09/08/1143747/what-openais-latest-controversy-tells-us-about-the-future-of-math/",
      },
      {
        id: "openai-ns-compute",
        title: "The Clay run: on the order of 10,000 agents, 130 billion tokens, a Saturday night",
        body: "OpenAI says the Navier–Stokes group involved on the order of 10,000 concurrent agents, with tools to read a cached internet and run code, under the same isolation it uses for frontier evaluations. Across all attempted problems the agents sent 4.9 million messages and used about 300 billion output tokens; the Navier–Stokes slice was 2.7 million messages and about 130 billion. Roughly 100 agents spent 50 hours on unforced Euler first; that result was then fed to the Navier–Stokes groups. Codex was used to cross-pollinate intermediate insights. The intern note on Sunday counted 3.1 agent-workdays per human day. This was the same org, unthrottled.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/navier-stokes-solution/",
      },
      {
        id: "anthropic-coxon",
        title: "An Anthropic researcher quit Tuesday: both labs, he says, are gambling",
        body: "Jacob Coxon posted that he was leaving Anthropic after three years of pre-training at OpenAI and then Anthropic. “Neither company is acting responsibly. They are racing straight to self-improving superintelligence and gambling with our lives.” At OpenAI, he wrote, many have not internalized the stakes; at Anthropic they have, but are locked in a race. Evan Hubinger, who leads Anthropic’s alignment stress-testing team, replied that Coxon was correct, that he personally puts the chance AI could kill all humans at more than 10% this decade, and that Anthropic is “not clearly on track” to solve superintelligence alignment. Neither company commented to Business Insider. The Clay announcement was the same afternoon.",
        sourceLabel: "Business Insider",
        sourceHref:
          "https://www.businessinsider.com/anthropic-researcher-quits-over-ai-safety-concerns-2026-9",
      },
      {
        id: "openai-research-intern",
        title: "Sunday’s intern note is now the spreadsheet under a Millennium Prize claim",
        body: "The 7 September write-up of OpenAI’s Sunday post is still the only operational print the lab has given: by mid-August the research org was logging 3.1 agent-workdays for every eight hours of human labour; median daily inference above $600, the 90th percentile above $7,000; more than half of four-to-eight-hour tasks still needed a human; some RL was paused after Hugging Face. Astra-class GPUs were cut about 59% after August cyber tests. Tuesday’s Clay post came from the same research org, on a newer internal model, with no prize claim. Anthropic’s prospectus is still not out. The numbers on Sunday were a research diary. The numbers on Tuesday are a Clay filing.",
        sourceLabel: "Help Net Security",
        sourceHref:
          "https://www.helpnetsecurity.com/2026/09/07/openai-research-automation-intern/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月9日",
    lede:
      "國防部中午說，上午9時22分起11架次共機越中線，配合共艦做「聯合戰備警巡」。6727、6728據報在夏威夷起飛後折返。8月14日三讀的總預算，26天還沒送到行政院。卓榮泰昨晚先發了員警津貼。",
    stories: [
      {
        id: "pla-joint-patrol",
        title: "國防部：上午起11架次共機越中線，配合共艦「聯合戰備警巡」",
        body: "國防部9日中午發稿：自上午9時22分起，陸續偵獲殲10、蘇愷30、殲轟7、運8遠干、空警500等主、輔戰機及無人機16架次出海，其中11架次逾越台灣海峽中線，進入北部、中部及東部空域，配合共艦假所謂「聯合戰備警巡」之名騷擾周邊空海域。國軍以聯合情監偵掌握，並檢派任務機、艦及岸置飛彈應處。前一個24小時窗口是共艦8艘、公務船4艘，8架次共機中4架次侵擾西南及東部。船的數字今天中午這則沒寫；飛機從4架次侵擾變成11架次越中線，而且白天就過。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609090131.aspx",
      },
      {
        id: "f16v-return",
        title: "6727、6728據報在夏威夷起飛後折返，原因不明",
        body: "自由時報7日下午寫，機號6727、6728台灣時間當天上午從希卡姆起飛，隨後傳出不久折返，原因不明。若依Blk 20前例，可能先關島整補再飛台東志航；夏威夷至關島約8小時20分，關島至台灣約4小時40分。兩機8月21日抵夏威夷後已滯留逾兩週，原訂8月23日、月底到九三都沒現身。66架、2,472億元「鳳翔專案」首批；全數交機目標仍是2028年底。起飛有人看見。折返也有人寫。接機還是沒有日期。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5565814",
      },
      {
        id: "ly-budget-delay",
        title: "總預算三讀26天還沒送到政院，追加6076億還在等那封函",
        body: "立法院8月14日三讀今年度中央政府總預算，拖了351天才過。迄9日上午，三讀函文仍未送到行政院，總統也未公布。卓榮泰7日只說「大家一起加油，我們也要加油，立法院也要加油。」院本部因針對性刪減已出現近256萬元執行差額，政院說依預算法列支。3日院會通過的6,076億追加預算，法理上要等原總預算完成公布才能送立法院。三讀過了；公文還在立法院。追加案寫好了；門口那封信還沒來。",
        sourceLabel: "三立新聞網",
        sourceHref: "https://www.setn.com/news/1902942",
      },
      {
        id: "police-allowance",
        title: "卓榮泰核定深夜危勞津貼擴到值班備勤：約5萬人、每月2000元",
        body: "行政院長昨晚到台北市中山分局視察，宣布已核定擴大「深夜危勞勤務津貼」：駐地內值班、備勤也發。預估全國約5萬名前線員警未來每月可獲2,000元。津貼2024年6月起只給凌晨0時至6時駐地外巡邏，每小時100元。警政署說，去年深夜執勤約4萬4,000人次，駐地外2萬5,000、駐地內1萬8,000；同年度深夜傷亡99件，駐地內14件。內政部長劉世芳、署長張榮興在場。總預算還在立法院。津貼先核了。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609080342.aspx",
      },
      {
        id: "cho-countersign",
        title: "卓榮泰：八案不副署是守門，處境像少林足球",
        body: "同一場金檔獎，他7日說行政院不副署的八案都是被動：立法院修衛星廣播、有線電視與廣播電視法，會讓黨政軍介入媒體，「很抱歉，我沒有副署」；助理費除罪化也沒簽。他自比守門員，球會一排排打過來，這是對歷史的責任。八案擋了。副署那一欄，今天還是空的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609070201.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "9 Sep 2026",
    lede:
      "The yen printed ¥152.89 on Tuesday, a seven-month high, as carry trades started to unwind. China answered with a 99.2% deposit on Japanese dichlorosilane. Takaichi is now leaning toward leaving Kobayashi at policy, after a tax package on 15 September and a shuffle from the 16th.",
    stories: [
      {
        id: "jp-yen-carry",
        title: "The yen hit ¥152.89 — and the carry trade is starting to pay the bill",
        body: "Reuters had the dollar at ¥152.89 on Tuesday, the strongest since February, after a 4.5% rise in a week from around 160. Cross-border yen borrowing, Jefferies’ BIS proxy for the carry, was a record ¥360tn ($2.35tn) as of March. State Street’s Masahiko Loo said the break below 155 set off another leg of short covering and that a further unwind could push the pair toward the mid-140s. Tokyo Tanshi put 97% on 25bp to 1.25% at the 17–18 September meeting, up from 52% a month ago; 61% on December, 27% on October. Three-month implied volatility made its biggest week-on-week jump in two years. Monday’s reserve print was the receipt. This rally is the market doing the intervention itself.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/yens-sudden-surge-is-upsetting-carry-trade-faithful-2026-09-08/",
      },
      {
        id: "jp-dcs-china",
        title: "China put 99.2% deposits on Japanese dichlorosilane, effective Tuesday",
        body: "The Commerce Ministry’s preliminary anti-dumping ruling requires cash deposits on Japanese dichlorosilane, used to lay films on silicon wafers: 99.2% for Shin-Etsu Chemical and other producers, 80.8% for Denal Silane. A final ruling comes later. Japan used to be China’s biggest DCS supplier until South Korea overtook it in 2025; in July, Japanese cargo was $2.6m, about 33% of China’s imports. Kihara said Tokyo would examine the measures, assess the impact, and work with firms to prevent undue disruptions. The feud dates to Takaichi’s remark that a Taiwan contingency could be a survival-threatening situation. The chemical is small money. The list is the point.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/09/08/economy/china-japan-imports-anti-dumping/",
      },
      {
        id: "jp-kobayashi-stay",
        title: "Kobayashi is now likely to stay at policy — the Cabinet post receded",
        body: "Kyodo’s sources, in Mainichi this morning, say Takaichi had considered a key Cabinet job for Takayuki Kobayashi and is now leaning toward keeping him as LDP policy chief through the extraordinary Diet in October and the regular session next year. Hagiuda, whose secretary was fined in the 2023 slush-fund case, is expected to stay as executive acting secretary-general, the liaison to Ishin. The party on Tuesday entrusted her with the executive lineup. Kihara, Motegi, Koizumi and Katayama are still likely to keep their jobs; so are Aso as vice president and Suzuki as secretary-general. Hayashi at internal affairs is the remaining 2025 leadership rival whose next post is unclear. Continuity is the pitch. The one name that moved overnight was Kobayashi’s.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20260909/p2g/00m/0na/004000c",
      },
      {
        id: "jp-cabinet-tax-gate",
        title: "The shuffle is still gated on a 15 September food-tax cabinet",
        body: "Kyodo’s Monday copy, still the calendar Mainichi is using, says the personnel changes assume Cabinet approval on 15 September of a tax-reform package cutting the food consumption tax from 8% to 1% for two years from April 2027. The reshuffle — Cabinet, LDP executives, senior and parliamentary vice-ministers — is pencilled for 16–18 September. If the tax package slips, the appointments may wait until after Takaichi’s UN General Assembly trip later this month. The yen is already through 153 on the hike. The cut is dated. The shuffle is dated off it.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20260908/p2g/00m/0na/002000c",
      },
      {
        id: "jp-reserves",
        title: "Monday’s reserve print is still the receipt: −$80bn, a record month",
        body: "Finance Ministry data Monday put foreign reserves at $1.207tn, down 6.18% from $1.287tn, the largest monthly drop since the series began in 2000. The ministry did not give a reason; Kyodo cited an unnamed official pointing to yen-support intervention and a mark-to-market hit on bonds. Tokyo spent about ¥11.73tn in April and May, then ¥15.4tn from 30 July to 26 August. CNBC toted those to ¥27.1tn for the year, above 2003’s ¥20.4tn record. State Street’s Loo told CNBC the drop “reflects policy action rather than financial stress.” The bill was in the reserve number. Tuesday’s 152 handle is what that bill bought.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/07/japan-foreign-reserves-yen-intervention.html",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "9 Sep 2026",
    lede:
      "Lee left Paris having promised Macron close coordination on Hormuz and signed defence and nuclear papers — still without a dispatch. Samsung took a stake in Mistral. The IAEA, the same morning, put 28 centrifuge cascades on a new building at Yongbyon.",
    stories: [
      {
        id: "kr-hormuz",
        title: "Lee and Macron pledged Hormuz coordination — Seoul says that was not troops",
        body: "At Tuesday’s Élysée press conference Lee said the two countries would keep coordinating so that freedom of navigation in the Strait and supply-chain stability “can be restored swiftly.” Wi Sung-lac told reporters the talk was about contribution options, not a deployment: “We are still in the review stage. No decision has been made.” Hormuz carried 61% of Korea’s crude and 54% of its naphtha last year. The Defence Ministry sent an inspection team to the UAE; Yonhap had it looking at P-8 operations at Al Dhafra, which the ministry would not confirm. Wi dismissed a link to US investment talks and denied a Washington deadline. Iran has asked for explanations and warned that a military role would count as joining a war. The National Assembly would have to vote. An NSC meeting is rumoured for 17 September. The ships are still not committed.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/south-korea-says-hormuz-talks-with-france-concern-contribution-options-not-troop-2026-09-08/",
      },
      {
        id: "kr-defense-pacts",
        title: "The summit papers: military secrets upgraded, logistics still to be signed, $20bn trade",
        body: "Lee said the two sides signed an upgrade to the April military-secret information-protection pact and agreed to seek an early mutual-logistics accord. They will chase defence-industry projects on French technology and Korean manufacturing, Airbus named. Annual trade is to reach $20bn by 2030. Macron said France’s backing for peninsula peace was unwavering, that Middle East cooperation could expand, and that a multinational mission would proceed “once a relevant agreement is reached.” Wi called the two countries competitors in reactor exports and complementary everywhere else. The logistics treaty is still a hunt. Hormuz is still a review.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260908010554315",
      },
      {
        id: "kr-samsung-mistral",
        title: "Samsung becomes a strategic investor in Mistral — an exclusive chip-side model included",
        body: "Cheong Wa Dae said Tuesday that Samsung signed an investment pact to become a “strategic investor” in Mistral AI, and that the companies will cooperate on an exclusive model meant to protect Samsung’s semiconductor information. The office billed it as taking bilateral high-tech cooperation from company level to state level. Separate MOUs covered AI, semiconductors and quantum technology. A military-secrets upgrade was signed by the Korean foreign minister and the French defence minister. Logistics support and joint nuclear-plant research, including small modular reactors, were listed as agreements still to be sought. The cinema cheque was Monday. The model is Tuesday.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260908010900315",
      },
      {
        id: "kr-yongbyon",
        title: "IAEA: Yongbyon’s new hall could take 28 centrifuge cascades; Kangson’s annex is running",
        body: "A report dated 28 August, written up by Reuters this morning, says the agency identified a two-storey building at Yongbyon as the site’s second enrichment plant by matching June state-media photos of Kim Jong-un’s visit with construction imagery. Cascades appear on both floors; the hall could hold up to 28 of the type shown. The agency cannot confirm how many machines are in each cascade or whether they are spinning. An annex built at Kangson in 2024 shows signs of operation since January. Inspectors have not been in the North since 2009. Grossi told the board on Monday that ongoing work at both sites and further production of weapons-grade material is “a cause for serious concern” and a Security Council violation. Pyongyang says the IAEA has no brief over a nuclear-weapon state outside the NPT. Seoul’s own Article 14 submarine paperwork was the other Grossi line this week.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/north-korea-builds-new-yongbyon-uranium-enrichment-facility-iaea-says-2026-09-09/",
      },
      {
        id: "kr-orano",
        title: "KHNP signed Orano at the Élysée for long-term uranium enrichment",
        body: "KHNP said Wednesday that chief executive Kim Hoe-cheon signed a letter of intent with Orano chairman Claude Imauven at the palace on Tuesday, with both presidents in the room, covering long-term enrichment supply. It follows the April fuel-cycle memorandum from Macron’s Seoul visit. Kim called Western supply sources critical as the fuel market tightens; Imauven called it a base for new enrichment projects. The commercial paper is a letter of intent. The reactor-export contest is unchanged.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10867722",
      },
    ],
  },
];

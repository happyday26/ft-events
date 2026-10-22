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
    updatedAt: "22 Oct 2026",
    lede:
      "Yahoo’s sources put Anthropic’s public S-1 as early as Friday; Claude Duet opened a US waitlist on Wednesday; OpenAI models are headed for Google Cloud’s garden, with Microsoft still named as the primary cloud; Rosalind agents finished a mouse-brain atlas in 32 minutes; and Orchestra Bio is the Tuesday purchase sitting under that demo.",
    stories: [
      {
        id: "anthropic-s1-friday",
        title: "Anthropic’s public S-1 is now “as early as Friday” — still not filed",
        body: "Three people familiar with the plans told Yahoo Finance on Wednesday that Anthropic is set to file its S-1 publicly as soon as Friday. The company confidentially submitted a draft registration in June; under SEC rules those materials must be public 15 calendar days before a formal roadshow. Anthropic did not comment on the timing. Yahoo reprints Tuesday’s Journal: $16.3bn of first-half revenue and a net loss of more than $80bn. Wall Street still talks of raising as much as $100bn at a $2tn valuation — Reuters, previously, not a term sheet. Last week, Yahoo notes, the company told investors in San Francisco that third-quarter revenue was $16.8bn, up from $11.5bn in the second, and that it is profitable on an adjusted basis, which is the Financial Times. A filing would be the first public look. It is not a listing. The listing is still a market-conditions sentence.",
        sourceLabel: "Yahoo Finance",
        sourceHref:
          "https://finance.yahoo.com/markets/article/anthropic-to-publicly-file-for-ipo-as-early-as-friday-sources-say-135343841.html",
      },
      {
        id: "claude-duet",
        title: "Claude Duet is a waitlist: Opus 5.5, a morning brief, and a veto on send",
        body: "Anthropic opened a research preview of Claude Duet on Wednesday for US Pro and Max subscribers, as a standalone app on iOS and Android and on claude.ai, using the same usage limits as the rest of Claude. It is built around Opus 5.5. Each morning it sends a short brief from connected apps; it checks those apps every few hours, not continuously, because a constant poll would burn the plan. It reads and drafts on its own. Before it sends a message, makes a payment, signs a document, or deletes anything, it shows the user and waits. Trading securities and moving money between accounts are off-limits even with approval. Credentials follow the Managed Agents design: it does not see passwords or sign-in tokens. Anthropic said personal errands such as booking tickets are “not quite as strong,” and that it “might misread a thread or miscalibrate what’s urgent.” Stripe’s Link is in the same post: a virtual card, after the user approves the spend. The waitlist is the product. The classifier is the gate.",
        sourceLabel: "Anthropic",
        sourceHref: "https://claude.com/resources/articles/claude-duet",
      },
      {
        id: "openai-google-cloud",
        title: "OpenAI models are going into Google Cloud — Microsoft is still the primary",
        body: "OpenAI said Wednesday that its frontier models and Codex agentic workflows will sit in Google Cloud’s Model Garden, bought through the Marketplace, with general availability “in the coming weeks.” Enterprises can draw down existing GCP commitments. The models will also appear in Google Antigravity and the Gemini Agent. Greg Brockman called it a step toward putting the models and Codex where customers already build. Thomas Kurian said the point is choice, “optimal quality and lower costs.” The last line of the post is the one that matters: Microsoft remains OpenAI’s primary cloud partner. Access is a request form. The Redmond contract is unchanged.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/openai-models-google-cloud",
      },
      {
        id: "rosalind-atlas",
        title: "Rosalind agents: 32 minutes, 700 citations, a public atlas — not a drug",
        body: "OpenAI, PerturbAI and Scripps Research ran thousands of GPT-Rosalind agents across a whole-brain CRISPR atlas of millions of mouse cells in 32 minutes. The team’s estimate for the same work, one perturbation at a time, is months to a year. At the largest workload the distributed agents cited more than 700 references; a single agent given the same model and budget cited 11. Blinded experts preferred the distributed reports 75% of the time. The agents flagged a cerebellum split between Tsc1 and Tsc2 — Tsc2 moved dozens of communication genes, Tsc1 barely — and a DCTN1–cholesterol lead for Perry syndrome. The reasoning atlas is public. The treatments are not. Wednesday’s post is a methods note.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/scaling-ai-research-for-complex-biological-data/",
      },
      {
        id: "orchestra-bio",
        title: "Orchestra Bio is the Tuesday purchase under Rosalind",
        body: "OpenAI said Tuesday it had acquired Orchestra Bio, a platform that lets biopharma teams hand study monitoring, timelines and delay-spotting to agents. Terms were not disclosed. The company post puts Orchestra next to Rosalind: GPT-Rosalind for biology and chemistry questions, Rosalind Workbench for tools and data. A new medicine, it says, still takes roughly 10 to 15 years from target to US approval. Novo Nordisk and Moderna are named as partners, not as Orchestra customers. Axios had the exclusive on Tuesday; the 32-minute atlas landed the next morning. The purchase is the staffing for the demo. The 10-to-15-year clock is the one it has not moved.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/openai-to-acquire-orchestra-bio",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月22日",
    lede:
      "國防部今天沒有共機，六艘共艦、七艘公務船。蔡明彥把民兵漁船說到東部與西南。卓榮泰要檢警調專案保護參選人。范雲要朝野把跨境鎮壓寫進法。沈有忠在座談會上把介選說成胡蘿蔔與棍棒。六千億追加還停在一讀。",
    stories: [
      {
        id: "pla-bulletin",
        title: "無共機：6艘共艦、7艘公務船",
        body: "國防部今天公布，21日上午6時至22日上午6時，偵獲共艦6艘、公務船7艘，持續在台海周邊活動；期間未偵獲共機，故無航跡圖。國軍以任務機、艦及岸置飛彈系統監控應處。自由時報把空域歸給強颱薔琵逼近；國防部稿沒寫颱風。飛機今天是零。海面還有十三艘。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5614468",
      },
      {
        id: "cai-militia",
        title: "蔡明彥：民兵漁船已到東部及西南海域",
        body: "國安局長蔡明彥今天在立法院外交及國防委員會會前受訪，談海上灰色地帶。他列了三個趨勢：海警在台灣東部或西太平洋越來越常態化；這些活動會支援海洋科學研究；海警已逐漸有民兵漁船配合，涵蓋東部及西南海域。過去民兵漁船主要在南海，如今台海周邊也出現類似襲擾。國安跟海巡有聯繫機制；海巡做個案通報與應處，國安局做整體態樣，並與國際友盟交換情資。8月東部已有民兵船。飛機今天沒來。漁船的說法今天到了委員會門口。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610220082.aspx",
      },
      {
        id: "cho-protect",
        title: "卓榮泰：檢警調專案保護參選人；反滲透法仍在研議",
        body: "行政院發言人李慧芝轉述，卓榮泰今天在院會指示，檢警調把各參選人及相關人士人身安全列為專案保護，並對身分不明或可疑的境外來台人士、與其接觸的本國人士與組織提高情資掌握。距離九合一僅剩一個多月。黃逸豪假車禍案，新北檢依重傷害未遂等罪起訴5人；矢板明夫被毆，中檢10月初依組織犯罪等罪起訴廖港發。出訪前要報外交部；敏感地區還要報陸委會。李慧芝說，從事或協助境外敵對勢力進行跨國鎮壓必須負刑事責任，政府正研議修正反滲透法，接受指示、委託、資助而跟監、騷擾、威脅，修法會有更具體規範，完備後儘速送立法院。保護令今天下了。草案還在研議。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610220186.aspx",
      },
      {
        id: "huang-bills",
        title: "范雲要過國安法；許宇甄說願意檢視法制",
        body: "相聲演員黃逸豪9月遭假車禍，新北檢依重傷害未遂等罪起訴5人。民進黨立法院黨團書記長范雲今天說，中國跨境鎮壓要殺一儆百、製造恐懼，呼籲朝野通過強化國安及反制跨境鎮壓的法案。她點傅崐萁帶領藍白阻撓國安法案1347次。自由之家過去十年統計，中國占全球跨國鎮壓四分之一。國民黨書記長許宇甄說傅崐萁已譴責暴力，黨團願意正面回應黃逸豪對完善法制的期待，要補強跨境犯罪追查、境外資金流向與幕後指使者究責。黃逸豪昨天嫌傅的聲明沒提立法。嘴上都要法。法還不在議程上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610220144.aspx",
      },
      {
        id: "shen-carrots",
        title: "沈有忠：介選是胡蘿蔔與棍棒",
        body: "陸委會副主委沈有忠今天在台大醫院國際會議中心的介選座談會上說，中共對台介選是政策一環，胡蘿蔔與棍棒並用。軟的是惠台、特定縣市農產品輸陸、「認同九二共識才有糖吃」；硬的是軍事脅迫、外交打壓、跨境鎮壓，以及對不希望當選的陣營威迫恐嚇。他點了國台辦懲戒「台獨頑固分子」親屬、台北市長候選人沈伯洋屢被點名、蔡康永參加競總「被譴責」。目的是寒蟬、對立、分化。政府會繼續揭露，並強化國安法制。選舉還有一個多月。糖和棍都已出口。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/acn/202610220156.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "22 Oct 2026",
    lede:
      "The food-tax bill gets a real Lower House committee sitting on Friday; six Upper House opposition parties want a special committee if it arrives; Komeito’s new caucus would rather write a cheque; Takebe returned the ¥300,000; and Takaichi’s first year closed on a 49.1% Cabinet poll.",
    stories: [
      {
        id: "food-tax-committee",
        title: "The food-tax bill enters committee on Friday — the offset is still blank",
        body: "NHK says the food-and-drink consumption-tax bill enters substantive Lower House committee debate on the 23rd. The ruling side wants to pile up deliberation and pass it. The opposition wants a fuller sitting, including the prime minister at questions. The text is still the two-year cut from 8% to 1% from April 2027, plus income-linked grants. No named tax or spending offset appeared in today’s files. The extra Diet opened on 5 October. The committee is the first real sitting. The hole is the same blank.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nd-20261022de63246",
      },
      {
        id: "upper-house-special",
        title: "Six Upper House parties want a special committee if the bill arrives",
        body: "NHK, later on Thursday, said six Upper House opposition parties had agreed to ask the ruling side for a new special committee if the food-tax bill is sent to the Senate, on the ground that it needs a wider debate. The Lower House can override. The Upper House can delay. Takaichi’s camp is a minority there. Friday is the House of Representatives. The special committee is a request, not a vote.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nd-20261022de63494",
      },
      {
        id: "komeito-cash",
        title: "Komeito’s caucus would rather pay cash than cut the food tax",
        body: "Komeito, the Democratic Reform Association and the Centrist Reform Union held their first joint policy meeting as the Lower House caucus “Chudo” on Wednesday. They agreed that a cash payment would do more, faster, than an inefficient tax cut. Komeito’s Hiromasa Nakano called the two-year 8-to-1% food-tax bill “very ambiguous” in its effect and said the three parties want to line up on a yes or no. Komeito’s counter is about ¥80,000 a head over two years. Democratic Reform’s Takayuki Ochiai wants ¥40,000 each, quickly, then an income-linked scheme. Nikkei printed it as Kyodo. The votes are not lined up. The cash figures are.",
        sourceLabel: "Nikkei / Kyodo",
        sourceHref:
          "https://www.nikkei.com/article/DGXZQOUA21AWQ0R21C26A0000000/",
      },
      {
        id: "takebe-return",
        title: "Takebe returned the ¥300,000 and corrected the funds report",
        body: "Farm minister Arata Takebe said Wednesday he had returned a ¥300,000 donation and corrected the political-funds report after Shukan Bunshun said his Hokkaido LDP branch took the money on 15 October 2024, the first campaign day, from a Mombetsu maritime firm that held a harbour-vessel contract. The public offices election law bars government contractors from election-related donations. Takebe said he had not known the firm was on public works. He is “deeply sorry.” He replaced Kazuo Yana last Thursday. Yana went over road cuts. Takebe has been in the job a week. The money is back. The law question is not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88924",
      },
      {
        id: "takaichi-year",
        title: "One year in: the Cabinet poll is 49.1%, a Kyodo record low",
        body: "Takaichi marked one year in office on Wednesday. Kyodo’s weekend poll had the Cabinet at 49.1%, a record low. The food-tax cut is still the top bill of the extra Diet; she told reporters that fuel subsidies have kept gasoline around ¥170 a litre, the lowest in the G7. The LDP–Ishin bloc can override in the Lower House and cannot in the Upper. Yana’s ouster is the hangover. She became Japan’s first female prime minister on 21 October 2025, the day after Komeito left and Ishin signed. The anniversary is a calendar fact. The 49.1% is the one that moved.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88877",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "22 Oct 2026",
    lede:
      "Kim sat in Tuesday’s Cabinet and the office said Thursday the meeting will not touch cases; Lee called keeping him out an impeachment risk; Kim Yo-jong put loudspeakers on standby in a matter of days; the unification ministry told Pyongyang to stop; and the PPP wants Seoul’s own speakers switched back on.",
    stories: [
      {
        id: "kim-cabinet",
        title: "The office: Cabinet will not touch cases; Kim still sits",
        body: "Kim Ji-yong sat in Tuesday’s Cabinet for the first time as Serious Crime Investigation Agency chief. Investigation chiefs had not. On Thursday, senior press secretary Seong Ghi-hong told reporters the government would keep investigations fair and politically neutral, and indictments independent; Cabinet meetings would not discuss individual cases or indictment instructions. Connecting attendance with political control, he said, “is not at all in line with” what the meetings are for. They are for sharing the administration’s philosophy and livelihood issues with heads of government bodies. The agency opened this month. The chair was empty until this week. The meeting is the first. The independence sentence is the reply.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261022005751315",
      },
      {
        id: "lee-impeach",
        title: "Lee: keeping Kim out of Cabinet would be impeachment territory",
        body: "Later on Thursday, Lee posted again on X: excluding the SCIA chief from Cabinet would mean giving up command and supervision of the agency, which he said would be grounds for impeachment and criminal punishment for dereliction of duty. Yonhap put it at the bottom of the same file as Seong’s briefing. The Constitution line is the president’s. The no-cases line is the office’s. The two sentences are meant to sit together. They do not dissolve the row.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261022005751315",
      },
      {
        id: "kim-yo-jong-speakers",
        title: "Kim Yo-jong: loudspeakers on standby in a matter of days",
        body: "Kim Yo-jong said Thursday, via KCNA, that “new counter means will get into the alert for duty at all the southern border line and the loudspeakers against the ROK will be on standby in a matter of days.” She inspected the fence on Wednesday with Pak Jong-chon. JCS spokesman Capt. Jang Do-young said Seoul had detected no new weapons or systems, and that routine loudspeaker maintenance was already visible. Defence spokeswoman Chung Bin-na told the North to stop “groundless claims” and MDL incursions. Three soldiers were wounded on 21 September. Pyongyang still denies the mines. The speakers are a date. The weapons are not on the South’s map.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261022001152320",
      },
      {
        id: "unification-stop",
        title: "The unification ministry: stop — and talk about the line",
        body: "The unification ministry on Thursday told Pyongyang to stop acts that raise the risk of clashes along the Military Demarcation Line. Loudspeakers, it noted, ran both ways until June 2025 and caused “unbearable suffering.” The “fundamental solution” is to reconcile the two readings of the MDL and set up a communication system; Seoul has proposed military talks and has had no answer. Mines last month: the UNC and the South blame North Korean antipersonnel mines south of the line; Pyongyang denies it. The ministry’s verb is stop. The North’s is standby.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261022004300315",
      },
      {
        id: "ppp-speakers",
        title: "The PPP wants Seoul’s loudspeakers back on — and two heads",
        body: "People Power floor leader Jeong Jeom-sig on Thursday again demanded loudspeakers toward the North over the 21 September mines, and the resignations of Unification Minister Chung Dong-young and NIS Director Lee Jong-seok. He asked how Seoul could talk about OPCON if the commander-in-chief cannot tell a mine from an “unfortunate accident” — Lee’s Armed Forces Day phrase. Spokesman Choi Bo-yoon said the military should resume broadcasts “to dismantle the North Korean regime’s false propaganda.” Jang Dong-hyeok warned the MDL would become a “launchpad” for nuclear weapons. The North’s speakers are days away. The South’s are a party demand.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261022007900315",
      },
    ],
  },
];

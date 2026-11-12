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
    updatedAt: "12 Nov 2026",
    lede:
      "Anthropic’s yearly usage policy is in force today, including a ban on sustained cruelty to the models; Google shipped a Decisions API that scores options instead of writing sentences; AlphaGenome 2 went to researchers, not clinics; AWS said agents wrote every line of a local emulator and that no person reviewed the code; and Databricks put Genie on unsupervised jobs.",
    stories: [
      {
        id: "anthropic-aup",
        title: "Anthropic’s usage policy is live: no fake-account mills, and no cruelty for its own sake",
        body: "The October 8 post took effect on 12 November. Anthropic folded scattered bans into a section titled Do Not Engage in Deceptive Campaigns or Artificial Activity, covering political or commercial work that hides who is speaking, runs fake accounts, or builds the tools for influence campaigns. The elections heading is now Do Not Undermine Democratic Processes — impersonating candidates, lying about how to vote, suppressing turnout. A blanket ban on personalised vote targeting is gone; the lab says it was catching nonprofits writing ballot notices in other languages. Weapons language now names guidance software and arming drones. High-risk health, legal and finance uses still need a qualified human who can change the output, and the person affected must be told AI was used. Hardware that can injure must stop if the operator intervenes or the model is cut off. The new line is sustained, needless cruelty toward the models. Ordinary frustration, dark fiction and testing are out of scope. Claude can already end those chats. The policy is the rulebook. Today is the date on it.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/news/2026-usage-policy-update",
      },
      {
        id: "gemini-decisions",
        title: "Google’s Decisions API scores a thousand questions and bills no output tokens",
        body: "Min Choi and Felix Yu’s Wednesday post put the Gemini Decisions API in Google AI Studio, powered by gemini-decision-1. One multimodal input — text, images, audio, video or PDFs, up to 256K tokens — can carry up to 1,000 independent yes/no, multiple-choice or rubric questions. The model scores the options in a single forward pass instead of writing an answer token by token, and returns probabilities and a 0-to-1 confidence in 150 to 250 milliseconds end to end. Price is $0.10 per million input tokens and nothing for output. Google said Notebook already uses it to route queries, with up to 40 percent lower latency on everyday asks; Stitch uses it for instant wireframes; Search uses it as a safety layer on MCP tools. Choice questions take 2 to 255 options. The shared input is billed once. It is a classifier with a Gemini badge. It is not a chat.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/",
      },
      {
        id: "alphagenome-2",
        title: "AlphaGenome 2 reads cells, not tissues — and is still not a diagnostic",
        body: "DeepMind on Wednesday released AlphaGenome 2, a conditional DNA model that takes a million-letter sequence plus a cell type or state, rather than predicting every tissue at once. It was trained on bulk and single-cell data, including more than 107 million cell profiles across 68 tissues, and adds DNA methylation to the earlier readouts. On the TenK10K immune map it identified nearly twice as many causal variants as the original model fine-tuned on single-cell data — 30 percent against 16 percent — and 43 percent against 23 percent of directional gene effects. Scientists can upload a small RNA-seq snapshot of an unseen state; the lab said it distinguished vaccine-activated T cells in a COVID-19 mRNA study. The API is open for non-commercial research today, with a private commercial preview. The post is explicit: not validated or approved for clinical or diagnostic use. The atlas is a ranking tool. It is not a test result.",
        sourceLabel: "Google DeepMind",
        sourceHref:
          "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/",
      },
      {
        id: "aws-emulator",
        title: "AWS said agents wrote the emulator, and that no person reviewed the code",
        body: "Amazon on Wednesday released AWS Emulator, a local HTTPS stand-in for AWS APIs that runs on a laptop or in CI. Matthew Goldberg, a senior principal engineer, wrote that thousands of autonomous agents produced every line, and that “our team hasn’t written or reviewed any of the code.” One agent team writes fidelity tests against real AWS; a second files gaps; a third patches until a merge gate — compile, security, no fidelity regression — lets the change in. The empty server began with 438 API models. Unsupported calls return HTTP 501. Source is on GitHub under CC0. There is no extra service fee. Goldberg’s post is the claim. The AWS News Blog is the product card: credentials whose access keys start with EMULATOR, a single account 000000000000, no IAM evaluation the way AWS does, and a request AWS would deny might succeed. Agents wrote it. The humans built the colouring book.",
        sourceLabel: "Amazon",
        sourceHref:
          "https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator",
      },
      {
        id: "databricks-genie",
        title: "Databricks put Genie on unsupervised jobs, and Ghodsi used the ugly answers",
        body: "Databricks on Wednesday unveiled a second-generation Genie that, the company says, can take a goal and run the steps without a person in the loop, using an ontology built from what customers already store on the platform. TechCrunch’s Julie Bort sat with chief executive Ali Ghodsi while he opened his own agent rather than a demo. It had parsed the weak spots on an employee survey and discarded some executives’ fixes; it had summarised a sales pitch that went badly, including the features the prospect said it still needed; it had prepped him for a podcast. Databricks has about 12,000 staff. Ghodsi cited Dunbar’s number, 150, as the point at which people stop bringing the chief executive bad news. He said he uses Genie in his personal life instead of OpenClaw, Instinct or Muse, and that Unity Gateway can cap spend or swap in cheaper open-weight models. The pitch is an always-on staffer. The demo was the inbox a salesperson would not send.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/11/databricks-new-ai-agent-tells-ceo-ali-ghodsi-the-unvarnished-truth/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月12日",
    lede:
      "邱垂正說中共在宣傳統一利好、形塑議統。赴陸失聯或遭留置的國人累計470人。今天公報是7架次共機、7艘共艦、2艘公務船。政院已收到老農津貼函文，覆議看到19日。國民黨成立反奧步法律顧問團。投票日仍是28日。",
    stories: [
      {
        id: "qiu-yitong",
        title: "邱垂正：中共在形塑「議統」氛圍",
        body: "立法院內政委員會今天邀請陸委會、海基會業務報告。陸委會主委邱垂正說，今年6月以來共機艦持續擾台，並以日菲啟動海域劃界之名，派海警、科研船到台灣東部海域做「專項執法」、環資調查，操作灰帶侵擾。他說中共更宣傳統一利好、形塑議統氛圍：7月施行的《民族團結進步促進法》把「國家統一」與「民族團結」掛鉤，片面賦予台灣民眾承擔「統一」的法律義務，並藉與威權國家領袖會晤鞏固「國際一中」。政府端出的仍是和平四大支柱、國安統戰威脅17項因應策略、守護民主台灣國安行動方案。跨國鎮壓，他再說一次：中共對台不具管轄權；陸委會將做安全指引手冊。交流要管，促統的句子寫進了委員會。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/7331/9873743",
      },
      {
        id: "qiu-470",
        title: "赴陸失聯、留置：113年起已達470人",
        body: "同一場質詢，邱垂正給了人數。自113年1月1日至今年11月6日，國人赴陸失聯、遭留置盤查或疑遭中共有關部門限制人身自由者已達470人。他呼籲國人、尤其公務人員慎重評估赴陸風險，並用「國人赴陸港澳動態登錄系統」。中共9月實施《國務院關於出境入境管理的規定》，他說法條定義空泛、不確定性高，大幅擴張資訊監控與行政裁量；在陸台商、台企幹部及科技、半導體從業人員是高風險族群。人數寫到11月6日。指引手冊還沒發。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/7331/9873743",
      },
      {
        id: "pla-bulletin",
        title: "7架次共機、7艘共艦、2艘公務船",
        body: "國防部統計11日上午6時至12日上午6時，偵獲共機7架次、共艦7艘及公務船2艘在台海周邊活動，其中3架次進入西南及東部空域。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是4架次共機、7艘共艦、3艘公務船，2架次越中線侵擾西南空域。艦沒變，公務船少一艘，飛機多了三架次；今天英文公報寫的是進入西南及東部防空識別區，沒有再寫中線。西太平洋的航艦編隊還在部長前天的句子裡。台海公報是日常的船與機。",
        sourceLabel: "軍聞社",
        sourceHref:
          "https://mna.mnd.gov.tw/news/detail/?UserKey=02d54f50-d723-46d0-b5b8-c1239456d62d",
      },
      {
        id: "farmer-pension",
        title: "老農津貼函文10日到政院，覆議看到19日",
        body: "行政院發言人李慧芝今天主持院會後記者會。她說政院10日已收到立法院三讀的《老年農民福利津貼暫行條例》函文；在野版本把津貼調到每月1萬5000元，每年額外增加320億元，事前未與政院溝通，將壓縮其他農業資源。政院版是每月1萬元。福利政策三原則仍是：不增加實質舉債、不排擠其他政策、程序合憲合法。她說目前正研議三讀內容，將在憲法與法律職權內採取合法、合憲因應。若要覆議，最晚須於19日送出。去年以來政院對立法院修法多用不予副署，最近一案是老福法。加碼寫進了法律。副署還沒寫。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/6656/9874209",
      },
      {
        id: "kmt-legal",
        title: "國民黨成立「反奧步法律顧問團」",
        body: "國民黨立院黨團今天與蔣萬安競辦宣布，和律師葉慶元、王相傑等人成立「反奧步法律顧問團」，對造謠、抹黑、變造影音「零容忍」。首席副書記長洪孟楷說，目的是提早點破歷史上的抹黑手段，呼籲支持者截圖、錄影存證並向競總通報。蔣競總總幹事羅智強要選民對選前爆料「停一停、想一想、聽一聽」。葉慶元說，意圖使人不當選而散布謠言構成《選罷法》妨害選舉罪，並要檢調行政中立。投票日是28日。顧問團是律師名單。票還在16天後。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/6656/9874207",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "12 Nov 2026",
    lede:
      "Mimura called the yen’s slide too rapid after it poked ¥160; Takaichi is due in the Upper House special committee tomorrow; the LDP, Ishin and Kokumin submitted a 31-seat cut; wholesale prices rose 7.1 percent in October; and Motegi called Russia’s grab of JT assets unusual.",
    stories: [
      {
        id: "yen-mimura",
        title: "Mimura: the yen’s fall has been “too rapid”",
        body: "The yen slipped as far as ¥159.94 overnight after hotter US inflation, then firmed to about ¥159.63 on Thursday once Atsushi Mimura, the vice finance minister for international affairs, spoke. He told reporters he had a strong impression that moves over the past few days had been “too fast,” and that it was “too early” to forget this summer’s joint Japan–US intervention. Japan Times, from Bloomberg, treated ¥160 as the line that revives intervention talk. The dollar had broken a tight recent range. Mimura did not say Tokyo would buy yen. He named the speed, and he named the summer. The print is still on the wrong side of 159.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/11/12/markets/yen-near-160-renewed-intervention-risks/",
      },
      {
        id: "food-tax-committee",
        title: "The food-tax special committee is tomorrow, with Takaichi in the room",
        body: "An Upper House directors’ meeting on the food-and-drink consumption-tax bills formally agreed Thursday that Friday will bring the purpose explanation, questions with the prime minister present, and the start of substantive debate. NHK timed the note at noon, updated at 13:50. The bill is still the two-year cut from 8% to 1% from April 2027, plus income-linked payments whose cutoffs sit in a Cabinet order. The coalition does not hold a majority in the Upper House. The offset is still unnamed. Wednesday was the plenary. Tomorrow is the committee. The invoice is the same sentence.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nd-20261112de74564",
      },
      {
        id: "seat-cut",
        title: "LDP, Ishin and Kokumin submitted a 31-seat cut, not 45",
        body: "The Liberal Democratic Party, Japan Innovation Party and Democratic Party for the People jointly submitted a Lower House bill on Thursday to cut 31 proportional seats, leaving single-member districts untouched. That scales back the 45-seat cut in the June LDP–Ishin text. Japan Times has the chamber falling from 465 to 434 if it passes, Chugoku and Shikoku merged into one proportional bloc, allocation shifted to a modified Sainte-Lague method, and losing dual candidates needing one-sixth of the district vote instead of one-tenth. The three parties want it by 12 December. Katsunobu Kato said he hoped they would work together to secure passage. Komeito argues that cutting only proportional seats weights the districts; the Communists say smaller parties would lose. Japan Times notes the three already hold majorities in both chambers. The 45-seat IOU is now a 31-seat bill. The food-tax still does not have those votes.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/11/12/japan/politics/seat-reduction-bill-submitted/",
      },
      {
        id: "wholesale-cpi",
        title: "October wholesale prices rose 7.1 percent",
        body: "Bank of Japan data on Thursday showed prices of goods traded between companies up 7.1 percent from a year earlier, after 6.8 percent in September. Kyodo called it a still-high pace. The food-tax cut is sold as relief from household prices. The yen is sold as too fast. The producer print moved the other way. The offset for the tax cut is still not a line item.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91120",
      },
      {
        id: "motegi-jt",
        title: "Motegi: putting JT’s Russian assets under local control is “unusual”",
        body: "Foreign minister Toshimitsu Motegi told the Upper House Committee on Foreign Affairs and Defense on Thursday that Russia’s move to put Japan Tobacco’s assets under domestic control was “unusual.” Tokyo had protested and strongly urged retraction. The company, he said, is “contributing to the regional economy” by operating there. Kyodo carried the remarks in its Thursday digest. The protest is on the record. The assets are not back.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91120",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "12 Nov 2026",
    lede:
      "The presidential office said Cheonghae will not fight a US war and will not sit under another command; the motion still has a local commander for coalition maritime jobs; Lee flies to Manila then Shenzhen; a Blue House official put the odds of Kim at APEC as not high; NBS has Lee at 44 against 47; and the justice nominee would not say he would drop the president’s cases.",
    stories: [
      {
        id: "cheonghae-command",
        title: "Cheonghae: no US war, no other command — and a local commander in the fine print",
        body: "A senior presidential official told reporters at Chunchugwan on Thursday that expanding Cheonghae’s map toward waters south of Oman is for nationals, vessels and energy routes, not for joining a US-led fight. What Seoul will not do, he said, is participate in combat or war, or come under another command system; in an emergency the unit would use only the minimum right of self-defence. Yonhap Infomax has the office also saying it is talking to Washington and Tehran. The Hankyoreh, from the motion submitted to the Assembly on Tuesday, notes that while the Joint Chiefs chair keeps operational control for escorting Korean ships, “should it participate in an international maritime security operation such as those run by the Combined Maritime Forces or the EU, a local commander will exercise operational control.” That sentence was in last year’s paper; this year’s adds restoring freedom of navigation. Authorised strength would rise to 395 through 31 December 2027. The office named the ceiling. The motion still names a local commander.",
        sourceLabel: "Yonhap Infomax",
        sourceHref: "https://en.infomaxai.com/news/articleView.html?idxno=148179",
      },
      {
        id: "lee-apec",
        title: "Lee: Manila on Monday, Shenzhen on Wednesday, home on Thursday",
        body: "National security adviser Wi Sung-lac said Thursday that President Lee Jae Myung leaves Monday for the ASEAN summit in Manila, then a two-day APEC trip to Shenzhen from Wednesday. In Manila: a Korea–ASEAN summit, then leaders of the five Mekong states — Cambodia, Laos, Myanmar, Thailand and Vietnam — on critical minerals and transnational crime; Tuesday is ASEAN Plus Three and the East Asia Summit. In Shenzhen he attends the APEC CEO summit and a dinner hosted by Xi Jinping and Peng Liyuan, then the leaders’ meeting under this year’s theme, “Building an Asia-Pacific Community to Prosper Together,” and flies home the same day. Wi said Lee will ask ASEAN and APEC members to back Seoul’s peaceful-coexistence line toward the North. The itinerary is written. The bilateral list is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112002752315",
      },
      {
        id: "nk-apec",
        title: "A Blue House official: Kim is unlikely at APEC, and a Trump meeting is not likely either",
        body: "The same briefing produced a separate, unnamed presidential official on North Korea. Pyongyang is unlikely to attend next week’s APEC summit in Shenzhen, the official said. “It would be difficult to say there is zero possibility of talks” with Washington, “but I think the probability might not be high.” Trump has repeatedly offered to meet Kim; the official put a Trump–Xi–Putin meeting in the cannot-be-ruled-out column, and said peninsula issues at that table cannot be ruled out either. OPCON talks with Washington were “faring well.” The invitation is American. The RSVP, in Seoul’s telling, is not coming.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112003751315",
      },
      {
        id: "nbs-poll",
        title: "NBS: Lee 44 percent, disapproval 47",
        body: "The National Barometer Survey, 1,001 adults Monday through Wednesday, put positive assessments of Lee’s job performance at 44 percent, down 2 points from two weeks earlier, and negative at 47 percent, up 3. Disapproval had run ahead for several weeks, flipped in the previous poll, and is ahead again. Fifty-one percent said he should scale back social media for policy, citing remarks “without sufficient deliberation”; 42 percent backed the habit. The Democratic Party was at 35 percent, down 1; People Power unchanged at 25. Margin of error plus or minus 3.1 points at 95 percent. The live stream is still on. The sample would rather he talk less.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261112006100315",
      },
      {
        id: "justice-nominee",
        title: "Lee Yong-cheol would not say he would drop the president’s cases",
        body: "Justice minister nominee Lee Yong-cheol, arriving for a second day of hearing prep at the Seoul Immigration Office, declined to say whether he would direct the prosecutor general to withdraw charges against President Lee if a special counsel found prosecutors had abused their authority. He called the question premature. The Assembly passed the special-counsel bill on 6 November without the clauses that would have let the counsel take over existing cases; the presidential office said Cabinet takes it up on 17 November. Three of the president’s five criminal cases are still at first instance, including Daejang-dong and Seongnam FC, a Gyeonggi corporate card, and the Ssangbangwool $8 million North Korea allegation. Article 255 allows withdrawal before a first-instance verdict; whether the minister can order it through the prosecutor general is disputed. People Power’s Choi Bo-yoon noted the nominee and the president had shared a law firm. Kim Seung-won, the previous nominee, had said he would not direct a withdrawal. The hearing is not yet the hearing. The answer was that it was too soon.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10935334",
      },
    ],
  },
];

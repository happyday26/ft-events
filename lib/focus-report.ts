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
    updatedAt: "5 Nov 2026",
    lede:
      "OpenAI’s mid-October pipeline produced 948 Linux root exploits for $1.2 million in API credits; Images 2.6 now makes GIFs and is 50% faster; Pierre is signed, not closed; Google will switch K-12 Search off until an administrator turns it on, and Search still comes with AI; and it published a health-evaluation method, not a product.",
    stories: [
      {
        id: "linux-pipeline",
        title: "A $1.2m run minted 948 Linux root exploits — and candidate patches",
        body: "OpenAI posted the write-up on Wednesday. An upcoming cyber model scanned the latest Linux kernel in mid-October: 2,308 candidate findings, 1,724 reproduced in 30 hours, 291 information-leak proofs of concept, and 948 working local privilege-escalation exploits against a stock desktop in a virtual machine. The run cost $1,213,430 in API credits, or $1,279 per unique LPE. Variant analysis produced 948 distinct candidate patches; those are for maintainer review, not merged fixes. After ten days, 61 LPEs were already patched upstream, 43 had staging patches, and 299 were being discussed in public. The agents used at least ten techniques that were new to the outside kernel experts OpenAI showed them. Human researchers still review each bundle before it is reported. The post’s near-term line is that an unpatched low-privileged account should be treated as root for a well-resourced attacker. The exploits are research artefacts. The patches are still a queue.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/a-thousand-fewer-paths-to-root/",
      },
      {
        id: "images-26",
        title: "Images 2.6: GIFs, a 50% speed-up, and 4 billion pictures a week",
        body: "The model is in ChatGPT, Codex, and the API from Wednesday, on every subscription tier. Generation is 50% faster than before. In the API, GPT-Image-2.6 Flare can return a low-quality image in as little as six seconds; Sunburst is the higher-fidelity pair for medium or high quality. ChatGPT can now make a GIF from a prompt or an uploaded photo, and edit speed and frames in the same thread. OpenAI says people now create 4 billion images a week across ChatGPT, Codex, and the API — more than half a billion a day. Markup, already in ChatGPT, comes to the API; so do SVG exports and a complexity control for how much planning the model does. The product is live. The system card is a separate page.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-images-2-6/",
      },
      {
        id: "pierre",
        title: "OpenAI will buy Pierre — Codex already ships its diffs",
        body: "The announcement is Wednesday: OpenAI will acquire Pierre Computer Company, the firm behind Code Storage and a set of open-source Git tools. If you have browsed files or reviewed a change in the Codex app, you have already used Pierre’s Trees and Diffs libraries. Diffs’ Edit mode lets a reviewer fix a line where they see it; Highlights is a syntax highlighter that updates as a developer types or an agent streams code. After close, OpenAI wants Codex to “connect the code a company ships with the decisions its people make.” Pierre’s open-source projects stay open; Code Storage customers can keep using it while the features are folded in. Closing is subject to customary conditions, including regulatory approvals. Until then the two companies stay separate. No price was printed.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/openai-to-acquire-pierre",
      },
      {
        id: "google-k12",
        title: "Google will turn K-12 Search off — and Search still comes with AI",
        body: "Chris Phillips, Google’s education vice-president, wrote on Tuesday that Gemini, Gemini Notebook, Gemini in Classroom, and Google Search will be entirely off for K-12 student accounts until a school administrator turns them on. Until Tuesday, Gemini in Classroom was on unless a district switched it off. After the post drew fire, Google said a school can enable Search without switching on the extra Gemini products. It cannot have Search without AI features: AI Mode and AI Overviews will offer step-by-step Guided Learning rather than a finished answer. Randi Weingarten of the American Federation of Teachers called it unfortunate that Google had “prioritized its business interests over the education of our children.” Josh Golin of Fairplay called it an attempt “to strong-arm schools into using its AI products.” Google’s later statement said the announcements “give schools more choice, not less.” The default is off. The AI stays in Search.",
        sourceLabel: "NBC News",
        sourceHref:
          "https://www.nbcnews.com/tech/tech-news/google-shut-search-schools-opt-ai-rcna607280",
      },
      {
        id: "google-health",
        title: "Google published a health-AI method, not a score",
        body: "Sarah Montgomery-Taylor, clinical evaluation lead at Google for Health, posted a white paper on Wednesday written with Elizabeth McGlynn and Dana Gelb Safran. The framework judges models on accuracy, safety, and usefulness, and combines closed-question benchmarks, autoraters, and expert human review on common and high-risk health scenarios. Google says it already uses the method on its own models and is publishing it so developers, researchers, and clinicians can copy the approach. The post does not name a product, a pass mark, or a date when a Google health agent will be held to the rubric in public. The paper is a method. The clinic is still the old one.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/technology/health/evaluating-health-ai-at-scale/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月5日",
    lede:
      "追加預算初審完了：中油、台電撥補全部保留送院會。台海21架次、19架越中線。顧立雄說民主黨拿下國會也不改軍售時程。法務部要把跨國鎮壓寫進反滲透法。老人福利法副署明天到期。",
    stories: [
      {
        id: "extra-first-review",
        title: "追加預算初審完竣：中油台電全數保留，先送黨團協商",
        body: "立法院財政等七個委員會今天聯席續審115年度追加預算。經濟部國營事業管理項下獎補助費1,725億3,500萬元，其中1,014億3,100萬元補中油穩物價、711億400萬元補台電；營業基金另編增資中油2,338億3,400萬元做天然氣建設。國民黨賴士葆提案國營事業刪60%、營業基金刪508.07億；李彥秀要凍十分之一。民眾黨洪毓祥要刪營業基金2,007億、凍台電70億與中油100億；劉書彬要刪中油增資全數。次長賴建信說一毛都不能砍、事涉物價；代理召委賴士葆不接受。吳秉叡改口保留。召委林德福宣布審查完竣，提報院會前須交黨團協商。10月30日朝野已約定11月20日前三讀。委員會過了；數字還在桌上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050103.aspx",
      },
      {
        id: "pla-bulletin",
        title: "21架次、19架越中線：北部、中部、西南、東部都有",
        body: "國防部統計4日上午6時至5日上午6時，偵獲共艦8艘、公務船8艘及共機21架次，其中19架次逾越台灣海峽中線，侵擾北部、中部、西南及東部空域。國軍以任務機、艦及岸置飛彈系統監控應處。標題寫19架次擾台；正文是21架次、19架越線。艦8艘、公務船8艘。空域寫到北、中、西南及東部。越線的數字在身體裡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050032.aspx",
      },
      {
        id: "gu-midterms",
        title: "顧立雄：民主黨拿下參眾兩院，軍售仍要如期",
        body: "美國期中選舉，民主黨取得聯邦眾議院與參議院控制權。國防部長顧立雄今天在立法院聯席審查追加預算前受訪，被問軍售會不會變。他說美國國會一向不分黨派支持台灣增強防衛力量；國防部會持續跟美國國會議員溝通，並與美國戰爭部保持密切聯繫，確保相關軍售如期進行。案沒有新的批准；分批也沒有新的通知。時程在部長嘴裡還是原來那一句。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050060.aspx",
      },
      {
        id: "transnational-repression",
        title: "法務部要修反滲透法；陸委會說將來會有通報專線",
        body: "司法及法制委員會今天就跨境鎮壓專題質詢。法務部長鄭銘謙說現行傷害、毀損、恐嚇、妨害秘密多為五年以下，嚇阻力不足，也罰不到「台獨舉報專區」與跟性別無關的跟監；正依行政院指示研議修正反滲透法，增訂跨國鎮壓罪責並加重處罰，並設法沒收與網路擴散。陸委會副主委梁文傑把跨國鎮壓定義為境外勢力或其代理人對個人或社群的恐嚇、騷擾、傷害或脅迫，並說台灣唯一境外敵對勢力是中共。國民黨翁曉玲質疑不要把政策異議當成在地協力。民眾黨陳昭姿要通報管道；梁文傑說未來將設專線，矢板明夫、黃逸豪案已進七月成立的跨機關平台。黃逸豪本人在旁聽席。專線還沒號碼；條文還沒草案。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050114.aspx",
      },
      {
        id: "elderly-welfare",
        title: "老人福利法副署明天到期；民進黨團說石崇良是在溝通",
        body: "立法院日前三讀修正老人福利法第22條，近一年綜所未達申報標準或稅率未達20%的相對弱勢長者，由中央補助全額健保費。明天是行政院決定副署或覆議的最後期限。有媒體說人在美國的石崇良發簡訊，要醫藥與社福團體公開反對修法，有民團嫌被當選戰打手。民進黨團幹事長莊瑞雄今天說「施壓」太超過：行政部門跟業務相關團體說明修法前後的衝擊，合理正常，不溝通才不負責。他說衝擊落在三筆錢——65歲以上老人健保費、部分負擔，以及政府原本給中低收入戶等弱勢的補助。他稱石崇良有為有守。副署還沒下；覆議也還沒送。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611050091.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "5 Nov 2026",
    lede:
      "Takaichi will sit for one hour tomorrow and take opposition questions only; the same-day Lower House vote is still Goto’s to give; the Upper House has already stood up a special committee; the Nikkei closed 61,077.90; and the September minutes say discuss the size of a hike, not the pace.",
    stories: [
      {
        id: "food-tax-friday",
        title: "Takaichi gets one hour on Friday; the vote is still reserved",
        body: "LDP Diet affairs chief Hideki Murai met Yuichi Goto of the Lower House “Chudo” caucus on Wednesday. They agreed that Sanae Takaichi will attend the Financial Affairs Committee on the 6th for one hour, answering opposition questions only. Goto had asked for two hours; he told reporters that was the limit of the opposition’s numbers. Murai proposed a committee vote and an emergency plenary the same day so the consumption-tax cut can clear the Lower House. Goto reserved: he would “judge after hearing that day’s answers.” He listed the offset and the design of the income-linked workers’ benefit as arguments still open, and said he would put them to the prime minister. Murai said the points had largely been covered and that the ground for a vote was forming. The chair is booked. The stamp is not.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026110400334",
      },
      {
        id: "opposition-upper",
        title: "Tamaki will not vote yes as the bill stands; the Upper House already has a special committee",
        body: "Sankei’s Wednesday wrap puts numbers on the bill: food and drink from 8% to 1% for two years from next April. Yuichiro Tamaki of the Democratic Party for the People said “approval in its current form is out of the question.” Takeshi Shina, secretary-general of the Democratic Reform group, said he could “see no element to support.” The ruling camp has more than two-thirds in the Lower House and not a majority in the Upper House. Sankei’s warning is that a forced committee vote on Friday would give the opposition a thin-debate argument and could stall the Upper House start the ruling camp wants next week. The Upper House plenary on Wednesday already created a special committee on the consumption-tax and benefit bills. Goto still wants the offset in the prime minister’s own words. The Senate has a room. It does not have a majority.",
        sourceLabel: "Sankei",
        sourceHref:
          "https://www.sankei.com/article/20261104-W2F6KNGK35KUDPW3INP5G5AKJ4/?outputType=asynd",
      },
      {
        id: "nikkei-close",
        title: "The Nikkei closed 61,077.90, a fourth down day; Toyota jumped more than 16%",
        body: "Reuters timed the close at 16:02 JST. The Nikkei 225 finished at 61,077.90, down 1,110.73 points or 1.79%, a fourth consecutive decline. It opened 0.32% higher, then sold the AI and chip names on the same midterm story as Wednesday — tighter US AI rules, slower data-centre build-out — and printed a low of 60,786.19, down 2.26%. More than 70% of Prime Market issues still rose. Toyota, after lifting its outlook and shareholder returns in the afternoon, was up more than 16%. Monex’s Takaaki Yoshino said AI and semiconductors will keep being sold after the midterms, and that cheaper oil argues for domestic and value names. The breadth was up. The index was not.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261105110",
      },
      {
        id: "yen-157",
        title: "The dollar was ¥157.88 at 3 p.m., off New York’s ¥158.38",
        body: "Reuters’ 15:55 Tokyo file put the dollar at ¥157.88–157.91 at 3 p.m., against ¥158.38–158.41 in New York at 5 p.m. Wednesday and ¥158.35–158.36 at the Tokyo open. The yen firmed as the Nikkei softened and US yields eased. Dealers told Reuters the next cue is crude, after the US midterms raised hopes of an end to the fighting in Iran. The dollar recovered to ¥158 at one point and then sat just below it through the afternoon. There was no Ministry of Finance comment in the file. The print is the afternoon, not a fix.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261105106",
      },
      {
        id: "boj-minutes",
        title: "September minutes: discuss the size of a hike, not the usual pace",
        body: "The Bank of Japan released the September 17–18 minutes on Thursday. One member said that after two hikes a year in 2024 and 2025, and with US and European central banks turning to increases, the Bank was in “a new phase” and should “discuss the size of a rate hike, rather than adhering to a certain pace of rate hikes.” The meeting raised the policy rate to 1.25% from 1.0%, the shortest gap since the Bank left unorthodox easing in March 2024; two members dissented. A majority said conditions would still be accommodative. One member said the step moved the rate closer to neutral. On further timing, one member warned against being overly cautious on prices; another, who favoured a hold, wanted more time on consumption. The October 29–30 meeting left the rate at 1.25%. Kyodo adds that markets are increasingly pricing another hike at the December 17–18 meeting. That is the newspaper’s market line, not a vote.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90404",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "5 Nov 2026",
    lede:
      "Cheonghae will be asked to sail closer to Hormuz, not into it; a seventh special counsel is on the floor with a filibuster already running; the Kospi closed 5,383.80, down 5.28%; Lee wants the Assembly to recut the Constitution; and unification said Binance sanctions talks have not started.",
    stories: [
      {
        id: "cheonghae-hormuz",
        title: "Cheonghae goes south of Oman — closer to Hormuz, not into the strait",
        body: "A vice-ministerial meeting on Thursday adopted a revised mandate for the anti-piracy Cheonghae unit. The operational area would extend from the Gulf of Aden northeast to open water south of Oman, roughly doubling the radius to about 1,930 km. A defence official, speaking anonymously, said the reinforcement is non-combat, under Korean command, and that the P-8A “will be prohibited from targeting or monitoring Iranian territory, territorial waters or the interior of the Strait of Hormuz.” The unit would add 75 people, to 395, plus a P-8A, an EOD team and unmanned minesweepers — the last of those, another official said, to be ready for a post-war mine-clearance job that would need a “permissive environment” and a second Assembly vote. Cabinet endorsement is due next week, then the National Assembly; the current mandate expires on 31 December. Seoul has already turned down combat support against Tehran. The bill is a map. It is not a ship in the strait.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261105000751315",
      },
      {
        id: "special-counsel",
        title: "The fabricated-indictment bill is on the floor; the PPP is talking it out",
        body: "Speaker Cho Jeong-sik placed the bill before the plenary on Thursday over People Power Party objections. The PPP started a filibuster at once. The Democratic Party text, first tabled in April, would have a special prosecutor look at 12 indictments — six of them President Lee Jae Myung’s, from Seongnam and Gyeonggi, covering development deals, remittances to the North, and a government charge card; the other six mostly from the Moon Jae-in years. Lee’s trials are frozen under Article 84. The clause that would have let the counsel cancel indictments was stripped after a backlash; the PPP still says the justice ministry could use the findings to drop charges. Floor leader Jeong Jeom-sig called it “the worst anticonstitutional coup against parliament in constitutional history.” If it passes it will be the seventh independent counsel since Lee took office. Lee would pick from three names, one each from the DP, the PPP and Rebuilding Korea; the team could run to 309 people for 200 days. The vote is not tonight.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261105004751315",
      },
      {
        id: "kospi-close",
        title: "The Kospi closed 5,383.80, down 5.28%, after a 10:16 sidecar",
        body: "Yonhap timed the close at 15:38. The Korea Composite Stock Price Index fell 300 points, or 5.28%, to 5,383.80. It opened 1.82% lower and kept falling; the exchange fired a sell-side sidecar at 10:16 a.m. to halt program trading in Kospi names for five minutes. The file’s cause is the US midterms: a Democratic “blue wave,” and the fear that a Congress seated in January will tighten rules on AI data centres and so the investment that follows. The won also fell against the dollar; the English wrap did not print a close. The index is a Thursday print. The Congress is a January one.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261105007200320",
      },
      {
        id: "constitution",
        title: "Lee: the Constitution is a cloth that does not fit — and the Assembly should recut it",
        body: "At a Cheong Wa Dae lunch on Wednesday with the Parliamentarian’s Society, Lee said that “given the contemporary environment, the current Constitution is somehow like a cloth that does not fit contemporary society.” Spokesman Kang Yu-jung said he wants a revision but does not want to lead it: a president-led rewrite “may not be welcomed by the public,” and the two-thirds vote in the Assembly is a “high barrier.” The desirable path, he said, is a bipartisan Assembly bill. The text has not been amended since 1987. Lee’s own ask remains a shift from a single five-year term to a four-year, two-term presidency. The Democratic Party put an amendment to a vote in May; the opposition boycotted and it died. The lunch was a preference. It was not a draft.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261104010600315",
      },
      {
        id: "binance-sanctions",
        title: "Unification has not opened Binance talks; the foreign ministry is only reviewing",
        body: "A unification ministry official told reporters on Thursday that Seoul “has not fully grasped the exact circumstances of the hacking case, so a discussion on how to respond to it has not even begun.” The FBI last week blamed North Korea for the theft of more than $6 billion from Binance; Kim Yo-jong this week called that a “grave political provocation.” Foreign ministry spokesman Park Doo-soon, asked about sanctions on the same case, said the ministry was “conducting an internal review of additional measures, including the unilateral cyber sanctions, though no decision has been made yet,” and pointed to existing working groups with Washington and with Washington and Tokyo. Unification Minister Chung Dong-young has separately opposed sanctions over the 21 September DMZ mines. The file is a review. It is not a list.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261105006051315",
      },
    ],
  },
];

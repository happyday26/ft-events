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
    updatedAt: "7 Oct 2026",
    lede:
      "OpenAI put 722 manuscripts on GitHub last night and called them 372 result families; the advisory group had asked for prompts and did not get them; Ironclad is the first named partner for training computer-use agents; and Sydney’s second day wanted an agent index, named Glasswing, and said data centres without training are a sugar hit.",
    stories: [
      {
        id: "openai-math",
        title: "OpenAI dumped 372 result families on GitHub at 6pm New York",
        body: "The Verge timed the drop to 11:26pm UTC. The public openai/math repository holds 722 manuscripts grouped into 372 families — a principal result plus companions, consequences, or alternative proofs. OpenAI says an unreleased internal model was tested on about 4,000 problems and that the average result used the equivalent of three hours of ChatGPT Pro thinking. Ten abridged reasoning summaries are in the repo; many, not all, of the manuscripts have Lean formalizations. AGMAI, the Institute for Advanced Study advisory group assembled after Navier–Stokes, said the release includes solutions to “hundreds” of open questions. In September the company had only said “more than 100.” The model is still not public. The papers are.",
        sourceLabel: "The Verge",
        sourceHref:
          "https://www.theverge.com/ai-artificial-intelligence/1005004/openai-math-release-github",
      },
      {
        id: "math-receipts",
        title: "The advisory group asked for prompts; OpenAI printed an average",
        body: "A spokesperson told Scientific American the new model produced almost every result from a single prompt to a single agent — a different story from the 10,000-agent Navier–Stokes swarm that cost millions. The same spokesperson said some results might have taken multiple attempts. Claimed items include a four-dimensional Kakeya solution and “actual progress” toward the Riemann hypothesis. MIT’s Andrew Sutherland said that until the model is released and the results can be replicated, one-shot claims should be treated as unverified: “We should ask for receipts.” AGMAI’s September recommendations asked labs to publish the model, the exact prompt, and the compute behind each result, and not to treat the papers as marketing. OpenAI is publishing average compute and some statistics, and no prompts. The spokesperson said the company is doing its best to comply and is not bound by the recommendations. Terence Tao has already called the pace “insane.” The company’s own mathematicians, the spokesperson said, do not yet understand many of the results. They are not slowing down.",
        sourceLabel: "Scientific American",
        sourceHref:
          "https://www.scientificamerican.com/article/openai-unleashes-hundreds-more-math-results-upon-a-field-already-in-shock/",
      },
      {
        id: "ironclad",
        title: "Ironclad is the first named partner for training computer-use agents",
        body: "Tuesday’s OpenAI note says the next computer-use problem is specialised software, not documents and websites. The first partner is Ironclad. The two sides built tasks that make an agent configure agreements, approvals, and reusable legal terms. GPT-6 Astra is the first frontier model trained on those tasks; on the research evaluation its average score was 32% higher than GPT-5.6 Sol’s, and estimated time per attempt was 48% lower. The company says it is working with a small number of software firms that already know the workflows. Astra is the model. Ironclad is the first named desk.",
        sourceLabel: "OpenAI / PublicNow",
        sourceHref:
          "https://www.publicnow.com/view/B3C6096DE032245B03A763630EE80758BE871BD8",
      },
      {
        id: "sydney-cyber",
        title: "Sydney day two: a stop sign will not work if the car has no brakes",
        body: "Palo Alto Networks’ Nicole Quinn told the Joint Select Committee on Wednesday that good road rules are not enough. “A stop sign won’t work if you don’t have brakes in that car.” The AI equivalent, she said, is secure-by-design — seatbelts, airbags, crumple zones — and privileged access to models so defenders can see a threat before it is used. Chair Tom Scully said you can regulate too hard and stop the cycle, or not enough, “and (it) becomes a wild west.” Almost 30% of critical vulnerabilities are now exploited within 24 hours. They asked for an up-to-date index of AI agents, of the kind that reached the Medicare portal in June. Australia’s AI Safety Institute has 25 staff and $7.5m; Quinn said that investment should grow and did not name a figure. Kwon apologised in the same room on Tuesday. Wednesday’s ask was a list of the agents.",
        sourceLabel: "The Canberra Times",
        sourceHref:
          "https://www.canberratimes.com.au/story/9363930/cyber-firm-labels-ai-without-regulation-as-wild-west/",
      },
      {
        id: "sydney-training",
        title: "Data centres without training are still a sugar hit",
        body: "The same AAP file from Wednesday’s sitting said the inquiry had already heard that data centres risked a brief “sugar hit” if they were not paired with AI training facilities, and that Australia’s advantages could be bled overseas. A focus on foreign investment, the piece said, would reduce long-term self-reliance. Palo Alto also named Anthropic’s Glasswing project — stood up when a model became “alarmingly good” at exploiting software bugs, and used to give certain players early access to the newest weights. Kwon’s apology was Tuesday. Wednesday’s leftover sentence was about who trains here, and who sees the model first.",
        sourceLabel: "The Canberra Times",
        sourceHref:
          "https://www.canberratimes.com.au/story/9363930/cyber-firm-labels-ai-without-regulation-as-wild-west/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月7日",
    lede:
      "十月第一次聯合戰備警巡打斷連續三天無共機。徐佳青請辭僑委會，卓榮泰准了。黃國昌帶八席出席國慶，順便提六問。穆勒納爾說跟監令人毛骨悚然。6076億還在委員會。",
    stories: [
      {
        id: "pla-patrol",
        title: "十月第一次聯合戰備警巡：14架次出海，9架次越中線",
        body: "國防部6日晚間說，自下午2時54分起陸續偵獲殲11、殲轟7、蘇愷30、空警500、運8遠干機等各型主、輔戰機及無人機計14架次出海，其中9架次逾越中線，進入北部及中部空域，配合共艦，假「聯合戰備警巡」之名騷擾周邊空、海域。國軍以聯合情監偵掌握，並派任務機、艦及岸置飛彈系統應處。此前三個早晨的公報是0架共機。空域連續空了三天；十月的第一次巡航從下午兩點五十四分開始。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610060298.aspx",
      },
      {
        id: "hsu-resigns",
        title: "徐佳青請辭僑委會，自請行政與司法調查",
        body: "僑委會委員長徐佳青今天記者會宣讀三點：任職六年半「問心無愧」，某些立委一再造謠扭曲，決定自請行政及司法調查、全力配合；為維護調查客觀獨立與委員長官箴，即日起請辭；政黨競爭是一時，國家安全與民主制度才是共同責任。民眾黨團近日指她讓美籍夫婿唐博偉用外館座車、未成年兒子隨行出訪並冒充活動攝影官，要求停職。她另說絕無浪費公帑或圖利家人，5日已感到攻防會讓同仁疲於奔命，昨天分別向賴清德與卓榮泰報告，兩人一度請她再想想，最後尊重並同意；國慶任務昨天已啟動交接。接替人選沒有。調查還沒有。椅子空了。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610070104.aspx",
      },
      {
        id: "huang-national-day",
        title: "黃國昌帶八席出席國慶，向賴清德提六問",
        body: "民眾黨主席黃國昌今天說，他與八位黨籍立委都收到國慶邀請，即使對賴清德「毀憲亂政」無法苟同，10月10日仍全體出席。六大建言：停止操弄對立、正視貧富差距、依法公布立法院三讀法律、提名跨黨派大法官、停止看顏色辦案、兌現社宅。他點名《2026世界不平等報告》與IDEA司法獨立分數，並說徐佳青請辭是「斷尾求生」。黨中央與執政黨的距離寫在六條裡；週六的座位還是去。",
        sourceLabel: "Newtalk",
        sourceHref: "https://newtalk.tw/news/view/2026-10-07/1064254",
      },
      {
        id: "moolenaar",
        title: "穆勒納爾：跟監令人毛骨悚然，中共是全球威脅",
        body: "美國聯邦眾議院「對中共戰略競爭特別委員會」主席穆勒納爾6日就FBI逮捕張婉瑩、賴清德家人在美被跟監發表新聞稿：中共再度於美國監控騷擾無辜民眾，侵犯美國主權，令人極其厭惡；行動意在協助對台灣總統家庭成員採取進一步行動，「令人感到毛骨悚然」；動搖台海穩定的野心是全球威脅。他肯定逮補，並說張婉瑩將獲公平審判。結語是希望賴總統與家人知道，特別委員會與美國民眾力挺他們。定性昨天在府與陸委會；華府的句子今天到了中央社。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aopl/202610070019.aspx",
      },
      {
        id: "cho-extra",
        title: "6076億還在委員會：你不急，我們很急",
        body: "民眾黨洪毓祥昨天質詢，預算中心指預算法第2條須經立法程序公布才叫法定預算，總統18日才公布115年度總預算，政院9月3日就通過追加、9月8日送進立法院。卓榮泰說四個要件沒寫必須等哪個程序，「問題在大院，不在行政院」，立法院延誤351天才造成這個狀況；8月14日三讀後等到9月初還沒看到預算書。「因為你不急，我們很急，現在已經剩下2個月、3個月。」今天沒有委員會或三讀的新進度。時程在吵；案還在一讀後的委員會。",
        sourceLabel: "Newtalk",
        sourceHref: "https://newtalk.tw/news/view/2026-10-06/1063936",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "7 Oct 2026",
    lede:
      "Takaichi told the Lower House the food-tax cut was the best method and still did not name the offset; Komeito asked her to think again; the land ministry said nobody felt pressure from Yana but he did call; Koja was in Tokyo; and the Marines posted a midnight curfew.",
    stories: [
      {
        id: "food-tax-best",
        title: "Takaichi: the food-tax cut is still “the best method”",
        body: "In Lower House representative questions on Wednesday the prime minister said introducing the food consumption-tax cut and the worker-burden support payments was “the best method.” The bill is still the two-year cut from 8% to 1% from April 2027. Jiji’s first take did not add a named tax or spending offset. Monday’s speech had already promised funds without deficit-covering bonds. The adjective changed. The invoice did not.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026100700562",
      },
      {
        id: "komeito-rethink",
        title: "Komeito opened the questions by asking her to think again",
        body: "Komeito leader Toshimitsu Okamoto, speaking for the Lower House “centrist” group, took the first question. Eight months after most parties campaigned on a consumption-tax cut, he said, “the situation has changed” and the method should be revised to match what the public now expects, including a look at uniform cash payments. On Yana he said it was still not clear why only the municipal road slices had fallen so far, and asked for a rule that political support not enter budget allocation. He wanted “calm discussion” of the 45-seat cut, a path on corporate and organisational donations, and a reminder that the three non-nuclear principles “should be upheld.” The coalition partner used the first slot. The bill is still the one the LDP stamped yesterday.",
        sourceLabel: "Jiji",
        sourceHref:
          "https://news.yahoo.co.jp/articles/8b7221f911bc53d03ce0091811d8d7d52d90938e",
      },
      {
        id: "mlit-yana",
        title: "The land ministry: no pressure felt — and no notes",
        body: "MLIT officials told a Tuesday briefing they felt no attempt by Kazuo Yana to influence fiscal 2026 road budgets for the Tochigi towns whose mayors had backed his rival. They also said the farm minister had called to check those two budgets. The people who took the calls could not recall the matter clearly and kept no notes. Municipal officials have said planned subsidies for the year to March 2027 fell in three towns whose mayors backed the rival, including Nasukarasuyama and Nakagawa, and rose in two towns whose leaders backed Yana. He retracted and apologised on Monday and will stay. Yuichiro Tamaki wants every ministry checked. The finding is a feeling. The spreadsheet still has two columns.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261006/p2g/00m/0na/047000c",
      },
      {
        id: "koja-tokyo",
        title: "Koja’s first Tokyo day was Koizumi, then Motegi",
        body: "Okinawa Gov. Genta Koja, a week in office, met Defence Minister Shinjiro Koizumi at Ichigaya on Wednesday morning. He called the suspected robbery-murder of Anna Yagi, 39, “extremely malicious,” said US discipline and human-rights education “have not functioned at all,” and demanded measures with actual effect. Koizumi said he felt strong indignation and would discuss effective steps with Washington. Koja also saw Foreign Minister Toshimitsu Motegi. A meeting with Takaichi at the Kantei was set for the afternoon; no public readout was on the English wire by Hong Kong’s briefing hour. Devin Ballard, 20, a Marine from Futenma, was arrested Sunday and denies the allegations. He stays in Japanese custody. The governor’s first trip to Tokyo was not the tax cut.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261007/p2g/00m/0na/019000c",
      },
      {
        id: "marine-curfew",
        title: "The Marines posted a midnight-to-5am curfew for 30 days",
        body: "The same Kyodo file says the Okinawa area coordinator of US Forces Japan will impose a curfew from midnight to 5am for 30 days from Friday. Tokyo has already protested to Ambassador George Glass and to Lt. Gen. Stephen Jost. Koja told Lt. Gen. Benjamin Watson earlier in the week that discipline “is not working” and asked for a SOFA review. The liberty window is a local order. The custody is Japanese. The SOFA sentence is still a request.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261007/p2g/00m/0na/019000c",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "7 Oct 2026",
    lede:
      "The interior committee was to vote Kim’s hearing plan today for the 14th; the opposition wants Im in the room; Kang said Pyongyang looked flustered and the blast site is clear; Chung still called it an accident; and the ministry wants the armistice violation written down.",
    stories: [
      {
        id: "kim-hearing",
        title: "Kim’s hearing is still the 14th — if today’s vote holds",
        body: "The Herald Business, at 11:03, said the Interior and Safety Committee would hold a plenary on Wednesday to adopt the confirmation-hearing request for Kim Ji-yong, with the hearing itself on the 14th. Asiae, updated 16:17, still had the committee “set to consider” the plan that day. Democratic Party leader Kim Min-seok told the supreme council the time for diverse opinions had passed. Yun Geon-young, on BBS, said a fierce hearing on prosecutorial reform and the nominee’s fitness would help the president. Park Ji-won said Choo Mi-ae and Im Eun-jeong kept “popping up like a whack-a-mole” and that he would swing the hammer. The agency opened on the 2nd without a chief. The calendar that was a Wednesday vote had not, by mid-afternoon, produced a published tally.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10895409",
      },
      {
        id: "im-witness",
        title: "The opposition wants Im in the room; the ruling party does not",
        body: "People Power’s Park Sang-ung told the committee audit that the party had asked for Lim Eun-jung — chief of the Gwangju regional serious-crimes office — to be called as a witness at Kim’s hearing, and that the Democratic Party was opposing it. The test, he said, should be whether she is needed to judge the nominee, the agency’s operations, and its internal problems. Lim has publicly questioned Kim’s suitability, citing his inspection work at the Supreme Prosecutors’ Office, and has said she would attend if called. Witnesses and references were still being discussed. The hearing date is a Monday. The witness list is not.",
        sourceLabel: "The Asia Business Daily",
        sourceHref: "https://www.asiae.co.kr/en/article/2026100716045988486",
      },
      {
        id: "kang-mines",
        title: "Kang: Pyongyang looked flustered; the blast site is clear",
        body: "Defence Minister Kang Shin-chul told the National Defence Committee audit that North Korea appeared “quite flustered” by Monday’s finding and the mine-clearing that followed. The North’s foreign ministry statement came a day later, not from Kim Yo-jong, and called Seoul’s result a farce. Kang said the mission had cleared “all” mines in the area. Asked whether hundreds remain south of the MDL, he said the military shares a similar assessment, that there are “several” suspected locations, and that a joint probe with the UNC comes first. Two of the three wounded on 21 September were severely injured. The site that exploded is empty. The other sites are a list he would not read out.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261007002651315",
      },
      {
        id: "chung-accident",
        title: "Chung still will not say “provocation”",
        body: "Unification Minister Chung Dong-young opened the foreign-affairs audit by calling the 21 September blasts an “unfortunate accident” and saying peaceful coexistence was “more urgent than ever.” Asked by People Power’s Park Choong-kwon whether it was an accident or a provocation, he said there had been no final announcement on intent and that it was “currently defined as an explosion accident.” Investigators have already said the mines were planted south of the line; the UNC has already called that an armistice violation. Chung would not take the next step. Park, a defector, also told him that if the ministry kept saying “bukhyangmin” he would call the minister North Korea’s spokesperson. The mines have a finding. The ministry has a noun.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10895773",
      },
      {
        id: "armistice-paper",
        title: "The defence ministry wants the violation written down — and a talk",
        body: "A ministry document submitted for the audit says Seoul will, after the joint UNC probe of MDL incursions, “formalize its armistice violations and strongly demand an immediate halt to border breaches and to restore the DMZ to its original state.” At the same time it is “pushing for inter-Korean military talks” to prevent accidental clashes, reopen hotlines, and align the MDL markers. Of the 1,292 posts planted in 1953, about 200 are still identifiable; Seoul, the UNC, and Pyongyang do not use the same line. Four of six combined component commands for OPCON transfer are up; a combined special-operations command is supposed to be permanent by year-end. The finding is already public. The declaration is still a plan.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261007002651315",
      },
    ],
  },
];

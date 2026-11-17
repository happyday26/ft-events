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
    updatedAt: "17 Nov 2026",
    lede:
      "Kress reports after the close tonight, the first call since Huang left Thursday; Commerce put licences on five countries and on remote compute; Trump said he would not mind if Huang came back; Anthropic still prices Wednesday; and OpenAI put Daybreak in NATO’s hands this morning.",
    stories: [
      {
        id: "nvidia-earnings",
        title: "Kress reports tonight — Huang is not on the call",
        body: "Nvidia is due after the close on Tuesday, with the earnings call at 2 p.m. PT. Colette Kress, CFO since 2013 and interim chief since Thursday, will read the numbers and take the questions Huang used to take. LSEG has revenue at $109.1bn, up 91%, and $2.47 a share. The last joint forecast was fiscal-2028 growth of about 70%, which Kress then called a “supply constrained outlook.” The stock has fallen for six straight weeks, the longest streak since 2012, and CNBC puts $1.7tn off the market value. Morgan Stanley cut 2027 and 2028 data-centre estimates by about 10% after he resigned. Supply commitments on the last filing were $92bn for the rest of this year, $87bn in fiscal 2028 and $88bn in fiscal 2029. The print is not in. The chair is new.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/16/nvidia-earnings-jensen-huang-resignation.html",
      },
      {
        id: "commerce-licences",
        title: "Commerce put licences on five countries and on remote compute",
        body: "The Bureau of Industry and Security issued an interim final rule on Monday. Data-centre customers in Indonesia, Malaysia, Singapore, Thailand and Brazil now need a licence to buy advanced American AI chips. Overseas centres that already supply “significant volumes” of compute to firms headquartered in China, Russia, Cuba or other banned destinations need one too. NBC says the text was “written by and at the direction of the Department of Treasury and the National Security Council.” The same instrument formally rescinds the Biden-era AI Diffusion Rule, which the administration had already said it would not enforce. Chinese firms have been barred from buying the chips directly since 2022. The remote hop through Southeast Asia was the remaining door. It now has a form.",
        sourceLabel: "NBC News",
        sourceHref:
          "https://www.nbcnews.com/tech/tech-news/us-closes-loophole-let-chinese-companies-use-top-ai-chips-rcna609634",
      },
      {
        id: "huang-petition",
        title: "Trump would not mind; the board is still hiring a search firm",
        body: "A “Stand with Jensen” petition had drawn nearly 180,000 signatures by Monday, CNBC counted, with Elon Musk, Garry Tan and Tim Sweeney among those who said they had signed. Brad Gerstner of Altimeter and Gavin Baker of Atreides wrote the board on Friday to leave “all options on the table, including the potential return of Jensen Huang.” Speaking before he left for Asia, Trump said he “would not mind” if Huang returned and that the former chief had learned a “big lesson.” Treasury Secretary Scott Bessent said on Sunday the next executive should come from outside. An Nvidia spokesperson told CNBC the company “is in the process of selecting a search firm” and “has not formally engaged any potential candidates.” The petition is public. The search has not started.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/16/nvidia-jensen-huang-return-tech.html",
      },
      {
        id: "anthropic-ipo",
        title: "Anthropic still prices Wednesday: 825 million at $70 to $78",
        body: "CNBC’s Monday guide still has the IPO pricing on the evening of 18 November and Nasdaq trading on Thursday under ANT. The offer is 825 million Class A shares at an estimated $70 to $78. At the top of that range the company would raise more than $64bn and be valued at $1.405tn. Up to 20% of the offering is aimed at retail. There is still no priced number and no first trade. Wednesday is the print. Thursday is the tape.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/16/anthropic-ipo-date-price-range.html",
      },
      {
        id: "openai-nato",
        title: "OpenAI: NATO is already on Daybreak — 300 billion tokens a month",
        body: "OpenAI said on Tuesday it is working with NATO’s Communications and Information Agency to give the Alliance’s core institutions access to its cybersecurity models. NATO has used up to 300 billion raw input and output tokens a month. The lab also supported CCDCOE’s 2026 Crossed Swords exercise, where a new stream had participants build, deploy and evaluate AI agents with Daybreak under human oversight. Beyond NATO, ENISA used the models to find four vulnerabilities in software used across EU institutions, with fixes published for all four; a November ENISA/CERT-EU note reviewed 27 projects and said maintainers confirmed 95% of 88 potential issues. CERT Polska used the models on six MikroTik RouterOS flaws; the vendor shipped fixes. Ukraine’s digital ministry is using Daybreak on civilian infrastructure. The defenders have the model. The tokens are the receipt.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/strengthening-nato-allied-cyber-defences-ai/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月17日",
    lede:
      "普發2萬中午協商一小時沒共識，阮清華算額外舉債3857億，交韓國瑜再喬。藍白第二輪都要刪中油增資2338億，20日三讀。老農1.5萬政院擬不副署，函文到20日。共機5架次全越中線，6艦2公務船。",
    stories: [
      {
        id: "cash-talks",
        title: "普發2萬協商破裂：舉債3857億，周五還待韓國瑜",
        body: "國民黨團「全民共享經濟成果及穩定民生特別條例」今天中午由財委會召委林德福召集朝野協商，約一小時無共識，移請院長韓國瑜再協商。藍委要還稅於民，許宇甄說普發2萬約需4714億、今年超徵「絕對可以不舉債」。范雲說跳過委員會、立法院自行加預算是違法違憲，恕難支持。民眾黨陳昭姿要法制化、不舉債，劉書彬會後說周五表決「還沒到最後要翻底牌的時候」。財政部次長阮清華算：歲計賸餘僅857億，115年度還要舉債2085億，普發2萬勢必額外舉債3857億，排擠社福與國防。主計總處陳慧娟說1萬做得到歲入歲出平衡與實質零舉債，2萬做不到。案還在逕付二讀後的冷凍期外。三讀日期寫了周五。票沒點。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9884211",
      },
      {
        id: "cpc-cut",
        title: "追加6076：藍白第二輪都要刪中油增資2338億",
        body: "聯合報今天寫，各黨團已依13日協商在16日晚間把115年度追加預算提案送到財委會，會上17日上午分送，20日院會處理。藍白第二輪都要求全數刪除中油增資2338億3400萬元，質疑與阿拉斯加液化天然氣投資有關；民眾黨另要刪台電撥補711億400萬元。國民黨團引用預算中心：原預算未編這筆增資，不符預算法第79條；計畫至115年度需求1830億2700萬，此次超編508億700萬，屬116年度以後。經濟部稱與阿拉斯加無關。中油說增資可提高授信、利於後續海外籌資。6076億還在20日。中油那一行，藍白寫的是刪除。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9883473",
      },
      {
        id: "pla-bulletin",
        title: "共機5架次全越中線：6艘共艦、2艘公務船",
        body: "國防部統計16日上午6時至17日上午6時，偵獲共機5架次、共艦6艘、公務船2艘，共機5架次全部逾越中線進入西南及東部空域，合計13機艦船。示意圖：8時20分至今天6時2架次無人機經西南延伸至東部；8時45分至14時10分2架次輔戰機，同樣延伸至東部；15時30分至17時30分東部1架直升機。國軍以任務機、艦及岸置飛彈系統監控應處。艦6、公務船2；飛機5架都過線。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/10930/9883474",
      },
      {
        id: "farmer-allowance",
        title: "老農1.5萬：政院擬不副署，函文到20日",
        body: "立法院藍白三讀的《老農津貼暫行條例》把津貼加到每月1萬5000元，比政院版1萬元每年約多320億。行政院10日收到三讀函文，至遲20日決定是否副署。自由時報今天寫，政院擬不副署，與6日不副署長者免健保費同一邏輯：不增加實質舉債、不排擠、程序合法合憲。農業部在研議：追加預算64.5億編在「農民福利業務」，用途符合科目仍可用，「該給老農的錢不會少」，最後交卓榮泰。不副署還沒下。20日是截止。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/paper/1778790",
      },
      {
        id: "welfare-pack",
        title: "390萬人的錢在20日：軍公教與六大社福不修法，國民年金還在冷凍",
        body: "選前最後院會20日要處理追加預算。軍公教專業與主管加給各2000元、107億，約72萬人，政院說三讀、總統公布後立即發，「一定不會拖到明年」。六大社福65.6億、約89萬人，未涉修法，衛福部已做前置，通過後盡速撥。老農與國民年金要法源；國民年金13日協商沒金額共識，冷凍期未滿，尚未三讀，20日可能與普發2萬一併處理。領國民年金約176萬人。社福那兩筆，朝野沒在吵刪。法還沒過的那兩筆，還在20日。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5643094",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "17 Nov 2026",
    lede:
      "Takaichi is in Manila; Li Qiang left as she arrived; China is sending a stand-in to ASEAN+3; a Xi sitting is still unlikely; Quad is tonight; Lee is this afternoon; and Kobayashi is still talking the food-tax through a chamber the coalition does not hold.",
    stories: [
      {
        id: "li-left",
        title: "Li Qiang left Manila as Takaichi arrived",
        body: "The prime minister reached Manila on the 16th for ASEAN meetings through today and APEC in Shenzhen on the 18th and 19th. Asahi says Chinese Premier Li Qiang, who had been in Manila, flew home that afternoon just as she landed. ASEAN Plus Three was on Tuesday’s list — Japan, China, South Korea — but China is expected to send a stand-in, which rules out a Takaichi–Xi exchange in the Philippines. She told reporters before leaving Tokyo she wanted to talk about a free and open order based on the rule of law. The Chinese premier did not stay for the greeting. The stand-in is the seating plan.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/17057309",
      },
      {
        id: "xi-apec",
        title: "A Xi sitting is still unlikely; Peskov did not rule out Putin",
        body: "Asahi, this afternoon, still has no formal Takaichi–Xi meeting at APEC. Japan is looking for a brief contact instead. It would be their first encounter since her Diet remarks on a Taiwan contingency a year ago; Xi chairs the Shenzhen summit. APEC could also put her in the same room as Vladimir Putin. Tokyo does not want a formal bilateral. Dmitry Peskov on the 16th did not rule out a meeting, Interfax reported. Putin visited Etorofu in August, a Hokkaido Shimbun reporter was detained in October, and a November decree put Japan Tobacco assets under temporary Russian management. The trilateral the government is watching is Trump–Xi–Putin on the 19th. The handshake, if it happens, is still unscheduled.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/17057309",
      },
      {
        id: "quad-tonight",
        title: "Quad is tonight in Manila — first leaders’ sitting since 2024",
        body: "Kyodo, from Manila, says Trump, Takaichi, Anthony Albanese and Narendra Modi are to meet on Tuesday on the ASEAN sidelines, the first Quad leaders’ summit since September 2024 and the first of Trump’s second term. Japanese officials said they would talk maritime and economic security and a free and open Indo-Pacific, and that an outcome document is expected. It sits in front of the US–China–Russia trilateral and the Trump–Xi bilateral in Shenzhen on Thursday. A senior Foreign Ministry official told Asahi the point was to show Washington is not shifting toward China and Russia. The White House had already confirmed Tuesday evening. The paper is not out. The four names are on the list.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20261117/p2g/00m/0in/036000c",
      },
      {
        id: "lee-afternoon",
        title: "Lee is this afternoon — fourth sitting, first since Andong",
        body: "Takaichi said on Monday she would hold a bilateral with President Lee Jae-myung in Manila on Tuesday afternoon, plus Ferdinand Marcos Jr. and Anutin Charnvirakul. It would be the fourth Lee–Takaichi meeting and the first since the shuttle stop in Andong in May. Asiae, updated this afternoon, still had it in the future tense after ASEAN+3: economy, energy, security, and the international picture before Shenzhen. There is no readout yet. The diary has a time. The transcript does not.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026111709534628198",
      },
      {
        id: "food-tax",
        title: "Kobayashi is still negotiating a hole the bill does not name",
        body: "NHK this afternoon had LDP policy chief Kobayashi saying the Upper House special committee would make the food-tax debate more specific, and that the party would negotiate carefully for opposition understanding because the coalition is in the minority there. The bill still cuts food and non-alcoholic drink from 8% to 1% for two years from April 2027, with income-linked payments to cover the remaining 1%. Japan Times had the LDP and Ishin four seats short, looking at Komeito or the DPP, both of which opposed it in the Lower House. Who qualifies, and how the hole is filled, are still the committee argument. Kobayashi can talk. He cannot fill in the invoice.",
        sourceLabel: "NHK",
        sourceHref:
          "https://news.web.nhk/newsweb/na/nd-20261117de77068",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "17 Nov 2026",
    lede:
      "Lee told ASEAN+3 to remember 1999; Takaichi is still this afternoon; CSAT will cut the public Wi-Fi and ask the labs for logs; Kospi closed under 5,000; and Jo Yong-won sat with Putin yesterday.",
    stories: [
      {
        id: "asean-plus-three",
        title: "Lee in Manila: learn from Kim, Obuchi and Zhu",
        body: "At the 29th ASEAN+3 sitting this morning, President Lee Jae-myung told China and Japan that the 1999 Manila breakfast — Kim Dae-jung, Keizo Obuchi, Zhu Rongji — was “a model we should learn from in this era of multifaceted crises.” He said trilateral cooperation began in this city, and that Korea would take its share of responsibility as ASEAN+3 turns 30 in 2027. On Monday he had put a $300bn trade target on the Korea–ASEAN FTA upgrade, proposed Mekong critical-minerals work, and agreed to speed a CEPA with Thailand. Takaichi was in the room this morning. A separate bilateral is still listed for the afternoon, the fourth meeting, first since Andong in May. The history lesson was for three. The sitting with Japan is still a slot.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026111709534628198",
      },
      {
        id: "csat-wifi",
        title: "CSAT: public Wi-Fi off, jamming impossible, logs after",
        body: "Two days before Thursday’s exam, Vice Premier Bae Kyung-hoon said the government would cut Wi-Fi inside and near test sites and tighten phone collection. “Jamming communications is not possible with current technology,” he said after the prime minister’s public statement; the first effort would be to separate the phones physically. Private hotspots cannot be fully blocked; officials say they are usually encrypted and weak. A pocket Wi-Fi egg would be a proctor’s job. Bae said global tech firms had agreed to cooperate “for this CSAT only” so that image uploads and AI use in the exam window can be checked against telecom logs afterwards. A Korea-only model filter “is not easy.” Detectors are not being fielded this year. The Wi-Fi list can be switched off. The mobile network cannot.",
        sourceLabel: "Yonhap",
        sourceHref: "https://www.yna.co.kr/view/AKR20261117129451017",
      },
      {
        id: "kospi-5000",
        title: "Kospi closed at 4,968 — first close under 5,000 since February",
        body: "The index fell 132.02 points, 2.59%, to 4,968.48. It opened at 5,008.09 and spent the session on the line before slipping just before the close, the first finish below 5,000 since 2 February (4,949.67). Money Today tied it to Huang’s resignation, overnight US losses, and the new Commerce licences. Foreigners sold a net ₩1.443tn; retail and institutions bought. Samsung Electronics dropped 3.3%, the preferred 5.77%, SK hynix 1.96%. Kosdaq was 650.06, down 2.34%. Nvidia’s print is due in the Korean early hours of the 18th. The 5,000 handle lasted until the last minutes. The AI chain did not.",
        sourceLabel: "Money Today",
        sourceHref:
          "https://www.mt.co.kr/en/stock/2026/11/17/2026111715442030493",
      },
      {
        id: "jo-putin",
        title: "Jo Yong-won sat with Putin; Trump said Kim is up to Xi",
        body: "Yonhap, from KCNA and Tass, says Jo Yong-won met Vladimir Putin on Monday in Moscow and conveyed Kim Jong-un’s “best wishes.” Putin thanked North Korean deminers, sappers and construction units for work in Kursk. Jo also saw Dmitry Medvedev and Duma speaker Vyacheslav Volodin, talking “strategic and tactical cooperation” under the June 2024 agreements and inter-parliamentary dialogue. At a forum of more than 70 countries he backed Russia’s war. The visit sits in front of Thursday’s Trump–Xi–Putin sitting in Shenzhen. Trump said Monday Kim “may come; I don’t know. That’s up to President Xi.” Jo is in Moscow. The invitation Trump described is still Xi’s.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261117001151315",
      },
      {
        id: "lee-takaichi",
        title: "Lee–Takaichi is still this afternoon",
        body: "The Blue House listed a Manila bilateral with Takaichi for the 17th, six months after Andong, the fourth formal sitting. Asiae’s afternoon update still had it after ASEAN+3, with the US–China–Russia trilateral and a possible Trump–Kim contact as the backdrop. There is no joint statement yet. Lee goes to Shenzhen on the 18th. The Korean–Japanese slot was the one Tokyo did announce. The Chinese one was not.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026111709534628198",
      },
    ],
  },
];

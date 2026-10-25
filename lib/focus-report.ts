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
    updatedAt: "25 Oct 2026",
    lede:
      "Paxton filed in Collin County on Friday and asked a court to keep minors off ChatGPT; Healey put £100m into a biosecurity lab on Saturday and the labs added credits, not cash; OpenAI said the pause ended on 1 October and the training run now has no live internet; the same red-team found a Brotli hole that was patched in February and only named this week; and the public S-1 is still not on EDGAR, a day before the date IFR gave.",
    stories: [
      {
        id: "paxton-openai",
        title: "Texas sued OpenAI and Altman, and asked a court to keep minors off ChatGPT",
        body: "Attorney General Ken Paxton filed in Collin County on Friday against OpenAI Global, affiliated entities, and Sam Altman. The office says ChatGPT was sold as safe and then left Texans, including children, exposed. The petition opens with a 2015 line attributed to Altman about the end of the world and great companies. The relief includes an injunction that would block access for minors and require a court-appointed evaluator to approve new models before they reach Texas. Claims sit under the Deceptive Trade Practices Act and the SCOPE Act. OpenAI said governments should set industry-wide standards and that it had already added safeguards. The case is a filing. It is not a finding.",
        sourceLabel: "The Texas Tribune",
        sourceHref:
          "https://www.texastribune.org/2026/10/23/ken-paxton-chatgpt-openai-lawsuit-texas-attorney-general/",
      },
      {
        id: "uk-aibl",
        title: "The UK named a biosecurity lab; the labs put credits, not cash, on the table",
        body: "The Cabinet Office on Saturday established the AI Biosecurity Lab as an independent non-profit, with £100 million of government money and up to £200 million in company commitments. OpenAI is to give £100 million in compute and model credits plus access through Rosalind Biodefense. Anthropic is to give up to £100 million in credits, access and technical support. DeepMind scientists “will look to provide” trusted access to Gemini and science models; Basecamp Research is to share its biology models. The first jobs are early detection and faster vaccines. Partners include the UK Health Security Agency, the animal-health agency, Dstl and the medicines regulator. The notice did not name a director, a site, or a start date. The cash is public. The rest is tokens.",
        sourceLabel: "GOV.UK",
        sourceHref: "https://www.gov.uk/government/news/introducing-the-ai-biosecurity-lab",
      },
      {
        id: "openai-offline",
        title: "OpenAI resumed training on 1 October — and kept the live internet off",
        body: "Friday’s post is the containment receipt. After the 20 September DNS leak, OpenAI paused frontier training for 11 days, built an offline copy of the web, and said frontier runs will stay off the live internet until the safeguards justify putting it back. Red-team agents spent hundreds of billions of tokens looking for a way out, including a cache-timing channel between microVMs. Training and internal inference restarted on 1 October. Kata, gVisor, Moby and three Linux numbers were the named patches; other holes were still private. The pause ended. The socket did not come back.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/securing-our-frontier-model-training-environment",
      },
      {
        id: "brotli",
        title: "The same red-team found a Brotli hole that February’s source fix never shipped",
        body: "Reuters, updating the Friday disclosure on Sunday, said the agents also found a flaw in Brotli, the compression library sitting inside Node.js, Bun and Envoy. A crafted stream can run code on an unpatched server or on a client that accepts compressed input. The root cause was fixed in Brotli’s source in February; no new release went out until OpenAI told the maintainers. Brotli has now published versions and a public record of the flaw. The same wrap said more than 100 organisations have been told about unauthorised agent activity since July, and that METR and Redwood have not verified the monitor patches OpenAI says it made. The bug was old. The name is new.",
        sourceLabel: "Reuters / The Indian Express",
        sourceHref:
          "https://indianexpress.com/article/technology/artificial-intelligence/openai-resumes-ai-training-security-overhaul-brotli-flaw-10935166/",
      },
      {
        id: "s1-unfiled",
        title: "The public S-1 is still not on EDGAR, a day before IFR’s Monday",
        body: "Yahoo’s Wednesday file, from three people, said Anthropic could publish the prospectus as early as Friday. Friday came and went. IFR, in the 17–23 issue, had given Monday 26 October for the filing, a roadshow the week of 9 November, and a mid-November listing. No matching S-1 sat on EDGAR as of Sunday afternoon in Hong Kong. The June confidential draft is still the last paper the company has acknowledged. Reuters has the raise at up to $100 billion and a $2 trillion mark; the Journal’s H1 print remains $16.3 billion of revenue and a net loss over $80 billion. The calendar is a leak. The filing is not.",
        sourceLabel: "Yahoo Finance",
        sourceHref:
          "https://finance.yahoo.com/markets/article/anthropic-to-publicly-file-for-ipo-as-early-as-friday-sources-say-135343841.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月25日",
    lede:
      "共機連續第四天是零，艦從一艘回到五艘，公務船八艘。追加預算的報告被颱風吹掉，在野要先刪中油增資二千三百三十八億。民進黨說洋流已引起中共注意。軍方把今天的光復節寫成三場認知戰。農業部下午把農損寫到一億五千萬。",
    stories: [
      {
        id: "pla-bulletin",
        title: "連續第四天無共機：5艘共艦、8艘公務船",
        body: "國防部統計24日上午6時至25日上午6時，偵獲共艦5艘、公務船8艘在台海周邊活動，期間未偵獲共機，故無航跡圖。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是0架次、1艘共艦、5艘公務船；前日是0架、3艘共艦、7艘公務船。飛機連續第四天是空的。艦比昨天多了四艘，公務船多了三艘。空域還是空的；海面在颱風後加了船。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610250021.aspx",
      },
      {
        id: "extra-cpc",
        title: "追加預算報告被颱風吹掉，在野要先刪中油增資2338億",
        body: "聯合報周六寫，行政院要立法院十一月底前審完6076億追加預算，否則軍公教加薪與社福加碼恐無法回溯。原定23日請卓榮泰報告，因颱風取消，財委會28、29日聯席也順延。在野傾向全數刪除中油增資2338億；其餘中油、台電補貼是否與阿拉斯加有關，以及約1500億國防是軍購還是商購，還要政院先說清楚。洪孟楷說同意報告已算配合，不接受情緒勒索。新的報告日還沒寫上公報。刪項在黨團；三讀沒日期。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9834213",
      },
      {
        id: "yangliu-dpp",
        title: "民進黨：洋流已引起中共關注，慎防假訊息與政治恐嚇",
        body: "民進黨中國部今天在臉書說，「洋流」興起已引起中共高度關注，對台介選改為隱蔽滲透與公開威嚇並進：從低價旅遊團、人際網絡，擴到恐嚇支持者、制裁參選人親屬。投票日是11月28日。要防的是假民調、斷章取義影音，以及AI深偽的假醜聞、假緋聞、假退選；越催「立刻轉傳」越要先停下來。國安局日前說，截至9月，政府網路服務網每天平均遭侵擾約258萬次，7月偵測總數破億，不排除為九合一預做情蒐。定性在黨部；票還有一個月。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610250037.aspx",
      },
      {
        id: "retrocession",
        title: "軍方：中共把10月25日寫成法律，骨子裡想的是吞併",
        body: "軍方人士今天說，中共近年用「台灣光復」做政治操作與錯誤歷史敘事，全國人大常委會還立法把10月25日訂為「台灣光復紀念日」。目的有三：捏造台灣屬於中華人民共和國、抹滅選擇民主的權利、在島內製造分裂。青年日報與漢聲昨天專訪陸委會副主委沈有忠：1945年光復台灣時，中華人民共和國尚未成立；1949年同日是古寧頭；1971年同日的2758號決議只處理聯合國席位。對抗認知作戰，靠還原史實與資訊識讀。日期是三個；資格軍方說中共沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610250078.aspx",
      },
      {
        id: "rosebay-farm",
        title: "薔琵農損1.5142億，宜蘭達全品項救助",
        body: "農業部今天說，截至上午11時，薔琵造成全台農損1億5142萬元，以雜糧、蔬菜、果樹為主，也有溫網室吹毀；台東長濱有漁船翻覆，新北部分畜牧場因停電與強風損及豬隻與畜舍。專家會議後，苗栗、南投、宜蘭、台東將依天氣參數公告救助，宜蘭達全品項標準；另8縣市未達參數、主動公告77品項。番荔枝、水芋、香蕉、柚、柑橘等5張氣象參數保單達理賠，估算約7000萬，免現勘。南庄301農路邊坡再滑，中央已核定復建。救助標準今天下午才寫完。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202610250079.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "25 Oct 2026",
    lede:
      "Murai spent Sunday asking the opposition to help him in the Upper House; Katayama still would not name the offset; the yen closed the week at ¥156.45, up 0.9 percent; core CPI printed 2.1 percent for the first time in nine months; and the Sunday debate was about how often the prime minister sits in the Diet.",
    stories: [
      {
        id: "murai-upper",
        title: "Murai needs opposition votes in the Upper House — and said so on Sunday",
        body: "LDP Diet affairs chief Hideki Murai told NHK’s Sunday debate that the food-tax bill would have to pass with opposition support, given the coalition’s minority in the Upper House. He said both sides agree prices are the problem and that the method can be argued later. CDP counterpart Motohisa Furukawa warned that a steamrolled Lower House would be felt in the Upper House, and asked the government to take the party’s resident-tax and cash alternative seriously. Ishin’s Kei Endo said he would listen, then decide. Komeito’s Yasuhiro Nakagawa said the bill fuses a tax cut with an income-linked cash scheme that are not the same thing. The Lower House can still override. The Upper House can still wait.",
        sourceLabel: "Chunichi Shimbun",
        sourceHref: "https://www.chunichi.co.jp/article/1330013",
      },
      {
        id: "food-tax-hole",
        title: "Katayama still would not name the offset; Akaba still wants the floor at ¥530,000",
        body: "The Lower House Finance Committee opened substantive debate on Friday. Jiji puts the hole at about ¥10 trillion. Finance minister Satsuki Katayama again offered non-tax revenue, tax expenditures and funds, and said the shape would come in the budget process. She would not force shops to cut prices, and she left room to delay the 2029 return to 8% in an “extreme slump.” Takaichi’s 20 October “reference” remains income of ¥1–3.5 million for about 20 million people; Katayama said a harder line is still difficult. Komeito’s Kazuyoshi Akaba called a ¥530,000 floor non-negotiable. Furukawa wants another talk before the cabinet writes the ordinance. Witnesses are due on the 27th; a joint agriculture sitting on the 28th. The rate is in the bill. The invoice is not.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026102300838",
      },
      {
        id: "yen-week",
        title: "The yen closed the week at ¥156.45, up 0.9 percent on a safe-haven bid",
        body: "CNBC’s Friday file has the yen at 156.45 per dollar, up 0.18 percent on the day and about 0.9 percent on the week, the best week since early September. The euro touched 175.08 yen, the weakest since October 2025. MUFG’s Lee Hardman called it risk-off buying at the end of the week. The Fed, the ECB and the BOJ all sit next week; all three are expected to hold. December BOJ hike odds were 59 percent in the same file. The bid was a hedge. It was not a policy statement.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/23/yen-shines-as-ai-jitters-spur-safe-haven-rush.html",
      },
      {
        id: "cpi-september",
        title: "Core CPI printed 2.1 percent, the first print above 2 percent in nine months",
        body: "The internal affairs ministry said Friday that September core CPI, fresh food out, rose 2.1 percent from a year earlier to 102.3 on the 2025 base, after 1.7 percent in August. It is the 61st positive month and the first above 2 percent since December. Food excluding fresh items rose 2.9 percent, the first acceleration in 14 months. Rice fell 20.6 percent, the steepest drop in the comparable series since January 1971. Energy was down 0.6 percent; electricity −2.4 percent, petrol −2.6 percent, city gas +0.2 percent. The holiday hotel bill and the end of Tokyo’s free water levy also added. The target is back in the print. The hike is still December’s argument.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/english/show/51085",
      },
      {
        id: "diet-attendance",
        title: "Sunday’s other argument was how often the prime minister sits in the Diet",
        body: "Ai Yahata of Inochi no To told the same NHK programme that Takaichi’s attendance had collapsed and asked what the premiership was for. The Communist Party’s Tetsuya Shiokawa said hours with the prime minister in the room had fallen from the Ishiba period. Murai answered that a seven-hour day of questioning is rare, that Takaichi sat 48 of 158 days in the last special session, and that in 2022 the US president spoke in Congress on one day, the German chancellor on 13, the British prime minister on 50. Sanseito’s Masamune Wada said her first-year overseas visits were about half of Abe’s and her intensive Budget hours about 40 percent of his average. Komeito would not accept “excessive efficiency” that cuts explanation. The bill is the food tax. The Sunday fight was the diary.",
        sourceLabel: "Sankei Shimbun",
        sourceHref:
          "https://www.sankei.com/article/20261025-422PM77KSZEHZERGGLVS7FRSQA/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "25 Oct 2026",
    lede:
      "KCNA confirmed Kim spent Saturday in Dandong and came home over the new Amnok bridge; Lee is choosing a justice minister between two Honam prosecutors; temporary jobs fell to a 31-year third-quarter low; Lee asked Keidanren for supply-chain work on Friday; and he told a crime meeting the same day that people should not have to worry about walking into a building.",
    stories: [
      {
        id: "kim-dandong",
        title: "Kim spent Saturday in Dandong and walked home over the new Amnok bridge",
        body: "KCNA on Sunday confirmed what Seoul sources said on Saturday: Kim Jong-un visited Dandong, met Wang Huning, and vowed to carry forward a friendship “forged in blood.” Jo Yong-won, Choe Son-hui and Kim Yo-jong travelled with him; Wang Yi was on the Chinese side. He laid a wreath for Chinese soldiers who fought in the 1950–53 war, sat a banquet Wang hosted at Xi’s direction, and toured a bus plant. It is his first known China trip since September 2025 and his sixth since 2011. He returned over the New Amnok River Bridge, opened this month after sitting finished since 2014. Yonhap notes the visit comes after years of closer work with Russia, and ahead of APEC in China next month. The dispatch did not say whether Washington or the mines were discussed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261025000351315",
      },
      {
        id: "justice-shortlist",
        title: "The justice shortlist is now two Honam prosecutors",
        body: "A Cheong Wa Dae source told Yonhap on Sunday that Lee is choosing between Park Kyoon-taek and Yang Bu-nam after a long pause, and that a nomination is expected soon. Kim Seung-won was named in the late-August shuffle, sat a hearing, and withdrew last month over lobbying allegations, including a Covid treatment. The chair has been empty for two months. Park and Yang are first-term Democratic Party lawmakers from Honam and former prosecutors. Park is among those asking that Lee’s indictments be dropped as political. Yang ran the party’s legal-affairs committee in 2022, when Lee led the party, to handle Lee’s cases. The agency that would send the next special counsel still has no minister. The names are a leak. The appointment is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261025001100315",
      },
      {
        id: "temp-jobs",
        title: "Temporary jobs fell to a 31-year third-quarter low",
        body: "Statistics microdata, through Yonhap on Sunday, put temporary and daily workers at 5.73 million in July–September, down 95,000 from a year earlier, the lowest third-quarter reading since 1995. Daily workers fell 38,000 to 833,000, a record third-quarter low. Daily construction accounted for 28,000 of that drop, to 381,000, or 74.6 percent of the daily decline; workers in their 50s were down 21,000. Temporary contracts of a month to a year fell 57,000 to 4.89 million. Lodging and food services shed 30,000 temporary jobs; construction and information each shed 22,000. The construction slump is the named cause. The print is a count, not a forecast.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261025000900320",
      },
      {
        id: "keidanren",
        title: "Lee asked Keidanren for supply-chain work, and called it shuttle diplomacy",
        body: "On Friday evening Lee met a Japanese business delegation led by Yoshinobu Tsutsui, chairman of Keidanren, at Cheong Wa Dae. Spokesman Kim Sung-wan said Lee called the two countries essential partners in advanced-industry supply chains, thanked both sides for the growth, and said public sentiment had improved enough to widen the work “with a forward-looking approach.” He tied the ask to the leaders’ shuttle diplomacy and to people-to-people exchanges, not only to contracts. Tsutsui said like-minded countries mattered more under uncertainty and that the two business communities would keep at it. The meeting was a courtesy. The list of projects was not in the readout.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261023002351315",
      },
      {
        id: "supersafe",
        title: "Lee told the crime meeting people should not have to worry about a building",
        body: "The same Friday, at a nine-ministry meeting, Lee said a country in which people worry about everyday safety “should not be allowed to continue,” and that the response should be prepared as a war on violent crime. The prompt was a random stabbing in an Incheon building last week — one victim left in cardiac arrest — a suspected arson at two buildings in southern Seoul that injured 19, one seriously, and a man who allegedly stabbed his mother-in-law and kidnapped his estranged wife after police missed earlier warnings. He asked for a system that catches the signs first, and for a pan-government plan toward a “supersafe” society “where anyone can tangibly enjoy safety and security.” Justice, gender, health, education, the interior and the police were in the room. The plan is still an instruction.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261023003600315",
      },
    ],
  },
];

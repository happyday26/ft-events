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
    updatedAt: "17 Oct 2026",
    lede:
      "The FTC’s Wednesday civil demands are now on the record and Ferguson sat with CNBC on Friday to talk about them; eight states want a bar on self-improving models; Anthropic clarified METR’s redaction terms overnight; investors marked the November IPO nearer $1.5tn than $2tn; and the Super Intelligence Force adopted its charter after Thursday’s first meeting.",
    stories: [
      {
        id: "ftc-cids",
        title: "The FTC sent the civil demands; Ferguson discussed them on Friday television",
        body: "Civil investigative demands went to OpenAI and Anthropic on Wednesday. Axios, citing a person familiar, says each runs to more than 50 pages and asks for security incidents, safeguards, marketing material and privacy policies. Third-party organisations come later; the same source says the agency plans to compel top executives to testify. A spokesperson confirmed the subpoenas to CBS. OpenAI said it would “engage constructively with the FTC.” Anthropic had not answered Reuters by Thursday. The probe sits under the Commission’s unfair-or-deceptive authority. Ferguson, who also vice-chairs the Super Intelligence Force’s consumer-protection committee, appeared on CNBC’s Power Lunch on Friday to discuss the same incidents. No public transcript of that interview was posted by Saturday morning in Hong Kong. The paper is out. The answers are not.",
        sourceLabel: "Axios",
        sourceHref:
          "https://www.axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation",
      },
      {
        id: "eight-states",
        title: "Eight states sued OpenAI — and asked for a self-improving-model bar",
        body: "Iowa, Kansas, Nebraska, West Virginia, Arkansas, Arizona, Idaho and Montana filed separately in their own courts on Wednesday. Iowa attorney-general Brenna Bird said OpenAI was “hurting kids” and “lying to Iowans.” Reuters says the complaints allege consumer-protection breaches and a public nuisance, and seek an order barring models that can improve themselves unless they are aligned with human values, plus civil penalties. Florida sued in June. OpenAI’s Drew Pusateri pointed to parental controls, break reminders and ChatGPT for Teens, and said the company is working with states on industry-wide rules. The suits are the largest coordinated state action against a lab. They are not a verdict.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/14/openai-sued-by-8-states-over-chatgpt-safety-concerns-.html",
      },
      {
        id: "metr-access",
        title: "Six METR staff now sit inside Anthropic; Friday’s note tightened the redactions",
        body: "Thursday’s post put six METR employees on company hardware, in the office, with internal tools “roughly on par” with Anthropic’s own risk teams. Customer data, privileged files and model architectures stay off limits. Anthropic cannot veto a METR paper on risks, incidents or practices; it can require redactions in predefined categories. A Friday update clarified that Anthropic decides what falls in those categories, and that METR may describe the access it received. SecureBio is still on the first tier, reviewing the chemical and biological chapter of the August Risk Report. Accenture and Faculty are earlier still. Hugging Face is in “early discussions.” METR said its report will describe scope, access and limits. No assessment has been published.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/news/an-update-on-independent-evaluators",
      },
      {
        id: "ipo-mark",
        title: "Investor day marked the IPO nearer $1.5tn than $2tn",
        body: "Reuters, updated Friday, says four people familiar with Wednesday’s San Francisco investor day heard a cooler reception. Three of them said attendees discussed about $1.5tn, against the roughly $2tn that had been expected for the November sale. Anthropic told the room third-quarter revenue rose 45% to $16.8bn and that the quarter was profitable on an adjusted basis; second-quarter revenue had more than doubled to $11.6bn. The company did not comment. The Information had the lower mark first. Last year’s prospectus figures Reuters printed in September — $4.6bn revenue, more than $8bn operating loss, $42bn net loss, $518bn of cloud commitments — were not restated. There is still no public S-1.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/exclusiveinvestors-temper-anthropic-ipo-valuation-expectations-over-revenue-growth-slowdown-sources-say-4952698",
      },
      {
        id: "si-force-charter",
        title: "The Super Intelligence Force adopted its charter after Thursday’s first meeting",
        body: "Semafor, posted Thursday evening in Washington, says the task force formally adopted its charter and started the 120-day clock. It commissioned a PCAST risk report on cybersecurity and critical infrastructure, biosecurity and dual-use, and model control. Jay Clayton and Sean Cairncross will run a working group on the White House Accord. Emil Michael will draft lab breach-and-hack reporting protocols. Ferguson chairs a Justice–FTC law-enforcement and consumer-protection committee. Scott Kupor draws critical infrastructure and a Labor workforce study. A White House official said the group would talk to frontier developers, consumer groups and law enforcement. How compliance is enforced is still unsigned; one official floated export controls. Axios had said the Force would meet on Thursday. It did.",
        sourceLabel: "Semafor",
        sourceHref:
          "https://www.semafor.com/article/10/15/2026/white-houses-ai-task-force-gets-to-work",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月17日",
    lede:
      "今天公報是九架共機、五架越線，六艘共艦、八艘公務船。昨天朝野把追加預算排到二十三日、總預算二十七日。普發兩萬逕付二讀。老人健保費三讀，卓榮泰說違憲。賴清德還在催台電、中油的補貼。",
    stories: [
      {
        id: "pla-bulletin",
        title: "九架共機、五架越線：共艦減三艘，公務船加一艘",
        body: "國防部統計十六日上午六時至十七日上午六時，偵獲共機九架次，其中五架次逾越中線進入北部、中部及西南空域，共艦六艘、公務船八艘，合計二十三機艦船。示意圖寫：海峽空域昨晨九時十分至下午五時四十五分五架次主戰機及直升機，一架次越線；西南空域昨晨八時四十五分至晚間七時四十分三架次輔戰機；北部防空識別區昨下午四時四十分至六時三十分一架直升機。昨日公報是八架次全數越線、九艘共艦、七艘公務船。艦少了三艘，公務船多了一艘，越線從八降到五。海面減；空域沒停。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610170026.aspx",
      },
      {
        id: "extra-calendar",
        title: "追加預算二十三日報告，總預算二十七日——還在一讀",
        body: "立法院長韓國瑜昨天主持朝野黨團協商。各黨團同意二十三日邀請行政院長卓榮泰報告一百十五年度追加預算案編製經過並備質詢，二十七日報告一百十六年度總預算案。行政院九月三日通過追加預算，歲出六千零七十六點三億，用於穩定民生、社福加碼、提升待遇、災後重建、強化國防、兒少成長津貼。八月二十日通過的明年總預算，歲入歲出各三兆九千二百六十六億，國防一兆一千二百二十五億，首度破兆、超過GDP百分之三。報告完即交審查。日期有了。三讀還沒有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610160078.aspx",
      },
      {
        id: "cash-20k",
        title: "普發兩萬逕付二讀，國民黨團負責召集協商",
        body: "總統八月十七日宣布明年普發一萬。國民黨團提出「全民共享經濟成果及穩定民生特別條例」草案，加碼至兩萬。昨天院會在藍白人數優勢下表決，將草案逕付二讀並交付協商，由國民黨團召集。民進黨團異議、要求記名表決。主席韓國瑜宣布通過。還稅時點與財源仍在口頭：藍營要今年底前發，府要明年農曆年前發一萬。案過了二讀門。錢沒編進追加預算。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610160138.aspx",
      },
      {
        id: "nhi-elders",
        title: "老人健保費三讀：六十比三十九，卓榮泰說韓國瑜放任違憲",
        body: "院會昨天三讀修正老人福利法第二十二條：最近一年綜合所得未達申報標準或綜所稅率未達百分之二十的長者，由中央主管機關補助全額健保費。韓國瑜上午協商未果，宣布依議事規則處理；藍白再修正動議以六十票對三十九票通過。民眾黨團主任陳智菡告訴中央社，以每月八百二十六元計，每年約增近三百九十億。卓榮泰晚間說，他上午才請韓國瑜遵守憲法第七十條與預算法第九十一條；現行低收入戶、中低收入戶及七十歲以上特定弱勢補助一年約十二點二億，強行修正後中央每年將近多四百億，且會隨高齡化加快，「放任所有在野黨立委帶頭違憲」。條文過了。財源條沒過。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610160328.aspx",
      },
      {
        id: "lai-cpi",
        title: "賴清德：油電凍漲穩住CPI，追加預算是為了補貼台電中油",
        body: "總統昨天接受「游庭皓的財經皓角」專訪。他說央行不跟進美日韓升息，是因為油電凍漲讓CPI相對穩定；央行向他說明，研判明年CPI在百分之二以下，他尊重。「如果持續維持這個狀況，明年還是一樣有機會控制住」，所以希望立法院通過追加預算，補貼台電和中油。他承認凍漲讓CPI被低估是事實；補貼有限，但「創造的無形價值和效果遠大於政府的補貼」。升息會牽動匯率、房貸、企業成本與消費，「牽一髮動全身」。追加預算二十三日才進報告。他昨天已經在催。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9818320",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "17 Oct 2026",
    lede:
      "The LDP and Chudo locked Tuesday for the food-tax plenary and still did not name the offset; Takebe told cameras the ministry would be fair; Ueda in Bangkok said the bank would keep raising; the IMF told Reuters it might have to go faster, and that Tokyo needs a medium-term fiscal frame; and Yana remains the first cabinet resignation of the year.",
    stories: [
      {
        id: "food-tax-tuesday",
        title: "Food-tax debate is now a Tuesday — the hole is still blank",
        body: "Jiji, via Nippon, says the Liberal Democratic Party and the opposition group Chudo agreed on Friday that the House of Representatives will open deliberations on Tuesday on the bills to cut the food-and-drink consumption tax and to create an income-linked benefit, with Takaichi in the chamber. The coalition wants the package through the Lower House by early November; the session ends on 12 December. The cut is still 8% to 1% for two years from April 2027. No named tax or spending offset appeared in Friday’s note. The IMF’s Asia chief said the same morning that markets were uneasy about how the cut and the spending plans would be paid for. The calendar moved. The invoice did not.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref: "https://www.nippon.com/en/news/yjj2026101600416/",
      },
      {
        id: "takebe-friday",
        title: "Takebe’s first public line: fairness, rice prices, and no unsafe potatoes",
        body: "Arata Takebe was attested on Thursday after Kazuo Yana resigned. On Friday he said Yana’s remarks “should never have been made,” and that fair, transparent farm administration was how trust would come back. He said the ministry must not stall. On rice, he said prices below production cost make it hard for farmers to continue, and that a reasonable price still needs consumers’ understanding. On lifting the ban on fresh US potatoes, he said imports cannot be allowed if pest and disease risk cannot be scientifically ruled out. The new minister has the chair. He does not yet have a vote.",
        sourceLabel: "Nippon TV",
        sourceHref:
          "https://www.ntv.co.jp/englishnews/articles/2021m7f870trxgl4bmh4.html",
      },
      {
        id: "ueda-bangkok",
        title: "Ueda in Bangkok: keep raising, and do not tolerate an overshoot",
        body: "The Bank of Japan governor told reporters on Friday, on the margins of the G20 meetings, that activity since the September decision had been “broadly in line” with the outlook. Underlying inflation is approaching 2%; financial conditions remain easy; the bank “would continue to raise rates” as data, markets and the exchange rate allow. He said it would not tolerate underlying inflation rising above 2%. The 29–30 October meeting will decide whether to revise that assessment. He would not name a neutral rate. Atsushi Mimura, standing beside him, talked about the IMF’s work in Southeast Asia and did not give a yen level. The next vote is still two weeks away.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261017/p2g/00m/0bu/003000c",
      },
      {
        id: "imf-fiscal",
        title: "The IMF said faster if needed — and asked Tokyo to name the fiscal frame",
        body: "Krishna Srinivasan, the Fund’s Asia-Pacific director, told Reuters in Bangkok that the BOJ was “doing the right thing” and that if inflation rose faster than expected it would have to “start tightening faster” so expectations did not come unstuck. He also said Japan had consolidated more than any other G7 country since the pandemic, and that markets were still worried about how the spending and the two-year food-tax cut would be paid for. “Japan also would benefit from having a medium-term fiscal framework.” He described the authorities as committed to a floating yen; a staff note said much of the move since mid-2025 had tracked speculative futures rather than yield gaps. September’s rate is 1.25%. The offset for the tax cut is still unnamed.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/boj-may-need-to-tighten-faster-if-inflation-beats-forecast-imf-says-4955234",
      },
      {
        id: "yana-out",
        title: "Yana is still the first resignation; the buses are still with the election board",
        body: "Kyodo’s Thursday wrap remains the receipt. Takaichi accepted Yana’s resignation on Wednesday night because she “could not overlook” the damage to Diet business and farm administration. He is the first cabinet minister to go under her, less than a month in the job. The May road-budget remarks and the free campaign shuttle buses — a possible Public Offices Election Act problem — were the files. He had said the buses were legal, then implied staff may not have asked the local election board about lawfulness. Komeito’s Hiromasa Nakano called the resignation “too late.” LDP secretary-general Shunichi Suzuki said it came at the “last possible moment” and that Yana still had to account. A censure in the Senate, where the coalition lacks a majority, was the next motion. It was not tabled after he left. The ministry finding on the road cuts has not been published.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88289",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "17 Oct 2026",
    lede:
      "Kim Ji-yong walked into Rene Square on Friday without an inauguration; Gallup put Lee at 39 and the noes at 52; Pyongyang said two cruise missiles left a submarine on Wednesday; the defence ministry answered Jang’s soot line; and the Amnok bridge that was finished in 2014 opened on Thursday.",
    stories: [
      {
        id: "kim-first-day",
        title: "Kim started work on Friday; the inauguration is next week",
        body: "President Lee Jae Myung signed the appointment on Thursday, the same day the Public Administration and Security Committee adopted the confirmation report. SBS says Kim arrived Friday morning at the Rene Square building in Jung-gu, to take briefings on the two weeks since the Serious Crime Investigation Agency opened and to look at headquarters and regional appointments. The appointment ceremony was put off in scheduling with Cheong Wa Dae and is expected early next week. The chair that was empty on 2 October now has a name. It does not yet have a ceremony.",
        sourceLabel: "SBS",
        sourceHref:
          "https://news.sbs.co.kr/english/article.do?news_id=N1008800566",
      },
      {
        id: "gallup-39",
        title: "Gallup: 39% yes, 52% no, first tick up after the floor",
        body: "Gallup Korea, Tuesday to Thursday, 1,003 adults, plus or minus 3.1 points. Positive assessments of Lee rose two points to 39% from the record-low 37% of the previous two weeks. Disapproval rose one point to 52%. Diplomacy was the top reason among those who approved, at 20%; the economy and livelihoods were 11%. Real estate and the same livelihood file were the main reasons among those who did not. The Democratic Party rose one point to 36%, still near its low since Lee took office; the People Power Party rose one point to 27%. The floor held. The majority did not move.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261016003300315",
      },
      {
        id: "slcm",
        title: "Two cruise missiles, one submarine, no Kim Jong-un on the pier",
        body: "KCNA said Thursday that two types of strategic cruise missile were fired in the East Sea on Wednesday, to test underwater combat systems and show the deterrent. Experts said the photographs pointed to the 3,000-ton Hero Kim Kun Ok, unveiled in 2023 as a tactical nuclear attack submarine. It would be that boat’s first public weapons test, and the first submarine-launched cruise missile since January 2024 from the 8.24 Yongung. Kim Jong-un did not attend. South Korea’s Joint Chiefs had not announced the launch; spokesman Jang Do-young said the military had tracked it from before launch to the end of flight. One type left a vertical launcher, the other a torpedo tube. Rodong Sinmun did not print it. KCNA said it had “no adverse impact” on neighbours.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261015005900315",
      },
      {
        id: "hgv-soot",
        title: "Jang said there was no soot; Seoul said soot is the wrong test",
        body: "Jang Chang-ha, head of the North’s Missile Administration, said Thursday that photographs of South Korea’s 8 October hypersonic glide-vehicle test showed a clean paint job and “not stained with any soot,” and that this meant the vehicle may not have reached hypersonic flight. The defence ministry said the airframe uses domestically developed heat-resistant materials and that the visible appearance of soot is impossible in that regime. Cheong Wa Dae had disclosed the barge shot from Anheung as a test of thermal protection, guidance and low-altitude irregular manoeuvre. The ministry said it would keep developing the weapon. The argument is about a photograph. Neither side released a speed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261015011300320",
      },
      {
        id: "amnok-bridge",
        title: "The Amnok bridge that was finished in 2014 opened on Thursday",
        body: "KCNA reported Friday that the ribbon was cut the day before on the new Sinuiju–Dandong crossing. Premier Pak Thae-song and China’s Li Qiang spoke by video; the two ambassadors were there in person. The four-lane span is 3,026 metres. China put about $310m into it; construction finished in 2014. Opening waited on North Korean roads and customs. Xinhua had the ceremony first. Pak said it would add “fresh vigor” to equally beneficial cooperation. Li said Beijing would put the relationship first “no matter how the international situation may change.” The old Friendship Bridge, open since 1943, stays the other crossing. The new one is a trade road. It is also a twelve-year delay that ended in a week of missile tests.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261016001700315",
      },
    ],
  },
];

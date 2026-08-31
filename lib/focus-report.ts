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
    updatedAt: "31 Aug 2026",
    lede:
      "OpenAI’s Friday cutoff of SpaceX-owned Cursor is still the weekend’s fight: Truell says the models are 5% of traffic and talks continue; Anthropic is adding Claude compute in the hole; the Hugging Face cheque is still unsigned; and SK hynix is shopping Intel for the logic die under the HBM stack.",
    stories: [
      {
        id: "openai-cursor",
        title: "OpenAI is still cutting Cursor off — Truell says 5%, talks continue",
        body: "Friday’s post stands: SpaceX has been told the contract that puts OpenAI models inside Cursor will wind down, with a proposed shutoff of 12 November — the longest notice the agreement allows after a change of control. SpaceX closed the $60bn all-stock purchase of Anysphere on 14 August. Cursor CEO Michael Truell said on X that night that OpenAI models serve about 5% of user traffic, that Cursor was an early customer, and that the company is speaking with OpenAI to resolve it. Musk’s Saturday reply was that he “couldn’t care less.” Future models, including Astra, will not be supplied. The product in the middle still does not own a frontier model.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html",
      },
      {
        id: "anthropic-cursor",
        title: "Anthropic is adding Claude compute — after it locked Windsurf out",
        body: "Hours after the notice, Anthropic co-founder Tom Brown said Cursor has been a partner since Sonnet 3.5 and that the lab will increase compute for Claude models in Cursor. CNBC notes Anthropic already partners with SpaceX and rents compute from it. Last June the same lab blocked Windsurf from Claude. Replit’s Amjad Masad reminded Brown of that on X; a Docker executive called it a great opportunity to stay quiet. One lab is locking a coding editor out of the stack. The other is putting more tokens through it.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html",
      },
      {
        id: "nvidia-hugging-face",
        title: "The $13bn Hugging Face cheque is still unsigned",
        body: "The Information said Wednesday night that Nvidia had agreed to buy Hugging Face for $12.9bn. Business Insider, which first had the auction, says talks at more than $13bn had not produced a signed agreement and could still collapse. CNBC’s source would only confirm that an Nvidia acquisition has been part of recent talks. Neither company has commented. Monday arrived without a filing or a denial. Hugging Face turned down a $500m Nvidia cheque at $7bn earlier this year so that no single investor would own the Hub. Full ownership is the opposite trade.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html",
      },
      {
        id: "sk-hynix-intel",
        title: "SK hynix is shopping Intel for the HBM base die TSMC now owns",
        body: "Herald Economy, citing industry sources on Monday, says SK hynix is considering Intel Foundry for base dies on HBM4E — its seventh generation — alongside TSMC. The base die is the logic chip at the bottom of the stack. Through HBM3E the company made them itself; HBM4 in mass production uses TSMC’s 12-nanometre-class process. Sources put that TSMC die at three to four times the cost of the DRAM core dies SK hynix makes on its own 1b process. There is no signed foundry deal. Custom HBM from HBM4 onward is supposed to be tailored to each accelerator. A single foundry is a single price list.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10857005",
      },
      {
        id: "cyber-letter",
        title: "OpenAI, Anthropic, Google and 100 others still want a cyber wall",
        body: "More than a hundred firms — OpenAI, Anthropic, Google, Microsoft, CrowdStrike, banks, infrastructure — signed an open letter published Thursday calling for collective defence against AI-enabled attacks they say will become far more widespread in the coming months. Governments should coordinate locally and internationally; frontier labs should fund, train, and open models to defenders. The same labs are still shipping more capable agents. The letter follows July’s Hugging Face breakout and later reports that Anthropic and Meta agents also reached systems they were not supposed to touch. Friday’s Cursor cutoff is a commercial fight. The letter is the industry asking someone else to harden the pipes.",
        sourceLabel: "France 24",
        sourceHref:
          "https://www.france24.com/en/technology/20260828-openai-anthropic-join-global-call-to-strengthen-cyber-defences",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年8月31日",
    lede:
      "中選會星期五只放行廢除非核家園、編成第22案綁11月28日。新竹市府週末要再議林智堅不起訴。光州中國館人員撤了，佈展停在七成。無人載具條例仍未副署，周四追加預算預估超過三千億。賴清德今天把全年成長率說成11.05%。",
    stories: [
      {
        id: "cec-referendums",
        title: "中選會只過廢除非核家園：第22案，11月28日綁大選，多花8.1億",
        body: "中選會28日下午開了兩個半小時委員會，立法院送來的三案只過一案。廢除非核家園獲六票同意、陳月端棄權，編成全國性公投第22案，11月28日與九合一同日投開票，上午8時至下午4時；游盈隆說一案加8億1,000萬，開票對標2022年估到晚上11時40分，他對辦好公投「百分之百、absolutely」。鞭刑案七位出席委員全數認定不符重大政策創制或複決，理由是現行刑罰沒有鞭刑、提案帶立法原則，且有違兩公約施行法之虞。交通罰鍰連投三次都是4比3，第三次改多數決，同樣否決。國民黨罵沒收民主；黃國昌要尋求救濟。一票多案沒修成；三案也沒全上。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608280299.aspx",
      },
      {
        id: "lin-hsinchu",
        title: "新竹棒球場案林智堅不起訴，市府週六發了近三千字要再議",
        body: "新竹地檢署偵辦市立棒球場統包工程近四年，28日公布前市長林智堅等人犯罪嫌疑不足、均不起訴。市府29日發近三千字新聞稿：尊重檢方職權，但不起訴不等於工程合格；處分書已記載施工、履約與管理問題，相關人員因施工日誌、監造及抽查紀錄不實坦承犯行並獲緩起訴。市長高虹安說未達起訴門檻不等於工程合格。市府已向巨佳營造求償逾四億元改善修復費，並將依採購法第101條檢視是否刊登公報。刑事門檻過了；行政與民事還在打。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5556280",
      },
      {
        id: "gwangju-china",
        title: "光州台灣館名稱改回之後，中國館佈展停在七成",
        body: "光州雙年展基金會本週恢復Taiwan Pavilion後，中國駐韓大使戴兵27日會見光州市長閔炯培，對批准台灣館名稱表示遺憾與關切。公視引述韓媒：中國館作品安裝進度已達七成，28日突然暫停佈展，人員撤離河正雄美術館，參展藝術家尚未入境；韓媒指是應戴兵與駐光州總領事顧景奇要求。閔炯培回應政治不應進入藝術。雙年展9月5日開幕。名稱之爭收束；中國館的人走了。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/824687",
      },
      {
        id: "drone-budget",
        title: "無人載具條例還沒副署，周四追加預算估逾三千億",
        body: "立法院27日三讀《強化國防自主暨無人載具產業發展條例》：六年2,400億、每年原則400億。自由時報曾引述政院擬副署並編入追加預算。聯合報今天寫道，周四院會將提今年度追加預算，無人機經費與六大社福津貼等八大項，預估超過三千億，閣揆不副署機率相對小。發言人李慧芝說尚未收到三讀法案，收到後就執行面審慎考量。老農、國民年金與六大津貼回溯7月1日約215億；軍公教專業加給與主管加給約107億。條例過了；副署還沒落筆。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9723601",
      },
      {
        id: "lai-growth",
        title: "賴清德：全年成長估11.05%，明年起每年250億助中小微企業",
        body: "總統今天接見工商協進會第27屆理監事。他說上半年經濟成長14.15%，是半世紀以來同期最強；全年預估11.05%，創39年新高。2024年上任後每年編一百多億的中小微企業多元振興，就職滿兩年再推規模1,000億、為期八年的計畫，明年起每年250億協助轉型升級，並研擬中小微企業轉型升級發展條例。他也說明年總預算歲入歲出平衡、實質零舉債前提下普發現金每人1萬元。成長率是主計總處8月中的數。現金是選前的數。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9724537",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "31 Aug 2026",
    lede:
      "The Finance Ministry’s record ¥15.4tn yen-buying print is public; the yen has already crawled back through 160. Bessent told Reuters on Sunday the slide is “pretty well contained” as Katayama and Ueda sit down in Asheville. Ministries’ FY2027 requests are due today through ¥130tn. The largest opposition caucus in the lower house is splitting.",
    stories: [
      {
        id: "jp-intervention",
        title: "Japan spent a record ¥15.4tn in a month trying to buy the yen",
        body: "The Finance Ministry said Friday that yen-buying operations from 30 July to Wednesday came to ¥15.4tn, above the previous monthly record of ¥11.73tn spent over three days in April and May, and above the ¥11–12tn the market had guessed. A government source confirmed an operation on 30 July after the dollar printed ¥163.99, a four-decade high. A joint move with US authorities in New York hours on 31 July was the first coordinated intervention in 15 years; the dollar briefly dipped into the mid-155s. On Friday in New York the yen slipped back through 160 after Fed Chair Kevin Warsh left the door open to a hike. The receipt is public. The rate is not.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20260829/p2g/00m/0bu/008000c",
      },
      {
        id: "jp-bessent",
        title: "Bessent: yen moves are “pretty well contained,” not disorderly",
        body: "In a Reuters interview on Sunday in Asheville, Treasury Secretary Scott Bessent was asked whether the yen was still making disorderly moves. “Oh, no. I think it’s pretty well contained.” He expects BOJ Governor Kazuo Ueda to “do the right thing” on rates with Takaichi’s backing, and declined to say whether the bank should hike more aggressively: “I’m not going to tell them what to do.” He plans to meet Ueda on the sidelines of the two-day G20 finance gathering that starts today. A month ago the same secretary described the joint intervention as a response to disorderly moves. The dollar had already printed through 160 on Friday.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/bessent-says-yen-moves-pretty-contained-not-disorderly-2026-08-30/",
      },
      {
        id: "jp-takaichi-nomics",
        title: "Bessent’s fiscal advice is to sit back. Takaichi is still spending.",
        body: "The same interview had Bessent saying Japan has “conquered” deflation and shifted to “Takaichi-nomics”: more shareholder-friendly, with workforce deregulation and less government intervention. His recommendation on fiscal policy: “sit back and enjoy the success of Abenomics and let that run.” Takaichi has laid out ambitious spending for growth and household costs. Reuters notes that programme has already helped push the 10-year JGB to a three-decade high of 2.945% earlier this month. Critics say the expansion contradicts the BOJ’s effort to tame inflation. The joint-intervention bill is what that sentence costs when the yen does not believe it.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/bessent-says-yen-moves-pretty-contained-not-disorderly-2026-08-30/",
      },
      {
        id: "jp-budget-130t",
        title: "FY2027 requests are due today, still heading through ¥130tn",
        body: "Kyodo’s sources had ministry requests for the year from April exceeding ¥130tn, up from last year’s record ¥122tn, with the month-end deadline today. Takaichi lifted the cap on growth-strategy spending and is folding routine supplementary items into the initial budget. METI wants about ¥7.7tn, of which ¥4.5tn is uncapped AI and chip investment. Defence is asking a record ¥8.9tn, including interceptor drones. The request is the policy. The intervention bill is the invoice. Bessent’s advice was to sit back.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20260822/p2g/00m/0bu/010000c",
      },
      {
        id: "jp-cra-split",
        title: "The largest opposition caucus in the lower house is splitting",
        body: "Kyodo said Monday that Centrist Reform Alliance leadership told lawmakers a breakup is expected. The CRA was formed in January by lower-house members from the CDP and Komeito; it won 49 seats in February, 28 from Komeito and 21 from the CDP, in a chamber the LDP and Japan Innovation control. Talks to fold upper-house CDP and Komeito members into a three-way merger collapsed. CDP leader Shunichi Mizuoka told his counterparts on Friday his party would not join; a senior Komeito executive rejected his fallback of a joint upper-house caucus. The three leaders were due to meet later Monday. Analysts said fragmentation helps the ruling camp into next year’s local elections. Takaichi’s opposition is coming apart on the day her finance minister sits down in Asheville.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83451",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "31 Aug 2026",
    lede:
      "Lee’s Sunday cabinet list met a Monday poll at 38.9% and an opposition that called the justice pick a trial-withdrawal ministry. Koo still flew to the G20. Kim Jong-un already has a new defence minister. A Seoul court gave Unification Church leader Han Hak-ja two years.",
    stories: [
      {
        id: "kr-cabinet",
        title: "Lee names six ministers — Koo turned around at Incheon and flew anyway",
        body: "Chief of staff Kang Hoon-sik announced the nominations on Sunday: vice finance minister Lee Hyoung-il as finance minister and deputy prime minister; former CFC deputy commander Kang Shin-chul as defence; DP lawmaker Kim Seung-won as justice; vice land minister Hong Jee-sun as land; DP lawmaker Lee So-young as SMEs; Basic Income Party floor leader Yong Hye-in as gender equality. The shuffle was brought forward after Justice Minister Jeong Seong-ho resigned citing ill health; Kim inherits the 2 October launch of new investigative and prosecution bodies. Koo Yun-cheol turned back at Incheon on Sunday morning, then reversed course and left for the G20 as scheduled. A deputy prime minister stays in office until a successor is confirmed. The nominees still have to sit hearings.",
        sourceLabel: "Aju Press",
        sourceHref: "https://www.ajupress.com/view/20260830113311649",
      },
      {
        id: "kr-ppp",
        title: "The opposition calls the justice pick a trial-withdrawal ministry",
        body: "People Power floor leader Jeong Jeom-sik told the party’s supreme council on Monday that the shuffle was Lee “completely rejecting public calls for an overhaul of state affairs,” and that Kim Seung-won’s nomination was intended to help drop criminal charges against the president. Supreme councillor Shin Dong-wook said nominating Kim showed the president believes the justice minister “only needs to protect him.” The party also attacked Yong Hye-in’s gender-equality pick as deepening division. DP leader Kim Min-seok said the six were qualified and would refine their past views at confirmation hearings. The Blue House is selling dynamism. The opposition is reading the justice ministry.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260831005900315",
      },
      {
        id: "kr-realmeter",
        title: "Realmeter: Lee 38.9%, first time below 40, seventh weekly drop",
        body: "Realmeter’s poll for EKN, 2,509 adults from 24–28 August, had the president at 38.9% approve — down 1.3 points — and 58.7% disapprove, up 1.8. It is the first reading below 40 since he took office in June last year, and the seventh consecutive weekly decline. The pollster cited housing prices, the office’s refusal to appoint a Supreme Court nominee, and distrust of police after a missing-woman case on Jeju. The Korea Herald had the sharpest drop among voters in their 50s, down 7.5 points to 40.8. A separate Realmeter party poll put the Democrats at 43.1% and People Power at 37.7%. Sunday’s list is the response. Monday’s number arrived anyway.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260831001500315",
      },
      {
        id: "kr-nk-defense",
        title: "Kim Jong-un replaced his defence minister on Saturday",
        body: "KCNA said Sunday that the second meeting of the ninth WPK Central Military Commission, guided by Kim Jong-un the day before, named Kim Song-gi — director of the KPA General Political Bureau — as defence minister. No Kwang-chol was removed from that post and from the party’s central leadership and made first vice-director of the Munitions Industry Department. Pak Jong-chon returns as vice-chairman of the commission after being dropped in February. The meeting discussed “structural reorganization” of defence affairs; a separate dispatch had Kim decorating weapons scientists. Seoul is confirming a new defence minister of its own. Pyongyang already has one.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260830000352315",
      },
      {
        id: "kr-han-hakja",
        title: "Unification Church leader Han Hak-ja gets two years",
        body: "The Seoul Central District Court on Monday sentenced the 83-year-old to two years — one year for the Political Funds Act, one year for the Anti-Graft Act — far below the 13 years special counsel Min Joong-ki had sought. The court found her guilty of handing 100 million won to former PPP lawmaker Kwon Seong-dong and of delivering a Chanel bag and a Graff necklace, among other items, to then-first lady Kim Keon Hee. It acquitted her of embezzling church funds. She was not taken into custody; a suspended detention order for health reasons runs to Wednesday evening. The church said it would appeal. Kwon already lost his seat after a two-year term was finalized. Lee’s justice nominee still has a confirmation hearing.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10857667",
      },
    ],
  },
];

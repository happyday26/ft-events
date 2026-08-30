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
    updatedAt: "30 Aug 2026",
    lede:
      "OpenAI spent Friday invoking a change-of-control clause against SpaceX-owned Cursor; Anthropic, which already partners with SpaceX, said it would add Claude capacity; the Hugging Face cheque is still unsigned; and more than a hundred firms including both labs want governments to harden the networks their agents keep testing.",
    stories: [
      {
        id: "openai-cursor",
        title: "OpenAI is cutting Cursor off — change of control, shutoff 12 November",
        body: "Friday’s post says SpaceX has been told the contract that puts OpenAI models inside Cursor will wind down, with a proposed shutoff of 12 November — the longest notice the agreement allows after a change of control. SpaceX closed its $60bn all-stock purchase of Anysphere earlier this month. OpenAI’s stated reason is that it cannot be confident SpaceX will stay inside the terms, citing Twitter after Musk bought it and sworn testimony that xAI, now also inside SpaceX, had already broken them. Future models, including Astra, will not be supplied. Cursor co-founder Michael Truell, now a SpaceX executive, said the company is talking to OpenAI. Musk’s Saturday reply was that he “couldn’t care less.”",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/",
      },
      {
        id: "anthropic-cursor",
        title: "Anthropic is adding Claude compute in the hole OpenAI just opened",
        body: "Hours after the notice, Anthropic co-founder Tom Brown said the lab would increase compute for Claude models in Cursor. Reuters notes Anthropic already has an ongoing partnership with SpaceX. The same week OpenAI, Anthropic, Google and a hundred others asked governments to build a cyber wall against the agents they train. One lab is locking a coding editor out of the stack. The other is putting more tokens through it. The product that sits in the middle does not own a frontier model.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/media-telecom/openai-end-partnership-with-spacexs-cursor-2026-08-29/",
      },
      {
        id: "nvidia-hugging-face",
        title: "The $13bn Hugging Face cheque is still unsigned",
        body: "The Information said Wednesday night that Nvidia had agreed to buy Hugging Face for $12.9bn. Business Insider, which first had the auction, says talks at more than $13bn had not produced a signed agreement and could still collapse. CNBC’s source would only confirm that an Nvidia acquisition has been part of recent talks. Neither company has commented. The weekend passed without a filing or a denial. Hugging Face turned down a $500m Nvidia cheque at $7bn earlier this year so that no single investor would own the Hub. Full ownership is the opposite trade.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html",
      },
      {
        id: "nvidia-fy28",
        title: "Nvidia’s year-ahead guide is still 70% — because supply, not demand, is the cap",
        body: "Wednesday’s $96.2bn quarter and $108bn Q3 guide were the print. The number the Street is still digesting is fiscal 2028 revenue growth of 70%, against a prior 44%. Huang said demand is larger than that; the supply chain only lets them commit to 70%. AI labs are supposed to be about a quarter of next year’s business. Gross margin is guided to 74% in Q3 and a trough of 71–72% in Q4 as memory costs bite. A company that never guided a year out is telling the market the boom has another fiscal year. The constraint is wafers and HBM, not buyers.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/26/nvidia-70percent-growth-forecast-puts-it-on-track-to-be-tech-no-2-company.html",
      },
      {
        id: "cyber-letter",
        title: "OpenAI, Anthropic, Google and 100 others asked for a cyber wall on Thursday",
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
    updatedAt: "2026年8月30日",
    lede:
      "中選會星期五只放行廢除非核家園、編成第22案綁11月28日九合一；鞭刑與交通罰鍰兩案被否決，藍白週日還在罵。新竹地檢對林智堅不起訴，高虹安要再議。光州台灣館名稱改回之後，中國撤展。無人載具條例仍卡在副署。",
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
        title: "新竹棒球場案林智堅不起訴，高虹安要再議",
        body: "新竹地檢署偵辦市立棒球場統包工程近四年，28日公布前市長林智堅等人犯罪嫌疑不足、均不起訴。林智堅今天在臉書說心情平靜、並不意外，只是真相大白，並用「雲在青天水在瓶」、「輕舟已過萬重山」形容此刻。市長高虹安說未達起訴門檻不等於工程合格。市府列出檢方處分書中的施工瑕疵與不實紀錄，稱未確實裂解的Ｂ五類營建廢棄物約占拆除量0.753%，但球場級配不應摻拆除結構物，將聲請再議，並已向巨佳營造求償逾四億元改善修復費。刑事門檻過了；行政與民事還在打。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9722549",
      },
      {
        id: "gwangju-china",
        title: "光州台灣館名稱改回之後，中國撤展",
        body: "光州雙年展基金會本週二恢復Taiwan Pavilion、並讓國美館進場施工後，中國駐韓大使戴兵27日會見光州市長閔炯培，對恢復台灣館表示遺憾與關切。韓媒報導，使館隨後要求中方策展與布展人員停止施工、撤出河正雄美術館。雙年展基金會說9月5日開幕在即，正密切觀察、希望順利舉行。閔炯培回應政治不應進入藝術。名稱之爭收束；中國館的牆空了。",
        sourceLabel: "ARTnews",
        sourceHref:
          "https://www.artnews.com/art-news/news/china-pulls-artists-from-gwangju-biennale-as-taiwan-pavilion-moves-forward-1234796234/",
      },
      {
        id: "drone-countersign",
        title: "無人載具條例三讀後，傳政院擬副署並塞進追加預算",
        body: "立法院27日三讀《強化國防自主暨無人載具產業發展條例》：六年2,400億、每年原則400億，主管機關經濟部，軍用採購歸國防部。民進黨團稱國會擴權；行政院當晚說國防沒有等待本錢、將儘速編列。自由時報今天引述，政院擬副署，并把預算編入本週四院會的今年度追加預算，明年總預算再提修正，以免年底選戰被操作。國民黨許宇甄要卓榮泰用同一套標準面對其他三讀案，停止選擇性副署。法案依規劃9月29日前咨請總統公布。條例過了；副署還沒落筆。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5557091",
      },
      {
        id: "f16v-wait",
        title: "沙德爾過後志航放晴，首批F-16V還是沒落地",
        body: "編號6727、6728的Block 70，自由時報在台東放晴後寫道已推進至關島、隨時可能直飛志航；氣象署28日下午2時30分解除沙德爾海警。志航官方仍不公布降落時間，軍迷在基地外制高點接著等。迄週日上午，沒有交機畫面。另有接近空軍的說法稱兩架「有小問題」、窗口看到9月初，關島與夏威夷的現場觀察對不上。顧立雄星期三只說交機由台美協調、時間先不透露。66架、2,472億元「鳳翔專案」首批；全數交機目標仍是2028年底。戰機在太平洋上被追蹤，接機還是沒有日期。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5552531",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "30 Aug 2026",
    lede:
      "The Finance Ministry on Friday printed a record ¥15.4tn of yen-buying in a month; Katayama and Ueda are in Asheville this weekend to talk about a currency that has already crawled back toward 160; Takaichi is still selling a ¥40tn bond ceiling against ministry requests through ¥130tn; and the food-tax cut still has no named offset.",
    stories: [
      {
        id: "jp-intervention",
        title: "Japan spent a record ¥15.4tn in a month trying to buy the yen",
        body: "The Finance Ministry said Friday that yen-buying operations from 30 July to Wednesday came to ¥15.4tn, above the previous monthly record of ¥11.73tn spent over three days in April and May, and above the ¥11–12tn the market had guessed. A government source has confirmed an operation on 30 July after the dollar printed ¥163.99, a four-decade high. A joint move with US authorities in New York hours on 31 July was the first coordinated intervention in 15 years; the dollar briefly dipped into the mid-155s and has since sat near 159. Takaichi’s spending plans with no named offset are the fiscal story the yen is still trading. The receipt is now public. The rate is not.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20260829/p2g/00m/0bu/008000c",
      },
      {
        id: "jp-g20",
        title: "Katayama and Ueda take the yen to Asheville",
        body: "The finance minister and the BOJ governor are at the US-hosted G20 finance gathering in Asheville this weekend. Katayama told reporters Friday that the joint-intervention statement with Treasury Secretary Scott Bessent “still lives,” and that she expected a bilateral with him after briefing Takaichi. Bessent has said he looks forward to seeing Ueda and has nudged the bank to hike as part of arresting the yen. Markets have 80–90% on a move at the 17–18 September meeting after Himino on Thursday declined to push back. The dollar was ¥159.60 on Friday. The last coordinated buy already faded. The next conversation is in North Carolina.",
        sourceLabel: "Japan Today / Reuters",
        sourceHref:
          "https://japantoday.com/category/business/japan%27s-finance-minister-to-attend-g20-market-focus-on-yen-debate",
      },
      {
        id: "jp-takaichi-yomiuri",
        title: "Takaichi: fewer extra budgets, new bonds stuck around ¥40tn",
        body: "In a Yomiuri interview published Friday, the prime minister said she would stop treating supplementary budgets as a second initial budget and reserve them for genuine emergencies. New government-bond issuance should stay around ¥40tn, the level she says last year’s extra budget still hit because tax revenue overshot. She is selling “responsible active fiscal policy”: expansion for defence and growth, consolidation by not adding a December grab-bag. Friday’s intervention print is what that sentence costs when the yen does not believe it. She answered the bond market with a ceiling on how she borrows, not on how ministries request.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10855215",
      },
      {
        id: "jp-budget-130t",
        title: "FY2027 requests are still heading through ¥130tn",
        body: "Kyodo’s sources have ministry requests for the year from April exceeding ¥130tn, up from last year’s record ¥122tn, with the month-end deadline still ahead. Takaichi lifted the cap on growth-strategy spending and is folding routine supplementary items into the initial budget. METI wants about ¥7.7tn, of which ¥4.5tn is uncapped AI and chip investment. Defence is asking a record ¥8.9tn, including interceptor drones. Debt-service is seen well above this year’s ¥31.3tn on a 3.8% assumed rate. Tax revenue this year is forecast around ¥83tn. The request is the policy. The Yomiuri ceiling is the constraint. The intervention bill is the invoice.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/82790",
      },
      {
        id: "jp-food-tax",
        title: "The food-tax cut is still a campaign with a funding hole",
        body: "The cabinet has already approved cutting the food consumption tax from 8% to 1% for two years from April 2027, plus cash equivalent to the remaining point for lower-income households. Weekend polls still show more supporters than opponents — and 70% plus worried about the fiscal hole. There is still no named offset for something in the region of ¥5–10tn a year; Kihara’s line remains that the government will “carefully explain” funding and not lean on deficit-covering bonds. Takaichi’s Friday interview tries to reassure the JGB market on issuance. The tax cut is the item that does not yet fit on that page, and the ¥15.4tn FX receipt does not make the hole smaller.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/08/24/japan/politics/takaichi-support-rates-polls/",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "30 Aug 2026",
    lede:
      "Lee named six ministers this morning after Gallup had him at a post-inauguration low of 42%; the opposition called the justice pick a bid to bury his own trial; and Kim Jong-un spent Saturday replacing his defence minister.",
    stories: [
      {
        id: "kr-cabinet",
        title: "Lee names six ministers — first big shuffle, same housing complaint",
        body: "Chief of staff Kang Hoon-sik announced the nominations at Cheong Wa Dae this morning: vice finance minister Lee Hyoung-il as finance minister and deputy prime minister for the economy; former CFC deputy commander Kang Shin-chul, now ambassador in Riyadh, as defence; DP lawmaker Kim Seung-won as justice; vice land minister Hong Jee-sun as land; DP lawmaker Lee So-young as SMEs; Basic Income Party floor leader Yong Hye-in as gender equality. Kim Kyoung-soo becomes special political aide; Rebuilding Korea’s Lee Hai-min takes a new AI-and-future-planning secretary post. It is the first major cabinet change since Lee took office in June last year, and it arrives after Gallup’s post-inauguration low. The nominees still have to sit confirmation hearings.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260830001652315",
      },
      {
        id: "kr-ppp",
        title: "The opposition calls the justice pick a trial-withdrawal ministry",
        body: "People Power floor leader Jeong Jeom-sik said Sunday the shuffle was “far removed” from the livelihood cabinet the opposition had demanded, and a “state-terrorism reshuffle” whose priority is withdrawing indictments. He called Kim Seung-won — the DP’s Legislation and Judiciary whip — the launch of that blitz, and said promoting deputy ministers to the economy and land jobs declared that housing policy would not change. Party leader Jang Dong-hyeok said Kim, a former Daejang-dong defence lawyer and co-chair of an “indictment-withdrawal group,” had recently sponsored a bill to drop breach-of-trust charges, the ones facing Lee. The Blue House is selling dynamism and expertise. The opposition is reading the justice ministry.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10856460",
      },
      {
        id: "kr-gallup",
        title: "Gallup: Lee 42%, disapproval 50%, housing still the complaint",
        body: "Gallup Korea’s fourth-week August poll, 1,001 adults from Tuesday to Thursday, had the president at 42% approve — down three points from last week and a post-inauguration low — and 50% disapprove, the first time negatives have crossed half. Among critics, housing policy is 27%; prosecutorial-power cuts, the economy, and ethics including his own trial are 7% each. Positives still cite diplomacy first. The Democratic Party fell two points to 39%, under 40% for the first time in about ten months; People Power was unchanged at 25%; 26% backed no party. Realmeter had already printed 40.2% this week. Sunday’s list is the response. The land nominee designed Gyeonggi basic housing.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10855203",
      },
      {
        id: "kr-nk-defense",
        title: "Kim Jong-un replaced his defence minister on Saturday",
        body: "KCNA said Sunday that the second meeting of the ninth WPK Central Military Commission, guided by Kim Jong-un the day before, named Kim Song-gi — director of the KPA General Political Bureau — as defence minister. No Kwang-chol was removed from that post and from the party’s central leadership and made first vice-director of the Munitions Industry Department. Pak Jong-chon returns as vice-chairman of the commission after being dropped in February. The meeting discussed “structural reorganization” of defence affairs; a separate dispatch had Kim decorating weapons scientists. Seoul is confirming a new defence minister of its own this morning. Pyongyang already has one.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260830000352315",
      },
      {
        id: "kr-ufs-opcon",
        title: "The shortened UFS drill is still an OPCON-transfer problem",
        body: "The allies wrapped Ulchi Freedom Shield six days early after Trump called the drills costly and “hostile” to a North Korea he described as respectful. The counter-offensive phase and most field training went. Defence Minister Ahn has said wartime OPCON transfer is unaffected because phase one met its assessment goals; Kang Shin-chul, if confirmed, inherits that file. The FOC verification that was supposed to feed October’s SCM has fewer reps. Lee still wants a transfer in his term; Washington still wants conditions, not a date. The opposition called the cut a security failure. The new defence nominee is a former deputy commander of the Combined Forces Command. The calendar he is walking into was rewritten in Washington.",
        sourceLabel: "AP",
        sourceHref:
          "https://apnews.com/article/north-south-korea-us-drills-trump-kim-e0350e23feac60adfa60f2cbf5eff27f",
      },
    ],
  },
];

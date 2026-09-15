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
    updatedAt: "15 Sep 2026",
    lede:
      "Trump phoned Jensen Huang onstage at the All-In Summit and called the slowdown a hoax. Huang praised the Anthropic whistleblower and still rejected an industry brake. The three labs’ July working groups remain a conversation. Nvidia fell 3.4%. Sacks told CBS the labs do not need a waiver.",
    stories: [
      {
        id: "ai-trump-huang",
        title: "Trump rang Huang onstage: the robots will not be taking over, and the rest is a hoax",
        body: "Monday morning in Los Angeles, midway through Huang’s All-In interview, the president called. Huang put him on speaker. “The robots will not be taking over. The AI will not be taking over the rest of the world. The whole thing is a hoax,” Trump said, adding that “we have to be a little bit careful” but should not stop. Data centres were “the oil of the next 20, 25 years,” “bigger than the internet,” and opponents were “playing right into the hands” of political people “or China.” Huang: “You’re right.” “We’re not going to let that happen, sir.” Chamath Palihapitiya, co-hosting: “This was surreal.” Sunday’s fairway answer was a sentence. Monday’s was a phone call in a room that applauded.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/14/trump-phones-nvidia-huang-all-in-calls-data-center-opposition-hoax.html",
      },
      {
        id: "ai-huang-coxon",
        title: "Huang: Coxon showed great courage. The prediction is not grounded in science",
        body: "After the call, Huang did not take Trump’s word as his own. He called AI safety “paramount,” said “America is able to lead — and to do it safely,” and praised Jacob Coxon, the Anthropic researcher who quit on the 9th, for “great courage.” Then the distinction: “I think the whistleblowing is fine. I think the scientific prediction about the future is less fine because it’s not grounded on science, obviously.” He said he does not know what Coxon saw inside Anthropic. A company slowing itself is a sentence he can live with. An industry-wide brake is not. Nvidia sells the chips either sentence would idle.",
        sourceLabel: "Business Insider",
        sourceHref:
          "https://www.businessinsider.com/nvidia-ceo-jensen-huang-ai-doomerism-lacks-scientific-basis-2026-9",
      },
      {
        id: "ai-nvidia-tape",
        title: "Nvidia fell 3.4% on the slowdown sentence",
        body: "US tech sold off Monday on the chance that frontier labs might actually insert pauses between capability jumps. Nvidia, still the world’s most valuable company, dropped 3.4%. Trump had already posted that he was “breaking another Hoax — That AI is going to take over, consume, and destroy the World,” and that people raising the alarm were “Revolutionaries for a Bad and Evil Cause.” The call with Huang was the same post, live. The tape treated Amodei’s Saturday essay as a demand risk for a day. The president treated it as a hoax. The chipmaker is on both sides of that argument.",
        sourceLabel: "The Straits Times",
        sourceHref:
          "https://www.straitstimes.com/world/united-states/nvidia-ceo-jensen-huang-puts-trump-on-speakerphone-while-downplaying-ai-risks",
      },
      {
        id: "ai-labs-talks",
        title: "The three labs have been meeting since July. There is still no charter",
        body: "The Information’s Sunday scoop — Anthropic, OpenAI and Google working groups below CEO level, meeting regularly since July on a voluntary standards body, as recently as last week — was still the live file on Monday. Altman has told staff that without federal backing the labs would have to build it themselves. A White House draft order for a government body stalled; Sacks has opposed that version. Zuckerberg’s 10 August letter argued against an AI regulatory body if America is to win against China. Cohere’s Aidan Gomez called the plan “a great idea from the cartel.” There is still no charter, no date, and no agreement on who holds the pen. Monday’s phone call did not supply one.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/international/2026/09/14/rivals-unite-anthropic-openai-google-push-ai-standards-body",
      },
      {
        id: "ai-sacks-cbs",
        title: "Sacks, on CBS: make it safe yourselves. China will not pause",
        body: "The former White House AI czar, still co-chair of Trump’s science council, told CBS Monday that fears of an AI takeover are overblown and that it is “first and foremost” on Anthropic and OpenAI to make the products safe. “They should tell us how they should do that. If they can’t do that, they should step aside for people who can do that.” Asking Washington for a framework while claiming the models are out of control, he said, is the wrong order. A broad pause would let China “race ahead. It’s pretty clear they’re not going to stop.” Bloomberg had the same interview as a no-antitrust, no-permission line. The labs asked for a body. The reply, again, was a dare.",
        sourceLabel: "CBS News",
        sourceHref:
          "https://www.cbsnews.com/news/david-sacks-ai-developers-safety-regulation/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月15日",
    lede:
      "國防部今早印出7艦、2公務船、8架次共機。115年度總預算三讀滿一個月，立法院仍未函送。謝志偉說文托泰內疑有中國人員冒充清潔工。黃重諺稱中國動員參選每天都在發生。法國兩名議員說台灣領袖訪歐無可爭論。",
    stories: [
      {
        id: "pla-tuesday",
        title: "國防部：昨日6時迄今，7艘共艦、2艘公務船，7架次越中線",
        body: "國防部15日上午：自昨天上午6時至今天上午6時，偵獲7艘共艦、2艘公務船及8架次共機，其中7架次逾越台灣海峽中線，侵擾北部、西南及東部空域，持續在台海周邊活動。國軍以任務機艦及岸置飛彈應處。周一同一口徑是6艦2公務船、4架次中的2架次進入西南及東部。艦往上，越中線的架次也往上。北部這次寫進去了。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609150031.aspx",
      },
      {
        id: "budget-unsent",
        title: "總預算三讀滿一個月，立法院仍未咨請總統公布",
        body: "115年度中央政府總預算8月14日三讀，延宕351天後過關；自由時報今天盤點，立法院迄未將三讀結果函送總統府與行政院，未經總統公布即未生效。國防預算仍只能依預算法第54條執行：14億元戰傷手術及急救醫療設備、13億元行政用途無人機等新興計畫動彈不得。韓國瑜8月26日說，請議事人員在9月29日開議日前校對8月最後兩次院會通過的議案，再咨請總統公布。主計總處先前估不得動支2,992億。政院3日通過的6,076億追加案，國防1,457億、無人載具559億，仍要等總預算先落地。三讀過了。函文沒有。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5574258",
      },
      {
        id: "hsiao-cleaner",
        title: "謝志偉：文托泰內演講前，疑有中國人員冒充清潔工情蒐",
        body: "駐歐盟兼駐比利時代表謝志偉今天在臉書寫「世界都在看台灣－中國也派了人來看」。他說蕭美琴在文托泰內島演說前三小時，維安勘查仍空的戶外會場，一名亞洲面孔女子低頭滑手機坐在長椅上，自稱是下一場的清潔工；維安說這場地與下一場絕未配置清潔工，且當時已管制，要求她離開，否則到警局談。她後來沒再出現。「大家認爲，一定是老共派來情蒐的」。民進黨團莊瑞雄說中國打壓司空見慣，台灣不會退縮；范雲說真正不正常的是北京想幫歐洲人決定可以跟誰說話。行程已結束。交涉沒停。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609150034.aspx",
      },
      {
        id: "huang-election",
        title: "黃重諺：中國動員參選「毫無疑問每天都在發生」",
        body: "國安會諮詢委員黃重諺接受自由時報專訪，談九合一。他說中國想動員特定族群進入台灣民主運作，「毫無疑問每天都在發生」，目的是弱化台灣：多一、兩個極端政治人物就能激化對立、讓社會難形成共識，「不需要打你，讓你每天吵成一團就好」。吵成一團，三項必要無人機就沒時間買。他點名一夜可產出上萬個具即時互動能力的「活帳號」、針對蔡英文、賴清德與參選台北市長的沈伯洋大量生成AI影片，以及YouTube養生頻道平時講溫開水、關鍵時刻同步轉向輔選。法規未周延。手法在翻新。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5574234",
      },
      {
        id: "france-meps",
        title: "法國兩名議員：台灣人有自己的領袖，訪歐無可爭論",
        body: "中央社巴黎14日專電、今天刊出：國民議會友台小組副主席馬蒂諾（Éric Martineau）與議員聖珀（Laetitia Saint-Paul）就蕭美琴訪義受訪。馬蒂諾說，台灣領袖想來法國、義大利、比利時或其他地方都不該是問題，「這不是要冒犯中國」，「台灣人有自己的領袖……對我來說沒什麼好爭論」；若蕭美琴受邀訪法，他個人不覺得有何不妥。聖珀說歐盟國家應與民主政體團結並承擔這個選擇，法國與中國對話、也與台灣對話；若有一天蕭訪法，「對我來說理所當然」。北京已向義大利及歐盟嚴正交涉。議員的句子先到了。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609150019.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "15 Sep 2026",
    lede:
      "Cabinet approved the food-tax outline this morning. The ¥5tn hole is still a review of spending, not a named offset. The 10-year JGB printed 3.025%. Takaichi told the LDP the shuffle is Wednesday and Thursday. Nakatsuka is still the name being walked into the Cabinet.",
    stories: [
      {
        id: "jp-food-tax-cabinet",
        title: "Cabinet approved the food-tax outline. The bills still have to find a Diet",
        body: "Takaichi’s Cabinet on Tuesday approved the outline cutting the food consumption tax from 8% to 1% for two years from April 2027. Lost revenue is to be made up by a review of spending and revenue, not deficit bonds. From April 2029 the government aims to introduce new benefits for low- and middle-income households. The outline is the preface to bills for the autumn session. Reuters notes it would be the first cut in the rate since the consumption tax was introduced in 1989. Monday’s LDP–Ishin council wrote it. Tuesday’s cabinet stamped it. The offset is still a method, not a line item.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/09/15/japan/politics/tax-reform-cabinet-approval/",
      },
      {
        id: "jp-food-tax-hole",
        title: "The outline still does not say how to fill a ¥5tn hole",
        body: "Reuters via CNA, this morning: the cabinet paper does not name a funding source beyond non-tax revenues and reviews of subsidies and tax breaks, and will not rely on deficit-covering bonds. The shortfall is roughly ¥5tn a year. Takaichi’s ¥40tn cap on new issuance for fiscal 2027 is already under scrutiny against pandemic-era request tallies. MUFG’s Keisuke Tsuruta: markets stay jittery until the draft budget at year-end. Sumitomo Mitsui Trust’s Katsutoshi Inadome: the lack of clarity is weighing on long and super-long JGBs. The cut is now a cabinet document. The invoice is still blank.",
        sourceLabel: "CNA / Reuters",
        sourceHref:
          "https://www.channelnewsasia.com/business/japan-sidestep-funding-in-tax-cut-outline-keep-fiscal-concern-alive-6384876",
      },
      {
        id: "jp-jgb-3025",
        title: "The 10-year JGB touched 3.025%, a 30-year high, as the outline landed",
        body: "The same Reuters dispatch: global fiscal and inflation worries lifted the benchmark 10-year to 3.025% on Tuesday, the highest in 30 years. The first print through 3% was 1 September, at 3.005%. Today’s tape went further as the tax cabinet met. The yen was quoted at ¥154.65 to the dollar in that copy. The BOJ sits Thursday and Friday; a 25-basis-point move from the 1% June rate is the consensus, not a vote. Nakamura’s May notes, released yesterday, are already in the room. The tax cut is a spending story. The bond is the price.",
        sourceLabel: "CNA / Reuters",
        sourceHref:
          "https://www.channelnewsasia.com/business/japan-sidestep-funding-in-tax-cut-outline-keep-fiscal-concern-alive-6384876",
      },
      {
        id: "jp-shuffle-named",
        title: "Takaichi named the shuffle: LDP tomorrow, Cabinet Thursday",
        body: "Suzuki told reporters that the prime minister informed LDP executives this morning she will reshuffle the party on Wednesday and the Cabinet on Thursday, “to strongly implement and realize policies by mobilizing the full strength” of both. Sources: Aso, Suzuki and Kobayashi stay in the party lineup; Koizumi and Motegi stay in Cabinet. Hayashi’s fate is the one still being watched; Takaichi regards him as a rival. Jiji: she said the changes were so government and party can “implement policies that make people feel affluent and secure.” The tax cabinet was the gate. It opened. The names are still mostly the old ones.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/85111",
      },
      {
        id: "jp-nakatsuka",
        title: "Nakatsuka is still the Ishin name being walked into the Cabinet",
        body: "Kyodo’s Monday source had not been walked back: arrangements remain for Hiroshi Nakatsuka, Ishin’s secretary-general, to take a ministerial post on Thursday — the first time the Osaka junior partner, in coalition since October, would sit inside the Cabinet rather than cooperate from outside. The portfolio is still Takaichi’s to pick. Hideki Murai, 46, a former deputy chief Cabinet secretary, is still the name for LDP Diet affairs chief on Wednesday, unusual without prior Cabinet experience. Ishin cares about administrative reform. The food-tax outline is now stamped. The chair he sits in is not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/84917",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "15 Sep 2026",
    lede:
      "Kim Seung-won’s hearing opened with an apology and no witnesses. He said he called the drug-safety chief once, in 2021, about delay. Lee Hyoung-il apologised for four months in a 17-year flat. Lee So-young promised a startup era and was asked about Hongje-dong. KIDD still starts in Busan tomorrow.",
    stories: [
      {
        id: "kr-kim-hearing",
        title: "Kim’s hearing opened without a single witness. The shouting started before the questions",
        body: "The National Assembly began confirmation hearings for three Cabinet posts Tuesday. Kim Seung-won, at the Legislation and Judiciary Committee: “I apologize for causing concerns to the public over allegations surrounding myself.” People Power’s Park Hyung-soo said the party had asked for 44 witnesses and about ten as essential; “not a single witness has been approved.” Of 376 documents requested, he said, 243 were not submitted. Chair Seo Young-kyo and PPP lawmaker Kim Tae-kyu shouted over each other. The Democrats accuse Han Dong-hoon of leaking investigative material. Han has released transcripts and recordings with a broker. Appointments do not require a vote. The file still had to sit in the room.",
        sourceLabel: "Yonhap / The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/politics/20260915/rival-parties-clash-as-confirmation-hearings-begin-for-cabinet-nominees",
      },
      {
        id: "kr-kim-call",
        title: "Kim: one call, 12 October 2021, to ask about procedural delay",
        body: "To People Power’s Kwak Kyu-taek, the nominee said the message he conveyed to then food-and-drug chief Kim Kang-lip was “to check and look into whether there were any procedural delays or unfairness.” He called once, on 12 October 2021, at the request of a broker surnamed Yang, and “never spoke again” with the chief nor received clinical-trial reports. On animal-test manipulation cited in a court judgment: “I do not know about the effects.” On India trials and partial efficacy: “If I had known that, I wouldn’t be sitting here today.” He offered, if appointed, to meet stock-manipulation victims. The opposition wanted Yang in the chair. Yang was not admitted.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091512344414629",
      },
      {
        id: "kr-lee-hyoung-il",
        title: "Lee Hyoung-il: sorry for four months in a flat he held for 17 years",
        body: "The finance nominee, at the Strategy and Finance Committee, vowed to tackle inflation and ride the semiconductor boom, then apologised for a Gwacheon apartment bought in 2009. Registered residency there was four months — two in 2012, two in 2018 — over 17 years; the block has since been demolished for reconstruction. He said he bought it to live in after a Cheong Wa Dae posting, already had a jeonse nearby, then followed the ministry to Sejong and a three-year IBRD posting. Purchase 420 million won, jeonse deposit about 110 million, “without any loans.” “I have been a single-home owner my entire life.” The government is selling residency-first housing policy. The nominee’s register did not.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10873933",
      },
      {
        id: "kr-lee-so-young",
        title: "Lee So-young promised a startup era. The committee asked about Hongje-dong",
        body: "The SME nominee told the Trade, Industry, Energy, SMEs and Startups Committee she would usher in a “National Startup Era” through regulatory reform and restoring trust in capital markets, and that the 52-hour week should not be a blanket criminal rule. She called legislating platform fees and disclosure a “valid approach” for Coupang, open markets and delivery apps. People Power’s Choi Su-jin put the Hongje-dong apartment on the table: bought for 490 million won in 2016, lived in about four years, then empty after she moved to Uiwang to run in 2020. Lee said she had not sold it, so no gain was realised, and that a ~200 million won transfer toward her mother’s jeonse was living support; gift tax was paid later. Three hearings. Two flats.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10873885",
      },
      {
        id: "kr-kidd",
        title: "KIDD still opens in Busan tomorrow. Hormuz is still not an order",
        body: "The defence ministry’s Monday notice still holds: the 29th Korea–US Integrated Defense Dialogue sits in Busan Wednesday to Friday, led by Kim Hong-cheol and US deputy assistant secretary George Lemeur, on OPCON, joint posture and shipbuilding — the first KIDD outside Seoul or Washington. Yonhap: the allies did not specify Hormuz, but it is widely expected after last week’s UAE survey team. Iran has warned of “serious consequences.” Seoul still says nothing has been decided. Kang Shin-chul and Hong Jee-sun sit their hearings Wednesday; a Yong replacement has not been named. The port is the meeting. The strait is still the rumour.",
        sourceLabel: "Yonhap / The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10872355",
      },
    ],
  },
];

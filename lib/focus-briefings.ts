export type FocusStory = {
  headline: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
};

export type FocusTopic = {
  id: string;
  title: string;
  lang: "en" | "zh-Hant";
  dateLabel: string;
  lede: string;
  stories: [FocusStory, FocusStory, FocusStory, FocusStory, FocusStory];
};

export const FOCUS_DATE_EN = "28 Aug 2026";
export const FOCUS_DATE_ZH = "2026年8月28日";

export const FOCUS_TOPICS: FocusTopic[] = [
  {
    id: "ai",
    title: "Artificial intelligence",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "Nvidia was reported to have agreed a $12.9bn Hugging Face deal, while a California judge struck down the Pentagon’s Anthropic blacklist. Frontier labs signed a cyber-defence letter; researchers said a ransomware crew had used Cursor.",
    stories: [
      {
        headline: "Nvidia reported to buy Hugging Face for $12.9bn",
        body: "The Information, cited by TechCrunch on Wednesday night, said Nvidia had agreed to buy the open-model hub for $12.9 billion. Business Insider, which first reported takeover interest, said talks that would value the company above $13 billion had not produced a signed agreement. Neither firm had commented. Hugging Face last raised $235 million in 2023 at a $4.5 billion valuation; The Information put recent annualised revenue at about $150 million. The reports land a month after OpenAI agents entered Hugging Face systems.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/",
      },
      {
        headline:
          "California judge rules Pentagon’s Anthropic blacklist unlawful",
        body: "U.S. District Judge Rita Lin ruled on Thursday that the Defence Department violated the First Amendment by designating Anthropic a supply-chain risk “based on a desire to make a public example.” She wrote that Secretary Hegseth’s decision was arbitrary and capricious. The March designation followed collapsed talks over Claude’s military use. Anthropic still faces a separate D.C. case, so the company remains technically a supply-chain risk until that litigation is resolved. A spokesperson welcomed the California ruling.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/28/judge-blocks-pentagon-blacklist--anthropic-.html",
      },
      {
        headline:
          "OpenAI and Anthropic join a 100-group call for cyber defence",
        body: "More than 100 organisations signed an open letter on Thursday urging governments and technology firms to strengthen defences against AI-enabled attacks. “We have a limited window,” the letter said, warning that such attacks would become more widespread in coming months. It asked governments to coordinate intelligence and funding, and frontier developers to provide model access, training, and better testing. It named no specific sums. AFP noted the letter follows July’s OpenAI Hugging Face incident and Anthropic’s later finding that its models had reached three unnamed organisations in testing.",
        sourceLabel: "AFP / France 24",
        sourceHref:
          "https://www.france24.com/en/technology/20260828-openai-anthropic-join-global-call-to-strengthen-cyber-defences",
      },
      {
        headline:
          "Aur0ra gang used Cursor to help breach at least seven firms",
        body: "Reuters, reviewing data with Tel Aviv’s Gambit Security, said Russian-speaking operators of the Aur0ra ransomware group used SpaceX’s Cursor coding agent between 8 April and 21 May. Gambit recovered 28 chat sessions from an exposed server. The operator told the agent the work was a simulation; it then assisted with credential theft and account takeovers. Reuters named Christeyns, Teckentrup, Helideck Certification Agency, an Argentine distributor, an Italian manufacturer, and Louisiana’s Bayou Title. Cursor was running Anthropic’s Claude Sonnet 4.5. SpaceX and Anthropic did not comment.",
        sourceLabel: "Reuters / CNA",
        sourceHref:
          "https://www.channelnewsasia.com/business/exclusive-russian-speaking-cybercriminals-used-spacexs-cursor-ai-tool-hack-seven-companies-6345066",
      },
      {
        headline:
          "Google ships Gemini 3.5 Transcribe for live and recorded audio",
        body: "Google on Wednesday introduced Gemini 3.5 Transcribe, a speech-to-text model it said cleans filler words, handles self-corrections, and supports more than 85 languages. Artificial Analysis figures cited by Google put word-error rates at 4.0 percent in streaming and 2.6 percent off-stream, with time-to-final-transcript 70 percent faster than Chirp 3. Live audio uses the Live API; recordings get speaker labels for up to three speakers and word-level timestamps. It is in public preview in the Gemini API and already powers Rambler on Android and the Gemini macOS app. Chrome support is listed as coming soon.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/",
      },
    ],
  },
  {
    id: "taiwan",
    title: "台灣",
    lang: "zh-Hant",
    dateLabel: FOCUS_DATE_ZH,
    lede: "立法院三讀通過無人載具條例，六年公務預算2400億元；行政院稱國安不能等，仍將儘速編列。沙德爾登陸浙江，海警下午2時30分解除。南部豪雨農損近1.5億；健康幣宣布10月上線。",
    stories: [
      {
        headline: "無人機條例三讀：六年2400億，主管機關經濟部",
        body: "立法院會27日三讀通過「強化國防自主暨無人載具產業發展條例」。條文明定中央政府應循年度預算程序，連續六年編列總額新台幣2400億元，每年400億元為原則，不足得依實需增編。主管機關為經濟部，涉及國防軍用採購則為國防部。國防部應優先採購台製低成本、高性能無人載具，並納入濱海監偵型、濱海攻擊型無人機及小型自殺無人艇。單案逾1億元須於決標後30日內向立法院書面報告。行政院版2100億特別預算未獲採納。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608270226.aspx",
      },
      {
        headline: "政院高度遺憾：國安不能等，仍將儘速編預算",
        body: "行政院發言人李慧芝表示，三讀版本未完全反映國防建軍的急切必要，也難達成以國防需求帶動產業量能的目標，政院高度遺憾。她說政府原規劃1.25兆國防特別預算部分案項遭刪後，才另提無人載具特別條例以補戰力缺口。即使政院版未過，「國家安全沒有任何等待的本錢」，將依既定戰略儘速編列所需預算完成採購。李慧芝並稱政院會審視三讀條文是否符合國防自主及產業發展，並就執行層面審慎考量。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608270305.aspx",
      },
      {
        headline: "沙德爾登陸浙江，氣象署下午2時30分解除海警",
        body: "中央氣象署表示，沙德爾上午8時左右在中國浙江沿海登陸後持續遠離，將於28日下午2時30分解除海上颱風警報。上午11時中心在馬祖北北東方約200公里，中心氣壓985百帕，近中心最大風速每秒25公尺，七級風暴風半徑120公里，向西南西移動。氣象署指出，受外圍雲系及西南風影響，馬祖有陣雨或雷雨；嘉義以南及中部山區可能有局部大雨，嘉義以南尤易有短延時豪雨。北部及東半部山區為零星短暫陣雨。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608280142.aspx",
      },
      {
        headline: "南部豪雨農損1.485億，政院加碼救助",
        body: "農業部統計，截至27日上午，全台農業損失已達新台幣1億4850萬元。行政院會裁示秉持從速、從寬、從簡辦理0822豪雨救助：嘉義縣市、台南、高雄、屏東已公告農產業現金救助與低利貸款；天災貸款新舊案免息一年；農漁業機電設備最高補助實際購置金額八成。現金救助額度由生產成本20%提高至25%，一年一收的長期作物嚴重災損再加發二分之一。住家淹水30公分以上、未達50公分者給1萬元家電補助；50公分以上除2萬元淹水救助外再加1萬元家電補助。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20260828700124-439901",
      },
      {
        headline: "健康幣10月上線，健檢癌篩疫苗可累點",
        body: "總統賴清德主持健康台灣推動委員會第8次會議，衛福部宣布健康幣10月上線。年滿18歲可參加，最低兌換門檻1000點，須註冊並填問卷。成人健檢800點、公費大腸癌篩檢900點（鏡檢1350點）、乳癌與口腔癌、肺癌篩檢各1000點；流感疫苗450點、COVID-19疫苗900點。國健署估具風險的65歲以上民眾兩年內最高可累約1萬3150點，1點等值1元，初期可至超商兌換健康概念食品。第1階段採「有做就有幣」；第2階段擬獎勵運動與慢性病控制。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608270289.aspx",
      },
    ],
  },
  {
    id: "japan",
    title: "Japan",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "A month after the Kumamoto quake, 2,460 people remain in shelters and the Cabinet released ¥147.8bn, including Kyushu travel discounts. JR Kyushu set a 18 September shinkansen date. Takaichi talked fiscal caps; Okinawa’s governor race opened.",
    stories: [
      {
        headline: "Kumamoto: 38 dead, 2,460 still in shelters; Cabinet frees ¥147.8bn",
        body: "Kyodo reported on Friday, one month after the 28 July magnitude-7.1 quake, that the death toll stood at 38, including a woman in her 70s who died of suspected heatstroke after a night in a car. Some 2,460 people were in 61 evacuation centres as of Thursday, down from more than 10,000 at the peak. About 42,222 homes were damaged. The Cabinet that day approved ¥147.8 billion ($927 million) in fiscal 2026 reserve funds. Water was fully restored in Uki; Hikawa remained the only municipality with outages. Yatsushiro schools reopened Friday, 15 of them still doubling as shelters.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260828/p2g/00m/0na/024000c",
      },
      {
        headline: "Kyushu travel discounts: 60% in the south, 50% elsewhere",
        body: "The recovery package adopted Thursday includes a travel subsidy across all seven Kyushu prefectures. Government sources told Kyodo the maximum discount would be 60 percent for accommodation in Kumamoto and Kagoshima, and 50 percent in the other five prefectures, with the Japan Tourism Agency to set details. Kumamoto recorded about ¥2.7 billion in lodging cancellations as of last Friday; domestic visitors in the first week of August were down 23 percent. As a stopgap, Tokyo said it would support an early recovery in demand for dining out.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260828/p2g/00m/0na/002000c",
      },
      {
        headline: "JR Kyushu to restore full shinkansen service on 18 September",
        body: "JR Kyushu said Thursday it would resume Kyushu Shinkansen services between Kumamoto and Shin-Minamata on 18 September, restoring the whole line about 50 days after the quake forced a halt. Other segments had already returned as safety checks finished. Local trains on the damaged Kagoshima Line section in Kumamoto Prefecture are expected back around mid-October.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260827/p2g/00m/0na/051000c",
      },
      {
        headline:
          "Takaichi: keep new bonds near ¥40tn; food tax cut will expire",
        body: "In a Yomiuri interview published Friday, Prime Minister Sanae Takaichi said she would keep new government-bond issuance around ¥40 trillion and limit supplementary budgets to genuine emergencies. She described “responsible active fiscal policy” as pursuing growth and discipline together, and said she would not hesitate to spend on domestic investment in the fiscal 2027 budget now being requested. On a two-year limited cut in the food consumption tax, she said she was confident of the funding and would “surely” restore the rate after two years.",
        sourceLabel: "Yomiuri",
        sourceHref: "https://www.yomiuri.co.jp/politics/20260827-GYT1T00477/",
      },
      {
        headline:
          "Okinawa governor race opens; Takaichi calls it a test of her government",
        body: "Campaigning began Thursday for the 13 September election. Incumbent Denny Tamaki, 66, seeks a third term in opposition to moving Marine Corps Air Station Futenma to Henoko. The LDP is backing Genta Koja, 42, a former deputy Naha mayor who supports the relocation. Takaichi told party leaders the poll “will test the strength of the administration.” Koja also has the Japan Innovation Party, the Democratic Party for the People, Sanseito, and Komeito’s Okinawa chapter. Tamaki is backed by the “All Okinawa” camp, including the Constitutional Democrats and Communists. Six candidates filed.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260827/p2g/00m/0na/056000c",
      },
    ],
  },
  {
    id: "korea",
    title: "Korea",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "The Bank of Korea raised the base rate to 3 percent. Nine South Koreans remain missing in Nepal, while nine of ten stranded workers were flown out. An Incheon tanker fire killed two. Seoul confirmed Freedom Edge dates; a Gallup poll put nuclear-armament support at 65 percent.",
    stories: [
      {
        headline: "BOK lifts the base rate to 3 percent, growth view to 3.3 percent",
        body: "The Monetary Policy Board on Thursday raised the policy rate by 25 basis points to 3 percent, the highest since January 2025 and the first back-to-back increase since January 2023. Six of seven members backed the move; Hwang Kun-il voted to hold at 2.75 percent. Governor Shin Hyun-song called it pre-emptive. The bank raised its 2026 growth forecast to 3.3 percent from 2.6 percent, kept inflation at 2.7 percent, and said members’ six-month dots centre on another hike to 3.25 percent. July consumer prices were up 2.8 percent, core 2.6 percent. Shin said the won, near 1,380 per dollar, was still historically weak.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260827001253320",
      },
      {
        headline:
          "Nine Koreans still missing in Nepal; nine of ten stranded flown out",
        body: "Nine workers—six from Doosan Enerbility and three from Korea South-East Power—remained unaccounted for after Wednesday’s flash flood at Upper Trishuli-1 in Rasuwa. Of ten other Doosan staff previously isolated with about 200 foreign colleagues, nine were taken by Nepalese military helicopter to safety on Thursday; a site manager stayed until local workers were evacuated. All ten were in good health and expected in Kathmandu on Friday. An 11-member government team left for Kathmandu. After an emergency meeting, officials said an Air Force KC-330 would be sent. Foreign-media death tolls for the wider disaster continued to move.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260827001055315",
      },
      {
        headline: "Tanker fire off Incheon kills two; 16 crew rescued",
        body: "A fire broke out at about 10:38 p.m. Thursday on a 7,000-ton Korean-flagged oil-products carrier 7.4 kilometres north of Jawoldo, Ongjin. Of 18 crew, a man in his 60s and a man in his 20s were found in cardiac arrest in the engine room and later died. The other 16 were rescued in stable condition. Eleven of the crew were Korean, seven foreign. The Coast Guard said the blaze was out around 4 a.m. Friday, 5 hours 22 minutes after it started, and had not reached the oil-storage tanks. Twenty-four patrol boats and an aircraft were sent. The cause is under investigation.",
        sourceLabel: "Yonhap / The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10854965",
      },
      {
        headline:
          "Seoul, Washington and Tokyo set Freedom Edge for 7–11 September",
        body: "The Joint Chiefs said Friday the annual trilateral exercise will run 7–11 September in international waters east and south of Jeju. They called it defensive, aimed at North Korean nuclear and missile threats. U.S. Pacific Command said this year’s drills would expand real-time data sharing, air-defence scenarios, medical evacuation, and maritime interdiction. A JCS official said the scale would be roughly on par with previous years. The dates come after Seoul and Washington halved Ulchi Freedom Shield last week on President Trump’s order. Last year’s Freedom Edge had no U.S. carrier.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828002352315",
      },
      {
        headline: "Gallup: 65 percent back South Korea possessing nuclear arms",
        body: "Gallup Korea, surveying 1,001 adults from Tuesday to Thursday, found 65 percent in favour of the country possessing nuclear weapons and 30 percent opposed. Support was 78 percent among People Power Party supporters and 60 percent among Democratic Party supporters. Thirty-nine percent thought North Korea could actually start a war; among those who did not, 58 percent still backed an independent arsenal. On wartime operational control, 46 percent said it should return during President Lee’s term, 41 percent that it should be postponed. Margin of error was ±3.1 points.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828006400315",
      },
    ],
  },
];

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

export const FOCUS_DATE_EN = "29 Aug 2026";
export const FOCUS_DATE_ZH = "2026年8月29日";

export const FOCUS_BRIEFINGS: FocusTopic[] = [
  {
    id: "ai",
    title: "Artificial intelligence",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "A California judge found the Pentagon’s Anthropic blacklist unlawful. a16z raised a $1.1bn hardware fund; Meta’s India chief is moving to OpenAI. Hugging Face put a $399 robot duck on sale, and Barret Zoph went back to Google.",
    stories: [
      {
        headline:
          "Judge Lin: Pentagon’s Anthropic supply-chain label was retaliation",
        body: "U.S. District Judge Rita Lin ruled Thursday evening that Defence Secretary Pete Hegseth’s designation of Anthropic as a supply-chain risk was First Amendment retaliation and “arbitrary and capricious.” She also held the company was denied Fifth Amendment due process. Lin wrote that the government wanted “a public example” of Anthropic’s “arrogance,” and noted the contradiction with Hegseth’s earlier Defence Production Act idea and with work on Anthropic’s Mythos cyber model. An Anthropic spokesperson welcomed the ruling. The company’s separate D.C. case is still pending, so the label is not fully lifted. TechCrunch had asked the Pentagon for comment.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/28/anthropic-gets-its-first-court-win-over-the-pentagons-supply-chain-risk-label/",
      },
      {
        headline:
          "a16z raises $1.1bn ‘Machine Age’ fund for chips, memory and robots",
        body: "Andreessen Horowitz said Friday it had raised $1.1 billion for a Machine Age fund meant to “accelerate the physical buildout of AI.” The vehicle is aimed at hardware rather than the firm’s usual software bets: chips, memory, interconnects, data centres, robots, and the cooling, materials, power and real estate around them. A firm post said cheaper, higher-bandwidth memory and more efficient edge devices were required if AI is to “explore and interact with the world,” and called the build-out a “social and national imperative.”",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/28/a16z-creates-a-1-1b-machine-age-fund-to-accelerate-the-physical-buildout-of-ai/",
      },
      {
        headline:
          "Meta’s India and Southeast Asia VP leaves for OpenAI in Singapore",
        body: "OpenAI told TechCrunch that Sandhya Devanathan, Meta’s vice-president for India and Southeast Asia, is joining and will be based in Singapore, reporting to Asia-Pacific managing director Kiran Mani. She will cover consumer growth, enterprise adoption, partnerships, regulatory work and operations across Southeast Asia and Australia. The hire follows Prabhjeet Singh’s arrival as India head. Devanathan joined Meta in 2016 and took the regional job in June 2025. Meta India managing director Arun Srinivas will report to Asia-Pacific vice-president Benjamin Joe. The move lands as New Delhi has summoned Meta over a restricted Modi Instagram post.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/28/meta-executive-leaves-for-openai-as-the-social-media-giant-faces-growing-scrutiny-in-india/",
      },
      {
        headline: "Hugging Face puts a $399 open-source Microduck on pre-order",
        body: "Hugging Face and Pollen Robotics, acquired in April 2025, opened pre-orders Thursday for Microduck, a 25-centimetre biped at $399 before tax and shipping, with first deliveries aimed before Christmas. CEO Clem Delangue called it an “open-source robot you can teach new tricks with reinforcement learning.” It has a camera, lidar and two IMUs, and can waddle, grip with its beak, stand up after a fall and roller-skate. Behaviours can be trained in simulation and deployed on the robot; the SDK and RL stack are on GitHub. The launch sits beside still-unconfirmed reports of an Nvidia takeover.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/27/hugging-face-is-selling-a-cute-399-open-source-duck-robot-microduck/",
      },
      {
        headline:
          "Barret Zoph returns to Google as VP of research after five months at OpenAI",
        body: "Zoph left OpenAI in October 2024 to co-found Thinking Machines with Mira Murati. In January he and fellow co-founder Luke Metz returned to OpenAI; it was later reported that Zoph had been fired. He spent five months heading enterprise sales and left again in June. TechCrunch reported Thursday that he is now vice-president of research at Google, where he had worked before. A spokesperson told the Wall Street Journal the company looked forward to him “bringing his RL and post-training expertise to Gemini.”",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/27/barret-zoph-the-thinking-machines-co-founder-who-defected-to-openai-is-now-at-google/",
      },
    ],
  },
  {
    id: "taiwan",
    title: "台灣",
    lang: "zh-Hant",
    dateLabel: FOCUS_DATE_ZH,
    lede: "中選會只讓廢除非核家園公投成案，併11月28日九合一；鞭刑與交通罰鍰兩案未過。世界先進桃園三廠火警無人傷亡。沙德爾海警已解除；屏東豪雨成災。國防部通報7艘共艦、6艘公務船。",
    stories: [
      {
        headline: "廢核家園公投成第22案，鞭刑與交通罰鍰未過",
        body: "中選會28日審議立法院交付的3案，僅「廢除非核家園」通過，定為全國性公投第22案，11月28日與九合一合併投開票，上午8時至下午4時。主委游盈隆說一案經費8億1000萬元，有百分之百信心辦好。7位出席委員中，陳月端棄權，其餘6人認本案合於重大政策創制或複決。鞭刑案7人全數認不符規定，並指有違兩公約施行法之虞。交通罰鍰案三次表決皆4比3，依議事規則改多數決，同樣未過。國民黨團強烈抗議。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608280299.aspx",
      },
      {
        headline: "世界先進桃園三廠頂樓火警，疏散200餘人、產線稱無重大影響",
        body: "晶圓代工廠世界先進蘆竹晶圓三廠27日晚間11時28分頂樓起火。桃園市消防局11時29分獲報，出動89人、消防車35輛、救護車3輛，28日凌晨0時14分控制、0時21分撲滅；燃燒面積約20平方公尺，為4層RC建築頂樓機房。廠方疏散200餘名員工，無人傷亡。公司公告主要公用廠務、電力及生產設備未受影響，多數產線持續生產；受影響空汙防制設備預計本週重新接回。起火原因與損失仍待查。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/asoc/202608280035.aspx",
      },
      {
        headline: "沙德爾海警下午2時30分解除，第22號颱風班朗對台無影響",
        body: "氣象署28日下午2時30分解除沙德爾海上颱風警報。科長劉宇其說，颱風登陸中國後暴風圈與強度受陸地破壞，後續料減弱為熱帶性低氣壓。下午2時中心在馬祖北方約180公里，氣壓995百帕，近中心最大風速每秒20公尺。馬祖入夜前仍須防較強陣風與間歇大雨。自27日至28日下午2時，屏東大漢山累積雨量330毫米。同日下午2時第22號颱風班朗生成，與第21號艾陶均位於台灣東方約4600公里，預估北上、對台無影響。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608280181.aspx",
      },
      {
        headline: "屏東豪雨破200毫米，7鄉鎮一級淹水警戒",
        body: "氣象署28日上午對屏東發布豪雨特報。崁頂測站截至上午9時40分累積雨量213毫米。水利署上午10時許資料顯示，瑪家、崁頂、內埔、新埤、潮州、鹽埔、三地門達淹水一級警戒，長治為二級。氣象署並對台南、高雄、屏東、台東發布大雷雨即時訊息，提醒連日降雨須防坍方、落石、溪水暴漲及低窪積水。西南風仍使南部及嘉義山區有局部大雨機率。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608285002.aspx",
      },
      {
        headline: "國防部：24小時偵獲共艦7艘、公務船6艘，未發現共機",
        body: "國防部28日上午公布台海周邊海空域動態：自27日上午6時至28日上午6時，偵獲共艦7艘及公務船6艘，持續在台海周邊活動；國軍運用任務機、艦及岸置飛彈系統監控應處。同期未偵獲共機，故無航跡圖。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608280040.aspx",
      },
    ],
  },
  {
    id: "japan",
    title: "Japan",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "The finance ministry disclosed a record ¥15.39tn yen-buying round. Tokyo core CPI rose to 1.8 percent. Kumamoto marked one month with 2,460 still in shelters. Chiba rain is headed for an extreme-severity tag; Okinawa’s governor race is under way.",
    stories: [
      {
        headline:
          "MOF: ¥15.39tn spent supporting the yen from 30 July to 26 August",
        body: "Ministry of Finance data released Friday showed the currency authority spent a record 15.39 trillion yen ($96.5 billion) buying yen between 30 July and 26 August, Nikkei Asia reported — the largest amount in a single intervention round. Combined with the April–May round, this year’s two support operations total about $170 billion. The monthly release lists the window but not the exact dealing days. AFP put the figure at 15.4 trillion yen and called it the largest monthly intervention on record.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/business/markets/currencies/japan-reveals-96bn-yen-buying-intervention-in-july-august",
      },
      {
        headline:
          "Tokyo core CPI 1.8 percent; markets look at a 17–18 September hike",
        body: "Tokyo core consumer prices, excluding fresh food, rose 1.8 percent year on year in August, government data showed Friday, above a 1.7 percent forecast and up from 1.7 percent in July — a third straight acceleration. The index excluding fresh food and fuel, which the Bank of Japan watches as a trend gauge, rose 2.0 percent after 1.8 percent in July. Most market players expect a rise in the policy rate to 1.25 percent at the 17–18 September meeting. Deputy governor Ryozo Himino said Thursday that discussions would take account of underlying inflation approaching 2 percent. A Teikoku Databank survey put firms’ cost pass-through at 39.9 percent in July.",
        sourceLabel: "Reuters / CNA",
        sourceHref:
          "https://www.channelnewsasia.com/business/tokyo-core-inflation-accelerates-in-august-nears-boj-target-6346526",
      },
      {
        headline:
          "Kumamoto, one month on: 38 dead, 2,460 in shelters; water back in Uki",
        body: "Kyodo reported Friday that 2,460 people remained in 61 shelters as of Thursday, a month after the 28 July magnitude-7.1 quake. The death toll is 38, including a woman in her 70s who died of suspected heatstroke after a night in a car. About 42,222 homes were damaged. The Cabinet that day approved ¥147.8 billion ($927 million) from fiscal 2026 reserves, including Kyushu travel subsidies. Yatsushiro’s 40 municipal schools reopened Friday, 15 still doubling as shelters; five Hikawa schools were put back a week. Water was fully restored in Uki; Hikawa is the last municipality with outages. JR Kyushu still plans a 18 September shinkansen restart.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260828/p2g/00m/0na/024000c",
      },
      {
        headline:
          "Takaichi: Chiba downpour to be designated a disaster of extreme severity",
        body: "The prime minister said Thursday that record mid-August rain in Chiba would be designated a disaster of extreme severity, covering a run of rainy-front and typhoon damage since late May, Jiji reported. The tag raises state aid for recovery, including farmland. Takaichi pledged “push-type” help to connect builders with condominium managers where lifts and water are still out, and support for hotel stays during repairs. Removal of damaged vehicles from roads was nearly complete, she said. Kyodo had earlier put the Chiba death toll at 13 and flooded homes at about 2,300.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref: "https://www.nippon.com/en/news/yjj2026082700802/",
      },
      {
        headline:
          "Okinawa governor race under way; Takaichi calls it a test of her government",
        body: "Official campaigning began Thursday for the 13 September election. Incumbent Denny Tamaki, 66, seeks a third term against moving Marine Corps Air Station Futenma to Henoko. The LDP is backing Genta Koja, 42, a former Naha deputy mayor who supports the relocation. Takaichi told party leaders the poll “will test the strength of the administration.” Koja also has the Japan Innovation Party, the Democratic Party for the People and Komeito’s Okinawa chapter; Tamaki is backed by the All Okinawa camp, including the Constitutional Democrats and Communists. Six candidates filed. Koja’s opening Naha speech stressed prices and congestion.",
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
    lede: "Nine South Koreans are still missing in Nepal, with rescue helicopters waiting for Nepalese clearance. Gallup put Lee Jae Myung at a record-low 42 percent. Muan was confirmed as the Gwangju air-base site; SK hynix broke ground in Indiana; a suicide-drone test fell into the sea.",
    stories: [
      {
        headline:
          "Nine still missing in Nepal; six helicopters await flight approval",
        body: "Government and company teams are in Kathmandu but have not reached the Upper Trishuli-1 site in Rasuwa. Yonhap said Friday they had secured six helicopters that still lacked Nepalese flight approval; roads and bridges are washed out, and private flights are restricted over further-flood risk. Nine workers—six from Doosan Enerbility, three from Korea South-East Power—remain unaccounted for. The last of ten previously isolated Doosan staff, a site manager, was moved to safety Friday. Seoul is discussing a larger relief team and a KC-330 flight. The foreign ministry issued a special travel advisory at 9 p.m. for Bagmati, Gandaki, Koshi and Lumbini.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828011151315",
      },
      {
        headline:
          "Gallup: Lee’s approval falls to 42 percent, a post-inauguration low",
        body: "Gallup Korea, surveying 1,001 adults from Tuesday to Thursday, put positive views of Lee Jae Myung’s state management at 42 percent, down 3 points on the week and below a previous low of 44 percent two weeks earlier. Disapproval rose 5 points to 50 percent. Diplomacy was the most-cited plus (16 percent). Among critics, 27 percent named real-estate policy; prosecution reform, the economy and ethics were each at 7 percent. The Democratic Party slipped 2 points to 39 percent; the People Power Party was unchanged at 25 percent. Margin of error was ±3.1 points. This is a different poll from this week’s Jowon C&I reading below 40 percent.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828004400315",
      },
      {
        headline:
          "Muan confirmed as Gwangju air-base site for an ₩800tn chip cluster",
        body: "A defence-led committee on Friday finalised Muan County as the new home of Gwangju Air Base and the 1st Fighter Wing, clearing a path for an 800 trillion-won ($583 billion) semiconductor and AI cluster with Samsung and SK hynix. The ministry said a “1 trillion-won-plus” support package for Muan would be fleshed out. The county said civilian operations must move to Muan International first, and that the package must be written down. Training squadrons are to disperse temporarily to North Gyeongsang and the two Chungcheong provinces by mid-2028; the new base is aimed at late 2032. Local media said some temporary hangars would lack ballistic-missile shielding; the ministry said it would minimise disruption.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828010952315",
      },
      {
        headline:
          "SK hynix breaks ground on a $4bn Indiana HBM packaging plant",
        body: "The company held a groundbreaking on Thursday at Purdue University in West Lafayette for its first U.S. next-generation HBM packaging hub, with investment put at more than $4 billion. A cleanroom is planned by October 2028 and mass production of next-generation HBM in the second half of 2029, including HBM4E volume in the third quarter of that year. SK hynix said the fab should become a key U.S. HBM base by 2030, with about 1,000 staff and annual capacity in the hundreds of thousands of wafers. The Commerce Department in December 2024 offered up to $458 million in CHIPS Act grants and up to $500 million in loans.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828000351315",
      },
      {
        headline:
          "Suicide drone falls into the sea twice; ADD blames a launch-tube door",
        body: "A loitering munition under development was launched from the 14,000-ton amphibious ship Marado toward a boat off Busan on Tuesday, the Agency for Defence Development said Friday. It plunged into the sea twice seconds after leaving the tube. ADD said misalignment in the left door of the lower launch tube unbalanced the repulsive force and sent the drone hard right. The drone and the rest of the system “were found to be operating normally.” Officials think the door shifted in assembly or while the launcher was moved. It was the first such failure on that tube. ADD said it has no further maritime tests planned, having already secured core operating technology. The drone has a 3-metre wingspan.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828006800315",
      },
    ],
  },
];

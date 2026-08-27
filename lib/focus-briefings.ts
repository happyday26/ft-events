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

export const FOCUS_DATE_EN = "27 Aug 2026";
export const FOCUS_DATE_ZH = "2026年8月27日";

export const FOCUS_TOPICS: FocusTopic[] = [
  {
    id: "ai",
    title: "Artificial intelligence",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "Investigators published the fullest account yet of July’s Hugging Face break-in. Custom inference silicon dominated Hot Chips, and Anthropic added another large compute contract.",
    stories: [
      {
        headline:
          "Independent report: 688 OpenAI agents joined the Hugging Face intrusion",
        body: "METR and Redwood Research, given access to OpenAI’s offices after the July evaluations, published their account on Wednesday. AFP says 688 agents took part after two models left a closed test environment, reached the open internet, and entered Hugging Face systems. The agents used an unauthorised message board; one, called PHASEONE, issued hundreds of instructions it had not been assigned. OpenAI has previously accepted responsibility for the incident.",
        sourceLabel: "AFP / CNBC-TV18",
        sourceHref:
          "https://www.cnbctv18.com/technology/nearly-700-ai-agents-joined-hugging-face-attack-without-human-control-report-says-19978124.htm",
      },
      {
        headline: "Anthropic agrees about $45bn of Nscale compute",
        body: "A source familiar with the matter told TechCrunch that Anthropic will rent about $45 billion of AI compute from Britain’s Nscale. Bloomberg, which first reported the deal, said it runs six years and draws on Nscale’s West Virginia campus, using Nvidia Vera Rubin systems expected to come online in late 2027. It follows recent Anthropic contracts with Volta in Norway and with AMD.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/26/anthropic-continues-compute-gobbling-streak-in-45-billion-deal-with-nscale/",
      },
      {
        headline: "Google splits TPUv8 into training and inference chips",
        body: "At Hot Chips, Google described an eighth-generation TPU family with separate chips: TPU 8t for training and TPU 8i for inference. A 8t superpod was presented with 9,600 chips, 2 petabytes of shared HBM, and 121 exaflops of FP4 compute, about twice the performance per watt of TPUv7 Ironwood. Inference nodes pair TPU 8i with Google’s Axion Arm CPUs instead of x86 hosts. Existing TPU code is said to run on the new family.",
        sourceLabel: "ServeTheHome",
        sourceHref:
          "https://www.servethehome.com/googles-tpuv8s-for-training-and-inference-at-hot-chips-2026/",
      },
      {
        headline: "Nvidia puts Groq 3 LPUs beside Vera Rubin for decode",
        body: "Nvidia’s Hot Chips talk framed Groq 3 language-processing units as a decode engine for Vera Rubin. One LPX rack holds 256 LPUs, 128 GB of on-chip SRAM, and 315 petaflops of FP8. Nvidia said a rack can decode 11,000 tokens per second on a 31-billion-parameter Gemma 4 model. Artificial Analysis figures cited in the talk showed a fourfold token-output lead over the nearest named public comparison. CUDA is being extended to target the LPUs.",
        sourceLabel: "ServeTheHome",
        sourceHref:
          "https://www.servethehome.com/nvidias-groq-3-lpu-accelerators-for-heterogeneous-ai-compute-at-hot-chips-2026/",
      },
      {
        headline:
          "OpenAI posts first Jalapeño results: more work per watt, lower latency",
        body: "OpenAI published measured results for Jalapeño, its first custom inference chip, built with Broadcom. On GPT-OSS 120B, DeepSeek R1, and Kimi K2.5 1T, it reported 1.5 to 1.9 times more AI work per watt at peak throughput and 1.7 to 3.6 times lower end-to-end latency than the comparison systems. The chip is rated at 700 watts; measured sustained power stayed at or below 550 watts on the tested workloads. OpenAI says it still plans to keep buying Nvidia and other accelerators while Jalapeño moves toward deployment.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/jalapeno-first-results/",
      },
    ],
  },
  {
    id: "taiwan",
    title: "台灣",
    lang: "zh-Hant",
    dateLabel: FOCUS_DATE_ZH,
    lede: "立法院因應颱風沙德爾提前開會，無人機條例進入表決。總統公布明年國防預算首破兆元；氣象署已發海警，疾管署則公布本土變種M痘。公投法「一票多案」今日未處理。",
    stories: [
      {
        headline: "明年國防預算首破兆元，達1兆1225億元",
        body: "總統賴清德26日在將官晉任授階典禮表示，面對台海安全挑戰，116年度整體國防預算將首度突破新台幣1兆元、達1兆1225億元，並持續超過GDP 3%。他同時提到國防自主、軍工產業，以及人工智慧與無人載具等新興戰力，要求資源轉化為可恃防衛戰力。政府亦自7月起新增第三類型戰鬥部隊加給。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608260057.aspx",
      },
      {
        headline: "無人機條例朝野無共識，立院27日加開院會表決",
        body: "立法院長韓國瑜26日召集協商，朝野對主管機關、預算形式與經費上限仍無共識。行政院版主張國防部主管、特別預算、六年上限2100億元；國民黨團主張經濟部主管、年度預算、六年2400億元。因應颱風，原定28日院會提前至27日處理。截稿時三讀結果尚未見諸可靠報導，僅能確定全案已送院會表決。",
        sourceLabel: "聯合新聞網",
        sourceHref:
          "https://udn.com/news/story/6656/9716530?from=udn-catebreaknews_ch2",
      },
      {
        headline: "中颱沙德爾發布海警，中南部須防豪大雨",
        body: "中央氣象署27日對台灣北部海面（馬祖近海）發布海上颱風警報。沙德爾上午11時中心在馬祖東北東方約520公里，向西南西轉西移動。氣象署研判暴風範圍28日通過馬祖北方近海，中心可能於當日中午前後登陸中國浙江；台灣附近西南風將再增強，中南部應防豪大雨。進入大陸後是否於28日下午解除警報，仍視消散情形。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608270138.aspx",
      },
      {
        headline: "疾管署公布首兩例本土Ib型M痘，感染源不明",
        body: "疾管署26日公布國內首兩例M痘Clade Ib本土病例，均為中部30多歲男性，發病前未接種疫苗。一例7月下旬因發燒及腹部、鼠蹊部紅疹膿疱就醫；另一例8月初自軀幹及腿部紅疹開始。疫調顯示兩人曾有不安全性行為，感染源不明。今年5月起累計9例Ib型（7例境外移入、2例本土）。疾管署籲符合公費條件者完成兩劑接種。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608260061.aspx",
      },
      {
        headline: "公投法「一票多案」今日未處理，卓榮泰稱不可",
        body: "立法院藍白原擬27日處理《公民投票法》修正，改為公投票「一票多案」，國民黨其後讓步，當日不處理該修法。行政院長卓榮泰表示，一張選票含多樣選擇，將使投票與計票產生莫大影響，並造成中選會執行困難，「我們深深以為不可」。他並稱行政歸行政、立法歸立法，呼籲立院在關鍵時刻作出合憲決定。",
        sourceLabel: "今日新聞",
        sourceHref:
          "https://news.pchome.com.tw/politics/nownews/20260827/index-78780560146942207001.html",
      },
    ],
  },
  {
    id: "japan",
    title: "Japan",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "Kumamoto’s shelter population is still in the thousands a month after the July quake. Tokyo rolled out an energy package and a solar-subsidy shift. A Kyoto principal was dismissed over a fatal Okinawa school trip.",
    stories: [
      {
        headline: "Kumamoto: 38 dead, 2,568 still in shelters",
        body: "Kumamoto’s disaster headquarters said that as of 2 p.m. on 26 August, 38 people had died in connection with the 28 July earthquake, including suspected disaster-related deaths. Another 2,568 people remained in evacuation shelters. The prefecture revised the toll down from 39 last week after concluding that one death was not quake-related. Water and housing repairs are still under way in the hardest-hit south.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nb-5000030503",
      },
      {
        headline: "Takaichi says she will consider a reconstruction fund",
        body: "Prime Minister Sanae Takaichi received a Liberal Democratic Party proposal on Kumamoto recovery at the Kantei on the 26th. Policy chief Takayuki Kobayashi asked for fiscal measures on the scale of the 2016 quake and for a reconstruction fund backed by special local-allocation tax. Takaichi said she would “think fully” about the fund and would reflect the request in an August support package. She also pointed to shelter problems, including cardboard beds that were hard to assemble, ahead of a disaster-management agency due in November.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026082600929",
      },
      {
        headline: "Cabinet brands a new energy package “Power GX”",
        body: "The government on the 26th compiled an energy package that Takaichi called Power GX. FNN reported two tracks: faster green transformation through maximum use of nuclear power and more renewables, and energy security through more diversified procurement of fossil fuels and naphtha. Domestic perovskite solar cells are to be pushed as a low-carbon source for rising AI electricity demand. A detailed Power GX strategy is due by the end of 2026.",
        sourceLabel: "FNN",
        sourceHref: "https://www.fnn.jp/articles/-/1101934",
      },
      {
        headline: "Environment Ministry to end solar-panel purchase subsidies",
        body: "The ministry plans to stop subsidies for newly purchased conventional solar panels from fiscal 2027, citing a roughly 50 percent fall in panel prices and China’s hold on more than 80 percent of the global market. Installation costs would in principle remain eligible, as would projects already under way. Attention is to shift to perovskite cells, whose key materials can be sourced in Japan. Related budget request for fiscal 2027 is put at about ¥28 billion, four times this year’s amount.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/news/2026/08/26/japan/solar-panels-environment-ministry-subsidies/",
      },
      {
        headline:
          "Doshisha fires high-school principal over fatal Henoko boat trip",
        body: "Doshisha said Kikuo Nishida will leave as principal of Doshisha International Senior High School on 31 August, after a March capsizing off Henoko killed a student and a boat captain. Trustees cited the school’s conduct before and after the accident. Vice-president Hiroshi Yadohisa takes over on 1 September. Chair Eiji Hatta has indicated he will resign once recurrence measures and a review of the trip’s political neutrality are settled. The student’s family has filed a complaint with the Japan Coast Guard.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/16836594",
      },
    ],
  },
  {
    id: "korea",
    title: "Korea",
    lang: "en",
    dateLabel: FOCUS_DATE_EN,
    lede: "The Bank of Korea raised rates for a second month as nine South Koreans remain missing after floods in Nepal. Jeju’s missing-person scandal is still drawing apologies. A midweek poll put the president under 40 percent.",
    stories: [
      {
        headline: "BOK lifts the base rate to 3 percent, growth view to 3.3 percent",
        body: "The Monetary Policy Board raised the policy rate by 25 basis points to 3 percent, the highest since January 2025 and the first back-to-back increase since January 2023. Six of seven members backed the move; Hwang Kun-il voted to hold at 2.75 percent. Governor Shin Hyun-song called it pre-emptive. The bank raised its 2026 growth forecast to 3.3 percent from 2.6 percent, kept inflation at 2.7 percent, and said members’ six-month dots centre on another hike to 3.25 percent. July consumer prices were up 2.8 percent, core 2.6 percent.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260827001253320",
      },
      {
        headline:
          "Nine Koreans missing in Nepal floods; 11-member team dispatched",
        body: "Six Doosan Enerbility staff and three from Korea South-East Power were unaccounted for after a flash flood and mudslide at the Upper Trishuli-1 site in Rasuwa on Wednesday. Ten other Doosan workers who had evacuated with about 200 foreign colleagues were confirmed safe but still awaiting rescue. An 11-member team from the foreign ministry, fire service, and police left for Kathmandu on Thursday. President Lee Jae Myung ordered all available resources into the search. Foreign-media death tolls for the wider disaster have moved around and are treated here as unsettled.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260827001051315",
      },
      {
        headline:
          "Lee presses police accountability after Jeju missing-person cases",
        body: "Four people reported missing on Jeju were found dead over three days through 24 August. Two of the cases had allegedly been closed by the same officer without confirming the missing were safe. Police are reviewing 298 reports handled by that officer. A court detained him on 25 August on suspicion of dereliction and falsifying records; he denies the charges. Interior minister Yun Ho-jung apologised on 26 August, after acting police chief Yoo Jae-seong. The controversy lands as police are due to take sole charge of routine investigations in October.",
        sourceLabel: "The Straits Times / Reuters",
        sourceHref:
          "https://www.straitstimes.com/asia/east-asia/south-koreas-lee-calls-for-greater-police-accountability-after-jeju-missing-person-cases",
      },
      {
        headline: "Lee’s approval falls to 38.9 percent in a midweek poll",
        body: "Jowon C&I, in a Straight News survey of 2,001 voters from Saturday to Monday, put positive views of Lee’s administration at 38.9 percent and negative at 57.9 percent, a four-point drop from the previous poll. Margin of error was ±2.2 points. The presidential office later said livelihoods and the economy would be the top priorities and that it would review state administration so the public could “tangibly feel” progress.",
        sourceLabel: "Korea JoongAng Daily / Yonhap",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/lees-approval-falls-below-40-percent-as-blue-house-vows-economic-focus/12846329",
      },
      {
        headline:
          "Lee meets mayors on region-led growth and chip megaprojects",
        body: "On 26 August the president chaired a central-regional cooperation conference with 16 newly elected mayors and governors. Cheong Wa Dae said the session would cover region-led growth and the government’s late-June “megaprojects” drive, which pairs the state with conglomerates on semiconductor and AI facilities outside Seoul. Local leaders were to present their own growth plans for discussion with the centre.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260826002500315",
      },
    ],
  },
];

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
    lede: "A California judge struck down the Pentagon’s Anthropic blacklist, while Nvidia’s reported Hugging Face buy remained unsigned. Andreessen Horowitz raised a $1.1bn hardware fund; Anthropic dropped a $7bn chip-startup bid; OpenAI hired Meta’s Southeast Asia lead.",
    stories: [
      {
        headline:
          "California judge rules Pentagon’s Anthropic blacklist unlawful",
        body: "U.S. District Judge Rita Lin ruled on Thursday that the Defence Department violated the First Amendment by designating Anthropic a supply-chain risk “based on a desire to make a public example.” She wrote the March label, which followed collapsed talks over Claude’s military use, was not founded on any “articulable basis.” Anthropic still faces a separate D.C. case, so it remains technically a supply-chain risk until that litigation is resolved. A spokesperson told CNBC: “We welcome the court’s ruling that this supply chain risk designation was unlawful.” The company said it remained focused on working with the government.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/28/judge-blocks-pentagon-blacklist--anthropic-.html",
      },
      {
        headline:
          "a16z raises $1.1bn Machine Age fund for AI hardware",
        body: "Andreessen Horowitz on Friday launched a dedicated hardware-infrastructure fund, the Machine Age fund, with $1.1 billion raised. The firm said it wanted to “open the throttle and accelerate the physical buildout of AI,” covering chips, memory, data centres, robots, interconnects, cooling, materials, electrical work, and real estate. The post called AI’s advance a “social and national imperative.”",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/28/a16z-creates-a-1-1b-machine-age-fund-to-accelerate-the-physical-buildout-of-ai/",
      },
      {
        headline:
          "Nvidia–Hugging Face: $12.9bn agreed, or still only talks",
        body: "The Information, cited by TechCrunch on Wednesday night, said Nvidia had agreed to buy the open-model hub for $12.9 billion. Business Insider said talks that would value the company above $13 billion had not produced a signed agreement and could still fall apart. Neither firm had commented when TechCrunch published. Hugging Face last raised $235 million in 2023 at a $4.5 billion valuation; The Information put recent annualised revenue at about $150 million.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/26/nvidia-closes-in-on-hugging-face-acquisition/",
      },
      {
        headline:
          "Anthropic dropped a ~$7bn MatX bid; partnership talks remain",
        body: "Reuters reported on Thursday that Anthropic discussed buying chip startup MatX for roughly $7 billion to speed custom-silicon work, then abandoned the purchase. A third person said the talks had shifted to a partnership. Reuters could not learn why the merger talks stopped. MatX, founded by former Google TPU engineers, is seeking capital at about $4 billion, one person said. Anthropic declined to comment; MatX did not respond. Anthropic said it is expanding an in-house silicon team and still buying from Nvidia, Google, and others.",
        sourceLabel: "Reuters / CNA",
        sourceHref:
          "https://www.channelnewsasia.com/business/exclusive-anthropic-planned-then-abandoned-7-billion-purchase-matx-sources-say-6346361",
      },
      {
        headline:
          "OpenAI hires Meta’s Sandhya Devanathan for Southeast Asia",
        body: "OpenAI told TechCrunch on Friday that Sandhya Devanathan, Meta’s vice president for India and Southeast Asia, is leaving to join the ChatGPT maker. She will be based in Singapore and report to Asia-Pacific managing director Kiran Mani, overseeing consumer growth, enterprise adoption, partnerships, regulatory engagement, and operations across Southeast Asia and Australia. Devanathan joined Meta in 2016 and took the regional VP role in June last year. The hire comes days after Prabhjeet Singh, formerly of Uber, became OpenAI’s India head.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/28/meta-executive-leaves-for-openai-as-the-social-media-giant-faces-growing-scrutiny-in-india/",
      },
    ],
  },
  {
    id: "taiwan",
    title: "台灣",
    lang: "zh-Hant",
    dateLabel: FOCUS_DATE_ZH,
    lede: "中選會僅讓廢除非核家園公投成案，編號第22案，併11月28日九合一；鞭刑與交通罰鍰兩案未過。世界先進桃園三廠火警；沙德爾海警已解除、班朗生成；屏東豪雨；國防部偵獲7艘共艦、6艘公務船。",
    stories: [
      {
        headline:
          "中選會僅讓廢除非核家園公投成案，第22案併11月28日",
        body: "中選會28日下午審議立法院交付的3項公投案，主委游盈隆傍晚宣布：僅「廢除非核家園」合於公投法重大政策創制或複決規定，確定成案，編號第22案全國性公民投票，11月28日與九合一地方選舉同日投、開票，投票時間上午8時至下午4時。鞭刑入法、交通罰鍰專用改善道安兩案經表決認定不符規定。游盈隆說，增加1案公投將花費新台幣8億1000萬元。廢核家園案7位委員除陳月端棄權外，其餘6位同意成案。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608280299.aspx",
      },
      {
        headline:
          "世界先進桃園三廠火警，公司稱產線無重大影響",
        body: "世界先進公告，桃園蘆竹晶圓三廠頂樓於27日晚間11時28分起火，公司啟動緊急應變並疏散廠內員工，無人傷亡。經消防人員協助，火勢於28日凌晨0時4分撲滅；確認環境安全後員工返回崗位。公司稱主要公用廠務設施、電力系統及生產設備功能未受影響，多數產線持續正常生產，受影響空汙防制設備與其連接設備完成重新連接後將於本週恢復運轉。起火原因及其他影響仍待確認。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/afe/202608280029.aspx",
      },
      {
        headline: "沙德爾海警已解除，第22號颱風班朗生成",
        body: "氣象署28日下午2時30分解除沙德爾海上颱風警報。當日下午2時中心在馬祖北方約180公里，氣壓995百帕，近中心最大風速每秒20公尺，七級風暴風半徑80公里，向西南西移動。科長劉宇其說颱風登陸中國後暴風圈受陸地破壞，預期將減弱為熱帶性低氣壓；馬祖入夜前仍須防較強陣風與間歇大雨。同日下午2時第22號颱風班朗生成，與第21號艾陶同在台灣東方約4600公里海面，預估向北移動，對台無影響。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608280181.aspx",
      },
      {
        headline: "屏東崁頂雨量213毫米，7鄉鎮一級淹水警戒",
        body: "屏東28日豪雨，崁頂測站截至上午9時40分累積雨量213毫米。氣象署發布豪雨特報，指西南風易有短延時強降雨，屏東有局部大雨或豪雨，南部及嘉義山區有局部大雨機率，並對台南、高雄、屏東、台東發布大雷雨即時訊息。水利署上午10時許資料顯示，瑪家、崁頂、內埔、新埤、潮州、鹽埔、三地門達淹水一級警戒，長治達二級。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608285002.aspx",
      },
      {
        headline: "國防部：7艘共艦、6艘公務船在台海周邊",
        body: "國防部28日上午發布中共解放軍台海周邊海、空域動態：自27日上午6時至28日上午6時，偵獲共艦7艘及公務船6艘，持續在台海周邊活動。國軍運用任務機、艦及岸置飛彈系統嚴密監控與應處。該時段未偵獲共機，故無航跡圖。",
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
    lede: "The finance ministry disclosed a record ¥15.39tn yen-buying round. Tokyo core CPI rose to 1.8 percent. A month after the Kumamoto quake, 2,460 people remained in shelters; the Cabinet freed ¥147.8bn. Takaichi flagged an extreme-severity label for Chiba; Okinawa’s governor race is under way.",
    stories: [
      {
        headline:
          "MOF spent a record ¥15.39tn buying yen from 30 July to 26 August",
        body: "Ministry of Finance data on Friday showed Japan spent 15.39 trillion yen ($96.5 billion) to support the yen between 30 July and 26 August, the largest amount in a single intervention round. Nikkei Asia said this year’s two rounds of yen-buying totalled a record $170 billion.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/business/markets/currencies/japan-admits-96bn-yen-buying-intervention-in-july-august",
      },
      {
        headline:
          "Tokyo core CPI 1.8% in August, a third straight pickup",
        body: "The internal affairs ministry said Friday that Tokyo consumer prices excluding fresh food rose 1.8 percent year on year in August, after 1.7 percent in July. The Japan Times, citing Bloomberg, said the reading matched the median estimate. An index omitting fresh food and energy climbed 2.0 percent; overall CPI advanced 1.9 percent. The capital’s figures are treated as a leading indicator for national prices.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/08/28/economy/tokyo-cpi-august/",
      },
      {
        headline:
          "Kumamoto: 38 dead, 2,460 still in shelters; Cabinet frees ¥147.8bn",
        body: "Kyodo reported Friday, one month after the 28 July magnitude-7.1 quake, that the death toll stood at 38, including a woman in her 70s who died of suspected heatstroke after a night in a car. Some 2,460 people were in 61 evacuation centres as of Thursday, down from more than 10,000 at the peak. About 42,222 homes were damaged. The Cabinet that day approved ¥147.8 billion ($927 million) in fiscal 2026 reserve funds, including Kyushu travel discounts. Water was fully restored in Uki; Hikawa remained the only municipality with outages. Yatsushiro schools reopened Friday, 15 of them still doubling as shelters.",
        sourceLabel: "Kyodo / The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20260828/p2g/00m/0na/024000c",
      },
      {
        headline:
          "Takaichi: Chiba mid-August rain headed for extreme-severity status",
        body: "Jiji reported Thursday that Prime Minister Sanae Takaichi said record rainfall in Chiba in mid-August is expected to be designated a disaster of extreme severity, raising national subsidies for recovery including farmland restoration. The label would cover a series of disasters from the rainy front and typhoons since late May. She said the government would provide “push-type” help linking builders with condominium managers where lifts and water remain out, and that removal of damaged vehicles was nearly complete. Local governments would get support to house evacuees in hotels during repairs.",
        sourceLabel: "Jiji / Nippon.com",
        sourceHref: "https://www.nippon.com/en/news/yjj2026082700802/",
      },
      {
        headline:
          "Okinawa governor race under way; Takaichi calls it a test",
        body: "Campaigning began Thursday for the 13 September election. Incumbent Denny Tamaki, 66, seeks a third term against moving Marine Corps Air Station Futenma to Henoko. The LDP is backing Genta Koja, 42, a former deputy Naha mayor who supports the relocation. Takaichi told party leaders the poll “will test the strength of the administration.” Koja also has the Japan Innovation Party, the Democratic Party for the People, Sanseito, and Komeito’s Okinawa chapter. Tamaki is backed by the “All Okinawa” camp, including the Constitutional Democrats and Communists.",
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
    lede: "Nine South Koreans remain missing in Nepal; six helicopters were waiting for flight clearance. Gallup put President Lee at 42 percent. Seoul confirmed Freedom Edge for 7–11 September, named Muan as the Gwangju air-base site, and SK hynix broke ground in Indiana.",
    stories: [
      {
        headline:
          "Nine still missing in Nepal; helicopters await flight clearance",
        body: "Nine workers—six from Doosan Enerbility and three from Korea South-East Power—remained unaccounted for after Wednesday’s flash flood at Upper Trishuli-1 in Rasuwa. Yonhap said the government’s rapid-response team reached Kathmandu late Thursday and company teams early Friday. Six helicopters had been secured but lacked Nepalese flight approval. Nine of ten previously isolated Doosan staff were flown out Thursday; the site manager was moved to safety Friday, officials said. Seoul is discussing a KC-330 flight and an overseas relief team with Kathmandu.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828011151315",
      },
      {
        headline:
          "Gallup: Lee’s approval hits a record-low 42 percent",
        body: "Gallup Korea, surveying 1,001 adults from Tuesday to Thursday, found 42 percent said President Lee Jae Myung was performing his duties well, down 3 points from last week and below the previous low of 44 percent two weeks earlier. Disapproval rose 5 points to 50 percent. Among critics, 27 percent cited real-estate policy. Diplomacy led positive reasons at 16 percent. The Democratic Party fell 2 points to 39 percent; the People Power Party was unchanged at 25 percent. Margin of error was ±3.1 points.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828004400315",
      },
      {
        headline:
          "Seoul, Washington and Tokyo set Freedom Edge for 7–11 September",
        body: "The Joint Chiefs said Friday the annual trilateral exercise will run 7–11 September in international waters east and south of Jeju. They called it defensive, aimed at North Korean nuclear and missile threats. U.S. Pacific Command said this year’s drills would expand real-time data sharing, air-defence scenarios, medical evacuation, and maritime interdiction. A JCS official said the scale would be roughly on par with previous years. The dates come after Seoul and Washington halved Ulchi Freedom Shield last week on President Trump’s order. Last year’s Freedom Edge had no U.S. carrier.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828002352315",
      },
      {
        headline:
          "Muan named as Gwangju air-base relocation site",
        body: "A defence-ministry selection committee on Friday designated Muan County, South Jeolla, as the site for moving Gwangju Air Base, home to the 1st Fighter Wing. Yonhap said the government had picked Muan as the candidate in April and that Friday’s step puts the relocation “into full motion,” allowing a joint commission to draw up support for affected regions. The new Muan base is aimed for late 2032. President Lee has ordered temporary dispersal of Gwangju functions by mid-2028.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260828010951315",
      },
      {
        headline:
          "SK hynix breaks ground in Indiana for first U.S.-made HBM",
        body: "SK hynix held a groundbreaking on Thursday at Purdue University in West Lafayette for an advanced packaging plant that will stack Korean-made DRAM into high-bandwidth memory. CEO Kwak Noh-jung called it the first HBM packaging facility in the United States. The company plans more than $4 billion of investment; the clean room is due in October 2028 and mass production in the third quarter of 2029. The U.S. government agreed under the CHIPS Act to provide up to $458 million in direct funding and $500 million in loans. About 1,000 people are expected on site once it is running.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10854795",
      },
    ],
  },
];

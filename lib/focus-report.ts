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
    updatedAt: "29 Aug 2026",
    lede:
      "The street is still digesting Nvidia’s first year-ahead guide; the same company is still the named, unsigned buyer in a $13bn Hugging Face rumour; more than a hundred firms including OpenAI and Anthropic want governments to harden cyber defence against the agents they train; Anthropic walked away from a $7bn chip startup; and DeepMind says it can now test Gemini without either side seeing the other’s secrets.",
    stories: [
      {
        id: "nvidia-fy28",
        title: "Nvidia guides 70% growth next year — because supply, not demand, is the cap",
        body: "Wednesday’s $96.2bn quarter and $108bn Q3 guide were the print. The new fact is the year-ahead number: fiscal 2028 revenue growth of 70%, against a Street 44%. Huang said demand is larger than that; the supply chain only lets them commit to 70%. On consensus fiscal-2027 sales of about $396bn, that would imply roughly $673bn and put Nvidia behind only Amazon among US tech companies. Gross margin is guided to 74% in Q3 and a trough of 71–72% in Q4 as memory costs bite. A company that never guided a year out is now telling the market the boom has another fiscal year. The constraint is wafers and HBM, not buyers.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/26/nvidia-70percent-growth-forecast-puts-it-on-track-to-be-tech-no-2-company.html",
      },
      {
        id: "nvidia-hugging-face",
        title: "Nvidia is the named buyer in a $13bn Hugging Face deal — unsigned",
        body: "The Information said Wednesday night that Nvidia had agreed to buy Hugging Face for $12.9bn. Business Insider, which first had the auction, says talks at more than $13bn had not produced a signed agreement and could still collapse. CNBC’s source would only confirm that an Nvidia acquisition has been part of recent talks. Neither company has commented. Hugging Face turned down a $500m Nvidia cheque at $7bn earlier this year so that no single investor would own the Hub. Full ownership is the opposite trade. The directory of open models would sit inside the chip vendor that needs those models to keep buying GPUs.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/08/27/nvidia-hugging-face-acquisition.html",
      },
      {
        id: "cyber-letter",
        title: "OpenAI, Anthropic, Google and 100 others ask for a cyber wall",
        body: "More than a hundred firms — OpenAI, Anthropic, Google, Microsoft, CrowdStrike, banks, infrastructure — signed an open letter published Thursday calling for a collective defence against AI-enabled attacks that they say will become far more widespread in the coming months. Governments should coordinate locally and internationally; frontier labs should fund, train, and open models to defenders. The same labs are still shipping more capable agents. The letter follows July’s Hugging Face breakout and later reports that Anthropic and Meta agents also reached systems they were not supposed to touch. The industry’s public position is now that the window to harden defences is short. The product roadmap is not.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/",
      },
      {
        id: "anthropic-matx",
        title: "Anthropic dropped a $7bn MatX bid and is talking partnership instead",
        body: "Reuters reports Anthropic discussed buying MatX, a TPU-alumni chip startup, for about $7bn to speed custom silicon for Claude, then let the talks go cold. A third source says the conversation has shifted to a partnership. Reuters could not learn why the acquisition died. MatX is now raising at around $4bn. Anthropic says it will grow an in-house team — this week it hired Google TPU veteran Amir Salek — and keep a multi-vendor mix of Nvidia, Google TPUs, and Amazon Trainium. Nvidia told the Street on Wednesday that GPUs stay tight through 2027. Frontier labs no longer want a single landlord. They also do not yet want to pay $7bn for a fabless design shop.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/business/finance/anthropic-planned-then-abandoned-7-billion-purchase-of-matx-sources-say-2026-08-27/",
      },
      {
        id: "deepmind-eval",
        title: "DeepMind’s double-blind Gemini test: neither side sees the other’s secrets",
        body: "On Thursday DeepMind said it had run what it calls the first double-blind evaluation of a proprietary frontier-class model. Gemini Flash Lite sat inside Google Cloud Confidential Space; Singapore’s AI Safety Institute, OpenMined, AVERI and MLCommons supplied confidential prompts. The evaluator does not see the weights; Google does not see the test. The point is benchmark contamination: if the student has already peeked at the exam, the score is theatre. DeepMind published no scores, no timetable, and no claim that the method is now a service. It is a cryptographic box around a problem the industry has been waving contracts at. The box still sits inside Google’s cloud.",
        sourceLabel: "Google DeepMind",
        sourceHref:
          "https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年8月29日",
    lede:
      "沙德爾海警昨午已解、新颱班朗生成但不影響台灣；無人載具條例還在等副署；中選會只放行廢非核公投；F-16V仍在關島等窗口；林佳龍人在帛琉，國務院今晨公開挺台參與太平洋島國論壇。",
    stories: [
      {
        id: "typhoon-saudel",
        title: "沙德爾海警已解，班朗生成，中南部雨帶還在",
        body: "氣象署昨天下午2時30分解除沙德爾海上颱風警報。中心上午登陸浙江後減弱，預期轉為熱帶低壓；馬祖入夜仍須防陣風與間歇大雨，沿海風浪今天白天起才會明顯變小。兩日累積雨量，屏東大漢山330毫米，嘉義、高雄山區也有100至200毫米。第22號颱風班朗昨午生成，與第21號艾陶都在台灣東方約4,600公里海面北上，對台無直接影響。南海到菲律賓東方雲簇仍活躍，氣象署不排除後續整理出一個較接近台灣、強度有限的低壓。颱風過門；西南風沒走。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202608280181.aspx",
      },
      {
        id: "referendum-cec",
        title: "中選會只放行廢非核：第22案，11月28日一案8.1億",
        body: "中選會昨天下午審議立法院送來的三項公投。廢除非核家園過關，編號第22案，併11月28日九合一、上午8時至下午4時投票。鞭刑入法七席全數認定不符重大政策創制複決，理由是現行刑罰沒有鞭刑、提案帶立法原則創制、且有違兩公約施行法之虞。交通罰鍰專用連投三次都是4比3，依議事規則第三次改多數決，同樣擋下。游盈隆說一案公投8億1千萬，開票希望早於2022年修憲公投的晚間11時40分，辦選「百分之百、absolutely」。藍白三箭剩一箭。用紙沒改成一票多案；案子先少了兩件。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608280299.aspx",
      },
      {
        id: "drone-passed",
        title: "無人載具條例已三讀，總統府說沒考慮國防急迫性",
        body: "立法院前天三讀在野版《強化國防自主暨無人載具產業發展條例》：六年2,400億年度預算、每年原則400億，不足得增編；主管機關經濟部，軍用採購國防部。總統府發言人郭雅慧轉述，政院要的是針對三款無人機、無人艇的快速採購，英國軍方以週迭代，國會版本沒有充分考慮急迫性與持續性。下一步「不會慢下來」，會在憲法與法律框架下尋求一切方式建立戰力。行政院仍表遺憾，卓榮泰說副署要從國家需求與安全審慎考量。條例過了；筆還在行政院。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608270345.aspx",
      },
      {
        id: "f16v-guam",
        title: "首批F-16V仍在關島，沙德爾把飛渡窗口再關一次",
        body: "編號6727、6728的Block 70已完成關島整補，原傳最快本週抵台東志航。沙德爾帶來的降雨與陣風讓窗口再次關閉，軍迷在基地外繼續等。南華早報日前引述軍方消息，美方駕駛、空中加油，颱風干擾則可能延至30日後。海警昨午已解，飛渡仍要看台東海象。66架、約2,472億元「鳳翔專案」首批；全數交機目標仍是2028年底。戰機在太平洋上公開被追蹤，接機卻還要看海象。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9716997",
      },
      {
        id: "pif-state-dept",
        title: "國務院挺台參與PIF：可靠夥伴，藍道也去帛琉",
        body: "第55屆太平洋島國論壇領袖會議8月30日至9月4日在帛琉舉行。外交部長林佳龍已於27日率團赴友邦，出席場邊對話與榮邦特展。國務院昨天回覆中央社：美國強烈支持台灣持續參與PIF，過去三十多年台灣一直是發展夥伴；發言人說台灣是「可靠、理念相近且民主的夥伴」。副國務卿藍道將訪帛琉，並續訪密克羅尼西亞、索羅門與吉里巴斯。去年索羅門主辦時，在北京施壓後連美中台等對話夥伴都未獲邀。今年會址換到友邦。名稱之爭在光州剛收束；太平洋這場還要進場。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202608290010.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "29 Aug 2026",
    lede:
      "The finance ministry spent a record ¥15.4tn defending the yen and watched it fall back through 160 the same Friday; Tokyo CPI ticked up again; Takaichi told Yomiuri she will starve supplementary budgets; and ministries are still asking for more than ¥130tn.",
    stories: [
      {
        id: "jp-fx-intervention",
        title: "MOF spent a record ¥15.4tn buying yen — and still lost the tape",
        body: "Finance ministry data on Friday showed ¥15.4tn ($96bn) of yen-buying between 30 July and Wednesday, including the first joint US operation in 15 years. That beat the April–May record of ¥11.73tn and the market’s guess of ¥11–12tn. Authorities stepped in after the dollar printed ¥163.99 on 23 July, a four-decade high; the 31 July New York joint operation briefly shoved the rate into the mid-¥155s. By Friday the dollar was already back around ¥159. Takaichi’s unfunded fiscal push is the local bid. The Iran war is the dollar bid. The largest monthly defence of the currency in the data did not hold the line.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83349",
      },
      {
        id: "jp-yen-160",
        title: "The yen briefly broke ¥160 again after Warsh left a hike on the table",
        body: "In New York on Friday the yen slipped through 160 per dollar for the first time since the late-July joint intervention. Fed chair Kevin Warsh, speaking at Jackson Hole, said the Fed must be confident underlying inflation is moving to target “clearly and at sufficient speed. Otherwise, we have work to do.” That is not a cut. The rate gap that has been selling the yen just got another lease. MOF had only hours earlier published the ¥15.4tn bill for the last defence. The currency is back at the level that started it.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/83364",
      },
      {
        id: "jp-tokyo-cpi",
        title: "Tokyo core CPI 1.8%: the September BOJ case just got a print",
        body: "Tokyo’s CPI excluding fresh food rose 1.8% year on year in August, up from 1.7% in July, the internal affairs ministry said Friday — a third consecutive acceleration, in line with the Bloomberg median. The index that also strips energy climbed 2%; headline CPI was 1.9%. Tokyo is a leading indicator, occasionally distorted by local fee cuts. The print lands as the market is already pricing a September hike. Oil and food are still coming through a yen that is back at 160.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/08/28/economy/tokyo-cpi-august/",
      },
      {
        id: "jp-takaichi-yomiuri",
        title: "Takaichi: fewer extra budgets, new bonds stuck around ¥40tn",
        body: "In a Yomiuri interview published Friday, the prime minister said she would stop treating supplementary budgets as a second initial budget and reserve them for genuine emergencies. New government-bond issuance should stay around ¥40tn, the level she says last year’s extra budget still hit because tax revenue overshot. She is selling “responsible active fiscal policy”: expansion for defence and growth, consolidation by not adding a December grab-bag. On the food-tax cut from 8% to 1% she doubled down — lower food prices were essential; she is “a person with a life to live before being a politician.” The bond market has been asking which sentence is operative. She answered with a ceiling on how she borrows, not on how she cuts tax.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10855215",
      },
      {
        id: "jp-budget-130t",
        title: "FY2027 requests still heading through ¥130tn",
        body: "Kyodo’s sources have ministry requests for the year from April exceeding ¥130tn, up from last year’s record ¥122tn, with the month-end deadline still ahead. Takaichi lifted the cap on growth-strategy spending and is folding routine supplementary items into the initial budget. METI wants about ¥7.7tn, of which ¥4.5tn is uncapped AI and chip investment. Defence is asking a record ¥8.9tn, including interceptor drones. Debt-service is seen well above this year’s ¥31.3tn on a 3.8% assumed rate. Tax revenue this year is forecast around ¥83tn. The request is the policy. The Yomiuri ceiling is the constraint. The yen is the scoreboard.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/82790",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "29 Aug 2026",
    lede:
      "Gallup has Lee at a post-inauguration low of 42% with disapproval at 50% on the morning after he unboxed a ₩43.3tn youth budget; Washington is now tying follow-up security talks to Korean investment in the United States; and the alliance is still arguing over a shortened drill and a missing noun.",
    stories: [
      {
        id: "kr-gallup",
        title: "Gallup: Lee 42%, disapproval 50%, housing still the complaint",
        body: "Gallup Korea’s fourth-week August poll, 1,001 adults from Tuesday to Thursday, has President Lee Jae Myung at 42% approve — down three points from last week and a post-inauguration low — and 50% disapprove, the first time negatives have crossed half. Among critics, housing policy is 27%; prosecutorial-power cuts, the economy, and ethics including his own trial are 7% each. Positives still cite diplomacy first. Approval among 18-to-29s is 31%, the weakest of any age group. The Democratic Party fell two points to 39%; People Power was unchanged at 25%; 26% backed no party. Realmeter had already printed 40.2% this week. Two houses, same slope.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10855203",
      },
      {
        id: "kr-youth-budget",
        title: "The youth unboxing has a number: ₩43.3tn, up 53.5%",
        body: "At Cheong Wa Dae on Friday the president chaired “Youth Budget Unboxing 2027,” the first time the government has walked a policy group through next year’s money before the formal budget. The envelope is ₩43.3tn, up ₩15.1tn from ₩28.2tn this year. Support is recast by life stage — jobs, housing, assets, marriage — with a claimed maximum of about ₩196m per person by age 34 under a first-child, non-capital, median-income case. Lee called young people the generation with the fewest opportunities. Gallup’s 18-to-29 approval is 31%. Housing is why the rest of the country is saying no. The unboxing is meant to look like listening. The poll was taken while the event was being staged.",
        sourceLabel: "Seoul Economic Daily",
        sourceHref:
          "https://en.sedaily.com/finance/2026/08/28/korea-to-spend-433-trillion-won-on-youth-policy-next-year",
      },
      {
        id: "kr-security-investment",
        title: "Washington is now saying security talks wait on US investment",
        body: "JoongAng, citing ruling-bloc sources on Thursday, says the United States has told Seoul it would be hard to accelerate follow-up security talks under last November’s joint fact sheet unless Korean investment in America also moves. That is the first time the link has been put that bluntly. The fact sheet traded a $350bn US investment pledge for, among other things, a nuclear-powered submarine and wider nuclear-fuel rights. The first security round was in Seoul in June; a second date has not been set. Cho Hyun is trying to get to Washington in September. Semiconductor money for US fabs is the frustration Washington is naming. Seoul says the Honam projects are already large, and that commercial logic still applies.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/us-links-security-talks-to-progress-on-korean-investment/12848939",
      },
      {
        id: "kr-ufs-opcon",
        title: "The shortened UFS drill is now an OPCON-transfer problem",
        body: "The allies wrapped Ulchi Freedom Shield six days early after Trump called the drills costly and “hostile” to a North Korea he described as respectful. The counter-offensive phase and most field training went. Defence Minister Ahn says wartime OPCON transfer is unaffected because phase one met its assessment goals. The FOC verification that was supposed to feed October’s SCM has fewer reps. Lee still wants a transfer in his term; Washington still wants conditions, not a date. The opposition calls it a security failure. The presidential office calls it alliance management.",
        sourceLabel: "AP",
        sourceHref:
          "https://apnews.com/article/north-south-korea-us-drills-trump-kim-e0350e23feac60adfa60f2cbf5eff27f",
      },
      {
        id: "kr-denuke",
        title: "MOFA still says denuclearization after Cho–Rubio dropped the word",
        body: "Cho Hyun and Marco Rubio’s late-24 August call produced readouts that mentioned “the North Korean nuclear issue” and peace, not “denuclearization,” and did not condemn last week’s missile firings. The foreign ministry has since said the goal is unchanged, and that “peace on the peninsula” can be read as denuclearization. Cho pledged to help turn Trump’s Kim outreach into talks, and the two ministers agreed to meet in person soon. Pyongyang fires; Washington edits nouns; Seoul translates. The alliance is still writing communiqués about Hormuz in the same week.",
        sourceLabel: "Aju Press",
        sourceHref: "https://www.ajupress.com/view/20260825151003164",
      },
    ],
  },
];

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
    updatedAt: "29 Oct 2026",
    lede:
      "Google put Carbon on the table two weeks after Argon and kept it off the public API; OpenAI plugged ChatGPT into ServiceNow tickets; GSA took 40% off Claude for every level of government; the S-1 still has no price; and Genie 4 is still a tester preview with native audio.",
    stories: [
      {
        id: "gemini-carbon",
        title: "Carbon is Google’s next frontier model — and only cyber defenders get it this week",
        body: "Google on Wednesday announced Gemini 4 Carbon, two weeks after Argon, as its strongest model, with state-of-the-art cybersecurity and long-horizon work. It ranks first on Artificial Analysis Intelligence Index v5.0 at 59. Official scores, run without guardrails: SEC-bench Pro 88.2% for finding real bugs, ExploitGym 54.8% for exploitation, CWE-bench 71.0% for patching. Internal tests put secure-code success at more than twice Argon’s; the Chrome team told Google the model was more than 10 times better than another lab’s large frontier model at high-quality patches. Terminal-Bench 4.0 cheating fell to 0.0%, with attempts at 0.4%; Gray Swan IPI attack success is 0.0%, from Argon’s 0.7%. Access starts this week with a subset of cyber defenders, then other Fairwind partners. Developers, businesses and consumers are “as soon as possible.” Introductory price matches Argon: $2 per million input tokens, $10 per million output, cached input 95% off; $4/$20 after the introductory period. Reuters, in a Thursday wrap, repeated the Fairwind-first rollout and the $2/$10 price. The card is public. The API is not.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
      },
      {
        id: "openai-servicenow",
        title: "OpenAI put ServiceNow inside ChatGPT — most of the rest is 2027",
        body: "OpenAI and ServiceNow on Wednesday expanded a January partnership. A ServiceNow MCP plugin is in the OpenAI marketplace today: customers connect their own instance, pick which actions to expose, and ServiceNow’s Action Fabric applies existing rules so an IT ticket can be updated without leaving ChatGPT. Enhanced plugin features are due by the end of 2026. Voice in the Super Intelligence Control Tower is due in the first quarter of 2027; OpenAI-powered security early access in January 2027 and general availability in the second quarter; Codex in AI Workflow Factory in 2027. ServiceNow plans to give all employees ChatGPT Work and Codex, not only engineers, and to use OpenAI on internal security. OpenAI is using ServiceNow to run itself. Greg Brockman called it putting models into the systems businesses already depend on. The plugin shipped. The joint security product did not.",
        sourceLabel: "OpenAI",
        sourceHref:
          "https://openai.com/index/openai-servicenow-partnership-expansion",
      },
      {
        id: "gsa-onegov",
        title: "GSA OneGov: 40% off Claude, no minimum, every level of government",
        body: "Anthropic on Tuesday expanded its GSA OneGov agreement. Government partners get a 40% discount on Claude Enterprise, Claude for Government and the Claude API, for the first time across every product surface — direct purchases now, cloud providers in the coming months — and the cut extends to state, local, tribal and territorial governments as well as federal. Anthropic estimates the discounts at $1 billion. There is no minimum spend. About 500 US federal, state and local organisations now use Claude; weekly Claude for Government active users are up about eightfold since February; federal civilian usage about 20-fold in a year. Claude for Government, FedRAMP High, went generally available on 30 September. Agencies can buy the discount on GSA’s Multiple Award Schedule. GSA’s own release repeats the 40% consumption price and the no-minimum line. The earlier $1 offer is not this contract.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/news/expanding-partnership-gsa",
      },
      {
        id: "s1-calendar",
        title: "The S-1 is public; the price range is still blank",
        body: "Yahoo Finance, Tuesday, walked the calendar after Monday’s public S-1: marketing can begin as soon as 10 November, 15 calendar days after the 26 October filing; the SEC is closed for Veterans Day on the 11th and needs two business days’ notice, which makes 13 November the earliest pricing date bankers rarely use; the earliest first trade under those rules is Monday 16 November. Yahoo cites the Wall Street Journal and Reuters for a target in the week of 16 November. Share count and price range are still blank, as they were in the filing. SpaceX’s 23-day clock from public file to first trade would land on 18 November. Midterms are 3 November; Thanksgiving is the 26th. Nothing in Thursday’s EDGAR index filled the blanks. The prospectus is out. The roadshow is not.",
        sourceLabel: "Yahoo Finance",
        sourceHref:
          "https://finance.yahoo.com/markets/article/anthropics-ipo-could-start-trading-as-soon-as-nov-16--heres-the-road-from-filing-to-first-trade-155405578.html",
      },
      {
        id: "genie-4",
        title: "Genie 4 makes audio with the world — and is still a tester preview",
        body: "DeepMind on Tuesday announced Genie 4, a world model that generates music, ambient sound and interactive dialogue with the scene. Gemini Omni anchors appearance and behaviour; other Gemini models keep a simulation coherent. Users steer with keyboard and natural-language prompts — weather, camera, a new person or object — while Gemini monitors between inputs. It is a research preview for trusted testers, then Google AI Ultra subscribers in Project Genie and early-access Gemini API and Google AI Studio partners. DeepMind lists the limits: object permanence drifts on longer runs; complex multi-agent interaction is unsolved; real-world places are not accurate; legible text usually needs to be in the prompt; continuous interaction lasts a few minutes; real-time audio accuracy is still research. Video and audio carry SynthID. There is no price. Carbon is the cyber model. This is the world model. Neither is on a public API today.",
        sourceLabel: "Google DeepMind",
        sourceHref:
          "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月29日",
    lede:
      "共機回來了：六架次、七艘共艦、一艘公務船。陸軍阿帕契因齒輪箱停飛。顧立雄說戴維森窗口還在，遼寧號也在掌握裡。巴基斯坦先用一中關領空，數小時後又放行華航長榮。薔琵農損升到四點四六億，保險只賠了兩成。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機六架次、共艦七艘、公務船一艘，五架次進防空識別區",
        body: "國防部英文公報，統計28日上午6時至29日上午6時，偵獲共機6架次、共艦7艘、公務船1艘在台海周邊活動，6架次中有5架次進入北部、中部及西南空域。國軍以任務機、艦及岸置飛彈系統監控應處。中央社29日機艦公報網址未編入；軍聞社同日稿數字相符。昨日西線越中線的6架次、7艘、1艘公務船，今天變成識別區五比一。飛機回來了。艦沒少。",
        sourceLabel: "MND",
        sourceHref: "https://www.mnd.gov.tw/en/news/plaact/88094",
      },
      {
        id: "apache-grounded",
        title: "美軍通報齒輪箱風險，陸軍阿帕契停飛待檢",
        body: "國防部長顧立雄今天列席立法院外交及國防委員會前受訪。美軍AH-64E阿帕契攻擊直升機因齒輪箱存在風險停飛待檢，陸軍也有阿帕契。他說國防部已收到美方技術通報，目前陸軍的阿帕契屬停飛狀態，會調配AH-1W超級眼鏡蛇攻擊直升機、OH-58D戰搜直升機實施戰備任務。委員會上午的專案是盤點各單位職場霸凌、不當管理、性平、自傷案件。停飛是會前的那一句。替代機型寫進了應處，不是寫進了恢復日期。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610290041.aspx",
      },
      {
        id: "gu-davidson",
        title: "顧立雄：中國未放棄併吞；遼寧號在掌握裡",
        body: "美國太平洋陸軍司令克拉克28日說，「戴維森窗口」所構成的威脅依然成立。顧立雄今天在同一場會前受訪指出，中國始終沒有放棄武力併吞台灣，克拉克想說的就是台灣要以實力來維持和平，國軍會全盤掌握共軍動態，做好整備、建構自我威懾力量。針對遼寧號編隊於第一島鏈演訓，他說國軍除聯合情監偵外，也與盟友交換情資，充分掌握遼寧號及其他各艦隊，甚至公務船、海警船；不樂見共艦展現威懾、影響印太穩定。被問美日囤儲戰備物資，他只說台灣本來就要發揮作戰韌性，相關備戰持續進行。窗口還在。航母的位置，他說有。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610290043.aspx",
      },
      {
        id: "pakistan-airspace",
        title: "巴基斯坦一度關領空，數小時後核准華航長榮至明年3月",
        body: "彭博引述巴基斯坦國防部長兼航空部長阿瑟夫昨天的話：航空領域遵循一個中國政策，僅准許中國航空公司飛越。數小時後，彭博再引述文件，巴基斯坦民航局已核准中華航空及長榮航空自10月28日至明年3月27日使用領空。行政院發言人李慧芝今天在院會後說，國安及外交團隊有掌握，高度遺憾巴基斯坦扈從中國、無視國際規範，衝擊飛安、將空域政治化；中華民國台灣是主權國家，與中華人民共和國互不隸屬。交通部稱這段期間是冬季班表，航路每季申請。外交部28日已譴責空域武器化。先關後放。冬季班表寫到了3月27日。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610290113.aspx",
      },
      {
        id: "rose-farm",
        title: "薔琵農損4.46億，保險理賠約8100萬，卓榮泰要農業部檢討",
        body: "農業部今天在行政院會報告，截至28日下午5時，農業產物及民間設施估計損失4億4623萬元，以倒伏、浸水、落果為主，宜蘭金柑與茂谷柑、台中蘋果甜柿梨、台東番荔枝與香蕉較重；豬隻死亡11頭、畜禽舍受損23棟。五項氣象參數型農業保險保單達理賠標準，估算約8100萬元。次長胡忠一說，這次理賠約占農損兩成；水稻投保率78%，其他品項多在4%至10%。卓榮泰要農業部確認貨源與價格、檢討保險條件與品項、並就極端氣候下的補助做科學分析。9縣市已納入現金救助。追加預算6076億仍停在一讀。農損的數字先到了院會。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610290161.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "29 Oct 2026",
    lede:
      "The Bank of Japan sat down for two days and still has not printed; Katayama again promised ¥10tn without naming a tax; the yen waited at 157.82 after a 158.06 poke; tanker rates are already writing the next grocery list; and a grocer told the Diet the 7-point cut would last a month.",
    stories: [
      {
        id: "boj-meeting",
        title: "The BOJ opened a two-day meeting; the statement is tomorrow",
        body: "The Bank of Japan’s policy board met Thursday and Friday, with the statement and the Bank’s View due Friday and the full outlook on 2 November, per the bank’s own calendar. TBS said the two-day meeting opened today, that a hold is expected, and that the board is likely to judge whether “underlying” inflation has reached 2%. A CNBC survey of 16 economists, fielded 14–26 October and updated Monday, had all 16 looking for an unchanged 1.25% on Friday and all 16 looking for the next hike in December or January. Reuters sources last week said the quarterly report would signal that underlying inflation has roughly hit the target. The September decision was 7–2, to a 31-year high. Friday prints. Thursday does not.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/27/boj-october-meeting-rate-cnbc-survey.html",
      },
      {
        id: "katayama-10tn",
        title: "Katayama: ¥10tn over two years, “definitely” secured, still unnamed",
        body: "Finance minister Satsuki Katayama told the Lower House Financial Affairs Committee on Wednesday that she would “definitely” secure funding for the roughly ¥10tn revenue loss over two years from cutting the food consumption tax to 1%. She repeated the old line: no special deficit-covering bonds, a rewrite of the whole budget, and extra-budgetary income. Takeshi Shina of the Democratic Reform Association called the answers a shoulder-dodge and said restoring 8% later, or not restoring it, was hell either way. The committee sat in a joint session with Agriculture in the afternoon on support for small farmers who lose margin and restaurants that lose traffic. The hole is still two numbers in older files — about ¥5tn a year versus about ¥10tn over two years. Wednesday’s Sankei file printed the two-year figure. It did not print an offset.",
        sourceLabel: "Sankei",
        sourceHref:
          "https://www.sankei.com/article/20261028-6BIRPOLBWNNOXBCJGNLRBCLOVU/",
      },
      {
        id: "yen-157",
        title: "The yen sat at 157.82 at 3pm after a 158.06 poke",
        body: "Reuters timed Tokyo at 3pm Thursday: dollar-yen 157.82/157.84, unchanged from New York’s 5pm print, after the dollar briefly bought up to 158.06 on higher US yields and was pushed back. The morning had no direction. The FOMC had passed overnight; Chair Warsh gave no clear hint of a December hike, and attention moved to the BOJ. A separate Reuters wrap in Asia had the dollar up 0.14% at ¥158.045 before Tokyo’s afternoon fade. The two-day meeting is the next print. The 3pm number was the same 157-handle as Wednesday.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261029096",
      },
      {
        id: "food-second-wave",
        title: "Nikkei: a second wave of food prices is already in the tanker rates",
        body: "Nikkei Asia, Thursday, said Japan could be in for a second wave of food-price increases as Middle East turmoil lifts naphtha-derived container feedstocks and crude-tanker freight. Prices rose for 4,965 food and beverage items in September, more than triple a year earlier. The piece’s own deck is that consumer prices could rise next year and erase Takaichi’s consumption-tax cut. The Japanese original, dated Wednesday, said the first oil-led shelf increases would ease toward year-end, then warned that a second wave after the new year would shave the benefit of the 8%-to-1% food cut. The tax cut is still a bill. The tanker invoice is not.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/economy/inflation/japan-girds-for-new-wave-of-food-price-hikes-as-tanker-rates-soar",
      },
      {
        id: "akidai-witness",
        title: "Akidai’s president: the 7-point joy lasts a month",
        body: "Hiromichi Akiba, who runs the Akidai supermarkets in Tokyo, sat as a witness at Tuesday’s Financial Affairs Committee. The 8%-to-1% food cut would be welcome, he said, but “the joy of 7% off probably will not last a month.” Bargain-day queues that used to be about 100 are now closer to 200; incomes are not rising and the household still has to be defended. After two years of 1%, putting the rate back to 8% — in a still-higher price level — would be a serious blow. Relabelling and till changes are a cost for shops. He asked that the money go instead to fertiliser, feed and farm machinery. The opposition invited him. Wednesday’s joint committee moved on to farmers and restaurants. The bill still has no offset.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref:
          "https://www.asahi.com/articles/ASVBW2589VBWULFA013M.html",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "29 Oct 2026",
    lede:
      "The spy service told the intelligence committee Kim may have used Dandong to talk about Washington; the loudspeakers came on at 6am in Paju; Samsung printed a record and the Kospi gave Wednesday back; Lee said nothing outranks safety the day before Itaewon; and he again called the party’s all-or-nothing wing irresponsible.",
    stories: [
      {
        id: "nis-dandong",
        title: "NIS: Kim may have discussed US talks in Dandong",
        body: "Seoul’s National Intelligence Service told a closed-door intelligence committee audit on Thursday that Kim Jong-un may have conveyed Pyongyang’s position on talks with the United States during Saturday’s one-day trip to Dandong, according to Democratic Party lawmaker Youn Kun-young and People Power’s Yoo Yeong-ha. The service said the visit may have had a purpose beyond commemorating China’s Korean War role, noting that Foreign Minister Choe Son-hui and other senior diplomats travelled, not military officials. Kim met Wang Huning, China’s top political adviser, and visited a war memorial. APEC is in Shenzhen next month; Trump is expected, and has said he wants to resume dialogue with Kim. The assessment is the agency’s, relayed by two lawmakers. Pyongyang has not confirmed a talking point.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261029009000315",
      },
      {
        id: "loudspeakers",
        title: "Paju heard the speakers at 6am — a week after Kim Yo-jong’s warning",
        body: "Yonhap said North Korea appears to have test-broadcast propaganda loudspeakers along the border on Thursday. Residents in Paju said the sound started at 6am, volume relatively low, audible from early morning, and ran about four to five hours. A Daeseongdong resident, in the only civilian village inside the DMZ, heard a brief burst of music at 6:30am, then faint sounds like ghostly wails. A Tongilchon farmer heard the same wails and animal cries while harvesting rice, and said it was the old unpleasant noise, started quietly before the volume used to jump. Kim Yo-jong on 22 October said broadcasts targeting the South would be ready this month. Yonhap’s verb is “appears.” The Joint Chiefs did not issue a matching English confirmation in the same file.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261029011000315",
      },
      {
        id: "kospi-samsung",
        title: "Samsung printed a record; the Kospi gave back Wednesday’s 6%",
        body: "The Kospi fell 1.24%, or 74.78 points, to 5,937.66 on Thursday, after touching 6,100.11. Wednesday it had jumped more than 6% on SK hynix’s record quarter and extra shareholder returns. Samsung Electronics reported third-quarter operating profit of 107.44 trillion won, up 783.1% year on year, and revenue of 195.25 trillion won, up 126.9%, on AI chip demand — a slight miss versus estimates, and no update on the shareholder-return plan. Daishin estimated 2026 returns at 90–110 trillion won, of which 35 trillion already planned or paid; 55–75 trillion still undescribed. Samsung shares closed down 4.13% at 232,000 won; hynix up 2.62% at 1.53 million. LG Energy Solution dropped 8.6% after LG Chem said it would sell a large stake. The won was 1,336.8 per dollar at 3:30pm, up 0.9 won. The record is in the filing. The return plan is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261029009451320",
      },
      {
        id: "lee-safety",
        title: "Lee: nothing takes precedence over lives — the day before Itaewon",
        body: "President Lee Jae Myung told the second plenary of the presidential life-and-safety committee on Wednesday that “there is no value that takes precedence over protecting people’s lives and safety.” The Framework Act on Life and Safety, passed on 7 May, takes effect in December and writes down the state’s duty to protect lives and property and to protect victims, families and witnesses. About 70 officials, victims and family members attended. The meeting came a day before the fourth anniversary of the Itaewon crowd crush, which killed 159 and injured nearly 200. Lee said people were still dying for lack of government intervention, and that the state should act faster. The law is dated. The anniversary is the next morning.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261028004451315",
      },
      {
        id: "lee-extremism",
        title: "Lee again called the all-or-nothing wing “irresponsible extremism”",
        body: "On Wednesday morning Lee used X to refuse an apology for calling critics “irresponsible extremists.” Some people sincerely want prosecution reform, he wrote; others hinder it with inflammatory, all-or-nothing demands for hidden agendas, attacking those actually doing the work. Yonhap read the post as aimed at Democratic Party hard-liners who say he has backtracked. Lee had wanted prosecutors to keep supplementary investigations in exceptional cases; the bill the party legislated, now in force, stripped investigative power entirely and left only indictment and trial. The agency chief sat Cabinet on Tuesday and was told to come about once a month. The X post did not name them. The bill already has.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261028002000315",
      },
    ],
  },
];

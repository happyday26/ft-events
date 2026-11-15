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
    updatedAt: "15 Nov 2026",
    lede:
      "Two Nvidia holders asked the board to keep Huang’s return on the table, and Musk said critical deals would be lost without him; OpenAI let a US Pro agent pay with a fingerprint and a token; Google, the same day, opened Wallet to Gemini as read-only; Anthropic’s IPO book was six times covered by Thursday with a $64bn price due Wednesday, and the company declined to comment; and the lab that is selling itself also said a safety claim is only as sound as the eval behind it.",
    stories: [
      {
        id: "huang-return",
        title: "Huang is out. Two holders asked the board not to rush the replacement.",
        body: "Jensen Huang resigned as Nvidia’s president, chief executive and director on Thursday. Colette Kress, the CFO, is interim; Harvey Jones is the first board chair. The company’s announcement did not give a reason. On Saturday CNBC reported that Altimeter’s Brad Gerstner and Atreides’ Gavin Baker — about $2.13bn of Nvidia stock as of 30 June — had posted a letter asking the board for “a slow, measured, and deliberate process” that includes “the potential return of Jensen Huang.” It said Kress would lead capably, and that the founder had “earned the right for a deliberate process that avoids any needless rush to replace him before all the facts are known.” It did not ask for him back today. Elon Musk said on Friday he had signed a “Stand with Jensen” petition that claims more than 100,000 names, including more than 5,000 current staff; on Saturday he said that without Huang, some “critical deals will be lost.” The search is open to inside and outside names. The letter wants it slow.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/14/nvidia-investors-jensen-huang-return-board-letter.html",
      },
      {
        id: "chatgpt-wallet",
        title: "ChatGPT Wallet: the agent pays, the fingerprint is the check",
        body: "OpenAI posted ChatGPT Wallet on 13 November. A US ChatGPT Pro subscriber, 18 or older, saves an eligible American Express, Mastercard or Visa card once; a “dot” then shops and fills the checkout. Before each purchase the user reviews merchant, items, total and card, then authorises with Face ID or a fingerprint. The network issues a token — a substitute number, code and expiry — so neither the agent nor the business sees the real card. Rewards and dispute rights stay with the card. The company calls it limited availability and says some sites will still block agent traffic; it published a Commerce Partner Playbook rather than a merchant plugin. Over time it wants users to pre-approve categories and limits. Today every tap still needs a thumb.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/introducing-chatgpt-wallet",
      },
      {
        id: "gemini-wallet",
        title: "Gemini can read Wallet. It cannot move the money.",
        body: "Google, also on the 13th, added Google Wallet to Personal Intelligence for every Gemini app user in the United States, on web, Android and iOS. Tag @Google Wallet and it will chart spending, find recurring charges and flag a price rise; Plaid can attach bank and card accounts for a deeper look. The company is explicit about the other direction: if you connect Wallet, “Gemini can only read information from your accounts; it can’t move, manage, or invest your money.” The link is off until the user switches it on, and it can be switched off. Memory Summary, on the same settings page, is a readable list of what Gemini has stored. One lab handed the agent a token. The other handed it a statement.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/products/gemini-app/google-wallet-gemini-app/",
      },
      {
        id: "anthropic-ipo",
        title: "Anthropic’s book was six times covered by Thursday",
        body: "Reuters, citing people familiar with the offering, said on Saturday that Anthropic’s IPO drew about twice the orders for the shares on the first day of the roadshow and six times by the end of Thursday. The roadshow runs through next Wednesday, when the company is expected to price a $64bn deal; banks are seeing investors in New York, Boston and San Francisco. The same people said interest was already ahead of the early days of SpaceX’s roadshow, and that bankers still call a single-digit cover modest for a deal this size. The valuation argument is a 2028 revenue line of about $270bn to $280bn; some sell-side numbers put 2026 at $52bn–$53bn and 2027 at $135bn–$137bn. One investor who sat in a meeting said the company had not answered some questions in detail, and that a group session had no dial-in. Anthropic declined to comment. The book is a multiple. The 2028 number is still a projection.",
        sourceLabel: "CNBC-TV18 / Reuters",
        sourceHref:
          "https://www.cnbctv18.com/technology/investors-flock-to-anthropic-ipo-but-question-durability-of-ai-lead-20034053.htm",
      },
      {
        id: "anthropic-evals",
        title: "Anthropic: a safety claim is only as sound as the eval",
        body: "On the 13th the company published “Building strong safety evaluations.” The line is the title: when a lab says a model is safer than the last one, it means it scored better on a test someone built, and those tests are easy to game, often do not measure what they claim, and are rarely documented well enough to reproduce. It wants preregistration, mixed teams of methods and domain experts, and the replication habits psychology took up a decade ago. Safety evals, it says, should run in a sandbox with no internet, watched in real time. “In recent months, in response to our own incidents, we have hardened our evaluation environments, temporarily stopped running many evaluations that give models internet access, and implemented real-time monitoring for web search evaluations that require giving models internet access.” Refusal is the wrong score for a user in crisis; one bad turn fails the whole conversation. The IPO is the sale. This is the method note that went out with it.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/research/building-strong-safety-evaluations",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月15日",
    lede:
      "蔣萬安安心大遊行主辦單位喊破八萬，沈伯洋洋流祭一萬人，選前兩週在雨裡對開。孫文南院院長汪明生依反滲透法六十萬交保。追加預算黨團已約二十日三讀，六千零七十六億還在審。國防部今天的海空情是共機一架、共艦八艘、公務船三艘。核電公投第二場，正方說救命丸，次長說不是萬靈丹。",
    stories: [
      {
        id: "taipei-rallies",
        title: "安心大遊行對上洋流祭：主辦單位的人潮對主辦單位的人潮",
        body: "九合一倒數兩週，台北市長選戰昨天在雨裡對開。國民黨蔣萬安辦「安心大遊行」，南北兩路，北路由蔣與台中市長盧秀燕帶、南路由立法院長韓國瑜陪蔣的妻子石舫亘，市府路會合，主辦單位宣布現場突破八萬人。蔣說，「要讓每一個家庭少一點擔心，多一些安心。」民進黨沈伯洋在二二八和平公園辦「洋流祭」，獨立樂團、市民共創曲，晚間壓軸登台。公視引他說，「如果過了幾年你再回來看這場選舉，那個就叫回顧歷史。」同日首場公辦政見發表會，蔣端出通學步道、都更與婚育住宅稅減至零；沈攻兒虐與營養午餐，說「營養絕對不是一個禮拜一瓶鮮奶那麼簡單」。連同唐新民、蕭文乾、林志成、郭璽，市長票有六個人在搶。人潮是主辦單位報的。投票日是二十八日。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/835782",
      },
      {
        id: "sun-wen-south",
        title: "孫文南院院長六十萬交保：反滲透法第四條",
        body: "高雄地檢署昨天公布，孫文南院院長、中山大學退休教授汪明生，與婦女部主任潘金英、鼓山區無黨籍閔姓里長參選人，涉違反《反滲透法》第四條，受滲透來源指示、資助為特定候選人競選。十二日搜索十一處；十三日聲押。高雄地院裁定汪六十萬交保，潘、閔各四十萬，三人均限制出境出海。檢方指北京市某區台辦透過汪、潘牽線，五月帶閔女參加北京、天津團，與台辦人員碰面商談選舉，回台後在高雄辦造勢；並用「高雄市新群英遊養多元交流協會」招攬幹部赴陸接受落地招待。孫文南院屬前國民黨主席洪秀柱的孫文學校系統。案還在偵查。交保不是無罪。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5640398",
      },
      {
        id: "extra-budget",
        title: "追加預算約二十日三讀：六千零七十六億還在委員會",
        body: "工商時報今天寫，立法院十月三十日黨團協商已拍板，追加預算案擬在十一月二十日前三讀。行政院歲出六千零七十六億，創高。卓榮泰三日赴院報告：最大宗「穩定民生」四千二百十三億，含中油增資二千三百三十八億、經濟部油氣及電價緩漲一千八百零九億。國防一千四百五十七億，軍事投資一千三百三十四億——濱海監偵型無人機等三項五百五十九億、中層反戰術彈道飛彈等七項一百三十億、機密計畫兩項六百四十五億。國防部說，特別條例裡被刪的委製、商購改走公務預算，濱海監偵與攻擊無人機今年啟動採購，希望明年形成戰備。社福加碼二百十五億，老農津貼從八千一百十元調到一萬；待遇一百零九億。日期有了。三讀還沒有。",
        sourceLabel: "工商時報",
        sourceHref: "https://www.ctee.com.tw/news/20261115700017-430105",
      },
      {
        id: "pla-bulletin",
        title: "一架東部空域：1架共機、8艘共艦、3艘公務船",
        body: "國防部今天發布，十一月十四日上午六時至十五日上午六時，偵獲共機一架（進入東部空域一架）、共艦八艘、公務船三艘，持續在台海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。飛機一架、艦八艘、公務船三艘。數字是二十四小時的統計。意圖不在公報裡。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88214",
      },
      {
        id: "nuclear-referendum",
        title: "公投第二場：救命丸對上不是萬靈丹",
        body: "中選會十四日晚間辦「廢除非核家園」公投第二場意見發表會，正方中經院綠色經濟研究中心副研究員陳中舜，反方經濟部次長賴建信。陳說重啟約一年半到三年，趕得上AI浪潮；「核電或許不是萬靈丹，但是台灣當下必要的救命丸。」他批核廢專法與高放選址條例至今未完成。賴說核電不是振興經濟的萬靈丹，核三2號機停機後去年經濟成長仍達百分之八點七六，主計總處估今年可望破十一，十月出口九百六十七億美元創新高；台電核三再運轉計畫九月二十四日已過核安會審查，「本來就依法應該做的事情，沒有必要再用公投處理。」他的三原則仍是核安無虞、核廢有解、社會共識。第二十二案二十八日與九合一合併投，主文問是否支持用核電振興經濟、廢除非核家園。正方要同意。反方要不同意。門檻是四分之一選舉人。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/6656/9879126",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "15 Nov 2026",
    lede:
      "Tamaki said a resident-tax cut from fiscal 2029 would be a large factor in whether the DPP votes yes in the Upper House; government officials said a formal Takaichi–Xi sitting in Shenzhen is difficult; Kobayashi promised on Saturday to take opposition views as far as the ruling party can; a Kadena captain was arrested at 3.10am for drink-driving while the curfew still runs to 7 December; and she leaves tomorrow for Manila, then Shenzhen, with the Quad on Tuesday and a standing-talk still the China ask.",
    stories: [
      {
        id: "tamaki-tax",
        title: "Tamaki: a 2029 resident-tax cut would be a large factor",
        body: "Democratic Party for the People leader Yuichiro Tamaki told reporters in Tottori on Sunday that if the government locked in the resident-tax cut his party wants from fiscal 2029, that would be “a large factor” in whether it switched to yes on the food-tax bill in the Upper House. The DPP voted no in the Lower House. The government’s text still cuts the rate on food and non-alcoholic drink from 8% to 1% for two years from April 2027. Tamaki said the rebound two years later would hit the middle hard, noted that the ruling camp lacks a majority in the Upper House, and said it needed “the consent of a wider group, including the opposition.” Kyodo carried the remarks this afternoon. A factor is not a whip. The vote is still unlisted.",
        sourceLabel: "Kyodo",
        sourceHref: "https://www.okinawatimes.co.jp/articles/-/1966788",
      },
      {
        id: "takaichi-xi",
        title: "Officials: a formal Takaichi–Xi sitting is difficult",
        body: "Several Japanese government officials told Jiji on Sunday that a formal meeting with Xi Jinping in Shenzhen is difficult. Takaichi leaves tomorrow for Manila and Shenzhen, her first visits to both. China is still demanding a “correction” of her Taiwan-emergency remarks and is cool on a summit. A Kantei official said, “China has closed off dialogue. There is nothing we can do.” Tokyo is still looking for a standing conversation. A foreign-ministry official said an “encounter” with Vladimir Putin at the meeting is possible; Russia has held a Hokkaido Shimbun reporter since last month and put JT’s Russia business under a local firm. Officials also worry Trump will see Xi on the 19th, and Putin with him, over Japan’s head. The itinerary is set. The bilateral is not.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/article/show/3911982",
      },
      {
        id: "kobayashi-ldp",
        title: "Kobayashi: the ruling party will take opposition views “as much as possible”",
        body: "LDP policy chief Takayuki Kobayashi told reporters in Wakayama on Saturday that opposition parties had raised “various opinions and issues” during Lower House deliberations, and that “as the ruling party, we want to respond to them as much as possible.” Kyodo ran it as the lead political brief. The sentence does not name a resident-tax cut, a wider payment, or an offset. The Upper House special committee sits again on Monday, 16 November, at 1pm. Tamaki’s Sunday condition is a 2029 tax cut. Komeito’s Friday ask was a wider payment. Kobayashi’s Saturday line is the one that still fits both.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/91401",
      },
      {
        id: "okinawa-dui",
        title: "A Kadena captain, 3.10am, breath under 0.5mg a litre",
        body: "Okinawa police arrested US Air Force Capt. Omena Mushale, 27, of Kadena Air Base, at the scene in Okinawa City at about 3.10am on Saturday, on suspicion of drink-driving. Kyodo, via the Straits Times, says patrol officers saw him leave a parking lot in a bar district that caters to US personnel, stopped him after he accelerated, and recorded a breath reading of less than 0.5 milligrams of alcohol a litre. He partly denied the allegation, saying he thought it would be fine because home was nearby. After a Marine was arrested in October over the suspected robbery-murder of Anna Yagi in Naha, the US military set a midnight-to-5am curfew from 9 October; another drink-driving arrest during that window extended the curfew for lower ranks through 7 December and barred all service members from drinking outside their homes in those hours. The ban was in force. The captain was still in a car.",
        sourceLabel: "The Straits Times / Kyodo",
        sourceHref:
          "https://www.straitstimes.com/asia/east-asia/us-air-force-captain-arrested-for-alleged-drink-driving-in-okinawa",
      },
      {
        id: "takaichi-trip",
        title: "Manila Monday afternoon, Shenzhen Wednesday, Quad on Tuesday",
        body: "The Jiji slate: Manila Monday afternoon; ASEAN Plus Three, AZEC, Japan–ASEAN on Tuesday morning; Mekong, East Asia Summit and the Quad in the afternoon; Shenzhen Wednesday afternoon; APEC Thursday morning; press conference and home Thursday afternoon, local time. Kyodo, on Friday, had Ozaki calling ASEAN a “key pillar” of a free and open Indo-Pacific, and a Quad leaders’ meeting in Manila — the first since September 2024. Takaichi also wants an economic-security and AI line with Trump there. The food-tax bill stays in the Upper House while she is out of the country. The standing-talk in Shenzhen is the item that still has no time on the card.",
        sourceLabel: "Jiji",
        sourceHref: "https://sp.m.jiji.com/article/show/3911982",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "15 Nov 2026",
    lede:
      "Lee named the arrow from behind on Saturday as the Choi tape moved; on Sunday he said it was hard to tolerate using the name of reform to obstruct it; Choi apologised for a leaked claim that he had opposed Yoon’s impeachment, then accused the other faction of starting the fight; Cho and Wang used ninety minutes in Beijing to keep a third Lee–Xi meeting on the calendar and to warn against a second Yalta; and the Cheonghae motion could be voted as early as tomorrow, still south of Oman, still not the strait.",
    stories: [
      {
        id: "lee-betrayal",
        title: "Lee: the hardest arrow is the one from behind",
        body: "President Lee Jae Myung posted on X on Saturday that there was still much to do and that the mountains were still high, “but as always, the hardest thing to face is the arrow coming from behind.” The Korea Herald notes he had made a similar remark on the Democratic Party podcast on Friday, after Rep. Cheon Jun-ho recalled his years as an aide. Pro-Lee lawmakers echoed him. Kim Nam-joon wrote that it saddened him the president still had to talk about betrayal; Kim Dong-ah called continued false claims “serious anti-party behavior.” The context is a leaked October conversation in which two-term Rep. Choi Min-hee, of the Jung Chung-rae group, said Lee had opposed impeaching Yoon Suk Yeol. The presidential office expressed “strong regret” and denied it. The post did not name Choi. The faction did not need the name.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10937535",
      },
      {
        id: "lee-reform",
        title: "Sunday’s post: do not use “reform” to block reform",
        body: "On Sunday Lee posted again, under the heading “Not Words, but Action.” “It is difficult to tolerate using the name of reform to obstruct reform.” True reform, he wrote, is unpopular and cannot avoid stakeholders; the first question should be whether a measure needs doing, not whether it lowers an approval rating. He listed economic growth, livelihood and real estate — “ruinous to the nation” — plus tax and fiscal reform, consolidating and moving public institutions, prosecution and police, and defence. The pile, he said, could not be cleared even at full capacity, around the clock, until the term ends. He named no person and no party. The ethics review of Choi is still the other item on the party’s desk. The post is the instruction. The names are in the other thread.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026111513162351780",
      },
      {
        id: "choi-faction",
        title: "Choi apologised, then said the other faction started it",
        body: "Choi first denied the leaked remarks, then apologised on Friday after the recording circulated. On Sunday, the Herald reports, she wrote on Facebook that “a lapse in my memory and some confusing remarks have caused trouble for the president and distress to our party members and supporters,” and then accused the pro-Lee group of instigating the fight through Rep. Kim Min-seok’s claim that her faction had colluded with a religious sect around the August convention — a claim the party later said it had not proved. Supreme council members Han Min-soo and Lee Sung-yoon boycotted Friday’s leadership meeting to demand an investigation of Kim. Eyes are on whether they boycott again later this week. The party is weighing discipline. The tape is not in dispute. The apology did not close it.",
        sourceLabel: "The Korea Herald",
        sourceHref: "https://www.koreaherald.com/article/10937535",
      },
      {
        id: "cho-wang",
        title: "Cho in Beijing: a third Lee–Xi, and not a second Yalta",
        body: "Foreign Minister Cho Hyun told Korean correspondents on Saturday that Friday’s ninety minutes with Wang Yi, plus dinner at Diaoyutai, would feed a third Lee–Xi meeting on the APEC sidelines in Shenzhen. Much of it was the peninsula. Cho said he told Wang that peace there is in China’s interest, “and Minister Wang agreed.” A senior official said Seoul does not oppose a US–North Korea sitting — “it opens an opportunity for us to play the role of peacemaker” — and had asked Beijing to help bring Pyongyang to the table; China, the official said, would try. On a possible US–China–Russia meeting the same week, the official said Seoul had told Washington and Beijing it “must not become a second Yalta”: no recognition of the North as a nuclear state. Wang’s August “two countries” line did not come up; Seoul expects it not to return. Travel between the two has reached 10 million visits. No new agreements were announced. The pandas are still “something the leaders agreed on.”",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/korea-china-agree-to-continue-restoring-ties-at-leexi-summit-in-shenzhen/12972945",
      },
      {
        id: "cheonghae",
        title: "Cheonghae could be voted as early as tomorrow — still not the strait",
        body: "JoongAng, this afternoon, put the Cheonghae motion in the Assembly with two steps left: National Defense Committee, then a floor vote if more than half attend. The Defence Ministry has asked for as early as Monday; people around the Assembly still expect late November. Cabinet approved it on the 10th: operating area from the Gulf of Aden to waters south of Oman, ending off Duqm, about 650 kilometres from Hormuz, not the Gulf of Oman, not the strait. Personnel 320 to 395, plus a P-8A, a 30-member EOD team and uncrewed mine-clearing kit, through 31 December 2027. Kang Shin-chul told lawmakers on the 9th that the strait itself would need a separate vote. Iran’s Esmaeil Baghaei posted a Korean proverb on Thursday about a sparrow chasing a stork; the Foreign Ministry said on Friday the government was still talking to “relevant countries, including Iran,” under non-involvement. Rebuilding Korea and the Progressive Party call it a backdoor deployment. The DP’s majority is enough. The vote is not in the diary.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/decision-to-expand-naval-units-operations-toward-hormuz-strait-puts-korea-between-scylla-and-charybdis/12968310",
      },
    ],
  },
];

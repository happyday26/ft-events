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
    updatedAt: "16 Sep 2026",
    lede:
      "OpenAI confirmed on Tuesday that it is talking to Anthropic and Google about a safety body. Huang spent Dreamforce and Mad Money rejecting an antitrust waiver. Amodei and Altman were on the same Salesforce stage. Anthropic signed a 2.16-gigawatt Australian lease and said it will open Singapore next month.",
    stories: [
      {
        id: "ai-labs-on-record",
        title: "OpenAI put the three-lab talks on the record. There is still no charter",
        body: "A spokesperson told CNBC on Tuesday that OpenAI has been engaging Anthropic and Google on how they can work together on safety, and that the conversations have run since Demis Hassabis’s July essay calling for a US-led standards body modelled on FINRA. The Information had the working groups on Sunday. Hassabis, after Amodei’s Saturday essay: “The details need working through, but the direction is correct.” Altman said a slowdown has been a “primary topic” at OpenAI and that the company will have more to share “soon.” Chris Lehane’s earlier post still says the labs will build a voluntary effort “with or without government support.” Tuesday’s sentence is a confirmation. It is not a charter, a date, or a pen-holder.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/15/open-ai-google-anthropic-safety.html",
      },
      {
        id: "ai-huang-mad-money",
        title: "Huang, on Mad Money: an antitrust waiver is “completely unnecessary”",
        body: "Tuesday evening, after Dreamforce, Huang told Jim Cramer that Amodei’s call for government mediation or antitrust waivers so labs can “pace the frontier” is surplus. “The fact that we need new laws, new antitrust laws, or new regulations, so that these companies could do their fundamental engineering and do it properly before they release products, that is just completely unnecessary.” Safety and testing are engineering problems; if a product is not ready, “just hold on to it.” “We’re not going to die in 2030.” He still said AI safety is “a real thing” and that firms should never ship unsafe products. Nvidia sells the chips a coordinated pause would idle. Anthropic did not comment.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/15/nvidia-huang-ai-slowdown-antitrust.html",
      },
      {
        id: "ai-dreamforce",
        title: "Dreamforce put Amodei, Huang and Altman on the same stage. They did not agree",
        body: "Amodei told Marc Benioff, in front of about 12,000 people at Moscone, that pacing the frontier is “the way to lead the industry forward.” Huang, on next: speed and safety are “a false choice.” “You could definitely have both at the same time.” “Run as fast as you can,” then pause if the product is not safe. Altman, later: safety and monitoring have to come before capabilities, and “there should be no qualifier” on being responsible. Salesforce and Nvidia announced an Agentforce reasoning model on Nemotron the same day. Benioff’s line to reporters: if they feel they should slow down, they should; if they should speed up, they should; then they should be held accountable. Three sentences. One conference. No waiver.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/15/nvidia-and-anthropic-ceos-diverge-on-ai-safety-at-dreamforce.html",
      },
      {
        id: "ai-anthropic-australia",
        title: "Anthropic signed a 2.16-gigawatt Australian lease. FIRB still has to say yes",
        body: "Reuters, Wednesday, two people familiar: Anthropic’s first Australian data-centre lease covers a Zerra DC campus about 250 km from Brisbane, planned capacity 2.16 gigawatts, first cabinets in 2027, inference not training, closed-loop air cooling. The developer would buy renewable PPAs and pay for the grid hook-up. The deal needs Foreign Investment Review Board approval. Anthropic and Zerra declined to comment. Canberra has promised resource limits from 2027 and is still courting a boom economists have put at A$150bn by 2030. OpenAI already has a Sydney offtake. The CEO spent the weekend asking the industry to slow the models. The lease is the opposite trade.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/anthropic-signs-first-australia-data-centre-agreement-2026-09-16/",
      },
      {
        id: "ai-anthropic-singapore",
        title: "Anthropic will open Singapore in October — fifth Asia-Pacific office",
        body: "The lab said Wednesday that Singapore is a “standout market” for Claude: second of 121 countries for usage per capita on its Economic Index, 5.81 times what headcount would imply. The office joins Tokyo, Bengaluru, Seoul and Sydney. Dale Finlay is general manager for ASEAN, based there. Chris Ciauri: “A presence here means we can hire the people who know this market best.” BT: Raffles Place; nine roles advertised in finance, sales, applied AI, marketing and public benefit. Senior executives visit in October. OpenAI has already promised an Applied AI Lab and S$300m. The slowdown essay is still unsigned by a charter. The lease and the office are not.",
        sourceLabel: "The Business Times",
        sourceHref:
          "https://www.businesstimes.com.sg/companies-markets/anthropic-open-singapore-office-cites-it-standout-market-ai-tool-claude",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年9月16日",
    lede:
      "國防部今早印出15架次共機、12架次越中線、8艦2公務船。立法院說總預算7大冊本週送出。卓榮泰昨天還在癡癡地等。李慧芝警告第二預備金若不解凍，11月公投恐辦不成。九鵬精準彈藥操演今天開打。",
    stories: [
      {
        id: "pla-wednesday",
        title: "國防部：昨日6時迄今，8艘共艦、2艘公務船，12架次越中線",
        body: "國防部16日上午：自昨天上午6時至今天上午6時，偵獲8艘共艦、2艘公務船及15架次共機，其中12架次逾越台灣海峽中線，侵擾北部、西南及東部空域，持續在台海周邊活動。國軍以任務機艦及岸置飛彈應處。周二同一口徑是7艦2公務船、8架次中的7架次進入北部、西南及東部。艦往上，越中線的架次也往上。東部實彈窗口打開的那天，數字跟著開。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609160035.aspx",
      },
      {
        id: "budget-this-week",
        title: "立法院：總預算7大冊校對將近完成，預計本週送出",
        body: "115年度中央政府總預算8月14日三讀，滿一個月仍未函送。立法院今天發稿：上會期8月法案眾多，韓國瑜8月26日朝野協商已裁示，為求最後兩次院會校對正確，請議事人員在下會期9月開議日前整理完畢再咨請總統公布；目前7大冊校對將近完成，預計本週內送出。函文還在院內。日期從「開議前」收成「本週」。三讀過了。冊子還沒出門。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609160122.aspx",
      },
      {
        id: "cho-waiting",
        title: "卓榮泰：我們也在癡癡地等，但是工作還是要做",
        body: "行政院長15日在院內受訪，被問總預算三讀逾月仍未送到行政院，說「我們也在癡癡地等，但是工作還是要做，大家加油」。自由時報盤點：軍公教、老農、中低收入戶、弱勢兒童等390萬人的福利與津貼加碼仍發不出；主計總處先前估不得動支2,992億，含新興計畫1,017億、經常與延續超過去年1,805億、預備金與災害準備金170億。政院3日通過的追加案還要等總預算先落地。藍營說8月26日朝野已同意開議前再送。院長等的是函文。院裡校對的是冊子。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5574563",
      },
      {
        id: "li-referendum",
        title: "李慧芝：第二預備金若不解凍，11月公投恐辦不成",
        body: "行政院發言人15日晚間：依預算法第54條，目前不得動支2,240億，含新興計畫299億、經常與延續超過去年1,805億。3月已先行動支的718億不在這筆裡。主計總處另盤到年底缺口68億餘元，包括2030客運車輛電動化撥付款與「115年全國性公民投票」，都要等總預算完成法定程序才能動第二預備金。「倘未能及時動支，將無法如期辦理公民投票」。廢除非核家園已編成第22案，11月28日綁九合一。選務要錢。函文還在立法院。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5575194",
      },
      {
        id: "jiupeng-live-fire",
        title: "九鵬精準彈藥操演今天開打，蘭陽艦被拖去當靶",
        body: "三軍聯合精準彈藥射擊操演16日至18日在屏東九鵬實施，今年由海軍主辦。聯合報：15日最後整備，愛國者、天弓、雄風、海馬士、陸射劍二與無訓部ALTIUS 600M已進駐；大湖軍艦當天清晨自高雄把除役蘭陽艦（原FFG-935，排水量3,075噸，1995年成軍、2025年1月除役）拖往東部海域當靶艦，準備承受飽和攻擊。東部空域今天同時出現在國防部的共機艦統計裡。靶艦在海上。操演窗口開了三天。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9755854",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "16 Sep 2026",
    lede:
      "Takaichi kept Aso, Suzuki and Kobayashi at the LDP this morning. Cabinet is still Thursday; Nakatsuka is still the Ishin name being walked in. Tuesday’s food-tax stamp left a funding hole Kyodo now prints at roughly ¥10tn. Reuters says the BOJ is set to take the policy rate to 1.25% on Friday.",
    stories: [
      {
        id: "jp-ldp-landed",
        title: "LDP shuffle landed: Aso, Suzuki and Kobayashi stay. Murai takes the Diet",
        body: "Takaichi’s first party revamp since she took the LDP a year ago kept Taro Aso as vice-president, his brother-in-law Shunichi Suzuki as secretary-general, and Takayuki Kobayashi as policy chief. Hiroshi Kajiyama replaced Haruko Arimura at the General Council. Hideki Murai, 46, a former deputy chief Cabinet secretary under Kishida and without prior Cabinet rank, takes Diet affairs. Yasutoshi Nishimura and Koichi Hagiuda, both marked by the 2023 slush-fund scandal, stayed. In the upper house, Kazuhiko Aoki replaced Junichi Ishii as caucus secretary-general — Ishii is viewed as on poor terms with the prime minister. Takaichi: an “implementation framework under which the government and the LDP can go all out.” The names are mostly last year’s. The calendar is this week’s.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/85211",
      },
      {
        id: "jp-cabinet-thursday",
        title: "Cabinet is still Thursday. Nakatsuka is still the chair that is not named",
        body: "Kyodo’s Wednesday copy: she is tipped to keep Shinjiro Koizumi at defence and Toshimitsu Motegi at foreign affairs, and is scheduled to see Ishin’s Hirofumi Yoshimura later in the day amid reports a junior-coalition lawmaker could take a ministry. Monday’s source had not been walked back: arrangements remain for Hiroshi Nakatsuka, Ishin’s secretary-general, to become the Osaka partner’s first Cabinet minister since the coalition formed last October. The portfolio is still hers. Jiji had already listed Katayama and Kihara as stays. Extra Diet is still “likely to start in early October,” with the food-tax bills and the Diet-seats cut that emptied the last session. The party lineup is public. The Cabinet photograph is tomorrow’s.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/85211",
      },
      {
        id: "jp-food-tax-10tn",
        title: "Katayama: the food-tax hole is roughly ¥10tn, and still has no line item",
        body: "Tuesday’s extraordinary Cabinet stamped the FY2027 tax package: food and non-alcoholic drinks from 8% to 1% for two years from April 2027, the first consumption-tax cut since 1989. Katayama, after the meeting: lost revenue “roughly 10 trillion yen,” to be filled in the year-end budget compilation “without relying on special deficit-financing bonds to maintain market confidence.” A separate income-based benefit for low- and middle-income households is about ¥600bn a year in FY2027–28, equal to the remaining point, with details still unwritten. Bills go to the October extra Diet. Reuters and CNA on Tuesday printed the hole at about ¥5tn a year. Kyodo printed the shortfall as ¥10tn. The stamp is the same. The invoice is still two numbers.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/85158",
      },
      {
        id: "jp-boj-friday",
        title: "Reuters: the BOJ is set to take the policy rate to 1.25% on Friday",
        body: "Leika Kihara’s Wednesday dispatch: the two-day meeting ending Friday is set to raise the rate from 1% to 1.25%, a 31-year high and the first hike in three months, and to signal more. Markets have nearly fully priced it; the argument is what Ueda says afterwards. Toichiro Asada, who dissented in June, may do so again. Sources still favour 25 basis points over a larger step. The Reuters poll: 1.5% by end-March, 1.75% in the second quarter of 2027, terminal at least 1.75%. Sound too dovish and the yen sells; too hawkish and the 30-year JGB tape, already through 3%, moves again. This is still a source story, not a vote. Friday prints.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/boj-set-raise-interest-rates-31-year-high-inflation-risks-loom-2026-09-16/",
      },
      {
        id: "jp-extra-diet",
        title: "The extra Diet is still early October. The seats bill is still on the order paper",
        body: "The same Kyodo shuffle copy: LDP and Ishin are preparing an extraordinary session likely to start in early October. On the list: the food-tax cut from 8% to 1% for two years from April, and the political-reform bill reducing Diet seats that produced an opposition boycott last time. Suzuki, after the new lineup: “promoting harmony” inside the party is how they get “political stability.” The upper-house majority they do not have is why Ishii’s removal matters. The tax outline is stamped. The party executives are named. The bills still need a chamber that will sit.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/85211",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "16 Sep 2026",
    lede:
      "Kim Seung-won’s hearing ran 14 hours, produced tears, and adopted no witnesses. The Democrats called him qualified; the PPP called it a shield. KSOI had 52.1% against the appointment and Lee at 35.9%. Lee Hyoung-il apologised for four months in a 17-year flat. Kang Shin-chul said OPCON is ripe and Hormuz is still not an order.",
    stories: [
      {
        id: "kr-kim-wrap",
        title: "Kim’s hearing ran 14 hours. The first 70 minutes were the insults",
        body: "The Legislation and Judiciary Committee sat the justice nominee on Tuesday. People Power’s Park Hyeung-soo: not a single witness, and 243 of 376 requested documents withheld. The Democrats said prosecutors had already thrown 11 lawyers at the file for two years and a court had acquitted him. Kim shed tears defending the cooperative where his wife works — parents decide, he said, and she took children home on weekends so their parents could rest. Joo Jin-woo called it a family salary feast; Kim Dong-ah called Joo a devil. Kim on Oppagate: one petition, no skipped steps, and he wants to know how the records reached Han Dong-hoon. Appointments do not need a vote. The room still had to hear him.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/shouts-tears-accusations-and-insults-justice-minister-nominees-confirmation-hearing-starts-uglynbsp/12876776",
      },
      {
        id: "kr-kim-report",
        title: "The Democrats want him appointed. The PPP will not adopt the report",
        body: "Wednesday morning, after 14 hours: Kim Eui-gyeom said there were “no new facts.” Jeong Jeom-sik: witnesses rejected, only 35% of documents in, “a shield for Kim Seung-won and a deception of the public.” The confirmation report is not on this afternoon’s Legislation and Judiciary calendar; staff said the meeting is prosecutorial-reform follow-up. If the parties cannot adopt a report, the president can ask again within ten days and then appoint anyway. The PPP has booked a “National Report Meeting” at the Assembly on the 22nd. The hearing ended. The appointment is still a decision, not a document.",
        sourceLabel: "The Asia Business Daily",
        sourceHref:
          "https://www.asiae.co.kr/en/article/2026091610271863166",
      },
      {
        id: "kr-ksoi",
        title: "KSOI: 52.1% oppose Kim. Lee printed 35.9%, the firm’s own low",
        body: "Korea Society Opinion Institute, 1,001 adults Monday–Tuesday, automated mobile, ±3.1 points: 52.1% against the justice appointment, 25.1% for, 22.8% unsure. Among Democrats, 52.2% still backed him; among People Power, 84.1% opposed; among independents, 54.2% against and 9.5% for. The same survey put the president at 35.9% approve, down 5.3 points and the lowest KSOI has recorded for him, with disapproval at 59.4%. Han Byung-do called Tuesday a shouting match. Jeong said that if Lee appoints him he will face “a public verdict far more fearsome than any court ruling.” The hearing is over. The poll is the constraint.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10875348",
      },
      {
        id: "kr-lee-hyoung-il",
        title: "Lee Hyoung-il: inflation first, and sorry for four months in 17 years",
        body: "The finance nominee told the Assembly on Tuesday that the AI semiconductor boom is showing up in exports and investment, that per-capita GNI is on course through $40,000, and that his first job is grocery, farm and fuel prices. He will also keep pushing MSCI developed-market inclusion and won internationalisation. Then the flat: a Gwacheon apartment bought in 2009, lived in for four months over 17 years. “I have owned only that apartment for a long time, and I wanted to live there but could not do so because of my circumstances.” He said it was not speculation. The government is selling residency-first housing policy. The nominee’s register did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260915002251320",
      },
      {
        id: "kr-kang-opcon",
        title: "Kang: OPCON conditions are in place. Hormuz is still not an order",
        body: "The defence nominee, at the National Defense Committee on Wednesday: successive governments have chased wartime operational-control transfer, “we have made considerable progress,” and “the circumstances are also in place.” Written answers still list the future Combined Forces Command’s FOC assessment as the main remaining task. On Hormuz, the former Riyadh ambassador would only say any decision should follow the safety of Korean nationals and the national interest, and that he understood nothing had been decided. He backed academy reform in principle and left the integrated-academy plan open. The opposition put a redevelopment flat and his son’s ₩700m-plus Bundang shop on the table; Kang apologised for the omitted disclosure. KIDD is in Busan this week. The strait is still a rumour.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/defense/20260916/defense-minister-nominee-says-conditions-ripe-for-opcon-transfer",
      },
    ],
  },
];

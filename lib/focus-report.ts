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
    updatedAt: "8 Nov 2026",
    lede:
      "OpenAI still has only the $11bn first slice of a round that is open; CNBC on Saturday put Anthropic’s mid-November IPO against 40 of 41 local data-centre votes and an $895.4bn compute bill; the lab hired Hacktron to test its own third-party edges; Claude’s memory post split the work into notes, wikis, and an offline “dreaming” pass; and Meta let Muse users describe a space and keep it.",
    stories: [
      {
        id: "openai-11bn",
        title: "OpenAI has $11bn in; the round that was $30bn is still open",
        body: "Bloomberg reported Friday that OpenAI has raised $11 billion so far in a new round that values the lab at $1.25 trillion. The money is part of a larger raise that has not closed; a source told Bloomberg it is expected to close in the coming weeks and could total about $20 billion. In late September the same outlet had the company looking for $30 billion. TechCrunch asked OpenAI for comment and had not heard back. The first close is a number. The rest of the round is still a calendar.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/",
      },
      {
        id: "anthropic-ipo-backlash",
        title: "Anthropic’s IPO now walks into 40 lost local votes and an $895.4bn compute bill",
        body: "CNBC wrote Saturday that Anthropic is likely targeting mid-November for a Nasdaq debut as ANT, after Friday’s investor range of $1 trillion to $1.5 trillion, down from a $2 trillion figure floated in recent months. An amended prospectus this week listed purchase commitments and leases of about $895.4 billion, “substantially all of which is related to compute and infrastructure.” In the risk factors, the company said opposition to data-centre development has become more organised, and that its public profile could draw particular scrutiny. Voters opposed data-centre ballot measures in 40 of 41 cases this week; an NBC News exit poll had more than half of voters calling AI data centres a “crucial” or “major factor” in who they backed for Congress. Anthropic declined to comment. The ticker is printed. The price is not.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/07/anthropic-ipo-ai-data-center-backlash.html",
      },
      {
        id: "hacktron",
        title: "OpenAI hired Hacktron to test the edges of its own systems",
        body: "OpenAI said Friday it is partnering with Hacktron to find vulnerabilities in its own systems. Engineers and Hacktron researchers will pick high-priority areas together, with a focus on how those systems interact with third-party services, and Hacktron’s access to frontier models is being expanded through Daybreak Red. The lab said it first met the firm through its bug-bounty programme; Hacktron builds agents for code review, penetration testing, and red teaming. Earlier this week Cathedral’s researchers were invited into the next security sprint, and bounty rewards were raised. CEO Zayne Zhang said the future of cybersecurity “won’t be defined by who has the largest security team, but by who can best combine human creativity with AI-driven capabilities.” The models are being pointed at OpenAI. The scope is the connections.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/partnering-with-hacktron",
      },
      {
        id: "anthropic-memory",
        title: "Claude’s memory post: notes, a wiki, and an offline “dreaming” pass",
        body: "Anthropic on Friday published how it now splits agent memory: notes Claude writes in-session, linked representations such as wikis, a small block injected at the start of every session, and an offline pass it calls dreaming — rereading transcripts to correct notes, merge duplicates, and promote what should be loaded next time. On a 350,000-file corpus, about 420 million tokens, a wiki built over 128 sessions lifted graded answers from 13 percent to 48 percent; search plus the wiki scored 61 percent against 53 percent for search alone and saved about 20,000 tokens per question. When several agents wrote contract terms to one shared page, 41 of 57 facts survived; one agent per page, quoting the terms, kept all 57. In Pokémon, Sonnet 3.7 wrote 413 memory files and earned one badge; Fable 5 wrote nine files and a global.md and earned four. Dreaming is the overnight rewrite. The always-loaded layer is the part that has to stay small.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/research/components-of-agent-memory",
      },
      {
        id: "meta-spaces",
        title: "Muse will build a space from a sentence; sharing is still “exploring”",
        body: "Meta on Friday introduced spaces in the Muse app: a custom experience a user creates by describing an idea — a holiday gift tracker, a daily word game, a planning board — then pins to the sidebar or main tabs, hides, or schedules. Connected apps can keep a space current in the background. The company listed a shopping hub, a school dashboard, a music tracker, a wedding planner, and a trip itinerary among the examples. Spaces are available wherever Muse is available. Sharing them with other people is still something Meta is “exploring.” Specialised models trained with learnings from Muse Wonder are rolling out in the same app. The sentence is the brief. The mini-app stays inside Muse.",
        sourceLabel: "Meta",
        sourceHref:
          "https://about.fb.com/news/2026/11/introducing-spaces-customize-muse-app/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月8日",
    lede:
      "台海隔夜四架次、兩架進西南空域，六艘共艦、兩艘公務船。第二批三架F-16V上午抵志航。政院六日不副署老福法，藍白今天繼續批。外交部回應IPAC：合作防跨國鎮壓。邱垂正談黃之鋒加判十年。",
    stories: [
      {
        id: "pla-bulletin",
        title: "隔夜四架次、兩架進西南：六艘共艦、兩艘公務船",
        body: "國防部統計七日上午六時至八日上午六時，偵獲共艦六艘、公務船兩艘及共機四架次，其中兩架次侵擾西南空域。國軍以任務機、艦及岸置飛彈系統監控應處。中央社標題寫兩架次；正文是四架次、兩架進西南。昨日公報是十一架次、九架越中線，十艘共艦、三艘公務船。艦少了四艘，公務船少了一艘，空域從十一架收到四架。線還在西南。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611080017.aspx",
      },
      {
        id: "f16v-second",
        title: "第二批三架F-16V上午抵志航，編號6729、6731、6732",
        body: "空軍司令部今天說，對美採購的F-16V（block70）繼十月二日首批兩架單座機（6727、6728）飛返後，第二批三架（編號6729、6731、6732）上午順利飛抵台東志航基地，後續依計畫推展接裝訓練，逐步達成初始作戰能力。全案「鳳翔專案」六十六架，新台幣二千四百七十二億二千八百八十三萬元，屬一百零九年至一百十五年持續性預算。空軍說美方專案辦公室已建立穩定生產與交運流程。機今天落地。初始戰力還是「逐步」。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611080059.aspx",
      },
      {
        id: "elderly-welfare",
        title: "藍白再批不副署老福法；蘇巧慧要預算回歸憲法",
        body: "立法院日前三讀修正老人福利法第二十二條，行政院六日決定不予副署。國民黨新北市長參選人李四川今天與民眾黨主席黃國昌同台，再批卓榮泰封殺新北市八十多萬名長輩的健保費補助，並問民進黨參選人蘇巧慧為何不敢為長者向院長講一句話。黃國昌問，台北市長者可以得到補助，為何新北市不能，這是全國一致性的健康醫療平權。蘇巧慧在坪林說，長輩健保費是不是社會福利，醫界與社會還有討論；立法院編預算應與行政部門討論，強行通過違反憲法精神、排擠既有施政，希望回歸憲法與預算法。法沒副署。選戰還有二十天。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611080078.aspx",
      },
      {
        id: "ipac-mofa",
        title: "IPAC籲擴大與台正式接觸；外交部說合作防跨國鎮壓",
        body: "外交部今天說，對中政策跨國議會聯盟六日在海牙年會聲明，中國對民主國家的境外干預及跨國鎮壓日益擴大，應採取果斷措施，並籲民主國家官員擴大與台灣政府代表、民主異議人士、人權捍衛者及少數族群僑民組織的正式接觸與公開諮詢。聲明引用保護衛士人權基金會報告，指中國系統性輸出監控及社區管控網絡。外交部肯定IPAC與保護衛士，籲民主友盟與台灣攜手反制跨國鎮壓，並說唯有團結才能遏止威權暴力。海牙先寫接觸。台北今天回了合作。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611080044.aspx",
      },
      {
        id: "qiu-wong",
        title: "邱垂正：黃之鋒加判十年，台灣持續關注",
        body: "陸委會主委邱垂正七日在「好友港節市集」說，香港民主派活動人士黃之鋒被加判十年徒刑，台灣將與其他民主友盟一樣持續關注並聲援，呼籲中共當局與港府還給香港人民應有的自由民主。他說黃之鋒過去因反送中及相關案件被判四年以上，自二零二零年關押至今已超過兩千天，如今又加十年；中共在香港實施兩部國安法律，並問「黃之鋒何罪之有？」只要他無法無罪釋放，殘害人權與傷害法治「永遠對香港而言是一大污點」。加刑在香港。定性在陸委會主委嘴裡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/acn/202611070106.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "8 Nov 2026",
    lede:
      "The LDP gave Ishiba and three others a Monday deadline after they walked out of Friday’s food-tax vote; the Upper House still opens Wednesday with no named offset; a preliminary M5.7 woke Chita at upper 5; Saturday was a year since the Taiwan remarks and Jiji said an APEC summit is being given up; Tokyo is shut, so Friday’s Nikkei close is still the tape.",
    stories: [
      {
        id: "ishiba-walkout",
        title: "The LDP wants Ishiba’s explanation by Monday",
        body: "The Liberal Democratic Party is urging four members, including former prime minister Shigeru Ishiba, to explain themselves after they left the chamber before Friday’s Lower House vote on the food-tax bill. The party has set a Monday deadline before the leadership decides on any action, Kyodo reported Sunday, citing sources. Ishiba, replaced by Takaichi in October 2025, told reporters the funding was unclear: “Our concerns (about fiscal discipline) have yet to be dispelled.” Yuko Obuchi, who resigned as a senior member of an intraparty tax panel in July, also voiced worries about funding; her father was in the Cabinet that introduced the tax in 1989. Takaichi has not openly criticised the four. Policy chief Takayuki Kobayashi called the walkouts “extremely regrettable”; another senior member said it was not the kind of action a former prime minister should take. The letter is out. The sanction is not.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90726",
      },
      {
        id: "food-tax-pass",
        title: "The Upper House still opens Wednesday; the offset is still unnamed",
        body: "The House of Representatives on Friday passed the bill to cut the consumption tax on food and drink as a temporary anti-inflation measure, Jiji reported. The Liberal Democratic Party and Japan Innovation Party voted for it; every opposition party voted against. It goes to the Upper House. The LDP and the Constitutional Democratic Party agreed to open Senate deliberations at a plenary on Wednesday. The coalition does not have an Upper House majority and is expected to seek votes from the Democratic Party for the People and Komeito. Takaichi told the Lower House Financial Affairs Committee beforehand that 30 percent or more of workers would be eligible for the income-linked benefit. The government wants the bill into law by the 12 December end of the extra Diet. The offset did not appear in the vote story. The chamber that can stop it opens on the 11th.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref: "https://www.nippon.com/en/articles/-/57028",
      },
      {
        id: "shizuoka-quake",
        title: "A preliminary M5.7 at 1:04 a.m.; Chita at upper 5; over 20 injured",
        body: "The 1:04 a.m. temblor originated in western Shizuoka Prefecture at a depth of about 40 kilometres and registered upper 5 on the Japanese scale in Chita, Aichi, the Meteorological Agency said. No tsunami warning was issued. Kyodo called it the biggest quake in about three decades to hit Aichi; an upper-5 shock was last recorded there in 1997. Lower 5 was felt in parts of Aichi, Nagano, and Gifu. Over 20 people were injured in Aichi and Shizuoka. Chubu Electric reported no abnormalities at Hamaoka, which sits near the projected source of a Nankai Trough megaquake; the agency said the chance that Sunday’s quake was linked to that scenario was “low.” Tokaido Shinkansen trains ran slowly between Shizuoka and Gifu-Hashima and were back to normal speed before noon. The government stood up a liaison office. The alert is for the week. The Nankai line is still “low.”",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90709",
      },
      {
        id: "china-taiwan-remarks",
        title: "A year on, Jiji says the APEC summit is being given up",
        body: "Saturday was a year since Takaichi told a Budget Committee that a Taiwan contingency could become a “survival-threatening situation” for Japan. Jiji wrote that Tokyo is waiting for the 1972 communique to quiet the row while Beijing still wants the remarks withdrawn, and that hopes for a leaders’ meeting on the margins of APEC in China on the 18th and 19th are fading. Takaichi on Friday repeated that China is “an important neighbor” and that she would promote a mutually beneficial relationship. Chief Cabinet Secretary Minoru Kihara said Friday there had been “no change” from the 1972 statement, which says Japan fully understands and respects Beijing’s position on Taiwan. A government official called China’s stance “still severe.” A foreign-ministry official told Jiji there would probably be no summit, and that the Takaichi years would be hard. Xi, as chair, would normally see visiting leaders. The anniversary arrived. The meeting did not get a time.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026110700343",
      },
      {
        id: "nikkei-drop",
        title: "Tokyo is shut; Friday’s close is still 57,434.77, down 5.96 percent",
        body: "The Nikkei 225 ended Friday down 3,643.13 points, or 5.96 percent, at 57,434.77, after losing more than 4,300 points at one stage. Kyodo called it the third-largest point drop on record, larger than the 3,318.34-point fall on 15 October, and the lowest close since mid-April. Topix fell 5.90 percent to 3,707.99. The dollar was at ¥157.94–96 at 5 p.m. in Tokyo. The 10-year JGB yield fell 0.120 percentage point to 2.635 percent. Dealers blamed a Wall Street AI selloff after Democratic wins and the chance of tighter data-centre rules. Japan Tobacco hit its daily limit, down 19.3 percent, after Putin ordered its Russian assets into temporary management. Sunday has no new print. The Upper House still walks in on that tape.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90583",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "8 Nov 2026",
    lede:
      "Jang took the special-counsel fight to Gyeongbokgung on Saturday and asked for a veto; the DP on Sunday called Lee Yong-cheol the right person for prosecution reform; KCNA said Kim Song-nam is home from China; the Kospi’s last print is still Friday’s 6.02 percent drop; and the finance ministry said it had more tools if the selling ran on.",
    stories: [
      {
        id: "jang-rally",
        title: "Jang took the special-counsel fight outdoors and asked for a veto",
        body: "A day after the National Assembly passed the fabricated-indictment special-counsel bill 167–1, the People Power Party held a rally in front of Gyeongbokgung Station on Saturday. More than 70 lawmakers attended, including leader Jang Dong-hyeok and floor leader Jeong Jeom-sik. Jang said Lee Jae Myung “is no longer the president of the Republic of Korea” and that “impeachment is the only answer.” He told Chief Justice Jo Hee-de to resume Lee’s trials at once. Jeong called the bill “an obvious parliamentary coup” and said the president appointing a counsel to investigate his own case was a conflict of interest. The party put turnout at 150,000; police estimated about 6,000. The PPP will hold an on-site supreme council and a lawmakers’ meeting in front of the presidential office on the 9th and 10th, and is pressing Lee to veto the bill. Asked about a budget-review boycott, spokesman Park Sung-hoon said the party was “keeping all options on the table.” The counsel is still unnamed. The veto is the next ask.",
        sourceLabel: "ChosunBiz",
        sourceHref:
          "https://biz.chosun.com/en/en-policy/2026/11/07/263UO6BRH5DH5F7XVI2DL7PDII/",
      },
      {
        id: "justice-lee",
        title: "The DP called Lee Yong-cheol the right person for prosecution reform",
        body: "The Democratic Party on Sunday welcomed the nomination of Lee Yong-cheol, the DAPA chief, as justice minister. Spokesperson Shin Hyun-young said he was “the right person to lead new legal administration after prosecution reform,” that he had designed judicial and anti-corruption reforms as Roh Moo-hyun’s legal secretary — jury trials, an expanded public defender, talks on the CIO — and that at DAPA he had pushed the KDDX destroyer contract and a nuclear-submarine special act. She called the People Power Party’s Daejang-dong and Yu Dong-gyu claims “baseless ‘throw it out and see what sticks’ allegations,” and said a confirmation hearing should examine qualifications rather than “wasteful political wrangling.” The name is still Lee. The hearing has no date in today’s file.",
        sourceLabel: "Yonhap / Financial News",
        sourceHref: "https://en.fnnews.com/news/202611081619124149",
      },
      {
        id: "kim-song-nam",
        title: "KCNA: Kim Song-nam is home from China",
        body: "Pyongyang’s official news agency said Sunday that a Workers’ Party delegation led by Kim Song-nam, a Political Bureau member and Central Committee secretary, came back on 7 November after an official visit to China. They were met at Pyongyang International Airport by An Hyon-min, a vice department director of the Central Committee, and Chinese ambassador Wang Yajun. In Beijing they had been seen off by Liu Haixing, head of the Communist Party’s International Liaison Department, and Ri Ryong-nam, the North’s ambassador to China. The itinerary is closed. The next meeting is not named.",
        sourceLabel: "KCNA",
        sourceHref:
          "http://kcna.kp/en/article/detail/4da514c83ae00e34d553fb0776a63322",
      },
      {
        id: "kospi-friday",
        title: "The Kospi’s last print is still Friday: 5,059.69, down 6.02 percent",
        body: "The index fell 324.11 points to 5,059.69 on Friday, as low as 4,911.28, the second straight session of AI-rout selling after the US midterms. It had dropped more than 8 percent at the open; the bourse suspended Kospi trading for 20 minutes. Samsung Electronics lost 6.35 percent to 188,700 won; SK hynix lost 10.44 percent to 1,132,000 won. Foreigners sold a net 2.77 trillion won; retail and institutions bought a combined 2.3 trillion won. The won was at 1,356.6 per dollar at 3:30 p.m., down 14.5 won. Daishin’s Lee Kyoung-min called the data-centre-rule fear the driver and the reaction “excessive.” Seoul is shut until Monday. The number the week closed on is still below Thursday and still above 5,000.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261106007852320",
      },
      {
        id: "finance-tools",
        title: "The finance ministry said it had more tools if the selling ran on",
        body: "Finance minister Lee Hyoung-il said Friday, after an emergency meeting of the Financial Services Commission, the Financial Supervisory Service, and the Bank of Korea, that authorities were “ready to take additional actions should market volatility accelerate.” He asked investors not to remain “excessively anxious and skeptical” and said the economic fundamentals were solid. Officials said collateral rules on loans used to buy stocks would be fully lifted for three months starting later this month. At 11:59 a.m. the Kospi was still down 3.55 percent, or 191.22 points, at 5,186.68, after a 20-minute halt at the open. Monday is the next session that can use the extra tools.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261106002551320",
      },
    ],
  },
];

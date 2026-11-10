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
    updatedAt: "10 Nov 2026",
    lede:
      "Albanese took the disclosure law the labs asked for in Sydney last month and said he would write it; Anthropic cut Fable to $8 and $40 a million tokens and claimed a 30-hour Fermat formalisation; Google added two more eighth-generation TPUs and still did not name a ship date; Meta priced Ember at a dime; and NVIDIA, in Austin, said five demonstrations were enough for 95 percent.",
    stories: [
      {
        id: "australia-mandatory",
        title: "Canberra will make the labs report — the June portal is not the charge",
        body: "Anthony Albanese released 18 recommendations from a rapid review of the June Medicare-statistics breach on Tuesday and said the government accepted all of them. Frontier firms that want to operate in Australia will face mandatory, rapid incident notice, independent evaluation, published safety frameworks, and a new AI safety regulator with “significant penalties.” Home Affairs Minister Tony Burke put the point in one sentence: “It should never be the case that there’s an argument that someone didn’t know the computer was loaded.” The Guardian has OpenAI unlikely to face criminal proceedings for June; Albanese called the privacy hit “minor” and still “a serious issue.” The review asked the Attorney-General’s department to consider a “failure to prevent” offence. Kwon told the Sydney inquiry last month that OpenAI would take a disclosure law. The law is now a press conference. The vote is not.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/nov/10/australia-manadatory-reporting-openai-medicare-hack",
      },
      {
        id: "fable-52",
        title: "Fable 5.2 is cheaper, faster, and still the dual-use split",
        body: "Anthropic launched Claude Fable 5.2 and Mythos 5.2 on Monday: the same underlying model, Fable with cyber and biology safeguards for everyone, Mythos for the Life Sciences and Cyber verification programmes. Outputs are up to 30% faster than 5.1; API price falls from $10/$50 to $8/$40 per million input and output tokens. An optional fast mode is $16/$80 and up to 2.5 times quicker. The lab says a team of about 1,000 Fable 5.2 agents formalised Fermat’s Last Theorem in 30 hours, against 11 days for an earlier research run; Opus 5.5 with the same harness reached 26% in 18 hours. Prerelease work also includes three working electronic devices from a one-paragraph prompt, and two black-hole calculations the lab calls open problems. Fable is on AWS, Google Cloud, and Azure today. Mythos is still an application. The weights are the same. The door is not.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/claude-fable-and-mythos-5-2",
      },
      {
        id: "google-tpu",
        title: "Google’s eighth generation is now four systems. The invoice is blank",
        body: "Amin Vahdat posted TPU 8tx and TPU 8i Max on Monday, the third and fourth eighth-generation systems in a year after 8t and 8i in April. 8tx sits on the same silicon as 8t, with fifth-generation AMD EPYC hosts, and keeps data and weights isolated in hardware for confidential inference and small-scale training; Boardfly, the 8i network, is said to cut latency by up to half versus 8t. 8i Max packages two 8i chips, doubling compute, SRAM, and HBM bandwidth inside the existing rack. Vahdat puts TPU customers at nearly 100. TechTarget’s briefing, same day, recorded no availability date and no price. Four systems. Two of them still have no calendar.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/",
      },
      {
        id: "muse-ember",
        title: "Meta’s smallest Muse is a dime a million tokens",
        body: "Muse Ember landed Monday as `muse-ember-1.0` on the Meta Model API and in Muse Code: $0.10 per million input tokens, $0.50 output, $0.004 cached, a 1-million-token context window and up to 512,000 output tokens. Meta Superintelligence Labs says it is the first model trained with Muse Wonder Full, built for the work agents repeat — tool calls, coding subtasks, routing, extraction, long documents — and that it matches Claude Haiku 5.5’s best Artificial Analysis score at about a third of the cost. Text, image, audio, and video go in; text comes out. Weights stay closed. Wonder plans. Ember handles the volume. The price is the product.",
        sourceLabel: "Meta",
        sourceHref: "https://research.meta.ai/blog/muse-ember",
      },
      {
        id: "groot-2",
        title: "NVIDIA’s GR00T 2: five demonstrations, 95 percent, open weights",
        body: "At CoRL in Austin, NVIDIA introduced GR00T 2, an open world-action model on Cosmos, trained on robot data and 100,000 hours of released human egocentric video. The company blog says it completed 40 of 50 evaluated tasks at least once with no task-specific demonstrations; average success was 71% with one demonstration per task and 95% with five. Agents can call it through an API, sequence skills, and recover from errors. Nexuni is testing laundry, Foxconn server lines, Siemens industrial cases; MicroAGI is using a post-trained copy to swap Ethernet cables on a YAM arm. Isaac Lab 3.0 and Newton are the simulation stack. The conference runs through Thursday. The model is the press release. The factory floor is still a trial.",
        sourceLabel: "NVIDIA",
        sourceHref:
          "https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月10日",
    lede:
      "顧立雄今天把「無聲軍演」說成西太平洋區域拒止。公報是四架次、八艘共艦、一艘公務船，自由時報寫飛機沒過中線。卓榮泰在院會說爭取預算不是要錢。陳明祺說駐立陶宛代表處沒有更名計畫。國民黨三大市長參選人在板橋組成三三三連線。",
    stories: [
      {
        id: "gu-silent",
        title: "顧立雄：遼寧號在西太練區域拒止，意圖破壞印太穩定",
        body: "美國戰爭研究所與企業研究所指中國可能正進行未預告的大型軍演，模擬包圍、孤立台灣。國防部長顧立雄今天陪卓榮泰赴立法院前受訪，說近日西太平洋確實有遼寧號航艦編隊及其他戰區艦隊，從事區域拒止演練。「我們認為這樣的軍事威懾，意圖破壞印太區域和平穩定」，國軍會用聯合情監偵與友盟協作掌握、適切應處。吳釗燮三日在X寫過百艘艦艇。智庫報告在上週；證實在今天的走廊。被問到科技滲透與輝達事件，他只說國防科研機密依法可不提供立委，官兵會加強反滲透查核。船在西太。名稱他認了。規模他沒數。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9868437",
      },
      {
        id: "pla-bulletin",
        title: "四架次、八艘共艦、一艘公務船——飛機沒過中線",
        body: "國防部統計九日上午六時至十日上午六時，偵獲共艦八艘、公務船一艘、共機四架次，國軍以任務機艦及岸置飛彈系統監控應處。自由時報引國防部示意圖：四架次主戰機是九日上午十時二十分至下午二時十五分在中線以西活動，未逾越中線。中央社前一日公報是七艘共艦、一艘公務船、一架北部空域。艦多了一艘，飛機從一架變成四架次，公務船沒變。海面加一艘；空域還在中線這邊。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5635246",
      },
      {
        id: "cho-lai",
        title: "賴士葆點名部長不來，卓榮泰：爭取預算不是要錢",
        body: "立法院會今天施政總質詢。國民黨賴士葆點名經濟部、教育部、文化部、內政部及海委會首長，說卓榮泰九月二十九日要求首長親自備詢爭取預算，這次六千多億追加案經濟部拿四千多億，「居然不來處理」。卓榮泰說這種講法「不好聽」，首長該到場的一定到，有重大原因才授權次長，「我們是爭取預算，不是來要錢，這個要講清楚。」賴士葆再說「就是要錢啊」；卓說那是對部長的不尊重。經濟部長龔明鑫說當天有到場，另場因美國外賓事先請假。六千億還在審。院長在辯用詞。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/6656/9868567",
      },
      {
        id: "lithuania-apec",
        title: "陳明祺：駐立陶宛代表處沒有更名計畫",
        body: "外傳立陶宛外交部九月要求「駐立陶宛台灣代表處」一週內更名。外交部次長陳明祺今天在立法院會前說，對外界傳聞沒有評論，尤其基於假消息的推論有傷雙邊關係；名稱是當年深化關係的決定，「目前沒有更動名稱的計畫」，並引立方說法：與中國互動不需要以台灣為代價。APEC領袖會議十八至十九日在深圳，主辦方改寄電子郵件、未派員遞邀請函，台灣領袖代表人選尚未公布。陳明祺說人選在適當時機由總統府宣布，邀請形式基於默契不公開；台灣是完整會員，偏離慣例的事外交部會要求更正。名稱他說不改。邀請改成了郵件。代表人還是空白。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202611100049.aspx",
      },
      {
        id: "kmt-333",
        title: "李四川、江啟臣、柯志恩：板橋「333連線」",
        body: "國民黨新北市長參選人李四川今天與台中江啟臣、高雄柯志恩在板橋黃石市場掃街，再走到慈惠宮。三人都抽中三號，自稱「333連線」「會做事連線」。江啟臣說新北、台中、高雄是前三大城，人口合計逾九百六十萬、約占四成，未來市政要合作聯盟；口號拼成「川江有志」。李四川說明日後的十三日政見會要講AI產業廊帶與新北大巨蛋演唱會、球賽經濟，也說口才不如蘇巧慧，「講出去的政見一定做得到」。選戰還有十八天。號次是三。聯盟是今天的市場。",
        sourceLabel: "自由時報",
        sourceHref:
          "https://news.ltn.com.tw/news/politics/breakingnews/5635653",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "10 Nov 2026",
    lede:
      "The food-tax bill goes to the Senate tomorrow with Takaichi in the room; Hagiuda called the Ishiba walkout unacceptable; the LDP general council nodded a 31-seat cut for submission this week; household spending fell 6.8 percent, the worst since the pandemic; and a BOJ member said the next hike should come without becoming overly cautious.",
    stories: [
      {
        id: "food-tax-senate",
        title: "The food-tax bill reaches the Senate tomorrow. Takaichi will sit there",
        body: "Directors of the upper-house Committee on Rules and Administration approved the calendar on Tuesday: plenary on Wednesday, purpose explained, party questions, the prime minister present. The House of Representatives passed the two-year cut — food and drink from 8% to 1% from April — on Friday on the coalition’s supermajority. The Senate is the chamber the coalition does not own. Opposition to the hole, about ¥5tn a year by the figures used in the Lower House debate, is still inside the LDP. Takaichi has said the bill would be explained. Wednesday is the first afternoon that explanation has a date.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261110/p2g/00m/0na/035000c",
      },
      {
        id: "ishiba-reprimand",
        title: "Hagiuda: walking out on the tax cut was “unacceptable”",
        body: "The LDP has reprimanded former prime minister Shigeru Ishiba, Yuko Obuchi, Hajime Funada, and Yoshihisa Furukawa for leaving the Lower House floor before Friday’s vote. Executive Acting Secretary-General Koichi Hagiuda told a Tuesday press conference their actions were “unacceptable from the standpoint of party unity,” and that the secretary-general’s authority was used so the matter would not drag into Senate debate. The four had been told to submit written statements on Monday. Ishiba’s, to reporters, was that consumption tax is meant for social security, and that it is “extremely problematic to lose financial resources … when we don’t have an alternative way to fund the shortfall.” The bill still has no named offset. The reprimand is the stamp. The Upper House can still walk.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261110/p2g/00m/0na/035000c",
      },
      {
        id: "seats-31",
        title: "The 45-seat IOU is now a 31-seat bill. The LDP council nodded",
        body: "Working-level officials of the LDP, Japan Innovation Party, and Democratic Party for the People finished a draft on Monday: 31 proportional Lower House seats gone, 465 to 434, Chugoku and Shikoku blocs merged, a modified Sainte-Laguë allocation, revival threshold raised from one-tenth of valid votes to one-sixth. Jiji, via Nippon.com, has the LDP, Ishin, and DPFP submitting this week and aiming to enact in the session that ends 12 December. NHK said the LDP general council approved the bill on Tuesday. The October 2025 coalition note was about 45. Ishin took 31 as roughly 70 percent of the pledge. Single-member redistricting is still a later public-offices bill; unified lists are a sentence that “necessary legal measures shall be taken.” The council was the stamp. The 14 seats Ishin wanted are not in the text.",
        sourceLabel: "Nippon.com / Jiji",
        sourceHref: "https://www.nippon.com/en/articles/-/57154",
      },
      {
        id: "spending-68",
        title: "Household spending fell 6.8 percent — the worst drop since 2020",
        body: "Two-or-more-person households spent an average ¥289,536 in September, down 6.8% in real terms from a year earlier, the Internal Affairs ministry said Tuesday: a tenth consecutive monthly decline, and the steepest since the 10.2% pandemic drop in September 2020. August was minus 3.1%. Energy and water fell 10.5%, electricity 11.9%; food and drink 2.5% for a fourth month, cheaper rice, weather on beverages; clothing 3.6%; dining out rose 2.3% on a five-day holiday. Eastern Japan’s Pacific side had its wettest, least-sunny September in the 1946 series. A ministry official said it was unclear whether prices or the rain did the cutting. Real income for salaried households was up 0.9%, to ¥528,074. The tax cut is sold as help with prices. The household survey just printed the other number.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90864",
      },
      {
        id: "boj-hike",
        title: "A BOJ member: hike “without becoming overly cautious”",
        body: "The summary of opinions from the 29–30 October meeting, released Tuesday, had one member saying a rate increase should come when possible “without becoming overly cautious.” Kyodo read that as the bank remaining eager to keep raising. At that meeting the board said underlying inflation had “generally” reached its 2% target after nearly fourteen years of unconventional easing, and the governor signalled room for further hikes to stabilise prices. Household spending, printed the same morning, was the weakest since Covid. The hawk is in the minutes. The consumption number is in the other release.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/90869",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "10 Nov 2026",
    lede:
      "The PPP stood outside Cheong Wa Dae and called the special-counsel bill a jailbreak; Lee told the cabinet the American midterms change the weather and the alliance still has to be bipartisan; Pyongyang said a new torpedo is due in early 2027; the Combined Forces Command dropped supplies from above 3,000 metres; and the Budget Committee opened an 821-trillion-won book with a 162-trillion-won fund in the middle.",
    stories: [
      {
        id: "ppp-veto",
        title: "Jang called it a jailbreak bill. The president has not said veto",
        body: "People Power lawmakers held their general meeting outside the presidential office on Tuesday and asked Lee Jae Myung to veto last week’s special-counsel statute on alleged fabricated indictments from the Yoon years. Party leader Jang Dong-hyeok called it “the final step in a project to free Lee Jae Myung from prison” and “a jailbreak bill.” Floor leader Jeong Jeom-sig said that project would only shorten the administration. Lee’s trials have been frozen since he took office in June 2025 under the constitutional bar except for insurrection or treason; the charges are Seongnam and Gyeonggi-era — development, North Korea remittances, a government card. The Democratic Party says the clauses that would have let the counsel cancel indictments were stripped before passage. One-person protests at Cheong Wa Dae started Monday; Busan is Saturday. The bill is law until a veto. The veto is still a demand.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110003900315",
      },
      {
        id: "lee-midterms",
        title: "Lee: the midterms change the weather; Congress still has to be both parties",
        body: "After US Democrats took both chambers last week, the president told a Tuesday cabinet that “many changes are expected to take place in the external environment” and that officials should prepare, especially to limit the hit to the domestic economy. Cooperation with the administration continues; so does the hunt for “a bipartisan foundation for cooperation in Congress,” plus state governments and business, with Korean firms’ investments protected. Agreements already signed are to be implemented. Consistency and flexibility, he said, in that order of national interest. The foreign minister’s line in October was to watch November. November has now happened. The instruction is not to pick a caucus.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110003800315",
      },
      {
        id: "nk-torpedo",
        title: "Pyongyang: a new high-speed torpedo, navy deployment early 2027",
        body: "KCNA said Tuesday that the Academy of Defense Sciences, the Missile Administration, and the Torpedo Weapon Research Bureau verified a new high-speed torpedo in the East Sea on Monday, with navy fielding planned for early 2027. No specifications, no photographs. The report claimed “core technology for raising the efficiency of propulsion and the performance of rocket propulsion device,” perfected through “more than 180 rounds of different tests over the past five years.” A Unification Ministry official called it a show of naval and underwater systems the North has been emphasising, and said more analysis was needed. Last month: an AI-guided torpedo test and cruise missiles from a presumed 3,000-ton submarine; the 5,000-ton Choe Hyon and Kang Kon destroyers were commissioned in June and September. The calendar is early next year. The hardware is a sentence.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110001251315",
      },
      {
        id: "cfc-airdrop",
        title: "The Combined Forces Command dropped the resupply from above 3,000 metres",
        body: "South Korea and the United States ran a combined aerial-resupply drill on Tuesday under Combined Forces Command, the kind used when ground routes are cut. Heavy and light loads, cross-aerial delivery around the clock, from altitudes of more than 3,000 metres. CFC said the point was transport-aircraft survivability and the rate at which ground units recover what is dropped. Units named: Army Special Warfare Command, 1st Logistics Support Command, Air Force Air Mobility and Reconnaissance Command, and the Combined Division. A CFC official said later rounds will add transport drones. The wartime story is the air. The add-on is still a plan.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261110003400315",
      },
      {
        id: "budget-fund",
        title: "The 821-trillion-won book opened on a 162-trillion-won fund",
        body: "The Budget and Accounts Committee began ministry-by-ministry review of next year’s 821-trillion-won proposal on Monday. Yonhap put the year’s fight on the 162-trillion-won Future Response Fund: the Democratic Party as a fiscal reservoir, the People Power Party as an item for large cuts. In the full committee that afternoon, Democrat Lee Yeon-hee said the fund was to bank boom-year tax and invest in growth capacity; planning minister Park Hong-keun promised pre- and post-reporting so the Assembly kept control. PPP’s Bae Jun-young called it a permanent supplementary budget and worried the cash would migrate into the stock market; Park Jeong-ha said talk of using it for firefighters’ pay made it “petty cash.” The special-counsel fight is in the street. The fund is in the spreadsheet.",
        sourceLabel: "Aju Press",
        sourceHref: "https://www.ajupress.com/view/20261109194070730",
      },
    ],
  },
];

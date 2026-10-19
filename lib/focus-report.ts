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
    updatedAt: "19 Oct 2026",
    lede:
      "Anthropic put 5 percent of its shares into a public-benefit fund that still needs a stockholder vote; junior technical hires inside the lab are 9 percent of the intake; a coding-agent console may have exposed keys for 1.4 percent of users; Cape Breton is the first Canadian lease; and Replit made OpenAI the default after saying, then unsaying, that it had left Anthropic.",
    stories: [
      {
        id: "anthropic-pbf",
        title: "Anthropic will put 5% of itself in a fund that grows if the company does",
        body: "Sunday’s post commits 5% of Anthropic’s shares to a new Public Benefit Fund, subject to stockholder approval. The board may add another 2% for every 50% rise in the company’s value above a baseline it has not named. The vehicle is a wholly owned LLC, not a 501(c)(3), so it can move between donations and direct distributions; none of the equity is for lobbying or political giving. Combined with the founders’ 80% pledge and an employee match that about half the staff use, the company says roughly 20% of shares will be dedicated to public purposes before any later top-ups. Labour-market disruption is the example it gives; $200 million is already committed to that work. Governance, the valuation steps, and a public-benefit report are all still “in the coming months.” The shares are promised. The vote is not done.",
        sourceLabel: "Anthropic",
        sourceHref: "https://www.anthropic.com/news/public-benefit-fund",
      },
      {
        id: "anthropic-juniors",
        title: "Junior technical hires fell from 27% of the intake to 9%",
        body: "Friday’s employment study, written up on Saturday, says the junior share of Anthropic’s technical departments slipped from 21% to 14% since early 2025, and the junior share of technical hires fell from 27% to 9%. Technical teams are a smaller slice of the whole firm, 61% to 56%, which the lab attributes to business functions catching up and to non-engineers writing software. By August, interactive agent hours outnumbered employees six to one. Meeting time per person is up 20% on a year ago. One engineer described “an army of Claudes, with every one asking for my attention”; in an April survey, 20% said the job had shifted from doing the work to managing Claudes. Technical hiring still grew in absolute terms. The mix did not.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/",
      },
      {
        id: "opencode-keys",
        title: "OpenCode Console: 1.4% of users told to revoke provider keys",
        body: "An intruder reached a legacy system at OpenCode on the night of 16 October. The company emailed a subset of Console users the next morning — subject line “Action Required: Potential provider key breach” — and said 1.4% of Console users were affected, all of them with an outside provider linked. Console is the hosted gateway; keys pasted there may have been exposed. The command-line and desktop apps keep keys on the machine, and co-founder Dax Raad said those “never come to us.” OpenAI, Anthropic and Google keys are the ones named. The X post called it a large-scale distillation attack, said the incident was ongoing, and did not say a key was copied or used. Raad wrote on the 18th that attackers had been “non stop trying” for 48 hours. User posts about bills are unverified. The company has not translated 1.4% into a headcount.",
        sourceLabel: "The Hacker News",
        sourceHref:
          "https://thehackernews.com/2026/10/opencode-console-breach-may-have.html",
      },
      {
        id: "anthropic-nova-scotia",
        title: "Anthropic’s first Canadian lease is 95 megawatts in Cape Breton",
        body: "EverWind will build a data-centre campus at Point Tupper, Nova Scotia; Anthropic will lease the first phase for at least 20 years. Phase one is 95 MW, targeted for late 2027; a 325 MW expansion in 2028 would take the site to 420 MW, against a provincial grid of about 3,000 MW. EverWind puts the campus and four onshore wind farms at more than C$10 billion. Anthropic was not at Friday’s announcement; the company identified itself later as the tenant and said the site would power Claude for Canadian and global customers. Both firms say they will pay for grid upgrades so ratepayers do not. Water is a closed-loop glycol system, estimated at 100,000 litres a day in phase one. A Membertou-led Mi’kmaw consortium is negotiating a 9% stake. Land is being cleared. The wind farms will not be ready when the first hall opens.",
        sourceLabel: "CBC",
        sourceHref:
          "https://www.cbc.ca/news/canada/nova-scotia/nova-scotia-to-host-massive-data-centre-to-power-anthropic-s-ai-assistant-claude-9.7383129",
      },
      {
        id: "replit-openai",
        title: "Replit made OpenAI the default, then said it had not left Anthropic",
        body: "At Disrupt on Thursday, Replit chief Amjad Masad said the company was “no longer working with Anthropic.” Cost, partnership and performance were the reasons; Sol and Astra, he said, win Replit’s vibe-coding benchmarks. TechCrunch updated the piece through the weekend. Masad then wrote that Replit “remains model agnostic,” that users can still pick Claude, and that OpenAI is the preferred partner powering Agent. A person familiar with the Anthropic relationship, unnamed, told TechCrunch the partnership was still in place. Replit had been, Masad said on stage, a top-five Anthropic customer. Enterprise is 15% of revenue, up from 2% last year. The default moved. The contract, on this record, did not.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月19日",
    lede:
      "共機回來了：五架次、三架越線。老人健保費三讀還沒送出立法院。NCC今天審袁秀慧。高檢署起訴四名現退役人員洩密。六千億追加預算還停在一讀。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機回來：5架次、3架越線，6艘共艦、9艘公務船",
        body: "國防部統計18日上午6時至19日上午6時，偵獲共機5架次，其中3架次逾越中線，進入北部、中部及西南空域；共艦6艘、公務船9艘持續在台海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。昨日公報是2架次均越線、5艘共艦、9艘公務船。艦多一艘，飛機從兩架變成五架。空域不再是空的。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/88009",
      },
      {
        id: "nhi-zhang",
        title: "張惇涵：三讀還沒送出立法院，請朝野三思",
        body: "立法院16日三讀修正老人福利法第22條，近一年綜合所得未達申報標準或稅率未達20%的65歲以上長者，由中央補助全額健保費。行政院秘書長張惇涵今天在交通委員會會前說，修法「把中低收入戶長者部分負擔、健保沒有給付的醫療給排除掉了」，可能遺棄最需要照顧的人；三讀條文尚未送出立法院，希望朝野再謹慎思考、三思而後行。他搬出政院三原則：不增加舉債、不排擠其他政策、合法合憲。在野說中央補貼、健保基金一毛不少；他說那一刀切下去，有人多分就有人少分。民進黨團要政院不要照單全收。法案過了。公文還沒出門。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610190048.aspx",
      },
      {
        id: "nhi-zhou",
        title: "周道君：假牙、水晶體、支架補助，初估衝擊13萬人",
        body: "衛福部社會及家庭署署長周道君今天說，若依修正後第22條執行，低收入與中低收入老人的健保部分負擔、非健保醫療補助失去法源，假牙、白內障人工水晶體、心臟支架等項目恐難編預算，初估至少衝擊13萬人——2025年底低收入戶老人約5.5萬、中低收入約8.4萬餘。低收入戶部分負擔尚有社會救助法；中低收入部分負擔與未給付醫療，現階段在老福法裡已沒有明確依據。衛福部長石崇良上午已證實修法後只剩健保費補助，並說約83%長輩落入稅率20%以下，「粗糙以所得稅率一刀切」，制度恐崩潰。刪掉的是弱勢那一欄。補上的是八成三的保費。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/ahel/202610190105.aspx",
      },
      {
        id: "ncc-yuan",
        title: "袁秀慧：不會退黨，也不會把黨派放在前面",
        body: "交通、教育文化委員會聯席會議今天審查行政院函送的NCC七人名單，先審主委被提名人袁秀慧、副主委蕭蘋、委員王怡惠。NCC自8月1日起沒有委員。張惇涵說七人符合專業，袁秀慧是民進黨籍，其餘六人無黨籍。國民黨萬美玲問組織法要求超出黨派，她如何獨立。袁秀慧說「我應該還是不會退出民進黨」，也曾與柯文哲共事；若上任，會以後續行為證明，「不會把民進黨的黨派立場放在前面」。她承諾裁罰標準先整理、先公告。OTT專法她說「認同有法律才有方式管理」。19、21、22日聯席。名單在審。機關還是空的。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610190108.aspx",
      },
      {
        id: "secrets-indictment",
        title: "高檢署起訴四人：憲兵、空軍、海巡帳戶、虛擬貨幣",
        body: "台灣高檢署今天偵結，依國安法、陸海空軍刑法、國家機密保護法、貪污等罪起訴四人。時任憲兵李男、時任空軍森女（均已退伍）因缺錢，分別自113年3、4月至114年8月、112年10、11月至114年3月，為大陸地區刺探、洩漏、交付軍事機密。海巡蔡女把帳戶借給森女收款。已退伍的尤男用虛擬貨幣錢包收錢，再轉入李男與蔡女帳戶；他先前已因洩密被起訴。不法所得：李男88.4萬元，森女與蔡女共51.5萬元，尤男43萬403元。李、森在押，今天移審高院羈押庭；尤男10萬、蔡女5萬交保，限制出境出海。高檢請從重量刑。錢進了帳戶。密出了營區。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/asoc/202610190060.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "19 Oct 2026",
    lede:
      "Takaichi would not rule out issuing bonds to pay for the food-tax cut; the cabinet is still at 57 percent after Yana; the bill opens in the Lower House tomorrow; she sent money to Yasukuni and did not go; and Keen Sword started with a carrier leaving Yokosuka.",
    stories: [
      {
        id: "takaichi-bonds",
        title: "Takaichi would not rule out bonds for the food-tax cut",
        body: "The prime minister told the Upper House Budget Committee on Monday she would not rule out issuing bonds to fund the two-year cut in the food levy from April. The government would try to lower the debt-to-GDP ratio by reviewing spending, she said, and “appropriately control the size of annual bond issuance.” “We would not rule out the chance of issuing bonds altogether.” She also said Japan could raise trust in the yen by strengthening the economy. The line until this morning was that the hole would be filled without deficit-covering bonds. The offset is still unnamed. The refusal is no longer absolute.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.streetinsider.com/Reuters/Japan+PM+says+wont+rule+out+debt+issuance+to+fund+tax+cut/27199663.html",
      },
      {
        id: "cabinet-57",
        title: "The cabinet is 57%, and an official called that a relief",
        body: "An NNN–Yomiuri poll for October put Takaichi’s cabinet at 57%, almost unchanged from last month. The government had been watching Yana’s resignation. One senior official told NTV the drop was smaller than feared. Opposition lawmakers said the problem was the LDP’s character, not one minister; a government official said treating it as a personal failing and moving on would be a mistake. A former minister said the test is whether the food-tax bill passes. The farm minister is gone. The number barely moved.",
        sourceLabel: "NTV",
        sourceHref:
          "https://news.ntv.co.jp/category/politics/78f51ec1fc584aa49d35f82069fbe379",
      },
      {
        id: "food-tax-tuesday",
        title: "The food-tax bill opens in the Lower House tomorrow",
        body: "The same NTV file dates Lower House debate on the consumption-tax cut for Tuesday. The opposition wants a clearer account of the offset. DPFP’s Hamano, the party’s secretary-general in that clip, quoted the government’s own line — secure the funds without special deficit bonds, keep market confidence — and asked whether that was the old view that issuance is evil. Takaichi’s answer is the annual issuance total, initial plus supplementary, controlled as last year; that, she said, is not a refusal to issue bonds. Tomorrow is first reading, not the vote.",
        sourceLabel: "NTV",
        sourceHref:
          "https://news.ntv.co.jp/category/politics/78f51ec1fc584aa49d35f82069fbe379",
      },
      {
        id: "yasukuni",
        title: "Takaichi sent masakaki and money to Yasukuni, and stayed away",
        body: "On Monday, through LDP General Council chair Hiroshi Kajiyama, she had a private-funds tamagushi-ryo offering placed at Yasukuni during the autumn festival. Kajiyama told reporters he had been entrusted with the party president’s feelings. She is not expected to visit; on the 17th she had already offered masakaki in the name of the prime minister. Land minister Tatsunori Ibayashi went in person, among more than 100 members of the cross-party visit group. She did not go in October last year, at the spring festival, or on 15 August. The offering arrived. She did not.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/articles/ASVBM0CT9VBMUTFK001M.html",
      },
      {
        id: "keen-sword",
        title: "Keen Sword opened; Roosevelt left Yokosuka",
        body: "USS Theodore Roosevelt sailed from Yokosuka on Monday for Keen Sword, the Japan–US exercise that runs through 29 October, mainly in Kyushu and the Nansei Islands. Kyodo, via CNA, puts the Self-Defense Forces at about 45,000 and the US at about 12,000 — the largest edition. Cyber and electromagnetic scenarios are new; space-sharing was added in 2024. Australia and Canada return; France, Germany and the Netherlands join parts of it for the first time. The GSDF’s Type-25 land-based anti-ship missile moved, with launchers, from Camp Kenkun to the Onohara range in Nagasaki and Saga — the first time the system has left its peacetime site; it will not be fired. NMESIS and MADIS are on Yonaguni for the first time; Ishigaki has those plus HIMARS. Joint Staff chief Hiroaki Uchikura called the size a measure of crisis awareness. The carrier is at sea. The two-year tax cut is still in committee.",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aopl/202610190066.aspx",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "19 Oct 2026",
    lede:
      "Lee handed Kim the letter and told him not to take sides; Realmeter put the president at 37.3 percent; he sat with the World Bank on AI before Tuesday’s summit; Pyongyang called the Russia tie invincible; and the North’s top prosecutor left for Moscow.",
    stories: [
      {
        id: "kim-letter",
        title: "Lee handed Kim the letter: principles, not sides",
        body: "President Lee Jae Myung presented Kim Ji-yong with his appointment letter as the first chief of the Serious Crimes Investigation Agency at Cheong Wa Dae on Monday afternoon. Spokesperson Kang Yu-jung said seven minister-level officials were in the same ceremony, including Song Du-hwan as chair of the Itaewon special investigation committee, Lee Hyeong-il at finance, Kang Shin-cheol at defence, Hong Ji-seon at land, Lee So-yeong at SMEs, Ha Jun-gyeong as policy chief, and Lim Gi-geun at the Office for Government Policy Coordination. Lee told Kim to handle cases that have drawn public suspicion “according to principles, without taking sides,” and to remember that “many people are watching.” The consolation line — “You’ve worked hard through a lot” — was read as a nod to the ruling-camp hardliners who fought the nomination. Kim started work on the 16th. The letter arrived today.",
        sourceLabel: "The Herald Business",
        sourceHref: "https://biz.heraldcorp.com/article/10907607",
      },
      {
        id: "realmeter",
        title: "Realmeter: Lee 37.3% after two weeks down",
        body: "A Realmeter poll of 2,520 adults, Monday to Friday, put positive assessments of Lee’s job at 37.3%, up 2.1 points; negatives were 60.4%, down one. The pollster credited livelihood measures on housing and jobs, and the response to a stabbing spree in Incheon, and said a late-week stock slide weighed on the number. A separate 1,005-adult survey, Thursday–Friday, had the Democratic Party at 36.2% (up 0.7) and the People Power Party at 40.9% (down 0.4). Margins were 2.0 and 3.1 points. Both were commissioned by the Asia Business Daily. The rebound is small. The negative is still six in ten.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261019000800315",
      },
      {
        id: "lee-banga",
        title: "Lee sat with the World Bank chief on AI and energy",
        body: "Lee met World Bank Group President Ajay Banga at Cheong Wa Dae on Monday. Banga is in Seoul for Tuesday’s Global AI and Digital Summit, hosted with the finance and science ministries. Lee said he hoped for more global cooperation on AI and that Seoul would “try to make greater contributions to what the bank does.” Banga said the visit was also to discuss industrial development, jobs, and private-sector capital with the president, the government, and companies. The handshake is the file. The summit is tomorrow.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261019002351315",
      },
      {
        id: "nk-russia",
        title: "KCNA: the Russia tie is an “invincible” comradeship",
        body: "North Korea’s embassy in Moscow hosted a reception last Tuesday for the 78th anniversary of diplomatic relations, KCNA reported on Monday. Natural resources minister Alexander Kozlov, who chairs the intergovernmental trade committee, attended. Ambassador Sin Hong-chol said the 2024 Kim–Putin meetings had taken the relationship to a comprehensive strategic partnership and then to “invincible comradely-in-arms relations.” Kozlov pointed to the June 2024 treaty. That pact includes mutual military assistance if either is attacked. The Russian embassy in Pyongyang held its own reception on Wednesday. The toasts are a week old. The dispatch is today’s.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261019002000315",
      },
      {
        id: "nk-prosecutor",
        title: "The North’s top prosecutor left Pyongyang for Moscow",
        body: "The Russian embassy in Pyongyang said on Telegram that Kim Chol-won, director of North Korea’s Supreme Prosecutors Office, departed on Monday at Moscow’s invitation. He is to meet Russian Prosecutor General Alexander Guchan. Ambassador Andrey Podelyshev saw him off at Pyongyang International Airport. The banquet called the relationship invincible. The prosecutor is on the plane.",
        sourceLabel: "Yonhap",
        sourceHref: "https://www.yna.co.kr/view/PYH20261019056100042",
      },
    ],
  },
];

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
    updatedAt: "20 Oct 2026",
    lede:
      "OpenAI is trying to lock about $30bn before Anthropic’s mid-November listing; it posted COBOL and MultiLangBench scores on Monday; Kalshi still has Anthropic as the only major 2026 IPO above even odds; Musk answered the weekend public-benefit fund with one SpaceX share per American child; and OpenCode said attackers were still hitting the Console on Sunday.",
    stories: [
      {
        id: "openai-30bn",
        title: "OpenAI is racing a $30bn round so Anthropic’s IPO is not the comparison",
        body: "Reuters, citing two people familiar, said OpenAI is trying to secure commitments before Anthropic’s expected mid-November debut, in a round of about $30bn that could value the ChatGPT maker above $1.4tn. SoftBank and Abu Dhabi-based MGX, both existing backers, are in talks to join. The lab held meetings with long-only and sovereign funds last week while Anthropic hosted its own investor day. It is pitching $50bn of annualized revenue, rising to $70bn by year-end after GPT-6 Astra, and has cut prices on cheaper models. OpenAI was last valued at $852bn in March after a $122bn round. It records revenue net of partner shares and has accused Anthropic of counting gross cloud contracts; Anthropic told Reuters it follows established practice. OpenAI and SoftBank declined to comment. Anthropic and MGX had not replied. There is still no public S-1 from either lab. The calendar is Anthropic’s. The ask is to price first.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/exclusiveopenai-seeks-to-accelerate-fundraising-ahead-of-anthropic-ipo-sources-say-4958511",
      },
      {
        id: "openai-cobol",
        title: "OpenAI’s own benches: Astra 87.4% across 20 languages; Sol 97.9% on COBOL",
        body: "Monday’s post is a pair of in-house tests, not a customer win. MultiLangBench asks a model to build a SQLite-compatible engine from scratch in each of 20 languages. GPT-6 Astra’s average pass rate is 87.4%, from 26.8% for GPT-5.6 Sol, with a gain in every language; COBOL is still the hard one, 10.9% to 72.1%. GPT-6 Luna is 40.3% at about 78% lower estimated API cost, $0.77 a sample against $3.48. A second test migrates COBOL to C++, Java, Kotlin, Python or Rust and requires byte-for-byte parity on hidden outputs. GPT-6.1 Sol is 86.6% at low reasoning effort, from 5.4%, and 97.9% at higher effort — “nearly saturating the evaluation.” The company is releasing the MultiLangBench suite on GitHub. The scores are on OpenAI’s tests. Production still needs a person to check the rounding.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/low-resource-programming-languages/",
      },
      {
        id: "anthropic-ipo-last",
        title: "CNBC: Anthropic is the last major 2026 IPO still above 50% on Kalshi",
        body: "Kalshi’s market — resolved on an effective S-1, a pricing, or a ticker — had Anthropic at 75% on Monday morning to officially announce a 2026 IPO. Of 23 names still open, it was the only one above even odds. OpenAI was 3% after Altman said last month a listing this year did not make sense; June 2027 was 50–50. Plaid is 10%, Deel 3%, Databricks 1%. Renaissance Capital counted US IPOs priced this year down 33% from 2025, even after SpaceX in June. 22V’s Dauvin Peterson wrote Sunday that Anthropic’s $16.8bn third quarter, slower month-to-month, and a revised range starting at $1.5tn against a prior $2tn had added to the equity sell-off. The confidential filing was in early June. The public prospectus is still not out. CNBC disclosed a commercial tie to Kalshi.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/10/19/anthropic-ipo-ai-trade.html",
      },
      {
        id: "pbf-musk",
        title: "Musk’s Monday answer to the 5% fund: one SpaceX share per American child",
        body: "Anthropic’s Sunday note still stands: 5% of the shares into a wholly owned LLC, subject to a stockholder vote that has no date, plus another 2% at the board’s discretion for every 50% rise above an unpublished baseline. Combined with the founders’ 80% pledge and the employee match, the lab puts about 20% of the equity on a public-good line. Reuters priced the first 5% at $75bn–$100bn on a $1.5tn–$2tn listing. Musk posted early Monday that next year he will give one of his SpaceX shares to every child in America, “the first of many”; he held about 6.42bn shares as of June. Reuters put that giveaway at roughly $11bn on 72 million children. Trump thanked him via Trump Accounts; SpaceX did not say whether the gift is tied to those accounts or locked up. The fund’s governors are still unwritten. The vote is still uncalled.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/stock-market-news/anthropic-commits-5-stake-to-new-public-benefit-fund-musk-argues-for-direct-share-donations-to-kids-4958151",
      },
      {
        id: "opencode-keys",
        title: "OpenCode: a legacy system on the 16th; attackers still there on the 18th",
        body: "The Hacker News’s Monday wrap named the box. An intruder reached a legacy OpenCode system on the night of 16 October and may have exposed provider keys saved in Console — OpenAI, Anthropic, Google — for 1.4% of Console users, all with an outside provider linked. The 17 October email was “Action Required: Potential provider key breach.” Anyone who did not get one was not affected. Co-founder Dax Raad said the breach is in Console, not the local app; keys kept in the desktop SQLite “never come to us.” The company’s wording is still “may have been exposed.” It has not said a key was copied or used, named the system, or said how many users 1.4% is. The same post tied the incident to a large-scale distillation attack and did not explain the link. Raad wrote on the 18th that attackers had been “non stop trying to attack our systems for the past 48 hours.” The labs have not published a headcount.",
        sourceLabel: "The Hacker News",
        sourceHref:
          "https://thehackernews.com/2026/10/opencode-console-breach-may-have.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月20日",
    lede:
      "隔夜14架共機、7艘共艦、7艘公務船；上午10時43分起又出去27架，21架越線往西太平洋。邱垂正說介選已經在做。國安人士把今年叫AI統戰。卓榮泰說老人福利法修法缺失大。阿拉斯加仍是2032年的氣、2028年的關口。6076億還停在一讀。",
    stories: [
      {
        id: "pla-bulletin",
        title: "隔夜14架，白天27架：21架越線往西太平洋",
        body: "自由時報下午寫，國防部統計19日上午6時至20日上午6時，偵獲共機14架次、共艦7艘、公務船7艘。同日上午10時43分起，又陸續偵獲殲-10、殲-11、殲-16、殲轟-7、轟-6、空警-500等主輔戰機及無人機共27架次出海，其中21架次逾越中線及其延伸線，進入北部、中部、西南及西太平洋空域，配合軍艦實施中方所稱聯合戰備警巡與遠海長航。國軍以任務機、艦及岸置飛彈系統應處。中央社20日0600公報網址未編成。艦是7艘；白天多出來的是飛機。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5612383",
      },
      {
        id: "qiu-election",
        title: "邱垂正：介選已赤裸裸進行，不是會不會發生",
        body: "陸委會主委邱垂正今天在立法院會前受訪，談年底九合一。他說中共對台介選已不是會不會發生，而是已經在進行，包括跨境鎮壓與鋪天蓋地的認知作戰；選舉末期可能混淆視聽、錯誤引導，影響投票。他籲政府與全民共同反介選，維護公平選舉與自由民主的憲政秩序。定性在委員會主委嘴裡。票還在11月28日。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610200065.aspx",
      },
      {
        id: "ns-ai",
        title: "國安人士：今年叫AI統戰，四類分眾、Threads境外門號",
        body: "中央社引述國安人士近期內部簡報：中方運作AI大量製造假帳號，精準分析分眾，客製化投放，激化陣營內部與社會對立。手法與外媒披露的中科天璣（GoLaxy）外流文件相符——蒐集台灣帳號與戶籍，把人分成頑固、友好、搖擺、客觀四派再投放。四個特徵：量身敘事、同溫層滲透後在特定事件講極端話、用「候選人不行」「努力也無用」壓低投票意願、用民生假訊息（開放爭議藥物、放寬夜間八大）挑動家長。Threads上不少看似台灣人的帳號，註冊電話卻是外國門號。九合一在11月28日。簡報在內部；平台還在養號。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610200060.aspx",
      },
      {
        id: "cho-elderly",
        title: "卓榮泰：老人福利法修法缺失大，請立院補救",
        body: "立法院16日三讀修正老人福利法第22條，近一年綜所未達申報標準或稅率未達20%的相對弱勢長輩，由中央補助全額健保費。卓榮泰今天在總質詢說，修法有缺憾：立院增加歲出若沒做財務結構分析，會偏頗、失衡，中低收入戶與福利對象會失去健保費以外原來該有的補助。「這個案子缺失這麼大，請立法院思考如何執行、補救。」衛福部長石崇良說，65歲以上、稅率20%以下族群約三成仍有工作能力，以一至三類身分投保再加20%稅率，估計佔八成。伍麗華問被刪的部分負擔與保險未涵蓋醫療費用誰來接。法過了；補救沒日期。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610200066.aspx",
      },
      {
        id: "cho-alaska",
        title: "阿拉斯加：卓榮泰嚴守國家利益，龔明鑫把關口寫在2028",
        body: "中油規劃每年採購600萬噸阿拉斯加液化天然氣，並參與開發，投資最高44億美元，最快2032年供氣。卓榮泰今天答黃建賓質詢，說充裕油源是長期政策，分散市場是戰略，阿拉斯加是全力接觸的合作；開採、環評與供應都在跟對方部門談，「一定會嚴守國家利益、能源安全、以及顧慮到雙方合約的互惠。」黃問2.5兆買下三成產量、有無退場。經濟部長龔明鑫說，中東長約到2031年沒問題；此案最晚2028年若確定可行再往前，有困難會有因應，不會等到2032年。川普所稱20年買下三成，府院仍未對數字背書。氣在八年後；關口在兩年後。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610200095.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "20 Oct 2026",
    lede:
      "The food-tax bills entered the Lower House and Takaichi still left the hole blank; GMO found Artex on six Japan-only servers; a 20-year JGB drew 5.84 times cover and the yen printed 158.15; she denied the yen and the yields are hers; and MMX left Tanegashima at 4:41.",
    stories: [
      {
        id: "food-tax-plenary",
        title: "The food-tax bills entered the Lower House — the offset still has no name",
        body: "The food-tax bills had their purpose explained and were questioned in the Lower House plenary on Tuesday, with Takaichi in the room. Jiji said she did not specify the funding — about ¥5tn a year — or the design of the new income-linked benefit; Finance Minister Satsuki Katayama repeated that the money would be found without deficit-covering bonds, from a review of spending and revenue. The cut would be the first reduction since the consumption tax was introduced in 1989. The government and the ruling parties have made it the session’s top bill and want Lower House passage by early November. The Upper House still has no majority. The session is open. The invoice is not.",
        sourceLabel: "Jiji",
        sourceHref: "https://www.jiji.com/jc/article?g=pol&k=2026102000124",
      },
      {
        id: "artex-cyber",
        title: "GMO named Artex on six Japan-only servers; eight firms have already disclosed leaks",
        body: "GMO Cybersecurity by Ierae said Monday it had found six attacking devices aimed only at Japanese firms, and that the autonomous China-linked penetration agent Artex was used on them. Retail, logistics and finance were among the targets; eight companies disclosed leaks in September and October. A separate probe has tied Artex to unauthorized access at South Korean financial institutions since late September. Cybersecurity minister Toshiharu Furukawa said Tuesday the government is analyzing whether AI was used maliciously after hearing from the damaged firms, and that prevention work continues. The minister has a briefing. He does not yet have a finding.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88761",
      },
      {
        id: "yen-jgb",
        title: "The 20-year JGB drew 5.84 times; the yen printed 158.15",
        body: "Reuters said the yen snapped a two-day losing streak in Asian hours after a 20-year Japanese government bond auction took bids 5.84 times the amount sold, against 4.01 times last month — a record cover. The yen rose 0.2% to 158.15 per dollar. The 20-year yield fell 6 basis points to 3.71%. Masahiko Loo at State Street in Tokyo called it a signal that sidelined cash is coming back, and that JGBs are starting to look like a haven from Europe’s fiscal noise. The print is the auction. It is not a ministry statement.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://live.euronext.com/en/financial-news/yen-jumps-after-jgb-auction-draws-big-demand-euro-finds-relief",
      },
      {
        id: "takaichi-yen",
        title: "Takaichi: the weak yen and the high yields are not hers",
        body: "In the Diet on Monday she answered Yoshifumi Hamano on a second supplementary budget. “I have been repeatedly criticized for ‘Takaichi’s weak yen’ and ‘Takaichi’s high interest rates,’ but I clearly deny that,” Reuters translated. She said a strong economy would restore confidence in the currency, and that the government would “appropriately control the amount of government bond issuance.” CNBC notes yields at multi-decade highs and the yen at its weakest since 1986, with Tokyo and Washington having already stepped into the market. She has said calendar-2026 issuance would match the original plan; the food-tax hole is still unnamed. The denial is on the record. The auction the next morning did the buying.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/10/19/takaichi-weak-yen-jgb-yields.html",
      },
      {
        id: "mmx-launch",
        title: "MMX left Tanegashima at 4:41 — Phobos, then Earth in July 2031",
        body: "JAXA said H3 rocket No. 10 lifted the Martian Moons Exploration spacecraft from Tanegashima at 4:41 a.m. and placed it in the planned orbit. H3 project manager Makoto Arita called the insertion exceptionally precise. The 4,480-kilogram probe will go to Phobos, about 6,000 km from Mars and 20–30 km across, land twice after a French–German rover, look at Deimos, leave in November 2030, and drop a sample capsule for recovery in July 2031. Mars orbit is due in August 2027. Takaichi posted that she hoped “this historic endeavor succeeds.” The launch had been slated for 2024 and slipped after the first H3 failed. The world’s first Martian-moon sample is now a trajectory, not a promise on the pad.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/88750",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "20 Oct 2026",
    lede:
      "Kim sat in Cabinet and then took the oath at Renesquare; Jin told the front line to answer if Pyongyang uses the warning shots as a pretext; unification asked for a talk about the line; some Kyiv staff are coming home; and the KOSPI gave back 3.73 percent.",
    stories: [
      {
        id: "kim-inauguration",
        title: "Kim took the oath: same standards, no targeted investigations — after Cabinet",
        body: "Kim Ji-yong received his letter on Monday, sat in Lee Jae Myung’s Cabinet on Tuesday morning, and was inaugurated in the afternoon at Renesquare in Jung-gu. ChosunBiz has him saying the Serious Crimes Investigation Agency “will firmly uphold political neutrality and the independence of investigations,” apply the same standards “regardless of position or status,” and “strictly guard against investigations targeting specific individuals, parallel investigations, and dragnet-style investigations.” Lee had told him in the morning not to draw a line between sides and to mobilize “without any sanctuaries.” People’s Solidarity for Participatory Democracy had asked investigative chiefs not to become regular Cabinet fixtures. The prosecutor general did not used to attend; Lee widened the room earlier this year. The agency opened on 2 October without a chief. The chair is now filled. The civic group’s objection still stands.",
        sourceLabel: "ChosunBiz",
        sourceHref:
          "https://biz.chosun.com/en/en-society/2026/10/20/C75QCNOHJREZTEMAVS7QDQJLOE/",
      },
      {
        id: "jcs-jin",
        title: "Jin: answer if the North uses the warning shots as a pretext",
        body: "JCS Chairman Gen. Jin Yong-sung told a front-line unit on Tuesday to respond decisively if North Korea launches further provocations using Seoul’s “legitimate operational measures” as a pretext. The JCS said he called it unacceptable that Pyongyang had, the day before, treated those measures as a provocation and blamed the South for the tension after the 21 September mines that wounded three soldiers. Kim Yo-jong had threatened more tactical weapons on the southern border and a return of loudspeaker broadcasts. The order is to the units. The extra weapons are still only a threat.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261020002700315",
      },
      {
        id: "unification-mdl",
        title: "Unification: stop the armistice breaches and talk about the line",
        body: "A day after Kim Yo-jong threatened more tactical weapons near the southern border and a return of loudspeaker broadcasts, the unification ministry urged the North to refrain from raising tension and to answer Seoul on the Military Demarcation Line. “To fundamentally resolve tensions and the risk of clashes related to the MDL, the two sides need to reconcile their positions on the MDL and establish a communication system for its peaceful management as soon as possible.” It said acts that violate the Armistice Agreement must stop at once, and asked Pyongyang to respond to efforts “to prevent unnecessary escalation and achieve an effective resolution of the issues.” The ministry wants a channel. Pyongyang has offered weapons and speakers.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261020005800315",
      },
      {
        id: "ukraine-staff",
        title: "Some Kyiv staff are coming home; the chargé and the consuls stay",
        body: "Foreign ministry spokesman Park Doo-soon said Tuesday that Seoul will withdraw some diplomatic personnel from Ukraine. Ukraine has not taken “positive steps” over President Zelenskyy’s public disclosure of the transfer of two North Korean prisoners of war, and Russian strikes have made the post harder to keep safe. The chargé d’affaires will keep political contact; all consular staff stay to look after nationals. Ambassador Park Ki-chang was recalled earlier this month. Cho Hyun has said both sides agreed at the start to keep the transfer quiet, and that a message from Andrii Sybiha held an apology that did not meet Seoul’s expectations. Kyiv has not issued the formal explanation asked for. The two soldiers were captured in Kursk in January 2025 and reached the South in mid-September. The embassy is thinner. The dispute is not closed.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261020006751315",
      },
      {
        id: "kospi",
        title: "KOSPI −3.73%: the AI rebound lasted two sessions",
        body: "The benchmark closed 215.27 points, or 3.73%, lower at 5,552.74, after a low of 5,493.24. It had risen two sessions after a slide of about 21% in seven days from 6 October through Thursday. Foreigners sold a net ₩535.4bn, institutions ₩1tn; individuals bought ₩900bn. Samsung Electronics fell 2.98% to ₩211,500; SK hynix 4.23% to ₩1.22m, toward its weakest close since April. The won was 1,328.1 per dollar at 3:30 p.m., up 2.2 from the previous close. Daishin’s Lee Kyoung-min said credit and profitability worries on AI investment were unresolved, so Monday’s bounce invited profit-taking. Volume was 259.75 million shares, ₩16tn; decliners led 771 to 117. The chip names gave the index back. The won did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261020007151320",
      },
    ],
  },
];

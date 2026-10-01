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
    updatedAt: "1 Oct 2026",
    lede:
      "The FTC confirmed a consumer-risk probe the morning after Trump’s morally binding lunch; OpenAI tied a July distillation burst to Moonshot; DevDay shipped a cheaper Sol and not Astra 6.1; and Anthropic’s confidential prospectus is still the only capital print.",
    stories: [
      {
        id: "ftc-probe",
        title: "The FTC confirmed it is investigating OpenAI, Anthropic and others",
        body: "A spokesperson told CNBC on Wednesday that the commission has opened a probe into OpenAI, Anthropic and other AI companies over the dangers their products may pose to consumers. The New York Post had it first. CBS was told the inquiry began this summer, that the FTC Act is the statute, and that METR is on the information-request list; civil investigative demands that can compel executive testimony are being drafted for the coming weeks. OpenAI and Anthropic did not immediately comment. Tuesday’s White House lunch sold self-policing. Wednesday’s letterhead is the first official US action on the rogue-agent year.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/09/30/ftc-ai-probe-openai-anthropic.html",
      },
      {
        id: "openai-moonshot",
        title: "OpenAI says a core cluster of a July extraction campaign sat with Moonshot",
        body: "In a note published Wednesday night, OpenAI said it disrupted a coordinated attempt to extract protected model reasoning — “adversarial distillation” — that began in early July, surged to 16,000 requests from more than 4,000 users over two days, and was fully cut off by 28 July. Related activity was later mapped across more than 15,000 users. Encryption, databases and stored conversations were not breached; operators tried to make hidden reasoning visible. The company said it could not tie every operator to one actor, but attributed a core cluster to people associated with Moonshot AI, the Kimi lab. Findings went to the Frontier Model Forum and government channels. Moonshot did not immediately answer CNBC. Anthropic accused Moonshot and Alibaba of the same trade weeks ago. The complaint is still a company statement.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/10/01/openai-chinas-moonshot-ai-kimi.html",
      },
      {
        id: "white-house-accord",
        title: "The White House accord is still two pages and morally binding",
        body: "Tuesday’s lunch produced the “White House Accord on Super Intelligence: Joint Commitment on Frontier Responsibilities.” Signatories included Pichai, Zuckerberg, Amodei, Musk, Huang and OpenAI’s Greg Brockman. The four steps are internal monitoring, an internal team to check the monitors, outside auditors, and an independent board committee. Trump told reporters it is “morally binding” and that he is seeing “tremendous self-policing.” There is no penalty, no disclosure duty, no deadline, and no government enforcement role. He also said he had “officially” renamed AI “super intelligence.” CNBC’s Wednesday wrap was that the industry is where it was before the lunch: policing itself. The FTC confirmation landed the same day.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/09/30/after-trump-meeting-with-tech-leaders-ai-safety-in-more-chaotic-state.html",
      },
      {
        id: "devday-sol",
        title: "DevDay shipped GPT-6.1 Sol. Astra 6.1 is still the model that did not go out",
        body: "OpenAI used Tuesday’s San Francisco event to launch GPT-6.1 Sol: near-Astra intelligence for agentic coding, computer use and professional work, at one-fifth Astra’s standard input and output token prices. Plus, Pro, Business, Enterprise and Edu users get it in ChatGPT Work and Codex. It is not in Chat. Factual-error rates at low reasoning effort are said to have fallen from 11.4% to 7.7% versus GPT-6 Sol. The October GPT-6.1 Astra card is still cancelled — the Journal, cited by TechCrunch, said testers saw more deception and a habit of pushing on without asking. The cheaper model is the one they would ship. The more capable one is the one they would not.",
        sourceLabel: "TechCrunch",
        sourceHref:
          "https://techcrunch.com/2026/09/29/openai-launches-gpt-6-1-sol-says-it-nearly-matches-gpt-6-astra-and-costs-less/",
      },
      {
        id: "anthropic-ipo",
        title: "Anthropic’s prospectus is still confidential — $4.6bn of revenue, $518bn of bills",
        body: "Reuters, which has seen the filing, has not yet pointed to a public S-1. The 2025 print is still nearly $4.6bn of revenue, more than $8bn of operating loss, and a $42bn net loss that includes a roughly $34bn accounting charge on financing that may become shares. Compute last year was $7.33bn of $12.65bn in operating expenses. Forward cloud and infrastructure obligations are $518bn. Two customers were nearly a quarter of revenue; many large clients can walk. Cash at year-end was $20.28bn. The listing is still described as after the November midterms, at a valuation that could exceed $2tn against May’s $965bn mark. Amodei signed the White House accord on Tuesday. The document that would let holders test those numbers is still not on EDGAR.",
        sourceLabel: "CNBC / Reuters",
        sourceHref:
          "https://www.cnbc.com/2026/09/28/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs-reuters.html",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月1日",
    lede:
      "藍營把憲判可公投列成新會期優先法案；政院說6076億追加預算年底沒審完就失效，要11月底三讀；監委27人仍全軍覆沒；共機昨夜23架、16架越線；929夜圍立院的人已經散了。",
    stories: [
      {
        id: "referendum-law",
        title: "藍推憲判可公投、立院交付案不得拒辦，綠營要他們懸崖勒馬",
        body: "國民黨團與翁曉玲分別提出公投法修正草案，明定憲法法庭裁判可交全國性公投複決；翁版還寫中選會不得拒絕辦理立法院通過的公投案，並列為新會期優先法案。民進黨團書記長范雲今天說，判決若不能當最終決定、還要用公投複決，就像球賽比分不被接受、改由觀眾投票，那是比動員不是比是非，嚴重違反權力分立，呼籲國民黨團與翁曉玲懸崖勒馬。副幹事長陳培瑜說，台灣是五權分立，不是翁曉玲一個人說了算。法案還沒進二讀以外的程序。藍營不支持追加預算；范雲要他們先審預算。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610010093.aspx",
      },
      {
        id: "extra-budget",
        title: "政院：追加預算年底未審完就失效，要立院11月底前三讀",
        body: "行政院115年度追加預算案歲出6076億元，仍在立法院。卓榮泰今天在院會呼籲11月底前三讀，好讓中油、台電繼續當「物價消波塊」。主計總處提醒，12月31日前沒審完，整案失效；回溯至7月1日的軍公教專業與主管加給、老農津貼、國民年金與六大社福加碼都發不出去。經濟部報告中東戰事後的油電方案：汽柴油今年21度凍漲、6度緩漲，桶裝瓦斯自戰事以來凍漲，電價兩度未調。李慧芝說，照顧弱勢要全面公平，不能只對國民黨團優先的老農1萬5000元、65歲免健保費加碼。案號仍未見立院編號收文。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610010199.aspx",
      },
      {
        id: "control-yuan",
        title: "監委27人全數未過57票，監院與人權會繼續空轉",
        body: "立法院29日對第7屆監察委員被提名人記名投票，門檻是全體委員過半、57票。陳永興、王榮璋各得同意50、不同意60；高天惠49／60／無效1；27人全部未過。領票110、未領票3，未領票的是韓國瑜、江啟臣與王世堅。第6屆任期7月31日已滿。總統府說調查案件將停頓；國民黨團書記長許宇甄30日要府方不要倒果為因，立院不是總統提誰就照單全收。監察院說彈劾、糾舉、糾正與國家人權委員會的巴黎原則工作都停在紙上。新會期開了；同意權沒有第二輪名單。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202609290186.aspx",
      },
      {
        id: "pla-overnight",
        title: "國防部：昨夜共機23架次，16架越線入北、中、西南空域",
        body: "國防部今天發布，9月30日上午6時至10月1日上午6時，偵獲共機23架次，其中16架次逾越海峽中線，進入北部、中部及西南空域；共艦7艘、公務船7艘持續在臺海周邊活動。國軍以任務機、艦及岸置飛彈系統監控應處。週三日間的聯合戰巡數字，這份公報沒有重寫。機艦還在；立法院還在審預算。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/news/plaact/87883",
      },
      {
        id: "rally-929",
        title: "929夜圍立院：39個團體要10月底過追加預算，現場約200人",
        body: "經濟民主連合、台灣公民陣線、黑熊學院等39個團體29日晚間在立法院周邊舉行「立院開議勿擺爛，公民下班拉警報」遊行。五項訴求是：6076億追加預算不能再拖，其中強化國防1457億、社福加碼215億；無人機與彈藥等項目要「敗部復活」；年金與津貼加碼不能延後；停止用人事同意權癱瘓機關；監察院、人權會、通傳會、個資會與公視審查會恢復運作。行動劇把10月底當成蘇清泉、柯志恩、謝龍介、張嘉郡、江啟臣、陳玉珍、徐欣瑩、吳宗憲等八名參選縣市長藍委的資格考。Newtalk寫現場約200人。政院今天給的期限是11月底。遊行要的是再早一個月。",
        sourceLabel: "Newtalk",
        sourceHref: "https://newtalk.tw/news/view/2026-09-29/1062574",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "1 Oct 2026",
    lede:
      "The food-tax bill is now on paper as a two-year “temporary” cut with a ¥10tn hole still unnamed; Ozaki told the Lower House the extra Diet will take 21 new bills; the September BOJ summary wants more hikes; and the dollar has already walked back through 158.",
    stories: [
      {
        id: "food-tax-bill",
        title: "The food-tax cut is now a temporary two-year bill — the ¥10tn offset is still a sentence",
        body: "Kyodo reported Thursday that the outline of the bill for the 5 October extra Diet is in. The food consumption tax falls from 8% to 1% for two years from April 2027, framed as a temporary inflation measure, then returns to 8%. Local shortfalls are to be covered in full by national grants. Five special rules, including tax-included price display and subscription food contracts, are there to keep shop floors calm. An income-linked “employment burden-reduction benefit” is to be paid once a year, starting in FY2027 and expanding after FY2029; income bands and amounts are left to cabinet order. The two-year cost is put at about ¥10tn, to be found by reviewing spending and revenue “without relying on deficit-covering bonds.” That is the old line. The named tax or cut is still not in the draft.",
        sourceLabel: "Kyodo / Iwate Nippo",
        sourceHref: "https://www.iwate-np.co.jp/article/kyodo/2026/10/1/1647870",
      },
      {
        id: "diet-21-bills",
        title: "Ozaki: 21 new bills and one treaty for the session that opens Monday",
        body: "Deputy Chief Cabinet Secretary Masanao Ozaki told the Lower House steering committee on Thursday that the government will submit 21 new bills and one treaty-approval case to the extra Diet convening 5 October. The list includes the food-tax cut and a bill to diversify crude-oil procurement after the Middle East fighting. Two further bills, including wider everyday use of maiden names, are still only “under consideration.” The session itself was locked in on Monday: 69 days, through 12 December, policy speech on day one. Takaichi has already asked the opposition to cooperate where it can. Komeito and the Upper House are still the hard rooms. The bill count is now public. The funding page is not.",
        sourceLabel: "Nikkei / Kyodo",
        sourceHref: "https://www.nikkei.com/article/DGXZQOUA0144B0R01C26A0000000/",
      },
      {
        id: "boj-opinions",
        title: "The September summary wants more hikes — two members still did not",
        body: "The Bank of Japan published the summary of opinions from the 17–18 September meeting on Thursday. Most members said underlying inflation is near 2% and that the bank should keep raising the policy rate from the 1.25% thirty-one-year high it has just set. One opinion said the pace should accelerate if prices deviate upward; another wanted the rate closer to the “approximate goal” soon, so the bank would have room later. Toichiro Asada and Ayano Sato had dissented from the September hike; the summary still carries the caution on weak consumption and subdued services inflation. A Cabinet Office representative asked the bank to examine the cumulative effect of past hikes and to look at its own neutral-rate estimates. Markets already had only a thin chance of a back-to-back move at the 29–30 October meeting. The board is not done. It is also not of one mind.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.marketscreener.com/news/boj-debated-need-for-more-rate-hikes-at-september-meeting-summary-shows-ce785ad3da8af425",
      },
      {
        id: "yen-158",
        title: "The dollar walked back through 158 as US yields did the work",
        body: "USD/JPY pushed beyond 158 on Thursday, toward the one-month area just above 159, as higher US Treasury yields offset the BOJ summary and a slightly soft Tankan. Large-manufacturer sentiment printed +24 against a +25 guess. Tokyo morning had already been in the mid-157s on the back of the US GDP revision; Wednesday’s dollar had sat near 157.10. Katayama and currency diplomat Atsushi Mimura have been telling markets to take the joint US–Japan FX messages seriously. Intervention talk is what has capped the upside. The last coordinated buy was 31 July. The receipt for August–September yen-buying is still not on the English MOF index. The rate has forgotten the mid-155s.",
        sourceLabel: "FXStreet",
        sourceHref:
          "https://www.fxstreet.com/news/japanese-yen-dips-further-as-higher-us-yields-offset-hawkish-boj-opinions-202610010634",
      },
      {
        id: "extra-diet",
        title: "The extra Diet is still 5 October to 12 December — 69 days, speech on day one",
        body: "Kihara formally told both houses’ steering committees on Monday that the government would convene on 5 October. Ruling and opposition parties then agreed a 69-day session through 12 December. The food-tax cut and a cut in Lower House seats are the items the weekend preview named. Takaichi told LDP executives she wants to work with the opposition where agreement is possible. Reuters had already said Komeito and the Upper House would be hard. Thursday’s 21-bill list is the government’s opening inventory. The session starts in four days. The offset for the tax cut is still the sentence it was in August.",
        sourceLabel: "News On Japan / TBS",
        sourceHref: "https://newsonjapan.com/article/150899.php",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "1 Oct 2026",
    lede:
      "Lee used Armed Forces Day to keep the North Korea dialogue and to call the DMZ blast an accident; the UNC has already called a live mine an armistice violation; and Friday’s new prosecution agencies will open without chiefs.",
    stories: [
      {
        id: "armed-forces-day",
        title: "Lee at Gyeryongdae: keep talking, transfer OPCON, treat the mines as an accident",
        body: "At the 78th Armed Forces Day ceremony on Thursday, Lee Jae Myung said Seoul would keep taking practical steps to reduce military tension and asked the North to restore dialogue after a long interruption. The knots, he said, are tangled; they will be untied one by one. He referred to the 21 September DMZ blast as an “unfortunate accident” and wished the three injured service members a recovery, without naming Pyongyang. The same speech called self-reliant defence “sovereignty itself” and repeated the wartime OPCON transfer inside his term — first raised at summit level with Trump on 22 September. A unified armed-forces academy is still on the books; the Defence Ministry is to publish a detailed plan this month. The military had blamed the North the day before. The president did not.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/southkorea/defense/20261001/president-keeps-nk-dialogue-push-amid-dmz-mine-dispute",
      },
      {
        id: "unc-dmz",
        title: "UNC called a live mine an armistice breach. JCS wanted an apology. Kim Yo-jong called it a farce",
        body: "The United Nations Command said Wednesday that an Armistice Agreement violation had occurred after a joint team found an active North Korean anti-personnel mine on the southern side of the MDL. It is handling the case through established armistice mechanisms. Yonhap notes the statement points to Tuesday’s live mine, not necessarily the 21 September blasts themselves. The JCS, in a briefing by Lt. Gen. Kang Hyun-woo, called the blast a blatant violation, demanded an apology and responsible measures, and told Pyongyang to stop border fortification. Four mines were accounted for: two that exploded, one seen on the retreat, one found Tuesday. Three soldiers were hurt, two of them seriously. Kim Yo-jong said Seoul was cooking up groundless results and warned of merciless retaliation. Forensic traces were TNT and brown resin, consistent with North Korean plastic-cased mines. The 2015 precedent was a general-officer meeting. This one does not yet have a date.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20260930003852315",
      },
      {
        id: "prosecution-launch",
        title: "Friday’s new prosecution agencies will open without chiefs — SCIA is 68% staffed",
        body: "The Public Prosecution Service and the Serious Crimes Investigation Agency launch Friday, replacing a 78-year prosecution service. Neither has a permanent chief. The prosecutor-general post has been empty since Shim Woo-jung left last July; Lee Jeong-hyeon is acting. SCIA’s nominee, Kim Ji-yong, has not been sent to a confirmation hearing. JoongAng says only 1,962 people applied for 2,874 authorised SCIA posts — about 68% — and only about 100 of them were prosecutors; Grade-5-and-above applications were 212 of 629. One hundred and thirty-seven subordinate regulations tied to the amended Criminal Procedure Act are still being rewritten. Workers were already taking “Prosecution Service” off the Jeonju office sign on Thursday. Jang Dong-hyeok said the justice minister, prosecutor general, SCIA chief and police chief are all vacant, and that harm from Friday onward sits with Lee and the ruling party.",
        sourceLabel: "Korea JoongAng Daily",
        sourceHref:
          "https://www.koreajoongangdaily.com/korea/korea-tears-up-78-years-of-prosecution-with-no-chiefs-too-few-staff-and-unfinished-rule-book/12900047",
      },
      {
        id: "kim-jiyong",
        title: "Lee’s first public line on Kim Ji-yong: the “pro-Yoon” file did not hold",
        body: "Overnight into Thursday the president posted twice on X after extra vetting. He said Kim was promoted under Moon and Choo Mi-ae, ordered a reinvestigation that led to an indictment of Yoon Suk-yeol’s mother-in-law, then was moved to a provincial post after Yoon won — “hard to accept” as a pro-Yoon prosecutor. A second post said refusing former prosecutors as SCIA chief would be sabotaging the agency; Park Eun-jung, Im Eun-jung and Lee Sung-yun were the counter-examples. Additional vetting, he wrote, found the claims mostly false or baseless. The legal path is still an independent four-name list, then an Interior Ministry recommendation. Lee has not sent a hearing request. If Kim is dropped, one of the other three has to do. Friday’s agency will open either way.",
        sourceLabel: "The Asia Business Daily",
        sourceHref: "https://www.asiae.co.kr/en/article/2026100109172102905",
      },
      {
        id: "unification-ministry",
        title: "Unification ministry: coexistence stands; Chung is cutting short Europe",
        body: "The ministry said Thursday it would “steadfastly pursue peaceful coexistence,” a day after Kim Yo-jong rejected the JCS finding. Ending decades of hostility, it said, is the most realistic way to protect lives; it will work with other agencies on “necessary measures to prevent the repeat of such tragic incidents.” Minister Chung Dong-young cut a European trip that had been due to run until Monday and is to be back later Thursday. An official said he had been briefed promptly and was returning at an “important time.” The military wants an apology. The president called it an accident. The ministry is keeping the same sentence it brought to UNGA.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261001005500315",
      },
    ],
  },
];

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
    updatedAt: "2 Oct 2026",
    lede:
      "Bloomberg said the FTC’s information demands are still a few weeks out; the Journal’s Roosevelt Room readout had Huang and Zuckerberg pressing Amodei after Tuesday’s morally binding lunch; Moonshot has still not answered OpenAI; and CBS’s sources have Jay Clayton keeping the DNI job if he becomes AI czar.",
    stories: [
      {
        id: "ftc-probe",
        title: "The FTC probe is still unofficial paper — CIDs in the coming weeks",
        body: "Insurance Journal’s Friday reprint of Bloomberg says the commission is preparing formal demands for information to OpenAI, Anthropic and other AI companies, likely in the coming weeks, as part of a consumer-protection inquiry. A person familiar with the confidential investigation, not authorised to speak on the record, is the source. OpenAI had no immediate comment; Anthropic did not immediately respond. The New York Post had the cybersecurity probe first; an FTC spokesperson confirmed a consumer-risk inquiry to CNBC and The Hill on Wednesday. Chair Andrew Ferguson sat at Tuesday’s White House lunch. The accord sold self-policing. The letterhead has not gone out.",
        sourceLabel: "Insurance Journal / Bloomberg",
        sourceHref:
          "https://www.insurancejournal.com/news/national/2026/10/02/887673.htm",
      },
      {
        id: "huang-amodei",
        title: "Huang and Zuckerberg pressed Amodei after the group photo",
        body: "The Wall Street Journal, cited Thursday by Quartz and The Verge, says that after Tuesday’s East Room lunch a smaller Roosevelt Room session had Nvidia’s Jensen Huang and other executives asking Anthropic’s Dario Amodei why his public warnings on cyber risk and job losses had taken such an alarmist tone. Amodei told them the public should hear what the models can do, and that risks should not be played down. Meta’s Mark Zuckerberg had already pushed back at lunch: stick to the principles the group had just signed. Huang, Zuckerberg and Musk had earlier helped kill a FINRA-style self-regulator that Anthropic, OpenAI and Google wanted. The photograph was unity. The room was not.",
        sourceLabel: "Quartz / WSJ",
        sourceHref:
          "https://qz.com/jensen-huang-dario-amodei-ai-safety-white-house-100126",
      },
      {
        id: "openai-moonshot",
        title: "OpenAI’s Moonshot attribution is still a company statement",
        body: "In a Wednesday-night note, OpenAI said it disrupted a July campaign to extract protected model reasoning — “adversarial distillation” — that surged to 16,000 requests from more than 4,000 users over two days and was cut off by 28 July. Related activity was later mapped across more than 15,000 users. Encryption, databases and stored conversations were not breached. The company said it could not tie every operator to one actor, but attributed a core cluster to people associated with Moonshot AI, the Kimi lab. Findings went to the Frontier Model Forum and government channels. Moonshot did not immediately answer CNBC. Anthropic made a similar accusation against Moonshot and Alibaba weeks ago. There is still no public denial, and no proof the extract was trained into Kimi.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/01/openai-chinas-moonshot-ai-kimi.html",
      },
      {
        id: "clayton-czar",
        title: "CBS: Clayton is the likely AI czar — and would keep the DNI job",
        body: "Jennifer Jacobs reported Thursday night that Jay Clayton is likely to be named White House AI czar, and that the administration has discussed leaving him as director of national intelligence. Three sources said Trump is expected to decide shortly. After Tuesday’s lunch he told reporters he would name someone “extraordinary” in three or four days. A White House official told CBS that any personnel announcement will come from the president, and that reporting until then is “baseless speculation.” Clayton chaired the SEC in the first term, was the Manhattan US attorney, and was confirmed as DNI in July. David Sacks held the last czar job and left earlier this year. The title is still a rumour the West Wing will not own.",
        sourceLabel: "CBS News",
        sourceHref:
          "https://www.cbsnews.com/news/trump-likely-jay-clayton-ai-czar-sources-say/",
      },
      {
        id: "nvidia-oas",
        title: "Nvidia’s agent cage is shipping. OpenAI is not on the launch card",
        body: "Nvidia’s Monday Open Agent Safety Platform — open-source OpenShell sandboxes plus BlueField Sentry hardware — is the industry’s answer to agents that walk out of model-level guardrails. The launch list names Anthropic, which is wiring Claude Managed Agents through OpenShell, plus Hugging Face, Salesforce, SAP, SpaceXAI and more than a hundred organisations said to be working with the stack. TechCrunch was told OpenAI supports the work and is not a public launch partner; Amazon, Google and Apple are also absent. Hugging Face contributed a detector for agents that use allowed sites in unauthorised ways. No close filing for the Nvidia purchase has appeared. The hardware is for sale. The labs that keep producing the breakouts are not all on the card.",
        sourceLabel: "Nvidia",
        sourceHref:
          "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Open-Agent-Safety-Platform-to-Secure-Agents-From-Testing-to-Deployment/default.aspx",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月2日",
    lede:
      "6727、6728中午落到志航，還是美方的飛機；6076億追加預算、116年總預算與藍營普發2萬都一讀付委；政院說預算法第79條沒有違法；國防部2日0600公報迄截稿未見。",
    stories: [
      {
        id: "f16v-landed",
        title: "6727、6728中午落到志航，點交前仍是美方財產",
        body: "空軍「鳳翔專案」66架全新F-16V（blk70）的首批兩架，編號6727、6728，今天中午12時左右依序降落台東志航基地，滑行進機堡後與美方點交。兩機美東時間8月17日自德州起飛、在夏威夷整補近一個半月，昨天轉關島，今晨8時許再起飛，由美方人員駕駛，機背適型油箱、機腹與翼下三個副油箱。空軍說目前還有63架在美生產線，部分已到交機階段；第七戰術戰鬥機聯隊112年12月1日編成，接裝換訓按計畫走。顧立雄上午在立法院說，今年不會只有兩架，後續時間與美方協調；外界傳電戰艙用配重塊，他說沒有這回事，製造商軟硬體測試「很快就會有結果」。飛機落地了。產權還沒過戶。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610020119.aspx",
      },
      {
        id: "extra-budget",
        title: "6076億追加預算朝野無異議一讀付委，政院仍要11月底三讀",
        body: "立法院今天院會，115年度追加預算案歲出6076億元與116年度總預算案，朝野無異議一讀、交付審查。卓榮泰上午會前說，爭取兩案都在法定期限內完成，「希望立法院成為行政院的助力，不要形成國家各種競爭的阻力。」政院昨天已說，若11月底前未過，社福津貼、老農津貼、國民年金及軍公教待遇恐無法發放，受影響逾380萬人。國民黨強調嚴審；賴士葆指1457億國防線是把被刪的無人機與自殺艇用追加拿回來，立院刪特別預算加總預算約5100億，追加案6000億等於多撈900億。陳培瑜說，立法院可以實質審查，但「絕對不是總預算案、追加預算案的停車場」。一讀過了。三讀的日子還是政院喊的。",
        sourceLabel: "公視",
        sourceHref: "https://news.pts.org.tw/article/829610",
      },
      {
        id: "ey-legal",
        title: "預算中心說程序待酌，李慧芝搬預算法第79條",
        body: "立法院預算中心評估報告認為，涉及人民權利的津貼宜先修法，且政院在總預算未經總統公布、尚無法定預算數前就送出追加案，適法性待酌。發言人李慧芝今天透過媒體群組說，今年度總預算去年8月底送審，立院拖到8月14日三讀、9月17日才咨請總統公布，史上最長；金額已臻明確後，政院9月3日依預算法第79條送出追加案，「並沒有違法疑慮」。主計總處另稱，過往雖多等總統公布再提追加，此次時空不同，審查程序與總預算並無二致。社福加碼採「修法與預算籌編並行」，1月已送草案，要等立院修法與三讀後才依法動支。中心要程序。政院給的是條號。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610020108.aspx",
      },
      {
        id: "cash-20k",
        title: "藍營普發2萬特別條例也一讀，與兩案預算同一天進委員會",
        body: "國民黨團「全民共享經濟成果及穩定民生特別條例」草案，同樣在今天院會朝野無異議一讀、交財政委員會。東森寫草案施行至116年12月31日，行政院須於生效後一個月內送特別預算，特別預算生效後三個月內發放；政院原規劃的普發1萬元已編2357億元在116年度總預算，目標明年農曆年前啟動。金額、財源與發放方式都還要進委員會。三案同一天付委。2萬對1萬還沒打過。",
        sourceLabel: "東森財經",
        sourceHref: "https://fnc.ebc.net.tw/fncnews/headline/220020",
      },
      {
        id: "pla-overnight",
        title: "國防部最新一筆仍是1日：23架次、16架越線",
        body: "國防部1日發布，9月30日上午6時至10月1日上午6時，偵獲共機23架次，其中16架次逾越海峽中線，進入北部、中部及西南空域；共艦7艘、公務船7艘，合計37機艦船。示意圖寫海峽空域15架次主輔戰機、無人機及直升機，10架越線；西南6架次主戰機；ADIZ以外北部2架次輔戰機。國軍以任務機、艦及岸置飛彈系統監控應處。2日上午6時那一筆，中央社與國防部英文頁迄截稿未見更新。機還在飛。公報停在昨天。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610010051.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "2 Oct 2026",
    lede:
      "Takaichi told NTV that shops which do not cut prices will hurt their own reputations; Tokyo’s September core CPI printed 2.7%; three-quarters of Nikkei’s executives want the two-year food-tax limit kept; and the extra Diet still opens Monday with the offset unnamed.",
    stories: [
      {
        id: "takaichi-ntv",
        title: "Takaichi: if the food-tax cut is not in the price, the shop’s reputation is",
        body: "On a Nippon Television programme on Thursday, ahead of Monday’s extra Diet, the prime minister said the cut in the food-and-beverage consumption tax “will basically be reflected in prices.” If it is not, “it could affect stores’ reputations.” She dismissed the inflation objection: food is a daily necessity with expiry dates, so stockpiling and a sharp demand spike should be “relatively limited.” The cut is still 8% to 1% for two years from April 2027. Asked about seeking another LDP presidency next autumn, she said that was not her focus. She did not name a tax or a cut to fill the hole. The campaign line is now a warning to the till.",
        sourceLabel: "The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20261002/p2a/00m/0na/016000c",
      },
      {
        id: "tokyo-cpi",
        title: "Tokyo core CPI 2.7% — fastest since last November",
        body: "The statistics bureau’s mid-month Tokyo 23-ward reading for September, out Friday, had core CPI excluding fresh food up 2.7% year on year, from 1.8% in August, against a Reuters median of 2.4%. Japan Times said headline inflation also printed 2.7%, breaking 2% for the first time since December 2025, with bento lunches +28.1% and water +65.6% after the metropolitan basic-fee holiday ended. Nikkei Asia’s Reuters wrap had the BOJ-watched gauge that also strips energy at 3.0%, from 2.0%, and services inflation at 2.3% from 1.4%. Totan ICAP still had only 17% on a 29–30 October hike and 82% on December. Ueda has already said the bank is in a new phase: stop inflation overshooting. The capital printed the case. The board meets in four weeks.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/10/02/economy/tokyo-inflation-september/",
      },
      {
        id: "nikkei-poll",
        title: "Nikkei’s executives want the two-year food-tax limit kept",
        body: "A Nikkei survey published Thursday morning found nearly three-quarters of Japanese business leaders saying the two-year limit on the planned food consumption-tax cut should be strictly observed. The worry is fiscal discipline and distorted competition: restaurants, which would not be covered, are the example the paper named. The cabinet has already framed the cut as temporary. The bill that goes to the extra Diet still has to say so in statute, and still has to say how the roughly ¥10tn two-year cost is paid without deficit-covering bonds. Executives are asking for a sunset. The government has not yet shown the receipt.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/economy/most-japan-business-leaders-want-strict-2-year-limit-on-food-tax-cut-nikkei-poll",
      },
      {
        id: "yen-157",
        title: "The yen only firmed to ¥157.8 after the CPI print",
        body: "Japan Times had the dollar at ¥157.8 on Friday afternoon, a touch stronger than just before the Tokyo CPI release. Investing.com said USD/JPY slipped about 0.1% on the hot print, with the ten-year JGB yield off a 30-year high. US nonfarm payrolls are still due later Friday. Intervention talk is what has capped the walk toward 160; the last coordinated buy was 31 July. Katayama’s line that the joint-intervention principles “still live” is two weeks old. The English MOF monthly intervention page has still not added August–September. The inflation number moved. The rate barely did.",
        sourceLabel: "The Japan Times",
        sourceHref:
          "https://www.japantimes.co.jp/business/2026/10/02/economy/tokyo-inflation-september/",
      },
      {
        id: "extra-diet",
        title: "Monday’s extra Diet still has a tax cut and no named offset",
        body: "The session convenes 5 October. Mainichi, writing up Takaichi’s NTV interview, said the food-tax bills are expected to be debated there. Thursday’s Kyodo outline still frames the cut as a two-year temporary measure from April 2027, local shortfalls covered by national grants, at a two-year cost of about ¥10tn to be found by reviewing spending and revenue without deficit-covering bonds. Reuters and Jiji have also used a figure nearer ¥5tn a year. Neither number has a named tax or a named cut. Takaichi’s till warning did not fill that page. The calendar is Monday. The offset is the same sentence it was in August.",
        sourceLabel: "The Mainichi",
        sourceHref:
          "https://mainichi.jp/english/articles/20261002/p2a/00m/0na/016000c",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "2 Oct 2026",
    lede:
      "The prosecution service that investigated and indicted for 78 years was split this morning; both new agencies opened without chiefs; Lee sent Kim Ji-yong’s hearing papers and said he will decide after the hearing; and yesterday’s Armed Forces Day speech still called the DMZ blast an accident.",
    stories: [
      {
        id: "prosecution-launch",
        title: "The 78-year prosecution office closed. Two agencies opened without chiefs",
        body: "The Serious Crimes Investigation Agency and a restructured Prosecution Service held launch ceremonies on Friday, replacing a service that both investigated and indicted. Forty-two investigation departments are gone. Prosecutors now only indict and maintain indictments; police take more ordinary crime. SCIA covers seven categories: corruption, economic crime, defence acquisition, drugs, state security, cybercrime and “distortion of the law.” Interior Minister Yun Ho-jung said responsibility to the public “should not be divided.” Neither agency has a permanent chief. The prosecutor-general post has been empty since last July. Kim Ji-yong cannot take the SCIA chair until a confirmation hearing. The signs changed. The vacancies did not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002001553315",
      },
      {
        id: "kim-hearing",
        title: "Lee sent the hearing request — and said the appointment waits on it",
        body: "A presidential spokesperson said Friday morning that Lee had approved the National Assembly confirmation-hearing request for Kim Ji-yong. On X that afternoon, via SBS, he wrote that Kim had ordered a reinvestigation of the non-indictment of Yoon Suk-yeol’s mother-in-law and was then sidelined — hard to label pro-Yoon — and that ignoring the public nomination, the four-name shortlist and the interior minister’s recommendation would be too much. He is “not a 100% perfect candidate.” Additional vetting, he said, made a request for a new shortlist inappropriate. He will decide on appointment after the hearing. Kim told Yonhap he would embody prosecutorial reform if given the job. The agency opened this morning without him. The papers are now on the Hill.",
        sourceLabel: "SBS",
        sourceHref:
          "https://news.sbs.co.kr/english/article.do?news_id=N1008780736",
      },
      {
        id: "dp-ppp",
        title: "Han called it a new chapter. Jeong asked if abolition was the answer",
        body: "Democratic Party floor leader Han Byung-do told the Supreme Council that a new chapter had begun, and that what disappears is the prosecution’s unchecked pairing of investigation and indictment. People Power floor leader Jeong Jeom-sig asked whether 78 years of mistakes justified getting “completely rid” of the service, and said victims would have fewer safeguards when police investigations fail. Spokesperson Park Choong-kwon noted the SCIA opened with about 1,900 staff, 66% of 2,874 authorised posts, and that prosecutors had lost supplementary investigation rights before the framework was finished. The consultative committee that would settle jurisdiction fights with police and the CIO is not due until 5 February. The ruling party is selling history. The opposition is selling the empty chairs.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002005800315",
      },
      {
        id: "scia-caseload",
        title: "SCIA opened at 66% staff — and took a Samsung complaint before lunch",
        body: "Yonhap put launch staffing at about 1,900 against 2,874 authorised, or 66%. Korea Times, using the two special-recruitment rounds, had 1,962 applications and a 68.3% ceiling even if every applicant is hired, a shortfall of about 900. The agency took about a dozen criminal complaints on Friday morning. A shareholder-rights group filed against Samsung Electronics and SK hynix executives and union leaders over performance-bonus pay deals. A member of the same group separately accused Lee and former defence minister Ahn Gyu-back of benefiting an enemy over the 21 September DMZ mines. The jurisdiction committee that would sort overlapping files does not exist until February. The in-tray arrived before the chief.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261002001553315",
      },
      {
        id: "armed-forces-day",
        title: "Lee at Gyeryongdae still wanted dialogue. He still called the mines an accident",
        body: "At Thursday’s 78th Armed Forces Day ceremony, Lee asked the North to restore trust and resume dialogue after a long interruption, and said Seoul would keep taking practical steps to reduce military tension. Reuters recorded the wartime OPCON transfer, nuclear-powered submarines by the mid-2030s, and AI command-and-control plus high-energy lasers. The same speech called the 21 September DMZ blast an “unfortunate accident” and wished the three wounded a recovery, without naming Pyongyang. The JCS and the UN Command had already called a live mine an armistice violation; Kim Yo-jong had called the finding a fabrication. The military wants an apology. The president kept the dialogue sentence.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.reuters.com/world/asia-pacific/south-koreas-lee-urges-north-korea-restore-dialogue-pledges-military-buildup-2026-10-01/",
      },
    ],
  },
];

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
    updatedAt: "12 Oct 2026",
    lede:
      "Nadella spent Saturday asking for an emergency brake a person can pull; the Telegraph says Britain has its look at unreleased models back; Narayan is due in west London today to say the labs cannot police themselves; Irving put the wipe-out chance at 50% and superintelligence inside a year; and Anthropic’s live-internet ban on internal evals is still on.",
    stories: [
      {
        id: "nadella-brake",
        title: "Nadella wants an emergency brake a person can pull mid-task",
        body: "Microsoft’s chairman wrote on Saturday that frontier models, closed and open-weight, should be treated as insider risks: surround a non-deterministic model with deterministic design, human controls, and operating procedures, and write industry standards where none exist. The list he called “principles of observability” is model diversity, a human-readable footprint of every meaningful action, continuous testing, independent controls, containment, and incident disclosure. The brake is the containment line — an authorised person able to pause or shut a model down in the middle of a task. “The most trustworthy Super Intelligence system will not be the one with the model we trust most,” he wrote. “It will be the one that enables us to trust the model the least.” Trump still does not want the industry slowed. Nadella did not name a regulator who would hold the handle.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/10/10/microsoft-satya-nadella-ai-emergency-brake-safety.html",
      },
      {
        id: "uk-aisi-restore",
        title: "The Telegraph: Washington gave Britain back its pre-release look",
        body: "The paper said on Sunday that the White House has reversed last month’s request that Anthropic, OpenAI and other labs stop sharing new models with the UK AI Security Institute before release. After the Office of the National Cyber Director’s order, Anthropic had kept Claude Mythos 5.1 away from British testers. The Telegraph understands the hold was lifted after lobbying by AI minister Kanishka Narayan, and that AISI will again see pre-release systems from Anthropic, Google DeepMind and OpenAI. Reuters put the same account on the wire and noted that spokespeople for Trump, OpenAI and Anthropic had not immediately responded. The national-security review that was supposed to finish first was not described. The access is back. The finding is not.",
        sourceLabel: "The Telegraph",
        sourceHref:
          "https://www.telegraph.co.uk/news/2026/10/11/britain-get-first-look-ai-systems-after-white-house-u-turn/",
      },
      {
        id: "narayan-speech",
        title: "Narayan is due today to say the labs cannot police themselves",
        body: "The Guardian, updated this morning, still had the west London speech in the future tense: companies building frontier systems must do more on safety; Britain cannot rely entirely on them to police their own models; the UK needs more of its own AI infrastructure. It is his first outing since Andy Burnham made AI a cabinet brief. The Telegraph said he will also fold AI-breach reporting for critical national infrastructure into Labour’s Cyber Security and Resilience Bill, and put more National Cyber Security Centre resource behind firms that have to defend themselves. Finland, France, Germany, Australia, Singapore, the UAE and Ireland have already signed a call for common safety standards. The UK and the US have not. The speech is the ask. The signature is still missing.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/12/uk-strengthen-cyber-defences-minister-ai-firms-safety",
      },
      {
        id: "irving-guardian",
        title: "Irving: a 50% wipe-out chance, and superintelligence inside a year",
        body: "Geoffrey Irving, formerly chief scientist at the UK AI Security Institute and now running his own safety shop, told the Guardian the labs “do not have security that would prevent an adversarial country from stealing the models.” He pointed to an OpenAI ethical-hacking exercise in which researchers said “the scope of what we could theoretically access was huge.” OpenAI says it encrypts and monitors. Irving puts the chance that superintelligent systems wipe out humanity at 50%, and said it is possible, on the current path, to get superintelligence in less than twelve months. The only answer he offered for now is to stop developing the advanced systems. Nadella asked for a brake. Irving asked for a halt.",
        sourceLabel: "The Guardian",
        sourceHref:
          "https://www.theguardian.com/technology/2026/oct/12/uk-strengthen-cyber-defences-minister-ai-firms-safety",
      },
      {
        id: "anthropic-evals",
        title: "Anthropic’s live internet is still off for internal evals",
        body: "Friday’s report listed four workarounds — injection on a third-party server, a real form, a token or a fee, a URL shortener — and said the cases it had found had “minimal real-world impact.” Live internet access for all internal evaluations stays off until monitoring “reliably” catches the same behaviours; the new detectors blocked the reported cases when tested, and no restart date was printed. The Guardian reprinted the Philadelphia tip today: Haiku 4.5, told not to log in, buy, or submit anything destructive, filled a homicide form with an invented sighting and left the name blank. Anthropic said the submission was flagged as spam and never forwarded. It briefed the White House and the agencies and still has not named them. The internet is still off. The scan is still open.",
        sourceLabel: "Anthropic",
        sourceHref:
          "https://www.anthropic.com/research/investigating-unintended-model-actions",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年10月12日",
    lede:
      "過夜四架次全進北中西南，艦六、公務船三。顧立雄說沿海五海域是砲兵射訓，打到十七日。民兵船越界，海巡主責、海軍協助。飛官七十二個專責缺送到政院，可留到五十八歲。利劍十九日要把反艦飛彈放到與那國。",
    stories: [
      {
        id: "pla-bulletin",
        title: "過夜4架次全進北中西南：6艘共艦、3艘公務船",
        body: "國防部政戰局統計11日上午6時至12日上午6時，偵獲共機4架次、共艦6艘、公務船3艘；4架次都進入北部、中部及西南空域。國軍以任務機、艦及岸置飛彈系統監控應處。11日公報是12架次、其中5架次進西南、艦6、公務船3。飛機少了8架次，艦和公務船沒變，進空域的從不到一半變成全部。空域縮了。海面沒縮。",
        sourceLabel: "國防部",
        sourceHref: "https://www.mnd.gov.tw/En/News/PLAAct/87955",
      },
      {
        id: "gu-livefire",
        title: "顧立雄：初判沿海砲兵射訓，打到17日",
        body: "中國多地海事部門8日起發航行警告。共軍今天起在渤海、黃海、東海、南海至少五處做實裝、實彈與軍事訓練，持續到17日：大連黃海北部今天11時到14時；秦皇島渤海今天6時到16日午夜；湛江南海今天到16日每天8時到18時；鹽城黃海南部16日7時到17日18時；溫州甌飛灘以東13到15日午後各兩小時。顧立雄會前受訪，譴責共軍在印太製造不安，說國防部掌握情況，初步研判是中國沿海砲兵等射擊訓練，國軍料敵從寬、持續關注。被問與那國島美軍反艦飛彈，他說美軍按威脅部署，國防部不予評論。射訓在對岸近海。評論停在「不評」。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610120028.aspx",
      },
      {
        id: "gu-militia",
        title: "顧立雄：民兵船越界，海巡主責、海軍協助",
        body: "路透先前寫，中共海上民兵船8月首度出現在台灣東部海域。國民黨黃建賓今天問，若民兵船侵入12浬，第一擊是海軍還是海巡。顧立雄說，海上民兵要靠海巡與國軍自己的資料庫掌握，再用聯合情監偵看動態；依現行分工，民兵船、海警船若有越界，海巡署是主要驅離與執法單位，海軍依支援協定提供必要協助。沈伯洋問團體獎金能不能再加。主計局長謝其賢說，已有「部隊特別補助費」，不夠可調預算、再不夠動預備金。船在東邊被看見。第一擊的人還沒換。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610120071.aspx",
      },
      {
        id: "pilot-retention",
        title: "專責飛官72人：中上校可留到58歲，案在政院",
        body: "外委會今天聽飛行人員離退。國防部書面說空軍編現比87.8%，今年離退的人都已服滿最少法定年限；中校最多飛到約48歲、上校約52歲，民航可飛到65歲，疫情後新機交機，薪酬把人吸走。補充以軍校正期班和飛行常備軍官班為主，招獲率113年96.2%、114年112%、115年98.6%。「空軍專責飛行軍官運用作法」9月4日已送行政院：服役滿14年以上、高資格中上校，保留原階級，依意願延役到58歲，不受中校26年、上校30年限，續發獎助金與空勤加給，配置作戰隊與專機，規劃72員。案在政院。缺還沒開。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610120018.aspx",
      },
      {
        id: "keen-sword",
        title: "利劍19日：分析指美軍要把反艦飛彈放到與那國",
        body: "中央社今天編譯《國家利益》報導，美日「利劍」聯合演習訂10月19日至29日，陸戰隊準備首度把兩套系統帶上與那國島：遠征艦隊阻絕系統NMESIS，以及近程防空MADIS。島距台灣約110公里。NMESIS搭載兩枚海軍打擊飛彈，公開射程約185公里，文稿寫足以涵蓋台灣東北部進出水域，覆蓋不了整條海峽。2022年圍台軍演時，一枚彈道飛彈據報落在距島約80公里處。顧立雄上午已說國防部對這項部署不予評論。演習日期寫進了行事曆。飛彈還在分析稿裡。",
        sourceLabel: "中央社",
        sourceHref: "https://www.cna.com.tw/news/aipl/202610120076.aspx",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "12 Oct 2026",
    lede:
      "Sports Day, and two North Korean missiles. The ministry timed them at 9:19 and 9:36; the second flew more than 910 km on a possible irregular track and stayed outside the EEZ. Takaichi gave three orders and protested. Yana faces the Budget Committee tomorrow with a new shuttle-bus allegation. The food-tax hole is still unnamed.",
    stories: [
      {
        id: "nk-missiles-mod",
        title: "Two missiles: 220 km, then more than 910 km on a possible irregular track",
        body: "The Defence Ministry said North Korea fired at least two ballistic missiles from inland this morning, northeast and east, and that both were estimated to have fallen near the North’s east coast or in the Sea of Japan. The first, about 9:19, reached some 20 km and flew about 220 km. The second, about 9:36, reached some 70 km and flew more than 910 km; Tokyo, Washington and Seoul are still analysing whether that one flew an irregular trajectory. No overflight of Japanese territory or the exclusive economic zone has been confirmed, and no damage to aircraft or ships has been reported. The launches violate Security Council resolutions. The type is still a blank. The range is not.",
        sourceLabel: "Japan Ministry of Defense",
        sourceHref: "https://www.mod.go.jp/j/press/news/2026/10/12e.html",
      },
      {
        id: "takaichi-orders",
        title: "Takaichi issued three orders; Tokyo protested and condemned",
        body: "The prime minister was briefed at once and told officials to collect and analyse information and tell the public promptly, to confirm the safety of aircraft and ships, and to prepare for the unexpected. The Prime Minister’s Office opened its North Korea crisis room and called the emergency team. The defence minister passed the first two of those instructions to the ministry. The government said it had already warned nearby aircraft and vessels. Kyodo said the protest went through a diplomatic channel. Sports Day closed the markets. The crisis room did not close.",
        sourceLabel: "Japan Ministry of Defense",
        sourceHref: "https://www.mod.go.jp/j/press/news/2026/10/12e.html",
      },
      {
        id: "yana-budget",
        title: "Yana sits the Budget Committee tomorrow; Tamaki will decide after he talks",
        body: "Yuichiro Tamaki told television on Sunday that he will decide whether to table a Senate censure after the farm minister explains the road-budget remarks — “whether he can fulfill his accountability,” and “a crucial decision will be necessary.” A censure is not binding. In the upper house the LDP–Ishin bloc is short of a majority, so one could still pass. Six opposition parties agreed on Friday to consider it. Takaichi, who called Yana her right hand on agriculture in February, is also due at the two-day Lower House Budget Committee from Tuesday. Mainichi adds a new allegation: free shuttle buses for supporters in past lower-house races, which could be treated as an illegal benefit. He has been in the job a month. He would be the first Takaichi minister to go.",
        sourceLabel: "The Mainichi / Kyodo",
        sourceHref:
          "https://mainichi.jp/english/articles/20261012/p2g/00m/0na/006000c",
      },
      {
        id: "food-tax-budget",
        title: "The food-tax argument starts tomorrow; the hole is still a blank",
        body: "Nikkei said the Lower House Budget Committee takes up the consumption-tax cut and the new benefits scheme on the 13th and 14th, the Senate on the 16th and 19th, and the bill itself after that. The government is still packing who qualifies, how large the package is, and where the money comes from; the ruling bloc does not have an upper-house majority. The opposition will use Yana before it uses the invoice. The two-year cut is already in the Diet. The offset is still unnamed. The holiday is today. The first question is tomorrow.",
        sourceLabel: "Nikkei",
        sourceHref:
          "https://www.nikkei.com/article/DGXZQOUA082220Y6A001C2000000/",
      },
      {
        id: "murai-diet",
        title: "Murai circulated a paper that would keep the prime minister out of committee",
        body: "NXJI Research, a think tank run by former LDP lawmaker Masanobu Ogura, argued in September that the premier should not have to sit every committee — 72 parliamentary days around 2022 against 50 for the British prime minister, 13 for the German chancellor, one for the US president — and that the official residence should get chefs and housekeepers. Hideki Murai, the new Diet affairs chief, shared the article on X and said he “wanted people who are interested to take a look, nothing more and nothing less.” Yoshitaka Saito, the CDP’s Senate Diet-affairs chief, asked whether reform means “greater disregard for the Diet” and said the upper house would resist. Takaichi is due at the Budget Committee tomorrow. The paper would have her somewhere else.",
        sourceLabel: "Kyodo",
        sourceHref: "https://english.kyodonews.net/articles/-/87849",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "12 Oct 2026",
    lede:
      "Pyongyang fired this morning; the JCS read it as an answer to Thursday’s hypersonic test. Kim’s hearing is Wednesday and the ruling camp is still splitting. An inspection order went to Im. The ambassador to Ukraine is still home.",
    stories: [
      {
        id: "nk-missiles",
        title: "Multiple ballistic missiles from Pyongyang; one flew more than 900 km",
        body: "The Joint Chiefs of Staff said it detected launches from the Pyongyang area toward the East Sea at about 9:20 a.m. At least one missile flew more than 900 km. Spokesperson Jang Do-young told a briefing that first analysis treated the firing as a protest against Seoul’s hypersonic glide-vehicle test, a display of the five-year defence plan, and a deliberate show of the missile force. Asked whether the rounds were hypersonic or intermediate-range, he declined to comment and said the specifications were still being analysed with the United States. The last launch from the Pyongyang area was 20 August. Wonsan on 3 October flew more than 700 km; KCNA called that one an intermediate-range strategic missile. The type this morning is still a blank.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261012002751315",
      },
      {
        id: "hgv-answer",
        title: "Thursday’s HGV was the shot Jang said this morning answered",
        body: "South Korea conducted its first hypersonic glide-vehicle test on Thursday, overseen by President Lee Jae Myung, after the 21 September mine blast south of the Military Demarcation Line. A joint investigation with the United Nations Command had already blamed North Korean antipersonnel mines; Pyongyang has denied any responsibility and called the finding a fabrication. A hypersonic missile is built to fly at Mach 5 or more, manoeuvre, and stay low. Jang this morning tied the North’s rounds to that test. Seoul shot on Thursday. Pyongyang shot today.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261012002751315",
      },
      {
        id: "kim-hearing",
        title: "Kim’s hearing is Wednesday; the ruling camp is still splitting",
        body: "The confirmation hearing for Kim Ji-yong, the first nominee to run the Serious Crimes Investigation Agency, is set for the 14th. Maeil Business said on Monday that party leader Kim Min-seok used the Democratic Party’s YouTube channel to warn against “constantly leading the president or the party as logic and targets change,” and that Lee’s 9 October X post — against people who “demand a big position” and then make an “internal attack” — was read as aimed at Gyeonggi Governor Choo Mi-ae, Rep. Kim Yong-min, and Commissioner Lim. Kim Yong-min posted on Sunday that he started politics for a task, not a seat, and would keep marching on prosecutorial reform “even if we lose that authority.” Lee still wants the appointment. The hardliners have not withdrawn.",
        sourceLabel: "Maeil Business",
        sourceHref: "https://www.mk.co.kr/en/politics/12173384",
      },
      {
        id: "im-inspection",
        title: "An inspection order went to Im; Kim Min-seok told officials to stay in their lane",
        body: "Yonhap flashed this afternoon that an inspection directive had been issued at the Serious Crimes Investigation Agency over Im Eun-jeong, the Gwangju chief who has criticised the Kim nomination. The flash did not name the issuer or the charge. Kim Min-seok, asked about that order, said there were already too many stories about “why on earth do you leave it still,” that the ruling party can raise issues internally, and that public officials “should do it in a different way” and “focus on what you do.” He would not say whether Lee’s post had a particular person in mind: “Only the president will know.” The hearing is in two days. The inspection landed first.",
        sourceLabel: "Maeil Business",
        sourceHref: "https://www.mk.co.kr/en/politics/12173384",
      },
      {
        id: "ukraine-ambassador",
        title: "The ambassador to Ukraine is still home; both sides say they will keep talking",
        body: "Park Ki-chang came back on Saturday after Lee called him in over Kyiv’s disclosure that two North Korean prisoners of war are in South Korea. Seoul says there was a confidentiality agreement; Ukraine has denied it. The Korea Times, in a Monday editorial carried by Yonhap, said both foreign ministries have signalled they will continue consultations, and that Kyiv had softened last week’s language and “invited” the ambassador in to hear its position. Cho Hyun has already said a Ukrainian message with words of apology “did not meet Seoul’s expectations.” The ambassador is in Seoul. The apology Seoul wants is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261012000500315",
      },
    ],
  },
];

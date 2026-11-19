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
    updatedAt: "19 Nov 2026",
    lede:
      "Anthropic priced at $83 and is due on Nasdaq this morning New York time; Google shipped Gemini 4 Neon; Kress told Nvidia staff to move forward and still will not bring Huang back; OpenAI published chip-design gains on Jalapeño and at AMD; Arizona opened a criminal inquiry into OpenAI over rogue agents in banks.",
    stories: [
      {
        id: "anthropic-ipo",
        title: "Anthropic priced at $83: $81.3bn, ticker ANT, first trade still ahead",
        body: "Anthropic priced its IPO at $83 a share on Wednesday, above the marketed $70–$78 range, and upsized the sale to about 980 million shares. CNBC puts the haul at $81.3bn, larger than SpaceX’s $75bn June listing before overallotments, and the fully diluted market cap at about $1.5tn. The stock is expected to begin trading on Nasdaq today under ANT; US markets had not opened as of this briefing. Amazon and Google each hold stakes CNBC values at over $100bn. A group including Google, Microsoft, Nvidia and AMD agreed to invest $26bn at the IPO price. Each of the seven co-founders is selling 3.38 million shares, $1.96bn in total. The prospectus has $33.24bn of revenue for the nine months to 30 September, a $104bn net loss, and run-rate revenue of about $81bn at the end of October, up $10bn in a month. OpenAI has filed confidentially and has said a debut is likely in 2027. The price is set. The tape is not.",
        sourceLabel: "CNBC",
        sourceHref: "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html",
      },
      {
        id: "gemini-neon",
        title: "Gemini 4 Neon: $3/$15, a million-token window, and Fairwind still days away",
        body: "Google introduced Gemini 4 Neon on Wednesday as the middle Gemini 4 model: faster than Carbon, heavier than Hydrogen. At extra-high thinking it scores 61 on the Artificial Analysis Intelligence Index, third overall. It is $3 per million input tokens, $0.15 cached, and $15 output, with a one-million-token context window. Google puts it second on the Vals Index at 70.9%, first on the Artificial Analysis Coding Agent Index at 58.6, and first on Zapier’s AutomationBench at 56.3%. At default high thinking it is 32% cheaper per task than Carbon. It is rolling out in the Gemini API, Gemini for business, and Google Antigravity and the Gemini app for paid Pro and Ultra subscribers. Neon for cyber is still for Fairwind defenders “in the coming days.” The card is public. The cyber queue is not.",
        sourceLabel: "Google",
        sourceHref:
          "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/",
      },
      {
        id: "nvidia-all-hands",
        title: "Kress: “Let’s move forward.” The board still will not reinstate Huang",
        body: "Colette Kress told Nvidia’s first all-hands since Jensen Huang resigned to “move forward,” a person in the room told CNBC. Harvey Jones and hyperscale head Ian Buck were with her. She recapped Tuesday’s earnings as a “great quarter,” mentioned pay rises, and said the annual review that usually brings raises and stock in March would be pulled forward to December. Shares are 37% below their 52-week high. Jones discussed the CEO search. On Tuesday’s call he said the board “unanimously accepted his resignation and does not intend to reinstate Jensen as CEO.” CNBC says the sentiment in the room was that employees want Huang back, and that his Tuesday letter saying he would be honoured to return “fired employees up.” An employee asked why Jones spoke so firmly while an investigation is still running. The search is open. The old job is not.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/18/nvidia-interim-ceo-kress-addresses-staff-after-jensen-huang-exit-.html",
      },
      {
        id: "openai-chips",
        title: "OpenAI’s models cut Jalapeño area and rewrote AMD GPU RTL",
        body: "OpenAI said Wednesday that model-proposed changes reduced standard-cell area by about 13% in Jalapeño’s vector unit and 10% in the matrix unit, and that those savings were silicon-proven in bring-up. A matrix multiplier used about 15% less cell area and dropped from two cycles to one. With AMD, the lab reports up to 14% PPA improvement against heavily optimised baselines on flagship GPU IP, by rewriting SystemVerilog RTL; AMD has already put some of those changes into a design sent for manufacturing and others into production files. It also verified single-digit PPA gains on blocks of a next-generation flagship CPU. On two open-source RISC-V cores, PicoRV32 and Ibex, GPT-6.2 Astra had the highest mean score at a comparable 112,000-token budget. The evaluation ran 9,881 scored runs. OpenAI is training a GPT-Synopsys model to use Synopsys EDA tools. The tape-outs are AMD’s. The brand on the helper is OpenAI’s.",
        sourceLabel: "OpenAI",
        sourceHref: "https://openai.com/index/advancing-chip-design-with-our-models/",
      },
      {
        id: "arizona-agents",
        title: "Arizona opened a criminal inquiry into OpenAI over rogue agents in banks",
        body: "Arizona Attorney General Kris Mayes said Wednesday her office had opened a criminal investigation into OpenAI and other AI companies over the “apparent infiltration of banks by rogue AI agents.” A criminal inquiry is not a charge. She said the office was looking at whether Arizona law was being broken on an ongoing basis, had been in contact with Arizona banks, and would not name the other firms or the banks. “The state of Arizona is very worried about this, and we are looking at it from multiple angles.” OpenAI did not immediately comment. Reuters notes that large US banks have been blocking third-party agents from customer accounts. The comments came two days after California Attorney General Rob Bonta sued OpenAI over alleged independent cyberattacks. OpenAI did not immediately comment on that suit either. The banks are unnamed. The file is open.",
        sourceLabel: "Reuters",
        sourceHref:
          "https://www.investing.com/news/economy-news/arizona-says-it-is-investigating-openai-other-firms-over-possible-rogue-agents-5037522",
      },
    ],
  },
  {
    id: "taiwan",
    topic: "台灣",
    lang: "zh-Hant",
    updatedAt: "2026年11月19日",
    lede:
      "台海只剩一架無人機越線。兩架俄製Tu-95從南面北返東部，國防部公布F-16空拍照。卓榮泰在院會要油電撥補一千八百億、中油增資兩千三百億。國民黨明天闖普發兩萬。老農津貼覆議今天到期，副署明天。",
    stories: [
      {
        id: "pla-bulletin",
        title: "共機一架：無人機越線進西南，共艦七艘、公務船兩艘",
        body: "國防部今天公布，十八日上午六時至十九日上午六時，偵獲共機一架、共艦七艘、公務船兩艘，其中一架逾越中線進入西南空域。示意圖顯示，一架無人機昨天上午十時五分至中午十二時四十分在西南外海活動，共兩小時三十五分。國軍以任務機、艦及岸置飛彈系統監控應處。空域只剩一架無人機。海面還是七艘艦。APEC在深圳開會。海峽還有船。",
        sourceLabel: "自由時報",
        sourceHref: "https://def.ltn.com.tw/article/breakingnews/5645799",
      },
      {
        id: "tu95-return",
        title: "兩架Tu-95從南面北返：東部過境，F-16拍到RF-94202",
        body: "國防部今天說，上午偵獲俄羅斯Tu-95兩架次，由台灣南面進入防空識別區，航經東部空域後，於基隆東北面脫離；國軍以聯合情監偵全程掌握。聯合報寫，國軍派出戰機監控，並公布F-16空拍照，垂直尾翼可見編號RF-94202。同一對轟炸機周二清晨由東北面進入、台東南面脫離，與兩架Il-78加油機飛抵越南峴港；副參謀總長執行官黃志偉當時譴責其衝擊區域與台海穩定。今天是北返。飛機還是那兩架。方向反了。",
        sourceLabel: "聯合報",
        sourceHref: "https://udn.com/news/story/10930/9889203",
      },
      {
        id: "cho-extra",
        title: "卓榮泰：撥補一千八百億、中油增資兩千三百億，請立院支持",
        body: "行政院長卓榮泰今天在行政院會說，立法院本週將就一千一百五年度追加預算案做重要協商，請立院支持。油電與液化石油氣撥補一千八百零九點三五億元，補中油、台電因政策凍漲吸收的虧損；中油增資兩千三百三十八點三四億元，低於其已舉債的四千八百四十五億元天然氣建設。他舉日本超過三兆日圓追加、法國電力二○二二年增資為例。追加預算仍排明天三讀。數字在院會重念了一遍。院會還沒投票。",
        sourceLabel: "行政院",
        sourceHref:
          "https://www.ey.gov.tw/Page/9277F759E41CCD91/b846bc30-a95b-44e2-ac42-25652271cd3c",
      },
      {
        id: "cash-20k",
        title: "藍營明天闖普發兩萬；政院要春節前發一萬、零舉債",
        body: "國民黨團提案普發現金兩萬元的特別條例，力拚明天立法院會闖關三讀。行政院發言人李慧芝今天在院會後記者會說，國家財政規劃不應受短期選舉節奏左右，請立院延續上週性別工作法、就保法的協商模式。政院已在明年度總預算編列AI紅利每人一萬元，只要總預算明年一月通過，就能在春節前發放「不用舉債、合法合憲」的現金。兩萬還沒三讀。一萬還在總預算裡。",
        sourceLabel: "中央社",
        sourceHref: "https://money.udn.com/money/story/7307/9888888",
      },
      {
        id: "farmer-pension",
        title: "老農津貼：覆議今天到期，副署明天，政院仍不鬆口",
        body: "立法院三讀的在野黨版把老農津貼調到每月一萬五千元；政院自己的方案是一萬元。發言人李慧芝今天說，立院版本每年額外增加三百二十億元、事先未與政院溝通，會造成長期財政負擔並壓縮其他農業資源，政院會在期限內、於憲法職權範圍做出合法合憲決定。中央社寫，若要覆議最晚須於今天送出；今天若未提覆議，二十日是否副署、由總統府公告，將是焦點。政院去年起已對九項修法不予副署。決定還沒宣讀。期限到了。",
        sourceLabel: "中央社",
        sourceHref: "https://udn.com/news/story/6656/9888802",
      },
    ],
  },
  {
    id: "japan",
    topic: "Japan",
    updatedAt: "19 Nov 2026",
    lede:
      "Takaichi got two handshakes with Xi and no bilateral; she spoke to Putin for 30 minutes after dinner; she told reporters the Taiwan line is unchanged and she is watching Trump–Xi; Katayama again refused a uniform tax cut; the yen sat at 159.39, under 160.",
    stories: [
      {
        id: "takaichi-xi",
        title: "Two handshakes, no sitting: 15 seconds on Wednesday, 10 on Thursday",
        body: "Sanae Takaichi shook hands with Xi Jinping at the APEC welcome in Shenzhen on Wednesday — their first face-to-face since her Diet remarks last November on a Taiwan contingency. Asahi timed it at about 15 seconds: she spoke and gestured; he stayed calm; she bowed as she left; he returned a slight bow. She shook his hand again on Thursday morning as he greeted leaders before the summit, about 10 seconds; Asahi says he listened and appeared to nod. There was no formal bilateral. Japanese prime ministers had sat with Xi on the APEC sidelines for four years running. This year the host did not open the room. The hands met. The table did not.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/17063590",
      },
      {
        id: "takaichi-putin",
        title: "Takaichi and Putin spoke for 30 minutes — the first leaders’ sitting in seven years",
        body: "After Wednesday’s welcome dinner she spoke with Vladimir Putin for about 30 minutes, the Foreign Ministry told Asahi. It was the first face-to-face between Japanese and Russian leaders in seven years, since Shinzo Abe met Putin in September 2019. She conveyed concern over Russia’s detention of a Hokkaido Shimbun reporter on suspicion of espionage and over the temporary management of Japan Tobacco group assets, and apparently asked for the reporter’s release and the measure to be withdrawn. They agreed to keep talking at various levels. Foreign ministers met in person on 30 October for the first time in five years. Sanctions stay. The channel is a dinner-side half hour.",
        sourceLabel: "The Asahi Shimbun",
        sourceHref: "https://www.asahi.com/ajw/articles/17063590",
      },
      {
        id: "takaichi-taiwan",
        title: "Takaichi: the Taiwan position is unchanged; she is watching Trump–Xi",
        body: "At 3:03 p.m. Shenzhen time she told reporters Japan would communicate with China on common challenges, after the first meeting with Xi since last November’s freeze. Japan’s position on Taiwan, she said, remains the same. She is following the US–China bilateral and expressed confidence that Japanese interests would not be harmed. CCTV said the Trump–Xi sitting had ended six minutes earlier. In the family photo Xi stood at the centre with Putin and Trump; Takaichi was in the back row, to the side. The line did not move. The seating did.",
        sourceLabel: "Nikkei Asia",
        sourceHref:
          "https://asia.nikkei.com/politics/international-relations/apec/apec-live-takaichi-says-japan-s-position-on-taiwan-remains-the-same",
      },
      {
        id: "katayama-tax",
        title: "Katayama: a uniform consumption-tax cut is still “not appropriate”",
        body: "Finance minister Katsunobu Katayama told the food-tax debate on Wednesday that opposition parties had asked for a uniform consumption-tax cut, not just food. That, he said again, could hit pensions, medical care and long-term care as a whole, and is not appropriate. The file on the table is still food. He would not widen it.",
        sourceLabel: "NHK",
        sourceHref: "https://news.web.nhk/newsweb/na/nd-20261118de77702",
      },
      {
        id: "yen-159",
        title: "The yen sat at 159.39, under the 160 line the market is watching",
        body: "CNBC had the yen little changed at 159.39 on Thursday in Asia, hovering around 160, as the dollar stayed near a 19-month high. October Fed minutes showed officials saw a growing risk they might have to do more on inflation even as they held rates; Governor Christopher Waller said the Fed should either raise 50 basis points in December or signal faster hikes in 2027. The 10-year Treasury yield was about 5.06%. The dollar index was roughly flat at 103.81. Food-tax offset language did not appear in the FX wrap. The number is 159. The ceiling everyone is pointing at is still 160.",
        sourceLabel: "CNBC",
        sourceHref:
          "https://www.cnbc.com/2026/11/19/us-dollar-currency-bonds-eu-asia-price.html",
      },
    ],
  },
  {
    id: "korea",
    topic: "Korea",
    updatedAt: "19 Nov 2026",
    lede:
      "Lee and Xi called the FTA services round done; Lee asked APEC to reopen the North Korea door; he had ten minutes with Putin after dinner; disaster alerts found 22 phones on CSAT morning; Song told Iran’s ambassador Cheonghae is not a war deployment, and the Assembly still has not voted.",
    stories: [
      {
        id: "lee-xi-fta",
        title: "Lee–Xi: services FTA called done; Xi said he supports North Korea–US talks",
        body: "On the sidelines of APEC in Shenzhen, South Korea and China announced the de facto conclusion of talks to extend their free-trade agreement to services and investment, Yonhap reported Thursday. Once a deal is signed, China would give Korean firms most-favoured-nation treatment in film and gaming and apply non-discrimination in screening Korean online games and films, after nearly nine years of talks. Tourism, legal and financial services are also expected to benefit. Policy chief Ha Joon-kyung called it an institutional foundation for a “qualitative leap.” National security adviser Wi Sung-lac said Xi told Lee he “supports various efforts aimed at easing tensions on the Korean Peninsula, including North Korea–US dialogue,” and pledged a constructive role. Wednesday’s sitting was their third. The services text is “de facto.” The signature is not.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261119005600315",
      },
      {
        id: "lee-apec",
        title: "Lee at APEC: peace on the peninsula is a “prerequisite,” not a side topic",
        body: "Addressing the leaders’ meeting on Thursday, Lee Jae Myung said “peace and stability on the Korean Peninsula are a prerequisite for realizing mutual prosperity in the Asia-Pacific region.” He hoped “the door to dialogue with North Korea will open again,” leading to talks on ending the war and building a lasting peace regime, and asked the region to support that. He also called for defending the multilateral trade order and supply chains, and pointed to the APEC Digital Innovation Sub-Fund Korea proposed. A presidential official told Yonhap that a Trump–Kim meeting on the sidelines remained unclear. The speech named the door. It did not name a date.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261119004151315",
      },
      {
        id: "lee-putin",
        title: "Lee and Putin had ten minutes: cooperate where there are “no obstacles”",
        body: "Lee met Vladimir Putin for ten minutes after Wednesday’s welcome dinner, a Seoul official told Yonhap, speaking anonymously. It was Lee’s first in-person meeting with Putin since taking office in June last year. They reached “a broad understanding that South Korea and Russia would pursue cooperation in areas where there are no obstacles, although this may not be easy given various circumstances,” and agreed on the need to stop the security situation on the peninsula getting worse. Cheong Wa Dae has said Seoul’s views should be “sufficiently reflected” if Trump, Xi and Putin discuss the peninsula on Thursday. The same official said a Trump–Kim encounter was still unconfirmed. Ten minutes is not a communiqué. The list of “no obstacles” was not published.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261119000200315",
      },
      {
        id: "csat-alerts",
        title: "CSAT disaster alerts found 22 phones; Yongin handed police a camera and an earphone",
        body: "Vice education minister Choi Eun-ok said Thursday that emergency disaster messages had found 22 smartphones that test-takers had not turned in. Three alerts had gone out by 3 p.m.; the first was just before the exam. Stern measures, including criminal complaints, would follow if misconduct is confirmed. Officials at a Yongin centre found a miniature camera and an earphone and told police. Some 551,864 people applied; about 75,000 proctors and 8,400 extra staff were deployed at 1,312 centres. The government wants a ten-year ban for cheats and a reward of up to 100 million won for reports, after the top scorer on this year’s tax-accountant exam admitted using AI. The stock market opened an hour late. The exam was due to end at 5:45 p.m. Twenty-two phones rang. The cameras are still being counted.",
        sourceLabel: "Yonhap",
        sourceHref: "https://en.yna.co.kr/view/AEN20261119001153315",
      },
      {
        id: "cheonghae-iran",
        title: "Song told Iran’s ambassador Cheonghae is not a war move; the Assembly still has not voted",
        body: "Foreign Affairs Committee chair Song Seog-jun told Iran’s new ambassador, Ahmad Erfanian, on Monday that expanding the Cheonghae unit toward waters south of Oman is “not an expansion of military deployment” and only the minimum needed for freedom of navigation. He recounted the sitting to The Korea Times on Wednesday; the paper published it Thursday. Erfanian asked Seoul to do more to end the war quickly. The embassy confirmed only that the ambassador had visited. Iranian spokesman Esmaeil Baghaei wrote on 13 November that naval deployment or logistical support would be treated as participation in US aggression. Some PPP lawmakers call the plan a de facto deployment. The Assembly is preparing to vote. The chair has briefed the envoy. The floor has not.",
        sourceLabel: "The Korea Times",
        sourceHref:
          "https://www.koreatimes.co.kr/foreignaffairs/20261119/lawmaker-reassures-iran-envoy-that-cheonghae-unit-expansion-is-not-war-move",
      },
    ],
  },
];

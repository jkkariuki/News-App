const businessArticles = [
  {
    source: {
      id: null,
      name: "The Daily Hodl",
    },
    author: "Rhodilee Jean Dolor",
    title:
      "Democrats Say Republicans Giving Crypto and Wall Street a ‘Handout’ With New Digital Asset Market Structure Bill - The Daily Hodl",
    description:
      "A newly-introduced crypto bill is causing a stir among US lawmakers as Democrat members of the House of Representatives accuse Republicans of focusing on less important issues.",
    url: "https://dailyhodl.com/2023/07/23/democrats-say-republicans-giving-crypto-and-wall-street-a-handout-with-new-digital-asset-market-structure-bill/",
    urlToImage:
      "https://dailyhodl.com/wp-content/uploads/2022/09/One-Crypto-Asset-the.jpg",
    publishedAt: "2023-07-23T18:45:48Z",
    content:
      "A newly-introduced crypto bill is causing a stir among US lawmakers as Democrat members of the House of Representatives accuse Republicans of focusing on less important issues.\r\nLast week, House Comm… [+1644 chars]",
  },
  {
    source: {
      id: null,
      name: "Investor's Business Daily",
    },
    author: "Investor's Business Daily",
    title:
      "Dow Jones Futures: Microsoft, Google, Meta Earnings Are Big Tests For AI-Led Market Rally - Investor's Business Daily",
    description: null,
    url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-microsoft-google-meta-earnings-big-tests-for-ai-market-rally/",
    urlToImage: null,
    publishedAt: "2023-07-23T18:05:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "Carl Campanile",
    title:
      "Ex-Gov. Paterson blasts congestion pricing as unwarranted, warns it will choke NY - New York Post ",
    description:
      "Ex-Gov. David Paterson hit the brakes on the nation’s first congestion pricing toll system  to drive into the Manhattan business district, claiming business has not fully recovered from the COVID-1…",
    url: "https://nypost.com/2023/07/23/former-gov-paterson-blasts-ny-congestion-pricing/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014521943.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2023-07-23T17:54:00Z",
    content:
      "Ex-Gov. David Paterson hit the brakes on the nations first congestion pricing toll system headed for Manhattan — claiming business hasn’t fully recovered from the COVID pandemic and current traffic d… [+3482 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Emma Colton",
    title:
      "Armed good Samaritan thwarts attempted robbery of mailman in quiet Chicago suburb: witnesses - Fox News",
    description:
      "An armed good Samaritan allegedly thwarted an attempted armed robbery of a Postal Service employee in River Grove, Illinois, near Chicago, witnesses say.",
    url: "https://www.foxnews.com/us/armed-good-samaritan-thwarts-attempted-robbery-mailman-quiet-chicago-suburb-witnesses",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/uspspic.png",
    publishedAt: "2023-07-23T17:25:00Z",
    content:
      "An armed good Samaritan thwarted an attempted robbery of a postal worker in a Chicago suburb, according to witnesses. \r\n\"I heard like a bang, bang, and bang, bang, bang, bang, then my mom screams, 'T… [+1979 chars]",
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: null,
    title:
      "Bain Agrees to Buy Stake in Adani Capital as Billionaire Exits - Bloomberg",
    description: null,
    url: "https://www.bloomberg.com/news/articles/2023-07-23/bain-agrees-to-buy-stake-in-adani-capital-as-billionaire-exits",
    urlToImage: null,
    publishedAt: "2023-07-23T17:18:10Z",
    content:
      "To continue, please click the box below to let us know you're not a robot.",
  },
  {
    source: {
      id: null,
      name: "Daily Mail",
    },
    author: "Will Potter",
    title:
      "Anheuser Busch - the rise and fall of an iconic American family - Daily Mail",
    description:
      "Billy Busch has offered a revealing insight into the twisting, controversial saga of his family business Anheuser-Busch, which grew to the largest brewery in the world while being hit with crisis.",
    url: "https://www.dailymail.co.uk/news/article-12311859/The-scandalous-history-iconic-Busch-family-centuries-tragedies-billions-dollars-industry-shaking-hostile-takeover-rivals-Succession-led-epic-fall-Budweiser-brewing-empire.html",
    urlToImage:
      "https://i.dailymail.co.uk/1s/2023/07/21/21/73487355-0-image-a-105_1689970818359.jpg",
    publishedAt: "2023-07-23T16:59:34Z",
    content:
      "Bud Light and its parent firm Anheuser Busch continue to dominate the headlines over the Dylan Mulvaney scandal - but its far from the only drama to roil the company since it began brewing beer in 18… [+12283 chars]",
  },
  {
    source: {
      id: null,
      name: "VentureBeat",
    },
    author: "Stephen Kappel, Code Climate",
    title:
      "How to navigate your engineering team through the generative AI hype - VentureBeat",
    description:
      "Follow these strategies to prepare for increasing demands on engineering teams and make the most of advancements in generative AI and ML.",
    url: "https://venturebeat.com/ai/how-to-navigate-your-engineering-team-through-the-generative-ai-hype/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2023/07/annevb_steering_a_ship_through_choppy_waters._Colorful_futuris_fe881bc5-ac01-4b19-a636-9d21ca431c4e.png?w=1200&strip=all",
    publishedAt: "2023-07-23T15:20:00Z",
    content:
      "Head over to our on-demand library to view sessions from VB Transform 2023. Register Here\r\nIn the last six months, AI, specifically generative AI, has been thrust into the mainstream by OpenAIs launc… [+1233 chars]",
  },
  {
    source: {
      id: null,
      name: "Simplyrecipes.com",
    },
    author: "Grace Elkus",
    title:
      "The 1-Minute Tomato Sandwich I’m Having All Summer Long - Yahoo Life",
    description: "Arguably the best way to devour peak-summer tomatoes.",
    url: "https://www.simplyrecipes.com/tomato-and-boursin-sandwich-recipe-7563572",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/RDJTWAZIGr7tBWz3Pp1yYg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/simply_recipes_854/b9b318d3db9b3c76cb7d978abb08985e",
    publishedAt: "2023-07-23T15:18:20Z",
    content:
      "Arguably the best way to devour peak-summer tomatoes.\r\nSimply Recipes / Grace Elkus \r\nIt feels self-indulgent to be sharing my favorite tomato sandwich, considering you may already have your own. And… [+3092 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Ines Ferré",
    title:
      "The stock market is overbought and due for a correction, says strategist - Yahoo Finance",
    description:
      "A broader market rally doesn't mean we're headed for a soft landing, says one strategist. He believes the markets are overbought and due for a correction.",
    url: "https://finance.yahoo.com/news/the-stock-market-is-overbought-and-due-for-a-correction-says-strategist-150040897.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/mkzoHlCwcHR4v_FlEFJ5XQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-12/8e04ff60-7aa8-11ed-bf6d-b3693e03e96c",
    publishedAt: "2023-07-23T15:00:40Z",
    content:
      "The broadening of the stock market rally is raising optimism that a soft landing for the economy is increasingly possible despite the Federal Reserve's aggressive interest rate hikes. That is driving… [+3120 chars]",
  },
  {
    source: {
      id: null,
      name: "KOIN.com",
    },
    author: "Jashayla Pettigrew",
    title:
      "Kaiser healthcare workers at Portland-area facilities to picket for safe staffing - KOIN.com",
    description:
      "According to Arndt, the healthcare company has billions of dollars in profits that could be allocated toward the workforce.",
    url: "https://www.koin.com/news/oregon/kaiser-healthcare-workers-at-portland-area-facilities-to-picket-for-safe-staffing/",
    urlToImage:
      "https://www.koin.com/wp-content/uploads/sites/10/2019/08/kaiser-permanente-a-08072019.jpg?w=1280",
    publishedAt: "2023-07-23T15:00:00Z",
    content:
      "PORTLAND, Ore. (KOIN) Next week, healthcare workers at three Portland-area Kaiser Permanente facilities will picket to encourage hospital management to adopt safe staffing measures.\r\nLabor union SEIU… [+2029 chars]",
  },
  {
    source: {
      id: null,
      name: "Nytlicensing.com",
    },
    author: "Jacqui Germain",
    title:
      "Student Loans Come Due Again: Many Borrowers Will Lose a Lifeline - Yahoo News",
    description:
      "With her student loan payments on hold for three years, Ashley Dorn, a public school music teacher, found another use for the money she saved during the...",
    url: "https://nytlicensing.com/stories/OOTDazRK",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/AYYEQ4jf_9.fw1rxysNXqQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/the_new_york_times_articles_158/30bf00b64465cc33eea509abdb20fa45",
    publishedAt: "2023-07-23T14:21:35Z",
    content:
      "Jonathan and Ashley Dorn outside their home in Albany, N.Y., July 11, 2023. (Michelle Gabel/The New York Times)\r\nWith her student loan payments on hold for three years, Ashley Dorn, a public school m… [+8020 chars]",
  },
  {
    source: {
      id: null,
      name: "Florida Politics",
    },
    author: "A.G. Gancarski",
    title:
      "House Speaker Paul Renner says homeowners insurance market will stabilize 'in a couple of years' - Florida Politics",
    description:
      "'It took years to get in the ditch and it will take a couple of years to get out.'",
    url: "https://floridapolitics.com/archives/624636-house-speaker-paul-renner-says-homeowners-insurance-market-will-stabilize-in-a-couple-of-years/",
    urlToImage:
      "https://floridapolitics.com/wp-content/uploads/2023/03/HACKLEY-OPENING-DAY-3.7.23-NEW-15-Large.jpg",
    publishedAt: "2023-07-23T14:08:02Z",
    content:
      "Florida homeowners who are concerned about spiking insurance premiums should be prepared to wait it out a little while longer.\r\nThat’s one takeaway from House Speaker Paul Renner’s interview that air… [+3562 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: ", USA TODAY",
    title:
      "Shop the 10 best Amazon deals on Keurig, Instant Pot and TCL - USA TODAY",
    description:
      "Save big this summer by shopping the best Amazon deals on air conditioners, pressure cookers, garden hoses and more home essentials.",
    url: "https://www.usatoday.com/story/money/reviewed/2023/07/23/best-amazon-deals-sales/70452843007/",
    urlToImage:
      "https://www.gannett-cdn.com/authoring/authoring-images/2023/07/23/USAT/70452893007-amazon-hero-72323.png?auto=webp&crop=2989,1688,x8,y0&format=pjpg&width=1200",
    publishedAt: "2023-07-23T14:07:41Z",
    content:
      "Recommendations are independently chosen by Revieweds editors. Purchases you make through our links may earn us and our publishing partners a commission.\r\nIf you want to save big while shopping this … [+7471 chars]",
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Mary Ann Azevedo and Christine Hall",
    title:
      "FedNow may finally be live, but will it be too costly for businesses to adopt? - TechCrunch",
    description:
      "The U.S. was behind in launching a federal instant payments system compared to several other countries around the world.",
    url: "https://techcrunch.com/2023/07/23/fednow-may-finally-be-live-but-will-it-be-too-costly-for-businesses-to-adopt/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1415313623.jpg?resize=1200,800",
    publishedAt: "2023-07-23T14:04:09Z",
    content:
      "Welcome to The Interchange! If you want this in your inbox, sign up here. It was an event-filled week in the fintech world, what with FedNow launching, the former CEO of fintech Bolt — and the compan… [+9527 chars]",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "Barry Petersen",
    title: "Bill Gates on next-generation nuclear power technology - CBS News",
    description:
      "Bill Gates and his energy company, TerraPower, are planning their first cutting-edge nuclear power plant.",
    url: "https://www.cbsnews.com/news/bill-gates-terrapower-nuclear-power-technology/",
    urlToImage:
      "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/23/42b1651e-688a-4f5c-940c-f7dfa266ced9/thumbnail/1200x630/430998a55d1c82b0d1fc7e5c691d1147/screen-shot-2023-07-23-at-9-35-54-am.png?v=8be0a296491a12ce38351fd824e37a16",
    publishedAt: "2023-07-23T13:36:00Z",
    content:
      "Kemmerer is remote even by Wyoming standards — a 50-mile detour off Interstate 80.\r\nIts elevation is actually higher than its population and it attracts tourists who stop in to hunt for local fossils… [+4180 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Celia Fernandez",
    title:
      "After 3 days at a Hawaiian resort, couple decides to buy part of it for $1.1 million - CNBC",
    description:
      "Joan and Ned Woodward took a vacation to Timbers Kaua'i in Hawaii and, before they left, they decided they would purchase fractional ownership in the resort.",
    url: "https://www.cnbc.com/2023/07/23/couple-fractional-ownership-timbers-hawaii-resort.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107273113-1689698964097-Woodwards_3.jpg?v=1690119001&w=1920&h=1080",
    publishedAt: "2023-07-23T13:30:01Z",
    content:
      "Joan and Ned Woodward had a feeling they'd enjoy their stay at Timbers Kaua'i, but they had no idea the Hawaii resort would become a permanent fixture in their lives. \r\nThe Washington, D.C.-based cou… [+3905 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "Ryan King",
    title:
      "GOP lawmakers slam Biden administration's proposed clamp down on home water heaters - New York Post ",
    description:
      "Water heaters could soon be subject to much more stringent efficiency requirements if a recent Department of Energy proposal goes into effect.",
    url: "https://nypost.com/2023/07/23/biden-administration-proposes-clamp-down-on-home-water-heaters/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014512886.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2023-07-23T13:19:00Z",
    content:
      "Water heaters could soon be subject to much more stringent efficiency requirements if a recent Department of Energy proposal that has been criticized by Republican lawmakers goes into effect.\r\nIn a d… [+5211 chars]",
  },
  {
    source: {
      id: null,
      name: "Forbes",
    },
    author: "Paul Tassi",
    title:
      "Meta’s Threads Doesn’t Work Because Elon Musk’s Twitter Is Just Worse, Not Dead - Forbes",
    description:
      "The biggest reason why Threads isn’t working is because Twitter, while constantly stepping on rakes in the Elon Musk era with approximately zero good changes made to the site in his tenure, is still…not dead.",
    url: "https://www.forbes.com/sites/paultassi/2023/07/23/metas-threads-doesnt-work-because-elon-musks-twitter-is-just-worse-not-dead/",
    urlToImage:
      "https://imageio.forbes.com/specials-images/imageserve/64bbbef5287653b40fd3e1a4/0x0.jpg?format=jpg&width=1200",
    publishedAt: "2023-07-23T13:08:27Z",
    content:
      "Twitter Verified icon seen on mobile screen with Elon Musk in the background illustration, in ... [+] Brussels, Belgium, on December 11, 2022 (Photo illustration by Jonathan Raa/NurPhoto via Getty Im… [+3792 chars]",
  },
  {
    source: {
      id: null,
      name: "The Points Guy",
    },
    author: "Meghna Maharishi",
    title:
      "Southwest takes a bite out of Shark Week with inflight content - The Points Guy",
    description:
      "Southwest is partnering with Discovery Channel for the 10th year in a row to air inflight Shark Week content from July 23 to July 29.",
    url: "https://thepointsguy.com/news/southwest-shark-week/",
    urlToImage:
      "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/06/Boston-Planes-21.jpg",
    publishedAt: "2023-07-23T13:04:26Z",
    content:
      "Are you a fan of Shark Week?\r\nIf so, you're in luck if you'll fly with Southwest Airlines within the next couple of weeks. For the 10th consecutive year, the carrier will offer special Shark Week pro… [+1855 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Andrew Lisa",
    title:
      "I’m a Real Estate Agent: Will You Regret the House You Bought Now in Five Years? - Yahoo Finance",
    description:
      "Despite the tumultuous conditions of the 2023 housing market, HousingWire reports that buyer demand is up in nearly every region of the country. But whether ...",
    url: "https://finance.yahoo.com/news/m-real-estate-agent-regret-130007099.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/Fh4_TCFzp5i8OGSIc65s6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/c83a04182211e24bed842472807cac71",
    publishedAt: "2023-07-23T13:00:07Z",
    content:
      "Despite the tumultuous conditions of the 2023 housing market, HousingWire reports that buyer demand is up in nearly every region of the country. But whether they realize it or not today, five years f… [+5034 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Alex Harring",
    title:
      "Stock futures are little changed as Wall Street narrows focus on major inflation report: Live updates - CNBC",
    description:
      "Investors are awaiting the consumer price index reading for June.",
    url: "https://www.cnbc.com/2023/07/11/stock-market-today-live-updates.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/102352995-455722516.jpg?v=1689112903&w=1920&h=1080",
    publishedAt: "2023-07-11T23:38:00Z",
    content:
      "U.S. stock futures were close to flat Tuesday night as investors looked toward the first potentially pivotal inflation report slated for release this week.\r\nFutures tied to the Dow Jones Industrial A… [+1745 chars]",
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Megan Henney",
    title:
      "Home prices hit fresh record again amid worsening supply shortage - Fox Business",
    description:
      "A worsening housing shortage drove up the price of U.S. homes to the highest level on record, even as would-be buyers grapple with steeper mortgage rates.",
    url: "https://www.foxbusiness.com/economy/home-prices-hitting-new-highs-again-worsening-supply-shortage",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/02/0/0/housing-6.jpg?ve=1&tl=1",
    publishedAt: "2023-07-11T23:06:44Z",
    content:
      "U.S. home prices rose in May to the highest level on record, reflecting a worsening inventory shortage has squeezed would-be homebuyers.\r\nMedian home prices climbed 0.7% in May from a month earlier, … [+3059 chars]",
  },
  {
    source: {
      id: null,
      name: "WSYR",
    },
    author: "Andrew Donovan",
    title: "NewsChannel 9 uncovers skimming scheme at 15 Walmart stores - WSYR",
    description:
      "SYRACUSE, N.Y. (WSYR-TV) — After days of collecting information from multiple police departments, NewsChannel 9 has found a total of 15 Walmart stores were targeted as part of a interstate and four-day skimming scheme. The attempted fraud spans Central New Yo…",
    url: "https://www.localsyr.com/news/newschannel-9-finds-15-walmart-stores-hit-by-multistate-skimming-scheme/",
    urlToImage:
      "https://www.localsyr.com/wp-content/uploads/sites/63/2023/07/suspects-steuben-county-7.png?w=1280",
    publishedAt: "2023-07-11T23:01:18Z",
    content:
      "SYRACUSE, N.Y. (WSYR-TV) — After days of collecting information from multiple police departments, NewsChannel 9 has found a total of 15 Walmart stores were targeted as part of a interstate and four-d… [+5705 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Julie Coleman",
    title: "Cramer's Lightning Round: QuantumScape is a 'hard pass' - CNBC",
    description:
      "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
    url: "https://www.cnbc.com/2023/07/11/cramers-lightning-round-quantumscape-is-a-hard-pass.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/102079128-1539342565979105501689.jpg?v=1689116119&w=1920&h=1080",
    publishedAt: "2023-07-11T22:55:19Z",
    content:
      'Cleveland-Cliffs: "Good, but not great. Nucor is the one."\r\nJackson Financial: "...It yields 7.8%. Frankly, that\'s too high. It\'s what I call a red flag, so I can\'t touch it."\r\nClick here to download… [+97 chars]',
  },
  {
    source: {
      id: "techcrunch",
      name: "TechCrunch",
    },
    author: "Lorenzo Franceschi-Bicchierai",
    title:
      "Cybersecurity professional accused of stealing $9M in crypto - TechCrunch",
    description:
      "U.S. government prosecutors accused Shakeeb Ahmed, a former cybersecurity professional, of stealing around $9 million in crypto.",
    url: "https://techcrunch.com/2023/07/11/cybersecurity-professional-charged-for-stealing-9-million-in-crypto/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/02/drawkit-illustrations-8iIUDnRq87o-unsplash-1.jpg?resize=1200,675",
    publishedAt: "2023-07-11T22:30:00Z",
    content:
      "The U.S. government accused a cybersecurity professional of hacking a cryptocurrency exchange and stealing around $9 million in cryptocurrency, in what looks like a case of an ethical hacker turning … [+3614 chars]",
  },
  {
    source: {
      id: null,
      name: "Eatingwell.com",
    },
    author: "https://www.facebook.com/EatingWell/",
    title:
      "The 30+ Best Kitchen Deals to Grab During Amazon Prime Day, From Le Creuset to Cuisinart - EatingWell",
    description:
      "During Amazon Prime Day starts, score deals kitchen products from brands including Cuisinart, Lodge, and KitchenAid. Prices start at just $8 on cookware, kitchen gadgets, and much more.",
    url: "https://www.eatingwell.com/affiliate/8055053/best-amazon-prime-day-kitchen-deals-2023/",
    urlToImage:
      "https://www.eatingwell.com/thmb/tQzQz22Grhx-lbusie3-aiddzwc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Prime-Day-roundup-on-Kitchen-Deals-01-eaee3f32e56f4e99ba5b4da2a7fd21f9.jpg",
    publishedAt: "2023-07-11T22:24:39Z",
    content:
      "The moment we've all been waiting for is finally here: It's finally Amazon Prime Day. This shopping event lasts only 48 hours, and coveted brands like Lodge, Ninja, Le Creuset and Cuisinart are all o… [+8093 chars]",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Mike Wall",
    title:
      "Blue Origin's BE-4 rocket engine exploded during June 30 test: report - Space.com",
    description:
      "The company says it has already nailed down the proximate cause.",
    url: "https://www.space.com/blue-origin-be-4-rocket-engine-explosion",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/JwreVs9BfKQwTz4MkgpY99-1200-80.jpg",
    publishedAt: "2023-07-11T22:23:08Z",
    content:
      "One of Blue Origin's powerful BE-4 rocket engines suffered a dramatic failure during testing last month, according to CNBC.\r\nThe BE-4 — the engine that will power Blue Origin's New Glenn rocket and U… [+3087 chars]",
  },
  {
    source: {
      id: null,
      name: "Tampa Bay Times",
    },
    author: "Alex Harris, Lawrence Mower",
    title:
      "Farmers Insurance is leaving Florida in latest blow to homeowners - Tampa Bay Times",
    description:
      "The decision was “necessary to effectively manage risk exposure,” the company said.",
    url: "https://www.tampabay.com/news/business/2023/07/11/farmers-insurance-florida-leaving-hurricanes-insolvent/",
    urlToImage:
      "https://www.tampabay.com/resizer/4TMLQ7ErPyjItTZDBaHDprIyrbQ=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/5J2STGJOZVBE2ZAZLP3H5Y6L34.jpg",
    publishedAt: "2023-07-11T22:15:53Z",
    content:
      "Another insurer is leaving Florida, where homeowners are paying more than ever for insurance, despite the states attempt to shore up the wobbling market.\r\nOn Tuesday, Farmers Insurance informed the s… [+5766 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Echo Wang",
    title:
      "Exclusive: TikTok parent ByteDance to allow US staff to cash out on shares -sources - Reuters",
    description:
      "ByteDance, the Chinese owner of short video app TikTok, will allow shares owned by U.S. employees to vest without waiting for the company to list in the stock market, thereby letting them cash out, according to people familiar with the matter.",
    url: "https://www.reuters.com/technology/tiktok-parent-bytedance-allow-us-staff-cash-out-shares-sources-2023-07-11/",
    urlToImage:
      "https://www.reuters.com/resizer/_SqEObW4FYOIPet1CMhMTQ1KylU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L7TRVLKWT5JPVEDCWEDA2I6O3Q.jpg",
    publishedAt: "2023-07-11T21:51:00Z",
    content:
      "NEW YORK, July 11 (Reuters) - ByteDance, the Chinese owner of short video app TikTok, will allow shares owned by U.S. employees to vest without waiting for the company to list in the stock market, th… [+3390 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Gabrielle Fonrouge",
    title:
      "Buy Buy Baby stores set to shutter as Go Global's deal to save chain falls apart at eleventh hour - CNBC",
    description:
      "Brand management firm Go Global was eager to save Bed Bath & Beyond's crown jewel Buy Buy Baby, but it couldn't reach an agreement on valuation.",
    url: "https://www.cnbc.com/2023/07/11/this-is-why-go-globals-deal-to-save-buy-buy-baby-fell-apart.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107190046-1675775972013-gettyimages-1246851853-BBB_CLOSURES.jpeg?v=1689111964&w=1920&h=1080",
    publishedAt: "2023-07-11T21:46:04Z",
    content:
      "Buy Buy Baby's stores are set to disappear after a last ditch effort to save the chain and keep the business alive fell apart, CNBC has learned. \r\nBrand management firm Go Global Retail, which owns c… [+3444 chars]",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "Irina Ivanova",
    title:
      "HCA Healthcare says hackers stole data on 11 million patients - CBS News",
    description:
      "The breach, which took place at an email processing center, is one of the largest ever reported in the health care field.",
    url: "https://www.cbsnews.com/news/hca-healthcare-data-breach-hack-11-million-patients-affected/",
    urlToImage:
      "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/11/a44ac89a-62d8-4516-b06a-84af2840dee9/thumbnail/1200x630/81e8f09dcf8e5abf49ae1b5bad45d0db/hca-gettyimages-109827272.jpg?v=0d985d39f30c0548885e26d84e710785",
    publishedAt: "2023-07-11T21:35:00Z",
    content:
      "Hospital and clinic operator HCA Healthcare said it has suffered a major hack that risks the data of at least 11 million patients.\r\nPatients in 20 states, including California, Florida, Georgia and T… [+3467 chars]",
  },
  {
    source: {
      id: null,
      name: "Detroit Free Press",
    },
    author: "Susan Tompor",
    title:
      "Bank of America must pay customers $100 million after crackdown - Detroit Free Press",
    description:
      "The Consumer Financial Protection Bureau cracked down on excessive fees and other bad banking practices that it said undermined customer trust.",
    url: "https://www.freep.com/story/money/personal-finance/susan-tompor/2023/07/11/bank-of-america-agreed-to-pay-fines-reimburse-customers/70402879007/",
    urlToImage:
      "https://www.freep.com/gcdn/presto/2023/07/11/PDTF/62ab530c-9121-4b83-914c-712f9c18b191-GTY_AFP_33NL6YG.jpg?crop=7410,4168,x1,y97&width=3200&height=1800&format=pjpg&auto=webp",
    publishedAt: "2023-07-11T21:16:24Z",
    content:
      "Getting the right amount of rewards for signing up for a credit card shouldn't be hard. And frankly, most consumers don't expect that they could be charged twice for the same slip-up. Or expect that … [+6770 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Chad Terhune",
    title:
      "Exclusive: Most patients using weight-loss drugs like Wegovy stop within a year, data show - Reuters",
    description:
      'Only about one-third of patients prescribed a popular weight-loss drug like Novo Nordisk’s <a href="https://www.reuters.com/markets/companies/NOVOb.CO" target="_blank">(NOVOb.CO)</a> Wegovy were still taking it a year later, while total healthcare costs for t…',
    url: "https://www.reuters.com/business/healthcare-pharmaceuticals/most-patients-using-weight-loss-drugs-like-wegovy-stop-within-year-data-show-2023-07-11/",
    urlToImage:
      "https://www.reuters.com/resizer/0BLa_7uk61JmMzrCvTIHDx9yr-8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J3HHG3KJNNKO5DKVOGJXSLAFLM.jpg",
    publishedAt: "2023-07-11T20:41:00Z",
    content:
      "July 11 (Reuters) - Only about one-third of patients prescribed a popular weight-loss drug like Novo Nordisks (NOVOb.CO) Wegovy were still taking it a year later, while total healthcare costs for the… [+4179 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Ines Ferré",
    title:
      "OpenAI CEO Sam Altman to take nuclear energy startup Oklo public - Yahoo Finance",
    description:
      "OpenAI's CEO is helping a nuclear startup go public via his special purpose acquisition company.",
    url: "https://finance.yahoo.com/news/openai-ceo-sam-altman-to-take-nuclear-energy-startup-oklo-public-203311751.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/C26.A6oZXKkVLE2ku3Xw3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/db417410-2026-11ee-9fdb-7c3ee385615d",
    publishedAt: "2023-07-11T20:33:11Z",
    content:
      "The chief executive behind ChatGPT is taking a nuclear energy startup public via his special purpose acquisition company.\r\nThe startup, Oklo, will merge with AltC Acquisition Corp, co-founded by Sam … [+1956 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Matt Jancer",
    title:
      "20 Best Walmart Plus Week Deals (2023): TVs, Soundbars, and Google Devices | WIRED - WIRED",
    description:
      "Walmart Plus Week is the retailer's answer to Amazon Prime Day. We've found great deals on our favorite 4K TVs, surround sound systems, and more.",
    url: "https://www.wired.com/story/best-walmart-plus-week-deals-2023-1/",
    urlToImage:
      "https://media.wired.com/photos/64a5d4f10227ed23db8043eb/191:100/w_1280,c_limit/best_buy_walmart_rival_deals.jpg",
    publishedAt: "2023-07-11T20:31:00Z",
    content:
      "Amazon Prime Day isn't just an opportunity for Amazon to flex its muscle. Its arch-competitors get in on the action too, and Walmart has jumped into the fray with its Walmart Plus Week sales event. W… [+9345 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Sruthi Shankar, Medha Singh",
    title:
      "Explainer: What is Nasdaq's special rebalancing and its impact? - Reuters",
    description:
      'A "special rebalance" of the Nasdaq 100 index <a href="https://www.reuters.com/markets/quote/.NDX" target="_blank">(.NDX)</a> will take place later this month as exchange operator <a href="/markets/us/market-heavyweights-dip-ahead-nasdaq-100-rebalance-2023-07…',
    url: "https://www.reuters.com/markets/us/what-is-nasdaqs-special-rebalancing-its-impact-2023-07-11/",
    urlToImage:
      "https://www.reuters.com/resizer/u5g1qx6Y_2N7oquxFkSTQfH2YVQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RQOQAIWD5JIR7OD2Z7OHFMW33E.jpg",
    publishedAt: "2023-07-11T19:43:00Z",
    content:
      'July 11 (Reuters) - A "special rebalance" of the Nasdaq 100 index (.NDX) will take place later this month as exchange operator Nasdaq(NDAQ.O) looks to reduce the concentration of heavyweight companie… [+3848 chars]',
  },
  {
    source: {
      id: "the-hill",
      name: "The Hill",
    },
    author: "The Hill",
    title: "Heat wave pushes demand on Texas grid to record highs - The Hill",
    description: null,
    url: "https://thehill.com/homenews/state-watch/4091456-heat-wave-pushes-demand-on-texas-grid-to-record-highs/",
    urlToImage: null,
    publishedAt: "2023-07-11T19:43:00Z",
    content: null,
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "COLLEEN SLEVIN Associated Press",
    title:
      "Insurance companies sue energy corporation after it was blamed for helping start Colorado wildfire - ABC News",
    description:
      "Dozens of insurance companies are suing Minneapolis-based Xcel Energy to recoup money paid out to homes and businesses lost in Colorado’s most destructive wildfire in 2021",
    url: "https://abcnews.go.com/US/wireStory/insurance-companies-sue-energy-corporation-after-blamed-helping-101106112",
    urlToImage:
      "https://s.abcnews.com/images/US/wirestory_34cf1af48f88ea0e3c72c687f3f6311f_16x9_992.jpg",
    publishedAt: "2023-07-11T19:31:12Z",
    content:
      "Dozens of insurance companies are suing Minneapolis-based Xcel Energy to recoup money paid out to homes and businesses lost in Colorado's most destructive wildfire in 2021.\r\nThe lawsuit was filed Thu… [+2808 chars]",
  },
  {
    source: {
      id: null,
      name: "dcist.com",
    },
    author: "Jordan Pascale",
    title: "Are BWI Airport's New Bathrooms The Best In The Nation? - DCist",
    description:
      "The airport is pitted against vibe-y restaurant bathrooms, posh ski resort lavatories, and rest stop loos.",
    url: "https://dcist.com/story/23/07/11/are-bwi-airport-bathrooms-the-best-in-the-usa/",
    urlToImage:
      "https://dcist.com/wp-content/uploads/sites/3/2023/07/Womens-Restroom-JMT-sm.jpg",
    publishedAt: "2023-07-11T19:26:12Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Daily Beast",
    },
    author: "Justin Baragona",
    title:
      "Mike Lindell Floats Nutty 'My Cousin Vinny' Scenario Where He Beats Dominion - The Daily Beast",
    description:
      "In a call with The Daily Beast, the MyPillow boss also seemed to take credit for Bed Bath & Beyond going bankrupt.",
    url: "https://www.thedailybeast.com/mike-lindell-floats-nutty-my-cousin-vinny-scenario-where-he-beats-dominion",
    urlToImage:
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1689100395/GettyImages-1250775435_d2mycn",
    publishedAt: "2023-07-11T19:15:00Z",
    content:
      "MAGA pillow magnate Mike Lindell predicted on Tuesday that the courts will toss out the billion-dollar defamation lawsuits hes facing from voting software firms in a scene reminiscent of the 1990s co… [+6142 chars]",
  },
  {
    source: {
      id: null,
      name: "WTAE Pittsburgh",
    },
    author: null,
    title:
      "Hills Snack Bar food truck announces grand opening - WTAE Pittsburgh",
    description:
      "It's been years since someone could say they ordered a hot dog or ICEE from a Hills snack bar, but plans announced Monday will be bringing that all back.",
    url: "https://www.wtae.com/article/hills-snack-bar-food-truck-grand-opening-date/44498176",
    urlToImage:
      "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/hills-1671140804.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    publishedAt: "2023-07-11T01:10:00Z",
    content:
      "BEAVER COUNTY, Pa. —It's been years since someone could say they ordered a hot dog or ICEE from a Hills snack bar, but plans announced Monday will be bringing that all back.\r\nReimagined as a food tru… [+901 chars]",
  },
  {
    source: {
      id: null,
      name: "KTLA Los Angeles",
    },
    author: "JAKE OFFENHARTZ, Associated Press",
    title:
      "The FDA is being asked to look into Logan Paul’s energy drink, which has the caffeine of 6 Coke cans - KTLA Los Angeles",
    description:
      "An influencer-backed energy drink that has earned viral popularity among children is facing scrutiny from lawmakers and health experts over its potentially dangerous levels of caffeine. On Sunday, Sen. Charles Schumer called on the Food and Drug Administratio…",
    url: "https://ktla.com/news/ap-the-fda-is-being-asked-to-look-into-logan-pauls-energy-drink-which-has-the-caffeine-of-6-coke-cans/",
    urlToImage:
      "https://ktla.com/wp-content/uploads/sites/4/2023/07/AP23191791513330.jpg?w=1280",
    publishedAt: "2023-07-10T23:46:11Z",
    content:
      "An influencer-backed energy drink that has earned viral popularity among children is facing scrutiny from lawmakers and health experts over its potentially dangerous levels of caffeine.\r\nOn Sunday, S… [+2873 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Eli Tan",
    title:
      "Meta's Threads tops 100 million users in just 5 days, Zuckerberg says - The Washington Post",
    description:
      "In less than a week, the Twitter competitor has become one of the most downloaded social media apps in the United States.",
    url: "https://www.washingtonpost.com/technology/2023/07/10/threads-meta-twitter-zuckerberg/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QZCKCQTSFZVGZR5KAGD4KKYRQQ_size-normalized.jpg&w=1440",
    publishedAt: "2023-07-10T23:35:10Z",
    content:
      "Comment on this story\r\nComment\r\nMetas new text-based social network Threads has eclipsed 100 million users in its first five days.\r\nThe app is now among the most used social media platforms in the Un… [+1692 chars]",
  },
  {
    source: {
      id: null,
      name: "Barron's",
    },
    author: "Liz Moyer",
    title:
      "As Twitter Traffic Takes a Hit, Zuck-Musk Fight Gets Heated - Barron's",
    description:
      "Twitter traffic fell 11% from last year after Threads went live. Twitter traffic was falling even before Threads, Similiarweb said.",
    url: "https://www.barrons.com/articles/twitter-elon-musk-zuckerberg-c2717b80",
    urlToImage: "https://images.barrons.com/im-814627/social",
    publishedAt: "2023-07-10T22:55:00Z",
    content:
      "The rivalry between billionaire social media owners Mark Zuckerberg and Elon Musk is just getting warmed up.Zuckerbergs \r\nMeta Platforms\r\n(ticker: META) rolled out microblogging site Threads late las… [+1926 chars]",
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Breck Dumas",
    title:
      "India to surpass US to become world's second-largest economy by 2075: Goldman Sachs - Fox Business",
    description:
      "India is set to become the world's second-largest economy behind China by 2075, knocking the U.S. into third place, according to a new Goldman Sachs report.",
    url: "https://www.foxbusiness.com/economy/india-surpass-us-become-worlds-second-largest-economy-2075-goldman-sachs",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/india-taj-mahal.jpg?ve=1&tl=1",
    publishedAt: "2023-07-10T22:52:16Z",
    content:
      "India's economy is on track to surpass the United States' and become the second-largest in the world behind China in a matter of decades, according to forecasting by Goldman Sachs Research.\r\nThe inve… [+3036 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Matt Jancer",
    title:
      "11 Best Walmart Plus Week Deals (2023): TVs, Soundbars, and Google Devices | WIRED - WIRED",
    description:
      "Walmart Plus Week is the retailer's answer to Amazon Prime Day. We've found great deals on our favorite 4K TVs, surround sound systems, and more.",
    url: "https://www.wired.com/story/best-walmart-plus-week-deals-2023/",
    urlToImage:
      "https://media.wired.com/photos/64a5d4f10227ed23db8043eb/191:100/w_1280,c_limit/best_buy_walmart_rival_deals.jpg",
    publishedAt: "2023-07-10T22:00:00Z",
    content:
      "Amazon Prime Day isn't just an opportunity for Amazon to flex its muscle. Its arch-competitors get in on the action too, and Walmart has jumped into the fray with its Walmart Plus Week sales event on… [+6107 chars]",
  },
  {
    source: {
      id: null,
      name: "WCVB Boston",
    },
    author: "Shaun Ganley",
    title:
      "Boston tunnel closure causing backups into Logan Airport - WCVB Boston",
    description:
      "\"We're going to have to start diverting traffic off and on until we can release the congestion that's backing up into the terminal.\"",
    url: "https://www.wcvb.com/article/boston-sumner-tunnel-closure-backups-logan-airport/44496615",
    urlToImage:
      "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/sumner-airport-traffic-64a744945381d.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    publishedAt: "2023-07-10T21:53:00Z",
    content:
      "EAST BOSTON, Mass. —Officials expect traffic leaving Boston's Logan Airport to experience more disruptions in the days and weeks ahead amid the closure of the Sumner Tunnel into the city.\r\n\"Last week… [+1899 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "UPS doubled its profits during the pandemic and union drivers weren't rewarded: Teamsters President - CNBC Television",
    description:
      "Sean O’Brien, Teamsters President, joins 'Closing Bell Overtime' to talk negotiations between the union and UPS and what it will take to come to a deal after...",
    url: "https://www.youtube.com/watch?v=ux_ykTjyeww",
    urlToImage: "https://i.ytimg.com/vi/ux_ykTjyeww/maxresdefault.jpg",
    publishedAt: "2023-07-10T21:50:38Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "OCRegister",
    },
    author: "Jonathan Lansner",
    title:
      "LA billionaire sells San Diego Union-Tribune to owner of Southern California News Group - OCRegister",
    description:
      "A memo to the Union-Tribune staff said management will “make some difficult staffing decisions.”",
    url: "https://www.ocregister.com/2023/07/10/la-billionaire-sells-san-diego-union-tribune-to-owner-of-southern-california-news-group/",
    urlToImage:
      "https://www.ocregister.com/wp-content/uploads/2023/07/OCR-L-PURCHASE-0711-20.jpg?w=1024&h=682",
    publishedAt: "2023-07-10T21:45:47Z",
    content:
      "The majority owner of the Southern California News Group has bought the San Diego Union-Tribune from Los Angeles billionaire Dr. Patrick Soon-Shiong for an undisclosed amount.\r\nThe U-T purchase by in… [+3210 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Melissa Rudy",
    title:
      "Ozempic diabetes and weight loss medication under investigation after a few reports of suicidal thoughts - Yahoo News",
    description:
      "The popular medications Ozempic and Saxenda from Novo Nordisk are being investigated after three people experienced an increase in thoughts of suicide and...",
    url: "https://news.yahoo.com/ozempic-diabetes-weight-loss-medication-213746723.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/7TBVF76nNB_NsFetNyY0Gg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/fox_news_text_979/676c200e15d79246958259bbdb156842",
    publishedAt: "2023-07-10T21:37:46Z",
    content:
      "This story discusses suicide. If you or someone you know is having thoughts of suicide, please contact the Suicide &amp; Crisis Lifeline at 988 or 1-800-273-TALK (8255).\r\nThe popular medications\r\n Oz… [+4765 chars]",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "Aimee Picchi",
    title:
      "Medicare says it will pay for the Alzheimer's medication Leqembi. Here's how it works. - CBS News",
    description:
      "Even with Medicare coverage, many seniors will be on the hook for a hefty co-payment for the newly approved drug.",
    url: "https://www.cbsnews.com/news/leqembi-price-insurance-medicare-coverage-heres-how-it-works/",
    urlToImage:
      "https://assets1.cbsnewsstatic.com/hub/i/r/2023/07/06/62ec83cf-f401-478a-abbd-999f0c00500d/thumbnail/1200x630/c4cf1df445fc63eb2f83659c78274142/snapshot-2023-07-06t174902-711.jpg?v=758b39f312cc5ee6054d0eb9bad6c0cd",
    publishedAt: "2023-07-10T21:31:51Z",
    content:
      "Medicare last week agreed to cover the new drug Leqembi, the first medication proven to slow the progression of Alzheimer's disease, following the U.S. Food and Drug Administration's green light of t… [+4277 chars]",
  },
  {
    source: {
      id: null,
      name: "Bangor Daily News",
    },
    author: "Lori Valigra",
    title:
      "6 weeklies not included in Maine newspaper chain's landmark sale - Bangor Daily News",
    description:
      "Maine media mogul Reade Brower said Monday that he has sold his five daily newspapers and 17 weeklies to a national nonprofit.",
    url: "http://www.bangordailynews.com/2023/07/10/business/weeklies-not-included-maine-newspaper-sale/",
    urlToImage:
      "https://bdn-data.s3.amazonaws.com/uploads/2023/07/EllsAmfrontpage.jpg",
    publishedAt: "2023-07-10T21:31:19Z",
    content:
      "Maine media mogul Reade Brower said Monday that he has sold his five daily newspapers, including the Portland Press Herald, and 17 weeklies to a national newspaper nonprofit.\r\nMissing from the sale w… [+2652 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Erica Werner, Lauren Kaori Gurley",
    title:
      "Worker strikes grip Los Angeles as nation faces 'hot labor summer' - The Washington Post",
    description:
      "Many high profile labor actions have taken place in Southern California, disrupting travel and tourism as workers flex their might.",
    url: "https://www.washingtonpost.com/business/2023/07/10/los-angeles-labor-hotel-strike/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A66EEJPK5VEYGKL4M34WMID66A.JPG&w=1440",
    publishedAt: "2023-07-10T21:27:17Z",
    content:
      "Comment on this story\r\nComment\r\nLOS ANGELES First it was nurses. Then graduate students. Then elementary school workers.\r\nNow its hotel employees, and TV and movie writers. Next up could be actors.\r\n… [+8134 chars]",
  },
  {
    source: {
      id: null,
      name: "KTLA Los Angeles",
    },
    author: "David Lazarus",
    title:
      "Here’s what to do if no one will insure your home - KTLA Los Angeles",
    description:
      "Farmers Insurance has become the latest insurance company to back away from insuring homes in wildfire-prone California. It follows Allstate and State Farm in similarly limiting exposure to climate change in the Golden State. Farmers said in a statement that …",
    url: "https://ktla.com/news/california/heres-what-to-do-if-no-one-will-insure-your-home/",
    urlToImage:
      "https://ktla.com/wp-content/uploads/sites/4/2023/07/GettyImages-1278099350.jpg?w=1280",
    publishedAt: "2023-07-10T21:22:55Z",
    content:
      "Farmers Insurance has become the latest insurance company to back away from insuring homes in wildfire-prone California.\r\nIt follows Allstate and State Farm in similarly limiting exposure to climate … [+2811 chars]",
  },
  {
    source: {
      id: null,
      name: "KTLA Los Angeles",
    },
    author: "Iman Palm",
    title:
      "McDonald’s giving out free fries for National French Fry Day - KTLA Los Angeles",
    description:
      "Some could argue that there is nothing better than free food. McDonald’s is giving away free fries this week to celebrate “National French Fry Day” on July 13. On Thursday, customers can order free fries, in any size, through the McDonald’s app. No purchase i…",
    url: "https://ktla.com/news/nationworld/mcdonalds-giving-out-free-fries-for-national-french-fry-day/",
    urlToImage:
      "https://ktla.com/wp-content/uploads/sites/4/2023/05/ca._mcdonalds_gettyimages-84709618.jpg?w=1280",
    publishedAt: "2023-07-10T21:22:45Z",
    content:
      "Some could argue that there is nothing better than free food.\r\nMcDonalds is giving away free fries this week to celebrate National French Fry Day on July 13.\r\nOn Thursday, customers can order free fr… [+530 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Nikki Main",
    title:
      "Elizabeth Holmes' Prison Sentence Quietly Reduced by Two Years - Gizmodo",
    description:
      "Records reveal Theranos co-founder Elizabeth Holmes will spend less time at the minimum-security prison camp in Texas.",
    url: "https://gizmodo.com/elizabeth-holmes-prison-sentence-reduced-by-two-years-1850623839",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/84ad1df3b62c950556d54637d362e762.jpg",
    publishedAt: "2023-07-10T21:10:00Z",
    content:
      "Disgraced Theranos co-founder Elizabeth Holmes prison sentence has been reduced by two years, according to the Bureau of Prisons records. Holmes was sentenced to 11 years and three months in prison f… [+2429 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Alexandra Garfinkle",
    title:
      "Amazon Prime Day will be a 'bellwether' for 2023 holiday shopping - Yahoo Finance",
    description:
      "Amazon's Prime Day event on July 11 and July 12 will be a telling event for customers and retailers alike.",
    url: "https://finance.yahoo.com/news/amazon-prime-day-will-be-a-bellwether-for-2023-holiday-shopping-210527658.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/DWaTnpcbFSMZkKD5jefmpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-06/e29a1d70-d2d5-11eb-b7ff-ec3f4ebf4bb7",
    publishedAt: "2023-07-10T21:05:27Z",
    content:
      "Amazon (AMZN) Prime Day is set to take place on July 11 and July 12 and the results of the e-commerce giant's most famous sale will likely have ramifications far beyond Amazon.\r\n\"Prime Day is always … [+3769 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Police",
    },
    author: "Chris Thomas",
    title:
      "Prime Day pricing has already arrived for Echo, Ring, and Fire TV devices - Android Police",
    description:
      "Some ridiculous early Prime Day deals on Amazon's own, streamlined electronics",
    url: "https://www.androidpolice.com/amazon-echo-ring-fire-tv-prime-day-pricing/",
    urlToImage:
      "https://static1.anpoimages.com/wordpress/wp-content/uploads/2019/12/Alexa-Assistant-smart-display-Google-Mini-light-bulb-lightbulb-smart-home-generic-hero-scaled.jpg",
    publishedAt: "2023-07-10T20:54:00Z",
    content:
      "Prime Day is especially huge for deals on electronics, so it makes perfect sense for Amazon to get ahead of the game and lure us gadget lovers to its own ever-expanding brands of entertainment and sm… [+6943 chars]",
  },
  {
    source: {
      id: null,
      name: "KXAN.com",
    },
    author: "Christopher Adams",
    title: "$1 million winning lottery ticket sold in Austin - KXAN.com",
    description:
      "The lucky ticket matched all five white ball numbers, but not the Mega Ball number.",
    url: "https://www.kxan.com/news/local/austin/1-million-winning-lottery-ticket-sold-in-austin/",
    urlToImage:
      "https://www.kxan.com/wp-content/uploads/sites/40/2023/04/GettyImages-1455618982-e1680465684345.jpg?w=1280",
    publishedAt: "2023-07-10T20:44:01Z",
    content:
      "Editors Note: The video above shows KXAN News Todays top headlines for July 10, 2023\r\nAUSTIN (KXAN) A trip to Austin just made someone $1 million richer.\r\nA winning lottery ticket, worth $1,000,002, … [+780 chars]",
  },
  {
    source: {
      id: null,
      name: "Bankrate.com",
    },
    author: "Karen Bennett",
    title:
      "Here's How Much Investing $1,000 In A CD Could Earn You In 1 Year - Bankrate.com",
    description: "A one-year CD can be a safe and worthwhile option.",
    url: "https://www.bankrate.com/banking/cds/how-much-1000-could-earn-you-1-year-cd/",
    urlToImage:
      "https://www.bankrate.com/2023/07/10161609/Deposits_Heres_how_much_1000_in_a_CD_could_earn_you_in_a_1_year.jpg",
    publishedAt: "2023-07-10T20:30:10Z",
    content: null,
  },
];

export default businessArticles;

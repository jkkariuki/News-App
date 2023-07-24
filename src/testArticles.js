const headlines = [
  {
    source: {
      id: null,
      name: "Cyclingnews.com",
    },
    author: "Stephen Farrand",
    title:
      "As it happened: Jonas Vingegaard celebrates Tour de France victory as Meeus wins Champs Elysees sprint - Cyclingnews",
    description: "Riders celebrate completing three weeks of Grand Tour racing",
    url: "https://www.cyclingnews.com/races/tour-de-france-2023/stage-21/live-report/",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/ovE5XGgX6ZVjNhDYJkarGR-1200-80.jpg",
    publishedAt: "2023-07-23T18:55:30Z",
    content:
      "2023-07-23T18:55:30.352ZIt's been a privilege to bring you the full Cyclingnews coverage of the Tour de France yet again. But there so much more racing to come in 2023.\r\nMerci et à bientôt!    Vive l… [+21555 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Silvia Amaro",
    title:
      "Spain's right-wing parties could win a parliamentary majority, exit polls show after key election - CNBC",
    description:
      "In the absence of a clear majority, the focus is now heavily on who will be the third largest political force emerging from Sunday's election.",
    url: "https://www.cnbc.com/2023/07/23/spains-right-wing-parties-could-win-majority-exit-polls-show.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/107274657-1689921904742-gettyimages-1556348941-20230719electionscampaignheatwavespainpb1742_ku1dshea.jpeg?v=1690137233&w=1920&h=1080",
    publishedAt: "2023-07-23T18:33:53Z",
    content:
      "Spain's conservative party PP [Partido Popular] is on track to lead negotiations to form a new government in Madrid, exit polls have shown, suggesting this could be the end of the socialist rule of P… [+2594 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Dan Williams",
    title:
      "Fitted with pacemaker, Netanyahu to attend key vote as crisis spirals - Reuters",
    description:
      'Israeli Prime Minister Benjamin Netanyahu said he was "doing excellently" after an unscheduled pacemaker implant and would on Monday attend a key judicial reform vote that has brought nationwide protests to a boil and stirred calls for compromise.',
    url: "https://www.reuters.com/world/middle-east/israels-netanyahu-says-he-will-be-fitted-with-pacemaker-overnight-2023-07-22/",
    urlToImage:
      "https://www.reuters.com/resizer/4V3xT6_P8XBsPL6XYa01JPDNpnc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ODSVQLFEOVIVJI2K5TD5WYB6LY.jpg",
    publishedAt: "2023-07-23T17:58:00Z",
    content:
      'JERUSALEM, July 23 (Reuters) - Israeli Prime Minister Benjamin Netanyahu said he was "doing excellently" after an unscheduled pacemaker implant and would on Monday attend a key judicial reform vote t… [+4815 chars]',
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: null,
    title:
      "2023 NASCAR at Pocono odds, predictions, lineup, start time: Model makes surprising HighPoint 400 race picks - CBS Sports",
    description:
      "SportsLine simulated the NASCAR Cup Series' 2023 HighPoint.com 400 at Pocono Raceway 10,000 times",
    url: "https://www.cbssports.com/nascar/news/2023-nascar-at-pocono-odds-predictions-lineup-start-time-model-makes-surprising-highpoint-400-race-picks/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2023/02/19/34bbfc89-baa3-4cf5-b512-cd3b9c939b3d/thumbnail/1200x675/a9b8bd954591ba254e93ce8a4b0e5a1c/nascar-usatsi.jpg",
    publishedAt: "2023-07-23T17:34:25Z",
    content:
      "Pocono Raceway will host Sunday's NASCAR Cup Series race, the 2023 HighPoint.com 400. The green flag drops at 2:30 p.m. ET, when Joe Gibbs Racing will try to maintain its spot at the top of the NASCA… [+4696 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "Steve Janoski",
    title:
      "Russian missiles strike Odesa, killing one, wounding at least 22 and hitting historic cathedral - New York Post ",
    description:
      "A Russian missile attack on the Ukrainian port city of Odesa reportedly killed at least one person, injured 22 others and severely damaged a historic church that suffered a direct hit that nearly d…",
    url: "https://nypost.com/2023/07/23/russian-missiles-strike-odessa-killing-one-wounding-at-least-22-and-devastating-historic-cathedral/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2023/07/NYPICHPDPICT000014520710.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2023-07-23T17:08:00Z",
    content:
      "A Russian missile attack on the Ukrainian port city of Odesa reportedly killed at least one person, injured 22 — including four children — and nearly destroyed a centuries-old historic church.\r\nRussi… [+3173 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Nia Williams",
    title:
      "Nova Scotia wrestles with aftermath of devastating floods - Reuters",
    description:
      "Canada's East Coast province of Nova Scotia began cleaning up on Sunday after torrential rainfall caused devastating floods, while the search continued for four people including two children who went missing during the deluge.",
    url: "https://www.reuters.com/business/environment/atlantic-canada-province-wrestles-with-aftermath-devastating-floods-2023-07-23/",
    urlToImage:
      "https://www.reuters.com/resizer/H42g961Qau55-b_ZFKCb4WK2PiY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PR4FVPE36NNLZHEAQYKSZKYVSM.jpg",
    publishedAt: "2023-07-23T17:07:00Z",
    content:
      "July 23 (Reuters) - Canada's East Coast province of Nova Scotia began cleaning up on Sunday after torrential rainfall caused devastating floods, while the search continued for four people including t… [+3050 chars]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "The Associated Press",
    title:
      "Weekend shootings leave at least 6 dead, 20 others wounded in Chicago - ABC News",
    description:
      "Six people have died and at least 20 others were wounded in weekend shootings across Chicago",
    url: "https://abcnews.go.com/US/wireStory/weekend-shootings-leave-6-dead-20-wounded-chicago-101590395",
    urlToImage:
      "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
    publishedAt: "2023-07-23T16:02:07Z",
    content:
      "CHICAGO -- Six people have died and at least 20 others were wounded in weekend shootings across Chicago.\r\nA shooting early Saturday in the city's North Lawndale neighborhood killed one man and wounde… [+601 chars]",
  },
  {
    source: {
      id: null,
      name: "9to5google.com",
    },
    author: "Ben Schoon",
    title: "Galaxy Z Flip 5 and Fold 5 event: What to expect - 9to5Google",
    description:
      "Samsung's next Unpacked event is coming and will see the launch of Galaxy Z Fold 5 and Z Flip 5 among other devices. Here's what to know.",
    url: "https://9to5google.com/2023/07/23/galaxy-z-fold-5-flip-5-event-expect/",
    urlToImage:
      "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2020/02/samsung_logo_1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2023-07-23T16:00:00Z",
    content:
      "Samsung is set to host its next Unpacked launch event for the Galaxy Z Fold 5 and Flip 5 later this week, and there’s actually a ton to look forward to. Here’s everything you can expect at the event.… [+4636 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: ", USA TODAY",
    title:
      "Ukraine Russia war live updates: Bombs slam Odesa historical sites - USA TODAY",
    description:
      "Russia has already lost the war in Ukraine in terms of President Vladimir Putin's goals, Secretary of State Antony Blinken said in an interview",
    url: "https://www.usatoday.com/story/news/world/ukraine/2023/07/23/ukraine-russia-war-live-updates/70452764007/",
    urlToImage:
      "https://www.gannett-cdn.com/presto/2023/07/23/USAT/30d174c0-189f-4616-80a9-d7522769e52f-AP_Russia_Ukraine_War_45.jpg?auto=webp&crop=8623,4851,x0,y438&format=pjpg&width=1200",
    publishedAt: "2023-07-23T15:43:12Z",
    content:
      "Russia has already lost the war in Ukraine in terms of Russian President Vladimir Putin's goals when his tanks rolled across the border 17 months ago, Secretary of State Antony Blinken said in an int… [+4280 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Cambodia election: 'This was more of a coronation than an election' - BBC",
    description:
      "Prime Minister Hun Sen's son is expected to take over within weeks of the vote.",
    url: "https://www.bbc.com/news/world-asia-66283745",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/4EB5/production/_130494102_059adaecf813bc8c0d558aba556fb6a39518cad4.jpg",
    publishedAt: "2023-07-23T15:38:49Z",
    content:
      "Undeterred by the pouring rain, a long convoy of motorbikes carrying cheering, flag-waving supporters of Cambodia's ruling party revved their engines in preparation for their triumphant final rally i… [+7624 chars]",
  },
  {
    source: {
      id: null,
      name: "ABC17News.com",
    },
    author: "Erika McGuire",
    title:
      "Eight people hurt after boat crashes into home on Lake of the Ozarks - ABC17News.com",
    description:
      "MILLER COUNTY, Mo (KMIZ) Eight people were sent to the hospital after a boat crashed into a home on the Lake of the Ozarks. Missouri State Highway Patrol reported the crash happened at 11:55 p.m. Saturday at the 1.3 mile mark of the Osage Arm. Troopers say it…",
    url: "https://abc17news.com/top-stories/2023/07/23/eight-people-hurt-after-boat-crashes-into-home-on-lake-of-the-ozarks/",
    urlToImage:
      "https://abc17news.b-cdn.net/abc17news.com/2023/07/NEW-MSHP.jpeg",
    publishedAt: "2023-07-23T15:37:19Z",
    content:
      "MILLER COUNTY, Mo (KMIZ)\r\nEight people were sent to the hospital after a boat crashed into a home on the Lake of the Ozarks.\r\nMissouri State Highway Patrol reported the crash happened at 11:55 p.m. S… [+602 chars]",
  },
  {
    source: {
      id: "the-hill",
      name: "The Hill",
    },
    author: "The Hill",
    title:
      "Texas Republican: Newly reported tactics of state troopers at border ‘not acceptable’ - The Hill",
    description: null,
    url: "https://thehill.com/homenews/state-watch/4114270-texas-republican-newly-reported-tactics-of-state-troopers-at-border-not-acceptable/",
    urlToImage: null,
    publishedAt: "2023-07-23T15:15:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Ohio officers order police dog to attack unarmed man | GMA - ABC News",
    description:
      "Newly released body camera video appears to show officers mandating a police dog to attack an unarmed Black man as he was trying to surrender.SUBSCRIBE to AB...",
    url: "https://www.youtube.com/watch?v=Z8MLwawUojg",
    urlToImage: "https://i.ytimg.com/vi/Z8MLwawUojg/maxresdefault.jpg",
    publishedAt: "2023-07-23T15:04:36Z",
    content: null,
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
      name: "Hollywood Reporter",
    },
    author: "Pamela McClintock",
    title:
      "Box Office Stunner: ‘Barbie’ Opens to Staggering $155M, ‘Oppenheimer’ Snags $80.5M - Hollywood Reporter",
    description:
      "Thanks to the Barbenheimer phenomenon, it is the first time in history that a three-day weekend has seen one movie open to $100 million or more and another to $50 million or more. And it is the fourth-biggest weekend of all time at the domestic box office.",
    url: "https://www.hollywoodreporter.com/movies/movie-news/barbie-box-office-oppenheimer-opening-1235541719/",
    urlToImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Barbie-Oppenheimer-Split-3-Publicity-H-2023.jpg?w=1024",
    publishedAt: "2023-07-23T15:00:00Z",
    content:
      "The summer box office just went nuclear.\r\nFilmmaker Greta Gerwig’s female-fueled Barbieopened to a historic $155 million domestically, a threshold usually reserved for male-driven superhero fare or m… [+6062 chars]",
  },
  {
    source: {
      id: null,
      name: "InStyle",
    },
    author: "https://www.facebook.com/InStyle",
    title:
      "Selena Gomez Rang In Her 31st Birthday While Wearing a Fiery Red Minidress - InStyle",
    description:
      "Selena Gomez celebrated her 31st birthday with a star-studded party, where she wore a fiery red strapless minidress.",
    url: "https://www.instyle.com/selena-gomez-fiery-red-minidress-31st-birthday-party-7564405",
    urlToImage:
      "https://www.instyle.com/thmb/wq_gfd5LfK8BROV2w5xJ2mWggeU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/selena-gomez-birthday-party-dress-social-37ead8d958324cfb86a4d8bbf16d7139.jpg",
    publishedAt: "2023-07-23T14:55:05Z",
    content:
      "Selena Gomez is continuing to celebrate her 31st birthday in style. \r\nWhile she initially focused on her perfectly blown-out hair during the day, by night, Gomez turned her attention to what she was … [+1418 chars]",
  },
  {
    source: {
      id: null,
      name: "Phys.Org",
    },
    author: "Science X",
    title: "Asteroid-smashing NASA probe sent boulders into space - Phys.org",
    description:
      "When a NASA spacecraft successfully knocked an asteroid off course last year it sent dozens of boulders skittering into space, images from the Hubble telescope showed on Thursday.",
    url: "https://phys.org/news/2023-07-asteroid-smashing-nasa-probe-boulders-space.html",
    urlToImage:
      "https://scx2.b-cdn.net/gfx/news/2023/the-small-spots-of-lig-1.jpg",
    publishedAt: "2023-07-23T13:30:01Z",
    content:
      "When a NASA spacecraft successfully knocked an asteroid off course last year it sent dozens of boulders skittering into space, images from the Hubble telescope showed on Thursday.\r\nNASA's fridge-size… [+2737 chars]",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: null,
    title:
      "Three suitcases with human remains discovered along Delray Beach Intracoastal Waterway - CBS Miami",
    description:
      "Officers said when they arrived a suitcase was recovered with human remains inside.",
    url: "https://www.cbsnews.com/miami/news/three-suitcases-with-human-remains-discovered-along-delray-beach-intracoastal-waterway/",
    urlToImage:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2023/07/23/14389c99-842f-48e2-842e-7b8c4fb0ee74/thumbnail/1200x630/f429bbadbecd4c761149fb1108de9f3e/14ec1b75eced49338f87d0536f9af1c5-8.jpg?v=8be0a296491a12ce38351fd824e37a16",
    publishedAt: "2023-07-23T13:29:46Z",
    content:
      "DELRAY BEACH (CBS12) — Three suitcases containing the remains of what police believe to be a woman were recovered from the Intracoastal Waterway in Delray Beach.\r\nThe Delray Beach Police Department (… [+959 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Duarte Mendonca, Chris Liakos, Elinda Labropoulou",
    title:
      "Tourists flee Rhodes wildfires in Greece’s largest-ever evacuation - CNN",
    description:
      "A large wildfire tearing through the Greek island of Rhodes forced thousands of tourists to flee their hotels in what Greek officials said was the largest evacuation effort in the country’s history.",
    url: "https://www.cnn.com/2023/07/22/europe/greece-record-breaking-heat-wave-climate-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230722141010-01-greece-tourist-evacuations-0722.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-07-23T13:01:00Z",
    content:
      "A large wildfire tearing through the Greek island of Rhodes forced thousands of tourists to flee their hotels in what Greek officials said was the largest evacuation effort in the countrys history.\r\n… [+4676 chars]",
  },
  {
    source: {
      id: null,
      name: "The Cut",
    },
    author: "Claire Comstock-Gay",
    title: "Weekly Horoscopes for the Week of July 24 by the Cut - The Cut",
    description:
      "A list of all the horoscope signs (Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces) and their weekly horoscopes, by the Cut’s astrologer Madame Clairevoyant.",
    url: "http://www.thecut.com/2023/07/weekly-horoscopes-for-the-week-of-july-24-by-the-cut.html",
    urlToImage:
      "https://pyxis.nymag.com/v1/imgs/0d7/363/f219ffb677924d8f6be17de979f23ce6a3-leo-season-weekly-whitney-houston.1x.rsocial.w1200.jpg",
    publishedAt: "2023-07-23T12:30:39Z",
    content:
      "On Friday, communication planet Mercury enters Virgo, where it will remain until October. During this time, its worth making an extra effort to say exactly what you mean. Dont rely on buzzwords or va… [+7447 chars]",
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Brie Stimson",
    title:
      "Aretha Franklin's handwritten will found in couch cushions is valid, jury decides - Fox Business",
    description:
      "A jury made a decision Tuesday in a brief trial over two competing wills that has divided Aretha Franklin's family after her death in 2018.",
    url: "https://www.foxbusiness.com/entertainment/aretha-franklins-handwritten-will-found-couch-cushions-is-valid-jury-decides",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/aretha-franklin.jpg?ve=1&tl=1",
    publishedAt: "2023-07-12T00:08:26Z",
    content:
      "A handwritten will found under Aretha Franklin’s couch cushions after her death is valid and supersedes an earlier one that was locked in a cabinet, a jury decided Tuesday. \r\nHer son Ted White II has… [+3869 chars]",
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
      id: "espn",
      name: "ESPN",
    },
    author: "Adam Rittenberg",
    title:
      "Attorney says Northwestern fired coach Pat Fitzgerald for cause - ESPN - ESPN",
    description:
      "Northwestern fired coach Pat Fitzgerald for cause, his attorney told ESPN's Adam Rittenberg on Tuesday.",
    url: "https://www.espn.com/college-football/story/_/id/37996312/attorney-says-northwestern-fired-coach-pat-fitzgerald-cause",
    urlToImage:
      "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0711%2Fr1196685_1296x729_16%2D9.jpg",
    publishedAt: "2023-07-11T23:08:00Z",
    content:
      "EVANSTON, Ill. -- Northwestern fired football coach Pat Fitzgerald for cause, his attorney told ESPN on Tuesday, setting up a potential legal showdown between the College Football Hall of Famer and h… [+3603 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title: "Weather Action Days extended until Monday! - ABC15 Arizona",
    description:
      "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
    url: "https://www.youtube.com/watch?v=IBRgi209SJ0",
    urlToImage: null,
    publishedAt: "2023-07-11T22:58:42Z",
    content: null,
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: ", USA TODAY",
    title:
      "MLB All-Star Game live updates: Live updates, highlights and more from Seattle - USA TODAY",
    description:
      "Major League Baseball's 93rd All-Star Game is Tuesday night in Seattle. The starters and lineups are set. Here's everything you need to know.",
    url: "https://www.usatoday.com/story/sports/mlb/2023/07/11/mlb-all-star-game-2023-live-updates/70401994007/",
    urlToImage:
      "https://www.gannett-cdn.com/presto/2023/07/12/USAT/b1f9b0ba-29df-408c-8f04-8f5d834e5518-GTY_1534998004.jpg?auto=webp&crop=3402,1914,x0,y254&format=pjpg&width=1200",
    publishedAt: "2023-07-11T22:18:45Z",
    content:
      "Major League Baseball's 93rd All-Star Game is Tuesday at T-Mobile Park in Seattle. It's the first time the ballpark has hosted the Midsummer Classic since 2001. This year, rosters are full of veteran… [+12573 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Paul MacInnes",
    title:
      "Wimbledon diary: Svitolina's Styles dilemma and Blake bigs up Eubanks - The Guardian",
    description:
      "Elina Svitolina may want to wait to see Harry Styles while the numbers are up through the gates of SW19",
    url: "https://www.theguardian.com/sport/2023/jul/11/wimbledon-diary-svitolina-harry-styles-christopher-eubanks",
    urlToImage:
      "https://i.guim.co.uk/img/media/a7f8986d9e95881a163d5a5bcb0684a0c30889a1/0_173_4981_2989/master/4981.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ad0e77746ab5ecc4afedacf15ec9bcb4",
    publishedAt: "2023-07-11T22:17:00Z",
    content:
      "Success without Styles\r\nThe Harry Styles concert karma theory. Elina Svitolina had tickets for a Harry Styles concert in Vienna last Saturday, but couldnt go because she was shredding stereotypes at … [+2614 chars]",
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
      id: "the-verge",
      name: "The Verge",
    },
    author: "Brandon Widder",
    title:
      "Amazon Prime Day 2023: the best tech deals, tips, and latest news - The Verge",
    description:
      "Amazon Prime Day is the online retail giant’s biggest shopping event of the year, outside of Black Friday / Cyber Monday. It promises big deals and discounts on tech and gadgets like tablets, phones, TVs, games, and more.",
    url: "https://www.theverge.com/23791100/amazon-prime-day-news-deals-sales-dates-tips-2023",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/qRD0Zue8FXjHpg4WZSF2WkhJR3M=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24755520/236713_Prime_Day_HHerrera_004.jpeg",
    publishedAt: "2023-07-11T22:04:14Z",
    content:
      "In the past, Amazon Prime Day has been a bit of a moving target. Sometimes it occurred in the summer, sometimes in the fall, and sometimes it unofficially happened twice a year (moonlighting as Amazo… [+13610 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Nouran Salahieh, Lauren Mascarenhas",
    title:
      "Catastrophic flooding swamped Vermont’s capital as intense storms forced evacuations and closures in Northeast - CNN",
    description:
      "Intense rainstorms that inundated the Northeast turned streets into rivers, forced evacuations and prompted officials in Vermont’s capital, Montpelier, to close the downtown area.",
    url: "https://www.cnn.com/2023/07/11/us/northeast-storms-flooding-excessive-rainfall-tuesday/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230711092956-montpelier-vermont-downtown-flooding-screengrab.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-07-11T21:39:00Z",
    content:
      "Intense rainstorms that inundated the Northeast turned streets into rivers, forced evacuations and prompted officials in Vermonts capital, Montpelier, to close the downtown area.\r\nMake no mistake, th… [+7749 chars]",
  },
  {
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Peter White",
    title:
      "Ari Emanuel & Bryan Lourd Offer To Step In To Prevent Actors Strike As Studio CEOs Agree To Bring In Federal Mediators - Deadline",
    description:
      "Last minute calls are being made by Hollywood chiefs to try and prevent an actors strike. Deadline understands that Endeavor boss Ari Emanuel and CAA chief Bryan Lourd made an offer to help find a …",
    url: "https://deadline.com/2023/07/ari-emanuel-bryan-lourd-offer-to-step-in-to-prevent-actors-strike-1235434614/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2023/07/Ari-Emanuel-Bryan-Lourd.jpg?w=1024",
    publishedAt: "2023-07-11T21:37:00Z",
    content:
      "Last minute calls are being made by Hollywood chiefs to try and prevent an actors strike.\r\nDeadline understands that Endeavor boss Ari Emanuel and CAA chief Bryan Lourd made an offer to help find a p… [+2050 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Georgia grand jury picked for possible charges in Trump election case - BBC",
    description:
      "The Georgia panel is expected to weigh whether Donald Trump and his allies interfered in the 2020 election.",
    url: "https://www.bbc.com/news/world-us-canada-66168402",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/3219/production/_130352821_trump-2020.jpg",
    publishedAt: "2023-07-11T21:33:25Z",
    content:
      "A US grand jury that is expected to decide whether to charge former President Donald Trump and his allies over their efforts to overturn the 2020 election has been sworn in in Georgia.\r\nMr Trump has … [+3396 chars]",
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
      id: null,
      name: "Variety",
    },
    author: "Rebecca Rubin",
    title:
      "Box Office: ‘Mission: Impossible – Dead Reckoning’ Aims for $90 Million Five-Day Debut - Variety",
    description:
      "Tom Cruise’s mission, should he choose to accept it, is to save the summer box office… again. After a lackluster start to popcorn season (“The Flash,” “Indiana Jones&#…",
    url: "https://variety.com/2023/film/box-office/box-office-mission-impossible-7-opening-weekend-projection-1235666529/",
    urlToImage:
      "https://variety.com/wp-content/uploads/2023/07/Mission-Impossible-Dead-Reckoning-Part-One-1.webp?w=681&h=383&crop=1",
    publishedAt: "2023-07-11T20:20:00Z",
    content:
      "Tom Cruise’s mission, should he choose to accept it, is to save the summer box office… again.\r\nAfter a lackluster start to popcorn season (“The Flash,” “Indiana Jones” and “Elemental,” we’re looking … [+3132 chars]",
  },
  {
    source: {
      id: null,
      name: "fox8.com",
    },
    author: "Ed Gallek, Peggy Gallek, Jordan Unger, Darcie Loreno",
    title:
      "Cleveland mass shooting suspect taken into custody - WJW FOX 8 News Cleveland",
    description:
      "Investigators have taken a possible suspect into custody for questioning in the Sunday mass shooting in Cleveland, the I-Team has learned.",
    url: "https://fox8.com/news/i-team-possible-suspect-in-cle-mass-shooting-taken-into-custody/",
    urlToImage:
      "https://fox8.com/wp-content/uploads/sites/12/2023/07/barley-house-1.jpg?w=1280",
    publishedAt: "2023-07-11T20:16:03Z",
    content:
      "CLEVELAND (WJW) — Investigators have taken a suspect into custody for questioning in the Sunday mass shooting in Cleveland, the I-Team learned. \r\nDuring a Tuesday evening press conference, city offic… [+1676 chars]",
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Julia Musto",
    title:
      "SpaceX Starlink satellites are leaking electromagnetic radiation, researchers say - Fox Business",
    description:
      "Several SpaceX Starlink satellites are leaking low-freaking radio waves, according to scientists from several international institutes. They used the LOFAR telescope.",
    url: "https://www.foxbusiness.com/technology/spacex-starlink-satellites-leaking-electromagnetic-radiation-researchers",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/07/0/0/SPACEX-LAUNCH.jpg?ve=1&tl=1",
    publishedAt: "2023-07-11T20:10:50Z",
    content:
      "Some SpaceX Starlink satellites are reportedly leaking low-frequency radio waves, which scientists say could impact astronomical research. \r\nScientists used the Low Frequency Array (LOFAR) telescope … [+3685 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Michelle Nichols",
    title:
      "Russian veto signals end of Turkey-based UN aid operation in Syria - Reuters",
    description:
      "Russia on Tuesday signaled the demise of a long-running United Nations humanitarian operation in Turkey delivering aid to 4 million people in rebel-held northwest Syria after it vetoed a nine-month authorization renewal at the U.N. Security Council.",
    url: "https://www.reuters.com/world/russia-vetoes-9-month-renewal-un-aid-syria-turkey-2023-07-11/",
    urlToImage:
      "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=148",
    publishedAt: "2023-07-11T19:45:00Z",
    content:
      "UNITED NATIONS, July 11 (Reuters) - Russia on Tuesday signaled the demise of a long-running United Nations humanitarian operation in Turkey delivering aid to 4 million people in rebel-held northwest … [+4221 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Hadas Gold, Amir Tal, Richard Allen Greene, Rob Picheta",
    title:
      "Israeli protesters stage ‘day of disruption’ against controversial judicial overhaul - CNN",
    description:
      "Tens of thousands of demonstrators took to the streets in Israel on Tuesday in the biggest weekday protest in months against the government’s renewed moves to overhaul the country’s judicial system.",
    url: "https://www.cnn.com/2023/07/11/middleeast/israel-judicial-reforms-protests-intl/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230711085907-04-israel-protests-071123.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-07-11T18:32:00Z",
    content:
      "Tens of thousands of demonstrators took to the streets in Israel on Tuesday in the biggest weekday protest in months against the governments renewed moves to overhaul the countrys judicial system.\r\nT… [+5820 chars]",
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Megan Henney",
    title:
      "June inflation report likely to show the 'war hasn't yet been won' - Fox Business",
    description:
      "The Labor Department is releasing the key June consumer price index data this week, shedding light on how quickly inflation is receding from the economy.",
    url: "https://www.foxbusiness.com/economy/june-inflation-report-likely-show-war-hasnt-yet-been-won",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/inflation-31.jpg?ve=1&tl=1",
    publishedAt: "2023-07-11T18:15:55Z",
    content:
      "A high-stakes inflation report due Wednesday is expected to show that price pressures within the economy cooled again in June but still remained abnormally high. \r\nEconomists expect the consumer pric… [+3434 chars]",
  },
  {
    source: {
      id: "axios",
      name: "Axios",
    },
    author: "Axios",
    title: "NASA's complicated future on Mars - Axios",
    description: null,
    url: "https://www.axios.com/2023/07/11/nasa-mars-sample-return",
    urlToImage: null,
    publishedAt: "2023-07-11T16:47:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Robert Lea",
    title:
      "Metal clouds turn scorching hot exoplanet into the universe's largest mirror - Space.com",
    description: "\"It's a planet that shouldn't exist.\"",
    url: "https://www.space.com/exoplanet-largest-mirror-metal-clouds",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/FLuyJzHKhmUn8uDUgqZ5Nj-1200-80.png",
    publishedAt: "2023-07-11T16:24:26Z",
    content:
      "Astronomers have discovered the most reflective planet outside the solar system ever seen. The ultra-hot extrasolar planet, or exoplanet, acts like a cosmic mirror because it is covered by reflective… [+5493 chars]",
  },
  {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "Luis Martinez",
    title:
      "Dramatic video released of Russian fighter jets 'harassing' US drones over Syria - ABC News",
    description:
      'A top military official labeled the incident "unsafe and unprofessional."',
    url: "https://abcnews.go.com/International/dramatic-video-released-russian-fighter-jets-harassing-us/story?id=100739203",
    urlToImage:
      "https://s.abcnews.com/images/International/230705_vod_russian_jet_syria_hpMain_16x9_992.jpg",
    publishedAt: "2023-07-06T01:23:44Z",
    content:
      'The U.S. military released dramatic video of a tense encounter on Wednesday over the skies of eastern Syria as Russian fighter jets were seen "harassing" three American military drones carrying out a… [+2746 chars]',
  },
  {
    source: {
      id: null,
      name: "KPRC Click2Houston",
    },
    author: "Corley Peel",
    title:
      "Cousin of Rudy Farias talks to KPRC 2; neighbor captures video of his mom saying, 'they want to arrest me' - KPRC Click2Houston",
    description:
      "Eight years after Rudy Farias was found alive, his cousin, Cassandra Lopez, told KPRC 2 reporter Corley Peel she has more concerns than relief.",
    url: "https://www.click2houston.com/news/local/2023/07/06/cousin-of-rudy-farias-talks-to-kprc-2-neighbors-capture-video-of-his-mom-saying-they-want-to-arrest-me/",
    urlToImage:
      "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/07-06-2023/t_9b8a69ace2ca48028699fe530c3a732b_name_image.jpg?_a=ATAPphC0",
    publishedAt: "2023-07-06T00:37:24Z",
    content:
      "HOUSTON Eight years after Rudy Farias was found alive, his cousin, Cassandra Lopez, told KPRC 2 reporter Corley Peel she has more concerns than relief.\r\nI was in shock. I was like, I couldnt believe … [+2039 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: null,
    title:
      "Philadelphia mass shooting suspect posted 'disturbing messages' - Reuters",
    description:
      'A Philadelphia gunman charged with killing five people over the Fourth of July weekend left "disturbing messages" on social media before carrying out one of several U.S. mass shootings that marred the holiday break, authorities said on Wednesday.',
    url: "https://www.reuters.com/world/us/suspect-philadelphia-mass-shooting-arraigned-five-murder-charges-cbs-news-2023-07-05/",
    urlToImage:
      "https://www.reuters.com/resizer/4aaS6lLJGd86qnkkr4muZHUrEoE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H3VKJUXLT5JSTIBM5VMQZZK3YI.jpg",
    publishedAt: "2023-07-05T23:45:00Z",
    content:
      'July 5 (Reuters) - A Philadelphia gunman charged with killing five people over the Fourth of July weekend left "disturbing messages" on social media before carrying out one of several U.S. mass shoot… [+4887 chars]',
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Mariana Alfaro",
    title:
      "Biden meets with Swedish prime minister to bolster country's bid to join NATO - The Washington Post",
    description:
      "Sweden’s bid to join the alliance has been blocked over objections from Turkey and Hungary, but Biden underscored the United States’ support for its membership.",
    url: "https://www.washingtonpost.com/politics/2023/07/05/biden-sweden-nato-membership/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/76MMJY3HTSEDJAOFW62BZODSVE.JPG&w=1440",
    publishedAt: "2023-07-05T23:43:00Z",
    content:
      "Comment on this story\r\nComment\r\nPresident Biden met with Swedish Prime Minister Ulf Kristersson on Wednesday in a show of support for Sweden to be allowed to join the North Atlantic Treaty Organizati… [+4572 chars]",
  },
  {
    source: {
      id: null,
      name: "HuffPost",
    },
    author: "AP",
    title:
      "Police: 16 Dead, Including 3 Children, In Toxic Gas Leak In South Africa - HuffPost",
    description:
      "Police in South Africa say at least 16 people, including three children, have died in a gas leak.",
    url: "https://www.huffpost.com/entry/toxic-gas-leak-south-africa_n_64a5f5cce4b03d308d9281a1",
    urlToImage:
      "https://img.huffingtonpost.com/asset/64a615902400003600c9bf1d.jpeg?cache=o2E1iZUH4l&ops=1200_630",
    publishedAt: "2023-07-05T23:06:27Z",
    content:
      "Police stand near a covered body in the Angelo settlement in Boksburg, South Africa, Thursday, July 6, 2023. Police said over a dozen people, including children, have died from a toxic gas leak in th… [+2836 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "Meta's Threads app is here to challenge Twitter | Engadget - Engadget",
    description:
      "Threads, Meta’s text-based app to challenge Twitter, is now official.",
    url: "https://www.engadget.com/metas-threads-app-is-here-to-challenge-twitter-230039730.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/mb9OKRBM_gH2lYTn6OYiOA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/c6a095f0-1b84-11ee-9bbe-0be43cb2b41e.cf.jpg",
    publishedAt: "2023-07-05T23:02:24Z",
    content:
      "Threads, Metas text-based app to challenge Twitter, is now official. Mark Zuckerberg announced the new service one day ahead of the July 6th launch date that appeared in app stores earlier this week.… [+4575 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Allison Johnson",
    title: "Samsung confirms July 26th Galaxy Unpacked - The Verge",
    description:
      "Samsung will host its next Galaxy Unpacked on July 26th live from Seoul, where we expect it will reveal the Galaxy Z Flip 5 and Galaxy Z Fold 5.",
    url: "https://www.theverge.com/2023/7/5/23784750/samsung-galaxy-unpacked-july-2023-seoul-z-flip-fold-5",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/kLXVONyB7F-W7Lj55epyUq51EAk=/0x0:1280x960/1200x628/filters:focal(640x480:641x481)/cdn.vox-cdn.com/uploads/chorus_asset/file/24771833/unpacked_samsung_43.jpg",
    publishedAt: "2023-07-05T23:00:00Z",
    content:
      "Samsungs next folding phones arrive on July 26th\r\nSamsungs next folding phones arrive on July 26th\r\n / Mark your calendars and plan to bring your own coffee for the livestream.\r\nByAllison Johnson, a … [+2033 chars]",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Josh Dinner",
    title:
      "Farewell, Ariane 5! Europe's workhorse rocket launches 2 satellites on final mission - Space.com",
    description:
      "After 27 years of service, Europe's venerable heavy lifter has rocketed into retirement.",
    url: "https://www.space.com/ariane-5-rocket-final-launch-success",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/UXt9qBsQiwwgAcjbiS3piB-1200-80.jpg",
    publishedAt: "2023-07-05T22:41:41Z",
    content:
      "Europe's workhorse rocket has flown for the final time.\r\nThe powerful Ariane 5 launched today (July 5) on the last-ever mission of its storied career, which began way back in 1996 and now includes 11… [+5153 chars]",
  },
  {
    source: {
      id: null,
      name: "Hollywood Reporter",
    },
    author: "Brian Davids",
    title:
      "‘Indiana Jones and the Dial of Destiny’ Star Karen Allen on the Bittersweet Conclusion of Indy and Marion’s Love Story - Hollywood Reporter",
    description:
      "The 'Raiders of the Lost Ark' star reveals she expected to be a bigger part of the fifth film — back when Steven Spielberg planned on directing.",
    url: "https://www.hollywoodreporter.com/movies/movie-features/indiana-jones-karen-allen-marion-dial-of-destiny-1235529718/",
    urlToImage:
      "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Karen-Allen-Indiana-Jones-Premiere-Carpet-NEW-GettyImages-1498631095-H-2023.jpg?w=1024",
    publishedAt: "2023-07-05T21:46:40Z",
    content:
      "[This story contains spoilers for Indiana Jones and the Dial of Destiny.]\r\nFor Karen Allen, the conclusion of Indiana Jones and Marion Ravenwood’s love story is bittersweet. \r\nIn James Mangold’s Indi… [+13335 chars]",
  },
  {
    source: {
      id: null,
      name: "Managing Madrid",
    },
    author: "Matt_Wiltse",
    title:
      "PSG sent Mbappe’s entourage three page letter outlining disappointment in his decision—report - Managing Madrid",
    description:
      "The Paris club have been exchanging letters with Fayza Lamari and the Mbappe entourage.",
    url: "https://www.managingmadrid.com/2023/7/5/23785023/psg-sent-mbappes-entourage-three-page-letter-outlining-disappointment-in-his-decision-report",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/1klgNTwotutqoxz7SIwxAkcB0_8=/0x0:2872x1504/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24771949/1258833436.jpg",
    publishedAt: "2023-07-05T21:24:13Z",
    content:
      "Behind closed doors, PSG and the Kylian Mbappe entourage (mainly his mother, Fayza Lamari), have been exchanging letters in regards to his decision to not renew his contract for the optional year in … [+960 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "Spotify stops accepting payments that were set up through Apple's App Store - Engadget",
    description:
      "Spotify is notifying users who were paying for Premium through Apple's App Store that it will no longer be supporting it as a payment method.",
    url: "https://www.engadget.com/spotify-stops-accepting-payments-that-were-set-up-through-apples-app-store-211722624.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/ziJAjlhWcri5NAIdBxdnqA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-02/1c33d410-39c5-11e9-ad7f-e16ade000d36.cf.jpg",
    publishedAt: "2023-07-05T21:19:53Z",
    content:
      "Spotify is notifying users whove subscribed to its Premium service through Apples in-app purchase system that it will no longer be supporting it as a payment method. As a refresher, Spotify hasnt all… [+2058 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Daily News",
    },
    author: "David Matthews",
    title:
      "Leandro De Niro Rodriguez cause of death was fentanyl overdose: mom - New York Daily News",
    description:
      "Robert De Niro’s grandson died after a fentanyl overdose after buying laced pills, according to his mother.",
    url: "https://www.nydailynews.com/snyde/ny-leandro-de-niro-rodriguez-cause-of-death-fentanyl-overdose-20230705-gbhjvu6swbh3paydi52dmu4lke-story.html",
    urlToImage:
      "https://www.nydailynews.com/resizer/0iJgZ9FJqoQm5BD4yDj3Hpxe0Ec=/1200x630/filters:format(jpg):quality(70):focal(324x342:334x352)/cloudfront-us-east-1.images.arcpublishing.com/tronc/4NQA24BJ5FHWJLXGBRJ46TSUGE.jpg",
    publishedAt: "2023-07-05T20:59:34Z",
    content:
      "Robert De Niros grandson Leandro De Niro Rodriguez died of a fentanyl overdose after buying laced pills, according to his mother.\r\nDrena De Niro, the adopted daughter of the actor and his first wife,… [+1422 chars]",
  },
  {
    source: {
      id: null,
      name: "Phys.Org",
    },
    author: "Science X",
    title:
      "American mink regrow their brains in a rare reversal of the domestication process - Phys.org",
    description:
      "Farm animals look different from their wild counterparts in many ways, and one difference is consistent: their brains are smaller than those of their ancestors. From sheep to pigs to cows, domesticated animals have smaller relative brain sizes compared to the…",
    url: "https://phys.org/news/2023-07-american-mink-regrow-brains-rare.html",
    urlToImage:
      "https://scx2.b-cdn.net/gfx/news/2023/american-mink-regrow-t.jpg",
    publishedAt: "2023-07-05T20:45:03Z",
    content:
      "Farm animals look different from their wild counterparts in many ways, and one difference is consistent: their brains are smaller than those of their ancestors. From sheep to pigs to cows, domesticat… [+5344 chars]",
  },
  {
    source: {
      id: null,
      name: "KOMO News",
    },
    author: "KOMO News Staff",
    title:
      "Study reveals diabetic retinopathy affecting more people than previously estimated - KOMO News",
    description:
      "A new study shows more people are living with diabetic retinopathy than originally predicted.",
    url: "https://komonews.com/news/local/study-reveals-diabetic-retinopathy-affects-one-in-four-older-adults-with-diabetes-surpassing-previous-estimates-university-washington-medicine",
    urlToImage:
      "https://komonews.com/resources/media/56b3b005-ce59-4db2-8fbb-2991f1e0c094-large16x9_Screenshot20221127115609.png?1669579065326",
    publishedAt: "2023-07-05T20:17:59Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Risk of major disruption as UPS strike looms in US - BBC",
    description:
      '"I\'d like to strike just to teach them a lesson," says long-time UPS worker Antonio Rosario.',
    url: "https://www.bbc.com/news/business-66093113",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/114E9/production/_130298807_gettyimages-1505865522.jpg",
    publishedAt: "2023-07-05T20:12:16Z",
    content:
      "Talks between delivery giant UPS and its workers in the US have broken down, raising the possibility of the first strike at the company in more than 25 years.\r\nThe two sides have been negotiating for… [+5026 chars]",
  },
  {
    source: {
      id: null,
      name: "Neurosciencenews.com",
    },
    author: "Neuroscience News",
    title:
      "Physical Activity Over 60 Enhances Life Quality - Neuroscience News",
    description:
      "Researchers found a correlation between physical activity in adults over sixty and quality of life.",
    url: "https://neurosciencenews.com/aging-activity-life-quality-23579/",
    urlToImage:
      "https://neurosciencenews.com/files/2023/07/acticity-aging-life-quality-neurosicncce.jpg",
    publishedAt: "2023-07-05T19:59:25Z",
    content:
      "Summary: Researchers found a correlation between physical activity in adults over sixty and quality of life. The study, involving almost 1,500 participants, revealed that reduced physical activity an… [+8616 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "UFC 290 Embedded: Vlog Series - Episode 3 - UFC - Ultimate Fighting Championship",
    description:
      "Bo Nickal gets bad news. Champ Brandon Moreno trains in private; Alexandre Pantoja and Yair Rodriguez visit the PI. Champ Alexander Volkanovski swings big. R...",
    url: "https://www.youtube.com/watch?v=HKFxBuiCQWQ",
    urlToImage: "https://i.ytimg.com/vi/HKFxBuiCQWQ/maxresdefault.jpg",
    publishedAt: "2023-07-05T19:37:25Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "INSIDER",
    },
    author: "Callie Ahlgrim",
    title:
      "Andrew Ridgeley said there was 'friction' in Wham! when George Michael became a more successful songwriter - Yahoo Entertainment",
    description:
      '"George\'s songwriting was developing at an amazing, inconceivable sort of pace," Ridgeley recalled in a new Netflix documentary.',
    url: "https://www.insider.com/george-michael-caused-friction-wham-andrew-ridgeley-documentary-2023-7",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/X9Ljc2t7LEzc0_YjVkT94g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/insider_articles_922/16172df5ba3ddde9fcbe2aa916ced57a",
    publishedAt: "2023-07-05T19:28:08Z",
    content:
      'George Michael and Andrew Ridgeley of Wham! perform during The Big Tour in 1985.Michael Putland/Getty Images\r\n<ul><li>The new Netflix documentary "Wham!" explores the British duo\'s rise to fame in th… [+3445 chars]',
  },
  {
    source: {
      id: null,
      name: "The Texas Tribune",
    },
    author: "Francisco Uranga",
    title:
      "How an updated income-driven student debt repayment plan works - The Texas Tribune",
    description:
      "After the U.S. Supreme Court ended President Joe Biden’s debt cancellation program, advocates for lowering student loan debt say the federal SAVE plan, an updated loan repayment program, could save Texans and other borrowers a lot of money in i...",
    url: "https://www.texastribune.org/2023/07/05/income-driven-repayment-plan-student-debt/",
    urlToImage:
      "https://thumbnails.texastribune.org/NlI4vO5mkjgGtQzdSKJnZpt5iok=/1200x630/filters:quality(95)/static.texastribune.org/media/files/1e2e1146e911cceb6f342b13deaf9ed7/0224%20UNT%20Campus%20ST%20TT%2009.jpg",
    publishedAt: "2023-07-05T18:54:31Z",
    content:
      "Sign up for The Brief, The Texas Tribunes daily newsletter that keeps readers up to speed on the most essential Texas news.\r\nTexans with college loans are expected to begin or resume making payments … [+2375 chars]",
  },
  {
    source: {
      id: null,
      name: "Orlando Sentinel",
    },
    author: "Edgar Thompson",
    title:
      "Ex-Gators QB Jalen Kitna reaches plea deal on child pornography allegations - Orlando Sentinel",
    description:
      "Ex-Gators quarterback Jalen Kitna reached a plea agreement on two second-degree misdemeanors stemming from his Nov. 30 arrest for child pornography. Each charge carries a maximum sentence 60 days i…",
    url: "http://www.orlandosentinel.com/2023/07/05/ex-gators-quarterback-jalen-kitna-uf-plea-deal-child-pornography/",
    urlToImage:
      "https://www.orlandosentinel.com/wp-content/uploads/2023/07/Kitna.jpg?w=1024&h=683",
    publishedAt: "2023-07-05T18:35:09Z",
    content:
      "Former University of Florida backup quarterback Jalen Kitna will be charged with two counts of disorderly conduct stemming from his arrest for child pornography in late November 2022.\r\nKitna reached … [+5198 chars]",
  },
  {
    source: {
      id: "the-washington-post",
      name: "The Washington Post",
    },
    author: "Robyn Dixon, Mary Ilyushina",
    title:
      "Lukashenko claims he persuaded Putin not to kill Wagner boss Prigozhin - The Washington Post",
    description:
      "The Belarusian president described his conversations with the Russian president and the mercenary chief in unusually frank comments on Tuesday.",
    url: "https://www.washingtonpost.com/world/2023/06/27/prigozhin-lukashenko-putin-wagner-rebellion/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YRCHKQZ6FCJRV4RMTRDNY4EMKU_size-normalized.jpg&w=1440",
    publishedAt: "2023-06-28T00:24:40Z",
    content:
      "Comment on this story\r\nComment\r\nRIGA, Latvia When Belarusian President Alexander Lukashenko tried to convince Yevgeniy Prigozhin to call off his rebellion against Moscow, the mercenary boss was half-… [+7716 chars]",
  },
  {
    source: {
      id: "espn",
      name: "ESPN",
    },
    author: null,
    title:
      "Former Arkansas, NFL QB Ryan Mallett dies in apparent drowning - ESPN - ESPN",
    description:
      "Former Arkansas QB Ryan Mallett, who went on to have a seven-year career in the NFL, died Tuesday in an apparent drowning at a Florida beach, according to the Okaloosa County Sheriff's Office. He was 35.",
    url: "https://www.espn.com/college-football/story/_/id/37924883/former-arkansas-nfl-qb-ryan-mallett-dies-35",
    urlToImage:
      "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0627%2Fr1191374_1296x729_16%2D9.jpg",
    publishedAt: "2023-06-27T23:19:00Z",
    content:
      "Jun 27, 2023, 07:19 PM ET\r\nFormer Arkansas quarterback Ryan Mallett, who went on to have a seven-year career in the NFL, died Tuesday in an apparent drowning at a Florida beach, according to the Okal… [+4362 chars]",
  },
  {
    source: {
      id: "usa-today",
      name: "USA Today",
    },
    author: "Mike Snider",
    title:
      "Colachup? Coachup? Pepsi cola ketchup combo latest odd pairing - USA TODAY",
    description:
      "Pepsi worked with the Culinary Institute of America to make a Pepsi-infused ketchup. You can try it at four Major League Baseball parks on July 4.",
    url: "https://www.usatoday.com/story/money/food/2023/06/27/pepsi-cola-ketchup-combo-mlb-parks-july-4/70361752007/",
    urlToImage:
      "https://www.usatoday.com/gcdn/presto/2023/06/27/USAT/1b41eb1c-cb27-4c6d-b1b3-aa40347373e4-Pepsi_BWP_Hot_Dogs_1.jpg?crop=797,448,x1,y0&width=797&height=448&format=pjpg&auto=webp",
    publishedAt: "2023-06-27T22:36:02Z",
    content:
      "Baseball, hot dogs and ketchup made with cola? That's what's coming to the plate at four Major League Baseball parks on July 4, courtesy of Pepsi.\r\nWe know Pepsi is not shy when it comes to mashing u… [+2165 chars]",
  },
  {
    source: {
      id: null,
      name: "NBC Chicago",
    },
    author: null,
    title:
      "Mother Sues City of Chicago After Murder Charges Were Dropped Against Her and Her Son - NBC Chicago",
    description:
      "A Chicago mother who was accused of telling her teen son to shoot a man at a fast food restaurant is suing the city and arresting officers, a day after murder…",
    url: "https://www.nbcchicago.com/news/local/mother-sues-city-of-chicago-after-murder-charges-were-dropped-against-her-and-her-son/3172824/",
    urlToImage:
      "https://media.nbcchicago.com/2023/06/Carlishia-Hood.png?resize=1200%2C675&quality=85&strip=all",
    publishedAt: "2023-06-27T22:04:57Z",
    content:
      "A Chicago mother who was accused of telling her teen son to shoot a man at a fast food restaurant is suing the city and arresting officers, a day after murder charges against her and her son were dro… [+2027 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Ryan Seacrest to replace Pat Sajak on Wheel of Fortune - BBC",
    description:
      "The US TV personality will begin hosting the iconic game show in 2024 alongside co-host Vanna White.",
    url: "https://www.bbc.com/news/world-us-canada-66038095",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/17658/production/_130223859_gettyimages-1357053233.jpg",
    publishedAt: "2023-06-27T21:47:19Z",
    content:
      "US TV personality Ryan Seacrest will take the helm of the iconic Wheel of Fortune game show in 2024. \r\nHe will replace Pat Sajak, who recently announced he would retire after more than 40 years hosti… [+1513 chars]",
  },
  {
    source: {
      id: null,
      name: "WDIV ClickOnDetroit",
    },
    author: "Kim Adams",
    title:
      "Smoke from Canada wildfires causes Air Quality Alert for Southeast Lower Michigan - WDIV ClickOnDetroit",
    description:
      "Another Air Quality Alert is issued for Southeast Lower Michigan on Wednesday.",
    url: "https://www.clickondetroit.com/weather/2023/06/27/smoke-from-canada-wildfires-causes-air-quality-alert-for-southeast-lower-michigan/",
    urlToImage:
      "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/M3Y4BNYQSFFIXA75UNCODUIBU4.jpg?_a=ATAPphC0",
    publishedAt: "2023-06-27T21:02:46Z",
    content:
      "4Warn Weather Another Air Quality Alert is issued for Southeast Lower Michigan on Wednesday.\r\nThe air quality is now considered unhealthy for everyone, not just those with respiratory issues. Limit t… [+1198 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Passant Rabie",
    title:
      "Four Volunteers Locked in Simulated Martian Habitat for a Year - Gizmodo",
    description:
      "NASA's Mars habitat was created to prepare crews for the physical and mental challenges of living on another planet.",
    url: "https://gizmodo.com/four-volunteers-locked-simulated-martian-habitat-year-1850582490",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/69b3c34a8f322636eb3aea00ef9b8510.jpg",
    publishedAt: "2023-06-27T20:50:00Z",
    content:
      "On Sunday, four researchers donned black jumpsuits and entered into a red world where they will spend a year living and working in a simulated Martian environment. \r\nNASAs CHAPEA habitat, or Crew Hea… [+2912 chars]",
  },
  {
    source: {
      id: null,
      name: "San Francisco Chronicle",
    },
    author: "San Francisco Chronicle",
    title:
      "One of the most popular podcast apps, based in S.F., is shutting down - San Francisco Chronicle",
    description: null,
    url: "https://www.sfchronicle.com/entertainment/article/siriusxm-shutting-down-stitcher-podcast-app-18173637.php",
    urlToImage: null,
    publishedAt: "2023-06-27T20:48:14Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "KTLA Los Angeles",
    },
    author: "Christine Samra",
    title:
      "Remains found on Mt. Baldy identified as actor Julian Sands - KTLA Los Angeles",
    description:
      "A tragic end to the search for actor Julian Sands after he disappeared on Mt. Baldy in January. The San Bernadino County Sheriff’s Department on Tuesday revealed that human remains found by hikers over the weekend are that of the British actor. “The identific…",
    url: "https://ktla.com/news/local-news/remains-found-on-mt-baldy-identified-as-julian-sands/",
    urlToImage:
      "https://ktla.com/wp-content/uploads/sites/4/2023/06/AP23171609279005.jpg?w=1280",
    publishedAt: "2023-06-27T20:37:39Z",
    content:
      "A tragic end to the search for actor Julian Sands after he disappeared on Mt. Baldy in January.\r\nThe San Bernadino County Sheriff’s Department on Tuesday revealed that human remains found by hikers o… [+1543 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Jimmie Johnson won't take part in NASCAR Chicago Street Race - WGN News",
    description: null,
    url: "https://www.youtube.com/watch?v=ZVRVQZ2YlJM",
    urlToImage: null,
    publishedAt: "2023-06-27T20:12:05Z",
    content:
      "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
  },
  {
    source: {
      id: null,
      name: "Space.com",
    },
    author: "Mike Wall",
    title:
      "Perseverance rover spots donut-shaped rock on Mars (photo) - Space.com",
    description: "It might be a large meteorite.",
    url: "https://www.space.com/mars-rover-perseverance-donut-rock-photo",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/QgRBXsef3t95b35fXse23V-1200-80.jpg",
    publishedAt: "2023-06-27T20:00:46Z",
    content:
      "NASA's Mars rover Perserverance snapped this photo of a possible meteorite on the Red Planet on June 23, 2023. (Image credit: Future)\r\nNASA's Perseverance Mars rover has rolled up on a rocky donut th… [+2171 chars]",
  },
  {
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Justin Kroll",
    title:
      "‘Superman: Legacy’: James Gunn Taps David Corenswet And Rachel Brosnahan To Play Clark Kent And Lois Lane In DC Studios Film - Deadline",
    description:
      "Following months of audition tapes and in-person screen tests, Warner Bros and DC Studios have their new Clark Kent and Lois Lane. David Corenswet has been set to play Superman while Rachel Brosnah…",
    url: "https://deadline.com/2023/06/superman-legacy-david-corenswet-rachel-brosnahan-cast-1235420180/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2023/06/David-Corenswet-Rachel-Brosnahan-2.jpg?w=1000",
    publishedAt: "2023-06-27T19:59:00Z",
    content:
      "Following months of audition tapes and in-person screen tests, Warner Bros and DC Studios have their new Clark Kent and Lois Lane. David Corenswet has been set to play Superman while Rachel Brosnahan… [+2800 chars]",
  },
  {
    source: {
      id: null,
      name: "DW (English)",
    },
    author: "Deutsche Welle",
    title:
      "Ukraine: Deadly Russian missile strike hits Kramatorsk - DW (English)",
    description:
      "Ukrainian officials said at least three people died and 22 were injured when Russian missiles hit the crowded center of the eastern city of Kramatorsk. More victims may still be under the rubble.",
    url: "https://www.dw.com/en/ukraine-deadly-russian-missile-strike-hits-kramatorsk/a-66049588",
    urlToImage: "https://static.dw.com/image/66049526_6.jpg",
    publishedAt: "2023-06-27T19:42:51Z",
    content:
      "Russian missiles struck a crowded area of restaurants on Tuesday in the eastern Ukrainian city of Kramatorsk, killing at least three people.\r\nRussia fired two S-300 surface-to-air missiles at the cit… [+2201 chars]",
  },
  {
    source: {
      id: null,
      name: "Salon",
    },
    author: "David Clayton",
    title:
      "Intermittent fasting and calorie counting about equal for weight loss, according to new study - Salon",
    description:
      "The importance of counseling and support, regardless of the method of weight loss",
    url: "https://www.salon.com/2023/06/27/intermittent-fasting-and-calorie-counting-about-equal-for-weight-loss-according-to-new-study_partner/",
    urlToImage:
      "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/12/scale_tape_measure_weight_1156947930.jpg",
    publishedAt: "2023-06-27T19:30:00Z",
    content: null,
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "CBSColorado.com Staff",
    title:
      "Travelers experience headaches at Denver International Airport, many United flights canceled - CBS News",
    description:
      "Over the past few days 2,000 flights have been canceled. A majority of those flights were with United Airlines.",
    url: "https://www.cbsnews.com/colorado/news/travelers-experience-headaches-denver-international-airport-united-airlines/",
    urlToImage:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/27/9231236e-9536-443a-a93f-fb5e1a49c267/thumbnail/1200x630/9283039da525300cbc2acdf7e3c8600e/united-airlines.png?v=da961fb78efc3933073ecc68b1f3f72b",
    publishedAt: "2023-06-27T19:04:00Z",
    content:
      "The demand for air travel has soared this year, and now it's really starting to show up at Denver International Airport with long lines and flight delays and cancellations. Over the past few days 2,0… [+1113 chars]",
  },
  {
    source: {
      id: null,
      name: "Blazer's Edge",
    },
    author: "Jeremy_Brener",
    title:
      "Damian Lillard’s ‘Angst’ Hurting Trail Blazers in Long Run - Blazer's Edge",
    description:
      "The Portland Trail Blazers could be hurting their future by trying too hard to appease Damian Lillard now.",
    url: "https://www.blazersedge.com/2023/6/27/23775763/damian-lillard-angst-hurting-portland-trail-blazers-in-long-run-trade-rumors-nba",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/T-iL0r7T-oavGb8Ast0R0hqrjew=/0x54:3715x1999/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24755800/usa_today_20258733.jpg",
    publishedAt: "2023-06-27T19:00:00Z",
    content:
      "Damian Lillard has made it clear. If he is to stay with the Portland Trail Blazers, some changes will have to be made.\r\nAfter two straight seasons of missing the playoffs, Lillard is hoping that the … [+1444 chars]",
  },
  {
    source: {
      id: null,
      name: "AOL",
    },
    author: "CARLA K. JOHNSON",
    title:
      "6 dead in a meningitis outbreak tied to Mexico clinics as officials struggle to reach more patients - AOL",
    description:
      "The death toll has risen to six in an outbreak of fungal meningitis that's tied to surgical procedures in a city along the U.S.-Mexico border, and health...",
    url: "https://www.aol.com/news/6-dead-meningitis-outbreak-tied-185124588.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/9tB.VEHSpsI0KC.PBnoYbQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/aol_associated_press_484/afa9d3224c5132696aa85965b0721da1",
    publishedAt: "2023-06-27T18:51:24Z",
    content:
      "The death toll has risen to six in an outbreak of fungal meningitis that's tied to surgical procedures in a city along the U.S.-Mexico border, and health officials say they have not been able to reac… [+1294 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Jason Owens",
    title:
      "Alcohol sales will be banned at Paris Olympics except for VIPs - Yahoo Sports",
    description:
      "If you want a drink at the Paris Olympics, be prepared to shell out.",
    url: "https://sports.yahoo.com/alcohol-sales-will-be-banned-at-paris-olympics-except-for-vips-183952045.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/AnxOacSN.Dk514kJeVrhKQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTI-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/31d51d40-1519-11ee-ade9-3600f4696e80",
    publishedAt: "2023-06-27T18:39:52Z",
    content:
      "A country world-renowned for its alcohol exports will limit public consumption during the 2024 Olympics. (Reuters/Regis Duvignau)\r\nIf you want a drink at the Paris Olympics, be prepared to shell out.… [+2031 chars]",
  },
  {
    source: {
      id: null,
      name: "Daily Beast",
    },
    author: "Allison Quinn",
    title:
      "'Putin's Fucked': Russian Soldier Cheers on Prigozhin's Uprising With Wagner Group - The Daily Beast",
    description:
      "“Let them make it to the f*cking Kremlin and get rid of that jackass Putin.”",
    url: "https://www.thedailybeast.com/putins-fucked-russian-soldier-cheers-on-prigozhins-uprising-with-wagner-group",
    urlToImage:
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1275,w_2266,x_0,y_75/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1687888606/2023-06-27T135505Z_228123553_RC2PR1A0W5M1_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-PUTIN_jnuf34",
    publishedAt: "2023-06-27T18:22:39Z",
    content:
      "While Russian President Vladimir Putin insists that his nation is more united than ever before following the Wagner Groups armed uprising over the weekend, a Russian soldier has apparently been caugh… [+2600 chars]",
  },
  {
    source: {
      id: null,
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Canada wildfires spark air quality alerts in Chicago and Milwaukee - BBC",
    description:
      "Smoke drifting south causes a haze over parts of Ontario as well US cities like Chicago and Milwaukee.",
    url: "https://www.bbc.com/news/world-us-canada-66036541",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1632A/production/_130222909_gettyimages-1259065739.jpg",
    publishedAt: "2023-06-27T18:12:02Z",
    content:
      "Heavy smoke from wildfires has prompted air quality warnings in midwestern US cities such as Chicago, as well as parts of Canada.\r\nThe outdoor air quality registered among the world's worst on Tuesda… [+1963 chars]",
  },
];

export default headlines;

const techArticles = [
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "HW News - Major AMD BIOS Update, GDDR7 Arrives, DirectStorage & RTX IO in Games - Gamers Nexus",
    description: null,
    url: "https://www.youtube.com/watch?v=R7JRCyscigg",
    urlToImage: null,
    publishedAt: "2023-07-23T19:38:08Z",
    content:
      "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
  },
  {
    source: {
      id: null,
      name: "Eurogamer.net",
    },
    author: "Vikki Blake",
    title:
      'Diablo 4 team says it doesn\'t "plan on doing a patch like this ever again" - Eurogamer.net',
    description:
      "Blizzard says it understands the frustration players have about Diablo 4's most recent patch, and promises it doesn't \"…",
    url: "https://www.eurogamer.net/diablo-4-team-says-it-doesnt-plan-on-doing-a-patch-like-this-ever-again",
    urlToImage:
      "https://assetsio.reedpopcdn.com/IMG_2975.JPG?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    publishedAt: "2023-07-23T17:07:58Z",
    content:
      "Blizzard says it understands the frustration players have about Diablo 4's most recent patch, and promises it doesn't \"plan on doing a patch like this ever again\".\r\nIn a candid fireside chat, key mem… [+2569 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Wes Davis",
    title: "Apple’s GPT chatbot is already in use internally - The Verge",
    description:
      "The company is already using generative AI to help employees conceptualize features, according to a new report, and the company is considering using it to aid AppleCare support workers in assisting customers.",
    url: "https://www.theverge.com/2023/7/23/23804825/apple-gpt-chatbot-apple-care-siri-chatgpt",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/x2E5qk82ChtE9vZvW1p2duIOnxA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24401980/STK071_ACastro_apple_0003.jpg",
    publishedAt: "2023-07-23T17:05:50Z",
    content:
      "Apple is already using its chatbot for internal work\r\nApple is already using its chatbot for internal work\r\n / The companys chatbot reportedly helps its employees work, and Apple GPT may be consideri… [+2406 chars]",
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
      id: "the-verge",
      name: "The Verge",
    },
    author: "Wes Davis",
    title:
      "Netflix isn't planning to make a native Vision Pro app yet - The Verge",
    description:
      "Netflix will allow its iPad app to run on the Vision Pro, but has no current plans to make a native app, says Bloomberg’s Mark Gurman.",
    url: "https://www.theverge.com/2023/7/23/23804704/netflix-vision-pro-native-app-apple-ios-ipad-os",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/Sw2kidyMo1-_0paXjf7RSthzav4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24709755/DSC00889.jpg",
    publishedAt: "2023-07-23T15:20:53Z",
    content:
      "Netflix isnt planning to make a native Vision Pro app yet\r\nNetflix isnt planning to make a native Vision Pro app yet\r\n / The company will allow its iPad app to run on Apples mixed reality headset ins… [+3004 chars]",
  },
  {
    source: {
      id: null,
      name: "GameRant",
    },
    author: "GameRant",
    title: "All Baldur's Gate 3 Barbarian Subclasses, Ranked - GameRant",
    description: null,
    url: "https://gamerant.com/guide-baldurs-gate-3-all-barbarian-subclasses/",
    urlToImage: null,
    publishedAt: "2023-07-23T14:46:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Video Games Chronicle",
    },
    author: "Jordan Middler",
    title:
      "High on Life is now available on PS4 and PS5 | VGC - Video Games Chronicle",
    description:
      "The game broke Game Pass engagement records when it released in December…",
    url: "https://www.videogameschronicle.com/news/high-on-life-is-now-available-on-ps4-and-ps5/",
    urlToImage:
      "https://www.videogameschronicle.com/files/2023/06/high-on-life-high-on-knife-a.jpg",
    publishedAt: "2023-07-23T14:39:21Z",
    content:
      "Squanch Games’ High on Life is now available on PlayStation 4 and PlayStation 5.\r\nAnnounced at San Diego Comic-Con, the game, which launched in December on PC and Xbox Series consoles, is now availab… [+1310 chars]",
  },
  {
    source: {
      id: null,
      name: "PhoneArena",
    },
    author: "Martin Filipov",
    title:
      "Nothing Phone 2: Carl Pei shows Google how to make the best $600 Android phone - PhoneArena",
    description:
      "Nothing Phone 2 proves the most exciting $600 Android flagship in 2023 might not be Pixel 8 by making the Pixel flagship Google keeps failing to make.",
    url: "https://www.phonearena.com/news/nothing-phone-2-carl-pei-shows-google-how-to-make-the-best-600-dollar-android-phone_id148939",
    urlToImage:
      "https://m-cdn.phonearena.com/images/article/148939-wide-two_1200/Nothing-Phone-2-Carl-Pei-shows-Google-how-to-make-the-best-600-Android-phone.jpg",
    publishedAt: "2023-07-23T14:27:06Z",
    content:
      "For one, the Nothing Phone 2 now looks a lot more like a flagship phone - something the Nothing Phone 1 never was. Thats because its running on the flagship-grade Snapdragon 8+ Gen 1 chip; it has an … [+2386 chars]",
  },
  {
    source: {
      id: null,
      name: "SamMobile",
    },
    author: "SamMobile, Asif Iqbal Shaik",
    title:
      "How to enable hidden Google Cast screen mirroring feature on Galaxy phones - SamMobile - Samsung news",
    description:
      "Samsung smartphones and tablets support both Google Cast and Miracast (Smart View) for wireless screen mirroring. However, to use screen ...",
    url: "https://www.sammobile.com/news/enable-google-cast-screen-mirroring-galaxy-phones-tablets/",
    urlToImage:
      "https://www.sammobile.com/wp-content/uploads/2023/07/Samsung-One-UI-5.1-Screen-Mirroring-Google-Cast-720x405.jpg",
    publishedAt: "2023-07-23T14:04:00Z",
    content:
      "Samsung smartphones and tablets support both Google Cast and Miracast (Smart View) for wireless screen mirroring. However, to use screen mirroring via Google Cast, the process is longer compared to M… [+2285 chars]",
  },
  {
    source: {
      id: null,
      name: "PCGamesN",
    },
    author: "Will Nelson",
    title:
      "New Skyrim mod brings over one of Fallout 4's coolest features - PCGamesN",
    description:
      "This Skyrim mod brings one of Fallout 4's coolest features to Tamriel and enhances it, making speech in the Bethesda game all the more important.",
    url: "https://www.pcgamesn.com/skyrim/mod-fallout-4-intimidation",
    urlToImage:
      "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/07/skyrim-mod-fallout-4-intimidation.jpg",
    publishedAt: "2023-07-23T14:01:35Z",
    content:
      "Ever wondered what it would be like if Skyrim integrated features from future Bethesda RPG games like Fallout 4? Well, wonder no longer, as this new Skyrim mod brings over a small but impactful featu… [+2681 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Post",
    },
    author: "StackCommerce",
    title:
      "A Windows 11 Pro bundle including MS Office is now just $49.99 - New York Post ",
    description: "Major Microsoft sale alert!",
    url: "https://nypost.com/2023/07/23/this-windows-11-pro-bundle-is-just-49-99/",
    urlToImage:
      "https://nypost.com/wp-content/uploads/sites/2/2023/07/windows.png?w=1024",
    publishedAt: "2023-07-23T14:00:47Z",
    content:
      "Discover startups, services, products and more from our partner StackCommerce. New York Post may be compensated and/or receive an affiliate commission if you buy through our links.\r\nTL;DR: This bundl… [+1332 chars]",
  },
  {
    source: {
      id: null,
      name: "Tom's Guide",
    },
    author: "Jeff Parsons",
    title:
      "Best Buy has a huge sale this weekend — 15 best deals I recommend - Tom's Guide",
    description:
      "Best Buy has slashed prices on a range of tech essentials this weekend",
    url: "https://www.tomsguide.com/deals/best-buy-has-a-huge-sale-this-weekend-11-best-deals-i-recommend",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/4YhjSphhgkfnFDQDAwtrxK-1200-80.jpg",
    publishedAt: "2023-07-23T13:35:06Z",
    content:
      "Amazon Prime Day may be fading fast into 2023's rearview mirror, but that doesn't mean there aren't great deals to be had. In fact, now is the time to look at competing retailers to see what's on off… [+755 chars]",
  },
  {
    source: {
      id: null,
      name: "Push Square",
    },
    author: "Sammy Barker",
    title:
      "New PS5, PS4 Games This Week (24th July to 30th July) - Push Square",
    description: "Expansive interest",
    url: "https://www.pushsquare.com/news/2023/07/new-ps5-ps4-games-this-week-24th-july-to-30th-july",
    urlToImage: "https://images.pushsquare.com/1ada2e0c1cad0/1280x720.jpg",
    publishedAt: "2023-07-23T13:22:42Z",
    content:
      "@R_Ryder Sure, primary and most obviously overt example is her support of protest against Scotland's at-the-time new inclusion law that would allow people who can provide evidence of living as their … [+1668 chars]",
  },
  {
    source: {
      id: null,
      name: "Digital Trends",
    },
    author: "Luke Larsen",
    title:
      "Should you buy the M2 MacBook Pro or wait for the M3? - Digital Trends",
    description:
      "With the M3 chip on the horizon, is it worth the wait? Which MacBook Pro should you buy in the meantime?",
    url: "http://www.digitaltrends.com/computing/buy-m2-macbook-pro-or-wait-for-m3/",
    urlToImage:
      "https://www.digitaltrends.com/wp-content/uploads/2023/02/macbook-pro-14-m2-max.jpg?resize=1200%2C630&p=1",
    publishedAt: "2023-07-23T13:00:02Z",
    content:
      "It’s been over a year since the M2 was announced, with the chip first appearing in the 13-inch MacBook Pro and 13-inch MacBook Air. With the M3 chip on the horizon, you might wondering if you’re bett… [+3177 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Ash Parrish",
    title: "Ghost Trick is a summer beach read in video game form - The Verge",
    description:
      "Ghost Trick: Phantom Detective is a port of a Nintendo DS game available on the Switch, PlayStation 4, Xbox One, and Steam. It’s a perfect summer game in that it’s relatively simple and can be played on the go.",
    url: "https://www.theverge.com/2023/7/23/23803241/ghost-trick-capcom-ace-attorney-nintendo-switch",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/Sj_mFrvhBaN8yQCbbK4mpuYc71M=/0x0:1280x720/1200x628/filters:focal(640x360:641x361)/cdn.vox-cdn.com/uploads/chorus_asset/file/24802082/F1lZWsDaAAAvcSg.jpeg",
    publishedAt: "2023-07-23T13:00:00Z",
    content:
      "Ghost Trick is a summer beach read in video game form\r\nGhost Trick is a summer beach read in video game form\r\n / Ghost Trick feels like Ace Attorney but is nothing like Ace Attorney while also being … [+3463 chars]",
  },
  {
    source: {
      id: null,
      name: "GameRant",
    },
    author: "Joshua Duckworth",
    title:
      "Grand Theft Auto 6 is Poised to Break a Huge Rockstar Tradition - GameRant",
    description:
      "Nothing is officially known about Grand Theft Auto 6, but credible rumors and leaks could point to one major shift within the Rockstar title.",
    url: "https://gamerant.com/grand-theft-auto-6-rockstar-tradition-single-player-co-op/",
    urlToImage:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/grand-theft-auto-6-break-tradition.jpg",
    publishedAt: "2023-07-23T12:38:00Z",
    content:
      "Highlights\r\n<ul><li> Rockstar Games is known for its single-player games. It has dabbled in co-op a few times, but no one would think of Rockstar's games as traditional co-op games. </li><li> It is b… [+4474 chars]",
  },
  {
    source: {
      id: null,
      name: "TheGamer",
    },
    author: "TheGamer",
    title: "Kuai Liang Confirmed To Be Scorpion In Mortal Kombat 1 - TheGamer",
    description: null,
    url: "https://www.thegamer.com/mortal-kombat-1-kuai-liang-scorpion-theory-confirmed-san-diego-comic-con/",
    urlToImage: null,
    publishedAt: "2023-07-23T12:28:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Hindustan Times",
    },
    author: "HT Entertainment Desk",
    title:
      "Elon Musk posts picture of viewer surfing TikTok during Oppenheimer show - Hindustan Times",
    description:
      "Twitter owner and Tesla founder Elon Musk tweeted a photo of a viewer watching TikTok video during a show of Christopher Nolan's new film Oppenheimer. | Hollywood",
    url: "https://www.hindustantimes.com/entertainment/hollywood/elon-musk-posts-pic-surfing-tiktok-oppenheimer-show-101690111897243.html",
    urlToImage:
      "https://www.hindustantimes.com/ht-img/img/2023/07/23/1600x900/musk_oppen_1690112131825_1690112148328.jpg",
    publishedAt: "2023-07-23T12:08:11Z",
    content:
      "Has Twitter owner and Tesla founder Elon Musk watched Christopher Nolan's Oppenheimer? One can't be sure how much he has watched the film, given the picture he posted on Sunday. (Also Read: Barbie vs… [+2285 chars]",
  },
  {
    source: {
      id: null,
      name: "Futurism",
    },
    author: "Victor Tangermann",
    title: "Scientists Working on Merging AI With Human Brain Cells - Futurism",
    description:
      "Researchers just got a $600,000 grant from the Australian government to study ways of merging human brain cells with artificial intelligence.",
    url: "https://futurism.com/the-byte/scientists-working-merging-ai-human-brain-cells",
    urlToImage:
      "https://wp-assets.futurism.com/2023/07/scientists-working-merging-ai-human-brain-cells.jpg",
    publishedAt: "2023-07-23T12:00:24Z",
    content:
      '"This new technology capability in the future may eventually surpass the performance of existing, purely silicon-based hardware."\r\nAssuming Control\r\nA team of researchers just got a $600,000 grant fr… [+2018 chars]',
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: null,
    title:
      "What Phone-Makers Need to Learn From the Motorola Razr Plus' Cover Display - CNET",
    description:
      "Commentary: Motorola's Peek Display helps define the Razr Plus, and there are a lot companies like Apple, Samsung and Google could learn from it.",
    url: "https://www.cnet.com/tech/mobile/what-phone-makers-need-to-learn-from-the-motorola-razr-plus-cover-display/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/1efb6dc93c46d5ef9d2e3d320f17dca389653ba1/hub/2023/06/01/adb517fd-b127-4dde-aa57-7c5b78a9e638/screenshot-2023-06-02-at-12-47-17-am.png?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2023-07-23T12:00:00Z",
    content:
      "Motorola kicked off the clamshell foldable era of phones with the Razr in late 2019, an exciting yet pricey device with a few flaws. But months later, the Samsung Z Flip launched with a better foldin… [+6809 chars]",
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "The Editorial Board",
    title:
      "Opinion | Lina Khan Whiffs on the Microsoft-Activision Tie-Up - The Wall Street Journal",
    description:
      "The FTC Chair keeps losing in court because she keeps ignoring antitrust law.",
    url: "https://www.wsj.com/articles/lina-khan-activision-blizzard-microsoft-judge-jacqueline-scott-corley-federal-trade-commission-antitrust-law-52cd1a65",
    urlToImage: "https://images.wsj.net/im-815385/social",
    publishedAt: "2023-07-11T22:44:00Z",
    content: null,
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
      id: null,
      name: "AnandTech",
    },
    author: "Anton Shilov",
    title:
      "Intel Set to Exit NUC PC Business - Pushes Partners to Develop More SFF PCs - AnandTech",
    description:
      "Intel has disclosed today that it will halt further development of its small form factor Next Unit of Compute (NUC) PCs. The tech giant...",
    url: "https://www.anandtech.com/show/18952/intel-set-to-exit-nuc-pc-business-pushes-partners-to-develop-more-sff-pcs",
    urlToImage: "https://images.anandtech.com/doci/18952/Intel_NUC_678x452.jpg",
    publishedAt: "2023-07-11T21:00:00Z",
    content:
      "Intel has disclosed today that it will halt further development of its small form factor Next Unit of Compute (NUC) PCs. The tech giant expects its partners to take over and keep serving markets serv… [+3712 chars]",
  },
  {
    source: {
      id: "polygon",
      name: "Polygon",
    },
    author: "Toussaint Egan",
    title:
      "New Web of Wyrd trailer confirms Lance Reddick still stars as Hellboy - Polygon",
    description:
      "A gameplay trailer for Hellboy Web of Wyrd premiered during the ID@Xbox Showcase on Tuesday, showing off a small look at the video game’s hand-to-hand combat.",
    url: "https://www.polygon.com/2023/7/11/23791681/hellboy-web-of-wyrd-gameplay-trailer-lance-reddick-xbox-showcase",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/efl7IsuUuUMDXhA3teOKQCGYmIw=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24782994/ss_55db4188086e325a32d8f9fab84442739da79597.1920x1080.jpg",
    publishedAt: "2023-07-11T20:50:32Z",
    content: "The actor, who voices Hellboy in the new game, died in March",
  },
  {
    source: {
      id: null,
      name: "Search Engine Journal",
    },
    author: "Kristi Hines",
    title:
      "Google News Indexing Disruption Causes Traffic Decrease For Content Publishers - Search Engine Journal",
    description:
      "Google is working on a Google News indexing disruption, causing publishers to see a decrease in search traffic. Here are the latest updates.",
    url: "https://www.searchenginejournal.com/google-news-indexing-disruption/491249/",
    urlToImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2023/07/google-news-traffic-decrease-64ac7f9082332-sej.jpg",
    publishedAt: "2023-07-11T19:30:30Z",
    content:
      "Google is investigating a service disruption affecting Google News indexing, according to the Google Search Status Dashboard.\r\nIn the latest update, Google informs users that the issue has been ident… [+2379 chars]",
  },
  {
    source: {
      id: null,
      name: "Mtgrocks.com",
    },
    author: "Zachary Fink",
    title:
      "Foil Premier MTG 25-Year Old Cycle Reprint Confirmed in Commander Masters! - MTG Rocks",
    description:
      "Commander Masters spoilers are underway, and we have some excellent reprints, including a Commander All-Star from Battlebond.",
    url: "https://mtgrocks.com/foil-premier-mtg-25-year-old-cycle-reprint-confirmed-in-commander-masters/",
    urlToImage: "https://mtgrocks.com/wp-content/uploads/2023/07/2x8w6nym.png",
    publishedAt: "2023-07-11T19:08:28Z",
    content:
      "Commander Masters, set to release on August 4, 2023, is designed to bring the world of Commander into a Limited environment. There are four featured Commander decks in Commander Masters as a whole. O… [+5594 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Kenneth Shepard",
    title:
      "Don't Skip Baldur's Gate 3's Opening If You Played Early Access - Kotaku",
    description:
      "Larian says it’s added new content to the game’s first act you haven’t seen yet",
    url: "https://kotaku.com/baldur-s-gate-3-early-access-new-content-dialogue-rpg-1850628259",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/31c447c46e338b2f001daaf055ce7ffe.jpg",
    publishedAt: "2023-07-11T19:00:31Z",
    content:
      "Baldurs Gate 3 entered early access almost three years ago, so players have had ample time to take its opening hours for a spin. If youre one of them, you may have even seen the RPGs first few acts s… [+1963 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Diablo 4: Season of the Malignant - Official Gameplay Trailer - IGN",
    description: null,
    url: "https://www.youtube.com/watch?v=Sbe7t01dw_A",
    urlToImage: null,
    publishedAt: "2023-07-11T19:00:11Z",
    content:
      "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "MythForce Release Date Trailer - Nintendo Switch - Nintendo of America",
    description:
      "MythForce is coming to Nintendo Switch on September 12, 2023! Wishlist today: https://www.nintendo.com/store/products/mythforce-switch/Gather your friends an...",
    url: "https://www.youtube.com/watch?v=-hSEvk3ip2Q",
    urlToImage: "https://i.ytimg.com/vi/-hSEvk3ip2Q/maxresdefault.jpg",
    publishedAt: "2023-07-11T19:00:01Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Thurrott.com",
    },
    author: "Paul Thurrott",
    title: "Microsoft is Renaming Azure AD to Entra ID - Thurrott.com",
    description:
      "Microsoft revealed today that it will rebrand Azure Active Directory (AD) to Entra ID. It's the end of an era.",
    url: "https://www.thurrott.com/cloud/285529/microsoft-is-renaming-azure-ad-to-entra-id",
    urlToImage:
      "https://thurrott-assets.nyc3.digitaloceanspaces.com/web/wp-content/uploads/sites/2/2023/07/azure-ad-to-entra-id.jpg",
    publishedAt: "2023-07-11T18:48:09Z",
    content:
      "Microsoft revealed today that it will rebrand Azure Active Directory (AD) to Entra ID. It’s the end of an era.\r\n“To simplify our product naming and unify our product family, were changing the name of… [+2046 chars]",
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: "Taylor Lyles",
    title: "ID@Xbox: Everything Shown Off at Xbox's Indie Showcase - IGN",
    description:
      "The latest ID@Xbox has ended and there's a ton of awesome indie games to look forward to for Xbox fans. Here's a quick recap at what appeared at the event.",
    url: "https://www.ign.com/articles/idxbox-roundup-everything-showcased",
    urlToImage:
      "https://assets-prd.ignimgs.com/2023/07/11/image-1689091431291.png?width=1280",
    publishedAt: "2023-07-11T18:30:55Z",
    content:
      "Microsoft just held its latest ID@Xbox showcase highlighting a slew of indie games that will make their way onto Xbox platforms. While this is not saying all these games will be console exclusive, Xb… [+3479 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "The best Nintendo Switch game deals for Prime Day 2023 | Engadget - Engadget",
    description:
      "Amazon Prime Day includes a sale on Switch games from some of Nintendo’s biggest franchises.",
    url: "https://www.engadget.com/the-best-nintendo-switch-game-deals-for-prime-day-2023-181555437.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/Z1srBH9.JS_MKJTfMyxxqw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/ac427240-2012-11ee-b2fd-3be3baf08454.cf.jpg",
    publishedAt: "2023-07-11T18:18:25Z",
    content:
      "Amazon Prime Day includes a sale on Switch games from some of Nintendos biggest franchises. Whether you want them for yourself or to keep kids entertained during summer break, you can snag half-off t… [+2227 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Zack Zwiezen",
    title:
      "Halo Master Chief Collection Gets Another Big Update 9 Years In - Kotaku",
    description:
      "343’s latest update for the collection includes eight-player firefight, cut content, and new maps",
    url: "https://kotaku.com/halo-mcc-july-update-cut-content-firefight-new-mode-1850627831",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d4894e261874ab208a943da2da55a18d.jpg",
    publishedAt: "2023-07-11T18:15:00Z",
    content:
      "In an era when it seems games are killed off all the time, its impressive to see Microsoft and 343 Industries continuing to support and update Halo: The Master Chief Collection nearly a decade after … [+3510 chars]",
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: "Seth G. Macy",
    title: "Best SSD Deal of Prime Day: Get 4TB NVMe Storage for 67% Off - IGN",
    description:
      "Upgrade your PC, or add a heatsink and expand your PS5, storage with this super-fast SSD.",
    url: "https://www.ign.com/articles/best-ssd-deal-of-prime-day-get-4tb-nvme-storage-for-67-off",
    urlToImage:
      "https://assets-prd.ignimgs.com/2023/07/11/ssdthumb-1689097483383.jpg?width=1280",
    publishedAt: "2023-07-11T17:46:56Z",
    content:
      "Gone are the days of the prohibitively expensive M.2 SSDs. Amazon Prime members can get 4TB (Terabytes!) of NVMe storage for just $229.99. The MSRP on this WD_BLACK SN850X is $699.99. Even though it'… [+960 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Stray Souls - Official Release Window and Composer Announce Trailer | ID@Xbox Showcase - IGN",
    description:
      "Explore the terrifying world of Stray Souls when the third-person action-horror game from developer Jukai Studio launches in fall 2023. The latest trailer fo...",
    url: "https://www.youtube.com/watch?v=4cjgw1O3XPg",
    urlToImage: "https://i.ytimg.com/vi/4cjgw1O3XPg/maxresdefault.jpg",
    publishedAt: "2023-07-11T17:27:03Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Thurrott.com",
    },
    author: "Laurent Giret",
    title:
      "July Patch Tuesday Brings Moment 3 Features to Windows 11 - Thurrott.com",
    description:
      "Microsoft is finally making the new “Moment 3” features on Windows 11 available to all users with today’s Patch Tuesday update",
    url: "https://www.thurrott.com/windows/285517/july-2023-patch-tuesday-windows-11-moment-3",
    urlToImage:
      "https://thurrott-assets.nyc3.digitaloceanspaces.com/web/wp-content/uploads/sites/2/2023/05/Windows-11.jpg",
    publishedAt: "2023-07-11T17:20:32Z",
    content:
      "Microsoft is finally making the new Moment 3 features on Windows 11 available to all users with todays Patch Tuesday update (KB5028185). Microsoft actually started rolling out these new features in l… [+1030 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Worldless - Official Release Window Announcement Trailer | ID@Xbox Showcase July 2023 - IGN",
    description:
      "See combat and get another look at the gorgeous world of Worldless in this latest trailer for the upcoming 2D action platformer game. In Worldless, you will ...",
    url: "https://www.youtube.com/watch?v=x7o3WAn9NZA",
    urlToImage: "https://i.ytimg.com/vi/x7o3WAn9NZA/maxresdefault.jpg",
    publishedAt: "2023-07-11T17:10:38Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "BleepingComputer",
    },
    author: "Bill Toulas",
    title:
      "Hackers exploit Windows policy to load malicious kernel drivers - BleepingComputer",
    description:
      "Microsoft blocked code signing certificates predominantly used by Chinese hackers and developers to sign and load malicious kernel mode drivers on breached systems by exploiting a Windows policy loophole.",
    url: "https://www.bleepingcomputer.com/news/security/hackers-exploit-windows-policy-to-load-malicious-kernel-drivers/",
    urlToImage:
      "https://www.bleepstatic.com/content/hl-images/2022/10/26/Windows.jpg",
    publishedAt: "2023-07-11T17:00:00Z",
    content:
      "Microsoft blocked code signing certificates predominantly used by Chinese hackers and developers to sign and load malicious kernel mode drivers on breached systems by exploiting a Windows policy loop… [+5526 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Police",
    },
    author: "Dallas Thomas",
    title: "Android 14 Beta 4 arrives as stable release nears - Android Police",
    description: "We’re now in the last month of Google’s development timeline",
    url: "https://www.androidpolice.com/android-14-beta-4-b/",
    urlToImage:
      "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/android-14-beta-hands-on-generic-hero.jpg",
    publishedAt: "2023-07-11T16:58:00Z",
    content:
      "Google's Android 14 beta program is nearing its end, with July being the last month in the development timeline ahead of a potential stable release in August. What started five months ago with the fi… [+5409 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Kenneth Shepard",
    title: "Final Fantasy Protagonists Ranked From Worst To Best - Kotaku",
    description:
      "Where does Final Fantasy XVI’s Clive rank among the series’ heroes?",
    url: "https://kotaku.com/final-fantasy-best-clive-yuna-cloud-squall-16-rpg-1850627323",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cf68376d853f9c7e9870db448f90cb19.jpg",
    publishedAt: "2023-07-11T16:45:00Z",
    content:
      "Final Fantasy Xs himbo jock with daddy issues gets a bad rap because people take the games iconic laugh scene out of context and say he whines too much. This guy is going through it, and if you were … [+1168 chars]",
  },
  {
    source: {
      id: null,
      name: "9to5google.com",
    },
    author: "Abner Li",
    title: "Android 13 July update rolling out for Pixel - 9to5Google",
    description:
      "The Android 13 July update for the Pixel 4a, 4a 5G, 5, 5a, 6, 6 Pro, 6a, 7 and 7 Pro is rolling out today...",
    url: "https://9to5google.com/2023/07/05/android-13-july-pixel-update/",
    urlToImage:
      "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/05/pixel-7a-case-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2023-07-05T19:23:00Z",
    content:
      "While we wait for the next major version of Google’s mobile OS to hit stable, the Android 13 July update for the Pixel 4a, 4a 5G, 5, 5a, 6, 6 Pro, 6a, 7, 7 Pro, 7a, and Tablet is rolling out today.\r\n… [+940 chars]",
  },
  {
    source: {
      id: null,
      name: "Halowaypoint.com",
    },
    author: "Alex Wakeford",
    title:
      "Forge Features: July 5, 2023 | Halo - Official Site (en) - Halo Waypoint",
    description:
      "<p>Welcome back to a new edition of Forge Features! It’s been a little while since we last caught up, as the spotlight has very much been on Season 4: Infection’s arrival in Halo Infinite a few weeks ago, but as the dust settles the time has come to take a lo…",
    url: "https://www.halowaypoint.com/news/forge-features-013",
    urlToImage:
      "https://wpassets.halowaypoint.com/wp-content/2023/07/FF13Header.jpg",
    publishedAt: "2023-07-05T18:32:01Z",
    content:
      "Welcome back to a new edition of Forge Features! Its been a little while since we last caught up, as the spotlight has very much been on Season 4: Infections arrival in Halo Infinite a few weeks ago,… [+2202 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Antonio G. Di Benedetto",
    title: "PSA: today is the last day to save on Xbox Game Pass - The Verge",
    description:
      "The price of Xbox Game Pass Ultimate and the base tier is going up tomorrow. Here’s how you can lock in a deal on Microsoft’s game subscription service before it does.",
    url: "https://www.theverge.com/2023/7/5/23784604/xbox-game-pass-last-day-price-increase-deal-sale",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/c58dSsF7dsWpejPaGIiKCsL2ucc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22012262/vpavic_4275_20201030_0050.jpg",
    publishedAt: "2023-07-05T18:06:54Z",
    content:
      "PSA: today is the last day to save on Xbox Game Pass\r\nPSA: today is the last day to save on Xbox Game Pass\r\n / Microsofts price hike on its monthly game subscription service kicks in tomorrow.\r\nByAnt… [+2504 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Zack Zwiezen",
    title: "The Last of Us Dollar Store Knockoff Hits Nintendo Switch - Kotaku",
    description:
      "The Last Hope looks a lot like Naughty Dog’s famous post-apocalyptic angry people sim",
    url: "https://kotaku.com/switch-the-last-of-us-clone-ps4-ps5-last-hope-dead-zone-1850606552",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8ef2e50a14ec3693045a5c3fdd94917a.jpg",
    publishedAt: "2023-07-05T17:27:12Z",
    content:
      "The Last of Us and its sequel are blockbuster action-adventure games with incredible graphics and deep narratives. Theyre also games that, for a few different reasons, will never officially be playab… [+1822 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Ethan Gach",
    title: "Friday The 13th Unlocks Everything Before Disappearing - Kotaku",
    description:
      "The multiplayer horror game is giving away legendary perks and ditching XP",
    url: "https://kotaku.com/friday-the-13th-game-jason-movie-legendary-perk-xp-1850606586",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d07d9f9fe1686ca2aa49c0d3a5935042.jpg",
    publishedAt: "2023-07-05T17:22:00Z",
    content:
      "Friday the 13th: The Game is going away at the end of the year, so in the meantime the developers decided to let players enjoy the asymmetric multiplayer horror chaos with free unlocks and level boos… [+1883 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Juli Clover",
    title:
      "Apple Seeds Third Betas of iOS 17 and iPadOS 17 to Developers - MacRumors",
    description:
      "Apple today seeded the third betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming two weeks...",
    url: "https://www.macrumors.com/2023/07/05/apple-seeds-ios-17-beta-3-to-developers/",
    urlToImage:
      "https://images.macrumors.com/t/1Cc_6-HuM2hg4Hv1uAHdxCnrywY=/2500x/article-new/2023/01/iOS-17-Icon-Mock-Feature-Feature.jpg",
    publishedAt: "2023-07-05T17:10:09Z",
    content:
      "Apple today seeded the third betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming two weeks after the release of the second betas.\r\nRegistered d… [+2585 chars]",
  },
  {
    source: {
      id: null,
      name: "GameSpot",
    },
    author: "Darryn Bonthuys",
    title: "This Bundle Offers 10 Steam Games For Only $5 - GameSpot",
    description: "Celebrate Indie-pendence day with Fanatical's latest bundle.",
    url: "https://www.gamespot.com/articles/this-bundle-offers-10-steam-games-for-only-5/1100-6515660/",
    urlToImage:
      "https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/4160700-kart-racer-2.jpg",
    publishedAt: "2023-07-05T16:54:28Z",
    content:
      "Fanatical's latest bundle has arrived, and for anyone still celebrating in the glow of July 4, this Indie-pendence deal will allow you to grab gems from across the sci-fi, action, RPG, adventure, rac… [+2236 chars]",
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Kevin Purdy",
    title:
      "Mid-1990s Sega document leak shows how it lost the second console war to Sony - Ars Technica",
    description:
      '"Another example of why we will eventually win," writes blissfully unaware CEO.',
    url: "https://arstechnica.com/gaming/2023/07/mid-1990s-sega-document-leak-shows-how-it-lost-the-second-console-war-to-sony/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2023/07/cropped_postit-760x380.png",
    publishedAt: "2023-07-05T16:48:43Z",
    content:
      'Enlarge/ There are so many incomplete and esoteric thoughts on this note attached to a "Brand Strategy" folder in the Sega leaked docs that I will be thinking about it for days, if not months. What w… [+4352 chars]',
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Claire Jackson",
    title:
      "The Outer Worlds Was Pitched As A More Casual 'Fallout Meets Firefly' RPG - Kotaku",
    description:
      "The 2019 space RPG was designed to appeal to a broader audience than most modern RPGs",
    url: "https://kotaku.com/fallout-firefly-the-outer-worlds-obsidian-tim-cain-1850606308",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/080a1d4a5bf36b371a4e51fd8d806eaf.jpg",
    publishedAt: "2023-07-05T16:45:00Z",
    content:
      "If you havent been tuning into Fallout creator Tim Cains YouTube channel, you are sorely missing out on some fun gaming trivia and insights. Whether its the gritty details of how RPG gameplay gets fl… [+2077 chars]",
  },
  {
    source: {
      id: null,
      name: "Theregister.com",
    },
    author: "Brandon Vigliarolo",
    title:
      "OpenAI pauses Bing search feature over paywall bypass abilities - The Register",
    description: "ChatGPT back to partying like it's 2021",
    url: "https://www.theregister.com/2023/07/05/openai_pauses_bing_search/",
    urlToImage: "https://regmedia.co.uk/2023/07/05/paywall.jpg",
    publishedAt: "2023-07-05T16:30:00Z",
    content:
      "OpenAI's experiment with allowing ChatGPT to search the web via Bing has been suspended because the feature inadvertently allowed users to bypass paywalls.\r\nFirst rolled out in May and limited to pay… [+2830 chars]",
  },
  {
    source: {
      id: null,
      name: "XDA Developers",
    },
    author: "Kishalaya Kundu",
    title:
      "Watch the Pixel Fold fail spectacularly in this durability test - XDA Developers",
    description:
      "The Pixel Fold is a decent device in its own right, but it may not be the most durable foldable in the market.",
    url: "https://www.xda-developers.com/google-pixel-fold-durability-test/",
    urlToImage:
      "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2023/06/google-pixel-fold-lifestyle-8.jpg",
    publishedAt: "2023-07-05T16:29:00Z",
    content:
      "Launched earlier this year at a hefty $1,799, Google's Pixel Fold is one of the best folding smartphones that money can buy, alongside the likes of the Galaxy Z Fold 4 and Oppo Find N2. As we noted i… [+2141 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "OnePlus Nord 3 delivers a 120Hz screen and 80W fast charging | Engadget - Engadget",
    description:
      "OnePlus has introduced the Nord 3, a mid-range phone that packs a 120Hz screen and 80W fast charging — if you can buy it..",
    url: "https://www.engadget.com/oneplus-nord-3-delivers-a-120hz-screen-and-80w-fast-charging-161505940.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/Z02mRiW3QU5ys3BLO73s3Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/273ea930-1b47-11ee-bf7f-7425decc434d.cf.jpg",
    publishedAt: "2023-07-05T16:17:36Z",
    content:
      "OnePlus has unveiled the Nord 3, and it's a significant upgrade over the 2T to the point where you might prefer it over comparable rivals. The new mid-range model jumps to a 6.7-inch, 120Hz 2,772 x 1… [+2469 chars]",
  },
  {
    source: {
      id: null,
      name: "The Drive",
    },
    author: null,
    title:
      "Everything We Know About the Alfa Romeo Supercar Coming August 30 - The Drive",
    description:
      "Alfa Romeo will be unveiling its upcoming supercar on August 30, at the 2023 Formula 1 Italian grand prix at Monza.",
    url: "https://www.thedrive.com/news/everything-we-know-about-the-alfa-romeo-supercar-coming-august-30#article",
    urlToImage:
      "https://www.thedrive.com/uploads/2023/07/05/alfa-supercar-1.jpg?auto=webp",
    publishedAt: "2023-07-05T16:14:03Z",
    content:
      "Car enthusiasts rejoice, a new Alfa Romeo supercar is coming! There's just something great about Alfa making a gorgeous, fast, Italian supercar. The automaker teased the return of a supercar on Insta… [+3115 chars]",
  },
  {
    source: {
      id: null,
      name: "Jalopnik",
    },
    author: "Owen Bellwood",
    title: "You Can Buy Koenigsegg's One And Only Race Car - Jalopnik",
    description:
      "Koenigsegg built a one-off race car around its gorgeous CCX supercar, but the racing rules changed before it was ever driven in anger",
    url: "https://jalopnik.com/you-can-buy-koenigsegg-s-one-and-only-race-car-1850605982",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b268f4c6fead270dac3e427e6a31fc0f.jpg",
    publishedAt: "2023-07-05T16:10:00Z",
    content:
      "Swedish automaker Koenigsegg has made a name for itself building bonkers bedroom poster cars. Since launching the CC8S in 2002, the company has had a string of insanely-engineered supercars capable o… [+2350 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title: "Diablo IV (Zero Punctuation) - The Escapist",
    description:
      "Support us on Patreon to get Early Access to new videos, exclusive Discord perks & more for just $2 per month ►► https://www.patreon.com/the_escapistThis wee...",
    url: "https://www.youtube.com/watch?v=vjovy5kHo7g",
    urlToImage: "https://i.ytimg.com/vi/vjovy5kHo7g/maxresdefault.jpg",
    publishedAt: "2023-07-05T16:00:46Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Playlostark.com",
    },
    author: null,
    title: "July Update Announce ft. Saintone - News - Lost Ark",
    description:
      "The July Update releases next week, on July 12, bringing Inferno Kakul-Saydon, the Elgacia Epilogue quests, the Music Box of Memories, the Maharaka Festival, QoL improvements, and more!",
    url: "https://www.playlostark.com/en-us/news/articles/july-2023-announce",
    urlToImage:
      "https://images.ctfassets.net/umhrp0op95v1/3cKeK7hYnkp2HFRdQn0YCg/c16d99708cae4c5cb0811a7362e80ec6/LA_July_Press_Screenshots_Kakul_Raid_006_580.jpeg",
    publishedAt: "2023-07-05T16:00:00Z",
    content:
      "Heroes of Arkesia,\r\nThe July Update releases next week, on July 12, bringing Inferno Kakul-Saydon, the Elgacia Epilogue quests, the Music Box of Memories, the Maharaka Festival, QoL improvements, and… [+6237 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "The modular Fairphone 4 arrives in the US for the first time - Engadget",
    description:
      "Fairphone is at long last bringing its sustainability-focused smartphones to the US.",
    url: "https://www.engadget.com/the-modular-fairphone-4-arrives-in-the-us-for-the-first-time-155721165.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/ybmNde2BosSJOIqz8n8Tpg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-09/c3ac8c90-205f-11ec-9f4f-c8cd792d43f2.cf.jpg",
    publishedAt: "2023-07-05T15:58:03Z",
    content:
      "Fairphone\r\n is at long last bringing its sustainability-focused smartphones to the US\r\n. The company has teamed up with Murena to start offering a version of the Fairphone 4\r\n in the country. The Mur… [+2821 chars]",
  },
  {
    source: {
      id: null,
      name: "Benzinga",
    },
    author: "Sudhanshu Singh",
    title:
      "You Can Grab The AirPods Pro 2nd Gen With $50 Discount Ahead Of Prime Day Sale - Amazon.com (NASDAQ:AMZN) - Benzinga",
    description: "",
    url: "https://www.benzinga.com/news/23/07/33118426/you-can-grab-the-airpods-pro-2nd-gen-with-50-discount-ahead-of-prime-day-sale",
    urlToImage:
      "https://cdn.benzinga.com/files/images/story/2023/Airpods_Photo_by_Masarik_on_Shutterstock_1.jpeg?width=1200&height=800&fit=crop",
    publishedAt: "2023-07-05T15:51:04Z",
    content:
      "Amazon.com Inc. AMZNPrime Day is around the corner but deals have already started pouring in. This time its the Apple Inc. AAPLAirPods Pro (2nd Gen), the companys latest truly wireless earbuds with n… [+1341 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title: "Dead by Daylight - Official Nicolas Cage Trailer - IGN",
    description:
      "Play as Nicolas Cage in Dead by Daylight. The actor joins the multiplayer action/horror game as a new survivor. Check out the new Dead by Daylight trailer fo...",
    url: "https://www.youtube.com/watch?v=rLVcGdK7VRM",
    urlToImage: "https://i.ytimg.com/vi/rLVcGdK7VRM/maxresdefault.jpg",
    publishedAt: "2023-07-05T15:34:17Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title: "Diablo IV (Zero Punctuation) - The Escapist",
    description:
      "Support us on Patreon to get Early Access to new videos, exclusive Discord perks & more for just $2 per month ►► https://www.patreon.com/the_escapistThis wee...",
    url: "https://www.youtube.com/watch?v=vjovy5kHo7g",
    urlToImage: "https://i.ytimg.com/vi/vjovy5kHo7g/maxresdefault.jpg",
    publishedAt: "2023-07-05T16:00:46Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Playlostark.com",
    },
    author: null,
    title: "July Update Announce ft. Saintone - News - Lost Ark",
    description:
      "The July Update releases next week, on July 12, bringing Inferno Kakul-Saydon, the Elgacia Epilogue quests, the Music Box of Memories, the Maharaka Festival, QoL improvements, and more!",
    url: "https://www.playlostark.com/en-us/news/articles/july-2023-announce",
    urlToImage:
      "https://images.ctfassets.net/umhrp0op95v1/3cKeK7hYnkp2HFRdQn0YCg/c16d99708cae4c5cb0811a7362e80ec6/LA_July_Press_Screenshots_Kakul_Raid_006_580.jpeg",
    publishedAt: "2023-07-05T16:00:00Z",
    content:
      "Heroes of Arkesia,\r\nThe July Update releases next week, on July 12, bringing Inferno Kakul-Saydon, the Elgacia Epilogue quests, the Music Box of Memories, the Maharaka Festival, QoL improvements, and… [+6237 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: null,
    title:
      "The modular Fairphone 4 arrives in the US for the first time - Engadget",
    description:
      "Fairphone is at long last bringing its sustainability-focused smartphones to the US.",
    url: "https://www.engadget.com/the-modular-fairphone-4-arrives-in-the-us-for-the-first-time-155721165.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/ybmNde2BosSJOIqz8n8Tpg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-09/c3ac8c90-205f-11ec-9f4f-c8cd792d43f2.cf.jpg",
    publishedAt: "2023-07-05T15:58:03Z",
    content:
      "Fairphone\r\n is at long last bringing its sustainability-focused smartphones to the US\r\n. The company has teamed up with Murena to start offering a version of the Fairphone 4\r\n in the country. The Mur… [+2821 chars]",
  },
  {
    source: {
      id: null,
      name: "Benzinga",
    },
    author: "Sudhanshu Singh",
    title:
      "You Can Grab The AirPods Pro 2nd Gen With $50 Discount Ahead Of Prime Day Sale - Amazon.com (NASDAQ:AMZN) - Benzinga",
    description: "",
    url: "https://www.benzinga.com/news/23/07/33118426/you-can-grab-the-airpods-pro-2nd-gen-with-50-discount-ahead-of-prime-day-sale",
    urlToImage:
      "https://cdn.benzinga.com/files/images/story/2023/Airpods_Photo_by_Masarik_on_Shutterstock_1.jpeg?width=1200&height=800&fit=crop",
    publishedAt: "2023-07-05T15:51:04Z",
    content:
      "Amazon.com Inc. AMZNPrime Day is around the corner but deals have already started pouring in. This time its the Apple Inc. AAPLAirPods Pro (2nd Gen), the companys latest truly wireless earbuds with n… [+1341 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Zack Zwiezen",
    title: "The Last of Us Dollar Store Knockoff Hits Nintendo Switch - Kotaku",
    description:
      "The Last Hope looks a lot like Naughty Dog’s famous post-apocalyptic angry people sim",
    url: "https://kotaku.com/switch-the-last-of-us-clone-ps4-ps5-last-hope-dead-zone-1850606552",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8ef2e50a14ec3693045a5c3fdd94917a.jpg",
    publishedAt: "2023-07-05T17:27:12Z",
    content:
      "The Last of Us and its sequel are blockbuster action-adventure games with incredible graphics and deep narratives. Theyre also games that, for a few different reasons, will never officially be playab… [+1822 chars]",
  },
  {
    source: {
      id: null,
      name: "Kotaku",
    },
    author: "Ethan Gach",
    title: "Friday The 13th Unlocks Everything Before Disappearing - Kotaku",
    description:
      "The multiplayer horror game is giving away legendary perks and ditching XP",
    url: "https://kotaku.com/friday-the-13th-game-jason-movie-legendary-perk-xp-1850606586",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d07d9f9fe1686ca2aa49c0d3a5935042.jpg",
    publishedAt: "2023-07-05T17:22:00Z",
    content:
      "Friday the 13th: The Game is going away at the end of the year, so in the meantime the developers decided to let players enjoy the asymmetric multiplayer horror chaos with free unlocks and level boos… [+1883 chars]",
  },
  {
    source: {
      id: null,
      name: "MacRumors",
    },
    author: "Juli Clover",
    title:
      "Apple Seeds Third Betas of iOS 17 and iPadOS 17 to Developers - MacRumors",
    description:
      "Apple today seeded the third betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming two weeks...",
    url: "https://www.macrumors.com/2023/07/05/apple-seeds-ios-17-beta-3-to-developers/",
    urlToImage:
      "https://images.macrumors.com/t/1Cc_6-HuM2hg4Hv1uAHdxCnrywY=/2500x/article-new/2023/01/iOS-17-Icon-Mock-Feature-Feature.jpg",
    publishedAt: "2023-07-05T17:10:09Z",
    content:
      "Apple today seeded the third betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming two weeks after the release of the second betas.\r\nRegistered d… [+2585 chars]",
  },
  {
    source: {
      id: null,
      name: "GameSpot",
    },
    author: "Darryn Bonthuys",
    title: "This Bundle Offers 10 Steam Games For Only $5 - GameSpot",
    description: "Celebrate Indie-pendence day with Fanatical's latest bundle.",
    url: "https://www.gamespot.com/articles/this-bundle-offers-10-steam-games-for-only-5/1100-6515660/",
    urlToImage:
      "https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/4160700-kart-racer-2.jpg",
    publishedAt: "2023-07-05T16:54:28Z",
    content:
      "Fanatical's latest bundle has arrived, and for anyone still celebrating in the glow of July 4, this Indie-pendence deal will allow you to grab gems from across the sci-fi, action, RPG, adventure, rac… [+2236 chars]",
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Kevin Purdy",
    title:
      "Mid-1990s Sega document leak shows how it lost the second console war to Sony - Ars Technica",
    description:
      '"Another example of why we will eventually win," writes blissfully unaware CEO.',
    url: "https://arstechnica.com/gaming/2023/07/mid-1990s-sega-document-leak-shows-how-it-lost-the-second-console-war-to-sony/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2023/07/cropped_postit-760x380.png",
    publishedAt: "2023-07-05T16:48:43Z",
    content:
      'Enlarge/ There are so many incomplete and esoteric thoughts on this note attached to a "Brand Strategy" folder in the Sega leaked docs that I will be thinking about it for days, if not months. What w… [+4352 chars]',
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title: "Dead by Daylight - Official Nicolas Cage Trailer - IGN",
    description:
      "Play as Nicolas Cage in Dead by Daylight. The actor joins the multiplayer action/horror game as a new survivor. Check out the new Dead by Daylight trailer fo...",
    url: "https://www.youtube.com/watch?v=rLVcGdK7VRM",
    urlToImage: "https://i.ytimg.com/vi/rLVcGdK7VRM/maxresdefault.jpg",
    publishedAt: "2023-07-05T15:34:17Z",
    content: null,
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: "IGN",
    title:
      "Emile Morel, Beyond Good and Evil 2 Creative Director, Dies Suddenly at 40 - IGN",
    description: null,
    url: "https://www.ign.com/articles/emile-morel-beyond-good-and-evil-2-creative-director-dies-suddenly-at-40",
    urlToImage: null,
    publishedAt: "2023-07-05T19:53:07Z",
    content: null,
  },
];

export default techArticles;

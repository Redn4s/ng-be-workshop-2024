import { TMDBMovieModel } from '@nx-workshop/models';

// Note(Sander): This is a mock of the TMDB API response
const popularMovies = [
  {
    "adult": false,
    "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    "genre_ids": [
      878,
      28,
      12
    ],
    "id": 912649,
    "original_language": "en",
    "original_title": "Venom: The Last Dance",
    "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    "popularity": 2696.384,
    "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    "release_date": "2024-10-22",
    "title": "Venom: The Last Dance",
    "video": false,
    "vote_average": 6.409,
    "vote_count": 924
  },
  {
    "adult": false,
    "backdrop_path": "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
    "genre_ids": [
      16,
      12,
      10751,
      35
    ],
    "id": 1241982,
    "original_language": "en",
    "original_title": "Moana 2",
    "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    "popularity": 2595.191,
    "poster_path": "/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    "release_date": "2024-11-27",
    "title": "Moana 2",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 75
  },
  {
    "adult": false,
    "backdrop_path": "/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg",
    "genre_ids": [
      27,
      9648
    ],
    "id": 1100782,
    "original_language": "en",
    "original_title": "Smile 2",
    "overview": "About to embark on a new world tour, global pop sensation Skye Riley begins experiencing increasingly terrifying and inexplicable events. Overwhelmed by the escalating horrors and the pressures of fame, Skye is forced to face her dark past to regain control of her life before it spirals out of control.",
    "popularity": 1762.403,
    "poster_path": "/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg",
    "release_date": "2024-10-16",
    "title": "Smile 2",
    "video": false,
    "vote_average": 6.66,
    "vote_count": 722
  },
  {
    "adult": false,
    "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
    "genre_ids": [
      16,
      878,
      10751
    ],
    "id": 1184918,
    "original_language": "en",
    "original_title": "The Wild Robot",
    "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    "popularity": 1561.367,
    "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
    "release_date": "2024-09-12",
    "title": "The Wild Robot",
    "video": false,
    "vote_average": 8.404,
    "vote_count": 3176
  },
  {
    "adult": false,
    "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
    "genre_ids": [
      28,
      12
    ],
    "id": 558449,
    "original_language": "en",
    "original_title": "Gladiator II",
    "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
    "popularity": 1337.835,
    "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    "release_date": "2024-11-13",
    "title": "Gladiator II",
    "video": false,
    "vote_average": 6.714,
    "vote_count": 784
  },
  {
    "adult": false,
    "backdrop_path": "/uKb22E0nlzr914bA9KyA5CVCOlV.jpg",
    "genre_ids": [
      18,
      14,
      10749
    ],
    "id": 402431,
    "original_language": "en",
    "original_title": "Wicked",
    "overview": "When ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda, the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
    "popularity": 1330.378,
    "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
    "release_date": "2024-11-20",
    "title": "Wicked",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 241
  },
  {
    "adult": false,
    "backdrop_path": "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 1034541,
    "original_language": "en",
    "original_title": "Terrifier 3",
    "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
    "popularity": 1228.748,
    "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
    "release_date": "2024-10-09",
    "title": "Terrifier 3",
    "video": false,
    "vote_average": 6.878,
    "vote_count": 1136
  },
  {
    "adult": false,
    "backdrop_path": "/kyVcNF6GRthdiT4oZn5XgJtl0F7.jpg",
    "genre_ids": [
      28,
      80
    ],
    "id": 1233327,
    "original_language": "te",
    "original_title": "మట్కా",
    "overview": "Set between the years 1958 and 1982, Matka tells the story of Vasu, who rises from poverty to create a powerful gambling empire in India, ultimately leading the nation into a battle with the government. Based on real events, the tale explores themes of love, moral choices, and the consequences of ambition.",
    "popularity": 1189.621,
    "poster_path": "/jrHIKDq9xvKJhYBDvYwmAfs8qvr.jpg",
    "release_date": "2024-11-14",
    "title": "Matka",
    "video": false,
    "vote_average": 5.333,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
    "genre_ids": [
      18,
      28,
      27
    ],
    "id": 1118031,
    "original_language": "es",
    "original_title": "Apocalipsis Z: el principio del fin",
    "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
    "popularity": 1140.332,
    "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
    "release_date": "2024-10-04",
    "title": "Apocalypse Z: The Beginning of the End",
    "video": false,
    "vote_average": 6.747,
    "vote_count": 592
  },
  {
    "adult": false,
    "backdrop_path": "/kwXycPsLA6SV3KUOagn343TtMOf.jpg",
    "genre_ids": [
      28,
      878,
      53
    ],
    "id": 791042,
    "original_language": "en",
    "original_title": "Levels",
    "overview": "After witnessing his girlfriend's murder, a man risks everything - including reality itself - to discover the truth.",
    "popularity": 1011.78,
    "poster_path": "/2ZdnmSCPm3ZcLc0CcTYqRvoyJLE.jpg",
    "release_date": "2024-11-01",
    "title": "Levels",
    "video": false,
    "vote_average": 5.685,
    "vote_count": 27
  },
  {
    "adult": false,
    "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
    "genre_ids": [
      28,
      35,
      878
    ],
    "id": 533535,
    "original_language": "en",
    "original_title": "Deadpool \u0026 Wolverine",
    "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    "popularity": 942.265,
    "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "release_date": "2024-07-24",
    "title": "Deadpool \u0026 Wolverine",
    "video": false,
    "vote_average": 7.687,
    "vote_count": 5641
  },
  {
    "adult": false,
    "backdrop_path": "/n4ycOGj2tRLfINTJQ3wl0vNYqpR.jpg",
    "genre_ids": [
      16,
      14,
      10751,
      12,
      35
    ],
    "id": 592983,
    "original_language": "en",
    "original_title": "Spellbound",
    "overview": "When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it's too late.",
    "popularity": 910.533,
    "poster_path": "/xFSIygDiX70Esp9dheCgGX0Nj77.jpg",
    "release_date": "2024-11-22",
    "title": "Spellbound",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 79
  },
  {
    "adult": false,
    "backdrop_path": "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    "genre_ids": [
      27,
      878
    ],
    "id": 945961,
    "original_language": "en",
    "original_title": "Alien: Romulus",
    "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
    "popularity": 886.67,
    "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    "release_date": "2024-08-13",
    "title": "Alien: Romulus",
    "video": false,
    "vote_average": 7.258,
    "vote_count": 2456
  },
  {
    "adult": false,
    "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
    "genre_ids": [
      18,
      27,
      878
    ],
    "id": 933260,
    "original_language": "en",
    "original_title": "The Substance",
    "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
    "popularity": 844.703,
    "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
    "release_date": "2024-09-07",
    "title": "The Substance",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 2245
  },
  {
    "adult": false,
    "backdrop_path": "/uMXVeVL2v57lMv6pqBmegDHHPqz.jpg",
    "genre_ids": [
      16,
      878,
      12,
      10751
    ],
    "id": 698687,
    "original_language": "en",
    "original_title": "Transformers One",
    "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
    "popularity": 795.242,
    "poster_path": "/qbkAqmmEIZfrCO8ZQAuIuVMlWoV.jpg",
    "release_date": "2024-09-11",
    "title": "Transformers One",
    "video": false,
    "vote_average": 8.088,
    "vote_count": 781
  },
  {
    "adult": false,
    "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
    "genre_ids": [
      28,
      35,
      14
    ],
    "id": 845781,
    "original_language": "en",
    "original_title": "Red One",
    "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
    "popularity": 784.139,
    "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    "release_date": "2024-10-31",
    "title": "Red One",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 177
  },
  {
    "adult": false,
    "backdrop_path": "/5O0mkQGfOQM4OktFOCep9YmXK79.jpg",
    "genre_ids": [
      28,
      878,
      53,
      35,
      27
    ],
    "id": 995803,
    "original_language": "en",
    "original_title": "Arena Wars",
    "overview": "In 2045 convicted criminals are given the opportunity to compete on the world's #1 televised sporting event, Arena Wars. They must survive 7 rooms and 7 of the most vicious killers in the country. If they win, they regain their freedom.",
    "popularity": 760.319,
    "poster_path": "/4dRtXjk1rcsZlaMJpBn6Nh9cTfO.jpg",
    "release_date": "2024-06-25",
    "title": "Arena Wars",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 14
  },
  {
    "adult": false,
    "backdrop_path": "/zpaodBqO2lcwJh2SQrFFf1Rn8Jy.jpg",
    "genre_ids": [
      10749,
      18,
      35
    ],
    "id": 1100099,
    "original_language": "en",
    "original_title": "We Live in Time",
    "overview": "An up-and-coming chef and a recent divorcée find their lives forever changed when a chance encounter brings them together, in a decade-spanning, deeply moving romance.",
    "popularity": 726.07,
    "poster_path": "/ssFS25CiYQvRJqErqaEyHuVgyH7.jpg",
    "release_date": "2024-10-10",
    "title": "We Live in Time",
    "video": false,
    "vote_average": 7.602,
    "vote_count": 113
  },
  {
    "adult": false,
    "backdrop_path": "/1FBHAQnq7Bs3djBmaNkfdVbnCUE.jpg",
    "genre_ids": [
      28,
      53
    ],
    "id": 1124641,
    "original_language": "en",
    "original_title": "Classified",
    "overview": "Operating alone in the field for more than 20 years, a CIA hitman uses the \"Help Wanted\" section of the newspapers to get his orders from the Agency. His long-lost daughter, now a UK MI6 analyst, tracks him down to deliver shocking news: his CIA boss has been dead for years and the division long since shut down. Together, they set out to discover whose orders he's been executing.",
    "popularity": 671.497,
    "poster_path": "/3k8jv1kSAAc0rCfFGtWDDQL4dfK.jpg",
    "release_date": "2024-09-19",
    "title": "Classified",
    "video": false,
    "vote_average": 5.7,
    "vote_count": 77
  },
  {
    "adult": false,
    "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    "genre_ids": [
      16,
      10751,
      35,
      28
    ],
    "id": 519182,
    "original_language": "en",
    "original_title": "Despicable Me 4",
    "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
    "popularity": 662.165,
    "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    "release_date": "2024-06-20",
    "title": "Despicable Me 4",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 2213
  }
];
const upcomingMovies = [
  {
    "adult": false,
    "backdrop_path": "/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg",
    "genre_ids": [
      16,
      12,
      10751,
      35
    ],
    "id": 1241982,
    "original_language": "en",
    "original_title": "Moana 2",
    "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    "popularity": 2595.191,
    "poster_path": "/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    "release_date": "2024-11-27",
    "title": "Moana 2",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 80
  },
  {
    "adult": false,
    "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
    "genre_ids": [
      28,
      12
    ],
    "id": 558449,
    "original_language": "en",
    "original_title": "Gladiator II",
    "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
    "popularity": 1337.835,
    "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    "release_date": "2024-11-13",
    "title": "Gladiator II",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 785
  },
  {
    "adult": false,
    "backdrop_path": "/uKb22E0nlzr914bA9KyA5CVCOlV.jpg",
    "genre_ids": [
      18,
      14,
      10749
    ],
    "id": 402431,
    "original_language": "en",
    "original_title": "Wicked",
    "overview": "When ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda, the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
    "popularity": 1330.378,
    "poster_path": "/zfaeWoHsBowz6KN4xEtla59xS7.jpg",
    "release_date": "2024-11-20",
    "title": "Wicked",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 241
  },
  {
    "adult": false,
    "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
    "genre_ids": [
      18,
      27,
      878
    ],
    "id": 933260,
    "original_language": "en",
    "original_title": "The Substance",
    "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
    "popularity": 844.703,
    "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
    "release_date": "2024-09-07",
    "title": "The Substance",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 2247
  },
  {
    "adult": false,
    "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
    "genre_ids": [
      28,
      35,
      14
    ],
    "id": 845781,
    "original_language": "en",
    "original_title": "Red One",
    "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
    "popularity": 784.139,
    "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    "release_date": "2024-10-31",
    "title": "Red One",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 177
  },
  {
    "adult": false,
    "backdrop_path": "/6lE2e6j8qbtQR8aHxQNJlwxdmKV.jpg",
    "genre_ids": [
      28,
      18,
      80,
      53
    ],
    "id": 974453,
    "original_language": "en",
    "original_title": "Absolution",
    "overview": "An aging ex-boxer gangster working as muscle for a Boston crime boss receives an upsetting diagnosis.  Despite a faltering memory, he attempts to rectify the sins of his past and reconnect with his estranged children. He is determined to leave a positive legacy for his grandson, but the criminal underworld isn’t done with him and won’t loosen their grip willingly.",
    "popularity": 521.986,
    "poster_path": "/cNtAslrDhk1i3IOZ16vF7df6lMy.jpg",
    "release_date": "2024-10-31",
    "title": "Absolution",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 66
  },
  {
    "adult": false,
    "backdrop_path": "/llIXQAndg5kB6SWlp6ouUdO7Zxd.jpg",
    "genre_ids": [
      28,
      12,
      18,
      36,
      10749,
      53
    ],
    "id": 1084736,
    "original_language": "fr",
    "original_title": "Le Comte de Monte-Cristo",
    "overview": "Edmond Dantes becomes the target of a sinister plot and is arrested on his wedding day for a crime he did not commit. After 14 years in the island prison of Château d’If, he manages a daring escape. Now rich beyond his dreams, he assumes the identity of the Count of Monte-Cristo and exacts his revenge on the three men who betrayed him.",
    "popularity": 490.017,
    "poster_path": "/zw4kV7npGtaqvUxvJE9IdqdFsNc.jpg",
    "release_date": "2024-06-28",
    "title": "The Count of Monte-Cristo",
    "video": false,
    "vote_average": 8.2,
    "vote_count": 906
  },
  {
    "adult": false,
    "backdrop_path": "/hkJhGayONXn96CqIRM9GhWKnlCf.jpg",
    "genre_ids": [
      28,
      12,
      16,
      14
    ],
    "id": 1014505,
    "original_language": "ja",
    "original_title": "劇場版「オーバーロード」聖王国編",
    "overview": "After twelve years of playing his favorite MMORPG game, Momonga logs in for the last time only to find himself transported into its world playing it indefinitely. Throughout his adventures, his avatar ascends to the title of Sorcerer King Ains Ooal Gown. Once prosperous but now on the brink of ruin, The Sacred Kingdom enjoyed years of peace after construction of an enormous wall protecting them from neighboring invasions. But, one day this comes to an end when the Demon Emperor Jaldabaoth arrives with an army of villainous demi-humans. Fearing invasion of their own lands, the neighboring territory of the Slane Theocracy is forced to beg their enemies at the Sorcerer Kingdom for help. Heeding the call, Momonga, now known as the Sorcerer King Ains Ooal Gown, rallies the Sorcerer Kingdom and its undead army to join the fight alongside the Sacred Kingdom and the Slane Theocracy in hopes to defeat the Demon Emperor.",
    "popularity": 476.257,
    "poster_path": "/jEvytxNa5mfW7VAUmDWsZtIdATc.jpg",
    "release_date": "2024-09-20",
    "title": "OVERLORD: The Sacred Kingdom",
    "video": false,
    "vote_average": 7.881,
    "vote_count": 21
  },
  {
    "adult": false,
    "backdrop_path": "/5IIFJxwRzmkhczQidIhpoaolpZY.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 976734,
    "original_language": "en",
    "original_title": "Canary Black",
    "overview": "Top level CIA agent Avery Graves is blackmailed by terrorists into betraying her own country to save her kidnapped husband. Cut off from her team, she turns to her underworld contacts to survive and help locate the coveted intelligence that the kidnappers want.",
    "popularity": 346.717,
    "poster_path": "/hhiR6uUbTYYvKoACkdAIQPS5c6f.jpg",
    "release_date": "2024-10-10",
    "title": "Canary Black",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 263
  },
  {
    "adult": false,
    "backdrop_path": "/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
    "genre_ids": [
      16,
      14,
      12
    ],
    "id": 823219,
    "original_language": "lv",
    "original_title": "Straume",
    "overview": "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
    "popularity": 325.584,
    "poster_path": "/dzDMewC0Hwv01SROiWgKOi4iOc1.jpg",
    "release_date": "2024-08-29",
    "title": "Flow",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 279
  },
  {
    "adult": false,
    "backdrop_path": "/3Be8kvRZsvKn1rQFHMLVLEUX9Sn.jpg",
    "genre_ids": [
      12,
      35,
      10751,
      878
    ],
    "id": 939243,
    "original_language": "en",
    "original_title": "Sonic the Hedgehog 3",
    "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
    "popularity": 312.712,
    "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    "release_date": "2024-12-19",
    "title": "Sonic the Hedgehog 3",
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
    "genre_ids": [
      28,
      14,
      27
    ],
    "id": 957452,
    "original_language": "en",
    "original_title": "The Crow",
    "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
    "popularity": 270.743,
    "poster_path": "/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
    "release_date": "2024-08-21",
    "title": "The Crow",
    "video": false,
    "vote_average": 5.9,
    "vote_count": 776
  },
  {
    "adult": false,
    "backdrop_path": "/evFChfYeD2LqobEJf8iQsrYcGTw.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "id": 1182387,
    "original_language": "en",
    "original_title": "Armor",
    "overview": "Armored truck security guard James Brody is working with his son Casey transporting millions of dollars between banks when a team of thieves led by Rook orchestrate a takeover of their truck to seize the riches. Following a violent car chase, Rook soon has the armored truck surrounded and James and Casey find themselves cornered onto a decrepit bridge.",
    "popularity": 265.755,
    "poster_path": "/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg",
    "release_date": "2024-10-30",
    "title": "Armor",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 24
  },
  {
    "adult": false,
    "backdrop_path": "/a3PBAmXUXuazAzr83WNzRaBS33I.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 978796,
    "original_language": "en",
    "original_title": "Bagman",
    "overview": "For centuries and across cultures, parents have warned their children of the legendary Bagman, who snatches innocent children and stuffs them into his vile, rotting bag—never to be seen again. Patrick McKee narrowly escaped such an encounter as a boy, which left him with lasting scars throughout his adulthood. Now, Patrick’s childhood tormentor has returned, threatening the safety of his wife Karina and son Jake.",
    "popularity": 251.612,
    "poster_path": "/hzrvol8K2VWm2BsDTwb8YvRMzIH.jpg",
    "release_date": "2024-09-20",
    "title": "Bagman",
    "video": false,
    "vote_average": 6.168,
    "vote_count": 92
  },
  {
    "adult": false,
    "backdrop_path": "/tmvbyMIv56hc03Mtgusj2koFWKj.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 1138194,
    "original_language": "en",
    "original_title": "Heretic",
    "overview": "Two young missionaries are forced to prove their faith when they knock on the wrong door and are greeted by a diabolical Mr. Reed, becoming ensnared in his deadly game of cat-and-mouse.",
    "popularity": 238.73,
    "poster_path": "/5HJqjCTcaE1TFwnNh3Dn21be2es.jpg",
    "release_date": "2024-10-31",
    "title": "Heretic",
    "video": false,
    "vote_average": 7.173,
    "vote_count": 84
  },
  {
    "adult": false,
    "backdrop_path": "/au3o84ub27qTZiMiEc9UYzN74V3.jpg",
    "genre_ids": [
      28,
      878,
      53
    ],
    "id": 1035048,
    "original_language": "en",
    "original_title": "Elevation",
    "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
    "popularity": 209.152,
    "poster_path": "/uQhYBxOVFU6s9agD49FnGHwJqG5.jpg",
    "release_date": "2024-11-07",
    "title": "Elevation",
    "video": false,
    "vote_average": 5.8,
    "vote_count": 41
  },
  {
    "adult": false,
    "backdrop_path": "/nA0RDmSDqpN5tLun4sCqdPekObD.jpg",
    "genre_ids": [
      18,
      878
    ],
    "id": 592831,
    "original_language": "en",
    "original_title": "Megalopolis",
    "overview": "Genius artist Cesar Catilina seeks to leap the City of New Rome into a utopian, idealistic future, while his opposition, Mayor Franklyn Cicero, remains committed to a regressive status quo, perpetuating greed, special interests, and partisan warfare. Torn between them is socialite Julia Cicero, the mayor’s daughter, whose love for Cesar has divided her loyalties, forcing her to discover what she truly believes humanity deserves.",
    "popularity": 198.538,
    "poster_path": "/8Sok3HNA3r1GHnK2lCytHyBz1A.jpg",
    "release_date": "2024-09-25",
    "title": "Megalopolis",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 466
  },
  {
    "adult": false,
    "backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    "genre_ids": [
      12,
      18,
      878
    ],
    "id": 157336,
    "original_language": "en",
    "original_title": "Interstellar",
    "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "popularity": 187.296,
    "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "release_date": "2014-11-05",
    "title": "Interstellar",
    "video": false,
    "vote_average": 8.442,
    "vote_count": 35666
  },
  {
    "adult": false,
    "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
    "genre_ids": [
      28,
      12,
      53
    ],
    "id": 539972,
    "original_language": "en",
    "original_title": "Kraven the Hunter",
    "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
    "popularity": 173.958,
    "poster_path": "/1GvBhRxY6MELDfxFrete6BNhBB5.jpg",
    "release_date": "2024-12-11",
    "title": "Kraven the Hunter",
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/c6nouvFYnmNO50WQDLcKMI3p0jA.jpg",
    "genre_ids": [
      12,
      10751,
      18
    ],
    "id": 762509,
    "original_language": "en",
    "original_title": "Mufasa: The Lion King",
    "overview": "Rafiki relays the legend of Mufasa to lion cub Kiara, daughter of Simba and Nala, with Timon and Pumbaa lending their signature schtick.. Told in flashbacks, the story introduces Mufasa as an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion a journey of misfits searching for their destiny and working together to evade a threatening and deadly foe.",
    "popularity": 162.939,
    "poster_path": "/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    "release_date": "2024-12-18",
    "title": "Mufasa: The Lion King",
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0
  }
];
const topRatedMovies = [
  {
    "adult": false,
    "backdrop_path": "/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 278,
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 173.722,
    "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "release_date": "1994-09-23",
    "title": "The Shawshank Redemption",
    "video": false,
    "vote_average": 8.707,
    "vote_count": 27173
  },
  {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 161.619,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.689,
    "vote_count": 20641
  },
  {
    "adult": false,
    "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 240,
    "original_language": "en",
    "original_title": "The Godfather Part II",
    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "popularity": 84.667,
    "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    "release_date": "1974-12-20",
    "title": "The Godfather Part II",
    "video": false,
    "vote_average": 8.573,
    "vote_count": 12448
  },
  {
    "adult": false,
    "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "id": 424,
    "original_language": "en",
    "original_title": "Schindler's List",
    "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    "popularity": 81.646,
    "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "release_date": "1993-12-15",
    "title": "Schindler's List",
    "video": false,
    "vote_average": 8.565,
    "vote_count": 15856
  },
  {
    "adult": false,
    "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    "genre_ids": [
      18
    ],
    "id": 389,
    "original_language": "en",
    "original_title": "12 Angry Men",
    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "popularity": 59.592,
    "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    "release_date": "1957-04-10",
    "title": "12 Angry Men",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 8657
  },
  {
    "adult": false,
    "backdrop_path": "/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg",
    "genre_ids": [
      16,
      10751,
      14
    ],
    "id": 129,
    "original_language": "ja",
    "original_title": "千と千尋の神隠し",
    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    "popularity": 90.051,
    "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "release_date": "2001-07-20",
    "title": "Spirited Away",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 16528
  },
  {
    "adult": false,
    "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 19404,
    "original_language": "hi",
    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    "popularity": 31.91,
    "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
    "release_date": "1995-10-20",
    "title": "Dilwale Dulhania Le Jayenge",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 4439
  },
  {
    "adult": false,
    "backdrop_path": "/oOv2oUXcAaNXakRqUPxYq5lJURz.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "id": 155,
    "original_language": "en",
    "original_title": "The Dark Knight",
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "popularity": 285.351,
    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "release_date": "2008-07-16",
    "title": "The Dark Knight",
    "video": false,
    "vote_average": 8.516,
    "vote_count": 32910
  },
  {
    "adult": false,
    "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
    "genre_ids": [
      14,
      18,
      80
    ],
    "id": 497,
    "original_language": "en",
    "original_title": "The Green Mile",
    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "popularity": 84.091,
    "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "release_date": "1999-12-10",
    "title": "The Green Mile",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 17436
  },
  {
    "adult": false,
    "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    "genre_ids": [
      35,
      53,
      18
    ],
    "id": 496243,
    "original_language": "ko",
    "original_title": "기생충",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "popularity": 100.765,
    "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "release_date": "2019-05-30",
    "title": "Parasite",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 18295
  },
  {
    "adult": false,
    "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    "genre_ids": [
      53,
      80
    ],
    "id": 680,
    "original_language": "en",
    "original_title": "Pulp Fiction",
    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "popularity": 98.974,
    "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "release_date": "1994-09-10",
    "title": "Pulp Fiction",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 27914
  },
  {
    "adult": false,
    "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    "genre_ids": [
      16,
      10749,
      18
    ],
    "id": 372058,
    "original_language": "ja",
    "original_title": "君の名は。",
    "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    "popularity": 70.862,
    "poster_path": "/vfJFJPepRKapMd5G2ro7klIRysq.jpg",
    "release_date": "2016-08-26",
    "title": "Your Name.",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 11384
  },
  {
    "adult": false,
    "backdrop_path": "/5JrZAtyk3LwiiAWLW0kwz41XZJC.jpg",
    "genre_ids": [
      12,
      14,
      28
    ],
    "id": 122,
    "original_language": "en",
    "original_title": "The Lord of the Rings: The Return of the King",
    "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
    "popularity": 256.078,
    "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "release_date": "2003-12-17",
    "title": "The Lord of the Rings: The Return of the King",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 24231
  },
  {
    "adult": false,
    "backdrop_path": "/ghgfzbEV7kbpbi1O8eIILKVXEA8.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 13,
    "original_language": "en",
    "original_title": "Forrest Gump",
    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    "popularity": 90.837,
    "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "release_date": "1994-06-23",
    "title": "Forrest Gump",
    "video": false,
    "vote_average": 8.471,
    "vote_count": 27446
  },
  {
    "adult": false,
    "backdrop_path": "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
    "genre_ids": [
      37
    ],
    "id": 429,
    "original_language": "it",
    "original_title": "Il buono, il brutto, il cattivo",
    "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    "popularity": 77.543,
    "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "release_date": "1966-12-22",
    "title": "The Good, the Bad and the Ugly",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 8612
  },
  {
    "adult": false,
    "backdrop_path": "/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 346,
    "original_language": "ja",
    "original_title": "七人の侍",
    "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
    "popularity": 38.883,
    "poster_path": "/iAq0sq42vKTLneVGqHn1D4GzgrM.jpg",
    "release_date": "1954-04-26",
    "title": "Seven Samurai",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 3678
  },
  {
    "adult": false,
    "backdrop_path": "/7TF4p86ZafnxFuNqWdhpHXFO244.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 769,
    "original_language": "en",
    "original_title": "GoodFellas",
    "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "popularity": 75.648,
    "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "release_date": "1990-09-12",
    "title": "GoodFellas",
    "video": false,
    "vote_average": 8.457,
    "vote_count": 12868
  },
  {
    "adult": false,
    "backdrop_path": "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
    "genre_ids": [
      16,
      18,
      10752
    ],
    "id": 12477,
    "original_language": "ja",
    "original_title": "火垂るの墓",
    "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
    "popularity": 0.038,
    "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    "release_date": "1988-04-16",
    "title": "Grave of the Fireflies",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 5565
  },
  {
    "adult": false,
    "backdrop_path": "/7lyq8hK0MhPHpUXdnqbFvZYSfkk.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "id": 11216,
    "original_language": "it",
    "original_title": "Nuovo Cinema Paradiso",
    "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    "popularity": 26.918,
    "poster_path": "/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg",
    "release_date": "1988-11-17",
    "title": "Cinema Paradiso",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 4367
  },
  {
    "adult": false,
    "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
    "genre_ids": [
      35,
      18
    ],
    "id": 637,
    "original_language": "it",
    "original_title": "La vita è bella",
    "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    "popularity": 38.043,
    "poster_path": "/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
    "release_date": "1997-12-20",
    "title": "Life Is Beautiful",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 13037
  }
];

export const MOVIES_DATA: TMDBMovieModel[] = [];
popularMovies.forEach((movie) => {
  MOVIES_DATA.push({ ...movie, popular: true });
});
upcomingMovies.forEach((movie) => {
  const found = MOVIES_DATA.find(m => m.id === movie.id);
  if (found) {
    found.upcoming = true;
  } else {
    MOVIES_DATA.push({ ...movie, upcoming: true });
  }
});
topRatedMovies.forEach((movie) => {
  const found = MOVIES_DATA.find(m => m.id === movie.id);
  if (found) {
    found.topRated = true;
  } else {
    MOVIES_DATA.push({ ...movie, topRated: true });
  }
});

export const GENRES_DATA = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  // {
  //   "id": 99,
  //   "name": "Documentary"
  // },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  // {
  //   "id": 10402,
  //   "name": "Music"
  // },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  // {
  //   "id": 10770,
  //   "name": "TV Movie"
  // },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

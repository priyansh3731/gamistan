import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "0",
    addedInYear: 2023,
    brand: "xbox",
    type: "xbox",
    productName: "Halo Infinite",
    alt: "Halo Infinite",
    image:
      "https://m.media-amazon.com/images/I/81kOMgJyDHL._SX342_.jpg",
    description:
      "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced.",
    price: "1749.00",
    oldPrice: "4299.00",
    inStock: false,
    discount: 59,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "ps5",
    type: "ps5",
    addedInYear: 2023,
    alt: "Electronic Arts FIFA 23",
    productName: "Electronic Arts FIFA 23",
    image:
      "https://m.media-amazon.com/images/I/81pyD0T+C9L._SX522_.jpg",
    description:
      "EA SPORTS FIFA 23 brings even more of the action and realism of football to the pitch in The World’s Game, with advances in HyperMotion2 Technology driven by twice as much real-world motion capture helping to create more true football animation than ever before in every match. Play the biggest tournaments in football with both the men’s and women’s FIFA World Cup coming to FIFA 23 during the season, play as women’s club teams – powered by dedicated HyperMotion2 animation – for the first time ever, plus enjoy cross-play features that make it easier to play against friends. EA SPORTS FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men’s and women’s FIFA World Cup, the addition of women’s club teams, cross-play features, and more. HyperMotion2 Technology - Advances to HyperMotion gameplay technology with twice as much match data capture unlock new features and brings over 6000 authentic animations taken from millions of frames of advanced match capture to FIFA 23. Experience the pinnacle of both men’s and women’s international football in FIFA 23 with the men’s FIFA World Cup Qatar 2022 and FIFA Women’s World Cup Australia and New Zealand 2023. Enjoy a more true-to-life football experience in FIFA 23 with new gameplay features that create risk-versus-reward shooting, new free kick, penalty, and corner mechanics, and more football variety. Feel the drama of matchday with new features that take the atmosphere and broadcast quality to new heights in FIFA 23. Play as women’s club teams for the first time in EA SPORTS FIFA history as the Barclays FA Women’s Super League and Division 1 Arkema come to FIFA 23 at launch. Plus, enjoy dedicated HyperMotion2 capture that powers the women’s game in FIFA 23 to make female players move authentically in FIFA 23.",
    price: "3749.00",
    oldPrice: "5999.00",
    inStock: true,
    discount: 38,
    rating: 4,
  },
  {
    _id: "1",
    type: "ps5",
    brand: "ps5",
    addedInYear: 2023,
    alt: "God Of War Ragnarok",
    productName: "God Of War Ragnarok",
    image:
      "https://m.media-amazon.com/images/I/81E5a+Vym-L._SX522_.jpg",
    description:
      "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Kratos and Atreus must journey to each of the Nine Realms in search of answers as they prepare for the prophesied battle that will end the world.",
    price: "4999.00",
    oldPrice: "7999.00",
    inStock: true,
    discount: 38,
    rating: 5,
  },
  {
    _id: "0",
    brand: "ps5",
    type: "ps5",
    addedInYear: 2023,
    alt: "Horizon Forbidden West",
    productName: "Horizon Forbidden West",
    image:
      "https://m.media-amazon.com/images/I/81z1pAdQyML._SY606_.jpg",
    description:
      "Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats",
    price: "2599.00",
    oldPrice: "4999.00",
    inStock: true,
    discount: 48,
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "ps5",
    type: "ps5",
    addedInYear: 2023,
    alt: "Gran Turismo 7",
    productName: "Gran Turismo 7",
    image:
      "https://m.media-amazon.com/images/I/71QP4ZcgynL._SY606_.jpg",
    description:
      "Gran Turismo 7 brings together the very best features of the Real Driving Simulator, With the reintroduction of the legendary GT Simulation Mode, buy, tune, race and sell your way through a rewarding solo campaign as you unlock new cars and challenges",
    price: "2699.00",
    oldPrice: "4999.00",
    inStock: true,
    discount: 46,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "ps5",
    type: "ps5",
    addedInYear: 2023,
    alt: "Elden Ring",
    productName: "Elden Ring",
    image:
      "https://m.media-amazon.com/images/I/71IQsz84aBL._SX522_.jpg",
    description:
      "A NEW FANTASY WORLD Journey through the Lands Between, a new fantasy world created by Hidetaka Miyazaki, creator of the influential DARK SOULS video game series, and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. Unravel the mysteries of the Elden Ring’s power. Encounter adversaries with profound backgrounds, characters with their own unique motivations for helping or hindering your progress, and fearsome creatures.  WORLD EXPLORATION IN THE LANDS BETWEEN ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly. Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title. GENRE-DEFINING GAMEPLAY   Create your character in FromSoftware's refined action-RPG and define your playstyle by experimenting with a wide variety of weapons, magical abilities, and skills found throughout the world. Charge into battle, pick off enemies one-by-one using stealth, or even call upon allies for aid. Many options are at your disposal as you decide how to approach exploration and combat.  MULTIPLAYER Players will be able to enjoy their experience with other Tarnished in the LANDS BETWEEN by cooperating or invading other players' worlds. Players on PS4 and PS5 will be able to play on the same servers. Players on Xbox One, Xbox One X, Xbox One S and Xbox Series X|S will be able to play on the same server. ENHANCED EXPERIENCE ON PS5 and Xbox Series X|S Using the power of a new generation of consoles, PlayStation 5 and Xbox Series X|S, will allow player to personalise their experience by choosing between GRAPHIC MODE to enhance the game's visuals (up to 4K) or PERFOMANCE MODE for a higher framerate (up to 60FPS). A free upgrade to the PlayStation 5 version will be available for players who purchase ELDEN RING on PlayStation 4, and Smart Delivery will be supported for Xbox One and Xbox Series X|S.",
    price: "3799.00",
    oldPrice: "4999.00",
    inStock: false,
    discount: 24,
    rating: 3,
  },
  {
    _id: "2",
    brand: "xbox",
    type: "xbox",
    addedInYear: 2023,
    alt: "Hogwarts Legacy",
    productName: "Hogwarts Legacy",
    image:
      "https://m.media-amazon.com/images/I/81bCd5ergNL._SX522_.jpg",
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover fantastic beasts, customize your character and craft potions, master spell casting, upgrade talents, and become the wizard you want to be. Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Discover the feeling of living at Hogwarts as you make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it. Live the Unwritten.",
    price: "4199.00",
    oldPrice: "4299.00",
    inStock: true,
    discount: 2,
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "ps5",
    type: "ps5",
    addedInYear: 2023,
    alt: "Saints Row",
    productName: "Saints Row",
    image:
      "https://m.media-amazon.com/images/I/81MBdgusYnL._SX522_.jpg",
    description:
      "Day 1 edition contains base game + Idols of Anarchy Pack Welcome to Santo Ileso, a vibrant fictional city in the heart of the American Southwest. In a world rife with crime, where lawless factions fight for power, a group of young friends embark on their own criminal venture, as they rise to the top in their bid to become Self Made. As the future Boss, with Neenah, Kevin, and Eli by your side, you’ll form The Saints – and take on Los Panteros, The Idols, and Marshall as you build your empire across the streets of Santo Ileso and battle for control of the city. Ultimately Saints Row is the story of a start-up company, it’s just that the business The Saints are in happens to be crime.",
    price: "1999.00",
    oldPrice: "3999.00",
    inStock: true,
    discount: 50,
    rating: 3,
  },

  {
    _id: uuid(),
    brand: "xbox",
    type: "xbox",
    addedInYear: 2019,
    alt: "Jump Force",
    productName: "Jump Force",
    image:
      "https://m.media-amazon.com/images/I/71aUms-4VBL._SY445_.jpg",
    description:
      "Jump Force is a Japanese crossover fighting game developed by Spike Chunsoft and published by Bandai Namco Entertainment featuring characters from various manga series featured in Shueisha's Weekly Shōnen Jump anthology in celebration of the magazine's 50th anniversary.[1] The game was released on February 14, 2019 in Japan for PlayStation 4 and Xbox One, and the following day worldwide in addition to Windows. A Nintendo Switch port was released worldwide on August 28, 2020. The game received mixed reviews from critics.",
    price: "2990.00",
    oldPrice: "2999.00",
    inStock: true,
    discount: 30,
    rating: 5,
  },
  {
    _id: "2",
    brand: "xbox",
    type: "xbox",
    addedInYear: 2022,
    alt: "The Elder Scrolls V",
    productName: "The Elder Scrolls V",
    image:
      "https://m.media-amazon.com/images/I/4158aFxekyL._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Role Playing Game - Xbox One",
    price: "1990.00",
    oldPrice: "3499.00",
    inStock: true,
    discount: 43,
    rating: 3,
  },
  {
    _id: uuid(),
    brand: "xbox",
    type: "xbox",
    addedInYear: 2022,
    alt: "Grand Theft Auto V",
    productName: "Grand Theft Auto V",
    image:
      "https://m.media-amazon.com/images/I/61rAZbhTV4L._SY445_.jpg",
    description: "GRAND THEFT AUTO V(REPLENISHMENT) NO CODE INCLUDED",
    price: "1999.00",
    oldPrice: "2499.00",
    inStock: false,
    discount: 20,
    rating: 4,
  },
  {
    _id: uuid(),
    type: "xbox",
    brand: "xbox",
    addedInYear: 2022,
    alt: "Gotham Knights",
    productName: "Gotham Knights",
    image:
      "https://m.media-amazon.com/images/I/61FMItgB0jL._SX342_.jpg",
    description:
      "Gotham Knights is a brand-new open world, third-person action RPG featuring the Batman Family as players step into the roles of Batgirl, Nightwing, Red Hood and Robin, a new guard of trained DC Super Heroes who must rise up as the protectors of Gotham City in the wake of Batman’s death. An expansive, criminal underworld has swept through the streets of Gotham, and it is now up to these new heroes to protect the city, bring hope to its citizens, discipline to its cops and fear to its criminals. Players must save Gotham from descent into chaos and reinvent themselves into their own version of the Dark Knight.",
    price: "2268.00",
    oldPrice: "4299.00",
    inStock: false,
    discount: 47,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "adgames",
    type: "pc",
    addedInYear: 2012,
    alt: "Need-For-Speed Most Wanted",
    productName: "Need-For-Speed Most Wanted",
    image:
      "https://m.media-amazon.com/images/I/81DK1Ay64DL._SY445_.jpg",
    description:
      "System Requirements(Minimum) OS: Microsoft Windows XP (SP2 or later) / Windows Vista / Windows 7  Processor: Core 2 Duo 2.4 GHZ or Althon X2 2.7 GHz  Memory: 2 GB RAM Graphics:ATI RADEON 3870 or higher performance / NVIDIA GEFORCE 8800 GT or higher performance  Storage: 20GB Hard drive space",
    price: "229.00",
    oldPrice: "800.00",
    inStock: true,
    discount: 71,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "adgames",
    type: "pc",
    addedInYear: 2022,
    alt: "GTA-4 Pc Game DVD Offline",
    productName: "GTA-4 Pc Game DVD Offline",
    image:
      "https://m.media-amazon.com/images/I/81rmm5bt2sS._SY445_.jpg",
    description:
      "System Requirements  OS: Microsoft Win Xp ,Win Vista,Win 7,Win 8,Win 8.1,Win 10 (both 32bit and 64bit  Processor:Intel Core 2 Quad 2.4GHz, AMD Phenom X3 2.1GHz  Memory: 2 GB (Windows XP) 2.5 GB (Windows Vista) Graphics:512MB NVIDIA 8600+ / 512MB ATI 3870+  Storage:18 GB Hard drive space.DEDICATED VIDEO RAM: 512 MB",
    price: "349.00",
    oldPrice: "1600.00",
    inStock: true,
    discount: 78,
    rating: 5,
  },
  {
    _id: uuid(),
    brand: "adgames",
    type: "pc",
    addedInYear: 2022,
    alt: "Hitman-Bloodmoney",
    productName: "Hitman-Bloodmoney",
    image:
      "https://m.media-amazon.com/images/I/71bxD9TopjS._SY445_.jpg",
    description:
      "System Requirements   OS:Win XP,Win Vista,Win 7,Win 8,Win 8.1,Win 10 (both 32bit and 64bit)   Processor:Pentium 4 or Athlon XP/64 or better   Memory:1GB of RAM Graphics: 56 MB Direct3D DirectX 9.0 compliant video card supporting pixel shader 2.0 (NVIDIA GeForce 6800 or better)TOTAL VIDEO RAM: 256MB 3D: Yes PIXEL SHADER: 2.0 SOUND CARD: Yes   Storage: 5GB",
    price: "229.00",
    oldPrice: "800.00",
    inStock: true,
    discount: 71,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "adgames",
    type: "pc",
    addedInYear: 2022,
    alt: "Call of Duty Mordern Warfare 2",
    productName: "Call of Duty Mordern Warfare 2",
    image:
      "https://m.media-amazon.com/images/I/91sfpXbaFNL._SX342_.jpg",
    description:
      "System Requirements   OS:Windows XP, Windows Vista, Windows 7   Processor:Intel Pentium 4 3.2 GHz or AMD Athlon 64 3200+ processor or better supported   Memory:2GB Graphics: NVIDIA GeForce 6600   Storage:16GB of free disk space",
    price: "399.00",
    oldPrice: "1600.00",
    inStock: true,
    discount: 75,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "adgames",
    type: "pc",
    addedInYear: 2022,
    alt: "Mafia-2",
    productName: "Mafia-2",
    image:
      "https://m.media-amazon.com/images/I/81XREvo5PIS._SY445_.jpg",
    description:
      "System Requirements   OS: Microsoft Windows XP (SP2 or later) / Windows Vista / Windows 7   Processor:2.4 GHz Quad Core processor   Memory: 2 GB RAM Graphics: NVIDIA GeForce 9800 GTX / ATI Radeon HD 3870 or better   Storage: 10GB Hard drive space",
    price: "299.00",
    oldPrice: "1400.00",
    inStock: true,
    discount: 79,
    rating: 4,
  },
  {
    _id: uuid(),
    brand: "Electronic Arts",
    type: "pc",
    addedInYear: 2023,
    alt: "FIFA 23",
    productName: "FIFA 23",
    image:
      "https://m.media-amazon.com/images/I/81IXtVuvlmL._SY445_.jpg",
    description:
      "EA SPORTS FIFA 23 brings even more of the action and realism of football to the pitch in The World’s Game. Play the biggest tournaments in football with both the men’s and women’s FIFA World Cup tournaments coming to FIFA 23 during the season, play as women’s club teams for the first time ever, plus enjoy cross-play features that make it easier to play against friends. Enjoy a new way to play and build your dream squad in FIFA Ultimate Team with FUT Moments and a revamped Chemistry system, or live out your football dreams in Career Mode as you define your personality as a player and manage as some of football’s most famous names. In VOLTA FOOTBALL and Pro Clubs, bring more personality to the pitch with new levels of customisation and enhanced street and stadium gameplay. However you play, experience The World’s Game with over 19,000 players, 700+ teams, 100+ stadiums, and over 30 leagues - including the UEFA Champions League, Premier League, new Barclays FA Women’s Super League and France D1 Arkema with unrivalled authenticity in FIFA 23.",
    price: "2499.00",
    oldPrice: "3999.00",
    inStock: false,
    discount: 38,
    rating: 4,
  },
];
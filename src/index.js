export default {
  async fetch() {

    const commonDevices = [
      "Hot Knives 🔪🔥",
      "Socket Wrench Pipe 🔧",
      "Aluminum Can Pipe 🥤",
      "One Hitter 🚬",
      "Corn Cob Pipe 🌽",
      "Wooden Pipe 🪵",
      "Chillum 🌿",
      "Plastic Bottle Steamroller 🍼",
      "Homemade Gravity Bong 🪣",
      "Foil Pipe 📄",
      "Mason Jar Bong 🫙",
      "Apple Pipe 🍎"
    ];

    const uncommonDevices = [
      "Pear Pipe 🍐",
      "Pumpkin Pipe 🎃",
      "Bamboo Pipe 🎍",
      "Sherlock Pipe 🕵️",
      "Small Bong 💨",
      "Pocket Bubbler 🌊",
      "Glass Steamroller Pipe 🔥",
      "Coconut Pipe 🥥",
      "Bottle Bong 🍾",
      "Waterfall Rig 🌊"
    ];

    const rareDevices = [
      "Beaker Bong 🧪",
      "Recycler ♻️",
      "Percolator Bong 💎",
      "Grav Rig 🌌",
      "Double Chamber Rig ⚗️",
      "UFO Rig 🛸",
      "Glow Bong ✨",
      "Mini Volcano 🌋",
      "Recycler Dab Rig 🔥",
      "Quartz Tower ⚗️"
    ];

    const legendaryDevices = [
      "Dragon Bong 🐉",
      "Golden Recycler 👑",
      "Wizard Pipe 🧙",
      "Crystal Gravity Rig 💎",
      "Volcano Vaporizer 🌋",
      "Alchemist Rig ⚗️✨",
      "King's Chalice Bong 👑",
      "Phoenix Rig 🔥🦅"
    ];

    const mythicDevices = [
      "Cosmic Rig 🌌",
      "Interdimensional Bong 🛸",
      "Nebula Pipe ☄️",
      "Human Skull Pipe 💀",
      "Stargazer Vaporizer ⭐",
      "The Eternal Freshie ♾️💨"
    ];

    const zomboidDevices = [
      "Knox County Gravity Bong 🪣",
      "Louisville Hot Knife Kit 🔪🔥",
      "Survivor's Socket Wrench Pipe 🔧",
      "Gas Station Bottle Bong ⛽",
      "Emergency Generator Dab Rig ⚡",
      "Rosewood Ranger Pipe 🌲",
      "Spiffo Bucket Bong 🍔",
      "Louisville Scavenger Rig 🎒"
    ];

    const commonStrains = [
      "OG Kush 🌿",
      "Sour Diesel ⛽",
      "White Widow 🕷️",
      "Green Crack ⚡",
      "Trainwreck 🚂",
      "Durban Poison ☠️",
      "Wedding Cake 🎂",
      "Gelato 🍨",
      "Pineapple Express 🍍",
      "AK-47 💥",
      "Purple Haze 💜",
      "Chemdawg 🧪",
      "Skywalker OG ⭐",
      "Granddaddy Purple 🍇",
      "Strawberry Cough 🍓",
      "Banana Kush 🍌",
      "Maui Wowie 🌺",
      "Critical Mass 💥",
      "Acapulco Gold 🏆",
      "Candyland 🍬",
      "Blue Cheese 🧀",
      "Lemon Haze 🍋",
      "9 Pound Hammer 🔨",
      "Afghani 🏔️",
      "Afgoo ☁️",
      "Berry White 🍓",
      "Blueberry 🫐",
      "Bubba Kush 😴",
      "G13 👽",
      "Grape Ape 🍇",
      "Hindu Kush 🏔️",
      "Lavender 💜",
      "Master Kush 👑",
      "Northern Lights 🌌",
      "Obama Kush 🇺🇸",
      "Purple Urkle 🟣",
      "Willie's Wonder 🎸",
      "Banana OG 🍌",
      "Blue Dream 🌿",
      "Carmalicious 🍬",
      "Cherry Pie 🍒",
      "Cinderella 99 👠",
      "Dutch Treat 🇳🇱",
      "Flo 🌸",
      "Fruit Pebbles 🍓",
      "Golden Goat 🐐",
      "Headband 🎧",
      "Jillybean 🫘",
      "Larry OG 🌿",
      "Lemon Oder 🍋",
      "Mango Kush 🥭",
      "Mendo Purps 🍇",
      "Middlefork 🌲",
      "Pineapple Chunk 🍍",
      "Pink Kush 🌸",
      "SAGE 🧙",
      "Shiatsu Kush 🥋",
      "Skunk No. 1 🦨",
      "Snoop's Dream 🐕",
      "Sour OG ⚡",
      "Sour Tsunami 🌊",
      "Super Green 🌿",
      "Sunset Sherbet 🌅",
      "Tahoe OG 🏔️",
      "Tangerine Dream 🍊",
      "Trainwreck 🚂",
      "White Fire OG 🔥",
      "White Widow 🕷️",
      "XJ-13 🚀"
      ];
    
    const uncommonStrains = [
      "Jack Herer 🎩",
      "Acapulco Gold 🏆",
      "Alaskan Thunder Fuck ⚡",
      "Allen Wrench 🔧",
      "Amnesia 🌀",
      "Bay 11 🌉",
      "Chocolope 🍫",
      "Cinex ☀️",
      "Dirty Girl 🌿",
      "Durban Poison ☠️",
      "Ghost Train Haze 👻",
      "Grapefruit 🍊",
      "Green Crack ⚡",
      "Harlequin 🎭",
      "Island Sweet Skunk 🏝️",
      "Jack Herer 🎩",
      "Kali Mist 🌬️",
      "Lamb's Bread 🍞",
      "Laughing Buddha 😂",
      "Maui Wowie 🌺",
      "Panama Red 🔴",
      "Purple Haze 💜",
      "Red Headed Stranger 🎸",
      "Schrom 🍄",
      "Sour Diesel ⛽",
      "Strawberry Cough 🍓",
      "Super Lemon Haze 🍋",
      "Super Silver Haze ⚡",
      "Tangie 🍊",
      "Apple Fritter 🍏",
      "Purple Punch 🥊",
      "Mimosa 🍊",
      "Ice Cream Cake 🍰",
      "Sunset Sherbet 🌅",
      "MAC 1 💪",
      "Biscotti 🍪",
      "Lemon Cherry Gelato 🍋🍒",
      "Animal Cookies 🐾",
      "Do-Si-Dos 🥋",
      "Wedding Crasher 💒",
      "Slurricane 🌪️",
      "Cereal Milk 🥣",
      "Forbidden Fruit 🚫🍎",
      "Orange Creamsicle 🍊",
      "Pink Runtz 🌸",
      "Peanut Butter Breath 🥜",
      "Zkittlez 🌈",
      "Kush Mints 🌿",
      "RS11 🚀",
      "Animal Face 🦁",
      "Cap Junky 🧢",
      "Sherbanger 🌅",
      "Black Ice 🧊"
    ];

    const rareStrains = [
      "Permanent Marker 🖊️",
      "Super Boof 🤡",
      "Zoap 🧼",
      "Rainbow Belts 🌈",
      "Black Maple 🍁",
      "The Soap 🫧",
      "Peach Rings 🍑",
      "Red Pop 🥤",
      "Georgia Pie 🥧",
      "Project 4516 🚀",
      "Jealousy 😤",
      "Moonbow 🌙🌈",
      "Gush Mints 🍬",
      "London Pound Cake 🎂",
      "Motorbreath 🏎️",
      "Purple Churro 🍩",
      "Lava Cake 🌋",
      "Grease Monkey 🐒",
      "Death Star ☠️",
      "Apples & Bananas 🍎🍌"
    ];

    const legendaryStrains = [
      "Runtz 👑",
      "Gary Payton 🏀",
      "White Fire OG 🔥",
      "Donny Burger 🍔",
      "Devil Driver 😈",
      "Starburst 36 ⭐",
      "Black Tuna 🐟",
      "Platinum OG 💎",
      "King Louis XIII 👑",
      "Alien Labs Xeno 👽",
      "Nightshade 🌑",
      "Area 41 👽",
      "Atomic Apple ☢️🍏"
    ];

    const mythicStrains = [
      "Cosmic Kush 🌌",
      "Moon Dust OG 🌙",
      "Celestial Runtz ✨",
      "Interdimensional Diesel 🛸",
      "Knox Nebula 🌠",
      "Astral Gelato ☄️",
      "Black Hole Kush 🕳️",
      "Starlight Sherbet ⭐",
      "Chronomancer OG ⏳",
      "Loop_Hazard Reserve 😈",
      "Phoenix Breath 🔥🦅",
      "Dragonfruit Diesel 🐉",
      "Infinity Cookies ♾️",
      "Nebula Cake 🌌🎂"
    ];

    const chaosEvents = [
      "😈 Chat stole your freshie before your first hit.",
      "😈 LOOP_HAZARD stole the freshie and disappeared.",
      "🤝 You decided to share the freshie with another chatter.",
      "🤝 The freshie was passed around the entire chat.",
      "🎁 You gifted the freshie to a random viewer.",
      "🍕 You traded the freshie for a slice of pizza.",
      "🍺 You traded the freshie for a Dragon's Milk.",
      "🦝 A raccoon stole the freshie.",
      "💨 The wind stole the first hit.",
      "🧟 The freshie survived the Knox Event.",
      "🧟 You packed the last freshie in Knox County."
    ];

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    const roll = Math.random() * 100;

    let rarity;
    let strainPool;
    let devicePool;

    if (roll < 5) {
      rarity = "🌈 MYTHIC";
      strainPool = mythicStrains;
      devicePool = mythicDevices;
    } else if (roll < 15) {
      rarity = "🟣 LEGENDARY";
      strainPool = legendaryStrains;
      devicePool = legendaryDevices;
    } else if (roll < 35) {
      rarity = "🔵 RARE";
      strainPool = rareStrains;
      devicePool = rareDevices;
    } else if (roll < 65) {
      rarity = "🟢 UNCOMMON";
      strainPool = uncommonStrains;
      devicePool = uncommonDevices;
    } else {
      rarity = "🟤 COMMON";
      strainPool = commonStrains;
      devicePool = commonDevices;
    }

    const strain = pick(strainPool);

    let device = pick(devicePool);

    if (Math.random() < 0.02) {
      device = pick(zomboidDevices);
    }

    let thc = (Math.random() * 15 + 15).toFixed(1);

    if (rarity === "🟣 LEGENDARY") thc = (Math.random() * 8 + 27).toFixed(1);
    if (rarity === "🌈 MYTHIC") thc = (Math.random() * 6 + 30).toFixed(1);

    const kief =
      Math.random() < 0.10
        ? " ✨ Extra Kief Added!"
        : "";

    const message =
      `${rarity} | You packed ${strain} (${thc}% THC) into a ${device}.${kief}`;

    if (Math.random() < 0.05) {
      return new Response(
        `${message} ${pick(chaosEvents)}`,
        {
          headers: {
            "content-type": "text/plain; charset=UTF-8"
          }
        }
      );
    }

    return new Response(message, {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }
};

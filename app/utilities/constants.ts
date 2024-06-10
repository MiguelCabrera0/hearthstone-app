export const client = process.env.CLIENTID;
export const secret = process.env.SECRET;
import MageBackground from "@/public/assets/background mage@3x.png";
import DruidBackground from "@/public/assets/background druid@3x.png"
import HunterBackground from "@/public/assets/background hunter@3x.png"
import PriestBackground from "@/public/assets/background priest@3x.png"
import RougueBackground from "@/public/assets/background rougue@3x.png"
import PaladinBackground from "@/public/assets/background paladin@3x.png"
import ShamanBackground from "@/public/assets/background shaman@3x.png"
import DemonHunterBackground from "@/public/assets/background demon hunter@3x.png"
import WarlockBackground from "@/public/assets/background warlock@3x.png"
import WarriorBackground from "@/public/assets/background warrior@3x.png"
import Mage from "@/public/assets/mage emblem@3x.png"
import Druid from "@/public/assets/druid emblem@3x.png"
import Hunter from "@/public/assets/hunter emblem@3x.png"
import Priest from "@/public/assets/priest emblem@3x.png"
import Rougue from "@/public/assets/rouge emblem@3x.png"
import Paladin from "@/public/assets/paladin emblem@3x.png"
import Shaman from "@/public/assets/shaman emblem@3x.png"
import DemonHunter from "@/public/assets/demon hunter emblem@3x.png"
import Warlock from "@/public/assets/warlock emblem@3x.png"
import Warrior from "@/public/assets/warrior emblem@3x.png"

export const searchParamAbbreviations: { [key: string]: string } = {
    manaCost: 'Mana:',
    attack: 'Atk:',
    health: 'Hp:',
    type: 'Card Type:',
    minionType: 'Minion:',
    rarity: 'Rarity:',
    keyword: 'Key word:'
};

export const sortTypes = [
    { name: 'Mana Cost: low to high', slug: 'manaCost:asc' },
    { name: 'Mana Cost: high to low', slug: 'manaCost:desc' },
    { name: 'Attack: low to high', slug: 'attack:asc' },
    { name: 'Attack: high to low', slug: 'attack:desc' },
    { name: 'Health: low to high', slug: 'health:asc' },
    { name: 'Health: high to low', slug: 'health:desc' },
    { name: 'Class: low to high', slug: 'class:asc' },
    { name: 'Class: high to low', slug: 'class:desc' },
    { name: 'Group By Class: low to high', slug: 'groupByClass:asc' },
    { name: 'Group By Class: high to low', slug: 'groupByClass:desc' },
    { name: 'Name: low to high', slug: 'name:asc' },
    { name: 'Name: high to low', slug: 'name:desc' },
];

export const classData = {
    "mage": {
        name: "Mage",
        src: MageBackground,
        title: "My magic will tear you apart!",
        desc: "No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.",
        icon: Mage,
        href: '/classes/mage'
    },
    "druid": {
        name: "Druid",
        src: DruidBackground,
        title: "Nature will rise against you!",
        desc: "Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.",
        icon: Druid,
        href: '/classes/druid'
    },
    "hunter": {
        name: "Hunter",
        src: HunterBackground,
        title: "Let the hunt begin!",
        desc: "According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.",
        icon: Hunter,
        href: '/classes/hunter'
    },
    "priest": {
        name: "Priest",
        src: PriestBackground,
        title: "Light smiles upon the just!",
        desc: "The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.",
        icon: Priest,
        href: '/classes/priest'
    },
    "rougue": {
        name: "Rougue",
        src: RougueBackground,
        title: "Watch your back!",
        desc: "Using unseen blade, blinding speed, and subtle poison, Rogues can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.",
        icon: Rougue,
        href: '/classes/rougue'
    },
    "paladin": {
        name: "Paladin",
        src: PaladinBackground,
        title: "The Light protects those who wield it.",
        desc: "Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.",
        icon: Paladin,
        href: '/classes/paladin'
    },
    "shaman": {
        name: "Shaman",
        src: ShamanBackground,
        title: "Storm, earth and fire, heed my call!",
        desc: "Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.",
        icon: Shaman,
        href: '/classes/shaman'
    },
    "demon-hunter": {
        name: "Demon Hunter",
        src: DemonHunterBackground,
        title: "You are not prepared!",
        desc: "Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!",
        icon: DemonHunter,
        href: 'classes/demon-hunter'
    },
    "warlock": {
        name: "Warlock",
        src: WarlockBackground,
        title: "I am your nightmare!",
        desc: "Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.",
        icon: Warlock,
        href: '/classes/warlock'
    },
    "warrior": {
        name: "Warrior",
        src: WarriorBackground,
        title: "Victory or death!",
        desc: "Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.",
        icon: Warrior,
        href: '/classes/warrior'
    },
};

export const cardTypes = [
    {
        "slug": "hero",
        "id": 3,
        "name": "Hero",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "slug": "minion",
        "id": 4,
        "name": "Minion",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "slug": "spell",
        "id": 5,
        "name": "Spell",
        "gameModes": [
            1,
            2,
            5,
            6
        ]
    },
    {
        "slug": "weapon",
        "id": 7,
        "name": "Weapon",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "slug": "hero power",
        "id": 10,
        "name": "HeroPower"
    },
    {
        "slug": "location",
        "id": 39,
        "name": "Location",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "slug": "baconquestreward",
        "id": 40,
        "name": "Reward",
        "gameModes": [
            2
        ]
    }
];

export const rarities = [
    {
        "slug": "common",
        "id": 1,
        "craftingCost": [
            40,
            400
        ],
        "dustValue": [
            5,
            50
        ],
        "name": "Common"
    },
    {
        "slug": "free",
        "id": 2,
        "craftingCost": [
            null,
            null
        ],
        "dustValue": [
            null,
            null
        ],
        "name": "Free"
    },
    {
        "slug": "rare",
        "id": 3,
        "craftingCost": [
            100,
            800
        ],
        "dustValue": [
            20,
            100
        ],
        "name": "Rare"
    },
    {
        "slug": "epic",
        "id": 4,
        "craftingCost": [
            400,
            1600
        ],
        "dustValue": [
            100,
            400
        ],
        "name": "Epic"
    },
    {
        "slug": "legendary",
        "id": 5,
        "craftingCost": [
            1600,
            3200
        ],
        "dustValue": [
            400,
            1600
        ],
        "name": "Legendary"
    }
];

export const sets = [
    {
        "id": 1897,
        "name": "Whizbang's Workshop",
        "slug": "whizbangs-workshop",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 183,
        "collectibleRevealedCount": 183,
        "nonCollectibleCount": 97,
        "nonCollectibleRevealedCount": 82
    },
    {
        "id": 1941,
        "name": "Event",
        "slug": "event",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 12,
        "collectibleRevealedCount": 12,
        "nonCollectibleCount": 5,
        "nonCollectibleRevealedCount": 0
    },
    {
        "id": 1892,
        "name": "Showdown in the Badlands",
        "slug": "showdown-in-the-badlands",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 183,
        "collectibleRevealedCount": 183,
        "nonCollectibleCount": 88,
        "nonCollectibleRevealedCount": 85
    },
    {
        "id": 1858,
        "name": "TITANS",
        "slug": "titans",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 183,
        "collectibleRevealedCount": 183,
        "nonCollectibleCount": 170,
        "nonCollectibleRevealedCount": 155
    },
    {
        "id": 1809,
        "name": "Festival of Legends",
        "slug": "festival-of-legends",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 183,
        "collectibleRevealedCount": 183,
        "nonCollectibleCount": 75,
        "nonCollectibleRevealedCount": 61
    },
    {
        "id": 1898,
        "name": "Caverns of Time",
        "slug": "caverns-of-time",
        "hyped": false,
        "type": "",
        "collectibleCount": 147,
        "collectibleRevealedCount": 147,
        "nonCollectibleCount": 25,
        "nonCollectibleRevealedCount": 23
    },
    {
        "id": 1776,
        "name": "March of the Lich King",
        "slug": "march-of-the-lich-king",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 183,
        "collectibleRevealedCount": 183,
        "nonCollectibleCount": 137,
        "nonCollectibleRevealedCount": 64
    },
    {
        "id": 1869,
        "name": "Path of Arthas",
        "slug": "path-of-arthas",
        "hyped": false,
        "type": "",
        "collectibleCount": 26,
        "collectibleRevealedCount": 26,
        "nonCollectibleCount": 23,
        "nonCollectibleRevealedCount": 4
    },
    {
        "id": 1691,
        "name": "Murder at Castle Nathria",
        "slug": "murder-at-castle-nathria",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 170,
        "collectibleRevealedCount": 170,
        "nonCollectibleCount": 125,
        "nonCollectibleRevealedCount": 53
    },
    {
        "id": 1646,
        "name": "Classic Cards",
        "slug": "classic-cards",
        "hyped": false,
        "type": "",
        "collectibleCount": 382,
        "collectibleRevealedCount": 382,
        "nonCollectibleCount": 96,
        "nonCollectibleRevealedCount": 63
    },
    {
        "id": 1658,
        "name": "Voyage to the Sunken City",
        "slug": "voyage-to-the-sunken-city",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 170,
        "collectibleRevealedCount": 170,
        "nonCollectibleCount": 522,
        "nonCollectibleRevealedCount": 78
    },
    {
        "id": 1626,
        "name": "Fractured in Alterac Valley",
        "slug": "fractured-in-alterac-valley",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 170,
        "collectibleRevealedCount": 170,
        "nonCollectibleCount": 378,
        "nonCollectibleRevealedCount": 107
    },
    {
        "id": 1578,
        "name": "United in Stormwind",
        "slug": "united-in-stormwind",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 170,
        "collectibleRevealedCount": 170,
        "nonCollectibleCount": 317,
        "nonCollectibleRevealedCount": 66
    },
    {
        "id": 1525,
        "name": "Forged in the Barrens",
        "slug": "forged-in-the-barrens",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 170,
        "collectibleRevealedCount": 170,
        "nonCollectibleCount": 667,
        "nonCollectibleRevealedCount": 82
    },
    {
        "id": 1466,
        "name": "Madness at the Darkmoon Faire",
        "slug": "madness-at-the-darkmoon-faire",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 170,
        "collectibleRevealedCount": 170,
        "nonCollectibleCount": 359,
        "nonCollectibleRevealedCount": 109
    },
    {
        "id": 1443,
        "name": "Scholomance Academy",
        "slug": "scholomance-academy",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 200,
        "nonCollectibleRevealedCount": 62
    },
    {
        "id": 1414,
        "name": "Ashes of Outland",
        "slug": "ashes-of-outland",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 91,
        "nonCollectibleRevealedCount": 55
    },
    {
        "id": 1463,
        "name": "Demon Hunter Initiate",
        "slug": "demonhunter-initiate",
        "hyped": false,
        "type": "base",
        "collectibleCount": 20,
        "collectibleRevealedCount": 20,
        "nonCollectibleCount": 11,
        "nonCollectibleRevealedCount": 3
    },
    {
        "id": 1403,
        "name": "Galakrond’s Awakening",
        "slug": "galakronds-awakening",
        "hyped": false,
        "type": "adventure",
        "collectibleCount": 35,
        "collectibleRevealedCount": 35,
        "nonCollectibleCount": 12,
        "nonCollectibleRevealedCount": 5
    },
    {
        "id": 1347,
        "name": "Descent of Dragons",
        "slug": "descent-of-dragons",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 140,
        "collectibleRevealedCount": 140,
        "nonCollectibleCount": 61,
        "nonCollectibleRevealedCount": 54
    },
    {
        "id": 1158,
        "name": "Saviors of Uldum",
        "slug": "saviors-of-uldum",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 47,
        "nonCollectibleRevealedCount": 28
    },
    {
        "id": 1130,
        "name": "Rise of Shadows",
        "slug": "rise-of-shadows",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 136,
        "collectibleRevealedCount": 136,
        "nonCollectibleCount": 54,
        "nonCollectibleRevealedCount": 40
    },
    {
        "id": 1129,
        "name": "Rastakhan’s Rumble",
        "slug": "rastakhans-rumble",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 31,
        "nonCollectibleRevealedCount": 27
    },
    {
        "id": 1127,
        "name": "The Boomsday Project",
        "slug": "the-boomsday-project",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 136,
        "collectibleRevealedCount": 136,
        "nonCollectibleCount": 32,
        "nonCollectibleRevealedCount": 25
    },
    {
        "id": 1125,
        "name": "The Witchwood",
        "slug": "the-witchwood",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 32,
        "nonCollectibleRevealedCount": 26
    },
    {
        "id": 1004,
        "name": "Kobolds and Catacombs",
        "slug": "kobolds-and-catacombs",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 85,
        "nonCollectibleRevealedCount": 75
    },
    {
        "id": 1001,
        "name": "Knights of the Frozen Throne",
        "slug": "knights-of-the-frozen-throne",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 127,
        "nonCollectibleRevealedCount": 52
    },
    {
        "id": 27,
        "name": "Journey to Un’Goro",
        "slug": "journey-to-ungoro",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 135,
        "collectibleRevealedCount": 135,
        "nonCollectibleCount": 58,
        "nonCollectibleRevealedCount": 58
    },
    {
        "id": 25,
        "name": "Mean Streets of Gadgetzan",
        "slug": "mean-streets-of-gadgetzan",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 132,
        "collectibleRevealedCount": 132,
        "nonCollectibleCount": 93,
        "nonCollectibleRevealedCount": 84
    },
    {
        "id": 23,
        "name": "One Night in Karazhan",
        "slug": "one-night-in-karazhan",
        "hyped": false,
        "type": "adventure",
        "collectibleCount": 45,
        "collectibleRevealedCount": 45,
        "nonCollectibleCount": 57,
        "nonCollectibleRevealedCount": 55
    },
    {
        "id": 21,
        "name": "Whispers of the Old Gods",
        "slug": "whispers-of-the-old-gods",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 134,
        "collectibleRevealedCount": 134,
        "nonCollectibleCount": 40,
        "nonCollectibleRevealedCount": 26
    },
    {
        "id": 20,
        "name": "League of Explorers",
        "slug": "league-of-explorers",
        "hyped": false,
        "type": "adventure",
        "collectibleCount": 45,
        "collectibleRevealedCount": 45,
        "nonCollectibleCount": 187,
        "nonCollectibleRevealedCount": 15
    },
    {
        "id": 15,
        "name": "The Grand Tournament",
        "slug": "the-grand-tournament",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 132,
        "collectibleRevealedCount": 132,
        "nonCollectibleCount": 27,
        "nonCollectibleRevealedCount": 18
    },
    {
        "id": 14,
        "name": "Blackrock Mountain",
        "slug": "blackrock-mountain",
        "hyped": false,
        "type": "adventure",
        "collectibleCount": 31,
        "collectibleRevealedCount": 31,
        "nonCollectibleCount": 175,
        "nonCollectibleRevealedCount": 10
    },
    {
        "id": 13,
        "name": "Goblins vs Gnomes",
        "slug": "goblins-vs-gnomes",
        "hyped": false,
        "type": "expansion",
        "collectibleCount": 123,
        "collectibleRevealedCount": 123,
        "nonCollectibleCount": 34,
        "nonCollectibleRevealedCount": 21
    },
    {
        "id": 12,
        "name": "Curse of Naxxramas",
        "slug": "naxxramas",
        "hyped": false,
        "type": "adventure",
        "collectibleCount": 30,
        "collectibleRevealedCount": 30,
        "nonCollectibleCount": 118,
        "nonCollectibleRevealedCount": 114
    },
    {
        "id": 1635,
        "name": "Legacy",
        "slug": "legacy",
        "aliasSetIds": [
            3,
            4
        ],
        "hyped": false,
        "type": "",
        "collectibleCount": 450,
        "collectibleRevealedCount": 445,
        "nonCollectibleCount": 173,
        "nonCollectibleRevealedCount": 126
    },
    {
        "id": 1637,
        "name": "Core",
        "slug": "core",
        "hyped": false,
        "type": "",
        "collectibleCount": 290,
        "collectibleRevealedCount": 290,
        "nonCollectibleCount": 59,
        "nonCollectibleRevealedCount": 13
    }
];

export const keywords = [
    {
        "id": 1,
        "slug": "taunt\n",
        "name": "Taunt",
        "refText": "Enemies must attack minions that have Taunt.",
        "text": "Enemies must attack this minion.",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "id": 2,
        "slug": "spell-damage\n",
        "name": "Spell Damage",
        "refText": "Your spells deal extra damage.",
        "text": "Your spell cards deal extra damage.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 3,
        "slug": "divine-shield\n",
        "name": "Divine Shield",
        "refText": "The first time a Shielded minion takes damage, ignore it.",
        "text": "The first time this minion takes damage, ignore it.",
        "gameModes": [
            1,
            2,
            5,
            6
        ]
    },
    {
        "id": 4,
        "slug": "charge\n",
        "name": "Charge",
        "refText": "Can attack immediately.",
        "text": "Can attack immediately.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 5,
        "slug": "secret\n",
        "name": "Secret",
        "refText": "Hidden until a specific action occurs on your opponent's turn.",
        "text": "Hidden until a specific action occurs on your opponent's turn.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 6,
        "slug": "stealth\n",
        "name": "Stealth",
        "refText": "Can't be attacked or targeted until it attacks.",
        "text": "Can't be attacked or targeted until it attacks.",
        "gameModes": [
            1,
            2,
            5,
            6
        ]
    },
    {
        "id": 8,
        "slug": "battlecry\n",
        "name": "Battlecry",
        "refText": "Does something when you play it from your hand.",
        "text": "Does something when you play it from your hand.",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "id": 10,
        "slug": "freeze\n",
        "name": "Freeze",
        "refText": "Frozen characters lose their next attack.",
        "text": "Frozen characters lose their next attack.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 11,
        "slug": "windfury\n",
        "name": "Windfury",
        "refText": "Can attack twice each turn.",
        "text": "Can attack twice each turn.",
        "gameModes": [
            1,
            2,
            5,
            6
        ]
    },
    {
        "id": 12,
        "slug": "deathrattle\n",
        "name": "Deathrattle",
        "refText": "Does something when it dies.",
        "text": "Does something when it dies.",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "id": 13,
        "slug": "combo\n",
        "name": "Combo",
        "refText": "A bonus if you already played a card this turn.",
        "text": "A bonus if you already played a card this turn.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 14,
        "slug": "overload:-x\n",
        "name": "Overload: X",
        "refText": "Cards with Overload limit your mana next turn.",
        "text": "You have X less mana next turn.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 15,
        "slug": "silence\n",
        "name": "Silence",
        "refText": "Removes all card text and enchantments.",
        "text": "Removes all card text and enchantments.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 16,
        "slug": "counter\n",
        "name": "Counter",
        "refText": "A card that is Countered has no effect.",
        "text": "A card that is Countered has no effect.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 17,
        "slug": "immune\n",
        "name": "Immune",
        "refText": "Immune characters can't be damaged.",
        "text": "Can't be damaged.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 19,
        "slug": "spare-parts\n",
        "name": "Spare Parts",
        "refText": "Spare Parts are 1-Cost spells with minor effects.",
        "text": "Spare Parts are 1-Cost spells with minor effects.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 20,
        "slug": "inspire\n",
        "name": "Inspire",
        "refText": "Does something after you use your Hero Power.",
        "text": "Does something after you use your Hero Power.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 21,
        "slug": "discover\n",
        "name": "Discover",
        "refText": "Choose one of three cards to add to your hand.",
        "text": "Choose one of three cards to add to your hand.",
        "gameModes": [
            1,
            2,
            5
        ]
    },
    {
        "id": 31,
        "slug": "quest\n",
        "name": "Quest",
        "refText": "Starts in your hand. Complete for a reward.",
        "text": "Starts in your hand. Complete for a reward.",
        "gameModes": [
            1,
            2
        ]
    },
    {
        "id": 32,
        "slug": "poisonous\n",
        "name": "Poisonous",
        "refText": "Destroy any minion damaged by this.",
        "text": "Destroy any minion damaged by this.",
        "gameModes": [
            1,
            2,
            5
        ]
    },
    {
        "id": 34,
        "slug": "adapt\n",
        "name": "Adapt",
        "refText": "Choose one of 3 bonuses.",
        "text": "Choose one of 3 bonuses.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 38,
        "slug": "lifesteal\n",
        "name": "Lifesteal",
        "refText": "Damage dealt also heals your hero.",
        "text": "Damage dealt also heals your hero.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 39,
        "slug": "recruit\n",
        "name": "Recruit",
        "refText": "Summon a minion from your deck.",
        "text": "Summon a minion from your deck.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 52,
        "slug": "echo\n",
        "name": "Echo",
        "refText": "Repeatable the turn you play this. Copies can't cost less than (1).",
        "text": "Repeatable the turn you play this. Copies can't cost less than (1).",
        "gameModes": [
            1
        ]
    },
    {
        "id": 53,
        "slug": "rush\n",
        "name": "Rush",
        "refText": "Can attack minions immediately.",
        "text": "Can attack minions immediately.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 61,
        "slug": "overkill\n",
        "name": "Overkill",
        "refText": "Deal excess damage on your turn for a bonus.",
        "text": "Deal excess damage on your turn for a bonus.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 64,
        "slug": "start-of-game\n",
        "name": "Start of Game",
        "refText": "Does something before the first turn.",
        "text": "Does something before the first turn.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 66,
        "slug": "magnetic\n",
        "name": "Magnetic",
        "refText": "Play this to the left of a Mech to fuse them together!",
        "text": "Play this to the left of a Mech to fuse them together!",
        "gameModes": [
            1,
            2,
            5
        ]
    },
    {
        "id": 71,
        "slug": "lackey\n",
        "name": "Lackey",
        "refText": "Lackeys are 1-Cost minions with Battlecries.",
        "text": "Lackeys are 1-Cost minions with Battlecries.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 76,
        "slug": "twinspell\n",
        "name": "Twinspell",
        "refText": "Can be cast twice.",
        "text": "Can be cast twice.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 77,
        "slug": "mega-windfury\n",
        "name": "Mega-Windfury",
        "refText": "Can attack four times each turn.",
        "text": "Can attack four times each turn.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 78,
        "slug": "reborn\n",
        "name": "Reborn",
        "refText": "Resurrects with 1 Health the first time it dies.",
        "text": "Resurrects with 1 Health the first time it dies.",
        "gameModes": [
            1,
            2,
            5
        ]
    },
    {
        "id": 79,
        "slug": "invoke\n",
        "name": "Invoke",
        "refText": "Use Galakrond's Power.",
        "text": "Use Galakrond's Power.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 86,
        "slug": "outcast\n",
        "name": "Outcast",
        "refText": "A bonus if played as the left- or right-most card in hand.",
        "text": "A bonus if played as the left- or right-most card in hand.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 88,
        "slug": "spellburst\n",
        "name": "Spellburst",
        "refText": "A one-time effect after you cast a spell.",
        "text": "A one-time effect after you cast a spell.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 89,
        "slug": "sidequest\n",
        "name": "Sidequest",
        "refText": "Complete for a reward.",
        "text": "Complete for a reward.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 91,
        "slug": "corrupt\n",
        "name": "Corrupt",
        "refText": "Upgrades in hand after you play a card that costs more.",
        "text": "Upgrades in hand after you play a card that costs more.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 96,
        "slug": "questline\n",
        "name": "Questline",
        "refText": "Starts in your hand. Complete for a reward, up to 3 times!",
        "text": "Starts in your hand. Complete for a reward, up to 3 times!",
        "gameModes": [
            1
        ]
    },
    {
        "id": 97,
        "slug": "tradeable\n",
        "name": "Tradeable",
        "refText": "Drag this into your deck to spend 1 Mana and draw a new card.",
        "text": "Drag this into your deck to spend 1 Mana and draw a new card.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 99,
        "slug": "frenzy\n",
        "name": "Frenzy",
        "refText": "A one-time effect after this survives damage.",
        "text": "A one-time effect after this survives damage.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 100,
        "slug": "honorable-kill\n",
        "name": "Honorable Kill",
        "refText": "Deal exact lethal damage on your turn for a bonus.",
        "text": "Deal exact lethal damage on your turn for a bonus.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 104,
        "slug": "nature-spell-damage\n",
        "name": "Nature Spell Damage",
        "refText": "Your Nature spells deal extra damage.",
        "text": "Your Nature spell cards deal extra damage.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 109,
        "slug": "blood-gem\n",
        "name": "Blood Gem",
        "refText": "A spell that gives a minion .",
        "text": "A spell that gives a minion .",
        "gameModes": [
            2
        ]
    },
    {
        "id": 196,
        "slug": "refresh\n",
        "name": "Refresh",
        "refText": "Replace the Tavern with new cards.",
        "text": "Replace the Tavern with new cards.",
        "gameModes": [
            2
        ]
    },
    {
        "id": 198,
        "slug": "avenge-(x)\n",
        "name": "Avenge (X)",
        "refText": "Does something after X friendly minions die in combat.",
        "text": "Does something after X friendly minions die in combat.",
        "gameModes": [
            2
        ]
    },
    {
        "id": 231,
        "slug": "colossal-+x\n",
        "name": "Colossal +X",
        "refText": "When summoned, spawns X additional appendages.",
        "text": "When summoned, spawns X additional appendages.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 232,
        "slug": "dredge\n",
        "name": "Dredge",
        "refText": "Look at the bottom 3 cards of your deck. Put one on top.",
        "text": "Look at the bottom 3 cards of your deck. Put one on top.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 234,
        "slug": "spellcraft\n",
        "name": "Spellcraft",
        "refText": "Get a temporary spell every turn.",
        "text": "Get a temporary spell every turn.",
        "gameModes": [
            2
        ]
    },
    {
        "id": 238,
        "slug": "infuse\n",
        "name": "Infuse",
        "refText": "Upgrades in hand after X friendly minions die.",
        "text": "Upgrades in hand after X friendly minions die.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 247,
        "slug": "corpse\n",
        "name": "Corpse",
        "refText": "Resource gained when a friendly minion dies.",
        "text": "Resource gained when a friendly minion dies.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 252,
        "slug": "stealth\n",
        "name": "Stealth",
        "refText": "Can't be attacked until it attacks.",
        "text": "Can't be attacked until it attacks.",
        "gameModes": [
            2
        ]
    },
    {
        "id": 255,
        "slug": "finale\n",
        "name": "Finale",
        "refText": "A bonus if this spends all your remaining Mana.",
        "text": "A bonus if this spends all your remaining Mana.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 256,
        "slug": "overheal\n",
        "name": "Overheal",
        "refText": "A bonus if restored past full Health.",
        "text": "A bonus if restored past full Health.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 257,
        "slug": "manathirst-(x)\n",
        "name": "Manathirst (X)",
        "refText": "A bonus if you have X Mana Crystals.",
        "text": "A bonus if you have X Mana Crystals.",
        "gameModes": [
            1
        ]
    },
    {
        "id": 261,
        "slug": "venomous\n",
        "name": "Venomous",
        "refText": "Destroy the first minion this deals damage to.",
        "text": "Destroy the first minion this deals damage to.",
        "gameModes": [
            2
        ]
    },
    {
        "id": 265,
        "slug": "elusive",
        "name": "Elusive",
        "refText": "Can't be targeted by spells or Hero Powers.",
        "text": "Can't be targeted by spells or Hero Powers.",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "id": 266,
        "slug": "forge\t\t\n",
        "name": "Forge",
        "refText": "Drag this to your deck to spend (2) Mana for an upgrade.",
        "text": "Drag this to your deck to spend (2) Mana for an upgrade.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 270,
        "slug": "titan\n",
        "name": "Titan",
        "refText": "Click on a Titan to use 1 of 3 abilities instead of attacking.",
        "text": "Click on a Titan to use 1 of 3 abilities instead of attacking.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 294,
        "slug": "miniaturize",
        "name": "Miniaturize",
        "refText": "Get a 1-Cost 1/1 copy of this.",
        "text": "Get a 1-Cost 1/1 copy of this.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 295,
        "slug": "mini",
        "name": "Mini",
        "refText": "A 1-Cost 1/1 copy of another card.",
        "text": "A 1-Cost 1/1 copy of another card.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 297,
        "slug": "quickdraw\n",
        "name": "Quickdraw",
        "refText": "A bonus if this entered your hand this turn.",
        "text": "A bonus if this entered your hand this turn.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 298,
        "slug": "excavate\n",
        "name": "Excavate",
        "refText": "Dig for increasingly rarer treasures. Resets after the highest Rarity.",
        "text": "Dig for increasingly rarer treasures. Resets after the highest Rarity.",
        "gameModes": [
            1,
            5
        ]
    },
    {
        "id": 300,
        "slug": "pass",
        "name": "Pass",
        "refText": "Send to your teammate's hand.",
        "text": "Send to your teammate's hand.",
        "gameModes": [
            2
        ]
    }
];

export const minionTypes = [
    {
        "slug": "bloodelf",
        "id": 1,
        "name": "Blood Elf",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "draenei",
        "id": 2,
        "name": "Draenei",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "dwarf",
        "id": 3,
        "name": "Dwarf",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "gnome",
        "id": 4,
        "name": "Gnome",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "human",
        "id": 6,
        "name": "Human",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "nightelf",
        "id": 7,
        "name": "Night Elf",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "orc",
        "id": 8,
        "name": "Orc",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "tauren",
        "id": 9,
        "name": "Tauren",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "troll",
        "id": 10,
        "name": "Troll",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "undead",
        "id": 11,
        "name": "Undead",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "slug": "murloc",
        "id": 14,
        "name": "Murloc",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "slug": "demon",
        "id": 15,
        "name": "Demon",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "slug": "mech",
        "id": 17,
        "name": "Mech",
        "gameModes": [
            1,
            2,
            5,
            6
        ]
    },
    {
        "slug": "elemental",
        "id": 18,
        "name": "Elemental",
        "gameModes": [
            1,
            2,
            5,
            7
        ]
    },
    {
        "slug": "beast",
        "id": 20,
        "name": "Beast",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "slug": "totem",
        "id": 21,
        "name": "Totem",
        "gameModes": [
            1,
            5,
            6
        ]
    },
    {
        "slug": "pirate",
        "id": 23,
        "name": "Pirate",
        "gameModes": [
            1,
            2,
            5,
            6
        ]
    },
    {
        "slug": "dragon",
        "id": 24,
        "name": "Dragon",
        "gameModes": [
            1,
            2,
            5,
            6,
            7
        ]
    },
    {
        "slug": "all",
        "id": 26,
        "name": "All",
        "gameModes": [
            1,
            2,
            5
        ]
    },
    {
        "slug": "quilboar",
        "id": 43,
        "name": "Quilboar",
        "gameModes": [
            1,
            2,
            5
        ]
    },
    {
        "slug": "halforc",
        "id": 88,
        "name": "Half-Orc"
    },
    {
        "slug": "naga",
        "id": 92,
        "name": "Naga",
        "gameModes": [
            1,
            2,
            5,
            7
        ]
    },
    {
        "slug": "oldgod",
        "id": 93,
        "name": "Old God",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "pandaren",
        "id": 94,
        "name": "Pandaren",
        "gameModes": [
            7
        ]
    },
    {
        "slug": "gronn",
        "id": 95,
        "name": "Gronn",
        "gameModes": [
            7
        ]
    }
];
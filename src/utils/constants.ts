import {
  ANAGRAM,
  GALILEO,
  DIALECTIC,
  LEMNISCAP,
  ROBOT_VENTURES,
  AXELAR,
  ARBITRUM,
  GSR,
  CHORUS_ONE,
  REVERIE,
  FAIRY_COW_SWAP_IMG,
  FAIRY_COW_SWAP_VIDEO_URL,
  LAZY_KILLER_IMG,
  LAZY_KILLER_VIDEO_URL,
  TIME_CAPSULE_IMG,
  TIME_CAPSULE_VIDEO_URL,
  ON_CHAIN_TIME_BOMB_IMG,
  ON_CHAIN_TIME_BOMB_VIDEO_URL,
  VERIFIABLE_RANDOMNESS_IMG,
  VERIFIABLE_RANDOMNESS_VIDEO_URL,
  PRIVATE_GOVERNANCE_IMG,
  PRIVATE_GOVERNANCE_VIDEO_URL,
  FAIR_EX_IMG,
  FAIR_EX_VIDEO_URL,
} from "./images";

import {
  DISCORD_LINK,
  TWITTER_LINK,
  FAIR_BLOCK_MAIL,
  DOCS_LINK,
  DOCS_C_APP_LINK,
  FAIRY_COW_SWAP_LINK,
  LAZY_KILLER_LINK,
  TIME_CAPSULE_LINK,
  ON_CHAIN_TIME_BOMB_LINK,
  VERIFIABLE_RANDOMNESS_LINK,
  PRIVATE_GOVERNANCE_LINK,
  FAIR_EX_LINK,
} from "./links";

// *************** APP CONSTANTS - FOOTER - START ***************

export const FOOTER_LINKS_COLUMN_1 = {
  mainLabel: "Connect",
  links: [
    {
      linkLabel: "Discord",
      href: DISCORD_LINK,
      openInNewTab: true,
    },
    {
      linkLabel: "Mail",
      href: FAIR_BLOCK_MAIL,
    },
    {
      linkLabel: "X (Twitter)",
      href: TWITTER_LINK,
      openInNewTab: true,
    },
  ],
};

export const FOOTER_LINKS_COLUMN_2 = {
  mainLabel: "Resources",
  links: [
    {
      linkLabel: "Docs",
      href: DOCS_LINK,
    },
    {
      linkLabel: "Github",
      href: "https://github.com/Fairblock",
      openInNewTab: true,
    },
    {
      linkLabel: "News",
      href: "https://news.fairblock.network/",
    },
  ],
};

export const FOOTER_LINKS_COLUMN_3 = {
  mainLabel: "For developers",
  links: [
    {
      linkLabel: "Careers",
      to: "/careers",
    },
    {
      linkLabel: "Builders Program",
      href: "https://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1",
    },
  ],
};

// *************** APP CONSTANTS - FOOTER - END ***************

// *************** LANDING PAGE - SECTION 03 - CARDS - START ***************

export const SLIDING_CARDS_ARRAY = [
  {
    name: "Accessible",
    imageUrlLight: "/images/landing-page/cards/accessible.png",
    imageUrlDark: "/images/landing-page/cards/accessible-dark.png",
    description: "Confidentiality is always one click away.",
  },
  {
    name: "Expansive",
    imageUrlLight: "/images/landing-page/cards/expansive.png",
    imageUrlDark: "/images/landing-page/cards/expansive-dark.png",
    description: "Unlocking impactful DeFi and Al apps.",
  },
  {
    name: "Composable",
    imageUrlLight: "/images/landing-page/cards/composable.png",
    imageUrlDark: "/images/landing-page/cards/composable-dark.png",
    description: "Pluggable confidential logic into any application.",
  },
  {
    name: "Dynamic",
    imageUrlLight: "/images/landing-page/cards/dynamic.png",
    imageUrlDark: "/images/landing-page/cards/dynamic-dark.png",
    description: "Fine-tuned performance and security for each application.",
  },
  {
    name: "Compliant",
    imageUrlLight: "/images/landing-page/cards/compliant.png",
    imageUrlDark: "/images/landing-page/cards/compliant-dark.png",
    description: "Zero compliance risks with post-transaction accountability.",
  },
];

// *************** LANDING PAGE - SECTION 03 - CARDS - END ***************

// *************** LANDING PAGE - SECTION 05 - BACKERS - START ***************

type BackersImageObject = {
  label: string;
  imageUrl: string;
};

export const BACKERS_IMAGE_ARRAY: BackersImageObject[] = [
  { label: "Anagram", imageUrl: ANAGRAM },
  { label: "Galileo", imageUrl: GALILEO },
  { label: "Dialectic", imageUrl: DIALECTIC },
  { label: "Lemniscap", imageUrl: LEMNISCAP },
  { label: "Robot Ventures", imageUrl: ROBOT_VENTURES },
  { label: "Axelar", imageUrl: AXELAR },
  { label: "Arbitrum", imageUrl: ARBITRUM },
  { label: "GSR", imageUrl: GSR },
  { label: "Chorus One", imageUrl: CHORUS_ONE },
  { label: "Reverie", imageUrl: REVERIE },
];

export const BACKERS_NAME_ARRAY: string[] = [
  "Zaki Manian",
  "Waikit Lau",
  "Leland Lee",
  "Calvin Liu",
  "George Lambeth",
  "Xavier Meegan",
  "Stefan Coolican",
  "Richard Malone",
  "Collin Myers",
  "Batu",
];

// *************** LANDING PAGE - SECTION 05 - BACKERS - END ***************

// *************** LANDING PAGE - SECTION 06 - ECOSYSTEM - START ***************

export const ECOSYSTEM_ARRAY_1 = [
  {
    name: "Arbitrum",
    imageUrl: "/images/landing-page/ecosystem/arbitrum.png",
    link: "https://arbitrum.io/",
  },
  {
    name: "OP Stack",
    imageUrl: "/images/landing-page/ecosystem/opstack.png",
    link: "https://optimism.io/",
  },
  {
    name: "Polygon",
    imageUrl: "/images/landing-page/ecosystem/polygon.png",
    link: "https://polygon.technology/",
    isBlack: true,
  },
  {
    name: "Polymer",
    imageUrl: "/images/landing-page/ecosystem/polymer.png",
    link: "https://www.polymerlabs.org/",
    isBlack: true,
  },
  {
    name: "Celestia",
    imageUrl: "/images/landing-page/ecosystem/celestia.png",
    link: "https://celestia.org/",
  },
  {
    name: "Xai",
    imageUrl: "/images/landing-page/ecosystem/xai.png",
    link: "https://xai.games/",
  },
  {
    name: "Alt Layer",
    imageUrl: "/images/landing-page/ecosystem/alt layer.png",
    link: "https://www.altlayer.io/",
    isBlack: true,
  },
  {
    name: "Squid",
    imageUrl: "/images/landing-page/ecosystem/squid.png",
    link: "https://www.squidrouter.com/",
  },
  {
    name: "Rollkit",
    imageUrl: "/images/landing-page/ecosystem/rollkit.png",
    link: "https://rollkit.dev/",
    isBlack: true,
  },
];

export const ECOSYSTEM_ARRAY_2 = [
  {
    name: "Ritual",
    imageUrl: "/images/landing-page/ecosystem/ritual.png",
    link: "https://ritual.net/",
    isBlack: true,
  },
  {
    name: "Cosmos Hub",
    imageUrl: "/images/landing-page/ecosystem/cosmoshub.png",
    link: "https://cosmos.network/",
    isBlack: true,
  },
  {
    name: "Stargaze",
    imageUrl: "/images/landing-page/ecosystem/stargaze.png",
    link: "https://www.stargaze.zone/",
  },
  {
    name: "Ethereum",
    imageUrl: "/images/landing-page/ecosystem/ethereum.png",
    link: "https://ethereum.org/en/",
  },
  {
    name: "CoW Swap",
    imageUrl: "/images/landing-page/ecosystem/cowswap.png",
    link: "https://swap.cow.fi/",
  },
  {
    name: "Monad",
    imageUrl: "/images/landing-page/ecosystem/monad.png",
    link: "https://www.monad.xyz/",
  },
  {
    name: "Fluent",
    imageUrl: "/images/landing-page/ecosystem/fluent.png",
    link: "https://fluent.xyz/",
  },
  {
    name: "Anoma",
    imageUrl: "/images/landing-page/ecosystem/anoma.png",
    link: "https://anoma.net/",
  },
];

// *************** LANDING PAGE - SECTION 06 - ECOSYSTEM - END ***************

// *************** LANDING PAGE - SECTION 07 - DEVELOPERS - START ***************

export const DEVELOPERS_ARRAY = [
  {
    imageUrl: "/images/characters/scroll-blue.png",
    imageText: "Character-scroll",
    header: "Wander the Woods",
    description: "Get started with fairy ring developer docs.",
    url: DOCS_LINK,
  },
  {
    imageUrl: "/images/characters/key-green.png",
    imageText: "Character-key",
    header: "Build a cApp",
    description: "Build your Confidential App in 30 minutes.",
    url: DOCS_C_APP_LINK,
  },
  {
    imageUrl: "/images/characters/lantern-purple.png",
    imageText: "Character-lantern",
    header: "Join our FairyRing",
    description: "Become a mushroom in the fairy ring.",
    url: DISCORD_LINK,
  },
];

// *************** LANDING PAGE - SECTION 07 - DEVELOPERS - END ***************

// *************** DEMOS PAGE - DEMO APPS - START ***************

export const DEMOS_ARRAY = [
  {
    demoId: "cow-limit-order",
    demoName: "FairyCoW Swap",
    demoDescription:
      "FairyCoW Swap showcases how programmable encryption can be used within CoWSwap limit orders. Available on Sepolia testnet.",
    demoLink: FAIRY_COW_SWAP_LINK,
    demoVideoThumbnail: FAIRY_COW_SWAP_IMG,
    demoVideoUrl: FAIRY_COW_SWAP_VIDEO_URL,
  },
  {
    demoId: "murder-mystery",
    demoName: "Lazy Killer",
    demoDescription:
      "Lazy Killer is a multi-player murder mystery game that utilizes encryption to conceal the murderer until a certain block height is met.",
    demoLink: LAZY_KILLER_LINK,
    demoVideoThumbnail: LAZY_KILLER_IMG,
    demoVideoUrl: LAZY_KILLER_VIDEO_URL,
  },
  {
    demoId: "time-capsule",
    demoName: "Time Capsule",
    demoDescription:
      "Our Time Capsule allows users to grasp the power of encryption tangibly.",
    demoLink: TIME_CAPSULE_LINK,
    demoVideoThumbnail: TIME_CAPSULE_IMG,
    demoVideoUrl: TIME_CAPSULE_VIDEO_URL,
  },
  {
    demoId: "time-bomb",
    demoName: "Onchain Time Bomb",
    demoDescription:
      "Our Time Bomb game allows users to grasp the power of encryption tangibly. Over 10,000 bombs have exploded since our testnet launch.",
    demoLink: ON_CHAIN_TIME_BOMB_LINK,
    demoVideoThumbnail: ON_CHAIN_TIME_BOMB_IMG,
    demoVideoUrl: ON_CHAIN_TIME_BOMB_VIDEO_URL,
  },
  {
    demoId: "randomness",
    demoName: "Verifiable Randomness",
    demoDescription:
      "Verifiable randomness is generated with FairyRing and unlocks a new generation of gaming, defi, distribution, and auction-based apps across chains.",
    demoLink: VERIFIABLE_RANDOMNESS_LINK,
    demoVideoThumbnail: VERIFIABLE_RANDOMNESS_IMG,
    demoVideoUrl: VERIFIABLE_RANDOMNESS_VIDEO_URL,
  },
  {
    demoId: "private-gov",
    demoName: "Private Governance",
    demoDescription:
      "Our private governance module allows EVM and Cosmos users to encrypt their votes in any onchain poll to produce credibly neutral results.",
    demoLink: PRIVATE_GOVERNANCE_LINK,
    demoVideoThumbnail: PRIVATE_GOVERNANCE_IMG,
    demoVideoUrl: PRIVATE_GOVERNANCE_VIDEO_URL,
  },
  {
    demoId: "FairEx",
    demoName: "FairEx",
    demoDescription:
      "FairEx allows Arbitrum users to encrypt swaps and protect the contents of their orders from being leaked prior to execution.",
    demoLink: FAIR_EX_LINK,
    demoVideoThumbnail: FAIR_EX_IMG,
    demoVideoUrl: FAIR_EX_VIDEO_URL,
  },
];

// *************** DEMOS PAGE - DEMO APPS - END ***************

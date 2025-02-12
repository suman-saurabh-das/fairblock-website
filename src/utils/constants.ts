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
} from "./images";
import { DOCS_LINK, DOCS_C_APP_LINK } from "./links";

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
    imageUrl: "https://i.imgur.com/jb7vwCG.png",
    link: "https://arbitrum.io/",
  },
  {
    name: "OP Stack",
    imageUrl: "https://i.imgur.com/4aA7U5T.png",
    link: "https://optimism.io/",
  },
  {
    name: "Polygon",
    imageUrl: "https://i.imgur.com/zRfudMJ.png",
    link: "https://polygon.technology/",
    isBlack: true,
  },
  {
    name: "Polymer",
    imageUrl: "https://i.imgur.com/DjbM1pq.png",
    link: "https://www.polymerlabs.org/",
    isBlack: true,
  },
  {
    name: "Celestia",
    imageUrl: "https://i.imgur.com/98WjIoG.png",
    link: "https://celestia.org/",
  },
  {
    name: "Xai",
    imageUrl: "https://i.imgur.com/ITN5zKg.png",
    link: "https://xai.games/",
  },
  {
    name: "Alt Layer",
    imageUrl: "https://i.imgur.com/b34yNMQ.png",
    link: "https://www.altlayer.io/",
    isBlack: true,
  },
  {
    name: "Squid",
    imageUrl: "https://i.imgur.com/W7heTJA.png",
    link: "https://www.squidrouter.com/",
  },
  {
    name: "Rollkit",
    imageUrl: "https://i.imgur.com/k9TvFIY.png",
    link: "https://rollkit.dev/",
    isBlack: true,
  },
];

export const ECOSYSTEM_ARRAY_2 = [
  {
    name: "Ritual",
    imageUrl: "https://i.imgur.com/XYPkzVT.png",
    link: "https://ritual.net/",
    isBlack: true,
  },
  {
    name: "Cosmos Hub",
    imageUrl: "https://i.imgur.com/cHgwQn1.png",
    link: "https://cosmos.network/",
    isBlack: true,
  },
  {
    name: "Stargaze",
    imageUrl: "https://i.imgur.com/yOTLiAC.png",
    link: "https://www.stargaze.zone/",
  },
  {
    name: "Ethereum",
    imageUrl: "https://i.imgur.com/WvYnssk.png",
    link: "https://ethereum.org/en/",
  },
  {
    name: "CoW Swap",
    imageUrl: "https://i.imgur.com/iXNYEZ6.png",
    link: "https://swap.cow.fi/",
  },
  {
    name: "Monad",
    imageUrl: "https://i.imgur.com/2j88T8x.png",
    link: "https://www.monad.xyz/",
  },
  {
    name: "Fluent",
    imageUrl: "https://i.imgur.com/V8pNxEN.png",
    link: "https://fluent.xyz/",
  },
  {
    name: "Anoma",
    imageUrl: "https://i.imgur.com/wfKomsS.png",
    link: "https://anoma.net/",
  },
];

// *************** LANDING PAGE - SECTION 06 - ECOSYSTEM - END ***************

// *************** LANDING PAGE - SECTION 07 - DEVELOPERS - START ***************

export const DEVELOPERS_ARRAY = [
  {
    imageUrl: "https://i.imgur.com/pkhLpkt.png",
    imageText: "Character-scroll",
    header: "Wander the Woods",
    description: "Get started with fairy ring developer docs.",
    url: DOCS_LINK,
  },
  {
    imageUrl: "https://i.imgur.com/vF9Vch5.png",
    imageText: "Character-key",
    header: "Build a cApp",
    description: "Build your Confidential App in 30 minutes.",
    url: DOCS_C_APP_LINK,
  },
  {
    imageUrl: "https://i.imgur.com/A2TocpT.png",
    imageText: "Character-lantern",
    header: "Join our FairyRing",
    description: "Become a mushroom in the fairy ring.",
    url: "https://discord.com/invite/jhNBCCAMPK",
  },
];

// *************** LANDING PAGE - SECTION 07 - DEVELOPERS - END ***************

// *************** APP CONSTANTS - FOOTER - START ***************

export const FOOTER_LINKS_COLUMN_1 = {
  mainLabel: "Connect",
  links: [
    {
      linkLabel: "Discord",
      href: "https://discord.com/invite/jhNBCCAMPK",
      openInNewTab: true,
    },
    {
      linkLabel: "Mail",
      href: "mailto:hello@fairblock.network",
    },
    {
      linkLabel: "X (Twitter)",
      href: "https://x.com/0xfairblock",
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
      href: "https://website-0xfairblock.vercel.app/careers",
    },
  ],
};

// *************** APP CONSTANTS - FOOTER - END ***************

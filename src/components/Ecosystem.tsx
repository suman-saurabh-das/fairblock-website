import { useState, useEffect } from "react";
import Slider from "./Slider";

const ECOSYSTEM_ARRAY_1 = [
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

const ECOSYSTEM_ARRAY_2 = [
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

const Ecosystem = () => {
  const [dimensions, setDimensions] = useState({ width: 90, height: 110 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 769) {
        // Mobile
        setDimensions({ width: 90, height: 110 });
      } else {
        // Laptop/Desktop
        setDimensions({ width: 110, height: 140 });
      }
    };

    // Initial setup
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="px-6 py-12 md:py-20">
      <div className="flex flex-col gap-4 items-center justify-center overflow-x-hidden">
        <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">
          Ecosystem
        </h2>
        <div className="flex flex-col gap-4 xl:gap-8">
          <Slider
            imageWithLinks={ECOSYSTEM_ARRAY_1}
            width={dimensions.width}
            height={dimensions.height}
            quantity={ECOSYSTEM_ARRAY_1.length}
          />
          <Slider
            imageWithLinks={ECOSYSTEM_ARRAY_2}
            width={dimensions.width}
            height={dimensions.height}
            quantity={ECOSYSTEM_ARRAY_2.length}
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Ecosystem;

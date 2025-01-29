import { useState, useEffect } from "react";
import Slider from "./Slider";

const SLIDING_CARDS_ARRAY = [
  {
    name: "Accessible",
    imageUrlLight: "https://i.imgur.com/8t7y3jh.png",
    imageUrlDark: "https://i.imgur.com/s3VozU8.png",
    description: "Confidentiality is always one click away.",
  },
  {
    name: "Expansive",
    imageUrlLight: "https://i.imgur.com/ISUn2Nw.png",
    imageUrlDark: "https://i.imgur.com/SGBBREX.png",
    description: "Unlocking impactful DeFi and Al apps.",
  },
  {
    name: "Composable",
    imageUrlLight: "https://i.imgur.com/nH73iMM.png",
    imageUrlDark: "https://i.imgur.com/TrFE7MP.png",
    description: "Pluggable confidential logic into any application.",
  },
  {
    name: "Dynamic",
    imageUrlLight: "https://i.imgur.com/hvqvl0Y.png",
    imageUrlDark: "https://i.imgur.com/iuSNrla.png",
    description: "Fine-tuned performance and security for each application.",
  },
  {
    name: "Compliant",
    imageUrlLight: "https://i.imgur.com/jwuKu2r.png",
    imageUrlDark: "https://i.imgur.com/wdShKGI.png",
    description: "Zero compliance risks with post-transaction accountability.",
  },
];

const SlidingCards = () => {
  const [dimensions, setDimensions] = useState({ width: 300, height: 410 });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 769) {
        // Mobile
        setDimensions({ width: 240, height: 370 });
      } else {
        // Laptop/Desktop
        setDimensions({ width: 300, height: 410 });
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
      <div className="max-w-screen-xl mx-auto">
        <Slider
          cards={SLIDING_CARDS_ARRAY}
          width={dimensions.width}
          height={dimensions.height}
          quantity={SLIDING_CARDS_ARRAY.length}
        />
      </div>
    </div>
  );
};
export default SlidingCards;

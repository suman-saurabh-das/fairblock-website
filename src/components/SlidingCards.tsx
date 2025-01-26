import { useState, useEffect } from "react";
import Slider from "./Slider";

const SLIDING_CARDS_ARRAY = [
  {
    name: "Accessible",
    imageUrl: "/src/assets/images/Accessible.png",
    description: "Confidentiality is always one click away.",
  },
  {
    name: "Expansive",
    imageUrl: "/src/assets/images/Compliant.png",
    description: "Unlocking impactful DeFi and Al apps.",
  },
  {
    name: "Composable",
    imageUrl: "/src/assets/images/Composable.png",
    description: "Pluggable confidential logic into any application.",
  },
  {
    name: "Dynamic",
    imageUrl: "/src/assets/images/Expansive.png",
    description: "Fine-tuned performance and security for each application.",
  },
  {
    name: "Compliant",
    imageUrl: "/src/assets/images/Multimodal.png",
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

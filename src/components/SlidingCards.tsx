import { useState, useEffect } from "react";
import Slider from "./Slider";
import { SLIDING_CARDS_ARRAY } from "../utils/constants";

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

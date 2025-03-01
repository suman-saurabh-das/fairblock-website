import { useState, useEffect } from "react";
import { ECOSYSTEM_ARRAY_1, ECOSYSTEM_ARRAY_2 } from "../utils/constants";
import Slider from "./Slider";

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
        {/* ECOSYSTEM HEADER */}
        <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">
          Ecosystem
        </h2>
        
        <div className="flex flex-col gap-4 xl:gap-8">
          {/* ECOSYSTEM SLIDER 1 - RIGHT TO LEFT */}
          <Slider
            imageWithLinks={ECOSYSTEM_ARRAY_1}
            width={dimensions.width}
            height={dimensions.height}
            quantity={ECOSYSTEM_ARRAY_1.length}
          />
          {/* ECOSYSTEM SLIDER 2 - LEFT TO RIGHT */}
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

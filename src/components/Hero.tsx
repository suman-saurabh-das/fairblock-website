import { useEffect, useState } from "react";
import { useTheme } from "../App";
import { MasterSvg } from "../assets/svg/MasterSvg";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import ScrambleText from "./ScrambleText";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const DARK_HERO_BG = "https://i.imgur.com/QwlqllT.mp4";
const LIGHT_HERO_BG = "https://i.imgur.com/MH29AUb.mp4";

const Hero = () => {
  const { darkMode } = useTheme();
  const [bgVideoURL, setBgVideoUrl] = useState<string>(
    "/src/assets/video/Hero-bg-light.mp4"
  );

  useEffect(() => {
    darkMode
      ? setBgVideoUrl(DARK_HERO_BG)
      : setBgVideoUrl(LIGHT_HERO_BG);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center min-h-[92vh] max-h-fit overflow-hidden relative mx-auto w-full max-w-screen-2xl">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        key={bgVideoURL} // Forces video reload on src change
        src={bgVideoURL}
        className="absolute invert-0 inset-0 object-cover h-full w-full"
      ></video>

      {/* CONTENT OVERLAY */}
      <div className="bg-[#58BDF6]/90 dark:bg-black/60 flex flex-col items-center justify-center  p-6 relative min-h-[92vh] max-h-fit w-full z-[5]">
        <div className="flex flex-col items-center">
          {/* HERO IMAGE CONTAINER */}
          <div>
            <MasterSvg className="fill-black dark:fill-white h-[22rem] xl:h-[55vh] w-full" />
          </div>

          {/* HERO TEXT CONTAINER */}
          <div className="mt-6 lg:mt-12 xl:mt-20">
            <h1 className="font-marlide font-normal tracking-wider text-center text-3xl lg:text-5xl max-w-72 sm:max-w-fit">
              <ScrambleText
                text="Build Farther with Web 3's Confidentiality Station"
                speed={50}
                scrambleOnLoad={true}
              />
            </h1>
          </div>

          {/* SCROLL DOWN BUTTON */}
          <div className="mt-8 xl:mt-12">
            <button
              className="flex flex-col gap-1 items-center"
              onClick={() => scrollToSection("about")}
            >
              <TfiAngleDoubleDown className="animate-bounce duration-100 hover:bg-black/10 dark:hover:bg-white/30 p-2 rounded-full text-4xl xl:text-5xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

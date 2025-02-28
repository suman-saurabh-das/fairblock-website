import { useEffect, useState } from "react";
import { useTheme } from "../App";
import { HeroSvg } from "../assets/svg/HeroSvg";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import ScrambleText from "./ScrambleText";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const DARK_HERO_BG = "/videos/landing-page/Hero-bg-dark.mp4";
const LIGHT_HERO_BG = "/videos/landing-page/Hero-bg-light.mp4";

const Hero = () => {
  const { darkMode } = useTheme();
  const [bgVideoURL, setBgVideoUrl] = useState<string>(LIGHT_HERO_BG);

  useEffect(() => {
    darkMode ? setBgVideoUrl(DARK_HERO_BG) : setBgVideoUrl(LIGHT_HERO_BG);
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center overflow-hidden h-[88vh] relative mx-auto w-full max-w-screen-2xl">
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
      <div className="bg-[#58BDF6]/90 dark:bg-black/60 p-6 pt-12 relative h-full w-full z-[5]">
        <div className="flex flex-col items-center justify-around gap-4 h-full">
          {/* HERO IMAGE CONTAINER */}
          <div>
            <HeroSvg className="fill-black dark:fill-white h-[50vh] w-full" />
          </div>

          {/* HERO TEXT CONTAINER */}
          <div className="">
            <h1 className="relative -top-3/4 sm:top-0 sm:static font-marlide font-normal mt-8 tracking-wider text-center text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl min-h-[4.5rem] w-80 md:w-auto sm:max-w-fit">
              <ScrambleText
                text="Build Farther with Web3's Confidentiality Station"
                speed={50}
                scrambleOnLoad={true}
              />
            </h1>
          </div>

          {/* SCROLL DOWN BUTTON */}
          <div className="">
            <button
              className="flex flex-col gap-1 items-center"
              onClick={() => scrollToSection("about")}
            >
              <TfiAngleDoubleDown className="animate-bounce duration-100 hover:bg-black/10 dark:hover:bg-white/30 p-2 rounded-full text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

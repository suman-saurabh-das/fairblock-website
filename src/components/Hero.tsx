import { MasterSvg } from "../assets/svg/MasterSvg";
import { TfiAngleDoubleDown } from "react-icons/tfi";
import ScrambleText from "./ScrambleText";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 md:py-16">
      <div className="">
        <MasterSvg className="fill-black dark:fill-white h-96 w-full" />
      </div>
      <div className="mt-6 lg:mt-12">
        <h1 className="font-marlide font-normal tracking-wider text-center text-3xl lg:text-4xl max-w-72 sm:max-w-fit">
        <ScrambleText text="Build Farther with Web 3's Confidentiality Station" speed={50} scrambleOnLoad={true} />
        </h1>
      </div>
      <div className="mt-8">
        <button
          className="flex flex-col gap-1 items-center"
          onClick={() => alert("ADD SCROLL DOWN FEATURE")}
        >
          <TfiAngleDoubleDown className="animate-bounce duration-100 hover:bg-black/10 dark:hover:bg-black/50 p-2 rounded-full text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

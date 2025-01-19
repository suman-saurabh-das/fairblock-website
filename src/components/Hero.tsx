import { MasterSvg } from "../assets/svg/MasterSvg";
import { TfiAngleDoubleDown } from "react-icons/tfi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="">
        <MasterSvg className="fill-black dark:fill-white h-52 md:h-72 lg:h-[23rem] w-full" />
      </div>
      <div className="mt-8 md:mt-12">
        <h1 className="font-marlide font-normal tracking-wider text-center text-2xl md:text-4xl max-w-72 sm:max-w-fit">
          Build Farther with Web 3's Confidentiality Station
        </h1>
      </div>
      <div className="mt-8">
        <button
          className="flex flex-col gap-1 items-center"
          onClick={() => alert("ADD SCROLL DOWN FEATURE")}
        >
          <span className="text-sm">Scroll Down</span>
          <TfiAngleDoubleDown className="animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

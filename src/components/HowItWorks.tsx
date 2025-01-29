import { Link } from "react-router-dom";
import { useTheme } from "../App";

const HowItWorks = () => {
  const { darkMode } = useTheme();

  return (
    // lg:bg-[url('/src/assets/images/Border1Dark.png')] lg:dark:bg-[url('/src/assets/images/Border1Light.png')] lg:bg-contain lg:bg-center lg:bg-no-repeat lg:p-16
    <div className="px-6 py-12 md:py-20">
      <div className="relative sm:border sm:border-black/50 sm:py-8 dark:border-white/50 flex flex-col lg:flex-row items-center justify-evenly gap-12 md:gap-0 rounded-3xl sm:shadow-md sm:shadow-black/20 sm:dark:shadow-black mx-auto max-w-screen-xl">
        {/* BORDER TOP DECORATION IMAGE */}
        <img
          loading="lazy"
          className="hidden sm:block absolute dark:invert -top-[4.5rem] left-1/2 rotate-180 -translate-x-1/2 w-52"
          src="https://i.imgur.com/RK6fKsH.png"
          alt="Top border decoration"
        />

        {/* HOW IT WORKS TEXT CONTAINER */}
        <div className="flex flex-col items-center lg:items-start  p-4 lg:p-0 text-center lg:text-start w-full lg:w-[40%]">
          <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">
            Dynamic Confidentiality for Every Block
          </h2>
          <p className="my-4 md:my-6 text-xl">
            Accessible confidentiality for emergent onchain markets. Powered by
            MPC and customizable for optimal application performance with
            multimodal cryptography.
          </p>
          <button className="bg-fuchsia-300 hover:bg-fuchsia-400 border border-black/50 dark:border-white/50 font-medium mt-6 px-6 py-2 rounded-3xl text-black w-fit">
            <Link to={"/how-it-works"}>Learn How It Works</Link>
          </button>
        </div>

        {/* HOW IT WORKS IMAGE CONTAINER */}
        <div className="w-full lg:w-[48%]">
          <img
            src={
              darkMode
                ? "https://i.imgur.com/1ucqeDO.png"
                : "https://i.imgur.com/9V0Skax.png"
            }
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;

import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly gap-12 sm:gap-0 mx-auto max-w-screen-lg">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-start w-full sm:w-1/3">
        <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">
          Dynamic Confidentiality for Every Block
        </h2>
        <p className="my-4 md:my-6">
          Accessible confidentiality for emergent onchain markets. Powered by
          MPC and customizable for optimal application performance with
          multimodal cryptography.
        </p>
        <button className="border border-black dark:border-white bg-[#F6AAFF] font-medium mt-6 px-6 py-2 rounded-3xl text-black w-fit">
          <Link to={"/how-it-works"}>Learn How It Works</Link>
        </button>
      </div>
      <div className="w-full sm:w-1/2 max-w-[540px]">
        <img
          src="/src/assets/images/How-it-works.png"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
export default HowItWorks;

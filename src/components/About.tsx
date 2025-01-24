import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="mx-auto max-w-screen-lg">
      <h2 className="font-marlide font-normal mb-12 text-4xl md:text-5xl text-center md:text-left">
        Unlock Credible Economies
      </h2>
      <div className="flex flex-col gap-12 md:flex-row-reverse items-start justify-center mx-auto">
        <div className="flex flex-col gap-12 mx-auto text-xl md:w-1/2">
          <img
            className="max-w-80 mx-auto w-full"
            src="/src/assets/images/FairyRing.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <p className="md:text-lg mb-6">
            Most Web3 applications still depend on centralized intermediaries,
            making protocols less secure and vulnerable to manipulation.
            However, fully public onchain interactions create new risks exposing
            end users, solvers, AI agents, market makers, and other participants
            to exploitative tactics that degrade execution quality.
          </p>
          <p className="font-medium text-lg md:text-xl mb-6 md:mb-12">
            Fairblock leverages dynamic confidential computing to mitigate
            centralized risks and prevent information leakage in decentralized
            applications. This unlocks Credible and Capital-Efficient DeFi
            mechanisms and AI models.
          </p>
          <button className="border border-black dark:border-white bg-lime-300 font-medium px-6 py-2 rounded-3xl text-black w-fit min-w-48">
            <Link to={"/how-it-works"}>Try FairyRing</Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
export default About;

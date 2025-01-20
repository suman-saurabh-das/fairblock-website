import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl md:text-5xl">Unlock Credible Economies</h2>
      <div className="my-4 md:my-6">
        <p className="text-center">
          Many Web3 applications still depend on centralized intermediaries,
          making protocols less secure and vulnerable to manipulation. However,
          fully public onchain interactions create new risks—exposing end users,
          solvers, AI agents, market makers, and other participants to
          exploitative tactics that degrade execution quality.
        </p>
      </div>
      <div className="flex flex-col items-center gap-12 my-4 md:my-6">
        <p className="text-center">
          Fairblock leverages dynamic confidential computing to mitigate
          centralized risks and prevent information leakage in decentralized
          applications. This unlocks Credible and Capital-Efficient DeFi
          mechanisms and AI models.
        </p>
        <button className="border border-black dark:border-white bg-lime-300 font-medium p-2 rounded-2xl w-fit min-w-48">
          <Link to={"/applications"}>Try Fairy Ring</Link>
        </button>
      </div>
    </div>
  );
};
export default About;

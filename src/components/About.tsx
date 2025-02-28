import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-between min-h-screen px-6 py-12 md:py-20"
    >
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center justify-center mx-auto max-w-screen-xl">
        {/* ABOUT IMAGE CONTAINER */}
        <div className="flex flex-col gap-12 p-4 text-xl mx-auto w-full md:w-1/2 lg:w-[35%]">
          <img
            loading="lazy"
            className="dark:invert mx-auto w-full"
            src="/images/landing-page/fairblock.png"
            alt="Fairblock"
          />
        </div>

        {/* ABOUT TEXT CONTAINER */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-marlide font-normal mb-6 text-4xl md:text-5xl">
            Unlock Credible Economies
          </h2>
          <p className="mb-6 md:text-xl">
            Most Web3 applications still depend on centralized intermediaries,
            making protocols less secure and vulnerable to manipulation.
            However, fully public onchain interactions create new risks exposing
            end users, solvers, AI agents, market makers, and other participants
            to exploitative tactics that degrade execution quality.
          </p>
          <p className="font-medium mb-6 md:mb-12 text-lg md:text-2xl">
            Fairblock leverages dynamic confidential computing to mitigate
            centralized risks and prevent information leakage and manipulation
            in decentralized applications. This unlocks Credible and
            Confidential DeFi mechanisms and AI models.
          </p>
          <Link
            to="/demos"
            className="bg-fuchsia-300 hover:bg-fuchsia-400 border border-black/50 dark:border-white/50 font-marlide font-medium px-6 py-2 rounded-3xl text-black w-fit min-w-48"
          >
            Try FairyRing
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;

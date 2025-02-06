import { CHARACTER_BLUE_SCROLL_IMAGE } from "../utils/images";

const HowThingsWorks = () => {

  return (
    <div className="mx-auto max-w-screen-2xl">
      {/* SECTION 1 */}
      <div className="bg-[#58BDF6] flex gap-8 items-center justify-between px-4 md:px-8 lg:px-12 py-8 lg:py-12 lg:pt-20 text-black">
        {/* LEFT DECORATION IMAGE */}
        <img
          loading="lazy"
          className="hidden xl:block w-36 h-96"
          src="https://i.imgur.com/sP9sDFd.png"
          alt="Left Decoration"
        />

        {/* HOW THINGS WORK - INTRODUCTION */}
        <div className="flex flex-col gap-6 xl:gap-10 items-center justify-between">
          <div className="w-56 xl:w-64">
            <img
              loading="lazy"
              className="w-full"
              src={CHARACTER_BLUE_SCROLL_IMAGE}
              alt="Character-blue-scroll"
            />
          </div>
          <h2 className="font-marlide text-4xl lg:text-5xl">How Things Work</h2>
          <p className="xl:w-[90%] mx-auto text-center">
            Fairblock is a decentralized cryptographic computer that runs secure
            and performant MPC-based confidential computation. Fairblock can
            host “dine-in” DeFi, AI, and gaming economies for cheap and fast
            execution, or seamlessly "deliver" these capabilities to deep-rooted
            ecosystems such as EVM, Cosmos, and Solana. Fairblock consists of
            two core elements: FairyRing and FairyKit. FairyRing abstracts away
            intensive cryptographic operations for applications built within its
            chain as well as those built on alternative blockchains. For
            external partners, FairyRing distributes confidential execution via
            FairyKit, which plugs into any protocol and application to bring
            one-click confidentiality to any app or user that requires it.
          </p>
        </div>

        {/* RIGHT DECORATION IMAGE */}
        <img
          loading="lazy"
          className="hidden xl:block w-36 h-96"
          src="https://i.imgur.com/KTuIIhK.png"
          alt="Right Decoration"
        />
      </div>
    </div>
  );
};
export default HowThingsWorks;

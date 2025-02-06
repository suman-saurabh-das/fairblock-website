import { Star } from "../assets/svg/Star";
import {
  CHARACTER_BLUE_SCROLL_IMAGE,
  FAIR_BLOCK_IMAGE,
  CHARACTER_BLUE_LANTERN_IMAGE,
} from "../utils/images";

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

      {/* SECTION 2 */}
      <div className="relative bg-[#58BDF6] px-4 md:px-8 lg:px-12 py-8 lg:py-12 pb-12 lg:pb-20 text-black">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 items-start max-w-screen-lg mx-auto">
          {/* FAIRY RING & FAIRY KIT - TEXT CONTAINER */}
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-marlide font-medium flex gap-2 items-center text-2xl">
                <Star /> FairyRing
              </h4>
              <p className="md:w-4/5">
                A dynamic and decentralized network that hosts app-specific
                secure and performant confidential computing.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-marlide font-medium flex gap-2 items-center text-2xl">
                <Star /> FairyKit
              </h4>
              <p className="md:w-4/5">
                A module that enables confidential computing for applications
                within our native ecosystem or across external chains.
              </p>
            </div>
          </div>

          {/* FAIRY RING IMAGE CONTAINER */}
          <div className="mx-auto md:ml-auto max-w-72 lg:max-w-80 xl:max-w-96">
            <img
              loading="lazy"
              className="w-full"
              src={FAIR_BLOCK_IMAGE}
              alt="Fairblock"
            />
          </div>
        </div>

        {/* LANTERN CHARACTER IMAGE */}
        <img
          className="hidden xl:block absolute -bottom-28 left-12 w-56 xl:w-64"
          src={CHARACTER_BLUE_LANTERN_IMAGE}
          alt="Blue lantern character"
        />
      </div>
    </div>
  );
};
export default HowThingsWorks;

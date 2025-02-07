import { useTheme } from "../App";
import { Star } from "../assets/svg/Star";
import {
  CHARACTER_BLUE_SCROLL_IMAGE,
  FAIR_BLOCK_IMAGE,
  CHARACTER_BLUE_LANTERN_IMAGE,
  USER_FLOW_LIGHT,
  USER_FLOW_DARK,
} from "../utils/images";

const HowThingsWorks = () => {
  const { darkMode } = useTheme();

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

      {/* SECTION 3 */}
      <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-12 py-8 lg:py-12 pt-12 lg:pt-20 mx-auto text-center max-w-screen-xl">
        <h2 className="font-marlide text-4xl lg:text-5xl mb-4">User Flow</h2>
        <p>
          Simplicity is the last step of art, we prioritize simplicity through
          our multimodal and dynamic design to fine-tune performance and
          security, introducing complexity only when essential.
        </p>
        <ol>
          Fairblock leverages threshold IBE (aka witness encryption) for -
          <li>
            a. Applications that only require pre-execution mempool-privacy e.g.
            sealed-bid auctions or frontrunning protection
          </li>
          <li>
            b. Information access control e.g. pay-to-decrypt to achieve minimal
            bandwidth and computation overhead.
          </li>
        </ol>
        <p>
          Other MPC schemes such as Threshold FHE (CKKS) and SPDZ are used for
          applications that require computation over encrypted transactions or
          data such as confidential AI inference or dark pools. MPC schemes can
          be combined with TEEs to reduce reliance on a single TEE’s hardware
          security and mitigate MPCs honest majority collusion risks. ZKPs are
          necessary in some MPC applications to ensure the validity of private
          inputs whenever multiple parties interact with each other in a shared
          private state.
        </p>
        <p>
          As advanced MPC schemes become more accessible, Fairblock will offer
          them through FairyKit to partner protocols and native applications. We
          are beginning by offering threshold IBE and CKKS due to their
          immediate benefit to the blockchain design space and user experience.
        </p>
      </div>

      {/* SECTION 4 */}
      <div className="px-4 md:px-8 lg:px-12 py-8 lg:py-12 pb-12 lg:pb-20">
        <div className="mx-auto sm:w-4/5 lg:w-3/5 xl:w-1/2">
          <img
            loading="lazy"
            className="w-full"
            src={darkMode ? USER_FLOW_DARK : USER_FLOW_LIGHT}
            alt="User flow"
          />
        </div>
      </div>
    </div>
  );
};
export default HowThingsWorks;

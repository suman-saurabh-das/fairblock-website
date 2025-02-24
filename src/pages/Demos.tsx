import { useEffect } from "react";
import DemosContent from "./DemosContent";
import { TOP_BORDER_1, BOTTOM_BORDER_1 } from "../utils/images";
import { Star } from "../assets/svg/Star";

const DEMOS_DATA = [
  {
    demoId: "cow-limit-order",
    demoName: "FairyCoW Swap",
    demoDescription:
      "FairyCoW Swap showcases how programmable encryption can be used within CoWSwap limit orders. Available on Sepolia testnet.",
    demoLink: "https://swap.fairycow.fi/#/11155111/limit/WETH?tab=open&page=1",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/cow-limit-order.mp4",
  },
  {
    demoId: "murder-mystery",
    demoName: "Lazy Killer",
    demoDescription:
      "Lazy Killer is a multi-player murder mystery game that utilizes encryption to conceal the murderer until a certain block height is met.",
    demoLink: "https://lazykiller.fairblock.network/",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/lazykiller.mp4",
  },
  {
    demoId: "time-capsule",
    demoName: "Time Capsule",
    demoDescription:
      "Our Time Capsule allows users to grasp the power of encryption tangibly.",
    demoLink: "https://capsule.fairblock.network/",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/time-capsule.mp4",
  },
  {
    demoId: "time-bomb",
    demoName: "Onchain Time Bomb",
    demoDescription:
      "Our Time Bomb game allows users to grasp the power of encryption tangibly. Over 10,000 bombs have exploded since our testnet launch.",
    demoLink: "https://bomb.fairblock.network/",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/bomb-transfer.mp4",
  },
  {
    demoId: "randomness",
    demoName: "Verifiable Randomness",
    demoDescription:
      "Verifiable randomness is generated with FairyRing and unlocks a new generation of gaming, defi, distribution, and auction-based apps across chains.",
    demoLink: "https://website-0xfairblock.vercel.app/applications/randomness",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/random-graphics.mp4",
  },
  {
    demoId: "private-gov",
    demoName: "Private Governance",
    demoDescription:
      "Our private governance module allows EVM and Cosmos users to encrypt their votes in any onchain poll to produce credibly neutral results.",
    demoLink: "https://governance.fairblock.network/",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/Private_Governance.mp4",
  },
  {
    demoId: "FairEx",
    demoName: "FairEx",
    demoDescription:
      "FairEx allows Arbitrum users to encrypt swaps and protect the contents of their orders from being leaked prior to execution.",
    demoLink: "https://dex.fairblock.network/swap",
    demoVideoUrl:
      "https://website-0xfairblock.vercel.app/applications/uniswap-dex-v2.mp4",
  },
];

const Demos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* SECTION 1 */}
      <div className="bg-[#CEEDFF] mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 py-8 lg:py-12 text-black">
        <div className="mx-auto lg:max-w-screen-lg">
          <h2 className="font-marlide min-h-[3.5rem] md-5 xl:mb-10 text-4xl lg:text-5xl">
            Our Applications
          </h2>
          <div>
            <p>
              Fairblock’s Dynamic Confidential Computing unlocks a new wave of
              blockchain applications by bringing credibility and efficiency to
              decentralized applications.
            </p>
            <p>
              Our long-term goal is to develop a robust ecosystem centered
              around Credible DeFi, Confidential AI, and hidden-information
              GameFi. We are particularly excited to collaborate with partners
              and focus internally on our flagship confidential apps (cApps)
              such as:
            </p>

            {/* Bullet points container */}
            <div className="my-12">
              <img
                className="mx-auto sm:w-2/3 xl:w-1/2"
                src={TOP_BORDER_1}
                alt="top-border"
              />
              <div className="border-l border-r border-black p-4 xl:p-8 mx-auto sm:w-2/3 xl:w-1/2">
                <h2 className="font-marlide min-h-[3.5rem] mb-5 xl:mb-10 text-4xl lg:text-5xl text-center">
                  cApps
                </h2>
                <ul className="flex flex-col gap-8">
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Fairblock's leaderless and rapid auctions for fair and
                    dynamic price discovery in generalized intents, simple token
                    launches, lending markets, and RWA/NFT sales
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Unstoppable and unruggable AI models through MPC and TEEs
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Confidential but fully compliant transfers through MPC and
                    ZK
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Private data monetization for AI models through MPC
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Confidential lending and clearing markets
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Hidden-information GameFi such as mystery boxes, parimutuel
                    predictions, prize pools
                  </li>
                </ul>
              </div>
              <img
                className="mx-auto sm:w-2/3 xl:w-1/2"
                src={BOTTOM_BORDER_1}
                alt="bottom-border"
              />
            </div>
            <p>
              Below is a showcase of our early functional applications,
              highlighting the variety and performance of use cases of our
              confidential computing.
            </p>
            <p>
              For a full list of ideas and instructions check out our{" "}
              <a
                href="http://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Builders Program.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 py-8 lg:py-12">
        <div className="mx-auto lg:max-w-screen-lg">
          {DEMOS_DATA.map((item, index) => (
            <DemosContent
              index={index}
              demoId={item.demoId}
              demoName={item.demoName}
              demoDescription={item.demoDescription}
              demoLink={item.demoLink}
              demoVideoUrl={item.demoVideoUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Demos;

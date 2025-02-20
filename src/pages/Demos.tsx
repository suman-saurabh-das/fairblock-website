import {useEffect} from "react";
import DemosContent from "./DemosContent";

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
    demoDescription: "Lazy Killer is a multi-player murder mystery game that utilizes encryption to conceal the murderer until a certain block height is met.",
    demoLink: "https://lazykiller.fairblock.network/",
    demoVideoUrl: "https://website-0xfairblock.vercel.app/applications/lazykiller.mp4",
  },
  {
    demoId: "time-capsule",
    demoName: "Time Capsule",
    demoDescription: "Our Time Capsule allows users to grasp the power of encryption tangibly.",
    demoLink: "https://capsule.fairblock.network/",
    demoVideoUrl: "https://website-0xfairblock.vercel.app/applications/time-capsule.mp4",
  },
  {
    demoId: "time-bomb",
    demoName: "Onchain Time Bomb",
    demoDescription: "Our Time Bomb game allows users to grasp the power of encryption tangibly. Over 10,000 bombs have exploded since our testnet launch.",
    demoLink: "https://bomb.fairblock.network/",
    demoVideoUrl: "https://website-0xfairblock.vercel.app/applications/bomb-transfer.mp4",
  },
  {
    demoId: "randomness",
    demoName: "Verifiable Randomness",
    demoDescription: "Verifiable randomness is generated with FairyRing and unlocks a new generation of gaming, defi, distribution, and auction-based apps across chains.",
    demoLink: "https://website-0xfairblock.vercel.app/applications/randomness",
    demoVideoUrl: "https://website-0xfairblock.vercel.app/applications/random-graphics.mp4",
  },
  {
    demoId: "private-gov",
    demoName: "Private Governance",
    demoDescription: "Our private governance module allows EVM and Cosmos users to encrypt their votes in any onchain poll to produce credibly neutral results.",
    demoLink: "https://governance.fairblock.network/",
    demoVideoUrl: "https://website-0xfairblock.vercel.app/applications/Private_Governance.mp4",
  },
  {
    demoId: "FairEx",
    demoName: "FairEx",
    demoDescription: "FairEx allows Arbitrum users to encrypt swaps and protect the contents of their orders from being leaked prior to execution.",
    demoLink: "https://dex.fairblock.network/swap",
    demoVideoUrl: "https://website-0xfairblock.vercel.app/applications/uniswap-dex-v2.mp4",
  },
];

const Demos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 py-8 lg:py-12">
      {/* SECTION 1 */}
      <div className="mx-auto lg:max-w-screen-lg">
        <h2 className="font-marlide min-h-[3.5rem] mb-10 text-4xl lg:text-5xl">Our Ecosystem</h2>
        <p>
          These applications showcase the variety of use cases for encryption
          onchain across DeFi, gaming, randomness, and governance. For a full
          list of application categories and ideas that can be built with
          encryption, check out our{" "}
          <a
            href="http://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1"
            target="_blank"
            rel="noopener noreferrer"
          >
            RFP List.
          </a>
        </p>
      </div>

      {/* SECTION 2 */}
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
  );
};
export default Demos;

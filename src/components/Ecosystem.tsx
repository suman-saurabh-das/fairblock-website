import Slider from "./Slider";

const ecosystemsArray = [
  {
    name: "Arbitrum",
    imageUrl: "src/assets/images/ecosystem/arbitrum.svg",
    link: "https://arbitrum.io/",
  },
  {
    name: "OP Stack",
    imageUrl: "src/assets/images/ecosystem/opstack.svg",
    link: "https://optimism.io/",
  },
  {
    name: "Polygon",
    imageUrl: "src/assets/images/ecosystem/polygon.png",
    link: "https://polygon.technology/",
  },
  {
    name: "Polymer",
    imageUrl: "src/assets/images/ecosystem/polymer.png",
    link: "https://www.polymerlabs.org/",
  },
  {
    name: "Rollkit",
    imageUrl: "src/assets/images/ecosystem/rollkit.svg",
    link: "https://rollkit.dev/",
  },
  {
    name: "Celestia",
    imageUrl: "src/assets/images/ecosystem/celestia.png",
    link: "https://celestia.org/",
  },
  {
    name: "Xai",
    imageUrl: "src/assets/images/ecosystem/xai.png",
    link: "https://xai.games/",
  },
  {
    name: "Ritual",
    imageUrl: "src/assets/images/ecosystem/ritual.svg",
    link: "https://ritual.net/",
  },
  {
    name: "Cosmos Hub",
    imageUrl: "src/assets/images/ecosystem/cosmoshub.svg",
    link: "https://cosmos.network/",
  },
  {
    name: "Stargaze",
    imageUrl: "src/assets/images/ecosystem/stargaze.png",
    link: "https://www.stargaze.zone/",
  },
  {
    name: "Ethereum",
    imageUrl: "src/assets/images/ecosystem/ethereum.svg",
    link: "",
  },
  {
    name: "CoW Swap",
    imageUrl: "src/assets/images/ecosystem/cowswap.png",
    link: "https://swap.cow.fi/",
  },
  {
    name: "Monad",
    imageUrl: "src/assets/images/ecosystem/monad.png",
    link: "https://www.monad.xyz/",
  },
  {
    name: "Fluent",
    imageUrl: "src/assets/images/ecosystem/fluent.png",
    link: "https://fluent.xyz/",
  },
];

const Ecosystem = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">Ecosystem</h2>
      <Slider
        imageWithLinks={ecosystemsArray}
        width={140}
        height={170}
        quantity={ecosystemsArray.length}
      />
    </div>
  );
};
export default Ecosystem;

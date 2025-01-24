import Slider from "./Slider";

const cardsArray = [
  {
    name: "Accessible",
    imageUrl: "/src/assets/images/Accessible.png",
    description: "Confidentiality is always one click away.",
  },
  {
    name: "Expansive",
    imageUrl: "/src/assets/images/Compliant.png",
    description: "Unlocking impactful DeFi and Al apps.",
  },
  {
    name: "Composable",
    imageUrl: "/src/assets/images/Composable.png",
    description: "Pluggable confidential logic into any application.",
  },
  {
    name: "Dynamic",
    imageUrl: "/src/assets/images/Expansive.png",
    description: "Fine-tuned performance and security for each application.",
  },
  {
    name: "Compliant",
    imageUrl: "/src/assets/images/Multimodal.png",
    description: "Zero compliance risks with post-transaction accountability.",
  },
];

const SlidingCards = () => {
  return (
      <div className="px-6 py-12 md:py-20">
        <div className="max-w-screen-xl mx-auto">
          <Slider
            cards={cardsArray}
            width={300}
            height={410}
            quantity={cardsArray.length}
          />
      </div>
    </div>
  );
};
export default SlidingCards;

import Hero from "./Hero";
import About from "./About";
import Slider from "./Slider";
import HowItWorks from "./HowItWorks";
import Developers from "./Developers";

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

const Main = () => {
  return (
    <div className="flex flex-col gap-36 max-w-screen-xl mx-auto">
      <Hero />
      <About />
      <Slider
        cards={cardsArray}
        width={300}
        height={410}
        quantity={cardsArray.length}
      />
      <HowItWorks />
      <Developers />
    </div>
  );
};

export default Main;

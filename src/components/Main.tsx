import Hero from "./Hero";
import About from "./About";
import Slider from "./Slider";

// const ImageArray = [
//   "/src/assets/images/Accessible.png",
//   "/src/assets/images/Compliant.png",
//   "/src/assets/images/Composable.png",
//   "/src/assets/images/Expansive.png",
//   "/src/assets/images/Multimodal.png",
// ];

const CardArray = [
  {
    header: "Accessible",
    imageUrl: "/src/assets/images/Accessible.png",
    description: "Confidentiality is always one click away."
  },
  {
    header: "Expansive",
    imageUrl: "/src/assets/images/Compliant.png",
    description: "Unlocking impactful DeFi and Al apps."
  },
  {
    header: "Composable",
    imageUrl: "/src/assets/images/Composable.png",
    description: "Pluggable confidential logic into any application."
  },
  {
    header: "Dynamic",
    imageUrl: "/src/assets/images/Expansive.png",
    description: "Fine-tuned performance and security for each application."
  },
  {
    header: "Compliant",
    imageUrl: "/src/assets/images/Multimodal.png",
    description: "Zero compliance risks with post-transaction accountability."
  },
]

const Main = () => {
  return (
    <div className="flex flex-col gap-20 max-w-screen-xl mx-auto">
      <Hero />
      <About />
      <Slider cards={CardArray} width={300} height={410} quantity={CardArray.length} />
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default Main;

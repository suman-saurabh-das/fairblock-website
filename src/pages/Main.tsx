import { useEffect } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import SlidingCards from "../components/SlidingCards";
import HowItWorks from "../components/HowItWorks";
import Developers from "../components/Developers";
import Ecosystem from "../components/Ecosystem";
import Backers from "../components/Backers";
import News from "../components/News";

const Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <SlidingCards />
      <HowItWorks />
      <Backers />
      <Ecosystem />
      <Developers />
      <News />
    </div>
  );
};

export default Main;

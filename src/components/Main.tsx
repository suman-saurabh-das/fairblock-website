import { useEffect } from "react";
import About from "./About";
import Hero from "./Hero";
import SlidingCards from "./SlidingCards";
import HowItWorks from "./HowItWorks";
import Developers from "./Developers";
import Ecosystem from "./Ecosystem";
import Backers from "./Backers";
import News from "./News";

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

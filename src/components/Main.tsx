import About from "./About";
import Hero from "./Hero";
import SlidingCards from "./SlidingCards";
import HowItWorks from "./HowItWorks";
import Developers from "./Developers";
import Ecosystem from "./Ecosystem";
import Backers from "./Backers";
import News from "./News";
import Footer from "./Footer";

const Main = () => {
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
      <Footer />
    </div>
  );
};

export default Main;

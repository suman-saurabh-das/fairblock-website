import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "../src/assets/fonts/fonts.css";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // useEffect() to set root element background color.
  useEffect(() => {
    darkMode
      ? document.documentElement.style.setProperty("--background-color", "#222")
      : document.documentElement.style.setProperty(
          "--background-color",
          "#FEFBEA"
        );
  }, [darkMode]);

  return (
    <div
      className={`App-wrapper font-eb_garamond text-lg md:text-xl max-w-screen-2xl mx-auto ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="App text-black dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="px-6 sm:px-8 lg:px-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

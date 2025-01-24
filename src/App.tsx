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
      className={`App-wrapper font-eb_garamond md:text-lg ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="App text-black dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

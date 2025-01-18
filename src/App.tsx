import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // useEffect() to set root element background color.
  useEffect(() => {
    darkMode
      ? document.documentElement.style.setProperty("--background-color", "#222")
      : document.documentElement.style.setProperty(
          "--background-color",
          "#fff"
        );
  }, [darkMode]);

  return (
    <div
      className={`App-wrapper font-marlide text-base sm:text-lg max-w-screen-2xl mx-auto ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="App text-black dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

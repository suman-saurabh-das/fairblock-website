import { useState, useEffect } from "react";
import "./App.css";

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
      className={`App-wrapper text-sm sm:text-base max-w-screen-2xl mx-auto ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="App text-black dark:text-white">
        <h1 className="font-marlide font-semibold mt-12 text-center text-3xl">
          Fairblock Website
        </h1>
        <div className="flex justify-center mt-8">
          <button
            className="border px-3 py-1 rounded-xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

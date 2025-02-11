import { useState, useEffect, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // useEffect() to set root element background color.
  useEffect(() => {
    darkMode
      ? document.documentElement.style.setProperty("--background-color", "#111")
      : document.documentElement.style.setProperty(
          "--background-color",
          "white"
        );
  }, [darkMode]);

  return (
    <div
      className={`App-wrapper font-eb_garamond text-lg md:text-xl ${
        darkMode ? "dark" : ""
      }`}
    >
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="App text-black dark:text-white">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

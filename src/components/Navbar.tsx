import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiSun, GiMoon } from "react-icons/gi";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { LogoSvg } from "../assets/svg/LogoSvg";
import ScrambleText from "./ScrambleText";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarOptions = [
  {
    type: "link",
    label: "Applications",
    to: "/applications",
  },
  {
    type: "link",
    label: "Articles",
    to: "/articles",
  },
  {
    type: "link",
    label: "Careers",
    to: "/careers",
  },
  {
    type: "anchor",
    label: "Docs",
    href: "https://docs.fairblock.network/",
  },
  {
    type: "link",
    label: "How it works",
    to: "/how-it-works",
  },
  {
    type: "anchor",
    label: "News",
    href: "https://news.fairblock.network/",
  },
];

const Navbar = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  // Disable scroll when navbar is open
  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Enable scroll
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on component unmount
    };
  }, [isNavbarOpen]);

  return (
    <div className="bg-[#FEFBEA] dark:bg-[#242424] flex items-center justify-between px-4 md:px-8 lg:px-20 py-4 sticky top-0 shadow-sm z-10">
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between w-full md:w-fit">
        <Link to={"/"} className="flex gap-3 items-center">
          <LogoSvg className="dark:fill-white h-10 w-10 lg:h-12 lg:w-12" />
          <h3 className="font-light font-marlide text-3xl lg:text-4xl">
            Fairblock
          </h3>
        </Link>

        <div className="flex gap-2">
          <button
            aria-label="Open menu"
            className="md:hidden text-3xl"
            onClick={() => setIsNavbarOpen(true)}
          >
            <IoMenu />
          </button>

          <button
            className="duration-300 md:hidden px-1 hover:scale-105 text-3xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <GiSun /> : <GiMoon />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isNavbarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsNavbarOpen(false)}
        ></div>
      )}

      {/* Side Navbar */}
      <div
        className={`bg-[#FEFBEA] dark:bg-[#242424] fixed top-0 right-0 z-20 h-full w-3/4 md:w-auto transform transition-transform duration-300 md:static md:translate-x-0 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col md:flex-row items-start md:items-center gap-3 p-4 md:p-0">
          {/* Close button for small screens */}
          <button
            aria-label="Close menu"
            className="md:hidden self-end mb-4 text-4xl"
            onClick={() => setIsNavbarOpen(false)}
          >
            <IoCloseCircleOutline />
          </button>

          <div className="fonts flex flex-col md:flex-row gap-6 md:gap-3 w-full text-lg">
            {NavbarOptions.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    className="bg-yellow-100 dark:bg-[#1D1D1D] md:bg-transparent dark:md:bg-transparent px-6 md:px-2 py-2 rounded-xl hover:underline underline-offset-8"
                    key={index}
                    to={item.to ? item.to : "/"}
                  >
                    <ScrambleText text={item.label} speed={75} scrambleOnHover={true} />
                  </Link>
                );
              } else if (item.type === "anchor") {
                return (
                  <a
                    className="bg-yellow-100 dark:bg-[#1D1D1D] md:bg-transparent dark:md:bg-transparent px-6 md:px-2 py-2 rounded-xl hover:underline underline-offset-8"
                    key={index}
                    href={item.href}
                    rel="noopener noreferrer"
                  >
                    <ScrambleText text={item.label} speed={75} scrambleOnHover={true} />
                  </a>
                );
              }
            })}
          </div>

          <button
            className="hover:animate-pulse duration-300 hidden md:block px-1 hover:scale-110 text-3xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <GiSun /> : <GiMoon />}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

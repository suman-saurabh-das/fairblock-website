import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { GiSuperMushroom } from "react-icons/gi";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { FairblockLogo } from "../assets/svg/FairblockLogo";

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
    <div className="bg-white dark:bg-[#242424] flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 sticky top-0 shadow-xl z-10">
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between w-full sm:w-fit">
        <Link to={"/"} className="flex gap-2 items-center">
          <FairblockLogo className="dark:fill-white h-10 w-10 lg:h-14 lg:w-14" />
          <h4 className="font-semibold text-3xl lg:text-4xl">Fairblock</h4>
        </Link>
        <button
          aria-label="Open menu"
          className="sm:hidden text-3xl"
          onClick={() => setIsNavbarOpen(true)}
        >
          <IoMenu />
        </button>
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
        className={`bg-white dark:bg-[#242424] fixed top-0 right-0 z-20 h-full w-3/4 sm:w-auto transform transition-transform duration-300 sm:static sm:translate-x-0 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-0">
          {/* Close button for small screens */}
          <button
            aria-label="Close menu"
            className="sm:hidden self-end mb-4 text-4xl"
            onClick={() => setIsNavbarOpen(false)}
          >
            <IoCloseCircleOutline />
          </button>

          <div className="flex flex-col sm:flex-row gap-4">
          {NavbarOptions.map((item, index) => {
            if (item.type === "link") {
              return (
                <Link key={index} to={item.to ? item.to : "/"}>
                  {item.label}
                </Link>
              );
            } else if (item.type === "anchor") {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              );
            }
          })}
          </div>

          <button
            className="border px-3 py-1 rounded-xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

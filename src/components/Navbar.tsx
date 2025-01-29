import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoSvg } from "../assets/svg/LogoSvg";
import { BsNewspaper } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { GrWorkshop, GrArticle } from "react-icons/gr";
import { RiTwitterXFill, RiDiscordLine } from "react-icons/ri";
import { IoMenu, IoCloseCircleOutline } from "react-icons/io5";
import { SlDocs } from "react-icons/sl";
import { TbApps } from "react-icons/tb";
import { useTheme } from "../App";
import ScrambleText from "./ScrambleText";

const NAV_OPTIONS = [
  {
    type: "anchor",
    label: "How it works",
    logo: <GrWorkshop className="md:hidden text-2xl" />,
    href: "https://www.old.fairblock.network/how-it-works",
  },
  {
    type: "anchor",
    label: "Docs",
    logo: <SlDocs className="md:hidden text-2xl" />,
    href: "https://docs.fairblock.network/docs/welcome/welcome_to_fairblock",
  },
  {
    type: "anchor",
    label: "Articles",
    logo: <GrArticle className="md:hidden text-2xl" />,
    href: "https://www.old.fairblock.network/articles",
  },
  {
    type: "anchor",
    label: "Demos",
    logo: <TbApps className="md:hidden text-2xl" />,
    href: "https://www.old.fairblock.network/applications",
  },
  {
    type: "anchor",
    label: "News",
    logo: <BsNewspaper className="md:hidden text-2xl" />,
    href: "https://news.fairblock.network/",
  },
  {
    type: "anchor",
    label: "Discord",
    hideLabelDesktop: true,
    logo: <RiDiscordLine className="text-2xl" />,
    href: "https://discord.com/invite/jhNBCCAMPK",
    openInNewTab: true,
  },
  {
    type: "anchor",
    label: "Twitter",
    hideLabelDesktop: true,
    logo: <RiTwitterXFill className="text-2xl" />,
    href: "https://x.com/0xfairblock",
    openInNewTab: true,
  },
  // {
  //   type: "link",
  //   label: "Careers",
  //   logo: "",
  //   to: "/careers",
  // },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const { darkMode, setDarkMode } = useTheme();

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
    <div className="bg-[white] dark:bg-[black] flex items-center justify-between px-4 md:px-8 lg:px-12 py-6 mx-auto max-w-screen-2xl sticky top-0 shadow-sm z-10">
      {/* APP LOGO & HEADER */}
      <div className="flex items-center justify-between w-full md:w-fit">
        <Link to={"/"} className="flex gap-3 items-center">
          <LogoSvg className="dark:fill-white h-10 w-10 lg:h-12 lg:w-12" />
          <h3 className="font-light font-marlide text-4xl lg:text-5xl">
            Fairblock
          </h3>
        </Link>

        {/* OPEN SIDE NAV - VISIBLE ONLY ON MOBILE DEVICES */}
        <div className="flex gap-2">
          <button
            aria-label="Open menu"
            className="md:hidden text-3xl"
            onClick={() => setIsNavbarOpen(true)}
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* OVERLAY FOR SIDE NAV */}
      {isNavbarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsNavbarOpen(false)}
        ></div>
      )}

      {/* SIDE NAV */}
      <div
        className={`bg-[white] dark:bg-[black] fixed top-0 right-0 z-20 h-full w-3/4 md:w-auto transform transition-transform duration-300 md:static md:translate-x-0 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-0">
          {/* CLOSE SIDE NAV - VISIBLE ONLY ON MOBILE DEVICES */}
          <button
            aria-label="Close menu"
            className="md:hidden self-end mb-4 text-4xl"
            onClick={() => setIsNavbarOpen(false)}
          >
            <IoCloseCircleOutline />
          </button>

          {/* NAV LINKS */}
          <div className="font-marlide flex flex-col md:flex-row gap-6 md:gap-1 text-xl w-full">
            {NAV_OPTIONS.map((item, index) => (
              <a
                className="flex items-center gap-4 md:gap-0 px-6 md:px-2 py-2 rounded-xl"
                key={index}
                href={item.href}
                target={item.openInNewTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <span>{item.logo}</span>
                <span className={`${item.hideLabelDesktop && "md:hidden"}`}>
                  <ScrambleText
                    text={item.label}
                    speed={100}
                    scrambleOnHover={true}
                  />
                </span>
              </a>
            ))}

            {/* DARK / LIGHT MODE */}
            <button className="mr-2" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <span className="flex items-center px-6 md:px-2 py-2 hover:animate-pulse">
                  <FiSun className="text-2xl" />
                  <span className="block ml-4 md:hidden">Light</span>
                </span>
              ) : (
                <span className="flex items-center px-6 md:px-2 py-2 hover:animate-pulse">
                  <FiMoon className="text-2xl" />
                  <span className="block ml-4 md:hidden">Dark</span>
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

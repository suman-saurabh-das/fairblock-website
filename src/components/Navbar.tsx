import { Link } from "react-router-dom";
import { FairblockLogo } from "../assets/svg/FairblockLogo";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex gap-2 items-center">
        <FairblockLogo className="dark:fill-white" height={42} width={42} />
        <h4 className="font-semibold text-3xl">Fairblock</h4>
      </Link>
      <div>
        <nav className="flex gap-4">
          <Link to={"/applications"}>Applications</Link>
          <Link to={"/articles"}>Articles</Link>
        </nav>
      </div>
      <button
        className="border px-3 py-1 rounded-xl"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark
      </button>
    </div>
  );
};
export default Navbar;

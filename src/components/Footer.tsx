import { LogoSvg } from "../assets/svg/LogoSvg";

const Footer = () => {
  return (
    <div className="px-6 pt-6 md:pt-12 pb-10">
      <div className="flex flex-col sm:flex-row gap-12 justify-between items-start mx-auto max-w-screen-xl">
        <div className="flex flex-wrap gap-8 items-start justify-between w-3/4 md:w-2/4 lg:w-1/3">
          <div>
            <h4 className="font-semibold">Connect</h4>
            <ul className="text-base">
              <li>Discord</li>
              <li>Mail</li>
              <li>X (Twitter)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="text-base">
              <li>Docs</li>
              <li>Github</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">For developers</h4>
            <ul className="text-base">
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <div className="flex gap-3 items-center">
            <LogoSvg className="dark:fill-white h-10 w-10 lg:h-14 lg:w-14" />
            <h3 className="font-light font-marlide text-4xl lg:text-5xl">
              Fairblock
            </h3>
          </div>
          <div>
            <ul className="text-base">
              <li>© 2025 Fairblock. All rights reserved.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

import { LogoSvg } from "../assets/svg/LogoSvg";
import ScrambleText from "./ScrambleText";

type FooterLinks = {
  linkLabel: string;
  href: string;
  openInNewTab?: boolean;
};

type FooterProps = {
  mainLabel: string;
  links: FooterLinks[];
};

const FOOTER_LINKS_COLUMN_1 = {
  mainLabel: "Connect",
  links: [
    {
      linkLabel: "Discord",
      href: "https://discord.com/invite/jhNBCCAMPK",
      openInNewTab: true,
    },
    {
      linkLabel: "Mail",
      href: "mailto:hello@fairblock.network",
    },
    {
      linkLabel: "X (Twitter)",
      href: "https://x.com/0xfairblock",
      openInNewTab: true,
    },
  ],
};

const FOOTER_LINKS_COLUMN_2 = {
  mainLabel: "Resources",
  links: [
    {
      linkLabel: "Docs",
      href: "https://docs.fairblock.network/docs/welcome/welcome_to_fairblock",
    },
    {
      linkLabel: "Github",
      href: "https://github.com/Fairblock",
      openInNewTab: true,
    },
    {
      linkLabel: "News",
      href: "https://news.fairblock.network/",
    },
  ],
};

const FOOTER_LINKS_COLUMN_3 = {
  mainLabel: "For developers",
  links: [
    {
      linkLabel: "Careers",
      href: "https://website-0xfairblock.vercel.app/careers",
    },
  ],
};

const FooterLinks = ({ mainLabel, links }: FooterProps) => {
  return (
    <div className="flex flex-col overflow-clip w-28">
      <span className="font-medium">{mainLabel}</span>
      {links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.openInNewTab ? "_blank" : "_self"}
        >
          <ScrambleText
            text={item.linkLabel}
            speed={75}
            scrambleOnHover={true}
          />
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#58BDF6] dark:bg-black font-marlide flex flex-col sm:flex-row gap-12 items-start justify-between px-4 md:px-8 lg:px-12 pt-6 md:pt-12 pb-10 text-xl mx-auto max-w-screen-2xl">
        <div className="flex flex-wrap gap-8 items-start justify-between w-3/4 md:w-2/4 lg:w-1/3">
          <FooterLinks
            mainLabel={FOOTER_LINKS_COLUMN_1.mainLabel}
            links={FOOTER_LINKS_COLUMN_1.links}
          />
          <FooterLinks
            mainLabel={FOOTER_LINKS_COLUMN_2.mainLabel}
            links={FOOTER_LINKS_COLUMN_2.links}
          />
          <FooterLinks
            mainLabel={FOOTER_LINKS_COLUMN_3.mainLabel}
            links={FOOTER_LINKS_COLUMN_3.links}
          />
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div className="flex gap-3 items-center">
            <LogoSvg className="dark:fill-white h-10 w-10 lg:h-14 lg:w-14" />
            <h3 className="font-light font-marlide text-4xl lg:text-5xl">
              Fairblock
            </h3>
          </div>
          <div>
            <span>© 2025 Fairblock. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

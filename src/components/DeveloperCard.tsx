import { GoArrowUpRight } from "react-icons/go";

type DeveloperCardProps = {
  imageUrl: string;
  imageText: string;
  header: string;
  description: string;
  url: string;
};

const DeveloperCard = ({
  imageUrl,
  imageText,
  header,
  description,
  url,
}: DeveloperCardProps) => {
  return (
    <a href={url} className="border border-black dark:border-white duration-300 p-4 rounded-2xl hover:scale-[1.03]">
      <div className="p-2 mb-4">
        <img className="mx-auto max-w-56 sm:max-w-full" src={imageUrl} alt={imageText} />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-marlide text-3xl">{header}</h4>
          <GoArrowUpRight className="mr-2" />
        </div>
        <p className="mb-2 text-base">{description}</p>
      </div>
    </a>
  );
};

export default DeveloperCard;

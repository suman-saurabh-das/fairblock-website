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
    <a href={url} className="border border-black/50 dark:border-white/50 duration-300 p-4 rounded-2xl hover:scale-[1.03] shadow-md shadow-black/20 dark:shadow-black">
      <div className="p-2 mb-4 mx-auto">
        <img className="max-w-full" src={imageUrl} alt={imageText} />
      </div>
      <div className="mx-2">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-marlide text-3xl">{header}</h4>
          <GoArrowUpRight />
        </div>
        <p className="mb-2 text-base">{description}
        </p>
      </div>
    </a>
  );
};

export default DeveloperCard;

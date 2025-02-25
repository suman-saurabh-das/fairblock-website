import { LuExternalLink } from "react-icons/lu";

type NewsCardProps = {
  imageUrl: string;
  newsHeader: string;
  newsBody: string;
  newsLink: string;
  site: string;
  type?: string;
};

const NewsCard = ({
  imageUrl,
  newsHeader,
  newsBody,
  newsLink,
  site,
}: NewsCardProps) => {
  return (
    <div className="border border-black/50 dark:border-white/50 bg-white dark:bg-transparent duration-300 p-4 rounded-2xl hover:scale-[1.03] shadow-md shadow-black/20 dark:shadow-black">
      <a href={newsLink} target="_blank">
        <div className="mb-4">
          <img
            className="h-40 object-cover rounded-xl w-full"
            src={imageUrl}
            alt={newsHeader}
          />
        </div>
        <div className="text-base">
          <h4 className="font-semibold py-2">{newsHeader}</h4>
          <p className="py-2">{newsBody}</p>
          <p className="flex font-semibold items-center gap-2 py-2 text-neutral-600 dark:text-neutral-400">
            <span>{site}</span> <LuExternalLink />
          </p>
        </div>
      </a>
    </div>
  );
};
export default NewsCard;

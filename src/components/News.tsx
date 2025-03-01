import NewsCard from "./NewsCards";
import { NEWS_CARDS_ARRAY } from "../utils/constants";

const News = () => {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto">
        {/* NEWS HEADER & SUB HEADER */}
        <h2 className="font-marlide font-normal mb-2 text-4xl md:text-5xl">
          News
        </h2>
        <p className="font-semibold mb-4 md:mb-6 text-neutral-600 dark:text-neutral-400">
          from the Fairblock ecosystem
        </p>

        {/* NEWS CARDS CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {NEWS_CARDS_ARRAY.map((item, index) => (
            <NewsCard
              key={index}
              imageUrl={item.imageUrl}
              newsHeader={item.newsHeader}
              newsBody={item.newsBody}
              newsLink={item.newsLink}
              site={item.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;

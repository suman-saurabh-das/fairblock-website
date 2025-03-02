import { useEffect } from "react";
import NewsCard from "../components/NewsCards";
import { ARTICLE_CARDS_ARRAY, NEWS_CARDS_ARRAY_2 } from "../utils/constants";
import { TWEETS_ARRAY } from "./Tweets";

// Code for twitter widgets to load
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const Articles = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Code for twitter widgets to load
  useEffect(() => {
    // Ensure Twitter script is loaded
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Apply Twitter styles after script loads
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };
  }, []);

  return (
    <div className="bg-[#CEEDFF] dark:bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 lg:py-12">
        {/* SECTION 01 - ARTICLES & RESEARCH */}
        <h2 className="font-marlide text-4xl lg:text-5xl text-center mb-8 xl:mb-12">
          Articles & Research
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ARTICLE_CARDS_ARRAY.map((item, index) => (
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

        {/* SECTION 02 - NEWS */}
        <h2 className="font-marlide text-4xl lg:text-5xl text-center my-8 xl:my-12">
          News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {NEWS_CARDS_ARRAY_2.map((item, index) => (
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

        {/* SECTION 03 - TWEETS */}
        <h2 className="font-marlide text-4xl lg:text-5xl text-center my-8 xl:my-12">
          Tweets
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
          {TWEETS_ARRAY.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Articles;

import DeveloperCard from "./DeveloperCard";
import { DEVELOPERS_ARRAY } from "../utils/constants";

const Developers = () => {
  return (
    <div className="px-6 py-12 md:py-20">
      <div className="mx-auto md:max-w-screen-lg">
        <h2 className="font-marlide font-normal mb-8 md:mb-12 text-4xl md:text-5xl">
          Start Building
        </h2>
        <div className="flex flex-col sm:flex-row gap-8">
          {DEVELOPERS_ARRAY.map((item, index) => (
            <DeveloperCard
              key={index}
              imageUrl={item.imageUrl}
              imageText={item.imageText}
              header={item.header}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Developers;

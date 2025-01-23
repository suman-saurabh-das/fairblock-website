import DeveloperCard from "./DeveloperCard";

const developersArray = [
  {
    imageUrl: "src/assets/images/characters/Character-scroll-blue.png",
    imageText: "Character-scroll",
    header: "Read our Docs",
    description:
      "Get started with fairy ring developer docs.",
    url: "https://docs.fairblock.network/",
  },
  {
    imageUrl: "src/assets/images/characters/Character-lock-blue.png",
    imageText: "Character-lock",
    header: "Build",
    description:
      "Build your Confidential App in 30 minutes.",
    url: "https://docs.fairblock.network/",
  },
  {
    imageUrl: "src/assets/images/characters/Character-lantern-blue.png",
    imageText: "Character-lantern",
    header: "Join Us",
    description:
      "Become a mushroom in the fairy ring.",
    url: "https://docs.fairblock.network/",
  }
];

const Developers = () => {
  return (
    <div className="md:max-w-screen-lg mx-auto">
      <h2 className="font-marlide font-normal mb-2 text-4xl md:text-5xl">
        Start Building
      </h2>
      <p className="mb-4 md:mb-6">on the liquidity network.</p>
      <div className="flex flex-col sm:flex-row gap-8 overflow-x-auto">
        {developersArray.map((item, index) => (
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
  );
};
export default Developers;

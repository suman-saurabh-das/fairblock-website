import DeveloperCard from "./DeveloperCard";

const DEVELOPERS_ARRAY = [
  {
    imageUrl: "https://i.imgur.com/pkhLpkt.png",
    imageText: "Character-scroll",
    header: "Wander the Woods",
    description: "Get started with fairy ring developer docs.",
    url: "https://docs.fairblock.network/docs/welcome/quickstart/",
  },
  {
    imageUrl: "https://i.imgur.com/vF9Vch5.png",
    imageText: "Character-key",
    header: "Build a cApp",
    description: "Build your Confidential App in 30 minutes.",
    url: "https://docs.fairblock.network/docs/welcome/quickstart/",
  },
  {
    imageUrl: "https://i.imgur.com/A2TocpT.png",
    imageText: "Character-lantern",
    header: "Join our FairyRing",
    description: "Become a mushroom in the fairy ring.",
    url: "https://discord.com/invite/jhNBCCAMPK",
  },
];

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

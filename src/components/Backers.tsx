const backersImageArray = [
  "Anagram",
  "Galileo",
  "Dialectic",
  "Lemniscap",
  "Robot Ventures",
  "Axelar",
  "Arbitrum",
  "GSR",
  "Chorus One",
  "Reverie",
];
const backersNameArray: string[] = [
  "Zaki Manian",
  "Waikit Lau",
  "Leland Lee",
  "Calvin Liu",
  "George Lambeth",
  "Xavier Meegan",
  "Stefan Coolican",
  "Richard Malone",
  "Collin Myers",
  "Batu",
];

const Backers = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center px-6 py-12 md:py-20">
      <div>
        <h2 className="font-marlide font-normal mb-12 text-4xl lg:text-5xl text-center">
          Backers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-between">
          {backersImageArray.map((item, index) => (
            <img
              key={index}
              className="invert max-w-36 w-full"
              src={`/src/assets/images/backers/${item}.png`}
              alt=""
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-marlide font-normal mb-12 text-4xl lg:text-5xl text-center">
          Angels
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center items-center justify-center">
          {backersNameArray.map((item, index) => (
            <span
              className="border border-black dark:border-white font-marlide font-normal px-4 py-1 rounded-xl md:text-lg"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backers;

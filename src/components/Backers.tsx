const backersArray: string[] = [
  "Anagram",
  "Robot",
  "Lemniscap",
  "Dialectic",
  "GSR",
  "Chorus One",
  "Dora Ventures",
  "Informal Systems",
  "Reverie",
];

const Backers = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-marlide font-normal mb-4 md:mb-12 text-4xl lg:text-5xl">
        Backers
      </h2>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {backersArray.map((item, index) => (
          <span className="border border-black dark:border-white font-marlide font-normal px-4 py-1 rounded-xl text-2xl" key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Backers;

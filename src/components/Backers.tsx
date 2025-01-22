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
      <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">
        Backers
      </h2>
      <div>
        {backersArray.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>
    </div>
  );
};

export default Backers;

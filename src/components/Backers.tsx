const BACKERS_IMAGE_ARRAY = [
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

const BACKERS_NAME_ARRAY: string[] = [
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
    <div className="flex items-center justify-center gap-8">
      {/* LEFT DECORATION IMAGE */}
      <img
        className="dark:invert hidden xl:block w-36 h-96"
        src="/src/assets/images/BorderSideLeft.png"
        alt="Left Decoration"
      />

      {/* BACKERS CONTAINER */}
      <div className="flex flex-col gap-12 justify-center items-center px-6 py-12 md:py-20">
        <h2 className="font-marlide font-normal text-4xl lg:text-5xl text-center">
          Backers
        </h2>
        {/* BACKERS IMAGE CONTAINER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-between">
          {BACKERS_IMAGE_ARRAY.map((item, index) => (
            <img
              key={index}
              className="invert dark:invert-0 max-w-36 w-full"
              src={`/src/assets/images/backers/${item}.png`}
              alt=""
            />
          ))}
        </div>

        {/* BACKERS IMAGE CONTAINER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center items-center justify-center">
          {BACKERS_NAME_ARRAY.map((item, index) => (
            <span
              className="font-marlide font-normal px-4 py-1 rounded-xl md:text-2xl"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT DECORATION IMAGE */}
      <img
        className="dark:invert hidden xl:block w-36 h-96"
        src="/src/assets/images/BorderSideRight.png"
        alt="Right Decoration"
      />
    </div>
  );
};

export default Backers;

type BackersImageObject = {
  label: string;
  imageUrl: string;
};

const BACKERS_IMAGE_ARRAY: BackersImageObject[] = [
  { label: "Anagram", imageUrl: "https://i.imgur.com/lhTub8m.png" },
  { label: "Galileo", imageUrl: "https://i.imgur.com/BphGtj2.png" },
  { label: "Dialectic", imageUrl: "https://i.imgur.com/lmgOyAQ.png" },
  { label: "Lemniscap", imageUrl: "https://i.imgur.com/H6P7VHU.png" },
  { label: "Robot Ventures", imageUrl: "https://i.imgur.com/gYcYU25.png" },
  { label: "Axelar", imageUrl: "https://i.imgur.com/PFl0MxE.png" },
  { label: "Arbitrum", imageUrl: "https://i.imgur.com/uDyUWnL.png" },
  { label: "GSR", imageUrl: "https://i.imgur.com/WP7dOmy.png" },
  { label: "Chorus One", imageUrl: "https://i.imgur.com/lmgOyAQ.png" },
  { label: "Reverie", imageUrl: "https://i.imgur.com/GfZ2Gnl.png" },
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
        loading="lazy"
        className="dark:invert hidden xl:block w-36 h-96"
        src="https://i.imgur.com/sP9sDFd.png"
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
              loading="lazy"
              key={index}
              className="invert dark:invert-0 max-w-36 w-full"
              src={item.imageUrl}
              alt={item.label}
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
        loading="lazy"
        className="dark:invert hidden xl:block w-36 h-96"
        src="https://i.imgur.com/KTuIIhK.png"
        alt="Right Decoration"
      />
    </div>
  );
};

export default Backers;

const Careers = () => {
  return (
    <div className="bg-[#CEEDFF] min-h-[100vh] px-4 md:px-8 lg:px-12 py-8 lg:py-12 text-black text-center mx-auto max-w-screen-2xl flex items-center justify-around">
      <div className="relative">
        <img
          className="hidden xl:block absolute -top-[100%] right-[110%] w-56 xl:w-64"
          src="/images/characters/scroll-blue.png"
          alt="Character with blue lantern"
        />
        <h2 className="font-marlide min-h-[3.5rem] md-5 xl:mb-10 text-4xl lg:text-5xl">
          Careers
        </h2>
        <p>We're always looking for talents; junior to senior.</p>
        <p>
          Just send your resume to{" "}
          <a
            className="text-blue-500 font-bold"
            href="mailto:hello@fairblock.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@fairblock.network
          </a>
        </p>
        <p>
          A short paragraph about your technical background and your interests
          helps a lot.
        </p>
        <img
          className="hidden scale-x-[-1] xl:block absolute top-[50%] left-[110%] w-56 xl:w-64"
          src="/images/characters/lantern-blue.png"
          alt="Character with blue scroll"
        />
      </div>
    </div>
  );
};
export default Careers;

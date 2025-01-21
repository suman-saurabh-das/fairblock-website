const Developers = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly gap-12 sm:gap-0 mx-auto max-w-screen-lg">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-start w-full sm:w-1/3">
        <h2 className="font-marlide font-normal mb-4 md:mb-6 text-4xl lg:text-5xl">
          Start Building
        </h2>
        <p className="my-4 md:my-6">
          Whether in an existing DeFi app on Arbitrum or a confidential
          inference app on FairyRing, developers leverage Fairblock to deliver
          the optimal confidentiality solutions for their needs.
        </p>
        <button className="border border-black dark:border-white bg-[#58BDF6] font-medium px-6 py-2 rounded-3xl text-black w-fit min-w-48">
          <a href={"https://docs.fairblock.network/"} target="_blank">
            Read our Docs
          </a>
        </button>
      </div>
      <div className="flex justify-center w-full sm:w-1/2 max-w-[540px]">
          <img
          className="max-w-[280px]"
            src="src\assets\images\Character-scroll-blue.png"
            alt="Character-scroll"
          />
        </div>
    </div>
  );
};
export default Developers;

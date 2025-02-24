import { GoLinkExternal } from "react-icons/go";

type DemosContentProps = {
  index: number;
  demoId: string;
  demoName: string;
  demoDescription: string;
  demoVideoUrl: string;
  demoLink: string;
};

const DemosContent = ({
  index,
  demoId,
  demoName,
  demoDescription,
  demoVideoUrl,
  demoLink,
}: DemosContentProps) => {
  return (
    <div className="my-4 md:my-28" id={demoId}>
      <h2 className="font-marlide min-h-[3.5rem] mb-4 md:mb-10 text-4xl lg:text-5xl text-center">
        {demoName}
      </h2>
      <div
        className={`flex ${
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        } flex-col gap-8 md:gap-16 items-center justify-between`}
      >
        <div
          className={`duration-500 ${
            index % 2 === 0 ? "md:rotateY-left" : "md:rotateY-right"
          } md:hover:rotateY-0 md:w-3/5`}
        >
          <video className="rounded-lg" preload="metadata" controls src={demoVideoUrl}></video> {}
        </div>
        <div className="md:w-2/5">
          <p className="mb-4">{demoDescription}</p>
          <a className="flex items-center gap-2" href={demoLink}>
            Visit App <GoLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};
export default DemosContent;

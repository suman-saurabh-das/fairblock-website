type FairblockLogoProps = {
  className?: string;
};

export const FairblockLogo = ({
  className = "fill-black",
}: FairblockLogoProps) => {
  
  return (
    <svg
      className={className}
      width={80}
      height={80}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.1688 0H0V19.9995V39.9991V59.9986H20.1688V39.9991V19.9995H40.3377V0H20.1688Z" />
      <path d="M60.5066 19.9995V39.9991V59.9986H40.3377V80H60.5066H80.6773V59.9986V39.9991V19.9995H60.5066Z" />
      <path d="M60.5065 39.9991C60.5065 39.9991 40.3377 39.7084 40.3377 19.9995C40.3377 39.7103 20.1688 39.9991 20.1688 39.9991C20.1688 39.9991 40.3377 40.2897 40.3377 59.9986C40.3377 40.2897 60.5065 39.9991 60.5065 39.9991Z" />
    </svg>
  );
};

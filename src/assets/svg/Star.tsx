type StarProps = {
  className?: string;
};

export const Star = ({ className = "fill-black" }: StarProps) => {
  return (
    <svg
      className={className}
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 13.0072C28 13.0072 14 12.8182 14 0C14 12.8182 0 13.0072 0 13.0072C0 13.0072 14 13.1963 14 26.0145C14 13.1963 28 13.0072 28 13.0072Z" />
    </svg>
  );
};

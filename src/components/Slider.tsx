import React from "react";
import "./Slider.css";
import { useTheme } from "../App";

type SliderCard = {
  name: string;
  imageUrlLight: string;
  imageUrlDark: string;
  description: string;
};

type SliderImageWithLink = {
  name: string;
  imageUrl: string;
  link: string;
  isBlack?: boolean;
};

type SliderProps = {
  images?: string[];
  imageWithLinks?: SliderImageWithLink[];
  cards?: SliderCard[];
  height?: number;
  width: number;
  quantity: number;
  reverse?: boolean;
};

const Slider: React.FC<SliderProps> = ({
  cards,
  imageWithLinks,
  width,
  height,
  quantity,
  reverse = false,
}) => {
  const { darkMode } = useTheme();

  return (
    <div
      className="slider relative overflow-hidden w-full"
      style={
        {
          "--width": `${width}px`,
          "--height": `${height}px`,
          "--quantity": `${quantity}`,
        } as React.CSSProperties
      }
      data-reverse={reverse}
    >
      <div className="list flex relative">
        {/* Render images with links when imageWithLinks array is passed as props */}
        {imageWithLinks &&
          imageWithLinks.map((item, index) => (
            <div
              key={index}
              className="item absolute hover:cursor-pointer"
              style={
                {
                  "--position": `${index + 1}`,
                } as React.CSSProperties
              }
            >
              <a href={item.link} target="_blank">
                <img
                  loading="lazy"
                  src={item.imageUrl}
                  alt={item.name}
                  className={`${
                    item.isBlack && "dark:invert"
                  } aspect-square object-contain p-2 md:p-4 w-full`}
                />
                <p className="text-base md:text-lg text-center">{item.name}</p>
              </a>
            </div>
          ))}

        {/* Render cards when cards array is passed as props */}
        {cards &&
          cards.map((item, index) => (
            <div
              key={index}
              className="item absolute hover:cursor-pointer"
              style={
                {
                  "--position": `${index + 1}`,
                } as React.CSSProperties
              }
            >
              <div className="border border-black/50 dark:border-white/50 flex flex-col gap-4 h-[99%] items-center justify-around px-6 py-4 rounded-2xl shadow-md shadow-black/20 dark:shadow-black text-center">
                <h4 className="font-marlide text-3xl sm:text-4xl">
                  {item.name}
                </h4>
                <img
                  loading="lazy"
                  src={darkMode ? item.imageUrlDark : item.imageUrlLight}
                  alt={`Slider ${index + 1}`}
                  className="w-full"
                />
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;

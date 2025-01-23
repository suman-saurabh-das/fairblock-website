import React from "react";
import "./Slider.css";

type SliderCard = {
  name: string;
  imageUrl: string;
  description: string;
};

type SliderImageWithLink = {
  name: string;
  imageUrl: string;
  link: string;
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
  images,
  imageWithLinks,
  width,
  height,
  quantity,
  reverse = false,
}) => {
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
        {/* Render images when images array is passed as props */}
        {images &&
          images.map((src, index) => (
            <div
              key={index}
              className="item absolute"
              style={
                {
                  "--position": `${index + 1}`,
                } as React.CSSProperties
              }
            >
              <img src={src} alt={`Slider ${index + 1}`} className="w-full" />
            </div>
          ))}

        {/* Render images with links when imageWithLinks array is passed as props */}
        {imageWithLinks &&
          imageWithLinks.map((item, index) => (
            <div
              key={index}
              className="item absolute"
              style={
                {
                  "--position": `${index + 1}`,
                } as React.CSSProperties
              }
            >
              <a href={item.link} target="_blank">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="aspect-square object-contain p-4 w-full"
                />
                <p className="text-center">{item.name}</p>
              </a>
            </div>
          ))}

        {/* Render cards when cards array is passed as props */}
        {cards &&
          cards.map((item, index) => (
            <div
              key={index}
              className="item absolute"
              style={
                {
                  "--position": `${index + 1}`,
                } as React.CSSProperties
              }
            >
              <div className="border border-black dark:border-white flex flex-col gap-4 h-full items-center justify-around px-6 py-4 rounded-2xl text-center">
                <h4 className="font-marlide text-4xl">{item.name}</h4>
                <img
                  src={item.imageUrl}
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

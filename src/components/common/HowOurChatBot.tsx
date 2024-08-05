import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "../core/Container";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { useMediaQuery, useResizeObserver } from "usehooks-ts";

const sliderItems = [
  {
    title: "Reduce Application Processing Time",
    description:
      "Offering personalized programs that will combine digital and physical experiences.",
    image: "/images/slider2.png",
  },
  {
    title: "Increase Application Completion Rates",
    description:
      "Using AI to create wellness programs tailored to individual needs.",
    image: "/images/slider1.png",
  },
  {
    title: "Improve Agent Productivity",
    description:
      "Proven techniques to reduce stress and improve mental health.",
    image: "/images/slider3.png",
  },
];

const SLIDER_WIDTH_MOBILE = 250;
const SLIDER_WIDTH_DESKTOP = 320;
const SLIDER_GAP = 64;
const SLIDER_LENGTH = sliderItems.length;

const HowOurChatBot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const { width: sliderMaxWidth = 0 } = useResizeObserver({
    ref: slideRef,
    box: "border-box",
  });
  const matches = useMediaQuery("(min-width: 1024px)");

  let SLIDER_WIDTH = !matches ? SLIDER_WIDTH_MOBILE : SLIDER_WIDTH_DESKTOP;
  // TODO: INFINITE SLIDER
  // useEffect(() => {
  //   if (sliderContainerRef.current) {
  //     const copyFirst = sliderContainerRef.current.children[0];
  //     const copyLast = sliderContainerRef.current.children[SLIDER_LENGTH - 1];
  //     sliderContainerRef.current.appendChild(copyFirst);
  //     console.log(sliderContainerRef.current.children);
  //   }
  // }, [currentIndex, sliderContainerRef.current]);

  const handleNextSlide = () => {
    if (currentIndex >= SLIDER_LENGTH - 1) setCurrentIndex(-1);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    if (currentIndex <= 0) setCurrentIndex(SLIDER_LENGTH);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <main className="lg:py-8">
      <Container className="px-4">
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-3xl lg:text-4xl font-bold flex-1">
            How Our Chatbot Benefits You
          </h1>
          <div className="flex-1 gap-x-2 flex items-center justify-center lg:items-end lg:justify-end">
            <span
              onClick={handlePrevSlide}
              className="p-2 transition text-black/40 hover:text-black"
            >
              <MoveLeft />
            </span>
            <span
              onClick={handleNextSlide}
              className="p-2 transition text-black/40 hover:text-black"
            >
              <MoveRight />
            </span>
          </div>
        </div>
        <div
          ref={slideRef}
          className="transition py-16 lg:py-24 overflow-hidden flex relative"
        >
          {/* <div className="absolute w-1 left-1/2 -translate-x-1/2 h-full bg-red-500" /> */}
          <div
            style={{
              transform: `translateX(${
                sliderMaxWidth! / 2 -
                SLIDER_WIDTH / 2 -
                (SLIDER_WIDTH + SLIDER_GAP) -
                (SLIDER_WIDTH + SLIDER_GAP) * currentIndex
              }px)`,
              gap: `${SLIDER_GAP}px`,
            }}
            className="flex transition"
            ref={sliderContainerRef}
          >
            <SliderItem
              item={sliderItems[SLIDER_LENGTH - 1]}
              currentIndex={currentIndex}
              index={-1}
            />
            {sliderItems.map((item, index) => (
              <SliderItem
                item={item}
                currentIndex={currentIndex}
                index={index}
                key={index}
              />
            ))}
            <SliderItem
              item={sliderItems[0]}
              currentIndex={currentIndex}
              index={SLIDER_LENGTH}
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

const SliderItem = ({
  currentIndex,
  index,
  item,
}: {
  currentIndex: number;
  index: number;
  item: { title: string; description: string; image: string };
}) => {
  const { title, description, image } = item;
  const matches = useMediaQuery("(min-width: 1024px)");

  let SLIDER_WIDTH = !matches ? SLIDER_WIDTH_MOBILE : SLIDER_WIDTH_DESKTOP;
  return (
    <div
      style={{
        transform: currentIndex === index ? `scale(${1.2})` : "scale(1)",
        width: `${SLIDER_WIDTH}px`,
      }}
      className="flex-shrink-0 transition flex flex-col space-y-1 lg:space-y-4"
    >
      {index % 2 !== 0 ? (
        <>
          <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
          <p className="lg:text-sm text-xs">{description}</p>
          <img
            src={image}
            alt="slider1"
            className="flex-1 object-cover rounded-[20px]"
          />
        </>
      ) : (
        <>
          <img
            src={image}
            alt="slider1"
            className="flex-1 object-cover rounded-[20px]"
          />
          <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
          <p className="lg:text-sm text-xs">{description}</p>
        </>
      )}
    </div>
  );
};

export default HowOurChatBot;

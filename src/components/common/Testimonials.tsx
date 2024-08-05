import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "../core/Container";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { useMediaQuery, useResizeObserver } from "usehooks-ts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const sliderItems = [
  {
    title: "Clay J. Milam",
    description:
      "Our AI-driven algorithms analyze your unique health data to provide insights tailored to your specific needs. Whether it's tracking your fitness, monitoring vital signs, or managing your diet, we offer actionable recommendations to help you achieve your health goals.",
    image: "/images/testimonials1.png",
  },
  {
    title: "Stephanie M. Moore",
    description:
      "Our AI-driven algorithms analyze your unique health data to provide insights tailored to your specific needs. Whether it's tracking your fitness, monitoring vital signs, or managing your diet, we offer actionable recommendations to help you achieve your health goals.",
    image: "/images/testimonials2.png",
  },
];

const SLIDER_WIDTH_MOBILE = 550;
const SLIDER_WIDTH_DESKTOP = 250;
const SLIDER_GAP = 16;
const SLIDER_LENGTH = sliderItems.length;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const { width: sliderMaxWidth = 0 } = useResizeObserver({
    ref: slideRef,
    box: "border-box",
  });
  const matches = useMediaQuery("(min-width: 600px)");

  let SLIDER_WIDTH = matches ? SLIDER_WIDTH_MOBILE : SLIDER_WIDTH_DESKTOP;
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
          <h1 className="text-3xl text-center lg:text-start lg:text-4xl font-bold flex-1">
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
          className="transition py-2 lg:py-24 overflow-hidden flex relative"
        >
          {/* <div className="absolute w-1 left-1/2 -translate-x-1/2 h-full bg-red-500" /> */}
          <div
            style={{
              transform: `translateX(${
                // sliderMaxWidth! / 2 -
                // SLIDER_WIDTH / 2 -
                // SLIDER_WIDTH +
                // SLIDER_GAP -
                -(SLIDER_WIDTH + SLIDER_GAP) * currentIndex
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
  const matches = useMediaQuery("(min-width: 600px)");

  let SLIDER_WIDTH = matches ? SLIDER_WIDTH_MOBILE : SLIDER_WIDTH_DESKTOP;
  return (
    <div
      style={{
        width: `${SLIDER_WIDTH}px`,
      }}
      className="flex-shrink-0 transition bg-primary-light flex flex-col space-y-1 lg:space-y-4 p-6 rounded-xl"
    >
      <div className="flex items-center justify-between">
        <Avatar className="size-20">
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="p-4">
          <img src="/images/quote.png" className="w-16" alt="quote-image" />
        </span>
      </div>
      <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
      <p className="lg:text-sm text-xs">{description}</p>
    </div>
  );
};

export default Testimonials;

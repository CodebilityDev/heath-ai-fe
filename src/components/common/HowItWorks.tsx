import React from "react";
import Container from "../core/Container";

const howItWorks = [
  {
    title: "Engage with the chatbot",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing prae.",
    image: "/images/howitwork1.png",
  },
  {
    title: "Provide necessary information",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing prae.",
    image: "/images/howitwork2.png",
  },
  {
    title: "Complete the application effortlessly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis arcu enim urna adipiscing prae.",
    image: "/images/howitwork3.png",
  },
];

const HowItWorks = () => {
  return (
    <main className="py-4">
      <Container className="px-4">
        <div className="flex items-center flex-col w-full">
          <h1 className="text-3xl md:text-4xl font-bold ">How it Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4 w-full">
            {howItWorks.map(
              (
                item: { title: string; description: string; image: string },
                index: number
              ) => (
                <div
                  key={`howitwork-${index}`}
                  className="flex flex-col items-center justify-center p-6 rounded-xl"
                  style={{
                    boxShadow:
                      index === 1 ? "-1px 14px 21px 5px rgba(0,0,0,0.05)" : "",
                  }}
                >
                  <div className="bg-primary-light p-6 rounded-full">
                    <img
                      className="size-8"
                      src={item.image}
                      alt={`howitworkimage-${index}`}
                    />
                  </div>
                  <h1 className="text-lg font-bold mt-8 text-center">
                    {item.title}
                  </h1>
                  <p className="mt-2 text-sm text-center">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default HowItWorks;

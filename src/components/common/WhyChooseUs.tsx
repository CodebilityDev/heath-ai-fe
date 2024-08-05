import React from "react";
import Container from "../core/Container";
import { Button } from "../ui/button";

const cardItems = [
  {
    title: "AI-Powered Application Assistant",
    description:
      "Offering personalized programs that will combine digital and physical experiences.",
    icon: "/images/cardIcon1.png",
  },
  {
    title: "Personalized Plan Recommendations",
    description:
      "Using AI to create wellness programs tailored to individual needs.",
    icon: "/images/cardIcon2.png",
  },
  {
    title: "Dual-Mode Operation",
    description:
      "Proven techniques to reduce stress and improve mental health.",
    icon: "/images/cardIcon3.png",
  },
  {
    title: "Compliance & Security",
    description: "Different pricing plans to fit all budgets.",
    icon: "/images/cardIcon4.png",
  },
];

const WhyChooseUs = () => {
  return (
    <main className="py-16">
      <Container className="px-4">
        <div className="flex md:flex-row flex-col gap-x-4 lg:gap-x-8">
          <aside className="flex-1 flex flex-col overflow-hidden">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Why Choose Our AI-Powered Insurance Chatbot?
            </h1>
            <p className="mt-4">
              Discover why Immsy will be the ideal choice for your well-being.
            </p>
            <Button className="self-start mt-4">Learn More</Button>
            <img
              src="/images/chooseus.png"
              alt="chooseus"
              className="flex-1 object-cover rounded-[20px] mt-8"
            />
          </aside>
          <aside className="flex-1 mt-8 md:mt-0 flex flex-col md:grid md:grid-cols-2 gap-4 rounded-2xl bg-[#edeafc] p-4">
            {cardItems.map((item: any, index: any) => (
              <div
                key={`card-${index}`}
                className="bg-white rounded-2xl p-4 flex flex-col justify-between md:min-h-56 min-h-32"
              >
                <img
                  className="size-8"
                  src={item.icon}
                  alt={`${item.icon}=${index}`}
                />
                <div>
                  <h1 className="text-lg lg:text-xl mt-8">{item.title}</h1>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default WhyChooseUs;

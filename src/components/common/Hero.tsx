import React from "react";
import Container from "../core/Container";
import { twMerge } from "tailwind-merge";
import Button from "../core/Button";
import { ArrowRight, LogOut } from "lucide-react";

const Hero = () => {
  const avatar = [
    "/images/avatar1.png",
    "/images/avatar2.png",
    "/images/avatar3.png",
    "/images/avatar4.png",
  ];
  const company = [
    {
      logo: "/images/company1.png",
      name: "Layers",
    },
    {
      logo: "/images/company2.png",
      name: "Sisyphus",
    },
    {
      logo: "/images/company3.png",
      name: "Circooles",
    },
    {
      logo: "/images/company4.png",
      name: "Catalog",
    },
    {
      logo: "/images/company5.png",
      name: "Quotient",
    },
  ];
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b to-[#624ff62d] from-[#FFFFFF]">
      <Container className="px-4">
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center">
            <h1 className="sm:text-4xl text-2xl font-bold text-center sm:text-start">
              Streamline Your Insurance Process with Our{" "}
              <span className="sm:text-4xl text-2xl text-primary">
                AI-Powered
              </span>{" "}
              Chatbot
            </h1>

            <div className="flex items-center gap-x-4 min-w-[326px] justify-center sm:justify-start">
              <div className="flex items-start">
                {avatar.map((item, index) => (
                  <img
                    key={`key-img-${index}`}
                    className={twMerge(
                      "-ml-2 sm:-ml-3 w-[33px] h-[33px] sm:w-[55px] sm:h-[55px]",
                      index === 0 && "ml-0"
                    )}
                    src={item}
                    alt="item"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <h1 className="text-md sm:text-2xl font-extrabold">750k+</h1>
                <p className="text-nowrap text-[#706571]">Happy customers</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#706571]">
              Automate, simplify, and enhance your client interactions
              effortlessly
            </p>
            <div className="flex gap-x-4">
              <Button
                className="flex items-center bg-primary text-white w-[183px] justify-center py-3"
                onClick={() => {
                  window.location.href = "/sign-in";
                }}
              >
                Get Started
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button className="flex w-full text-xs items-center text-primary border border-primary sm:w-[183px] justify-center">
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
          <div className="flex items-start mt-8 overflow-hidden gap-x-4 justif">
            <img
              src="/images/heroFinal.png"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="flex justify-center w-full py-8 mt-8 bg-white shadow-lg gap-x-6 rounded-2xl">
            {company.map((item, index) => (
              <span
                key={`key-company-${index}`}
                className="flex items-center gap-x-2"
              >
                <img
                  src={item.logo}
                  width={20}
                  height={index === 1 ? 10 : 32}
                  alt={`companylogo-${index}`}
                />
                <p className="font-bold">{item.name}</p>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hero;

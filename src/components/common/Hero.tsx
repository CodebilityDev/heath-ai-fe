import Container from "../core/Container";
import { twMerge } from "tailwind-merge";
import Button from "../core/Button";
import { ArrowRight } from "lucide-react";

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
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#624ff62a] to-[#624ff615]">
      <Container className="px-4">
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center">
            <h1 className="sm:text-4xl text-3xl font-bold text-center sm:text-start">
              Streamline Your Insurance Process with Our{" "}
              <span className="sm:text-4xl text-3xl text-primary">
                AI-Powered
              </span>{" "}
              Chatbot
            </h1>

            <div className="flex mt-2 sm:mt-0 sm:flex-col lg:flex-row sm:items-end lg:items-center gap-x-4 min-w-[326px] justify-center sm:justify-start">
              <div className="flex items-start">
                {avatar.map((item, index) => (
                  <img
                    key={`key-img-${index}`}
                    className={twMerge(
                      "-ml-2 sm:-ml-3 w-[50px] h-[50px] sm:w-[55px] sm:h-[55px]",
                      index === 0 && "ml-0"
                    )}
                    src={item}
                    alt="item"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <h1 className="text-md sm:text-2xl font-extrabold sm:text-end lg:text-start">
                  750k+
                </h1>
                <p className="text-nowrap text-[#706571]">Happy customers</p>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-center justify-center sm:justify-between">
            <p className="text-[#706571] text-center sm:text-start">
              Automate, simplify, and enhance your client interactions
              effortlessly
            </p>
            <div className="flex gap-x-4 w-full sm:w-auto">
              <Button
                className="flex items-center bg-primary text-white w-full sm:w-[183px] justify-center py-3"
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
          <div className="flex flex-col sm:h-[400px] sm:flex-row mt-8 overflow-hidden gap-4 rounded-[40px]">
            <img
              src="/images/hero1.png"
              alt="hero1"
              className="flex-1 object-cover rounded-[40px]"
            />
            <img
              src="/images/hero2.png"
              alt="hero1"
              className="flex-1 object-cover rounded-[40px]"
            />
          </div>
          <div className="flex justify-center flex-wrap w-full px-4 gap-y-2 py-8 mt-8 bg-white shadow-lg gap-x-6 rounded-2xl">
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

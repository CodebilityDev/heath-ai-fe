import React from "react";
import Container from "../core/Container";
import { Input } from "../ui/input";
import { FaFacebook, FaGreaterThan } from "react-icons/fa";
import { Button } from "../ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const FooterLanding = () => {
  return (
    <main className="bg-primary-light p-8">
      <Container className="px-4">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <img src="/images/logo.png" alt="logo" width={150} className="" />
            <div className="flex gap-x-6 mt-8 md:mt-0 items-center">
              <p className="font-bold">Ready to get started?</p>
              <Button className="font-bold">Get Started</Button>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-8 justify-between">
            <div className="flex flex-col w-full lg:w-1/4 ">
              <h1 className="lg:text-4xl text-3xl font-bold text-center lg:text-start">
                SUBSCRIBE NEWSLETTER
              </h1>
              <div className="flex gap-x-4 mt-4">
                <Input />
                <Button>{">"}</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3  mt-8 lg:mt-0 gap-8">
              <ul className="space-y-4 lg:text-end text-center sm:text-start">
                <li className="font-bold">Services</li>
                <li>Application Assistant</li>
                <li>Plan Recommendations</li>
                <li>Compliance & Security</li>
                <li>Dual-Mode Operation</li>
              </ul>
              <ul className="space-y-4 lg:text-end text-center sm:text-start">
                <li className="font-bold">About</li>
                <li>Our Story</li>
                <li>Benefits</li>
                <li>Team</li>
              </ul>
              <ul className="space-y-4 lg:text-end text-center sm:text-start">
                <li className="font-bold">Help</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full justify-between mt-8">
            <div className="flex gap-x-4">
              <p className="md:text-sm text-xs">Terms and Conditions</p>
              <p className="md:text-sm text-xs">Privacy Policy</p>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0 md:space-x-4 items-center">
              <FaFacebook className="text-primary size-6" />
              <BsTwitter className="text-primary size-6" />
              <BsInstagram className="text-primary size-6" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default FooterLanding;

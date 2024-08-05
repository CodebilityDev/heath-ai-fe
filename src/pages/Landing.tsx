import FooterLanding from "@/components/common/FooterLanding";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import HowItWorks from "@/components/common/HowItWorks";
import HowOurChatBot from "@/components/common/HowOurChatBot";
import Testimonials from "@/components/common/Testimonials";
import WhyChooseUs from "@/components/common/WhyChooseUs";

const Landing = () => {
  return (
    <main className="w-full flex flex-col">
      <Header />
      <Hero />
      <WhyChooseUs />
      <HowOurChatBot />
      <HowItWorks />
      <Testimonials />
      <FooterLanding />
    </main>
  );
};

export default Landing;

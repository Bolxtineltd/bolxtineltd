import OurMissionAndVission from "@/components/AboutUs/OurMission";
import OurStory from "@/components/AboutUs/OurStory";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import Banner from "@/components/Banner";
import Exprience from "@/components/Exprience";
import OurClients from "@/components/Home/OurClients";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <Banner title="About us" content="Our story and our goals" />
      <main className="lg:py-20 py-10">
        <OurStory />
        <WhyChooseUs />
        <Exprience />
        <OurMissionAndVission />
        <OurClients />
        <Testimonial />
      </main>
    </>
  );
};

export default page;

import Banner from "@/components/Banner";
import LatestProjectCarousel from "@/components/Home/LatestProjectCarousel";
import Testimonial from "@/components/Home/Testimonial";
import GetAQoute from "@/components/Ourservices/GetAQoute";
import ServiceLists from "@/components/Ourservices/ServiceLists";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Our Services"
        content="  Transform your business with our innovative technology solutions"
      />
      <ServiceLists />
      <LatestProjectCarousel />
      <GetAQoute />
      <Testimonial />
    </>
  );
};

export default page;

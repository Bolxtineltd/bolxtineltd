import Banner from "@/components/Banner";
import Testimonial from "@/components/Home/Testimonial";
import GetAQoute from "@/components/Ourservices/GetAQoute";
import OurProducts from "@/components/Products/OurProducts";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Our Products"
        content="Making our daily activities easier."
        className="max-w-[508px]"
      />
      <OurProducts />
      <GetAQoute />
      <Testimonial />
    </>
  );
};

export default page;

import React from "react";
import OurServicesItem from "../Home/OurServicesItem";

const WhyChooseUs = () => {
  return (
    <section
      className="wrapper rounded-[44px] border-r-[1rem] border-b-[1rem] border-l-[1rem] border-[#F2F8FF]
     bg-[#E5F1FF] px-0"
    >
      <div className=" lg:p-8 py-8 space-y-4">
        <h4 className="text !font-bold">Why Choose Us</h4>
        <aside className="w-full grid lg:grid-cols-2 gap-5 grid-cols-1 ">
          {WhyChooseUsLists.map((item) => (
            <OurServicesItem
              key={item.id}
              item={item}
              addClassName="flex flex-row items-center group-hover:block hover:space-y-4"
              imageStyle="group-hover:size-10 size-7"
            />
          ))}
        </aside>
      </div>
    </section>
  );
};

export default WhyChooseUs;

const WhyChooseUsLists = [
  {
    icon: "/assets/check_circle.svg",
    title: "Experienced team",
    body: "Our team consists of seasoned professionals with a proven track record of delivering results",
    id: 1,
  },
  {
    icon: "/assets/check_circle.svg",
    title: "Commitment to quality",
    body: "We are dedicated to delivering high-quality work and stand behind our products and services.",
    id: 2,
  },
  {
    icon: "/assets/check_circle.svg",
    title: "Proven track record",
    body: "We have a long list of satisfied clients and a portfolio of successful projects that speak for themselves.",
    id: 3,
  },
  {
    icon: "/assets/check_circle.svg",
    title: "Personalized approach",
    body: "We take the time to understand your specific needs and tailor our solutions to fit your unique requirements ",
    id: 4,
  },
];

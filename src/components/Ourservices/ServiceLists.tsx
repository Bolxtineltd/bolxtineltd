import React from "react";
import OurServicesItem from "../Home/OurServicesItem";

const ServiceLists = () => {
  return (
    <section className="bg-our-services  bg-cover bg-center lg:py-20 py-10 ">
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-8">
          {ourservices.map((service) => (
            <OurServicesItem key={service.id} item={service} addClassName="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLists;
const ourservices = [
  {
    icon: "/assets/display_settings.svg",
    title: "Software Development",
    body: "At Bolxtine Ltd, we have extensive experience developing custom software solutions for a wide range of industries. Our process begins with a thorough understanding of your business needs, followed by careful planning and design.",
    id: 1,
  },
  {
    icon: "/assets/devices.svg",
    title: "Web App Development",
    body: "Bolxtine Ltd specializes in creating high-performance web applications that engage users and deliver results. Whether you need a simple landing page or a complex web app, we have the experience and expertise to turn your vision into a reality.",
    id: 2,
  },
  {
    icon: "/assets/add_to_home_screen.svg",
    title: "Mobile App Development",
    body: "We have a track record of developing high-quality mobile apps for iOS and Android. Our team follows a user-centered design approach and uses the latest technologies to ensure that your mobile app is intuitive, responsive, and feature-rich",
    id: 3,
  },
  {
    icon: "/assets/globe_book.svg",
    title: "IT Consultancy",
    body: "We offer a range of IT consultancy services to help businesses of all sizes leverage technology to their advantage. Our team of experts can provide guidance on everything from strategy and planning to implementation and support. We have a proven track record of helping our clients achieve their goals and improve their bottom line.",
    id: 4,
  },
];

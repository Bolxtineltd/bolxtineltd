import React from "react";
import OurServicesItem from "../Home/OurServicesItem";

const OurMissionAndVission = () => {
  return (
    <section className="lg:py-20 py-10 wrapper grid lg:grid-cols-2 gap-5">
      {lists.map((item) => (
        <OurServicesItem key={item.id} item={item} addClassName="" />
      ))}
    </section>
  );
};

export default OurMissionAndVission;
const lists = [
  {
    icon: "/assets/kayaking.svg",
    title: "Our Mission",
    body: "At Bolxtine Ltd, our mission is to provide innovative technology solutions to our clients, helping them to solve complex problems and achieve their business objectives. We strive to deliver exceptional value and service by leveraging our team's expertise, creativity, and dedication",
    id: 1,
  },
  {
    icon: "/assets/sunny.svg",
    title: "Our Vision",
    body: "To be a leading technology firm, trusted for innovative solutions, exceptional service, and driving client success. We aim to empower businesses to thrive in a rapidly changing technological landscape, providing cutting-edge solutions that fuel growth, create value, and transform operations.",
    id: 2,
  },
];

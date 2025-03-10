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
    body: "We build innovative and reliable software solutions with precision and purpose, adapting to evolving needs while maintaining transparency and trust. We aim to transform ideas into impactful digital products that stand the test of time.",
    id: 1,
  },
  {
    icon: "/assets/sunny.svg",
    title: "Our Vision",
    body: "To be the leading force in crafting innovative and reliable software solutions, setting new standards in agility, focus, and transparency while shaping the future of digital transformation.",
    id: 2,
  },
];

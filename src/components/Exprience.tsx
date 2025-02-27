import React from "react";
import { NumberTicker } from "./magicui/number-ticker";

const Exprience = () => {
  return (
    <section className="lg:py-20 py-10 lg:flex justify-between items-center flex-row grid grid-cols-2 gap-16 wrapper">
      {experiences.map((experience) => (
        <div key={experience.id} className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-[#004AAD] to-[#DA6708] bg-clip-text text-transparent font-bold lg:text-[5rem] lg:leading-[102.08px] text-[2.5rem] leading-[60px] flex">
            <NumberTicker
              value={Number(experience.years)}
              className="whitespace-pre-wrap "
            />
            <span> {experience.extra}</span>
          </div>
          <p>{experience.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Exprience;
const experiences = [
  { years: "15", extra: "yr+", name: "Work Experience", id: 1 },
  {
    years: "40",
    name: "Successful Projects",
    extra: "+",
    id: 2,
  },
  {
    years: "100",
    name: "Client Satisfaction",
    extra: "%",
    id: 3,
  },
  {
    years: "12",
    name: "Countries",
    extra: "+",
    id: 4,
  },
];

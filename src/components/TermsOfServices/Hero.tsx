import React from "react";

const Hero = ({ title, content }: HeroProps) => {
  return (
    <header className="max-w-[858px] w-full px-4 lg:space-y-[36px] space-y-7 mx-auto lg:py-20 py-10 text-xl leading-[36px] ">
      <h4 className="text-[#808387]">{title}</h4>
      <p className="text-[#41444A]">{content}</p>
    </header>
  );
};

export default Hero;
interface HeroProps {
  title: string;
  content: string;
}

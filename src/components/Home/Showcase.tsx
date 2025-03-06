import React from "react";
import TrustedBy from "./TrustedBy";
import CarouselWithoutText from "../CarouselWithoutText";
import { Fade } from "react-awesome-reveal";

const Showcase = () => {
  return (
    <section className="bg-home-showcase bg-center bg-cover relative">
      <div className="bg-black/80 absolute inset-0"></div>
      <div className="wrapper flex lg:gap-6 gap-3 lg:py-20 py-16 justify-between lg:flex-row flex-col items-center">
        <div className="">
          <Fade direction="top-left">
            <h1 className="font-bold lg:text-[5rem] text-3xl lg:leading-[92px] leading-[48px] text-white lg:text-start text-center">
              Hello Friend, You are Welcome to{" "}
              <br className="lg:block hidden" />
              <span className="font-goldman">Bolxtine.</span>
            </h1>
          </Fade>
        </div>
        <div className="lg:flex block  flex-col justify-center items-end">
          <div className="lg:w-[421px] w-full space-y-8 lg:text-start text-center">
            <Fade direction="bottom-right">
              <h4 className="font-normal lg:leading-[33px] text-[#CDD0D3] lg:text-xl text-lg">
                Leading provider of software development, web app development,
                mobile app development, and IT consultancy services.
              </h4>
            </Fade>
            <Fade damping={0.6} cascade>
              <div className="flex  lg:gap-6 gap-3 lg:flex-row flex-col">
                <button className="bg-secondary text-white btn lg:w-[197px]">
                  Get a Qoute
                </button>
                <button className="btn bg-white lg:w-[200px] text-secondary">
                  Chat with Support
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <CarouselWithoutText lists={projects} className="lg:flex-[0_0_18.33%]" />
      <TrustedBy />
    </section>
  );
};

export default Showcase;
const projects = [
  "/assets/5.svg",
  "/assets/1.svg",
  "/assets/2.svg",
  "/assets/3.svg",
  "/assets/4.svg",
  "/assets/6.svg",
];

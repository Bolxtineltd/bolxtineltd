"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useAutoSlide } from "@/hooks/useAutoSlide";

const AboutUs = () => {
  const { currentIndex } = useAutoSlide({
    slides,
    autoSlideInterval: 5000,
  });

  return (
    <section id="about" className="lg:py-20 bg-white py-10">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 lg:gap-20 gap-10 items-center">
          <div>
            <div className="relative ">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/40 rounded-lg lg:block hidden"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/40 rounded-lg lg:block hidden"></div>
              <div className="relative bg-extra rounded-lg shadow-lg p-4 md:p-12 bg-dark-600 shadow-primary shadow-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  About <span className="text-primary">Bolxtine Ltd</span>
                </h2>
                <p className="text-lg text-white mb-6">
                  Bolxtine Ltd is a leading provider of software development,
                  web app development, mobile app development, and IT
                  consultancy services. With a team of experienced professionals
                  and a proven track record, we are dedicated to delivering
                  high-quality solutions that meet the unique needs of our
                  clients.
                </p>
                <Button
                  variant="outline"
                  className="gap-2 border border-primary text-primary bg-white w-full lg:w-[300px]"
                >
                  Learn More About Us
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/40 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-primary/40 rounded-lg"></div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={slides[currentIndex]?.image}
                alt="Bolxtine team at work"
                width={800}
                height={600}
                className="w-full  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <span className="font-semibold">
                    {slides[currentIndex]?.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
const slides = [
  {
    id: 1,
    image: "/assets/hero3.png",
    title: "Crafting Excellence, Powering Innovation.",
    description:
      "Transform your ideas into impactful software solutions with precision, agility, and transparency.",
    action: {
      text: "Schedule a Free Consultation",
      path: "",
    },
  },
  {
    id: 2,
    image: "/assets/hero4.png",
    title:
      "Engineering Excellence with Modern Tech: Scalable, Secure, and Intelligent Digital Solutions",
    description:
      "Engineering excellence with modern technology, delivering scalable, secure, and intelligent solutions that drive innovation, empower businesses, and shape digital transformation.",
    action: {
      text: "Explore Our Solutions",
      path: "",
    },
  },
  {
    id: 3,
    image: "/assets/hero5.png",
    title: "Shaping the Future with Innovation",
    description:
      "Shaping the future through innovation, craftsmanship, and excellence, delivering scalable, secure, and intelligent digital solutions that drive growth and transformation.",
    action: {
      text: "Explore Our Solutions",
      path: "",
    },
  },
];

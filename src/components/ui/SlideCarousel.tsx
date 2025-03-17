"use client";
import { motion } from "framer-motion";
import { Button } from "./button";
import { useAutoSlide } from "@/hooks/useAutoSlide";

interface CarouselProps {
  slides: {
    id: number;
    image: string;
    title: string;
    description: string;
    action?: {
      text: string;
      path: string;
    };
  }[];
  autoSlideInterval?: number;
}

export default function Carousel({
  slides,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const { currentIndex } = useAutoSlide({
    slides,
    autoSlideInterval,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: index === currentIndex ? 10 : 0 }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              // backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-40   text-white p-4 gap-4 wrapper mx-auto h-full flex flex-col  justify-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: index === currentIndex ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-6xl font-bold font-goldman w-full max-w-[900px] lg:text-start text-center"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: index === currentIndex ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl max-w-2xl w-full lg:text-start text-center"
              >
                {slide.description}
              </motion.p>
              {slide.action && (
                <Button className="py-2 mt-4 px-4 bg-secondary hover:bg-secondary-100 h-[52px] lg:w-[300px] w-full">
                  {slide.action.text}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

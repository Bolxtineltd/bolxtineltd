"use client";
import { useEffect, useState } from "react";

export const useAutoSlide = ({ slides, autoSlideInterval }: AutoSlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [slides.length, autoSlideInterval]);
  return {
    currentIndex,
  };
};

interface AutoSlideProps {
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

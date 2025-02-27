"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OurClientsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 3,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full  py-16">
      <div
        className="relative group"
        onMouseEnter={() => emblaApi?.plugins().autoplay.stop()}
        onMouseLeave={() => emblaApi?.plugins().autoplay.play()}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-[0_0_40%] min-w-0 pl-4 md:flex-[0_0_13.33%]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={client}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-200 hidden group-hover:inline-block"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="lg:size-6 size-3" />
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-200 hidden group-hover:inline-block"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="lg:size-6 size-3" />
        </button>
      </div>
    </section>
  );
}
const clients = [
  "/assets/5.svg",
  "/assets/1.svg",
  "/assets/2.svg",
  "/assets/3.svg",
  "/assets/4.svg",
  "/assets/6.svg",
];

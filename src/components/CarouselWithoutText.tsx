"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CarouselWithoutText({
  lists,
  className,
}: CarouselWithoutTextProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      slidesToScroll: 2,
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
    <section className="">
      <div
        className="relative group"
        onMouseEnter={() => emblaApi?.plugins().autoplay.stop()}
        onMouseLeave={() => emblaApi?.plugins().autoplay.play()}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {lists.map((list, index) => (
              <div
                key={index}
                className={cn(
                  "flex-[0_0_40%] min-w-0 pl-4 lg:flex-[0_0_25.33%]",
                  className,
                )}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={list}
                    alt={`Carousel ${index + 1}`}
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
interface CarouselWithoutTextProps {
  lists: string[];
  className: string;
}

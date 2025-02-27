import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";

export default function LatestProjectCarousel() {
  return (
    <section className="w-full lg:py-20 py-10 space-y-[72px]">
      <div className="flex justify-center items-center">
        <Bounce>
          <h2 className="text-dark-500 title">
            <span>Our</span> Latest Projects
          </h2>
        </Bounce>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          slidesToScroll: 2,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {images.map(({ name, banner, logo, id, tags }, index) => (
            <CarouselItem
              key={`Project ${id}-${index}`}
              className="pl-4 md:basis-[667px] relative group cursor-pointer w-full"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={banner}
                  alt={name}
                  fill
                  className="object-cover  transition-transform duration-300"
                />

                <div className=" absolute bg-black/30 inset-0 hidden group-hover:block">
                  <div className="bg-[#004AADF2] lg:p-8 px-2 py-4 rounded-xl absolute group-hover:bottom-0 left-0 w-full flex justify-between items-center gap-4 lg:flex-row flex-col">
                    <div className="space-y-4">
                      <div className="flex items-center lg:gap-3 gap-2">
                        <Image
                          src={logo}
                          alt={name}
                          height={40}
                          width={60}
                          className="lg:block hidden"
                        />

                        <Image
                          src={logo}
                          alt={name}
                          height={20}
                          width={40}
                          className="lg:hidden block"
                        />
                        <h3 className="lg:text-xl text-sm font-bold leading-[33px] text-white">
                          {name}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="py-2 lg:px-6 px-3 bg-[#F2F8FF26] text-white rounded-lg lg:text-base leading-[15.84px] text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Image
                        width={24}
                        height={24}
                        src={"/assets/arrow_warm_up.svg"}
                        alt="arrow_warm_up"
                        className="size-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center lg:gap-2 gap-4 mt-8">
          <CarouselPrevious className="carousel-array-style" />
          <CarouselNext className="carousel-array-style" />
        </div>
      </Carousel>
    </section>
  );
}
const images = [
  {
    name: "Mide Premium",
    tags: ["Website", "Web App", "Mobile App"],
    id: 1,
    banner: "/assets/ourproject1.svg",
    logo: "/assets/mide.svg",
  },
  {
    name: "Mide Premium",
    tags: ["Website", "Web App", "Mobile App"],
    id: 2,
    banner: "/assets/ourproject2.svg",
    logo: "/assets/mide.svg",
  },
  {
    name: "Mide Premium",
    tags: ["Website", "Web App", "Mobile App"],
    id: 3,
    banner: "/assets/ourproject3.svg",
    logo: "/assets/mide.svg",
  },
  {
    name: "Mide Premium",
    tags: ["Website", "Web App", "Mobile App"],
    id: 4,
    banner: "/assets/ourproject4.svg",
    logo: "/assets/mide.svg",
  },
  {
    name: "Mide Premium",
    tags: ["Website", "Web App", "Mobile App"],
    id: 5,
    banner: "/assets/ourproject5.svg",
    logo: "/assets/mide.svg",
  },
];

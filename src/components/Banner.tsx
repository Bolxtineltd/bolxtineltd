import { cn } from "@/lib/utils";
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const Banner = ({ title, content, className }: BannerProps) => {
  return (
    <header className="bg-banner lg:h-[489px] h-[400px] flex justify-center items-center bg-center bg-cover border-b-4 border-secondary">
      <div
        className={cn(
          "max-w-[482px] w-full mx-auto text-center text-white space-y-3",
          className,
        )}
      >
        <Zoom>
          <h1 className="lg:text-[5rem] text-[3rem] lg:leading-[104px] leading-[50px] font-bold ">
            {title}
          </h1>
        </Zoom>
        <Slide direction="up">
          <p className="text">{content}</p>
        </Slide>
      </div>
    </header>
  );
};

export default Banner;
interface BannerProps {
  title: string;
  content: string;
  className?: string;
}

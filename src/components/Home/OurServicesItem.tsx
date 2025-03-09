import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const OurServicesItem = ({
  item,
  addClassName,
  link,
  imageStyle = "group-hover:size-[48px] size-10",
}: Props) => {
  const { icon, title, body } = item;
  return (
    <div className="p-8 rounded-xl lg:bg-dark text-white group hover:bg-secondary space-y-4 border-b-8 border-x hover:border-dark-600 transition-all ease-in-out   animate-out duration-150 bg-secondary lg:border-none border-dark-600">
      <div className={cn("flex  gap-4 flex-col", addClassName)}>
        <div className="">
          <Image
            src={icon}
            alt={title}
            height={0}
            width={0}
            className={imageStyle}
          />
        </div>
        <h4 className="font-bold lg:text-xl lg:leading-[33px] text-base">
          {title}
        </h4>
      </div>
      <p className="lg:text-xl text-base font-normal text-white/70 leading-[33px]">
        {body}
      </p>
      {link && (
        <div className=" justify-end items-center lg:hidden group-hover:flex flex">
          <p className="flex items-center gap-2">
            Chat to Learn More Now
            <Image
              src={"/assets/arrow_warm_up.svg"}
              alt="Chat to Learn More Now "
              height={24}
              width={24}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default OurServicesItem;
interface Props {
  item: {
    id: number;
    icon: string;
    title: string;
    body: string;
  };
  addClassName: string;
  link?: string;
  imageStyle?: string;
}

import Image from "next/image";
import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
  return (
    <section className="bg-testimonial  lg:py-20 py-10 space-y-10 bg-center bg-cover bg-no-repeat">
      <div className="flex justify-center items-center">
        <Bounce>
          <h1 className="title">
            Our
            <span className="text-dark-100 mx-4">Testimonials</span>
          </h1>
        </Bounce>
      </div>

      <div className="wrapper grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4">
        {testimonals.map(({ name, position, content, id, image }, index) => (
          <Fade direction={index % 2 === 0 ? "up" : "right"} key={id}>
            <div className="bg-dark group hover:bg-primary border-x border-b-4  hover:shadow-secondary hover:border-secondary rounded-xl p-3 text-white lg:space-y-6 space-y-3">
              <p className="text">{content}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src={image}
                    alt={name}
                    width={52}
                    height={52}
                    className="lg:block hidden"
                  />
                  <Image
                    src={image}
                    alt={name}
                    width={42}
                    height={42}
                    className="lg:hidden block"
                  />
                  <div>
                    <h4 className="font-bold lg:text-base text-sm">{name}</h4>
                    <p className="lg:text-base text-sm font-normal text-dark-100 ">
                      {position}
                    </p>
                  </div>
                </div>
                <BiSolidQuoteAltLeft
                  // fontSize={100}
                  className=" text-[#F2F8FF] flex flex-col opacity-15 items-end  overflow-hidden lg:text-[100px] text-[60px]"
                />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
const testimonals = [
  {
    content:
      "My customers can now shop with convenience on my ecommerce mobile apps",
    position: "CTO, Damflyn Ltd",
    name: "Felix",
    id: 1,
    image: "/assets/user1.svg",
  },
  {
    content:
      "My customers can now shop with convenience on my ecommerce mobile apps",
    position: "CTO, Damflyn Ltd",
    name: "Felix",
    id: 2,
    image: "/assets/user2.svg",
  },
  {
    content:
      "My customers can now shop with convenience on my ecommerce mobile apps",
    position: "CTO, Damflyn Ltd",
    name: "Felix",
    id: 3,
    image: "/assets/user3.svg",
  },
];

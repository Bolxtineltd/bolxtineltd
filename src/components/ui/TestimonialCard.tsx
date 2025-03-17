import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialCard() {
  return (
    <div className="wrapper grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4">
      {testimonals.map(({ name, position, content, id, image }, index) => (
        <Fade direction={index % 2 === 0 ? "up" : "right"} key={id}>
          <div
            className={`  shadow-md   hover:shadow-dark-600 hover:border-dark-600 rounded-xl p-3 text-white 
                   lg:space-y-3 space-y-3 ${index % 2 ? " bg-primary group hover:bg-dark shadow-white/90 hover:shadow-primary/45" : "bg-dark  group hover:bg-primary shadow-primary/45 hover:shadow-white/90"}`}
          >
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
                  <p className="lg:text-base text-sm font-normal text-white/90 ">
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
  );
}
const testimonals = [
  {
    content:
      "BolXtine LTD transformed our outdated systems into a streamlined digital ecosystem that increased our efficiency by 40%.",
    position: "CTO, Damflyn Ltd",
    name: "Mr. Coded",
    id: 1,
    image: "/assets/user1.svg",
  },
  {
    content:
      "Their team's agility and transparency made a complex project feel simple. We couldn't be happier with the results.",
    position: "CTO, Damflyn Ltd",
    name: "Mr Adejoke",
    id: 2,
    image: "/assets/user2.svg",
  },
  {
    content:
      "From concept to deployment, BolXtine LTD delivered exactly what we needed, when we needed it. A true technology partner.",
    position: "CEO, Damflyn Ltd",
    name: "Betty",
    id: 3,
    image: "/assets/user3.svg",
  },
];

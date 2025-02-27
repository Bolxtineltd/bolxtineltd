import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const TrustedBy = () => {
  return (
    <section className="wrapper lg:py-20 py-10 flex items-center lg:gap-5 gap-2 lg:flex-row flex-col">
      <div className="py-2 lg:px-6 px-4 lg:w-[250px]">
        <Fade direction="left">
          <h3 className="font-base font-normal text-[#BFC1C3] leading-[15.8px] font-spaceGrotesk">
            Trusted by
          </h3>
        </Fade>
      </div>
      <div className="flex items-center lg:justify-between justify-center flex-1 lg:flex-nowrap flex-wrap gap-x-5">
        {trustedBy.map((item, index) => (
          <Fade key={index} direction="right">
            <Image
              src={item}
              alt="trusted"
              className="w-auto"
              height={0}
              width={0}
            />
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
const trustedBy = [
  "/assets/trusted1.svg",
  "/assets/trusted2.svg",
  "/assets/trusted3.svg",
  "/assets/trusted4.svg",
  "/assets/trusted5.svg",
  "/assets/trusted6.svg",
];

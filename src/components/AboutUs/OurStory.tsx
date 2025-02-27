import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const OurStory = () => {
  return (
    <section className="rounded-tl-xl rounded-tr-xl rounded-bl-[44px] rounded-br-[44px] border-t-[1rem] border-r-[1rem] border-l-[1rem] wrapper bg-[#E5F1FF] border-[#F2F8FF]">
      <div className="lg:p-4 py-4 space-y-4">
        <Fade>
          <h4 className="text !font-bold">Our Story</h4>
        </Fade>
        <Fade cascade>
          <p className="text text-[#41444A]">
            Bolxtine Ltd was founded in 2022 by a team of experienced software
            developers with a passion for solving complex problems. Over the
            years, we have grown into a full-service technology firm serving
            clients in a variety of industries. Our team is made up of dedicated
            professionals with a wide range of skills and expertise. Our team
            consists of software developers, web app developers, mobile app
            developers, and IT consultants with years of experience in their
            respective fields.
          </p>
        </Fade>
      </div>
      <Fade direction="up">
        <Image
          src={"/assets/ourstory.svg"}
          alt="ourstory.svg"
          height={0}
          width={0}
          className="w-full h-auto lg:p-4"
        />
      </Fade>
    </section>
  );
};

export default OurStory;

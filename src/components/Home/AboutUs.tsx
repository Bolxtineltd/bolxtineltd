import Image from "next/image";
import Link from "next/link";
import React from "react";
import Exprience from "../Exprience";
import { Bounce, Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <>
      <section className="wrapper lg:py-20 py-8">
        <section className="grid lg:grid-cols-2 lg:gap-[5rem] gap-10">
          <div className="lg:space-y-5 space-y-4">
            <Bounce cascade>
              <h2 className="title text-dark-100">
                About <span className="text-dark-500">us</span>
              </h2>
            </Bounce>

            <Fade direction="up">
              <p className="lg:leading-[33px] lg:text-xl text-lg lg:text-start text-center font-spaceGrotesk">
                Bolxtine Ltd is a leading provider of software development, web
                app development, mobile app development, and IT consultancy
                services. With a team of experienced professionals and a proven
                track record, we are dedicated to delivering high-quality
                solutions that meet the unique needs of our client.{" "}
                <Link href={"/about-us"} className="text-secondary underline">
                  Learn more
                </Link>
              </p>
            </Fade>
          </div>
          <div className="w-full">
            <Image
              src={"/assets/about-us.svg"}
              alt="About Us"
              width={0}
              height={0}
              className="w-full"
              priority
            />
          </div>
        </section>
      </section>
      <Exprience />
    </>
  );
};

export default AboutUs;

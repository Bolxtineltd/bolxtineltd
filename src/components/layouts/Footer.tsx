import React from "react";
import ContactUsForm from "../ContactUsForm";
import SocialIcons from "../SocialIcons";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer
      className="bg-footer  bg-no-repeat bg-cover lg:pt-20 pt-10 space-y-20 relative "
      id="footer"
    >
      <div className="bg-black/80 absolute inset-0 z-10"></div>
      <section className="wrapper grid lg:grid-cols-2 lg:gap-[4.75rem] gap-10 relative z-50">
        <div className="max-w-[469px] w-full text-white lg:space-y-[3.75rem] space-y-6">
          <div className="lg:space-y-8 space-y-4 lg:text-start text-center">
            <Bounce>
              <h2 className="title">
                <span className="mx-3">Contact</span>{" "}
                <br className="lg:block hidden" />
                us now!
              </h2>
            </Bounce>

            <p className="text text-dark-100">We are happy to hear from you</p>
            <div className="lg:block hidden">
              <SocialIcons />
            </div>
          </div>
          <p className="font-normal text-xl leading-[33px] text-white lg:text-start text-center">
            Bolxtine is a Leading provider of software development, web app
            development, mobile app development, and IT consultancy services.
          </p>
        </div>
        <ContactUsForm />
      </section>
      <section className="wrapper flex justify-between items-center py-6 lg:flex-row flex-col lg:gap-0 gap-6">
        <div className="lg:hidden block">
          <SocialIcons />
        </div>
        <p className="lg:text-base text-sm font-normal leading-[30px] text-dark-100">
          © {new Date().getFullYear()} Bolxtine LTD. Copyright and rights
          reserved
        </p>
        <ul className="flex items-center gap-4 lg:text-base text-sm font-normal leading-[30px] text-dark-100">
          <li>
            <Link href={"/terms-of-services"}>Terms of Service</Link>
          </li>
          <li className="bg-dark-100 size-1"></li>
          <li>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProducts = () => {
  return (
    <section className="bg-our-services  bg-cover bg-center py-10">
      <div className=" rounded-xl bg-white wrapper">
        <div className="lg:p-8 p-4 grid grid-cols-1 lg:grid-cols-[542px_1fr]">
          <div className=" bg-[#F5F5FA] flex flex-col justify-center lg:p-8 p-4 gap-4">
            <Image
              src={"/assets/skirral.svg"}
              alt="skirral"
              width={85}
              height={17}
            />
            <p className="text text-[#41444A]">
              Skirral is a trusted digital platform that connects reliable
              artisans with clients seeking skilled services. Our mission is to
              create a seamless, transparent, and secure marketplace where
              quality meets trust, empowering artisans to grow their businesses
              and clients to complete their projects with confidence.
            </p>
            <Link
              href={"#"}
              className="font-bold text-lg leading-[29.7px] text-primary"
            >
              Coming soon...
            </Link>
          </div>
          <div className="bg-[#F5F5FA] overflow-hidden">
            <Image
              src={"/assets/skirral-app.png"}
              width={594}
              height={378}
              alt="skirral-app"
              className=" animate-bounce-less"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;

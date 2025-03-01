import Banner from "@/components/Banner";
import Exprience from "@/components/Exprience";
import ContentTerms from "@/components/TermsOfServices/Content";
import Hero from "@/components/TermsOfServices/Hero";
import React from "react";

const termsData = [
  {
    title: "1. Information We Collect",
    subTitle: "Personal Information:",
    text: "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
    subTitle2: "Data Information:",
    text2:
      "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
  },
  {
    title: "2. Information We Collect",
    subTitle: "Personal Information:",
    text: "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
  },
  {
    title: "3. Information We Collect",
    subTitle: "Personal Information:",
    text: "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
    subTitle2: "Data Information:",
    text2:
      "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
  },
  {
    title: "4. Information We Collect",
    subTitle: "Personal Information:",
    text: "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
    subTitle2: "Data Information:",
    text2:
      "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
  },
  {
    title: "5. Information We Collect",
    subTitle: "Personal Information:",
    text: "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
  },
  {
    title: "6. Information We Collect",
    subTitle: "Personal Information:",
    text: "We may collect personal information that you provide to us, such as your name, email address, phone number, payment information, and any other information you voluntarily provide when creating an account, making a purchase, or contacting us.",
  },
];

const Page = () => {
  return (
    <>
      <Banner
        title="Privacy Policy"
        content="Our privacy policy"
        className="max-w-[636px]"
      />
      <Hero
        title={`Last Updated: Jan 7, 2025`}
        content={`Bolxtine Ltd ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our mobile application (collectively, the "Services"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not use the Services.`}
      />
      {termsData.map((term, index) => (
        <ContentTerms
          key={index}
          title={term.title}
          subTitle={term.subTitle}
          text={term.text}
          subTitle2={term.subTitle2}
          text2={term.text2}
        />
      ))}
      <Exprience />
    </>
  );
};

export default Page;

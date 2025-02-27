import Image from "next/image";
import React from "react";

const ContactUsForm = () => {
  return (
    <form className="bg-white rounded-xl lg:p-8 p-6 space-y-6 ">
      {inputs.map(({ name, placeholder, type, label }) => (
        <div className="flex flex-col gap-2 group" key={name}>
          <label
            htmlFor={name}
            className="font-bold lg:text-xl text-sm leading-[19px] text-dark"
          >
            {label}
          </label>
          {type === "text" ? (
            <input
              type={type}
              placeholder={placeholder}
              className="bg-[#EBF1F8] lg:p-4 p-2 rounded-lg font-normal lg:text-xl text-sm leading-[19px] border-none outline-none placeholder:text-dark-100"
            />
          ) : (
            <textarea
              placeholder={placeholder}
              name={name}
              id={name}
              className="bg-[#EBF1F8] lg:p-4 p-2 rounded-lg font-normal lg:text-xl text-sm leading-[19px] border-none outline-none placeholder:text-dark-100 "
              rows={2}
            ></textarea>
          )}
        </div>
      ))}
      <div className="flex items-center gap-1 cursor-pointer">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          className="size-[1.125rem]"
        />
        <label
          htmlFor="agreement"
          className="text-[#808086] lg:text-base text-sm font-normal leading-[15.84px] cursor-pointer"
        >
          Yes, I agree to receive updates
        </label>
      </div>
      <button className="btn bg-secondary w-full text-white flex items-center justify-center gap-3 group">
        Submit
        <Image
          src={"/assets/arrow_warm_up.svg"}
          alt="Chat to Learn More Now "
          height={24}
          width={24}
          className=" group-hover:block hidden"
        />
      </button>
    </form>
  );
};

export default ContactUsForm;
const inputs = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name here",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email here",
    type: "text",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Kindly type your message here",
    type: "textarea",
  },
];

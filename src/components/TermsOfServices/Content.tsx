import React from "react";

const ContentTerms = ({
  title,
  subTitle,
  subTitle2,
  text,
  text2,
}: ContentTermsProps) => {
  return (
    <section className="max-w-[858px] w-full px-4 lg:space-y-[36px] space-y-7 mx-auto py-10">
      <h4 className="text-xl font-bold leading-[36px] text-primary">{title}</h4>
      <div className="space-y-2">
        <h5 className="text-xl font-bold leading-[36px]  text-dark">
          {subTitle}
        </h5>
        <p className="text-xl leading-[36px]  text-dark-500">{text}</p>
      </div>
      {text2 && subTitle2 && (
        <div>
          <h5 className="text-xl font-bold leading-[36px]  text-dark">
            {subTitle2}
          </h5>
          <p className="text-xl leading-[36px]  text-dark-500">{text2}</p>
        </div>
      )}
    </section>
  );
};

export default ContentTerms;
interface ContentTermsProps {
  title: string;
  subTitle: string;
  subTitle2?: string;
  text: string;
  text2?: string;
}

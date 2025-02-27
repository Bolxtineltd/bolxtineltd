import { Slide, Zoom } from "react-awesome-reveal";

const GetAQoute = () => {
  return (
    <div className="bg-empowerment lg:p-20 py-4 bg-cover bg-no-repeat bg-center w-full lg:h-[604px]">
      <section className="wrapper space-y-3">
        <Zoom>
          <h1 className="bg-gradient-to-b from-[#004AAD] to-[#DA6708] bg-clip-text text-transparent font-bold lg:text-[5rem] lg:leading-[102.08px] text-[1.5rem] leading-[40px] text-center">
            Empower your business with technology today!
          </h1>
        </Zoom>
        <Slide direction="up">
          <p className="max-w-[463px] mx-auto text-center text">
            Transform your business with our innovative technology solutions
          </p>
        </Slide>
      </section>
    </div>
  );
};

export default GetAQoute;

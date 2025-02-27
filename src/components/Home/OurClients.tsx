import { Fade, Slide } from "react-awesome-reveal";
import ClientMarquee from "../ClientMarquee";

const OurClients = () => {
  return (
    <section className="lg:py-20 py-10 lg:space-y-10 space-y-5">
      <div className="wrapper flex items-center lg:flex-row flex-col lg:justify-start justify-center lg:text-start text-center lg:gap-[103px] gap-4">
        <Fade direction="bottom-left">
          <h2 className="title flex-1">
            <span className="text-dark-100 mx-4">Our</span>
            Clients
          </h2>
        </Fade>
        <Slide direction="up">
          <p className="text max-w-[463px] w-full text-dark-500">
            Here are some of our happy clients and you can also be one of them.
          </p>
        </Slide>
      </div>
      <ClientMarquee lists={clients} />
    </section>
  );
};

export default OurClients;
const clients = [
  "/assets/client1.svg",
  "/assets/client2.svg",
  "/assets/client3.svg",
  "/assets/client4.svg",
  "/assets/client5.svg",
  "/assets/client6.svg",
  "/assets/client7.svg",
  "/assets/client8.svg",
];

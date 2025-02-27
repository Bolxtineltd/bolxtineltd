import AboutUs from "@/components/Home/AboutUs";
import LatestProjectCarousel from "@/components/Home/LatestProjectCarousel";
import OurClients from "@/components/Home/OurClients";
import OurServiceComp from "@/components/Home/OurServiceComp";
import Showcase from "@/components/Home/Showcase";
import Testimonial from "@/components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <Showcase />
      <AboutUs />
      <OurServiceComp />
      <LatestProjectCarousel />
      <OurClients />
      <Testimonial />
    </>
  );
};

export default Home;

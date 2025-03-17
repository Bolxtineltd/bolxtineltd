import AboutUs from "@/components/Home/AboutUs";
import LatestProjectCarousel from "@/components/Home/LatestProjectCarousel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import SlideCarousel from "@/components/ui/SlideCarousel";
import { ChevronRight, Code, Eye, Shield, Target, Zap } from "lucide-react";
import ClientLogos from "@/components/ui/ClientLogos";
import OurServicesSection from "@/components/Home/OurServicesSection";

const Home = () => {
  return (
    <>
      <SlideCarousel slides={slides} />
      {/* Core Values Section */}
      <section id="values" className="py-20 bg-[#384550] text-white ">
        <div className="wrapper space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-white">
                {" "}
                Our Core Values
              </h2>
              <div className="inline-block bg-primary h-2 w-20 rounded-md"></div>
            </div>
            <p className="">
              Our C.R.A.F.T. philosophy guides everything we do, ensuring we
              deliver exceptional results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10 transition-colors shadow-primary shadow-md">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Code size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Creativity
              </h3>
              <p className="">Innovative solutions to complex problems</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white transition-colors shadow-primary shadow-md">
              <div className="w-16 h-16 rounded-full bg-dark-600 flex items-center justify-center mb-4 ">
                <Shield size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-600">
                Reliability
              </h3>
              <p className="text-dark-600">
                Dependable delivery and robust solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10 transition-colors shadow-primary shadow-md">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Zap size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Agility
              </h3>
              <p className="">Adaptable approach to changing needs</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white transition-colors shadow-primary shadow-md">
              <div className="w-16 h-16 rounded-full bg-dark-600 flex items-center justify-center mb-4 ">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark-600">
                Focus
              </h3>
              <p className="text-dark-600">
                Dedicated attention to your business goals
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white/10 transition-colors shadow-primary shadow-md">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Transparency
              </h3>
              <p className="">Clear communication throughout the process</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button
              variant="outline"
              className="gap-2 border border-primary text-primary bg-white h-[52px]"
            >
              Learn More About Our Values
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <AboutUs />
      <OurServicesSection />
      {/* <OurServiceComp /> */}
      {/* Trust Indicators Section */}
      <section id="testimonials" className="py-20 bg-dark-600 text-white">
        <div className="wrapper space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-white">
                {" "}
                Trusted by Industry Leaders
              </h2>
              <div className="inline-block bg-primary h-2 w-20 rounded-md"></div>
            </div>
            <p className="text-primary/80">
              Join the 95% of clients who continue to partner with us year after
              year.
            </p>
          </div>

          <ClientLogos />

          <TestimonialCard />
          <div className="flex justify-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-goldman">
                95%
              </div>
              <div className="text-xl font-semibold mb-1 text-dark-600 font-playfairDisplay">
                Client Retention Rate
              </div>
              <p className="text-slate-600">
                Our clients stay with us because we deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <LatestProjectCarousel />
    </>
  );
};

export default Home;
const slides = [
  {
    id: 1,
    image: "/assets/hero3.png",
    title: "Crafting Excellence, Powering Innovation.",
    description:
      "Transform your ideas into impactful software solutions with precision, agility, and transparency.",
    action: {
      text: "Schedule a Free Consultation",
      path: "",
    },
  },
  {
    id: 2,
    image: "/assets/hero1.png",
    title:
      "Engineering Excellence with Modern Tech: Scalable, Secure, and Intelligent Digital Solutions",
    description:
      "Engineering excellence with modern technology, delivering scalable, secure, and intelligent solutions that drive innovation, empower businesses, and shape digital transformation.",
    action: {
      text: "Explore Our Solutions",
      path: "",
    },
  },
  {
    id: 3,
    image: "/assets/hero2.png",
    title: "Shaping the Future with Innovation",
    description:
      "Shaping the future through innovation, craftsmanship, and excellence, delivering scalable, secure, and intelligent digital solutions that drive growth and transformation.",
    action: {
      text: "Explore Our Solutions",
      path: "",
    },
  },
];

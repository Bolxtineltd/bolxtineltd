import React from "react";
import ServiceCard from "../ServiceCard";

const OurServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b bg-dark-600/70 border-y-4 border-primary"
    >
      <div className="wrapper space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold  text-white font-goldman">
              {" "}
              Our Services
            </h2>
            <div className="inline-block bg-primary h-2 w-20 rounded-md"></div>
          </div>
          <p className="text-white text-base font-playfairDisplay">
            Comprehensive software solutions tailored to your unique business
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Custom Software Development"
            description="Bespoke applications designed to address your specific business challenges and opportunities."
            icon="Code"
          />
          <ServiceCard
            title="Cloud Solutions"
            description="Scalable, secure, and efficient cloud infrastructure to power your digital transformation."
            icon="Cloud"
          />
          <ServiceCard
            title="AI Integration"
            description="Harness the power of artificial intelligence to automate processes and gain valuable insights."
            icon="Brain"
          />
          <ServiceCard
            title="Mobile App Development"
            description="Native and cross-platform mobile applications that deliver exceptional user experiences."
            icon="Smartphone"
          />
          <ServiceCard
            title="DevOps & CI/CD"
            description="Streamlined development operations for faster, more reliable software delivery."
            icon="GitBranch"
          />
          <ServiceCard
            title="Digital Transformation"
            description="End-to-end guidance to modernize your technology stack and business processes."
            icon="RefreshCw"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;

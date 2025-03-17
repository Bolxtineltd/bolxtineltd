import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { ourservices } from "@/constants/services";
import { routes } from "@/constants/routes";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-dark text-white border-b lg:border-primary/55 border-white">
        <div className="wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our software solutions can help you achieve
            your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex  gap-2 justify-center h-[52px]">
              Schedule a Free Consultation
              <ChevronRight size={16} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-white flex  gap-2 justify-center h-[52px]"
            >
              Explore Our Solutions
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-slate-300 py-12">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={"/assets/logo-new.PNG"}
                  alt={"logo"}
                  width={120}
                  height={28}
                  className=""
                />
              </div>
              <p className="text-base text-white/85 mb-4">
                Bolxtine Ltd is a leading provider of software development, web
                app development, mobile app development, and IT consultancy
                services.
              </p>
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Facebook
                    size={18}
                    className="text-slate-300 group-hover:text-primary transition-colors"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Twitter
                    size={18}
                    className="text-slate-300 group-hover:text-primary transition-colors"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Linkedin
                    size={18}
                    className="text-slate-300 group-hover:text-primary transition-colors"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                >
                  <Instagram
                    size={18}
                    className="text-slate-300 group-hover:text-primary transition-colors"
                  />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                {ourservices.map((service) => (
                  <li key={service.id}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {routes.map((route) => {
                  return (
                    route.name !== "Home" && (
                      <li key={route.name}>
                        <Link
                          href="#"
                          className="hover:text-primary transition-colors"
                        >
                          {route.name}
                        </Link>
                      </li>
                    )
                  );
                })}
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-primary mt-1" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-primary mt-1" />
                  <span>contact@craftsolutions.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>123 Innovation Drive, Tech Park, CA 94103</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-12 pt-6 text-sm text-slate-300 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Bolxtine Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white size-16 rounded-full fixed lg:bottom-10 bottom-5 z-50 lg:right-10 right-5 shadow-md shadow-primary flex justify-center items-center">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height={40}
          width={40}
        >
          <title>ChatBot</title>
          <path
            d="M11.999 0c-2.25 0-4.5.06-6.6.21a5.57 5.57 0 00-5.19 5.1c-.24 3.21-.27 6.39-.06 9.6a5.644 5.644 0 005.7 5.19h3.15v-3.9h-3.15c-.93.03-1.74-.63-1.83-1.56-.18-3-.15-6 .06-9 .06-.84.72-1.47 1.56-1.53 2.04-.15 4.2-.21 6.36-.21s4.32.09 6.36.18c.81.06 1.5.69 1.56 1.53.24 3 .24 6 .06 9-.12.93-.9 1.62-1.83 1.59h-3.15l-6 3.9V24l6-3.9h3.15c2.97.03 5.46-2.25 5.7-5.19.21-3.18.18-6.39-.03-9.57a5.57 5.57 0 00-5.19-5.1c-2.13-.18-4.38-.24-6.63-.24zm-5.04 8.76c-.36 0-.66.3-.66.66v2.34c0 .33.18.63.48.78 1.62.78 3.42 1.2 5.22 1.26 1.8-.06 3.6-.48 5.22-1.26.3-.15.48-.45.48-.78V9.42c0-.09-.03-.15-.09-.21a.648.648 0 00-.87-.36c-1.5.66-3.12 1.02-4.77 1.05-1.65-.03-3.27-.42-4.77-1.08a.566.566 0 00-.24-.06z"
            fill="#fb8b24"
          />
        </svg>
      </div>
    </>
  );
};

export default Footer;

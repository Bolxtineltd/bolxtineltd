"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleMenu}
      />

      {/* Slide-out menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out p-6",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between items-center mb-8 bg-white">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">CRAFT</span>
            <span className="text-xl">Solutions</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </Button>
        </div>

        <nav className="flex flex-col space-y-6 bg-white">
          <Link
            href="#"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="#values"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Our Values
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="#testimonials"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </nav>

        <div className="mt-8 pt-8 border-t border-secondary/10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>contact@craftsolutions.com</span>
            </div>
            <Button className="w-full mt-4">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

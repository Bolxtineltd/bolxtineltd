"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollIntoView from "react-scroll-into-view";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export function NavBar() {
  const active = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-white/95 shadow-sm  s md:h-[66px]  sticky top-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <nav className="wrapper flex h-16 items-center justify-between mx-auto">
        <Link href={"/"}>
          <Image
            src={"/assets/logo.svg"}
            alt={"logo"}
            width={160}
            height={28}
            className="lg:block hidden"
          />
          <Image
            src={"/assets/logo.svg"}
            alt={"logo"}
            width={120}
            height={28}
            className="lg:hidden block"
          />
        </Link>

        {/* Desktop Navigation */}
        <menu className=" items-center gap-8 text-dark text-lg leading-[17.82px] font-space-grotesk lg:flex hidden">
          {routes.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={` text-dark py-2 px-4  text-lg rounded-md leading-[17.82px] transition-colors hover:font-bold  hover:bg-[#E5F1FF] ${active === item.path ? "bg-[#E5F1FF] font-bold  rounded-md font-spaceGrotesk" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <ScrollIntoView selector="#footer">
              <button className="py-2 px-6 bg-white border border-secondary rounded-lg text-secondary font-space-grotesk">
                Contact us
              </button>
            </ScrollIntoView>
          </li>
        </menu>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="size-full" />
          ) : (
            <Menu className="size-full" />
          )}
        </Button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="wrapper border-t py-4">
              <nav className="flex flex-col gap-4">
                {routes.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className="block py-2 text-lg font-medium transition-colors hover:text-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2"
                >
                  <ScrollIntoView
                    selector="#footer"
                    onClick={() => setIsOpen(false)}
                  >
                    <button className=" w-full py-2 px-6  border border-secondary rounded-lg text-white bg-secondary font-space-grotesk">
                      Contact us
                    </button>
                  </ScrollIntoView>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export default NavBar;

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our Services",
    path: "/services",
  },
  {
    name: "Our Products",
    path: "/products",
  },
  {
    name: "About us",
    path: "/aboutus",
  },
];

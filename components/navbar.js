"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import screens from "@/utils/tailwindScreens";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= screens.md) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full">
      <nav className="py-2.5 absolute bg-transparent w-full flex z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between container">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              className="h-20"
              alt="BitHippie Logo"
              width={300}
              height={125}
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center rounded-lg bg-transparent p-2 text-sm text-gray-500 focus:outline-none md:hidden"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#AABD7B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {window.innerWidth < screens.md ? (
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full bg-gradient-to-b from-transparent to-bg-dark-grey backdrop-blur-md opacity-95"
                >
                  <ul className="mt-4 flex flex-col">
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss"
                        href="#services"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss"
                        href="#faq"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss"
                        href="#schedule"
                      >
                        Schedule
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss"
                        href="#about"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <div className="w-full hidden md:block md:w-auto bg-gradient-to-b from-transparent to-bg-dark-grey backdrop-blur-md opacity-95">
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-platinum text-2xl hover:text-moss"
                    href="#services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-platinum text-2xl hover:text-moss"
                    href="#faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-platinum text-2xl hover:text-moss"
                    href="#schedule"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white text-platinum text-2xl hover:text-moss"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}

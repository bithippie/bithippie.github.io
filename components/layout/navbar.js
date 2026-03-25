"use client";

import { useCallback, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { navigateAndScroll } from "@/utils/scroll";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleHashClick = useCallback(
    (e, hash) => {
      e.preventDefault();
      setIsOpen(false);
      navigateAndScroll(`/${hash}`, {
        pathname,
        router,
        samePageDelay: isOpen ? 550 : 0,
      });
    },
    [pathname, router, isOpen],
  );

  const navItems = [
    { label: "Outcomes", hash: "#outcomes" },
    { label: "Engagement", hash: "#engagement" },
    { label: "Experience", hash: "#experience" },
    { label: "Schedule", hash: "#schedule" },
  ];

  return (
    <section className="w-full">
      <nav className="py-2.5 absolute bg-transparent w-full flex z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between container">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="BitHippie Logo"
              width={300}
              height={83}
              priority
            />
          </Link>

          {/* Hamburger button (CSS-hidden on md+) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden inline-flex items-center rounded-lg bg-transparent p-2 text-sm text-gray-500 focus:outline-none"
            aria-expanded={isOpen}
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

          {/* Mobile dropdown (full-width flex child, CSS-hidden on md+) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden w-full bg-gradient-to-b from-transparent to-dark-grey backdrop-blur-md opacity-95"
              >
                <ul className="mt-4 flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.hash}>
                      <a
                        className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss cursor-pointer"
                        onClick={(e) => handleHashClick(e, item.hash)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <Link
                      className="block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss"
                      href="/team"
                      onClick={() => setIsOpen(false)}
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop nav (CSS-hidden below md) */}
          <div className="hidden md:block w-auto">
            <ul className="flex mt-0 flex-row space-x-8 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.hash}>
                  <a
                    className="block p-0 border-gray-100 hover:bg-gray-50 border-0 hover:bg-transparent hover:text-cyan-700 text-platinum text-2xl hover:text-moss cursor-pointer"
                    onClick={(e) => handleHashClick(e, item.hash)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="text-platinum text-2xl select-none" aria-hidden="true">|</li>
              <li>
                <Link
                  className="block p-0 border-gray-100 hover:bg-gray-50 border-0 hover:bg-transparent hover:text-cyan-700 text-platinum text-2xl hover:text-moss"
                  href="/team"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

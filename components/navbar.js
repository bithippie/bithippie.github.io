"use client";

import { useCallback, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import screens from "@/utils/tailwindScreens";

function scrollToSection(hash) {
  const name = hash.replace("#", "");
  const el = document.querySelector(`a[name="${name}"]`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mdScreen = parseInt(screens.md);
  const router = useRouter();
  const pathname = usePathname();

  const handleHashClick = useCallback(
    (e, hash) => {
      e.preventDefault();
      setIsOpen(false);
      if (pathname === "/") {
        window.history.replaceState(null, "", `/${hash}`);
        scrollToSection(hash);
      } else {
        router.push(`/${hash}`, { scroll: false });
        setTimeout(() => scrollToSection(hash), 300);
      }
    },
    [pathname, router],
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < mdScreen);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mdScreen]);

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
              height={125}
              priority
            />
          </Link>

          {isSmallScreen ? (
            <>
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
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-gradient-to-b from-transparent to-dark-grey backdrop-blur-md opacity-95"
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
                          className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 hover:bg-gray-50 text-platinum text-2xl hover:text-moss"
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
            </>
          ) : (
            <div className="w-auto">
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
          )}
        </div>
      </nav>
    </section>
  );
}

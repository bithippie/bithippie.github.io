"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import PillLink from "@/components/ui/pill_link";

// ponytail: fixed height instead of the design's ResizeObserver. Its nav could
// wrap to two rows at narrow widths; this one collapses to a hamburger, so the
// bar is always 72px and the spacer can be a constant.
const NAV_H = "h-[72px]";

// Case studies is intentionally absent until the page has real content.
const LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Engagement", href: "/engagement" },
  { label: "Team", href: "/team" },
];

export default function Nav({ spacer = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-20 bg-cream/95 backdrop-blur-md border-b border-ink/10 ${NAV_H}`}
      >
        <nav className="container max-w-screen-xl lg:px-12 h-full flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/assets/images/logo-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <Image
              src="/assets/images/logo-wordmark.svg"
              alt="BitHippie"
              width={140}
              height={30}
              className="h-[30px] w-auto relative top-[3px]"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-plex text-[15px] leading-none pb-[3px] border-b-2 ${
                    active
                      ? "font-medium text-ink border-olive"
                      : "text-ink-body border-transparent hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <PillLink href="/schedule" className="px-5 py-3 text-sm">
              Schedule a Call
            </PillLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden -mr-2 p-2 text-ink"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-b border-ink/10"
            >
              <div className="container max-w-screen-xl py-4 flex flex-col gap-1">
                {LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-plex text-lg text-ink-body py-2.5 border-b border-ink/10 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
                <PillLink
                  href="/schedule"
                  className="mt-4 self-start px-6 py-3.5 text-[15px]"
                >
                  Schedule a Call
                </PillLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {spacer && <div className={NAV_H} aria-hidden="true" />}
    </>
  );
}

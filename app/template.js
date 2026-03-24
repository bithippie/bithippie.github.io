"use client";

import { useEffect } from "react";

import { scrollToSection } from "@/utils/scroll";

export default function Template({ children }) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.scrollTo(0, 0);
      setTimeout(() => scrollToSection(hash), 300);
    }
  }, []);

  return children;
}

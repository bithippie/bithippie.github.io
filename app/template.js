"use client";

import { useEffect } from "react";

export default function Template({ children }) {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.scrollTo(0, 0);
      const name = hash.replace("#", "");
      setTimeout(() => {
        const el = document.querySelector(`a[name="${name}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  return children;
}

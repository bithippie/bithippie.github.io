"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";

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
      }, 800);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

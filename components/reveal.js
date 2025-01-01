"use client";

import { motion } from 'framer-motion';

export default function RevealOnScroll({ children }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
        viewport={{ once: true }}
      >
      {children}
    </motion.div>
  );
}

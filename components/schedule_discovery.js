"use client";

import { motion } from 'framer-motion'

export default function ScheduleDiscovery() {
  return (
    <a href="#schedule">
      <motion.button
        className="bg-moss text-white text-xl mt-8 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
      >
        Schedule a Discovery Call
      </motion.button>
    </a>
  );
}

"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';

export default function ScheduleConsultation() {
  return (
    <Link href="/#schedule">
      <motion.button
        className="bg-moss text-white text-xl px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="hidden sm:block">Schedule My Free Consultation</span>
        <span className="sm:hidden">Schedule A Call</span>
      </motion.button>
    </Link>
  );
}

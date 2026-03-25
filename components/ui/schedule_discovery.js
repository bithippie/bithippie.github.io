"use client";

import { useCallback } from "react";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

import { navigateAndScroll } from "@/utils/scroll";

export default function ScheduleDiscovery() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      navigateAndScroll("/#schedule", { pathname, router });
    },
    [pathname, router],
  );

  return (
    <motion.button
      onClick={handleClick}
      className="bg-moss text-white text-xl mt-8 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.95 }}
    >
      Schedule a Discovery Call
    </motion.button>
  );
}

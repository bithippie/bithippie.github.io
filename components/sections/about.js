"use client";

import { motion } from "framer-motion";

import Divider from "@/components/divider";
import RevealOnScroll from "@/components/reveal";
import Image from "next/image";

export default function About({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-10 pb-20 md:pb-28`}
    >
      <a name="about" />
      <div className="container grid lg:grid-cols-12 gap-8 p-8 max-w-screen-xl items-center">
        <div className="lg:col-span-4 overflow-hidden">
          <RevealOnScroll>
            <Image
              width={360}
              height={360}
              className="w-full h-auto max-h-[400px] object-contain lg:aspect-auto"
              src="/assets/images/home/globe.png"
              alt="Globe"
            />
          </RevealOnScroll>
        </div>
        <div className="lg:col-span-8 text-left flex flex-col items-start space-y-6">
          <h2 className="w-full text-moss mb-8 text-center lg:text-left">
            Why Biotech Companies Choose BitHippie
          </h2>
          <p className="my-4">
            We understand that biotech data infrastructure has unique demands:
            complex experimental workflows, cross-functional collaboration
            between wet lab and computational teams, and systems that must evolve
            as our understanding evolves.
          </p>
          <p className="my-4">
            We&apos;ve built data infrastructure for companies across the biotech
            ecosystem—from AI-driven drug discovery platforms and clinical trial 
            optimization companies to global pharmaceutical research organizations 
            and life sciences venture capital firms.
          </p>
          <p className="my-4">
            Good data systems accelerate research. When scientists can access 
            complete experimental records, run analyses in parallel, and iterate 
            without infrastructure friction—discovery moves faster.
          </p>
          <p className="my-4">
            Great engineering partnerships require more than technical skills—they 
            demand deep understanding of your research operations, adaptability as 
            priorities shift, and genuine investment in your success.
          </p>

          <div className="w-full flex text-center justify-center">
            <a
              href="https://www.linkedin.com/in/bithippie"
              className=""
              target="_blank"
            >
              <motion.button
                className="
                bg-transparent
                text-moss border
                border-moss
                px-8 py-4
                text-xl
                rounded-lg
                shadow-lg
                hover:shadow-xl
              "
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.96 }}
              >
                Get in Touch
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <Divider backgroundColor="dark-grey" curvePosition="end" />
    </section>
  );
}

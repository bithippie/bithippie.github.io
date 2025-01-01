"use client";

import { motion } from "framer-motion";

import Divider from "@/components/divider";
import RevealOnScroll from "@/components/reveal";

export default function About({ backgroundColor }) {
  return (
    <section
      id="about"
      className={`relative bg-${backgroundColor} pt-10 pb-20 md:pb-28`}
    >
      <div className="container grid md:grid-cols-12 gap-8 p-8 max-w-screen-xl items-center">
        <div className="md:col-span-4 overflow-hidden">
          <RevealOnScroll>
            <img
              className="w-full h-auto max-h-[400px] object-contain md:pr-12 md:aspect-auto"
              src="/assets/images/flare/globe.png"
              alt="Globe"
            />
          </RevealOnScroll>
        </div>
        <div className="md:col-span-8 text-justify flex flex-col items-start space-y-6">
          <h2 className="w-full text-4xl text-moss mb-8 text-center lg:text-left">About Our Company</h2>
          <p className="my-4">
            Founder Anthony Torres believes there's more to business than maximizing shareholder value. 
            It's about achieving health, leaving the world better than we found it, thriving in our environment, 
            elevating others, and doing meaningful, challenging work.
          </p>
          <p className="my-4">
            At BitHippie we approach this from the inside out—starting with personal development and a growth-mindset, guided by quarterly 
            work & life goal-setting, supported by accountability, all within a culture of psychological safety.
          </p>
          <p className="my-4">
            We strive daily to be our best so we can give you our best.
          </p>
          <p className="my-4">
            When you work with us, you're working with a team that knows each other deeply. 
            Our shared experiences allow us to collaborate effectively and effortlessly.
          </p>
          <p className="my-4">
            When we're not building digital products customers love, you might find us:
          </p>
          <ul className="list-disc pl-8">
            <li>On top of a mountain watching the total solar eclipse.</li>
            <li>Orienteering in a swim, bike, run adventure race on the Cape.</li>
            <li>Talking about financial independence, health, and dreams for the future.</li>
            <li>Discussing how diet, sleep, and stress are impacting our blood glucose levels.</li>
            <li>Sharing workouts, personal records (PRs), supplements, and the latest non-alcoholic beverages.</li>
            <li>Or lovingly challenging a colleagues limiting beliefs to help them get out of their own way.</li>
          </ul>
          <p className="my-4">
            If you're interested in joining our mission, reach out via LinkedIn to explore if we'd be a good fit.
          </p>

          <div className="w-full flex text-center justify-center md:justify-start">
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

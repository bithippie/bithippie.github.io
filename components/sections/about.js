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
              className="w-full h-auto object-cover md:pr-12 md:aspect-auto"
              src="/globe.png"
              alt="Globe"
              style={{ maxHeight: "400px" }}
            />
          </RevealOnScroll>
        </div>
        <div className="md:col-span-8 text-justify flex flex-col items-start space-y-6">
          <h2 className="text-4xl text-moss mb-8">About Our Company</h2>
          <p>
            BitHippie was started by Founder and serial entrepreneur, Anthony
            Torres, when he came to the realization that mission and the people
            impacted matter much more than maximizing shareholder value.
          </p>
          <p>
            The best way to stay true to that ethos is by aligning his efforts
            with the kind of people who care about the Earth and its
            inhabitants.
          </p>
          <p>
            Rather than do this work alone, Anthony combined his passions for
            making things, personal development, and service into a
            one-of-a-kind community, a force for good.
          </p>
          <p>
            Together he, and the friends made along the way, work together to
            make real change in the world, hold one another accountable, improve
            and maintain our health, and constantly remind one another that
            “together we go far.”
          </p>
          <p>
            If you would like to learn more about the community, please reach
            out on LinkedIn and we can see if you’d be a good fit.
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
                rounded 
                shadow-lg 
                hover:shadow-xl
              "
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.96 }}
              >
                Learn More
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <Divider backgroundColor="dark-grey" curvePosition="end" />
    </section>
  );
}

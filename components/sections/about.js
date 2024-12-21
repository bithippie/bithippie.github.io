"use client";

import Divider from "@/components/divider";
import { motion } from 'framer-motion';
import RevealOnScroll from "@/components/reveal";

export default function About({ backgroundColor }) {
  return (
    <section
      id="about"
      className={`relative bg-${backgroundColor} pt-10 pb-20 md:pb-28`}
    >
      <div className="container grid md:grid-cols-12 gap-8 p-8">
        <div className="md:col-span-7">
          <RevealOnScroll>
            <img className="w-full h-auto md:pr-12" src="/globe.png" />
          </RevealOnScroll>
        </div>
        <div className="md:col-span-5 text-justify flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl md:text-2xl text-moss mb-12">
            About Our Company
          </h2>
          <p className="mb-6">
            BitHippie was started by Founder and serial entrepreneur, Anthony
            Torres, when he came to the realization that mission and the people
            impacted matter much more than maximizing shareholder value.
          </p>
          <p className="mb-6">
            The best way to stay true to that ethos is by aligning his efforts
            with the kind of people who care about the Earth and its
            inhabitants.
          </p>
          <p className="mb-6">
            Rather than do this work alone, Anthony combined his passions for
            making things, personal development, and service into a
            one-of-a-kind community, a force for good.
          </p>
          <p className="mb-6">
            Together he, and the friends made along the way, work together to
            make real change in the world, hold one another accountable, improve
            and maintain our health, and constantly remind one another that
            “together we go far.”
          </p>
          <p className="mb-6">
            If you would like to learn more about the community, please reach
            out on LinkedIn and we can see if you’d be a good fit.
          </p>
          <a href="https://www.linkedin.com/in/bithippie" target="_blank">
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
      <Divider backgroundColor="dark-grey" curvePosition="end" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

import RevealOnScroll from "@/components/ui/reveal";

const partners = [
  {
    name: "Retool",
    image: "/assets/images/partners/retool.png",
    url: "https://retool.com",
  },
  {
    name: "Directus",
    image: "/assets/images/partners/directus.png",
    url: "https://directus.io",
  },
];

export default function Partners({ backgroundColor }) {
  return (
    <section className={`relative bg-${backgroundColor} pt-16 pb-24`}>
      <div className="container max-w-screen-xl px-8 mx-auto">
        <RevealOnScroll>
          <h2 className="text-white text-center mb-4">Our Partners</h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            We work alongside best-in-class technology partners to deliver modern, scalable data solutions for our clients.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center items-center gap-16 mb-16">
          {partners.map((partner) => (
            <RevealOnScroll key={partner.name}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={partner.image}
                  alt={partner.name}
                  className="h-10 w-auto brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="text-center">
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Interested in partnering with BitHippie? We&apos;d love to hear from technology companies aligned with our mission.
            </p>
            <a className="flex justify-center pt-8"
                href="https://www.linkedin.com/in/bithippie"
                target="_blank"
                rel="noopener noreferrer"
              >
              <motion.button
                className="bg-transparent text-white border border-white px-8 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl hover:shadow-white/10"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </motion.button>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

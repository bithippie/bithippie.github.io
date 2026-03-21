"use client";

import { motion } from "framer-motion";

import Divider from "@/components/divider";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/navbar";
import RevealOnScroll from "@/components/reveal";
import Team from "@/components/sections/team";

export default function TeamPage() {
  return (
    <div id="root">
      <main>
        <Navbar />

        {/* Hero */}
        <section className="bg-hero bg-center bg-cover pt-36 pb-20 md:pt-44 md:pb-28 flex relative">
          <div className="container flex flex-col items-center text-center max-w-screen-xl">
            <RevealOnScroll>
              <h2 className="text-white">
                Taking care of ourselves so we can<br/>take better care of the world.
              </h2>
            </RevealOnScroll>
          </div>
          <Divider curvePosition="start" backgroundColor="platinum" />
        </section>

        {/* Team & Advisors */}
        <Team backgroundColor="platinum" />

        {/* Team Culture */}
        <section className="relative bg-moss pt-8 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-dark-grey mb-8 text-center">Beyond the Code</h2>
            </RevealOnScroll>
            <div className="max-w-3xl mx-auto space-y-6 text-lg">
              <RevealOnScroll>
                <p>
                  At BitHippie we&apos;re committed to creating a one-of-a-kind environment that fosters deep connection, personal growth, and elite performance.  
                  Engrained in our culture is the belief that the best professional performance comes first from being our best selves. 
                  To that end, guests and advisors are a common sight around BitHippie. 
                  Each person bringing their perspectives, expertise, and energy in the areas of Safety, Health, Wealth, Connection, Direction (a.k.a. Pursuing purpose).
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  When we&apos;re not building data infrastructure, you might find us:
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2">
                  <li>On top of a mountain watching the total solar eclipse.</li>
                  <li>Orienteering in a swim, bike, run adventure race on The Cape.</li>
                  <li>Hosting a mini music festival from the back of a boat.</li>
                  <li>Talking about financial independence, health, and dreams for the future.</li>
                  <li>Discussing how diet, sleep, and stress impact our blood glucose levels.</li>
                  <li>Sharing workouts, personal records, supplements, and the latest non-alcoholic beverages.</li>
                  <li>Lovingly challenging each other&apos;s limiting beliefs to help us get out of our own way.</li>
                </ul>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="mt-6">
                  We approach business from the inside out—starting with personal 
                  development, guided by quarterly goal-setting, supported by 
                  accountability, all within a culture of psychological safety.
                </p>
              </RevealOnScroll>
            </div>
          </div>
          <Divider backgroundColor="white" curvePosition="end" />
        </section>

        {/* Join Our Network */}
        <section className="relative bg-white pt-10 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-moss mb-12 text-center">Join The BitHippie Network</h2>
            </RevealOnScroll>
            <div className="max-w-3xl mx-auto space-y-6 text-justify text-lg">
              <RevealOnScroll>
                <p>
                  We are always eager to meet people who believe we can do better making 
                  wellness accessible, affordable, and effective.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  Nutrition, Sleep, Exercise, meaningful Relationships, Autonomy, a sense of Purpose,
                  and prudent Risk Taking create the foundation for a thriving existence. 
                  
                  At BitHippie we recognize and honor the synergy between nature&apos;s inherent
                  wisdom complemented by human ingenuity and scientific achievement.  
                  
                  These are two halves of the whole story, yin and yang.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  If you already share in our mission and vision to make individualized 
                  thriving the norm, we&apos;d be grateful to know you. 
                </p>
              </RevealOnScroll>
              
              <a className="flex justify-center pt-8"
                href="https://www.linkedin.com/in/bithippie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-transparent text-moss border border-moss px-8 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Get in Touch
                </motion.button>
              </a>
            </div>
          </div>
          <Divider backgroundColor="dark-grey" curvePosition="end" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

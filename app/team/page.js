"use client";

import { motion } from "framer-motion";

import Divider from "@/components/divider";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/navbar";
import RevealOnScroll from "@/components/reveal";

const values = [
  {
    title: "Meaningful Work",
    description:
      "Our work directly accelerates biotech research. The data platforms we build help scientists focus on breakthroughs—not wrestling with infrastructure. Your code has real impact on human health.",
  },
  {
    title: "Deep Collaboration",
    description:
      "We know each other beyond the codebase. Whether we're on top of a mountain or debugging a pipeline, we bring the same trust and candor to every challenge.",
  },
  {
    title: "Growth Mindset",
    description:
      "We invest in personal development through quarterly goal-setting, accountability partnerships, and a culture of psychological safety where everyone is encouraged to stretch beyond their comfort zone.",
  },
];

const roles = [
  {
    title: "Senior Data Engineer",
    type: "Full-time",
    location: "Remote (US)",
    description:
      "Design and build data pipelines and platform infrastructure for biotech research organizations. You'll work directly with scientists and analysts to turn complex experimental data into reliable, accessible systems.",
  },
  {
    title: "Platform Engineer",
    type: "Full-time",
    location: "Remote (US)",
    description:
      "Own cloud infrastructure, CI/CD, and developer experience for our client engagements. You'll architect scalable systems on AWS and ensure our delivery teams can ship with confidence.",
  },
];

export default function Team() {
  return (
    <div id="root">
      <main>
        <Navbar />

        {/* Hero */}
        <section className="bg-hero bg-center bg-cover pt-36 pb-20 md:pt-44 md:pb-28 flex relative">
          <div className="container flex flex-col items-center text-center max-w-screen-xl">
            <RevealOnScroll>
              <h1 className="text-white">
                The Team Behind <span className="text-moss">BitHippie</span>
              </h1>
              <h2 className="text-platinum text-2xl my-8 md:text-3xl max-w-3xl mx-auto">
                A small team building data infrastructure that accelerates 
                biotech research.
              </h2>
            </RevealOnScroll>
          </div>
          <Divider curvePosition="start" backgroundColor="platinum" />
        </section>

        {/* How We Work */}
        <section className="relative bg-platinum pt-10 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-dark-grey mb-12 text-center">How We Work</h2>
            </RevealOnScroll>
            <div className="max-w-3xl mx-auto space-y-6">
              <RevealOnScroll>
                <p>
                  We operate as embedded engineering partners for biotech companies—
                  working directly alongside research scientists, data analysts, and 
                  domain experts to solve real infrastructure challenges.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  Our engagements start with a{" "}
                  <strong className="text-old-gold">Foundational Partnership</strong>{" "}
                  where we embed with a client team, map their technical landscape, and
                  deliver early wins. This transitions into{" "}
                  <strong className="text-old-gold">Strategic Builds</strong> where we
                  take ownership of major platform development.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  We've built data infrastructure for AI-driven drug discovery platforms, 
                  clinical trial optimization companies, global pharmaceutical research 
                  organizations, and life sciences venture capital firms.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  We value autonomy, clear communication, and craftsmanship. We
                  conduct regular milestone reviews to stay aligned with evolving
                  research priorities, and we trust our engineers to make good
                  decisions close to the work.
                </p>
              </RevealOnScroll>
            </div>
          </div>
          <Divider backgroundColor="white" curvePosition="end" />
        </section>

        {/* Team Culture */}
        <section className="relative bg-white pt-10 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-moss mb-8 text-center">Beyond the Code</h2>
            </RevealOnScroll>
            <div className="max-w-3xl mx-auto space-y-6">
              <RevealOnScroll>
                <p>
                  When you work with BitHippie, you're working with a team that knows
                  each other deeply. Our shared experiences—both technical and 
                  personal—allow us to collaborate effectively and bring our whole 
                  selves to the work.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  When we're not building data infrastructure, you might find us:
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2">
                  <li>On top of a mountain watching the total solar eclipse</li>
                  <li>Orienteering in a swim, bike, run adventure race on the Cape</li>
                  <li>Talking about financial independence, health, and dreams for the future</li>
                  <li>Discussing how diet, sleep, and stress impact our blood glucose levels</li>
                  <li>Sharing workouts, personal records, supplements, and the latest non-alcoholic beverages</li>
                  <li>Lovingly challenging each other's limiting beliefs to help us get out of our own way</li>
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
          <Divider backgroundColor="platinum" curvePosition="start" />
        </section>

        {/* Join Our Network */}
        <section className="relative bg-platinum pt-10 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-moss mb-12 text-center">Join Our Network</h2>
            </RevealOnScroll>
            <div className="max-w-3xl mx-auto space-y-6">
              <RevealOnScroll>
                <p>
                  We occasionally collaborate with senior engineers who understand the 
                  unique demands of biotech data infrastructure—complex experimental 
                  workflows, cross-functional collaboration, and systems that evolve 
                  with research.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  If you're interested in working on challenging problems at the 
                  intersection of engineering and scientific discovery, reach out via 
                  LinkedIn to explore if there's a fit.
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
    </div>
  );
}

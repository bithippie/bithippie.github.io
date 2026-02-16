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
                Build What <span className="text-moss">Matters</span>
              </h1>
              <h2 className="text-platinum text-2xl my-8 md:text-3xl max-w-3xl mx-auto">
                Join a team where engineering excellence meets purpose—accelerating
                biotech research through world-class data infrastructure.
              </h2>
            </RevealOnScroll>
          </div>
          <Divider curvePosition="start" backgroundColor="platinum" />
        </section>

        {/* Why Work With Us */}
        <section className="relative bg-platinum pt-10 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-moss mb-12 text-center">Why Work With Us</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <RevealOnScroll key={value.title}>
                  <div className="bg-white rounded-lg p-8 shadow-md h-full">
                    <h3 className="text-moss mb-4">{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            <div className="max-w-3xl mx-auto space-y-6 mt-16">
              <RevealOnScroll>
                <p>
                  We operate as embedded engineering partners for biotech companies.
                  That means you won&apos;t be building products in isolation—you&apos;ll
                  work directly alongside research scientists, data analysts, and
                  domain experts to solve real problems.
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
              <h2 className="text-moss mb-8 text-center">Our Team Culture</h2>
            </RevealOnScroll>
            <div className="max-w-3xl mx-auto space-y-6">
              <RevealOnScroll>
                <p>
                  When you work with us, you&apos;re working with a team that knows
                  each other deeply. Our shared experiences allow us to collaborate
                  effectively and effortlessly.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p>
                  When we&apos;re not building data infrastructure, you might find us:
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2">
                  <li>On top of a mountain watching the total solar eclipse.</li>
                  <li>Orienteering in a swim, bike, run adventure race on the Cape.</li>
                  <li>Talking about financial independence, health, and dreams for the future.</li>
                  <li>Discussing how diet, sleep, and stress are impacting our blood glucose levels.</li>
                  <li>Sharing workouts, personal records (PRs), supplements, and the latest non-alcoholic beverages.</li>
                  <li>Or lovingly challenging a colleagues limiting beliefs to help them get out of their own way.</li>
                </ul>
              </RevealOnScroll>
            </div>
          </div>
          <Divider backgroundColor="platinum" curvePosition="end" />
        </section>

        {/* Open Roles */}
        <section className="relative bg-platinum pt-10 pb-20 md:pb-28">
          <div className="container max-w-screen-xl p-8">
            <RevealOnScroll>
              <h2 className="text-moss mb-12 text-center">Open Roles</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {roles.map((role) => (
                <RevealOnScroll key={role.title}>
                  <div className="bg-white rounded-lg p-8 shadow-md h-full flex flex-col">
                    <h3 className="text-moss mb-3">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-platinum text-dark-grey px-3 py-1 rounded-full text-sm">
                        {role.type}
                      </span>
                      <span className="bg-platinum text-dark-grey px-3 py-1 rounded-full text-sm">
                        {role.location}
                      </span>
                    </div>
                    <p className="flex-grow">{role.description}</p>
                    <a
                      href="https://www.linkedin.com/in/bithippie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        className="mt-6 bg-moss text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.025 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        Apply via LinkedIn
                      </motion.button>
                    </a>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll>
              <div className="mt-16 text-center max-w-2xl mx-auto">
                <h3 className="text-moss mb-4">Don&apos;t See a Perfect Match?</h3>
                <p className="mb-6">
                  We&apos;re always interested in meeting talented engineers who are
                  passionate about biotech and data infrastructure. Reach out and
                  tell us about yourself.
                </p>
                <a
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
            </RevealOnScroll>
          </div>
          <Divider backgroundColor="dark-grey" curvePosition="end" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

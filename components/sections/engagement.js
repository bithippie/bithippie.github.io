"use client";

import { Avatar, Blockquote } from "flowbite-react";
import { motion } from "framer-motion";

import Divider from "@/components/divider";
import ScheduleConsultation from "@/components/schedule_consultation";
import RevealOnScroll from "@/components/reveal";

export default function HowWeWork({ backgroundColor }) {
  const steps = [
    {
      title: "Discovery Conversation",
      description:
        "We meet with your scientists and leadership to understand what winning looks like—where you are, where you're headed, and what constraints shape your path. We explore fit and outline a roadmap to close that gap.",
    },
    {
      title: "Foundational Partnership (3-6 months)",
      description:
        "We embed with your team, learn how you work, and ship incremental wins early and often using a milestone-based approach. This low-risk engagement establishes our working relationship and sets the foundation for larger strategic builds.",
    },
    {
      title: "Strategic Build (6-12+ months)",
      description:
        "We design and deliver core capabilities of your data platform, informed by our deep understanding of your business priorities. Your scientists focus on research while we handle the complex systems that accelerate it.",
    },
    {
      title: "Milestone Reviews (Every 4-8 weeks)",
      description:
        "Regular milestone reviews keep us aligned as business needs evolve. We check our assumptions periodically to ensure we're always focused on the highest-impact work.",
    }
  ];

  return (
    <section
      className={`relative bg-${backgroundColor} pt-16 pb-24 min-h-[768]`}
    >
      <a name="engagement" />

      <div className="text-center mt-4 text-moss">
        <h2>Engagement Flow</h2>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 max-w-screen-xl">
        {/* Engagement Steps */}
        <div className="sm:col-span-1 space-y-6">
          {steps.map((step, i) => (
            <RevealOnScroll key={i}>
              <motion.div
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-moss text-xl mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Featured Testimonial */}
        <RevealOnScroll>
          <div className="sm:col-span-1 space-y-8">
            <h3 className="text-center lg:text-left">
              Together We'll&nbsp;Go&nbsp;Far…
            </h3>

            <Blockquote className="my-6 bg-gray-50 rounded-lg p-6 shadow-md">
              <Avatar
                className="float-right mb-4 mx-4 sm:mb-0"
                rounded
                size="lg"
                img="/assets/images/testimonials/sara.jpeg"
                alt="Sara Kohnke, PhD"
              />
              <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                &ldquo;I&apos;ve benefitted firsthand from his robust data
                platform construction. As a data scientist, he made my life
                easier everyday. The data platform was designed to be easy to
                use, long lasting, and used across multiple teams&rdquo;
              </p>
              <figcaption className="mt-4 text-center sm:text-left text-gray-600 text-sm sm:text-base italic">
                — Sara Kohnke, PhD // Senior Data Scientist
              </figcaption>
            </Blockquote>
            <Blockquote className="my-6 bg-gray-50 rounded-lg p-6 shadow-md">
              <Avatar
                className="float-right mb-4 mx-4 sm:mb-0"
                rounded
                size="lg"
                img="/assets/images/testimonials/alex.jpeg"
                alt="Alex Greenfield // Chief Scientist & Founder"
              />
              <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                &ldquo;We were able to go from initial product idea to a demo with stakeholders in just a couple of weeks. This enabled rapid iteration, and minimized the chances of building something that nobody would want.&rdquo;
              </p>
              <figcaption className="mt-4 text-center sm:text-left text-gray-600 text-sm sm:text-base italic">
                — Alex Greenfield // Chief Scientist & Founder
              </figcaption>
            </Blockquote>

            <div className="flex justify-center">
              <ScheduleConsultation />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <Divider backgroundColor="platinum" curvePosition="end" />
    </section>
  );
}

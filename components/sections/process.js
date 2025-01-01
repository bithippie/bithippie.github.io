import { Avatar, Blockquote } from "flowbite-react";

import Divider from "@/components/divider";
import EngagementAccordion from "@/components/engagement_accordion";
import ScheduleConsultation from "@/components/schedule_consultation";
import RevealOnScroll from "@/components/reveal";

export default function HowWeWork({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-16 pb-24 min-h-[768]`}
    >
      <a name="how-we-work" />
      
      <div className="text-center">
        <h2>A tried and true&nbsp;process</h2>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 max-w-screen-xl">
        
        {/* Accordion Section */}
        <div className="sm:col-span-1">
          <EngagementAccordion />
        </div>

        {/* Content Section */}
        <RevealOnScroll>
          <div className="sm:col-span-1 space-y-8">

            <h3 className="text-center lg:text-left">
              Let our clients be the first&nbsp;to&nbsp;tell&nbsp;you…
            </h3>

            {/* Quote Section */}
              <Blockquote className="my-6 bg-gray-50 rounded-lg p-6 shadow-md">
                <Avatar
                  className="float-right mb-4 mx-4 sm:mb-0"
                  rounded
                  size="lg"
                  img="/assets/images/testimonials/alex.jpeg"
                  alt="profile picture"
                />
                <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
                  “We were able to go from initial product idea to a demo with
                  stakeholders in just a couple of weeks. This enabled rapid
                  iteration, and minimized the chances of building something that
                  nobody would want.”
                </p>
                <figcaption className="mt-4 text-center sm:text-left text-gray-600 text-sm sm:text-base italic">
                  — Alex Greenfield // Chief Scientist & Founder // Fresnel.bio
                </figcaption>
              </Blockquote>

            {/* Schedule Consultation Button */}
            <div className="flex justify-center">
              <ScheduleConsultation />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <Divider backgroundColor="moss" curvePosition="start" />
    </section>
  );
}

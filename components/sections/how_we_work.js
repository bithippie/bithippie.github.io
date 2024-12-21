import { Avatar, Blockquote } from "flowbite-react";

import Divider from "@/components/divider";
import EngagementAccordion from "@/components/engagement_accordion";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function HowWeWork({ backgroundColor }) {
  return (
    <section
      id="how-we-work"
      className={`relative bg-${backgroundColor} pt-16 pb-24`}
    >
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
        {/* Heading for mobile */}
        <div className="sm:hidden mb-8 text-center">
          <h2 className="text-5xl font-bold">A tried and true process</h2>
        </div>

        {/* Accordion Section */}
        <div className="sm:col-span-1">
          <EngagementAccordion />
        </div>

        {/* Content Section */}
        <div className="sm:col-span-1 space-y-8">
          {/* Heading for larger screens */}
          <h2 className="text-5xl font-bold hidden sm:block">
            A tried and true process
          </h2>

          <h3 className="text-3xl font-semibold text-center sm:text-left">
            Let our clients be the first to tell you…
          </h3>

          {/* Quote Section */}
          <Blockquote className="my-6 bg-gray-50 rounded-lg p-6 shadow-md">
            <Avatar
              className="float-right mb-4 mx-4 sm:mb-0"
              rounded
              size="lg"
              img="/alex.jpeg"
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
          <div className="flex justify-center sm:justify-start">
            <ScheduleConsultation />
          </div>
        </div>
      </div>

      <Divider backgroundColor="moss" curvePosition="start" />
    </section>
  );
}

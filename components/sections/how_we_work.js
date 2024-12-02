import { Avatar, Blockquote } from "flowbite-react";

import EngagementAccordion from "@/components/engagement_accordion";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function HowWeWork({ backgroundColor }) {
  return (
    <section
      id="how-we-work"
      className={`bg-${backgroundColor} pb-20 sm:pb-24 lg:pt-20 lg:pb-24 mb-[-1px] xl:mb-[-2px] 2xl:mb-[-3px]`}
    >
      <div className="container grid sm:grid-cols-2 gap-8 py-8">
        <EngagementAccordion />

        <div className="container">
          <h2 className="text-5xl mb-8">A tried and true process</h2>
          <h3 className="text-3xl">
            Let our clients will be the first to tell you…
          </h3>

          <Blockquote className="mt-8">
            <Avatar
              className="float-right"
              rounded
              size="lg"
              img="/alex.jpeg"
              alt="profile picture"
            />
            “We were able to go from initial product idea to a demo with
            stakeholders in just a couple of weeks. This enabled rapid
            iteration, and minimized the chances of building something that
            nobody would want. ”
          </Blockquote>

          <figcaption className="my-6 flex items-center space-x-3">
            <cite>
              — Alex Greenfield // Chief Scientist & Founder // Fresnel.bio
            </cite>
          </figcaption>

          <ScheduleConsultation />
        </div>
      </div>
    </section>
  );
}

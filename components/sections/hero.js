"use client";

import Divider from "@/components/divider";
import LineDraw from "@/components/line_draw";
import RevealOnScroll from "@/components/reveal";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen py-16 md:py-24 bg-hero bg-center bg-cover flex relative"
    >
      <div className="container flex flex-col items-center self-center text-center max-w-screen-xl">
        <RevealOnScroll>
          <h1 className="text-white text-5xl md:text-6xl">
            Helping mission driven companies{" "}
            <span className="relative inline-block">
              <span className="text-[#AABD7B]">sustainably</span>
              <LineDraw hasScroll={true} />
            </span>{" "}
            deliver digital solutions their users{" "}
            <span className="text-old-gold">love!</span>
          </h1>

          <h2 className="text-platinum text-2xl my-8 md:text-4xl">
            Software, Data, and Cloud Engineering Professionals. Specializing in
            Rapid Product Development, Data Platform Design, and Internal
            Tooling
          </h2>
          <div className="flex place-content-center">
            <ScheduleConsultation />
          </div>
        </RevealOnScroll>
      </div>
      <Divider curvePosition="start" backgroundColor="platinum" />
    </section>
  );
}

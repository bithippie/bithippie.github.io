"use client";

import Divider from "@/components/divider";
import LineDraw from "@/components/line_draw";
import Reveal from "@/components/reveal";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen py-16 md:py-24 bg-hero bg-center bg-cover flex relative"
    >
      <div className="container flex flex-col items-center self-center text-center">
        <Reveal id="revealME">
          <h1 className="text-white text-5xl md:text-6xl">
            Helping good humans{" "}
            <span className="relative inline-block">
              <span className="text-moss">sustainably</span>
              <LineDraw hasScroll={true} />
            </span>{" "}
            deliver digital products customers{" "}
            <span className="text-old-gold">love</span>
          </h1>

          <h2 className="text-platinum text-2xl my-8 md:text-4xl">
            Software, Data, and Cloud Engineering Professionals. Specializing in
            Rapid Product Development, Data Platform Design, and Internal
            Tooling
          </h2>
          <div className="flex place-content-center">
            <ScheduleConsultation />
          </div>
        </Reveal>
      </div>
      <Divider curvePosition="start" backgroundColor="platinum" />
    </section>
  );
}

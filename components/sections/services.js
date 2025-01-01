"use client";

import Divider from "@/components/divider";
import RevealOnScroll from "@/components/reveal";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function WeWorkTogether({ backgroundColor }) {
  return (
    <section
      id="together-we-go-far"
      className={`relative bg-${backgroundColor} pt-14 pb-28`}
    >
      <div className="container py-8 flex flex-col max-w-screen-xl">
        <h2 className="text-6xl text-dark-grey w-full text-center">
          Together We Go Far
        </h2>

        <div className="flex flex-col space-y-4 my-8 ">
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <img
                src="/assets/images/services/idea.png"
                className="rounded-xl m-auto max-w-96 lg:max-w-80"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Rapid Product Development
                </h2>
                <p className="flex text-xl flex-grow text-justify">
                  Our unique blend of deep techincal experience, stategic
                  partnerships, meticulously chosen tooling, and AI companions
                  means our customers see first delivery of an idea in as little
                  as 1&nbsp;month!
                  <br />
                  <br />
                  Timing is critical: Don&apos;t waste time trying to guess what
                  the market wants - build, test, measure, and iterate!
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <img
                src="/assets/images/services/science.png"
                className="rounded-xl m-auto max-w-96 lg:max-w-80"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  A Tech Backbone that Scales
                </h2>
                <p className="text-xl text-justify">
                  Whether you&apos;re a startup founder bootstrapping your
                  business, or a mature business processing volumes of data in
                  the cloud - we know how to design systems for where you are
                  today with a growth plan for how to get where you&apos;re
                  going.
                </p>
                <div className="hidden md:flex md:justify-around items-center justify-between flex-wrap space-x-8">
                  <img
                    src="/assets/images/icons/aws.png"
                    alt="AWS Icon"
                    className="h-8 my-4"
                  />
                  <img
                    src="/assets/images/icons/gcp.png"
                    alt="GCP Icon"
                    className="h-8 my-4"
                  />
                  <img
                    src="/assets/images/icons/render.png"
                    alt="Render.com Icon"
                    className="h-8 my-4"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <img
                src="/assets/images/services/community.png"
                className="rounded-xl m-auto max-w-96 lg:max-w-80"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Fractional Engineering
                </h2>
                <p className="flex text-xl flex-grow text-justify">
                  Multi-discipline Engineering without the price tag. Hiring full-time talent across every engineering specialty can be a major cost. 
                  Our dev shop provides access to engineers who know front-end, API, data, DevOps, 
                  and more so you can get the expertise you need without the overhead.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col items-center">
          <ScheduleConsultation />
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="end" />
    </section>
  );
}

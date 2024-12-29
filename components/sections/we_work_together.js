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
                src="/idea.png"
                className="rounded-xl m-auto max-w-96 lg:max-w-80"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Rapid Product Development
                </h2>
                <p className="flex text-xl flex-grow ">
                  Our unique blend of deep techincal experience, stategic
                  partnerships, maticulously chosen tooling, and AI companions,
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
                src="/science.png"
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
                <div className="hidden md:flex items-center justify-between flex-wrap space-x-8">
                  <img
                    src="/icons/aws.png"
                    alt="AWS Icon"
                    className="h-8 my-4"
                  />
                  <img
                    src="/icons/gcp.png"
                    alt="GCP Icon"
                    className="h-8 my-4"
                  />
                  <img
                    src="/icons/render.png"
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
                src="/community.png"
                className="rounded-xl m-auto max-w-96 lg:max-w-80"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  On Demand Resource Pool
                </h2>
                <p className="flex text-xl flex-grow ">
                  Why pay for what you don&apos;t need? Our team of Software,
                  Data, and Cloud Engineers are available when you need for as
                  long as you need, keeping your operating expenses as low as
                  possible.
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

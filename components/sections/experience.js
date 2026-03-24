"use client";

import Image from "next/image";

import Divider from "@/components/divider";
import RevealOnScroll from "@/components/reveal";
import ScheduleDiscovery from "@/components/schedule_discovery";
import Testimonial from "@/components/testimonial";


export default function Experience({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-10 pb-20 md:pb-28`}
    >
      <a name="experience" />
      <div className="container grid lg:grid-cols-12 gap-8 p-8 max-w-screen-xl items-center">
        <div className="lg:col-span-4">
          <RevealOnScroll>
            <Image
              width={360}
              height={360}
              className="w-full max-w-[300px] mx-auto aspect-square object-contain lg:h-auto lg:aspect-auto lg:max-h-[300px]"
              src="/assets/images/home/globe.png"
              alt="Globe"
            />
          </RevealOnScroll>
        </div>
        <div className="lg:col-span-8 text-left flex flex-col items-start space-y-6">
          <h2 className="w-full text-moss mb-8 text-center lg:text-left">
            Why Biotechs Choose BitHippie
          </h2>
          <p className="my-4 text-lg">
            We understand that biotech data infrastructure has unique demands:
            complex experimental workflows, cross-functional collaboration
            between wet lab and computational teams, and systems that must evolve
            as our understanding evolves.
          </p>
          <p className="my-4">
            We&apos;ve built data infrastructure for companies across the biotech
            ecosystem, from AI-driven drug discovery platforms and clinical trial
            optimization companies to global pharmaceutical research organizations
            and life sciences venture capital firms.
          </p>
          <p className="my-4">
            Good data systems accelerate research. When scientists can access 
            complete experimental records, run analyses in parallel, and iterate 
            without infrastructure friction; discovery moves faster.
          </p>
          <p className="my-4">
            Great engineering partnerships require more than technical skills; they
            demand deep understanding of your research operations, adaptability as 
            priorities shift, and genuine investment in your success.
          </p>
          <p className="my-4">
            We become an extension of your team. We communicate regularly, own execution, and 
            deliver production-ready solutions. Access multi-disciplinary engineering expertise without 
            the overhead of full-time hires.
          </p>

          <Testimonial
            img="/assets/images/testimonials/emily.jpeg"
            alt="Emily Engel // Senior Manager, Patient Engagement Operations"
            attribution="— Emily Engel // Senior Manager, Patient Engagement Operations"
          >
            &ldquo;I do believe in the ultimate mission of patient compensation and your team has advanced that mission tenfold.&rdquo;
          </Testimonial>
          <div className="w-full flex text-center justify-center">
            <ScheduleDiscovery />
          </div>
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="start" />
    </section>
  );
}

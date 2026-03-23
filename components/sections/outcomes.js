"use client";

import Divider from "@/components/divider";
import Image from "next/image";
import RevealOnScroll from "@/components/reveal";
import ScheduleDiscovery from "@/components/schedule_discovery";

export default function WeWorkTogether({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-14 pb-28`}
    >
      <a name="outcomes" />
      <div className="container py-8 flex flex-col max-w-screen-xl">
        <h2 className="text-dark-grey w-full text-center">
          Tech-Enabled Research
        </h2>

        <div className="flex flex-col space-y-4 my-8 ">
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 shadow-sm overflow-hidden my-4" style={{backgroundColor:"#fdfcfb"}}>
              <div className="flex-shrink-0 flex items-center justify-center overflow-hidden w-full h-[260px] lg:w-[360px] lg:h-[360px]" style={{backgroundColor:"#fdfcfb", position:"relative"}}>
                <Image
                  width={300}
                  height={200}
                  src="/assets/images/outcomes/integrated_research.png"
                  className="rounded-xl scale-[1.3]"
                  alt="Turn Data Into Discovery Velocity"
                />
                <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 50%, #fdfcfb 70%)", pointerEvents:"none"}} />
              </div>
              <div className="flex flex-col space-y-6 p-8 pl-6 lg:p-8 lg:pl-4 text-center lg:text-left justify-center">
                <h2 className="text-3xl sm:text-4xl text-moss">
                  Turn Data Into Discovery Velocity
                </h2>
                <p className="text-xl text-justify">
                  The most valuable insights emerge when computational predictions connect to experimental
                  results and downstream outcomes. Patterns between early-stage models and assay performance.
                  Correlations linking screening data to toxicology results. Intelligence that only becomes
                  visible when data flows across your research pipeline.
                </p>
                <p className="text-xl text-justify">
                  We build infrastructure and warehousing strategies that enable cross-functional analysis
                  across computational and wet lab teams. Your scientists discover correlations earlier,
                  refine predictions with real-world results, and make faster decisions—while maintaining
                  appropriate access controls.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 shadow-sm overflow-hidden my-4" style={{backgroundColor:"#fdfcfb"}}>
              <div className="flex-shrink-0 flex items-center justify-center overflow-hidden w-full h-[260px] lg:w-[360px] lg:h-[360px]" style={{backgroundColor:"#fdfcfb", position:"relative"}}>
                <Image
                  width={300}
                  height={200}
                  src="/assets/images/outcomes/parallel_compute.png"
                  className="rounded-xl scale-[1.4]"
                  alt="Eliminate the Latency of Learning"
                />
                <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 50%, #fdfcfb 70%)", pointerEvents:"none"}} />
              </div>
              <div className="flex flex-col space-y-6 p-8 pl-6 lg:p-8 lg:pl-4 text-center lg:text-left justify-center">
                <h2 className="text-3xl sm:text-4xl text-moss">
                  Eliminate the Latency of Learning
                </h2>
                <p className="text-xl text-justify">
                  We&apos;ve seen brilliant computational scientists sidelined for days by computational bottlenecks. 
                  Sequential processing delays discovery. Researchers wait for results instead of learning and iterating. 
                  Multi-day computational failures waste time and resources.
                </p>
                <p className="text-xl text-justify">
                  We build cloud infrastructure that enables parallel processing at scale. Your team gets answers
                  fast—intelligently leveraging CPUs or GPUs to run workloads efficiently and cost-effectively.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-around sm:space-x-8">
                  <Image
                    width={52}
                    height={32}
                    src="/assets/images/icons/aws.png"
                    alt="Amazon Web Services Logo"
                    className="my-4"
                  />
                  <Image
                    width={206}
                    height={32}
                    src="/assets/images/icons/gcp.png"
                    alt="Google Cloud Platform Logo"
                    className="my-4"
                  />
                  <Image
                    width={167}
                    height={32}
                    src="/assets/images/icons/render.png"
                    alt="Render.com Logo"
                    className="my-4"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 shadow-sm overflow-hidden my-4" style={{backgroundColor:"#fdfcfb"}}>
              <div className="flex-shrink-0 flex items-center justify-center overflow-hidden w-full h-[260px] lg:w-[360px] lg:h-[360px]" style={{backgroundColor:"#fdfcfb", position:"relative"}}>
                <Image
                  width={300}
                  height={200}
                  src="/assets/images/outcomes/internal_tools.png"
                  className="rounded-xl scale-[1.4]"
                  alt="Workflows Defined by Science, Not Software"
                />
                <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 50%, #fdfcfb 70%)", pointerEvents:"none"}} />
              </div>
              <div className="flex flex-col space-y-6 p-8 pl-6 lg:p-8 lg:pl-4 text-center lg:text-left justify-center">
                <h2 className="text-3xl sm:text-4xl text-moss">
                  Workflows Defined by Science, Not Software
                </h2>
                <p className="text-xl text-justify">
                  Off-the-shelf bioinformatics platforms fit nobody perfectly. You pay for unused features, navigate
                  workflows that don&apos;t match your science, and lock into expensive licensing.
                </p>
                <p className="text-xl text-justify">
                  We build custom tools designed alongside your team—internal applications and interactive dashboards
                  that replace bloated SaaS products. You own the code, control the features, and set the direction.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 shadow-sm overflow-hidden my-4" style={{backgroundColor:"#fdfcfb"}}>
              <div className="flex-shrink-0 flex items-center justify-center overflow-hidden w-full h-[260px] lg:w-[360px] lg:h-[360px]" style={{backgroundColor:"#fdfcfb", position:"relative"}}>
                <Image
                  width={300}
                  height={200}
                  src="/assets/images/outcomes/sandbox_to_production.png"
                  className="rounded-xl lg:scale-[1.4]"
                  alt="Research Freedom, Production Discipline"
                />
                <div style={{position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 50%, #fdfcfb 70%)", pointerEvents:"none"}} />
              </div>
              <div className="flex flex-col space-y-6 p-8 pl-6 lg:p-8 lg:pl-4 text-center lg:text-left justify-center">
                <h2 className="text-3xl sm:text-4xl text-moss">
                  Research Freedom, Production Discipline
                </h2>
                <p className="text-xl text-justify">
                  Biotech research demands both speed and rigor. Data scientists need freedom to explore, but ad-hoc
                  VM setups create black boxes: results can&apos;t be reproduced, audit trails don&apos;t exist, and
                  workflows remain undocumented.
                </p>
                <p className="text-xl text-justify">
                  We build infrastructure that bridges exploration and production. Infrastructure-as-code gives your
                  team self-service environments that are documented, version-controlled, and auditable. Scientists
                  iterate in sandbox environments, then transition proven workflows to production with full traceability.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="flex flex-col items-center">
          <ScheduleDiscovery />
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="end" />
    </section>
  );
}
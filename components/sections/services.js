"use client";

import Divider from "@/components/divider";
import Image from "next/image";
import RevealOnScroll from "@/components/reveal";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function WeWorkTogether({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-14 pb-28`}
    >
      <a name="services" />
      <div className="container py-8 flex flex-col max-w-screen-xl">
        <h2 className="text-dark-grey w-full text-center">
          Data Platforms That Keep Pace With Discovery
        </h2>

        <div className="flex flex-col space-y-4 my-8 ">
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <Image
                width={360}
                height={360}
                src="/assets/images/services/science.jpg"
                className="rounded-xl m-auto"
                alt="Unified Data Access"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Unified Data Access
                </h2>
                <p className="text-xl text-justify">
                  Your experimental data lives across disconnected
                  systems—instruments, LIMS, ELNs, analysis tools. Your data
                  scientists piece together insights from fragments instead of
                  working with the complete picture. We consolidate these sources
                  into unified datasets so your team can build intelligence from
                  comprehensive data, not guesses.
                </p>
                <p className="text-xl text-justify">
                  We design ETL pipelines that connect your systems into cohesive
                  data flows, capture metadata at scale, and create analytics
                  infrastructure your team actually uses. The result: data
                  scientists spend time on discovery, not data wrangling.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <Image
                width={360}
                height={360}
                src="/assets/images/services/idea.jpg"
                className="rounded-xl m-auto"
                alt="Parallel Compute Environments"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Parallel Compute Environments
                </h2>
                <p className="text-xl text-justify">
                  Your computational bottleneck isn&apos;t your
                  scientists&apos; intelligence—it&apos;s your infrastructure.
                  Heavy workloads run sequentially. Researchers wait for results
                  instead of iterating. We build cloud environments that enable
                  parallel processing, so your team gets answers fast enough to
                  act on them in real time.
                </p>
                <p className="text-xl text-justify">
                  We design scalable compute infrastructure that grows with your
                  data volumes and research demands. Your scientists run
                  computations in parallel, leverage specialized resources when
                  needed, and spend less time waiting and more time discovering.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <Image
                width={360}
                height={360}
                src="/assets/images/services/community.jpg"
                className="rounded-xl m-auto"
                alt="Purpose-Built Internal Tools"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Purpose-Built Internal Tools
                </h2>
                <p className="text-xl text-justify">
                  Off-the-shelf bioinformatics platforms are built for nobody in
                  particular—which means they fit nobody perfectly. You pay for
                  features you&apos;ll never use, navigate workflows that
                  don&apos;t match your science, and lock into expensive
                  licensing. We replace these platforms with custom tools designed
                  for how your team actually works.
                </p>
                <p className="text-xl text-justify">
                  Working closely with your wet lab and computational teams, we
                  build applications that eliminate bloat, match your workflows,
                  and give you control. You own the code. You control the
                  features. You own the future.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col my-4 text-center items-stretch lg:flex-row lg:space-x-8">
              <Image
                width={360}
                height={360}
                src="/assets/images/services/idea.jpg"
                className="rounded-xl m-auto"
                alt="Reliable Deployment and Operations"
              />
              <div className="flex flex-col space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss py-6">
                  Reliable Deployment & Operations
                </h2>
                <p className="text-xl text-justify">
                  In biotech, deployment can&apos;t be a manual process.
                  It&apos;s a compliance risk and an operational bottleneck. Your
                  code sits in repos waiting to go live. We automate this: your
                  code deploys through repeatable, auditable, transparent
                  processes that give you confidence and visibility every step of
                  the way.
                </p>
                <p className="text-xl text-justify">
                  We build deployment automation that integrates with your
                  team&apos;s workflow. Code gets tested automatically. It
                  deploys when ready. Everything is logged and
                  auditable—exactly what biotech governance demands and your
                  operations team needs.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-around sm:space-x-8">
                  <Image
                    width={52.2}
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
        </div>
        <div className="flex flex-col items-center">
          <ScheduleConsultation />
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="end" />
    </section>
  );
}

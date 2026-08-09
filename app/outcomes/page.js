import Image from "next/image";

import Footer from "@/components/layout/footer_v2";
import Nav from "@/components/layout/nav_v2";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

export const metadata = {
  title: "Outcomes | BitHippie",
  description:
    "What changes for your research when the systems underneath it work.",
};

const OUTCOMES = [
  {
    title: "Turn Data Into Discovery Velocity",
    src: "/assets/images/outcomes/integrated_research.png",
    body: [
      "The most valuable insights emerge when computational predictions connect to experimental results and downstream outcomes. Patterns between early-stage models and assay performance. Correlations linking screening data to toxicology results. Intelligence that only becomes visible when data flows across your research pipeline.",
      "We build infrastructure and warehousing strategies that enable cross-functional analysis across computational and wet lab teams. Your scientists discover correlations earlier, refine predictions with real-world results, and make faster decisions, while maintaining appropriate access controls.",
    ],
  },
  {
    title: "Eliminate the Latency of Learning",
    src: "/assets/images/outcomes/parallel_compute.png",
    body: [
      "We've seen brilliant computational scientists sidelined for days by computational bottlenecks. Sequential processing delays discovery. Researchers wait for results instead of learning and iterating. Multi-day computational failures waste time and resources.",
      "We build cloud infrastructure that enables parallel processing at scale. Your team gets answers fast, intelligently leveraging CPUs or GPUs to run workloads efficiently and cost-effectively.",
    ],
  },
  {
    title: "Workflows Defined by Science, Not Software",
    src: "/assets/images/outcomes/internal_tools.png",
    body: [
      "Off-the-shelf bioinformatics platforms fit nobody perfectly. You pay for unused features, navigate workflows that don't match your science, and lock into expensive licensing.",
      "We build custom tools designed alongside your team: internal applications and interactive dashboards that replace bloated SaaS products. You own the code, control the features, and set the direction.",
    ],
  },
  {
    title: "Research Freedom, Production Discipline",
    src: "/assets/images/outcomes/sandbox_to_production.png",
    body: [
      "Biotech research demands both speed and rigor. Data scientists need freedom to explore, but ad-hoc VM setups create black boxes: results can't be reproduced, audit trails don't exist, and workflows remain undocumented.",
      "We build infrastructure that bridges exploration and production. Infrastructure-as-code gives your team self-service environments that are documented, version-controlled, and auditable. Scientists iterate in sandbox environments, then transition proven workflows to production with full traceability.",
    ],
  },
];

export default function OutcomesPage() {
  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 flex flex-col gap-16 lg:gap-[72px] pt-10 lg:pt-16 pb-20 lg:pb-24">
        <Container className="flex flex-col gap-5">
          <Eyebrow>Outcomes</Eyebrow>
          <h1 className="font-grotesk font-semibold text-ink text-[clamp(34px,5.5vw,56px)] leading-[1.05] tracking-[-.025em] max-w-[22ch] text-pretty">
            What changes for your research when the systems underneath it work
          </h1>
        </Container>

        {OUTCOMES.map((outcome, i) => (
          <Container
            key={outcome.title}
            className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <div>
              <Eyebrow className="tracking-[.14em] mb-3.5">
                {String(i + 1).padStart(2, "0")}
              </Eyebrow>
              <h2 className="font-grotesk font-semibold text-ink text-[clamp(26px,3.4vw,34px)] leading-[1.15] tracking-[-.015em] mb-4 text-pretty">
                {outcome.title}
              </h2>
              {outcome.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-plex text-[16.5px] leading-[1.65] text-ink-body mb-4 last:mb-0 text-pretty"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <Image
              src={outcome.src}
              alt={outcome.title}
              width={768}
              height={512}
              className={`w-full h-auto rounded-lg ${i % 2 ? "lg:order-first" : ""}`}
            />
          </Container>
        ))}
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";

import Footer from "@/components/layout/footer_v2";
import Nav from "@/components/layout/nav_v2";
import DataPlatformDiagram from "@/components/sections/data_platform_diagram";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import PillLink from "@/components/ui/pill_link";

// Case studies is intentionally absent until the page has real content.
const NEXT_PAGES = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Engagement", href: "/engagement" },
  { label: "Team", href: "/team" },
];

export default function Home() {
  return (
    <div
      id="bh-scroller"
      className="h-[100dvh] overflow-y-auto overflow-x-hidden bg-cream snap-y snap-mandatory"
    >
      <Nav spacer={false} />

      {/* 01 Opening */}
      <section className="h-[100dvh] snap-start pt-[104px] grid grid-rows-[1fr_auto] relative z-[2] pointer-events-none">
        <Container className="flex flex-col justify-center gap-8">
          <h1 className="font-grotesk font-semibold text-ink text-[clamp(32px,6.8vw,104px)] leading-none tracking-[-.035em] md:whitespace-nowrap">
            Don&apos;t Duct Tape Your Data...
            <sup className="text-[.24em] font-medium tracking-[.06em] align-super relative -top-[.2em] left-[.06em] opacity-40">
              TM
            </sup>
          </h1>
          <p className="font-mono font-medium text-[13px] leading-[1.9] tracking-[.18em] uppercase text-olive">
            Drug development is hard enough. Let&apos;s not make it harder by being
            haphazard with our data.{" "}
            <br className="hidden lg:block" />
            Good data systems accelerate research.
          </p>
        </Container>

        <Container className="flex items-center gap-3.5 pb-10">
          <Eyebrow className="text-[11px]">Scroll</Eyebrow>
          <span className="w-11 h-px bg-ink/30 block" />
        </Container>
      </section>

      {/* 02 Data platform */}
      <section className="h-[100dvh] snap-start pt-[104px] grid grid-rows-[auto_minmax(0,1fr)] relative z-0">
        <div id="sec2-head" className="pointer-events-auto">
          {/* pt matches PageHeader's pt-10 lg:pt-16 once the section's own
              pt-[104px] and the fixed nav are accounted for, so the eyebrow
              lands at the same y as on every nested page. */}
          <Container className="grid gap-7 lg:grid-cols-[3fr_1fr] lg:gap-10 items-center pt-2 lg:pt-8">
            <div className="flex flex-col gap-3.5">
              <Eyebrow>What we build</Eyebrow>
              <h2 className="font-grotesk font-semibold text-ink text-[clamp(30px,3.2vw,44px)] leading-[1.05] tracking-[-.02em] text-pretty">
                The Data Platform
              </h2>
              <p className="font-mono font-medium text-[11px] leading-[1.7] tracking-[.18em] uppercase text-olive">
                End-to-End Data Ops for Scientific Research, Target Identification,
                Drug Discovery and Development,{" "}
                <br className="hidden lg:block" />
                creating efficient business systems for BioTech.
              </p>
            </div>
            <div className="flex lg:justify-center">
              <PillLink href="/capabilities" variant="outline" className="px-6 py-4 text-base">
                See the case studies
              </PillLink>
            </div>
          </Container>
        </div>

        <DataPlatformDiagram />
      </section>

      {/* 03 Closing */}
      <section className="min-h-[100dvh] snap-start pt-[104px] grid md:grid-rows-[1fr_auto] relative z-[2] bg-cream">
        {/* self-start stops the container stretching to fill the 1fr row —
            it was centring the block, which floated the eyebrow off the
            shared y. items-center still centres the two columns. */}
        <Container className="self-start grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-[72px] items-center pt-2 lg:pt-8 pb-12">
          <div className="flex flex-col gap-6">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="font-grotesk font-semibold text-ink text-[clamp(32px,4.2vw,58px)] leading-[1.03] tracking-[-.03em] max-w-[16ch] text-pretty">
              Tell us what your scientists are working around.
            </h2>
            <div className="flex flex-wrap gap-3.5 items-center">
              <PillLink href="/schedule" className="px-7 py-[18px] text-base">
                Schedule a Discovery Call
              </PillLink>
              <PillLink href="/capabilities" variant="outline" className="px-6 py-[18px] text-base">
                See the case studies
              </PillLink>
            </div>
          </div>

          <div className="border-l-2 border-olive pl-6 flex flex-col">
            <Eyebrow className="tracking-[.14em] mb-4">
              You bring the bio; we bring the tech.
            </Eyebrow>
            {NEXT_PAGES.map((page, i) => (
              <Link
                key={page.href}
                href={page.href}
                className={`flex justify-between items-center gap-5 py-3.5 font-plex text-[17px] leading-tight text-ink hover:text-rust ${
                  i < NEXT_PAGES.length - 1 ? "border-b border-ink/[.14]" : ""
                }`}
              >
                {page.label}
                <span className="font-grotesk font-light text-lg leading-none text-olive">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>

        {/* On phones the closing section runs past one screen, and mandatory
            snap with no target down there would strand the footer. Giving it
            its own snap point fixes that; on md+ the footer already sits
            inside the first screen, so it must not be one. */}
        <div className="snap-start md:snap-align-none">
          <Footer />
        </div>
      </section>
    </div>
  );
}

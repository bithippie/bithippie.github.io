import Image from "next/image";

import Footer from "@/components/layout/footer_v2";
import Nav from "@/components/layout/nav_v2";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import PageHeader from "@/components/ui/page_header";

export const metadata = {
  title: "Schedule a Discovery Call | BitHippie",
  description:
    "Book a discovery conversation. We partner with biotech companies from venture-backed startups to global pharmaceutical research organizations.",
};

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ30HK2RiO6pCj8Uol07xqWiU14qAi3SgveSUNA71At4MPz0Yo3VQZbTPn2eyAfR94LS1vM3oW08?gv=true";

// The four testimonials the previous site had scattered across the home
// sections. The design set dropped them; they land here instead.
const TESTIMONIALS = [
  {
    name: "Jacob Oppenheim",
    title: "Venture Partner",
    image: "/assets/images/testimonials/jacob.jpeg",
    quote:
      "BitHippie has innovated practical and effective solutions in diverse fields from computational biology and bioinformatics, to laboratory + scientific systems, to classic business + financial systems, to health care over this time.",
  },
  {
    name: "Sara Kohnke, PhD",
    title: "Senior Data Scientist",
    image: "/assets/images/testimonials/sara.jpeg",
    quote:
      "I've benefitted firsthand from his robust data platform construction. As a data scientist, he made my life easier every day. The data platform was designed to be easy to use, long-lasting, and used across multiple teams.",
  },
  {
    name: "Alex Greenfield",
    title: "Chief Scientist & Founder",
    image: "/assets/images/testimonials/alex.jpeg",
    quote:
      "We were able to go from initial product idea to a demo with stakeholders in just a couple of weeks. This enabled rapid iteration, and minimized the chances of building something that nobody would want.",
  },
  {
    name: "Emily Engel",
    title: "Senior Manager, Patient Engagement Operations",
    image: "/assets/images/testimonials/emily.jpeg",
    quote:
      "I do believe in the ultimate mission of patient compensation and your team has advanced that mission tenfold.",
  },
];

const WHY = [
  "We understand that biotech data infrastructure has unique demands: complex experimental workflows, cross-functional collaboration between wet lab and computational teams, and systems that must evolve as our understanding evolves.",
  "We've built data infrastructure for companies across the biotech ecosystem, from AI-driven drug discovery platforms and clinical trial optimization companies to global pharmaceutical research organizations and life sciences venture capital firms.",
  "Good data systems accelerate research. When scientists can access complete experimental records, run analyses in parallel, and iterate without infrastructure friction, discovery moves faster.",
  "Great engineering partnerships require more than technical skills; they demand deep understanding of your research operations, adaptability as priorities shift, and genuine investment in your success.",
  "We become an extension of your team. We communicate regularly, own execution, and deliver production-ready solutions. Access multi-disciplinary engineering expertise without the overhead of full-time hires.",
];

const PRICING = [
  ["Discovery", "1–2 months", "$15k–$30k"],
  ["Foundational", "3–6 months", "$100k+"],
  ["Strategic Build", "6+ months", "$400k+"],
];

function Lead({ children }) {
  return (
    <p className="font-plex text-base leading-[1.65] text-ink-body mb-4 last:mb-0 text-pretty">
      {children}
    </p>
  );
}

function Highlight({ children }) {
  return <strong className="font-medium text-rust">{children}</strong>;
}

const FAQS = [
  {
    q: "How do partnerships begin?",
    a: (
      <>
        <Lead>
          We start with a <Highlight>Discovery Conversation</Highlight> to
          understand your data infrastructure needs and research priorities. We
          explore whether there&apos;s strong alignment between your challenges
          and our expertise.
        </Lead>
        <Lead>
          If the fit is right, we move into a{" "}
          <Highlight>Foundational Partnership</Highlight> where we embed with
          your team, map your technical landscape, and identify the
          highest-impact opportunities. This phase builds the working
          relationship and technical understanding that enables larger strategic
          work.
        </Lead>
        <Lead>
          By the end of this phase,{" "}
          <Highlight>
            we&apos;ve delivered early wins and established a &ldquo;Now, Next,
            and After&rdquo; data platform roadmap.
          </Highlight>
        </Lead>
      </>
    ),
  },
  {
    q: "What can I expect during a typical engagement?",
    a: (
      <>
        <Lead>
          We begin with a <Highlight>Foundational Partnership</Highlight> (3-6
          months) where we embed with your team, understand your research
          priorities and technical landscape, and deliver early wins.
        </Lead>
        <Lead>
          This transitions into a <Highlight>Strategic Build</Highlight> (6-12+
          months) where we take ownership of major platform development: you
          focus on your science, we handle the technical execution.
        </Lead>
        <Lead>
          Many clients{" "}
          <Highlight>continue partnering with us</Highlight> on successive
          strategic initiatives as their platform needs evolve, whether
          that&apos;s expanding capabilities, integrating new data sources, or
          scaling infrastructure for growth.
        </Lead>
        <Lead>
          We function as your engineering partner, owning execution, integrating
          seamlessly with your team, and enabling your research operations.
        </Lead>
      </>
    ),
  },
  {
    q: "What will it cost?",
    a: (
      <>
        <Lead>
          Partnership cost will vary depending on the composition of your
          technical team, scope, and the complexity of infrastructure
          we&apos;re providing.
        </Lead>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse min-w-[420px]">
            <thead>
              <tr className="border-b border-ink/25">
                {["Partnership", "Timeline", "Starting at"].map((head) => (
                  <th
                    key={head}
                    className="font-mono font-medium text-[11px] uppercase tracking-[.14em] text-olive py-2.5 pr-6"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING.map(([tier, timeline, price]) => (
                <tr key={tier} className="border-b border-ink/[.14]">
                  <td className="font-plex font-medium text-[15px] text-ink py-3 pr-6">
                    {tier}
                  </td>
                  <td className="font-plex text-[15px] text-ink-body py-3 pr-6">
                    {timeline}
                  </td>
                  <td className="font-mono text-[15px] text-rust py-3">
                    {price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Lead>
          <Highlight>
            You get access to a multi-disciplinary delivery team with decades of
            combined technical and product experience helping scientists
            accelerate their research, without the overhead of building an
            internal function.
          </Highlight>
        </Lead>
        <Lead>
          We stay current with technology so your scientists can stay focused on
          breakthroughs.
        </Lead>
      </>
    ),
  },
  {
    q: "How do you adapt to our changing priorities?",
    a: (
      <>
        <Lead>
          Research priorities shift as science evolves. Our partnership model is
          built for this reality.
        </Lead>
        <Lead>
          For our longer-term Strategic Builds,{" "}
          <Highlight>
            we conduct regular milestone reviews, typically every 4-8 weeks, to
            assess progress and ensure alignment with your evolving priorities.
          </Highlight>{" "}
          This structured cadence keeps us nimble while maintaining momentum on
          core development.
        </Lead>
      </>
    ),
  },
];

export default function SchedulePage() {
  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        <PageHeader
          eyebrow="Schedule"
          title="Schedule a discovery call."
          lead="We partner with biotech companies across the spectrum, from venture-backed startups and computational biology companies to AI-driven drug discovery platforms and global pharmaceutical research organizations, building the data infrastructure that accelerates discovery."
        />

        <div className="bg-panel border-y border-ink/[.12]">
          <Container className="py-14 lg:py-20">
            {/* Google's embed renders a transparent body, so whatever sits
                behind it shows through — but it paints the slot grid pure
                white. bg-white here so the card reads as one surface. */}
            <div className="bg-white border border-ink/[.14] rounded-lg overflow-hidden max-w-[1024px] mx-auto">
              <iframe
                src={CALENDAR_URL}
                title="Schedule a discovery call with BitHippie"
                className="w-full h-[1240px] lg:h-[780px] block border-0"
              />
            </div>
          </Container>
        </div>

        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start py-20 lg:py-24">
          <div>
            <Eyebrow tone="olive" className="mb-5">
              Why biotechs choose BitHippie
            </Eyebrow>
            <h2 className="font-grotesk font-semibold text-ink text-[clamp(28px,4vw,42px)] leading-[1.08] tracking-[-.02em] text-pretty">
              Good data systems accelerate research
            </h2>
          </div>
          <div>
            {WHY.map((paragraph) => (
              <p
                key={paragraph}
                className="font-plex text-[16.5px] leading-[1.65] text-ink-body mb-4 last:mb-0 text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Container>

        <div className="bg-panel border-y border-ink/[.12]">
          <Container className="py-20 lg:py-24">
            <div className="border-t-2 border-ink pt-6 mb-9">
              <h2 className="font-grotesk font-semibold text-ink text-[clamp(26px,3.4vw,34px)] leading-[1.1] tracking-[-.02em]">
                In their words
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((person) => (
                <figure
                  key={person.name}
                  className="bg-cream border border-ink/[.14] rounded-lg p-7 flex flex-col gap-5"
                >
                  <blockquote className="font-plex text-[16.5px] leading-[1.6] text-ink-body text-pretty">
                    &ldquo;{person.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3.5 mt-auto">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={104}
                      height={104}
                      className="w-[52px] h-[52px] rounded-full object-cover shrink-0"
                    />
                    <div>
                      <div className="font-grotesk font-semibold text-[17px] leading-tight text-ink">
                        {person.name}
                      </div>
                      <div className="font-mono text-[12.5px] leading-snug text-rust mt-1">
                        {person.title}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </div>

        <Container className="py-20 lg:py-24">
          <div className="border-t-2 border-ink pt-6 mb-4">
            <h2 className="font-grotesk font-semibold text-ink text-[clamp(26px,3.4vw,34px)] leading-[1.1] tracking-[-.02em]">
              Frequently asked questions
            </h2>
          </div>

          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-ink/[.14]"
            >
              <summary className="flex gap-6 items-start justify-between py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-grotesk font-semibold text-ink text-[clamp(19px,2.2vw,24px)] leading-[1.25] tracking-[-.01em] text-pretty">
                  {faq.q}
                </span>
                <span className="font-grotesk font-light text-2xl leading-none text-olive shrink-0 mt-1 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-8 max-w-[70ch]">{faq.a}</div>
            </details>
          ))}
        </Container>
      </main>

      <Footer />
    </div>
  );
}

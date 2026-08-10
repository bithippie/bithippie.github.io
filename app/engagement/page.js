import Footer from "@/components/layout/footer_v2";
import Nav from "@/components/layout/nav_v2";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import PageHeader from "@/components/ui/page_header";
import PillLink from "@/components/ui/pill_link";

export const metadata = {
  title: "Engagement | BitHippie",
  description:
    "How we work together, from the first discovery conversation through strategic builds and milestone reviews.",
};

// Carried over verbatim from the previous site's engagement section rather
// than the design file's placeholders.
const STEPS = [
  {
    title: "Discovery Conversation",
    description:
      "We meet with your scientists and leadership to understand what winning looks like: where you are, where you're headed, and what constraints shape your path. We explore fit and outline a roadmap to close that gap.",
  },
  {
    title: "Foundational Partnership (3-6 months)",
    description:
      "We embed with your team, learn how you work, and ship incremental wins early and often using a milestone-based approach. This low-risk engagement establishes our working relationship and sets the foundation for larger strategic builds.",
  },
  {
    title: "Strategic Build (6-12+ months)",
    description:
      "We design and deliver core capabilities of your data platform, informed by our deep understanding of your business priorities. Your scientists focus on research while we handle the complex systems that accelerate it.",
  },
  {
    title: "Milestone Reviews (Every 4-8 weeks)",
    description:
      "Regular milestone reviews keep us aligned as business needs evolve. We check our assumptions periodically to ensure we're always focused on the highest-impact work.",
  },
  // Draft copy, pending review.
  {
    title: "Ongoing Maintenance",
    description:
      "Systems need care after they ship. We monitor for failures before your scientists run into them, keep dependencies and security patches current, and fix what breaks. You own the code and your engineers can carry it, so this stays as light or as hands-on as you want it.",
  },
];

export default function EngagementPage() {
  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 pb-20 lg:pb-24">
        <PageHeader
          eyebrow="Engagement"
          title="How we work together."
          lead="From first call to handoff, and what you own at the end."
        />

        <Container>
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-5 sm:gap-6 items-start py-6 border-b border-ink/[.14]"
            >
              <Eyebrow className="tracking-[.14em] text-xs pt-1 min-w-[34px]">
                {String(i + 1).padStart(2, "0")}
              </Eyebrow>
              <div className="flex flex-col gap-2">
                <h2 className="font-plex font-medium text-[19px] leading-[1.3] text-ink">
                  {step.title}
                </h2>
                <p className="font-plex text-base leading-[1.6] text-ink-body max-w-[64ch] text-pretty">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </Container>

        <Container className="mt-12 lg:mt-14">
          <PillLink href="/schedule" className="px-7 py-[18px] text-base">
            Schedule a Discovery Call
          </PillLink>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

import Image from "next/image";

import Footer from "@/components/layout/footer_v2";
import Nav from "@/components/layout/nav_v2";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import PillLink from "@/components/ui/pill_link";

export const metadata = {
  title: "Team | BitHippie",
  description:
    "A small, senior group of engineers and advisors. You work with the people whose names are on this page.",
};

const LINKEDIN = "https://www.linkedin.com/in/bithippie";

// Roster is the current one (Cassandra in, Bruno out), not the design file's,
// which predates those changes.
const TEAM = [
  {
    name: "Anthony",
    title: "Founder & CEO",
    image: "/assets/images/team/anthony.jpeg",
    linkedin: LINKEDIN,
    bio: "Biotech engineering consultant. Co-host of the Brainwave Exchange Podcast. Wellness enthusiast, earth conscious.",
  },
  {
    name: "Jason",
    title: "Director of Engineering",
    image: "/assets/images/team/jason.jpeg",
    linkedin: "https://www.linkedin.com/in/jason-davis-cooke/",
    bio: "Co-host of the Brainwave Exchange Podcast.",
  },
  {
    name: "Lisa",
    title: "Head of Engagement Management",
    image: "/assets/images/team/lisa.jpeg",
    linkedin: "https://www.linkedin.com/in/lisa-hoopes/",
    bio: "Nutritionist and founder of Hoopes Health. Co-creator of the “Dinghy Disco.” Living aboard a sailboat.",
  },
  {
    name: "Matheus",
    title: "Software & DevOps Engineer",
    image: "/assets/images/team/matheus.jpeg",
    linkedin: "https://www.linkedin.com/in/eng-matheus-henrique/",
  },
  {
    name: "Cassandra",
    title: "Fractional Chief Growth Officer",
    image: "/assets/images/team/cassandra.jpeg",
    linkedin: "https://www.linkedin.com/in/cassandraferrara/",
  },
  {
    name: "Vincent",
    title: "Software Architect",
    image: "/assets/images/team/vincent.jpeg",
    linkedin: "https://www.linkedin.com/in/vtellier/",
  },
  {
    name: "Steen",
    title: "Software Engineering Leader",
    image: "/assets/images/team/steen.jpeg",
    linkedin: "https://www.linkedin.com/in/whoissteen/",
  },
  {
    name: "Tadeu",
    title: "Full Stack Engineer",
    image: "/assets/images/team/tadeu.jpeg",
    linkedin: "https://www.linkedin.com/in/tadeu-barbosa/",
  },
];

const ADVISORS = [
  {
    name: "Gordon",
    image: "/assets/images/team/gordon.jpeg",
    linkedin: "https://www.linkedin.com/in/gordon-j-reynolds/",
    bio: "Business Advisor and Technical Engagement Manager.",
  },
  {
    name: "Michael",
    image: "/assets/images/team/michael.jpeg",
    linkedin:
      "https://www.linkedin.com/in/michaelostrolenkresiliencemastery/",
    bio: "Executive performance coach and strategic advisor for founders and exec teams leading through pressure, complexity, and growth. Former SEALFIT Master Coach.",
  },
  {
    name: "Mark",
    image: "/assets/images/team/mark.jpeg",
    linkedin: "https://www.linkedin.com/in/mark-a-carrion/",
    bio: "Team Performance Advisor. SEAL Officer.",
  },
];

// Carried over from the previous team page; the design file predates it.
const PARTNERS = [
  { name: "Retool", image: "/assets/images/partners/retool.png", url: "https://retool.com" },
  { name: "Directus", image: "/assets/images/partners/directus.png", url: "https://directus.io" },
];

const OFF_HOURS = [
  "On top of a mountain watching the total solar eclipse.",
  "Orienteering in a swim, bike, run adventure race on The Cape.",
  "Hosting a mini music festival from the back of a boat.",
  "Talking about financial independence, health, and dreams for the future.",
  "Discussing how diet, sleep, and stress impact our blood glucose levels.",
  "Sharing workouts, personal records, supplements, and the latest non-alcoholic beverages.",
  "Lovingly challenging each other's limiting beliefs to help us get out of our own way.",
];

function SectionHeading({ children }) {
  return (
    <div className="border-t-2 border-ink pt-6 mb-9">
      <h2 className="font-grotesk font-semibold text-ink text-[clamp(26px,3.4vw,34px)] leading-[1.1] tracking-[-.02em]">
        {children}
      </h2>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-[72px] lg:items-end pt-14 lg:pt-24 pb-16 lg:pb-[76px]">
          <div>
            <Eyebrow tone="olive" className="mb-6">
              The team
            </Eyebrow>
            <h1 className="font-grotesk font-semibold text-ink text-[clamp(36px,6vw,68px)] leading-[1.04] tracking-[-.03em] text-pretty">
              Taking care of ourselves so we can take better care of the world.
            </h1>
          </div>
          <p className="font-plex text-[17px] leading-[1.6] text-ink-muted text-pretty">
            A small, senior group of engineers and advisors. You work with the
            people whose names are on this page, not with a bench of contractors
            you never meet.
          </p>
        </Container>

        <Container className="pb-20 lg:pb-[88px]">
          <SectionHeading>Core team</SectionHeading>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <article
                key={member.name}
                className="bg-panel border border-ink/[.14] rounded-lg overflow-hidden flex flex-col"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={450}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-[26px] pb-7 flex flex-col flex-1">
                  <h3 className="font-grotesk font-semibold text-2xl leading-tight text-ink mb-1.5">
                    {member.name}
                  </h3>
                  <div className="font-mono font-medium text-[13.5px] leading-snug text-rust">
                    {member.title}
                  </div>
                  {member.bio && (
                    <p className="font-plex text-[15px] leading-[1.6] text-ink-body mt-3.5">
                      {member.bio}
                    </p>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-plex font-medium text-sm leading-none text-rust hover:text-olive mt-auto pt-4 border-t border-ink/[.14] self-start"
                    >
                      LinkedIn &rarr;
                    </a>
                  )}
                </div>
              </article>
            ))}

            <article className="bg-ink rounded-lg p-8 flex flex-col justify-between gap-6">
              <div>
                <Eyebrow className="tracking-[.16em] text-amber mb-4">
                  Open seat
                </Eyebrow>
                <h3 className="font-grotesk font-semibold text-2xl leading-[1.22] text-cream mb-3">
                  We are always eager to meet people
                </h3>
                <p className="font-plex text-[15px] leading-[1.6] text-night-text">
                  If you share our mission to make individualized thriving the
                  norm, we&apos;d be grateful to know you.
                </p>
              </div>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="font-plex font-medium text-[15px] leading-none text-amber self-start hover:text-night-link"
              >
                Get in touch &rarr;
              </a>
            </article>
          </div>
        </Container>

        <div className="bg-panel border-y border-ink/[.12]">
          <Container className="py-20 lg:py-[88px]">
            <SectionHeading>Trusted advisors</SectionHeading>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ADVISORS.map((advisor) => (
                <article
                  key={advisor.name}
                  className="bg-cream border border-ink/[.14] rounded-lg p-[26px] flex gap-5 items-start"
                >
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={152}
                    height={152}
                    className="w-[76px] h-[76px] rounded-full object-cover shrink-0"
                  />
                  <div>
                    <h3 className="font-grotesk font-semibold text-[21px] leading-tight text-ink mb-1.5">
                      {advisor.name}
                    </h3>
                    <p className="font-plex text-[14.5px] leading-[1.55] text-ink-body">
                      {advisor.bio}
                    </p>
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-plex font-medium text-sm leading-none text-rust hover:text-olive mt-3.5"
                    >
                      LinkedIn &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </div>

        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start py-20 lg:py-24">
          <div>
            <Eyebrow tone="olive" className="mb-5">
              Beyond the code
            </Eyebrow>
            <h2 className="font-grotesk font-semibold text-ink text-[clamp(28px,4vw,42px)] leading-[1.08] tracking-[-.02em] mb-5 text-pretty">
              The best professional performance comes first from being our best
              selves
            </h2>
            <p className="font-plex text-[16.5px] leading-[1.65] text-ink-body mb-4 text-pretty">
              At BitHippie we&apos;re committed to creating a one-of-a-kind
              environment that fosters deep connection, personal growth, and
              elite performance. Guests and advisors are a common sight around
              BitHippie, each person bringing their perspectives, expertise, and
              energy in the areas of Safety, Health, Wealth, Connection, and
              Direction.
            </p>
            <p className="font-plex text-[16.5px] leading-[1.65] text-ink-body text-pretty">
              We approach business from the inside out, starting with personal
              development, guided by quarterly goal-setting, supported by
              accountability, all within a culture of psychological safety.
            </p>
          </div>

          <div>
            <Eyebrow className="tracking-[.14em] mb-[18px]">
              When we&apos;re not building data infrastructure
            </Eyebrow>
            <ul className="border-b border-ink/[.16]">
              {OFF_HOURS.map((item) => (
                <li
                  key={item}
                  className="font-plex text-base leading-[1.55] text-ink-body border-t border-ink/[.16] py-[15px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <Container className="pb-20 lg:pb-24">
          <div className="border-t-2 border-ink pt-6 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
            <div className="max-w-[40ch]">
              <Eyebrow tone="olive" className="mb-3">
                Our partners
              </Eyebrow>
              <p className="font-plex text-[16.5px] leading-[1.65] text-ink-body text-pretty">
                We work alongside best-in-class technology partners to deliver
                modern, scalable data solutions for our clients.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-10">
              {PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={411}
                    height={80}
                    className="h-8 w-auto brightness-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>

        <Container className="pb-20 lg:pb-24">
          <div className="bg-ink rounded-[10px] px-8 py-12 sm:px-14 sm:py-16 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16 items-center">
            <div>
              <Eyebrow className="tracking-[.18em] text-amber mb-4">
                Join the BitHippie network
              </Eyebrow>
              <h2 className="font-grotesk font-semibold text-cream text-[clamp(26px,3.6vw,40px)] leading-[1.08] tracking-[-.02em] mb-5 text-pretty">
                We are always eager to meet people who believe we can do better
                making wellness accessible, affordable, and effective.
              </h2>
              <p className="font-plex text-[16.5px] leading-[1.65] text-night-text max-w-[640px] text-pretty">
                Nutrition, Sleep, Exercise, meaningful Relationships, Autonomy, a
                sense of Purpose, and prudent Risk Taking create the foundation
                for a thriving existence. At BitHippie we recognize and honor the
                synergy between nature&apos;s inherent wisdom complemented by
                human ingenuity and scientific achievement. These are two halves
                of the whole story, yin and yang.
              </p>
            </div>
            <PillLink
              href={LINKEDIN}
              className="justify-self-start lg:justify-self-end px-8 py-5 text-[17px]"
            >
              Get in Touch
            </PillLink>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

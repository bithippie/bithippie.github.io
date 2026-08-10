import Footer from "@/components/layout/footer_v2";
import Nav from "@/components/layout/nav_v2";
import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";
import PageHeader from "@/components/ui/page_header";
import PainChips, { OpenHashDetails } from "@/components/ui/pain_chips";
import PillLink from "@/components/ui/pill_link";

export const metadata = {
  title: "Capabilities | BitHippie",
  description:
    "Ingestion, cataloging, internal tools, production workflows, architecture, access, and integration with the ELN and LIMS you already own.",
};

// Copy is verbatim from the design file. Chip order is deliberately not the
// capability order — it leads with the pain we hear most.
const CAPABILITIES = [
  {
    id: "data-ingestion",
    kicker:
      "Data arrives from CROs, buckets, APIs, and brokers, in every format anyone ships",
    title: "Ingestion of heterogeneous data sources",
    body: "CSV, XLSX, Parquet, Avro, coming from CROs, cloud storage buckets, APIs, and data brokers. Vendors make breaking schema changes without warning. We have built an ingestion framework that provides stability, quality, harmonization, and fit for purpose data packages, so your data scientists and computational biologists work from good data.",
    cta: "Talk about ingestion",
    deliverables: [
      "Connectors for CROs, buckets, APIs, brokers",
      "CSV, XLSX, Parquet, and Avro handled",
      "Breaking schema changes caught early",
      "Fit for purpose data packages",
    ],
    snapshot:
      "A biotech client entering Phase I. Five CRO feeds in four file formats, harmonized into one data package their scientists query directly.",
  },
  {
    id: "data-catalogs",
    kicker: "The dataset someone needs already exists, and nobody can find it",
    title: "Data catalogs your business can actually read",
    body: "A catalog that answers four questions without a meeting: what data exists, who owns it, what is inside it, and how to get access. Written for scientists and program leads, not only for the data team.",
    cta: "Talk about cataloging",
    deliverables: [
      "Searchable dataset inventory",
      "Named owners and stewards",
      "Field level descriptions",
      "Access request path that resolves",
    ],
    snapshot:
      "A top-10 pharma company. Three research groups found they had been buying the same external dataset twice.",
  },
  {
    id: "internal-lab-apps",
    kicker: "Your scientists keep a spreadsheet next to the system of record",
    title: "Internal apps for the wet lab and the dry lab",
    body: "Tools designed next to the bench and next to the notebook: record research, visualize results, annotate data, trigger a workflow. Built around how your team actually runs an experiment, and you own the code.",
    cta: "Talk about internal tools",
    deliverables: [
      "Working app in front of users early",
      "Result and annotation views",
      "Workflow triggers from the UI",
      "Source code and deploy pipeline",
    ],
    snapshot:
      "A biotech client. An idea became a tool their scientists used daily, instead of a year-long platform purchase.",
  },
  {
    id: "production-workflows",
    kicker: "A three day run fails on hour sixty and starts over",
    title: "Notebooks turned into production workflows",
    body: "We take the Python your computational team already wrote and make it a workflow that runs in parallel, picks CPU or GPU per step, restarts from the failed step, and reports what it cost. The science stays theirs. The operational weight moves to us.",
    cta: "Talk about pipelines",
    deliverables: [
      "Containerized, parameterized steps",
      "Right sized CPU and GPU selection",
      "Retries, checkpoints, run history",
      "Cost per run, visible to the team",
    ],
    snapshot:
      "An AI drug discovery platform. Screening runs went from overnight batches to same day answers.",
  },
  {
    id: "data-architecture",
    kicker: "Six systems, four owners, no one holding the whole picture",
    title: "Architecture for end to end data operations",
    body: "The design for how information moves through your company: available where it is needed, fit for the purpose it is used for, fast enough to ask a second question, and observable when something breaks. Then we build it with you, in stages you can fund.",
    cta: "Talk about architecture",
    deliverables: [
      "Current state map, honestly drawn",
      "Now, Next, and After roadmap",
      "Infrastructure as code foundation",
      "Monitoring and on call reality check",
    ],
    snapshot:
      "A biotech-focused venture firm. A data operations design their portfolio companies now start from.",
  },
  {
    id: "data-access-apis",
    kicker: "The data is there, and the only way in is a person with a login",
    title: "APIs into data silos, with access policy built in",
    body: "Interfaces that let systems, models, and agents read what they are allowed to read. Access rules live in the service instead of in someone's memory, so opening data up does not mean giving everything away.",
    cta: "Talk about access",
    deliverables: [
      "Documented service interfaces",
      "Role and project based policy",
      "Audit trail of every read",
      "Agent and MCP ready endpoints",
    ],
    snapshot:
      "A top-10 pharma company. A legacy compound store opened to three downstream teams under one policy.",
  },
  {
    id: "eln-lims-integration",
    kicker: "You have already bought the tools. Replacing them is not the plan",
    title: "Working with the ELN, LIMS, and tooling you have",
    body: "We connect to the electronic lab notebook, the LIMS, and the bioinformatics tools your scientists already use. Decades of software and data engineering judgement, plus agentic development, MCP tooling, and low code platforms where they genuinely shorten the path.",
    cta: "Talk about your stack",
    deliverables: [
      "Integrations with current systems",
      "A working prototype early",
      "A clear buy, build, or connect call",
      "Handover your engineers can carry",
    ],
    snapshot:
      "A biotech client. A working prototype on top of an ELN everyone had written off as closed.",
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 pb-20 lg:pb-24">
        <OpenHashDetails />
        <PageHeader
          eyebrow="Capabilities"
          title="Everything your scientists should never have to think about"
        />

        <div className="bg-panel border-y border-ink/[.14]">
          <Container className="py-9 flex flex-col gap-5">
            <Eyebrow className="tracking-[.16em]">Start where it hurts</Eyebrow>
            <PainChips />
          </Container>
        </div>

        <Container className="pt-2">
          {CAPABILITIES.map((cap, i) => (
            <details
              key={cap.id}
              id={cap.id}
              className="group border-b border-ink/[.14] scroll-mt-[88px] last:border-b-0"
            >
              <summary className="grid grid-cols-[36px_1fr_28px] sm:grid-cols-[56px_1fr_40px] gap-5 sm:gap-7 items-start py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-mono font-medium text-xs leading-relaxed text-olive">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="block">
                  <span className="block font-mono text-[13px] sm:text-sm leading-normal text-rust mb-2">
                    {cap.kicker}
                  </span>
                  <span className="block font-grotesk font-semibold text-ink text-[clamp(21px,2.6vw,30px)] leading-[1.2] tracking-[-.01em] text-pretty">
                    {cap.title}
                  </span>
                </span>
                <span className="justify-self-end mt-1.5 font-grotesk font-light text-2xl leading-none text-olive transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="grid sm:grid-cols-[56px_1fr] gap-7 pb-10">
                <div className="hidden sm:block" />
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10">
                  <div>
                    <Eyebrow tone="olive" className="tracking-[.14em] mb-3">
                      What we build
                    </Eyebrow>
                    <p className="font-plex text-base leading-[1.65] text-ink-body mb-5 text-pretty">
                      {cap.body}
                    </p>
                    <PillLink
                      href="/schedule"
                      variant="outline"
                      className="px-5 py-3 text-[15px]"
                    >
                      {cap.cta}
                    </PillLink>
                  </div>

                  <div>
                    <Eyebrow tone="olive" className="tracking-[.14em] mb-3">
                      Deliverables
                    </Eyebrow>
                    <ul className="flex flex-col gap-2.5 pl-4 list-disc marker:text-olive">
                      {cap.deliverables.map((item) => (
                        <li
                          key={item}
                          className="font-plex text-sm leading-normal text-ink-body"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-l-2 border-amber pl-3">
                    <Eyebrow className="tracking-normal mb-1.5">
                      Case snapshot
                    </Eyebrow>
                    <p className="font-plex text-[13px] leading-normal text-ink-body">
                      {cap.snapshot}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </Container>

        <Container className="mt-14">
          <div className="bg-ink rounded-md px-8 py-9 sm:px-11 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <p className="font-grotesk font-medium text-cream text-[clamp(20px,2.2vw,24px)] leading-[1.35] max-w-[620px] text-pretty">
              Not sure which of these you need first? That is what the discovery
              conversation is for.
            </p>
            <PillLink
              href="/schedule"
              className="self-start px-6 py-4 text-[15px]"
            >
              Schedule a Discovery Call
            </PillLink>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

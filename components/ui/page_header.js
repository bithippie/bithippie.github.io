import Container from "@/components/ui/container";
import Eyebrow from "@/components/ui/eyebrow";

// Every route's opening block. The design files drifted between 56px and 68px
// headlines and swapped the eyebrow between rust and olive page to page; this
// settles on one treatment so the set reads as one site. Olive matches the
// nav's active underline, leaving rust for labels inside a page.
export default function PageHeader({ eyebrow, title, lead }) {
  // Top gap is deliberately tighter than the 80/96px rhythm between the
  // sections below it — space grows down the page, so the header reads as
  // anchored to the nav rather than floating.
  return (
    <Container className="pt-10 lg:pt-16 pb-10 lg:pb-14">
      {/* The rule hangs off an inner wrapper so the Container's bottom padding
          stays as the gap between it and whatever section follows. */}
      <div
        className={`border-b-2 border-ink pb-8 ${
          lead ? "grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-[72px] lg:items-end" : ""
        }`}
      >
        <div>
          <Eyebrow tone="olive" className="mb-6">
            {eyebrow}
          </Eyebrow>
          <h1 className="font-grotesk font-semibold text-ink text-[clamp(36px,5.2vw,64px)] leading-[1.03] tracking-[-.03em] max-w-[22ch] text-pretty">
            {title}
          </h1>
        </div>
        {lead && (
          <p className="font-plex text-[17px] leading-[1.6] text-ink-muted text-pretty">
            {lead}
          </p>
        )}
      </div>
    </Container>
  );
}

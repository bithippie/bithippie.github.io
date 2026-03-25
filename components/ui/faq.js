"use client";

import { Accordion } from "@/components/ui/accordion";

export default function FAQ() {
  const accordionItems = [
    {
      key: "beginning",
      title: "How do partnerships begin?",
      text: (
        <>
          <p className="my-4">
            We start with a <strong className="text-old-gold">Discovery Conversation</strong>{" "} 
            to understand your data infrastructure needs and research priorities. We explore whether 
            there&apos;s strong alignment between your challenges and our expertise.
          </p>
          <p className="my-4">
            If the fit is right, we move into a <strong className="text-old-gold">Foundational Partnership</strong>{" "}
            where we embed with your team, map your technical landscape, and identify 
            the highest-impact opportunities. This phase builds the working 
            relationship and technical understanding that enables larger 
            strategic work.
          </p>
          <p className="my-4">
            By the end of this phase, <strong className="text-old-gold">we&apos;ve delivered early wins and 
            established a &ldquo;Now, Next, and After&rdquo; data platform roadmap.</strong>
          </p>
        </>
      ),
    },
    {
      key: "engagement",
      title: "What can I expect during a typical engagement?",
      text: (
        <>
          <p className="my-4">
            We begin with a <strong className="text-old-gold">Foundational Partnership</strong>{" "}
            (3-6 months) where we embed with your team, understand your research
            priorities and technical landscape, and deliver early wins.
          </p>
          <p className="my-4">
            This transitions into a{" "}
            <strong className="text-old-gold">Strategic Build</strong>{" "}
            (6-12+ months) where we take ownership of major platform development: you focus on your science,
            we handle the technical execution.
          </p>
          <p className="my-4">
            Many clients <strong className="text-old-gold">continue partnering with us</strong>{" "}
            on successive strategic initiatives as their platform needs evolve, whether
            that&apos;s expanding capabilities, integrating new data sources, or scaling
            infrastructure for growth.
          </p>
          <p className="my-4">
            We function as your engineering partner, owning execution, integrating
            seamlessly with your team, and enabling your research operations.
          </p>
        </>
      ),
    },
    {
      key: "cost",
      title: "What will it cost?",
      text: (
        <>
          <p className="my-4">
            Partnerships cost will vary depending on the
            composition of your technical team, scope, and the complexity
            of infrastructure we&apos;re providing.
          </p>
          <table className="my-4 w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 pr-4">Partnership</th>
                <th className="py-2 pr-4">Timeline</th>
                <th className="py-2">Starting At</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Discovery</td>
                <td className="py-2 pr-4">1–2 months</td>
                <td className="py-2">$15k-$30k</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 pr-4">Foundational</td>
                <td className="py-2 pr-4">3–6 months</td>
                <td className="py-2">$100k+</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Strategic Build</td>
                <td className="py-2 pr-4">6+ months</td>
                <td className="py-2">$400k+</td>
              </tr>
            </tbody>
          </table>
          <p className="my-4">
            <strong className="text-old-gold">
              You get access to a multi-disciplinary delivery team with decades of combined
              technical and product experience helping scientists accelerate their research,
              without the overhead of building an internal function. 
            </strong>
            <br/><br/>
            We stay current with technology so your scientists can stay focused on breakthroughs.
          </p>
        </>
      ),
    },
    {
      key: "adaptability",
      title: "How do you adapt to our changing priorities?",
      text: (
        <>
          <p className="my-4">
            Research priorities shift as science evolves. Our partnership model is built for this reality.
          </p>
          <p className="my-4">
            For our longer-term Strategic Builds,{" "}
            <strong className="text-old-gold">we conduct regular milestone 
            reviews—typically every 4-8 weeks—to assess progress and ensure 
            alignment with your evolving priorities.</strong> This structured cadence 
            keeps us nimble while maintaining momentum on core development.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="mb-16 min-h-[300px]">
      <h3 className="text-moss my-8 text-center xl:mb-0 xl:text-left">
        Frequently Asked Questions
      </h3>
      <Accordion accordionItems={accordionItems} />
    </section>
  );
}

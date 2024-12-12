"use client";

import { Accordion } from "@/components/accordion";

export default function EngagementAccordion() {
  const accordionItems = [
    {
      key: 0,
      title: "Discover",
      text: "We take the time to understand you, your business, and your goals.",
    },
    {
      key: 1,
      title: "Design",
      text: "We craft a design plan that includes look and feel, the connection points between systems, and what’s needed now, next, then later.",
    },
    {
      key: 2,
      title: "Develop",
      text: "Our first-hand experience, complimented by a meticulously chosen blend of tools, allows us to move fast without sacrificing quality.",
    },
    {
      key: 3,
      title: "Mantain",
      text: "We set up automatic detection for when issues arise, and automate resolution where possible. This ensures your product runs smoothly, and expectedly for years to come.",
    },
  ];
  return <Accordion accordionItems={accordionItems} />;
}

"use client";

import { Accordion } from "@/components/accordion";

export default function EngagementAccordion() {
  const accordionItems = [
    {
      key: 0,
      title: "Discover",
      text: `
        We take the time to truly understand you and your business. 
        There are no one-size-fits-all solutions, we listen to uncover what truly drives success. 
        Together, we focus on the high-leverage activities that make the biggest impact, 
        ensuring every effort moves the needle in meaningful ways.
      `,
    },
    {
      key: 1,
      title: "Design",
      text: `
        We create a detailed plan with a clear vision of your product's look and feel, 
        system integrations, and what needs to be built at every stage. 
        The process is laid out — now, next, then after — so you'll feel confident moving forward with each step.
      `,
    },
    {
      key: 2,
      title: "Develop",
      text: `
        Development happens quickly, with the first version available in just a month. 
        Our deep technical expertise, carefully selected tools, and AI-driven automation 
        minimize time spent on repetitive tasks, letting us focus on what matters most.
      `,
    },
    {
      key: 3,
      title: "Mantain",
      text: `
        Our commitment doesn't end with delivery. We offer continuous support, 
        monitoring the performance of your product, fixing any issues, and implementing updates. 
        We make sure your product stays reliable, secure, and aligned with your evolving business needs, 
        ensuring it continues to thrive over time.
      `,
    },
  ];
  return <Accordion accordionItems={accordionItems} />;
}

"use client";

import { Accordion } from "flowbite-react";

import { styles } from "@/components/faq";

export default function EngagementAccordion() {
  return (
    <div className="container">
      <Accordion collapseAll theme={styles.root}>
        <Accordion.Panel>
          <Accordion.Title theme={styles.title}>Discover</Accordion.Title>
          <Accordion.Content theme={styles.content}>
            We take the time to understand you, your business, and your goals.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title theme={styles.title}>Design</Accordion.Title>
          <Accordion.Content theme={styles.content}>
            We craft a design plan that includes look and feel, the connection
            points between systems, and what’s needed now, next, then later.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title theme={styles.title}>Develop</Accordion.Title>
          <Accordion.Content theme={styles.content}>
            Our first-hand experience, complimented by a meticulously chosen
            blend of tools, allows us to move fast without sacrificing quality.
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title theme={styles.title}>Maintain</Accordion.Title>
          <Accordion.Content theme={styles.content}>
            We set up automatic detection for when issues arise, and automate
            resolution where possible. This ensures your product runs smoothly,
            and expectedly for years to come.
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

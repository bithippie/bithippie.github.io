"use client";

import { Accordion } from "flowbite-react";

export default function Component() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel> 
        <Accordion.Title>Discover</Accordion.Title>
        <Accordion.Content>
          We take the time to understand you, your business, and your goals.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Design</Accordion.Title>
        <Accordion.Content>
          We craft a design plan that includes look and feel, the connection points between systems, and what’s needed now, next, then later.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Develop
        </Accordion.Title>
        <Accordion.Content>
          Our first-hand experience, complimented by a meticulously chosen blend of tools, allows us to move fast without sacrificing quality.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Maintain</Accordion.Title>
        <Accordion.Content>
          We set up automatic detection for when issues arise, and automate resolution where possible.
          This ensures your product runs smoothly, and expectedly for years to come.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>   
  );
}
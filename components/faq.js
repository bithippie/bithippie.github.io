"use client";

import { Accordion } from "flowbite-react";

export default function Component() {
  return (
    <section id="faq">
        <h3 className="text-3xl my-8">Frequently Asked Questions</h3>
        <Accordion collapseAll>
            <Accordion.Panel> 
                <Accordion.Title>What will it cost?</Accordion.Title>
                <Accordion.Content>
                    <p className="my-4">
                        We know teams come with many different kinds of constraints. We try to work within everyone’s scope and budget.
                    </p>
                    <p className="my-4">
                        That said, the smallest engagement we’ll accept is a one 1 month commitment and a budget of $12,000 USD.
                    </p>
                    <p className="my-4">
                        The listed price does not indicate the price of a contract, pricing is a function of scope and complexity. 
                        This minimum has been provided to serve as a safeguard in the event your budget constraints are less than our threshold.
                    </p>
                    <p className="my-4">
                        Our typical small-to-medium projects range between $12,000 - $24,000 USD per month.
                    </p>
                    <p className="my-4">
                        We do offer discounted rates for engagements that are for 3 or more consecutive months.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>How is the work structured?</Accordion.Title>
                <Accordion.Content>
                    <p className="my-4">
                        Our Sustainable Engineering model is designed to give you access to high quality Software, Data, and Cloud Engineers and Architects. Allowing you to keep your headcount and operating expenses low.
                    </p>
                    <p className="my-4">
                        We scope work into 1 month Milestones, consisting of (2) two-week Sprints, totaling 20 business days.
                    </p>
                    <p className="my-4">
                        At the beginning of each Milestone all key stakeholders align on the main objectives.
                    </p>
                    <p className="my-4">
                        The sprints serve as checkpoints within the Milestone to demonstrate progress, and provides an opportunity to realign in the event the circumstances change.
                    </p>
                    <p className="my-4">
                        We have ad hoc as well as recurring engagement models.
                    </p>
                    <p className="my-4">
                        Our ad hoc model, the end of the Milestone signals the end of the arrangement.
                    </p>
                    <p className="my-4">
                        In a recurring engagement, you’ll have access to the same team for as long as you need. We do require 30 days notice to conclude the engagement.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>How are payments structured?</Accordion.Title>
                <Accordion.Content>
                    <p className="my-4">
                        Payment structure depends on the length of the engagement.
                    </p>

                    <p className="my-4">
                        Ad hoc Engagements:

                        1 Milestone (4 weeks), payment is submitted in thirds:

                        1/3 Is required to schedule a kick-off.

                        1/3 is due after we’ve completed the 1st sprint.

                        1/3 is due after we’ve completed the 2nd sprint.
                    </p>
                    <p className="my-4">
                        Recurring Engagement:

                        3 or more Milestones (12+ weeks), an invoice is submitted in arrears for the month with a Net 30 due date.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>What if I'm not happy?</Accordion.Title>
                <Accordion.Content>
                    <p className="my-4">
                    While we never want to get to that point, our Sustainable Engineering models is structured such that you can end the relationship in at most 1 Month.
                    </p>
                    <p className="my-4">
                    When you provide notice to terminate the arrangement, all future development work plans will be suspended and you will only be invoiced for work delivered and any off-boarding work you authorize us to conclude.
                    </p>
                    <p className="my-4">
                    We will do our best to make the situation right before we need to take more severe measures such as terminating the arrangement.
                    </p>
                    <p className="my-4">
                    Fret not, if this is something you’re worried about, check out Why people love working with BitHippie!
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>   
    </section>
  );
}


              
              

              

              
              

              
              
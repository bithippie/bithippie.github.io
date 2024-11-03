"use client";

import { Accordion } from "flowbite-react";

export default function Component() {
  return (
    <>
        <h3 className="text-3xl my-8">Frequently Asked Questions</h3>
        <Accordion collapseAll>
            <Accordion.Panel> 
                <Accordion.Title>What is your minimum engagement?</Accordion.Title>
                <Accordion.Content>
                    We know teams come with many different kinds of constraints. We try to work within everyone’s scope and budget.
                    
                    That said, the smallest engagement we’ll accept is a one 1 month commitment and a budget of $12,000 USD.

                    The listed price does not indicate the price of a contract, pricing is a function of scope and complexity. This minimum has been provided to serve as a safeguard in the event your budget constraints are less our threshold.

                    We do offer discounted rates for engagements that are for 3 or more consecutive months.
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>How is the work structured?</Accordion.Title>
                <Accordion.Content>
                    Our Sustainable Engineering model is designed to give you access to high quality Software, Data, and Cloud Engineers and Architects. Allowing you to keep your headcount and operating expenses low.

                    We scope work into 1 month Milestones, consisting of (2) two-week Sprints, totaling 20 business days.

                    At the beginning of each Milestone all key stakeholders align on the main objectives.

                    The sprints serve as checkpoints within the Milestone to demonstrate progress, and provides an opportunity to realign in the event the circumstances change.

                    We have ad hoc as well as recurring engagement models.

                    Our ad hoc model, the end of the Milestone signals the end of the arrangement.

                    In a recurring engagement, you’ll have access to the same team for as long as you need. We do require 30 days notice to conclude the engagement.
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>How are payments structured?</Accordion.Title>
                <Accordion.Content>
                    Payment structure depends on the length of the engagement.

                    Ad hoc Engagements:

                    1 Milestone (4 weeks), payment is submitted in thirds:

                    1/3 Is required to schedule a kick-off.

                    1/3 is due after we’ve completed the 1st sprint.

                    1/3 is due after we’ve completed the 2nd sprint.

                    Recurring Engagement:

                    3 or more Milestones (12+ weeks), an invoice is submitted in arrears for the month with a Net 30 due date.
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>What if I'm not happy?</Accordion.Title>
                <Accordion.Content>
                    While we never want to get to that point, our Sustainable Engineering models is structured such that you can end the relationship in at most 1 Month.

                    When you provide notice to terminate the arrangement, all future development work plans will be suspended and you will only be invoiced for work delivered and any off-boarding work you authorize us to conclude.

                    We will do our best to make the situation right before we need to take more severe measures such as terminating the arrangement.

                    Fret not, if this is something you’re worried about, check out Why people love working with BitHippie!
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>   
    </>
  );
}


              
              

              

              
              

              
              
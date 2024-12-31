"use client";

import { Accordion } from "@/components/accordion";

export default function FAQ() {
  const accordionItems = [
    {
      key: 0,
      title: "What will it cost?",
      text: (
        <>
          <p className="my-4">
            We know teams come with many different kinds of constraints. We try
            to work within everyone's scope and budget.
          </p>
          <p className="my-4">
            Our engagements are structured as a base contract, which includes a
            purpose-built tech team for a maximum number of hours per month. If
            more time is ever needed, additional time can be added at an hourly
            rate.
          </p>
          <p className="my-4">
            Depending on team composition, complexity, and timeline - our
            typical small-to-medium projects range between $12,000 - $54,000 USD
            / month.
          </p>
          <p className="my-4">
            We do offer discounted rates for engagements that are for 3 or more
            consecutive months.
          </p>
        </>
      ),
    },
    {
      key: 1,
      title: "How is the work structured?",
      text: (
        <>
          <p className="my-4">
            Our Sustainable Engineering model is designed to give you access to
            Software, Data, Cloud Engineers, and Architects for as long as you
            need. This allows you to keep your headcount and operating expenses
            low.
          </p>
          <p className="my-4">
            We scope work into Milestones, each consisting of 2 Sprints,
            totaling 20 business days.
          </p>
          <p className="my-4">
            At the beginning of every Milestone all key stakeholders align on
            the main objectives.
          </p>
          <p className="my-4">
            The sprints serve as checkpoints within the Milestone to demonstrate
            progress, and provide an opportunity to realign in the event the
            circumstances change.
          </p>
          <p className="my-4">
            We offer both ad hoc as well as recurring engagement models.
          </p>
        </>
      ),
    },
    {
      key: 2,
      title: "How are payments structured?",
      text: (
        <>
          <p className="my-4">
            Payment structure depends on the type of the engagement.
          </p>

          <p className="my-4">
            Ad hoc Engagements: 1 Milestone (4 weeks), payment is submitted in
            thirds: 1/3 Is required to schedule a kick-off. 1/3 is due after
            we've completed the 1st sprint. 1/3 is due after we've completed the
            2nd sprint.
          </p>
          <p className="my-4">
            Recurring Engagement: 3 or more Milestones (12+ weeks), an invoice
            is submitted in arrears for the month with a Net 30 due date.
          </p>
        </>
      ),
    },
    {
      key: 3,
      title: "What if I'm not happy?",
      text: (
        <>
          <p className="my-4">
            While we never want to get to that point, our Sustainable
            Engineering models is structured such that you can end the
            relationship in at most 1 Month.
          </p>
          <p className="my-4">
            When you provide notice to terminate the arrangement, all future
            development work plans will be suspended and you will only be
            invoiced for work delivered and any off-boarding work you authorize
            us to conclude.
          </p>
          <p className="my-4">
            We will do our best to make the situation right before we need to
            take more severe measures such as terminating the arrangement.
          </p>
          <p className="my-4">
            Fret not, if this is something you’re worried about, check out{" "}
            <a
              href="#testimonials"
              className="text-moss underline"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Why people love working with BitHippie!
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="mb-16 min-h-[300px]">
      <h3 className="text-3xl text-moss mt-4 text-center pb-4 lg:pb-0 lg:text-left">
        Frequently Asked Questions
      </h3>
      <Accordion accordionItems={accordionItems} />
    </section>
  );
}

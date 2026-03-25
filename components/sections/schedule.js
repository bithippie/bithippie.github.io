"use client";

import Divider from "@/components/layout/divider";
import FAQ from "@/components/ui/faq";
import Testimonial from "@/components/ui/testimonial";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ30HK2RiO6pCj8Uol07xqWiU14qAi3SgveSUNA71At4MPz0Yo3VQZbTPn2eyAfR94LS1vM3oW08?gv=true";

export default function Schedule({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pb-16 lg:pb-24`}
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex flex-col grow w-full text-center xl:text-left">
            <a name="schedule" />
            <h2 className="text-moss py-8">
              Schedule a Discovery&nbsp;Call
            </h2>
            <p className="text-xl mb-8">
              We partner with biotech companies across the spectrum, from
              venture-backed startups and computational biology companies to
              AI-driven drug discovery platforms and global pharmaceutical
              research organizations, building the data infrastructure that
              accelerates discovery.
            </p>
            
            <Testimonial
              img="/assets/images/testimonials/jacob.jpeg"
              alt="Jacob Oppenheim // Venture Partner"
              attribution="— Jacob Oppenheim // Venture Partner"
            >
              &ldquo;BitHippie has innovated practical and effective solutions in diverse fields from computational biology and bioinformatics, to laboratory + scientific systems, to classic business + financial systems, to health care over this time.&rdquo;
            </Testimonial>

            <a name="faq" />
            <FAQ />
          
          </div>

          <div className="flex sm:m-auto">
            <iframe
              className="
                w-[599px]
                lg:w-[1024px]
                xl:w-[599px]

                min-h-[1240px]
                lg:min-h-[770px]
                xl:min-h-[1240px]"
              src={CALENDAR_URL}
              title="Schedule Appointment"
            ></iframe>
          </div>
        </div>
      </div>
      <Divider backgroundColor="dark-grey" curvePosition="end" />
    </section>
  );
}
"use client";

import Divider from "@/components/divider";
import FAQ from "@/components/faq";
import LineDraw from "@/components/line_draw";

export default function Schedule({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-[7rem] pb-16 lg:pt-[8rem] lg:pb-24`}
    >
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex flex-col grow w-full text-center xl:text-left">
            <a name="schedule" />
            <h2 className="text-moss pb-8">
              Schedule My Free&nbsp;Consultation
            </h2>
            <p className="text-xl mb-8">
              We love speaking with entrepreneurs, founders, and good humans who
              strive to leave the world better than they found it.
            </p>
            <p className="text-xl mb-8">
              If you&apos;re ready to{" "}
              <span className="relative inline-block">
                <span>take action</span>
                <LineDraw hasScroll={false} />
              </span>{" "}
              then schedule a time to speak with us.
            </p>
            <p className="text-xl">
              In as little as one month you and your customers will see the
              manifestation of your idea. You&apos;ll collect valuable data from your
              users, and you&apos;ll move forward with an informed opinion about how
              best to proceed!
            </p>

            <FAQ />
          </div>

          <div className="flex sm:m-auto">
            <iframe
              className="
                w-[599px] 
                lg:w-[1024px] 
                xl:w-[599px] 
                
                min-h-[1200px]
                lg:min-h-[700px]
                xl:min-h-[1200px]"
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ30HK2RiO6pCj8Uol07xqWiU14qAi3SgveSUNA71At4MPz0Yo3VQZbTPn2eyAfR94LS1vM3oW08?gv=true"
              title="Schedule Appointment"
            ></iframe>
          </div>
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="start" />
    </section>
  );
}

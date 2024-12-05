"use client";

import Divider from "@/components/divider";
import FAQ from "@/components/faq";
import LineDraw from "@/components/line_draw";

export default function Schedule({ backgroundColor }) {
  return (
    <section
      id="schedule"
      className={`bg-${backgroundColor} pb-[8rem] md:pb-0 lg:pb-[9rem] 2xl:pb-[7rem]`}
    >
      <div className="container p-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col grow w-full">
            <h2 className="text-4xl text-moss mt-3 mb-8">
              Schedule My Free Consultation
            </h2>
            <p className="text-xl mb-8">
              We love speaking with entrepreneurs, founders, and good humans who
              strive to leave the world better than they found it.
            </p>
            <p className="text-xl mb-8">
              If you’re ready to{" "}
              <span className="relative inline-block">
                <span>take action</span>
                <LineDraw hasScroll={false} />
              </span>{" "}
              then do schedule a time to speak with us.
            </p>
            <p className="text-xl">
              In as little as 1 Month you and your customers will see the
              manifestation of your idea. You’ll collect valuable data from your
              users, and you’ll move forward with an informed opinion about how
              best to proceed!
            </p>

            <FAQ />
          </div>
          <div className="flex">
            <iframe
              className="w-[599px] h-[1170px]"
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ30HK2RiO6pCj8Uol07xqWiU14qAi3SgveSUNA71At4MPz0Yo3VQZbTPn2eyAfR94LS1vM3oW08?gv=true"
            ></iframe>
          </div>
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="start" />
    </section>
  );
}

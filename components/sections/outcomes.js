"use client";

import Divider from "@/components/divider";
import ScheduleConsultation from "@/components/schedule_consultation";
import OutcomeScene from "./outcomes/OutcomeScene";
import outcomes from "./outcomes/config";

export default function WeWorkTogether({ backgroundColor }) {
  return (
    <section className={`relative bg-${backgroundColor}`}>
      <a name="outcomes" />
      <div className="container py-8 flex flex-col max-w-screen-xl">
        <h2 className="text-dark-grey w-full text-center pt-14">
          Tech-Enabled Research
        </h2>
      </div>

      {outcomes.map((outcome) => {
        const { Scene } = outcome;
        return (
          <OutcomeScene key={outcome.id} id={outcome.id}>
            <div className="relative w-full h-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-8">
              {/* Animation area */}
              <div className="flex-1 relative h-full min-h-[400px]">
                <Scene color={outcome.placeholderColor} />
              </div>

              {/* Text content */}
              <div className="flex-1 flex flex-col justify-center space-y-6 p-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl text-moss">
                  {outcome.heading}
                </h2>
                {outcome.body.map((paragraph, i) => (
                  <p key={i} className="text-xl text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </OutcomeScene>
        );
      })}

      <div className="container py-8 flex flex-col max-w-screen-xl">
        <div className="flex flex-col items-center pb-28">
          <ScheduleConsultation />
        </div>
      </div>
      <Divider backgroundColor="white" curvePosition="end" />
    </section>
  );
}

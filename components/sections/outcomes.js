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
        const stacked = outcome.layout === "stacked";

        return (
          <OutcomeScene key={outcome.id} id={outcome.id}>
            {stacked ? (
              <div className="relative w-full h-full flex flex-col">
                {/* Text — compact strip at top */}
                <div className="w-full max-w-screen-xl mx-auto px-8 pt-6 pb-4 flex flex-col lg:flex-row lg:items-baseline lg:gap-8">
                  <h2
                    data-text="heading"
                    className="text-3xl sm:text-4xl text-moss shrink-0"
                    style={{ opacity: 0 }}
                  >
                    {outcome.heading}
                  </h2>
                  <div className="flex gap-6 mt-3 lg:mt-0">
                    {outcome.body.map((paragraph, i) => (
                      <p
                        key={i}
                        data-text-index={i}
                        className="text-base text-justify"
                        style={{ opacity: 0 }}
                      >
                        {paragraph.text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Animation — full width, fills remaining height */}
                <div className="flex-1 relative w-full min-h-0">
                  <Scene color={outcome.placeholderColor} body={outcome.body} />
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center px-8">
                {/* Animation area */}
                <div className="flex-1 relative h-full min-h-[400px]">
                  <Scene color={outcome.placeholderColor} body={outcome.body} />
                </div>

                {/* Text content */}
                <div className="flex-1 flex flex-col justify-center space-y-6 p-8 text-center lg:text-left">
                  <h2
                    data-text="heading"
                    className="text-3xl sm:text-4xl text-moss"
                    style={{ opacity: 0 }}
                  >
                    {outcome.heading}
                  </h2>
                  {outcome.body.map((paragraph, i) => (
                    <p
                      key={i}
                      data-text-index={i}
                      className="text-xl text-justify"
                      style={{ opacity: 0 }}
                    >
                      {paragraph.text}
                    </p>
                  ))}
                </div>
              </div>
            )}
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

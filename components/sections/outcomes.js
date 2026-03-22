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
            <Scene heading={outcome.heading} body={outcome.body} />
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

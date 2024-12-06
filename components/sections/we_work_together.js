import Reveal from "@/components/reveal";
import ScheduleConsultation from "@/components/schedule_consultation";

export default function WeWorkTogether({ backgroundColor }) {
  return (
    <section
      id="we-work-together"
      className={`bg-${backgroundColor} pb-[7rem] mb-[-2px]`}
    >
      <div className="container py-8 flex flex-col items-center">
        <h2 className="text-4xl text-moss w-full text-center">
          How we work together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 px-4 text-center">
          <Reveal>
            <div className="max-w-96">
              <img src="/idea.png" className="rounded-xl m-auto" />
              <h3 className="text-2xl text-moss my-6">Delivery in 1 Month</h3>
              <p className="text-justify">
                Get the first version of your digital product into your
                customer’s hands so fast you won’t believe it.
                <br />
                <br />
                Timing is critical: Don’t guess what the market wants - Build,
                test, measure, and iterate!
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="max-w-96">
              <img src="/science.png" className="rounded-xl m-auto" />
              <h3 className="text-2xl text-moss my-6">
                A Tech Backbone that Scales
              </h3>
              <p className="text-justify">
                Whether you’re a startup founder bootstrapping your business, or
                a mature business processing volumes of data in the cloud - we
                know how to design systems for where you are today with a growth
                plan for how to get where you’re going.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="max-w-96">
              <img src="/community.png" className="rounded-xl m-auto" />
              <h3 className="text-2xl text-moss my-6">
                On Demand Resource Pool
              </h3>
              <p className="text-justify">
                Why pay for what you don’t need? Our team of Software, Data, and
                Cloud Engineers are available when you need for as long as you
                need, keeping your operating expenses as low as possible.
              </p>
            </div>
          </Reveal>
        </div>
        <ScheduleConsultation />
      </div>
    </section>
  );
}

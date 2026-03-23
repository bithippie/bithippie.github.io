import Divider from "@/components/divider";
import LineDraw from "@/components/line_draw";
import RevealOnScroll from "@/components/reveal";
import ScheduleDiscovery from "@/components/schedule_discovery";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen min-h-[750px] py-16 md:py-24 bg-hero bg-center bg-cover flex relative"
    >
      <div className="container flex flex-col items-center self-center text-center max-w-screen-xl">
        <RevealOnScroll>
          <h1 className="text-platinum text-5xl md:text-6xl leading-normal md:leading-snug">
            Good Data Systems<br/>
            <span className="relative inline-block italic">
              Accelerate
              <LineDraw hasScroll={true} />
            </span>{" "}
            <span className="text-platinum">Biotech</span>&nbsp;Research
          </h1>

          <h2 className="text-platinum text-2xl my-8 md:text-2xl">
            We&apos;re your engineering partner for the data platforms, pipelines, and tools that
            <br/>let your scientists focus on science, not wrestling with technology.
          </h2>

          <div className="flex place-content-center">
            <ScheduleDiscovery />
          </div>
        </RevealOnScroll>
      </div>
      <Divider curvePosition="start" backgroundColor="platinum" />
    </section>
  );
}

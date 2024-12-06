import Divider from "@/components/divider";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import HowWeWork from "@/components/sections/how_we_work";
import Schedule from "@/components/sections/schedule";
import Testimonials from "@/components/sections/testimonials";
import WeWorkTogether from "@/components/sections/we_work_together";

export default function Home() {
  return (
    <div id="root">
      <main>
        <Navbar />

        <Hero />

        <div className={`relative bg-platinum`}>
          <div
            className={`relative w-full h-10 sm:h-20 bg-platinum start-curve-divider`}
          ></div>
        </div>

        <WeWorkTogether backgroundColor="platinum" />

        <Divider backgroundColor="white" curvePosition="end" />

        <HowWeWork backgroundColor="white" />

        <Divider backgroundColor="moss" curvePosition="start" />

        <Testimonials backgroundColor="moss" />

        <Divider backgroundColor="platinum" curvePosition="end" />

        <Schedule backgroundColor="platinum" />

        <Divider backgroundColor="white" curvePosition="start" />

        <About backgroundColor="white" />
      </main>

      <Divider backgroundColor="dark-grey" curvePosition="end" />

      <Footer />
    </div>
  );
}

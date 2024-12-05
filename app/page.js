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

        <WeWorkTogether backgroundColor="platinum" />

        <HowWeWork backgroundColor="white" />

        <Testimonials backgroundColor="moss" />

        <Schedule backgroundColor="platinum" />

        <About backgroundColor="white" />
      </main>

      <Footer />
    </div>
  );
}

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

        <Hero backgroundColor="hero" />

        {/* Divider */}
        <div className="relative bg-platinum">
          <div className="relative w-full h-[80px] bg-platinum start-curve-divider"></div>
        </div>

        <WeWorkTogether backgroundColor="platinum" />

        {/* Divider */}
        <div className="relative bg-white">
          <div className="relative w-full h-[80px] bg-white end-curve-divider"></div>
        </div>

        <HowWeWork backgroundColor="white" />

        {/* Divider */}
        <div className="relative bg-moss">
          <div className="relative w-full h-[80px] bg-moss start-curve-divider"></div>
        </div>

        <Testimonials backgroundColor="moss" />

        {/* Divider */}
        <div className="relative bg-platinum">
          <div className="relative w-full h-[80px] bg-platinum end-curve-divider"></div>
        </div>

        <Schedule backgroundColor="platinum" />

        {/* Divider */}
        <div className="relative bg-white">
          <div className="relative w-full h-[80px] bg-white start-curve-divider"></div>
        </div>

        <About backgroundColor="white" />
        {/* Divider */}
        <div className="relative bg-dark-grey">
          <div className="relative w-full h-[80px] bg-dark-grey end-curve-divider"></div>
        </div>

        <Footer backgroundColor="dark-grey" />
      </main>
    </div>
  );
}

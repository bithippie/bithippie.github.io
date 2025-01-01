import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Schedule from "@/components/sections/schedule";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div id="root">
      <main>
        <Navbar />
        <Hero />
        <Services backgroundColor="platinum" />
        <Process backgroundColor="white" />
        <Testimonials backgroundColor="moss" />
        <Schedule backgroundColor="platinum" />
        <About backgroundColor="white" />
      </main>
      <Footer />
    </div>
  );
}

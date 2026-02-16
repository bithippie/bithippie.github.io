import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Outcomes from "@/components/sections/outcomes";
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
        <Outcomes backgroundColor="platinum" />
        <Process backgroundColor="white" />
        <About backgroundColor="platinum" />
        <Schedule backgroundColor="white" />
      </main>
      <Footer />
    </div>
  );
}

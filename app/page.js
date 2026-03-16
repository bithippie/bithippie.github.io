import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Outcomes from "@/components/sections/outcomes";
import Engagement from "@/components/sections/engagement";
import Schedule from "@/components/sections/schedule";
import About from "@/components/sections/experience";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div id="root">
      <main>
        <Navbar />
        <Hero />
        <Outcomes backgroundColor="platinum" />
        <Engagement backgroundColor="white" />
        <About backgroundColor="platinum" />
        <Schedule backgroundColor="white" />
      </main>
      <Footer />
    </div>
  );
}

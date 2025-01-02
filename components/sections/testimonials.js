import Divider from "@/components/divider";
import TestimonialsCarousel from "@/components/testimonials_carousel";

export default function Testimonials({ backgroundColor }) {
  return (
    <section
      className={`relative bg-${backgroundColor} pt-12 pb-24`}
    >
      <a name="testimonials" />
      <div className="container py-8 max-w-screen-xl">
        <h2 className="text-white text-center mt-4 mb-8">
          Why people love working with BitHippie.
        </h2>
        <TestimonialsCarousel />
      </div>
      <Divider backgroundColor="platinum" curvePosition="end" />
    </section>
  );
}

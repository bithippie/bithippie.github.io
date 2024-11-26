import TestimonialsCarousel from "@/components/testimonials_carousel";

export default function Testimonials({ backgroundColor }) {
  return (
    <section
      id="testimonials"
      className={`bg-${backgroundColor} pb-24 mb-[-3px]`}
    >
      <div className="container py-8">
        <h2 className="text-5xl text-white text-center mt-4 mb-8">
          Why people love working with BitHippie.
        </h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

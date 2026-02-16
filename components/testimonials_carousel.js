"use client";
// or only core styles
import "@splidejs/react-splide/css";
import "@splidejs/splide/css/sea-green";

import { Avatar, Blockquote, Card } from "flowbite-react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const data = [
  {
    quote:
      "I've benefitted firsthand from his robust data platform construction. As a data scientist, he made my life easier everyday. The data platform was designed to be easy to use, long lasting, and used across multiple teams",
    name: "Sara Kohnke, PhD // Senior Data Scientist",
    image: "sara.jpeg",
  },
  {
    quote:
      "Under his leadership, the engineering team has designed and implemented a clean architecture and built a sustainable data infrastructure that supports multiple teams of data scientists, analysts, and downstream business users.",
    name: "Lina Chen // Data Engineering Lead",
    image: "lina.jpeg",
  },
  {
    quote:
      "He has innovated practical and effective solutions in diverse fields from computational biology and bioinformatics, to laboratory + scientific systems, to classic business + financial systems, to health care over this time.",
    name: "Jacob Oppenheim // Venture Partner",
    image: "jacob.jpeg",
  },
  {
    quote:
      "Instead of simply presenting a solution, he engaged in active listening and posed insightful questions, leading us through the complexities and the course of action which we executed.",
    name: "Alex Garcia // Principal Data Engineer",
    image: "alex_g.jpeg",
  },
  {
    quote:
      "We were able to go from initial product idea to a demo with stakeholders in just a couple of weeks. This enabled rapid iteration, and minimized the chances of building something that nobody would want.",
    name: "Alex Greenfield // Chief Scientist & Founder",
    image: "alex.jpeg",
  },
  {
    quote:
      "There are few people who's opinion I value more than Anthony's as his technical knowledge is both wide and deep.",
    name: "Jason Davis-Cooke // Software Engineer",
    image: "jason.jpeg",
  },
];

export default function TestimonialsCarousel() {
  return (
    <Splide
      options={{
        autoplay: true,
        breakpoints: {
          640: {
            perPage: 1,
            speed: 750,
          },
          768: {
            perPage: 2,
            speed: 1200,
          },
          1024: {
            perPage: 3,
            speed: 2200,
          },
        },
        easing: "ease",
        gap: 16,
        interval: 10000,
        mediaQuery: "min",
        type: "loop",
      }}
    >
      {data.map((testimonial, i) => (
        <SplideSlide key={i} className="rounded-3xl">
          <div className="h-[500px] ">
            <Card className="h-full flex flex-col m-1">
              <Avatar
                img={`/assets/images/testimonials/${testimonial.image}`}
                size="xl"
                rounded
                className="flex-start justify-self-center"
              />
              <Blockquote className="flex-grow text-md sm:text-lg text-left">
                {testimonial.quote}
              </Blockquote>
              <figcaption className="self-end">
                <cite className="text-sm">{testimonial.name}</cite>
              </figcaption>
            </Card>
          </div>
        </SplideSlide>
      ))}
      <SplideTrack></SplideTrack>
    </Splide>
  );
}

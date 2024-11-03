"use client";

import { Carousel, Card, Blockquote, Avatar } from "flowbite-react";

const data = [
    {
        "quote": "I’ve benefitted firsthand from his robust data platform construction. As a data scientist, he made my life easier everyday. The data platform was designed to be easy to use, long lasting, and used across multiple teams",
        "name": "Sara Kohnke, PhD // Senior Data Scientist",
        "image": "sara.jpeg",
    },
    {
        "quote": "He successfully helped us move our WordPress media from the local WP Engine server to an Amazon S3 bucket which enabled us to save a ton of money on our monthly hosting bill.",
        "name": "Theron Gamboa // Founder // Cabin Connoisseur",
        "image": "ron.jpeg",
    },
    {
        "quote": "When I needed support to launch my startup, he didn’t hesitate to jump in and offer his assistance. His willingness to help, combined with his insightful guidance, made a significant difference in my journey.",
        "name": "Lindsay Ruiz // Founder // Human As Usual",
        "image": "lindsay.jpeg",
    },
    {
        "quote": "His exceptional technical skills, combined with his dedication, open-mindedness, and collaborative spirit, make him an invaluable asset to any team.",
        "name": "Jonathan Weiss // partner and Chief Innovator",
        "image": "jon.jpeg",
    },
    {
        "quote": "We were able to go from initial product idea to a demo with stakeholders in just a couple of weeks. This enabled rapid iteration, and minimized the chances of building something that nobody would want.",
        "name": "Alex Greenfield // Cheif Scientist & Founder",
        "image": "alex.jpeg",
    },
    {
        "quote": "He has innovated practical and effective solutions in diverse fields from computational biology and bioinformatics, to laboratory + scientific systems, to classic business + financial systems, to health care over this time.",
        "name": "Jacob Oppenheim // Venture Partner",
        "image": "jacob.jpeg",
    },
    {
        "quote": "Under his leadership, the engineering team has designed and implemented a clean architecture and built a sustainable data infrastructure that supports multiple teams of data scientists, analysts, and downstream business users.",
        "name": "Lina Chen // Data Engineering Lead",
        "image": "lina.jpeg",
    },
    {
        "quote": "Instead of simply presenting a solution, he engaged in active listening and posed insightful questions, leading us through the complexities and the course of action which we executed.",
        "name": "Alex Garcia // Principal Data Engineer",
        "image": "alex_g.jpeg",
    },
    {
        "quote": "There are few people who's opinion I value more than Anthony's as his technical knowledge is both wide and deep.",
        "name": "Jason Davis-Cooke // Software Engineer",
        "image": "jason.jpeg",
    },
]

export default function Component() {
  return (
    <div className="w-full inline-flex flex-nowrap">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {data.map((testimonial, i) => (
            <Card key={i} className="w-1/3 h-full rounded-3xl flex flex-col py-16">
                <Avatar img={testimonial.image} size="xl" rounded className="justify-self-center"/>
                <Blockquote className="flex-grow text-lg text-justify" >
                    {testimonial.quote}
                </Blockquote>
                <figcaption className="self-end">
                    <cite>{testimonial.name}</cite>
                </figcaption>
            </Card>
        ))}
        </ul>
    </div>
  );
}

            
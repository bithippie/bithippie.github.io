"use client";

import { Avatar } from "flowbite-react";
import { motion } from "framer-motion";

import Divider from "@/components/divider";
import RevealOnScroll from "@/components/reveal";

export default function Team({ backgroundColor }) {
  const teamMembers = [
    {
      name: "Anthony",
      image: "/assets/images/team/anthony.jpeg",
      title: "Founder & CEO ✌️ | Biotech Engineering Consultant 🧬  | Co-Host, Brainwave Exchange Podcast 🎙️ | Wellness Enthusiast ❤️ | Earth Conscious 🌱",
    },
    {
      name: "Jason",
      image: "/assets/images/team/jason.jpeg",
      title: "Director of Engineering | Co-Host, Brainwave Exchange Podcast 🎙️",
    },
    {
      name: "Lisa",
      image: "/assets/images/team/lisa.jpeg",
      title: "Head of Engagement Management | Nutritionist & Founder of Hoopes Health | Co-Creator of the \"Dinghy Disco\" | Living aboard a sailboat",
    },
    {
      name: "Matheus",
      image: "/assets/images/team/matheus.jpeg",
      title: "Software & DevOps Engineer",
    },
    {
      name: "Bruno",
      image: "/assets/images/team/bruno.jpeg",
      title: "Software & Data Engineer",
    },
  ];

  const advisors = [
    {
      name: "Gordon",
      image: "/assets/images/team/gordon.jpeg",
      title: "Business Advisor | Technical Engagement Manager",
    },
    {
      name: "Michael",
      image: "/assets/images/team/michael.jpeg",
      title: "Executive Performance Coach & Strategic Advisor for founders & exec teams leading through pressure, complexity & growth | Former SEALFIT Master Coach",
    },
    {
      name: "Mark",
      image: "/assets/images/team/mark.jpeg",
      title: "Team Performance Advisor | SEAL Officer",
    },
  ];

  const TeamCard = ({ member }) => (
    <RevealOnScroll>
      <motion.div
        className="flex flex-col items-center text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Avatar
          img={member.image}
          alt={member.name}
          size="xl"
          rounded
          className="mb-4"
        />
        <h4 className="text-lg font-semibold text-moss">{member.name}</h4>
        <p className="text-gray-600 text-sm">{member.title}</p>
      </motion.div>
    </RevealOnScroll>
  );

  return (
    <section
      className={`relative bg-${backgroundColor} pt-16 pb-24 min-h-[768]`}
    >
      <a name="team" />

      <div className="container max-w-screen-xl px-8 mx-auto">
        {/* The Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-moss">The Team</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="w-full md:w-[calc(33.333%-2rem)]">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Advisors */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-moss">Trusted Advisors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {advisors.map((advisor, i) => (
              <TeamCard key={i} member={advisor} />
            ))}
          </div>
        </div>
      </div>

      <Divider backgroundColor="moss" curvePosition="start" />
    </section>
  );
}

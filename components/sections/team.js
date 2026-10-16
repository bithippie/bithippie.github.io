"use client";

import { Avatar } from "flowbite-react";
import { motion } from "framer-motion";

import Divider from "@/components/layout/divider";
import RevealOnScroll from "@/components/ui/reveal";

export default function Team({ backgroundColor }) {
  const teamMembers = [
    {
      name: "Anthony Torres",
      image: "/assets/images/team/anthony.jpeg",
      title: "Founder & CEO",
      linkedin: "https://www.linkedin.com/in/bithippie/",
      focus:
        "Founder of BitHippie ✌️ Biotech Engineering 🧬 Podcast Co-host 🎙️ Wellness Enthusiast ❤️ Earth Conscious 🌱",
    },
    {
      name: "Jason Davis-Cooke",
      image: "/assets/images/team/jason.jpeg",
      title: "Chief Technology Officer",
      linkedin: "https://www.linkedin.com/in/jason-davis-cooke",
      focus:
        "I run the engineering side of BitHippie, from who we hire to what we build with, and my job is to make sure our biotech clients get to keep their focus on the science.",
    },
    {
      name: "Lisa Hoopes",
      image: "/assets/images/team/lisa.jpeg",
      title: "Fractional Chief Operating Officer",
      linkedin: "https://www.linkedin.com/in/lisa-hoopes/",
      focus:
        "I help clarify why we're building what we're building, and make sure you have what you need along the way. After more than a decade in software product and project management, I've learned the best outcomes come from a team that trusts each other and feels confident in their work.",
    },
    {
      name: "Cassandra Ferrara",
      image: "/assets/images/team/cassandra.jpeg",
      title: "Fractional Chief Growth Officer",
      linkedin: "https://www.linkedin.com/in/cassandraferrara",
      focus:
        "I connect science teams with the data engineering and product support their work depends on. Before BitHippie, I spent 15+ years leading growth, operations, and strategy, from early-stage startups to some of the world's largest tech companies.",
    },
    {
      name: "Vincent Tellier",
      image: "/assets/images/team/vincent.jpeg",
      title: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/vtellier",
      focus:
        "Senior Software Architect with 15 years of experience building high-performance systems, from embedded sensors to cloud infrastructure, across aerospace, robotics, and deep-tech. I make the structural decisions that let products scale without accumulating debt, and help teams ship faster with more confidence.",
    },
    {
      name: "Tadeu Barbosa",
      image: "/assets/images/team/tadeu.jpeg",
      title: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/tadeu-barbosa/",
      focus:
        "I'm a backend software engineer who makes large-scale computational chemistry run reliably in the cloud. I build the pipelines and infrastructure that turn heavy workloads into tools scientists can launch and trust.",
    },
    {
      name: "Claudio Souza",
      image: "/assets/images/team/claudio.jpeg",
      title: "Consultant",
      linkedin: "https://www.linkedin.com/in/claudiofsouza/",
      focus:
        "I build data pipelines, backend systems, and workflow automation. I've been working in software engineering for 30 years across multiple domains, most recently in health tech.",
    },
    {
      name: "Matheus",
      image: "/assets/images/team/matheus.jpeg",
      title: "Software & DevOps Engineer",
      linkedin: "https://www.linkedin.com/in/eng-matheus-henrique/",
    },
  ];

  const advisors = [
    {
      name: "Gordon Reynolds",
      image: "/assets/images/team/gordon.jpeg",
      title: "Business and Operations Advisor",
      linkedin: "https://www.linkedin.com/in/gordon-j-reynolds",
      focus:
        "Health tech executive who takes data and analytics from idea to impact. Experience leading discovery, delivery, and everything it takes to sustain complex healthcare and life science initiatives.",
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
          img={(props) => (
            <img
              {...props}
              src={member.image}
              alt={member.name}
              className={`${props.className} object-cover`}
            />
          )}
          alt={member.name}
          size="xl"
          rounded
          className="mb-4"
        />
        <h4 className="text-lg font-semibold text-moss">
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {member.name}
            </a>
          ) : (
            member.name
          )}
        </h4>
        <p className="text-gray-600 text-sm">{member.title}</p>
        {member.focus && (
          <p className="text-gray-600 text-sm mt-2">{member.focus}</p>
        )}
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

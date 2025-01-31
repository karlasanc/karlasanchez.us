"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// tab content
const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>PHP/Laravel</li>
        <li>Javascript/React</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
        <li>TailwindCSS</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Arizona Global Campus</li>
        <li>Bachelor's Degree in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Node</li>
        <li>Git</li>
        <li>MySQL</li>
        <li>Express</li>
        <li>Apache</li>
        <li>Postman</li>
        <li>Knex</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills"); // keeps track of tab state
  const [isPending, startTransition] = useTransition(); // handles tab transition & state

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-slate-200 my-8 md:my-12">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about-me image" />
        <div className="mt-12 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl md:text-6xl text-orange-600 mb-4 font-gabriela">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating scalable and responsive web applications. I have
            experience working with JavaScript, React, Node.js, Express, Knex, Php, Laravel, HTML, CSS, and Git. I am a
            quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>

          {/* tab buttons */}
          <div className="flex flex-row mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("tools")} active={tab === "tools"}>
              {" "}
              Tools{" "}
            </TabButton>
          </div>

          {/* displays tab data */}
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

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
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>USAA, Insurance Professional, 2017-2024</li>
        <li>Pearson Clinical, Technical Support, 2013-2017</li>
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
      <div className="md:grid md:grid-cols-6 gap-6 py-8 px-4 sm:py-16 xl:px-16">
        <div className="md:col-span-4 col-start-2">
          <h2 className="text-5xl md:text-6xl text-orange-600 mb-6 font-gabriela">About Me</h2>
        </div>

        <div className="text-left flex flex-col md:col-span-4 md:col-start-1 h-full lg:mr-6">
          <p className="text-base mb-4 lg:text-lg">
            I am a full stack web developer with a passion for building scalable, responsive web applications. With
            experience in JavaScript, React, Node.js, Express, Knex, Php, Laravel, HTML, CSS, and Git, I am skilled at
            creating seamless user experiences and robust back-end solutions. As a fast learner, I am always eager to
            expand my knowledge and stay on top of the latest trends and technologies. I bring fresh ideas, a growth
            mindset, and a commitment to making a meaningful impact through my work.
          </p>
          <p className="text-base mb-8 lg:text-lg">
            I’m excited about contributing to innovative projects that challenge the status quo and push boundaries. I
            thrive in dynamic environments where analytical thinking, creativity, and collaboration are key. My
            background in insurance and technical support has given me a deep understanding of how internal systems can
            be optimized, and it fueled my passion for helping developers improve processes and workflows. Ultimately,
            my goal is to be part of a team that creates impactful products and designs user experiences that are not
            only functional but also intuitive and enjoyable.
          </p>
        </div>

        <div className="md:col-span-2 md:start-5">
          <Image src="/images/about-image.jpeg" width={400} height={400} alt="about-me image" />
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
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              {" "}
              Experience{" "}
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

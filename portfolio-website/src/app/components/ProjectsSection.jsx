"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// project raw data
const projectsData = [
  {
    id: 1,
    title: "Class Registration System",
    description:
      "A web application that enhancing system usability for students and admins by incorporating authentication, search, and waitlist functionality.",
    image: "/images/projects/1.png",
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pixel Positions",
    description:
      "Job posting board that enabling employers to post job offers and users to filter listings, improving user search efficiency.",
    image: "/images/projects/2.png",
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Boulders Notflix",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/karlasanc/team-boulders-notlify",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Database",
    description: "Relational database to facilitate online food ordering.",
    image: "/images/projects/food.png",
    tag: ["All", "Database"],
    gitUrl: "/https://github.com/karlasanc/Online-Ordering-Database/blob/master/README.md",
    previewUrl: "https://go.screenpal.com/watch/cr1qlxV1onq",
  },
  {
    id: 5,
    title: "Dice Roll Application",
    description: "Website application that simulates the roll of dice using JavaScript listeners and DOM manipulation.",
    image: "/images/projects/diceroll.png",
    tag: ["All", "JavaScript"],
    gitUrl: "/https://github.com/karlasanc/Online-Ordering-Database/blob/master/README.md",
    previewUrl: "https://diceroll-karla.netlify.app/",
  },
  {
    id: 6,
    title: "Employee Management",
    description: "A command-line interface application for managing employee information. ",
    image: "/images/projects/ems.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/karlasanc/employee-management-system/blob/main/README.md",
    previewUrl: "https://go.screenpal.com/watch/cZfTcvVMbWQ",
  },
];

const ProjectsSection = () => {
  // track state of tag selected
  const [tag, setTag] = useState("All");

  // track whether item is in vew for animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // handle tag change in UI
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // handle tag filtration
  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  // handle card animation
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="my-10 md:my-12">
      <h2 className="font-gabriela text-center text-6xl text-orange-600 mt-4 mb-2 md:mb-4">My Projects</h2>

      {/* tag filtering options */}
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6 mb-4">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="JavaScript" isSelected={tag === "JavaScript"} />
        <ProjectTag onClick={handleTagChange} name="PHP" isSelected={tag === "PHP"} />
        <ProjectTag onClick={handleTagChange} name="Python" isSelected={tag === "Python"} />
        <ProjectTag onClick={handleTagChange} name="Database" isSelected={tag === "Database"} />
      </div>

      {/* project card setup */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

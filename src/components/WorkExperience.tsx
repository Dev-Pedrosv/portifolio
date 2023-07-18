"use client";

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import TitleSection from "./TitleSection";
import { Work } from "@/types/word";

type Props = {};

export default function WorkExperience({}: Props) {
  const works: Work[] = [
    {
      occupation: "Software Engineer",
      company: "Pureskills",
      image: "/pureskills.jpeg",
      technologies: [
        "typescript",
        "next",
        "sass",
        "jest",
        "vercel",
        "aws",
        "react",
      ],
      startIn: "fev/2023",
      finishIn: "",
      results: [
        "Fixing over 80% of bugs with Jest and Cypress",
        "Building predefined layouts and maintaining clean code for better organization, following the principles of Clean Code, investing in system development and representation.",
        "Implementing the Clarity Microsoft tool to monitor the front-end application.",
      ],
    },
    {
      occupation: "Instructor Fullstack",
      company: "Dev Club",
      image: "dev-club.jpeg",
      technologies: [
        "react",
        "nodejs",
        "mongodb",
        "docker",
        "styledcomponents",
        "express",
        "javascript",
      ],
      startIn: "abr/2022",
      finishIn: "mar/2023",
      results: [
        "Responsible for creating projects and recording video lessons for the portfolio club.",
        "Technical Support to more than 1500 students.",
        " Helps with the quality of written code,",
        "Environment setup and bug fixing.",
      ],
    },
    {
      occupation: "Software Engineer",
      company: "MB Labs",
      image: "/mb-labs.jpeg",
      technologies: [
        "react",
        "nodejs",
        "docker",
        "styledcomponents",
        "express",
        "javascript",
        "materialui",
      ],
      startIn: "jan/2022",
      finishIn: "mar/2023",
      results: [
        "Front-End responsible for the applications defined for my squad, migrating a legacy system to ReactJS",
        "Improved the process of buying and selling foreign currencies to support daily multi-million transactions.",
        "Implemented unit tests and E2E to achieve scalability in the project.",
      ],
    },
    {
      occupation: "Software Engineer",
      company: "Freelancer",
      image: "/code.png",
      technologies: [
        "react",
        "nodejs",
        "docker",
        "styledcomponents",
        "express",
        "javascript",
        "python",
      ],
      startIn: "jun/2020",
      finishIn: "dez/2021",
      results: [
        "Development of personal projects and for clients.",
        "Increase in the quality of service in a burger place by developing software that calls the waiter to the customer's table.",
        "Developing solutions and automation of strategy for Trade using in the financial market making us profit.",
      ],
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative p-4 pb-20 md:px-10 md:pb-10 justify-end flex overflow-hidden flex-col text-left md:flex-row max-w-full md:justify-evenly mx-auto items-center"
    >
      <TitleSection title="Experience" />

      <div className="w-full h-[85%] md:h-[80%] flex space-x-5 overflow-x-scroll p-3 md:p-10 snap-x snap-mandatory scrollbar  scrollbar-track-gray-900/20 scrollbar-thumb-zinc-700">
        {works.map((work) => (
          <ExperienceCard key={work.company} work={work} />
        ))}
      </div>
    </motion.div>
  );
}

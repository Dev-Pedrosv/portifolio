"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TitleSection from "./TitleSection";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "Trips App",
      description:
        "This project is an application designed to facilitate trip reservations. Users can log in using social login via Google, browse a list of available trips, view trip details, simulate a purchase of a trip, and see their reservations.",
      link: "https://github.com/Dev-Pedrosv/trips-app",
      image: "/trips-project.png",
    },
    {
      name: "Translate App",
      description:
        "Translate app is an app to help us improve our English skills. You can register a card with a word and its translation in my case into Portuguese. I can see all the cards I have recorded, study and memorize these words.",
      link: "https://github.com/Dev-Pedrosv/trips-app",
      image: "/translate-app.png",
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <TitleSection title="Projects" />

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-900/20 scrollbar-thumb-primary/80">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project.name}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.name}
            />

            <div className="space-y-6 px-10 md:px-10 max-w-6xl">
              <div className="text-center">
                <h4 className="text-4xl font-semibold ">{project.name}</h4>
                <p className="text-xl md:text-2xl underline decoration-primary/50">
                  Case Study {i + 1} of {projects.length}
                </p>
              </div>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
              <Link
                href={project.link}
                className="text-center w-full block underline text-primary hover:text-white transition-all"
              >
                Click to access
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-primary/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

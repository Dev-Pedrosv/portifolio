"use client";

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import TitleSection from "./TitleSection";

type Props = {};

export default function WorkExperience({}: Props) {
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
      className="h-screen relative p-4 md:px-10 md:pb-10 justify-end flex overflow-hidden flex-col text-left md:flex-row max-w-full md:justify-evenly mx-auto items-center"
    >
      <TitleSection title="Experience" />

      <div className="w-full h-[85%] md:h-[80%] flex space-x-5 overflow-x-scroll p-3 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-900/20 scrollbar-thumb-primary/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

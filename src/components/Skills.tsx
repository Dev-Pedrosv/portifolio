"use client";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-2 md:gap-5 p-4 mt-16">
        <Skill skill="typescript" />
        <Skill skill="javascript" />
        <Skill skill="react" />
        <Skill skill="next" />
        <Skill skill="tailwind" />
        <Skill skill="styledcomponents" />
        <Skill skill="jest" />
        <Skill skill="materialui" />
        <Skill skill="sass" />
        <Skill skill="nodejs" />
        <Skill skill="express" />
        <Skill skill="mongodb" />
        <Skill skill="sequelize" />
        <Skill skill="firebase" />
        <Skill skill="supabase" />
        <Skill skill="docker" />
        <Skill skill="azure" />
        <Skill skill="git" />
        <Skill skill="figma" />
        <Skill skill="vercel" />
      </div>
    </motion.div>
  );
}

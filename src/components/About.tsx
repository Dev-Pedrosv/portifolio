"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import TitleSection from "./TitleSection";

type Props = {};

export default function About({}: Props) {
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
      className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      <TitleSection title="About" />

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="relative -mb-32 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full 
        overflow-hidden md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          src="/profile-img.jpeg"
          alt="Profile image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold md:text-4xl">
          Here is a{" "}
          <span className="underline text-primary/50 uppercase decoration-primary/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          💻 With more than 3 years of experience in software development, I started my journey making robots for traders as a freelancer.
          <br />
          👨‍💻Today, in addition to working as a software engineer, I use my experience to share insights and knowledge by creating content on YouTube 🎥 and Instagram 📸.
          <br />
          👨‍🏫 In addition, I acted as an instructor in developer training courses, guiding students in the creation of practical projects.
          <br />
          🕹️ In my free time I play league of legends and I try to improve my skills, I also really like going to the gym to take care of my health.
        </p>
      </div>
    </motion.div>
  );
}

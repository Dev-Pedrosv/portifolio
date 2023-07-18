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
          <span className="underline decoration-primary/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">
          💻 With over 3 years of hands-on experience in software development, I
          have a solid background in systems development from inception to
          completion.
          <br /> 👨‍🏫 In addition, I acted as an instructor in developer training
          courses, guiding students in creating practical projects.
          <br />
          👨‍💻Nowadays, in addition to working as a software engineer, I channel
          my experience as a content creator on YouTube 🎥 and Instagram 📸,
          sharing valuable insights and knowledge with a wide audience.
        </p>
      </div>
    </motion.div>
  );
}

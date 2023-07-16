"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
      className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

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
        className="relative -mb-32 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
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
          possess a strong background in system development from inception to
          completion.
          <br /> 👨‍🏫 Additionally, I have served as an instructor in developer
          training courses, guiding students through the creation of practical
          projects.
          <br />
          Nowadays, I channel my expertise as a content creator on YouTube 🎥
          and Instagram 📸, sharing valuable insights and knowledge with a wide
          audience.
        </p>
      </div>
    </motion.div>
  );
}

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
        className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
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
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          architecto sit quasi voluptas molestiae maxime officiis id enim est
          amet nemo expedita laboriosam delectus asperiores magni distinctio
          ipsa ducimus esse.
        </p>
      </div>
    </motion.div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LinkedinIcon,
  MailIcon,
  YoutubeIcon,
  InstagramIcon,
} from "lucide-react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center space-x-3"
      >
        <Link
          className="text-gray-300 cursor-pointer hover:-mt-2 transition-all hover:text-primary"
          href="https://www.linkedin.com/in/pedroh-dev/"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>

        <Link
          className="text-gray-300 cursor-pointer hover:-mt-2 transition-all hover:text-primary"
          href="https://www.youtube.com/@pedrosilvadev_"
          target="_blank"
        >
          <YoutubeIcon />
        </Link>

        <Link
          className="text-gray-300 cursor-pointer hover:-mt-2 transition-all hover:text-primary"
          href="https://www.instagram.com/pedrosilvadev_/"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center gap-2"
        >
          <MailIcon className="text-gray-300 cursor-pointer hover:-mt-2 transition-all hover:text-primary" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

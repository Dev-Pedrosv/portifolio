"use client";

import { motion } from "framer-motion";
import React from "react";
import { Work } from "@/types/word";

import ExperienceCard from "./ExperienceCard";
import TitleSection from "./TitleSection";
import ButtonSwipper from "./ButtonSwipper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left w-full px-4 md:px-[54px] justify-center mx-auto items-center max-w-[1340px]"
    >
      <TitleSection title="Experience" />

      <div className="relative w-full max-w-[1340px] flex h-full justify-center items-center mt-10">
        <Swiper
            pagination={{
              type: "progressbar",
              clickable: true,
              bulletClass: "swiper-pagination-bullet-secundary",
              bulletActiveClass: "swiper-pagination-bullet-active-secundary",
            }}
            navigation={{
              nextEl: "#swiper-button-next-experience",
              prevEl: "#swiper-button-prev-experience",
            }}
            modules={[Pagination, Navigation]}
            className="w-full"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                spaceBetween: 30,
              },
            }}
          >
          {works?.map((work) => (
            <SwiperSlide key={work.company} className="mt-6 md:mt-0">
              <ExperienceCard work={work} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:inline-flex absolute justify-between w-full max-w-[1235px] top-0 bottom-0 h-0 m-auto">
          <ButtonSwipper next="swiper-button-next-experience" prev="swiper-button-prev-experience"/>
        </div>
      </div>

      
    </motion.div>
  );
}

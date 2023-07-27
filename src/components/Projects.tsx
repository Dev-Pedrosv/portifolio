/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import TitleSection from "./TitleSection";
import ButtonSwipper from "./ButtonSwipper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        "This project is an application to help us improve our English skills. You can register a card with a word and its translation in my case into Portuguese. I can see all the cards I have recorded, study and memorize these words.",
      link: "https://github.com/Dev-Pedrosv/trips-app",
      image: "/translate-app.png",
    },
    {
      name: "Nu Finance App",
      description:
        "This project is an application to help us control our finances.You can register your account using login social with Google, you can register a finance with a different type like: withdrawal or deposit. You can see the balance of theses transactions and delete a financial item.",
      link: "https://github.com/Dev-Pedrosv/nu-finance",
      image: "/nu-finance-app.png",
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
      className="h-screen relative flex flex-col text-center justify-evenly mx-auto items-center w-full sm:px-[54px] px-5 py-[70px] "
    >
      <TitleSection title="Projects" />

      <div className="relative w-full max-w-[1340px] flex h-full justify-center items-center mt-10">
        <Swiper
            pagination={{
              type: "progressbar",
              clickable: true,
              bulletClass: "swiper-pagination-bullet-secundary",
              bulletActiveClass: "swiper-pagination-bullet-active-secundary",
            }}
            navigation={{
              nextEl: "#swiper-button-next-experience-proj",
              prevEl: "#swiper-button-prev-experience-proj",
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
          {projects.map((project, i) => (
            <SwiperSlide
              key={project.name}
              className="w-full flex flex-col items-center justify-evenly md:px-10"
            >
              <motion.div
                initial={{
                  y: -230,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="group relative object-cover rounded-2xl px-4 md:p-10 h-[600px]"
              >
                <img
                  src={project?.image}
                  alt={project?.name}
                  className="relative object-cover max-w-[250px] md:max-w-[450px] block mx-auto"
                />

                <div className="space-y-6 px-4 md:px-10 max-w-6xl">
                  <div className="text-center">
                    <h4 className="text-2xl md:text-4xl font-semibold ">{project.name}</h4>
                    <p className="text-lg md:text-xl underline decoration-primary/50">
                      Case Study {i + 1} of {projects.length}
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-center">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-center w-full block underline text-primary hover:text-white transition-all"
                  >
                    Click to access
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:inline-flex absolute justify-between w-full max-w-[1235px] top-0 bottom-0 h-0 m-auto">
          <ButtonSwipper next="swiper-button-next-experience-proj" prev="swiper-button-prev-experience-proj"/>
        </div>
      </div>
      

      <div className="w-full absolute top-[30%] bg-primary/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

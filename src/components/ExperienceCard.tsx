/* eslint-disable @next/next/no-img-element */
import { Work } from "@/types/word";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  work: Work;
};

export default function ExperienceCard({ work }: Props) {
  return (
    <article className="flex flex-col rounded-lg p-4 px-6 items-center space-y-4 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar  scrollbar-track-gray-900/20 scrollbar-thumb-zinc-700 ">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="flex-col md:flex-row items-center md:items-start flex w-full gap-4 md:gap-10
        "
      >
        <img
          className="relative rounded-full h-24 w-24 object-cover object-center xl:w-[120px] xl:h-[120px]"
          src={work.image}
          alt={work.company}
          style={{
            objectFit: "cover",
          }}
        />
        <div className="w-full">
          <h4 className="text-2xl text-center md:text-4xl font-light">
            {work.occupation}
          </h4>
          <p className="font-bold text-center text-xl md:text-2xl mt-1">
            {work.company}
          </p>

          <div className="px-0 w-full flex flex-col justify-center items-center md:px-10">
            <div className="flex space-x-2 my-2 flex-wrap justify-center">
              {work.technologies.map((tech) => (
                <img
                  key={tech}
                  src={`https://skillicons.dev/icons?i=${tech}`}
                  className="w-10 h-10 rounded-full "
                  alt="react logo"
                />
              ))}
            </div>
            <p className="text-base uppercase py-5 text-gray-300">
              Started work: {work.startIn} -
              {work.finishIn ? ` Ended: ${work.finishIn}` : " Current Job"}
            </p>
            <div>
              <p className="mb-4 text-base font-semibold">
                Example of results:
              </p>
              <ul className="list-disc space-y-2 ml-5 text-base md:text-lg ">
                {work.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

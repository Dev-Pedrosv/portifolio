/* eslint-disable @next/next/no-img-element */
import { Work } from "@/types/word";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  work: Work;
};

export default function ExperienceCard({ work }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-full snap-center bg-[#262626] p-5 hover:opacity-100
    sm:opacity-40 cursor-pointer transition-opacity duration-200 max-h-[620px] overflow-y-scroll md:overflow-y-clip"
    >
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
      >
        <img
          className="w-32 h-32 rounded-full object-cover object-center block mx-auto mb-4"
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
              <ul className="list-disc space-y-2 ml-5 text-sm md:text-lg ">
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

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <div className="relative rounded-full h-32 w-32 mx-auto object-cover overflow-hidden xl:w-[200px] xl:h-[200px]">
          <Image
            src="/user-img.jpg"
            alt="experience card"
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">Pureskills</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full "
            src="https://img1.gratispng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg"
            alt="react logo"
          />
          <img
            className="w-10 h-10 rounded-full "
            src="https://img1.gratispng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg"
            alt="react logo"
          />
          <img
            className="w-10 h-10 rounded-full "
            src="https://img1.gratispng.com/20180604/iqs/kisspng-react-javascript-angularjs-ionic-atom-5b154be64e7965.3537065815281223423214.jpg"
            alt="react logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points... points...</li>
          <li>points...Summary points...</li>
          <li>points...Summary points...</li>
          <li>points...Summary points...</li>
          <li>points...Summary points...</li>
        </ul>
      </div>
    </article>
  );
}

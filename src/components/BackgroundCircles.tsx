import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-secondary w-[200px] h-[200px] mt-52 animate-ping rounded-full" />
      <div className="absolute border border-secondary w-[300px] h-[300px] mt-52 animate-ping rounded-full" />
      <div className="absolute border border-secondary w-[500px] h-[500px] mt-52 animate-ping rounded-full" />
      <div className="absolute border border-primary w-[650px] h-[650px] mt-52 animate-ping rounded-full opacite-20" />
      <div className="absolute border border-secondary w-[800px] h-[800px] mt-52 animate-ping rounded-full" />
    </motion.div>
  );
}

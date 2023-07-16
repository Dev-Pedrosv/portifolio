import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  skill: string;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="relative flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={`https://skillicons.dev/icons?i=${skill}`}
        alt="react logo"
        className="w-24 h-24"
      />
    </div>
  );
}

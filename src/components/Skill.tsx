import React from "react";

type Props = {
  skill: string;
};

export default function Skill({ skill }: Props) {
  return (
    <div className="relative flex">
      <img
        src={`https://skillicons.dev/icons?i=${skill}`}
        alt="react logo"
        className="w-20 h-1w-20"
      />
    </div>
  );
}

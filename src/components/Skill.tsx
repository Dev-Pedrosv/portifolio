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
        className="w-24 h-24"
      />
    </div>
  );
}

import React from "react";

type Props = {
  title: string;
};

export default function TitleSection({ title }: Props) {
  return (
    <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
      {title}
    </h3>
  );
}

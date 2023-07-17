"use client";

import React from "react";
import { PhoneIcon, MailIcon } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import TitleSection from "./TitleSection";

type Props = {};

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:comercial.pedrosilvadev@gmail.com?subject=${formData.subject}&body="Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <TitleSection title="Contact" />

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center uppercase">
          I have got just what you need.
          <br />
          Lets Talk.
        </h4>

        <div className="space-y-2">
          <Link
            href="https://wa.me/5519995728321?text=Hello+Pedro+%21"
            target="_blank"
            className="flex items-center space-x-5 justify-center hover:underline hover:decoration-primary/50 hover:text-primary transition-all"
          >
            <PhoneIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-xl">+55 1999572-8321</p>
          </Link>

          <div className="flex items-center space-x-5 justify-center">
            <MailIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-xl">comercial.pedrosilvadev@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full mx-auto p-4"
        >
          <div className="flex space-x-2 justify-between">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-primary py-3 px-10 rounded-md text-black font-bold text-lg w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

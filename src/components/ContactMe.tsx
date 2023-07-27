"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon, Loader2 } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import TitleSection from "./TitleSection";
import { ContactProps, sendContactForm } from "@/lib/api";
import { toast } from 'react-toastify'

export default function ContactMe() {

  const { register, handleSubmit, formState: {errors}, reset } = useForm<ContactProps>();
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<ContactProps> = async (formData) => {
    try {
      setIsLoading(true)
      await sendContactForm(formData)
      toast.success('Email enviado com sucesso.')
      reset()
    }catch (e) {
      console.log(e);
      toast.error('Erro ao enviar email, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-2 justify-center mx-auto items-center">
      <TitleSection title="Contact" />

      <div className="flex flex-col space-y-10 w-full mt-20">
        <h4 className="text-xl md:text-4xl font-semibold text-center uppercase">
          I have got just what you need.
          <br />
          Lets Talk.
        </h4>

        <div className="space-y-2">
          <Link
            href="https://wa.me/5519995728321?text=Hello+Pedro+%21"
            target="_blank"
            className="flex items-center space-x-2 md:space-x-5 justify-center hover:underline hover:decoration-primary/50 hover:text-primary transition-all"
          >
            <PhoneIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-base md:text-xl">+55 1999572-8321</p>
          </Link>

          <div className="flex items-center space-x-2 md:space-x-5 justify-center">
            <MailIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-base md:text-xl">comercial.pedrosilvadev@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full mx-auto p-4 max-w-[520px]"
        >
          <div className="flex space-x-2 justify-between">
            <div>
              <input
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required.',
                  },
                })}
                placeholder="Name"
                type="text"
                className="contactInput data-[error=true]:border-red-500"
                data-error={!!errors.name}
              />
              <span className="text-xs text-start text-red-300 my-2 block">{errors.name?.message}</span>
            </div>
            <div>
              <input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required.',
                  },
                })}
                placeholder="Email"
                className="contactInput data-[error=true]:border-red-500"
                type="email"
                data-error={!!errors.email}
              />
              <span className="text-xs text-start text-red-300 my-2 block">{errors.email?.message}</span>
            </div>
          </div>
          <div>
            <input
              {...register('subject', {
                required: {
                  value: true,
                  message: 'Subject is required.',
                },
              })}
              placeholder="Subject"
              className="contactInput data-[error=true]:border-red-500"
              type="text"
              data-error={!!errors.subject}
            />
            <span className="text-xs text-start text-red-300 my-2 block">{errors.subject?.message}</span>
          </div>
          <div>
            <textarea
              {...register('message', {
                required: {
                  value: true,
                  message: 'Message is required.',
                },
              })}
              placeholder="Message"
              className="contactInput data-[error=true]:border-red-500"
              data-error={!!errors.message}
            ></textarea>
            <span className="text-xs text-start text-red-300 mt-[-2px] block">{errors.message?.message}</span>
          </div>
          <button
            type="submit"
            className="bg-primary py-3 px-10 rounded-md text-black font-bold text-lg w-full flex items-center justify-center"
          >
            {isLoading ? <Loader2 className="animate-spin"/> : "Submit"} 
          </button>
        </form>
      </div>
    </div>
  );
}

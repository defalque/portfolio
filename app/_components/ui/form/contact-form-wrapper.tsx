"use client";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const ContactForm = dynamic(() => import("./contact-form"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full basis-1/2 flex-col gap-5">
      <div
        className={`${shimmer} relative h-11 w-full overflow-hidden rounded-md bg-gray-200 px-3 py-2 dark:bg-zinc-800`}
      />
      <div
        className={`${shimmer} relative h-11 w-full overflow-hidden rounded-md bg-gray-200 px-3 py-2 dark:bg-zinc-800`}
      />
      <div
        className={`${shimmer} relative h-60 w-full overflow-hidden rounded-md bg-gray-200 px-3 py-2 lg:h-80 dark:bg-zinc-800`}
      />
      <div
        className={`${shimmer} relative h-11 w-full overflow-hidden rounded-md bg-gray-200 px-3 py-2 dark:bg-zinc-800`}
      />
    </div>
  ),
});

function ContactFormWrapper({
  t,
}: {
  t: {
    form: string;
    required: string;
    name: string;
    maxLength: string;
    minLength: string;
    namePattern: string;
    email: string;
    emailPattern: string;
    placeholderMessage: string;
    message: string;
    messagePattern: string;
    loading: string;
    success: string;
    submit: string;
  };
}) {
  return <ContactForm t={t} />;
}

export default ContactFormWrapper;

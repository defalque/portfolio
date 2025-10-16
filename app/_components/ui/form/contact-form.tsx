"use client";

import { sendEmail } from "@/lib/actions";
import { CircleCheckIcon } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { LazyMotion, AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
const loadFeatures = () =>
  import("../../../../lib/features").then((res) => res.default);

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

function ContactForm({
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Inputs>();

  type ButtonState = "idle" | "loading" | "success";
  const [buttonState, setButtonState] = useState<ButtonState>("idle");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setButtonState("loading");

    const result = await sendEmail(data);

    if (Array.isArray(result)) {
      result.forEach((error) => {
        setError(error.path as keyof Inputs, {
          type: error.type,
          message: error.message,
        });
      });
      return;
    }

    if (result?.type === "error") {
      setButtonState("idle");
      toast.error(result.message);
      return;
    }

    reset();
    setButtonState("success");

    // DEV Mode
    // setButtonState("loading");
    // setTimeout(() => {
    //   setButtonState("success");
    // }, 1500);
  };

  const option = {
    idle: t.submit,
    loading: (
      <>
        <span
          aria-hidden
          className="_border-r-white/90 _dark:border-r-white/90 block h-5 w-5 animate-spin rounded-full border-4 border-t-4 border-orange-700/50 border-t-white/90 duration-100 dark:border-orange-500/60 dark:border-t-white/90"
        />
        <span className="block">{t.loading}</span>
      </>
    ),
    success: (
      <>
        <CircleCheckIcon
          aria-hidden
          className="fill-white text-orange-600 dark:text-orange-400"
        />
        <span className="block">{t.success}</span>
      </>
    ),
  };

  return (
    <form
      aria-label={t.form}
      className="flex h-full w-full basis-1/2 flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <input
          disabled={isSubmitting}
          placeholder={t.name}
          className="form-field-focus rounded-md border px-3 py-2"
          {...register("name", {
            required: t.required,
            maxLength: { value: 30, message: `${t.name} ${t.maxLength}` },
            minLength: { value: 2, message: `${t.name} ${t.minLength}` },
            pattern: { value: /^[A-Za-z\s]+$/, message: t.namePattern },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <span
            role="alert"
            className="px-2 text-sm font-medium text-orange-600 dark:text-orange-400"
          >
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          disabled={isSubmitting}
          type="email"
          placeholder={t.email}
          className="form-field-focus rounded-md border px-3 py-2"
          {...register("email", {
            required: t.required,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t.emailPattern,
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <span
            role="alert"
            className="px-2 text-sm font-medium text-orange-600 dark:text-orange-400"
          >
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          disabled={isSubmitting}
          placeholder={t.placeholderMessage}
          className="form-field-focus h-60 resize-y rounded-md border px-3 py-2 lg:h-80"
          {...register("message", {
            required: t.required,
            minLength: {
              value: 5,
              message: `${t.message} ${t.minLength}`,
            },
            maxLength: {
              value: 300,
              message: `${t.message} ${t.maxLength}`,
            },
            validate: (value) => value.trim().length > 0 || t.messagePattern,
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <span
            role="alert"
            className="px-2 text-sm font-medium text-orange-600 dark:text-orange-400"
          >
            {errors.message.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={
          isSubmitting || buttonState === "loading" || buttonState === "success"
        }
        className="dark:text-shadow relative w-full cursor-pointer overflow-hidden rounded-md bg-orange-600 p-2 font-semibold text-white transition-discrete duration-300 hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 active:bg-orange-500 disabled:cursor-not-allowed disabled:hover:bg-orange-600 disabled:active:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus-visible:outline-orange-400 dark:active:bg-orange-500 dark:disabled:hover:bg-orange-400 dark:disabled:active:bg-orange-400"
      >
        <LazyMotion features={loadFeatures}>
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div
              key={buttonState}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 40,
              }}
              className="flex items-center justify-center gap-3"
            >
              {option[buttonState]}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </button>
    </form>
  );
}

export default ContactForm;

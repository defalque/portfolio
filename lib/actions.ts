"use server";

import { getTranslations } from "next-intl/server";
import { contactFormSchema } from "./schemas";
import { Inputs } from "@/app/_components/ui/form/contact-form";
import { resend } from "./resend";
import EmailTemplate from "@/app/_components/email-template";

export async function sendEmail(inputs: Inputs) {
  const t = await getTranslations("Contacts");

  try {
    const result = contactFormSchema.safeParse(inputs);

    if (!result.success) {
      const formattedErrors = result.error.issues.map((issue) => {
        const path = issue.path.join(".");
        const translatedMessage =
          {
            name: t("invalidName"),
            email: t("invalidEmail"),
            message: t("invalidMessage"),
          }[path] || issue.message;

        return {
          type: "error",
          path,
          message: translatedMessage,
        };
      });

      return formattedErrors;
    }

    const { error } = await resend.emails.send({
      from: "Acme <noreply@resend.dev>",
      to: ["marcodefalco2017@libero.it"],
      subject: inputs.name.trim(),
      react: EmailTemplate({
        email: inputs.email.trim(),
        message: inputs.message.trim(),
      }),
    });

    if (error) {
      console.error("Email error: ", error.message);
      return { type: "error", message: t("emailError") };
    }

    return { type: "success" };
  } catch (err) {
    console.error("Unexpected server error: ", err);
    return {
      type: "error",
      message: t("genericError") || "Errore imprevisto. Riprova più tardi.",
    };
  }
}

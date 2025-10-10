import ContactFormWrapper from "@/app/_components/ui/form/contact-form-wrapper";
import { Toaster } from "@/components/ui/sonner";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contacts-title"),
    description: t("contacts-description"),
  };
}

function Page() {
  const t = useTranslations("Contacts");

  return (
    <div className="mx-auto mb-20 min-h-fit font-stretch-semi-expanded md:max-w-2xl lg:mb-30 lg:max-w-4xl">
      <section
        aria-labelledby="contacts"
        className="my-10 flex flex-col gap-5 self-center px-(--spacing-x) sm:px-(--sm-spacing-x) md:gap-8 md:px-(--md-spacing-x)"
      >
        <h2
          id="contacts"
          className="titleColor text-3xl font-semibold font-stretch-semi-expanded sm:text-3xl md:text-4xl"
        >
          {t("title")}
        </h2>

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:gap-6">
          <div
            role="group"
            aria-label={t("info")}
            className="basis-1/2 space-y-3 text-sm/relaxed text-black/70 font-stretch-expanded sm:text-base/relaxed lg:space-y-5 dark:text-white/60"
          >
            <p>{t("form-p")}</p>

            <div>
              <span>{t("location")}: </span>
              <span className="font-medium text-black dark:text-white">
                {t("place")}
              </span>
            </div>

            <div>
              <span>Email: </span>
              <span className="font-medium text-black dark:text-white">
                marcodefalco.work@gmail.com
              </span>
            </div>

            <div>
              <span>{t("phone-label")}: </span>
              <Link
                href={`tel:+39${t("phone-number").replace(/\s+/g, "").startsWith("+") ? t("phone-number").replace(/\s+/g, "").slice(3) : t("phone-number").replace(/\s+/g, "")}`}
                className="font-medium text-black underline-offset-2 transition-discrete duration-300 hover:underline active:underline dark:text-white"
              >
                {t("phone-number")}
              </Link>
            </div>

            <div>
              <span>{t("speaks")}: </span>
              <span className="font-medium text-black dark:text-white">
                {t("languages")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span>{t("transport")}</span>
              <Check className="inline size-5 text-orange-600 sm:size-6 dark:text-orange-400" />
            </div>
          </div>

          <div aria-label={t("form")} role="group" className="basis-1/2">
            <Toaster position="top-right" richColors closeButton />

            <ContactFormWrapper
              t={{
                form: t("form"),
                required: t("required"),
                name: t("name"),
                maxLength: t("maxLength"),
                minLength: t("minLength"),
                namePattern: t("namePattern"),
                email: t("email"),
                emailPattern: t("emailPattern"),
                placeholderMessage: t("placeholderMessage"),
                message: t("message"),
                messagePattern: t("messagePattern"),
                loading: t("loading"),
                success: t("success"),
                submit: t("submit"),
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

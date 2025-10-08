import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Blog",
};

function Page() {
  const t = useTranslations("Blog");

  return (
    <div className="mx-auto min-h-screen font-stretch-semi-expanded md:max-w-2xl lg:max-w-4xl">
      <div className="my-10 flex flex-col gap-5 self-center px-(--spacing-x) sm:px-(--sm-spacing-x) md:gap-8 md:px-(--md-spacing-x)">
        <h2 className="titleColor text-3xl font-semibold font-stretch-semi-expanded sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>
      </div>
    </div>
  );
}

export default Page;

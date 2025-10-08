import Overview from "../_components/home/overview";
import About from "../_components/home/about";
import MyWork from "../_components/home/my-work";
import Skills from "../_components/home/skills";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    description: t("home-description"),
  };
}

export default function Home() {
  return (
    <div className="mx-auto md:max-w-2xl lg:max-w-4xl">
      <div className="_divide-y mx-(--spacing-x) [--md-spacing-y:--spacing(16)] [--sm-spacing-y:--spacing(14)] [--spacing-y:--spacing(12)] sm:mx-(--sm-spacing-x) md:mx-(--md-spacing-x)">
        <Overview />

        <About />

        <MyWork />

        <Skills />
      </div>
    </div>
  );
}

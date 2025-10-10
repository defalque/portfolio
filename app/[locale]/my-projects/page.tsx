import vesugusto from "../../../public/projects/vesugusto.jpg";
import vesugustoDark from "../../../public/projects/vesugusto-dark.jpg";
import dashboard from "../../../public/projects/dashboard.jpg";
import dashboardDark from "../../../public/projects/dashboard-dark.jpg";
import portfolio from "../../../public/projects/portfolio.jpg";
import portfolioDark from "../../../public/projects/portfolio-dark.jpg";

import { useTranslations } from "next-intl";
import ProjectCard from "@/app/_components/my-projects/project-card";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("my-projects-title"),
    description: t("my-projects-description"),
  };
}

const PROJECTS = [
  {
    title: "Vesugusto",
    type: "ecommerce",
    status: "development" as const,
    srcLight: vesugusto,
    srcDark: vesugustoDark,
    repoLink: "https://github.com/defalque/Next.js_Vesugusto",
    websiteLink: "https://www.vesugusto.dev",
    stack: [
      "nextjs",
      "javascript",
      "supabase",
      "authjs",
      "tailwind",
      "headless",
      "form",
      "zod",
      "resend",
      "motion",
      "embla",
    ],
    isDemo: true,
  },
  {
    title: "Vesugusto Dashboard",
    type: "dashboard",
    status: "development" as const,
    srcLight: dashboard,
    srcDark: dashboardDark,
    repoLink: "https://github.com/defalque/Next.js_Vesugusto-Dashboard",
    websiteLink: "https://vesugusto-dashboard.vercel.app/",
    stack: [
      "nextjs",
      "typescript",
      "supabase",
      "tailwind",
      "chart",
      "form",
      "zod",
      "motion",
    ],
    isDemo: true,
  },
  {
    title: "Portfolio",
    type: "portfolio",
    status: "deployed" as const,
    srcLight: portfolio,
    srcDark: portfolioDark,
    repoLink: "https://github.com/defalque/portfolio",
    websiteLink: "https://marcodefalco.vercel.app/",
    stack: [
      "nextjs",
      "typescript",
      "tailwind",
      "shadcn",
      "next-intl",
      "form",
      "zod",
      "resend",
      "motion",
      "embla",
    ],
    // isDemo: true,
  },
];

function Page() {
  const t = useTranslations("My-Projects");

  return (
    <div className="mx-auto min-h-screen font-stretch-semi-expanded md:max-w-2xl lg:max-w-4xl">
      <section
        aria-labelledby="my-projects"
        className="my-10 flex flex-col gap-5 self-center px-(--spacing-x) sm:px-(--sm-spacing-x) md:gap-8 md:px-(--md-spacing-x)"
      >
        <h2
          id="my-projects"
          className="titleColor text-3xl font-semibold font-stretch-semi-expanded sm:text-3xl md:text-4xl"
        >
          {t("title")}
        </h2>

        <ul className="grid grid-cols-1 gap-x-12 gap-y-20 py-5 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              index={i}
              key={i}
              title={project.title}
              type={project.type}
              srcLight={project.srcLight}
              srcDark={project.srcDark}
              status={project.status}
              repoLink={project.repoLink}
              websiteLink={project.websiteLink}
              stack={project.stack}
              isDemo={project.isDemo}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Page;

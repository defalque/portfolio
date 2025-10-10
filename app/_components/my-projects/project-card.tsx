import { useTranslations } from "next-intl";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Code } from "lucide-react";
import { LiaLinkSolid } from "react-icons/lia";

import ProjectCardImg from "./project-card-img";
import ProjectCardDrawer from "./project-card-drawer";

function ProjectCard({
  index,
  title,
  type,
  srcLight,
  srcDark,
  status,
  repoLink,
  websiteLink,
  stack,
  isDemo,
}: {
  index: number;
  title: string;
  type: string;
  srcLight: StaticImageData;
  srcDark?: StaticImageData;
  status: "deployed" | "development";
  repoLink?: string;
  websiteLink: string;
  stack: string[];
  isDemo?: boolean;
}) {
  const t = useTranslations("My-Projects");

  return (
    <li className="flex flex-col gap-5">
      <div className="order-2 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-medium md:text-2xl dark:text-white/90">
            {title}
          </h2>
          <span
            aria-label={`${t(status)}, ${isDemo ? "Demo" : "Live"}`}
            className="text-sm text-black/70 dark:text-white/60"
          >
            {t(status)} {isDemo ? "- Demo" : "- Live"}
          </span>
        </div>

        <ul className="flex items-center gap-1.5 sm:gap-3">
          <li>
            <ProjectCardDrawer
              triggerAriaLabel={t("details")}
              name={title}
              stack={stack}
              type={type}
            />
          </li>

          {repoLink && (
            <li>
              <Link
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-fit rounded-md border p-3 transition-discrete duration-300 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:hover:bg-zinc-900 dark:focus-visible:ring-orange-400"
                aria-label={t("link1-label")}
              >
                <Code
                  aria-hidden
                  className="size-5 text-black/70 transition-discrete duration-300 group-hover:text-black md:size-6 dark:text-white/60 dark:group-hover:text-white"
                />
              </Link>
            </li>
          )}

          {websiteLink && (
            <li>
              <Link
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-fit rounded-md border p-3 transition-discrete duration-300 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:hover:bg-zinc-900 dark:focus-visible:ring-orange-400"
                aria-label={t("link2-label")}
              >
                <LiaLinkSolid
                  aria-hidden
                  className="size-5 text-black/70 transition-discrete duration-300 group-hover:text-black md:size-6 dark:text-white/60 dark:group-hover:text-white"
                />
              </Link>
            </li>
          )}
        </ul>
      </div>

      <Link
        aria-label={t("link1-label")}
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative order-1 aspect-7/4 w-full overflow-hidden rounded-md border border-gray-100 shadow transition-discrete duration-500 hover:scale-105 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none active:scale-105 dark:border-zinc-900 dark:shadow-zinc-900 dark:focus-visible:ring-orange-400"
      >
        <ProjectCardImg
          index={index}
          srcLight={srcLight}
          srcDark={srcDark ? srcDark : srcLight}
        />
      </Link>
    </li>
  );
}

export default ProjectCard;

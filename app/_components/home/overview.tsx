import { useTranslations } from "next-intl";
import Link from "next/link";

import react from "../../../public/logos/react.svg";
import nextjs from "../../../public/logos/next.png";
import supabase from "../../../public/logos/supabase.svg";
import tailwindcss from "../../../public/logos/tailwindcss.svg";
import html from "../../../public/logos/html-5.svg";
import css from "../../../public/logos/css-3.svg";
import typescript from "../../../public/logos/typescript.svg";
import javascript from "../../../public/logos/javascript.svg";

import LogoLoopWrapper from "./logo-loop-wrapper";

const LOGOS = [
  { logo: html, title: "HTML 5" },
  { logo: css, title: "CSS 3" },
  { logo: react, title: "React" },
  { logo: nextjs, title: "Next.js" },
  { logo: typescript, title: "TypeScript" },
  { logo: javascript, title: "JavaScript" },
  { logo: tailwindcss, title: "Tailwind CSS" },
  { logo: supabase, title: "Supabase" },
  { logo: react, title: "React Native" },
];

function Overview() {
  const t = useTranslations("Hero");

  const BUTTON_LINKS = [
    {
      href: "https://github.com/defalque",
      ariaLabel: t("github"),
      children: (
        <svg
          aria-hidden
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className="size-7 fill-black/70 transition-discrete duration-300 group-hover:fill-black md:size-8 lg:size-10 dark:fill-white/60 dark:group-hover:fill-white"
        >
          <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
        </svg>
      ),
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=marcodefalco.work@gmail.com&su=Hey Marco!",
      ariaLabel: t("gmail"),
      children: (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7 fill-black/70 transition-discrete duration-300 group-hover:fill-black md:size-8 lg:size-10 dark:fill-white/60 dark:group-hover:fill-white"
        >
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      href: "/documents/cv.pdf",
      ariaLabel: t("cv"),
      children: (
        <span className="size-7 text-[19px] font-bold text-black/70 uppercase transition-discrete duration-300 group-hover:text-black md:size-8 md:text-2xl lg:size-10 lg:text-4xl dark:text-white/60 dark:group-hover:text-white">
          CV
        </span>
      ),
    },
  ];

  return (
    <>
      <section
        aria-labelledby="welcome"
        className="flex flex-col gap-8 self-center py-(--spacing-y) sm:py-(--sm-spacing-y) md:py-(--md-spacing-y)"
      >
        <h2
          id="welcome"
          className="bg-linear-to-r from-stone-600 via-slate-600 to-zinc-600 bg-clip-text text-4xl font-semibold text-transparent font-stretch-semi-expanded sm:text-4xl md:text-5xl lg:text-6xl dark:from-stone-300 dark:via-slate-300 dark:to-zinc-300"
        >
          {t("job")}
        </h2>

        <div className="space-y-2">
          <p
            aria-label={t("aria-text")}
            className="text-base text-black/70 font-stretch-expanded transition-shadow duration-500 sm:text-xl md:text-2xl lg:text-2xl/snug dark:text-white/60"
          >
            <span role="presentation">
              {t.rich("text", {
                bold: (chunks) => (
                  <strong className="animate-gradient relative z-2 inline-block bg-linear-to-r/hsl from-orange-500 via-yellow-500 to-orange-500 bg-[length:200%_100%] bg-clip-text text-transparent dark:via-yellow-400">
                    {chunks}
                  </strong>
                ),
                name: "Marco De Falco",
              })}
            </span>
          </p>
        </div>

        <div className="-mx-(--spacing-x) flex flex-col items-start gap-10 overflow-hidden sm:-mx-(--sm-spacing-x) md:mx-(--md-spacing-x) md:flex-row md:items-center md:gap-5">
          <ul
            aria-label={t("aria-social")}
            className="order-2 flex items-center gap-3 px-(--spacing-x) sm:px-(--sm-spacing-x) md:order-1 md:px-(--md-spacing-x)"
          >
            {BUTTON_LINKS.map((item) => (
              <li key={item.ariaLabel}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group m-0.5 block w-fit rounded-md border p-3 transition-discrete duration-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 dark:hover:bg-zinc-900 dark:focus-visible:ring-orange-400"
                  aria-label={item.ariaLabel}
                >
                  {item.children}
                </Link>
              </li>
            ))}
          </ul>

          <LogoLoopWrapper logos={LOGOS} ariaLabel={t("aria-skills")} />
        </div>
      </section>
    </>
  );
}

export default Overview;

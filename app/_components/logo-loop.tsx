import react from "../../public/logos/react.svg";
import nextjs from "../../public/logos/next.png";
import supabase from "../../public/logos/supabase.svg";
import tailwindcss from "../../public/logos/tailwindcss.svg";
import html from "../../public/logos/html-5.svg";
import css from "../../public/logos/css-3.svg";
import typescript from "../../public/logos/typescript.svg";
import javascript from "../../public/logos/javascript.svg";

import Image from "next/image";

const logos = [
  { logo: html, title: "HTML 5" },
  { logo: css, title: "CSS 3" },
  { logo: react, title: "React" },
  { logo: nextjs, title: "Next.js" },
  { logo: typescript, title: "TypeScript" },
  { logo: javascript, title: "Javascript" },
  { logo: tailwindcss, title: "Tailwind CSS" },
  { logo: supabase, title: "Supabase" },
  { logo: react, title: "React Native" },
];

function LogoLoop({ ariaLabel }: { ariaLabel: string }) {
  return (
    <>
      <div
        aria-hidden
        className="w-full overflow-hidden mask-x-from-95% sm:mask-x-from-97%"
      >
        <div className="animate-scroll flex w-[640%] sm:w-[480%] md:w-[650%] lg:w-[460%]">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              className="group flex w-xl items-center justify-center px-6 py-4"
              key={idx}
            >
              <div className="flex w-max items-center justify-center gap-3">
                <div className="relative size-6 lg:size-8">
                  <Image
                    src={logo.logo}
                    role="presentation"
                    alt=""
                    fill
                    sizes={
                      logo.title === "Next.js"
                        ? "(max-width: 768px) 32px, 64px"
                        : undefined
                    }
                    className="object-contain opacity-70 transition-transform transition-discrete duration-300 group-hover:scale-105 group-hover:opacity-100 group-active:scale-105 group-active:opacity-100"
                  />
                </div>
                <span className="cursor-default font-semibold text-black/70 font-stretch-semi-expanded transition-discrete duration-300 group-hover:text-black group-active:text-black dark:text-white/60 dark:group-hover:text-white dark:group-active:text-white">
                  {logo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ul aria-label={ariaLabel} className="sr-only">
        {logos.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default LogoLoop;

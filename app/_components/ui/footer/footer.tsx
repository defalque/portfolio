import { useTranslations } from "next-intl";
import LogoType from "./logotype";

import nextLight from "../../../../public/logos/nextjs-logotype-light-background.svg";
import nextDark from "../../../../public/logos/nextjs-logotype-dark-background.svg";
import twLight from "../../../../public/logos/tailwindcss-logotype.svg";
import twDark from "../../../../public/logos/tailwindcss-logotype-white.svg";
import vercelLight from "../../../../public/logos/vercel-logotype-light.svg";
import vercelDark from "../../../../public/logos/vercel-logotype-dark.svg";

import Link from "next/link";

const BRANDS = [
  {
    name: "next",
    href: "https://nextjs.org/",
    srcLight: nextLight,
    srcDark: nextDark,
    altText: "Next.js logo",
    width: 90,
  },
  {
    name: "tw",
    href: "https://tailwindcss.com/",
    srcLight: twLight,
    srcDark: twDark,
    altText: "TailwindCSS logo",
    width: 130,
  },
  {
    name: "vercel",
    href: "https://vercel.com/",
    srcLight: vercelLight,
    srcDark: vercelDark,
    altText: "Vercel logo",
    width: 90,
  },
];

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mx-auto w-full font-stretch-expanded [--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)] md:max-w-2xl lg:max-w-4xl">
      <div className="_border-t mx-(--spacing-x) space-y-10 pt-16 pb-5 font-stretch-expanded sm:mx-(--sm-spacing-x) md:mx-(--md-spacing-x)">
        <ul className="text-base-color mx-auto flex w-fit flex-col items-center gap-5 text-xs sm:text-sm">
          {BRANDS.map((brand) => (
            <li key={brand.name} className="flex items-center gap-3">
              <span>{t(brand.name)}</span>
              <Link
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-xs transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:focus-visible:ring-orange-400"
              >
                <LogoType
                  srcLight={brand.srcLight}
                  srcDark={brand.srcDark}
                  alt={brand.altText}
                  width={brand.width}
                />
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-base-color mx-auto w-fit py-2 text-center text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} Marco De Falco. {t("rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

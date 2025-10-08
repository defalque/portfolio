import { useTranslations } from "next-intl";
import LogoType from "./logotype";

import nextLight from "../../../../public/logos/nextjs-logotype-light-background.svg";
import nextDark from "../../../../public/logos/nextjs-logotype-dark-background.svg";
import twLight from "../../../../public/logos/tailwindcss-logotype.svg";
import twDark from "../../../../public/logos/tailwindcss-logotype-white.svg";
import vercelLight from "../../../../public/logos/vercel-logotype-light.svg";
import vercelDark from "../../../../public/logos/vercel-logotype-dark.svg";

const brands = [
  {
    name: "next",
    href: "https://nextjs.org/",
    srcLight: nextLight,
    srcDark: nextDark,
    altText: "Next.js logo",
  },
  {
    name: "tw",
    href: "https://tailwindcss.com/",
    srcLight: twLight,
    srcDark: twDark,
    altText: "TailwindCSS logo",
  },
  {
    name: "vercel",
    href: "https://vercel.com/",
    srcLight: vercelLight,
    srcDark: vercelDark,
    altText: "Vercel logo",
  },
];

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mx-auto w-full font-stretch-expanded [--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)] md:max-w-2xl lg:max-w-4xl">
      <div className="_border-t mx-(--spacing-x) space-y-10 pt-16 pb-5 font-stretch-expanded sm:mx-(--sm-spacing-x) md:mx-(--md-spacing-x)">
        <ul className="mx-auto flex w-fit flex-col items-center gap-5 text-xs text-black/70 sm:text-sm dark:text-white/60">
          {brands.map((brand) => (
            <li key={brand.name} className="flex items-center gap-2">
              <span>{t(brand.name)}</span>
              <LogoType
                href={brand.href}
                srcLight={brand.srcLight}
                srcDark={brand.srcDark}
                altText={brand.altText}
              />
            </li>
          ))}
        </ul>

        <p className="mx-auto w-fit py-2 text-center text-xs text-black/70 sm:text-sm dark:text-white/60">
          Copyright © {new Date().getFullYear()} Marco De Falco. {t("rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import NavLink from "./nav-link";
import NavbarToggles from "./navbar-toggles";

function Navbar() {
  const t = useTranslations("Navigation");
  const LINKS = [
    { href: "/" as const, name: "Home" },
    { href: "/my-projects" as const, name: t("my-projects") },
    { href: "/contacts" as const, name: t("contacts") },
  ];

  const tt = useTranslations("Toggle");
  const themeLabels = {
    tToggle: tt("toggle"),
    tLight: tt("light"),
    tDark: tt("dark"),
    tSystem: tt("system"),
  };

  const tl = useTranslations("Locale");
  const currentLocale = useLocale();
  const localeLabels = {
    tSelect: tl("select"),
    tCurrentLocale: tl(currentLocale),
    currentLocale,
  };

  return (
    <div className="bg-background/70 sticky top-0 z-50 backdrop-blur-sm">
      <header className="mx-auto flex w-full items-center justify-between px-(--spacing-x) py-3 [--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)] sm:px-(--sm-spacing-x) sm:py-4 md:max-w-2xl md:px-(--md-spacing-x) lg:max-w-4xl">
        <nav>
          <ul className="flex items-start gap-5 text-sm font-semibold font-stretch-semi-expanded sm:items-center sm:text-base">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="dark:focus-visible::ring-orange-400 rounded-xs py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 sm:py-0 dark:focus-visible:ring-orange-400"
                >
                  <NavLink linkHref={link.href} linkName={link.name} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <NavbarToggles themeLabels={themeLabels} localeLabels={localeLabels} />
      </header>
    </div>
  );
}

export default Navbar;

// import NavLinks from "./nav-links";
// import { LazyMotion } from "motion/react";
// import * as m from "motion/react-m";
// const loadFeatures = () =>
//   import("../../../../lib/features").then((res) => res.default);
// import { useState } from "react";

// const [activeTab, setActiveTab] = useState<AppPath | null>(pathname);

// <LazyMotion key={link.href} features={loadFeatures}>
//   <m.li
//     layout
//     tabIndex={0}
//     onFocus={() => setActiveTab(link.href)}
//     onMouseOver={() => setActiveTab(link.href)}
//     onMouseLeave={() => setActiveTab(link.href)}
//     className={`relative cursor-pointer px-2 py-1 text-sm transition-colors outline-none`}
//   >
//     {activeTab === link.href ? (
//       <m.div
//         layoutId="tab-indicator"
//         className="absolute inset-0 rounded-lg bg-orange-500/15"
//       />
//     ) : null}
//     <Link
//       href={link.href}
//       className={`relative rounded-xs px-1 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 sm:py-2 dark:focus-visible:ring-orange-400`}
//     >
//       <span
//         className={`relative ${pathname === link.href ? "text-orange-600 dark:text-orange-400" : "titleColor"}`}
//       >
//         {link.name}
//       </span>
//     </Link>
//   </m.li>
// </LazyMotion>

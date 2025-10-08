"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function NavLinks() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const links = [
    { href: "/" as const, name: "Home" },
    { href: "/my-projects" as const, name: t("my-projects") },
    { href: "/contacts" as const, name: t("contacts") },
  ];

  return (
    <nav>
      <ul className="flex items-start gap-5 text-sm font-semibold font-stretch-semi-expanded sm:items-center sm:text-base">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="dark:focus-visible::ring-orange-400 rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 dark:focus-visible:ring-orange-400"
            >
              <span
                className={`${pathname === link.href ? "text-orange-600 dark:text-orange-400" : "titleColor"}`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;

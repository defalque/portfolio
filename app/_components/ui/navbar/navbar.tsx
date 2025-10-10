import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import NavLink from "./nav-link";
import NavbarToggles from "./navbar-toggles";
import { shimmer } from "@/lib/shimmer";

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

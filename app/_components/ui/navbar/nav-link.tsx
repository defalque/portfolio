"use client";

import { usePathname } from "@/i18n/navigation";

type AppPath = "/" | "/my-projects" | "/contacts";

function NavLink({
  linkName,
  linkHref,
}: {
  linkName: string;
  linkHref: AppPath;
}) {
  const pathname = usePathname();

  return (
    <span
      className={`${pathname === linkHref ? "text-orange-600 dark:text-orange-400" : "titleColor"}`}
    >
      {linkName}
    </span>
  );
}

export default NavLink;

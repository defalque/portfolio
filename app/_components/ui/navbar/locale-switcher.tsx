"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ReactNode } from "react";

function LocaleSwitcher({
  tSelect,
  tCurrentLocale,
  currentLocale,
  children,
}: {
  tSelect: string;
  tCurrentLocale: string;
  currentLocale: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger
        className="bg-background/70 cursor-pointer font-semibold uppercase backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:focus-visible:ring-orange-400"
        aria-label={tSelect}
      >
        <SelectValue placeholder={currentLocale} aria-label={tCurrentLocale} />
      </SelectTrigger>
      <SelectContent className="bg-background/70 z-120 backdrop-blur-xs">
        {children}
      </SelectContent>
    </Select>
  );
}

export default LocaleSwitcher;

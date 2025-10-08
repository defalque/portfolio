"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Locale");

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger
        className="bg-background/70 cursor-pointer font-semibold uppercase backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:focus-visible:ring-orange-400"
        aria-label={t("select")}
      >
        <SelectValue
          placeholder={currentLocale}
          aria-label={t(currentLocale)}
        />
      </SelectTrigger>
      <SelectContent className="bg-background/70 z-120 backdrop-blur-xs">
        {routing.locales.map((locale) => (
          <SelectItem
            key={locale}
            value={locale}
            className="cursor-pointer font-semibold uppercase"
            aria-label={t(locale)}
          >
            {locale}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LocaleSwitcher;

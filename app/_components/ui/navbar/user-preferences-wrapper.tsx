"use client";

import UserPreferences from "./user-preferences";
import { SelectItem } from "@/components/ui/select";
import { routing } from "@/i18n/routing";

function UserPreferencesWrapper({
  themeLabels,
  localeLabels,
}: {
  themeLabels: {
    tToggle: string;
    tLight: string;
    tDark: string;
    tSystem: string;
  };
  localeLabels: {
    tSelect: string;
    tCurrentLocale: string;
    currentLocale: string;
  };
}) {
  return (
    <UserPreferences {...themeLabels} {...localeLabels}>
      {routing.locales.map((locale) => (
        <SelectItem
          key={locale}
          value={locale}
          className="cursor-pointer font-semibold uppercase"
          aria-label={locale}
        >
          {locale}
        </SelectItem>
      ))}
    </UserPreferences>
  );
}

export default UserPreferencesWrapper;

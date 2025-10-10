"use client";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const UserPreferencesWrapper = dynamic(
  () => import("./user-preferences-wrapper"),
  {
    ssr: false,
    loading: () => (
      <div className="ml-auto flex items-center gap-3">
        <div
          className={`${shimmer} relative h-9 w-9 animate-pulse overflow-hidden rounded-sm bg-gray-200 dark:bg-zinc-700`}
        />

        <div
          className={`${shimmer} relative h-9 w-16 animate-pulse overflow-hidden rounded-sm bg-gray-200 dark:bg-zinc-700`}
        />
      </div>
    ),
  },
);

function NavbarToggles({
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
    <UserPreferencesWrapper
      themeLabels={themeLabels}
      localeLabels={localeLabels}
    />
  );
}

export default NavbarToggles;

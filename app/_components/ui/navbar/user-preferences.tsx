"use client";

import { ReactNode } from "react";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const ModeToggle = dynamic(() => import("./mode-toggle"), {
  ssr: false,
  loading: () => (
    <div
      className={`${shimmer} relative h-9 w-9 animate-pulse overflow-hidden rounded-sm bg-gray-200 dark:bg-zinc-700`}
    />
  ),
});
const LocaleSwitcher = dynamic(() => import("./locale-switcher"), {
  ssr: false,
  loading: () => (
    <div
      className={`${shimmer} relative h-9 w-16 animate-pulse overflow-hidden rounded-sm bg-gray-200 dark:bg-zinc-700`}
    />
  ),
});

function UserPreferences({
  tToggle,
  tLight,
  tDark,
  tSystem,
  tSelect,
  tCurrentLocale,
  currentLocale,
  children,
}: {
  tToggle: string;
  tLight: string;
  tDark: string;
  tSystem: string;
  tSelect: string;
  tCurrentLocale: string;
  currentLocale: string;
  children: ReactNode;
}) {
  return (
    <div className="ml-auto flex items-center gap-3">
      <ModeToggle
        tToggle={tToggle}
        tLight={tLight}
        tDark={tDark}
        tSystem={tSystem}
      ></ModeToggle>

      <LocaleSwitcher
        tSelect={tSelect}
        currentLocale={currentLocale}
        tCurrentLocale={tCurrentLocale}
      >
        {children}
      </LocaleSwitcher>
    </div>
  );
}

export default UserPreferences;

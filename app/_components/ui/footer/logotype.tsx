"use client";

import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
const LogoTypeImg = dynamic(() => import("./logotype-img"), {
  ssr: false,
  loading: () => (
    <span
      aria-hidden
      className="block h-6 w-6 animate-spin rounded-full border-4 border-t-4 border-r-4 border-zinc-100 border-t-zinc-300/90 border-r-zinc-300/90 dark:border-zinc-900 dark:border-t-white/70 dark:border-r-white/70"
    />
  ),
});

type LogoTypeProps = {
  srcLight: StaticImageData;
  srcDark: StaticImageData;
  alt: string;
  width: number;
};

function LogoType({ srcLight, srcDark, alt, width }: LogoTypeProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <>
      {isDark ? (
        <LogoTypeImg src={srcDark} alt={alt} width={width} />
      ) : (
        <LogoTypeImg src={srcLight} alt={alt} width={width} />
      )}
    </>
  );
}

export default LogoType;

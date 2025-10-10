"use client";

import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const CardImg = dynamic(() => import("./card-img"), {
  ssr: false,
  loading: () => (
    <div
      className={`${shimmer} _animate-pulse relative h-full w-full overflow-hidden bg-gray-200 dark:bg-zinc-800`}
    />
  ),
});

function ProjectCardImg({
  index,
  srcLight,
  srcDark,
}: {
  index: number;
  srcLight: StaticImageData;
  srcDark: StaticImageData;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light image during SSR
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <>
      {!mounted && (
        <div
          className={`${shimmer} _animate-pulse relative h-full w-full overflow-hidden bg-gray-200 dark:bg-zinc-800`}
        />
      )}
      {mounted && isDark ? (
        <CardImg index={index} src={srcDark} />
      ) : (
        <CardImg index={index} src={srcLight} />
      )}
    </>
  );
}

export default ProjectCardImg;

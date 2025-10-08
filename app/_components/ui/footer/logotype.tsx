"use client";

import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function LogoType({
  href,
  srcLight,
  srcDark,
  altText,
}: {
  href: string;
  srcLight: StaticImageData;
  srcDark: StaticImageData;
  altText: string;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-4 w-26 rounded-xs transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none sm:h-5 sm:w-30 dark:focus-visible:ring-orange-400"
    >
      <Image
        src={isDark ? srcDark : srcLight}
        alt={altText}
        fill
        className="object-contain"
      />
    </Link>
  );
}

export default LogoType;

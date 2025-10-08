"use client";

import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProjectCardImg({
  ariaLabel,
  websiteLink,
  srcLight,
  srcDark,
  title,
}: {
  ariaLabel: string;
  websiteLink: string;
  srcLight: StaticImageData;
  srcDark: StaticImageData;
  title: string;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light image during SSR
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  return (
    <Link
      aria-label={ariaLabel}
      href={websiteLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative order-1 aspect-5/3 w-full overflow-hidden rounded-md border border-gray-100 shadow transition-discrete duration-500 hover:scale-105 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none active:scale-105 dark:border-zinc-900 dark:shadow-zinc-900 dark:focus-visible:ring-orange-400"
    >
      <Image
        role="presentation"
        src={isDark ? srcDark : srcLight}
        alt={`Homepage ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        placeholder="blur"
        className="overflow-hidden object-fill"
      />
    </Link>
  );
}

export default ProjectCardImg;

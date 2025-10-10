"use client";

import { StaticImageData } from "next/image";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const LogoLoop = dynamic(() => import("./logo-loop"), {
  ssr: false,
  loading: () => (
    <div className="order-1 flex h-15 w-full items-center justify-between md:order-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span
            className={`${shimmer} xs:size-10 relative size-9 overflow-hidden rounded-full bg-gray-200 sm:size-12 md:size-10 dark:bg-zinc-800`}
          />
          <span
            className={`${shimmer} xs:w-20 xs:h-6 relative h-5.5 w-16 overflow-hidden rounded-xs bg-gray-200 sm:h-8 sm:w-28 md:h-6 md:w-20 lg:w-28 dark:bg-zinc-800`}
          />
        </div>
      ))}
    </div>
  ),
});
// import LogoLoop from "./logo-loop";

function LogoLoopWrapper({
  logos,
  ariaLabel,
}: {
  logos: { logo: StaticImageData; title: string }[];
  ariaLabel: string;
}) {
  return <LogoLoop logos={logos} ariaLabel={ariaLabel} />;
}

export default LogoLoopWrapper;

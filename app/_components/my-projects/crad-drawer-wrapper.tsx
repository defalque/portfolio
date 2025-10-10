"use client";

import { ReactNode } from "react";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const CardDrawer = dynamic(() => import("./card-drawer"), {
  ssr: false,
  loading: () => (
    <div
      className={`${shimmer} relative h-12.5 w-12.5 animate-pulse overflow-hidden rounded-md bg-gray-200 dark:bg-zinc-800`}
    />
  ),
});

function CardDrawerWrapper({
  title,
  triggerAriaLabel,
  children,
}: {
  title: string;
  triggerAriaLabel: string;
  children: ReactNode;
}) {
  return (
    <CardDrawer title={title} triggerAriaLabel={triggerAriaLabel}>
      {children}
    </CardDrawer>
  );
}

export default CardDrawerWrapper;

"use client";

import { ReactNode } from "react";

import dynamic from "next/dynamic";
import { shimmer } from "@/lib/shimmer";
const Card = dynamic(() => import("./card"), {
  loading: () => (
    <div
      className={`${shimmer} relative h-15 w-full overflow-hidden rounded-sm bg-gray-200 lg:basis-1/2 dark:bg-zinc-800`}
    />
  ),
});

function CardWrapper({
  icon,
  title,
  list,
}: {
  icon: ReactNode;
  title: string;
  list: { text: string }[];
}) {
  return <Card title={title} icon={icon} list={list} />;
}

export default CardWrapper;

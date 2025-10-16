"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { List } from "lucide-react";
import { ReactNode } from "react";

function CardDrawer({
  triggerAriaLabel,
  title,
  children,
}: {
  triggerAriaLabel: string;
  title: string;
  children: ReactNode;
}) {
  const description = `${title} info`;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          aria-label={triggerAriaLabel}
          className="group block w-fit cursor-pointer rounded-md border p-3 transition-discrete duration-300 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:hover:bg-zinc-900 dark:focus-visible:ring-orange-400"
        >
          <List
            aria-hidden
            className="text-base-color size-5 transition-discrete duration-300 group-hover:text-black md:size-6 dark:group-hover:text-white"
          />
        </button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto mb-15 flex-1 overflow-y-auto font-stretch-semi-expanded">
          <DrawerHeader>
            <DrawerTitle className="text-center text-3xl">{title}</DrawerTitle>
            <DrawerDescription className="sr-only">
              {description}
            </DrawerDescription>
          </DrawerHeader>

          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default CardDrawer;

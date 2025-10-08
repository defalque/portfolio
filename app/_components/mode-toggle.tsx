"use client";

import * as React from "react";
import { CheckIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("Toggle");

  return (
    <DropdownMenu>
      <div className="bg-background/70 h-fit rounded-md backdrop-blur-xs">
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:outline-none dark:focus-visible:ring-orange-400"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">{t("toggle")}</span>
          </Button>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent
        align="end"
        className="bg-background/70 z-120 backdrop-blur-xs"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex cursor-pointer items-center justify-between"
        >
          {t("light")}
          {theme === "light" && <CheckIcon aria-hidden className="size-5" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex cursor-pointer items-center justify-between"
        >
          {t("dark")}
          {theme === "dark" && <CheckIcon aria-hidden className="size-5" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex cursor-pointer items-center justify-between"
        >
          {t("system")}
          {theme === "system" && <CheckIcon aria-hidden className="size-5" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

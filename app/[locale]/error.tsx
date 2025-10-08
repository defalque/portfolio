"use client";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { RefreshCcwIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Empty className="min-h-screen">
      <EmptyHeader>
        <EmptyTitle className="text-xl font-stretch-semi-expanded sm:text-2xl">
          {t("title")}
        </EmptyTitle>
      </EmptyHeader>
      <EmptyContent>
        <div className="my-5 flex flex-wrap justify-center gap-2 font-medium font-stretch-semi-expanded">
          <Button
            variant="default"
            size="default"
            onClick={() => reset()}
            className="group cursor-pointer sm:text-base"
          >
            <RefreshCcwIcon className="transition-discrete duration-500 group-hover:-rotate-90 group-active:-rotate-90" />
            {t("button")}
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}

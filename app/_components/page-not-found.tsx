import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import Link from "next/link";

function PageNotFound() {
  const t = useTranslations("Not-Found");

  const links = [
    { name: "Home", href: "/" },
    { name: t("projects"), href: "/my-projects" },
    { name: t("contacts"), href: "/contacts" },
  ];

  return (
    <Empty className="min-h-screen">
      <EmptyHeader>
        <EmptyTitle className="text-xl font-stretch-semi-expanded sm:text-2xl">
          404 - {t("title")}
        </EmptyTitle>
        <EmptyDescription className="text-sm font-stretch-semi-expanded sm:text-base">
          {t("description")}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="my-6 flex flex-wrap justify-center gap-2 font-medium font-stretch-semi-expanded">
          {links.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="link"
              size="sm"
              className="text-sm text-orange-600 sm:text-base dark:text-orange-400"
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>
      </EmptyContent>
    </Empty>
  );
}

export default PageNotFound;

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { List } from "lucide-react";
import { useTranslations } from "next-intl";

function ProjectCardDrawer({
  triggerAriaLabel,
  name,
  stack,
  type,
}: {
  triggerAriaLabel: string;
  name: string;
  stack: string[];
  type: string;
}) {
  const t = useTranslations("Projects");

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
            className="size-5 text-black/70 transition-discrete duration-300 group-hover:text-black md:size-6 dark:text-white/60 dark:group-hover:text-white"
          />
        </button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto flex-1 space-y-8 overflow-y-auto font-stretch-semi-expanded">
          <DrawerHeader>
            <DrawerTitle className="_pt-5 text-center text-3xl">
              {name}
            </DrawerTitle>
          </DrawerHeader>

          <div
            aria-labelledby="category"
            className="flex items-center justify-center gap-3 text-base font-medium sm:text-lg"
          >
            <span id="category" className="text-black/70 dark:text-white/60">
              {t("category")}{" "}
            </span>
            <span>{t(type)}</span>
          </div>

          <div
            aria-labelledby="tech"
            className="flex flex-col justify-center gap-5 pb-15 text-base font-medium sm:text-lg md:max-w-2xl lg:max-w-4xl"
          >
            <h2
              id="tech"
              className="self-center text-black/70 dark:text-white/60"
            >
              {t("tech-stack")}
            </h2>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-(--spacing-x) [--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)] sm:px-(--sm-spacing-x) md:px-(--md-spacing-x)">
              {stack.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProjectCardDrawer;

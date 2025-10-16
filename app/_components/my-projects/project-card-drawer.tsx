import { useTranslations } from "next-intl";
import CardDrawerWrapper from "./crad-drawer-wrapper";

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
    <CardDrawerWrapper title={name} triggerAriaLabel={triggerAriaLabel}>
      <div
        aria-labelledby="category"
        className="flex flex-col items-center justify-center gap-3 py-6 text-base font-medium sm:text-lg"
      >
        <span id="category" className="text-base-color">
          {t("category")}{" "}
        </span>
        <span>{t(type)}</span>
      </div>

      <div
        aria-labelledby="tech"
        className="flex flex-col justify-center gap-3 py-6 text-base font-medium sm:text-lg md:max-w-2xl lg:max-w-4xl"
      >
        <h2 id="tech" className="text-base-color self-center">
          {t("tech-stack")}
        </h2>
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-(--spacing-x) [--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)] sm:px-(--sm-spacing-x) md:gap-x-15 md:px-(--md-spacing-x)">
          {stack.map((item) => (
            <li key={item}>{t(item)}</li>
          ))}
        </ul>
      </div>
    </CardDrawerWrapper>
  );
}

export default ProjectCardDrawer;

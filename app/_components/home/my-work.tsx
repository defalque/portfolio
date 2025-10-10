import { Monitor, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import CardWrapper from "./card-wrapper";

function MyWork() {
  const t = useTranslations("My-Work");

  const CARDS = [
    {
      title: t("subtitle1-whatido"),
      list: [
        { text: "Landing page" },
        { text: t("text1-whatido") },
        { text: t("text2-whatido") },
        { text: t("text3-whatido") },
      ],
      icon: (
        <Monitor
          aria-hidden
          className="size-6 text-orange-600 dark:text-orange-400"
        />
      ),
    },
    {
      title: t("subtitle2-whatido"),
      list: [{ text: t("text4-whatido") }],
      icon: (
        <Smartphone
          aria-hidden
          className="size-6 text-orange-600 dark:text-orange-400"
        />
      ),
    },
  ];

  return (
    <section
      aria-labelledby="what-i-do"
      className="space-y-5 py-(--spacing-y) sm:py-(--sm-spacing-y) md:py-(--md-spacing-y)"
    >
      <h2
        id="what-i-do"
        className="titleColor text-3xl font-semibold font-stretch-semi-expanded sm:text-3xl md:text-4xl"
      >
        {t("title-whatido")}
      </h2>

      <div
        role="group"
        className="flex flex-col gap-5 text-sm font-stretch-semi-expanded lg:flex-row"
      >
        {CARDS.map((card) => (
          <CardWrapper
            key={card.title}
            title={card.title}
            icon={card.icon}
            list={card.list}
          />
        ))}
      </div>
    </section>
  );
}

export default MyWork;

import { useTranslations } from "next-intl";

const keys = ["frontend", "full-stack", "mobile", "pl", "db", "tools"];

function Skills() {
  const t = useTranslations("Skills");

  const skills = keys.map((key) => ({
    title: t.rich(key, {
      b: (chunks) => (
        <strong className="text-black font-stretch-expanded dark:text-white">
          {chunks}
        </strong>
      ),
    }),
  }));

  return (
    <section
      aria-labelledby="skills"
      className="space-y-8 py-(--spacing-y) sm:py-(--sm-spacing-y) md:py-(--md-spacing-y)"
    >
      <h2
        id="skills"
        className="titleColor text-3xl font-semibold font-stretch-semi-expanded sm:text-3xl md:text-4xl"
      >
        {t("skills")}
      </h2>

      <ul className="space-y-8 font-stretch-semi-expanded">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <p className="text-sm/relaxed text-black/70 sm:text-base dark:text-white/60">
              {skill.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

import { useTranslations } from "next-intl";

function About() {
  const tr = useTranslations("About");

  return (
    <section
      aria-labelledby="about"
      className="space-y-5 py-(--spacing-y) sm:py-(--sm-spacing-y) md:py-(--md-spacing-y)"
    >
      <h2
        id="about"
        className="titleColor text-3xl font-semibold font-stretch-semi-expanded sm:text-3xl md:text-4xl"
      >
        {tr("title-about")}
      </h2>
      <p
        // aria-label={tr("aria-title-about-text")}
        className="text-sm/relaxed text-black/70 font-stretch-semi-expanded sm:text-base md:text-lg dark:text-white/60"
      >
        {tr("aria-title-about-text")}
        {/* {tr.rich("title-about-text", {
            link: (chunks) => (
              <Link
                href="/documents/certificato-di-laurea-con-carriera-universitaria-voto-finale-e-titolo-tesi-discussa-0312200428-13-2024-12-16-11_52_00.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 transition-discrete duration-300 after:content-['_↗'] hover:text-orange-500 active:text-orange-500 dark:text-orange-400 dark:hover:text-orange-500 dark:active:text-orange-500"
                aria-label={tr("link")}
              >
                {chunks}
              </Link>
            ),
          })} */}
      </p>
    </section>
  );
}

export default About;

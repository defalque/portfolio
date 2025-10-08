import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "it"],

  defaultLocale: "it",

  pathnames: {
    "/": "/",
    // "/blog": "/blog",

    "/my-projects": {
      en: "/my-projects",
      it: "/i-miei-progetti",
    },

    "/contacts": {
      en: "/contacts",
      it: "/contatti",
    },
  },
});

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  pathnames: {
    // Home page
    "/": {
      en: "/",
      pt: "/",
    },
    // Writing section
    "/writing": {
      en: "/writing",
      pt: "/artigos",
    },
    "/writing/[slug]": {
      en: "/writing/[slug]",
      pt: "/artigos/[slug]",
    },
    // Works section
    "/works": {
      en: "/works",
      pt: "/trabalhos",
    },
    "/works/[slug]": {
      en: "/works/[slug]",
      pt: "/trabalhos/[slug]",
    },
    // About page
    "/about": {
      en: "/about",
      pt: "/sobre",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
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
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
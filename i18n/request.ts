import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";
import * as fs from 'fs';
import * as path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Use dynamic import with relative path
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
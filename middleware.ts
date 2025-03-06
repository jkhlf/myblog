import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt'],
  
  // If this locale is matched, pathnames work without a prefix (e.g. /about)
  defaultLocale: 'en',

  // The configured locales in the pathname
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
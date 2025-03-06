import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import FooterLinks from '@/components/footer-links'
import NavLinks from '@/components/navbar-links'
import { ThemeProvider } from '@/components/theme-provider'
import { CursorEffect } from '@/components/cursor-effect'
import { siteConfig } from './site-config'
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from 'next/navigation'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Khalaf | Developer',
  description: 'Full-stack Developer Portfolio',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await Promise.resolve(params);
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <CursorEffect />
          <div className="max-w-3xl mx-auto px-4 py-8">
            <NextIntlClientProvider messages={messages}>
              <NavLinks />
              {children}
              <FooterLinks />
            </NextIntlClientProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

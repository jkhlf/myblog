import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import FooterLinks from '@/components/footer-links'
import  NavLinks from '@/components/navbar-links'
import { ThemeProvider } from '@/components/theme-provider'
import { CursorEffect } from '@/components/cursor-effect'
import { siteConfig } from './site-config'


const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const getMetadata = (path: string = '') => {
  const title = path 
    ? `${path} | ${siteConfig.name}` 
    : `${siteConfig.name} - Full-stack Developer`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: siteConfig.description,
      creator: '@kh4lf_',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider defaultTheme="light" attribute="class">
        <CursorEffect />
          <div className="max-w-3xl mx-auto px-4 py-8">
          <NavLinks />
          {children}
          <FooterLinks />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import FooterLinks from '@/components/footer-links'
import  NavLinks from '@/components/navbar-links'
import { ThemeProvider } from '@/components/theme-provider'
import { CursorEffect } from '@/components/cursor-effect'


const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Khalaf',
  description: 'Web Portfolio of João Khalaf',
  icons: '/favicon.ico',
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


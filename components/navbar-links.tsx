'use client';
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import LocaleSwitcher from './locale-switcher'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

function NavLinks() {
  const t = useTranslations('Navigation');
  
  return (
    <nav className="flex justify-center items-center mb-12 ">
       <ThemeToggle />
            <div className="invisible sm:visible">
            </div>
            <div className="flex gap-4 text-sm border rounded-md px-2 py-1">
              <Link href="/" className="hover:text-gray-600 text-sm px-2 py-1">{t('work')}</Link>
              <Link href="/writing" className="hover:text-gray-600 text-sm px-2 py-1">{t('writing')}</Link>
              <Link href="/about" className="hover:text-gray-600 text-sm px-2 py-1">{t('about')}</Link>
            </div>
        <LocaleSwitcher />
    </nav>
  )
}

export default NavLinks
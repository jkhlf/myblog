'use client';
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import LocaleSwitcher from './locale-switcher'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image';

function NavLinks() {
  const t = useTranslations('Navigation');
  
  return (
    <>
    <div className="mb-4">
      <Image 
        src="/imgs/banner.jpg"
        alt=''
        width={1800}
        height={60}
        className='object-cover'>
      </Image>
    </div>

    <nav className="flex justify-center items-center mb-12 w-full">
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex gap-4 text-sm border rounded-md px-2 py-1">
          <Link href="/" className="hover:text-gray-600 text-sm px-2 py-1">{t('work')}</Link>
          <Link href="/writing" className="hover:text-gray-600 text-sm px-2 py-1">{t('writing')}</Link>
          <Link href="/about" className="hover:text-gray-600 text-sm px-2 py-1">{t('about')}</Link>
        </div>
      </div>
        <LocaleSwitcher />
    </nav>
    </>
  )
}

export default NavLinks
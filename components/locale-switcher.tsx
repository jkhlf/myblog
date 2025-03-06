'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8"></div>;
  }

  const switchLocale = (newLocale: string) => {
    router.replace(pathname as any, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2 px-5">
      <Button 
        variant={locale === 'en' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => switchLocale('en')}
        className="w-8 h-8 p-0"
      >
        EN
      </Button>
      <Button 
        variant={locale === 'pt' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => switchLocale('pt')}
        className="w-8 h-8 p-0"
      >
        PT
      </Button>
    </div>
  );
}
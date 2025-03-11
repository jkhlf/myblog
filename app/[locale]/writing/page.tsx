import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation'

interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
}

const posts: Record<string, BlogPost[]> = {
  'en': [
    {
      id: "001",
      slug: "one-day",
      title: "One Day",
      date: "01-20-2025"
    },
  ],
  'pt': [
    {
      id: "001",
      slug: "one-day",
      title: "Um Dia",
      date: "20-01-2025"
    },
  ]
}

export default async function WritingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('WritingPage');
  const localePosts = posts[locale] || posts['en']; 
  
  return (
    <main className="max-w-2xl mx-auto space-y-16">
      <div>
        <h1 className="text-4xl font-normal mb-10">{t('title')}</h1>
        <p className='text-xs text-slate-500 mb-10'>{t('comingSoon')}</p>
        <div className="space-y-6">
          {localePosts.map((post) => (
            <Link 
              key={post.id}
              href={{ pathname: '/writing/[slug]', params: { slug: post.slug } }}
              className="group flex justify-between items-baseline border-b border-gray-100 pb-6"
            >
              <div className="flex gap-4">
                <span className="text-gray-400">{post.id}</span>
                <span className="group-hover:underline">{post.title}</span>
              </div>
              <span className="text-gray-400 font-mono text-sm">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}


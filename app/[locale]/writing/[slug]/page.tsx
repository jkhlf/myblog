import { ArrowLeft } from 'lucide-react'
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation'
import Image from 'next/image';

interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  content: React.ReactNode
}

const posts: Record<string, Record<string, BlogPost>> = {
  'en': {
    'one-day': {
      id: "001",
      slug: "one-day",
      title: "One Day",
      date: "01-20-2025",
      content: (
        <>
          <p>One day I will have enough knowledge to write an article :)</p>
          <p className='py-5'>Until then, here&apos;s a picture of a cat.</p>
          <Image width={50} height={50} src='https://images.unsplash.com/photo-1716467891152-1b43a96de578?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D' alt='A cat' />
        </>
      )
    },
  },
  'pt': {
    'one-day': {
      id: "001",
      slug: "one-day",
      title: "Um Dia",
      date: "20-01-2025",
      content: (
        <>
          <p>Um dia terei conhecimento suficiente para escrever um artigo :)</p>
          <p className='py-5'>Até lá, aqui está uma foto de um gato.</p>
          <Image  width={250} height={250} src='https://images.unsplash.com/photo-1716467891152-1b43a96de578?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D' alt='Um gato' />
        </>
      )
    },
  }
}

interface BlogPostProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps ) {
  const { slug, locale } = await params;
  const t = await getTranslations('WritingPage');
  
  const localePosts = posts[locale] || posts['en'];
  const post = localePosts[slug];

  if (!post) {
    return <div>{locale === 'pt' ? 'Artigo não encontrado' : 'Post not found'}</div>
  }

  return (
    <main className="max-w-2xl mx-auto">
      <div className="mb-12">
        <Link 
          href="/writing"
          className="inline-flex items-center gap-2 text-sm hover:text-gray-600"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </Link>
      </div>

      <article className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-normal">{post.title}</h1>
          <div className="text-gray-500 font-mono text-sm">{post.date}</div>
        </div>

        <div className="prose prose-gray max-w-none">
          {post.content}
        </div>
      </article>
    </main>
  )
}


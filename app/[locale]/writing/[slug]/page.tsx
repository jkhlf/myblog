import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
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
    'dev-setup': {
      id: "001",
      slug: "dev-setup",
      title: "Dev Setup",
      date: "05-19-2025",
      content: (
        <>
          <p>I've always really enjoyed configuring my environment. I was always changing one thing or another, but I think I've finally reached the point where I have a perfect setup. I'm still getting used to NeoVim and slowly moving away from VSCode. It's been quite a struggle, but I believe it's a valuable learning experience regardless of your level as a developer.</p>

          <p className='py-5'>I use Arch Linux on WSL 2. I won’t go into detail about the other tweaks I made on Windows to make it feel more like Linux (but I swear it turned out great).</p>

          <p className='py-5'>My main shell is <strong>Zsh</strong> with <strong>Oh-My-Zsh</strong> and the <strong>Powerlevel10k</strong> theme — nothing new under the sun. Why Zsh and not bash? I don't know, use whatever you want.</p>

          <p className='py-5'>I'm still learning how to use <strong>Tmux</strong> for terminal multiplexing.</p>

          <p>FZF, Ripgrep, Bat, Eza, Zoxide — I use them all with default aliases.</p>

          <p>And to monitor the system, I really like <strong>Btop</strong>. Finally, <strong>Fastfetch</strong> is mostly for decoration, but it's impossible to use Arch and not have Fastfetch configured to say <i>use arch btw</i>.</p>

          <p className='py-5'>This whole stack was built with the goal of maximizing productivity. Does it actually do that? I have no idea. I'm still tweaking small things, but I already consider it a solid enough setup to work with comfortably every day.</p>
        </>
      )
    },
  },
 'pt': {
    'dev-setup': {
      id: "001",
      slug: "dev-setup",
      title: "Dev Setup",
      date: "05-19-2025",
      content: (
        <>
          <p>Sempre gostei bastante de configurar meu ambiente, acabava sempre trocando uma coisa outro mas acho que finalmente cheguei ao ponto de estar com um setup perfeito. Ainda estou me adaptando ao NeoVim e largando o VsCode aos poucos, realmente tenho apanhando bastante para ele mas acho que é um aprendizado valioso não importa quanto você tenha ou não tenha como desenvolvedor.</p>
          <p className='py-5'>Eu uso Arch Linux no WSL 2, não irei me adentrar nas demais configurações que eu fiz no Windows para ficar mais parecido com o Linux(ficou bom eu juro).</p>

          <Image width={50} height={50} src='https://images.unsplash.com/photo-1716467891152-1b43a96de578?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D' alt='A cat' />

          <p> Meu shell principal é o <strong>Zsh</strong> com o <strong>Oh-My-Zsh</strong> e o tema <strong>Powerlevel10k</strong>, nada novo ao sol. Por que Zsh e não bash? Não sei, use o que você quiser</p>

  <p className='py-5'>Ainda estou aprendendo a usar o <strong>Tmux</strong> para multiplexação de terminal.</p>

  <p>FZF, Ripgre, Bat, Eza, Zoxide, uso todos com alias padrões.</p>

  <p>E pra monitorar o sistema, gosto bastante do <strong>Btop</strong>, Por fim, o <strong>Fastfetch</strong> serve mais pra enfeite, mas é impossivel usar arch e não ter um fastfetch configurando para falar <i>use arch btw.</i></p>

  <p className='py-5'>Essa stack toda foi montada com o objetivo de maximizar produtividade, se isso acontece realmente? não faço ideia. Ainda estou mexendo em pequenos detalhes, mas já considero um setup sólido o suficiente pra trabalhar todos os dias com conforto.</p>
        </>
      )
    },
  },
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


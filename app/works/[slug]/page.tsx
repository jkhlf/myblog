import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/projects'

interface ProjectDetailProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="max-w-4xl mx-auto">
      <nav className="flex items-center gap-4 mb-12 text-sm">
        <Link href="/" className="flex items-center gap-2 hover:text-gray-600">
          <ArrowLeft size={16} />
          BACK
        </Link>
        <span>/</span>
        <Link href="/works" className="hover:text-gray-600">
          ALL WORKS
        </Link>
        <span>/</span>
        <span className="border rounded-md px-3 py-1">
          {project.title.toUpperCase()}
        </span>
      </nav>

      <article className="space-y-12">
        <header className="space-y-8">
          <h1 className="text-4xl font-normal">{project.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl">{project.description}</p>
          {project.link && (
            <p>
              Explore the full project {' '}
              <Link href={project.link} target='_blank' className="underline hover:text-gray-600">
                {project.linkText} 
              </Link>{' '}
              here.
            </p>
          )}
        </header>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="w-full"
          />
        </div>

        {project.context && (
          <section className="space-y-6">
            <h2 className="text-sm font-mono text-gray-400">CONTEXT</h2>
            <h3 className="text-2xl">{project.context.title}</h3>
            <p className="text-gray-600 max-w-2xl">{project.context.description}</p>
          </section>
        )}

        {project.content && (
          <section className="space-y-6">
            <h2 className="text-sm font-mono text-gray-400">CONTENT</h2>

            {project.content.overview && (
              <div>
                <h3 className="text-lg font-semibold">Overview</h3>
                <p className="text-gray-600 max-w-2xl">{project.content.overview}</p>
              </div>
            )}

            {project.content.challenge && (
              <div>
                <h3 className="text-lg font-semibold">Challenge</h3>
                <p className="text-gray-600 max-w-2xl">{project.content.challenge}</p>
              </div>
            )}

            {project.content.solution && (
              <div>
                <h3 className="text-lg font-semibold">Solution</h3>
                <p className="text-gray-600 max-w-2xl">{project.content.solution}</p>
              </div>
            )}

            {project.content.impact && (
              <div>
                <h3 className="text-lg font-semibold">Impact</h3>
                <p className="text-gray-600 max-w-2xl">{project.content.impact}</p>
              </div>
            )}
          </section>
        )}
      </article>
    </main>
  );
}
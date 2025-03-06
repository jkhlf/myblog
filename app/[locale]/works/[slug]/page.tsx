import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { projects } from '@/app/[locale]/data/projects';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

interface ProjectDetailProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const locales = ['en', 'pt'];
  const paths = [];

  for (const locale of locales) {
    const getProjects = projects;
    const localePaths = projects.map((project) => ({
      locale,
      slug: project.slug,
    }));
    paths.push(...localePaths);
  }

  return paths;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const t = await getTranslations('Project');

  return (
    <main className="max-w-4xl mx-auto px-6 dark:text-slate-200">
      <nav className="flex items-center gap-4 mb-10 text-sm">
        <Link href="/" className="flex items-center gap-2 hover:text-gray-600">
          <ArrowLeft size={16} />
          {t('back')}
        </Link>
      </nav>

      <article className="space-y-16">
        <header className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{project.duration}</span>
              </div>
            </div>
            <h1 className="text-4xl font-normal">{project.title}</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">{project.description}</p>
        </header>

        <div className="bg-gradient-to-b from-gray-100 to-white p-1 rounded-xl">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="grid md:grid-cols-[200px,1fr] gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-mono text-gray-400 mb-4">
                {t('contribution')} 
              </h2>
              <ul className="space-y-2">
                {project.contribution.map((item, i) => (
                  <li key={i} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-mono text-gray-400 mb-4">
                {t('techStack')} 
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-sm px-3 py-1 bg-gray-100 rounded-full dark:text-black"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            {project.link && (
              <div>
                <h2 className="text-sm font-mono text-gray-400 mb-4">
                  {t('links')} 
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-gray-600"
                >
                  {project.linkText}
                </a>
              </div>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-mono text-gray-400 mb-4">
                {t('overview')} 
              </h2>
              <p className="text-gray-600">{project.overview}</p>
            </div>
            <div>
              <h2 className="text-sm font-mono text-gray-400 mb-4">
                {t('highlights')}
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-slate-200">→</span>
                    <span className="text-gray-600 dark:text-slate-200">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
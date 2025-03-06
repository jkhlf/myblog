import { ArrowLeft, Globe } from 'lucide-react'
import { projects } from '@/app/[locale]/data/projects'
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProjectDetailsPage({ 
  params 
}: { 
  params: { slug: string }
}) {
  const t = await getTranslations('WorksPage');
  const projectT = await getTranslations('Project');
  
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto">
      <div className="mb-12">
        <Link 
          href="/works"
          className="inline-flex items-center gap-2 text-sm hover:text-gray-600"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </Link>
      </div>
      
      <div className="space-y-12">
        <div>
          <h1 className="text-4xl font-normal mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm text-gray-500 mb-1">{projectT('year')}</h3>
              <p>{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 mb-1">{projectT('duration')}</h3>
              <p>{project.duration}</p>
            </div>
            <div className="col-span-2">
              <h3 className="text-sm text-gray-500 mb-1">{projectT('tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 px-2 py-0.5 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-video rounded-md overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority 
          />
        </div>
        
        {project.secondImage && (
          <div className="relative aspect-video rounded-md overflow-hidden">
            <Image 
              src={project.secondImage} 
              alt={`${project.title} additional image`} 
              fill 
              className="object-cover" 
            />
          </div>
        )}
        
        <div className="grid md:grid-cols-[1fr,2fr] gap-8">
          <div>
            <h2 className="text-xl font-medium mb-4">{projectT('contribution')}</h2>
            <ul className="space-y-2">
              {project.contribution.map((item, i) => (
                <li key={i} className="text-gray-600">• {item}</li>
              ))}
            </ul>
            
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-primary hover:underline"
              >
                <Globe size={16} />
                {project.linkText || projectT('viewProject')}
              </a>
            )}
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-4">{projectT('overview')}</h2>
            <p className="text-gray-600 mb-8">{project.overview}</p>
            
            <h2 className="text-xl font-medium mb-4">{projectT('highlights')}</h2>
            <ul className="space-y-4">
              {project.highlights.map((item, i) => (
                <li key={i} className="text-gray-600">
                  <span className="font-medium text-foreground">0{i + 1}.</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
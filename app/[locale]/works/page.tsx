import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/app/[locale]/data/projects'

export default function WorksPage() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm hover:text-gray-600"
        >
          <ArrowLeft size={16} />
          BACK
        </Link>
        <span className="text-sm border rounded-md px-3 py-1">ALL WORKS</span>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/works/${project.slug}`}
            className="group flex items-baseline"
          >
            <span className="text-gray-400 w-12 font-mono">{project.id}</span>
            <span className="flex-1 group-hover:text-gray-600 transition-colors">
              {project.title}
            </span>
            <div className="flex-1 border-b border-dotted border-gray-200 mx-4" />
            <span className="text-gray-400 font-mono">{project.year}</span>
          </Link>
        ))}
      </div>

      
    </main>
  )
}


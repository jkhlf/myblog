import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/app/[locale]/data/projects'
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Principal");

  return (
    <main className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-normal">{t("title")}</h1>
        <div className="max-w-2xl space-y-4 text-gray-600">
          <p>
            {t("description")}
          </p>
          <p>
            {t("funny")}
          </p>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-2xl font-medium">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
          >
            View all works
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}


'use client'
import { motion } from 'framer-motion';
import { Briefcase, Download} from 'lucide-react';
import React from 'react';
import Image from 'next/image'

function AboutMe() {
  return (
    <main className="max-w-4xl mx-auto px-4">
      <div className="grid md:grid-cols-[2fr,1fr] gap-12">
        <div className="space-y-5">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <div className="prose dark:prose-invert space-y-5">
            <p>
              I am a FullStack Developer and Internet Systems student at Fatec - RL, currently working as an intern and honing my skills in building solutions.
            </p>
            <p>
              I'm going for the second year in a row as a Data Structure Monitor at college, it's been a great experience. Personally, I think I'm good at teaching, but that's something for the very distant future.
            </p>
            <p>
              I have a growing interest in Data Analysis. My future goal is to work with Artificial Intelligence and Machine Learning, with the prospect of turning my professional trajectory towards the area of ​​data analysis.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <Image
              src="/imgs/pfp.jpg"
              alt="Dazai Osamu profile picture, BSD anime character" 
              fill
              className="object-contain"
            />
          </div>
          <a
            href="/curriculum/CV_EN.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
      <CareerTimeline />
    </main>
  )
}

export default AboutMe;


function CareerTimeline() {
  const timelineEvents = [
    {
      year: '2024 - Present',
      title: 'IT Intern',
      company: 'Grupo Fito Formula',
      description: 'Development of Full-Stack web applications, using React and Next.js for the front-end and Prisma and TursoDB for the back-end. Experience with integration of payment gateways (Stripe, Mercado Pago, etc.) and authentication systems (next-auth, Supabase). I participated in the creation and integration of chatbots to automate customer service, in addition to working with WordPress and CRM.'
    },
  ]

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Experience</h2>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-primary">
              {event.title} at {event.company}
              <span className="bg-primary text-primary-foreground text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                {event.year}
              </span>
            </h3>
            <p className="mb-4 text-base font-normal text-muted-foreground">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/sampleProjects'

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

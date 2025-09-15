import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGrid() {
  const projects = [
    { title: 'Project One', description: 'This is the first project.' },
    { title: 'Project Two', description: 'This is the second project.' },
    { title: 'Project Three', description: 'This is the third project.' },
    { title: 'Project Four', description: 'This is the fourth project.' },
  ]

  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} title={proj.title} description={proj.description} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid

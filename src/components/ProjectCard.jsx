import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

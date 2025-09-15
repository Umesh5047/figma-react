import React from 'react'
import placeholder from '../assets/placeholder.jpg'

function ProjectCard({ title, description }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-64 shadow-sm hover:shadow-md transition">
      <img src={placeholder} alt={title} className="w-full rounded-md mb-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  )
}

export default ProjectCard

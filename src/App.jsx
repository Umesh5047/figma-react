import React from 'react'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div>
      <Hero />
      <div className="flex gap-4 p-4">
        <ProjectCard title="Project One" description="This is the first project." />
        <ProjectCard title="Project Two" description="This is the second project." />
      </div>
    </div>
  )
}

export default App

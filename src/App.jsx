import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsGrid from './components/ProjectsGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  )
}

import React from 'react'
import placeholder from '../assets/placeholder.jpg'

function Hero() {
  return (
    <section className="text-center p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Figma React Assignment</h1>
      <p className="mb-6">This is a demo project built from a Figma design using React and TailwindCSS.</p>
      <img src={placeholder} alt="Hero" className="mx-auto max-w-full h-auto rounded-lg shadow-md" />
    </section>
  )
}

export default Hero

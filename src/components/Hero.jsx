import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Clean UI inspired by Figma</h1>
          <p className="mt-4 text-gray-600">This page reproduces the provided Figma layout using Tailwind + React. Fully responsive.</p>
          <div className="mt-6 flex gap-3">
            <a className="btn-primary bg-black text-white" href="#projects">View Projects</a>
            <a className="btn-primary border border-gray-300" href="#about">Learn More</a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img alt="hero" src="/src/assets/placeholder.jpg" className="w-full h-56 object-cover md:h-80" />
        </div>
      </div>
    </section>
  )
}

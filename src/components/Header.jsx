import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">MyPortfolio</div>
        <nav className="hidden md:flex gap-6">
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#about">About</a>
          <a className="btn-primary bg-black text-white" href="#contact">Contact</a>
        </nav>
        <button className="md:hidden">☰</button>
      </div>
    </header>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} MyPortfolio</div>
        <div>Built with ♥ using React & Tailwind</div>
      </div>
    </footer>
  )
}

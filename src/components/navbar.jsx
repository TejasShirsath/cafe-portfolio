import React from "react"

export default function PortfolioPage() {
  return (
    <div>
      <header className="bg-slate-100 shadow-sm">
        <div className="container mx-auto px-10 py-6 flex justify-between items-center">
          <a href="/" className="text-4xl font-bold text-yellow-400">M.</a>
          <nav>
            <ul className="flex space-x-10">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

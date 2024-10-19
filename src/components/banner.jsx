import React from 'react'

export default function banner() {
  return (
    <div>
      <section className="bg-yellow-400 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Have Any Project In Mind?</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <button className="bg-white text-yellow-400 px-12 py-3 rounded-sm font-semibold hover:bg-gray-100 transition duration-300">
              Hire Me
            </button>
          </div>
        </section>
    </div>
  )
}

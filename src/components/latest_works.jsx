import React from 'react'
  
const portfolioItems = [
  { id: 1, src: "assets/1.jpg", alt: 'Coffee cups' },
  { id: 2, src: 'assets/2.jpg', alt: 'Coffee cup' },
  { id: 3, src: 'assets/3.jpg', alt: 'Package box' },
  { id: 4, src: 'assets/4.jpg', alt: 'Yellow package' },
  { id: 5, src: 'assets/5.jpg', alt: 'Pink package' },
  { id: 6, src: 'assets/6.jpg', alt: 'Mug and coaster' },
  { id: 7, src: 'assets/7.jpg', alt: 'Tote bag' },
  { id: 8, src: 'assets/8.jpg', alt: 'Notebook' },
]

export default function main() {
  return (
      <main className="flex-grow">
        <section className="container mx-auto px-10 py-16">
          <h2 className="text-4xl font-bold text-center mb-4">Latest Works</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {"<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus</p>"}
            </p>
            <div className="flex justify-center space-x-10 mb-12">
              {['All', 'Branding Goals', 'Photography', 'True Perfection', 'Web Design'].map((category, index) => (
                <button
                  key={category}
                  className={`${
                    index === 0 ? 'text-yellow-400' : 'text-gray-600'
                  } hover:text-gray-900`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-8">

            {/* Image Grid */}
            {/* First image occupies the space of 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2 bg-gray-100 aspect-square relative overflow-hidden">
              <img
                src={portfolioItems[0].src}
                alt={portfolioItems[0].alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Second to Fifth images fill 1x1 spaces */}
            {portfolioItems.slice(1, 5).map((item) => (
              <div key={item.id} className="bg-gray-100 aspect-square relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}

            {/* Sixth image occupies the space of 2 columns and 1 row */}
            <div className="col-span-2 row-span-2 aspect-video relative overflow-hidden">
              <img
                src={portfolioItems[5].src}
                alt={portfolioItems[5].alt}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Seventh and Eighth images fill 1x1 spaces */}
            {portfolioItems.slice(6).map((item) => (
              <div key={item.id} className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
    </main>
  )
}

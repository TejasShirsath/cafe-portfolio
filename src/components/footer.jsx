import React from 'react';

const icons = [
  {src: "assets/fb.svg"},
  {src: 'assets/linkedin.svg'},
  {src: 'assets/instagram.svg'},
  {src: 'assets/github.svg'},
  {src: 'assets/google.svg'},
]

export default function footer() {
  return (
    <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
            <a href="/" className="text-4xl font-bold text-yellow-400 mb-4 inline-block">M.</a>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
            </p>

            <div className="flex justify-center space-x-4 mb-8">
              {icons.map((icon, index) => (
                <a href="#" key={index} className='bg-slate-200 rounded-full'>
                  <img 
                    src={icon.src} 
                    className="text-gray-400 hover:text-gray-600 p-3 w-10 h-10"
                  />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500">Copyright © 2024 Tejas Shirsath. All rights reserved.</p>
        </div>
    </footer>
  );
}

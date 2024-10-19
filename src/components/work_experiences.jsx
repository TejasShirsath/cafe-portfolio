import React from 'react'

const workExperiences = [
    { title: 'UI/UX Designer', company: 'Adobe Inc.', period: 'JUNE 2012 - 2016' },
    { title: 'Product Designer', company: 'Adobe Inc.', period: 'JUNE 2012 - 2016' },
    { title: 'Graphic Designer', company: 'Adobe Inc.', period: 'JUNE 2012 - 2016' },
]

export default function work_experiences() {
  return (
    <section className="bg-gray-100 container mx-auto px-10 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Work Experiences</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        </p>

        {/*cards*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {workExperiences.map((job, index) => (
            <div key={index} className="bg-white text-left p-10">
            <p className="text-gray-400 mb-4">{job.period}</p>
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
        ))}
        </div>
    </section>
  )
}

import React from 'react'
import { Terminal } from '.'
import Reveal from './Reveal';
const features = [
  {
    icon: 1,
    title: "E-commerce Platform",
    desc: "A fully functional e-commerce website with seamless payment integration and user-friendly design.",
    technologies: "React, Node.js, Express, MongoDB",
    link: "https://example-ecommerce.com"
  },
  {
    icon: 2,
    title: "Portfolio Website",
    desc: "Showcasing creative works with a modern layout, optimized for performance and SEO.",
    technologies: "Vue.js, Tailwind CSS, Netlify",
    link: "https://example-portfolio.com"
  },
  // Add more projects as needed
];


function Works() {

  return (
    <div className='mt-36'>
<section className="py-14">
  <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
    <div>
    <Reveal>
      <div className="max-w-xl space-y-3">
        <h3 className="text-indigo-600 font-semibold">
          Our Projects
        </h3>
        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Transforming Ideas into Functional Solutions
        </p>
        <p>
          Explore some of our recent work, where we’ve turned complex requirements into streamlined, engaging websites. Each project highlights our dedication to delivering quality, performance, and a user-centered experience.
        </p>
      </div></Reveal>
      <div className="mt-12 max-w-lg lg:max-w-none">
        <ul className="space-y-8">
          {
            features.map((item, idx) => (
              <>
              <Reveal>
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">
                    {item.desc}
                  </p>
                  <p className="text-sm mt-2 text-gray-500">
                    <span className="font-semibold">Technologies:</span> {item.technologies}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    View Live →
                  </a>
                </div>
              </li>
              </Reveal>
              </>
            ))
          }
        </ul>
      </div>
    </div>
    <Reveal>
    <div className="mt-12 lg:mt-0">
      <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png" className="w-full shadow-lg rounded-lg border" alt="Project preview" />
    </div></Reveal>
  </div>
</section>



















<section className="overflow-hidden py-12 lg:py-24 bg-gray-50">
  <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto space-y-12 flex flex-col justify-center">
    <h2 className="text-center text-3xl font-bold text-gray-800 sm:text-4xl">
      Our Graphics and Editing Works
    </h2>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap justify-center">
      {/* Image Links with Hover Effect */}
      <Reveal>
      <a href="#_" className="relative group w-64 h-64">
    
        <img
          src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl transition-transform duration-500 w-full h-full object-cover transform group-hover:scale-110"
          alt="Graphic work 1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg font-semibold">Graphic Design Project 1</p>
        </div>
     
      </a>
</Reveal>
<Reveal>
      <a href="#_" className="relative group w-64 h-64">
        <img
          src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl transition-transform duration-500 w-full h-full object-cover transform group-hover:scale-110"
          alt="Graphic work 2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg font-semibold">Graphic Design Project 2</p>
        </div>
      </a>
</Reveal>
<Reveal>
      <a href="#_" className="relative group w-64 h-64">
        <img
          src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl transition-transform duration-500 w-full h-full object-cover transform group-hover:scale-110"
          alt="Graphic work 3"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg font-semibold">Graphic Design Project 3</p>
        </div>
      </a>
</Reveal>
<Reveal>
      <a href="#_" className="relative group w-64 h-64">
        <img
          src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl transition-transform duration-500 w-full h-full object-cover transform group-hover:scale-110"
          alt="Graphic work 4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-lg font-semibold">Graphic Design Project 4</p>
        </div>
      </a>
      </Reveal>
    </div>
  </div>
</section>



    </div>
  )
}

export default Works
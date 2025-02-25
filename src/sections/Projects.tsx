import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sneak',
      description: 'A modern e-commerce website for sneaker enthusiasts. I developed a responsive website with a dynamic product catalogue, intuitive user experience, and optimized loading speed, resulting in a 27% increase in compatibility, 40% reduction in bounce rates, and 25% increase in engagement time.',
      link: 'https://github.com/Jyotiraditya077/sneak',
      image: 'photos/sneak.png',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Weather App',
      description: 'A sleek weather app providing real-time updates for any city, with a fully responsive design and dynamic weather icons, resulting in a 100% mobile compatibility, 30% increase in user engagement, and 100,000+ cities covered.',
      link: 'https://github.com/Jyotiraditya077/weather_app',
      image: 'photos/weather.png',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'To-Do List App',
      description: 'A simple yet effective to-do list web app that allows users to create, edit, and delete tasks. Built using HTML, JavaScript, and CSS, this app demonstrates my ability to create interactive and user-friendly interfaces.',
      link: 'https://github.com/Jyotiraditya077/To-do-list-web-app',
      image: 'photos/to-do.png',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Tribute Page',
      description: 'A tribute page dedicated to the life and achievements of Steve Jobs, co-founder of Apple Inc. This project showcases my ability to design and develop a visually appealing and informative website.',
      link: 'https://github.com/Jyotiraditya077/Tribute-Page',
      image: 'photos/tribute.png',
      technologies: ['HTML', 'CSS']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-purple-400/50 transition-colors duration-300"
            >
              <div className="aspect-video bg-purple-900/50">
                <img 
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="object-cover w-full h-full opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                    <ExternalLink size={20} />
                  </a>
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
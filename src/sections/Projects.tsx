import React, { useState } from 'react';
import { ExternalLink, Link, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleImageLoad = (title: string) => {
    setLoadedImages(prev => ({ ...prev, [title]: true }));
  };

  const toggleShowMore = () => {
    setShowAllProjects(!showAllProjects);
  };

  const projects = [
    {
      title: 'FineBites',
      description: 'FineBites is a modern food delivery web application that provides a seamless experience for users to browse menus, order food, and track their meals effortlessly. With a responsive UI, secure authentication, and Stripe-powered payments, FineBites ensures a smooth and efficient food ordering experience. The platform also includes an admin dashboard for managing orders, users, and menu items, making it a comprehensive solution for food businesses.',
      link: 'https://github.com/Jyotiraditya077/finebites',
      liveLink: 'https://finebites-frontend.onrender.com/',
      image: 'photos/finebites.png',
      technologies: ['React.js', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe', 'Cloudinary']
    },
    {
      title: 'FineRides',
      description: 'FineRides is a modern vehicle rental web application that provides a seamless experience for users to browse vehicles, book rentals, and manage trips effortlessly. With a responsive UI, secure authentication, and Stripe-powered payments, FineRides ensures a smooth and reliable rental process. The platform also includes an admin dashboard for managing orders, users, and vehicle listings, making it a comprehensive solution for rental businesses.',
      link: 'https://github.com/Jyotiraditya077/finerides',
      liveLink: 'https://finerides.onrender.com/',
      image: 'photos/finerides.png',
      technologies: ['React.js', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe', 'Cloudinary']
    },
    {
      title: 'MindEase',
      description: 'MindEase is an AI-powered mental health support platform designed to provide a safe, judgment-free space for users to navigate their emotional well-being. It offers personalized mental health check-ins, a 24/7 chatbot for support and guidance, and science-backed insights to help users manage stress, anxiety, and daily challenges. MindEase empowers individuals to take the first step in their mental health journey at their own pace, with no pressure.',
      link: 'https://github.com/Jyotiraditya077/mindease-frontend',
      image: 'photos/mindease.png',
      technologies: ['React.js', 'Tailwind', 'FastAPI', 'Pytorch', 'MongoDB', 'Clerk', 'XGBoost', 'HuggingFace']
    },
    {
      title: 'BG Remover',
      description: 'BG Remover is a Full Stack AI SaaS application that enables users to remove backgrounds from images with just one click. Built with the MERN stack and integrated with AI-powered image processing, this app offers seamless user experience, authentication, credit system, and online payment integration.',
      link: 'https://github.com/Jyotiraditya077/bg-remover',
      liveLink: 'https://bg-removeryou.vercel.app/', 
      image: 'photos/bg-remover.png',
      technologies: ['React.js', 'Tailwind', 'Clerk', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Stripe']
    },
    {
      title: 'NoteVader',
      description: 'A Star Wars themed note-taking app with JWT auth, Yoda & Darth UI modes using DaisyUI. Built with MERN stack, it offers login, create, and view note features in a themed, responsive interface.',
      link: 'https://github.com/Jyotiraditya077/NoteVader',
      liveLink: 'https://notevader.onrender.com',
      image: 'photos/notevader.png',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'DaisyUI']
    },
    {
      title: 'Weather App',
      description: 'A sleek weather app providing real-time updates for any city, with a fully responsive design and dynamic weather icons, resulting in a 100% mobile compatibility, 30% increase in user engagement, and 100,000+ cities covered.',
      link: 'https://github.com/Jyotiraditya077/weather_app',
      image: 'photos/weather.png',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Works-todo',
      description: 'A simple yet efficient to-do list web app that lets users add, edit, delete, and sort tasks by oldest or most recent. Built with React.js, this project showcases my ability to develop clean, interactive, and user-focused interfaces.',
      link: 'https://github.com/Jyotiraditya077/To-do-list-web-app',
      liveLink: 'https://works-todo.netlify.app/',
      image: 'photos/works-todo.png',
      technologies: ['React.js']
    }
  ];

  const hasMoreProjects = projects.length > 4;

  return (
    <section id="projects" className="py-20 bg-slate-900/50 animate-on-scroll relative">
      {hoveredIndex !== null && (
        <div className="fixed inset-0 bg-black opacity-5 transition-opacity duration-300 pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300 
                ${hoveredIndex !== null && hoveredIndex !== index ? 'brightness-50' : 'brightness-100'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video bg-purple-900/50">
                <img 
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className={`object-cover w-full h-full transition-opacity duration-700 ${
                    loadedImages[project.title] ? 'opacity-90' : 'opacity-0'
                  } group-hover:opacity-100`}
                  onLoad={() => handleImageLoad(project.title)}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                        <Link size={20} />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {showAllProjects && (
            <motion.div
              key="additional-projects"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 32 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {projects.slice(4).map((project, index) => (
                  <motion.div 
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300 
                      ${hoveredIndex !== null && hoveredIndex !== index + 4 ? 'brightness-50' : 'brightness-100'}`}
                    onMouseEnter={() => setHoveredIndex(index + 4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="aspect-video bg-purple-900/50">
                      <img 
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className={`object-cover w-full h-full transition-opacity duration-700 ${
                          loadedImages[project.title] ? 'opacity-90' : 'opacity-0'
                        } group-hover:opacity-100`}
                        onLoad={() => handleImageLoad(project.title)}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                        {project.title}
                        <div className="flex gap-2">
                          {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                              <Link size={20} />
                            </a>
                          )}
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </h3>
                      <p className="text-gray-400">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasMoreProjects && (
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.button
              onClick={toggleShowMore}
              className="group relative px-6 py-2.5 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-300 border border-white/10 hover:border-purple-400/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2 text-sm">
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {showAllProjects ? 'Show Less' : `See More Projects (${projects.length - 4})`}
                </span>
                <motion.div
                  animate={{ rotate: showAllProjects ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

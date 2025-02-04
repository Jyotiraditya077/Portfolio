import React, { useEffect, useState } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Rocket, Zap,
  Menu, X,
  // Tech stack icons
  Globe, Server, Database, Wrench,
  Layout, Palette, FileCode, Blocks,
  Terminal, GitBranch, MonitorSmartphone
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const techStack = {
    frontend: [
      { icon: Layout, name: 'HTML5' },
      { icon: Palette, name: 'CSS3' },
      { icon: FileCode, name: 'JavaScript' },
      { icon: Blocks, name: 'React' },
      { icon: MonitorSmartphone, name: 'Responsive Design' },
      { icon: Globe, name: 'TypeScript' }
    ],
    backend: [
      { icon: Server, name: 'Node.js' },
      { icon: Terminal, name: 'Python' },
      { icon: FileCode, name: 'Express.js' }
    ],
    database: [
      { icon: Database, name: 'PostgreSQL' },
      { icon: Database, name: 'MongoDB' },
      { icon: Database, name: 'MySQL' }
    ],
    tools: [
      { icon: GitBranch, name: 'Git' },
      { icon: Wrench, name: 'VS Code' },
      { icon: Github, name: 'GitHub' }
    ]
  };

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">JS</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'text-purple-400 bg-purple-900/20'
                      : 'text-gray-300 hover:text-white hover:bg-purple-900/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animate-on-scroll">
        <div className="absolute inset-0">
          <video 
            className="w-full h-full object-cover opacity-10"
            autoPlay 
            preload='none'
            loop 
            muted 
            playsInline
            src="/photos/hero2.2.mp4"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient-text">
              Jyotiraditya Swain
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com/Jyotiraditya077" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jyotiraditya-swain-/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:jyotiradityaswain123@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Enthusiastic about crafting dynamic web experiences. 
              Proficient in harnessing the power of Bootstrap for responsive design. Currently diving 
              into the world of MERN stack development, eager to master MongoDB, Express.js, React, 
              and Node.js. With a passion for coding and problem-solving, I thrive on tackling 
              challenges head-on and delivering elegant solutions.
            </p>
            <p>
              Always eager to learn and grow, I actively seek opportunities to expand my skill set 
              and stay updated with the latest technologies. My strong team-building skills enable 
              me to collaborate effectively, communicate ideas clearly, and drive projects towards 
              successful outcomes.
            </p>
            <p>
              Let's connect and explore how we can collaborate on exciting tech projects together!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable, and efficient code is my passion.' },
              { icon: Rocket, title: 'Performance', description: 'Optimizing for the best possible user experience.' },
              { icon: Zap, title: 'Innovation', description: 'Always learning and implementing the latest technologies.' }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <feature.icon className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Tech Stack</h2>
          <div className="space-y-12">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-purple-400 mb-6 capitalize">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors duration-300"
                    >
                      <tech.icon className="text-purple-400 group-hover:text-purple-300 transition-colors" size={24} />
                      <span className="text-gray-300 group-hover:text-white text-sm font-medium text-center transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-300 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
            <a 
              href="mailto:jyotiradityaswain123@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity animate-button"
            >
              Get in Touch
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Jyotiraditya Swain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
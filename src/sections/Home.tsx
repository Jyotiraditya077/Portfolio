import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Particles from './Particles';
import ShinyText from './ShinyText';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animate-on-scroll">
      <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient-text relative z-10">
            Jyotiraditya Swain
          </h1>
          <ShinyText 
            text="Full Stack Developer specializing in building exceptional digital experiences" 
            disabled={false} 
            speed={3} 
            className='custom-class'
          />
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://github.com/Jyotiraditya077" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jyotiraditya--swain/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jyotiradityaswain123@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover :text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
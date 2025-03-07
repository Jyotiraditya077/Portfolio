import React from 'react';
import { 
  Globe, Server, Database, Wrench,
  Layout, Palette, FileCode, Blocks,
  Terminal, GitBranch, MonitorSmartphone, Github
} from 'lucide-react';

const TechStack: React.FC = () => {
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

  return (
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
      {/* <br />
      <br />
      <br />
      <ScrollVelocity
        texts={['Full Stack', 'Developer']} 
        velocity={30} // Define velocity value
        className="custom-scroll-text"
      /> */}
    </section>
  );
};

export default TechStack;
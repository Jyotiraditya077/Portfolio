import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Server, Database, Wrench,
  Layout, Palette, FileCode, Blocks,
  Terminal, GitBranch, MonitorSmartphone, Github
} from 'lucide-react';

const TechStack: React.FC = () => {
  const techStack = {
    frontend: [
      { icon: Layout, name: 'HTML5', color: '#E34F26' },
      { icon: Palette, name: 'CSS3', color: '#264DE4' },
      { icon: FileCode, name: 'JavaScript', color: '#F7DF1E' },
      { icon: Blocks, name: 'React', color: '#61DAFB' },
      { icon: MonitorSmartphone, name: 'Responsive Design', color: '#FF6B6B' },
      { icon: Globe, name: 'TypeScript', color: '#3178C6' }
    ],
    backend: [
      { icon: Server, name: 'Node.js', color: '#339933' },
      { icon: Terminal, name: 'Python', color: '#3776AB' },
      { icon: FileCode, name: 'Express.js', color: '#000000' }
    ],
    database: [
      { icon: Database, name: 'PostgreSQL', color: '#4169E1' },
      { icon: Database, name: 'MongoDB', color: '#47A248' },
      { icon: Database, name: 'MySQL', color: '#00758F' }
    ],
    tools: [
      { icon: GitBranch, name: 'Git', color: '#F05032' },
      { icon: Wrench, name: 'VS Code', color: '#007ACC' },
      { icon: Github, name: 'GitHub', color: '#181717' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="tech-stack" className="py-12 sm:py-16 animate-on-scroll overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Tech Stack</h2>
          <p className="text-gray-300 text-sm">
            Technologies I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
            >
              <motion.div 
                className="flex items-center gap-2 mb-4 sm:mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {category === 'frontend' && <Layout className="text-purple-400" size={20} />}
                {category === 'backend' && <Server className="text-purple-400" size={20} />}
                {category === 'database' && <Database className="text-purple-400" size={20} />}
                {category === 'tools' && <Wrench className="text-purple-400" size={20} />}
                <h3 className="text-sm sm:text-base font-medium text-purple-400 capitalize">{category}</h3>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                {technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-center gap-2 group bg-white/5 rounded-lg p-2 sm:p-3 hover:bg-white/10 transition-colors duration-300"
                  >
                    <motion.div 
                      className="p-1.5 rounded"
                      style={{ backgroundColor: `${tech.color}15` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <tech.icon size={16} style={{ color: tech.color }} />
                    </motion.div>
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
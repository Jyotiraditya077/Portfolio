import React from 'react';
import { Code2, Rocket, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable, and efficient code is my passion.' },
    { icon: Rocket, title: 'Performance', description: 'Optimizing for the best possible user experience.' },
    { icon: Zap, title: 'Innovation', description: 'Always learning and implementing the latest technologies.' }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
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
  );
};

export default Features;
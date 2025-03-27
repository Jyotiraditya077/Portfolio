import React from "react";
import { Code2, Rocket, Zap } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion.",
    },
    {
      icon: Rocket,
      title: "Upskilling",
      description: "Continuously learning and improving skills to stay up-to-date with the latest technologies.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always learning and implementing the latest technologies.",
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-slate-900/50 animate-on-scroll">
      {/* Features Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black/40 backdrop-blur-lg rounded-lg p-6 
                         hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/40"
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
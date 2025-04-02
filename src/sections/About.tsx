import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 animate-on-scroll overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="photos/profile.jpg"
              alt="Profile Picture"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div 
            className="space-y-6 text-gray-300 leading-relaxed"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p>
              Enthusiastic about crafting dynamic web experiences and building scalable applications. Proficient in the MERN stack, MongoDB, Express.js, React, and Node.js, delivering seamless and responsive solutions. Currently diving into the world of DevOps, exploring CI/CD, Docker, and cloud deployment to optimize application performance and scalability.
            </p>
            <p>
              With a passion for coding and problem-solving, I thrive on tackling challenges head-on and implementing efficient solutions. Always eager to learn and grow, I stay updated with the latest technologies and actively seek opportunities to expand my expertise. Strong collaboration and communication skills enable me to drive projects toward successful outcomes.
            </p>
            <p>
              Let's connect and explore how we can collaborate on exciting tech projects together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
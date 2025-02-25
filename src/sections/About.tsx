import React from 'react';

const About: React.FC = () => {
  return (
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
  );
};

export default About;
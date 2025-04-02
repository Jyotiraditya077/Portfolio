import React from 'react';
import { Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section id="contact" className="py-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <motion.div 
            className="w-full md:w-1/2 text-center ml-4 md:ml-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-300 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
            <motion.button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity animate-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <Mail size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
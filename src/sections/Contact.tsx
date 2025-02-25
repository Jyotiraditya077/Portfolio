import type React from "react"
import { Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Contact: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section id="contact" className="py-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-8">I'm always interested in hearing about new projects and opportunities.</p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity animate-button"
          >
            Get in Touch
            <Mail size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact


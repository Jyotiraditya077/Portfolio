"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Mail, ChevronLeft, CheckCircle } from "lucide-react"
import Particles from "./Particles";
import "bootstrap/dist/css/bootstrap.min.css";

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

const ContactForm: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const data = {
        access_key: "4e16a67e-0e00-4e90-b417-d42f4578de5b",
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to submit form. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={600}
          particleSpread={10}
          speed={0.06}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="max-w-md w-full bg-white rounded-2xl p-8 relative z-10 shadow-lg">
        <button onClick={() => navigate("/")} className="absolute top-4 left-4 text-gray-600 hover:text-gray-900">
          <ChevronLeft size={24} />
        </button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-gray-600 mt-2">You can reach us anytime</p>
        </div>

        {error && <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-lg text-sm">{error}</div>}
        {isSuccess && (
          <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm flex items-center gap-2">
            <CheckCircle size={20} /> Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <img
              src="./photos/sneaking-cat.webp"
              alt="Sneaky Cat"
              className="absolute top-[-37px] left-3 w-16 h-10"
            />
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              required
              disabled={isLoading}
            />
          </div>

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border text-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
            required
            disabled={isLoading}
          />

          <div className="flex flex-col md:flex-row gap-2">
            <select className="px-3 py-3 rounded-lg border border-gray-300 bg-white text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+62">+62</option>
              <option value="+61">+61</option>
              <option value="+86">+86</option>
              <option value="+81">+81</option>
              <option value="+82">+82</option>
              <option value="+65">+65</option>
              <option value="+60">+60</option>
              <option value="+64">+64</option>
              <option value="+55">+55</option>
              <option value="+52">+52</option>
              <option value="+33">+33</option>
              <option value="+49">+49</option>
              <option value="+39">+39</option>
              <option value="+34">+34</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              required
              disabled={isLoading}
            />
          </div>
          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border text-gray-600 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center relative h-12"
          >
            {!isLoading && <span>Submit</span>}
            
            {isLoading && (
              <div className="flex items-center gap-2">
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
              </div>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

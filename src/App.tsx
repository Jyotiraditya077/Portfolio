import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Features from "./sections/Features";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ContactForm from "./pages/ContactForm";
import ScrollReveal from "./ScrollReveal";

function MainContent() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />

      <ScrollReveal baseRotation={0} enableBlur={true} blurStrength={0}>
        <Home />
      </ScrollReveal>
      <ScrollReveal baseRotation={0} enableBlur={true} blurStrength={2}>
        <About />
      </ScrollReveal>
      <ScrollReveal baseRotation={0} enableBlur={true} blurStrength={2}>
        <Features />
      </ScrollReveal>
      <ScrollReveal baseRotation={0} enableBlur={true} blurStrength={1} wordAnimationEnd="center center">
        <TechStack />
      </ScrollReveal>
      <ScrollReveal baseRotation={0} enableBlur={false} blurStrength={0}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal baseRotation={0} enableBlur={true} blurStrength={2}>
        <Contact />
      </ScrollReveal>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;

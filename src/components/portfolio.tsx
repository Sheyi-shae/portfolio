import { Button } from "@/components/ui/button"
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'

import Projects from "./projects"
import Experience from "./experience"
import Contact from "./contact"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 overflow-x-hidden">
      

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 relative overflow-hidden">
        <Hero/>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white relative overflow-hidden">
       <About/>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-teal-50 relative overflow-hidden">
        <Skills/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white relative overflow-hidden">
       <Projects/>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-teal-50 relative overflow-hidden"
      >
      <Experience/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white relative overflow-hidden">
        <Contact/>
      </section>

      {/* Footer */}
     
    </div>
  )
}

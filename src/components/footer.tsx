import { Github,  Linkedin, Mail } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

export default function Footer() {
      const mailto =
    "mailto:adeniyiemmanuel042@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Seyi,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0AThanks,";

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-teal-600/10 rounded-full animate-float-delayed"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent mb-4 animate-pulse">
              {"SEYI"}
            </div>
            <p className="text-gray-400 mb-6">Crafting digital experiences with passion and precision</p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link
              target="_blank" 
                href="https://github.com/Sheyi-shae"
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
              target="_blank" 
                href="https://www.linkedin.com/in/seyi-adeniyi-26179b37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href={mailto} target="_blank"  
                className="text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© {new Date().getFullYear()} Seyi Adeniyi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  const mailto =
    "mailto:adeniyiemmanuel042@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Seyi,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0AThanks,";

  return (
    <div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-teal-400/20 rounded-full animate-float "></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-indigo-400/20 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container pt-4 mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <Image
                src="/images/seyi.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-8 border-4  border-gradient-to-r from-indigo-400 to-teal-400 shadow-2xl animate-profile-glow"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full"></div>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x">
                Seyi Emmanuel Adeniyi
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-typing">
              Fullstack Developer crafting exceptional digital experiences with modern web technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
          <Link href={mailto} target="_blank" rel="noopener noreferrer"> <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-subtle"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button></Link>
          <Link href={'https://github.com/Sheyi-shae'} target="_blank" rel="noopener noreferrer">  <Button
              size="lg"
              variant="outline"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button></Link>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-teal-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-indigo-600 mx-auto animate-bounce-slow" />
          </div>
        </div>
    </div>
  )
}

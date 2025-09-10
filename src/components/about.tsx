import { Card, CardContent,  } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Code, Database, Globe, Server, Star } from "lucide-react"
import HeadingTitle from "./heading-title"

export default function About() {
  return (
    <div>
         <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-teal-50/50"></div>
        <div className="container mx-auto relative z-10">
          <HeadingTitle title={'About Me'}/>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-teal-600 mr-2 animate-spin-slow" />
                Passionate Fullstack Developer
              </h3>
             <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
  I’m a <strong className="animate-pulse-subtle text-indigo-600">Web Developer</strong> and <strong className="animate-pulse-subtle text-indigo-600">IT Engineer</strong> who transforms ideas into 
  clean, functional applications. My stack centers on <strong className="animate-pulse-subtle text-indigo-600">React</strong>, <strong className="animate-pulse-subtle text-indigo-600">Next.js</strong>, and <strong className="animate-pulse-subtle text-indigo-600">Node.js</strong>, with strong 
  experience working with databases like <strong className="animate-pulse-subtle text-indigo-600">MongoDB</strong> and <strong className="animate-pulse-subtle text-indigo-600">MySQL</strong> — often 
  paired with ORMs such as <strong className="animate-pulse-subtle text-indigo-600">Prisma</strong> and <strong className="animate-pulse-subtle text-indigo-600">Sequelize</strong> to build 
  scalable backends. I’m equally at ease refining frontend details as I am architecting backend logic.
</p>

<p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
  I’ve built projects ranging from <strong className="animate-pulse-subtle text-indigo-600">chat apps</strong> to  <strong className="animate-pulse-subtle text-indigo-600">learning management systems(LMS)</strong> and <strong className="animate-pulse-subtle text-indigo-600">multi-tenant SaaS platforms</strong>. 
  My <strong className="animate-pulse-subtle text-indigo-600">IT support background</strong> makes me resourceful and 
  problem-focused — I’m quick to diagnose issues and keep 
 systems running smoothly. I’m always learning, whether it’s adopting 
  new frameworks, improving UI/UX practices, or optimizing   <strong className="animate-pulse-subtle text-indigo-600">database performance</strong>. My mission is simple: build software that’s 
  reliable, intuitive, and impactful.
</p>


             <div className="flex flex-wrap gap-3">
  <Badge
    variant="secondary"
    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300 animate-fade-in"
  >
    Frontend
  </Badge>
  <Badge
    variant="secondary"
    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300 animate-fade-in animation-delay-100"
  >
    Backend
  </Badge>
  <Badge
    variant="secondary"
    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300 animate-fade-in animation-delay-200"
  >
    Database
  </Badge>
  <Badge
    variant="secondary"
    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300 animate-fade-in animation-delay-300"
  >
    Deployment
  </Badge>
    <Badge
    variant="secondary"
    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300 animate-fade-in"
  >
    Problem Solver
  </Badge>
  <Badge
    variant="secondary"
    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300 animate-fade-in animation-delay-100"
  >
    Team Player
  </Badge>
</div>

            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <Card className="text-center border-indigo-200 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-float">
                <CardContent className="pt-6">
                  <Code className="w-12 h-12 text-indigo-600 mx-auto mb-4 animate-bounce-subtle" />
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600">React, Next.js, Tailwind</p>
                </CardContent>
              </Card>
              <Card className="text-center border-teal-200 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-float animation-delay-200">
                <CardContent className="pt-6">
                  <Server className="w-12 h-12 text-teal-600 mx-auto mb-4 animate-bounce-subtle" />
                  <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                  <p className="text-sm text-gray-600">Node.js, Express, APIs</p>
                </CardContent>
              </Card>
              <Card className="text-center border-indigo-200 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-float animation-delay-400">
                <CardContent className="pt-6">
                  <Database className="w-12 h-12 text-indigo-600 mx-auto mb-4 animate-bounce-subtle" />
                  <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
                  <p className="text-sm text-gray-600">MongoDB, MySQL</p>
                </CardContent>
              </Card>
              <Card className="text-center border-teal-200 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-float animation-delay-600">
                <CardContent className="pt-6">
                  <Globe className="w-12 h-12 text-teal-600 mx-auto mb-4 animate-bounce-subtle" />
                  <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                  <p className="text-sm text-gray-600">Vercel, Netlify, Render, Railway, Cloudinary</p>
                </CardContent>
              </Card>
               <Card className="text-center border-indigo-200 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-float animation-delay-800">
    <CardContent className="pt-6">
      <Cloud className="w-12 h-12 text-indigo-600 mx-auto mb-4 animate-bounce-subtle" />
      <h4 className="font-semibold text-gray-900 mb-2">Cloud</h4>
      <p className="text-sm text-gray-600">AWS, Firebase, Supabase</p>
    </CardContent>
    </Card>
              
            </div>
          </div>
        </div>
    </div>
  )
}

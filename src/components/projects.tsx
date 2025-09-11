import { Button } from "@/components/ui/button"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
 
  ExternalLink,
 
  Globe,

  
  Zap,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeadingTitle from "./heading-title"

export default function Projects() {
  return (
    <div>
         <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto relative z-10">
          <HeadingTitle title={'Featured Projects'}/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 animate-slide-in-up">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/lms.png"
                  alt="Lms"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-teal-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Link href={'https://lms-frontend-zeta-fawn.vercel.app/'}  target="_blank" rel="noopener noreferrer"><Button size="sm" variant="secondary" className="animate-bounce-subtle">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button></Link>
                   <Link href={'https://github.com/Sheyi-shae/Lms-backend'} target="_blank" rel="noopener noreferrer"><Button  size="sm" variant="secondary" className="animate-bounce-subtle animation-delay-100">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button></Link> 
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-indigo-700 flex items-center ">
                 <Zap className="w-5 h-5 mr-2 text-teal-600" />
             <Link href={'https://lms-frontend-zeta-fawn.vercel.app/'}  target="_blank" rel="noopener noreferrer">    Learning Management System</Link> 
                </CardTitle>
                <CardDescription>
                  Full-stack learning management system with Next, Node.js, and Cloudinary integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300"
                  >
                    Nextjs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300"
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
                  >
                    Cloudinary
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 animate-slide-in-up animation-delay-200">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/jobspere.png"
                  alt="jobsphere"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-indigo-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Link href={'https://jobshpere-frontend-dse6.vercel.app/'}  target="_blank" rel="noopener noreferrer"><Button size="sm" variant="secondary" className="animate-bounce-subtle">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button></Link>
                      <Link href={'https://github.com/Sheyi-shae/jobshpere-backend'} target="_blank" rel="noopener noreferrer"><Button  size="sm" variant="secondary" className="animate-bounce-subtle animation-delay-100">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button></Link> 
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-indigo-600" />
                  <Link href={'https://jobshpere-frontend-dse6.vercel.app/'}>    Job SaaS Platform</Link>
             
                </CardTitle>
                <CardDescription>
                  JobSphere is a multi-tenant job board SaaS platform designed to connect employers with 
                  top talent while giving companies powerful tools to manage hiring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300"
                  >
                    Zustand
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
                  >
                    Nodejs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300"
                  >
                    Stripe integration
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 animate-slide-in-up animation-delay-400">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Weather+Dashboard"
                  alt="MySchool Platform"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-teal-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button size="sm" variant="secondary" className="animate-bounce-subtle">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="animate-bounce-subtle animation-delay-100">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-indigo-700 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-teal-600" />
                  MySchool Social Platform
                </CardTitle>
                <CardDescription>
                 MySchool is a forum where a student can sign in create or engage in a discussion by liking or commenting on a post
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
                  >
                    Tailwind
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300"
                  >
                   Nodejs
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors duration-300"
                  >
                   Mysql
                  </Badge>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
    </div>
  )
}

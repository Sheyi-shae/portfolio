import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
 
  Code,
  Server,
  Database,
  
} from "lucide-react"
import HeadingTitle from "./heading-title"

export default function Skills() {
  return (
    <div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 rounded-full animate-float-delayed"></div>
        </div>
        <div className="container mx-auto relative z-10">
         <HeadingTitle title={'Technical Skills'}/>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700">
                  <Code className="w-6 h-6 mr-2 animate-pulse" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">React</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-90"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Next.js</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-99"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tailwind CSS</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-95"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">TypeScript</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-80"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="flex items-center text-teal-700">
                  <Server className="w-6 h-6 mr-2 animate-pulse" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Node.js</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-600 to-indigo-600 h-2 rounded-full animate-skill-bar-88"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Express.js</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-600 to-indigo-600 h-2 rounded-full animate-skill-bar-85"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">REST APIs</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-600 to-indigo-600 h-2 rounded-full animate-skill-bar-90"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">GraphQL</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-600 to-indigo-600 h-2 rounded-full animate-skill-bar-75"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-in-right animation-delay-400">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700">
                  <Database className="w-6 h-6 mr-2 animate-pulse" />
                  Database & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">MongoDB</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-85"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">PostgreSQL</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-80"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Git</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-90"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Docker</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-600 to-teal-600 h-2 rounded-full animate-skill-bar-70"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  )
}

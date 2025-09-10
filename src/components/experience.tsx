import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Calendar } from 'lucide-react'
import HeadingTitle from './heading-title'

export default function Experience() {
  return (
    <div>
          <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-24 h-24 bg-teal-200/40 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-indigo-200/40 rounded-full animate-float-delayed"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <HeadingTitle title={'Product Development Experience'}/>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
             {/* Jobsphere SaaS */}
<Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-102 animate-slide-in-left">
  <CardHeader>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <CardTitle className="text-indigo-700 flex items-center">
          <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
          Fullstack Developer
        </CardTitle>
        <CardDescription className="text-lg">JobSphere (Multi-tenant SaaS)</CardDescription>
      </div>
      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
        <Calendar className="w-4 h-4 mr-2" />
        <span>2025</span>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-gray-600">
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Built a multi-tenant job board platform with path-based tenant routing and role-based authentication.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Integrated Stripe recurring billing for subscription management and webhook-based status updates.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Implemented job posting, applications, and company dashboards with real-time notifications.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Notification via email(nodemailer).
      </li>
    </ul>
  </CardContent>
</Card>

{/* Learning Management System */}
<Card className="border-teal-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-102 animate-slide-in-right animation-delay-200">
  <CardHeader>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <CardTitle className="text-teal-700 flex items-center">
          <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
          Fullstack Developer
        </CardTitle>
        <CardDescription className="text-lg">E-Learning Platform (LMS)</CardDescription>
      </div>
      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
        <Calendar className="w-4 h-4 mr-2" />
        <span>2024</span>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-gray-600">
      <li className="flex items-start">
        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Developed a full-stack LMS with JWT authentication, course enrollment, and student dashboards.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Integrated Cloudinary for course video and resource uploads with secure access.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Built a recommendation engine that suggests courses based on user interests.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Notification via email(nodemailer).
      </li>
    </ul>
  </CardContent>
</Card>

{/* CarePlus Medical Booking App */}
<Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-102 animate-slide-in-left animation-delay-400">
  <CardHeader>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <CardTitle className="text-indigo-700 flex items-center">
          <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
          Fullstack Developer
        </CardTitle>
        <CardDescription className="text-lg">CarePlus (Telehealth App)</CardDescription>
      </div>
      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
        <Calendar className="w-4 h-4 mr-2" />
        <span>2024</span>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-gray-600">
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Built a medical appointment booking platform with patient and doctor authentication.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Implemented scheduling system with availability management and real-time updates.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Designed responsive UI with Next.js + Tailwind for a seamless telehealth experience.
      </li>
      <li className="flex items-start">
        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Notification via email(nodemailer).
      </li>
    </ul>
  </CardContent>
</Card>

{/* Chat App */}
<Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-102 animate-slide-in-left animation-delay-400">
  <CardHeader>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <CardTitle className="text-indigo-700 flex items-center">
          <div className="w-3 h-3 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
          Fullstack Developer
        </CardTitle>
        <CardDescription className="text-lg">ChatApp</CardDescription>
      </div>
      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
        <Calendar className="w-4 h-4 mr-2" />
        <span>2023</span>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-gray-600">
      <li className="flex items-start">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 animate-pulse"></div>
        Built a chat application with react and firebase
      </li>
      
    </ul>
  </CardContent>
</Card>

            </div>
          </div>
        </div>
    </div>
  )
}

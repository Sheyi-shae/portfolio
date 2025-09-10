"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Smartphone, MapPin } from "lucide-react"
import Link from "next/link"
import HeadingTitle from "./heading-title"
import contactAction from "@/_actions/contact-action"
import { toast } from "sonner"


export default function Contact() {
  // inputs state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")

  const [isSubmitting,setIsSubmitting]=useState(false)

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    //check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  toast.error('Please enter a valid email address')
  return
}
if (message.length < 10) {
  toast.error('Please a detailed message')
  return
}
 
    setIsSubmitting(true)
    try {

      const data = { firstName, lastName, email, subject, message }
    await contactAction({ data })
    toast.success('Your message has been sent successfully')
      
    } catch (error) {

      toast.error('An error occurred')
    }
setIsSubmitting(false)
    
  }

  const mailto =
    "mailto:adeniyiemmanuel042@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Seyi,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0AThanks,"

  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-teal-50/30"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-5 animate-fade-in-up">
          <HeadingTitle title="Get In Touch" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">adeniyiemmanuel042@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-100 to-indigo-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Nigeria</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+234 814299505</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/in/seyi-adeniyi-26179b37b"
                  className="w-12 h-12 bg-gradient-to-r from-teal-100 to-indigo-100 rounded-full flex items-center justify-center text-teal-600 hover:from-teal-600 hover:to-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Linkedin className="w-5 h-5" aria-label="LinkedIn" />
                </Link>
                <Link
                  href={mailto}
                  className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-full flex items-center justify-center text-indigo-600 hover:from-indigo-600 hover:to-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Mail className="w-5 h-5" aria-label="Email me" />
                </Link>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="border-indigo-200 hover:shadow-2xl transition-all duration-500 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-indigo-700">Send Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !firstName || !lastName || !email || !subject || !message}
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

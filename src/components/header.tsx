"use client"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"

import { useEffect, useState } from "react"

const navLinks = [
  { id: "1", title: "Home", link: "#home" },
  { id: "2", title: "About", link: "#about" },
  { id: "3", title: "Skills", link: "#skills" },
  { id: "4", title: "Projects", link: "#projects" },
  { id: "5", title: "Experience", link: "#experience" },
  { id: "6", title: "Contact", link: "#contact" },
]

export default function Header() {
  const [hash, setHash] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [clickedLink, setClickedLink] = useState<string | null>(null)
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener("hashchange", updateHash)
    updateHash()
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])
  

    const handleLinkClick = (linkId: string, event: React.MouseEvent) => {
    setClickedLink(linkId)

    // Create ripple effect
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Add bubbles at click position
    const newBubbles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
    }))
       setBubbles((prev) => [...prev, ...newBubbles])

    // Clear animations after delay
    setTimeout(() => {
      setClickedLink(null)
      setBubbles((prev) => prev.filter((bubble) => !newBubbles.includes(bubble)))
    }, 600)
  }

  //download resume locally from public folder
 const downloadResume = () => {
   const resumeUrl = '/Adeniyi_Seyi_Resume.docx'
    try { const link = document.createElement('a')
       link.href = resumeUrl 
       link.download = 'Adeniyi_Seyi_Resume.docx'
        document.body.appendChild(link)
         link.click()
         document.body.removeChild(link) 
        } catch (err) {
           window.open(resumeUrl, "_blank")
           } }
  return (
    <>
     <div className="fixed inset-0 pointer-events-none z-50">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent animate-ping opacity-75"
            style={{
              left: bubble.x,
              top: bubble.y,
              animation: "bubble-float 0.6s ease-out forwards",
            }}
          />
        ))}
      </div>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-indigo-100 z-50 animate-slide-down">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
              {"SEYI"}
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={(e) => handleLinkClick(item.id, e)}
                  className={`text-gray-700 ${hash === item.link ? "text-indigo-600" : "hover:text-indigo-600 transition-all duration-300 hover:scale-105"}  relative group overflow-hidden ${
                    clickedLink === item.id ? "animate-pulse scale-110" : ""
                  }`}>
                  {item.title}
                  {hash === item.link && (
                    <span className="absolute -bottom-1 left-0  h-0.5 bg-indigo-600 transition-all duration-300 w-full"></span>
                  )}
                  {clickedLink === item.id && (
                    <span className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-30"></span>
                  )}
                </a>
              ))}
            </div>

            <Button onClick={downloadResume} className="hidden md:flex bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-subtle">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>

            <Button
              onClick={() => setIsMobile(!isMobile)}
              className="md:hidden transition-all duration-300 flex bg-gradient-to-r p-2 from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className={`transition-transform duration-300 ${isMobile ? "rotate-180" : "rotate-0"}`}>
                {isMobile ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </div>
            </Button>
          </div>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobile ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="w-full bg-white/95 backdrop-blur-md border-b border-indigo-100 shadow-lg">
            <div
              className={`flex flex-col space-y-2 pb-10 pt-2 transform transition-all duration-300 ${
                isMobile ? "-translate-y-4 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              {navLinks.map((item, index) => (
                <a
                  onClick={(e) =>{
                    handleLinkClick(item.id, e)
                     setIsMobile(false)}}
                  key={item.id}
                  href={item.link}
                  className={`text-gray-700 p-3 px-10 transition-all duration-300  ${
                    hash === item.link
                      ? "text-indigo-50 rounded-sm bg-indigo-600 shadow-md"
                      : "hover:text-indigo-600 hover:translate-x-2"
                  } relative group ${
                    clickedLink === item.id ? "animate-pulse scale-110" : ""}`}
                  style={{
                    transitionDelay: isMobile ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.title}
                  {clickedLink === item.id && (
                    <span className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-30"></span>
                  )}
                </a>
              ))}

              <div className="px-6 pt-2">
                <Button onClick={downloadResume} className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

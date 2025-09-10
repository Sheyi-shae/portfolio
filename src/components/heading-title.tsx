import React from 'react'

interface TitleProps{
    title: String
}

export default function HeadingTitle({title}: TitleProps) {
  return (
   <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-teal-700  to-indigo-600 bg-clip-text text-transparent animate-gradient-shift mb-4">{title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-600 mx-auto animate-expand"></div>
          </div>
  )
}

import React from 'react'
import RightSection from './right_section'
import LeftSection from './left_section'

const button = () => {
  return (
    <><LeftSection />
    <div className="border border-white/15 overflow-hidden flex items-start justify-center pt-4 h-[600px]">
    <h1
          className="text-white/30  tracking-tight uppercase text-center w-full ">
          sekcja na przycisk
    </h1>
    
    
    </div>
    
    
    <RightSection /></>

  )
}

export default button
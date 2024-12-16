import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
const Footer = () => {
    useGSAP(()=>{
        gsap.to('.footer h1',{
          duration:0.1,
          scrollTrigger:{
            trigger:'.footer',
            ease:'slow',
            start:'70% 90%',
            end:'95% bottom',
            scrub:1,
          },
          opacity:1,
          
        })
        gsap.to('.footer h1',{
          duration:4,
          zIndex:1,
          scrollTrigger:{
            trigger:'.footer',
            ease:'back.out',
            start:'70% 90%',
            end:'95% bottom',
            scrub:5,
          },
          stagger:0.5,
          y:0,
          
        })
      })
    
  return (
    <div id='contact' className="relative h-screen bg-black w-[100%] footer overflow-hidden z-10 -top-1">
    <div className="flex flex-row h-[70vh] bg-black"></div>
    <div className="flex font-custom justify-center h-[38vh] bg-black items-center pb-20 overflow-hidden p-5">
    <h1 className="md:text-[30vh] text-[13vh] lg:text-[20vh] font-bold text-white leading-none -translate-y-96 opacity-0">D</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">a</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">r</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">k</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">V</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">e</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">r</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">s</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">e</h1>
<h1 className="md:text-[30vh] lg:text-[20vh] text-[13vh] sm:text-[13vh] font-bold text-white leading-none -translate-y-96 opacity-0">.</h1>
    </div>
    <h1 className='text-white'>darkverse@gmail.com</h1>
  </div>
  )
}

export default Footer

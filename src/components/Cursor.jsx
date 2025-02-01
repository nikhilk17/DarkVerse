import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Cursor = () => {
    useGSAP(()=>{
        //mouse move
        const cursor = document.querySelector('.cursor')
        document.addEventListener('mousemove',e=>{
         const x = e.clientX-12
          const y = e.clientY-12
          gsap.to(cursor,{
            x:x,
            y:y,
            duration:1,
            ease:'back.out',
          })
        })
      })
  return (
    <div className="cursor bg-white h-6 w-6 rounded-full z-50 fixed filter pointer-events-none mix-blend-difference"> </div>
  )
}

export default Cursor

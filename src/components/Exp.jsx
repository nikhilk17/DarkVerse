import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
const Exp = () => {
    //exp
  useGSAP(()=>{
    gsap.from('.exp-div',{
      scale:0,
      ease:'power1.inOut',
      scrollTrigger:{
        trigger:'.exp',
        start:"top top",
        scrub:1,
        end:'150% 50%',
        pin:true,
      }
    })
  })
  return (
    <div className="z-30 relative h-screen w-full bg-white flex justify-center items-center exp overflow-hidden">
    <div className="flex justify-center flex-col items-center overflow-hidden">
    <div className='h-40 w-40 absolute md:left-72 md:top-48 lg:left-20 lg:top-80 lg:h-64 lg:w-64 top-56 '>
       <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-2xl h-full w-full object-cover"
      >
        <source
          src="https://framerusercontent.com/assets/8hEugT3woLZdPu67ZTE2AhSF6PQ.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
      <h1 className="md:text-[15vh] lg:text-[10vh]  font-bold font-custom text-5xl leading-none z-10 text-black ">Enter To The DarkVerse</h1>
      <div className="absolute bg-black h-[200vh]  w-[200vh] rounded-full exp-div overflow-hidden"></div>
    </div>
  </div>
  )
}

export default Exp

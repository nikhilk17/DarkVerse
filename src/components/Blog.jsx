import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Blog = () => {
    useGSAP(()=>{
        gsap.utils.toArray('.card img').forEach((card)=>{
          gsap.to(card,{
            scrollTrigger:{
              trigger:card,
              start:'top 25%',
              end:'bottom 5%',
              scrub:true,
            },
            ease:'power1.inOut',
            scale:0.6,
          })
        })
      })
  return (
    <div className="z-30 relative w-full min-h-screen bg-black">
  <div className="card flex flex-col gap-96 items-center py-80">
    <h1 className="md:text-[28vh] text-[15vh] sticky top-80 leading-none text-white">
      BLOG
    </h1>
    <img
      className="card1 sticky top-36 md:top-80 h-[45vh] w-[70vw] md:w-[45vw] object-cover"
      src="https://framerusercontent.com/images/xXFuCvxkhz5WEzbYfvlgSkSlSo.jpg?scale-down-to=512"
      alt="Image 1"
    />
    <img
      className="h-[45vh] sticky top-36 md:top-80 w-[70vw]  md:w-[45vw] object-cover"
      src="https://framerusercontent.com/images/bOKZoFwOnx5cyB6CIaHn3zE3gAU.jpg?scale-down-to=1024"
      alt="Image 2"
    />
    <img
      className="h-[45vh] sticky top-96 md:top-80 w-[70vw] md:w-[45vw] object-cover"
      src="https://framerusercontent.com/images/pO4KCsGIbaSjQBd9sLDYp3CLlzg.jpg?scale-down-to=1024"
      alt="Image 3"
    />
  </div>
</div>
  )
}

export default Blog

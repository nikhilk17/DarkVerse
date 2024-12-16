import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Gallery = () => {
    useGSAP(() => {
        document.querySelectorAll('.elem').forEach(elem => {
        
          const image=  elem.querySelector('img')
          let xTransform=gsap.utils.random(-100,100);

          let tl=gsap.timeline()
          tl.
          set(
              image,
              {
                transformOrigin: `${xTransform>0? 0 : '100%'}`,
              }
            )
            .to(image,{
              scale:0,
              ease:'none',
              scrollTrigger:{
                trigger:image,
                start:'top top',
                end:'40% top',
                scrub:true
              }
            })
            .to(image,{
              xPercent:xTransform,
              ease:"power3.in",
              scrollTrigger:{
                trigger:image,
                start:'top bottom',
                end:'top top',
                scrub:1
              }
            })
  
        }
        )
    }
    )
  
  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden">
        <div className="grid grid-cols-5 grid-rows-32 md:grid-cols-8 md:grid-rows-20 gap-2 overflow-hidden">
          <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 3 }}>
            <img src="https://picsum.photos/id/22/200/300" alt="Random 1" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 11, "--c": 8 }}>
            <img src="https://picsum.photos/id/23/200/300" alt="Random 2" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 1 }}>
            <img src="https://picsum.photos/id/33/200/300" alt="Random 3" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 15, "--c": 4 }}>
            <img src="https://picsum.photos/id/43/200/300" alt="Random 4" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 6 }}>
            <img src="https://picsum.photos/id/53/200/300" alt="Random 5" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 14, "--c": 2 }}>
            <img src="https://picsum.photos/id/63/200/300" alt="Random 6" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 5 }}>
            <img src="https://picsum.photos/id/74/200/300" alt="Random 7" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 12, "--c": 7 }}>
            <img src="https://picsum.photos/id/85/200/300" alt="Random 8" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 4 }}>
            <img src="https://picsum.photos/id/9/200/300" alt="Random 9" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 1 }}>
            <img src="https://picsum.photos/id/10/200/300" alt="Random 10" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 18, "--c": 5 }}>
            <img src="https://picsum.photos/id/11/200/300" alt="Random 11" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 3 }}>
            <img src="https://picsum.photos/id/12/200/300" alt="Random 12" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 8 }}>
            <img src="https://picsum.photos/id/13/200/300" alt="Random 13" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 2 }}>
            <img src="https://picsum.photos/id/14/200/300" alt="Random 14" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 17, "--c": 7 }}>
            <img src="https://picsum.photos/id/15/200/300" alt="Random 15" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 6 }}>
            <img src="https://picsum.photos/id/16/200/300" alt="Random 16" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 19, "--c": 4 }}>
            <img src="https://picsum.photos/id/17/200/300" alt="Random 17" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 13, "--c": 1 }}>
            <img src="https://picsum.photos/id/18/200/300" alt="Random 18" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 16, "--c": 5 }}>
            <img src="https://picsum.photos/id/19/200/300" alt="Random 19" />
          </div>
          <div className="elem col-span-1 row-span-1" style={{ "--r": 20, "--c": 6 }}>
            <img src="https://picsum.photos/id/20/200/300" alt="Random 20" />
          </div>
        </div>
        <div className="fixed top-0 left-0 w-screen h-full flex flex-col overflow-hidden items-center justify-center">
          <h1 className="text-8xl font-custom text-white ">
            Explore
          </h1>
          <h2 className="text-8xl font-custom text-white">
            Gallery
          </h2>
        </div>
      </div>
  )
}

export default Gallery

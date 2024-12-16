import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import Magnet from './Magnet';

const TextReveal = () => {
    useGSAP(() => {
        const content = document.querySelector('.text h1');
      
        // Split the content into separate letters
        content.innerHTML = content.textContent.replace(/\S/g, "<span>$&</span>");
        
        // Select all span elements created
        const letters = content.querySelectorAll('span');
      
        // Animate each letter with ScrollTrigger
        gsap.to(letters, {
          color: 'white',
          scrollTrigger: {
            trigger:'.page-2',
            pin: true,
            start: 'top top',
            end: '200% bottom',
            scrub: 2, // Lower scrub value for a smoother animation
          },
          stagger: 2, // Stagger timing for animating each letter
        });
      });
  return (
    <div id='about' className="z-30 w-full h-screen bg-black relative flex flex-col md:flex gap-5 justify-center items-center text page-2">
        <h1 className="text-xl md:text-3xl md:p-32 p-5 font-another w-3/4 text-slate-400 ">
        We are a passionate team of designers and developers, committed to bringing futuristic digital experiences to life. With a focus on user-centric solutions, we harness the power of technology to create visually stunning and highly functional products.
        </h1>
    <Magnet>
        <div className="w-40 h-40 bg-[#8287dd] rounded-full flex justify-center items-center">
          <Magnet>

            <h1 className="text-white font-another h-[85%] w-[85%] rounded-full flex justify-center items-center">
              DarkVerse.
            </h1>
          </Magnet>
        </div>
    </Magnet>
      </div>
  )
}

export default TextReveal

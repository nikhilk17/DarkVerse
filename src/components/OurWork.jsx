import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const OurWork = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.page-4',
            start: 'top top',
            end: '300% bottom',
            scrub: 3,               // Smooth scrubbing for a smoother experience
            pin: '.page-4',         // Pin the entire section         // Optional: for debugging purposes
          }
        });
        // Animate all elements at the same time, but extend the duration for the image movement
        tl.to('.page4-img', {
          scaleY: 1,
          duration:10,
          ease: 'power1.inOut'
        }, "0"); // Start time "0"
      
        tl.to('.page-4-text-1', {
          x: () => (window.innerWidth < 768 ? -window.innerWidth * 0.15 : -window.innerWidth * 0.22), // Move left by 20% of the viewport width
          y: () => (window.innerWidth < 768 ? -window.innerWidth * 0.3 : -window.innerWidth * 0.19), // Move up by 20% of the viewport height
          duration: 10,
          ease: 'power1.inOut'
        }, "0"); // Start time "0"
      
        // Animate the second text element diagonally down-right responsively
        tl.to('.page-4-text-2', {
          x: () => (window.innerWidth < 768 ? window.innerWidth * 0.15 : window.innerWidth * 0.22), // Move left by 20% of the viewport width
          y: () => (window.innerWidth < 768 ? window.innerWidth * 0.3 : window.innerWidth * 0.19), // Move down by 20% of the viewport height
          duration: 10,
          ease: 'power1.inOut'
        }, "0");
      
        // Move the child image upwards with a longer animation time
        tl.to('.page4-img img', {
          y: '-700%',
          scrub:7,
          duration: 20,          // Increase the duration to extend the animation time
          ease: 'power2.inOut'
        }); // Start time "0"
      });
  return (
    <div id='our%20work' className="z-30 relative w-full h-screen flex justify-center bg-black items-center page-4">
    <div className="absolute flex justify-center items-center z-10">
      <h1 className="text-white md:text-8xl text-4xl page-4-text-1">OUR &nbsp;</h1>
      <h1 className="text-white md:text-8xl text-4xl page-4-text-2">WORK</h1>
    </div>
    <div className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw] overflow-hidden scale-y-0 page4-img">
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9fa4742b8e1f3b6f6_LAYOUT-7-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044045bead03dffd01d_Frame%20427320116-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044ba579d6ccec1e3ac_HF%203-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044e5242bb154e2c347_HF%204-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64be4044d7f493a4a7fe9f97_WSS%203-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8106fa4f36fc39bb9_LAYOUT-17-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd8fa4742b8e1f3b6b8_LAYOUT-8-p-2000.jpg" alt="" />
    <img className="md:h-[60vh] md:w-[60vw] h-[30vh] w-[50vw]" src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64ba4bd9e3fe0c7e42cfe703_LAYOUT-13-p-2000.jpg" alt="" />
    </div>
  </div>
  )
}

export default OurWork

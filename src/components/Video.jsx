import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Video = () => {
  useGSAP(() => {
    gsap.to('.video', {
      scrollTrigger: {
        trigger: '.video-con',
        start: "top top",           // Start when the top of `.video-con` reaches the top of the viewport
        end: "200% top",            // Extend the end point to 200% of the viewport height
        scrub: 1,                   // Smoother and slower scrubbing for the animation
        pin: true,                  // Pin the video element during the scroll
      },
      scale: 1,                     // Animate scale from 0.5 to 1
      ease: 'power1.inOut'            // Optional: easing for a smoother transition
    });
  });
  return (
    <div id='showreel' className="z-30 relative w-full h-screen bg-black flex video-con">
    <video autoPlay loop muted className="video h-screen w-full absolute object-cover scale-[0.4]" src="https://prismic-io.s3.amazonaws.com/rejouice/87835eca-32b7-4eeb-91fc-4ba0dad1fdec_Website-homepage-Work-01_1.mp4"></video>
  </div>
  )
}

export default Video

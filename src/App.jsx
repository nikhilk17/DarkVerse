import React, { useEffect } from "react"
import Lenis from 'lenis'
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import Magnet from "./components/Magnet";
import RotatingHeader from "./components/RotatingHeader";
import Gallery from "./components/Gallery";
import TextReveal from "./components/TextReveal";
import Video from "./components/Video";
import OurWork from "./components/OurWork";
import Blog from "./components/Blog";
import Exp from "./components/Exp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Animate from "./components/Animate";
import Zoom from "./components/Zoom";
import LoadingAnimation from "./components/LoadingAnimation";
import Cursor from "./components/Cursor";

export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {

    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])
  //intro animation
  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.to('.text1', {
  //     opacity: 1,
  //     duration: 0.01
  //   })
  //   tl.to('.text1', {
  //     duration: 1,
  //   })
  //   tl.to('.text1', {
  //     opacity: 0,
  //     duration: 0.01,
  //   })


  //   tl.to('.text2', {
  //     opacity: 1,
  //     duration: 0.01
  //   })
  //   tl.to('.text2', {
  //     duration: 1,
  //   })
  //   tl.to('.text2', {
  //     opacity: 0,
  //     duration: 0.01,
  //   })


  //   tl.to('.text3', {
  //     opacity: 1,
  //     duration: 0.01
  //   })
  //   tl.to('.text3', {
  //     duration: 1,
  //   })
  //   tl.to('.text3', {
  //     opacity: 0,
  //     duration: 0.01,
  //   })


  //   tl.to('.intro', {
  //     y: -1000,
  //     duration: 2,
  //     ease: 'circ.inOut',
  //   })
  // })
  return (
    <div>
      {/* intro animation */}
      {/* <div className="fixed left-0 top-0 h-screen w-full bg-slate-200 z-50 intro">
        <div className="text-black flex justify-center items-center h-screen">
          <h1 className="text-4xl translate-x-48 opacity-0 text1">CREATE &nbsp;</h1>
          <h1 className="text-4xl opacity-0 text2 translate-x-10">INNOVATE &nbsp;</h1>
          <h1 className="text-4xl -translate-x-36 opacity-0 text3">CELEBRATE &nbsp;</h1>
        </div>
      </div> */}


      
      <LoadingAnimation />
      <Cursor />
      <Exp />
      <Home/>
      <TextReveal />
      <Zoom />
      <Video />
      <OurWork />
      <Blog />
      <Gallery />
    {/* <Animate/> */}
      <Footer />
    </div>
  )
}
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Nav from './Nav';
import Magnet from './Magnet';
import { useGSAP } from '@gsap/react';
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef(null);
  // useGSAP(()=>{
  //   gsap.from('.hel', {
  //     opacity: 0,
  //     duration: 2,
  //     delay:0,
  //     ease: 'power3.out',
  //     y: 100,
  //     stagger: 0.3,
  //   })
  // })
  useEffect(() => {
    const tl = gsap.timeline();
    if (showMenu) {
      // Entry Animation
      tl.to(navRef.current, {
        duration: 0.1,
        opacity: 1,
      })
        .to(navRef.current, {
          duration: 1,
          x: 0,
          ease: 'power3.out',
        });
    } else {
      // Exit Animation
      tl.to(navRef.current, {
        x: '100%',
        duration: 0.5,
      }).to(navRef.current, {
        opacity: 0,
        duration: 0.01,
      });
    }
  }, [showMenu]);
  useGSAP(()=>{
    gsap.to('.menu',{
      opacity:1,
     scrollTrigger:{
        trigger:'.menu',
        start:'top top',
        scrub:1,
     }
    })
    gsap.from('.ushh',{
      opacity:0,
        scrollTrigger:{
        trigger:'.yeah',
        start:'75% bottom',
        end:'72% 80%',
        scrub:true,
        // markers:true,
     }
    })
    gsap.to('.animate-text',{
      top:35,
      left:70,
      scrollTrigger:{
        trigger:'.yeah',
        start:'top top',
        scrub:true,
        duration:3,
      }
    })
  })
  return (

    
    <div id='home' className="z-40 relative h-screen w-screen text-white yeah">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      >
        <source
          src="https://framerusercontent.com/assets/8hEugT3woLZdPu67ZTE2AhSF6PQ.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex justify-between py-6 px-5 md:px-8 m-auto items-center">
        {/* Logo */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-[100%] h-[100&]" viewBox="0 0 139 31" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-554019638_2385"></use></svg>
        </div>

        {/* Menu Button */}
        <Magnet>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="fixed top-4 z-50 right-6 h-10 w-11 menu opacity-0 rounded-md"
          >
            <Magnet>
              <div className="h-full z-50 w-full flex justify-center items-center">
                <div className={`burger ${showMenu ? 'isActive' : ''}`}></div>
              </div>
            </Magnet>
          </div>
        </Magnet>

        {/* Pass the ref to Nav */}
        <Nav ref={navRef} />
      </div>

      {/* Main Content */}
      <div className="absolute flex flex-col items-center  h-[100vh] w-full top-10">
        <div className='flex flex-col justify-center gap-5 md:gap-7 items-center p-5'>
        <p className="hel text-sm font-another text-[#BABDF9] md:text-xl">
        Designed for dreamers, crafted for creators.
        </p>
        <div className='hel flex flex-col md:flex-row justify-center items-center'>
        <h1 className=" text-3xl md:text-[8vh] lg:text-[5vh] font-custom font-bold justify-center">Your Digital Universe, Designed to &nbsp;</h1>
        <h1 className="text-4xl md:text-[8vh] font-custom lg:text-[4vh] font-bold justify-center">Shine in the Dark.</h1>
        </div>
        </div>

        <div className='animate-text fixed z-10 top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
         <h1 className='ushh text-white font-custom text-4xl'>DarkVerse.</h1>
      </div>
      </div>
    </div>
  );
};

export default Home;
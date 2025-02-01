import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Animate = () => {
  useGSAP(() => {
    // Select all the <h1> elements within .ore
    const headings = document.querySelectorAll('.ore h1');
    
    // Apply animation to each <h1> using forEach
    headings.forEach((heading) => {
      gsap.to(heading, {
        scrollTrigger: {
          trigger: heading, // Trigger individual animation per heading
          start: 'top 70%',
          end: 'top 90%',
          scrub: 1,
          duration: 2,
          ease: 'power1.inOut',
        },
        y: 0,
        opacity: 1, // Optional: animate opacity for a fade-in effect
        duration: 1,
      });
    });
  });

  return (
    <div className="ore relative h-screen bg-black w-full border-2 flex justify-center items-center flex-col">
  {Array(3).fill().map((_, index) => (
    <div key={index} className="overflow-hidden">
      <h1 className="text-white text-4xl font-another translate-y-24">
        Hello how are fine working with you
      </h1>
    </div>
  ))}
</div>
  );
};

export default Animate;

// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// const Animate = () => {
//   useGSAP(() => {
//     const tl = gsap.timeline();
//     gsap.to(".left span", {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       stagger: {
//         amount: 0.7,
//         from: 'start',
//         ease: 'power1.inOut',
//       },
//     });
//     gsap.to(".right span", {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       stagger: {
//         amount: 0.7,
//         from: 'end',
//         ease: 'power1.inOut',
//       },
//     });
//   }, []);

//   return (
//     <div className="relative z-30 w-screen h-screen bg-black border-2">
//       <div className="h-full flex w-full justify-center items-center">
//         <h1 className="left text-white text-2xl font-another inline-flex m-0 leading-none">
//           {["H", "E", "L", "L", "O"].map((char, index) => (
//             <span key={index} className="block translate-y-96 opacity-0">
//               {char}
//             </span>
//           ))}
//         </h1>
//         <h1 className="right text-white text-2xl font-another inline-flex m-0 leading-none">
//           {["W", "O", "R", "L", "D"].map((char, index) => (
//             <span key={index} className="block translate-y-96 opacity-0">
//               {char}
//             </span>
//           ))}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Animate;
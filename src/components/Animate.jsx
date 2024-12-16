import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Animate = () => {
  const headerRef = useRef(null);

  // Function to split text into individual characters
  const splitText = (element) => {
    const text = element.textContent;
    const chars = text
      .split("")
      .map((char, i) => `<span key=${i} class='inline-block'>${char}</span>`)
      .join("");
    element.innerHTML = chars;
    return element.querySelectorAll("span");
  };

  useEffect(() => {
    const header = headerRef.current;

    // Split text into individual spans
    const chars = splitText(header);

    // Set up initial animation properties
    gsap.set(chars, {
      opacity: 0,
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      perspective: 600,
      
    });

    // Animate characters with a spinning effect
    gsap.to(chars, {
      opacity: 1,
      rotationX: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="rotatingHeader">
        <h1
          ref={headerRef}
          className="text-5xl font-bold text-gray-200 tracking-wide"
        >
          SPINNING TEXT
        </h1>
      </div>
    </div>
  );
};

export default Animate;
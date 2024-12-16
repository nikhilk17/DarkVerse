import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const splitText = (element) => {
  const text = element.textContent;
  element.innerHTML = text
    .split("")
    .map((char) => `<span class="char">${char}</span>`)
    .join("");
  return Array.from(element.querySelectorAll(".char"));
};

const RotatingHeader = ({ text }) => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const original = header.querySelector(".original-text");
    const clone = original.cloneNode(true);
    clone.classList.add("clone-text");
    header.appendChild(clone);

    // Split text manually using vanilla JS
    const originalChars = splitText(original);
    const cloneChars = splitText(clone);

    // Initial position of the clone characters
    gsap.set(clone, { yPercent: -100 });
    gsap.set(cloneChars, {
      rotationX: -90,
      opacity: 0,
      transformOrigin: "50% 50% -50",
    });

    // Animation timeline
    const duration = 0.4;
    const stagger = { each: 0.02, ease: "power2", from: "start" };
    const tl = gsap.timeline({ paused: true });

    tl.to(originalChars, {
      duration,
      rotationX: 90,
      transformOrigin: "50% 50% -50",
      stagger,
    })
      .to(originalChars, { duration, opacity: 0, stagger, ease: "power4.in" }, 0)
      .to(cloneChars, { duration: 0.05, opacity: 1, stagger }, 0.001)
      .to(cloneChars, { duration, rotationX: 0, stagger }, 0);

    timelineRef.current = tl;

    // Cleanup function
    return () => {
      header.innerHTML = `<h1 class="original-text">${text}</h1>`;
    };
  }, [text]);

  const handleMouseEnter = () => {
    timelineRef.current?.restart();
  };

  const handleMouseLeave = () => {
    timelineRef.current?.reverse();
  };

  return (
    <div
      className="rotatingHeader"
      ref={headerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <h1 className="original-text text-white text-3xl">{text}</h1>
    </div>
  );
};

export default RotatingHeader;
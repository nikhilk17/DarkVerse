import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Zoom = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Animations for larger screens
            gsap.to('.overlay', {
                rotate: 90,
                scale: 7,
                clipPath: "polygon(40% 25%, 60% 25%, 60% 75%, 40% 75%)",
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    pin: true,
                    scrub: 1,
                },
            });

            gsap.to('.overlay img', {
                rotate: -85,
                scale: 0.3,
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    scrub: 1,
                },
            });

            gsap.to('.left', {
                x: '-190%',
                scale: 2.5,
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    scrub: 1,
                },
            });

            gsap.to('.right', {
                x: '180%',
                scale: 2.5,
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    scrub: 1,
                },
            });
        });

        mm.add("(max-width: 767px)", () => {
            // Animations for smaller screens
            gsap.to('.overlay', {
                rotate: 85,
                scale: 4,
                clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)',
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    pin: true,
                    scrub: 1,
                },
            });

            gsap.to('.overlay img', {
                rotate: -85,
                scale: 0.5,
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    scrub: 1,
                },
            });

            gsap.to('.left', {
                x: '-180%',
                scale: 2.5,
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    scrub: 1,
                },
            });

            gsap.to('.right', {
                x: '180%',
                scale: 2.5,
                scrollTrigger: {
                    trigger: '.zoom-page',
                    start: 'top top',
                    end: '300% bottom',
                    scrub: 1,
                },
            });
        });

        return () => mm.revert(); // Clean up matchMedia listeners
    });

    return (
        <div className="relative w-full h-screen bg-white border-2 overflow-hidden zoom-page z-30">
            {/* Image with Clipping */}
            <div className="absolute flex justify-center items-center h-full w-full z-40">
                <h1 className="left text-[18vw] font-light">ARTW</h1>
                <h1 className="right text-[18vw] font-light">ORKS</h1>
            </div>
            <div
                className="overlay absolute inset-0 h-full w-full rotate-[15deg]"
                style={{
                    clipPath: "polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)"
                }}
            >
                {/* Full-Sized Image */}
                <img
                    className="h-full w-full object-center"
                    src="https://artworks.joe8lee.com/images/img1-1.png"
                    alt="Custom Clipped Image"
                />
            </div>

            {/* Optional Content Over the Clipped Image */}
        </div>
    );
};

export default Zoom;
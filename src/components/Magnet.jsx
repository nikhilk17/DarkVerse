import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'
import gsap from 'gsap'
const Magnet = ({children}) => {
const magnetic = React.useRef(null)

    useGSAP(()=>{
        let xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
        let yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});


        magnetic.current.addEventListener('mousemove',(e)=>{
            const {clientX,clientY}=e
            const {width,height,left,top}= magnetic.current.getBoundingClientRect()
            const x=clientX-(left+width/2)
            const y=clientY-(top+height/2)

            xTo(x*0.5)
            yTo(y*0.5)
        })
        magnetic.current.addEventListener('mouseleave',(e)=>{
            xTo(0)
            yTo(0)
        })
    },[])
  return (
    React.cloneElement(children, {ref: magnetic})
  )
// const magnetic = React.useRef(null);

//     useEffect( () => {
//         console.log(children)
//         const xTo = gsap.quickTo(magnetic.current, "x", {duration: 2, ease: "elastic.out(1, 0.3)"})
//         const yTo = gsap.quickTo(magnetic.current, "y", {duration: 2, ease: "elastic.out(1, 0.3)"})

//         magnetic.current.addEventListener("mousemove", (e) => {
//             const { clientX, clientY } = e;
//             const {height, width, left, top} = magnetic.current.getBoundingClientRect();
//             const x = clientX - (left + width/2)
//             const y = clientY - (top + height/2)
//             xTo(x * 0.35);
//             yTo(y * 0.35)
//         })
//         magnetic.current.addEventListener("mouseleave", (e) => {
//             xTo(0);
//             yTo(0)
//         })
//     }, [])

//     return (
//         React.cloneElement(children, {ref:magnetic})
//     )
}

export default Magnet

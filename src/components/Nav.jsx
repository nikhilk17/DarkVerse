import React, { forwardRef } from 'react';

const Nav = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="fixed bg-white z-40 h-screen md:w-[30vw] w-[75vw] right-0 top-0 opacity-0 transform translate-x-full"
    >
      <div className="text-black md:px-20 px-10 py-40 lg:py-52">
      <ul className="flex flex-col gap-10 text-4xl font-serif">
  {['Home', 'About', 'ShowReel', 'Our Work', 'Contact'].map((item, index) => (
    <li
      className="hover:translate-x-3 duration-700 hover:border-gray-500 border-b-2 border-transparent"
      key={index}
    >
      <a href={`#${item.toLowerCase()}`} className="block">{item}</a>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
});

export default Nav;

// import React, { forwardRef } from 'react';

// const Nav = forwardRef((_, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="fixed bg-white z-20 h-10 md:w-[3vw] opacity-0 w-[75vw] right-6 top-4"
//     >
//       <div className="text-black md:px-20 px-10 py-40 lg:py-52">
//         <ul className="flex flex-col gap-10 text-4xl font-serif">
//           {['Home', 'About', 'ShowReel', 'Our Work', 'Exp', 'Contact'].map((item, index) => (
//             <li
//               className="hover:translate-x-3 duration-700 hover:border-gray-500 border-b-2 border-transparent"
//               key={index}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// });

// export default Nav;
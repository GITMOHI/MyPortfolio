// import React, { useEffect, useState } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import Left from './Left/Left';
// import Right from './Right/Right';

// const Main = () => {

//     const [color, setColor] = useState(''); // State to hold the color
//     const location = useLocation(); // React Router's useLocation hook

//     useEffect(() => {
     
//         console.log('location: -->>', location);
//         const path_name = location.pathname;
//         if(path_name == '/aboutme' || path_name == '/'){
//             setColor('#5BC3D5');
//         }
//         else if(path_name == '/portfolio'){
//             setColor('#EEA73B');
//         }
        
//     }, [location]); // Re-run effect when location changes

//     return (
//         <div className="flex flex-col  lg:flex-row gap-2">
            
//              <div style={{backgroundColor:color}} className=' block lg:hidden'>
//                <div className="navbar">
//                     <div className="flex-none">
//                         <button className="btn btn-square btn-ghost text-white ">
//                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//                         </button>
//                     </div>
//                     <div className="flex-1">
//                         <a className="btn btn-ghost text-2xl text-white font-bold">Mohi</a>
//                     </div>
                  
//                     </div>
//              </div>

//             <Left></Left>
//             <Outlet></Outlet>
//         </div>
//     );
// };

// export default Main;




import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Left from "./Left/Left";
// import Right from "./Right/Right";
import Nav from "../LayOut/Left/Nav";

const Main = () => {
  const [color, setColor] = useState(""); // State to hold the color
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to toggle drawer
  const location = useLocation();

  useEffect(() => {
    const path_name = location.pathname;
    if (path_name === "/aboutme" || path_name === "/") {
      setColor("#5BC3D5");
    } else if (path_name === "/portfolio") {
      setColor("#EEA73B");
    }
  }, [location]); // Re-run effect when location changes

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {/* Mobile Navbar with Drawer */}
      <div style={{ backgroundColor: color }} className="block lg:hidden">
        <div className="navbar px-4 py-2 flex justify-between items-center">
          <button
            className="btn btn-square btn-ghost text-white"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <a className="text-2xl text-white font-bold">Mohi</a>
        </div>
      </div>

      {/* Drawer Component */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsDrawerOpen(false)}>
          <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg p-5" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn btn-square btn-ghost text-black mb-4"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✕
            </button>
            <Nav />
          </div>
        </div>
      )}

      <Left />
      <Outlet />
    </div>
  );
};

export default Main;

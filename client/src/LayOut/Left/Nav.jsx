// import React from "react";
// import { NavLink } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
// import { FaLaptopCode } from "react-icons/fa";
// import { FaRegPaperPlane } from "react-icons/fa";
// import { BsCircleHalf } from "react-icons/bs";



// const Nav = () => {
//   return (
//     <div className="mt-4 ">
//       <div className=" flex flex-col items-center ">
//         <div className="flex flex-col space-y-4">
//           <div className="flex flex-row gap-2 items-center font-bold hover:text-gray-700">
//             <CgProfile className="font-bold"></CgProfile>
//             <NavLink to="/aboutme">About Me</NavLink>
//           </div>
//           <div className="flex flex-row gap-2 items-center font-bold hover:text-gray-700">
//             <FaLaptopCode></FaLaptopCode>
//             <NavLink to="/portfolio">Projects</NavLink>
//           </div>
//           <div className="flex flex-row gap-2 items-center font-bold hover:text-gray-700">
//             <FaLaptopCode></FaLaptopCode>
//             <NavLink to="/resume">Resume</NavLink>
//           </div>

//           <div className="flex flex-row gap-2 items-center font-bold hover:text-gray-700">
//             <FaLaptopCode></FaLaptopCode>
//             <NavLink to="/contact">Contact</NavLink>
//           </div>
//           <div className="flex flex-row gap-2 items-center font-bold hover:text-gray-700">
//             <FaLaptopCode></FaLaptopCode>
//             <NavLink to="/blog">Blog</NavLink>
//           </div>
//           <div className="">
//             <NavLink to="/hireme">
//               <button className=" mt-8 px-8 btn hover:bg-gray-700 text-base bg-[#377681] border-none text-white font-bold">
//                 {" "}
//                 <FaRegPaperPlane></FaRegPaperPlane> Hire Me
//               </button>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;







import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode, FaRegPaperPlane } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="mt-4 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row gap-2 items-center font-bold">
            <CgProfile />
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? "text-gray-700 underline" : "hover:text-gray-700"
              }
            >
              About Me
            </NavLink>
          </div>
          <div className="flex flex-row gap-2 items-center font-bold">
            <FaLaptopCode />
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-gray-700 underline" : "hover:text-gray-700"
              }
            >
              Projects
            </NavLink>
          </div>
          <div className="flex flex-row gap-2 items-center font-bold">
            <FaLaptopCode />
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-gray-700 underline" : "hover:text-gray-700"
              }
            >
              Resume
            </NavLink>
          </div>
          <div className="flex flex-row gap-2 items-center font-bold">
            <FaLaptopCode />
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-gray-700 underline" : "hover:text-gray-700"
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex flex-row gap-2 items-center font-bold">
            <FaLaptopCode />
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-gray-700 underline" : "hover:text-gray-700"
              }
            >
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink to="/hireme">
              <button className="mt-8 px-8 btn hover:bg-gray-700 text-base bg-[#377681] border-none text-white font-bold">
                <FaRegPaperPlane /> Hire Me
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;


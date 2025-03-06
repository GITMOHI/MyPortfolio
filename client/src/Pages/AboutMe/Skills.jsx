import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';




const Skills = () => {
   
    const mySkills = [
        {
          name: "JavaScript",
          description: "High-level programming language for creating dynamic and interactive content on web pages.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
        },
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        },
        {
          name: "tailwindcss",
          description: "A utility-first CSS framework for rapidly building custom user interfaces",
          image: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741100475/rpkjtgubawebckup2lsh.png"
        },
        {
          name: "Node.js",
          description: "JavaScript runtime environment for building server-side and networking applications.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"
        },
        {
          name: "Express.js",
          description: "Backend framework for Node.js.",
          image: "https://iotbyhvm.ooo/wp-content/uploads/2019/01/expressjs-800x445.png"
        },
        {
          name: "MongoDB",
          description: "NoSQL database program.",
          image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
        },
        {
          name: "MySQL",
          description: "Open-source relational database management system.",
          image: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741088359/bvjzbye3ct9jd63zp8u9.png"
        },
        {
          name: "POSTMAN",
          description: "Single platform for collaborative API development.",
          image: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741088262/huxbut8xbq4jesm7znc7.png"
        },
        {
          name: "Version Control (Git)",
          description: "Distributed version control system for tracking changes in source code.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"
        },
        {
          name: "Docker",
          description: "Build, test, and deploy applications quickly using containers",
          image: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741164579/umfibhzbjyxnlfzzrqg4.jpg"
        }
      ];
      
    //   console.log(mySkills);
      

    // console.log(mySkills[0]);


    return (
        <div className='mt-8 ml-8 lg:ml-16'>
            <div className='space-y-3'>
                <div className=' border-l-4 pl-4 border-[#5BC3D5] text-3xl py-1 font-bold '>
                    What I do
                </div>
                <div className='w-5/6'>
                I am an undergraduate student with a strong passion for web development, specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. I have experience building dynamic and responsive web applications, handling both front-end and back-end development.
                </div>
            </div>


            <div className='grid grid-cols-2  lg:grid-cols-4 gap-10 mt-14 pr-4 lg:pr-16'>
               {
                  mySkills.map(s=><Skill key = {s.name} s={s}></Skill>)
               }
            </div>

            <div className='flex flex-row justify-center mt-16 mb-16 lg:-ml-16'>
               <NavLink to="/portfolio"><button className="btn  bg-[#5BC3D5] hover:bg-[#398d9c]"><div className='mr-1 md:mr-2 rounded-full bg-white p-1'><FaArrowRight className=' bg-white font-bold  text-sm md:text-xl text-[#5BC3D5]'></FaArrowRight></div> <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'><p className='hidden lg:block mr-2'>Projects </p></p></button></NavLink> 
            </div>

        </div>
    );
};

export default Skills;
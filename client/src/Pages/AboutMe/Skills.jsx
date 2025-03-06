import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';




const Skills = () => {
   
    const [mySkills,setmySkills] = useState([]);
    useEffect(()=>{
        fetch('../../../public/skills.json')
        .then(res=>res.json())
        .then(data=>{
           setmySkills(data);
        })
    },[]);

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
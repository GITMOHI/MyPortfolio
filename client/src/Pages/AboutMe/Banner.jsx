import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>


            <div className='bg-[#FAFAFA]'>
                <div className='flex flex-col lg:flex-row  items-start lg:items-center justify-evenly  '>
                    <div className='w-full lg:w-3/5 flex flex-col items-start px-8 lg:pr-12 lg:-ml-4 lg:pt-10  pb-12 lg:pb-24'>
                         <div className=''>
                           <h1 className='font-black text-4xl mb-2'>Mohi</h1>
                           <p className='text-2xl font-thin mb-4'>Fullstack Developer</p>
                           <p>I am an undergraduate student in the Department of CSE,CUET.I am
                             skilled in full-stack development. I work on building scalable web applications with expertise in both frontend and backend technologies.</p>
                           
                         </div>

                         <div className='flex  lg:flex-row gap-4 mt-8'>
                            <Link to="/portfolio"><button className="btn   md:btn-wide  bg-[#5BC3D5] hover:bg-[#398d9c]"><div className='mr-1 md:mr-2 rounded-full bg-white p-1'><FaArrowRight className=' bg-white font-bold  text-sm md:text-xl text-[#5BC3D5]'></FaArrowRight></div> <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'><p className='hidden lg:block mr-1'>View</p> Projects</p></button></Link>
                            <Link to="/resume"> <button className="btn   md:btn-wide bg-[#3C3C3C] hover:bg-[#222121]"> <div className=' mr-1 md:mr-2 rounded-full bg-white p-1'><IoDocumentTextOutline className='bg-white font-bold text-sm md:text-xl'></IoDocumentTextOutline></div><p className='font-bold text-white text-sm md:text-base flex flex-row items-center '><p className='hidden lg:block mr-1'>View</p> Resume</p></button></Link>
                         </div>   
                    </div>

                    <div className='px-8'>

                        <img src="https://res.cloudinary.com/dmc0prejr/image/upload/v1741256924/yfugdilailmfcup3x3xu.jpg" className=' h-96 w-60  lg:py-10' alt="" />
                        
                    </div>
                    
                </div>
            </div>



        </div>
    );
};

export default Banner;
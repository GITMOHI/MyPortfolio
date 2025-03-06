import { useEffect, useState } from 'react';
import FeatProject from './FeatProject';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaGithub } from 'react-icons/fa6';

const FeaturedProjects = () => {

    const featProj = [
        {
          id: 2,
          image_link: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741105076/ruuoli8xlcol4r4kimq3.png",
          github_link: "https://github.com/GITMOHI/EcommerceProject",
          project_heading: "shopZen",
          description: "shopZen is a Fullstack e-commerce project, provides all features of an e-commerce site and admin panel to control",
          genre: "Web App",
        },
        {
          id: 1,
          image_link: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741105077/n85g4vhcjt7wyqnuiud0.png",
          github_link: "https://github.com/GITMOHI/NewzApp",
          project_heading: "NewzApp",
          description: "NewzApp is a Fullstack news application, provides all features of a news site and admin panel to control",
          genre: "Web App",
        },
        {
          id: 3,
          image_link: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741105076/ir7i0yo50eilnzp4r3mk.png",
          github_link: "https://github.com/GITMOHI/Mbook",
          project_heading: "Mbook",
          description: "Mbook is a social media application, provides all features of a social media site and admin panel to control",
          genre: "Web App",
        },
        {
          id: 4,
          image_link: "https://res.cloudinary.com/dmc0prejr/image/upload/v1741105076/h74piaybtssup6fr5zpk.png",
          github_link: "https://github.com/GITMOHI/Textz",
          project_heading: "Textz",
          description: "Textz is a real-time chatting application, provides one-to-one encrypted chat and group chat options",
          genre: "Web App",
        },
      ];
      

    return (

<div className='mt-16 ml-8 lg:ml-16 mr-8 lg:mr-16'>
            <hr className='w-[100%] mb-16 text-center' />
            
            <div className='space-y-3 mb-8 lg:mb-14'>
                <div className='border-l-4 pl-4 border-[#5BC3D5] text-3xl py-1 font-bold'>
                    Featured Projects
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-7 grid-cols-1 space-x-5 space-y-4'>
                {featProj.map(fp => (
                    <div 
                        key={fp.image_link} 
                        className='relative group p-6 border rounded-lg transition duration-300 hover:bg-gray-100'
                    >
                        <FeatProject fp={fp} />
                        <a 
                            href={fp.github_link} 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-full transition duration-300 group-hover:bg-black z-50'
                        >
                            <FaGithub className='text-[#5BC3D5] group-hover:text-white text-3xl' />
                        </a>
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-center mt-16 mb-16'>
                <NavLink to='/resume'>
                    <button className='btn bg-[#5BC3D5] hover:bg-[#398d9c] flex items-center'>
                        <div className='mr-1 md:mr-2 rounded-full bg-white p-1'>
                            <FaArrowRight className='bg-white font-bold text-sm md:text-xl text-[#5BC3D5]' />
                        </div>
                        <p className='font-bold text-white text-sm md:text-base flex flex-row items-center'>
                            <span className='hidden lg:block mr-2'>View Resume</span> 
                        </p>
                    </button>
                </NavLink>
            </div>
        </div>
        
    );
};

export default FeaturedProjects;

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { FaFilePdf, FaGithub, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";



const Resume = () => {


  




  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center my-4">Online Resume</h1>
        <button  className="btn font-bold btn-wide bg-[#54b689] hover:bg-[#2c845b] flex flex-row gap-2 text-white text-base">
          <FaFilePdf /> Download PDF Version
        </button>
      </div>

      <div  >
        <div className="card w-[90%] h-full mx-auto mt-24 bg-white text-black shadow-2xl mb-28 ">
          <div className="m-12">
            {/* Banner */}
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-4xl font-black text-[#54b689]">M O H I</h1>
                <p className="font-thin text-base mt-1">Fullstack Developer</p>
              </div>
              <div className="border-l pl-4 space-y-1">
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <FaPhone /> 01625680207
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <MdEmail /> umohi559@gmail.com
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <FaGithub /> <a href="https://github.com/GITMOHI/" target="_blank">github</a>
                </p>
                <p className="text-xs underline font-thin flex flex-row gap-2 items-center">
                  <SiLeetcode /> <a href="https://leetcode.com/u/umohi559/" target="_blank">leetcode</a>
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between gap-0 mt-10 items-center">
              <div>
                <img
                  src="https://res.cloudinary.com/dmc0prejr/image/upload/v1741256924/owymyngusw7qlrnnisc9.jpg"
                  
                  className="w-32 h-32 rounded-full"
                  alt="Profile"
                />
              </div>
              <div className="w-[80%]">
                <p className="text-sm">
                  I am an undergraduate student pursuing a degree in Computer Science and Engineering from CUET. 
                  As a passionate full-stack developer, I specialize in building scalable and efficient web applications 
                  using modern technologies. I have experience working with MERN stack, Docker, and real-time features 
                  like Socket.io. I am always eager to learn new tools and frameworks to enhance my skills and build 
                  innovative solutions.
                </p>
              </div>
            </div>

            <section className="mt-16">
              <div className="flex flex-row gap-1 items-end">
                <p className="font-bold text-[#54b689] text-2xl">I</p>
                <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                  EDUCATION
                </p>
              </div>

              <div className="mt-3">
                <div className="flex flex-row justify-between mb-2">
                  <div>
                    <p className="font-semibold">Chittagong University of Engineering and Technology</p>
                    <p className="font-thin text-sm">Bachelor of Science in Computer Science & Engineering</p>
                  </div>
                  <div>
                    <p>2020 – 2025 | Chittagong, Bangladesh</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Armed Police Battalion Public School And College</p>
                    <p className="font-thin text-sm">Higher Secondary School Certificate in Science (GPA- 5/5)</p>
                  </div>
                  <div>
                    <p>2018 – 2020 | Chittagong, Bangladesh</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="flex flex-row gap-1 items-end">
                <p className="font-bold text-[#54b689] text-2xl">I</p>
                <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                  PROGRAMMING SKILLS
                </p>
              </div>
              <div className="mt-3 space-y-2">
                <p><span className="font-semibold">Programming Languages: </span> C++, Javascript, Python</p>
                <p><span className="font-semibold">Frontend Libraries: </span> React.js, Redux</p>
                <p><span className="font-semibold">Backend Frameworks: </span> Node.js, Express.js, Django</p>
                <p><span className="font-semibold">Databases: </span> MySQL, MongoDB</p>
              </div>
            </section>

            <section className="mt-16">
              <div className="flex flex-row gap-1 items-end">
                <p className="font-bold text-[#54b689] text-2xl">I</p>
                <p className="font-bold inline-block text-[#54b689] text-lg border-[#54b689] pl-2">
                  PROJECTS
                </p>
              </div>

              <div className="mt-3 space-y-4">
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Facebook-like Social Media App</p>
                    <p className="font-thin text-sm">
                      Built a real-time social media platform using MERN stack with features like authentication, 
                      notifications, friend requests, and post interactions.
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://github.com/GITMOHI/Mbook" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#54b689] underline font-semibold"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">E-commerce Website</p>
                    <p className="font-thin text-sm">
                      Developed a full-stack e-commerce website with a user-friendly UI, 
                      secure payment integration, and order management system.
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://github.com/GITMOHI/EcommerceProject" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#54b689] underline font-semibold"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-semibold">Real-time Chat Application</p>
                    <p className="font-thin text-sm">
                      Implemented a chat application with WebSocket (Socket.io) to enable 
                      real-time messaging between users.
                    </p>
                  </div>
                  <div>
                    <a 
                      href="https://github.com/GITMOHI/Textz" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#54b689] underline font-semibold"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import ButtonFilters from "./ButtonFilters";
import EachProjects from "./EachProjects";
import { AnimatePresence, motion } from "framer-motion";

import { FaEye } from "react-icons/fa6";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("../../../public/Allprojects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data), setFiltered(data);
      });
  }, []);

  const handleFilter = (item) => {
    let temp = projects.filter((p) => p.genre == item);
    if (item == "All") {
      setFiltered(projects);
      return;
    }
    setFiltered(temp);
  };

  const handlehover = (heading) => {
    const element = document.getElementById(heading);
    // console.log(element);
    const list = element.classList;
    list.remove("hidden");
    list.add("absolute");

    const idd = heading + "layer";
    const e1 = document.getElementById(idd);
    const l1 = e1.classList;
    l1.add("bg-[#0f0e0e]");
    l1.add("ease-in-out");
    l1.add("duration-700");
    l1.add("opacity-30");
    console.log(e1);
  };

  const handlehoverleave = (heading) => {
    const element = document.getElementById(heading);
    // console.log(element);
    const list = element.classList;
    list.remove("absolute");
    list.add("hidden");

    const idd = heading + "layer";
    const e1 = document.getElementById(idd);
    const l1 = e1.classList;
    l1.remove("bg-[#0f0e0e]");
    l1.remove("opacity-30");
    console.log(e1);
  };

  return (
    <div className=" border-red-500 flex flex-col items-center mb-52">
      <div className=" bg-[#FAFAFA]  w-full flex flex-col items-center py-12">
        <div className=" bg-[#FAFAFA]  max-w-[70%] text-center space-y-3">
          <h2 className="font-bold text-3xl">Portfolio</h2>
          <p>
          Welcome to my online portfolio! I specialize in full-stack development, and I'm currently open to freelance work. Whether you're looking to build a dynamic web app 
          or need help with backend services, I'm here to help. Let's bring your software ideas to life
          </p>

          <div className="flex flex-row justify-center mt-16 mb-16">
            <NavLink to="/hireme">
              <button className="btn  bg-[#EB9718] hover:bg-[#ff9c4c]">
                <div className="">
                  <FaPaperPlane className="  font-bold  text-sm md:text-xl text-white"></FaPaperPlane>
                </div>{" "}
                <p className="font-bold text-white text-sm md:text-base flex flex-row items-center">
                  <p className="hidden lg:block "></p> Hire Me
                </p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center">
        <div className="my-12 flex-wrap flex mx-4">
          ``
          <ButtonFilters handleFilter={handleFilter}></ButtonFilters>
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[90%]"
            layout
          >
            {filtered.map((item) => {
              const { id, image_link, project_heading, description } = item;
              return (
                <AnimatePresence>
                  <motion.div
                    key={id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      onMouseEnter={() => {
                        handlehover(project_heading);
                      }}
                      onMouseLeave={() => {
                        handlehoverleave(project_heading);
                      }}
                      className=" hover:scale-105 duration-700 h-50 overflow-hidden relative flex flex-col  lg:flex-row items-start gap-4 bg-[#FAFAFA] border rounded-xl "
                    >
                      <div
                        id={project_heading + "layer"}
                        className="layer z-10 flex flex-col items-center justify-center   absolute w-full h-full transition ease-in-out cursor-pointer duration-200"
                      ></div>

                      <div
                        id={project_heading}
                        className=" z-50 w-[30%] hidden top-[30%] left-[40%] "
                      >
                        <p>
                          <a
                            href={item.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full transition duration-300 hover:bg-black inline-block"
                          >
                            <FaGithub className="text-[#5BC3D5] hover:text-white text-3xl" />
                          </a>
                        </p>
                      </div>

                      <img src={image_link} className="w-56 h-44" alt="" />
                      <div className="space-y-2 p-4">
                        <h2 className="font-bold text-xl">{project_heading}</h2>
                        <p>{description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

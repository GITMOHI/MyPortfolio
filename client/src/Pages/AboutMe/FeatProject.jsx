import React from "react";

const FeatProject = ({ fp }) => {
  const { image_link, project_heading, description } = fp;
  return (
    <div className="overflow-hidden hover:scale-105 duration-700 relative  flex flex-col lg:flex-row items-start gap-4 bg-[#FAFAFA] border rounded-xl">
      <div className="relative w-1/2  h-48 overflow-hidden">
        <img
          src={image_link}
          className="w-full h-full object-contain"
          alt={project_heading}
        />
        {/* <div className="absolute inset-0 hover:bg-[#3b3a3a] hover:opacity-10 transition-all duration-300"></div> */}
      </div>
      <div className="space-y-2 w-1/2 p-4 flex-grow">
        <h2 className="font-bold text-xl">{project_heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatProject;

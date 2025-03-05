import React from "react";
import { TfiFacebook, TfiLinkedin } from "react-icons/tfi";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Profile = ({ color }) => {
  return (
    <div className=" pb-8">
      <div className="flex flex-col items-center space-y-5 pt-4 px-3">
        <h3 className="text-2xl font-bold">Mohi</h3>
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src="../../../public/images/bw.jpg" />
          </div>
        </div>
        <p className="text-center">
          Hi, my name is Md.Mohiuddin and I'm a fullstack developer. Welcome to my
          personal website!
        </p>

        <div className="flex flex-row gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/mohi-uddin-b0a4b8329/"
            target="_blank"
          >
            {" "}
            <div className="p-2 bg-white rounded-full cursor-pointer">
              <TfiLinkedin
                style={{ color: color }}
                className=" rounded "
              ></TfiLinkedin>
            </div>
          </a>

          <a href="https://x.com/MohiUddin125162" target="_blank">
            <div className="p-2 bg-white rounded-full">
              <IoLogoTwitter
                style={{ color: color }}
                className=" rounded"
              ></IoLogoTwitter>
            </div>
          </a>

          <a href="https://github.com/GITMOHI" target="_blank">
            <div className="p-2 bg-white rounded-full">
              <IoLogoGithub
                style={{ color: color }}
                className=" rounded"
              ></IoLogoGithub>
            </div>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100022904972921" target="_blank">
            <div className="p-2 bg-white rounded-full">
              <TfiFacebook
                style={{ color: color }}
                className=" rounded "
              ></TfiFacebook>
            </div>
          </a>

          {/* <div className="p-2 bg-white rounded-full">
            <TfiLinkedin
              style={{ color: color }}
              className=" rounded "
            ></TfiLinkedin>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

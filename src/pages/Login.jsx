import React from "react";
import { gitHubLogo, googleLogo } from "../assets";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center     gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src={googleLogo} alt="GoogleLogo" />
          <span>Sign in with Google</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center     gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src={gitHubLogo} alt="GitHubLogo" />
          <span>Sign in with Git Hub</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Login;

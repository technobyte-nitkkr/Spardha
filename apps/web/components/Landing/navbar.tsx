import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png"
const Navbar = () => {
  return (
    <div className="w-screen flex flex-row justify-center p-5 h-[15%]">
      <div className="navbar w-[80vw] flex flex-row justify-between items-center max-h-[60px]">
        <div className="logo h-full">
          <Image className='h-[50px] w-[50px] bgGlow' alt='logo' src={logo}></Image>
        </div>
        <div className="links flex flex-row bg-[#367cff3e] rounded-[90px] py-2 text-center border-2 border-[#367cff3e] m-2 h-full font-orbitron">
          <a className="px-6 flex items-center" href="#Sponsors">
          Sponsors
          </a>
          <a className="px-6 flex items-center" href="#GuestLectures">
          Lectures
          </a>
          <a className="px-6 flex items-center" href="#about">
            About
          </a>
          <a className="px-6 flex items-center" href="#Discord">
          Discord
          </a>
        </div>
        <div className="login flex items-center h-full">
          <button className=" bg-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] gap-8 w-[100px] h-[70%] font-outline-05 font-orbitron">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

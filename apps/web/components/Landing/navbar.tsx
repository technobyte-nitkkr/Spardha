import React  from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import menu from "../../public/menu.svg";
import './navbar.css';

const Navbar = (): JSX.Element => {
  const navtoggle = () : void => {
    const nav : HTMLElement  | null = document.querySelector(".navbar");
    const btn : HTMLElement  | null = document.querySelector(".btn");
    const btnc : HTMLElement | null  = document.querySelector(".btnc");
    nav?.classList.toggle("open");
    btn?.classList.toggle("hidden");
    btnc?.classList.toggle("hidden");
  }
  return (
    <div className="w-screen flex flex-row justify-center p-5 h-[15%]">
      <div className="w-[80vw] flex flex-row justify-between items-center max-h-[60px]">
        <div className="logo h-full">
          <Image alt="logo" className="h-[50px] w-[50px] bgGlow" src={logo} />
        </div>
          <button className="btn px-6 max-w-[100px] flex items-center min-w-[70px] md:hidden bg-[#367cff3e] rounded-[90px] py-2 text-center border-2 border-[#367cff3e] m-2 h-full" onClick={navtoggle}>
            <Image alt="logo" className="h-[50px] w-[50px] bgGlow" src={menu as string} />
          </button>
          <button className="btnc px-8 max-w-[100px] items-center min-w-[70px] hidden bg-[#367cff3e] rounded-[90px] py-2 text-center border-2 border-[#367cff3e] m-2 h-full text-4xl text-black" onClick={navtoggle}>
            X
          </button>
        <div className="navbar links flex-row bg-[#367cff3e] rounded-[90px] py-2 text-center border-2 border-[#367cff3e] m-2 h-full font-orbitron md:text-xl hidden md:flex text-[12px]">
          <a className="px-6 items-center flex" href="#Sponsors">
            Sponsors
          </a>
          <a className="px-6 items-center flex" href="#GuestLectures">
            Lectures
          </a>
          <a className="px-6 items-center flex" href="#About">
            About
          </a>
          <a className="px-6 items-center flex" href="#Discord">
            Discord
          </a>
        </div>
        <div className="login flex items-center h-full">
          <button
            className=" bg-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] gap-8 w-[100px] h-[70%] font-outline-05 font-orbitron"
            type="button"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

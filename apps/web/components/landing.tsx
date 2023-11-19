import React from "react";
import Image from "next/image";
import title from "../public/assets/title.png";
import panel from "../public/assets/PANEL.png";
import presented from "../public/assets/presented.png";
import '../app/page.module.css'
const Landing = () => {
  return (
    <div className="w-screen h-full flex justify-center items-center font-orbitron">
      <div className="flex flex-col justify-start items-center h-[80%] w-[50%]">
        <Image className="mb-[40px]" alt="Texhspardha" src={title} />
        <div className="text-center w-[80%] mb-[40px] text-4xl">
          <h1>Tech Odyssey where</h1>
          <h1>innovation meets infinity.</h1>
        </div>
        <Image className="mb-[40px]" alt="Texhspardha" src={presented} />
        <div 
        className="min-h-[300px] min-w-[536.25px] flex justify-center items-center mb-[40px]" 
        style={{
        backgroundImage: `url(${panel.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
          <div className="w-[70%] h-[70%] text-2xl overflow-hidden font-orbitron-l">
            <div className="py-2.5"> &gt;&gt;<span className="ml-10">date1 - date2 Month</span></div>
            <div className="py-2.5"> &gt;&gt;<span className="ml-10">date1 - date2 Month</span></div>
            <div className="py-2.5"> &gt;&gt;<span className="ml-10">date1 - date2 Month</span></div>
            <div className="py-2.5"> &gt;&gt;<span className="ml-10">date1 - date2 Month</span></div>
            <div className="py-2.5"> &gt;&gt;<span className="ml-10">date1 - date2 Month</span></div>
          </div>
        </div>
        <button className="border-t-2 border-x-2 border-b-8 border-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] font-orbitron-l">
        View Them All
          </button>
      </div>
    </div>
  );
};

export default Landing;

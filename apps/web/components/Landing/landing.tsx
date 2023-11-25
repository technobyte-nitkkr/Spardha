import React from "react";
import Image from "next/image";
import panel from "../../public/assets/PANEL.png";
import presented from "../../public/assets/presented.png";
import dates from './dates.json'
import '../../app/page.module.css'

const Landing = (): JSX.Element => {
  return (
    <div className="w-screen h-[85%] flex justify-center items-center font-orbitron">
      <div className="flex flex-col justify-start items-center w-[50%]">
        <h1 className="font-starlord-1">TECHSPARDHA</h1>
        <div className="text-center w-[80%] mb-[20px] text-4xl font-orbitron-1">
          <h1>Tech Odyssey where</h1>
          <h1>innovation meets infinity.</h1>
        </div>
        <Image alt="Texhspardha" className="mb-[20px]" src={presented} />
        <div
          className="min-h-[300px] min-w-[536.25px] flex justify-center items-center mb-[20px]"
          style={{
            backgroundImage: `url(${panel.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="w-[70%] h-[70%] text-2xl overflow-hidden font-orbitron-l">
            {
              dates.data.map((item) => {
                return (
                  <div className="py-2.5 opacity-70 hover:opacity-100 cursor-pointer" > &gt;&gt;<span className="ml-5 text-md text-center">{item.date1} - {item.date2} {item.month}</span></div>
                )
              })
            }
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

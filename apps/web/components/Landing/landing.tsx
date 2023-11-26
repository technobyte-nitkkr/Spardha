import React from "react";
import Image from "next/image";
import panel from "../../public/assets/PANEL.png";
import presented from "../../public/assets/presented.png";
import dates from './dates.json'
import '../../app/page.module.css'

const Landing = (): JSX.Element => {
  return (
    <div className="w-screen h-[85%] flex justify-center items-center font-orbitron">
      <div className="flex flex-col justify-start items-center lg:w-[50%] md:w-[70%] sm:w-[75%] w-[80%] ">
        <h1 className="font-starlord-1 lg:text-9xl md:text-8xl sm:text-7xl text-4xl">TECHSPARDHA</h1>
        <div className="text-center w-[100%] mb-[20px] font-orbitron-1 lg:text-4xl md:text-2xl sm:text-xl text-[10px]">
          <h1>Tech Odyssey where</h1>
          <h1>innovation meets infinity.</h1>
        </div>
        <Image alt="Texhspardha" className="mb-[20px]" src={presented} />
        <div
          className="sm:min-w-[540.25px] min-w-[350px] sm:min-h-[300px] min-h-[200px]  flex justify-center items-center mb-[20px]"
          style={{
            backgroundImage: `url(${panel.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="w-[70%] h-[70%] lg:text-2xl md:text-2xl sm:text-xl text-[10px] overflow-hidden font-orbitron-l">
            {
              dates.data.map((item) => {
                return (
                  <div className="py-2.5 opacity-70 hover:opacity-100 cursor-pointer" key={item.date1}  > &gt;&gt;<span className="ml-5 text-md text-center">{item.date1} - {item.date2} {item.month}</span></div>
                )
              })
            }
          </div>
        </div>
        <button className="border-t-2 border-x-2 border-b-8 border-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] font-orbitron-l" type="button">
          View Them All
        </button>
      </div>
    </div>
  );
};

export default Landing;

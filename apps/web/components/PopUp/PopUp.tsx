import React from "react";
import PANEL from "../../public/assets/PANEL.png";
export const PopUp = () => {
  return (
    <div
      className='hidden w-screen h-screen justify-center items-center absolute'
    >
      <div
        className="w-[65%] h-[75%] opacity-70"
        style={{
          backgroundImage: `url(${PANEL.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

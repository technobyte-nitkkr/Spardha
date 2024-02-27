import React from "react";
import Image from "next/image";
import "./loading.css";

export const loading = (): JSX.Element => {
  return (
    <>
      <div className="spinner-box">
        <div className="solar-system">
          <div className="earth-orbit orbit">
            <div className="planet earth"></div>
            <div className="venus-orbit orbit">
              <div className="planet venus"></div>
              <div className="mercury-orbit orbit">
                <div className="planet mercury"></div>
              </div>
            </div>
          </div>
      <Image
        src="/favicon.ico"
        alt="sun"
        height={50}
        width={50}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-2xl" 
      />
        </div>
      </div>
    </>
  );
};

export default loading;

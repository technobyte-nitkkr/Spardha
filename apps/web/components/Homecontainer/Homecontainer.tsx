import React from "react";
import "./style.css";
import tag from "../../public/assets/about_carousal/home-tag.svg";
import eclipse from "../../public/assets/about_carousal/home-eclipse.svg";
import Image from "next/image";

const Homecontainer = ({ heading, element }):JSX.Element => {
  return (
    <div className="homecontainer">
      <div className="designContainer">
        <div className="hc-headingline">
          <Image src={tag as string} alt="" />
          <div>{heading}</div>
        </div>
        <div className="hc-eclipse">
          <div>
            <Image src={eclipse as string} alt="" />
          </div>
        </div>
        <div className="hc-body">
          <div className="hc-line">
            <div></div>
          </div>
          <div className="hc-subbody">{element}</div>
        </div>
      </div>
    </div>
  );
}

// {
//   sample snippet <Homecontainer heading="Sample" element={<h1>Welcome to NIT KKR</h1>} />
// }

export default Homecontainer;
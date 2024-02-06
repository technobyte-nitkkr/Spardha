import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import I from "../public/instagram.svg";
import F from "../public/facebook.svg";
import L from "../public/linkedin.svg";
import T from "../public/twitter.svg";
// import OurSponsors from './OurSponsors/OurSponsors'

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="text-white bg-black h-3/5 flex text-md justify-around items-center flex-row mt-11">
        <div className="flex flex-row text-2xl items-center">
          <div>
            <Image alt="logo" src={logo} className="h-[60px] w-[60px]" />
          </div>
          <div className="sm:text-md md:text-4xl text-[20px] h-full">
            Techspardha
          </div>
        </div>

        <div className="sm:text-md md:text-2xl text-[10px] text-end mr-2">
          Developed with ❤️ by Technobyte
        </div>
      </div>
      <div className="text-white bg-[#161B22] h-2/5 flex flex-row items-center justify-center gap-10">
        <a
          className="hover:scale-150"
          href="https://www.facebook.com/techn0byte/"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="F" height={20} src={F as string} width={20} />
        </a>
        <a
          className="hover:scale-150"
          href="https://www.instagram.com/technobyte_nitkkr/"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="I" height={20} src={I as string} width={20} />
        </a>
        <a
          className="hover:scale-150"
          href="https://twitter.com/tsnitkkr"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="T" height={20} src={T as string} width={20} />
        </a>
        <a
          className="hover:scale-150"
          href="https://www.linkedin.com/company/technobyte-nitkkr/"
          rel="noreferrer"
          target="_blank"
        >
          <Image alt="L" height={20} src={L as string} width={20} />
        </a>
      </div>
    </>
  );
};

export default Footer;

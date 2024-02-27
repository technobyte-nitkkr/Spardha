import React from "react";
import Image from "next/image";
import instagram from "public/instagram.svg";
import facebook from "public/facebook.svg";
import linkedin from "public/linkedin.svg";
import twitter from "public/twitter.svg";
import up from "public/assets/up.svg";
import "./Footer.css";
// import OurSponsors from './OurSponsors/OurSponsors'

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="text-white bg-[#121212] flex text-md justify-between items-center flex-row h-full px-5">
        <div className="sm:text-md md:text-xl text-[10px] mr-2 basis-1/3 ">
          Developed with ❤️ by Technobyte
        </div>
        <div className="basis-1/3  flex items-center justify-center">
          <a className="primary-btn w-fit" href="/#Home">
            <Image src={up as string} alt="up" height={20} width={20} className="min-w-4 min-h-4"/>
          </a>
        </div>
        <div className="ml-1 basis-1/3 flex items-center justify-end flex-wrap">
          <div className="flex justify-around md:gap-8 gap-1">
            <a
              className="hover:scale-150"
              href="https://www.facebook.com/techn0byte/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="facebook"
                height={20}
                src={facebook as string}
                width={20}
                className="min-w-4 min-h-4"
              />
            </a>
            <a
              className="hover:scale-150"
              href="https://www.instagram.com/techspardha.nitkkr/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="instagram"
                height={20}
                src={instagram as string}
                width={20}
                className="min-w-4 min-h-4"
              />
            </a>
            <a
              className="hover:scale-150"
              href="https://twitter.com/tsnitkkr"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="twitter"
                height={20}
                src={twitter as string}
                width={20}
                className="min-w-4 min-h-4"
              />
            </a>
            <a
              className="hover:scale-150"
              href="https://www.linkedin.com/company/technobyte-nitkkr/"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt="linkedin"
                height={20}
                src={linkedin as string}
                width={20}
                className="min-w-4 min-h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import instagram from "public/instagram.svg";
import facebook from "public/facebook.svg";
import linkedin from "public/linkedin.svg";
import twitter from "public/twitter.svg";
// import OurSponsors from './OurSponsors/OurSponsors'

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="text-white bg-[#121212] flex text-md justify-between items-center flex-row h-full px-5">
        <div className="sm:text-md md:text-2xl text-[10px] text-end mr-2">
          Developed with ❤️ by Technobyte
        </div>
        <div className="flex justify-around gap-8">
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
            />
          </a>
          <a
            className="hover:scale-150"
            href="https://www.instagram.com/technobyte_nitkkr/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="instagram"
              height={20}
              src={instagram as string}
              width={20}
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
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

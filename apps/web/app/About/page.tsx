"use client";
import Glimpses from "../../components/About/Glimpses/Glimpses";
import InstallApp from "../../components/About/InstallApp/InstallApp";
import Homecontainer from "../../components/Homecontainer/Homecontainer";
import Registration from "../../components/Registration/Registration";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import expand from "../../public/assets/expand.svg";
import "./About.css";

const About = () => {
  return (
    <div className="parent">
            <div className="h-24 w-full flex justify-around">
        <Link href="/" className="h-full w-auto flex justify-center items-center">
          <Image
            className="cursor-pointer rotate-90"
            src={expand as string}
            alt="category"
            width={50}
            height={50}
          />
        </Link>
          <Image
            className="w-auto h-full"
            src={logo as unknown as string}
            alt="category"
            width={1000}
            height={1000}
          />
      </div>
      <div className="aboutPageContainer"  >
        <span id="aboutElementHelper1"></span>
        <Homecontainer heading={"About Techspardha"} element={<Registration />} />
        <Homecontainer
          heading={"Install the Techspardha app"}
          element={<InstallApp />}
        />
        <Homecontainer
          heading={"Some glimpses from the past..."}
          element={<Glimpses />}
        />
        <Homecontainer
          heading={"Checkout Techspardha'18 aftermovie"}
          element={
            <div >
              <div className="video-responsive">
                <iframe
                  width="360"
                  height="115"
                  src="https://www.youtube.com/embed/NyHq7Pp1PuY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          }

        />
      </div>
    </div>
  );
};

export default About;
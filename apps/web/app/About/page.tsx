"use client";
import dynamic from "next/dynamic";
// import Glimpses from "../../components/About/Glimpses/Glimpses";
import stars from "../../public/assets/stars.jpg";
import InstallApp from "../../components/About/InstallApp/InstallApp";
import Homecontainer from "../../components/Homecontainer/Homecontainer";
import Registration from "../../components/Registration/Registration";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import expand from "../../public/assets/expand.svg";
import "./About.css";

const Glimpses = dynamic(() => import('../../components/About/Glimpses/Glimpses'), { ssr: false })

const About = () => {
  return (
    <div
      className="parent h-screen w-full overflow-y-auto bg-black bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${stars.src})`,
      }}
    >
      <div className="h-24 w-full flex justify-around items-center">
        <div className="h-2/3 w-3/5 flex flex-row justify-between bg-[#367cff3e] rounded-[90px] p-2">
          <Link
            href="/"
            className="h-full w-auto flex justify-center items-center"
          >
            <Image
              className="cursor-pointer rotate-90"
              src={expand as string}
              alt="category"
              width={50}
              height={50}
            />
          </Link>
          <Image
            className="w-auto "
            src={logo as unknown as string}
            alt="category"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="aboutPageContainer">
        <span id="aboutElementHelper1"></span>
        <Homecontainer
          heading={"About Techspardha"}
          element={<Registration />}
        />
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
            <div>
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

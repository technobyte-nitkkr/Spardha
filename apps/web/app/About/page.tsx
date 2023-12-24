"use client";
import Glimpses from "../../components/About/Glimpses/Glimpses";
import InstallApp from "../../components/About/InstallApp/InstallApp";
import Homecontainer from "../../components/Homecontainer/Homecontainer";
import Navbar from "../../components/Landing/navbar";
import Registration from "../../components/Registration/Registration";
import "./About.css";

const About = () => {
  return (
    <div className="parent">
      <Navbar />
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
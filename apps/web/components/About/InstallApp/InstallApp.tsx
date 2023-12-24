import { FaGooglePlay } from "react-icons/fa";
import Button from "../../Button/Button";
import "./InstallApp.css";
import app1 from "../../../public/assets/about_carousal/final1.png";
import Image from "next/image";

const InstallApp = () => {
  return (
    <div>
      <div className="Heading">Install the Techspardh App Now!</div>

      <div className="aboutscroll1">
        <div className="wrapper">
          <Image className="d-block  aboutimg" alt="" src={app1} />
        </div>
      </div>

      <div className="buttons">
        <div className="learn">
          <a title="aLink" href="https://play.google.com/store/apps/details?id=com.nitkkr.altius">
            <Button
              icon={<FaGooglePlay size={20} display={"inline"} />}
              btnText={"Download Now"}
            />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default InstallApp;
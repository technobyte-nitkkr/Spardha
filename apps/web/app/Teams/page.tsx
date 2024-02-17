"use client";
import stars from "../../public/assets/stars.jpg";
import TeamDetails from "../../components/Teams/Details/TeamDetails";
import Image from "next/image";
import Link from "next/link";
import Expand from "../../public/assets/expand.svg";
import logo from "../../public/assets/logo.png";
import "./Team.css";

const Team = (): JSX.Element => {
  return (
    <div
      className="parentTeam h-screen w-full overflow-y-auto bg-black bg-cover bg-center bg-no-repeat relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${stars.src})`,
      }}
    >
      <div className="h-24 w-full flex justify-around items-center ">
        <div className="h-2/3 w-3/5 flex flex-row justify-between bg-[#367cff3e] rounded-[90px] p-2">
          <Link
            href="/"
            className="h-full w-auto flex justify-center items-center"
          >
            <Image
              className="cursor-pointer rotate-90"
              src={Expand as string}
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
      </div>
      <div className="team">
        <div className="headingGL font-starlord-1">Team Techspardha</div>
        <div className="sub-team-heading bg-[#367cff3e] p-3" >
          &quot;Meet the People who worked countless hours behind the scenes to
          bring you the Spectacle,
          <br></br>that is Techspardha, the tech-fest of NIT kurukshetra.&quot;
        </div>
        <TeamDetails />
      </div>
    </div>
  );
};

export default Team;

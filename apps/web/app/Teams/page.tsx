"use client";
import TeamAnimation from "../../components/Teams/Animation/TeamAnimation";
import TeamDetails from "../../components/Teams/Details/TeamDetails";
import Image from "next/image";
import Link from "next/link";
import expand from "../../public/assets/expand.svg";
import logoe from "../../public/assets/logoe.png";
import "./Team.css";

const Team = (): JSX.Element => {
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
            src={logoe as unknown as string}
            alt="category"
            width={1000}
            height={1000}
          />
      </div>
      <div className="team">
        <div className="headingGL font-starlord-1">Team Techspardha</div>
        <div className="sub-team-heading">
          &quot;Meet the People who worked countless hours behind the scenes to
          bring you the Spectacle,
          <br></br>that is Techspardha, the tech-fest of NIT kurukshetra.&quot;
        </div>
        <TeamAnimation />
        <TeamDetails />
      </div>
    </div>
  );
};

export default Team;

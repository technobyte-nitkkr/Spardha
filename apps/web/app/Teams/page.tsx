"use client"
import Navbar from "../../components/Landing/navbar";
import TeamAnimation from "../../components/Teams/Animation/TeamAnimation";
import TeamDetails from "../../components/Teams/Details/TeamDetails";
import "./Team.css";

const Team = ():JSX.Element => {
    return (
        <div className="parent">
            <Navbar />
            <div className="team">
                <div className="headingGL">Team Techspardha</div>
                <div className="sub-team-heading">
                    &quot;Meet the People who worked countless hours behind the scenes to bring
                    you the Spectacle, that is Techspardha, the tech-fest of NIT
                    kurukshetra.&quot;
                </div>
                <TeamAnimation />
                <TeamDetails />
            </div>
        </div>
    );
}

export default Team;

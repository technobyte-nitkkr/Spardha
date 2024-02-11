import React from "react";
import Navbar from "../../Landing/navbar/navbar";
import Landing from "../../Landing/landing";
import Events from "../../Events/Events";
import GuestLectures from "../../GuestLectures/GuestLectures";
import OurSponsors from "../../OurSponsors/OurSponsors";
import Footer from "../../Footer/Footer";
interface PROPS {
  parentDiv: React.RefObject<HTMLDivElement>;
  handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  sec1ref: React.RefObject<HTMLDivElement>;
  visible: boolean;
  visibleNotifications: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  sec2ref: React.RefObject<HTMLDivElement>;
  sec3ref: React.RefObject<HTMLDivElement>;
  sec4ref: React.RefObject<HTMLDivElement>;
};
const Sections = ({
  parentDiv,
  handleScroll,
  sec1ref,
  visible,
  visibleNotifications,
  setVisible,
  setVisibleNotifications,
  sec2ref,
  sec3ref,
  sec4ref,
}: PROPS) => {
  return (
    <div
      className="absolute overflow-y-scroll w-full h-full scroll-smooth snap-y snap-mandatory font-orbitron-l z-1"
      ref={parentDiv}
      onScroll={handleScroll}
    >
      <section
        className="h-screen w-full snap-center flex flex-col md:gap-4"
        id="Home"
        ref={sec1ref}
      >
        <Navbar />
        <Landing
          visibleNotifications={visibleNotifications}
          setVisibleNotifications={setVisibleNotifications}
        />
      </section>

      <section
        className="h-screen w-full snap-center"
        id="Events"
        ref={sec2ref}
      >
        <Events visible={visible} setVisible={setVisible} />
      </section>
      <section
        className="h-screen w-full snap-center flex items-center"
        id="GuestLectures"
        ref={sec3ref}
      >
        <GuestLectures />
      </section>
      <section
        className="h-screen w-full snap-center flex items-center"
        id="Sponsors"
        ref={sec4ref}
      >
        <OurSponsors />
      </section>
      <section className="w-full h-[8%] snap-center">
        <Footer />
      </section>
    </div>
  );
};

export default Sections;

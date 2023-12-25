import React, { useEffect, useState } from "react";
import Image from "next/image";
import panel from '../../public/assets/PANEL.png'
import Expand from "../../public/assets/expand.svg";
interface NotificationsData {
  success: boolean;
  data: {
    notifications: Notification[];
  };
}
interface Notification {
  notification: NotificationDetails;
  time: string;
}
interface NotificationDetails {
  android_channel_id: string;
  body: string;
  image: string;
  link: string;
  title: string;
}
const PopUp: React.FC<{
  visibleNotifications: boolean;
  setVisibleNotifications: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visibleNotifications, setVisibleNotifications }) => {
  const [ActiveNotification, setActiveNotification] = useState<Notification>({
    notification: {
      android_channel_id: "",
      body: "",
      image: "",
      link: "",
      title: "",
    },
    time: "",
  });
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [angle, setAngle] = useState<boolean[]>(
    new Array(notifications.length).fill(true)
  );
  const initData: Notification = {
    notification: {
      android_channel_id: "technobyte",
      body: "Techspardha is electrified ⚡ by the enunciation of highly experienced and skilled speech-makers.Excited to know that this techspardha who is felicitating us as our guest ? 🥳 Here we present our first guest – Mr. Ankush Singla 🔥Ankush is currently working as the Co-founder & CEO at Coding Ninjas. Before Starting the Coding Ninjas he was the co founder of Coding Blocks. He has worked in other companies like Facebook, 100Percentile and Amazon. He has graduation degree from Indian Institute of Technology, Delhi and Master's degree from Stanford University.Get a chance to know about his journey and learn how to code your way through “rat in a maze”👾 on 28th January , 10:00 AM at Senate Hall.Mark Your Calenders.👻",
      image:
        "https://res.cloudinary.com/techspardha8/image/upload/v1674836467/techspardha22/events/rah2zpo41bmyqlksztvk.jpg",
      link: "https://www.instagram.com/p/Cn6FD5rvGHI/",
      title: "Guest Lecture by Ankush Singla Starting Soon",
    },
    time: "1674883109528",
  };
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/notification"
    )
      .then((res) => res.json())
      .then((data: NotificationsData) => {
        setNotifications(data.data.notifications);
        setAngle(data.data.notifications.map((_, index) => index !== 0));
        setActiveNotification(initData);
      })
      .catch((err: Error) => err);
  }, []);
  const toMonth = (i: number) => {
    switch (i) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  };
  const giveDate = (ms: string) => {
    const time = new Date(Number.parseInt(ms));
    return time.getDate() + " " + toMonth(time.getMonth());
  };
  return (
    <div
      className={`${
        visibleNotifications ? "absolute flex" : "hidden"
      } w-screen h-screen justify-center items-center p-3 z-10`}
    >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.86)] z-5">
        <div
          className="w-14 h-14 right-0 absolute text-center flex flex-col justify-center  hover:scale-105 cursor-pointer"
          onClick={() => {
            setVisibleNotifications(false);
          }}
          role="presentation"
        >
          <h1 className="font-starlord-1 text-5xl">X</h1>
        </div>
      </div>
      <div
        className="flex justify-center items-center xl:w-[1485.666px] xl:h-[953.507px] lg:w-[1130px] lg:h-[870px] md:w-[840px] sm:w-[700px] custom-sm:w-[420px] custom-xsm:w-[350px] w-[1280px] h-[900px] scale-90"
        style={{
          backgroundImage: `url(${panel.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            clipPath:
              "polygon( 0 14%,7% 0,100% 0,100% 100%,100% 100%,100% 100%,10% 100%,0% 100%,0% 100%)",
          }}
          className="w-[1280px] h-[737px] xl:scale-100 lg:scale-[80%] md:scale-[58%] sm:scale-[48%] custom-sm:scale-[28%] custom-xsm:scale-[24%] shrink-0 flex flex-row items-center justify-start"
        >
          <div className="w-1/4 h-full shrink-0 bg-[rgba(0,0,33,0.60)] flex flex-col items-start overflow-y-auto">
            <h1 className="text-white text-4xl tracking-[1px] font-starlord mb-10 mt-24 ml-10">
              Notifications
            </h1>
            <div className="flex flex-col justify-center items-center w-full">
              {notifications.map((item: Notification, i: number) => (
                <>
                  <div
                    key={i}
                    className={
                      "flex w-[276px] flex-row items-center justify-end p-3 border-b-2 cursor-pointer "
                    }
                    onClick={() => {
                      if (angle.at(i)) {
                        setAngle(angle.map((_, idx) => idx !== i));
                        setActiveNotification(item);
                      }
                      if (!angle.at(i)) {
                        setAngle(angle.map(() => true));
                      }
                    }}
                    role="presentation"
                  >
                    <h1 className="text-[15px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full">
                      {item.notification.title}
                    </h1>
                    <Image
                      className={`ml-2 ${angle[i] ? "" : "hidden"}`}
                      src={Expand as string}
                      alt="category"
                      width={50}
                      height={50}
                    />
                    <Image
                      className={`ml-2 cursor-pointer -rotate-90 ${
                        !angle[i] ? "" : "hidden"
                      }`}
                      src={Expand as string}
                      alt="category"
                      width={50}
                      height={50}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="inline-flex w-3/4 h-full flex-col items-center gap-6 shrink-0 pb-4">
            <div className="overflow-y-auto px-2">
              <h1 className="text-white text-3xl tracking-[1px] font-starlord text-center mb-3">
                {ActiveNotification.notification.title?ActiveNotification.notification.title:""}
              </h1>
              <Image
                className="mb-3"
                src={ActiveNotification.notification.image}
                width={1000}
                height={1000}
                alt="image"
              />
              <h1 className="text-[15px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full mb-3">
                <span className="text-blue-200">ABOUT:</span>
                {ActiveNotification.notification.body?ActiveNotification.notification.body:""}
              </h1>
              <h1 className="text-[20px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full mb-3">
                <span className="text-blue-200">Link:</span>{" "}
                <a
                  href={ActiveNotification.notification.link?ActiveNotification.notification.link:""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-cyan-400 cursor-pointer">
                    {ActiveNotification.notification.link?ActiveNotification.notification.link:""}
                  </span>
                </a>
              </h1>
              <h1 className="text-[20px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full mb-3">
                <span className="text-blue-200">Date:</span>{" "}
                <span className="">
                  {giveDate(ActiveNotification.time)}-
                  {giveDate(ActiveNotification.time)}
                </span>
              </h1>
              <h1 className="text-[20px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full mb-3">
                <span className="text-blue-200">By:</span>{" "}
                {ActiveNotification.notification.android_channel_id?ActiveNotification.notification.android_channel_id.toUpperCase():""}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

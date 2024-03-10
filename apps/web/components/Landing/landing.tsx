import React, { useEffect, useState } from "react";
import Image from "next/image";
import Panel from "../../public/assets/PANEL.png";
import "../../app/page.module.css";
import "./landing.css";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../public/assets/fonts/Orbitron.ttf",
  display: "swap",
  variable: "--font-Orbitron",
});
const starlord = localFont({
  src: "../../public/assets/fonts/Starlord.otf",
  display: "swap",
  variable: "--font-Starloard",
});
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

const Landing: React.FC<{
  visibleNotifications: boolean;
  setVisibleNotifications: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visibleNotifications, setVisibleNotifications }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/notification`)
      .then((res) => res.json())
      .then((data: NotificationsData) => {
        setNotifications(data.data.notifications);
        setIsLoaded(true);
      })
      .catch((err: Error) => err);
  }, []);
  return (
    <div className="w-screen h-[85%] flex justify-center items-center font-orbitron">
      <div
        className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 absolute top-2 right-2 z-50 rounded-lg popUpNotificationScreen" role="alert"
      >
        <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>Adjust Screen Zoom for Better Experience</p>
      </div>
      <div className="flex flex-col justify-start items-center lg:w-[50%] md:w-[70%] sm:w-[75%] w-[80%] ">
        <h1
          className={`${Orbitron.variable} Heading font-starlord-1 lg:text-9xl md:text-8xl sm:text-7xl text-5xl`}
        >
          TECHSPARDHA
        </h1>
        <div
          className={`${starlord.variable} Theme text-center w-[100%] mb-[2vh] font-orbitron-style lg:text-2xl md:text-xl sm:text-lg text-[10px]`}
        >
          <h1>INFINITE IMAGINATIONS</h1>
        </div>
        <h1 className="text-3xl font-bold my-2 notificationTitle">
          Notifications
        </h1>

        <div
          className="panel_card sm:min-w-[480px] min-w-[350px] sm:min-h-[300px] min-h-[200px] sm:h-[300px] h-[200px] flex justify-center items-center mb-[2vh]"
          style={{
            backgroundImage: `url(${Panel.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {isLoaded ? (
            <div className="w-auto max-w-[80%] min-w-[80%] h-[70%] min-h-[70%] max-h-[70%] md:text-xl sm:text-xl text-[10px] overflow-hidden font-orbitron-l ">
              <>
                {notifications.map((item: Notification, i: number) => {
                  if (i > 4) return;
                  return (
                    <div
                      className="date_card py-1.5 opacity-70 hover:opacity-100 cursor-pointer w-full overflow-hidden flex justify-start"
                      key={i}
                      onClick={() => {
                        setVisibleNotifications(true);
                      }}
                      role="presentation"
                    >
                      <span className="text-md mr-2">&gt;&gt;</span>
                      <div className="flex w-full">
                        <span className="text-md w-full">
                          {item.notification.title.substring(0, 18)}
                          {item.notification.title.length > 18 ? "...." : ""}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : (
            <div className="w-auto max-w-[80%] min-w-[80%] h-[70%] flex justify-center items-center">
              <Image
                src="/assets/loader.gif"
                alt="loading"
                width={200}
                height={200}
              />
            </div>
          )}
        </div>
        <button
          className="ViewButton border-t-2 border-x-2 border-b-8 border-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] font-orbitron-l"
          type="button"
          onClick={
            !visibleNotifications
              ? () => {
                  setVisibleNotifications(true);
                }
              : () => {
                  setVisibleNotifications(false);
                }
          }
        >
          View Them All
        </button>
      </div>
    </div>
  );
};

export default Landing;

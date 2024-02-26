import React, { useEffect, useState } from "react";
import Image from "next/image";
import Panel from "../../public/assets/PANEL.png";
import "../../app/page.module.css";
import "./landing.css";
import localFont from 'next/font/local'
const Orbitron =  localFont({
  src: '../../public/assets/fonts/Orbitron.ttf',
  display: 'swap',
  variable: '--font-Orbitron'
})
const starlord =  localFont({
  src: '../../public/assets/fonts/Starlord.otf',
  display: 'swap',
  variable: '--font-Starloard'
})
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
      <div className="flex flex-col justify-start items-center lg:w-[50%] md:w-[70%] sm:w-[75%] w-[80%] ">
        <h1 className={`${Orbitron.variable} Heading font-starlord-1 lg:text-9xl md:text-8xl sm:text-7xl text-4xl`}>
          TECHSPARDHA
        </h1>
        <div className={`${starlord.variable} text-center w-[100%] mb-[2vh] font-orbitron-style lg:text-2xl md:text-xl sm:text-lg text-[10px]`}>
          <h1>INFINITE IMAGINATIONS</h1>
        </div>
        <h1 className="text-3xl font-bold my-2">Notifications</h1>

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
          className="border-t-2 border-x-2 border-b-8 border-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] font-orbitron-l"
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

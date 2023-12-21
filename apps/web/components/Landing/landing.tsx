import React, { useEffect, useState } from "react";
import Image from "next/image";
import panel from "../../public/assets/PANEL.png";
import presented from "../../public/assets/presented.png";
import '../../app/page.module.css'

interface NotificationsData{
  success: boolean,
  data: {
    notifications: Notification[],
  }
}
interface Notification{
  notification: NotificationDetails,
  time: string
}
interface NotificationDetails{
  android_channel_id: string,
  body: string,
  image: string,
  link: string,
  title: string,
}

const Landing = (): JSX.Element => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  useEffect(() =>{
    fetch("https://us-central1-techspardha-87928.cloudfunctions.net/api2/notification")
    .then(res => res.json())
    .then((data: NotificationsData) => {
      setNotifications(data.data.notifications);
    })
    .catch((err: Error) => err);
  },[])
  const toMonth = (i: number) => {
    switch(i){
      case 0: return "January";
      case 1: return "February";
      case 2: return "March";
      case 3: return "April";
      case 4: return "May";
      case 5: return "June";
      case 6: return "July";
      case 7: return "August";
      case 8: return "September";
      case 9: return "October";
      case 10: return "November";
      case 11: return "December";
    }
  }
  const giveDate = (ms: string) => {
    const time = new Date(Number.parseInt(ms));
    return time.getDate()+" "+toMonth(time.getMonth());
  }
  return (
    <div className="w-screen h-[85%] flex justify-center items-center font-orbitron">
      <div className="flex flex-col justify-start items-center lg:w-[50%] md:w-[70%] sm:w-[75%] w-[80%] ">
        <h1 className="font-starlord-1 lg:text-9xl md:text-8xl sm:text-7xl text-4xl">TECHSPARDHA</h1>
        <div className="text-center w-[100%] mb-[2vh] font-orbitron-1 lg:text-4xl md:text-2xl sm:text-xl text-[10px]">
          <h1>Tech Odyssey where</h1>
          <h1>innovation meets infinity.</h1>
        </div>
        <Image alt="Techspardha" className="mb-[2vh]" src={presented} />
        <div
          className="sm:min-w-[540.25px] min-w-[350px] sm:min-h-[300px] min-h-[200px]  flex justify-center items-center mb-[2vh]"
          style={{
            backgroundImage: `url(${panel.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="w-[70%] h-[70%] lg:text-2xl md:text-2xl sm:text-xl text-[10px] overflow-hidden font-orbitron-l">
            {
              notifications.map((item: Notification,i: number) => {
                if(i>4) return
                return (
                  <div className="py-2.5 opacity-70 hover:opacity-100 cursor-pointer w-full" key={i}>
                    &gt;&gt; <span className="text-md text-right"> {giveDate(item.time)}-{giveDate(item.time)}</span></div>
                )
              })
            }
          </div>
        </div>
        <button className="border-t-2 border-x-2 border-b-8 border-[#367CFF] rounded-tl-[16px] text-center py-[5px] px-[8px] font-orbitron-l" type="button">
          View Them All
        </button>
      </div>
    </div>
  );
};

export default Landing;

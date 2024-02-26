import React from "react";
import Image from "next/image";
import BouncingDotsLoader from "../../Loader/Loader";
interface Notification {
  notification: {
    android_channel_id: string;
    body: string;
    image: string;
    link: string;
    title: string;
  };
  time: string;
}
interface PROPS {
  ActiveNotification: Notification;
  giveDate: (time: string) => string;
  loading: boolean;
}
const DatesAbout: React.FC<PROPS> = ({
  ActiveNotification,
  giveDate,
  loading,
}) => {
  return (
    <div className="inline-flex w-3/4 h-full flex-col items-center gap-6 shrink-0 pb-4 max-w-[100%]">
      {loading ? (
        <BouncingDotsLoader />
      ) : (
        <div className="overflow-y-auto px-2 w-full">
          <h1 className="text-white text-3xl tracking-[1px] font-starlord text-center mb-3">
            {ActiveNotification.notification.title
              ? ActiveNotification.notification.title
              : ""}
          </h1>
          {ActiveNotification.notification.image !== "" ? (
            <Image
              className="mb-3 max-w-full"
              src={ActiveNotification.notification.image}
              width={1000}
              height={1000}
              alt="image"
            />
          ) : (
            <Image
              className="mb-3 min-w-full"
              src={"/assets/NoImage.png"}
              width={1000}
              height={1000}
              alt="image"
            />
          )}
          <h1 className="text-[15px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full mb-3">
            <span className="text-blue-200">ABOUT:</span>
            {ActiveNotification.notification.body
              ? ActiveNotification.notification.body
              : ""}
          </h1>
          <h1 className="text-[20px] leading-6 tracking-[1px] font-orbitron-1 text-start w-full mb-3">
            <span className="text-blue-200">Link:</span>{" "}
            <a
              href={
                ActiveNotification.notification.link
                  ? ActiveNotification.notification.link
                  : ""
              }
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-cyan-400 cursor-pointer">
                {ActiveNotification.notification.link
                  ? ActiveNotification.notification.link
                  : ""}
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
            {ActiveNotification.notification.android_channel_id
              ? ActiveNotification.notification.android_channel_id.toUpperCase()
              : ""}
          </h1>
        </div>
      )}
    </div>
  );
};
export default DatesAbout;

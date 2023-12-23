import React, { useEffect, useState } from "react";
import Image from "next/image";
import panel from "../../public/PANEL.svg";
import Showmore from "../../public/assets/expand_more.svg";
import EventAbout from "./EventAbout";
interface CategoriesElement {
  categoryName: string;
  imgUrl: string;
  icon: string;
}
interface EventsElement {
  eventName: string;
  eventCategory: string;
}
const PopUp: React.FC<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visible, setVisible }) => {
  const [categories, setCategories] = useState<CategoriesElement[]>([]);
  const [Events, setEvents] = useState<EventsElement[]>([]);
  const [ActiveEvent, setActiveEvent] = useState<EventsElement>({
    eventName: "Excalibur",
    eventCategory: "Programming",
  });
  const [angle, setAngle] = useState<boolean[]>(
    new Array(categories.length).fill(true)
  );
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (data: {
          message: string;
          success: boolean;
          data: { categories: CategoriesElement[] };
        }) => {
          setCategories(data.data.categories);
          setAngle(data.data.categories.map((_, index) => index !== 0));
          setActiveEvent({
            eventName: "Black Box",
            eventCategory: "Programming",
          } as EventsElement);
        }
      )
      .catch((err: Error) => err);
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/events",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (data: {
          message: string;
          success: boolean;
          data: { events: EventsElement[] };
        }) => {
          setEvents(data.data.events);
        }
      )
      .catch((err: Error) => err);
  }, []);
  return (
    <div
      className={`${
        visible ? "absolute flex" : "hidden"
      } w-screen h-screen justify-center items-center p-3 z-10`}
    >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.8)] z-5">
        <div
          className="w-14 h-14 right-0 absolute text-center flex flex-col justify-center  hover:scale-105 cursor-pointer"
          onClick={() => {
            setVisible(false);
          }}
          role="presentation"
        >
          <h1 className="font-starlord-1 text-5xl">X</h1>
        </div>
      </div>
      <div
        className="flex justify-center items-center w-[1485.666px] h-[953.507px] scale-90"
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
          className="w-[1280px] h-[737px] shrink-0 flex flex-row items-center justify-start"
        >
          <div className="w-[340px] h-full shrink-0 bg-[rgba(0,0,33,0.60)] flex flex-col items-start overflow-y-auto">
            <h1 className="text-white text-4xl tracking-[1px] font-starlord mb-10 mt-24 ml-10">
              EVENTS
            </h1>
            <div className="flex flex-col justify-center items-center w-full">
              {categories.map((category, index) => (
                <>
                  <div
                    key={index}
                    className={
                      "flex w-[276px] flex-row items-center justify-end p-3 border-b-2 cursor-pointer "
                    }
                    onClick={() => {
                      if (angle.at(index)) {
                        setAngle(angle.map((_, i) => i !== index));
                      }
                      if (!angle.at(index)) {
                        setAngle(angle.map(() => true));
                      }
                    }}
                    role="presentation"
                  >
                    <h1 className="text-2xl leading-6 tracking-[1px] font-orbitron-1 text-start w-full">
                      {category.categoryName}
                    </h1>
                    <Image
                      className={`ml-2 ${angle[index] ? "" : "hidden"}`}
                      src={Showmore as string}
                      alt="category"
                      width={50}
                      height={50}
                    />
                    <Image
                      className={`ml-2 cursor-pointer rotate-180 ${
                        !angle[index] ? "" : "hidden"
                      }`}
                      src={Showmore as string}
                      alt="category"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    {!angle[index] ? (
                      <div className="flex flex-col items-center justify-center gap-2 p-2 font-orbitron-1 text-start text-xl bg-[#06399F]">
                        {Events.map((event, idx) =>
                          event.eventCategory === category.categoryName ? (
                            <div
                              key={idx}
                              className={`flex w-[276px] flex-row items-center justify-end cursor-pointer
                                ${
                                  ActiveEvent.eventName === event.eventName
                                    ? "opacity-100"
                                    : "opacity-60"
                                }
                                `}
                              onClick={() => {
                                setActiveEvent(event);
                              }}
                              role="presentation"
                            >
                              <h1
                                className={`text-white text-lg leading-6 tracking-[1px] font-oritron-l w-full 
                              }`}
                              >
                                {event.eventName}
                              </h1>
                            </div>
                          ) : (
                            ""
                          )
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="inline-flex w-[940px] h-[737px] flex-col items-center gap-6 shrink-0 pb-4">
            <EventAbout item={ActiveEvent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

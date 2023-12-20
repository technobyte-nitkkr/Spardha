import React, { useEffect, useState } from "react";
import panel from "../../public/PANEL.svg";
import Image from "next/image";
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
const PopUp = () => {
  const [categories, setCategories] = useState<CategoriesElement[]>([]);
  const [Events, setEvents] = useState<EventsElement[]>([]);
  const [ActiveEvent, setActiveEvent] = useState<EventsElement>();
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
          setAngle(new Array(data.data.categories.length).fill(true));
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
          setActiveEvent(data.data.events[0]);
        }
      )
      .catch((err: Error) => err);
  }, []);
  const [angle, setAngle] = useState<boolean[]>(
    new Array(categories.length).fill(true)
  );
  return (
    <div className="w-screen h-screen flex justify-center items-center p-3">
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
                      if (angle.at(index) === true) {
                        setAngle(
                          angle.map((item, i) => (i === index ? false : true))
                        );
                      }
                      if (angle.at(index) === false) {
                        setAngle(
                          angle.map((item, i) => (i === index ? true : true))
                        );
                      }
                    }}
                  >
                    <h1 className="text-white text-2xl  leading-6 tracking-[1px] font-oritron w-full">
                      {category.categoryName}
                    </h1>
                    <Image
                      className={`ml-2 ${
                        angle[index] === true ? "" : "hidden"
                      }`}
                      src={Showmore as string}
                      alt="category"
                      width={50}
                      height={50}
                    />
                    <Image
                      className={`ml-2 cursor-pointer rotate-180 ${
                        angle[index] !== true ? "" : "hidden"
                      }`}
                      src={Showmore as string}
                      alt="category"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    {angle[index] !== true ? (
                      <div className="flex flex-col items-center justify-center gap-2 p-2  bg-[#06399F]">
                        {Events.map((event, index) =>
                          event.eventCategory === category.categoryName ? (
                            <div
                              key={index}
                              className="flex w-[276px] flex-row items-center justify-end cursor-pointer opacity-60 hover:opacity-100"
                            >
                              <h1 className="text-white text-lg leading-6 tracking-[1px] font-oritron-l   w-full">
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
            <div className="inline-flex h-[737px] flex-col items-center gap-6 shrink-0 pb-4">
              <EventAbout eventName={ActiveEvent}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

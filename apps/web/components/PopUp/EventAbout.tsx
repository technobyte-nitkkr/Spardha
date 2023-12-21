import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface EventsElement {
  eventName: string;
  eventCategory: string;
}
interface EventsAboutElement {
  coordinators: { coordinator_name: string; coordinator_number: string }[];
  description: string;
  document: string;
  endTime: number;
  eventName: string;
  flagship: string;
  poster: string;
  startTime: number;
  venue: string;
  eventCategory: string;
}
const initData: EventsAboutElement = {
  coordinators: [
    { coordinator_name: "Bhavesh Gupta", coordinator_number: "9521221162" },
    { coordinator_name: "Renu", coordinator_number: "7082481332" },
  ],
  description:
    "Hola Sherlock's 🧐🧐\nBring into play the principle of reversibility🔄 in your heads and pen down your arithmetic skills📝 to find the raw data as we are back with brainstorming🤯 event of the era , Black Box📦 at Techspardha 2K23!\nPut your quizzing caps🤠 on and get ready to sweat to compete with amazing teams😎..",
  document: "https://bit.ly/BlackBox23",
  endTime: 1674898200000,
  eventName: "Black Box",
  flagship: "false",
  poster: "https://i.ibb.co/CMDkkRJ/IMG-20230120-WA0047.jpg",
  startTime: 1674804600000,
  venue: "CS Department",
  eventCategory: "Programming",
};
const EventAbout: React.FC<{
  item: EventsElement;
}> = ({ item }) => {
  const [event, setEvent] = useState<EventsAboutElement>(initData);
  useEffect(() => {
    fetch(
      `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description?eventCategory=${
        item.eventCategory as string
      }&eventName=${item.eventName as string}`,
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
          data: { events: EventsAboutElement };
        }) => {
          setEvent(data.data.events);
        }
      )
      .catch((err: Error) => err);
  }, [item]);
  return (
    <div className="h-full w-full flex-shrink-0">
      <div className="">
        <Image
          alt="Poster"
          className="w-full"
          src={event.poster}
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-full p-2">
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventAbout;

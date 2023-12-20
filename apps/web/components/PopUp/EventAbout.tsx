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
  flagship: boolean;
  poster: string;
  startTime: number;
  venue: string;
  eventCategory: string;
}
const EventAbout: React.FC<{
  item: EventsElement;
}> = ({ item }) => {
  const [event, setEvent] = useState<EventsAboutElement>();
  useEffect(() => {
    fetch(
      `https://us-central1-techspardha-87928.cloudfunctions.net/api2/events/description?eventCategory=${item.eventCategory}&eventName=${item.eventName}`,
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
  }, []);
  return (
    <div className="h-full w-full flex-shrink-0">
      <div>{event?.description}</div>
    </div>
  );
};

export default EventAbout;

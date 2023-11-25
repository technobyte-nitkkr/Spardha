import React, { useRef, useEffect, useState } from "react";
import myImage from '../../public/assets/abstractimage.jpg'
import EventsCard from "./EventsCard";

const Events = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="text-5xl sm:text-5xl md:text-6xl xl:text-5xl font-starlord-1">
      Events Categories
      </div>

      <div className="h-4/6 w-1/2 flex overflow-x-auto snap-x snap-mandatory">
        <EventsCard image={myImage}/>
        <EventsCard image={myImage}/>
        <EventsCard image={myImage}/>
        <EventsCard image={myImage}/>
        <EventsCard image={myImage}/>
        <EventsCard image={myImage}/>
      </div>
      <div className="w-1/4 pt-2 flex justify-evenly">
        <div className="border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer mr-2">
          View Them All
        </div>
      </div>
    </div>
  );
};

export default Events;

import React, { useRef, useEffect, useState } from "react";
import GLcard from "./GLcard";

const GuestLectures = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [cardIndex, setCardIndex] = useState(0);
  const [guestList, setGuestList] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(3);

  const scrollNext = () => {
    if (
      scrollRef.current &&
      cardIndex < scrollRef.current.children.length - numberOfCards
    ) {
      setCardIndex(cardIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current && cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      let gap = (scrollRef.current.offsetWidth - numberOfCards*cardRef.current?.offsetWidth!)/2;

      scrollRef.current.scroll({
        left: (cardRef.current?.offsetWidth! + gap)*cardIndex + gap,
        behavior: "smooth",
      });
    }
  }, [cardIndex]);
  
  window.addEventListener('resize', () => {
    if(scrollRef.current && cardRef.current)
      setNumberOfCards(Math.floor(scrollRef.current.offsetWidth/cardRef.current.offsetWidth))
  })

  //fetching data for guest lectures section
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setGuestList(data.data.lectures);
      })
      .catch((err) => {});
  }, []);  

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="text-5xl sm:text-5xl md:text-6xl xl:text-5xl font-starlord-1">
        Guest Lectures
      </div>

      <div
        className="h-4/6 w-4/5 flex overflow-x-auto gap-2 px-2 gCardResponsive snap-x snap-mandatory"
        ref={scrollRef}
      >
        {guestList.map((item,index) => {
          return (
            <GLcard item={item} index={index} forwardedRef={cardRef} />
          )
        })}
      </div>

      <div className="w-1/4 pt-2 flex justify-evenly">
        <div
          className="border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer mr-2"
          onClick={scrollPrev}
        >
          Prev
        </div>
        <div
          className="border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tr-2xl cursor-pointer"
          onClick={scrollNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default GuestLectures;

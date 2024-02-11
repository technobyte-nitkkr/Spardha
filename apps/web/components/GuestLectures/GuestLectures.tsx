import React, { useRef, useEffect, useState } from "react";
import GLcard from "./GLcard";

interface Guest { 
  name: string,
  time: string,
  desc: string,
  imageUrl: string,
  date: string,
  insta: string,
  facebook: string,
  linkedin: string;
};
interface ParentGuest{
success: boolean,
data:
  {
    lectures: Guest[]
  }
}
const GuestLectures = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [disabledBTN , setDisabledBTN] = useState<boolean>(false);

  const scrollNext = (): void => {
    if (
      scrollRef.current &&
      cardIndex < scrollRef.current.children.length - numberOfCards
    ) {
      setCardIndex(cardIndex + 1);
    }
  };

  const scrollPrev = (): void => {
    if (scrollRef.current && cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  const [shiftBY,setShiftby] = useState<number>(3);
  useEffect(() => {
     if(window.innerWidth < 800) {
      setShiftby(1);
      if(guestList.length == 1) 
        setDisabledBTN(true);
    }
    else if(window.innerWidth < 1280) {
      setShiftby(2);
      if(guestList.length == 2) 
        setDisabledBTN(true);
    }
    else {
      setShiftby(3);
      if(guestList.length == 3) 
        setDisabledBTN(true);
    }
    if (scrollRef.current && cardRef.current !== null) {
      const gap = (scrollRef.current.offsetWidth - numberOfCards*cardRef.current.offsetWidth)/2; //removed ? and ! to correct build errors

      scrollRef.current.scroll({
        // current can be null, so null check is required
        left: ((cardRef.current.offsetWidth + gap) * cardIndex + gap)*shiftBY, 
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
      `${process.env.NEXT_PUBLIC_BASE_URL}/lectures`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data:ParentGuest) => {
        const lectures: Guest[] = data.data.lectures;
        setGuestList(lectures);
      })
      .catch((err: Error) => err);
  }, []);  

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="md:text-5xl text-4xl font-starlord-1">
        Guest Lectures
      </div>

      <div
        className="h-3/5 w-4/5 flex overflow-x-auto gCardResponsive snap-x snap-mandatory"
        ref={scrollRef}
      >
        {guestList.map((item,index) => {
          return (
            <GLcard forwardedRef={cardRef} item={item} key={index} />
          )
        })}
      </div>

      <div className="lg:w-1/4 md:w-1/3 w-1/2 pt-2 flex justify-evenly">
        <div
          aria-hidden="true"
          className="border-2 w-2/5 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer mr-2"
          onClick={scrollPrev}
          style={{ cursor : cardIndex === 0 || disabledBTN ? "not-allowed" : "pointer" }}
        >
          Prev
        </div>
        <div
          aria-hidden="true"
          className="border-2  w-2/5 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tr-2xl cursor-pointer"
          onClick={scrollNext}
          style={{ cursor : cardIndex === (scrollRef.current?.children?.length ?? 0) - numberOfCards || disabledBTN ? "not-allowed" : "pointer" }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default GuestLectures;

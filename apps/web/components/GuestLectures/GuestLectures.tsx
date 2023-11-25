import React, { useRef, useEffect, useState } from "react";
import GLcard from "./GLcard";

const GuestLectures = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [cardIndex, setCardIndex] = useState(0);

  const scrollNext = () => {
    if (
      scrollRef.current &&
      cardIndex < scrollRef.current.children.length - 3
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
      scrollRef.current.addEventListener('wheel', (e) => {
        e.preventDefault();
      }, { passive: false }); // remove this event listener to enable mouse wheel scrolling in the cards

      console.log(scrollRef.current.scrollWidth, scrollRef.current.offsetWidth, scrollRef.current.clientWidth);
      console.log(cardRef.current?.scrollWidth, cardRef.current?.offsetWidth, cardRef.current?.clientWidth);
      console.log((scrollRef.current.offsetWidth - 3*cardRef.current!.offsetWidth!)/2);
    }
  }, [scrollRef.current]);

  useEffect(() => {
    if (scrollRef.current) {
      let gap = (scrollRef.current.offsetWidth - 3*cardRef.current!.offsetWidth!)/2;

      scrollRef.current.scroll({
        left: (cardRef.current?.offsetWidth! + gap)*cardIndex + gap,
        behavior: "smooth",
      });
    }
  }, [cardIndex]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="text-5xl sm:text-5xl md:text-6xl xl:text-5xl font-starlord-1">
        Guest Lectures
      </div>

      <div
        className="h-3/5 w-4/5 flex overflow-x-auto lg:gap-14 md:gap-8 sm:gap-8 gap-2 px-2 gCardResponsive snap-x snap-mandatory"
        ref={scrollRef}
      >
        <GLcard forwardedRef={cardRef} idx={1} />
        <GLcard forwardedRef={cardRef} idx={2} />
        <GLcard forwardedRef={cardRef} idx={3} />
        <GLcard forwardedRef={cardRef} idx={4} />
        <GLcard forwardedRef={cardRef} idx={5} />
        <GLcard forwardedRef={cardRef} idx={6} />
        <GLcard forwardedRef={cardRef} idx={7} />
        <GLcard forwardedRef={cardRef} idx={8} />
        <GLcard forwardedRef={cardRef} idx={9} />
        <GLcard forwardedRef={cardRef} idx={10} />
        <GLcard forwardedRef={cardRef} idx={11} />
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

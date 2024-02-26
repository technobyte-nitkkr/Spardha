import React, { useRef, useEffect, useState } from "react";
import GLcard from "./GLcard";
import Image from "next/image";
interface Guest {
  name: string;
  time: string;
  desc: string;
  imageUrl: string;
  date: string;
  insta: string;
  facebook: string;
  linkedin: string;
}
interface ParentGuest {
  success: boolean;
  data: {
    lectures: Guest[];
  };
}
const GuestLectures = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [disabledBTN, setDisabledBTN] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

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
  const [shiftBY, setShiftby] = useState<number>(3);
  useEffect(() => {
    if (window.innerWidth < 930) {
      setShiftby(1);
      setNumberOfCards(1);
      if (guestList.length <= 1) setDisabledBTN(true);
    } else if (window.innerWidth < 1280) {
      setShiftby(2);
      setNumberOfCards(2);
      if (guestList.length <= 2) setDisabledBTN(true);
    } else {
      setShiftby(3);
      setNumberOfCards(3);
      if (guestList.length <= 3) setDisabledBTN(true);
    }
    if (scrollRef.current && cardRef.current !== null) {
      const gap =
        (scrollRef.current.offsetWidth -
          numberOfCards * cardRef.current.offsetWidth) /
        2; //removed ? and ! to correct build errors

      scrollRef.current.scroll({
        // current can be null, so null check is required
        left: ((cardRef.current.offsetWidth + gap) * cardIndex + gap) * shiftBY,
        behavior: "smooth",
      });
    }
  }, [cardIndex]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/lectures`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: ParentGuest) => {
        const lectures: Guest[] = data.data.lectures;
        setGuestList(lectures);
        setIsLoaded(true);
      })
      .catch((err: Error) => err);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="md:text-5xl text-4xl font-starlord-1">Guest Lectures</div>

      <div
        className="h-3/5 w-4/5 flex overflow-x-auto gCardResponsive snap-x snap-mandatory"
        ref={scrollRef}
      >
        {isLoaded ? (
          <>
            {guestList.map((item, index) => {
              return <GLcard forwardedRef={cardRef} item={item} key={index} />;
            })}
          </>
        ) : (
          <>
            <div className="h-full xl:w-1/3 custom-md:w-1/2 w-full  flex-shrink-0 px-3 snap-start">
              <div
                className="h-full w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3"
                style={{
                  backgroundColor: "rgb(54, 124, 255, 0.25)",
                  border: "1px solid rgb(54, 124, 255)",
                }}
              >
                <div className="w-full h-[20%] flex">
                  <Image
                    alt="abstract"
                    className="rounded-tl-2xl mr-1 h-full w-1/3 max-w-[120px] max-h-[120px]"
                    height={1000}
                    src={"/assets/loader.gif"}
                    width={1000}
                  />
                  <div className="h-full flex-1 pl-3 sm:flex sm:flex-col custom-sm:flex custom-sm:flex-col custom-xsm:flex custom-xsm:flex-col">
                    <div
                      className="text-[1.5rem] h-1/3 sm:h-auto sm:text-[1.4rem] custom-xsm:h-auto custom-xsm:text-[1.3rem] 
          md:h-auto md:text-[1.5rem] md:mb-0 custom-sm:h-auto custom-sm:text-[1.6rem] "
                    >
                      Loading...
                    </div>
                    <div className="text-[0.8] h-1/3 sm:h-auto sm:mt-2 sm:text-[0.8rem] sm:mb-2 opacity-60 custom-xsm:h-auto custom-xsm:text-[0.8rem] md:h-auto md:text-[0.8rem] md:mt-0  custom-sm:h-auto custom-sm:text-[0.8rem] ">
                      Loading....
                    </div>
                  </div>
                </div>

                <div className="w-full h-[70%] bg-black text-white overflow-y-scroll px-2 py-1 CardScrollDiv">
                  Loading.....
                </div>

                <div className="w-full h-[7%] flex justify-start gap-5">
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="h-full xl:w-1/3 custom-md:w-1/2 w-full  flex-shrink-0 px-3 snap-start">
              <div
                className="h-full w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3"
                style={{
                  backgroundColor: "rgb(54, 124, 255, 0.25)",
                  border: "1px solid rgb(54, 124, 255)",
                }}
              >
                <div className="w-full h-[20%] flex">
                  <Image
                    alt="abstract"
                    className="rounded-tl-2xl mr-1 h-full w-1/3 max-w-[120px] max-h-[120px]"
                    height={1000}
                    src={"/assets/loader.gif"}
                    width={1000}
                  />
                  <div className="h-full flex-1 pl-3 sm:flex sm:flex-col custom-sm:flex custom-sm:flex-col custom-xsm:flex custom-xsm:flex-col">
                    <div
                      className="text-[1.5rem] h-1/3 sm:h-auto sm:text-[1.4rem] custom-xsm:h-auto custom-xsm:text-[1.3rem] 
          md:h-auto md:text-[1.5rem] md:mb-0 custom-sm:h-auto custom-sm:text-[1.6rem] "
                    >
                      Loading...
                    </div>
                    <div className="text-[0.8] h-1/3 sm:h-auto sm:mt-2 sm:text-[0.8rem] sm:mb-2 opacity-60 custom-xsm:h-auto custom-xsm:text-[0.8rem] md:h-auto md:text-[0.8rem] md:mt-0  custom-sm:h-auto custom-sm:text-[0.8rem] ">
                      Loading....
                    </div>
                  </div>
                </div>

                <div className="w-full h-[70%] bg-black text-white overflow-y-scroll px-2 py-1 CardScrollDiv">
                  Loading.....
                </div>

                <div className="w-full h-[7%] flex justify-start gap-5">
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="h-full xl:w-1/3 custom-md:w-1/2 w-full  flex-shrink-0 px-3 snap-start">
              <div
                className="h-full w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3"
                style={{
                  backgroundColor: "rgb(54, 124, 255, 0.25)",
                  border: "1px solid rgb(54, 124, 255)",
                }}
              >
                <div className="w-full h-[20%] flex">
                  <Image
                    alt="abstract"
                    className="rounded-tl-2xl mr-1 h-full w-1/3 max-w-[120px] max-h-[120px]"
                    height={1000}
                    src={"/assets/loader.gif"}
                    width={1000}
                  />
                  <div className="h-full flex-1 pl-3 sm:flex sm:flex-col custom-sm:flex custom-sm:flex-col custom-xsm:flex custom-xsm:flex-col">
                    <div
                      className="text-[1.5rem] h-1/3 sm:h-auto sm:text-[1.4rem] custom-xsm:h-auto custom-xsm:text-[1.3rem] 
          md:h-auto md:text-[1.5rem] md:mb-0 custom-sm:h-auto custom-sm:text-[1.6rem] "
                    >
                      Loading...
                    </div>
                    <div className="text-[0.8] h-1/3 sm:h-auto sm:mt-2 sm:text-[0.8rem] sm:mb-2 opacity-60 custom-xsm:h-auto custom-xsm:text-[0.8rem] md:h-auto md:text-[0.8rem] md:mt-0  custom-sm:h-auto custom-sm:text-[0.8rem] ">
                      Loading....
                    </div>
                  </div>
                </div>

                <div className="w-full h-[70%] bg-black text-white overflow-y-scroll px-2 py-1 CardScrollDiv">
                  Loading.....
                </div>

                <div className="w-full h-[7%] flex justify-start gap-5">
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                  <div className="h-12 w-12 animate-pulse bg-gray-700 rounded-xl"></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="lg:w-1/4 md:w-1/3 w-1/2 pt-2 flex justify-evenly">
        <div
          aria-hidden="true"
          className="border-2 w-2/5 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer mr-2"
          onClick={scrollPrev}
          style={{
            cursor: cardIndex === 0 || disabledBTN ? "not-allowed" : "pointer",
          }}
        >
          Prev
        </div>
        <div
          aria-hidden="true"
          className="border-2  w-2/5 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tr-2xl cursor-pointer"
          onClick={scrollNext}
          style={{
            cursor: disabledBTN ? "not-allowed" : "pointer",
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default GuestLectures;

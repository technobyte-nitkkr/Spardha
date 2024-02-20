import React, { useEffect, useState } from "react";
import EventsCard from "./EventsCard";
import Image from "next/image";
import Panel from "../../public/assets/PANEL.png";
interface CategoriesElement {
  categoryName: string;
  imgUrl: string;
  icon: string;
}
function startAnimation(
  i: number,
  cards: NodeListOf<HTMLLabelElement> | undefined
): void {
  cards?.forEach((_, idx) => {
    if (idx !== 0 && idx !== 1 && idx !== 2)
      removePreviousCardStyle(cards, idx);
  });
  let currentIndex = i % cards!.length;
  setInterval(() => {
    if (Number.isNaN(currentIndex) || cards === undefined) return;
    removePreviousCardStyle(cards, currentIndex);
    setCurrentCardStyle(cards, currentIndex);
    setNextCardStyle(cards, currentIndex);
    setNextNextCardStyle(cards, currentIndex);
    currentIndex = (currentIndex + 1) % cards.length;
  }, 4000);
}
function setNextNextCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  currentIndex: number
): void {
  let i = currentIndex;
  if (i === cards.length - 1) i = -1; //i+2==1 ==> i==-1
  if (i === cards.length - 2) i = -2; //i+2==0 ==> i==-2
  cards[i + 2].style.display = "block";
  cards[i + 2].style.transform = "translatex(30%) scale(0.6)";
  cards[i + 2].style.opacity = "0.8";
  cards[i + 2].style.zIndex = "0";
}
function setNextCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  currentIndex: number
): void {
  let i = currentIndex;
  if (i === cards.length - 1) i = -1; //i+1==0 ==> i==-1
  cards[i + 1].style.display = "block";
  cards[i + 1].style.transform = "translatex(15%) scale(0.8)";
  cards[i + 1].style.opacity = "0.9";
  cards[i + 1].style.zIndex = "1";
}
function setCurrentCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  i: number
): void {
  cards[i].style.display = "block";
  cards[i].style.transform = "translatex(0) scale(1)";
  cards[i].style.opacity = "1";
  cards[i].style.zIndex = "5";
}
function removePreviousCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  currentIndex: number
): void {
  let i: number = currentIndex;
  if (i <= 0) i = cards.length;
  cards[i - 1].style.transform = "translatex(30%) scale(0.0)";
  cards[i - 1].style.opacity = "0";
  cards[i - 1].style.zIndex = "0";
}

const Events: React.FC<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ visible, setVisible }) => {
  const [categories, setCategories] = useState<CategoriesElement[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    cards = document.querySelectorAll(".card");
    startAnimation(0, cards);
  }, [categories]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (data: {
          message: string;
          success: boolean;
          data: { categories: CategoriesElement[] };
        }) => {
          setCategories(data.data.categories);
          setIsLoaded(true);
        }
      )
      .catch((err: Error) => err);
  }, []);
  let cards: NodeListOf<HTMLLabelElement>;
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="md:text-5xl text-4xl font-starlord-1">
        Events Categories
      </div>
      <div
        className="h-4/6 w-4/5 flex relative"
        onClick={
          !visible
            ? () => {
                setVisible(true);
              }
            : () => {
                setVisible(false);
              }
        }
        role="presentation"
      >
        {isLoaded ? (
          <>
            {categories.map((category, i) => {
              return (
                <EventsCard
                  image={category.imgUrl}
                  eventName={category.categoryName}
                  key={i}
                />
              );
            })}
          </>
        ) : (
          <div
      className="h-full w-full flex justify-items-center items-center absolute cursor-pointer"
      style={{
        background: `url(${Panel.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundBlendMode: "invert",
      }}
    >
      <Image
        alt=""
        className="absolute w-auto h-auto max-w-[50%] max-h-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
        style={{
          clipPath:
            "polygon( 0 25%,12% 0,100% 0,100% 100%,100% 100%,100% 100%,10% 100%,0% 100%,0% 100%)",
        }}
        height={450}
        src="/assets/loader.gif"
        width={450}
      />
      <h1
        style={{
          clipPath:
            "polygon( 0 25px,20px 0,100% 0,100% 100%,100% 100%,100% 100%,10% 100%,0% 100%,0% 100%)",
        }}
        className="absolute bottom-[38%] sm:bottom-1/3 md:bottom-1/4 lg:bottom-[20%] left-[max(3rem,20%)] md:left-[18%] lg:left-[26%] text-xl sm:text-3xl md:text-5xl font-bold  text-[#DEDEDE] bg-[#367cff] py-2 px-4"
      >
        Loading....
      </h1>
    </div>
        )}
      </div>
      <div className="w-1/2 sm:w-full pt-2 flex justify-evenly">
        <div
          className="border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer mr-2"
          onClick={
            !visible
              ? () => {
                  setVisible(true);
                }
              : () => {
                  setVisible(false);
                }
          }
          role="presentation"
        >
          View Them All
        </div>
      </div>
    </div>
  );
};

export default Events;

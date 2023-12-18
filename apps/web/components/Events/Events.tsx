import React, { useEffect, useState } from "react";
import EventsCard from "./EventsCard";

interface CategoriesElement {
  categoryName: string;
  imgUrl: string;
  icon: string;
}
function startAnimation(
  i: number,
  cards: NodeListOf<HTMLLabelElement> | undefined
): number {
  let currentIndex = i % cards!.length;
  setInterval(() => {
    if (Number.isNaN(currentIndex) || cards === undefined) return;
    removePreviousCardStyle(cards, currentIndex);
    setCurrentCardStyle(cards, currentIndex);
    setNextCardStyle(cards, currentIndex);
    setNextNextCardStyle(cards, currentIndex);
    currentIndex = (currentIndex + 1) % cards.length;
    return currentIndex;
  }, 4000);
  return currentIndex;
}
function setNextNextCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  currentIndex: number
): void {
  let i = currentIndex;
  if (i === cards.length - 1) i = 1;
  if (i === cards.length - 2) i = 0;
  cards[i + 2].style.display = "block";
  cards[i + 2].style.transform = "translatex(30%) scale(0.6)";
  cards[i + 2].style.opacity = "0.2";
  cards[i + 2].style.zIndex = "0";
}
function setNextCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  currentIndex: number
): void {
  let i = currentIndex;
  if (i === cards.length - 1) i = -1;
  cards[i + 1].style.display = "block";
  cards[i + 1].style.transform = "translatex(15%) scale(0.8)";
  cards[i + 1].style.opacity = "0.4";
  cards[i + 1].style.zIndex = "0";
}
function setCurrentCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  i: number
): void {
  cards[i].style.display = "block";
  cards[i].style.transform = "translatex(0) scale(1)";
  cards[i].style.opacity = "1";
  cards[i].style.zIndex = "1";
}
function removePreviousCardStyle(
  cards: NodeListOf<HTMLLabelElement>,
  currentIndex: number
): void {
  let i: number = currentIndex;
  if (i <= 0) i = cards.length;
  cards[i - 1].style.transform = "translatex(30%) scale(0.0)";
  cards[i - 1].style.opacity = "0.2";
  cards[i - 1].style.zIndex = "0";
}

const Events: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesElement[]>([]);
  useEffect(() => {
    cards = document.querySelectorAll(".card");
    currentIndex = startAnimation(currentIndex, cards);
  }, [categories]);
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
        }
      )
      .catch((err: Error) => err);
  }, []);
  let currentIndex = 0;
  let cards: NodeListOf<HTMLLabelElement>;

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="text-[2rem] sm:text-5xl md:text-6xl xl:text-7xl font-starlord-1">
        Events Categories
      </div>
      <div className="h-4/6 w-4/5 flex relative">
        {categories.map((category, i) => {
          return (
            <EventsCard
              image={category.imgUrl}
              eventName={category.categoryName}
              key={i}
            />
          );
        })}
      </div>
      <div className="w-1/2 sm:w-full pt-2 flex justify-evenly">
        <div className="border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer mr-2">
          View Them All
        </div>
      </div>
    </div>
  );
};

export default Events;

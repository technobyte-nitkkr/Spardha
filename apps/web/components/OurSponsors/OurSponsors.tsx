import React, { useState, useEffect } from "react";
import SponsorCategory from "./SponsorCategory";

interface SponsorData {
  imageUrl: string;
  name: string;
  targetUrl: string;
}
interface ArraySponsors {
  sponsorSection: string;
  sponsors: SponsorData[];
}
interface IncomingData {
  data: {
    sponsors: ArraySponsors[];
  };
}

const OurSponsors = (): JSX.Element => {
  const [sponsors, setSponsors] = useState<ArraySponsors[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/sponsors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: IncomingData) => {
        const allsponsors: ArraySponsors[] = data.data.sponsors;
        setSponsors(allsponsors);
        setIsLoaded(true);
      })
      .catch((err: Error) => err);
  }, []);
  const handleContactClick = () => {
    window.location.href = "mailto:mail@example.org";
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="md:text-5xl text-4xl font-starlord-1">Our Sponsors</div>
      <div className="w-[80%] grid auto-rows-auto grid-cols-2 gap-1 justify-items-center justify-self-center justify-center">
        {isLoaded ? (
          <>
            {sponsors.map((item, index) => {
              return (
                <SponsorCategory
                  category={item.sponsorSection}
                  key={index}
                  sponsors={item.sponsors}
                />
              );
            })}
          </>
        ) : (
          <>
            <div
              className={`col-span-2 flex flex-col items-center gap-2 category_card md:m-5 m-2 w-full`}
            >
              <div className="category_title md:text-2xl text-md text-center w-full">
                Partners
              </div>
              <div className="flex justify-evenly w-5/6 flex-wrap h-fit gap-3 ">
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-span-2 flex flex-col items-center gap-2 category_card md:m-5 m-2 w-full`}
            >
              <div className="category_title md:text-2xl text-md text-center w-full">
                Partners
              </div>
              <div className="flex justify-evenly w-5/6 flex-wrap h-fit gap-3 ">
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-span-2 flex flex-col items-center gap-2 category_card md:m-5 m-2 w-full`}
            >
              <div className="category_title md:text-2xl text-md text-center w-full">
                Partners
              </div>
              <div className="flex justify-evenly w-5/6 flex-wrap h-fit gap-3 ">
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-span-2 flex flex-col items-center gap-2 category_card md:m-5 m-2 w-full`}
            >
              <div className="category_title md:text-2xl text-md text-center w-full">
                Partners
              </div>
              <div className="flex justify-evenly w-5/6 flex-wrap h-fit gap-3 ">
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
                <div
                  className={`h-14 w-1/5 bg-white border-2 border-blue-300 rounded-3xl`}
                >
                  <div className="h-full w-auto flex justify-center items-center">
                    <div className="h-12 w-36 animate-pulse bg-gray-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex sm:flex-col flex-row items-center gap-2">
        <div className="text-center text-xl">Want to Sponsor?</div>
        <div
          className="border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer"
          onClick={handleContactClick}
          onKeyUp={handleContactClick}
          role="presentation"
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;

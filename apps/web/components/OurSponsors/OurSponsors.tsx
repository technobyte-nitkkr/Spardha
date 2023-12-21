import React, { useState, useEffect } from 'react'
import SponsorCategory from './SponsorCategory'

interface SponsorData{
  imageUrl: string,
  name: string,
  targetUrl: string,
}
interface ArraySponsors{
  sponsorSection: string,
  sponsors: SponsorData[],
}
interface IncomingData{
  data: {
    sponsors: ArraySponsors[],
  },
}

const OurSponsors = (): JSX.Element => {
  const [sponsors,setSponsors] = useState<ArraySponsors[]>([]);
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/sponsors",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data: IncomingData) => {
        const allsponsors: ArraySponsors[] = data.data.sponsors;
        setSponsors(allsponsors);
      })
      .catch((err: Error) => err);
  }, []);
  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly'>
      <div className='md:text-5xl text-4xl font-starlord-1'>Our Sponsors</div>
      <div className='w-[80%] grid auto-rows-auto grid-cols-2 gap-1 justify-items-center justify-self-center justify-center'>
        {sponsors.map((item,index) => {
          return (
            <SponsorCategory category={item.sponsorSection} key={index} sponsors={item.sponsors} />
          )
        })}
      </div>

      <div className='flex sm:flex-col flex-row items-center gap-2'>
        <div className='text-center text-xl'>Want to Sponsor?</div>
        <div className='border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer'>Contact Us</div>
      </div>
    </div>
  )
}

export default OurSponsors

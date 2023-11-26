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
    <div className='w-full h-full flex flex-col items-center justify-evenly' style={{height:100}}>
      <div className='text-5xl lg:text-4xl'>Our Sponsors</div>
      <style jsx>{`
  @media (max-width: 310px) {
    .text-5xl {
      font-size: 3rem; /* Adjust the font size for 310px */
    }
    .lg\:text-4xl {
      font-size: 2.5rem; /* Adjust the font size for 310px for lg breakpoint */
    }
  }
`}</style>

      <div className='flex justify-center flex-wrap gap-y-4'>
        <div className=" flex justify-center flex-wrap gap-y-4">

      <div className='h-4/6 w-4/5 flex justify-center flex-wrap gap-y-2'>
        {sponsors.map((item,index) => {
          return (
            <SponsorCategory category={item.sponsorSection} key={index} sponsors={item.sponsors} />
          )
        })}
      </div>

    </div>
    </div>
    </div>
  )
  }

export default OurSponsors;

import React from 'react'
import SponsorCategory from './SponsorCategory'

const OurSponsors = () => {
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

        <SponsorCategory category='Title Sponsors' sponsors={8} />
        <SponsorCategory category='Coding Partners' sponsors={4} />
        <SponsorCategory category='Fashion Partners' sponsors={3} />
        <SponsorCategory category='Hackathon Partners' sponsors={3} />
        <SponsorCategory category='Travel Partners' sponsors={1} />
        </div>

      <div className='flex flex-col'>
        <div className='text-center text-xl'>Want to Sponsor?</div>
        <div className='border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer' style={{}}>Contact Us</div>
      </div>
      </div>

    </div>
  )
}

export default OurSponsors
